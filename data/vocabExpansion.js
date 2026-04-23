const VOCAB_FAMILIES = [
  {
    family: 'analyze',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The team analyzed the data before writing the report.',
    forms: [
      { pos: 'verb', word: 'analyze', simple: 'to examine carefully', arabic: 'يحلل', synonym: 'examine' },
      { pos: 'noun', word: 'analysis', simple: 'careful examination', arabic: 'تحليل', synonym: 'examination' },
      { pos: 'adjective', word: 'analytical', simple: 'careful and logical', arabic: 'تحليلي / منطقي', synonym: 'logical' },
      { pos: 'adverb', word: 'analytically', simple: 'in a careful and logical way', arabic: 'بشكل تحليلي', synonym: 'logically' },
      { pos: 'noun', word: 'analyzer', simple: 'a person or tool that analyzes', arabic: 'محلل', synonym: 'examiner' }
    ]
  },
  {
    family: 'assess',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The teacher assessed the answers quickly and fairly.',
    forms: [
      { pos: 'verb', word: 'assess', simple: 'to judge the value or quality of something', arabic: 'يقيّم / يقدّر', synonym: 'evaluate' },
      { pos: 'noun', word: 'assessment', simple: 'a judgment or evaluation', arabic: 'تقييم', synonym: 'evaluation' },
      { pos: 'adjective', word: 'assessable', simple: 'able to be evaluated', arabic: 'قابل للتقييم', synonym: 'measurable' },
      { pos: 'adjective', word: 'assessed', simple: 'judged or evaluated already', arabic: 'مُقيَّم', synonym: 'evaluated' },
      { pos: 'noun', word: 'reassessment', simple: 'a second or renewed assessment', arabic: 'إعادة تقييم', synonym: 'review' }
    ]
  },
  {
    family: 'attribute',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'Researchers attribute the change to better training.',
    forms: [
      { pos: 'verb', word: 'attribute', simple: 'to say something is caused by or belongs to someone', arabic: 'يعزو / ينسب', synonym: 'ascribe' },
      { pos: 'noun', word: 'attribution', simple: 'the act of assigning a cause or source', arabic: 'نِسبة / إرجاع السبب', synonym: 'ascription' },
      { pos: 'adjective', word: 'attributable', simple: 'able to be explained by something', arabic: 'منسوب إلى / قابل للإرجاع', synonym: 'explainable' },
      { pos: 'adjective', word: 'attributive', simple: 'used to describe a quality that belongs to something', arabic: 'وصفي / إسنادي', synonym: 'descriptive' },
      { pos: 'adverb', word: 'attributively', simple: 'in a way that describes or assigns a quality', arabic: 'بأسلوب إسنادي', synonym: 'descriptively' }
    ]
  },
  {
    family: 'compare',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'You should compare the two passages before choosing an answer.',
    forms: [
      { pos: 'verb', word: 'compare', simple: 'to look at two things to find similarities or differences', arabic: 'يقارن', synonym: 'contrast' },
      { pos: 'noun', word: 'comparison', simple: 'an act of comparing', arabic: 'مقارنة', synonym: 'contrast' },
      { pos: 'adjective', word: 'comparable', simple: 'similar enough to be compared', arabic: 'قابل للمقارنة / مماثل', synonym: 'similar' },
      { pos: 'adverb', word: 'comparatively', simple: 'when judged against something else', arabic: 'نسبيا / بالمقارنة', synonym: 'relatively' },
      { pos: 'noun', word: 'comparator', simple: 'something that is used to compare', arabic: 'أداة مقارنة / مُقارن', synonym: 'benchmark' }
    ]
  },
  {
    family: 'conclude',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'After the evidence was reviewed, they concluded the claim was weak.',
    forms: [
      { pos: 'verb', word: 'conclude', simple: 'to decide after thinking or proving', arabic: 'يستنتج / يخلص إلى', synonym: 'decide' },
      { pos: 'noun', word: 'conclusion', simple: 'a final decision or result', arabic: 'استنتاج / نتيجة نهائية', synonym: 'result' },
      { pos: 'adjective', word: 'conclusive', simple: 'so strong that it settles the issue', arabic: 'حاسم / قاطع', synonym: 'decisive' },
      { pos: 'adverb', word: 'conclusively', simple: 'in a way that settles the issue', arabic: 'بشكل حاسم', synonym: 'decisively' },
      { pos: 'noun', word: 'conclusiveness', simple: 'the quality of being conclusive', arabic: 'حسم / قوة الاستنتاج', synonym: 'decisiveness' }
    ]
  },
  {
    family: 'consist',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The list consists of only the key ideas.',
    forms: [
      { pos: 'verb', word: 'consist', simple: 'to be made up of', arabic: 'يتكون من', synonym: 'comprise' },
      { pos: 'noun', word: 'consistency', simple: 'steady sameness or agreement', arabic: 'اتساق / ثبات', synonym: 'uniformity' },
      { pos: 'adjective', word: 'consistent', simple: 'not changing or contradicting itself', arabic: 'متسق / منسجم', synonym: 'coherent' },
      { pos: 'adverb', word: 'consistently', simple: 'in a steady and repeated way', arabic: 'باستمرار / بثبات', synonym: 'steadily' },
      { pos: 'noun', word: 'inconsistency', simple: 'a lack of consistency', arabic: 'عدم اتساق', synonym: 'contradiction' }
    ]
  },
  {
    family: 'contradict',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The second paragraph seemed to contradict the first one.',
    forms: [
      { pos: 'verb', word: 'contradict', simple: 'to say the opposite of something else', arabic: 'يناقض / يعارض', synonym: 'oppose' },
      { pos: 'noun', word: 'contradiction', simple: 'a statement or situation that opposes another', arabic: 'تناقض', synonym: 'conflict' },
      { pos: 'adjective', word: 'contradictory', simple: 'showing contradiction', arabic: 'متناقض', synonym: 'conflicting' },
      { pos: 'adverb', word: 'contradictorily', simple: 'in a contradictory way', arabic: 'بشكل متناقض', synonym: 'conflictingly' },
      { pos: 'noun', word: 'contradistinction', simple: 'a clear contrast or opposition', arabic: 'تباين / تعارض', synonym: 'contrast' }
    ]
  },
  {
    family: 'determine',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The test determines whether the answer is correct.',
    forms: [
      { pos: 'verb', word: 'determine', simple: 'to decide or establish exactly', arabic: 'يحدد / يقرر', synonym: 'establish' },
      { pos: 'noun', word: 'determination', simple: 'firm decision or persistence', arabic: 'تصميم / إصرار', synonym: 'resolve' },
      { pos: 'adjective', word: 'determined', simple: 'firm and decided', arabic: 'مصمم / حازم', synonym: 'resolute' },
      { pos: 'adjective', word: 'determinative', simple: 'deciding the outcome', arabic: 'حاسم / محدد', synonym: 'decisive' },
      { pos: 'adverb', word: 'determinately', simple: 'in a firm or definite way', arabic: 'بحزم / بشكل محدد', synonym: 'definitely' }
    ]
  },
  {
    family: 'distinguish',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'Good readers distinguish fact from opinion.',
    forms: [
      { pos: 'verb', word: 'distinguish', simple: 'to notice the difference between things', arabic: 'يميز', synonym: 'differentiate' },
      { pos: 'noun', word: 'distinction', simple: 'a clear difference or separation', arabic: 'تمييز / فرق', synonym: 'difference' },
      { pos: 'adjective', word: 'distinctive', simple: 'easy to recognize because it is special', arabic: 'مميز / فريد بوضوح', synonym: 'characteristic' },
      { pos: 'adverb', word: 'distinctively', simple: 'in a way that is clearly different', arabic: 'بشكل مميز', synonym: 'uniquely' },
      { pos: 'adjective', word: 'distinguishable', simple: 'able to be told apart', arabic: 'قابل للتمييز', synonym: 'recognizable' }
    ]
  },
  {
    family: 'evaluate',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The teacher evaluated the short essay carefully.',
    forms: [
      { pos: 'verb', word: 'evaluate', simple: 'to judge or assess the value of something', arabic: 'يقيّم', synonym: 'assess' },
      { pos: 'noun', word: 'evaluation', simple: 'the act of judging value or quality', arabic: 'تقييم', synonym: 'assessment' },
      { pos: 'adjective', word: 'evaluative', simple: 'used for evaluation', arabic: 'تقييمي', synonym: 'judgmental' },
      { pos: 'adverb', word: 'evaluatively', simple: 'in a judging or evaluating way', arabic: 'بشكل تقييمي', synonym: 'judgmentally' },
      { pos: 'noun', word: 'evaluator', simple: 'a person who evaluates', arabic: 'مُقَيِّم', synonym: 'assessor' }
    ]
  },
  {
    family: 'explain',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'The guide explained the rule in simple language.',
    forms: [
      { pos: 'verb', word: 'explain', simple: 'to make something clear', arabic: 'يشرح', synonym: 'clarify' },
      { pos: 'noun', word: 'explanation', simple: 'a statement that makes something clear', arabic: 'شرح / تفسير', synonym: 'clarification' },
      { pos: 'adjective', word: 'explanatory', simple: 'helping to explain', arabic: 'تفسيري / شارح', synonym: 'clarifying' },
      { pos: 'adverb', word: 'explanatorily', simple: 'in a way that explains', arabic: 'بشكل تفسيري', synonym: 'clearly' },
      { pos: 'noun', word: 'explication', simple: 'a detailed explanation', arabic: 'تفسير مفصل', synonym: 'interpretation' }
    ]
  },
  {
    family: 'imply',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'His comment implied that the plan might change.',
    forms: [
      { pos: 'verb', word: 'imply', simple: 'to suggest something indirectly', arabic: 'يوحي / يدل بشكل غير مباشر', synonym: 'suggest' },
      { pos: 'noun', word: 'implication', simple: 'an indirect meaning or result', arabic: 'دلالة / نتيجة ضمنية', synonym: 'suggestion' },
      { pos: 'adjective', word: 'implicit', simple: 'understood but not directly stated', arabic: 'ضمني / غير مصرح به', synonym: 'inferred' },
      { pos: 'adverb', word: 'implicitly', simple: 'in an indirect or understood way', arabic: 'ضمنا / بشكل غير مباشر', synonym: 'indirectly' },
      { pos: 'noun', word: 'implicitness', simple: 'the quality of being implicit', arabic: 'ضمنية / غير مباشرة', synonym: 'indirectness' }
    ]
  },
  {
    family: 'infer',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'You can infer the meaning from the context.',
    forms: [
      { pos: 'verb', word: 'infer', simple: 'to reach a conclusion from clues', arabic: 'يستنتج', synonym: 'deduce' },
      { pos: 'noun', word: 'inference', simple: 'a conclusion based on evidence', arabic: 'استنتاج', synonym: 'deduction' },
      { pos: 'adjective', word: 'inferential', simple: 'based on inference', arabic: 'استدلالي', synonym: 'deductive' },
      { pos: 'adverb', word: 'inferentially', simple: 'by inference', arabic: 'استدلاليا', synonym: 'deductively' },
      { pos: 'noun', word: 'inferral', simple: 'the act of inferring', arabic: 'الاستدلال', synonym: 'deduction' }
    ]
  },
  {
    family: 'indicate',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The results indicate a clear pattern.',
    forms: [
      { pos: 'verb', word: 'indicate', simple: 'to show or point to something', arabic: 'يشير إلى / يدل على', synonym: 'show' },
      { pos: 'noun', word: 'indication', simple: 'a sign or hint', arabic: 'إشارة / دلالة', synonym: 'sign' },
      { pos: 'adjective', word: 'indicative', simple: 'showing or suggesting something', arabic: 'دال / إشارِي', synonym: 'suggestive' },
      { pos: 'adverb', word: 'indicatively', simple: 'in a way that indicates', arabic: 'بشكل دال', synonym: 'suggestively' },
      { pos: 'noun', word: 'indicator', simple: 'something that shows a state or condition', arabic: 'مؤشر', synonym: 'sign' }
    ]
  },
  {
    family: 'justify',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'There was no reason to justify the delay.',
    forms: [
      { pos: 'verb', word: 'justify', simple: 'to prove that something is right or fair', arabic: 'يبرر / يثبت صحة', synonym: 'defend' },
      { pos: 'noun', word: 'justification', simple: 'a good reason for something', arabic: 'تبرير / مسوّغ', synonym: 'reason' },
      { pos: 'adjective', word: 'justifiable', simple: 'able to be defended as right', arabic: 'مبرر / قابل للدفاع عنه', synonym: 'defensible' },
      { pos: 'adverb', word: 'justifiably', simple: 'in a way that can be defended as right', arabic: 'بمبرر / بحق', synonym: 'reasonably' },
      { pos: 'adjective', word: 'justified', simple: 'shown to be right', arabic: 'مُبرَّر / مُثبت', synonym: 'defended' }
    ]
  },
  {
    family: 'perceive',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'People perceive the same event in different ways.',
    forms: [
      { pos: 'verb', word: 'perceive', simple: 'to notice or understand', arabic: 'يدرك / يتصور', synonym: 'notice' },
      { pos: 'noun', word: 'perception', simple: 'the way something is noticed or understood', arabic: 'إدراك / تصور', synonym: 'view' },
      { pos: 'adjective', word: 'perceptive', simple: 'quick to notice and understand', arabic: 'ثاقب الإدراك / مُدرك', synonym: 'insightful' },
      { pos: 'adverb', word: 'perceptively', simple: 'in a quick and insightful way', arabic: 'بفطنة / بذكاء إدراكي', synonym: 'insightfully' },
      { pos: 'adjective', word: 'perceptual', simple: 'related to perception', arabic: 'إدراكي', synonym: 'sensory' }
    ]
  },
  {
    family: 'predict',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The graph helps predict the next result.',
    forms: [
      { pos: 'verb', word: 'predict', simple: 'to say what will happen before it happens', arabic: 'يتنبأ / يتوقع', synonym: 'forecast' },
      { pos: 'noun', word: 'prediction', simple: 'a statement about the future', arabic: 'تنبؤ / توقع', synonym: 'forecast' },
      { pos: 'adjective', word: 'predictable', simple: 'easy to predict', arabic: 'قابل للتوقع', synonym: 'foreseeable' },
      { pos: 'adverb', word: 'predictably', simple: 'in a way that can be predicted', arabic: 'بشكل متوقع', synonym: 'foreseeably' },
      { pos: 'noun', word: 'predictor', simple: 'something that helps predict an outcome', arabic: 'مؤشر / متنبئ', synonym: 'indicator' }
    ]
  },
  {
    family: 'rely',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'You can rely on a reliable source.',
    forms: [
      { pos: 'verb', word: 'rely', simple: 'to depend on', arabic: 'يعتمد على', synonym: 'depend' },
      { pos: 'adjective', word: 'reliable', simple: 'trustworthy and dependable', arabic: 'موثوق / يعتمد عليه', synonym: 'dependable' },
      { pos: 'noun', word: 'reliability', simple: 'the quality of being reliable', arabic: 'موثوقية / اعتماد', synonym: 'dependability' },
      { pos: 'adverb', word: 'reliably', simple: 'in a trustworthy way', arabic: 'بموثوقية', synonym: 'dependably' },
      { pos: 'noun', word: 'reliance', simple: 'dependence on someone or something', arabic: 'اعتماد', synonym: 'dependence' }
    ]
  },
  {
    family: 'valid',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The test had to be valid before it could be trusted.',
    forms: [
      { pos: 'adjective', word: 'valid', simple: 'logically or officially acceptable', arabic: 'صحيح / صالح', synonym: 'sound' },
      { pos: 'noun', word: 'validity', simple: 'the quality of being valid', arabic: 'صحة / صلاحية', synonym: 'soundness' },
      { pos: 'verb', word: 'validate', simple: 'to prove or confirm as correct', arabic: 'يُثبت صحة / يَتحقق', synonym: 'confirm' },
      { pos: 'noun', word: 'validation', simple: 'the act of proving or confirming', arabic: 'تثبيت / تحقق', synonym: 'confirmation' },
      { pos: 'adverb', word: 'validly', simple: 'in a way that is logically or officially correct', arabic: 'بصورة صحيحة', synonym: 'properly' }
    ]
  },
  {
    family: 'clear',
    category: 'Frequent psychometric',
    difficulty: 'easy',
    sentence: 'The explanation made the rule clear.',
    forms: [
      { pos: 'adjective', word: 'clear', simple: 'easy to understand or see', arabic: 'واضح', synonym: 'obvious' },
      { pos: 'noun', word: 'clarity', simple: 'the quality of being clear', arabic: 'وضوح', synonym: 'lucidity' },
      { pos: 'verb', word: 'clarify', simple: 'to make something clear', arabic: 'يوضح / يشرح', synonym: 'explain' },
      { pos: 'noun', word: 'clarification', simple: 'a statement that makes something clearer', arabic: 'توضيح', synonym: 'explanation' },
      { pos: 'adverb', word: 'clearly', simple: 'in an easy-to-understand way', arabic: 'بوضوح', synonym: 'obviously' }
    ]
  },
  {
    family: 'motive',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The detective looked for the motive behind the crime.',
    forms: [
      { pos: 'noun', word: 'motive', simple: 'the reason someone acts', arabic: 'دافع', synonym: 'reason' },
      { pos: 'noun', word: 'motivation', simple: 'the drive to act or achieve', arabic: 'تحفيز / دافعية', synonym: 'drive' },
      { pos: 'verb', word: 'motivate', simple: 'to give someone a reason or drive', arabic: 'يحفز', synonym: 'encourage' },
      { pos: 'adjective', word: 'motivated', simple: 'having a strong reason to act', arabic: 'متحفز / مدفوع', synonym: 'driven' },
      { pos: 'adjective', word: 'motivational', simple: 'designed to encourage action', arabic: 'تحفيزي', synonym: 'inspiring' }
    ]
  },
  {
    family: 'mechanism',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The article explains the mechanism behind the effect.',
    forms: [
      { pos: 'noun', word: 'mechanism', simple: 'the way something works', arabic: 'آلية / ميكانيزم', synonym: 'process' },
      { pos: 'adjective', word: 'mechanical', simple: 'related to machines or fixed processes', arabic: 'ميكانيكي / آلي', synonym: 'automatic' },
      { pos: 'adverb', word: 'mechanically', simple: 'in a machine-like or automatic way', arabic: 'آليا / ميكانيكيا', synonym: 'automatically' },
      { pos: 'verb', word: 'mechanize', simple: 'to make something work by machine', arabic: 'يُميكن / يؤتمت', synonym: 'automate' },
      { pos: 'noun', word: 'mechanization', simple: 'the process of making work machine-based', arabic: 'أتمتة / ميكنة', synonym: 'automation' }
    ]
  },
  {
    family: 'promote',
    category: 'Civic & legal',
    difficulty: 'medium',
    sentence: 'The policy was designed to promote fairness.',
    forms: [
      { pos: 'verb', word: 'promote', simple: 'to help something grow or happen', arabic: 'يعزز / يروّج', synonym: 'advance' },
      { pos: 'noun', word: 'promotion', simple: 'an act of raising status or encouraging growth', arabic: 'ترقية / ترويج', synonym: 'advancement' },
      { pos: 'adjective', word: 'promotional', simple: 'used for promotion or advertising', arabic: 'ترويجي', synonym: 'advertising' },
      { pos: 'noun', word: 'promoter', simple: 'a person who promotes something', arabic: 'مروج / ناشر', synonym: 'supporter' },
      { pos: 'adjective', word: 'promotable', simple: 'able to be promoted', arabic: 'قابل للترقية', synonym: 'advancable' }
    ]
  },
  {
    family: 'restrict',
    category: 'Civic & legal',
    difficulty: 'medium',
    sentence: 'The new rule restricts access to the building.',
    forms: [
      { pos: 'verb', word: 'restrict', simple: 'to limit or control', arabic: 'يقيّد / يحدّ من', synonym: 'limit' },
      { pos: 'noun', word: 'restriction', simple: 'a limit or rule that controls something', arabic: 'تقييد / قيد', synonym: 'limitation' },
      { pos: 'adjective', word: 'restrictive', simple: 'limiting what people can do', arabic: 'تقييدي / محدود', synonym: 'limiting' },
      { pos: 'adverb', word: 'restrictively', simple: 'in a limiting way', arabic: 'بشكل تقييدي', synonym: 'limitingly' },
      { pos: 'adjective', word: 'restricted', simple: 'limited or controlled', arabic: 'مقيد / محصور', synonym: 'limited' }
    ]
  },
  {
    family: 'resolve',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The team resolved the problem before the deadline.',
    forms: [
      { pos: 'verb', word: 'resolve', simple: 'to solve or decide firmly', arabic: 'يحُلّ / يقرر بحزم', synonym: 'solve' },
      { pos: 'noun', word: 'resolution', simple: 'a firm decision or a solution', arabic: 'حل / قرار حازم', synonym: 'solution' },
      { pos: 'adjective', word: 'resolute', simple: 'firm and determined', arabic: 'حازم / ثابت', synonym: 'determined' },
      { pos: 'adverb', word: 'resolutely', simple: 'in a firm and determined way', arabic: 'بحزم', synonym: 'firmly' },
      { pos: 'adjective', word: 'resolvable', simple: 'able to be solved', arabic: 'قابل للحل', synonym: 'solvable' }
    ]
  },
  {
    family: 'support',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'The data support the writer’s main claim.',
    forms: [
      { pos: 'verb', word: 'support', simple: 'to help or prove something', arabic: 'يدعم / يؤيد', synonym: 'back' },
      { pos: 'noun', word: 'supporter', simple: 'a person who backs a person or idea', arabic: 'مؤيد / داعم', synonym: 'advocate' },
      { pos: 'adjective', word: 'supportive', simple: 'helpful and encouraging', arabic: 'داعم / مؤازر', synonym: 'encouraging' },
      { pos: 'adverb', word: 'supportively', simple: 'in a helpful and encouraging way', arabic: 'بدعم / بطريقة مشجعة', synonym: 'encouragingly' },
      { pos: 'adjective', word: 'supported', simple: 'given help or proof', arabic: 'مدعوم', synonym: 'backed' }
    ]
  },
  {
    family: 'vary',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The answers vary from one group to another.',
    forms: [
      { pos: 'verb', word: 'vary', simple: 'to change or differ', arabic: 'يختلف / يتنوع', synonym: 'differ' },
      { pos: 'noun', word: 'variation', simple: 'a change or difference', arabic: 'تفاوت / تنوع', synonym: 'difference' },
      { pos: 'adjective', word: 'variable', simple: 'likely to change', arabic: 'متغير / متبدل', synonym: 'changeable' },
      { pos: 'adverb', word: 'variably', simple: 'in different ways or amounts', arabic: 'بشكل متغير', synonym: 'differently' },
      { pos: 'noun', word: 'variability', simple: 'the quality of being variable', arabic: 'قابلية للتغير', synonym: 'changeability' }
    ]
  },
  {
    family: 'interpret',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'The students interpreted the graph in different ways.',
    forms: [
      { pos: 'verb', word: 'interpret', simple: 'to explain the meaning of something', arabic: 'يفسر / يشرح', synonym: 'explain' },
      { pos: 'noun', word: 'interpretation', simple: 'an explanation or understanding of something', arabic: 'تفسير', synonym: 'explanation' },
      { pos: 'adjective', word: 'interpretive', simple: 'related to interpretation', arabic: 'تفسيري', synonym: 'explanatory' },
      { pos: 'adverb', word: 'interpretively', simple: 'in an interpretive way', arabic: 'تفسيريًا', synonym: 'explanatorily' },
      { pos: 'noun', word: 'interpreter', simple: 'a person who interprets', arabic: 'مترجم شفهي / مفسر', synonym: 'translator' }
    ]
  },
  {
    family: 'identify',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'The teacher identified the main mistake immediately.',
    forms: [
      { pos: 'verb', word: 'identify', simple: 'to recognize and name', arabic: 'يحدد / يتعرف على', synonym: 'recognize' },
      { pos: 'noun', word: 'identification', simple: 'the act of identifying', arabic: 'تحديد / تعريف الهوية', synonym: 'recognition' },
      { pos: 'adjective', word: 'identifiable', simple: 'able to be recognized', arabic: 'قابل للتحديد', synonym: 'recognizable' },
      { pos: 'adverb', word: 'identifiably', simple: 'in a way that can be recognized', arabic: 'بشكل يمكن التعرف عليه', synonym: 'recognizably' },
      { pos: 'noun', word: 'identifier', simple: 'something that helps identify', arabic: 'معرِّف / علامة تعريف', synonym: 'label' }
    ]
  },
  {
    family: 'illustrate',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'The chart illustrates the trend very clearly.',
    forms: [
      { pos: 'verb', word: 'illustrate', simple: 'to explain with an example or picture', arabic: 'يوضح / يشرح بالتصوير', synonym: 'demonstrate' },
      { pos: 'noun', word: 'illustration', simple: 'an example or picture that explains', arabic: 'رسم توضيحي / مثال', synonym: 'example' },
      { pos: 'adjective', word: 'illustrative', simple: 'helping explain something', arabic: 'توضيحي / مثالي', synonym: 'demonstrative' },
      { pos: 'adverb', word: 'illustratively', simple: 'in an illustrative way', arabic: 'توضيحيًا', synonym: 'demonstratively' },
      { pos: 'noun', word: 'illustrator', simple: 'a person who makes illustrations', arabic: 'رسام توضيحي', synonym: 'artist' }
    ]
  },
  {
    family: 'emphasize',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The speaker emphasized the final rule twice.',
    forms: [
      { pos: 'verb', word: 'emphasize', simple: 'to give special importance to', arabic: 'يؤكد / يبرز', synonym: 'stress' },
      { pos: 'noun', word: 'emphasis', simple: 'special importance or stress', arabic: 'تأكيد / تشديد', synonym: 'stress' },
      { pos: 'adjective', word: 'emphatic', simple: 'expressing importance very clearly', arabic: 'مؤكد / شديد الوضوح', synonym: 'forceful' },
      { pos: 'adverb', word: 'emphatically', simple: 'in a forceful way', arabic: 'بشكل مؤكد', synonym: 'forcefully' },
      { pos: 'adjective', word: 'emphasized', simple: 'given special importance', arabic: 'مؤكد عليه', synonym: 'highlighted' }
    ]
  },
  {
    family: 'hesitate',
    category: 'Analogies',
    difficulty: 'easy',
    sentence: 'She hesitated before choosing an answer.',
    forms: [
      { pos: 'verb', word: 'hesitate', simple: 'to pause because you are unsure', arabic: 'يتردد', synonym: 'pause' },
      { pos: 'noun', word: 'hesitation', simple: 'a pause caused by uncertainty', arabic: 'تردد / تروٍّ', synonym: 'pause' },
      { pos: 'adjective', word: 'hesitant', simple: 'showing uncertainty or delay', arabic: 'متردد', synonym: 'uncertain' },
      { pos: 'adverb', word: 'hesitantly', simple: 'in a hesitant way', arabic: 'بتردد', synonym: 'uncertainly' },
      { pos: 'noun', word: 'hesitance', simple: 'the quality of hesitating', arabic: 'تردد', synonym: 'uncertainty' }
    ]
  },
  {
    family: 'participate',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'Students participate more when the task is clear.',
    forms: [
      { pos: 'verb', word: 'participate', simple: 'to take part', arabic: 'يشارك', synonym: 'take part' },
      { pos: 'noun', word: 'participation', simple: 'taking part in an activity', arabic: 'مشاركة', synonym: 'involvement' },
      { pos: 'adjective', word: 'participatory', simple: 'involving participation', arabic: 'تشاركي', synonym: 'interactive' },
      { pos: 'noun', word: 'participant', simple: 'a person who takes part', arabic: 'مشارك', synonym: 'member' },
      { pos: 'adverb', word: 'participatively', simple: 'in a participatory way', arabic: 'بشكل تشاركي', synonym: 'actively' }
    ]
  },
  {
    family: 'maintain',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'They maintained the original schedule despite the delay.',
    forms: [
      { pos: 'verb', word: 'maintain', simple: 'to keep something in the same state', arabic: 'يحافظ على / يبقي', synonym: 'preserve' },
      { pos: 'noun', word: 'maintenance', simple: 'the act of keeping something working', arabic: 'صيانة / محافظة', synonym: 'upkeep' },
      { pos: 'adjective', word: 'maintained', simple: 'kept or supported', arabic: 'مُحافَظ عليه', synonym: 'kept' },
      { pos: 'adjective', word: 'maintainable', simple: 'able to be kept or supported', arabic: 'قابل للمحافظة عليه', synonym: 'sustainable' },
      { pos: 'noun', word: 'maintainability', simple: 'the quality of being maintainable', arabic: 'قابلية الصيانة / الاستمرارية', synonym: 'sustainability' }
    ]
  },
  {
    family: 'permit',
    category: 'Civic & legal',
    difficulty: 'easy',
    sentence: 'The rule permits only one attempt.',
    forms: [
      { pos: 'verb', word: 'permit', simple: 'to allow', arabic: 'يسمح', synonym: 'allow' },
      { pos: 'noun', word: 'permission', simple: 'official or personal approval', arabic: 'إذن / سماح', synonym: 'approval' },
      { pos: 'adjective', word: 'permissible', simple: 'allowed by rules', arabic: 'مسموح', synonym: 'allowed' },
      { pos: 'adverb', word: 'permissibly', simple: 'in an allowed way', arabic: 'بشكل مسموح', synonym: 'lawfully' },
      { pos: 'noun', word: 'permissibility', simple: 'the quality of being permissible', arabic: 'مشروعية / سماحية', synonym: 'allowability' }
    ]
  },
  {
    family: 'prohibit',
    category: 'Civic & legal',
    difficulty: 'medium',
    sentence: 'The sign prohibits talking during the test.',
    forms: [
      { pos: 'verb', word: 'prohibit', simple: 'to forbid or ban', arabic: 'يحظر / يمنع', synonym: 'ban' },
      { pos: 'noun', word: 'prohibition', simple: 'an official ban or rule against something', arabic: 'حظر / منع', synonym: 'ban' },
      { pos: 'adjective', word: 'prohibitive', simple: 'so high or strict that it prevents action', arabic: 'مانع / باهظ بشكل يمنع', synonym: 'blocking' },
      { pos: 'adverb', word: 'prohibitively', simple: 'to an extent that prevents use or action', arabic: 'بشكل يمنع', synonym: 'excessively' },
      { pos: 'adjective', word: 'prohibited', simple: 'forbidden', arabic: 'ممنوع', synonym: 'banned' }
    ]
  },
  {
    family: 'observe',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'The researcher observed the group quietly.',
    forms: [
      { pos: 'verb', word: 'observe', simple: 'to watch carefully', arabic: 'يراقب / يلاحظ', synonym: 'watch' },
      { pos: 'noun', word: 'observation', simple: 'careful watching or a note about it', arabic: 'ملاحظة / رصد', synonym: 'notice' },
      { pos: 'adjective', word: 'observable', simple: 'able to be seen or noticed', arabic: 'ملحوظ / قابل للملاحظة', synonym: 'visible' },
      { pos: 'adverb', word: 'observably', simple: 'in a way that can be noticed', arabic: 'بشكل ملحوظ', synonym: 'noticeably' },
      { pos: 'noun', word: 'observer', simple: 'a person who watches or notes', arabic: 'مراقب / ملاحظ', synonym: 'watcher' }
    ]
  },
  {
    family: 'reveal',
    category: 'Reading & reasoning',
    difficulty: 'easy',
    sentence: 'The final page revealed the hidden meaning.',
    forms: [
      { pos: 'verb', word: 'reveal', simple: 'to show something that was hidden', arabic: 'يكشف / يظهر', synonym: 'disclose' },
      { pos: 'noun', word: 'revelation', simple: 'something that becomes known suddenly', arabic: 'كشف / اكتشاف', synonym: 'disclosure' },
      { pos: 'adjective', word: 'revealing', simple: 'showing something clearly', arabic: 'كاشف / دال', synonym: 'telling' },
      { pos: 'adverb', word: 'revealingly', simple: 'in a way that reveals something', arabic: 'بصورة كاشفة', synonym: 'tellingly' },
      { pos: 'adjective', word: 'revealed', simple: 'made known', arabic: 'مكشوف / ظاهر', synonym: 'disclosed' }
    ]
  },
  {
    family: 'prove',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The example proved the rule very well.',
    forms: [
      { pos: 'verb', word: 'prove', simple: 'to show that something is true', arabic: 'يثبت', synonym: 'demonstrate' },
      { pos: 'noun', word: 'proof', simple: 'evidence that something is true', arabic: 'دليل / إثبات', synonym: 'evidence' },
      { pos: 'adjective', word: 'provable', simple: 'able to be proven', arabic: 'قابل للإثبات', synonym: 'verifiable' },
      { pos: 'adverb', word: 'provably', simple: 'in a way that can be proven', arabic: 'بما يمكن إثباته', synonym: 'verifiably' },
      { pos: 'adjective', word: 'proven', simple: 'shown to be true', arabic: 'مُثبت', synonym: 'verified' }
    ]
  }
];

