
const STORAGE_KEY = 'psychometry-trainer-hub-v1';
const LEGACY_STORAGE_KEYS = [STORAGE_KEY, 'psychometry-training-hub-v1', 'psychometry-training-hub'];
const CORE_POS = ['verb', 'noun', 'adjective', 'adverb'];
const POS_RANK = { verb: 0, noun: 1, adjective: 2, adverb: 3 };
const MATH_PDF_PATH = 'قوانين هندسة- رلى شحادة.pdf';

const defaultState = {
  theme: 'dark',
  activeView: 'home',
  math: { ratings: {}, search: '', topic: 'All', panel: 'cards', currentId: null },
  vocab: { ratings: {}, search: '', category: 'All', panel: 'cards', currentId: null, favorites: {} }
};

const state = loadState();
const mathCards = window.MATH_CARDS || [];
const vocabWords = normalizeVocabDeck(window.VOCAB_WORDS || []);
const mathById = Object.fromEntries(mathCards.map(card => [card.id, card]));
const vocabByWord = Object.fromEntries(vocabWords.map(word => [word.word, word]));
const mathTopics = ['All', ...unique(mathCards.map(card => card.topic))];
const vocabCategories = ['All', ...unique(vocabWords.map(word => word.category))];
const vocabFamilyCount = unique(vocabWords.map(word => word.family || word.word)).length;

const els = {
  views: {
    home: document.getElementById('view-home'),
    math: document.getElementById('view-math'),
    vocab: document.getElementById('view-vocab')
  },
  navButtons: [...document.querySelectorAll('[data-nav]')],
  themeToggle: document.getElementById('themeToggle'),
  homeStats: document.getElementById('homeStats'),
  mathStats: document.getElementById('mathStats'),
  vocabStats: document.getElementById('vocabStats'),
  mathSubnav: [...document.querySelectorAll('[data-math-panel]')],
  vocabSubnav: [...document.querySelectorAll('[data-vocab-panel]')],
  mathPanels: {
    cards: document.getElementById('math-panel-cards'),
    bank: document.getElementById('math-panel-bank'),
    pdf: document.getElementById('math-panel-pdf'),
    drill: document.getElementById('math-panel-drill'),
    weak: document.getElementById('math-panel-weak')
  },
  vocabPanels: {
    cards: document.getElementById('vocab-panel-cards'),
    quiz: document.getElementById('vocab-panel-quiz'),
    weak: document.getElementById('vocab-panel-weak')
  },
  mathSearch: document.getElementById('mathSearch'),
  mathTopicSelect: document.getElementById('mathTopicSelect'),
  mathShuffle: document.getElementById('mathShuffle'),
  mathFlip: document.getElementById('mathFlip'),
  mathFlashcard: document.getElementById('mathFlashcard'),
  mathCardTopic: document.getElementById('mathCardTopic'),
  mathCardFront: document.getElementById('mathCardFront'),
  mathCardBack: document.getElementById('mathCardBack'),
  mathCardExplain: document.getElementById('mathCardExplain'),
  mathCardTrap: document.getElementById('mathCardTrap'),
  mathCardTrapWrap: document.getElementById('mathCardTrapWrap'),
  mathCardHelper: document.getElementById('mathCardHelper'),
  mathDeckProgress: document.getElementById('mathDeckProgress'),
  mathRateButtons: [...document.querySelectorAll('[data-math-rate]')],
  mathBankGrid: document.getElementById('mathBankGrid'),
  mathBankCount: document.getElementById('mathBankCount'),
  mathWeakGrid: document.getElementById('mathWeakGrid'),
  resetMathProgress: document.getElementById('resetMathProgress'),
  mathDrillTopic: document.getElementById('mathDrillTopic'),
  mathDrillLength: document.getElementById('mathDrillLength'),
  startMathDrill: document.getElementById('startMathDrill'),
  mathDrillWrap: document.getElementById('mathDrillWrap'),
  vocabSearch: document.getElementById('vocabSearch'),
  vocabCategorySelect: document.getElementById('vocabCategorySelect'),
  vocabShuffle: document.getElementById('vocabShuffle'),
  vocabFlip: document.getElementById('vocabFlip'),
  vocabFlashcard: document.getElementById('vocabFlashcard'),
  vocabCardCategory: document.getElementById('vocabCardCategory'),
  vocabCardWord: document.getElementById('vocabCardWord'),
  vocabCardYears: document.getElementById('vocabCardYears'),
  vocabCardSimple: document.getElementById('vocabCardSimple'),
  vocabCardPos: document.getElementById('vocabCardPos'),
  vocabCardFamily: document.getElementById('vocabCardFamily'),
  vocabCardArabic: document.getElementById('vocabCardArabic'),
  vocabCardSynonym: document.getElementById('vocabCardSynonym'),
  vocabCardForms: document.getElementById('vocabCardForms'),
  vocabCardSentence: document.getElementById('vocabCardSentence'),
  vocabDeckProgress: document.getElementById('vocabDeckProgress'),
  vocabRateButtons: [...document.querySelectorAll('[data-vocab-rate]')],
  toggleFavorite: document.getElementById('toggleFavorite'),
  vocabQuizCategory: document.getElementById('vocabQuizCategory'),
  vocabQuizLength: document.getElementById('vocabQuizLength'),
  startVocabQuiz: document.getElementById('startVocabQuiz'),
  vocabQuizWrap: document.getElementById('vocabQuizWrap'),
  vocabWeakGrid: document.getElementById('vocabWeakGrid'),
  vocabSavedGrid: document.getElementById('vocabSavedGrid'),
  resetVocabProgress: document.getElementById('resetVocabProgress')
};

