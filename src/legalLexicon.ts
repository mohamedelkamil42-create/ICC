// Comprehensive Legal Lexicon for the International Criminal Court (ICC)
// Provides instant, guaranteed, offline-ready translations for legal vocabulary,
// common stems, terms, and expressions in both English and Arabic.

export interface LexiconEntry {
  en: string;
  ar: string;
  explanationAr: string;
  explanationEn: string;
}

export const legalLexicon: Record<string, LexiconEntry> = {
  // Principal Organs & Judicial Divisions
  court: {
    en: "Court",
    ar: "المحكمة",
    explanationAr: "المحكمة الجنائية الدولية كهيئة قضائية مستقلة ذات ولاية دولية دائمة.",
    explanationEn: "The International Criminal Court as an independent judicial body."
  },
  statute: {
    en: "Statute",
    ar: "النظام الأساسي",
    explanationAr: "نظام روما الأساسي المعتمد في 17 تموز/يوليه 1998 المنشئ للمحكمة الجنائية الدولية.",
    explanationEn: "The Rome Statute establishing the International Criminal Court."
  },
  article: {
    en: "Article",
    ar: "المادة",
    explanationAr: "مادة قانونية من مواد نظام روما الأساسي أو وثائق المحكمة المعتمدة.",
    explanationEn: "A legal article within the Rome Statute or Court instruments."
  },
  paragraph: {
    en: "Paragraph",
    ar: "الفقرة",
    explanationAr: "فقرة فرعية ضمن نصوص المواد القانونية تحدد حكماً أو شرطاً إجرائياً أو موضوعياً.",
    explanationEn: "A sub-clause or paragraph within a legal article."
  },
  preamble: {
    en: "Preamble",
    ar: "الديباجة",
    explanationAr: "المقدمة التمهيدية لنظام روما الأساسي التي تحدد مقاصد وأهداف إنشاء المحكمة وإنهاء الإفلات من العقاب.",
    explanationEn: "The preamble outlining the purposes and objectives of establishing the ICC."
  },
  jurisdiction: {
    en: "Jurisdiction",
    ar: "الاختصاص القضائي",
    explanationAr: "سلطة المحكمة القانونية للنظر في الجرائم ومحاكمة مرتكبيها وفق معايير نظام روما الأساسي.",
    explanationEn: "The Court's legal authority to investigate and prosecute defined crimes."
  },
  admissibility: {
    en: "Admissibility",
    ar: "المقبولية",
    explanationAr: "معيار قانوني حاسم بموجب المادتين 17 و19 يحدد اختصاص المحكمة بناءً على مبدأ التكامل وقدرة القضاء الوطني أو رغبته في التحقيق.",
    explanationEn: "A critical legal standard under Articles 17 and 19 governed by complementarity."
  },
  complementarity: {
    en: "Complementarity",
    ar: "مبدأ التكامل",
    explanationAr: "المبدأ الجوهري الذي يجعل ولاية المحكمة الجنائية الدولية مكملة للولايات القضائية الجنائية الوطنية وليست بديلاً عنها.",
    explanationEn: "The fundamental principle establishing the ICC as complementary to national courts."
  },
  gravity: {
    en: "Gravity",
    ar: "درجة الخطورة / الجسامة",
    explanationAr: "معيار تقييمي لمستوى جسامة الجريمة وآثارها على الضحايا لتقدير قبول الدعوى أمام المحكمة.",
    explanationEn: "A quantitative and qualitative threshold assessing crime severity for admissibility."
  },
  prosecutor: {
    en: "Prosecutor",
    ar: "المدعي العام",
    explanationAr: "رئيس جهاز الادعاء المستقل المسؤول عن التحقيق والملاحقة القضائية أمام المحكمة.",
    explanationEn: "The head of the independent Office of the Prosecutor responsible for investigations."
  },
  registry: {
    en: "Registry",
    ar: "قلم المحكمة",
    explanationAr: "الجهاز الإداري للمحكمة المسؤول عن الجوانب غير القضائية للخدمات والدعم وإدارة شؤون الدفاع والضحايا.",
    explanationEn: "The organ responsible for non-judicial aspects of Court administration."
  },
  registrar: {
    en: "Registrar",
    ar: "المسجل",
    explanationAr: "المسؤول التنفيذي الأول لقلم المحكمة المعين من قبل القضاة لإدارة شؤونها الإدارية.",
    explanationEn: "The principal administrative officer of the Court."
  },
  presidency: {
    en: "Presidency",
    ar: "هيئة الرئاسة",
    explanationAr: "الهيئة القضائية العليا المكلفة بالإدارة السليمة للمحكمة باستثناء مكتب المدعي العام.",
    explanationEn: "The judicial organ responsible for proper administration of the Court."
  },
  chamber: {
    en: "Chamber",
    ar: "الدائرة القضائية",
    explanationAr: "هيئة قضائية مشكلة من عدد من القضاة للفصل في النزاعات المعروضة (تمهيدية، ابتدائية، أو استئناف).",
    explanationEn: "A judicial body composed of judges assigned to hear cases at various procedural stages."
  },
  chambers: {
    en: "Chambers",
    ar: "الدوائر القضائية",
    explanationAr: "مجموع الدوائر القضائية في المحكمة: الدائرة التمهيدية، الدائرة الابتدائية، ودائرة الاستئناف.",
    explanationEn: "The three judicial divisions: Pre-Trial, Trial, and Appeals Chambers."
  },
  judge: {
    en: "Judge",
    ar: "القاضي",
    explanationAr: "عضو قضائي منتخب من جمعية الدول الأطراف يتمتع بالنزاهة والخبرة الجنائية أو الدولية.",
    explanationEn: "An elected member of the judiciary chosen by the Assembly of States Parties."
  },
  judges: {
    en: "Judges",
    ar: "القضاة",
    explanationAr: "أعضاء المحكمة الجنائية الدولية الثمانية عشر المنتخبون لولاية مدتها تسع سنوات غير قابلة للتجديد.",
    explanationEn: "The 18 judges of the International Criminal Court serving 9-year terms."
  },
  trial: {
    en: "Trial",
    ar: "المحاكمة",
    explanationAr: "المرحلة القضائية المباشرة التي تُفحص فيها الأدلة ويُستمع للشهود لتقرير براءة أو إدانة المتهم.",
    explanationEn: "The procedural phase where evidence is examined to determine guilt or innocence."
  },
  appeal: {
    en: "Appeal",
    ar: "الاستئناف",
    explanationAr: "إجراء الطعن في أحكام الإدانة أو البراءة أو العقوبة أمام دائرة الاستئناف.",
    explanationEn: "The legal process of challenging a verdict or sentence before the Appeals Chamber."
  },
  appeals: {
    en: "Appeals",
    ar: "الاستئناف / الطعون",
    explanationAr: "طلبات الطعن المقدمة من المدعي العام أو المحكوم عليه لإعادة النظر في القرارات القضائية.",
    explanationEn: "Appellate proceedings reviewing decisions, judgments, or sentences."
  },
  investigation: {
    en: "Investigation",
    ar: "التحقيق",
    explanationAr: "إجراءات جمع الأدلة والشهادات والتحري التي يجريها مكتب المدعي العام للبت في وجود أدلة كافية.",
    explanationEn: "The process of collecting evidence and witness accounts by the OTP."
  },
  prosecution: {
    en: "Prosecution",
    ar: "الادعاء / الملاحقة القضائية",
    explanationAr: "مباشرة الإجراءات الجنائية وتوجيه الاتهام ضد الأشخاص المشتبه في ارتكابهم جرائم تدخل في اختصاص المحكمة.",
    explanationEn: "The initiation and conduct of criminal proceedings against accused individuals."
  },
  crime: {
    en: "Crime",
    ar: "الجريمة",
    explanationAr: "فعل أو امتناع عن فعل يمثل انتهاكاً لأحكام نظام روما الأساسي والقانون الدولي الإنساني.",
    explanationEn: "An act or omission constituting a violation of the Rome Statute."
  },
  crimes: {
    en: "Crimes",
    ar: "الجرائم",
    explanationAr: "الجرائم الأربع الأشد خطورة موضع اختصاص المحكمة: الإبادة، الجرائم ضد الإنسانية، جرائم الحرب، والعدوان.",
    explanationEn: "The core crimes within ICC jurisdiction: genocide, crimes against humanity, war crimes, and aggression."
  },
  genocide: {
    en: "Genocide",
    ar: "الإبادة الجماعية",
    explanationAr: "أفعال ترتكب بقصد التدمير الكلي أو الجزئي لجماعة قومية أو إثنية أو عرقية أو دينية بصفتها هذه.",
    explanationEn: "Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group."
  },
  humanity: {
    en: "Humanity",
    ar: "الإنسانية",
    explanationAr: "الحماية الجنائية للمجتمع الإنساني من الجرائم المرتكبة في إطار هجوم واسع النطاق أو منهجي ضد المدنيين.",
    explanationEn: "Referring to 'Crimes against humanity' committed as part of a widespread or systematic attack."
  },
  war: {
    en: "War",
    ar: "الحرب",
    explanationAr: "النزاع المسلح الدولي أو غير الدولي الخاضع لقواعد القانون الدولي الإنساني واتفاقيات جنيف.",
    explanationEn: "Armed conflict governed by international humanitarian law and the Geneva Conventions."
  },
  aggression: {
    en: "Aggression",
    ar: "العدوان",
    explanationAr: "استعمال القوة المسلحة من قبل دولة ضد سيادة دولة أخرى أو سلامتها الإقليمية أو استقلالها السياسي.",
    explanationEn: "The use of armed force by a State against the sovereignty, integrity, or independence of another State."
  },
  accused: {
    en: "Accused",
    ar: "المتهم",
    explanationAr: "الشخص الذي صدرت بحقه لائحة اتهام معتمدة من الدائرة التمهيدية وتجري محاكمته.",
    explanationEn: "A person against whom charges have been confirmed and is facing trial."
  },
  victim: {
    en: "Victim",
    ar: "الضحية",
    explanationAr: "شخص طبيعي لحق به ضرر نتيجة ارتكاب أي جريمة تدخل في اختصاص المحكمة الجنائية الدولية.",
    explanationEn: "A natural person who has suffered harm as a result of the commission of an ICC crime."
  },
  victims: {
    en: "Victims",
    ar: "الضحايا",
    explanationAr: "الأشخاص الذين لهم الحق في المشاركة في الإجراءات والحصول على الحماية وجبر الضرر والتعويض.",
    explanationEn: "Individuals entitled to participate in proceedings, protection, and reparations."
  },
  witness: {
    en: "Witness",
    ar: "الشاهد",
    explanationAr: "الشخص الذي يقدم إفادة أو شهادة قضائية أمام المحكمة بخصوص وقائع القضية المعروضة.",
    explanationEn: "An individual providing evidence or testimony before the Court."
  },
  witnesses: {
    en: "Witnesses",
    ar: "الشهود",
    explanationAr: "الأشخاص الذين تشملهم تدابير الحماية وتيسير الإدلاء بالشهادة تحت إشراف قلم المحكمة.",
    explanationEn: "Individuals providing testimony who may receive protective measures."
  },
  evidence: {
    en: "Evidence",
    ar: "الأدلة / الإثبات",
    explanationAr: "الوثائق والشهادات والقرائن المادية المقدمة للمحكمة لإثبات أو نفي ارتكاب الجرائم المنسوبة.",
    explanationEn: "Information, documents, and testimonies presented to prove or disprove facts."
  },
  warrant: {
    en: "Warrant",
    ar: "أمر قبض / مذكرة قضائية",
    explanationAr: "أمر قضائي صادر عن الدائرة التمهيدية بالقبض على شخص وتوقيفه ونقله للمحكمة.",
    explanationEn: "A judicial order issued by the Pre-Trial Chamber for arrest and surrender."
  },
  arrest: {
    en: "Arrest",
    ar: "القبض / التوقيف",
    explanationAr: "إجراء احتجاز المشتبه فيه أو المتهم استناداً لأمر قبض معتمد لضمان مثوله أمام المحكمة.",
    explanationEn: "The deprivation of liberty of a suspect pursuant to a warrant of arrest."
  },
  surrender: {
    en: "Surrender",
    ar: "التسليم",
    explanationAr: "تسليم الدولة لشخص مطلوب إلى المحكمة الجنائية الدولية عملاً بأحكام نظام روما الأساسي.",
    explanationEn: "The delivering up of a person by a State to the Court pursuant to the Statute."
  },
  sentence: {
    en: "Sentence",
    ar: "العقوبة / الحكم الجزائي",
    explanationAr: "الجزاء الجنائي المقضي به على المدان، كالسجن لمدة محددة أو السجن المؤبد مع الغرامة أو مصادرة العائدات.",
    explanationEn: "The judicial penalty imposed upon conviction, including imprisonment and fines."
  },
  reparation: {
    en: "Reparation",
    ar: "جبر الضرر",
    explanationAr: "تدابير التعويض ورد الحقوق وإعادة التأهيل المقررة لصالح الضحايا بموجب المادة 75.",
    explanationEn: "Measures of restitution, compensation, and rehabilitation awarded to victims."
  },
  reparations: {
    en: "Reparations",
    ar: "التعويضات وجبر الأضرار",
    explanationAr: "حقوق الضحايا المقررة قضائياً وتنفذ بصورة فردية أو جماعية عبر الصندوق الاستئماني للضحايا.",
    explanationEn: "Judicial orders for compensation, restitution, or rehabilitation for victims."
  },
  parties: {
    en: "Parties",
    ar: "الدول الأطراف / الأطراف",
    explanationAr: "الدول المصدقة على نظام روما الأساسي والملتزمة بالتعاون الكامل مع المحكمة.",
    explanationEn: "States that have ratified or acceded to the Rome Statute."
  },
  state: {
    en: "State",
    ar: "الدولة",
    explanationAr: "الدولة الطرف أو غير الطرف ذات السيادة المعنية بالتحقيقات أو التزامات التعاون القضائي.",
    explanationEn: "A sovereign State, whether party or non-party to the Rome Statute."
  },
  states: {
    en: "States",
    ar: "الدول",
    explanationAr: "أعضاء المجتمع الدولي المعنيون بإنفاذ أحكام نظام روما وملاحقة مرتكبي الجرائم الخطيرة.",
    explanationEn: "Sovereign States cooperating with the Court under international law."
  },
  assembly: {
    en: "Assembly",
    ar: "جمعية الدول الأطراف",
    explanationAr: "الهيئة الإدارية والتشريعية والرقابية العليا لنظام روما الأساسي المكونة من ممثلي الدول الأطراف.",
    explanationEn: "The management oversight and legislative body of the ICC (ASP)."
  },
  cooperation: {
    en: "Cooperation",
    ar: "التعاون الدولي",
    explanationAr: "التزام الدول الأطراف بموجب الباب التاسع بالاستجابة لطلبات المحكمة وتقديم المساعدة القضائية.",
    explanationEn: "The obligation of States Parties to cooperate fully with the Court under Part 9."
  },
  assistance: {
    en: "Assistance",
    ar: "المساعدة القضائية",
    explanationAr: "أشكال الدعم الإجرائي والتحقيقي المقدمة من الدول للمحكمة لتسهيل مهام التحقيق والمحاكمة.",
    explanationEn: "Forms of procedural and investigative support rendered to the Court."
  },
  responsibility: {
    en: "Responsibility",
    ar: "المسؤولية الجنائية",
    explanationAr: "تحمل الشخص الطبيعي لتبعات أفعاله الإجرامية كفاعل أصلي أو شريك أو متواطئ بموجب المادة 25.",
    explanationEn: "Individual criminal responsibility for committing, ordering, or aiding crimes."
  },
  defense: {
    en: "Defense",
    ar: "الدفاع",
    explanationAr: "الضمانات القانونية والممثل القانوني للمتهم لضمان محاكمة عادلة وعلنية ومنصفة.",
    explanationEn: "Legal representation and safeguards ensuring a fair and impartial trial."
  },
  counsel: {
    en: "Counsel",
    ar: "محامي الدفاع / المستشار القانوني",
    explanationAr: "المحامي المؤهل المقيد في جدول المحكمة لتمثيل المتهم أو الضحايا في الإجراءات.",
    explanationEn: "Qualified legal practitioner representing the accused or victims."
  },
  shall: {
    en: "Shall",
    ar: "يتعين / يجب / يلتزم",
    explanationAr: "صيغة قانونية تفيد الإلزام القطعي والمطلق في نصوص نظام روما الأساسي دون ترك خيار تقديري.",
    explanationEn: "Mandatory legal obligation denoting a binding requirement under the Statute."
  },
  may: {
    en: "May",
    ar: "يجوز / للمحكمة أن",
    explanationAr: "صيغة قانونية تمنح سلطة تقديرية أو جوازية للمحكمة أو الهيئة القضائية باتخاذ الإجراء.",
    explanationEn: "Discretionary authority conferring permissible legal action."
  },
  rules: {
    en: "Rules",
    ar: "القواعد الإجرائية",
    explanationAr: "قواعد الإجراءات والإثبات المكملة لنظام روما الأساسي المنظمة لسير الدعاوى أمام المحكمة.",
    explanationEn: "The Rules of Procedure and Evidence governing Court proceedings."
  },
  elements: {
    en: "Elements",
    ar: "أركان الجرائم",
    explanationAr: "الوثيقة التفسيرية المعتمدة التي تفصل الأركان المادية والمعنوية لكل جريمة موضع اختصاص المحكمة.",
    explanationEn: "The Elements of Crimes defining the physical and mental elements of each offense."
  },
  procedure: {
    en: "Procedure",
    ar: "الإجراءات",
    explanationAr: "المسار والخطوات القضائية الشكلية والموضوعية الواجبة الاتباع منذ بدء التحقيق وحتى صدور الحكم النهائي.",
    explanationEn: "The legal process and formal steps governing proceedings from inquiry to verdict."
  },
  treaty: {
    en: "Treaty",
    ar: "المعاهدة",
    explanationAr: "اتفاق دولي مكتوب تبرمه الدول ويخضع للقانون الدولي، ويعد نظام روما الأساسي أحد أهم نماذجه.",
    explanationEn: "An international agreement concluded between States in written form."
  },
  convention: {
    en: "Convention",
    ar: "الاتفاقية",
    explanationAr: "صك دولي متعدد الأطراف كمعاهدات جنيف لعام 1949 والاتفاقية الخاصة بمنع جريمة الإبادة الجماعية.",
    explanationEn: "A multilateral international instrument establishing binding standards."
  },
  fund: {
    en: "Fund",
    ar: "الصندوق الاستئماني",
    explanationAr: "الصندوق الاستئماني لصالح الضحايا وأسرهم المنشأ بموجب المادة 79 لتقديم المساعدة وإعادة التأهيل.",
    explanationEn: "The Trust Fund for Victims established under Article 79."
  },
  trust: {
    en: "Trust",
    ar: "الصندوق الاستئماني (للضحايا)",
    explanationAr: "مؤسسة مستقلة تعمل إلى جانب المحكمة لتنفيذ تدابير جبر الضرر المالي والطبي والنفسي للضحايا.",
    explanationEn: "Institution implementing Court-ordered reparations and rehabilitation."
  },
  immunity: {
    en: "Immunity",
    ar: "الحصانة",
    explanationAr: "الحماية من الملاحقة؛ وتؤكد المادة 27 من نظام روما عدم الاعتداد بأي حصانة رسمية أياً كانت الصفة.",
    explanationEn: "Protection against prosecution, inapplicable before the ICC pursuant to Article 27."
  },
  immunities: {
    en: "Immunities",
    ar: "الحصانات",
    explanationAr: "الحصانات الدبلوماسية أو الرسمية التي لا تحول دون ممارسة المحكمة لاختصاصها الجنائي على الأفراد.",
    explanationEn: "Official immunities barred from precluding Court jurisdiction under Article 27."
  },
  intent: {
    en: "Intent",
    ar: "القصد الجنائي",
    explanationAr: "العنصر المعنوي الذي يتطلب إرادة ارتكاب الفعل والسعي لتحقيق النتيجة الجرمية بموجب المادة 30.",
    explanationEn: "The mental element requiring conscious desire to engage in conduct or cause consequences."
  },
  knowledge: {
    en: "Knowledge",
    ar: "العلم / الإدراك",
    explanationAr: "إدراك الجاني بأن ظرفاً معيناً قائم أو أن نتيجة معينة ستحدث في المجرى العادي للأحداث.",
    explanationEn: "Awareness that a circumstance exists or that a consequence will occur."
  },
  conduct: {
    en: "Conduct",
    ar: "السلوك الإجرامي",
    explanationAr: "الفعل المادي أو الامتناع عن الفعل الذي يقوم عليه الركن المادي للجريمة.",
    explanationEn: "The act or omission constituting the physical element of a crime."
  },
  consequence: {
    en: "Consequence",
    ar: "النتيجة الجرمية",
    explanationAr: "الأثر المترتب على السلوك الإجرامي المتصل به برابطة سببية مباشرة.",
    explanationEn: "The harmful outcome directly linked to unlawful conduct."
  },
  circumstance: {
    en: "Circumstance",
    ar: "الظرف الواقعي أو المشدد",
    explanationAr: "الواقعة أو الحالة المحيطة بارتكاب الجريمة المحددة في أركان الجرائم أو نصوص المواد.",
    explanationEn: "A factual condition or surrounding factor specified in crime definitions."
  },
  orders: {
    en: "Orders",
    ar: "الأوامر العسكرية / أوامر الرؤساء",
    explanationAr: "تعليمات القيادة؛ وتنص المادة 33 على أن امتثال المرؤوس لأمر رئيسه لا يعفيه من المسؤولية إلا بشروط استثنائية ضيقة.",
    explanationEn: "Superior orders governed by Article 33, severely restricted as a criminal defense."
  },
  superior: {
    en: "Superior",
    ar: "الرئيس / القائد",
    explanationAr: "الشخص الذي يمارس سلطة وسيطرة فعلية على مرؤوسيه ويتحمل مسؤولية الجرائم التي يرتكبونها إذا أخفق في منعها أو قمعها.",
    explanationEn: "A commander or civilian superior exercising effective authority and control."
  },
  command: {
    en: "Command",
    ar: "القيادة والسيطرة",
    explanationAr: "مسؤولية القائد العسكري عن الجرائم المرتكبة من القوات الخاضعة لإمرته وسيطرته الفعلية بموجب المادة 28.",
    explanationEn: "Command responsibility under Article 28 for crimes of subordinates."
  },
  establishment: {
    en: "Establishment",
    ar: "إنشاء / تأسيس",
    explanationAr: "تأسيس المحكمة الجنائية الدولية ككيان قانوني دائم بموجب نظام روما الأساسي.",
    explanationEn: "The creation of the Court as a permanent international entity."
  },
  permanent: {
    en: "Permanent",
    ar: "دائمة",
    explanationAr: "صفة استمرار ولاية المحكمة الجنائية الدولية لتمييزها عن المحاكم الخاصة المؤقتة (Ad Hoc).",
    explanationEn: "Denoting the ICC's enduring status distinguishing it from ad-hoc tribunals."
  },
  institution: {
    en: "Institution",
    ar: "المؤسسة / الهيئة القضائية",
    explanationAr: "المحكمة كهيئة دولية مستقلة متمتعة بالشخصية القانونية والأهلية الدولية.",
    explanationEn: "The judicial institution endowed with international legal personality."
  },
  power: {
    en: "Power",
    ar: "السلطة / الصلاحية",
    explanationAr: "الصلاحيات القضائية والتنفيذية الممنوحة للمحكمة وهيئاتها لتطبيق أحكام النظام الأساسي.",
    explanationEn: "Judicial powers and competence vested in the Court to implement the Statute."
  },
  exercise: {
    en: "Exercise",
    ar: "ممارسة (الاختصاص)",
    explanationAr: "مباشرة المحكمة لولايتها القضائية وفقاً للشروط المقررة في المادة 13 من نظام روما.",
    explanationEn: "The exercise of Court jurisdiction pursuant to Article 13 trigger mechanisms."
  },
  persons: {
    en: "Persons",
    ar: "الأشخاص الطبيعيون",
    explanationAr: "الأشخاص الطبيعيون الذين تقتصر ولاية المحكمة القضائية عليهم عملاً بالمادة 25 ولا تشمل الدول أو الشركات.",
    explanationEn: "Natural persons to whom ICC criminal liability is strictly limited under Article 25."
  },
  serious: {
    en: "Serious",
    ar: "جسيمة / خطيرة",
    explanationAr: "وصف للجرائم الأشد خطورة التي تمس المجتمع الدولي بأسره والتي تختص بها المحكمة حصراً.",
    explanationEn: "Denoting the gravity of offenses warranting international judicial intervention."
  },
  concern: {
    en: "Concern",
    ar: "موضع اهتمام",
    explanationAr: "الجرائم الأشد خطورة موضع اهتمام المجتمع الدولي بأسره والمنصوص عليها في ديباجة النظام الأساسي.",
    explanationEn: "Matters of concern to the international community as a whole."
  },
  community: {
    en: "Community",
    ar: "المجتمع الدولي",
    explanationAr: "المجتمع الدولي بأسره الملتزم بمكافحة الإفلات من العقاب وإنفاذ العدالة الجنائية الدولية.",
    explanationEn: "The international community as a whole committed to ending impunity."
  },
  provisions: {
    en: "Provisions",
    ar: "الأحكام / النصوص",
    explanationAr: "نصوص ومواد نظام روما الأساسي والقواعد المرتبطة به التي تنظم عمل المحكمة.",
    explanationEn: "The normative rules and articles set forth in the Rome Statute."
  },
  seat: {
    en: "Seat",
    ar: "المقر الدائم",
    explanationAr: "مقر المحكمة الجنائية الدولية الكائن في لاهاي بهولندا وفقاً للمادة 3 من النظام الأساسي.",
    explanationEn: "The official seat of the Court located in The Hague, Netherlands."
  },
  headquarters: {
    en: "Headquarters",
    ar: "المقر الرئيسي",
    explanationAr: "مبنى ومقر المحكمة الرسمي بموجب اتفاق المقر المبرم مع الدولة المضيفة.",
    explanationEn: "The premises and seat of the Court governed by the host State agreement."
  },
  agreement: {
    en: "Agreement",
    ar: "الاتفاق / الاتفاقية",
    explanationAr: "اتفاق المقر أو اتفاقات التعاون القضائي المبرمة بين المحكمة والدول أو المنظمات الدولية.",
    explanationEn: "A formal agreement governing headquarters, cooperation, or enforcement."
  },
  relationship: {
    en: "Relationship",
    ar: "العلاقة القانونية",
    explanationAr: "العلاقة المنظمة بين المحكمة الجنائية الدولية ومنظمة الأمم المتحدة بموجب المادة 2.",
    explanationEn: "The institutional relationship between the Court and the United Nations."
  },
  referral: {
    en: "Referral",
    ar: "الإحالة",
    explanationAr: "إحالة حالة معينة إلى المدعي العام من جانب دولة طرف أو من مجلس الأمن عملاً بالمادة 13.",
    explanationEn: "The referral of a situation to the Prosecutor by a State Party or the UN Security Council."
  },
  deferral: {
    en: "Deferral",
    ar: "تأجيل التحقيق أو المحاكمة",
    explanationAr: "طلب مجلس الأمن بموجب المادة 16 أو طلب الدولة بموجب المادة 18 إرجاء إجراءات المحكمة لفترة محددة.",
    explanationEn: "The postponement of an investigation or prosecution under Articles 16 or 18."
  },
  information: {
    en: "Information",
    ar: "المعلومات / الإخطارات",
    explanationAr: "المعلومات والبيانات المقدمة للمدعي العام للتحقق من وجود أساس معقول لبدء التحقيق.",
    explanationEn: "Information received regarding crimes to assess opening an investigation."
  },
  initiation: {
    en: "Initiation",
    ar: "بدء التحقيق / المباشرة",
    explanationAr: "قرار المدعي العام بمباشرة التحقيق تلقائياً (Proprio motu) بإذن من الدائرة التمهيدية بموجب المادة 15.",
    explanationEn: "The commencement of an investigation, including proprio motu under Article 15."
  },
  charges: {
    en: "Charges",
    ar: "التهم الموجهة",
    explanationAr: "لائحة الاتهامات والوقائع الجنائية المحددة المنسوبة للمتهم والتي يُطلب تأكيدها في جلسة الاعتماد.",
    explanationEn: "The specific allegations and legal charges subject to confirmation proceedings."
  },
  confirmation: {
    en: "Confirmation",
    ar: "اعتماد التهم",
    explanationAr: "جلسة قضائية أمام الدائرة التمهيدية بموجب المادة 61 للتأكد من وجود أدلة كافية لإحالة المتهم للمحاكمة.",
    explanationEn: "The pre-trial hearing under Article 61 confirming charges for trial."
  },
  custody: {
    en: "Custody",
    ar: "الاحتجاز / الحبس الاحتياطي",
    explanationAr: "وضع الشخص المقبوض عليه تحت حراسة المحكمة في مركز الاحتجاز في لاهاي.",
    explanationEn: "The detention of a suspect or accused within the ICC detention center."
  },
  detention: {
    en: "Detention",
    ar: "الاحتجاز",
    explanationAr: "سلب حرية المتهم بصورة مؤقتة بموجب قرارات الدائرة القضائية المختصة لضمان عدم فراره أو التأثير على الشهود.",
    explanationEn: "The confinement of an individual pending trial or during proceedings."
  },
  appearance: {
    en: "Appearance",
    ar: "المثول الأولي أمام المحكمة",
    explanationAr: "جلسة المثول الأولى للمتهم أمام الدائرة التمهيدية للتحقق من هويته وإبلاغه بحقوقه والتهم المنسوبة إليه.",
    explanationEn: "The initial appearance hearing verifying the suspect's identity and rights."
  },
  judgment: {
    en: "Judgment",
    ar: "الحكم القضائي",
    explanationAr: "القرار النهائي المكتوب والمعلل الصادر عن الدائرة الابتدائية أو دائرة الاستئناف بشأن الإدانة أو البراءة.",
    explanationEn: "The formal written verdict of conviction or acquittal delivered by the Chamber."
  },
  imprisonment: {
    en: "Imprisonment",
    ar: "السجن / عقوبة الحبس",
    explanationAr: "العقوبة السالبة للحرية المقررة بموجب المادة 77 لمدة لا تتجاوز 30 سنة أو السجن المؤبد في الحالات البالغة الجسامة.",
    explanationEn: "The custodial sentence under Article 77 up to 30 years or life imprisonment."
  },
  fine: {
    en: "Fine",
    ar: "الغرامة المالية",
    explanationAr: "عقوبة مالية إضافية يمكن للمحكمة توقيعها إلى جانب عقوبة السجن بموجب القواعد الإجرائية.",
    explanationEn: "A financial penalty imposed in addition to imprisonment under the Rules."
  },
  forfeiture: {
    en: "Forfeiture",
    ar: "المصادرة",
    explanationAr: "مصادرة العائدات والممتلكات والأصول المتأتية بصورة مباشرة أو غير مباشرة من الجريمة لصالح الضحايا.",
    explanationEn: "The seizure of proceeds, property, and assets derived directly or indirectly from crimes."
  },
  enforcement: {
    en: "Enforcement",
    ar: "إنفاذ الأحكام والعقوبات",
    explanationAr: "تنفيذ أحكام السجن وجبر الضرر في أراضي الدول الأطراف التي تعلن استعدادها لقبول المحكوم عليهم.",
    explanationEn: "The execution of sentences and orders in designated States of enforcement."
  }
};

