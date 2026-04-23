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

window.VOCAB_WORDS = (window.VOCAB_WORDS || []).concat(
  VOCAB_FAMILIES.flatMap(group => group.forms.map(form => ({
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