let mathFlipped = false;
let vocabFlipped = false;
let currentMathDrill = null;
let currentVocabQuiz = null;

init();

function init() {
  applyTheme();
  bindNavigation();
  bindMathControls();
  bindVocabControls();
  bindMathPdf();
  fillSelect(els.mathTopicSelect, mathTopics, state.math.topic);
  fillSelect(els.mathDrillTopic, mathTopics, state.math.topic);
  fillSelect(els.vocabCategorySelect, vocabCategories, state.vocab.category);
  fillSelect(els.vocabQuizCategory, vocabCategories, state.vocab.category);
  els.mathSearch.value = state.math.search || '';
  els.vocabSearch.value = state.vocab.search || '';
  renderAll();
}

function loadState() {
  try {
    const rawText = readStoredState();
    const raw = rawText ? JSON.parse(rawText) : null;
    if (!raw) return cloneState(defaultState);
    return {
      ...cloneState(defaultState),
      ...raw,
      math: { ...cloneState(defaultState.math), ...(raw.math || {}) },
      vocab: { ...cloneState(defaultState.vocab), ...(raw.vocab || {}) }
    };
  } catch (error) {
    return cloneState(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Keep runtime state even when browser storage is unavailable.
    window.__psychometryFallbackState = JSON.stringify(state);
  }
}

function normalizeVocabDeck(entries) {
  const normalized = entries.map((entry, index) => {
    const fallbackWord = normalizeWord(entry.word) || `term-${index + 1}`;
    const family = normalizeWord(entry.family || entry.group || fallbackWord);
    const fallbackSimple = entry.simple || '';
    const fallbackArabic = entry.arabic || '';
    const fallbackSynonym = entry.synonym || '';
    const rawForms = Array.isArray(entry.forms) && entry.forms.length
      ? entry.forms
      : [{
          pos: entry.partOfSpeech || inferPos(fallbackWord),
          word: fallbackWord,
          simple: fallbackSimple,
          arabic: fallbackArabic,
          synonym: fallbackSynonym
        }];
    const forms = rawForms
      .map(form => ({
        pos: normalizePos(form.pos || entry.partOfSpeech || inferPos(form.word || fallbackWord)),
        word: normalizeWord(form.word || fallbackWord),
        simple: String(form.simple || fallbackSimple || ''),
        arabic: String(form.arabic || fallbackArabic || ''),
        synonym: String(form.synonym || fallbackSynonym || '')
      }))
      .filter(form => !!form.word);

    return {
      ...entry,
      word: normalizeWord(entry.word || forms[0]?.word || family),
      family,
      forms: forms.length ? forms : [{ pos: 'noun', word: family, simple: fallbackSimple, arabic: fallbackArabic, synonym: fallbackSynonym }],
      sentence: entry.sentence || '',
      category: entry.category || 'Frequent psychometric',
      difficulty: entry.difficulty || 'medium',
      sourceYears: entry.sourceYears || []
    };
  });

  const familyFormsMap = new Map();
  normalized.forEach(entry => {
    const list = familyFormsMap.get(entry.family) || [];
    entry.forms.forEach(form => {
      if (!list.some(existing => existing.pos === form.pos && normalizeWord(existing.word) === normalizeWord(form.word))) {
        list.push(form);
      }
    });
    familyFormsMap.set(entry.family, list);
  });

  return normalized.map(entry => {
    const familyForms = ensureCoreForms(entry.family, familyFormsMap.get(entry.family) || entry.forms, entry);
    const preferred = familyForms.find(form => normalizeWord(form.word) === normalizeWord(entry.word))
      || familyForms.find(form => form.pos === 'noun')
      || familyForms[0];
    return {
      ...entry,
      word: entry.word || preferred.word,
      forms: familyForms,
      familyForms,
      simple: entry.simple || preferred.simple || '',
      arabic: entry.arabic || preferred.arabic || '',
      synonym: entry.synonym || preferred.synonym || '',
      partOfSpeech: normalizePos(entry.partOfSpeech || preferred.pos)
    };
  });
}

function bindNavigation() {
  els.navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-nav');
      if (target) {
        state.activeView = target;
        saveState();
        renderViews();
      }
    });
  });
  els.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyTheme();
  });
  els.mathSubnav.forEach(button => {
    button.addEventListener('click', () => {
      state.math.panel = button.getAttribute('data-math-panel');
      saveState();
      renderMathPanels();
    });
  });
  els.vocabSubnav.forEach(button => {
    button.addEventListener('click', () => {
      state.vocab.panel = button.getAttribute('data-vocab-panel');
      saveState();
      renderVocabPanels();
    });
  });
}

function bindMathControls() {
  els.mathSearch.addEventListener('input', event => {
    state.math.search = event.target.value;
    state.math.currentId = null;
    saveState();
    renderMath();
  });
  els.mathTopicSelect.addEventListener('change', event => {
    state.math.topic = event.target.value;
    state.math.currentId = null;
    fillSelect(els.mathDrillTopic, mathTopics, state.math.topic);
    saveState();
    renderMath();
  });
  els.mathShuffle.addEventListener('click', () => {
    state.math.currentId = null;
    mathFlipped = false;
    renderMathFlashcard();
  });
  els.mathFlip.addEventListener('click', () => toggleFlashcard('math'));
  els.mathFlashcard.addEventListener('click', () => toggleFlashcard('math'));
  els.mathFlashcard.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFlashcard('math');
    }
  });
  els.mathRateButtons.forEach(button => {
    button.addEventListener('click', () => {
      const rating = button.getAttribute('data-math-rate');
      const card = currentMathCard();
      if (!card) return;
      updateRating(state.math.ratings, card.id, rating);
      state.math.currentId = null;
      mathFlipped = false;
      saveState();
      renderAll();
    });
  });
  els.resetMathProgress.addEventListener('click', () => {
    if (!confirm('Reset all math progress?')) return;
    state.math.ratings = {};
    state.math.currentId = null;
    currentMathDrill = null;
    mathFlipped = false;
    saveState();
    renderAll();
  });
  els.startMathDrill.addEventListener('click', startMathDrill);
}