const EXTRA_VOCAB_FAMILIES = [
  {
    family: 'adapt',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'Students adapt quickly when the rules are clear.',
    forms: [
      { pos: 'verb', word: 'adapt', simple: 'to adjust to new conditions', arabic: 'يتأقلم / يتكيف', synonym: 'adjust' },
      { pos: 'noun', word: 'adaptation', simple: 'the process of adjusting', arabic: 'تكيّف', synonym: 'adjustment' },
      { pos: 'adjective', word: 'adaptable', simple: 'able to adjust easily', arabic: 'مرن / قابل للتكيف', synonym: 'flexible' },
      { pos: 'adverb', word: 'adaptably', simple: 'in a flexible way', arabic: 'بمرونة', synonym: 'flexibly' },
      { pos: 'adjective', word: 'adaptive', simple: 'changing well with circumstances', arabic: 'تكيفي', synonym: 'flexible' }
    ]
  },
  {
    family: 'assume',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'Do not assume the conclusion without checking the evidence.',
    forms: [
      { pos: 'verb', word: 'assume', simple: 'to accept as true without full proof', arabic: 'يفترض', synonym: 'suppose' },
      { pos: 'noun', word: 'assumption', simple: 'a belief accepted without proof', arabic: 'افتراض', synonym: 'supposition' },
      { pos: 'adjective', word: 'assumed', simple: 'accepted without proof', arabic: 'مفترض', synonym: 'supposed' },
      { pos: 'adverb', word: 'assumingly', simple: 'in a way based on assumptions', arabic: 'افتراضيا', synonym: 'supposedly' },
      { pos: 'adjective', word: 'assumptive', simple: 'based on assumptions', arabic: 'افتراضي', synonym: 'presumptive' }
    ]
  },
  {
    family: 'attain',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The researcher attained a clear result after many trials.',
    forms: [
      { pos: 'verb', word: 'attain', simple: 'to reach or achieve', arabic: 'يحقق / يبلغ', synonym: 'achieve' },
      { pos: 'noun', word: 'attainment', simple: 'something achieved', arabic: 'إنجاز / تحصيل', synonym: 'achievement' },
      { pos: 'adjective', word: 'attainable', simple: 'possible to achieve', arabic: 'قابل للتحقيق', synonym: 'achievable' },
      { pos: 'adverb', word: 'attainably', simple: 'in a way that can be achieved', arabic: 'بشكل قابل للتحقيق', synonym: 'achievably' },
      { pos: 'adjective', word: 'unattainable', simple: 'not possible to achieve', arabic: 'غير قابل للتحقيق', synonym: 'impossible' }
    ]
  },
  {
    family: 'classify',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The questions classify ideas by topic and method.',
    forms: [
      { pos: 'verb', word: 'classify', simple: 'to group by type', arabic: 'يصنف', synonym: 'categorize' },
      { pos: 'noun', word: 'classification', simple: 'the process of grouping', arabic: 'تصنيف', synonym: 'categorization' },
      { pos: 'adjective', word: 'classified', simple: 'grouped by category', arabic: 'مصنف', synonym: 'categorized' },
      { pos: 'adverb', word: 'classifiably', simple: 'in a way that can be categorized', arabic: 'بشكل قابل للتصنيف', synonym: 'categorically' },
      { pos: 'adjective', word: 'classificatory', simple: 'related to classification', arabic: 'تصنيفي', synonym: 'categorical' }
    ]
  },
  {
    family: 'compel',
    category: 'Reading & reasoning',
    difficulty: 'hard',
    sentence: 'Strong evidence can compel us to revise our view.',
    forms: [
      { pos: 'verb', word: 'compel', simple: 'to force someone to act', arabic: 'يجبر / يرغم', synonym: 'force' },
      { pos: 'noun', word: 'compulsion', simple: 'a strong force or urge', arabic: 'إجبار / قهر', synonym: 'force' },
      { pos: 'adjective', word: 'compelling', simple: 'very convincing or forceful', arabic: 'مقنع جدا / قاهر', synonym: 'convincing' },
      { pos: 'adverb', word: 'compellingly', simple: 'in a very convincing way', arabic: 'بشكل مقنع جدا', synonym: 'convincingly' },
      { pos: 'adjective', word: 'compulsory', simple: 'required by rule', arabic: 'إلزامي', synonym: 'mandatory' }
    ]
  },
  {
    family: 'comprehend',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'Good readers comprehend both details and structure.',
    forms: [
      { pos: 'verb', word: 'comprehend', simple: 'to understand fully', arabic: 'يفهم تماما / يستوعب', synonym: 'understand' },
      { pos: 'noun', word: 'comprehension', simple: 'full understanding', arabic: 'فهم / استيعاب', synonym: 'understanding' },
      { pos: 'adjective', word: 'comprehensive', simple: 'covering many parts fully', arabic: 'شامل', synonym: 'complete' },
      { pos: 'adverb', word: 'comprehensively', simple: 'in a complete and broad way', arabic: 'بشكل شامل', synonym: 'thoroughly' },
      { pos: 'adjective', word: 'comprehensible', simple: 'easy to understand', arabic: 'مفهوم / قابل للفهم', synonym: 'understandable' }
    ]
  },
  {
    family: 'constrain',
    category: 'Civic & legal',
    difficulty: 'hard',
    sentence: 'Limited time constrains how deeply you can analyze.',
    forms: [
      { pos: 'verb', word: 'constrain', simple: 'to limit by force or rules', arabic: 'يقيد / يحد', synonym: 'limit' },
      { pos: 'noun', word: 'constraint', simple: 'a limit or restriction', arabic: 'قيد / محدد', synonym: 'restriction' },
      { pos: 'adjective', word: 'constrained', simple: 'limited or restricted', arabic: 'مقيد', synonym: 'restricted' },
      { pos: 'adverb', word: 'constrainedly', simple: 'in a restricted way', arabic: 'بشكل مقيد', synonym: 'restrictively' },
      { pos: 'adjective', word: 'constraining', simple: 'causing limits', arabic: 'مُقيِّد', synonym: 'limiting' }
    ]
  },
  {
    family: 'convey',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'A short sentence can convey a complex idea.',
    forms: [
      { pos: 'verb', word: 'convey', simple: 'to communicate or carry meaning', arabic: 'ينقل / يوصل', synonym: 'communicate' },
      { pos: 'noun', word: 'conveyance', simple: 'the act of transmitting something', arabic: 'نقل / إيصال', synonym: 'transmission' },
      { pos: 'adjective', word: 'conveyed', simple: 'communicated clearly', arabic: 'منقول / مُوصل', synonym: 'communicated' },
      { pos: 'adverb', word: 'conveyingly', simple: 'in a way that communicates meaning', arabic: 'بشكل ناقل للمعنى', synonym: 'expressively' },
      { pos: 'noun', word: 'conveyor', simple: 'something that carries or transmits', arabic: 'ناقل', synonym: 'transporter' }
    ]
  },
  {
    family: 'correlate',
    category: 'Reading & reasoning',
    difficulty: 'hard',
    sentence: 'The data correlate with the new hypothesis.',
    forms: [
      { pos: 'verb', word: 'correlate', simple: 'to show a relationship between things', arabic: 'يرتبط / يقارن ارتباطيا', synonym: 'relate' },
      { pos: 'noun', word: 'correlation', simple: 'a mutual relationship between variables', arabic: 'ارتباط', synonym: 'relationship' },
      { pos: 'adjective', word: 'correlative', simple: 'mutually related', arabic: 'ارتباطي', synonym: 'related' },
      { pos: 'adverb', word: 'correlatively', simple: 'in a mutually related way', arabic: 'بشكل ارتباطي', synonym: 'relationally' },
      { pos: 'adjective', word: 'correlated', simple: 'shown to be related', arabic: 'مرتبط', synonym: 'associated' }
    ]
  },
  {
    family: 'derive',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'We can derive the formula from a simpler rule.',
    forms: [
      { pos: 'verb', word: 'derive', simple: 'to obtain from a source', arabic: 'يشتق / يستخلص', synonym: 'obtain' },
      { pos: 'noun', word: 'derivation', simple: 'the process of obtaining from a source', arabic: 'اشتقاق / استنتاج', synonym: 'inference' },
      { pos: 'adjective', word: 'derivative', simple: 'based on something earlier', arabic: 'مشتق', synonym: 'secondary' },
      { pos: 'adverb', word: 'derivatively', simple: 'in a way based on a source', arabic: 'بشكل مشتق', synonym: 'secondarily' },
      { pos: 'adjective', word: 'derived', simple: 'obtained from another source', arabic: 'مستمد / مشتق', synonym: 'obtained' }
    ]
  },
  {
    family: 'disperse',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The particles disperse quickly in water.',
    forms: [
      { pos: 'verb', word: 'disperse', simple: 'to spread out in different directions', arabic: 'ينتشر / يتفرق', synonym: 'spread' },
      { pos: 'noun', word: 'dispersion', simple: 'the act of spreading out', arabic: 'تشتت / انتشار', synonym: 'spread' },
      { pos: 'adjective', word: 'dispersed', simple: 'spread out', arabic: 'مبعثر / منتشر', synonym: 'scattered' },
      { pos: 'adverb', word: 'dispersedly', simple: 'in a scattered way', arabic: 'بشكل متفرق', synonym: 'scatteredly' },
      { pos: 'adjective', word: 'dispersive', simple: 'tending to spread things apart', arabic: 'مشتت', synonym: 'scattering' }
    ]
  },
  {
    family: 'emerge',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'A new pattern may emerge after careful review.',
    forms: [
      { pos: 'verb', word: 'emerge', simple: 'to become visible or known', arabic: 'يظهر / يبرز', synonym: 'appear' },
      { pos: 'noun', word: 'emergence', simple: 'the process of appearing', arabic: 'ظهور / بروز', synonym: 'appearance' },
      { pos: 'adjective', word: 'emergent', simple: 'coming into view or existence', arabic: 'ناشئ / ظاهر', synonym: 'arising' },
      { pos: 'adverb', word: 'emergently', simple: 'in a newly appearing way', arabic: 'بشكل ناشئ', synonym: 'newly' },
      { pos: 'adjective', word: 'emerging', simple: 'starting to become important', arabic: 'آخذ بالظهور', synonym: 'developing' }
    ]
  },
  {
    family: 'enhance',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'Practice can enhance both speed and accuracy.',
    forms: [
      { pos: 'verb', word: 'enhance', simple: 'to improve or increase quality', arabic: 'يعزز / يحسن', synonym: 'improve' },
      { pos: 'noun', word: 'enhancement', simple: 'an improvement or increase', arabic: 'تعزيز / تحسين', synonym: 'improvement' },
      { pos: 'adjective', word: 'enhanced', simple: 'improved or strengthened', arabic: 'محسن / معزز', synonym: 'improved' },
      { pos: 'adverb', word: 'enhancingly', simple: 'in a way that improves quality', arabic: 'بشكل معزز', synonym: 'improvingly' },
      { pos: 'adjective', word: 'enhancing', simple: 'serving to improve', arabic: 'محسن', synonym: 'improving' }
    ]
  },
  {
    family: 'estimate',
    category: 'Frequent psychometric',
    difficulty: 'medium',
    sentence: 'You should estimate the answer before calculating exactly.',
    forms: [
      { pos: 'verb', word: 'estimate', simple: 'to roughly calculate or judge', arabic: 'يقدّر تقريبا', synonym: 'approximate' },
      { pos: 'noun', word: 'estimation', simple: 'a rough judgment or calculation', arabic: 'تقدير', synonym: 'approximation' },
      { pos: 'adjective', word: 'estimated', simple: 'judged approximately', arabic: 'مُقدَّر', synonym: 'approximate' },
      { pos: 'adverb', word: 'approximately', simple: 'not exactly, but close', arabic: 'تقريبا', synonym: 'roughly' },
      { pos: 'adjective', word: 'estimative', simple: 'related to estimation', arabic: 'تقديري', synonym: 'approximate' }
    ]
  },
  {
    family: 'exceed',
    category: 'Quantitative logic',
    difficulty: 'medium',
    sentence: 'The final score should not exceed the maximum.',
    forms: [
      { pos: 'verb', word: 'exceed', simple: 'to go beyond a limit', arabic: 'يتجاوز', synonym: 'surpass' },
      { pos: 'noun', word: 'excess', simple: 'an amount beyond what is needed', arabic: 'فائض / زيادة', synonym: 'surplus' },
      { pos: 'adjective', word: 'excessive', simple: 'too much', arabic: 'مفرط / زائد', synonym: 'too much' },
      { pos: 'adverb', word: 'excessively', simple: 'to too great a degree', arabic: 'بشكل مفرط', synonym: 'overly' },
      { pos: 'adjective', word: 'exceeding', simple: 'greater than expected', arabic: 'متجاوز', synonym: 'surpassing' }
    ]
  },
  {
    family: 'exclude',
    category: 'Civic & legal',
    difficulty: 'medium',
    sentence: 'The rule excludes cases that do not meet the condition.',
    forms: [
      { pos: 'verb', word: 'exclude', simple: 'to leave out', arabic: 'يستبعد / يستثني', synonym: 'omit' },
      { pos: 'noun', word: 'exclusion', simple: 'the act of leaving out', arabic: 'استبعاد / إقصاء', synonym: 'omission' },
      { pos: 'adjective', word: 'exclusive', simple: 'limited to a specific group', arabic: 'حصري / استثنائي', synonym: 'limited' },
      { pos: 'adverb', word: 'exclusively', simple: 'only and no others', arabic: 'حصريا', synonym: 'solely' },
      { pos: 'adjective', word: 'excluded', simple: 'left out', arabic: 'مستبعد', synonym: 'omitted' }
    ]
  },
  {
    family: 'expose',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'The article exposes weaknesses in the argument.',
    forms: [
      { pos: 'verb', word: 'expose', simple: 'to reveal something hidden', arabic: 'يكشف / يفضح', synonym: 'reveal' },
      { pos: 'noun', word: 'exposure', simple: 'the state of being revealed', arabic: 'تعرية / كشف / تعرض', synonym: 'disclosure' },
      { pos: 'adjective', word: 'exposed', simple: 'left open or revealed', arabic: 'مكشوف', synonym: 'open' },
      { pos: 'adverb', word: 'exposingly', simple: 'in a revealing way', arabic: 'بشكل كاشف', synonym: 'revealingly' },
      { pos: 'adjective', word: 'expository', simple: 'intended to explain clearly', arabic: 'تفسيري / بياني', synonym: 'explanatory' }
    ]
  },
  {
    family: 'facilitate',
    category: 'Reading & reasoning',
    difficulty: 'hard',
    sentence: 'Clear labels facilitate quick understanding.',
    forms: [
      { pos: 'verb', word: 'facilitate', simple: 'to make something easier', arabic: 'يسهل', synonym: 'ease' },
      { pos: 'noun', word: 'facilitation', simple: 'the act of making easier', arabic: 'تيسير', synonym: 'simplification' },
      { pos: 'adjective', word: 'facilitating', simple: 'helping make progress easier', arabic: 'مُيسِّر', synonym: 'helpful' },
      { pos: 'adverb', word: 'facilitatively', simple: 'in a way that helps progress', arabic: 'بشكل ميسّر', synonym: 'helpfully' },
      { pos: 'noun', word: 'facilitator', simple: 'a person who helps a process move', arabic: 'مُيسّر', synonym: 'moderator' }
    ]
  },
  {
    family: 'fluctuate',
    category: 'Quantitative logic',
    difficulty: 'hard',
    sentence: 'Values fluctuate across different conditions.',
    forms: [
      { pos: 'verb', word: 'fluctuate', simple: 'to rise and fall irregularly', arabic: 'يتقلب / يتذبذب', synonym: 'vary' },
      { pos: 'noun', word: 'fluctuation', simple: 'an irregular change up and down', arabic: 'تقلب / تذبذب', synonym: 'variation' },
      { pos: 'adjective', word: 'fluctuating', simple: 'changing up and down', arabic: 'متقلب', synonym: 'variable' },
      { pos: 'adverb', word: 'fluctuationally', simple: 'in an up-and-down pattern', arabic: 'بشكل متذبذب', synonym: 'variably' },
      { pos: 'adjective', word: 'fluctuant', simple: 'subject to irregular changes', arabic: 'متذبذب', synonym: 'unstable' }
    ]
  },
  {
    family: 'formulate',
    category: 'Frequent psychometric',
    difficulty: 'hard',
    sentence: 'The scientist formulated a clearer hypothesis.',
    forms: [
      { pos: 'verb', word: 'formulate', simple: 'to express systematically', arabic: 'يصوغ / يضع صيغة', synonym: 'frame' },
      { pos: 'noun', word: 'formulation', simple: 'the way something is expressed', arabic: 'صياغة', synonym: 'wording' },
      { pos: 'adjective', word: 'formulated', simple: 'expressed in a clear system', arabic: 'مصاغ', synonym: 'structured' },
      { pos: 'adverb', word: 'formulatively', simple: 'in a systematic wording style', arabic: 'بشكل صياغي', synonym: 'systematically' },
      { pos: 'noun', word: 'formula', simple: 'a fixed expression or rule', arabic: 'صيغة / قاعدة', synonym: 'rule' }
    ]
  },
  {
    family: 'integrate',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'You must integrate data from both passages.',
    forms: [
      { pos: 'verb', word: 'integrate', simple: 'to combine parts into a whole', arabic: 'يدمج / يوحد', synonym: 'combine' },
      { pos: 'noun', word: 'integration', simple: 'the act of combining into a whole', arabic: 'دمج / تكامل', synonym: 'combination' },
      { pos: 'adjective', word: 'integrated', simple: 'combined into one system', arabic: 'متكامل / مدمج', synonym: 'combined' },
      { pos: 'adverb', word: 'integratively', simple: 'in a way that combines parts', arabic: 'بشكل تكاملي', synonym: 'holistically' },
      { pos: 'adjective', word: 'integrative', simple: 'aiming to combine different parts', arabic: 'تكاملي', synonym: 'combining' }
    ]
  },
  {
    family: 'manipulate',
    category: 'Reading & reasoning',
    difficulty: 'hard',
    sentence: 'Some headlines manipulate emotions to gain attention.',
    forms: [
      { pos: 'verb', word: 'manipulate', simple: 'to control cleverly, often unfairly', arabic: 'يتلاعب / يسيطر بمهارة', synonym: 'control' },
      { pos: 'noun', word: 'manipulation', simple: 'clever or unfair control', arabic: 'تلاعب', synonym: 'control' },
      { pos: 'adjective', word: 'manipulative', simple: 'trying to control others unfairly', arabic: 'متلاعب', synonym: 'controlling' },
      { pos: 'adverb', word: 'manipulatively', simple: 'in an unfairly controlling way', arabic: 'بشكل متلاعب', synonym: 'controllingly' },
      { pos: 'noun', word: 'manipulator', simple: 'a person who manipulates', arabic: 'متلاعب', synonym: 'controller' }
    ]
  },
  {
    family: 'mediate',
    category: 'Civic & legal',
    difficulty: 'medium',
    sentence: 'A third party can mediate a conflict.',
    forms: [
      { pos: 'verb', word: 'mediate', simple: 'to help settle a disagreement', arabic: 'يتوسط / يوسّط', synonym: 'arbitrate' },
      { pos: 'noun', word: 'mediation', simple: 'the act of settling by a mediator', arabic: 'وساطة', synonym: 'arbitration' },
      { pos: 'adjective', word: 'mediatory', simple: 'serving to settle disputes', arabic: 'وساطي', synonym: 'arbitrative' },
      { pos: 'adverb', word: 'mediatively', simple: 'in a balancing and settling way', arabic: 'بشكل وساطي', synonym: 'arbitratively' },
      { pos: 'noun', word: 'mediator', simple: 'person who helps two sides agree', arabic: 'وسيط', synonym: 'arbitrator' }
    ]
  },
  {
    family: 'mitigate',
    category: 'Reading & reasoning',
    difficulty: 'hard',
    sentence: 'Extra evidence can mitigate doubts about a claim.',
    forms: [
      { pos: 'verb', word: 'mitigate', simple: 'to make less severe', arabic: 'يخفف / يحدّ من', synonym: 'reduce' },
      { pos: 'noun', word: 'mitigation', simple: 'the act of reducing severity', arabic: 'تخفيف', synonym: 'reduction' },
      { pos: 'adjective', word: 'mitigating', simple: 'making something less severe', arabic: 'مخفف', synonym: 'reducing' },
      { pos: 'adverb', word: 'mitigatingly', simple: 'in a way that softens severity', arabic: 'بشكل مخفف', synonym: 'softeningly' },
      { pos: 'adjective', word: 'mitigated', simple: 'made less severe', arabic: 'مخفف', synonym: 'reduced' }
    ]
  },
  {
    family: 'negotiate',
    category: 'Civic & legal',
    difficulty: 'medium',
    sentence: 'The two sides negotiated a practical compromise.',
    forms: [
      { pos: 'verb', word: 'negotiate', simple: 'to discuss in order to reach agreement', arabic: 'يفاوض', synonym: 'bargain' },
      { pos: 'noun', word: 'negotiation', simple: 'discussion to reach agreement', arabic: 'مفاوضات', synonym: 'bargaining' },
      { pos: 'adjective', word: 'negotiable', simple: 'open to discussion and agreement', arabic: 'قابل للتفاوض', synonym: 'flexible' },
      { pos: 'adverb', word: 'negotiably', simple: 'in a way open to discussion', arabic: 'بشكل قابل للتفاوض', synonym: 'flexibly' },
      { pos: 'noun', word: 'negotiator', simple: 'person who conducts negotiations', arabic: 'مفاوض', synonym: 'delegate' }
    ]
  },
  {
    family: 'persist',
    category: 'Reading & reasoning',
    difficulty: 'medium',
    sentence: 'Some errors persist even after repeated practice.',
    forms: [
      { pos: 'verb', word: 'persist', simple: 'to continue firmly despite difficulty', arabic: 'يستمر / يثابر', synonym: 'continue' },
      { pos: 'noun', word: 'persistence', simple: 'continued effort over time', arabic: 'مثابرة / إصرار', synonym: 'perseverance' },
      { pos: 'adjective', word: 'persistent', simple: 'continuing for a long time', arabic: 'مستمر / مثابر', synonym: 'continuous' },
      { pos: 'adverb', word: 'persistently', simple: 'in a steady and repeated way', arabic: 'باستمرار / بإصرار', synonym: 'steadily' },
      { pos: 'adjective', word: 'persisting', simple: 'still continuing', arabic: 'مستمر', synonym: 'ongoing' }
    ]
  }
];

window.VOCAB_WORDS = (window.VOCAB_WORDS || []).concat(
  [...VOCAB_FAMILIES, ...EXTRA_VOCAB_FAMILIES].flatMap(group => group.forms.map(form => ({
    word: form.word,
    simple: form.simple,
    arabic: form.arabic,
    sentence: group.sentence,
    synonym: form.synonym || '',
    category: group.category,
    difficulty: group.difficulty,
    partOfSpeech: form.pos,
    family: group.family,
    familyForms: group.forms,
    sourceYears: group.sourceYears || []
  })))
);