// Clean punctuation and normalize text for dictionary lookup
export function normalizeWord(str: string): string {
  return str
    .toLowerCase()
    .replace(/[()[\]{}"'״”؛،,:.;?!]/g, '')
    .trim();
}

// Immediate guaranteed lexicon translation lookup
export function lookupLexicon(word: string, targetIsArabic: boolean): LexiconEntry | null {
  const norm = normalizeWord(word);
  if (!norm) return null;

  // 1. Direct match
  if (legalLexicon[norm]) {
    return legalLexicon[norm];
  }

  // 2. Singular/plural match (strip trailing 's' or 'es')
  if (norm.endsWith('ies')) {
    const singular = norm.slice(0, -3) + 'y';
    if (legalLexicon[singular]) return legalLexicon[singular];
  } else if (norm.endsWith('es')) {
    const singular = norm.slice(0, -2);
    if (legalLexicon[singular]) return legalLexicon[singular];
  } else if (norm.endsWith('s')) {
    const singular = norm.slice(0, -1);
    if (legalLexicon[singular]) return legalLexicon[singular];
  }

  // 3. Search by English term in values
  for (const entry of Object.values(legalLexicon)) {
    if (entry.en.toLowerCase() === norm) {
      return entry;
    }
  }

  // 4. Search by Arabic term in values
  if (!targetIsArabic) {
    for (const entry of Object.values(legalLexicon)) {
      if (entry.ar === word.trim() || entry.ar.includes(word.trim())) {
        return entry;
      }
    }
  }

  return null;
}