function bindVocabControls() {
  els.vocabSearch.addEventListener('input', event => {
    state.vocab.search = event.target.value;
    state.vocab.currentId = null;
    saveState();
    renderVocab();
  });
  els.vocabCategorySelect.addEventListener('change', event => {
    state.vocab.category = event.target.value;
    state.vocab.currentId = null;
    fillSelect(els.vocabQuizCategory, vocabCategories, state.vocab.category);
    saveState();
    renderVocab();
  });
  els.vocabShuffle.addEventListener('click', () => {
    state.vocab.currentId = null;
    vocabFlipped = false;
    renderVocabFlashcard();
  });
  els.vocabFlip.addEventListener('click', () => toggleFlashcard('vocab'));
  els.vocabFlashcard.addEventListener('click', () => toggleFlashcard('vocab'));
  els.vocabFlashcard.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFlashcard('vocab');
    }
  });
  els.vocabRateButtons.forEach(button => {
    button.addEventListener('click', () => {
      const rating = button.getAttribute('data-vocab-rate');
      const word = currentVocabCard();
      if (!word) return;
      updateRating(state.vocab.ratings, word.word, rating);
      state.vocab.currentId = null;
      vocabFlipped = false;
      saveState();
      renderAll();
    });
  });
  els.toggleFavorite.addEventListener('click', () => {
    const word = currentVocabCard();
    if (!word) return;
    const isFav = !!state.vocab.favorites[word.word];
    if (isFav) delete state.vocab.favorites[word.word];
    else state.vocab.favorites[word.word] = true;
    saveState();
    renderVocabFlashcard();
    renderVocabWeak();
    renderHome();
  });
  els.startVocabQuiz.addEventListener('click', startVocabQuiz);
  els.resetVocabProgress.addEventListener('click', () => {
    if (!confirm('Reset all vocabulary progress and saved words?')) return;
    state.vocab.ratings = {};
    state.vocab.favorites = {};
    state.vocab.currentId = null;
    currentVocabQuiz = null;
    vocabFlipped = false;
    saveState();
    renderAll();
  });
}

function renderAll() {
  renderViews();
  renderHome();
  renderMath();
  renderVocab();
}

function renderViews() {
  Object.entries(els.views).forEach(([key, view]) => view.classList.toggle('is-active', key === state.activeView));
  document.querySelectorAll('.nav-pill').forEach(button => button.classList.toggle('is-active', button.getAttribute('data-nav') === state.activeView));
}

function renderHome() {
  const mathMastered = countMastered(mathCards, state.math.ratings);
  const vocabMastered = countMastered(vocabWords, state.vocab.ratings, word => word.word);
  const savedCount = Object.keys(state.vocab.favorites || {}).length;
  const cards = [
    cardStat(`${mathCards.length}`, 'math cards', `${mathMastered} mastered`),
    cardStat(`${vocabWords.length}`, 'vocab cards', `${vocabFamilyCount} families`),
    cardStat(`${vocabMastered}`, 'mastered words', `${savedCount} saved`),
    cardStat(`${savedCount}`, 'saved words', 'ready for a focused review'),
    cardStat(`${countWeak(mathCards, state.math.ratings) + countWeak(vocabWords, state.vocab.ratings, word => word.word)}`, 'weak items', 'study these first')
  ];
  els.homeStats.innerHTML = cards.join('');
}

function renderMath() {
  renderMathStats();
  renderMathPanels();
  renderMathFlashcard();
  renderMathBank();
  renderMathWeak();
  if (currentMathDrill) renderMathDrill();
}

function renderMathStats() {
  const mastered = countMastered(mathCards, state.math.ratings);
  const weak = countWeak(mathCards, state.math.ratings);
  const seen = Object.values(state.math.ratings).filter(entry => sumRatings(entry) > 0).length;
  els.mathStats.innerHTML = [
    cardStat(`${mathCards.length}`, 'cards in deck', `${mathTopics.length - 1} topics`),
    cardStat(`${mastered}`, 'mastered', `${seen} seen so far`),
    cardStat(`${weak}`, 'weak cards', 'review them often')
  ].join('');
}

function renderMathPanels() {
  els.mathSubnav.forEach(button => button.classList.toggle('is-active', button.getAttribute('data-math-panel') === state.math.panel));
  Object.entries(els.mathPanels).forEach(([key, panel]) => panel.classList.toggle('is-active', key === state.math.panel));
}

function bindMathPdf() {
  const pdfHref = encodeURI(MATH_PDF_PATH);
  const openLink = document.getElementById('mathPdfOpen');
  const downloadLink = document.getElementById('mathPdfDownload');
  const frame = document.getElementById('mathPdfFrame');
  if (openLink) openLink.href = pdfHref;
  if (downloadLink) downloadLink.href = pdfHref;
  if (frame) frame.src = pdfHref;
}

