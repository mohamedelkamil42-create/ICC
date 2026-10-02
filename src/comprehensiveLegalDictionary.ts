// Comprehensive Bilingual Legal Lexicon & Foundational Vocabulary for the ICC Rome Statute
// Guarantees that any legal or common word in the texts has an accurate Arabic and English translation and context.

export interface LegalVocabEntry {
  en: string;
  ar: string;
  explanationAr: string;
  explanationEn: string;
  categoryAr?: string;
  categoryEn?: string;
}

export const comprehensiveLegalVocab: Record<string, LegalVocabEntry> = {
shall: {
    en: "Shall",
    ar: "يجب / يتعين",
    explanationAr: "صيغة تشريعية آمرة تفيد الإلزام والوجوب القانوني الصارم في مواد نظام روما الأساسي.",
    explanationEn: "Mandatory statutory term imposing an imperative legal obligation on the Court or State Parties.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  may: {
    en: "May",
    ar: "يجوز / للمحكمة الصلاحية الجوازية",
    explanationAr: "صيغة قانونية تفيد التخيير ومنح السلطة التقديرية للقاضي أو المدعي العام لاتخاذ إجراء معين.",
    explanationEn: "Permissive statutory term conferring judicial discretion to take procedural or substantive action.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  must: {
    en: "Must",
    ar: "يتعين وجوباً / يلزم",
    explanationAr: "تعبير إلزامي قاطع يوجب الامتثال للشرط الإجرائي دون أي مجال للترخيص أو الاستثناء.",
    explanationEn: "Imperative legal requirement admitting of no procedural exception.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  unless: {
    en: "Unless",
    ar: "إلا إذا / ما لم",
    explanationAr: "أداة استثناء تشريعية تحدد الشروط أو الحالات الخاصة التي تعطل سريان القاعدة الأصلية.",
    explanationEn: "Statutory condition establishing an exception to the general legal rule.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  provided: {
    en: "Provided that",
    ar: "شريطة أن / على أن",
    explanationAr: "عبارة استدراكية أو شرطية تقيد الحكم الأصلي بضرورة تحقق شروط وضمانات محددة.",
    explanationEn: "Proviso restricting or conditioning the application of a primary statutory clause.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  whereas: {
    en: "Whereas",
    ar: "وحيث إن / لما كان",
    explanationAr: "صيغة ديباجية تُستخدم في تسبيب القرارات والأحكام واستعراض موجبات إنشاء المحكمة.",
    explanationEn: "Preamble or recital term stating the foundational premises and rationale of a legal instrument.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  thereof: {
    en: "Thereof",
    ar: "من ذلك / بشأنه",
    explanationAr: "إحالة تشريعية إلى مادة أو فقرة أو شرط سابق في سياق النص القانوني.",
    explanationEn: "Statutory cross-reference indicating of that thing previously specified.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  herein: {
    en: "Herein",
    ar: "في هذا النظام / هنا",
    explanationAr: "إشارة تشريعية تفيد التحديد ضمن الوثيقة أو المادة الحالية.",
    explanationEn: "Legal drafting term referring to the present instrument, statute, or provision.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  notwithstanding: {
    en: "Notwithstanding",
    ar: "بصرف النظر عن / على الرغم من أحكام",
    explanationAr: "صيغة قانونية تفيد إعمال الحكم الحالي مع تقديم أسبقيته على أي نصوص أخرى متعارضة.",
    explanationEn: "Non-obstante clause ensuring the supremacy of a specific provision over conflicting rules.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  prejudice: {
    en: "Without prejudice",
    ar: "دون الإخلال بـ / مع عدم المساس",
    explanationAr: "قيد قانوني يضمن بقاء الحقوق أو الاختصاصات الأخرى سارية ونافذة دون تأثر.",
    explanationEn: "Saving clause ensuring that an action does not impair or waive other legal rights.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  accordance: {
    en: "In accordance with",
    ar: "وفقاً لأحكام / بموجب",
    explanationAr: "معيار مطابقة إجرائية يلزم بتطبيق القواعد واللوائح المحددة.",
    explanationEn: "Mandatory compliance clause requiring adherence to statutory standards.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  subject: {
    en: "Subject to",
    ar: "رهناً بـ / مع مراعاة أحكام",
    explanationAr: "صيغة تبعية قانونية تجعل سريان الحكم خاضعاً لأحكام مادة أخرى أو رقابة قضائية أعلى.",
    explanationEn: "Subordinating clause making an action contingent upon another statutory standard.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },
  pursuant: {
    en: "Pursuant to",
    ar: "بمقتضى / إنفاذاً لـ",
    explanationAr: "إسناد قانوني يحدد المصدر أو السند التشريعي المباشر للإجراء أو القرار.",
    explanationEn: "Statutory authorization clause referencing the formal legal basis for an action.",
    categoryAr: "الصياغة التشريعية والإلزام القانوني"
  },

  // --- Core State & Parties Concepts ---
  state: {
    en: "State",
    ar: "الدولة",
    explanationAr: "الكيان ذو السيادة في القانون الدولي الذي ينضم لنظام روما أو يمارس ولايته القضائية.",
    explanationEn: "A sovereign entity in international law bound by or cooperating under the Rome Statute.",
    categoryAr: "القانون الدولي والعلاقات بين الدول"
  },
  states: {
    en: "States",
    ar: "الدول",
    explanationAr: "الدول ذات السيادة الملتزمة بالتعاون أو الأعضاء في جمعية الدول الأطراف.",
    explanationEn: "Sovereign States parties or cooperating entities under international legal mechanisms.",
    categoryAr: "القانون الدولي والعلاقات بين الدول"
  },
  party: {
    en: "Party",
    ar: "طرف",
    explanationAr: "دولة طرف موقعة ومصدقة على نظام روما الأساسي، أو طرف في الخصومة القضائية (ادعاء أو دفاع).",
    explanationEn: "A State Party bound by the Statute, or a litigant party before the Chambers.",
    categoryAr: "أطراف التقاضي والمعاهدات"
  },
  parties: {
    en: "Parties",
    ar: "الدول الأطراف / أطراف الدعوى",
    explanationAr: "الدول المصادقة على نظام روما أو أطراف النزاع الجنائي أمام دوائر المحكمة.",
    explanationEn: "States bound by the Rome Statute, or opposing litigants (Prosecution and Defence).",
    categoryAr: "أطراف التقاضي والمعاهدات"
  },
  person: {
    en: "Person",
    ar: "شخص / متهم",
    explanationAr: "الشخص الطبيعي الخاضع للاختصاص الجنائي للمحكمة بموجب المادة 25 (المسؤولية الجنائية الفردية).",
    explanationEn: "A natural individual subject to individual criminal responsibility under Article 25.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  persons: {
    en: "Persons",
    ar: "أشخاص / متهمون",
    explanationAr: "الأفراد الطبيعيون الخاضعون لاختصاص ومحاكمة المحكمة الجنائية الدولية.",
    explanationEn: "Natural persons within the jurisdiction and procedural reach of the Court.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },

  // --- Crimes and Substantive Criminal Law ---
  crime: {
    en: "Crime",
    ar: "جريمة",
    explanationAr: "سلوك غير مشروع ينتهك أشد المعايير حماية للإنسانية ويقع تحت الولاية المادية للمحكمة.",
    explanationEn: "An unlawful act falling within the jurisdiction of the Court under Articles 5 to 8.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  crimes: {
    en: "Crimes",
    ar: "جرائم",
    explanationAr: "أشد الجرائم خطورة موضع اهتمام المجتمع الدولي بأسره: الإبادة، ضد الإنسانية، الحرب، العدوان.",
    explanationEn: "The most serious crimes of international concern under Article 5 of the Rome Statute.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  war: {
    en: "War",
    ar: "حرب / نزاع مسلح",
    explanationAr: "نزاع مسلح دولي أو غير ذي طابع دولي تنطبق بشأنه اتفاقيات جنيف ونظام روما.",
    explanationEn: "Armed conflict triggering the application of international humanitarian law.",
    categoryAr: "النزاعات المسلحة وجرائم الحرب"
  },
  humanity: {
    en: "Humanity",
    ar: "الإنسانية",
    explanationAr: "المجتمع البشري والسكان المدنيون المحميون من الهجمات الواسعة النطاق أو المنهجية بموجب المادة 7.",
    explanationEn: "The protected civilian population shielded from systematic or widespread attacks.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  genocide: {
    en: "Genocide",
    ar: "إبادة جماعية",
    explanationAr: "أفعال تُرتكب بقصد إهلاك جماعة قومية أو إثنية أو عرقية أو دينية كلياً أو جزئياً (المادة 6).",
    explanationEn: "Acts committed with specific intent to destroy a protected group in whole or in part.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  aggression: {
    en: "Aggression",
    ar: "العدوان",
    explanationAr: "استعمال القوة المسلحة ضد سيادة دولة أخرى أو سلامتها الإقليمية بالمخالفة لميثاق الأمم المتحدة (المادة 8 مكرراً).",
    explanationEn: "Use of armed force against sovereignty or territorial integrity under Article 8 bis.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  torture: {
    en: "Torture",
    ar: "التعذيب",
    explanationAr: "إلحاق ألم أو عذاب شديد، جسدياً أو عقلياً، بشخص محتجز أو تحت سيطرة المتهم (المادة 7 و 8).",
    explanationEn: "Intentional infliction of severe physical or mental pain or suffering on a detained person.",
    categoryAr: "الأركان المادية للجرائم"
  },
  murder: {
    en: "Murder",
    ar: "القتل العمد",
    explanationAr: "إزهاق روح إنسان عمداً أو إحداث وفاته دون مبرر قانوني في إطار الجرائم ضد الإنسانية أو جرائم الحرب.",
    explanationEn: "Unlawful killing of one or more persons with requisite intent under Articles 7 and 8.",
    categoryAr: "الأركان المادية للجرائم"
  },
  extermination: {
    en: "Extermination",
    ar: "الإبادة / الاستئصال",
    explanationAr: "فرض أحوال معيشية بقصد إهلاك جزء من السكان المدنيين، بما في ذلك الحرمان من الغذاء والدواء.",
    explanationEn: "Intentional infliction of conditions of life calculated to destroy part of a civilian population.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  enslavement: {
    en: "Enslavement",
    ar: "الاسترقاق",
    explanationAr: "ممارسة أي من السلطات المقترنة بحق الملكية على شخص، بما في ذلك الاتجار بالأشخاص.",
    explanationEn: "Exercise of powers attaching to the right of ownership over a person, including trafficking.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  deportation: {
    en: "Deportation",
    ar: "الإبعاد أو النقل القسري",
    explanationAr: "نقل قسري للأشخاص المعنيين من المنطقة التي يوجدون فيها بصورة مشروعة دون مسوغ دولي.",
    explanationEn: "Forced displacement of persons lawfully present in an area without permitted grounds.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  persecution: {
    en: "Persecution",
    ar: "الاضطهاد",
    explanationAr: "حرمان جماعة من حقوقها الأساسية بصورة متعمدة وشديدة لأسباب سياسية أو دينية أو عرقية.",
    explanationEn: "Intentional and severe deprivation of fundamental rights based on group identity.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  disappearance: {
    en: "Enforced disappearance",
    ar: "الاختفاء القسري",
    explanationAr: "إلقاء القبض على أشخاص أو احتجازهم من قبل دولة أو منظمة مع رفض الإقرار بذلك وحرمانهم من حماية القانون.",
    explanationEn: "Arrest, detention or abduction by or with authorization of a State followed by refusal to acknowledge.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  apartheid: {
    en: "Apartheid",
    ar: "الفصل العنصري",
    explanationAr: "أفعال لاإنسانية ترتكب في سياق نظام مؤسسي قائم على الاضطهاد المنهجي والسيطرة من جانب جماعة عرقية.",
    explanationEn: "Inhumane acts committed in the context of an institutionalized regime of racial oppression.",
    categoryAr: "الجرائم ضد الإنسانية"
  },

  // --- Criminal Responsibility & Elements of Crimes ---
  conduct: {
    en: "Conduct",
    ar: "السلوك / التصرف",
    explanationAr: "الفعل الإيجابي أو الامتناع الذي يصدر عن الشخص ويشكل الركن المادي للجريمة.",
    explanationEn: "The act or omission constituting the physical element (actus reus) of a crime.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  intent: {
    en: "Intent",
    ar: "القصد الجنائي",
    explanationAr: "عزم الجاني وإرادته على الانخراط في السلوك الإجرامي أو إحداث النتيجة الجرمية (المادة 30).",
    explanationEn: "The psychological volition to engage in criminal conduct or cause a specific consequence.",
    categoryAr: "الركن المعنوي"
  },
  knowledge: {
    en: "Knowledge",
    ar: "العلم / الإدراك",
    explanationAr: "إدراك الجاني وتيقنه من وجود الظرف الإجرامي أو حتمية وقوع النتيجة في المجرى العادي للأحداث.",
    explanationEn: "Awareness that a circumstance exists or that a consequence will occur in the ordinary course.",
    categoryAr: "الركن المعنوي"
  },
  element: {
    en: "Element",
    ar: "ركن / عنصر",
    explanationAr: "أحد الأركان المادية أو المعنوية أو السياقية التي تشترطها المحكمة لإثبات وقوع الجريمة.",
    explanationEn: "A constitutive legal requirement (material, mental, or contextual) of an offense.",
    categoryAr: "أركان الجرائم"
  },
  elements: {
    en: "Elements",
    ar: "أركان الجرائم",
    explanationAr: "الوثيقة التفسيرية المعتمدة بموجب المادة 9 لمساعدة المحكمة في تفسير وتطبيق الجرائم.",
    explanationEn: "The Elements of Crimes adopted under Article 9 to assist the Court in interpreting statutory offenses.",
    categoryAr: "أركان الجرائم"
  },
  omission: {
    en: "Omission",
    ar: "الامتناع عن فعل",
    explanationAr: "قعود الشخص أو إحجامه عن القيام بواجب قانوني يفرضه عليه القانون الجنائي الدولي.",
    explanationEn: "Failure to perform a mandatory legal duty recognized under international criminal law.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  liability: {
    en: "Liability",
    ar: "المسؤولية القانونية",
    explanationAr: "التبعة الجنائية المترتبة على ارتكاب الجريمة أو المساهمة فيها أو الأمر بها.",
    explanationEn: "Accountability under law for acts, participation, command, or failure to prevent offenses.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  responsibility: {
    en: "Responsibility",
    ar: "المسؤولية الجنائية",
    explanationAr: "المسؤولية الفردية التي تلحق بالشخص الطبيعي دون اعتداد بحصانته أو صفته الرسمية (المادتان 25 و 27).",
    explanationEn: "Individual criminal accountability attaching to natural persons irrespective of official rank.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },

  // --- Court Organs & Judicial Architecture ---
  court: {
    en: "Court",
    ar: "المحكمة الجنائية الدولية",
    explanationAr: "المحكمة الجنائية الدولية كهيئة قضائية دولية دائمة ومستقلة مقرها لاهاي بهولندا.",
    explanationEn: "The International Criminal Court as an independent judicial institution based in The Hague.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  statute: {
    en: "Statute",
    ar: "النظام الأساسي",
    explanationAr: "نظام روما الأساسي المعتمد عام 1998 الذي يمثل المعاهدة المنشئة للمحكمة والمحدد لاختصاصاتها.",
    explanationEn: "The Rome Statute establishing the Court and defining its substantive and procedural regime.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  chamber: {
    en: "Chamber",
    ar: "دائرة قضائية",
    explanationAr: "هيئة قضائية مكونة من عدد من قضاة المحكمة: تمهيدية (1-3 قضاة)، محاكمة (3)، أو استئناف (5).",
    explanationEn: "A judicial bench of the Court: Pre-Trial, Trial, or Appeals Chamber.",
    categoryAr: "الدوائر القضائية"
  },
  chambers: {
    en: "Chambers",
    ar: "الدوائر القضائية",
    explanationAr: "الشعبة القضائية للمحكمة التي تضم الدائرة التمهيدية، دائرة المحاكمة، ودائرة الاستئناف.",
    explanationEn: "The collective judicial divisions of the Court handling cases from initiation to final appeal.",
    categoryAr: "الدوائر القضائية"
  },
  prosecutor: {
    en: "Prosecutor",
    ar: "المدعي العام",
    explanationAr: "رئيس مكتب المدعي العام المنتخب من جمعية الدول الأطراف للتحقيق والملاحقة باستقلالية تامة (المادة 42).",
    explanationEn: "The independent organ head responsible for investigating and prosecuting crimes under Article 42.",
    categoryAr: "مكتب المدعي العام"
  },
  prosecution: {
    en: "Prosecution",
    ar: "الادعاء / الملاحقة الجنائية",
    explanationAr: "مكتب المدعي العام وهيئة الاتهام التي تمثل المجتمع الدولي والعدالة أمام دوائر المحكمة.",
    explanationEn: "The Office of the Prosecutor acting as the prosecuting authority before the Chambers.",
    categoryAr: "مكتب المدعي العام"
  },
  registrar: {
    en: "Registrar",
    ar: "مسجل المحكمة",
    explanationAr: "المسؤول الأول عن قلم المحكمة الذي يدير الجوانب الإدارية والخدمية وحماية الضحايا والشهود والدفاع.",
    explanationEn: "The principal administrative officer heading the Registry under Article 43.",
    categoryAr: "أمانة السجل وقلم المحكمة"
  },
  registry: {
    en: "Registry",
    ar: "قلم المحكمة / أمانة السجل",
    explanationAr: "الجهاز المسؤول عن الجوانب غير القضائية لإدارة المحكمة وحفظ السجلات ودعم الدفاع والضحايا.",
    explanationEn: "The organ responsible for non-judicial administration, witness support, and court records.",
    categoryAr: "أمانة السجل وقلم المحكمة"
  },
  presidency: {
    en: "Presidency",
    ar: "هيئة الرئاسة",
    explanationAr: "هيئة مكونة من رئيس المحكمة ونائبيه تتولى الإدارة العليا للمحكمة والمهام المنوطة بها في النظام.",
    explanationEn: "The executive organ composed of the President and two Vice-Presidents.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  judge: {
    en: "Judge",
    ar: "قاضٍ",
    explanationAr: "عضو قضائي منتخب في المحكمة يتمتع بأعلى درجات النزاهة والكفاءة والحياد بموجب المادة 36.",
    explanationEn: "Elected judicial officer of high moral character, impartiality, and integrity under Article 36.",
    categoryAr: "الدوائر القضائية"
  },
  judges: {
    en: "Judges",
    ar: "القضاة",
    explanationAr: "الهيئة القضائية المكونة من 18 قاضياً ينتخبون لولاية مدتها تسع سنوات غير قابلة للتجديد.",
    explanationEn: "The 18 judges elected by the Assembly of States Parties for non-renewable 9-year terms.",
    categoryAr: "الدوائر القضائية"
  },

  // --- Procedural Steps & Actions ---
  investigation: {
    en: "Investigation",
    ar: "التحقيق الجنائي",
    explanationAr: "مرحلة جمع الأدلة والشهادات والتحري عن الجرائم لتحديد ما إذا كان هناك أساس لمحاكمة أشخاص.",
    explanationEn: "The formal evidentiary inquiry undertaken by the Prosecutor to determine criminal charges.",
    categoryAr: "الإجراءات والتحقيق"
  },
  investigations: {
    en: "Investigations",
    ar: "التحقيقات",
    explanationAr: "إجراءات التحري وجمع الأدلة التي يباشرها مكتب المدعي العام في الحالات المحالة للمحكمة.",
    explanationEn: "The full investigative processes across designated situations before the Court.",
    categoryAr: "الإجراءات والتحقيق"
  },
  trial: {
    en: "Trial",
    ar: "المحاكمة",
    explanationAr: "المرحلة القضائية العلنية والشفوية التي تُعرض فيها الأدلة وتُفصل فيها التهم بحضور المتهم.",
    explanationEn: "The substantive public oral proceedings determining the guilt or innocence of the accused.",
    categoryAr: "المحاكمة والإجراءات"
  },
  trials: {
    en: "Trials",
    ar: "المحاكمات",
    explanationAr: "الإجراءات القضائية التي تعقدها دوائر المحاكمة للفصل في التهم الموجهة للمتهمين.",
    explanationEn: "Substantive trial proceedings conducted by Trial Chambers under Part 6.",
    categoryAr: "المحاكمة والإجراءات"
  },
  hearing: {
    en: "Hearing",
    ar: "جلسة استماع",
    explanationAr: "جلسة قضائية علنية أو مغلقة تنعقد للاستماع لأقوال الأطراف أو الشهود أو نظر الدفوع والطلبات.",
    explanationEn: "A formal court session to receive testimony, hear arguments, or decide interim motions.",
    categoryAr: "المحاكمة والإجراءات"
  },
  hearings: {
    en: "Hearings",
    ar: "جلسات الاستماع",
    explanationAr: "الجلسات المنعقدة أمام مختلف دوائر المحكمة للنظر في الوقائع وإصدار الأوامر.",
    explanationEn: "Judicial sessions conducted before Chambers across procedural phases.",
    categoryAr: "المحاكمة والإجراءات"
  },
  order: {
    en: "Order",
    ar: "أمر قضائي",
    explanationAr: "قرار ملزم صادر عن القاضي أو الدائرة يفرض إجراءً محدداً أو يوجه تعليمات للمشاركين أو الدول.",
    explanationEn: "A binding formal judicial directive issued by a Chamber or Single Judge.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  orders: {
    en: "Orders",
    ar: "أوامر قضائية",
    explanationAr: "الأوامر والقرارات الإجرائية الصادرة عن المحكمة لضمان حسن سير العدالة وسير المحاكمة.",
    explanationEn: "Judicial instructions and mandatory directions issued by the Chambers.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  decision: {
    en: "Decision",
    ar: "قرار قضائي",
    explanationAr: "فصل قضائي في مسألة إجرائية أو تمهيدية أو موضوعية، مثل قرارات المقبولية وتأكيد التهم.",
    explanationEn: "A formal judicial determination disposing of procedural, interlocutory, or substantive issues.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  decisions: {
    en: "Decisions",
    ar: "قرارات قضائية",
    explanationAr: "مجموع الأحكام والقرارات الصادرة عن دوائر المحكمة في الدعاوى المعروضة أمامها.",
    explanationEn: "Judicial rulings and orders resolving disputes between parties in proceedings.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  judgment: {
    en: "Judgment",
    ar: "حكم قضائي / حكم الإدانة أو البراءة",
    explanationAr: "الحكم النهائي المسبب الصادر عن دائرة المحاكمة بالفصل في إدانة المتهم أو براءته (المادة 74).",
    explanationEn: "The final reasoned ruling of the Trial Chamber establishing guilt or acquittal under Article 74.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  sentence: {
    en: "Sentence",
    ar: "عقوبة / حكم بالعقوبة",
    explanationAr: "الجزاء الجنائي المقضي به ضد المدان، ويشمل السجن لمدة تصل لـ 30 عاماً أو السجن المؤبد والغرامات.",
    explanationEn: "The penal sanction imposed following conviction, including imprisonment up to 30 years or life.",
    categoryAr: "العقوبات والجزاءات"
  },
  conviction: {
    en: "Conviction",
    ar: "إدانة قضائية",
    explanationAr: "ثبوت مسؤولية المتهم الجنائية عن الجرائم المنسوبة إليه بما لا يدع مجالاً للشك المعقول.",
    explanationEn: "A judicial finding of guilt established beyond reasonable doubt under Article 66.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  acquittal: {
    en: "Acquittal",
    ar: "حكم بالبراءة",
    explanationAr: "قرار قضائي بتبرئة المتهم من التهم وإخلاء سبيله فوراً لعدم كفاية الأدلة أو انتفاء الجريمة.",
    explanationEn: "A judicial verdict declaring the accused not guilty, ordering immediate release.",
    categoryAr: "الأحكام والقرارات القضائية"
  },
  appeal: {
    en: "Appeal",
    ar: "استئناف",
    explanationAr: "طعن يرفعه المدعي العام أو المحكوم عليه أمام دائرة الاستئناف ضد قرارات الإدانة أو العقوبة.",
    explanationEn: "Review proceeding before the Appeals Chamber challenging verdicts or sentences under Part 8.",
    categoryAr: "الطعون والاستئناف"
  },
  revision: {
    en: "Revision",
    ar: "التماس إعادة النظر",
    explanationAr: "إجراء استثنائي بموجب المادة 84 لمراجعة الحكم النهائي عند ظهور أدلة حاسمة جديدة لم تكن متوفرة.",
    explanationEn: "Extraordinary post-final judgment remedy under Article 84 upon discovery of new evidence.",
    categoryAr: "الطعون والاستئناف"
  },

  // --- Arrest, Custody, & Pre-Trial ---
  warrant: {
    en: "Warrant",
    ar: "أمر قبض / مذكرة قضائية",
    explanationAr: "أمر رسمي صادر عن الدائرة التمهيدية يلزم الدول بالقبض على الشخص وتسليمه للمحكمة.",
    explanationEn: "A formal judicial order issued under Article 58 authorizing the arrest and surrender of a suspect.",
    categoryAr: "أوامر القبض والمثول"
  },
  arrest: {
    en: "Arrest",
    ar: "إلقاء القبض / توقيف",
    explanationAr: "سلب حرية الشخص المشتبه به أو المتهم بغرض ضمان مثوله أمام المحكمة أو منعه من إعاقة التحقيق.",
    explanationEn: "Deprivation of liberty to ensure a suspect appearance or prevent interference with proceedings.",
    categoryAr: "أوامر القبض والمثول"
  },
  summons: {
    en: "Summons",
    ar: "أمر حضور / تكليف بالحضور",
    explanationAr: "أمر موجه للشخص للحضور طواعية في موعد محدد إذا كان كافياً لضمان مثوله دون اللجوء للقبض.",
    explanationEn: "A judicial directive requiring voluntary appearance when arrest is not strictly necessary.",
    categoryAr: "أوامر القبض والمثول"
  },
  appearance: {
    en: "Appearance",
    ar: "المثول أمام المحكمة",
    explanationAr: "حضور الشخص شخصياً أمام الدائرة التمهيدية للتحقق من هويته وإبلاغه بالتهم الموجهة إليه.",
    explanationEn: "The initial hearing under Article 60 where identity and rights are confirmed before the Chamber.",
    categoryAr: "الإجراءات التمهيدية"
  },
  surrender: {
    en: "Surrender",
    ar: "تسليم الشخص للمحكمة",
    explanationAr: "تسليم دولة لشخص إلى المحكمة الجنائية الدولية وفق أحكام النظام الأساسي (يختلف عن التسليم الثنائي).",
    explanationEn: "The delivery of a person by a State to the Court under Article 102.",
    categoryAr: "التعاون الدولي والتسليم"
  },
  extradition: {
    en: "Extradition",
    ar: "تسليم المجرمين بين الدول",
    explanationAr: "تسليم شخص من دولة إلى دولة أخرى عملاً بمعاهدة أو تشريع وطني (المادة 102).",
    explanationEn: "The delivery of a person by one State to another pursuant to treaty or national law.",
    categoryAr: "التعاون الدولي والتسليم"
  },
  detention: {
    en: "Detention",
    ar: "الحبس الاحتياطي / الاحتجاز",
    explanationAr: "إبقاء الشخص رهن الحبس في مركز احتجاز المحكمة بانتظار المحاكمة أو بعد صدور الحكم.",
    explanationEn: "Confinement in the Court detention facilities pending trial or enforcement of sentence.",
    categoryAr: "إجراءات الحبس والإفراج"
  },
  custody: {
    en: "Custody",
    ar: "الاحتجاز / الحراسة القضائية",
    explanationAr: "وضع الشخص تحت السيطرة المباشرة للمحكمة وسلطات الاحتجاز.",
    explanationEn: "Physical control and supervision of an individual by law enforcement or Court authorities.",
    categoryAr: "إجراءات الحبس والإفراج"
  },
  release: {
    en: "Interim release",
    ar: "الإفراج المؤقت",
    explanationAr: "إخلاء سبيل الشخص المحتجز بشروط أو بغير شروط بموجب المادة 60 لعدم وجود مبرر لاستمرار حبسه.",
    explanationEn: "Release from pre-trial custody with or without conditions pursuant to Article 60.",
    categoryAr: "إجراءات الحبس والإفراج"
  },
  bail: {
    en: "Bail / Guarantees",
    ar: "الكفالة / الضمانات المالية",
    explanationAr: "ضمانات مالية أو تعهدات تفرضها المحكمة لضمان عدم فرار الشخص عند منحه الإفراج المؤقت.",
    explanationEn: "Financial or personal guarantees ensuring appearance upon provisional release.",
    categoryAr: "إجراءات الحبس والإفراج"
  },

  // --- Charges and Confirmation ---
  charge: {
    en: "Charge",
    ar: "تهمة جنائية",
    explanationAr: "ادعاء قانوني ومادي رسمي يوجهه المدعي العام ينسب فيه فعلاً إجرامياً محدداً للمتهم.",
    explanationEn: "A formal accusation alleging the commission of a specific crime by an individual.",
    categoryAr: "لائحة الاتهام وتأكيد التهم"
  },
  charges: {
    en: "Charges",
    ar: "التهم الجنائية",
    explanationAr: "مجموع الجرائم والادعاءات المفصلة في وثيقة حصر التهم التي يطلب الادعاء محاكمة المتهم عنها.",
    explanationEn: "The counts and factual specifications alleged against the accused in the Document Containing the Charges.",
    categoryAr: "لائحة الاتهام وتأكيد التهم"
  },
  confirmation: {
    en: "Confirmation of charges",
    ar: "تأكيد التهم",
    explanationAr: "جلسة وقرار حاسم للدائرة التمهيدية بموجب المادة 61 لبيان ما إذا كانت الأدلة كافية لإحالة المتهم للمحاكمة.",
    explanationEn: "Pre-trial judicial vetting under Article 61 determining whether substantial grounds exist to commit for trial.",
    categoryAr: "لائحة الاتهام وتأكيد التهم"
  },

  // --- Evidence, Proof & Witnesses ---
  evidence: {
    en: "Evidence",
    ar: "الأدلة والبينات",
    explanationAr: "المعلومات والمستندات والشهادات المعروضة أمام المحكمة للتحقق من صحة الوقائع المنسوبة.",
    explanationEn: "Materials, documents, physical items, and testimonies presented to prove or disprove facts.",
    categoryAr: "الإثبات والأدلة"
  },
  witness: {
    en: "Witness",
    ar: "شاهد",
    explanationAr: "شخص يدلي بإفادة شفوية أو خطية مشفوعة بيمين أمام الدائرة حول وقائع شاهدها أو عايشها.",
    explanationEn: "An individual providing oral or written testimony under solemn declaration before the Court.",
    categoryAr: "الشهود والضحايا"
  },
  witnesses: {
    en: "Witnesses",
    ar: "الشهود",
    explanationAr: "مجموع الأشخاص المستدعين لأداء الشهادة أمام المحكمة، وتوفر لهم وحدة الحماية تدابير خاصة.",
    explanationEn: "Individuals summoned to give testimony under the protective auspices of the Registry.",
    categoryAr: "الشهود والضحايا"
  },
  victim: {
    en: "Victim",
    ar: "ضحية / مجني عليه",
    explanationAr: "شخص طبيعي أصابه ضرر نتيجة ارتكاب أي جريمة تدخل في اختصاص المحكمة (المادة 68 والقاعدة 85).",
    explanationEn: "A person who has suffered physical, psychological, or material harm from statutory crimes.",
    categoryAr: "الشهود والضحايا"
  },
  victims: {
    en: "Victims",
    ar: "الضحايا",
    explanationAr: "المجني عليهم الذين يملكون حق المشاركة في الإجراءات وطلب رد الاعتبار وجبر الضرر (المادتان 68 و 75).",
    explanationEn: "Persons entitled under the Statute to participate through legal counsel and obtain reparations.",
    categoryAr: "الشهود والضحايا"
  },
  expert: {
    en: "Expert witness",
    ar: "شاهد خبير / خبير معتمد",
    explanationAr: "متخصص في مجال علمي أو عسكري أو طبي أو جنائي تستعين به الدائرة لتقديم استنتاجات فنية.",
    explanationEn: "A qualified specialist summoned to give professional opinion evidence on technical matters.",
    categoryAr: "الإثبات والأدلة"
  },
  testimony: {
    en: "Testimony",
    ar: "شهادة / إفادة قضائية",
    explanationAr: "الأقوال الشفوية التي يدلي بها الشاهد بعد أداء التعهد الرسمي بقول الحق والصدق.",
    explanationEn: "Oral statement given by a witness under solemn declaration pursuant to Article 69.",
    categoryAr: "الإثبات والأدلة"
  },
  oath: {
    en: "Solemn undertaking / Oath",
    ar: "التعهد الرسمي / اليمين",
    explanationAr: "التزام قانوني يقطعه الشاهد أو الخبير على نفسه قبل الإدلاء بإفادته لضمان صدق الشهادة وعدم الزور.",
    explanationEn: "Formal declaration pledging to speak the truth before testifying under Rule 66.",
    categoryAr: "الإثبات والأدلة"
  },
  proof: {
    en: "Burden of proof",
    ar: "عبء الإثبات",
    explanationAr: "واجب يقع حصراً على عاتق المدعي العام لإثبات إدانة المتهم بما لا يدع مجالاً للشك المعقول (المادة 66).",
    explanationEn: "The duty falling exclusively on the Prosecutor to establish the guilt of the accused.",
    categoryAr: "الإثبات والأدلة"
  },
  reparation: {
    en: "Reparation",
    ar: "جبر الضرر / رد الاعتبار",
    explanationAr: "التزام قضائي بإنصاف الضحايا يشمل التعويض المالي، وإعادة التأهيل، والاعتذار الرسمي، وإصلاح الأضرار.",
    explanationEn: "Judicial remedy under Article 75 comprising restitution, indemnification, and rehabilitation.",
    categoryAr: "حقوق الضحايا وجبر الضرر"
  },
  reparations: {
    en: "Reparations",
    ar: "التعويضات ورد الاعتبار",
    explanationAr: "التدابير المادية والمعنوية المقضي بها للضحايا والمتضررين من الجرائم إما مباشرة أو عبر صندوق الاستئمان.",
    explanationEn: "Redress measures granted to victims either directly against the convicted person or via Trust Fund.",
    categoryAr: "حقوق الضحايا وجبر الضرر"
  },

  // --- Defence and Rights of the Accused ---
  defence: {
    en: "Defence",
    ar: "هيئة الدفاع / حقوق الدفاع",
    explanationAr: "الفريق القانوني الممثل للمتهم أو الضمانات المكفولة للمشتبه به لمواجهة تهم الادعاء (المادة 67).",
    explanationEn: "The legal representation for the accused and the procedural guarantees codified in Article 67.",
    categoryAr: "حقوق الدفاع والمحاكمة العادلة"
  },
  counsel: {
    en: "Defence counsel",
    ar: "محامي الدفاع",
    explanationAr: "المحامي المؤهل المقيد في جدول المحكمة الذي يتولى الدفاع عن المتهم أو تمثيل الضحايا.",
    explanationEn: "Qualified legal practitioner admitted to the Court List of Counsel representing parties.",
    categoryAr: "حقوق الدفاع والمحاكمة العادلة"
  },
  innocence: {
    en: "Presumption of innocence",
    ar: "قرينة البراءة",
    explanationAr: "المبدأ الجوهري الذي يقضي بأن كل شخص يُعتبر بريئاً حتى تثبت إدانته وفقاً للقانون (المادة 66).",
    explanationEn: "The fundamental tenet that everyone is presumed innocent until proven guilty beyond reasonable doubt.",
    categoryAr: "حقوق الدفاع والمحاكمة العادلة"
  },
  silence: {
    en: "Right to remain silent",
    ar: "الحق في التزام الصمت",
    explanationAr: "حق المتهم في عدم الإدلاء بأي اعتراف أو إجابة دون أن يُفسر صمته دليلاً على إدانته (المادة 67).",
    explanationEn: "The privilege against self-incrimination ensuring silence is not used as evidence of guilt.",
    categoryAr: "حقوق الدفاع والمحاكمة العادلة"
  },

  // --- Common Legal Verbs & Actions ---
  establish: {
    en: "Establish",
    ar: "ينشئ / يؤسس",
    explanationAr: "فعل قانوني يفيد إنشاء هيئة أو لجنة أو نظام بموجب نص تشريعي.",
    explanationEn: "To formally create or set up an institution, organ, or legal framework.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  adopt: {
    en: "Adopt",
    ar: "يعتمد / يتبنى",
    explanationAr: "الموافقة الرسمية على وثيقة أو نص قانوني ليصبح نافذاً وملزماً.",
    explanationEn: "To formally accept or approve a legal instrument or provision.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  apply: {
    en: "Apply",
    ar: "يطبق / يسري على",
    explanationAr: "إعمال النص القانوني على وقائع أو أشخاص محددين.",
    explanationEn: "To put a legal rule into effect regarding specific facts or persons.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  submit: {
    en: "Submit",
    ar: "يقدم / يحيل",
    explanationAr: "تقديم طلب أو مستند أو دفع قانوني إلى المحكمة أو جهة الاختصاص.",
    explanationEn: "To formally present a request, document, or argument to the Court.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  provide: {
    en: "Provide / Set out",
    ar: "ينص على / يقدم",
    explanationAr: "اشتمال النص القانوني على حكم أو شرط أو التزام محدد.",
    explanationEn: "To specify or stipulate a legal rule, condition, or obligation within a text.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  refer: {
    en: "Refer",
    ar: "يحيل / يشير إلى",
    explanationAr: "إحالة حالة أو قضية إلى المدعي العام أو المحكمة من قبل دولة أو مجلس الأمن.",
    explanationEn: "To formally remit a situation or case to the Prosecutor or Court.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  decide: {
    en: "Decide",
    ar: "يفصل / يقرر",
    explanationAr: "إصدار حكم أو قرار قضائي ملزم في مسألة معروضة على الدائرة.",
    explanationEn: "To make a formal judicial determination on an issue before the Chamber.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  notify: {
    en: "Notify",
    ar: "يخطر / يبلغ",
    explanationAr: "إبلاغ طرف أو شخص رسمياً بإجراء أو قرار صادر عن المحكمة.",
    explanationEn: "To formally inform a party or person of a Court action or decision.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  authorize: {
    en: "Authorize",
    ar: "يخول / يأذن",
    explanationAr: "منح السلطة القانونية للقيام بفعل معين بموجب النظام الأساسي.",
    explanationEn: "To give formal permission or legal authority for an action.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  exercise: {
    en: "Exercise",
    ar: "يمارس / يباشر",
    explanationAr: "إعمال السلطة أو الاختصاص أو الحق القانوني في حالة محددة.",
    explanationEn: "To put into use or practice a legal power, jurisdiction, or right.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  commit: {
    en: "Commit",
    ar: "يرتكب / يقترف",
    explanationAr: "القيام بفعل يشكل جريمة أو مخالفة قانونية.",
    explanationEn: "To perpetrate or carry out a crime or harmful act.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  concern: {
    en: "Concern",
    ar: "يتعلق بـ / يخص",
    explanationAr: "ارتباط النص أو الإجراء بمسألة أو شخص أو حالة معينة.",
    explanationEn: "To relate to or be about a specific matter, person, or situation.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  require: {
    en: "Require",
    ar: "يتطلب / يستلزم",
    explanationAr: "فرض شرط أو التزام ضروري بموجب القواعد القانونية.",
    explanationEn: "To make something necessary or mandatory under legal rules.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  specify: {
    en: "Specify",
    ar: "يحدد / يعين",
    explanationAr: "ذكر تفاصيل أو شروط محددة بوضوح في النص القانوني.",
    explanationEn: "To identify or state clearly a specific detail, condition, or requirement.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  determine: {
    en: "Determine",
    ar: "يقرر / يحدد",
    explanationAr: "التوصل إلى قرار أو نتيجة قانونية بعد فحص الوقائع والأدلة.",
    explanationEn: "To reach a legal decision or conclusion after examining facts and evidence.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  grant: {
    en: "Grant",
    ar: "يمنح / يوافق على",
    explanationAr: "الموافقة الرسمية على طلب أو منح حق أو حصانة.",
    explanationEn: "To formally agree to a request or bestow a right or immunity.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  refuse: {
    en: "Refuse",
    ar: "يرفض / يأبى",
    explanationAr: "عدم الموافقة على طلب أو إجراء قانوني مقدم.",
    explanationEn: "To decline or reject a request or legal action.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  issue: {
    en: "Issue",
    ar: "يصدر",
    explanationAr: "إخراج أمر أو قرار أو مذكرة من جهة الاختصاص رسمياً.",
    explanationEn: "To formally output an order, decision, or warrant from a competent authority.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  confirm: {
    en: "Confirm",
    ar: "يؤكد / يصدق",
    explanationAr: "إقرار صحة إجراء أو تهم أو قرار سابق.",
    explanationEn: "To ratify or establish the validity of a prior action, charge, or decision.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  provision: {
    en: "Provision",
    ar: "نص / حكم قانوني",
    explanationAr: "فقرة أو مادة في النظام الأساسي تتضمن قاعدة أو التزاماً.",
    explanationEn: "A clause or article in a legal instrument containing a rule or obligation.",
    categoryAr: "المفاهيم العامة"
  },
  appropriate: {
    en: "Appropriate",
    ar: "مناسب / ملائم",
    explanationAr: "ما يتوافق مع مقتضيات العدالة أو الضرورة الإجرائية.",
    explanationEn: "Suitable or proper in the circumstances of justice or procedure.",
    categoryAr: "المفاهيم العامة"
  },
  necessary: {
    en: "Necessary",
    ar: "ضروري / لازم",
    explanationAr: "ما لا يمكن الاستغناء عنه لضمان حسن سير العدالة.",
    explanationEn: "Indispensable or essential for the proper administration of justice.",
    categoryAr: "المفاهيم العامة"
  },
  sufficient: {
    en: "Sufficient",
    ar: "كافٍ",
    explanationAr: "ما يفي بالمعيار الأدنى المطلوب للإثبات أو الإجراء.",
    explanationEn: "Meeting the minimum required threshold for evidence or procedure.",
    categoryAr: "المفاهيم العامة"
  },
  substantial: {
    en: "Substantial",
    ar: "جوهري / جسيم",
    explanationAr: "ما له أهمية كبيرة أو تأثير بالغ على نتيجة الدعوى.",
    explanationEn: "Of considerable importance, size, or worth; affecting the outcome of a case.",
    categoryAr: "المفاهيم العامة"
  },
  request: {
    en: "Request",
    ar: "طلب / يطلب",
    explanationAr: "التماس رسمي يقدمه طرف للمطالبة باتخاذ إجراء أو الحصول على معلومة.",
    explanationEn: "A formal application to the Court seeking a specific action or information.",
    categoryAr: "أفعال وتصرفات قانونية"
  },

  // --- Common Substantive Nouns ---
  information: {
    en: "Information",
    ar: "معلومات",
    explanationAr: "البيانات والحقائق التي تُجمع أو تُقدم في سياق التحقيق أو المحاكمة.",
    explanationEn: "Facts and data gathered or presented during investigations or trials.",
    categoryAr: "مفاهيم عامة"
  },
  report: {
    en: "Report",
    ar: "تقرير",
    explanationAr: "وثيقة مكتوبة تعرض نتائج أو وقائع أو توصيات في مسألة قانونية.",
    explanationEn: "A written document detailing findings, facts, or recommendations.",
    categoryAr: "مفاهيم عامة"
  },
  document: {
    en: "Document",
    ar: "وثيقة / مستند",
    explanationAr: "أي وسيلة مادية أو إلكترونية مسجل عليها معلومات ذات قيمة إثباتية.",
    explanationEn: "Any physical or electronic record containing information of evidentiary value.",
    categoryAr: "مفاهيم عامة"
  },
  situation: {
    en: "Situation",
    ar: "حالة",
    explanationAr: "نطاق زمني وجغرافي وموضوعي محدد يُباشر فيه المدعي العام تحقيقاته (مثل الحالة في دارفور).",
    explanationEn: "A defined temporal and geographic context in which the Prosecutor investigates.",
    categoryAr: "مفاهيم عامة"
  },
  case: {
    en: "Case",
    ar: "قضية / دعوى",
    explanationAr: "إجراء قضائي محدد ضد أشخاص معينين عن جرائم محددة ضمن حالة أوسع.",
    explanationEn: "Specific judicial proceedings against identified individuals for specific crimes.",
    categoryAr: "مفاهيم عامة"
  },
  legal: {
    en: "Legal",
    ar: "قانوني",
    explanationAr: "كل ما يتفق مع القانون أو يستند إلى أحكام نظام روما الأساسي.",
    explanationEn: "Relating to law or based on the provisions of the Rome Statute.",
    categoryAr: "أوصاف قانونية"
  },
  judicial: {
    en: "Judicial",
    ar: "قضائي",
    explanationAr: "كل ما يتعلق بعمل القضاة أو الدوائر أو ممارسة السلطة القضائية.",
    explanationEn: "Relating to the functions of judges, chambers, or the exercise of judicial power.",
    categoryAr: "أوصاف قانونية"
  },
  criminal: {
    en: "Criminal",
    ar: "جنائي",
    explanationAr: "يتعلق بالجرائم والعقوبات والمسؤولية الجنائية الفردية.",
    explanationEn: "Relating to crimes, penalties, and individual criminal responsibility.",
    categoryAr: "أوصاف قانونية"
  },
  international: {
    en: "International",
    ar: "دولي",
    explanationAr: "يتعلق بالعلاقات بين الدول أو المجتمع الدولي ككل.",
    explanationEn: "Relating to relations between States or the international community.",
    categoryAr: "أوصاف قانونية"
  },
  member: {
    en: "Member",
    ar: "عضو",
    explanationAr: "شخص ينتمي إلى هيئة أو لجنة أو دولة طرف في نظام روما.",
    explanationEn: "An individual belonging to a body, committee, or a State Party.",
    categoryAr: "مفاهيم عامة"
  },
  assembly: {
    en: "Assembly of States Parties",
    ar: "جمعية الدول الأطراف",
    explanationAr: "الجهاز الإداري والرقابي للمحكمة المكون من ممثلي الدول الأطراف.",
    explanationEn: "The management oversight and legislative body of the ICC.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  official: {
    en: "Official",
    ar: "رسمي / موظف",
    explanationAr: "صفة لما يصدر عن المحكمة، أو شخص يشغل وظيفة رسمية فيها.",
    explanationEn: "Relating to an office or post, or a person holding public office.",
    categoryAr: "أوصاف قانونية"
  },
  capacity: {
    en: "Official capacity",
    ar: "صفة رسمية",
    explanationAr: "الصفة التي يباشر بها الشخص مهامه، ولا تعفيه من المسؤولية (المادة 27).",
    explanationEn: "The formal role held by a person; does not exempt from criminal responsibility.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  immunity: {
    en: "Immunity",
    ar: "حصانة",
    explanationAr: "امتيازات تمنع ملاحقة بعض الأشخاص، وهي غير معتد بها أمام المحكمة (المادة 27).",
    explanationEn: "Privileges preventing legal proceedings, which do not bar ICC jurisdiction.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  national: {
    en: "National",
    ar: "وطني / قومي",
    explanationAr: "يتعلق بدولة محددة أو قضاء داخلي.",
    explanationEn: "Relating to a specific nation or domestic jurisdiction.",
    categoryAr: "أوصاف قانونية"
  },
  general: {
    en: "General",
    ar: "عام",
    explanationAr: "يتعلق بالقواعد الكلية أو المبادئ العامة للقانون.",
    explanationEn: "Relating to all parts or a whole group; universal legal rules.",
    categoryAr: "أوصاف قانونية"
  },
  special: {
    en: "Special / Specific",
    ar: "خاص / محدد",
    explanationAr: "يتعلق بحالة معينة أو استثناء من قاعدة عامة.",
    explanationEn: "Distinguished by some unusual quality or relating to a particular case.",
    categoryAr: "أوصاف قانونية"
  },
  agreement: {
    en: "Agreement",
    ar: "اتفاق / اتفاقية",
    explanationAr: "تفاهم ملزم بين طرفين أو أكثر (مثل اتفاق المقر).",
    explanationEn: "A negotiated and typically legally binding arrangement.",
    categoryAr: "المعاهدات والاتفاقات"
  },
  convention: {
    en: "Convention",
    ar: "اتفاقية",
    explanationAr: "معاهدة دولية عامة (مثل اتفاقيات جنيف).",
    explanationEn: "An international agreement between different countries.",
    categoryAr: "المعاهدات والاتفاقات"
  },
  treaty: {
    en: "Treaty",
    ar: "معاهدة",
    explanationAr: "وثيقة قانونية دولية ملزمة تحكم العلاقات بين الدول.",
    explanationEn: "A formally concluded and ratified agreement between States.",
    categoryAr: "المعاهدات والاتفاقات"
  },
  organization: {
    en: "Organization",
    ar: "منظمة",
    explanationAr: "كيان مؤسسي (مثل الأمم المتحدة) يتعاون مع المحكمة.",
    explanationEn: "An organized body of people with a particular purpose.",
    categoryAr: "مفاهيم عامة"
  },
  individual: {
    en: "Individual",
    ar: "فرد / فردي",
    explanationAr: "الشخص الطبيعي الملاحق أمام المحكمة بصورة منفردة.",
    explanationEn: "A single human being as distinct from a group or institution.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  group: {
    en: "Group",
    ar: "جماعة",
    explanationAr: "مجموعة من الأشخاص يشتركون في خصائص معينة (قومية، عرقية، دينية).",
    explanationEn: "A number of people located, gathered, or classed together.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  accused: {
    en: "Accused",
    ar: "المتهم",
    explanationAr: "الشخص الذي تم تأكيد التهم ضده وأحيل للمحاكمة.",
    explanationEn: "A person or group of people who are charged with or on trial for a crime.",
    categoryAr: "أطراف التقاضي والمعاهدات"
  },
  suspect: {
    en: "Suspect",
    ar: "المشتبه به",
    explanationAr: "الشخص الذي توجد أسباب وجيهة للاعتقاد بارتكابه جريمة قبل توجيه التهم رسمياً.",
    explanationEn: "A person thought to be guilty of a crime or offense.",
    categoryAr: "أطراف التقاضي والمعاهدات"
  },
  representative: {
    en: "Representative",
    ar: "ممثل / مندوب",
    explanationAr: "شخص ينوب عن دولة أو ضحية أو منظمة في الإجراءات.",
    explanationEn: "A person chosen or appointed to act or speak for another.",
    categoryAr: "مفاهيم عامة"
  },
  interim: {
    en: "Interim",
    ar: "مؤقت",
    explanationAr: "إجراء أو قرار يسري لفترة محددة حتى صدور قرار نهائي.",
    explanationEn: "In or for the intervening period; provisional.",
    categoryAr: "أوصاف قانونية"
  },
  provisional: {
    en: "Provisional",
    ar: "وقتي / تحفطي",
    explanationAr: "تدابير تُتخذ بصفة عاجلة لحماية الحقوق أو الأدلة (المادة 82).",
    explanationEn: "Arranged or existing for the present, possibly to be changed later.",
    categoryAr: "أوصاف قانونية"
  },
  penalty: {
    en: "Penalty",
    ar: "جزاء / عقوبة",
    explanationAr: "العقاب المفروض على المدان بموجب المادة 77.",
    explanationEn: "A punishment imposed for breaking a law, rule, or contract.",
    categoryAr: "العقوبات والجزاءات"
  },
  imprisonment: {
    en: "Imprisonment",
    ar: "سجن / حبس",
    explanationAr: "عقوبة سلب الحرية المقررة في نظام روما.",
    explanationEn: "The state of being imprisoned; captivity.",
    categoryAr: "العقوبات والجزاءات"
  },
  fine: {
    en: "Fine",
    ar: "غرامة",
    explanationAr: "عقوبة مالية تُفرض بالإضافة إلى السجن أو بدلاً عنه في حالات محددة.",
    explanationEn: "A sum of money exacted as a penalty by a court of law.",
    categoryAr: "العقوبات والجزاءات"
  },
  fund: {
    en: "Fund",
    ar: "صندوق",
    explanationAr: "صندوق الاستئمان لصالح الضحايا (المادة 79).",
    explanationEn: "A sum of money saved or made available for a particular purpose.",
    categoryAr: "مفاهيم عامة"
  },
  trust: {
    en: "Trust Fund",
    ar: "صندوق الاستئمان",
    explanationAr: "الصندوق المنشأ بقرار من جمعية الدول الأطراف لمساعدة الضحايا.",
    explanationEn: "A fund established for the benefit of victims of crimes.",
    categoryAr: "مفاهيم عامة"
  },
  cooperation: {
    en: "Cooperation",
    ar: "تعاون",
    explanationAr: "التزام الدول الأطراف بالتعاون مع المحكمة (الباب التاسع).",
    explanationEn: "The action or process of working together to the same end.",
    categoryAr: "التعاون الدولي والتسليم"
  },
  assist: {
    en: "Assist / Assistance",
    ar: "مساعدة / معاونة",
    explanationAr: "تقديم الدعم الفني أو القانوني للمحكمة أو للدول.",
    explanationEn: "Help typically by providing money or information.",
    categoryAr: "التعاون الدولي والتسليم"
  },
  receive: {
    en: "Receive",
    ar: "يتسلم / يتلقى",
    explanationAr: "تلقي المحكمة لطلبات أو معلومات أو أشخاص مسلمين.",
    explanationEn: "Be given, presented with, or paid (something).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  search: {
    en: "Search",
    ar: "تفتيش",
    explanationAr: "إجراء للبحث عن أدلة في أماكن أو ممتلكات.",
    explanationEn: "An examination of a person's house or person to find evidence.",
    categoryAr: "الإجراءات والتحقيق"
  },
  seizure: {
    en: "Seizure",
    ar: "ضبط / مصادرة",
    explanationAr: "التحفظ المادي على أدلة أو ممتلكات.",
    explanationEn: "The action of capturing someone or something using force.",
    categoryAr: "الإجراءات والتحقيق"
  },
  identification: {
    en: "Identification",
    ar: "تحديد هوية",
    explanationAr: "التحقق من شخصية المتهم أو الشاهد أو الضحية.",
    explanationEn: "The action or process of identifying someone or something.",
    categoryAr: "الإجراءات والتحقيق"
  },
  location: {
    en: "Location",
    ar: "موقع / مكان",
    explanationAr: "تحديد مكان وجود الأشخاص أو الأصول.",
    explanationEn: "A particular place or position.",
    categoryAr: "مفاهيم عامة"
  },
  forensic: {
    en: "Forensic",
    ar: "جنائي / فني",
    explanationAr: "يتعلق بالأدلة العلمية والفنية المستخدمة في القضاء.",
    explanationEn: "Relating to the application of scientific methods to solve crimes.",
    categoryAr: "أوصاف قانونية"
  },
  medical: {
    en: "Medical",
    ar: "طبي",
    explanationAr: "يتعلق بالصحة أو الفحوصات الطبية للمحتجزين أو الضحايا.",
    explanationEn: "Relating to the science or practice of medicine.",
    categoryAr: "أوصاف قانونية"
  },
  psychiatric: {
    en: "Psychiatric",
    ar: "نفسي / عقلي",
    explanationAr: "يتعلق بالحالة العقلية للمتهم ومدى مسؤوليته.",
    explanationEn: "Relating to mental illness or its treatment.",
    categoryAr: "أوصاف قانونية"
  },
  security: {
    en: "Security",
    ar: "أمن",
    explanationAr: "التدابير اللازمة لحماية المحكمة أو الموظفين أو الشهود.",
    explanationEn: "The state of being free from danger or threat.",
    categoryAr: "مفاهيم عامة"
  },
  protection: {
    en: "Protection",
    ar: "حماية",
    explanationAr: "تدابير حماية الشهود والضحايا بموجب المادة 68.",
    explanationEn: "The action of protecting, or the state of being protected.",
    categoryAr: "الشهود والضحايا"
  },
  safety: {
    en: "Safety",
    ar: "سلامة",
    explanationAr: "ضمان السلامة الجسدية والمعنوية للمشاركين في الإجراءات.",
    explanationEn: "The condition of being protected from or unlikely to cause danger.",
    categoryAr: "مفاهيم عامة"
  },
  right: {
    en: "Right",
    ar: "حق",
    explanationAr: "امتياز أو استحقاق قانوني (مثل حقوق المتهم المادة 67).",
    explanationEn: "A moral or legal entitlement to have or obtain something.",
    categoryAr: "مفاهيم عامة"
  },
  duty: {
    en: "Duty",
    ar: "واجب / مهمة",
    explanationAr: "التزام قانوني أو وظيفي ملقى على عاتق الموظف أو الدولة.",
    explanationEn: "A moral or legal obligation; a responsibility.",
    categoryAr: "مفاهيم عامة"
  },
  obligation: {
    en: "Obligation",
    ar: "التزام",
    explanationAr: "واجب قانوني يفرضه النظام الأساسي على الدول أو المحكمة.",
    explanationEn: "An act or course of action to which a person is legally bound.",
    categoryAr: "مفاهيم عامة"
  },
  power: {
    en: "Power",
    ar: "سلطة / صلاحية",
    explanationAr: "السلطة القانونية المخولة للجهاز أو المسؤول (مثل سلطات المدعي العام).",
    explanationEn: "The capacity or ability to direct or influence behavior.",
    categoryAr: "مفاهيم عامة"
  },
  function: {
    en: "Function",
    ar: "وظيفة / دور",
    explanationAr: "المهام والواجبات المنوطة بجهاز معين في المحكمة.",
    explanationEn: "An activity or purpose natural to or intended for a person or thing.",
    categoryAr: "مفاهيم عامة"
  },
  office: {
    en: "Office",
    ar: "مكتب / منصب",
    explanationAr: "وحدة إدارية أو منصب رسمي (مثل مكتب المدعي العام).",
    explanationEn: "A position of authority or service, or a place of business.",
    categoryAr: "مفاهيم عامة"
  },
  staff: {
    en: "Staff",
    ar: "موظفون / كادر",
    explanationAr: "مجموع الأشخاص العاملين في أجهزة المحكمة.",
    explanationEn: "All the people employed by a particular organization.",
    categoryAr: "مفاهيم عامة"
  },
  budget: {
    en: "Budget",
    ar: "ميزانية",
    explanationAr: "التقدير المالي السنوي لنفقات وإيرادات المحكمة.",
    explanationEn: "An estimate of income and expenditure for a set period of time.",
    categoryAr: "مفاهيم عامة"
  },
  finance: {
    en: "Finance / Financial",
    ar: "مالية / مالي",
    explanationAr: "يتعلق بالموارد المالية والمساهمات المقررة.",
    explanationEn: "Relating to the management of large amounts of money.",
    categoryAr: "أوصاف قانونية"
  },
  contribution: {
    en: "Contribution",
    ar: "مساهمة / اشتراك",
    explanationAr: "المبالغ التي تدفعها الدول الأطراف لتمويل المحكمة.",
    explanationEn: "A gift or payment to a common fund or collection.",
    categoryAr: "مفاهيم عامة"
  },
  expense: {
    en: "Expense",
    ar: "نفقة / مصاريف",
    explanationAr: "التكاليف المالية المترتبة على عمل المحكمة أو المحامين.",
    explanationEn: "The cost required for something; the money spent on something.",
    categoryAr: "مفاهيم عامة"
  },
  audit: {
    en: "Audit",
    ar: "تدقيق / مراجعة حسابات",
    explanationAr: "الفحص المالي المستقل لحسابات المحكمة.",
    explanationEn: "An official inspection of an individual's or organization's accounts.",
    categoryAr: "مفاهيم عامة"
  },
  oversight: {
    en: "Oversight",
    ar: "رقابة / إشراف",
    explanationAr: "الرقابة التي تمارسها جمعية الدول الأطراف على المحكمة.",
    explanationEn: "The action of overseeing something; supervision.",
    categoryAr: "مفاهيم عامة"
  },
  election: {
    en: "Election",
    ar: "انتخاب",
    explanationAr: "عملية اختيار القضاة أو المدعي العام بالتصويت.",
    explanationEn: "A formal and organized choice by vote of a person for a political office.",
    categoryAr: "مفاهيم عامة"
  },
  candidate: {
    en: "Candidate",
    ar: "مرشح",
    explanationAr: "شخص مرشح لشغل منصب قضائي أو رسمي في المحكمة.",
    explanationEn: "A person who applies for a job or is nominated for election.",
    categoryAr: "مفاهيم عامة"
  },
  quorum: {
    en: "Quorum",
    ar: "نصاب",
    explanationAr: "الحد الأدنى من الحضور اللازم لصحة اجتماعات جمعية الدول الأطراف.",
    explanationEn: "The minimum number of members that must be present at any meeting.",
    categoryAr: "مفاهيم عامة"
  },
  vote: {
    en: "Vote",
    ar: "تصويت / صوت",
    explanationAr: "التعبير عن الرأي أو الاختيار في جمعية الدول الأطراف.",
    explanationEn: "A formal indication of a choice between two or more candidates or courses of action.",
    categoryAr: "مفاهيم عامة"
  },
  majority: {
    en: "Majority",
    ar: "أغلبية",
    explanationAr: "نسبة من الأصوات لازمة لاتخاذ قرار (بسيطة أو ثلثين).",
    explanationEn: "The greater number, more than half.",
    categoryAr: "مفاهيم عامة"
  },
  consensus: {
    en: "Consensus",
    ar: "توافق الآراء",
    explanationAr: "اتخاذ القرار دون اعتراض رسمي من أي طرف حاضر.",
    explanationEn: "A general agreement or reaching a decision without a vote.",
    categoryAr: "مفاهيم عامة"
  },
  rule: {
    en: "Rule",
    ar: "قاعدة / حكم",
    explanationAr: "نص قانوني إجرائي أو موضوعي ملزم.",
    explanationEn: "One of a set of explicit or understood regulations or principles.",
    categoryAr: "مفاهيم عامة"
  },
  regulation: {
    en: "Regulation",
    ar: "لائحة / تنظيم",
    explanationAr: "قواعد تفصيلية تصدرها المحكمة لتنظيم عملها الإداري والقضائي.",
    explanationEn: "A rule or directive made and maintained by an authority.",
    categoryAr: "مفاهيم عامة"
  },
  standard: {
    en: "Standard",
    ar: "معيار",
    explanationAr: "مقياس قانوني يُستخدم للتقييم (مثل معايير الإثبات).",
    explanationEn: "A level of quality or attainment; a basis for judgment.",
    categoryAr: "مفاهيم عامة"
  },
  principle: {
    en: "Principle",
    ar: "مبدأ",
    explanationAr: "قاعدة قانونية جوهرية (مثل مبادئ القانون الجنائي العام).",
    explanationEn: "A fundamental truth or proposition that serves as the foundation for law.",
    categoryAr: "مفاهيم عامة"
  },
  justice: {
    en: "Justice",
    ar: "عدالة",
    explanationAr: "الغاية الأسمى للمحكمة في إنصاف الضحايا ومعاقبة الجناة.",
    explanationEn: "The quality of being fair and reasonable; the administration of the law.",
    categoryAr: "مفاهيم عامة"
  },
  law: {
    en: "Law",
    ar: "قانون",
    explanationAr: "مجموعة القواعد الملزمة، بما فيها القانون الدولي الجنائي.",
    explanationEn: "The system of rules which a particular country or community recognizes.",
    categoryAr: "مفاهيم عامة"
  },
  jurisprudence: {
    en: "Jurisprudence",
    ar: "اجتهاد قضائي",
    explanationAr: "مجموعة الأحكام والقرارات السابقة التي ترسي قواعد قانونية.",
    explanationEn: "The theory or philosophy of law; a body of court decisions.",
    categoryAr: "أوصاف قانونية"
  },
  precedent: {
    en: "Precedent",
    ar: "سابقة قضائية",
    explanationAr: "قرار قضائي سابق يُستشهد به في قضايا مماثلة لاحقة.",
    explanationEn: "An earlier event or action that is regarded as an example or guide.",
    categoryAr: "أوصاف قانونية"
  },
  interpretation: {
    en: "Interpretation",
    ar: "تفسير",
    explanationAr: "تبيان مراد النص القانوني عند غموضه.",
    explanationEn: "The action of explaining the meaning of something.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  application: {
    en: "Application",
    ar: "تطبيق / طلب",
    explanationAr: "إعمال القانون، أو تقديم طلب رسمي للمحكمة.",
    explanationEn: "The action of putting something into operation, or a formal request.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  validity: {
    en: "Validity",
    ar: "صحة / نفاذ",
    explanationAr: "استيفاء الإجراء أو الوثيقة لشروطها القانونية.",
    explanationEn: "The quality of being logically or factually sound; soundness or cogency.",
    categoryAr: "أوصاف قانونية"
  },
  duration: {
    en: "Duration",
    ar: "مدة / فترة",
    explanationAr: "المدى الزمني لإجراء أو ولاية قضائية.",
    explanationEn: "The time during which something continues.",
    categoryAr: "مفاهيم عامة"
  },
  scope: {
    en: "Scope",
    ar: "نطاق / مجال",
    explanationAr: "الحدود الموضوعية أو الإقليمية لسريان القانون أو الولاية.",
    explanationEn: "The extent of the area or subject matter that something deals with.",
    categoryAr: "مفاهيم عامة"
  },
  limit: {
    en: "Limit / Limitation",
    ar: "حد / تقادم",
    explanationAr: "قيد زمني أو موضوعي (مثل عدم سقوط الجرائم بالتقادم).",
    explanationEn: "A restriction on the size, amount, or nature of something.",
    categoryAr: "مفاهيم عامة"
  },
  exception: {
    en: "Exception",
    ar: "استثناء",
    explanationAr: "حالة تخرج عن نطاق القاعدة العامة.",
    explanationEn: "A person or thing that is excluded from a general statement.",
    categoryAr: "مفاهيم عامة"
  },
  reservation: {
    en: "Reservation",
    ar: "تحفظ",
    explanationAr: "إعلان دولة عدم التزامها بجزء من المعاهدة (غير مسموح في نظام روما).",
    explanationEn: "A qualification to a State's acceptance of a treaty.",
    categoryAr: "المعاهدات والاتفاقات"
  },
  declaration: {
    en: "Declaration",
    ar: "إعلان",
    explanationAr: "بيان رسمي صادر عن دولة أو المحكمة (مثل إعلان قبول الاختصاص).",
    explanationEn: "A formal or explicit statement or announcement.",
    categoryAr: "مفاهيم عامة"
  },
  notification: {
    en: "Notification",
    ar: "إخطار / بلاغ",
    explanationAr: "الإجراء الرسمي لإيصال المعلومة للأطراف.",
    explanationEn: "The action of notifying someone or something.",
    categoryAr: "مفاهيم عامة"
  },
  communication: {
    en: "Communication",
    ar: "اتصال / مراسلة",
    explanationAr: "المعلومات المقدمة للمدعي العام بشأن جرائم مدعاة (المادة 15).",
    explanationEn: "The imparting or exchanging of information or news.",
    categoryAr: "مفاهيم عامة"
  },
  translation: {
    en: "Translation",
    ar: "ترجمة",
    explanationAr: "نقل النص من لغة إلى أخرى من لغات المحكمة الرسمية.",
    explanationEn: "The process of translating words or text from one language into another.",
    categoryAr: "مفاهيم عامة"
  },
  language: {
    en: "Language",
    ar: "لغة",
    explanationAr: "اللغات الرسمية ولغات العمل في المحكمة (المادة 50).",
    explanationEn: "The method of human communication, either spoken or written.",
    categoryAr: "مفاهيم عامة"
  },
  record: {
    en: "Record",
    ar: "سجل / تدوين",
    explanationAr: "التوثيق الرسمي للإجراءات أو الشهادات.",
    explanationEn: "A thing constituting a piece of evidence about the past.",
    categoryAr: "مفاهيم عامة"
  },
  archive: {
    en: "Archive",
    ar: "أرشيف",
    explanationAr: "حفظ الوثائق التاريخية والقانونية للمحكمة.",
    explanationEn: "A collection of historical documents or records.",
    categoryAr: "مفاهيم عامة"
  },
  history: {
    en: "History / Background",
    ar: "تاريخ / خلفية",
    explanationAr: "السياق التاريخي لإنشاء المحكمة أو وقائع النزاع.",
    explanationEn: "The whole series of past events connected with someone or something.",
    categoryAr: "مفاهيم عامة"
  },
  present: {
    en: "Present",
    ar: "حاضر / مقدم",
    explanationAr: "ما هو قائم حالياً، أو فعل تقديم شيء للمحكمة.",
    explanationEn: "Existing or occurring now; or formally give or provide.",
    categoryAr: "مفاهيم عامة"
  },
  effect: {
    en: "Effect / Impact",
    ar: "أثر / نفاذ",
    explanationAr: "النتيجة القانونية المترتبة على الإجراء أو القرار.",
    explanationEn: "A change which is a result or consequence of an action.",
    categoryAr: "مفاهيم عامة"
  },
  force: {
    en: "Force / Entry into force",
    ar: "قوة / بدء نفاذ",
    explanationAr: "سريان المعاهدة أو القانون بصورة ملزمة.",
    explanationEn: "The legal power or efficacy of an instrument.",
    categoryAr: "مفاهيم عامة"
  },
  binding: {
    en: "Binding",
    ar: "ملزم",
    explanationAr: "صفة للنص أو القرار الذي يجب الامتثال له قانوناً.",
    explanationEn: "Involving an obligation that cannot be broken.",
    categoryAr: "أوصاف قانونية"
  },
  voluntary: {
    en: "Voluntary",
    ar: "طوعي / اختياري",
    explanationAr: "ما يتم بمحض إرادة الشخص أو الدولة دون إكراه.",
    explanationEn: "Done, given, or acting of one's own free will.",
    categoryAr: "أوصاف قانونية"
  },
  mandatory: {
    en: "Mandatory",
    ar: "إلزامي / وجوبي",
    explanationAr: "ما يفرضه القانون ولا يجوز مخالفته.",
    explanationEn: "Required by law or rules; compulsory.",
    categoryAr: "أوصاف قانونية"
  },
  public: {
    en: "Public",
    ar: "علني / عام",
    explanationAr: "مبدأ علانية المحاكمات (المادة 64).",
    explanationEn: "Of or concerning the people as a whole; done in open view.",
    categoryAr: "أوصاف قانونية"
  },
  private: {
    en: "Private / Closed",
    ar: "سري / خاص",
    explanationAr: "ما لا يجوز إفشاؤه أو الاطلاع عليه من غير ذوي الشأن.",
    explanationEn: "Belonging to or for the use of one particular person or group only.",
    categoryAr: "أوصاف قانونية"
  },
  confidential: {
    en: "Confidential",
    ar: "سري للغاية",
    explanationAr: "معلومات محمية تُقدم للمحكمة بضمان عدم كشفها.",
    explanationEn: "Intended to be kept secret.",
    categoryAr: "أوصاف قانونية"
  },
  privilege: {
    en: "Privilege",
    ar: "امتياز",
    explanationAr: "حق خاص يمنحه القانون (مثل سرية المراسلات بين المحامي وموكله).",
    explanationEn: "A special right, advantage, or immunity granted to a person.",
    categoryAr: "مفاهيم عامة"
  },
  waive: {
    en: "Waive / Waiver",
    ar: "يتنازل / تنازل",
    explanationAr: "التخلي الطوعي عن حق أو حصانة.",
    explanationEn: "Refrain from insisting on or using (a right or claim).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  deny: {
    en: "Deny / Reject",
    ar: "يرفض / ينكر",
    explanationAr: "رفض طلب، أو إنكار التهم من قبل المتهم.",
    explanationEn: "State that one has no responsibility for or knowledge of.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  accept: {
    en: "Accept",
    ar: "يقبل",
    explanationAr: "الموافقة على اختصاص المحكمة أو قبول الأدلة.",
    explanationEn: "Consent to receive (a thing offered).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  reject: {
    en: "Reject",
    ar: "يرفض",
    explanationAr: "عدم قبول دفع أو دليل أو طلب لعدم قانونيته.",
    explanationEn: "Dismiss as inadequate, inappropriate, or not to one's taste.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  verify: {
    en: "Verify",
    ar: "يتحقق",
    explanationAr: "التأكد من صحة المعلومات أو المستندات.",
    explanationEn: "Make sure that (something) is true, accurate, or justified.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  certify: {
    en: "Certify",
    ar: "يصدق / يشهد",
    explanationAr: "إقرار رسمي بصحة وثيقة أو واقعة.",
    explanationEn: "Attest or confirm in a formal statement.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  authenticate: {
    en: "Authenticate",
    ar: "يوثق / يثبت أصالة",
    explanationAr: "التحقق من أن الوثيقة أصلية وغير مزورة.",
    explanationEn: "Prove or show (something, especially a claim or an artistic work) to be true or genuine.",
    categoryAr: "أفعال وتصرفات قانونية"
  },

  // --- Additional Legal & Institutional Terms ---
  authority: {
    en: "Authority",
    ar: "سلطة / جهة مختصة",
    explanationAr: "الجهة التي تملك القوة القانونية لاتخاذ القرار.",
    explanationEn: "The power or right to give orders, make decisions, and enforce obedience.",
    categoryAr: "مفاهيم عامة"
  },
  grave: {
    en: "Grave / Serious",
    ar: "جسيم / خطير",
    explanationAr: "وصف للجرائم أو الانتهاكات التي تتسم بالخطورة البالغة.",
    explanationEn: "Giving cause for alarm; serious or solemn.",
    categoryAr: "أوصاف قانونية"
  },
  severe: {
    en: "Severe",
    ar: "شديد / قاسي",
    explanationAr: "وصف للألم أو العقوبة أو الضرر البالغ.",
    explanationEn: "Very great; intense; or strict and harsh.",
    categoryAr: "أوصاف قانونية"
  },
  civilian: {
    en: "Civilian",
    ar: "مدني",
    explanationAr: "الشخص الذي لا ينتمي للقوات المسلحة ويتمتع بالحماية.",
    explanationEn: "A person not in the armed services or the police force.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  population: {
    en: "Population",
    ar: "سكان / أهالي",
    explanationAr: "مجموعة السكان المدنيين المستهدفين بالهجمات (المادة 7).",
    explanationEn: "All the inhabitants of a particular town, area, or country.",
    categoryAr: "مفاهيم عامة"
  },
  combat: {
    en: "Combat / Armed conflict",
    ar: "قتال / نزاع مسلح",
    explanationAr: "الأعمال العدائية بين القوات المسلحة.",
    explanationEn: "Fighting between armed forces.",
    categoryAr: "النزاعات المسلحة وجرائم الحرب"
  },
  conflict: {
    en: "Conflict",
    ar: "نزاع",
    explanationAr: "حالة النزاع المسلح التي تقع فيها جرائم الحرب.",
    explanationEn: "A serious disagreement or argument, typically a protracted one.",
    categoryAr: "النزاعات المسلحة وجرائم الحرب"
  },
  resource: {
    en: "Resource",
    ar: "مورد",
    explanationAr: "الموارد المالية أو البشرية اللازمة لعمل المحكمة.",
    explanationEn: "A stock or supply of money, materials, staff, and other assets.",
    categoryAr: "مفاهيم عامة"
  },
  asset: {
    en: "Asset",
    ar: "أصل / ممتلكات",
    explanationAr: "الأموال والممتلكات التي قد تخضع للضبط أو المصادرة.",
    explanationEn: "A useful or valuable thing, person, or quality.",
    categoryAr: "مفاهيم عامة"
  },
  border: {
    en: "Border / Frontier",
    ar: "حدود",
    explanationAr: "الحدود الجغرافية للدول التي قد تتأثر بالولاية الإقليمية.",
    explanationEn: "A line separating two political or geographical areas.",
    categoryAr: "مفاهيم عامة"
  },
  logic: {
    en: "Logic",
    ar: "منطق",
    explanationAr: "الاستدلال المنطقي في عرض الأدلة والنتائج.",
    explanationEn: "Reasoning conducted or assessed according to strict principles of validity.",
    categoryAr: "مفاهيم عامة"
  },
  motive: {
    en: "Motive",
    ar: "دافع",
    explanationAr: "السبب الذي يدفع الجاني لارتكاب الجريمة (يختلف عن القصد).",
    explanationEn: "A reason for doing something, especially one that is hidden or not obvious.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  phase: {
    en: "Phase",
    ar: "مرحلة",
    explanationAr: "مرحلة معينة من مراحل الإجراءات (التحقيق، المحاكمة).",
    explanationEn: "A distinct period or stage in a series of events or a process.",
    categoryAr: "مفاهيم عامة"
  },
  custom: {
    en: "Custom / Customary Law",
    ar: "عرف / قانون عرفي",
    explanationAr: "القواعد القانونية الناشئة عن الممارسة الدولية المستقرة.",
    explanationEn: "A traditional and widely accepted way of behaving or doing something.",
    categoryAr: "المفاهيم القضائية"
  },
  executive: {
    en: "Executive",
    ar: "تنفيذي",
    explanationAr: "يتعلق بالسلطة التنفيذية أو تنفيذ القرارات.",
    explanationEn: "Relating to the power of putting plans, actions, or laws into effect.",
    categoryAr: "أوصاف قانونية"
  },
  legislative: {
    en: "Legislative",
    ar: "تشريعي",
    explanationAr: "يتعلق بسن القوانين أو جمعية الدول الأطراف.",
    explanationEn: "Relating to having the power to make laws.",
    categoryAr: "أوصاف قانونية"
  },
  administrative: {
    en: "Administrative",
    ar: "إداري",
    explanationAr: "يتعلق بالأمور التنظيمية والإدارية في المحكمة.",
    explanationEn: "Relating to the running of a business, organization, etc.",
    categoryAr: "أوصاف قانونية"
  },
  delegation: {
    en: "Delegation",
    ar: "وفد / تفويض",
    explanationAr: "مجموعة الممثلين لدولة، أو تفويض السلطة لشخص آخر.",
    explanationEn: "A body of delegates or representatives; or the act of delegating.",
    categoryAr: "مفاهيم عامة"
  },
  diplomat: {
    en: "Diplomat",
    ar: "دبلوماسي",
    explanationAr: "شخص يمثل دولته في العلاقات الدولية.",
    explanationEn: "An official representing a country abroad.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  consul: {
    en: "Consul",
    ar: "قنصل",
    explanationAr: "مسؤول يمثل مصالح دولته في الخارج.",
    explanationEn: "An official appointed by a government to live in a foreign city.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  chapter: {
    en: "Chapter",
    ar: "فصل",
    explanationAr: "تقسيم رئيسي في وثائق المحكمة.",
    explanationEn: "A main division of a book, typically with a number or title.",
    categoryAr: "مفاهيم عامة"
  },
  amendment: {
    en: "Amendment",
    ar: "تعديل",
    explanationAr: "تغيير أو إضافة على نص النظام الأساسي (المادة 121).",
    explanationEn: "A minor change or addition designed to improve a text, piece of legislation, etc.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  deletion: {
    en: "Deletion",
    ar: "حذف",
    explanationAr: "إزالة نص أو تهمة من وثائق الإجراءات.",
    explanationEn: "The removal or erasure of written or printed matter.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  repeal: {
    en: "Repeal",
    ar: "إلغاء",
    explanationAr: "إبطال سريان قاعدة أو نص قانوني.",
    explanationEn: "The action of revoking or annulling a law or congressional act.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  void: {
    en: "Void / Null and void",
    ar: "باطل / عديم الأثر",
    explanationAr: "وصف للإجراء الذي لا يترتب عليه أي أثر قانوني.",
    explanationEn: "Not valid or legally binding.",
    categoryAr: "أوصاف قانونية"
  },
  valid: {
    en: "Valid",
    ar: "صحيح / نافذ",
    explanationAr: "وصف لما يستوفي الشروط القانونية.",
    explanationEn: "Having a sound basis in logic or fact; reasonable or cogent.",
    categoryAr: "أوصاف قانونية"
  },

  // --- Substantive Criminal Law & War Crimes ---
  killing: {
    en: "Killing",
    ar: "قتل",
    explanationAr: "إزهاق روح الشخص، وهو الركن المادي الأساسي في جرائم القتل (المادة 6 و7 و8).",
    explanationEn: "The act of causing death to a person.",
    categoryAr: "الأركان المادية للجرائم"
  },
  destruction: {
    en: "Destruction",
    ar: "تدمير / إهلاك",
    explanationAr: "إهلاك الممتلكات أو الجماعات المحمية كلياً أو جزئياً.",
    explanationEn: "The action or process of causing so much damage to something that it no longer exists.",
    categoryAr: "الأركان المادية للجرائم"
  },
  prevention: {
    en: "Prevention",
    ar: "منع / وقاية",
    explanationAr: "اتخاذ تدابير لمنع وقوع أفعال معينة (مثل منع الولادات في الإبادة الجماعية).",
    explanationEn: "The action of stopping something from happening or arising.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  transfer: {
    en: "Transfer",
    ar: "نقل / ترحيل",
    explanationAr: "النقل القسري للسكان أو الأطفال من جماعة إلى أخرى.",
    explanationEn: "The movement of persons or objects from one place to another.",
    categoryAr: "الأركان المادية للجرائم"
  },
  rape: {
    en: "Rape",
    ar: "اغتصاب",
    explanationAr: "جريمة عنف جنسي تقع تحت طائلة الجرائم ضد الإنسانية أو جرائم الحرب.",
    explanationEn: "Unlawful sexual activity and usually sexual intercourse carried out forcibly.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  slavery: {
    en: "Slavery / Enslavement",
    ar: "استرقاق / عبودية",
    explanationAr: "ممارسة سلطات حق الملكية على شخص ما.",
    explanationEn: "The state of being a slave; exercise of ownership over a person.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  prostitution: {
    en: "Forced prostitution",
    ar: "بغاء قسري",
    explanationAr: "إكراه الشخص على ممارسة البغاء كجريمة دولية.",
    explanationEn: "The practice of forcing someone to engage in sexual activity for payment.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  pregnancy: {
    en: "Forced pregnancy",
    ar: "حمل قسري",
    explanationAr: "حبس امرأة أُكرهت على الحمل بقصد التأثير على التكوين العرقي.",
    explanationEn: "The unlawful confinement of a woman forcibly made pregnant.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  sterilization: {
    en: "Forced sterilization",
    ar: "تعقيم قسري",
    explanationAr: "إجراء طبي قسري لمنع الإنجاب.",
    explanationEn: "A medical procedure preventing reproduction performed without consent.",
    categoryAr: "الجرائم ضد الإنسانية"
  },
  inhumane: {
    en: "Inhumane",
    ar: "لا إنساني",
    explanationAr: "أفعال تسبب معاناة شديدة أو أذى خطيراً للجسم أو الصحة.",
    explanationEn: "Lacking humanity, kindness, or compassion; cruel.",
    categoryAr: "أوصاف قانونية"
  },
  hostage: {
    en: "Taking of hostages",
    ar: "أخذ رهائن",
    explanationAr: "احتجاز أشخاص والتهديد بقتلهم أو إيذائهم لإجبار طرف ثالث.",
    explanationEn: "The seizure or detention of a person to compel a third party.",
    categoryAr: "جرائم الحرب"
  },
  intentionally: {
    en: "Intentionally / Willfully",
    ar: "عمداً / عن قصد",
    explanationAr: "ارتكاب الفعل مع العلم والارادة (الركن المعنوي).",
    explanationEn: "Done on purpose; deliberate.",
    categoryAr: "الركن المعنوي"
  },
  directed: {
    en: "Directed against",
    ar: "موجه ضد",
    explanationAr: "توجيه الهجمات ضد السكان المدنيين أو أهداف محمية.",
    explanationEn: "Aimed at or intended for a particular person or group.",
    categoryAr: "الأركان المادية للجرائم"
  },
  weapon: {
    en: "Weapon",
    ar: "سلاح",
    explanationAr: "الأدوات المستخدمة في القتال، وبعضها محظور دولياً.",
    explanationEn: "A thing designed or used for inflicting bodily harm or physical damage.",
    categoryAr: "النزاعات المسلحة وجرائم الحرب"
  },
  poison: {
    en: "Poison",
    ar: "سم / أسلحة سامة",
    explanationAr: "استخدام السموم كأسلحة محظورة في جرائم الحرب.",
    explanationEn: "A substance that is capable of causing the illness or death of a living organism.",
    categoryAr: "جرائم الحرب"
  },
  gases: {
    en: "Asphyxiating gases",
    ar: "غازات خانقة / سامة",
    explanationAr: "الغازات المحظور استخدامها في النزاعات المسلحة.",
    explanationEn: "Gases used in warfare that cause suffocation or poisoning.",
    categoryAr: "جرائم الحرب"
  },
  bullets: {
    en: "Bullets",
    ar: "رصاص",
    explanationAr: "المقذوفات، ومنها ما هو محظور لتمدده في الجسم.",
    explanationEn: "Projectiles for firing from a rifle, revolver, or other gun.",
    categoryAr: "جرائم الحرب"
  },
  humiliating: {
    en: "Humiliating / Degrading",
    ar: "مهين / حاط بالكرامة",
    explanationAr: "معاملة تنتهك كرامة الشخص الإنسانية.",
    explanationEn: "Causing someone to feel ashamed and foolish by injuring their dignity.",
    categoryAr: "جرائم الحرب"
  },
  pillage: {
    en: "Pillage",
    ar: "نهب",
    explanationAr: "سرقة الممتلكات أثناء النزاعات المسلحة.",
    explanationEn: "The act of looting or plundering, especially in war.",
    categoryAr: "جرائم الحرب"
  },
  recruitment: {
    en: "Recruitment",
    ar: "تجنيد",
    explanationAr: "تجنيد الأطفال دون سن 15 في القوات المسلحة (جريمة حرب).",
    explanationEn: "The action of finding new people to join an organization or body.",
    categoryAr: "جرائم الحرب"
  },
  soldier: {
    en: "Soldier",
    ar: "جندي",
    explanationAr: "فرد ينتمي للقوات المسلحة.",
    explanationEn: "A person who serves in an army.",
    categoryAr: "النزاعات المسلحة وجرائم الحرب"
  },

  // --- Core Statutory & Institutional Concepts ---
  purpose: {
    en: "Purpose / Objective",
    ar: "غرض / هدف",
    explanationAr: "الغاية المتوخاة من نص المادة أو إنشاء المحكمة.",
    explanationEn: "The reason for which something is done or created.",
    categoryAr: "مفاهيم عامة"
  },
  permanent: {
    en: "Permanent",
    ar: "دائم",
    explanationAr: "وصف للمحكمة ككيان دائم وليس مؤقتاً (المادة 1).",
    explanationEn: "Lasting or intended to last or remain unchanged indefinitely.",
    categoryAr: "أوصاف قانونية"
  },
  personality: {
    en: "Legal personality",
    ar: "شخصية قانونية",
    explanationAr: "الأهلية القانونية للمحكمة لمباشرة مهامها دولياً (المادة 4).",
    explanationEn: "The capacity of an organization to have legal rights and duties.",
    categoryAr: "المفاهيم القضائية"
  },
  term: {
    en: "Term of office / Period",
    ar: "مدة / ولاية / فترة",
    explanationAr: "المدة الزمنية المحددة لشغل المنصب أو سريان الإجراء.",
    explanationEn: "A fixed or limited period for which something lasts or is intended to last.",
    categoryAr: "مفاهيم عامة"
  },
  peace: {
    en: "Peace",
    ar: "سلام / سلم",
    explanationAr: "الحفاظ على السلم والأمن الدوليين كغاية من غايات نظام روما.",
    explanationEn: "Freedom from disturbance; tranquility; or a state of no war.",
    categoryAr: "مفاهيم عامة"
  },
  identity: {
    en: "Identity",
    ar: "هوية",
    explanationAr: "البيانات التعريفية للشخص المشتبه به أو المتهم.",
    explanationEn: "The fact of being who or what a person or thing is.",
    categoryAr: "مفاهيم عامة"
  },
  dignity: {
    en: "Human dignity",
    ar: "كرامة إنسانية",
    explanationAr: "الحق الأصيل في المعاملة الإنسانية ومنع المعاملة الحاطة بالكرامة.",
    explanationEn: "The right of a person to be valued and respected for their own sake.",
    categoryAr: "حقوق الإنسان"
  },
  government: {
    en: "Government",
    ar: "حكومة",
    explanationAr: "السلطة السياسية والإدارية للدولة التي تتعاون مع المحكمة.",
    explanationEn: "The governing body of a nation, state, or community.",
    categoryAr: "مفاهيم عامة"
  },
  council: {
    en: "Council",
    ar: "مجلس (مثل مجلس الأمن)",
    explanationAr: "هيئة تداولية أو تنفيذية (مثل مجلس الأمن التابع للأمم المتحدة).",
    explanationEn: "An advisory, deliberative, or administrative body of people.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  commission: {
    en: "Commission",
    ar: "لجنة",
    explanationAr: "هيئة فنية أو إدارية تُنشأ لمهام محددة.",
    explanationEn: "An instruction, command, or duty given to a person or group.",
    categoryAr: "مفاهيم عامة"
  },
  ministry: {
    en: "Ministry",
    ar: "وزارة",
    explanationAr: "جهة حكومية في الدولة الطرف (مثل وزارة العدل أو الخارجية).",
    explanationEn: "A government department headed by a minister.",
    categoryAr: "مفاهيم عامة"
  },
  mission: {
    en: "Mission",
    ar: "بعثة / مهمة",
    explanationAr: "المهام الموكلة للوفود أو الفرق الميدانية للمحكمة.",
    explanationEn: "An important assignment carried out for political or religious purposes.",
    categoryAr: "مفاهيم عامة"
  },
  reform: {
    en: "Reform",
    ar: "إصلاح",
    explanationAr: "تطوير أو تعديل النظم القانونية أو الإدارية.",
    explanationEn: "The improvement or amendment of what is wrong, corrupt, or unsatisfactory.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  update: {
    en: "Update",
    ar: "تحديث",
    explanationAr: "مواكبة المعلومات أو القواعد لآخر المستجدات.",
    explanationEn: "Make (something) more modern or up to date.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  policy: {
    en: "Policy",
    ar: "سياسة",
    explanationAr: "التوجهات العامة للمدعي العام أو المحكمة (مثل سياسة التحقيقات).",
    explanationEn: "A course or principle of action adopted or proposed by an organization.",
    categoryAr: "مفاهيم عامة"
  },
  plan: {
    en: "Plan",
    ar: "خطة",
    explanationAr: "برنامج عمل محدد زمنياً وموضوعياً.",
    explanationEn: "A detailed proposal for doing or achieving something.",
    categoryAr: "مفاهيم عامة"
  },
  program: {
    en: "Program",
    ar: "برنامج",
    explanationAr: "مجموعة من الأنشطة المنظمة (مثل برنامج حماية الشهود).",
    explanationEn: "A planned series of future events, items, or performances.",
    categoryAr: "مفاهيم عامة"
  },
  task: {
    en: "Task",
    ar: "مهمة",
    explanationAr: "عمل محدد يُكلف به الموظف أو الوحدة الإدارية.",
    explanationEn: "A piece of work to be done or undertaken.",
    categoryAr: "مفاهيم عامة"
  },
  goal: {
    en: "Goal / Aim",
    ar: "هدف",
    explanationAr: "النتيجة التي يسعى نظام روما لتحقيقها (مثل إنهاء الإفلات من العقاب).",
    explanationEn: "The object of a person's ambition or effort; an aim or desired result.",
    categoryAr: "مفاهيم عامة"
  },
  success: {
    en: "Success",
    ar: "نجاح",
    explanationAr: "تحقيق الأهداف القانونية أو الإجرائية المنشودة.",
    explanationEn: "The accomplishment of an aim or purpose.",
    categoryAr: "مفاهيم عامة"
  },
  risk: {
    en: "Risk",
    ar: "خطر / مخاطرة",
    explanationAr: "احتمال وقوع ضرر للشهود أو سلامة الإجراءات.",
    explanationEn: "A situation involving exposure to danger.",
    categoryAr: "مفاهيم عامة"
  },
  warning: {
    en: "Warning",
    ar: "تحذير / إنذار",
    explanationAr: "إجراء تنبيهي يصدر عن المحكمة.",
    explanationEn: "A statement or event that indicates a possible or impending danger.",
    categoryAr: "مفاهيم عامة"
  },
  data: {
    en: "Data",
    ar: "بيانات",
    explanationAr: "المعلومات الخام أو الرقمية التي تُعالج في سياق التحقيقات.",
    explanationEn: "Facts and statistics collected together for reference or analysis.",
    categoryAr: "مفاهيم عامة"
  },
  foundation: {
    en: "Foundation",
    ar: "أساس / مؤسسة",
    explanationAr: "المنطلقات القانونية أو الجهة المنشأة لغرض معين.",
    explanationEn: "An underlying basis or principle for something.",
    categoryAr: "مفاهيم عامة"
  },
  source: {
    en: "Source",
    ar: "مصدر",
    explanationAr: "مصدر المعلومات أو مصادر القانون واجب التطبيق (المادة 21).",
    explanationEn: "A place, person, or thing from which something originates.",
    categoryAr: "المفاهيم القضائية"
  },
  origin: {
    en: "Origin",
    ar: "أصل / منشأ",
    explanationAr: "خلفية النزاع أو منشأ الأدلة.",
    explanationEn: "The point or place where something begins, arises, or is derived.",
    categoryAr: "مفاهيم عامة"
  },
  core: {
    en: "Core",
    ar: "لب / جوهر",
    explanationAr: "المبادئ الجوهرية أو الجرائم الأساسية (Core Crimes).",
    explanationEn: "The central or most important part of something.",
    categoryAr: "مفاهيم عامة"
  },
  link: {
    en: "Link",
    ar: "رابط / صلة",
    explanationAr: "العلاقة السببية بين الفعل والنتيجة أو بين المتهم والجريمة.",
    explanationEn: "A relationship between two things or situations.",
    categoryAr: "المسؤولية الجنائية والأركان"
  },
  relationship: {
    en: "Relationship",
    ar: "علاقة / صلة",
    explanationAr: "ارتباط أو رابط قانوني بين كيانين أو شخصين أو نصوص قانونية.",
    explanationEn: "A legal link, connection or relationship between entities, persons or legal instruments.",
    categoryAr: "مفاهيم عامة"
  },
  crisis: {
    en: "Crisis",
    ar: "أزمة",
    explanationAr: "حالة طارئة تستدعي تدخل المحكمة أو تقديم مساعدات.",
    explanationEn: "A time of intense difficulty, trouble, or danger.",
    categoryAr: "مفاهيم عامة"
  },
  emergency: {
    en: "Emergency",
    ar: "طوارئ",
    explanationAr: "ظروف استثنائية تتطلب تدابير عاجلة.",
    explanationEn: "A serious, unexpected, and often dangerous situation.",
    categoryAr: "مفاهيم عامة"
  },
  role: {
    en: "Role",
    ar: "دور",
    explanationAr: "الدور القانوني للمشاركين (ضحايا، دفاع، ادعاء).",
    explanationEn: "The function assumed or part played by a person or thing.",
    categoryAr: "مفاهيم عامة"
  },
  health: {
    en: "Health",
    ar: "صحة",
    explanationAr: "الحالة الجسدية أو النفسية للمشاركين في الإجراءات.",
    explanationEn: "The state of being free from illness or injury.",
    categoryAr: "مفاهيم عامة"
  },
  world: {
    en: "World",
    ar: "عالم",
    explanationAr: "المجتمع الدولي ككل الذي يمثله نظام روما.",
    explanationEn: "The earth, together with all of its countries and peoples.",
    categoryAr: "مفاهيم عامة"
  },

  // --- Procedural & Courtroom Terms ---
  adjourn: {
    en: "Adjourn",
    ar: "يؤجل / يرفع الجلسة",
    explanationAr: "تعليق جلسة المحكمة لاستكمالها في وقت لاحق.",
    explanationEn: "To suspend the proceedings of a court to a future time.",
    categoryAr: "الإجراءات والمحاكمة"
  },
  amend: {
    en: "Amend",
    ar: "يعدل",
    explanationAr: "إجراء تغيير رسمي على نص قانوني أو وثيقة تهم.",
    explanationEn: "To make minor changes in a text in order to make it fairer or more accurate.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  defense: {
    en: "Defense",
    ar: "دفاع",
    explanationAr: "الطرف الذي يمثل المتهم ويحمي حقوقه القانونية.",
    explanationEn: "The case presented by or on behalf of the party being accused.",
    categoryAr: "أطراف التقاضي والمعاهدات"
  },
  lawyer: {
    en: "Lawyer",
    ar: "محامي",
    explanationAr: "الشخص المؤهل قانوناً لتمثيل الأشخاص وتقديم المشورة.",
    explanationEn: "A person who practices or studies law; an attorney.",
    categoryAr: "أطراف التقاضي والمعاهدات"
  },
  motion: {
    en: "Motion",
    ar: "طلب / عريضة",
    explanationAr: "طلب رسمي يقدم للمحكمة لاتخاذ قرار في مسألة إجرائية.",
    explanationEn: "A formal proposal put to a court or a deliberative assembly.",
    categoryAr: "الإجراءات والمحاكمة"
  },
  plea: {
    en: "Plea",
    ar: "دفع / إقرار بالذنب",
    explanationAr: "رد المتهم على التهم الموجهة إليه (إقرار بالذنب أو إنكاره).",
    explanationEn: "A formal statement by or on behalf of a defendant or prisoner.",
    categoryAr: "الإجراءات والمحاكمة"
  },
  subpoena: {
    en: "Subpoena / Summons",
    ar: "أمر استدعاء / تكليف بالحضور",
    explanationAr: "أمر رسمي من المحكمة يلزم الشخص بالحضور للشهادة.",
    explanationEn: "A writ ordering a person to attend a court.",
    categoryAr: "الإجراءات والمحاكمة"
  },
  verdict: {
    en: "Verdict / Judgment",
    ar: "حكم / قرار قضائي",
    explanationAr: "القرار النهائي للمحكمة بشأن الإدانة أو البراءة.",
    explanationEn: "A decision on a disputed issue in a civil or criminal case.",
    categoryAr: "الإجراءات والمحاكمة"
  },
  assault: {
    en: "Assault",
    ar: "اعتداء",
    explanationAr: "التهديد بالعنف أو استخدامه فعلياً ضد شخص.",
    explanationEn: "A physical attack on someone.",
    categoryAr: "الأفعال الجرمية"
  },
  bribery: {
    en: "Bribery",
    ar: "رشاوي / ارتشاء",
    explanationAr: "تقديم أو قبول ميزات غير مستحقة للتأثير على الواجبات.",
    explanationEn: "Giving or offering a bribe to influence someone's behavior.",
    categoryAr: "الأفعال الجرمية"
  },
  corruption: {
    en: "Corruption",
    ar: "فساد",
    explanationAr: "إساءة استخدام السلطة لتحقيق مكاسب خاصة.",
    explanationEn: "Dishonest or fraudulent conduct by those in power.",
    categoryAr: "الأفعال الجرمية"
  },
  fraud: {
    en: "Fraud",
    ar: "احتيال",
    explanationAr: "الخداع بقصد الحصول على مكاسب غير مشروعة.",
    explanationEn: "Wrongful or criminal deception intended to result in financial or personal gain.",
    categoryAr: "الأفعال الجرمية"
  },
  homicide: {
    en: "Homicide",
    ar: "قتل عمد / قتل",
    explanationAr: "فعل قتل إنسان لآخر.",
    explanationEn: "The killing of one person by another.",
    categoryAr: "الأفعال الجرمية"
  },
  kidnapping: {
    en: "Kidnapping",
    ar: "اختطاف",
    explanationAr: "أخذ شخص قسراً واحتجازه دون وجه حق.",
    explanationEn: "The action of abducting someone and holding them captive.",
    categoryAr: "الأفعال الجرمية"
  },
  robbery: {
    en: "Robbery",
    ar: "سرقة بالإكراه",
    explanationAr: "أخذ ممتلكات الغير باستخدام العنف أو التهديد.",
    explanationEn: "The action of taking property unlawfully from a person or place by force.",
    categoryAr: "الأفعال الجرمية"
  },
  act: {
    en: "Act",
    ar: "فعل / قانون",
    explanationAr: "تصرف مادي، أو وثيقة تشريعية.",
    explanationEn: "A thing done; or a law or decree.",
    categoryAr: "مفاهيم عامة"
  },
  clause: {
    en: "Clause",
    ar: "بند / فقرة",
    explanationAr: "جزء محدد من مادة قانونية أو عقد.",
    explanationEn: "A particular and separate article, stipulation, or proviso.",
    categoryAr: "مفاهيم عامة"
  },
  code: {
    en: "Code",
    ar: "قانون / مجموعة قواعد",
    explanationAr: "مجموعة مرتبة من القوانين أو القواعد المهنية.",
    explanationEn: "A systematic collection of laws or regulations.",
    categoryAr: "مفاهيم عامة"
  },
  contract: {
    en: "Contract",
    ar: "عقد",
    explanationAr: "اتفاق ملزم قانوناً بين طرفين أو أكثر.",
    explanationEn: "A written or spoken agreement, especially one that is intended to be enforceable by law.",
    categoryAr: "مفاهيم عامة"
  },
  decree: {
    en: "Decree",
    ar: "مرسوم / قرار",
    explanationAr: "قرار رسمي يصدر عن سلطة عليا.",
    explanationEn: "An official order issued by a legal authority.",
    categoryAr: "مفاهيم عامة"
  },
  section: {
    en: "Section",
    ar: "قسم / فرع",
    explanationAr: "تقسيم فرعي من قانون أو وثيقة.",
    explanationEn: "A distinct group within a larger body of people or things.",
    categoryAr: "مفاهيم عامة"
  },

  // --- Adjectives & Adverbs ---
  absolute: {
    en: "Absolute",
    ar: "مطلق",
    explanationAr: "غير مقيد أو غير خاضع لأي شرط.",
    explanationEn: "Not qualified or diminished in any way; total.",
    categoryAr: "أوصاف قانونية"
  },
  arbitrary: {
    en: "Arbitrary",
    ar: "تعسفي",
    explanationAr: "تصرف يستند إلى الهوى وليس إلى قواعد القانون.",
    explanationEn: "Based on random choice or personal whim, rather than any reason or system.",
    categoryAr: "أوصاف قانونية"
  },
  optional: {
    en: "Optional",
    ar: "اختياري",
    explanationAr: "متاح للاختيار وليس ملزماً.",
    explanationEn: "Left to one's choice; not required.",
    categoryAr: "أوصاف قانونية"
  },
  partial: {
    en: "Partial",
    ar: "جزئي",
    explanationAr: "يتعلق بجزء من الكل وليس الكل.",
    explanationEn: "Existing only in part; incomplete.",
    categoryAr: "أوصاف قانونية"
  },
  total: {
    en: "Total / Full",
    ar: "كلي / كامل",
    explanationAr: "شامل لكل الأجزاء.",
    explanationEn: "Comprising the whole number or amount.",
    categoryAr: "أوصاف قانونية"
  },
  prompt: {
    en: "Prompt / Speedy",
    ar: "سريع / دون تأخير",
    explanationAr: "يتم في وقت قصير وبكفاءة (مثل المحاكمة السريعة).",
    explanationEn: "Done without delay; immediate.",
    categoryAr: "أوصاف قانونية"
  },
  effective: {
    en: "Effective",
    ar: "فعال / نافذ",
    explanationAr: "قادر على تحقيق النتيجة المنشودة.",
    explanationEn: "Successful in producing a desired or intended result.",
    categoryAr: "أوصاف قانونية"
  },

  // --- Additional Verbs ---
  admit: {
    en: "Admit / Admissible",
    ar: "يقبل / مقبول",
    explanationAr: "قبول دليل أو طلب في ملف الدعوى.",
    explanationEn: "To allow to enter; or to accept as valid.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  allege: {
    en: "Allege / Allegation",
    ar: "يدعي / ادعاء",
    explanationAr: "ذكر واقعة كحقيقة دون تقديم دليل قاطع بعد.",
    explanationEn: "Claim or assert that someone has done something illegal.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  assign: {
    en: "Assign",
    ar: "يعين / يكلف",
    explanationAr: "تكليف شخص بمهمة أو تعيينه في منصب.",
    explanationEn: "Allocate a job or duty to someone.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  claim: {
    en: "Claim",
    ar: "يدعي / مطالبة",
    explanationAr: "المطالبة بحق أو تعويض.",
    explanationEn: "A formal request for something considered one's due.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  comply: {
    en: "Comply / Compliance",
    ar: "يمتثل / امتثال",
    explanationAr: "الالتزام بتنفيذ القواعد أو الأوامر.",
    explanationEn: "Act in accordance with a wish or command.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  disclose: {
    en: "Disclose",
    ar: "يكشف / يفصح",
    explanationAr: "تقديم معلومات أو أدلة للطرف الآخر.",
    explanationEn: "Make (secret or new information) known.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  ensure: {
    en: "Ensure",
    ar: "يضمن",
    explanationAr: "اتخاذ تدابير لجعل النتيجة مؤكدة.",
    explanationEn: "Make certain that (something) shall occur or be the case.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  examine: {
    en: "Examine",
    ar: "يفحص / يستجوب",
    explanationAr: "دراسة الأدلة أو استجواب الشهود.",
    explanationEn: "Inspect (someone or something) in detail.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  exclude: {
    en: "Exclude",
    ar: "يستبعد",
    explanationAr: "عدم إدراج دليل أو شخص في الإجراءات.",
    explanationEn: "Deny (someone) access to or bar (someone) from a place.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  execute: {
    en: "Execute",
    ar: "ينفذ",
    explanationAr: "وضع القرار أو الأمر موضع التنفيذ.",
    explanationEn: "Carry out or put into effect (a plan, order, or course of action).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  file: {
    en: "File",
    ar: "يودع / يقدم",
    explanationAr: "تقديم مستند رسمياً إلى سجل المحكمة.",
    explanationEn: "Submit (a legal document, application, or charge) to be placed on record.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  identify: {
    en: "Identify",
    ar: "يحدد هوية",
    explanationAr: "التعرف على الشخص أو الشيء.",
    explanationEn: "Establish or indicate who or what (someone or something) is.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  impose: {
    en: "Impose",
    ar: "يفرض",
    explanationAr: "فرض التزام أو عقوبة قانونية.",
    explanationEn: "Force (something unwelcome or unfamiliar) to be accepted.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  investigate: {
    en: "Investigate",
    ar: "يحقق",
    explanationAr: "البحث والتقصي عن الوقائع والجرائم.",
    explanationEn: "Carry out a systematic or formal inquiry to discover and examine the facts.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  maintain: {
    en: "Maintain",
    ar: "يحافظ / يستمر",
    explanationAr: "كفالة استمرارية الوضع أو الأمن.",
    explanationEn: "Cause or enable (a condition or state of affairs) to continue.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  observe: {
    en: "Observe",
    ar: "يراعي / يراقب",
    explanationAr: "الالتزام بالقواعد، أو مراقبة الإجراءات.",
    explanationEn: "Follow or comply with (a law, custom, or practice).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  participate: {
    en: "Participate",
    ar: "يشارك",
    explanationAr: "المساهمة في الإجراءات (مثل مشاركة الضحايا).",
    explanationEn: "Take part in an action or endeavor.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  prevent: {
    en: "Prevent",
    ar: "يمنع",
    explanationAr: "اتخاذ تدابير للحيلولة دون وقوع الفعل.",
    explanationEn: "Keep (something) from happening or arising.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  proceed: {
    en: "Proceed / Proceedings",
    ar: "يباشر / إجراءات",
    explanationAr: "القيام بخطوات قانونية متتابعة.",
    explanationEn: "Begin or continue a course of action.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  promote: {
    en: "Promote",
    ar: "يعزز",
    explanationAr: "دعم وتشجيع المبادئ أو الحقوق.",
    explanationEn: "Further the progress of (something, especially a cause).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  protect: {
    en: "Protect",
    ar: "يحمي",
    explanationAr: "كفالة سلامة الأشخاص أو سرية المعلومات.",
    explanationEn: "Keep safe from harm or injury.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  publish: {
    en: "Publish",
    ar: "ينشر",
    explanationAr: "إعلان الوثائق أو القواعد للجمهور.",
    explanationEn: "Prepare and issue (a book, journal, piece of music, or control) for public sale, distribution, or use.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  pursue: {
    en: "Pursue",
    ar: "يلاحق / يتابع",
    explanationAr: "ملاحقة الجناة أو متابعة قضية ما.",
    explanationEn: "Follow (someone or something) in order to catch or attack them.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  register: {
    en: "Register",
    ar: "يسجل",
    explanationAr: "إدراج الاسم أو الوثيقة في سجل رسمي.",
    explanationEn: "Enter or record on an official list or directory.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  relate: {
    en: "Relate / Relevant",
    ar: "يتعلق بـ / ذو صلة",
    explanationAr: "وجود ارتباط بين الوقائع أو القوانين.",
    explanationEn: "Make or show a connection between.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  remove: {
    en: "Remove",
    ar: "يعزل / يزيل",
    explanationAr: "عزل القاضي من منصبه، أو إزالة مستند.",
    explanationEn: "Take (something) away or off from the position occupied.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  resolve: {
    en: "Resolve",
    ar: "يفصل / يحل",
    explanationAr: "اتخاذ قرار نهائي في نزاع.",
    explanationEn: "Settle or find a solution to (a problem, dispute, or contentious matter).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  respect: {
    en: "Respect",
    ar: "يحترم / يراعي",
    explanationAr: "الالتزام بالحقوق والحريات.",
    explanationEn: "Admire (someone or something) deeply, as a result of their abilities.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  respond: {
    en: "Respond / Response",
    ar: "يرد / رد",
    explanationAr: "تقديم إجابة قانونية على دفع أو طلب.",
    explanationEn: "Say something in reply.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  review: {
    en: "Review",
    ar: "يراجع / مراجعة",
    explanationAr: "إعادة فحص القرار من قبل جهة أعلى.",
    explanationEn: "A formal assessment or examination of something.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  seek: {
    en: "Seek",
    ar: "يسعى / يطلب",
    explanationAr: "محاولة الحصول على إذن أو معلومة.",
    explanationEn: "Attempt to find (something).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  select: {
    en: "Select",
    ar: "يختار / ينتقي",
    explanationAr: "عملية اختيار القضاة أو الموظفين.",
    explanationEn: "Carefully choose as being the best or most suitable.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  serve: {
    en: "Serve / Service",
    ar: "يخدم / يبلغ",
    explanationAr: "أداء المهام، أو إبلاغ الخصم رسمياً بالمستندات.",
    explanationEn: "Perform duties or services for (another person or an organization).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  support: {
    en: "Support",
    ar: "يدعم / يساند",
    explanationAr: "تقديم العون المادي أو المعنوي.",
    explanationEn: "Bear all or part of the weight of; hold up.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  terminate: {
    en: "Terminate",
    ar: "ينهي",
    explanationAr: "إنهاء الإجراءات أو ولاية الشخص.",
    explanationEn: "Bring to an end.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  testify: {
    en: "Testify / Testimony",
    ar: "يشهد / شهادة",
    explanationAr: "الإدلاء بالأقوال تحت القسم أمام المحكمة.",
    explanationEn: "Give evidence as a witness in a court of law.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  treat: {
    en: "Treat / Treatment",
    ar: "يعامل / معاملة",
    explanationAr: "طريقة التعامل مع الضحايا أو المحتجزين.",
    explanationEn: "Behave toward or deal with in a certain way.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  understand: {
    en: "Understand",
    ar: "يفهم / يدرك",
    explanationAr: "استيعاب التهم أو الحقوق (المادة 67).",
    explanationEn: "Perceive the intended meaning of (words, a language, or a speaker).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  uphold: {
    en: "Uphold",
    ar: "يؤيد / يحافظ على",
    explanationAr: "تأييد قرار سابق، أو الحفاظ على سيادة القانون.",
    explanationEn: "Confirm or support (a something which has been questioned).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  violate: {
    en: "Violate / Violation",
    ar: "ينتهك / انتهاك",
    explanationAr: "مخالفة القانون أو الاعتداء على الحقوق.",
    explanationEn: "Break or fail to comply with (a rule or formal agreement).",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  sovereignty: {
    en: "Sovereignty",
    ar: "سيادة",
    explanationAr: "السلطة العليا والمستقلة للدولة على أراضيها وشعبها.",
    explanationEn: "The authority of a state to govern itself or another state.",
    categoryAr: "مفاهيم عامة"
  },
  integrity: {
    en: "Territorial integrity",
    ar: "سلامة الإقليم / الوحدة الإقليمية",
    explanationAr: "مبدأ عدم المساس بحدود الدولة أو وحدتها الجغرافية.",
    explanationEn: "The principle under international law that nation-states should not attempt to promote secessionist movements.",
    categoryAr: "مفاهيم عامة"
  },
  conscience: {
    en: "Conscience of humanity",
    ar: "ضمير الإنسانية",
    explanationAr: "المعايير الأخلاقية والقيم الإنسانية المشتركة التي ترفض الجرائم الفظيعة.",
    explanationEn: "The common sense of what is right or wrong shared by all humanity.",
    categoryAr: "مفاهيم عامة"
  },
  bond: {
    en: "Common bonds",
    ar: "روابط مشتركة",
    explanationAr: "الصلات التي تجمع الشعوب والثقافات المختلفة.",
    explanationEn: "Something that fastens things together; a connection.",
    categoryAr: "مفاهيم عامة"
  },
  culture: {
    en: "Culture",
    ar: "ثقافة",
    explanationAr: "الموروث القيمي والاجتماعي للشعوب.",
    explanationEn: "The arts and other manifestations of human intellectual achievement regarded collectively.",
    categoryAr: "مفاهيم عامة"
  },
  heritage: {
    en: "Heritage",
    ar: "تراث",
    explanationAr: "الموروث المشترك الذي تسعى المحكمة لحمايته من الجرائم.",
    explanationEn: "Property that is or may be inherited; an inheritance.",
    categoryAr: "مفاهيم عامة"
  },
  mosaic: {
    en: "Mosaic",
    ar: "فسيفساء",
    explanationAr: "تعبير مجازي عن تنوع الثقافات والشعوب في العالم.",
    explanationEn: "A picture or pattern produced by arranging together small colored pieces of hard material.",
    categoryAr: "مفاهيم عامة"
  },
  atrocity: {
    en: "Atrocity",
    ar: "فظاعة / جريمة بشعة",
    explanationAr: "أفعال وحشية تثير صدمة الضمير الإنساني.",
    explanationEn: "An extremely wicked or cruel act, typically one involving physical violence or injury.",
    categoryAr: "الجرائم المندرجة تحت ولاية المحكمة"
  },
  defiance: {
    en: "Defiance",
    ar: "تحدي / استهتار",
    explanationAr: "مخالفة القوانين أو الأعراف الدولية علانية.",
    explanationEn: "Open resistance; bold disobedience.",
    categoryAr: "مفاهيم عامة"
  },
  wellbeing: {
    en: "Well-being",
    ar: "رفاه / مصلحة",
    explanationAr: "سلامة وسعادة واستقرار الشعوب.",
    explanationEn: "The state of being comfortable, healthy, or happy.",
    categoryAr: "مفاهيم عامة"
  },
  impunity: {
    en: "Impunity",
    ar: "إفلات من العقاب",
    explanationAr: "عدم معاقبة مرتكبي الجرائم الخطيرة، وهو ما تسعى المحكمة لمنعه.",
    explanationEn: "Exemption from punishment or freedom from the injurious consequences of an action.",
    categoryAr: "المفاهيم القضائية"
  },
  reconciliation: {
    en: "Reconciliation",
    ar: "مصالحة",
    explanationAr: "إعادة الروابط السلمية بين المجتمعات بعد النزاع.",
    explanationEn: "The restoration of friendly relations.",
    categoryAr: "مفاهيم عامة"
  },

  // --- Temporal & Relational Terms ---
  above: {
    en: "Above",
    ar: "أعلاه / فوق",
    explanationAr: "إشارة إلى نص أو فقرة سابقة في الوثيقة.",
    explanationEn: "At a higher level or layer than.",
    categoryAr: "مفاهيم عامة"
  },
  below: {
    en: "Below",
    ar: "أدناه / تحت",
    explanationAr: "إشارة إلى نص أو فقرة لاحقة في الوثيقة.",
    explanationEn: "At a lower level or layer than.",
    categoryAr: "مفاهيم عامة"
  },
  during: {
    en: "During",
    ar: "خلال / أثناء",
    explanationAr: "تحديد النطاق الزمني لوقوع الفعل.",
    explanationEn: "Throughout the course or duration of (a period of time).",
    categoryAr: "مفاهيم عامة"
  },
  after: {
    en: "After",
    ar: "بعد",
    explanationAr: "ما يلي حدثاً أو إجراءً معيناً.",
    explanationEn: "In the time following (an event or another period of time).",
    categoryAr: "مفاهيم عامة"
  },
  before: {
    en: "Before",
    ar: "قبل / أمام",
    explanationAr: "ما يسبق حدثاً، أو المثول أمام المحكمة.",
    explanationEn: "During the period of time preceding (a particular event or time).",
    categoryAr: "مفاهيم عامة"
  },
  however: {
    en: "However",
    ar: "بيد أن / ومع ذلك",
    explanationAr: "أداة استدراك تستخدم لتوضيح استثناء أو تعارض.",
    explanationEn: "Used to introduce a statement that contrasts with or seems to contradict.",
    categoryAr: "مفاهيم عامة"
  },
  although: {
    en: "Although",
    ar: "على الرغم من",
    explanationAr: "أداة لربط جملتين بينهما تعارض ظاهري.",
    explanationEn: "In spite of the fact that; even though.",
    categoryAr: "مفاهيم عامة"
  },
  therefore: {
    en: "Therefore",
    ar: "وبناء عليه / لذلك",
    explanationAr: "أداة استنتاجية تربط الأسباب بالنتائج.",
    explanationEn: "For that reason; consequently.",
    categoryAr: "مفاهيم عامة"
  },
  thus: {
    en: "Thus",
    ar: "هكذا / وبناء عليه",
    explanationAr: "أداة ربط توضح الطريقة أو النتيجة.",
    explanationEn: "As a result or consequence of this; therefore.",
    categoryAr: "مفاهيم عامة"
  },
  since: {
    en: "Since",
    ar: "بما أن / منذ",
    explanationAr: "تحديد نقطة زمنية، أو بيان سبب.",
    explanationEn: "In the intervening period between (the time mentioned) and the time under consideration.",
    categoryAr: "مفاهيم عامة"
  },
  because: {
    en: "Because",
    ar: "بسبب / نظراً لأن",
    explanationAr: "أداة لبيان العلة أو السبب القانوني.",
    explanationEn: "For the reason that; since.",
    categoryAr: "مفاهيم عامة"
  },
  until: {
    en: "Until",
    ar: "حتى / إلى حين",
    explanationAr: "تحديد نهاية زمنية لإجراء أو حالة.",
    explanationEn: "Up to (the point in time or the event mentioned).",
    categoryAr: "مفاهيم عامة"
  },
  while: {
    en: "While",
    ar: "بينما / أثناء",
    explanationAr: "تزامن الأحداث أو الإجراءات.",
    explanationEn: "During the time that; at the same time as.",
    categoryAr: "مفاهيم عامة"
  },
  within: {
    en: "Within",
    ar: "داخل / في غضون",
    explanationAr: "تحديد النطاق المكاني أو الزمني (مثل تقديم الطعن في غضون 30 يوماً).",
    explanationEn: "Inside (a particular area or period of time).",
    categoryAr: "مفاهيم عامة"
  },
  without: {
    en: "Without",
    ar: "بدون / دون",
    explanationAr: "غياب شرط أو قيد (مثل دون الإخلال بـ).",
    explanationEn: "In the absence of.",
    categoryAr: "مفاهيم عامة"
  },
  among: {
    en: "Among",
    ar: "من بين / فيما بين",
    explanationAr: "توزيع المهام أو الاختيارات بين مجموعة.",
    explanationEn: "In or into the middle of; surrounded by.",
    categoryAr: "مفاهيم عامة"
  },
  between: {
    en: "Between",
    ar: "بين",
    explanationAr: "علاقة بين طرفين (مثل اتفاق بين المحكمة والدولة).",
    explanationEn: "At, into, or across the space separating (two objects or regions).",
    categoryAr: "مفاهيم عامة"
  },
  through: {
    en: "Through",
    ar: "من خلال / بواسطة",
    explanationAr: "الوسيلة المستخدمة لتحقيق الغاية.",
    explanationEn: "Moving in one side and out of the other side of (an opening, channel, or location).",
    categoryAr: "مفاهيم عامة"
  },
  against: {
    en: "Against",
    ar: "ضد",
    explanationAr: "توجيه الاتهام أو الهجوم ضد شخص أو كيان.",
    explanationEn: "In opposition to.",
    categoryAr: "مفاهيم عامة"
  },
  toward: {
    en: "Toward",
    ar: "باتجاه / نحو",
    explanationAr: "التوجه نحو تحقيق هدف أو مكان.",
    explanationEn: "In the direction of.",
    categoryAr: "مفاهيم عامة"
  },
  upon: {
    en: "Upon",
    ar: "بناء على / فور",
    explanationAr: "حدوث فعل فور تحقق شرط معين.",
    explanationEn: "On.",
    categoryAr: "مفاهيم عامة"
  },

  // --- Additional Institutional & Legal Vocabulary ---
  unimaginable: {
    en: "Unimaginable",
    ar: "لا يتصور / يفوق الوصف",
    explanationAr: "وصف للجرائم البشعة التي تروع ضمير العالم.",
    explanationEn: "Difficult or impossible to imagine.",
    categoryAr: "أوصاف قانونية"
  },
  deeply: {
    en: "Deeply",
    ar: "بعمق / بشدة",
    explanationAr: "درجة التأثر أو القلق (مثل القلق العميق بشأن الانتهاكات).",
    explanationEn: "To a great depth; very much.",
    categoryAr: "مفاهيم عامة"
  },
  threaten: {
    en: "Threaten",
    ar: "يهدد",
    explanationAr: "الفعل الذي يشكل خطراً على السلم والأمن.",
    explanationEn: "State one's intention to take hostile action against someone.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  determined: {
    en: "Determined",
    ar: "عازم / مصمم",
    explanationAr: "بيان الإرادة السياسية للدول الأطراف في الديباجة.",
    explanationEn: "Having made a firm decision and being resolved not to change it.",
    categoryAr: "أوصاف قانونية"
  },
  put: {
    en: "Put an end to",
    ar: "وضع حد لـ / إنهاء",
    explanationAr: "وقف ممارسة معينة (مثل إنهاء الإفلات من العقاب).",
    explanationEn: "Make something stop or finish.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  perpetrator: {
    en: "Perpetrator",
    ar: "مرتكب الجريمة / الجاني",
    explanationAr: "الشخص الذي قام بالفعل الجرمي.",
    explanationEn: "A person who carries out a harmful, illegal, or immoral act.",
    categoryAr: "الأشخاص والمسؤولية الجنائية"
  },
  unpunished: {
    en: "Go unpunished",
    ar: "يفلت من العقاب",
    explanationAr: "الحالة التي تسعى المحكمة لتفاديها بضمان المساءلة.",
    explanationEn: "Not receive a punishment for a crime or bad deed.",
    categoryAr: "المفاهيم القضائية"
  },
  contribute: {
    en: "Contribute",
    ar: "يساهم / يسهم في",
    explanationAr: "المشاركة في تحقيق غايات المحكمة أو ارتكاب الجريمة.",
    explanationEn: "Give (something, especially money) in order to help achieve or provide something.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  complementary: {
    en: "Complementary",
    ar: "مكمل",
    explanationAr: "علاقة المحكمة بالقضاء الوطني (مبدأ التكامل).",
    explanationEn: "Combining in such a way as to enhance or emphasize the qualities of each other.",
    categoryAr: "المفاهيم القضائية"
  },
  jurisdiction: {
    en: "Jurisdiction",
    ar: "اختصاص / ولاية قضائية",
    explanationAr: "سلطة المحكمة في النظر في القضايا (المادة 5).",
    explanationEn: "The official power to make legal decisions and judgments.",
    categoryAr: "المفاهيم القضائية"
  },
  emphasize: {
    en: "Emphasize",
    ar: "يؤكد / يشدد على",
    explanationAr: "إبراز أهمية قاعدة أو مبدأ.",
    explanationEn: "Give special importance or prominence to (something) in speaking or writing.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  purposes: {
    en: "Purposes",
    ar: "مقاصد / أغراض",
    explanationAr: "الغايات النهائية التي يسعى النظام الأساسي لتحقيقها.",
    explanationEn: "The reason for which something is done or created or for which something exists.",
    categoryAr: "مفاهيم عامة"
  },
  principles: {
    en: "Principles",
    ar: "مبادئ",
    explanationAr: "القواعد الأساسية للقانون (مثل مبادئ ميثاق الأمم المتحدة).",
    explanationEn: "A fundamental truth or proposition that serves as the foundation for a system of belief or behavior.",
    categoryAr: "مفاهيم عامة"
  },
  charter: {
    en: "Charter",
    ar: "ميثاق (مثل ميثاق الأمم المتحدة)",
    explanationAr: "الوثيقة التأسيسية لمنظمة دولية.",
    explanationEn: "A written grant by a country's legislative or sovereign power.",
    categoryAr: "المعاهدات والاتفاقات"
  },
  united: {
    en: "United Nations",
    ar: "الأمم المتحدة",
    explanationAr: "المنظمة الدولية الرئيسية التي تتعاون معها المحكمة.",
    explanationEn: "An international organization formed in 1945 to increase political and economic cooperation among member countries.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  nations: {
    en: "Nations",
    ar: "أمم / دول",
    explanationAr: "الشعوب والكيانات السياسية المكونة للمجتمع الدولي.",
    explanationEn: "A large body of people united by common descent, history, culture, or language, inhabiting a particular country or territory.",
    categoryAr: "مفاهيم عامة"
  },
  refrain: {
    en: "Refrain from",
    ar: "يمتنع عن",
    explanationAr: "الالتزام بعدم القيام بفعل معين (مثل الامتناع عن التهديد بالقوة).",
    explanationEn: "Stop oneself from doing something.",
    categoryAr: "أفعال وتصرفات قانونية"
  },
  threat: {
    en: "Threat",
    ar: "تهديد",
    explanationAr: "التلويح باستخدام القوة أو إلحاق الضرر.",
    explanationEn: "A statement of an intention to inflict pain, injury, damage, or other hostile action on someone in retribution for something done or not done.",
    categoryAr: "مفاهيم عامة"
  },
  territorial: {
    en: "Territorial",
    ar: "إقليمي",
    explanationAr: "يتعلق بأرض الدولة وسيادتها المكانية.",
    explanationEn: "Relating to the ownership of an area of land or sea.",
    categoryAr: "أوصاف قانونية"
  },
  political: {
    en: "Political",
    ar: "سياسي",
    explanationAr: "يتعلق بنظام الحكم أو العلاقات الدولية.",
    explanationEn: "Relating to the government or the public affairs of a country.",
    categoryAr: "أوصاف قانونية"
  },
  independence: {
    en: "Political independence",
    ar: "استقلال سياسي",
    explanationAr: "حرية الدولة في اتخاذ قراراتها دون تدخل خارجي.",
    explanationEn: "The freedom of a country to govern itself without being controlled by another country.",
    categoryAr: "مفاهيم عامة"
  },
  manner: {
    en: "In any manner",
    ar: "بأي طريقة / بأي نحو",
    explanationAr: "توسيع نطاق الحظر ليشمل كافة الأساليب.",
    explanationEn: "A way in which something is done or happens.",
    categoryAr: "مفاهيم عامة"
  },
  inconsistent: {
    en: "Inconsistent",
    ar: "يتنافى مع / لا يتسق مع",
    explanationAr: "تعارض الفعل مع القواعد المقررة.",
    explanationEn: "Not staying the same throughout.",
    categoryAr: "أوصاف قانونية"
  },

  most: { en: "Most", ar: "معظم / الأكثر", explanationAr: "تفيد الأغلبية أو الحد الأقصى.", explanationEn: "Greatest in amount or degree." },

  // --- General Principles of Criminal Law (Part 3) ---
  nullum: {
    en: "Nullum crimen sine lege",
    ar: "لا جريمة إلا بنص قانوني",
    explanationAr: "مبدأ قانوني يقضي بأنه لا يجوز مساءلة شخص جنائياً إلا عن فعل يشكل جريمة وقت ارتكابه (المادة 22).",
    explanationEn: "The principle that a person shall not be criminally responsible unless the conduct constitutes a crime at the time it takes place.",
    categoryAr: "المبادئ العامة للقانون الجنائي"
  },
  nulla: {
    en: "Nulla poena sine lege",
    ar: "لا عقوبة إلا بنص قانوني",
    explanationAr: "مبدأ يقضي بأن الشخص المدان لا يجوز عقابه إلا وفقاً للنظام الأساسي (المادة 23).",
    explanationEn: "The principle that a person convicted may be punished only in accordance with this Statute.",
    categoryAr: "المبادئ العامة للقانون الجنائي"
  },
  retroactivity: {
    en: "Non-retroactivity",
    ar: "عدم الرجعية",
    explanationAr: "مبدأ عدم سريان القانون على الأفعال التي وقعت قبل دخوله حيز النفاذ (المادة 24).",
    explanationEn: "The principle that no person shall be criminally responsible for conduct prior to the entry into force of the Statute.",
    categoryAr: "المبادئ العامة للقانون الجنائي"
  },

  // --- Procedural & Institutional Terms ---
  solemn: {
    en: "Solemn undertaking",
    ar: "تعهد رسمي",
    explanationAr: "قسم أو التزام يؤديه القاضي أو الموظف قبل ممارسة مهامه لضمان النزاهة والسرية.",
    explanationEn: "A formal promise or oath made by a court official before starting duties to ensure impartiality and confidentiality.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  impartially: {
    en: "Impartially",
    ar: "بنزاهة / بتجرد",
    explanationAr: "أداء الواجبات دون تحيز أو ميل لطرف على حساب الآخر، وهو شرط أساسي للعمل القضائي.",
    explanationEn: "Performing duties without bias or prejudice, a fundamental requirement for judicial work.",
    categoryAr: "أوصاف قانونية"
  },
  conscientiously: {
    en: "Conscientiously",
    ar: "بما يمليه الضمير",
    explanationAr: "العمل بجد وصدق وفقاً لما تفرضه المسؤولية الأخلاقية والمهنية السامية.",
    explanationEn: "Working in a thorough and responsible way according to conscience and professional ethics.",
    categoryAr: "أوصاف قانونية"
  },
  confidentiality: {
    en: "Confidentiality",
    ar: "السرية",
    explanationAr: "الالتزام بعدم كشف المعلومات الحساسة أو الخاصة بالتحقيقات أو حماية الشهود.",
    explanationEn: "The duty to keep sensitive or private information secret, especially regarding investigations or witness protection.",
    categoryAr: "مفاهيم عامة"
  },
  deliberations: {
    en: "Secrecy of deliberations",
    ar: "سرية المداولات",
    explanationAr: "ضمان عدم كشف المناقشات الخاصة بين القضاة قبل إصدار الحكم لضمان استقلال القضاء.",
    explanationEn: "Ensuring that private discussions between judges remain secret to safeguard judicial independence.",
    categoryAr: "الإجراءات القضائية"
  },
  plenary: {
    en: "Plenary session",
    ar: "جلسة عامة",
    explanationAr: "اجتماع يحضره جميع القضاة لاتخاذ قرارات إدارية أو انتخابية أو اعتماد اللوائح (القاعدة 4).",
    explanationEn: "A meeting attended by all judges for administrative or elective purposes or adopting regulations.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  casting: {
    en: "Casting vote",
    ar: "صوت مرجح",
    explanationAr: "الصوت الذي يرجح كفة أحد الجانبين في حالة تعادل الأصوات، ويملكه عادة الرئيس.",
    explanationEn: "A deciding vote used to break a tie in voting, typically held by the President.",
    categoryAr: "مفاهيم عامة"
  },
  professional: {
    en: "Code of Professional Conduct",
    ar: "مدونة قواعد السلوك المهني",
    explanationAr: "مجموعة القواعد المنظمة لأخلاقيات وسلوك المحامين أمام المحكمة لضمان نزاهة التمثيل القانوني.",
    explanationEn: "Set of ethical rules governing the conduct of counsel before the Court to ensure legal integrity.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  interpreter: {
    en: "Interpreter",
    ar: "مترجم شفهي",
    explanationAr: "الشخص الذي ينقل الأقوال من لغة إلى أخرى شفهياً أثناء الجلسات لضمان فهم المتهم للإجراءات.",
    explanationEn: "A person who translates speech orally during proceedings to ensure the accused understands the process.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  translator: {
    en: "Translator",
    ar: "مترجم تحريري",
    explanationAr: "الشخص الذي ينقل النصوص والوثائق المكتوبة من لغة إلى أخرى بدقة قانونية.",
    explanationEn: "A person who translates written legal texts and documents with legal precision.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  manifest: {
    en: "Manifest pattern",
    ar: "نمط سلوك واضح",
    explanationAr: "تكرار أفعال مماثلة تظهر وجود سياسة أو اتجاه معين في ارتكاب الجرائم.",
    explanationEn: "A clear repetition of similar acts indicating a policy or trend in the commission of crimes.",
    categoryAr: "أركان الجرائم"
  },
  judgement: {
    en: "Value judgement",
    ar: "حكم قيمي",
    explanationAr: "تقدير يستند إلى المعايير الأخلاقية أو القانونية لوصف جسامة أو طبيعة فعل معين.",
    explanationEn: "An assessment based on moral or legal standards to describe the severity or nature of an act.",
    categoryAr: "مفاهيم عامة"
  },
  unlawfulness: {
    en: "Unlawfulness",
    ar: "عدم المشروعية",
    explanationAr: "مخالفة الفعل لأحكام القانون الدولي أو النظام الأساسي للمحكمة.",
    explanationEn: "The quality of being contrary to international law or the Rome Statute.",
    categoryAr: "أوصاف قانونية"
  },
  mistake: {
    en: "Mistake of fact",
    ar: "غلط في الوقائع",
    explanationAr: "تصور خاطئ للواقع قد ينفي الركن المعنوي للجريمة (المادة 32).",
    explanationEn: "A factual error that may negate the mental element required for a crime.",
    categoryAr: "المبادئ العامة للقانون الجنائي"
  },
  duress: {
    en: "Duress",
    ar: "الإكراه",
    explanationAr: "حالة الضغط أو التهديد التي تجبر الشخص على ارتكاب فعل جرمي لدرء خطر داهم (المادة 31).",
    explanationEn: "Pressure or threats used to force someone to commit a crime to avoid imminent harm.",
    categoryAr: "المبادئ العامة للقانون الجنائي"
  },
  limitations: {
    en: "Statute of limitations",
    ar: "التقادم المسقط",
    explanationAr: "مرور فترة زمنية تمنع الملاحقة القضائية؛ ولا ينطبق هذا على جرائم المحكمة (المادة 29).",
    explanationEn: "A time limit for legal action; inapplicable to crimes within ICC jurisdiction.",
    categoryAr: "المبادئ العامة للقانون الجنائي"
  },

  // --- Crimes (Non-duplicates) ---
  starvation: {
    en: "Starvation",
    ar: "التجويع",
    explanationAr: "تعمد استخدام تجويع المدنيين كأسلوب من أساليب الحرب بحرمانهم من المواد التي لا غنى عنها لبقائهم.",
    explanationEn: "Intentionally using starvation of civilians as a method of warfare by depriving them of objects indispensable to their survival.",
    categoryAr: "جرائم الحرب"
  },

  // --- Adjectives & Qualifiers (Non-duplicates) ---
  systematic: {
    en: "Systematic",
    ar: "منهجي",
    explanationAr: "فعل يتم وفق خطة منظمة أو نمط متكرر ومدروس.",
    explanationEn: "Done or acting according to a fixed plan or system; methodical.",
    categoryAr: "أوصاف قانونية"
  },
  widespread: {
    en: "Widespread",
    ar: "واسع النطاق",
    explanationAr: "فعل يمتد ليشمل مساحة كبيرة أو عدداً كبيراً من الضحايا.",
    explanationEn: "Found or distributed over a large area or number of victims.",
    categoryAr: "أوصاف قانونية"
  },
  adequate: {
    en: "Adequate",
    ar: "كافٍ / ملائم",
    explanationAr: "يستوفي الشروط أو المتطلبات اللازمة لإجراء معين.",
    explanationEn: "Satisfactory or acceptable in quality or quantity.",
    categoryAr: "أوصاف قانونية"
  },
  urgent: {
    en: "Urgent",
    ar: "عاجل",
    explanationAr: "يتطلب اتخاذ إجراء فوري لمواجهة خطر أو وضع طارئ.",
    explanationEn: "Requiring immediate action or attention.",
    categoryAr: "أوصاف قانونية"
  },

  // --- Connectives & Drafting Terms ---
  furthermore: { en: "Furthermore", ar: "علاوة على ذلك", explanationAr: "أداة ربط لإضافة معلومة أو حكم جديد.", explanationEn: "In addition; besides." },
  consequently: { en: "Consequently", ar: "بناءً على ذلك / وتبعاً لذلك", explanationAr: "تفيد ترتب النتيجة على السبب السابق.", explanationEn: "As a result." },
  nevertheless: { en: "Nevertheless", ar: "ومع ذلك / برغم ذلك", explanationAr: "تفيد الاستدراك أو مخالفة ما قد يُتوقع.", explanationEn: "In spite of that; notwithstanding." },
  notably: { en: "Notably", ar: "لا سيما / وبوجه خاص", explanationAr: "تستخدم للتأكيد على حالة أو مثال معين.", explanationEn: "In particular; at a high level." },
  specifically: { en: "Specifically", ar: "على وجه التحديد", explanationAr: "تستخدم لحصر المعنى في حالة معينة.", explanationEn: "In a way that is exact and clear." },
  adequately: { en: "Adequately", ar: "على نحو كافٍ", explanationAr: "تفيد استيفاء المعايير المطلوبة.", explanationEn: "To a satisfactory or acceptable extent." },
  effectively: { en: "Effectively", ar: "على نحو فعال", explanationAr: "تفيد تحقيق النتيجة المرجوة من النص.", explanationEn: "In such a manner as to achieve a desired result." },

  // --- Institutional & Administrative Terms (Regulations & OTP) ---
  "coordination-council": {
    en: "Coordination Council",
    ar: "مجلس التنسيق",
    explanationAr: "مجلس يضم رئيس هيئة الرئاسة والمدعي العام والمسجل لتنسيق الأنشطة الإدارية (اللائحة 3).",
    explanationEn: "A council comprising the President, Prosecutor, and Registrar to coordinate administrative activities.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  "advisory-committee": {
    en: "Advisory Committee on Legal Texts",
    ar: "اللجنة الاستشارية للنصوص القانونية",
    explanationAr: "لجنة تقدم توصيات بشأن تعديل القواعد واللوائح وأركان الجرائم (اللائحة 4).",
    explanationEn: "A committee providing recommendations on amending Rules, Regulations, and Elements of Crimes.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  "official-journal": {
    en: "Official Journal",
    ar: "الجريدة الرسمية",
    explanationAr: "الجريدة التي تُنشر فيها النصوص القانونية المعتمدة وتعديلاتها لضمان الشفافية والعلنية (اللائحة 7).",
    explanationEn: "The journal where official legal texts and amendments are published to ensure transparency.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  "detention-centre": {
    en: "Detention centre",
    ar: "مركز الاحتجاز",
    explanationAr: "المرفق المخصص لاحتجاز الأشخاص الصادر بحقهم أوامر قبض أو محكومين وفق معايير دولية (اللائحة 2).",
    explanationEn: "The facility for detaining persons under arrest warrants or convicted persons according to international standards.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  "custody-officer": {
    en: "Chief Custody Officer",
    ar: "كبير مسؤولي الحراسة",
    explanationAr: "المسؤول عن إدارة موظفي مركز الاحتجاز وشؤون المحتجزين اليومية.",
    explanationEn: "The officer responsible for the daily management of detention centre staff and detainees.",
    categoryAr: "هيكل وأجهزة المحكمة"
  },
  "legal-representative": {
    en: "Legal representative of a victim",
    ar: "الممثل القانوني للضحايا",
    explanationAr: "المحامي المكلف بتمثيل مصالح الضحايا المشاركين في الإجراءات لضمان سماع أصواتهم.",
    explanationEn: "Counsel assigned to represent the interests of victims participating in proceedings to ensure they are heard.",
    categoryAr: "الإجراءات القضائية"
  },
  "joint-team": {
    en: "Joint team",
    ar: "الفريق المشترك",
    explanationAr: "فريق عمل يضم شُعباً مختلفة في مكتب المدعي العام للقيام بالتحقيقات المتكاملة.",
    explanationEn: "An interdivisional team formed in the OTP to carry out integrated investigations.",
    categoryAr: "مكتب المدعي العام"
  },
  "trial-team": {
    en: "Trial team",
    ar: "فريق المحاكمة",
    explanationAr: "الفريق المكلف بمباشرة المقاضاة أمام الدائرة الابتدائية بعد اعتماد التهم.",
    explanationEn: "The team formed to carry out prosecutions before the Trial Chamber upon confirmation of charges.",
    categoryAr: "مكتب المدعي العام"
  },
  "excom": {
    en: "Executive Committee (ExCom)",
    ar: "اللجنة التنفيذية",
    explanationAr: "اللجنة العليا في مكتب المدعي العام المسؤولة عن وضع الاستراتيجيات والسياسات والميزانية.",
    explanationEn: "The high-level committee in the OTP responsible for developing strategies, policies, and budget.",
    categoryAr: "مكتب المدعي العام"
  },
  "preliminary-examination": {
    en: "Preliminary examination",
    ar: "الدراسة والتقييم الأولي",
    explanationAr: "المرحلة التي تسبق التحقيق الرسمي لتقييم مدى توفر معايير الاختصاص والمقبولية (المادة 15).",
    explanationEn: "The phase preceding an investigation to assess jurisdiction and admissibility standards.",
    categoryAr: "مكتب المدعي العام"
  },
  "litigation-strategy": {
    en: "Litigation strategy",
    ar: "استراتيجية التنازع",
    explanationAr: "الخطة القانونية والإجرائية التي يتبعها الادعاء أمام دوائر المحكمة في القضايا المختلفة.",
    explanationEn: "The legal and procedural plan followed by the prosecution before the Chambers in various cases.",
    categoryAr: "مكتب المدعي العام"
  },
  "gender-unit": {
    en: "Gender and Children Unit",
    ar: "وحدة شؤون الجنسين والأطفال",
    explanationAr: "وحدة متخصصة في مكتب المدعي العام تقدم الخبرة بشأن العنف الجنسي والجرائم ضد الأطفال.",
    explanationEn: "A specialized unit in the OTP providing expertise on sexual violence and crimes against children.",
    categoryAr: "مكتب المدعي العام"
  },
  "official-languages": {
    en: "Official languages",
    ar: "اللغات الرسمية",
    explanationAr: "اللغات الست (العربية، الإنجليزية، الفرنسية، الإسبانية، الروسية، الصينية) المعتمدة في المحكمة.",
    explanationEn: "The six official languages (Arabic, English, French, Spanish, Russian, Chinese) of the Court.",
    categoryAr: "مفاهيم عامة"
  },
  "working-languages": {
    en: "Working languages",
    ar: "لغات العمل",
    explanationAr: "اللغات المستخدمة في الإدارة اليومية للمحكمة، وهي الإنجليزية والفرنسية (المادة 50).",
    explanationEn: "The languages used in daily Court administration, namely English and French.",
    categoryAr: "مفاهيم عامة"
  },

  // --- Common Verbs & Statutory Words (Non-duplicates) ---
  transmit: { en: "Transmit", ar: "يحيل / يرسل", explanationAr: "إرسال الوثائق أو المعلومات رسمياً إلى الجهة المختصة.", explanationEn: "To send or pass on from one person or place to another." },
  consult: { en: "Consult", ar: "يتشاور", explanationAr: "تبادل الآراء بين أجهزة المحكمة قبل اتخاذ قرار معين.", explanationEn: "To seek information or advice from someone with expertise in a particular area." },
  govern: { en: "Govern", ar: "يحكم / ينظم", explanationAr: "تحديد القواعد التي تخضع لها الإجراءات أو الأجهزة.", explanationEn: "To conduct the policy, actions, and affairs of an organization." },
  approve: { en: "Approve", ar: "يعتمد / يوافق على", explanationAr: "الموافقة الرسمية على قرار أو وثيقة.", explanationEn: "To officially agree to or accept as satisfactory." },
  conclude: { en: "Conclude", ar: "يبرم / ينهي", explanationAr: "التوصل إلى اتفاق نهائي أو إنهاء مرافعة.", explanationEn: "To bring something to an end; to settle or build a final agreement." },
  satisfied: { en: "Satisfied", ar: "يتحقق من / يقتنع", explanationAr: "تأكد الدائرة من استيفاء الشروط القانونية (مثل المادة 19).", explanationEn: "The Chamber's confirmation that legal conditions have been met." },
};

/**
 * Normalization helper for English dictionary lookup
 */
export function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .replace(/[()[\]{}"'״”؛،,:.;?!]/g, '')
    .trim();
}

/**
 * High-speed lookup across the comprehensive legal dictionary
 */
export function lookupComprehensiveVocab(word: string, targetIsArabic: boolean): LegalVocabEntry | null {
  const norm = normalizeKey(word);
  if (!norm) return null;

  // 1. Direct key match
  if (comprehensiveLegalVocab[norm]) {
    return comprehensiveLegalVocab[norm];
  }

  // 2. Singular/plural match (strip trailing 's', 'es', 'ies')
  if (norm.endsWith('ies') && norm.length > 5) {
    const sing = norm.slice(0, -3) + 'y';
    if (comprehensiveLegalVocab[sing]) return comprehensiveLegalVocab[sing];
  } else if (norm.endsWith('es') && norm.length > 4) {
    const sing = norm.slice(0, -2);
    if (comprehensiveLegalVocab[sing]) return comprehensiveLegalVocab[sing];
  } else if (norm.endsWith('s') && !norm.endsWith('ss') && norm.length > 3) {
    const sing = norm.slice(0, -1);
    if (comprehensiveLegalVocab[sing]) return comprehensiveLegalVocab[sing];
  }

  // 3. Search in values
  for (const entry of Object.values(comprehensiveLegalVocab)) {
    if (normalizeKey(entry.en) === norm) {
      return entry;
    }
  }

  // 4. Reverse Arabic search - exact whole term or option with article handling
  if (!targetIsArabic) {
    const normalizeAr = (s: string) => s
      .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // remove tashkeel
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .trim();

    const cleanAr = normalizeAr(word);
    const withAl = cleanAr.startsWith('ال') ? cleanAr : 'ال' + cleanAr;
    const withoutAl = (cleanAr.startsWith('ال') && cleanAr.length > 3) ? cleanAr.slice(2) : cleanAr;

    // Direct match with or without article
    for (const entry of Object.values(comprehensiveLegalVocab)) {
      const entryArClean = normalizeAr(entry.ar);
      if (entryArClean === cleanAr || entryArClean === withAl || entryArClean === withoutAl) {
        return entry;
      }
      // Check slashed alternatives
      const options = entry.ar.split(/\s*\/\s*/).map(p => normalizeAr(p.trim()));
      if (options.includes(cleanAr) || options.includes(withAl) || options.includes(withoutAl)) {
        return entry;
      }
    }

    // Compound phrase head-noun check
    for (const entry of Object.values(comprehensiveLegalVocab)) {
      const entryArClean = entry.ar.replace(/[\u064B-\u065F\u0670\u0640]/g, '').trim();
      if (entryArClean.startsWith(cleanAr + ' ') || entryArClean.startsWith(withAl + ' ')) {
        return entry;
      }
    }
  }

  return null;
}