function currentMathPool() {
  const search = normalize(state.math.search);
  return mathCards.filter(card => {
    const matchesTopic = state.math.topic === 'All' || card.topic === state.math.topic;
    if (!matchesTopic) return false;
    if (!search) return true;
    return normalize(`${card.front} ${card.back} ${card.explain} ${card.trap} ${card.helper}`).includes(search);
  });
}

function currentMathCard() {
  const pool = currentMathPool();
  if (!pool.length) return null;
  if (state.math.currentId) {
    const existing = pool.find(card => card.id === state.math.currentId);
    if (existing) return existing;
  }
  const next = pickStudyItem(pool, state.math.ratings, card => card.id);
  state.math.currentId = next.id;
  saveState();
  return next;
}

function renderMathFlashcard() {
  const card = currentMathCard();
  if (!card) {
    els.mathCardTopic.textContent = 'No results';
    els.mathCardFront.textContent = 'No card matches your current filters.';
    els.mathCardBack.textContent = '';
    els.mathCardExplain.textContent = '';
    els.mathCardTrap.textContent = '';
    els.mathCardTrapWrap.classList.add('hidden');
    return;
  }
  els.mathFlashcard.classList.toggle('is-flipped', mathFlipped);
  els.mathCardTopic.textContent = card.topic;
  els.mathCardFront.textContent = card.front;
  els.mathCardBack.textContent = card.back;
  els.mathCardExplain.textContent = card.explain;
  els.mathCardTrap.textContent = card.trap || '';
  els.mathCardTrapWrap.classList.toggle('hidden', !card.trap);
  els.mathCardHelper.textContent = card.helper ? `Helper: ${card.helper}` : '';
  renderProgressStack(els.mathDeckProgress, mathTopics.slice(1), mathCards, state.math.ratings, card => card.id);
}

function renderMathBank() {
  const pool = currentMathPool();
  els.mathBankCount.textContent = `${pool.length} cards shown`;
  els.mathBankGrid.innerHTML = pool.map(card => bankCard(card, state.math.ratings[card.id], true)).join('') || '<div class="empty-state">No formulas match this filter.</div>';
}

function renderMathWeak() {
  const weakCards = mathCards
    .map(card => ({ card, mastery: masteryScore(state.math.ratings[card.id]) }))
    .filter(item => sumRatings(state.math.ratings[item.card.id]) > 0)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 18);
  els.mathWeakGrid.innerHTML = weakCards.length
    ? weakCards.map(item => bankCard(item.card, state.math.ratings[item.card.id], true, item.mastery)).join('')
    : '<div class="empty-state">No weak math cards yet. Rate a few cards first.</div>';
}

function renderVocab() {
  renderVocabStats();
  renderVocabPanels();
  renderVocabFlashcard();
  renderVocabWeak();
  if (currentVocabQuiz) renderVocabQuiz();
}

function renderVocabStats() {
  const mastered = countMastered(vocabWords, state.vocab.ratings, word => word.word);
  const weak = countWeak(vocabWords, state.vocab.ratings, word => word.word);
  const favorites = Object.keys(state.vocab.favorites || {}).length;
  els.vocabStats.innerHTML = [
    cardStat(`${vocabWords.length}`, 'word cards', `${vocabFamilyCount} families`),
    cardStat(`${mastered}`, 'mastered cards', `${favorites} saved words`),
    cardStat(`${weak}`, 'weak cards', 'revisit them often')
  ].join('');
}

function renderVocabPanels() {
  els.vocabSubnav.forEach(button => button.classList.toggle('is-active', button.getAttribute('data-vocab-panel') === state.vocab.panel));
  Object.entries(els.vocabPanels).forEach(([key, panel]) => panel.classList.toggle('is-active', key === state.vocab.panel));
}

function currentVocabPool() {
  const search = normalize(state.vocab.search);
  return vocabWords.filter(word => {
    const matchesCategory = state.vocab.category === 'All' || word.category === state.vocab.category;
    if (!matchesCategory) return false;
    if (!search) return true;
    return normalize(vocabSearchText(word)).includes(search);
  });
}

function vocabSearchText(card) {
  const familyText = (card.familyForms || []).map(form => `${form.pos || ''} ${form.word || ''} ${form.simple || ''} ${form.arabic || ''} ${form.synonym || ''}`).join(' ');
  return `${card.word} ${card.family || ''} ${card.partOfSpeech || ''} ${card.simple || ''} ${card.arabic || ''} ${card.synonym || ''} ${card.sentence || ''} ${familyText}`;
}

function currentVocabCard() {
  const pool = currentVocabPool();
  if (!pool.length) return null;
  if (state.vocab.currentId) {
    const existing = pool.find(word => word.word === state.vocab.currentId);
    if (existing) return existing;
  }
  const next = pickStudyItem(pool, state.vocab.ratings, word => word.word);
  state.vocab.currentId = next.word;
  saveState();
  return next;
}

function renderVocabFlashcard() {
  const word = currentVocabCard();
  if (!word) {
    els.vocabCardCategory.textContent = 'No results';
    els.vocabCardWord.textContent = 'No word matches your current filters.';
    els.vocabCardYears.textContent = '';
    els.vocabCardSimple.textContent = '';
    els.vocabCardPos.textContent = '';
    els.vocabCardFamily.textContent = '';
    els.vocabCardArabic.textContent = '';
    els.vocabCardSynonym.textContent = '';
    els.vocabCardSentence.textContent = '';
    els.vocabCardForms.innerHTML = '';
    return;
  }
  els.vocabFlashcard.classList.toggle('is-flipped', vocabFlipped);
  els.vocabCardCategory.textContent = word.category;
  els.vocabCardWord.textContent = word.word;
  els.vocabCardYears.textContent = `${(word.familyForms || word.forms || []).length} forms in this family`;
  els.vocabCardSimple.textContent = word.simple;
  els.vocabCardPos.textContent = formatPos(word.partOfSpeech || 'noun');
  els.vocabCardFamily.textContent = word.family || word.word;
  els.vocabCardArabic.textContent = word.arabic;
  els.vocabCardSynonym.textContent = word.synonym || '—';
  els.vocabCardSentence.textContent = word.sentence;
  const isFav = !!state.vocab.favorites[word.word];
  els.toggleFavorite.textContent = isFav ? '★ Saved word' : '☆ Save word';
  els.vocabCardForms.innerHTML = renderFamilyForms(word);
  renderProgressStack(els.vocabDeckProgress, vocabCategories.slice(1), vocabWords, state.vocab.ratings, word => word.word);
}

function renderVocabWeak() {
  const weak = vocabWords
    .map(word => ({ word, mastery: masteryScore(state.vocab.ratings[word.word]) }))
    .filter(item => sumRatings(state.vocab.ratings[item.word.word]) > 0)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 15);
  els.vocabWeakGrid.innerHTML = weak.length
    ? weak.map(item => vocabCard(item.word, state.vocab.ratings[item.word.word], item.mastery)).join('')
    : '<div class="empty-state">No weak words yet. Rate some cards first.</div>';

  const saved = vocabWords.filter(word => state.vocab.favorites[word.word]);
  els.vocabSavedGrid.innerHTML = saved.length
    ? saved.map(word => vocabCard(word, state.vocab.ratings[word.word])).join('')
    : '<div class="empty-state">No saved words yet.</div>';
}

function applyTheme() {
  document.body.setAttribute('data-theme', state.theme);
  els.themeToggle.textContent = state.theme === 'dark' ? '☾ Dark' : '☀ Light';
}

function toggleFlashcard(kind) {
  if (kind === 'math') {
    mathFlipped = !mathFlipped;
    els.mathFlashcard.classList.toggle('is-flipped', mathFlipped);
  } else {
    vocabFlipped = !vocabFlipped;
    els.vocabFlashcard.classList.toggle('is-flipped', vocabFlipped);
  }
}

function updateRating(bucket, key, rating) {
  bucket[key] = bucket[key] || { knew: 0, almost: 0, missed: 0 };
  bucket[key][rating] += 1;
}

function sumRatings(entry) {
  if (!entry) return 0;
  return (entry.knew || 0) + (entry.almost || 0) + (entry.missed || 0);
}

function masteryScore(entry) {
  if (!entry || !sumRatings(entry)) return 0;
  const seen = sumRatings(entry);
  return Math.round((((entry.knew || 0) * 2 + (entry.almost || 0)) / (seen * 2)) * 100);
}

function countMastered(items, ratings, keyFn = item => item.id) {
  return items.filter(item => {
    const entry = ratings[keyFn(item)];
    return sumRatings(entry) >= 2 && masteryScore(entry) >= 70;
  }).length;
}

function countWeak(items, ratings, keyFn = item => item.id) {
  return items.filter(item => {
    const entry = ratings[keyFn(item)];
    return sumRatings(entry) > 0 && masteryScore(entry) < 55;
  }).length;
}

function pickStudyItem(pool, ratings, keyFn) {
  const unseen = pool.filter(item => !sumRatings(ratings[keyFn(item)]));
  if (unseen.length && Math.random() < 0.42) return sample(unseen);
  const ranked = [...pool].sort((a, b) => {
    const aEntry = ratings[keyFn(a)];
    const bEntry = ratings[keyFn(b)];
    const aSeen = sumRatings(aEntry);
    const bSeen = sumRatings(bEntry);
    const aScore = aSeen ? masteryScore(aEntry) : -10;
    const bScore = bSeen ? masteryScore(bEntry) : -10;
    return aScore - bScore;
  });
  return sample(ranked.slice(0, Math.min(6, ranked.length)));
}

function renderProgressStack(container, labels, items, ratings, keyFn) {
  const rows = labels.map(label => {
    const topicItems = items.filter(item => (item.topic || item.category) === label);
    const mastered = countMastered(topicItems, ratings, keyFn);
    const percent = topicItems.length ? Math.round((mastered / topicItems.length) * 100) : 0;
    return `
      <div class="progress-row">
        <div class="progress-row__head">
          <span>${escapeHtml(label)}</span>
          <span>${mastered}/${topicItems.length}</span>
        </div>
        <div class="progress-bar"><span style="width:${percent}%"></span></div>
      </div>
    `;
  });
  container.innerHTML = rows.join('');
}

function bankCard(card, ratingEntry, rtl = false, forcedMastery = null) {
  const mastery = forcedMastery ?? masteryScore(ratingEntry);
  const seen = sumRatings(ratingEntry);
  return `
    <article class="bank-card ${rtl ? 'rtl-card' : ''}">
      <span class="flashcard__badge">${escapeHtml(card.topic)}</span>
      <h3>${escapeHtml(card.front)}</h3>
      <div class="bank-card__formula ${rtl ? 'rtl-card' : ''}">${escapeHtml(card.back)}</div>
      <p>${escapeHtml(card.explain)}</p>
      ${card.trap ? `<p><strong>Trap:</strong> ${escapeHtml(card.trap)}</p>` : ''}
      <div class="tag-row">
        <span>${seen ? `Mastery ${mastery}%` : 'New card'}</span>
        ${card.helper ? `<span>${escapeHtml(card.helper)}</span>` : ''}
      </div>
    </article>
  `;
}

function vocabCard(word, ratingEntry, forcedMastery = null) {
  const mastery = forcedMastery ?? masteryScore(ratingEntry);
  const seen = sumRatings(ratingEntry);
  return `
    <article class="bank-card">
      <span class="flashcard__badge">${escapeHtml(word.category)}</span>
      <h3>${escapeHtml(word.word)}</h3>
      <p><strong>Part of speech:</strong> ${escapeHtml(formatPos(word.partOfSpeech || 'noun'))}</p>
      <p><strong>Family:</strong> ${escapeHtml(word.family || word.word)}</p>
      <p><strong>Simple meaning:</strong> ${escapeHtml(word.simple)}</p>
      <p><strong>Arabic:</strong> ${escapeHtml(word.arabic)}</p>
      <p><strong>Sentence:</strong> ${escapeHtml(word.sentence)}</p>
      ${word.forms && word.forms.length ? `<div class="family-forms family-forms--compact">${renderFamilyForms(word)}</div>` : ''}
      <div class="tag-row">
        <span>${seen ? `Mastery ${mastery}%` : 'New word'}</span>
        ${word.synonym ? `<span>${escapeHtml(word.synonym)}</span>` : ''}
      </div>
    </article>
  `;
}

function renderFamilyForms(card) {
  const forms = card.familyForms || card.forms || [];
  if (!forms.length) return '';
  return forms.map(form => `
    <article class="family-form">
      <div class="family-form__head">
        <span>${escapeHtml(formatPos(form.pos || 'noun'))}</span>
        <strong>${escapeHtml(form.word)}</strong>
      </div>
      <p>${escapeHtml(form.simple || '')}</p>
      <small>${escapeHtml(form.arabic || '')}</small>
    </article>
  `).join('');
}

function cardStat(value, label, subline) {
  return `
    <article class="progress-card">
      <strong>${escapeHtml(String(value))}</strong>
      <div>${escapeHtml(label)}</div>
      <span>${escapeHtml(subline)}</span>
    </article>
  `;
}

function fillSelect(select, options, currentValue) {
  select.innerHTML = options.map(option => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join('');
  select.value = currentValue && options.includes(currentValue) ? currentValue : options[0];
}

function startMathDrill() {
  const topic = els.mathDrillTopic.value;
  const length = Number(els.mathDrillLength.value);
  const pool = mathCards.filter(card => topic === 'All' || card.topic === topic);
  if (pool.length < 4) {
    els.mathDrillWrap.innerHTML = '<div class="empty-state">Not enough cards in this filter to build a drill.</div>';
    return;
  }
  const selection = shuffle([...pool]).slice(0, Math.min(length, pool.length));
  currentMathDrill = {
    topic,
    questions: selection.map(card => ({
      id: card.id,
      prompt: card.front,
      correct: card.backShort || card.back,
      explain: card.explain,
      trap: card.trap,
      topic: card.topic,
      options: buildMathOptions(card, pool)
    })),
    index: 0,
    answers: []
  };
  renderMathDrill();
}

function buildMathOptions(card, pool) {
  const correct = card.backShort || card.back;
  const source = shuffle(pool.filter(other => other.id !== card.id && (other.backShort || other.back) !== correct));
  const distractors = [];
  for (const item of source) {
    const option = item.backShort || item.back;
    if (!distractors.includes(option)) distractors.push(option);
    if (distractors.length === 3) break;
  }
  return shuffle([correct, ...distractors]).slice(0, 4);
}

function renderMathDrill() {
  if (!currentMathDrill) return;
  const question = currentMathDrill.questions[currentMathDrill.index];
  if (!question) return renderMathDrillResults();
  const answer = currentMathDrill.answers[currentMathDrill.index];
  const feedback = answer ? `
    <div class="quiz-feedback">
      <strong>${answer.correct ? 'Correct.' : 'Not quite.'}</strong>
      <p><strong>Right answer:</strong> ${escapeHtml(question.correct)}</p>
      <p>${escapeHtml(question.explain)}</p>
      ${question.trap ? `<p><strong>Trap:</strong> ${escapeHtml(question.trap)}</p>` : ''}
    </div>` : '';
  els.mathDrillWrap.innerHTML = `
    <article class="quiz-card rtl-card">
      <div class="quiz-meta">
        <span>${escapeHtml(question.topic)}</span>
        <span>Question ${currentMathDrill.index + 1} / ${currentMathDrill.questions.length}</span>
      </div>
      <h3>בחר/י את ההתאמה הנכונה:</h3>
      <p>${escapeHtml(question.prompt)}</p>
      <div class="quiz-options">
        ${question.options.map(option => {
          const className = answer
            ? option === question.correct
              ? 'option-button is-correct'
              : option === answer.selected
                ? 'option-button is-wrong'
                : 'option-button'
            : 'option-button';
          return `<button class="${className}" type="button" ${answer ? 'disabled' : ''} data-math-option="${escapeAttribute(option)}">${escapeHtml(option)}</button>`;
        }).join('')}
      </div>
      ${feedback}
      <div class="quiz-footer">
        <button class="ghost-button" type="button" id="mathDrillExit">End drill</button>
        ${answer ? `<button class="primary-button" type="button" id="mathDrillNext">${currentMathDrill.index + 1 === currentMathDrill.questions.length ? 'See results' : 'Next question'}</button>` : ''}
      </div>
    </article>
  `;
  [...els.mathDrillWrap.querySelectorAll('[data-math-option]')].forEach(button => {
    button.addEventListener('click', () => answerMathQuestion(button.getAttribute('data-math-option')));
  });
  const exit = document.getElementById('mathDrillExit');
  if (exit) exit.addEventListener('click', () => {
    currentMathDrill = null;
    els.mathDrillWrap.innerHTML = '<div class="empty-state">Start a drill to practice formula recognition.</div>';
  });
  const next = document.getElementById('mathDrillNext');
  if (next) next.addEventListener('click', () => {
    currentMathDrill.index += 1;
    renderMathDrill();
  });
}

function answerMathQuestion(selected) {
  const question = currentMathDrill.questions[currentMathDrill.index];
  const correct = selected === question.correct;
  currentMathDrill.answers[currentMathDrill.index] = { selected, correct };
  updateRating(state.math.ratings, question.id, correct ? 'knew' : 'missed');
  saveState();
  renderMathDrill();
  renderMathStats();
}

function renderMathDrillResults() {
  const correctCount = currentMathDrill.answers.filter(answer => answer && answer.correct).length;
  const percent = Math.round((correctCount / currentMathDrill.questions.length) * 100);
  const review = currentMathDrill.questions.map((question, index) => {
    const answer = currentMathDrill.answers[index];
    if (answer && answer.correct) return '';
    return `
      <article class="rtl-card">
        <strong>${escapeHtml(question.prompt)}</strong>
        <p><strong>Right answer:</strong> ${escapeHtml(question.correct)}</p>
        <p>${escapeHtml(question.explain)}</p>
      </article>
    `;
  }).join('');
  els.mathDrillWrap.innerHTML = `
    <article class="quiz-card">
      <h3>Drill complete</h3>
      <p class="quiz-meta">Score: ${correctCount}/${currentMathDrill.questions.length} (${percent}%)</p>
      <div class="quiz-review">${review || '<article><p>No mistakes this time. Nice work.</p></article>'}</div>
      <div class="quiz-footer">
        <button class="ghost-button" type="button" id="mathDrillClose">Close</button>
        <button class="primary-button" type="button" id="mathDrillRestart">Start another drill</button>
      </div>
    </article>
  `;
  document.getElementById('mathDrillClose').addEventListener('click', () => {
    currentMathDrill = null;
    els.mathDrillWrap.innerHTML = '<div class="empty-state">Start a drill to practice formula recognition.</div>';
  });
  document.getElementById('mathDrillRestart').addEventListener('click', startMathDrill);
  renderMathWeak();
}

function startVocabQuiz() {
  const category = els.vocabQuizCategory.value;
  const length = Number(els.vocabQuizLength.value);
  const pool = vocabWords.filter(word => category === 'All' || word.category === category);
  if (pool.length < 4) {
    els.vocabQuizWrap.innerHTML = '<div class="empty-state">Not enough words in this filter to build a quiz.</div>';
    return;
  }
  const selection = shuffle([...pool]).slice(0, Math.min(length, pool.length));
  currentVocabQuiz = {
    category,
    questions: selection.map(word => ({
      word: word.word,
      prompt: word.word,
      correct: word.simple,
      arabic: word.arabic,
      sentence: word.sentence,
      category: word.category,
      options: buildVocabOptions(word, pool)
    })),
    index: 0,
    answers: []
  };
  renderVocabQuiz();
}

function buildVocabOptions(word, pool) {
  const correct = word.simple;
  const source = shuffle(pool.filter(other => other.word !== word.word && other.simple !== correct));
  const distractors = [];
  for (const item of source) {
    if (!distractors.includes(item.simple)) distractors.push(item.simple);
    if (distractors.length === 3) break;
  }
  return shuffle([correct, ...distractors]).slice(0, 4);
}

function renderVocabQuiz() {
  if (!currentVocabQuiz) return;
  const question = currentVocabQuiz.questions[currentVocabQuiz.index];
  if (!question) return renderVocabQuizResults();
  const answer = currentVocabQuiz.answers[currentVocabQuiz.index];
  const feedback = answer ? `
    <div class="quiz-feedback">
      <strong>${answer.correct ? 'Correct.' : 'Not quite.'}</strong>
      <p><strong>Meaning:</strong> ${escapeHtml(question.correct)}</p>
      <p><strong>Arabic:</strong> ${escapeHtml(question.arabic)}</p>
      <p><strong>Sentence:</strong> ${escapeHtml(question.sentence)}</p>
    </div>` : '';
  els.vocabQuizWrap.innerHTML = `
    <article class="quiz-card">
      <div class="quiz-meta">
        <span>${escapeHtml(question.category)}</span>
        <span>Question ${currentVocabQuiz.index + 1} / ${currentVocabQuiz.questions.length}</span>
      </div>
      <h3>Choose the best simple meaning</h3>
      <p><strong>${escapeHtml(question.prompt)}</strong></p>
      <div class="quiz-options">
        ${question.options.map(option => {
          const className = answer
            ? option === question.correct
              ? 'option-button is-correct'
              : option === answer.selected
                ? 'option-button is-wrong'
                : 'option-button'
            : 'option-button';
          return `<button class="${className}" type="button" ${answer ? 'disabled' : ''} data-vocab-option="${escapeAttribute(option)}">${escapeHtml(option)}</button>`;
        }).join('')}
      </div>
      ${feedback}
      <div class="quiz-footer">
        <button class="ghost-button" type="button" id="vocabQuizExit">End quiz</button>
        ${answer ? `<button class="primary-button" type="button" id="vocabQuizNext">${currentVocabQuiz.index + 1 === currentVocabQuiz.questions.length ? 'See results' : 'Next question'}</button>` : ''}
      </div>
    </article>
  `;
  [...els.vocabQuizWrap.querySelectorAll('[data-vocab-option]')].forEach(button => {
    button.addEventListener('click', () => answerVocabQuestion(button.getAttribute('data-vocab-option')));
  });
  const exit = document.getElementById('vocabQuizExit');
  if (exit) exit.addEventListener('click', () => {
    currentVocabQuiz = null;
    els.vocabQuizWrap.innerHTML = '<div class="empty-state">Start a quick quiz to match words and meanings.</div>';
  });
  const next = document.getElementById('vocabQuizNext');
  if (next) next.addEventListener('click', () => {
    currentVocabQuiz.index += 1;
    renderVocabQuiz();
  });
}

function answerVocabQuestion(selected) {
  const question = currentVocabQuiz.questions[currentVocabQuiz.index];
  const correct = selected === question.correct;
  currentVocabQuiz.answers[currentVocabQuiz.index] = { selected, correct };
  updateRating(state.vocab.ratings, question.word, correct ? 'knew' : 'missed');
  saveState();
  renderVocabQuiz();
  renderVocabStats();
}

function renderVocabQuizResults() {
  const correctCount = currentVocabQuiz.answers.filter(answer => answer && answer.correct).length;
  const percent = Math.round((correctCount / currentVocabQuiz.questions.length) * 100);
  const review = currentVocabQuiz.questions.map((question, index) => {
    const answer = currentVocabQuiz.answers[index];
    if (answer && answer.correct) return '';
    return `
      <article>
        <strong>${escapeHtml(question.word)}</strong>
        <p><strong>Meaning:</strong> ${escapeHtml(question.correct)}</p>
        <p><strong>Arabic:</strong> ${escapeHtml(question.arabic)}</p>
      </article>
    `;
  }).join('');
  els.vocabQuizWrap.innerHTML = `
    <article class="quiz-card">
      <h3>Quiz complete</h3>
      <p class="quiz-meta">Score: ${correctCount}/${currentVocabQuiz.questions.length} (${percent}%)</p>
      <div class="quiz-review">${review || '<article><p>No mistakes this time. Great job.</p></article>'}</div>
      <div class="quiz-footer">
        <button class="ghost-button" type="button" id="vocabQuizClose">Close</button>
        <button class="primary-button" type="button" id="vocabQuizRestart">Start another quiz</button>
      </div>
    </article>
  `;
  document.getElementById('vocabQuizClose').addEventListener('click', () => {
    currentVocabQuiz = null;
    els.vocabQuizWrap.innerHTML = '<div class="empty-state">Start a quick quiz to match words and meanings.</div>';
  });
  document.getElementById('vocabQuizRestart').addEventListener('click', startVocabQuiz);
  renderVocabWeak();
}

function unique(items) {
  return [...new Set(items)];
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(value) {
  return String(value || '').toLowerCase().trim();
}

function readStoredState() {
  for (const key of LEGACY_STORAGE_KEYS) {
    const value = localStorage.getItem(key);
    if (value) return value;
  }
  return window.__psychometryFallbackState || null;
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeWord(value) {
  return String(value || '').trim().toLowerCase();
}

function normalizePos(value) {
  const raw = normalizeWord(value);
  if (CORE_POS.includes(raw)) return raw;
  if (raw === 'adj') return 'adjective';
  if (raw === 'adv') return 'adverb';
  if (raw === 'word') return 'noun';
  return inferPos(raw);
}

function inferPos(word) {
  const value = normalizeWord(word);
  if (!value) return 'noun';
  if (value.endsWith('ly')) return 'adverb';
  if (/(tion|sion|ment|ness|ity|ance|ence|ship|ism|er|or)$/.test(value)) return 'noun';
  if (/(ive|al|ful|less|ous|able|ible|ic|ary|ent|ant)$/.test(value)) return 'adjective';
  if (/(ed|ing|ize|ise|fy)$/.test(value)) return 'verb';
  return 'noun';
}

function ensureCoreForms(family, forms, entry) {
  const fallback = forms[0] || {
    pos: 'noun',
    word: normalizeWord(entry.word || family),
    simple: entry.simple || '',
    arabic: entry.arabic || '',
    synonym: entry.synonym || ''
  };
  const byPos = new Map();
  forms.forEach(form => {
    const pos = normalizePos(form.pos);
    if (!byPos.has(pos)) {
      byPos.set(pos, {
        ...form,
        pos,
        word: normalizeWord(form.word || fallback.word),
        simple: form.simple || fallback.simple || '',
        arabic: form.arabic || fallback.arabic || '',
        synonym: form.synonym || fallback.synonym || ''
      });
    }
  });

  CORE_POS.forEach(pos => {
    if (!byPos.has(pos)) {
      byPos.set(pos, {
        pos,
        word: pos === 'adverb' ? `${normalizeWord(family)}ly` : normalizeWord(family),
        simple: fallback.simple || `Core ${pos} form of ${family}`,
        arabic: fallback.arabic || 'غير متوفر',
        synonym: fallback.synonym || ''
      });
    }
  });

  return [...byPos.values()].sort((a, b) => (POS_RANK[a.pos] ?? 99) - (POS_RANK[b.pos] ?? 99));
}

function formatPos(value) {
  const pos = normalizePos(value);
  return pos.charAt(0).toUpperCase() + pos.slice(1);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, '&#39;');
}
