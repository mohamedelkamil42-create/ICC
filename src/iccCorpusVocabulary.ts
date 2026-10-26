// Extended Bilingual ICC Corpus Vocabulary (Rome Statute, Rules of Procedure, Elements of Crimes, Regulations)
// Provides instant 0ms translations and legal context for statutory words, verbs, participles, plurals, and particles.

import { LegalVocabEntry } from './comprehensiveLegalDictionary';

export const iccCorpusVocabulary: Record<string, LegalVocabEntry> = {
  // --- Core Functional & Statutory Particles / Prepositions / Pronouns ---
  the: {
    en: "The",
    ar: "أل التعريف (المحددة للمصطلح القانوني)",
    explanationAr: "أداة تعريف تُستخدم في الصياغة التشريعية للدلالة على هيئة أو شخص أو حكم معين بذاته.",
    explanationEn: "Definite article specifying a particular organ, person, or provision in statutory drafting."
  },
  of: {
    en: "Of",
    ar: "من / الخاص بـ (إضافة قانونية)",
    explanationAr: "حرف إضافة يربط المضاف بالمضاف إليه لتحديد الانتماء القانوني أو الاختصاص.",
    explanationEn: "Preposition indicating legal attribution, possession, or scope."
  },
  to: {
    en: "To",
    ar: "إلى / لـ / أن",
    explanationAr: "حرف جر يفيد التوجيه الإجرائي أو الغاية القانونية.",
    explanationEn: "Preposition indicating procedural direction, recipient, or infinitive obligation."
  },
  in: {
    en: "In",
    ar: "في / ضمن",
    explanationAr: "حرف ظرفي يحدد النطاق الموضوعي أو المكاني أو الزمني لسريان الحكم.",
    explanationEn: "Preposition defining the substantive, territorial, or temporal scope of a provision."
  },
  and: {
    en: "And",
    ar: "و (حرف عطف يفيد الجمع والاشتراك)",
    explanationAr: "أداة عطف تشريعية تفيد وجوب اجتماع العناصر أو الشروط المعطوفة معاً.",
    explanationEn: "Conjunctive particle requiring cumulative satisfaction of connected legal elements."
  },
  or: {
    en: "Or",
    ar: "أو (حرف تخيير وبدائل قانونية)",
    explanationAr: "أداة عطف تفيد التخيير أو كفاية تحقق أحد البدائل القانونية المنصوص عليها.",
    explanationEn: "Disjunctive particle indicating alternative legal conditions or options."
  },
  for: {
    en: "For",
    ar: "لأجل / لصالح / لمدة",
    explanationAr: "حرف يفيد الغرض القانوني أو المصلحة المعتبرة أو المدة الزمنية.",
    explanationEn: "Preposition denoting legal purpose, benefit, or duration."
  },
  with: {
    en: "With",
    ar: "مع / بـ / بالتشاور مع",
    explanationAr: "حرف يفيد المصاحبة الإجرائية أو الوسيلة القانونية أو التنسيق بين الهيئات.",
    explanationEn: "Preposition indicating procedural accompaniment, instrument, or consultation."
  },
  by: {
    en: "By",
    ar: "من قِبل / بموجب / بواسطة",
    explanationAr: "يحدد الفاعل القانوني المختص بإصدار القرار أو الوسيلة التشريعية المتبعة.",
    explanationEn: "Preposition identifying the competent legal actor, authority, or means."
  },
  as: {
    en: "As",
    ar: "بصفته / كما / حسبما",
    explanationAr: "تُستخدم لتحديد الصفة القانونية أو الإحالة التنظيمية.",
    explanationEn: "Conjunction or preposition denoting legal capacity, manner, or statutory reference."
  },
  on: {
    en: "On",
    ar: "على / بشأن / في تاريخ",
    explanationAr: "حرف يحدد موضوع القرار القضائي أو الأساس القانوني أو التاريخ.",
    explanationEn: "Preposition specifying the subject matter of a ruling, legal basis, or date."
  },
  at: {
    en: "At",
    ar: "في / عند / لدى",
    explanationAr: "تحدد المرحلة الإجرائية أو المقر أو الوقت المحدد لاتخاذ الإجراء.",
    explanationEn: "Preposition indicating procedural stage, seat, or specific point in time."
  },
  from: {
    en: "From",
    ar: "من / ابتداءً من",
    explanationAr: "تحدد مصدر الطلب أو بداية سريان المدة القانونية.",
    explanationEn: "Preposition indicating origin, source, or commencement of a legal period."
  },
  under: {
    en: "Under",
    ar: "بموجب / عملاً بـ / الخاضع لـ",
    explanationAr: "تحدد السند القانوني أو المادة التي يجري الإجراء تحت مظلتها.",
    explanationEn: "Pursuant to or governed by the authority of a specific article, rule, or law."
  },
  into: {
    en: "Into",
    ar: "إلى / في (مثل الدخول حيز النفاذ)",
    explanationAr: "تفيد التحول إلى حالة قانونية جديدة كبدء النفاذ أو فتح التحقيق.",
    explanationEn: "Preposition indicating entry into a legal state, such as entry into force or inquiry."
  },
  over: {
    en: "Over",
    ar: "على (الاختصاص على الجرائم)",
    explanationAr: "تُستخدم لتحديد ولاية المحكمة وسلطتها القضائية على الجرائم أو الأشخاص.",
    explanationEn: "Denoting judicial authority or jurisdiction over specified crimes or persons."
  },
  about: {
    en: "About",
    ar: "حول / بشأن",
    explanationAr: "تحدد موضوع الإخطار أو المعلومات أو الشهادة.",
    explanationEn: "Concerning or relating to the subject matter of proceedings."
  },
  than: {
    en: "Than",
    ar: "من / غير (في صيغ المقارنة والاستثناء)",
    explanationAr: "تُستخدم في تحديد المدد أو الاستثناءات كعبارة 'لغير سبب' (other than).",
    explanationEn: "Comparative or exclusionary particle used in statutory thresholds (e.g., other than)."
  },
  that: {
    en: "That",
    ar: "أن / الذي / ذلك",
    explanationAr: "اسم موصول أو إشارة أو أداة ربط لبيان مضمون الحكم القضائي أو الشرط.",
    explanationEn: "Relative pronoun, demonstrative, or conjunction introducing a legal finding or clause."
  },
  this: {
    en: "This",
    ar: "هذا / هذه (الإشارة للنص الحالي)",
    explanationAr: "اسم إشارة يحدد النظام الأساسي الحالي أو المادة أو الفقرة محل التطبيق.",
    explanationEn: "Demonstrative determiner referring to the present Statute, Rule, or Article."
  },
  these: {
    en: "These",
    ar: "هذه / هؤلاء",
    explanationAr: "اسم إشارة للجمع يحيل إلى القواعد أو اللوائح أو الشروط المذكورة.",
    explanationEn: "Plural demonstrative referring to the present Rules, Regulations, or provisions."
  },
  those: {
    en: "Those",
    ar: "تلك / أولئك",
    explanationAr: "اسم إشارة للجمع يحيل إلى الفئات أو الجرائم أو الدول المحددة في النص.",
    explanationEn: "Plural demonstrative referring to specified categories, crimes, or persons."
  },
  which: {
    en: "Which",
    ar: "الذي / التي",
    explanationAr: "اسم موصول يحدد الوصف القانوني أو الشرط المقيد للعبارة السابقة.",
    explanationEn: "Relative pronoun introducing a defining or non-defining legal qualification."
  },
  who: {
    en: "Who",
    ar: "الذي / من (للأشخاص الطبيعيين)",
    explanationAr: "اسم موصول يعود على الشخص الطبيعي (المتهم أو الشاهد أو القاضي أو الضحية).",
    explanationEn: "Relative pronoun referring to a natural person under the Statute."
  },
  whom: {
    en: "Whom",
    ar: "الذي / من (في محل المفعول أو المجرور)",
    explanationAr: "اسم موصول يعود على الشخص المعني بالإجراء القضائي أو الصادر بحقه الأمر.",
    explanationEn: "Objective relative pronoun referring to the person subject to a judicial action."
  },
  whose: {
    en: "Whose",
    ar: "الذي له / صاحبة",
    explanationAr: "اسم موصول يفيد الملكية أو النسبة القانونية للشخص أو الدولة.",
    explanationEn: "Possessive relative pronoun indicating legal attribution to a person or State."
  },
  where: {
    en: "Where",
    ar: "حيثما / في حالة ما إذا",
    explanationAr: "أداة شرطية وظرفية تحدد الحالة القانونية التي ينطبق فيها النص.",
    explanationEn: "Conditional or locative conjunction meaning 'in cases where' or 'in the event that'."
  },
  when: {
    en: "When",
    ar: "عندما / متى",
    explanationAr: "أداة تحدد التوقيت أو تحقق الشرط الموجب لاتخاذ الإجراء القضائي.",
    explanationEn: "Temporal or conditional conjunction specifying the trigger for legal action."
  },
  whenever: {
    en: "Whenever",
    ar: "كلما / متى ما",
    explanationAr: "تفيد تكرار انطباق الحكم القانوني كلما توافرت شروطه.",
    explanationEn: "Every time that or in any situation where a statutory condition arises."
  },
  whether: {
    en: "Whether",
    ar: "ما إذا كان / سواء",
    explanationAr: "تُستخدم لبيان المسألة محل البحث القضائي أو شمول الحكم لحالتين معاً.",
    explanationEn: "Conjunction introducing an issue for judicial determination or encompassing alternatives."
  },
  if: {
    en: "If",
    ar: "إذا / في حال",
    explanationAr: "أداة الشرط الأساسية في الصياغة التشريعية لترتيب الأثر على الواقعة.",
    explanationEn: "Primary conditional conjunction establishing the prerequisite for a legal consequence."
  },
  not: {
    en: "Not",
    ar: "لا / ليس / عدم",
    explanationAr: "أداة نفي أو حظر قانوني.",
    explanationEn: "Negation particle expressing prohibition, exemption, or absence of a condition."
  },
  no: {
    en: "No",
    ar: "لا (النافية للجنس / حظر مطلق)",
    explanationAr: "تفيد النفي المطلق أو الحظر القانوني العام (مثل: لا يجوز، لا جريمة).",
    explanationEn: "Determiner expressing universal legal prohibition or absence."
  },
  nor: {
    en: "Nor",
    ar: "ولا",
    explanationAr: "أداة عطف للنفي تفيد شمول الحظر أو الاستثناء لما بعدها.",
    explanationEn: "Negative coordinating conjunction continuing a statutory prohibition or exclusion."
  },
  any: {
    en: "Any",
    ar: "أي / أية",
    explanationAr: "لفظ يفيد العموم والشمول لأي فرد أو حالة أو وثيقة تدخل تحت الوصف القانوني.",
    explanationEn: "Determiner denoting broad inclusivity across any instance within a legal class."
  },
  all: {
    en: "All",
    ar: "جميع / كل / كافة",
    explanationAr: "لفظ يفيد الاستغراق الكلي والشمول التام دون استثناء.",
    explanationEn: "Universal quantifier encompassing the entirety of a specified legal group or set."
  },
  each: {
    en: "Each",
    ar: "كل (على حدة)",
    explanationAr: "تفيد انطباق الالتزام أو الحق على كل طرف أو عضو بصفة فردية ومستقلة.",
    explanationEn: "Distributive determiner applying a right or duty to every individual item or person."
  },
  every: {
    en: "Every",
    ar: "كل / جميع",
    explanationAr: "تفيد الشمول الإلزامي لجميع الأفراد أو الحالات المشمولة بالقاعدة.",
    explanationEn: "Determiner referring to all individual members of a set without exception."
  },
  both: {
    en: "Both",
    ar: "كلا / كلتا / معاً",
    explanationAr: "تفيد شمول الحكم للطرفين أو الأمرين معاً في آن واحد.",
    explanationEn: "Referring to two parties, languages, or conditions jointly."
  },
  either: {
    en: "Either",
    ar: "أي من الاثنين / إما",
    explanationAr: "تفيد التخيير بين طرفين أو طريقين إجرائيين.",
    explanationEn: "Indicating one or the other of two legal alternatives or parties."
  },
  neither: {
    en: "Neither",
    ar: "لا هذا ولا ذاك / ليس أي منهما",
    explanationAr: "نفي الحكم عن كلا الطرفين أو الخيارين.",
    explanationEn: "Not the one nor the other of two things or parties."
  },
  such: {
    en: "Such",
    ar: "ذلك / مثل هذا / المذكور",
    explanationAr: "صيغة إحالة تشريعية تعود على الشخص أو الإجراء أو الوصف المحدد آنفاً.",
    explanationEn: "Statutory demonstrative referring back to a previously defined category or person."
  },
  other: {
    en: "Other",
    ar: "آخر / أخرى / غير ذلك",
    explanationAr: "تفيد المغايرة أو إضافة حالات وأشخاص آخرين غير من ذُكروا.",
    explanationEn: "Additional or alternative to the person, State, or measure already mentioned."
  },
  another: {
    en: "Another",
    ar: "آخر / أخرى",
    explanationAr: "تشير إلى دولة أخرى أو شخص آخر أو دائرة قضائية أخرى.",
    explanationEn: "An additional or different person, State, or Chamber."
  },
  same: {
    en: "Same",
    ar: "نفس / ذات",
    explanationAr: "تفيد التطابق التام في الواقعة أو السلوك أو الحقوق.",
    explanationEn: "Identical; not different (e.g., same conduct, same rights)."
  },
  only: {
    en: "Only",
    ar: "فقط / حصراً",
    explanationAr: "أداة قصر وحصر قانوني تمنع التوسع في الحكم خارج النطاق المحدد.",
    explanationEn: "Restrictive adverb limiting application strictly to the specified conditions."
  },
  also: {
    en: "Also",
    ar: "أيضاً / كذلك",
    explanationAr: "تفيد إضافة حكم أو اختصاص أو التزام تكميلي.",
    explanationEn: "In addition; likewise."
  },
  thereafter: {
    en: "Thereafter",
    ar: "بعد ذلك / في أعقاب ذلك",
    explanationAr: "تحدد الترتيب الزمني اللاحق لإجراء قانوني سابق.",
    explanationEn: "After that time or procedural event."
  },
  therein: {
    en: "Therein",
    ar: "فيه / الوارد فيه",
    explanationAr: "إحالة تشريعية إلى مضمون الوثيقة أو المادة المذكورة.",
    explanationEn: "In that document, place, or legal text."
  },
  thereto: {
    en: "Thereto",
    ar: "إليه / المتعلق به",
    explanationAr: "إحالة تشريعية تفيد الارتباط بالاتفاق أو الطلب المذكور.",
    explanationEn: "To that matter, document, or agreement."
  },
  thereby: {
    en: "Thereby",
    ar: "بموجب ذلك / وبذلك",
    explanationAr: "تفيد ترتب الأثر القانوني نتيجة للفعل المذكور.",
    explanationEn: "By that means; as a result of that action."
  },
  therefrom: {
    en: "Therefrom",
    ar: "منه / الناشئ عنه",
    explanationAr: "إحالة إلى ما يتفرع أو ينشأ عن الفعل أو الجريمة.",
    explanationEn: "From that source, crime, or proceeding."
  },
  hereby: {
    en: "Hereby",
    ar: "بموجب هذا (النص أو القرار)",
    explanationAr: "صيغة إنشاء قانوني رسمي تُعلن تأسيس هيئة أو سريان قرار بمجرد النص عليه.",
    explanationEn: "Formal operative word declaring that a legal act is effected by the present text itself."
  },
  hereto: {
    en: "Hereto",
    ar: "لهذا النظام / المرفق بهذا",
    explanationAr: "تشير إلى الأطراف أو الملاحق المرتبطة بالوثيقة الحالية.",
    explanationEn: "To this document or Statute."
  },
  whereby: {
    en: "Whereby",
    ar: "الذي بموجبه",
    explanationAr: "تربط بين الاتفاق أو النظام والآلية القانونية المترتبة عليه.",
    explanationEn: "By which; according to which."
  },
  otherwise: {
    en: "Otherwise",
    ar: "بخلاف ذلك / على نحو آخر",
    explanationAr: "تشير إلى أي طريقة أخرى أو حكم مغاير لما هو منصوص عليه.",
    explanationEn: "In circumstances different from those present or considered; or in another manner."
  },

  // --- Pronouns & Auxiliary Verbs in Legal Drafting ---
  it: { en: "It", ar: "هي / هو (ضمير يعود على المحكمة أو الدائرة أو الدولة)", explanationAr: "ضمير يعود على الهيئة القضائية أو الدولة أو المسألة القانونية.", explanationEn: "Pronoun referring to the Court, Chamber, State, or matter." },
  its: { en: "Its", ar: "الخاص بها / اختصاصها", explanationAr: "ضمير ملكية يعود على المحكمة أو الدائرة أو الدولة.", explanationEn: "Possessive determiner referring to the Court, Chamber, or State." },
  he: { en: "He", ar: "هو (الشخص المعني)", explanationAr: "ضمير يعود على الشخص الطبيعي أو المسؤول القضائي.", explanationEn: "Pronoun referring to a male person or official." },
  she: { en: "She", ar: "هي (الشخص المعني)", explanationAr: "ضمير يعود على الشخص الطبيعي أو المسؤولة القضائية.", explanationEn: "Pronoun referring to a female person or official." },
  him: { en: "Him", ar: "إياه / له / عليه", explanationAr: "ضمير المفعول العائد على الشخص المعني بالإجراء.", explanationEn: "Objective pronoun referring to a male person." },
  her: { en: "Her", ar: "إياها / لها / عليها", explanationAr: "ضمير يعود على الشخص المعني بالإجراء.", explanationEn: "Objective or possessive pronoun referring to a female person." },
  his: { en: "His", ar: "الخاص به / حقوقه", explanationAr: "ضمير ملكية يعود على الشخص المعني.", explanationEn: "Possessive pronoun referring to a male person." },
  they: { en: "They", ar: "هم / هن", explanationAr: "ضمير الجمع العائد على القضاة أو الأطراف أو الأشخاص.", explanationEn: "Plural pronoun referring to judges, parties, or persons." },
  them: { en: "Them", ar: "هم / إياهم", explanationAr: "ضمير المفعول للجمع.", explanationEn: "Objective plural pronoun." },
  their: { en: "Their", ar: "الخاص بهم / هم", explanationAr: "ضمير ملكية للجمع.", explanationEn: "Possessive plural determiner." },
  himself: { en: "Himself", ar: "بنفسه / ذاته", explanationAr: "تفيد مباشرة الإجراء شخصياً أو تجريم الذات.", explanationEn: "Reflexive pronoun indicating personal action or self-reference." },
  herself: { en: "Herself", ar: "بنفسها / ذاتها", explanationAr: "تفيد مباشرة الإجراء شخصياً أو تجريم الذات.", explanationEn: "Reflexive pronoun indicating personal action." },
  itself: { en: "Itself", ar: "بنفسها / من تلقاء نفسها", explanationAr: "تفيد قيام المحكمة أو الدائرة بالإجراء من تلقاء ذاتها.", explanationEn: "Reflexive pronoun referring to the Court or Chamber acting on its own." },
  be: { en: "Be", ar: "يكون / تكون", explanationAr: "فعل الكينونة في الصياغة التشريعية للإلزام أو الوصف القانوني.", explanationEn: "Auxiliary or copular verb used in passive and mandatory legal constructions." },
  is: { en: "Is", ar: "يكون / تكون / يُعد", explanationAr: "يفيد تقرير الحكم القانوني القائم.", explanationEn: "Present tense verb stating an existing legal rule or status." },
  are: { en: "Are", ar: "تكون / يكونون", explanationAr: "يفيد تقرير الحكم القانوني للجمع.", explanationEn: "Present plural verb stating a legal rule or status." },
  was: { en: "Was", ar: "كان / كانت", explanationAr: "يفيد تحقق الواقعة أو الصفة في وقت سابق (مثل وقت ارتكاب الجريمة).", explanationEn: "Past tense verb indicating a prior factual or legal state." },
  were: { en: "Were", ar: "كانوا / كانت", explanationAr: "يفيد تحقق الواقعة في الماضي أو الشرط الافتراضي.", explanationEn: "Past plural or subjunctive verb in legal conditions." },
  been: { en: "Been", ar: "كان قد / تم", explanationAr: "تُستخدم في صيغ المبني للمجهول التام لبيان سبق صدور إجراء قضائي.",
    explanationEn: "Past participle of 'be' used in perfect passive legal constructions." },
  being: { en: "Being", ar: "كونه / جاري", explanationAr: "تفيد استمرار الحالة القانونية أو السببية.", explanationEn: "Present participle indicating ongoing status or reason." },
  have: { en: "Have", ar: "يكون له / يملك / قد", explanationAr: "تفيد ثبوت الحق أو الاختصاص أو إتمام الإجراء.", explanationEn: "Verb indicating possession of jurisdiction/rights, or perfect tense auxiliary." },
  has: { en: "Has", ar: "له / تملك / قد", explanationAr: "تفيد ثبوت الاختصاص أو سبق تحقق الواقعة القانونية.", explanationEn: "Third-person singular of 'have' indicating competence or completed action." },
  had: { en: "Had", ar: "كان له / كان قد", explanationAr: "تفيد توفر العلم أو السيطرة أو الشرط في وقت وقوع الفعل.", explanationEn: "Past tense of 'have' establishing prior knowledge, control, or action." },
  having: { en: "Having", ar: "بعد أن / مع وجود", explanationAr: "تُستخدم في التسبيب القضائي لبيان استيفاء شرط سابق.", explanationEn: "Participle used in judicial recitals (e.g., having considered)." },
  do: { en: "Do", ar: "يفعل / يقوم بـ", explanationAr: "فعل يفيد القيام بالعمل أو تأكيد النفي القانوني.", explanationEn: "Verb denoting performance of an act or auxiliary for negation." },
  does: { en: "Does", ar: "يقوم بـ / يفعل", explanationAr: "فعل مساعد في صيغ النفي والاشتراط القانوني.", explanationEn: "Auxiliary verb in negative or conditional statutory clauses." },
  did: { en: "Did", ar: "قام بـ / فعل", explanationAr: "يشير إلى وقوع الفعل أو الامتناع عنه في الماضي.", explanationEn: "Past tense auxiliary indicating commission or omission." },
  done: { en: "Done", ar: "حُرِّر / تم / مُنجز", explanationAr: "تُستخدم في ختام المعاهدات والوثائق الرسمية (حُرِّر في روما).", explanationEn: "Executed or completed; used in treaty attestation clauses." },
  can: { en: "Can", ar: "يستطيع / يمكن", explanationAr: "تفيد الإمكانية الواقعية أو القانونية.", explanationEn: "Modal verb indicating legal or factual capability." },
  could: { en: "Could", ar: "كان بإمكانه / قد يمكن", explanationAr: "تفيد الاستطاعة أو الاحتمال المعقول.", explanationEn: "Modal verb indicating past capability or conditional possibility." },
  will: { en: "Will", ar: "سوف / سيحدث", explanationAr: "تفيد المستقبل أو النتيجة الحتمية في المجرى العادي للأحداث.", explanationEn: "Modal verb expressing future occurrence or certainty (e.g., Article 30)." },
  would: { en: "Would", ar: "من شأنه أن / سيكون", explanationAr: "تُستخدم لبيان الأثر المحتمل لإجراء ما (مثل المساس بالأمن القومي أو العدالة).", explanationEn: "Modal verb expressing conditional consequence or potential prejudice." },
  should: { en: "Should", ar: "ينبغي / كان ينبغي (معيار العلم المفترض)", explanationAr: "تُستخدم في معيار مسؤولية القادة (كان ينبغي له أن يعلم) أو التوجيه الإجرائي.", explanationEn: "Modal verb denoting constructive knowledge standard (Article 28) or procedural duty." },

  // --- High-Frequency Legal Nouns, Verbs, Adjectives & Participles ---
  proceedings: {
    en: "Proceedings",
    ar: "الإجراءات القضائية / سير الدعوى",
    explanationAr: "مجموع الأعمال والجلسات والخطوات القضائية المتخذة أمام دوائر المحكمة في قضية أو حالة.",
    explanationEn: "The entirety of judicial steps, hearings, and actions taken before the Chambers."
  },
  sub: {
    en: "Sub-rule / Sub-paragraph",
    ar: "فرعي (قاعدة فرعية / فقرة فرعية)",
    explanationAr: "تقسيم فرعي داخل القاعدة الإجرائية أو المادة القانونية.",
    explanationEn: "Subdivision within a Rule of Procedure or Article."
  },
  pre: {
    en: "Pre-Trial",
    ar: "تمهيدي / ما قبل المحاكمة",
    explanationAr: "المرحلة الإجرائية السابقة على المحاكمة والتي تشرف عليها الدائرة التمهيدية.",
    explanationEn: "Relating to the procedural phase prior to trial overseen by the Pre-Trial Chamber."
  },
  time: {
    en: "Time / Time limit",
    ar: "وقت / مهلة زمنية",
    explanationAr: "الأجل الزمني أو الميعاد الإجرائي المحدد في النظام الأساسي أو القواعد.",
    explanationEn: "Temporal point, duration, or procedural deadline prescribed by the Court."
  },
  made: {
    en: "Made",
    ar: "صادر / مُقدَّم / مُتخَذ",
    explanationAr: "وصف للقرار الصادر أو الطلب المقدم أو الترتيب المتخذ وفق النظام.",
    explanationEn: "Issued, submitted, or effected pursuant to statutory procedure."
  },
  part: {
    en: "Part",
    ar: "الباب / جزء",
    explanationAr: "أحد الأبواب الثلاثة عشر لنظام روما الأساسي، أو جزء من العقوبة أو الجماعة.",
    explanationEn: "A major division (Part 1–13) of the Rome Statute, or a portion thereof."
  },
  detained: {
    en: "Detained person",
    ar: "الشخص المحتجز / الموقوف",
    explanationAr: "الشخص المسلوب حريته في مركز احتجاز المحكمة أو في الدولة الموجه إليها الطلب.",
    explanationEn: "A person held in custody pending surrender, trial, or enforcement."
  },
  detain: {
    en: "Detain",
    ar: "يحتجز / يوقف",
    explanationAr: "إيداع الشخص في الاحتجاز القانوني بأمر قضائي.",
    explanationEn: "To keep a person in official custody pursuant to a judicial order."
  },
  detainee: {
    en: "Detainee",
    ar: "المحتجز",
    explanationAr: "الشخص المودع في مركز الاحتجاز التابع للمحكمة.",
    explanationEn: "An individual held in the ICC detention centre."
  },
  one: {
    en: "One",
    ar: "واحد / إحدى",
    explanationAr: "عدد يفيد المفرد (مثل جريمة واحدة أو دولة واحدة أو قاضٍ واحد).",
    explanationEn: "Numerical determiner or pronoun denoting a single person, crime, or State."
  },
  two: { en: "Two", ar: "اثنان / اثنتان", explanationAr: "عدد يفيد المثنى.", explanationEn: "Number two." },
  three: { en: "Three", ar: "ثلاثة / ثلاث", explanationAr: "عدد (مثل ثلاثة قضاة في الدائرة الابتدائية).", explanationEn: "Number three." },
  five: { en: "Five", ar: "خمسة / خمس", explanationAr: "عدد (مثل خمسة قضاة في دائرة الاستئناف).", explanationEn: "Number five." },
  nine: { en: "Nine", ar: "تسعة / تسع", explanationAr: "عدد (مثل مدة ولاية القضاة تسع سنوات).", explanationEn: "Number nine (e.g., nine-year judicial term)." },
  eighteen: { en: "Eighteen", ar: "ثمانية عشر", explanationAr: "عدد القضاة في المحكمة (18 قاضياً) وسن الرشد الجنائي (18 سنة).", explanationEn: "Eighteen (18 judges of the Court; minimum age of criminal responsibility under Article 26)." },
  thirty: { en: "Thirty", ar: "ثلاثون", explanationAr: "الحد الأقصى لسنوات السجن المؤقت (30 سنة) في المادة 77.", explanationEn: "Thirty (e.g., maximum determinate sentence of 30 years under Article 77)." },
  sixty: { en: "Sixty", ar: "ستون", explanationAr: "عدد التصديقات اللازمة لدخول النظام حيز النفاذ (60 دولة).", explanationEn: "Sixty (e.g., 60 ratifications required for entry into force)." },
  out: {
    en: "Set out / Carry out",
    ar: "مُبيَّن / منصوص عليه / ينفذ",
    explanationAr: "يُستخدم في عبارات 'المنصوص عليها' (set out) أو 'تنفيذ' (carry out).",
    explanationEn: "Used in statutory phrasal verbs such as 'set out' (stipulated) or 'carry out' (execute)."
  },
  following: {
    en: "Following",
    ar: "التالي / الآتي / عقب",
    explanationAr: "تُستخدم لتقديم قائمة الشروط أو الأفعال التالية، أو بمعنى 'في أعقاب'.",
    explanationEn: "Introducing enumerated statutory items below, or occurring after an event."
  },
  follow: {
    en: "Follow",
    ar: "يتبع / يلتزم بـ",
    explanationAr: "السير وفق الإجراءات المقررة.",
    explanationEn: "To act according to or conform to prescribed procedures."
  },
  measure: {
    en: "Measure",
    ar: "تدبير / إجراء",
    explanationAr: "إجراء وقائي أو حمائي أو تحفظي تأمر به المحكمة (مثل تدابير حماية الشهود).",
    explanationEn: "A protective, investigative, or provisional step ordered by the Court."
  },
  measures: {
    en: "Measures",
    ar: "التدابير / الإجراءات",
    explanationAr: "الإجراءات والتدابير القضائية أو الإدارية المتخذة لحماية الشهود أو جمع الأدلة.",
    explanationEn: "Protective, procedural, or enforcement steps taken by the Court or States."
  },
  referred: {
    en: "Referred to",
    ar: "المشار إليه / المُحال",
    explanationAr: "وصف للمادة أو الشخص أو الحالة المشار إليها في نص آخر أو المحالة للمحكمة.",
    explanationEn: "Mentioned in a specified provision, or formally remitted to the Court."
  },
  including: {
    en: "Including",
    ar: "بما في ذلك / شاملاً",
    explanationAr: "تفيد شمول الحكم لما بعدها على سبيل التمثيل والتأكيد لا الحصر.",
    explanationEn: "Preposition indicating non-exhaustive inclusion within a legal category."
  },
  include: {
    en: "Include",
    ar: "يشمل / يتضمن",
    explanationAr: "اشتمال النص أو القرار أو القائمة على عناصر معينة.",
    explanationEn: "To comprise or contain as part of a legal scope or list."
  },
  set: {
    en: "Set forth / Set out",
    ar: "يحدد / ينص على / مجموعة",
    explanationAr: "بيان الأحكام وتفصيلها في الوثيقة القانونية، أو تحديد موعد جلسة.",
    explanationEn: "To state, stipulate, or fix a date/time in proceedings."
  },
  make: {
    en: "Make",
    ar: "يتخذ / يصدر / يقدم",
    explanationAr: "إصدار قرار أو تقديم طلب أو اتخاذ ترتيبات قانونية.",
    explanationEn: "To issue a decision, submit a request, or effect arrangements."
  },
  writing: {
    en: "In writing",
    ar: "كتابةً / خطياً",
    explanationAr: "اشتراط تقديم الطلب أو الإخطار أو الموافقة في شكل مكتوب وموثق.",
    explanationEn: "Formal requirement that a motion, notice, or consent be submitted in written form."
  },
  written: {
    en: "Written",
    ar: "مكتوب / خطي / تحريري",
    explanationAr: "صفة للمذكرات أو الشهادات أو القرارات المحررة كتابةً.",
    explanationEn: "Documented in text form, such as written submissions or transcripts."
  },
  described: {
    en: "Described",
    ar: "الموصوف / المبين",
    explanationAr: "المحدد أو المفصل في مادة أو قاعدة أخرى.",
    explanationEn: "Set forth or detailed in a specified statutory provision."
  },
  describe: {
    en: "Describe",
    ar: "يصف / يبين",
    explanationAr: "توضيح تفاصيل الواقعة أو الإجراء.",
    explanationEn: "To state the characteristics or details of a fact or procedure."
  },
  sentenced: {
    en: "Sentenced person",
    ar: "المحكوم عليه / المقضي بعقوبته",
    explanationAr: "الشخص الذي صدر بحقه حكم نهائي بالعقوبة من المحكمة.",
    explanationEn: "A person upon whom a sentence of imprisonment or fine has been imposed."
  },
  day: {
    en: "Day",
    ar: "يوم",
    explanationAr: "وحدة حساب المواعيد والمهل الإجرائية في القواعد واللوائح.",
    explanationEn: "Unit of time for calculating procedural deadlines."
  },
  days: {
    en: "Days",
    ar: "أيام",
    explanationAr: "المهل الزمنية المحددة بالأيام لتقديم الطعون أو الطلبات.",
    explanationEn: "Calendar days prescribed for filing appeals, responses, or notifications."
  },
  basis: {
    en: "Basis / Reasonable basis",
    ar: "أساس / سند قانوني",
    explanationAr: "الأساس المعقول أو السند القانوني اللازم لبدء التحقيق أو إصدار أمر قضائي.",
    explanationEn: "The legal or evidentiary foundation required for action (e.g., reasonable basis)."
  },
  take: {
    en: "Take",
    ar: "يتخذ (إجراءً أو تدبيراً)",
    explanationAr: "مباشرة إجراء قضائي أو إداري أو أخذ أمر في الاعتبار.",
    explanationEn: "To undertake a procedural step, measure, or consideration."
  },
  taken: {
    en: "Taken",
    ar: "مُتخَذ",
    explanationAr: "وصف للإجراء أو التدبير الذي تم اتخاذه.",
    explanationEn: "Past participle indicating measures or actions carried out."
  },
  taking: {
    en: "Taking into account",
    ar: "اتخاذ / مع أخذ في الاعتبار",
    explanationAr: "مراعاة ظروف أو آراء معينة عند إصدار القرار القضائي.",
    explanationEn: "Considering specified factors or views when reaching a judicial decision."
  },
  president: {
    en: "President",
    ar: "رئيس المحكمة / الرئيس",
    explanationAr: "القاضي المنتخب من زملائه لرئاسة المحكمة وهيئة الرئاسة (المادة 38).",
    explanationEn: "The Judge elected to head the Presidency and represent the Court under Article 38."
  },
  deputy: {
    en: "Deputy (Prosecutor / Registrar)",
    ar: "نائب (المدعي العام أو المسجل)",
    explanationAr: "نائب المدعي العام أو نائب المسجل الذي يعاون في إدارة المكتب أو القلم.",
    explanationEn: "Deputy Prosecutor or Deputy Registrar assisting the head of the organ."
  },
  particular: {
    en: "Particular / In particular",
    ar: "خاص / معين / ولا سيما",
    explanationAr: "تخصيص حالة معينة أو التأكيد على عنصر محدد على وجه الخصوص.",
    explanationEn: "Specific, or used in 'in particular' to highlight key statutory examples."
  },
  reason: {
    en: "Reason",
    ar: "سبب / دافع معقول",
    explanationAr: "العلة القانونية أو التسبيب القضائي للقرار.",
    explanationEn: "Legal ground, justification, or rationale for a decision."
  },
  reasons: {
    en: "Reasons",
    ar: "الأسباب / الحيثيات",
    explanationAr: "التسبيب القانوني والواقعي الذي يجب أن تشتمل عليه أحكام وقرارات الدوائر.",
    explanationEn: "The formal legal and factual reasoning supporting a Chamber's judgment or decision."
  },
  list: {
    en: "List (of counsel / candidates / victims)",
    ar: "قائمة / جدول (المحامين أو المرشحين)",
    explanationAr: "الجدول الرسمي الذي يمسكه المسجل للمحامين المؤهلين أو الخبراء أو المرشحين.",
    explanationEn: "Official roster maintained by the Registrar (e.g., List of Counsel, List A and B)."
  },
  place: {
    en: "Place",
    ar: "مكان / محل انعقاد",
    explanationAr: "المكان الجغرافي لارتكاب الجريمة أو محل انعقاد المحاكمة.",
    explanationEn: "The geographical locus of the crime or venue of Court proceedings."
  },
  committed: {
    en: "Committed",
    ar: "مُرتكَب / اقترف",
    explanationAr: "وصف للجرائم التي وقعت داخل اختصاص المحكمة الزمني والمكاني.",
    explanationEn: "Perpetrated or carried out; referring to crimes within Court jurisdiction."
  },
  requested: {
    en: "Requested (State)",
    ar: "المطلوب / الدولة الموجه إليها الطلب",
    explanationAr: "الدولة التي توجه إليها المحكمة طلب تعاون أو قبض وتقديم عملاً بالباب التاسع.",
    explanationEn: "The State to which a request for cooperation or surrender is directed by the Court."
  },
  responsible: {
    en: "Responsible / Criminally responsible",
    ar: "مسؤول (مسؤول جنائياً / مختص)",
    explanationAr: "خاضع للمساءلة الجنائية الفردية بموجب المادة 25، أو مكلف بمهمة.",
    explanationEn: "Liable to punishment under Article 25, or charged with an institutional duty."
  },
  interest: {
    en: "Interest",
    ar: "مصلحة",
    explanationAr: "مصلحة العدالة أو مصلحة الضحايا أو الأمن القومي.",
    explanationEn: "A legal stake, benefit, or concern (e.g., interests of justice)."
  },
  interests: {
    en: "Interests (of justice / victims)",
    ar: "مصالح (مصلحة العدالة / مصالح الضحايا)",
    explanationAr: "الاعتبارات العليا للعدالة وحقوق الضحايا التي تراعيها المحكمة والمدعي العام.",
    explanationEn: "Overarching considerations of justice and victim welfare guiding the Court."
  },
  armed: {
    en: "Armed (conflict / forces)",
    ar: "مسلح (نزاع مسلح / قوات مسلحة)",
    explanationAr: "صفة للنزاعات المسلحة الدولية أو غير الدولية أو القوات النظامية وغير النظامية.",
    explanationEn: "Involving military weapons or forces (e.g., armed conflict, armed forces)."
  },
  account: {
    en: "Account (Take into account)",
    ar: "اعتبار / حساب",
    explanationAr: "مراعاة عوامل محددة عند التقدير القضائي.",
    explanationEn: "Consideration given to relevant factors in judicial decision-making."
  },
  centre: {
    en: "Centre (Detention centre)",
    ar: "مركز (مركز الاحتجاز)",
    explanationAr: "مركز الاحتجاز التابع للمحكمة الجنائية الدولية في لاهاي.",
    explanationEn: "The detention facility operated by the Court."
  },
  center: {
    en: "Center (Detention center)",
    ar: "مركز (مركز الاحتجاز)",
    explanationAr: "مركز الاحتجاز التابع للمحكمة الجنائية الدولية.",
    explanationEn: "The detention facility operated by the Court."
  },
  attack: {
    en: "Attack",
    ar: "هجوم / اعتداء",
    explanationAr: "سلوك ينطوي على ارتكاب أفعال عنف ضد السكان المدنيين أو أهداف عسكرية أو مدنية.",
    explanationEn: "A course of conduct involving the multiple commission of acts against civilians or targets."
  },
  more: {
    en: "More",
    ar: "أكثر / إضافي",
    explanationAr: "تفيد الزيادة في العدد أو المدة (مثل شخص واحد أو أكثر).",
    explanationEn: "A greater or additional amount, number, or degree (e.g., one or more persons)."
  },
  prior: {
    en: "Prior",
    ar: "سابق / مسبق",
    explanationAr: "ما يسبق الإجراء أو الواقعة زمنياً (مثل الموافقة المسبقة أو قبل بدء النفاذ).",
    explanationEn: "Existing or coming before in time or procedural order."
  },
  notified: {
    en: "Notified",
    ar: "مُخطَر / تم إبلاغه",
    explanationAr: "الطرف أو الشخص الذي تم إعلانه رسمياً بالقرار أو الطلب.",
    explanationEn: "Formally informed of a proceeding, decision, or filing."
  },
  notice: {
    en: "Notice",
    ar: "إشعار / إخطار رسمي",
    explanationAr: "بلاغ رسمي مكتوب يوجه للأطراف أو الدول للعلم بإجراء قضائي.",
    explanationEn: "Formal written intimation of a judicial step, hearing, or filing."
  },
  inform: {
    en: "Inform",
    ar: "يُبلغ / يُخطر / يُعلم",
    explanationAr: "إحاطة الشخص أو الدولة أو الدائرة علماً بواقعة أو حق قانوني.",
    explanationEn: "To communicate knowledge of facts, charges, or rights to a person or organ."
  },
  informed: {
    en: "Informed",
    ar: "مُبلَّغ / على علم",
    explanationAr: "إحاطة المتهم أو الضحية علماً بحقوقه أو التهم بلغة يفهمها.",
    explanationEn: "Made aware of charges, rights, or decisions in a language understood."
  },
  participant: {
    en: "Participant",
    ar: "مشارك في الإجراءات",
    explanationAr: "كل طرف يشارك في الدعوى أمام المحكمة (الادعاء، الدفاع، الممثل القانوني للضحايا، الدولة).",
    explanationEn: "Any party or legal representative participating in proceedings before a Chamber."
  },
  participants: {
    en: "Participants",
    ar: "المشاركون في الإجراءات",
    explanationAr: "مجموع الأطراف والممثلين القانونيين المشاركين في جلسات وإجراءات المحكمة.",
    explanationEn: "The parties, victims' legal representatives, and States taking part in proceedings."
  },
  grounds: {
    en: "Grounds",
    ar: "أسباب / مسوغات / دواعٍ قانونية",
    explanationAr: "الأسباب القانونية والواقعية الكافية لإصدار أمر قبض أو اعتماد التهم أو الإعفاء من المسؤولية.",
    explanationEn: "Substantial or reasonable legal and factual bases justifying a judicial action."
  },
  ground: {
    en: "Ground",
    ar: "سبب / مسوغ قانوني",
    explanationAr: "أساس قانوني للطعن أو الاستبعاد أو الإعفاء من المسؤولية.",
    explanationEn: "A specific legal basis for a motion, appeal, or defense."
  },
  available: {
    en: "Available",
    ar: "متاح / متوفر",
    explanationAr: "كون الشخص متاحاً للتقديم أو كون الأدلة والمعلومات متوفرة للمحكمة.",
    explanationEn: "Present and ready for use, disclosure, or surrender to the Court."
  },
  division: {
    en: "Division",
    ar: "شعبة قضائية / قسم",
    explanationAr: "إحدى الشُعب القضائية الثلاث في المحكمة (الاستئناف، الابتدائية، التمهيدية) أو قسم إداري.",
    explanationEn: "One of the three judicial divisions (Appeals, Trial, Pre-Trial) or an administrative division."
  },
  divisions: {
    en: "Divisions",
    ar: "الشُعب القضائية",
    explanationAr: "الشعب القضائية الثلاث المنصوص عليها في المادتين 34 و39 من النظام الأساسي.",
    explanationEn: "The Appeals, Trial, and Pre-Trial Divisions of the Court."
  },
  factual: {
    en: "Factual",
    ar: "واقعي / متعلق بالوقائع",
    explanationAr: "ما يتصل بالوقائع المادية والظروف الفعلية للجريمة تمييزاً له عن التكييف القانوني.",
    explanationEn: "Relating to actual facts and material circumstances as opposed to legal characterization."
  },
  fact: {
    en: "Fact",
    ar: "واقعة / حقيقة",
    explanationAr: "أمر مادي حدث في الواقع ويخضع للإثبات أمام المحكمة (مثل الغلط في الوقائع).",
    explanationEn: "An actual event or circumstance proved by evidence."
  },
  facts: {
    en: "Facts",
    ar: "الوقائع",
    explanationAr: "مجموع الأحداث والظروف المادية التي تستند إليها التهم أو القرار القضائي.",
    explanationEn: "The material events and circumstances forming the subject of charges or findings."
  },
  material: {
    en: "Material",
    ar: "مادي / جوهري / مواد",
    explanationAr: "الركن المادي للجريمة، أو الوثائق والمواد ذات الأهمية الجوهرية في الإثبات.",
    explanationEn: "Physical/substantive in nature, or documentary/evidentiary materials."
  },
  ordered: {
    en: "Ordered",
    ar: "مأمور به / صادر بأمر قضائي",
    explanationAr: "ما قضت به الدائرة القضائية أو أمر بارتكابه الرئيس أو القائد.",
    explanationEn: "Directed by a judicial Chamber, or commanded by a superior."
  },
  context: {
    en: "Context",
    ar: "سياق / إطار",
    explanationAr: "السياق العام (مثل سياق هجوم منهجي أو نزاع مسلح) الذي تقع فيه الجريمة.",
    explanationEn: "The surrounding circumstances (e.g., widespread attack or armed conflict) in which an act occurs."
  },
  applicable: {
    en: "Applicable",
    ar: "واجب التطبيق / ساري المفعول",
    explanationAr: "القانون أو القواعد الواجب إعمالها وتطبيقها على القضية (المادة 21).",
    explanationEn: "Relevant and binding upon the Court in a given matter (e.g., Applicable Law under Article 21)."
  },
  required: {
    en: "Required",
    ar: "مطلوب / واجب / لازم قانوناً",
    explanationAr: "ما يفرضه النظام الأساسي أو تطلبه الدائرة القضائية على سبيل الإلزام.",
    explanationEn: "Mandated by the Statute, Rules, or an order of a Chamber."
  },
  additional: {
    en: "Additional",
    ar: "إضافي / تكميلي",
    explanationAr: "أدلة أو تهم أو جلسات أو قضاة إضافيون يُستعان بهم وفق النظام.",
    explanationEn: "Supplementary evidence, charges, hearings, or judges."
  },
  leave: {
    en: "Leave (of the Chamber)",
    ar: "إذن قضائي (إذن الدائرة)",
    explanationAr: "تصريح أو إذن مسبق تمنحه الدائرة القضائية لتقديم استئناف أو مذكرة أو اتخاذ إجراء.",
    explanationEn: "Formal judicial permission granted by a Chamber (e.g., leave to appeal)."
  },
  brief: {
    en: "Brief",
    ar: "مذكرة قانونية / لائحة",
    explanationAr: "مذكرة مكتوبة تتضمن الحجج والأسانيد القانونية والواقعية (كمذكرة الاستئناف).",
    explanationEn: "A written legal submission presenting arguments and authorities to a Chamber."
  },
  concerned: {
    en: "Concerned (State / person)",
    ar: "المعني / صاحب الشأن",
    explanationAr: "الدولة المعنية أو الشخص المعني أو الشاهد الذي يتصل به الإجراء القضائي مباشرة.",
    explanationEn: "The specific State, person, victim, or witness directly affected by a proceeding."
  },
  given: {
    en: "Given",
    ar: "ممنوح / معطى / مُقدم",
    explanationAr: "وصف للضمان المقدم أو الإخطار الموجه أو الفرصة الممنوحة للأطراف.",
    explanationEn: "Provided, granted, or stated."
  },
  give: {
    en: "Give",
    ar: "يعطي / يمنح / يدلي بـ",
    explanationAr: "الإدلاء بشهادة أو إصدار إخطار أو منح فرصة.",
    explanationEn: "To provide testimony, notice, consent, or opportunity."
  },
  consider: {
    en: "Consider",
    ar: "ينظر في / يدرس / يعتبر",
    explanationAr: "فحص الدائرة القضائية للطلب أو الأدلة وتقديرها.",
    explanationEn: "To examine, deliberate upon, or deem in a judicial capacity."
  },
  considered: {
    en: "Considered",
    ar: "منظور فيه / مُعتبَر",
    explanationAr: "ما تم بحثه وتقديره من قبل الدائرة أو ما يُعد قانوناً بحكم معين.",
    explanationEn: "Examined by a Chamber, or deemed under law."
  },
  consideration: {
    en: "Consideration",
    ar: "نظر / دراسة / اعتبار",
    explanationAr: "عملية الفحص والتداول القضائي في المسألة المعروضة.",
    explanationEn: "Judicial examination, deliberation, or factor taken into account."
  },
  matter: {
    en: "Matter",
    ar: "مسألة / موضوع / شأن",
    explanationAr: "الموضوع القانوني أو الإجرائي المعروض على المحكمة للفصل فيه.",
    explanationEn: "A legal issue, question, or subject before the Court."
  },
  matters: {
    en: "Matters",
    ar: "المسائل / الشؤون",
    explanationAr: "الموضوعات والقضايا الإجرائية أو الموضوعية الخاضعة لنظر المحكمة.",
    explanationEn: "Issues or affairs subject to judicial or administrative determination."
  },
  established: {
    en: "Established",
    ar: "مُنشأ / ثابت / مقرر",
    explanationAr: "ما تم تأسيسه قانوناً (كالمحكمة) أو ما ثبتت صحته بالأدلة.",
    explanationEn: "Formally instituted by law, or proven by evidence."
  },
  convicted: {
    en: "Convicted person",
    ar: "الشخص المدان / المحكوم بإدانته",
    explanationAr: "الشخص الذي ثبتت مسؤوليته الجنائية بحكم إدانة صادر عن المحكمة.",
    explanationEn: "A person found guilty of a crime within the jurisdiction of the Court."
  },
  convict: {
    en: "Convict",
    ar: "يُدين",
    explanationAr: "إصدار حكم قضائي بإدانة المتهم بعد ثبوت التهمة بما لا يدع مجالاً للشك المعقول.",
    explanationEn: "To declare an accused person guilty of a criminal offense."
  },
  acquitted: {
    en: "Acquitted",
    ar: "مُبرَّأ / مقضي ببراءته",
    explanationAr: "الشخص الذي صدر حكم ببراءته من التهم المنسوبة إليه.",
    explanationEn: "Declared not guilty of the charges."
  },
  acquit: {
    en: "Acquit",
    ar: "يُبرئ",
    explanationAr: "القضاء ببراءة المتهم لعدم كفاية الأدلة أو انتفاء أركان الجريمة.",
    explanationEn: "To formally clear an accused person of criminal charges."
  },

  // --- Additional High-Value ICC Vocabulary ---
  perpetrator: {
    en: "Perpetrator",
    ar: "مرتكب الجريمة / الجاني",
    explanationAr: "الشخص الذي اقترف السلوك المادي المكون للجريمة (في وثيقة أركان الجرائم).",
    explanationEn: "The person who engaged in the conduct constituting the crime (in Elements of Crimes)."
  },
  perpetrators: {
    en: "Perpetrators",
    ar: "مرتكبو الجرائم / الجناة",
    explanationAr: "الأشخاص الذين يقترفون الجرائم الخاضعة لاختصاص المحكمة.",
    explanationEn: "Persons who commit crimes under the jurisdiction of the Court."
  },
  unlawful: {
    en: "Unlawful",
    ar: "غير مشروع / مخالف للقانون",
    explanationAr: "فعل أو احتجاز أو ترحيل يقع بالمخالفة لقواعد القانون الدولي.",
    explanationEn: "Contrary to or prohibited by international or applicable law."
  },
  unlawfully: {
    en: "Unlawfully",
    ar: "بصورة غير مشروعة / دون مسوغ قانوني",
    explanationAr: "ارتكاب الفعل دون أي مبرر أو سند يجيزه في القانون الدولي.",
    explanationEn: "In a manner contrary to law and without legal justification."
  },
  inadmissible: {
    en: "Inadmissible",
    ar: "غير مقبول (الدعوى أو الدليل)",
    explanationAr: "الحكم بعدم قبول القضية بموجب المادة 17 (التكامل) أو عدم قبول الدليل بموجب المادة 69.",
    explanationEn: "Barred from being heard (under Article 17 complementarity) or excluded as evidence."
  },
  admissible: {
    en: "Admissible",
    ar: "مقبول قانوناً",
    explanationAr: "استيفاء القضية لشروط المقبولية أمام المحكمة أو صلاحية الدليل للعرض.",
    explanationEn: "Satisfying the legal criteria to be heard by the Court or received in evidence."
  },
  unable: {
    en: "Unable",
    ar: "غير قادر / عاجز",
    explanationAr: "عجز الدولة عن إجراء التحقيق أو المحاكمة بسبب انهيار نظامها القضائي (المادة 17).",
    explanationEn: "Incapable of carrying out proceedings due to collapse or unavailability of the national judicial system."
  },
  unwilling: {
    en: "Unwilling",
    ar: "غير راغب",
    explanationAr: "عدم رغبة الدولة في الاضطلاع بالتحقيق أو المقاضاة بجدية لحماية الشخص من المساءلة (المادة 17).",
    explanationEn: "Lacking genuine intent to bring a person to justice under Article 17."
  },
  inability: {
    en: "Inability",
    ar: "عدم القدرة / العجز القضائي",
    explanationAr: "حالة تعذر مباشرة القضاء الوطني لدوره بسبب انهيار كلي أو جوهري.",
    explanationEn: "State incapacity to prosecute or investigate under Article 17(3)."
  },
  unwillingness: {
    en: "Unwillingness",
    ar: "عدم الرغبة في المقاضاة",
    explanationAr: "توافر قرائن على صورية الإجراءات الوطنية أو التسويف غير المبرر (المادة 17/2).",
    explanationEn: "State reluctance to genuinely prosecute, assessed under Article 17(2)."
  },
  genuinely: {
    en: "Genuinely",
    ar: "بجدية / بصدق وحسن نية",
    explanationAr: "معيار تقييم جدية التحقيقات والمحاكمات الوطنية في إطار مبدأ التكامل.",
    explanationEn: "In good faith and with real intent to administer justice (Article 17)."
  },
  shield: {
    en: "Shield",
    ar: "يحمي من المساءلة / يدرأ المسؤولية",
    explanationAr: "اتخاذ إجراءات صورية بقصد حماية الشخص المعني من المسؤولية الجنائية.",
    explanationEn: "To protect a person from criminal responsibility through sham proceedings."
  },
  delay: {
    en: "Delay",
    ar: "تأخير",
    explanationAr: "تراخٍ في الإجراءات؛ ويُحظر التأخير غير المبرر في محاكمة المتهم.",
    explanationEn: "Postponement or slowness in proceedings; undue delay is prohibited."
  },
  unjustified: {
    en: "Unjustified",
    ar: "غير مبرر / بلا مسوغ",
    explanationAr: "تأخير أو إجراء يفتقر إلى مسوغ قانوني أو واقعي مقبول.",
    explanationEn: "Lacking a valid legal or factual justification."
  },
  independent: {
    en: "Independent",
    ar: "مستقل",
    explanationAr: "استقلال المحكمة وقضاتها والمدعي العام عن أي تأثير خارجي.",
    explanationEn: "Free from external control or influence in judicial and prosecutorial functions."
  },
  impartial: {
    en: "Impartial",
    ar: "محايد / نزيه",
    explanationAr: "التجرد والحياد التام في نظر الدعوى والتحقيق فيها.",
    explanationEn: "Treating all parties equally without bias or prejudice."
  },
  impartiality: {
    en: "Impartiality",
    ar: "الحياد / التجرد القضائي",
    explanationAr: "أحد أهم شروط القاضي والمدعي العام، ويترتب على انتفائه وجوب التنحي.",
    explanationEn: "Absence of bias or conflict of interest required of judges and prosecutors."
  },
  competence: {
    en: "Competence",
    ar: "الكفاءة المهنية / الاختصاص",
    explanationAr: "الخبرة القانونية المشترطة في القضاة والمحامين، أو صلاحية الهيئة للنظر في المسألة.",
    explanationEn: "Professional legal qualification, or the legal authority of an organ."
  },
  competent: {
    en: "Competent",
    ar: "مختص / ذو كفاءة",
    explanationAr: "السلطة القضائية أو الوطنية المختصة قانوناً باتخاذ الإجراء.",
    explanationEn: "Having the necessary legal authority or professional qualification."
  },
  qualification: {
    en: "Qualification",
    ar: "مؤهل قانوني",
    explanationAr: "الشروط العلمية والعملية الواجب توفرها لتولي المنصب.",
    explanationEn: "A requisite skill, experience, or legal status."
  },
  qualifications: {
    en: "Qualifications",
    ar: "المؤهلات",
    explanationAr: "الشروط والمؤهلات المهنية والأخلاقية للقضاة والمحامين (المادة 36 والقاعدة 22).",
    explanationEn: "Statutory requirements of character, competence, and language."
  },
  nomination: {
    en: "Nomination",
    ar: "ترشيح",
    explanationAr: "تسمية المرشحين لعضوية المحكمة من قبل الدول الأطراف.",
    explanationEn: "The formal proposal of a candidate for election as judge or Prosecutor."
  },
  elect: {
    en: "Elect",
    ar: "ينتخب",
    explanationAr: "اختيار القضاة والمدعي العام والمسجل عن طريق الاقتراع السري.",
    explanationEn: "To choose Court officials by secret ballot."
  },
  elected: {
    en: "Elected",
    ar: "مُنتخَب",
    explanationAr: "من تم اختياره رسمياً بالتصويت لشغل منصب في المحكمة.",
    explanationEn: "Chosen by vote in accordance with the Statute."
  },
  vacancy: {
    en: "Vacancy",
    ar: "شغور المنصب",
    explanationAr: "خلو منصب أحد القضاة أو المسؤولين بوفاة أو استقالة أو عزل (المادة 37).",
    explanationEn: "An unoccupied judicial or official post solved by election under Article 37."
  },
  resignation: {
    en: "Resignation",
    ar: "استقالة",
    explanationAr: "التخلي الطوعي عن المنصب القضائي أو الرسمي بإخطار مكتوب.",
    explanationEn: "Voluntary relinquishment of office by formal notification."
  },
  excuse: {
    en: "Excuse (from functions)",
    ar: "يعفي / إعفاء من المهام",
    explanationAr: "إعفاء القاضي أو المدعي العام من نظر قضية معينة بناءً على طلبه (المادة 41).",
    explanationEn: "To relieve a judge or Prosecutor from sitting in a specific case upon request."
  },
  disqualification: {
    en: "Disqualification",
    ar: "التنحية / عدم الأهلية لنظر القضية",
    explanationAr: "منع القاضي أو المدعي العام من المشاركة في قضية لوجود سبب يمس حياده (المادتان 41 و42).",
    explanationEn: "Exclusion of a judge or Prosecutor from a case due to conflict of interest or bias."
  },
  misconduct: {
    en: "Misconduct",
    ar: "سوء السلوك",
    explanationAr: "مخالفة جسيمة أو أقل جسامة لواجبات المنصب تستوجب العزل أو التأديب (المادتان 46 و47).",
    explanationEn: "Breach of official duties warranting disciplinary measures or removal from office."
  },
  disciplinary: {
    en: "Disciplinary",
    ar: "تأديبي",
    explanationAr: "الجزاءات والإجراءات التأديبية المطبقة عند الإخلال بواجبات الوظيفة أو المهنة.",
    explanationEn: "Relating to enforcement of professional ethics and punishment of misconduct."
  },
  salaries: {
    en: "Salaries",
    ar: "الرواتب / المرتبات",
    explanationAr: "المخصصات المالية المقررة للقضاة والمدعي العام والمسجل (المادة 49).",
    explanationEn: "Remuneration paid to judges and Court officials under Article 49."
  },
  facilities: {
    en: "Facilities",
    ar: "التسهيلات / المرافق",
    explanationAr: "التسهيلات والامتيازات الممنوحة للمحكمة وللدفاع لإعداد قضيته.",
    explanationEn: "Privileges, resources, and premises necessary for Court or defence functions."
  },
  authentic: {
    en: "Authentic (texts)",
    ar: "ذو حجية متساوية / أصلي",
    explanationAr: "كون النصوص الرسمية باللغات الست للمحكمة ذات حجية قانونية متساوية (المادة 128).",
    explanationEn: "Equally authoritative and legally valid across the six official languages."
  },
  ratification: {
    en: "Ratification",
    ar: "التصديق (على المعاهدة)",
    explanationAr: "الإجراء الدولي الرسمي الذي تلتزم بموجبه الدولة قانوناً بأحكام نظام روما الأساسي (المادة 125).",
    explanationEn: "The formal international act whereby a State establishes its consent to be bound by the Statute."
  },
  accession: {
    en: "Accession",
    ar: "الانضمام (إلى المعاهدة)",
    explanationAr: "انضمام دولة لم توقع على النظام الأساسي في الميعاد الأولي لتصبح دولة طرفاً فيه.",
    explanationEn: "The formal act by which a non-signatory State becomes a party to the Rome Statute."
  },
  withdrawal: {
    en: "Withdrawal",
    ar: "الانسحاب",
    explanationAr: "انسحاب دولة طرف من النظام الأساسي بموجب المادة 127، أو سحب التهم أو الطعن.",
    explanationEn: "Denunciation of the Statute by a State Party under Article 127, or retraction of charges/appeals."
  },
  depositary: {
    en: "Depositary",
    ar: "المودع لديه (الأمين العام للأمم المتحدة)",
    explanationAr: "الجهة المكلفة بحفظ أصل المعاهدة وتلقي صكوك التصديق والانضمام.",
    explanationEn: "The UN Secretary-General as custodian of the Rome Statute."
  },
  hague: {
    en: "The Hague",
    ar: "لاهاي (مقر المحكمة)",
    explanationAr: "مدينة لاهاي في هولندا، وهي المقر الدائم للمحكمة الجنائية الدولية بموجب المادة 3.",
    explanationEn: "City in the Netherlands serving as the official seat of the ICC under Article 3."
  },
  netherlands: {
    en: "Netherlands",
    ar: "هولندا (الدولة المضيفة)",
    explanationAr: "الدولة المضيفة لمقر المحكمة الجنائية الدولية في لاهاي.",
    explanationEn: "The host State of the International Criminal Court."
  },
  host: {
    en: "Host State",
    ar: "الدولة المضيفة",
    explanationAr: "مملكة هولندا التي تستضيف مقر المحكمة الجنائية الدولية وترتبط معها باتفاق المقر.",
    explanationEn: "The State (the Netherlands) in which the seat of the Court is established."
  },
  territory: {
    en: "Territory",
    ar: "إقليم الدولة",
    explanationAr: "النطاق الإقليمي (البري والبحري والجوي) للدولة الذي تمارس عليه سيادتها وولايتها القضائية.",
    explanationEn: "The geographic area under the sovereign jurisdiction of a State (Article 12)."
  },
  nationality: {
    en: "Nationality",
    ar: "الجنسية",
    explanationAr: "الرابطة القانونية بين الفرد والدولة، وهي أحد ضوابط اختصاص المحكمة في المادة 12.",
    explanationEn: "The legal bond between an individual and a State, forming a basis of jurisdiction."
  },
  consent: {
    en: "Consent",
    ar: "موافقة / رضا",
    explanationAr: "القبول الحر الصادر عن دولة أو شخص (كموافقة الشخص على التقديم المبسط أو انعدام الرضا في جرائم العنف).",
    explanationEn: "Voluntary agreement or permission given by a State, party, or person."
  },
  acceptance: {
    en: "Acceptance",
    ar: "قبول (الاختصاص)",
    explanationAr: "قبول الدولة لاختصاص المحكمة الجنائية الدولية بموجب المادة 12.",
    explanationEn: "Formal recognition by a State of the jurisdiction of the Court."
  },
  defer: {
    en: "Defer",
    ar: "يؤجل / يرجئ / ينزل عند تحقيق الدولة",
    explanationAr: "تأجيل التحقيق أو المقاضاة بناءً على طلب مجلس الأمن (المادة 16) أو تحقيق الدولة (المادة 18).",
    explanationEn: "To postpone or yield investigation to a State or Security Council request."
  },
  ruling: {
    en: "Ruling",
    ar: "قرار قضائي / حكم أولي",
    explanationAr: "قرار تصدره الدائرة القضائية للفصل في مسألة الاختصاص أو المقبولية أو الإجراءات.",
    explanationEn: "An authoritative judicial decision on admissibility, jurisdiction, or procedure."
  },
  challenge: {
    en: "Challenge (to jurisdiction or admissibility)",
    ar: "طعن / دفع (بعدم الاختصاص أو عدم المقبولية)",
    explanationAr: "اعتراض قانوني يقدمه المتهم أو الدولة للطعن في اختصاص المحكمة أو مقبولية الدعوى (المادة 19).",
    explanationEn: "Formal legal objection contesting the Court's jurisdiction or case admissibility under Article 19."
  },
  bis: {
    en: "Bis",
    ar: "مكرراً (إضافة تشريعية كالمادة 8 مكرراً)",
    explanationAr: "مصطلح لاتيني يُستخدم لترقيم المواد أو القواعد المضافة لاحقاً (مثل المادة 8 مكرراً والمادة 15 مكرراً).",
    explanationEn: "Latin drafting term indicating an inserted second article or rule of the same number."
  },
  ter: {
    en: "Ter",
    ar: "مكرراً (2) / ثالثاً (مثل المادة 15 مكرراً 2)",
    explanationAr: "مصطلح لاتيني يُستخدم لترقيم مادة أو قاعدة ثانية مضافة بعد المكرر الأول.",
    explanationEn: "Latin drafting term indicating a third provision bearing the same base number."
  },
  gender: {
    en: "Gender",
    ar: "النوع الاجتماعي / الجنس",
    explanationAr: "يشير إلى الجنسين الذكر والأنثى في سياق المجتمع وفق تعريف المادة 7(3) من نظام روما.",
    explanationEn: "Refers to the two sexes, male and female, within the context of society under Article 7(3)."
  },
  commander: {
    en: "Military commander",
    ar: "قائد عسكري",
    explanationAr: "القائد العسكري أو من يقوم مقامه الذي يخضع للمسؤولية الجنائية عن أفعال مرؤوسيه (المادة 28).",
    explanationEn: "A military leader subject to command responsibility under Article 28."
  },
  subordinates: {
    en: "Subordinates",
    ar: "المرؤوسون / الخاضعون للسلطة",
    explanationAr: "الأفراد الخاضعون للقيادة والسيطرة الفعلية للقائد العسكري أو الرئيس المدني.",
    explanationEn: "Persons under the effective command, authority, and control of a superior."
  },
  mental: {
    en: "Mental (element / disease)",
    ar: "معنوي / عقلي (الركن المعنوي / المرض العقلي)",
    explanationAr: "يتعلق بالركن المعنوي للجريمة (المادة 30) أو الأهلية العقلية للمتهم (المادة 31).",
    explanationEn: "Relating to the mens rea (Article 30) or psychological capacity (Article 31)."
  },
  physical: {
    en: "Physical",
    ar: "مادي / جسدي",
    explanationAr: "يتعلق بالركن المادي للجريمة أو السلامة الجسدية للأشخاص.",
    explanationEn: "Relating to bodily integrity or material conduct."
  },
  intoxication: {
    en: "Intoxication",
    ar: "حالة السُّكر أو التخدير",
    explanationAr: "حالة فقدان الإدراك بسبب مواد مسكرة أو مخدرة، وتنظم المادة 31(1)(ب) شروطها النادرة لامتناع المسؤولية.",
    explanationEn: "State of impaired capacity under Article 31(1)(b)."
  },
  imminent: {
    en: "Imminent",
    ar: "وشيك / داهم (خطر حال)",
    explanationAr: "وصف للخطر أو استخدام القوة الوشيك في حالتي الدفاع الشرعي والإكراه (المادة 31).",
    explanationEn: "Impending and immediate threat of death or bodily harm."
  },
  proportionate: {
    en: "Proportionate",
    ar: "متناسب",
    explanationAr: "شرط التناسب بين فعل الدفاع والخطر الداهم، أو تناسب العقوبة مع جسامة الجريمة.",
    explanationEn: "Corresponding in degree or severity to the threat or gravity of the offense."
  },
  property: {
    en: "Property",
    ar: "ممتلكات / أموال",
    explanationAr: "الأعيان والممتلكات المحمية في النزاعات المسلحة أو الخاضعة للمصادرة وجبر الضرر.",
    explanationEn: "Protected civilian objects, or assets subject to forfeiture and restitution."
  },
  survival: {
    en: "Survival",
    ar: "البقاء على قيد الحياة",
    explanationAr: "المواد أو الممتلكات التي لا غنى عنها لبقاء السكان المدنيين على قيد الحياة.",
    explanationEn: "Continued existence; protected against starvation tactics in warfare."
  },
  organ: {
    en: "Organ (of the Court)",
    ar: "جهاز (من أجهزة المحكمة)",
    explanationAr: "أحد الأجهزة الأربعة للمحكمة المنصوص عليها في المادة 34 (الرئاسة، الشُعب، مكتب المدعي العام، القلم).",
    explanationEn: "One of the four principal organs of the Court under Article 34."
  },
  organs: {
    en: "Organs (of the Court)",
    ar: "أجهزة المحكمة",
    explanationAr: "الأجهزة الرئيسية الأربعة المكونة للمحكمة الجنائية الدولية.",
    explanationEn: "The Presidency, Divisions, Office of the Prosecutor, and Registry."
  },
  unit: {
    en: "Unit (Victims and Witnesses Unit)",
    ar: "وحدة (وحدة الضحايا والشهود)",
    explanationAr: "وحدة متخصصة تنشأ داخل قلم المحكمة لتوفير الحماية والدعم للشهود والضحايا.",
    explanationEn: "Specialized subdivision within the Registry or Office of the Prosecutor."
  },
  associate: {
    en: "Associate counsel",
    ar: "محامٍ مساعد / شريك",
    explanationAr: "المحامي المعاون للمحامي الرئيسي في فريق الدفاع أو تمثيل الضحايا.",
    explanationEn: "Co-counsel assisting lead counsel in defence or victim representation."
  },
  trauma: {
    en: "Trauma",
    ar: "صدمة نفسية",
    explanationAr: "الأثر النفسي الناتج عن الجرائم العنيفة والذي يتطلب خبرة متخصصة في وحدة الضحايا والشهود.",
    explanationEn: "Severe psychological distress resulting from crimes, addressed by the VWU."
  },
  sexual: {
    en: "Sexual (violence)",
    ar: "جنسي (العنف الجنسي)",
    explanationAr: "الجرائم ذات الطابع الجنسي المعاقب عليها كجرائم ضد الإنسانية أو جرائم حرب.",
    explanationEn: "Relating to offenses of sexual violence under Articles 7 and 8."
  },
  violence: {
    en: "Violence",
    ar: "عنف",
    explanationAr: "استخدام القوة البدنية أو التهديد بها لإلحاق أذى بالأشخاص أو الممتلكات.",
    explanationEn: "Unlawful exercise of physical force or intimidation."
  },
  children: {
    en: "Children",
    ar: "الأطفال",
    explanationAr: "الفئة المشمولة بحماية خاصة في النظام الأساسي ضد النقل القسري والتجنيد العسكري.",
    explanationEn: "Minors accorded special protection under the Statute and Rules."
  },
  child: {
    en: "Child",
    ar: "طفل / حدث",
    explanationAr: "كل إنسان لم يتجاوز الثامنة عشرة، ويحظر تجنيد من هم دون الخامسة عشرة.",
    explanationEn: "A minor protected under international humanitarian and criminal law."
  },
  undertaking: {
    en: "Solemn undertaking",
    ar: "تعهد رسمي",
    explanationAr: "الإقرار الرسمي العلني الذي يؤديه القضاة والمدعي العام والمسجل والشهود.",
    explanationEn: "Formal pledge of impartiality, confidentiality, or truthfulness."
  },
  removal: {
    en: "Removal from office",
    ar: "العزل من المنصب",
    explanationAr: "إنهاء خدمة القاضي أو المدعي العام أو المسجل لسوء السلوك الجسيم أو العجز (المادة 46).",
    explanationEn: "Dismissal of an elected official for serious misconduct or inability under Article 46."
  },
  proceeds: {
    en: "Proceeds (of crime)",
    ar: "عائدات الجريمة / المتحصلات",
    explanationAr: "الأموال والممتلكات المتأتية بصورة مباشرة أو غير مباشرة من الجريمة والخاضعة للمصادرة.",
    explanationEn: "Profits, property, or assets derived directly or indirectly from a crime."
  },
  assets: {
    en: "Assets",
    ar: "الأصول والممتلكات",
    explanationAr: "الأموال والحسابات والممتلكات التي يمكن تجميدها أو مصادرتها لتنفيذ أوامر الجبر والغرامات.",
    explanationEn: "Property and financial resources subject to freezing, seizure, or forfeiture."
  },
  transit: {
    en: "Transit",
    ar: "العبور (نقل الشخص عبر إقليم دولة)",
    explanationAr: "نقل الشخص المسلم أو المحكوم عليه عبر إقليم دولة ثالثة إلى مقر المحكمة (المادة 89).",
    explanationEn: "Transportation of a surrendered or sentenced person through a State's territory."
  },
  competing: {
    en: "Competing requests",
    ar: "الطلبات المتنافسة",
    explanationAr: "تعدد طلبات تسليم نفس الشخص من المحكمة ومن دولة أخرى أو أكثر (المادة 90).",
    explanationEn: "Concurrent requests from the Court and another State for the surrender/extradition of the same person."
  },
  escape: {
    en: "Escape",
    ar: "الفرار / الهروب من الاحتجاز",
    explanationAr: "هروب الشخص المحتجز أو المحكوم عليه وإجراءات إعادته (المادة 111).",
    explanationEn: "Flight from custody or state of enforcement governed by Article 111."
  },

  // --- Arabic-Specific High-Frequency Legal & Statutory Stems ---
  "أو": { en: "Or", ar: "أو", explanationAr: "حرف عطف يفيد التخيير أو البدائل القانونية في النص التشريعي.", explanationEn: "Disjunctive particle indicating legal alternatives." },
  "أن": { en: "That / To", ar: "أن", explanationAr: "حرف مصدري ونصب يربط بين الحكم القانوني ومضمونه.", explanationEn: "Complementizer particle introducing a legal clause or obligation." },
  "على": { en: "On / Upon / Must", ar: "على", explanationAr: "حرف جر يفيد الإلزام القانوني (على المحكمة / على الدولة) أو تحديد محل الاختصاص.", explanationEn: "Preposition indicating legal obligation ('upon') or jurisdiction ('over')." },
  "إلى": { en: "To / Into", ar: "إلى", explanationAr: "حرف جر يفيد الإحالة أو التوجيه الإجرائي إلى جهة أو مادة.", explanationEn: "Preposition indicating direction, referral, or recipient." },
  "في": { en: "In / Within", ar: "في", explanationAr: "حرف جر يحدد النطاق الموضوعي أو المكاني أو الزمني للحكم القانوني.", explanationEn: "Preposition denoting substantive, spatial, or temporal scope." },
  "من": { en: "From / Of / Who", ar: "من", explanationAr: "حرف جر يفيد التبعيض أو المصدر أو البيان، أو اسم موصول بمعنى الذي.", explanationEn: "Preposition indicating source, part, or relative pronoun 'whoever'." },
  "مع": { en: "With", ar: "مع", explanationAr: "تفيد المصاحبة أو التنسيق الإجرائي أو عدم الإخلال.", explanationEn: "Preposition indicating accompaniment, consultation, or subject to." },
  "عن": { en: "From / About / On behalf of", ar: "عن", explanationAr: "حرف جر يفيد المجاوزة أو المسؤولية عن الفعل أو النيابة القانونية.", explanationEn: "Preposition indicating responsibility for, subject of, or representation." },
  "التي": { en: "Which / That / Who", ar: "التي", explanationAr: "اسم موصول للمؤنث أو الجمع يحدد الصفة القانونية المقيدة للحكم.", explanationEn: "Relative pronoun introducing a defining legal clause." },
  "الذي": { en: "Who / Which / That", ar: "الذي", explanationAr: "اسم موصول للمذكر يحدد الشخص أو الإجراء المعني بالحكم.", explanationEn: "Relative pronoun referring to a specified person, act, or rule." },
  "الذين": { en: "Who / Those who", ar: "الذين", explanationAr: "اسم موصول لجمع الذكور يعود على الأشخاص أو القضاة أو الشهود أو الضحايا.", explanationEn: "Plural relative pronoun referring to persons, judges, witnesses, or victims." },
  "ذلك": { en: "That / Such", ar: "ذلك", explanationAr: "اسم إشارة يحيل إلى الحكم أو الشخص أو الإجراء المذكور سابقاً.", explanationEn: "Demonstrative pronoun referring to a aforementioned provision or person." },
  "تلك": { en: "That / Those", ar: "تلك", explanationAr: "اسم إشارة للمؤنث أو الجمع غير العاقل يحيل إلى الدولة أو المواد أو التدابير.", explanationEn: "Demonstrative pronoun referring to a specified State, Chamber, or measures." },
  "هذا": { en: "This", ar: "هذا", explanationAr: "اسم إشارة يحيل إلى النظام الأساسي الحالي أو الباب أو الإجراء.", explanationEn: "Demonstrative determiner referring to the present Statute or Part." },
  "هذه": { en: "This / These", ar: "هذه", explanationAr: "اسم إشارة يحيل إلى المحكمة أو المادة أو القاعدة أو القواعد الحالية.", explanationEn: "Demonstrative determiner referring to the Court, Article, Rule, or Rules." },
  "إذا": { en: "If / Where / When", ar: "إذا", explanationAr: "أداة شرط تربط تحقق الأثر القانوني بوقوع الشرط المنصوص عليه.", explanationEn: "Conditional particle introducing a legal prerequisite." },
  "ما": { en: "What / Whatever / Unless (ما لم)", ar: "ما", explanationAr: "اسم موصول لغير العاقل، أو أداة نفي وشرط في عبارة 'ما لم' (Unless).", explanationEn: "Relative pronoun 'what/that which', or part of 'unless' (ما لم)." },
  "لم": { en: "Did not / Unless (ما لم)", ar: "لم", explanationAr: "أداة نفي وجزم للفعل المضارع تفيد عدم تحقق الواقعة أو الشرط.", explanationEn: "Negative particle indicating non-occurrence of an act or condition." },
  "لا": { en: "No / Not / Shall not", ar: "لا", explanationAr: "أداة نفي وحظر تشريعي (مثل: لا يجوز، لا يسأل جنائياً).", explanationEn: "Particle of legal prohibition or negation." },
  "غير": { en: "Non- / Other than / In-", ar: "غير", explanationAr: "أداة استثناء أو نفي للصفة القانونية (مثل: غير مقبول، غير مشروع، غير دولة طرف).", explanationEn: "Particle expressing negation of a legal quality or exclusion ('other than')." },
  "كل": { en: "Every / Each / All", ar: "كل", explanationAr: "لفظ يفيد العموم والشمول لجميع أفراد الفئة القانونية.", explanationEn: "Quantifier meaning every, each, or all." },
  "جميع": { en: "All", ar: "جميع", explanationAr: "لفظ يفيد الإحاطة والشمول الكامل دون استثناء.", explanationEn: "Universal quantifier meaning all without exception." },
  "كافة": { en: "All / Entirety", ar: "كافة", explanationAr: "تفيد استغراق جميع الحالات أو الأطراف أو التدابير.", explanationEn: "All; the entirety of specified items or persons." },
  "أي": { en: "Any", ar: "أي", explanationAr: "تفيد شيوع الحكم وشموله لأي فرد أو حالة أو إجراء.", explanationEn: "Any; whichever." },
  "أية": { en: "Any", ar: "أية", explanationAr: "تفيد شمول الحكم لأية دولة أو محكمة أو حالة أو مسألة.", explanationEn: "Any (feminine)." },
  "أخرى": { en: "Other / Another", ar: "أخرى", explanationAr: "تشير إلى دولة أخرى أو دائرة أخرى أو تدابير أخرى.", explanationEn: "Other or additional." },
  "آخر": { en: "Other / Another", ar: "آخر", explanationAr: "يشير إلى شخص آخر أو مكان آخر أو وقت آخر.", explanationEn: "Another or other." },
  "قد": { en: "May / Has (already)", ar: "قد", explanationAr: "تفيد التحقيق مع الماضي (كان قد صدر) أو الاحتمال والجواز مع المضارع (قد تقرر).", explanationEn: "Particle indicating completed action with past verbs or possibility with present verbs." },
  "عند": { en: "Upon / At / When", ar: "عند", explanationAr: "ظرف يحدد وقت اتخاذ الإجراء أو تحقق الحالة (مثل: عند الاقتضاء).", explanationEn: "Upon, at the time of, or when." },
  "عندما": { en: "When / Whenever", ar: "عندما", explanationAr: "أداة ظرفية وشرطية تحدد وقت وحالة سريان الحكم.", explanationEn: "When or in cases where." },
  "حيث": { en: "Where / Whereas", ar: "حيث", explanationAr: "تُستخدم لتحديد المكان أو الحالة القانونية أو تسبيب الأحكام.", explanationEn: "Where, in which, or whereas." },
  "متى": { en: "Whenever / When / Once", ar: "متى", explanationAr: "أداة شرط وزمان تفيد ترتيب الحكم فور تحقق شرطه.", explanationEn: "Whenever, once, or provided that." },
  "بشأن": { en: "Regarding / Concerning / On", ar: "بشأن", explanationAr: "تحدد المسألة أو الشخص أو الطلب الذي يدور حوله القرار القضائي.", explanationEn: "Regarding, concerning, or in relation to." },
  "وفقا": { en: "In accordance with", ar: "وفقاً", explanationAr: "تفيد وجوب مطابقة الإجراء لأحكام المادة أو القاعدة المشار إليها.", explanationEn: "In accordance with; pursuant to." },
  "طبقا": { en: "In accordance with / Pursuant to", ar: "طبقاً", explanationAr: "تفيد الالتزام التام بتطبيق النص القانوني المحال إليه.", explanationEn: "In conformity with; pursuant to." },
  "عملا": { en: "Pursuant to / Acting under", ar: "عملاً (بأحكام المادة)", explanationAr: "تحدد السند القانوني المباشر الذي يُتخذ الإجراء بمقتضاه.", explanationEn: "Pursuant to; acting in accordance with." },
  "رهنا": { en: "Subject to", ar: "رهناً (بأحكام)", explanationAr: "تُعلق سريان الحكم على مراعاة نص آخر أو استيفاء شرط.", explanationEn: "Subject to; contingent upon." },
  "بموجب": { en: "Under / Pursuant to / By virtue of", ar: "بموجب", explanationAr: "بيان السند التشريعي أو القضائي للإجراء أو الالتزام.", explanationEn: "Under, pursuant to, or by virtue of." },
  "حسب": { en: "According to / As (appropriate)", ar: "حسب (حسب الاقتضاء)", explanationAr: "تفيد التقدير القضائي وفق مقتضيات الحال (حسب الاقتضاء).", explanationEn: "According to; as (e.g., as appropriate)." },
  "الاقتضاء": { en: "As appropriate / Necessity", ar: "الاقتضاء (عند الاقتضاء / حسب الاقتضاء)", explanationAr: "ما تقتضيه الضرورة الإجرائية أو المصلحة القضائية في تقدير المحكمة.", explanationEn: "Appropriateness or procedural necessity (as appropriate / where necessary)." },
  "مراعاة": { en: "Subject to / Taking into account", ar: "مراعاة (مع مراعاة أحكام)", explanationAr: "الالتزام بعدم مخالفة نص آخر أو أخذ اعتبارات معينة في الحسبان.", explanationEn: "Observance of, compliance with, or taking into account." },
  "سياق": { en: "Context", ar: "سياق", explanationAr: "الإطار الواقعي أو القانوني الذي تُرتكب فيه الجريمة أو يُفسر فيه النص.", explanationEn: "The factual or legal context." },
  "إطار": { en: "Framework / Context", ar: "إطار (في إطار هجوم)", explanationAr: "النطاق العام أو المنهجي الذي تقع ضمنه الأفعال الإجرامية أو الإجراءات.", explanationEn: "Framework or context (e.g., as part of a widespread attack)." },
  "أجل": { en: "For the purpose of / Deadline", ar: "أجل (من أجل / أجل زمني)", explanationAr: "الغاية القانونية من الإجراء، أو المهلة الزمنية المحددة له.", explanationEn: "Purpose ('for the purpose of') or procedural time limit." },
  "ذات": { en: "Same / Having (of relevance)", ar: "ذات (ذات الصلة / ذات الجرم)", explanationAr: "تفيد التطابق (ذات الشخص) أو اتصاف الشيء بصفة قانونية (المعلومات ذات الصلة).", explanationEn: "The same, or possessing a specified legal attribute (e.g., relevant)." },
  "سواء": { en: "Whether", ar: "سواء", explanationAr: "تفيد استواء الحكم القانوني في جميع الحالات المذكورة.", explanationEn: "Whether; regardless of which alternative applies." },
  "إلا": { en: "Except / Unless", ar: "إلا", explanationAr: "أداة استثناء وحصر تحدد الحالات المستثناة من القاعدة العامة.", explanationEn: "Except, unless, or only." },
  "لدى": { en: "Before / With / At", ar: "لدى", explanationAr: "تحدد الجهة المودع لديها المستند أو المرفوع أمامها الإجراء.", explanationEn: "Before, with, or in the custody/possession of." },
  "فيما": { en: "In respect of / Regarding", ar: "فيما (فيما يتعلق بـ)", explanationAr: "تحدد نطاق انطباق الحكم على مسألة أو شخص معين.", explanationEn: "In respect of; concerning; with regard to." },
  "بما": { en: "Including / In a manner that", ar: "بما (بما في ذلك / بما لا يتعارض)", explanationAr: "تُستخدم للشمول التمثيلي (بما في ذلك) أو لوضع قيد معياري.", explanationEn: "Including ('بما في ذلك') or in such a way that." },
  "كما": { en: "As / Also / Likewise", ar: "كما", explanationAr: "تفيد التشبيه والمطابقة للنص أو إضافة حكم جديد.", explanationEn: "As, just as, or furthermore." },
  "إزاء": { en: "In respect of / Towards / Over", ar: "إزاء", explanationAr: "تحدد موقف المحكمة أو اختصاصها تجاه جريمة أو حالة معينة.", explanationEn: "With respect to, towards, or over." },
  "حيال": { en: "Regarding / Towards", ar: "حيال", explanationAr: "فيما يخص المسألة أو الإجراء المتخذ تجاه طرف معين.", explanationEn: "With regard to; concerning." },
  "تجاه": { en: "Towards / Against", ar: "تجاه", explanationAr: "تحدد اتجاه الالتزام القانوني أو السلوك.", explanationEn: "Towards or vis-à-vis." },
  "خلال": { en: "During / Within", ar: "خلال", explanationAr: "تحدد المدة الزمنية أو المرحلة الإجرائية.", explanationEn: "During or within a specified period." },
  "أثناء": { en: "During / In the course of", ar: "أثناء", explanationAr: "خلال سير التحقيق أو المحاكمة أو النزاع المسلح.", explanationEn: "During or in the course of proceedings or conflict." },
  "غضون": { en: "Within (a time limit)", ar: "غضون (في غضون)", explanationAr: "خلال المهلة الزمنية المحددة قانوناً.", explanationEn: "Within a prescribed period of time." },
  "فور": { en: "Immediately / Upon", ar: "فور / فوراً", explanationAr: "وجوب اتخاذ الإجراء على وجه السرعة دون أي إبطاء.", explanationEn: "Immediately; forthwith; upon occurrence." },
  "دون": { en: "Without / Below", ar: "دون", explanationAr: "تفيد نفي القيد (دون تأخير، دون الإخلال) أو النزول عن حد معين (دون سن 15).", explanationEn: "Without, or under/below a specified threshold." },
  "سوى": { en: "Other than / Except", ar: "سوى", explanationAr: "أداة استثناء وحصر.", explanationEn: "Except; other than." },
  "نحو": { en: "Manner / Way / Towards", ar: "نحو (على نحو كافٍ / على هذا النحو)", explanationAr: "الطريقة أو الكيفية التي يُنفذ بها الحكم القانوني.", explanationEn: "Manner, way, or degree ('in a manner that')." },
  "وجه": { en: "Manner / Ground / Face", ar: "وجه (على وجه الخصوص / دون وجه حق)", explanationAr: "يُستخدم في التعبيرات القانونية مثل 'على وجه السرعة' أو 'دون وجه حق'.", explanationEn: "Aspect, manner, or legal justification." },
  "سبيل": { en: "Way / Release (إخلاء سبيل)", ar: "سبيل (على سبيل المثال / إخلاء سبيل)", explanationAr: "الطريق الإجرائي، أو الإفراج عن المحتجز (إخلاء السبيل).", explanationEn: "Way, means, or release from custody (إخلاء سبيل)." },
  "شأن": { en: "Matter / Affair / Nature", ar: "شأن (من شأنه / ذوو الشأن)", explanationAr: "أمر أو مسألة، وتُستخدم في 'من شأنه أن' لبيان الأثر القانوني.", explanationEn: "Matter, concern, or nature ('such as to')." },
  "حال": { en: "Event / Case / Condition", ar: "حال (في حال / بأي حال)", explanationAr: "الظرف أو الفرض القانوني عند وقوعه.", explanationEn: "Case, event, or circumstance." },
  "بصدد": { en: "In respect of / Regarding", ar: "بصدد", explanationAr: "بشأن القضية أو المسألة المعروضة.", explanationEn: "Concerning; in the process of." },
  "نيابة": { en: "On behalf of / Prosecution", ar: "نيابة (نيابةً عن / النيابة)", explanationAr: "التمثيل القانوني والتصرف باسم المحكمة أو الضحية أو المتهم.", explanationEn: "On behalf of; legal representation." },
  "بواسطة": { en: "By means of / Through", ar: "بواسطة", explanationAr: "الأداة أو القناة الرسمية التي يتم عبرها الإجراء.", explanationEn: "Through; by means of." },
  "طريق": { en: "By way of / Means", ar: "طريق (عن طريق)", explanationAr: "الوسيلة الإجرائية المتبعة لتوجيه الطلبات أو تنفيذها.", explanationEn: "Way, channel, or method ('by way of')." },

  // --- Arabic Verbal Nouns (المصادر), Participles, Broken Plurals & Common Verbs ---
  "تقديم": {
    en: "Surrender / Submission / Presentation",
    ar: "تقديم (تقديم الشخص للمحكمة / تقديم الأدلة والطلبات)",
    explanationAr: "تسليم الدولة للشخص المطلوب إلى المحكمة (المادة 89)، أو إيداع الطلبات والمستندات والأدلة.",
    explanationEn: "The surrender of a person to the Court (Article 89), or the submission of requests and evidence."
  },
  "الرئاسة": {
    en: "The Presidency",
    ar: "هيئة الرئاسة / الرئاسة",
    explanationAr: "أحد أجهزة المحكمة الأربعة (المادة 38)، وتتألف من الرئيس ونائبيه الأول والثاني.",
    explanationEn: "Principal organ of the Court under Article 38, composed of the President and two Vice-Presidents."
  },
  "التمهيدية": {
    en: "Pre-Trial (Chamber / Division)",
    ar: "التمهيدية (الدائرة التمهيدية / الشعبة التمهيدية)",
    explanationAr: "الهيئة القضائية المختصة بالإشراف على مرحلة التحقيق وإصدار أوامر القبض واعتماد التهم.",
    explanationEn: "Relating to the Pre-Trial Division or Pre-Trial Chamber overseeing investigations and confirming charges."
  },
  "تمهيدي": {
    en: "Pre-Trial / Preliminary",
    ar: "تمهيدي / أولي",
    explanationAr: "ما يتعلق بالمرحلة السابقة على المحاكمة أو الفحص الأولي.",
    explanationEn: "Pre-trial or preliminary in nature."
  },
  "الابتدائية": {
    en: "Trial (Chamber / Division)",
    ar: "الابتدائية (الدائرة الابتدائية / الشعبة الابتدائية)",
    explanationAr: "الهيئة القضائية المختصة بإجراء المحاكمة والفصل في براءة أو إدانة المتهم وتحديد العقوبة.",
    explanationEn: "Relating to the Trial Division or Trial Chamber conducting the trial under Part 6."
  },
  "ابتدائي": {
    en: "Trial / First instance",
    ar: "ابتدائي (قضاء الدرجة الأولى)",
    explanationAr: "المرحلة القضائية الأولى للمحاكمة قبل مرحلة الاستئناف.",
    explanationEn: "First-instance trial level before appellate review."
  },
  "الاستئنافية": {
    en: "Appellate / Appeals (Chamber)",
    ar: "الاستئنافية (دائرة الاستئناف / الإجراءات الاستئنافية)",
    explanationAr: "المتعلقة بدائرة الاستئناف ونظر الطعون في الأحكام والقرارات.",
    explanationEn: "Relating to the Appeals Chamber and appellate proceedings under Part 8."
  },
  "الفرعية": {
    en: "Sub-rule / Sub-paragraph / Subsidiary",
    ar: "الفرعية (القاعدة الفرعية / الفقرة الفرعية / الهيئات الفرعية)",
    explanationAr: "تقسيم فرعي داخل القاعدة أو المادة، أو هيئة فرعية تابعة لجمعية الدول الأطراف.",
    explanationEn: "Sub-rule, sub-paragraph, or subsidiary body."
  },
  "فرعي": {
    en: "Sub- / Subsidiary",
    ar: "فرعي",
    explanationAr: "متفرع عن أصل كالقاعدة الفرعية أو الجهاز الفرعي.",
    explanationEn: "Subordinate or supplementary division."
  },
  "الأساسي": {
    en: "The Statute (Rome Statute) / Fundamental",
    ar: "الأساسي (النظام الأساسي)",
    explanationAr: "نظام روما الأساسي للمحكمة الجنائية الدولية.",
    explanationEn: "Referring to the Rome Statute of the International Criminal Court, or fundamental."
  },
  "أساسي": {
    en: "Basic / Fundamental / Statutory",
    ar: "أساسي / جوهري",
    explanationAr: "مبدأ أو حق جوهري أو متعلق بالنظام الأساسي.",
    explanationEn: "Fundamental, essential, or statutory."
  },
  "دائرة": {
    en: "Chamber",
    ar: "دائرة قضائية",
    explanationAr: "إحدى دوائر المحكمة (تمهيدية، ابتدائية، استئناف) التي تمارس الوظائف القضائية.",
    explanationEn: "A judicial Chamber of the Court (Pre-Trial, Trial, or Appeals Chamber)."
  },
  "دوائر": {
    en: "Chambers",
    ar: "الدوائر القضائية",
    explanationAr: "الدوائر التمهيدية والابتدائية ودائرة الاستئناف في المحكمة.",
    explanationEn: "The judicial Chambers of the Court."
  },
  "شعبة": {
    en: "Division",
    ar: "شعبة قضائية",
    explanationAr: "إحدى الشعب القضائية الثلاث للمحكمة (المادة 39).",
    explanationEn: "A judicial Division of the Court under Article 39."
  },
  "شعب": {
    en: "Divisions / Peoples",
    ar: "شُعَب قضائية / شعوب",
    explanationAr: "الشعب القضائية في المحكمة، أو الشعوب في ديباجة النظام الأساسي.",
    explanationEn: "Judicial divisions of the Court, or peoples."
  },
  "جلسة": {
    en: "Hearing / Session / Sitting",
    ar: "جلسة قضائية",
    explanationAr: "جلسة استماع أو محاكمة أو جلسة عامة للقضاة.",
    explanationEn: "A court hearing, trial sitting, or plenary session."
  },
  "جلسات": {
    en: "Hearings / Sessions / Sittings",
    ar: "جلسات",
    explanationAr: "جلسات المحاكمة والاستماع والمداولات.",
    explanationEn: "Judicial hearings, sittings, or sessions."
  },
  "المنصوص": {
    en: "Provided for / Stipulated / Set forth",
    ar: "المنصوص (المنصوص عليه في المادة)",
    explanationAr: "ما ورد النص عليه صراحةً في مواد النظام الأساسي أو القواعد الإجرائية.",
    explanationEn: "Expressly stipulated, prescribed, or set forth in the Statute or Rules."
  },
  "منصوص": {
    en: "Stipulated / Prescribed",
    ar: "منصوص عليه",
    explanationAr: "محدد بنص قانوني صريح.",
    explanationEn: "Prescribed or provided for in a legal text."
  },
  "المشار": {
    en: "Referred to",
    ar: "المشار (المشار إليه)",
    explanationAr: "الذي تمت الإحالة إليه أو ذكره في فقرة أو مادة أخرى.",
    explanationEn: "Mentioned or cross-referenced in another provision."
  },
  "مشار": {
    en: "Referred to",
    ar: "مشار إليه",
    explanationAr: "مذكور أو محال إليه في النص.",
    explanationEn: "Referred to or cited."
  },
  "المحكوم": {
    en: "Sentenced / Convicted person",
    ar: "المحكوم (المحكوم عليه)",
    explanationAr: "الشخص الذي صدر ضده حكم قضائي بالعقوبة.",
    explanationEn: "The person upon whom a sentence has been imposed by the Court."
  },
  "محكوم": {
    en: "Sentenced / Governed by",
    ar: "محكوم عليه / محكوم بـ",
    explanationAr: "صادر بحقه حكم عقابي، أو خاضع لقواعد معينة.",
    explanationEn: "Sentenced, or governed by specified rules."
  },
  "المحتجز": {
    en: "Detained person / Detainee",
    ar: "الشخص المحتجز",
    explanationAr: "الشخص الموقوف رهن الاحتجاز لدى المحكمة أو الدولة.",
    explanationEn: "The person held in custody."
  },
  "محتجز": {
    en: "Detained / In custody",
    ar: "محتجز",
    explanationAr: "رهن الاحتجاز أو التوقيف القضائي.",
    explanationEn: "Held in official custody or detention."
  },
  "المعني": {
    en: "Concerned (person / State / witness)",
    ar: "المعني / صاحب الشأن",
    explanationAr: "الشخص أو الطرف أو الدولة التي يتعلق بها الإجراء مباشرة.",
    explanationEn: "The specific person, witness, victim, or State concerned."
  },
  "معني": {
    en: "Concerned / Relevant",
    ar: "معني",
    explanationAr: "ذو صلة ومصلحة مباشرة في الإجراء.",
    explanationEn: "Involved or affected by the matter."
  },
  "الموجه": {
    en: "Directed / Requested (State) / Charged",
    ar: "الموجه (الدولة الموجه إليها الطلب / التهم الموجهة)",
    explanationAr: "الطلب أو الأمر الموجه إلى دولة، أو الاتهام الموجه إلى شخص.",
    explanationEn: "Addressed or directed to (e.g., requested State, charges brought against)."
  },
  "موجه": {
    en: "Directed / Addressed",
    ar: "موجه",
    explanationAr: "صادر ومُرسل إلى جهة أو مستهدف لفئة معينة.",
    explanationEn: "Directed at or addressed to."
  },
  "المحدد": {
    en: "Specified / Determined / Prescribed",
    ar: "المحدد",
    explanationAr: "المعين بدقة في النص القانوني أو القرار القضائي.",
    explanationEn: "Expressly designated, fixed, or prescribed."
  },
  "محدد": {
    en: "Specific / Specified / Fixed",
    ar: "محدد",
    explanationAr: "معين بوضوح (مثل مدة محددة أو غرض محدد).",
    explanationEn: "Clearly defined or fixed."
  },
  "اتخاذ": {
    en: "Taking / Adoption (of measures or decisions)",
    ar: "اتخاذ (الإجراءات أو التدابير أو القرارات)",
    explanationAr: "مباشرة وإصدار التدابير أو الترتيبات أو القرارات القضائية.",
    explanationEn: "The taking of measures, steps, arrangements, or decisions."
  },
  "تعيين": {
    en: "Appointment / Designation",
    ar: "تعيين",
    explanationAr: "اختيار وتكليف قاضٍ فرد أو محامٍ أو خبير أو موظف رسمياً.",
    explanationEn: "Formal designation or appointment of a single judge, counsel, expert, or staff."
  },
  "حصول": {
    en: "Obtaining / Occurrence",
    ar: "حصول / الحصول على",
    explanationAr: "نيل الموافقة أو الأدلة أو المساعدة، أو وقوع أمر معين.",
    explanationEn: "Obtaining, acquiring, or occurrence."
  },
  "كشف": {
    en: "Disclosure / Revelation",
    ar: "الكشف (كشف الأدلة أو المعلومات)",
    explanationAr: "إفصاح أحد طرفي الدعوى للطرف الآخر عن الأدلة والمعلومات (الإفصاح الإجرائي).",
    explanationEn: "Disclosure of evidence or information between parties, or revelation of confidential data."
  },
  "أداء": {
    en: "Performance (of duties) / Taking (an oath)",
    ar: "أداء (الواجبات أو اليمين / التعهد)",
    explanationAr: "القيام بمهام المنصب الرسمي أو حلف التعهد الرسمي أمام المحكمة.",
    explanationEn: "Fulfillment of official functions or making a solemn undertaking."
  },
  "نظر": {
    en: "Consideration / Hearing (of a case)",
    ar: "النظر (في القضية أو الطلب)",
    explanationAr: "بحث المحكمة وفحصها للدعوى أو المسألة المعروضة عليها.",
    explanationEn: "Judicial examination and hearing of a case, motion, or issue."
  },
  "سير": {
    en: "Conduct / Course (of proceedings)",
    ar: "سير (سير الإجراءات / حسن سير العدالة)",
    explanationAr: "تقدم وانتظام الإجراءات القضائية وإدارة المحاكمة.",
    explanationEn: "The progress, management, and conduct of judicial proceedings."
  },
  "وجود": {
    en: "Existence / Presence",
    ar: "وجود (وجود أساس معقول / بحضور)",
    explanationAr: "قيام وتوافر الشرط القانوني أو حضور الشخص.",
    explanationEn: "Existence of a legal condition/ground, or physical presence."
  },
  "إمكان": {
    en: "Possibility / Feasibility (قدر الإمكان)",
    ar: "الإمكان (بقدر الإمكان / في أقرب وقت ممكن)",
    explanationAr: "الاستطاعة العملية والقانونية لتنفيذ الإجراء.",
    explanationEn: "Possibility or practicability ('as far as possible')."
  },
  "أركان": {
    en: "Elements (of Crimes)",
    ar: "أركان (أركان الجرائم)",
    explanationAr: "العناصر المادية والمعنوية والسياقية المكونة للجريمة (المادة 9).",
    explanationEn: "The constitutive material, mental, and contextual elements of crimes."
  },
  "تدابير": {
    en: "Measures",
    ar: "تدابير (تدابير الحماية / التدابير التحفظية)",
    explanationAr: "الإجراءات الوقائية أو القضائية التي تتخذها المحكمة لحماية الشهود أو الأدلة.",
    explanationEn: "Protective, special, or provisional measures ordered by the Court."
  },
  "تدبير": {
    en: "Measure",
    ar: "تدبير",
    explanationAr: "إجراء قضائي أو إداري محدد.",
    explanationEn: "A specific procedural or protective measure."
  },
  "لوائح": {
    en: "Regulations",
    ar: "اللوائح (لائحة المحكمة / لائحة القلم / لائحة المدعي العام)",
    explanationAr: "النصوص التنظيمية المعتمدة لتسيير العمل اليومي للمحكمة وأجهزتها (المادة 52).",
    explanationEn: "The Regulations of the Court, Registry, and Office of the Prosecutor."
  },
  "قواعد": {
    en: "Rules (of Procedure and Evidence)",
    ar: "القواعد (القواعد الإجرائية وقواعد الإثبات)",
    explanationAr: "القواعد الإجرائية وقواعد الإثبات المعتمدة بموجب المادة 51.",
    explanationEn: "The Rules of Procedure and Evidence adopted under Article 51."
  },
  "مواد": {
    en: "Articles / Materials",
    ar: "المواد (مواد النظام الأساسي / المواد الإثباتية)",
    explanationAr: "النصوص التشريعية المرقمة في النظام الأساسي، أو المواد والأدلة.",
    explanationEn: "Articles of the Statute, or evidentiary materials."
  },
  "وثائق": {
    en: "Documents / Instruments",
    ar: "الوثائق / المستندات",
    explanationAr: "المحررات والمستندات الرسمية المقدمة للمحكمة أو الصادرة عنها.",
    explanationEn: "Official records, filings, and documentary evidence."
  },
  "مستندات": {
    en: "Documents / Supporting records",
    ar: "المستندات",
    explanationAr: "الأوراق والوثائق المؤيدة للطلب أو الدعوى.",
    explanationEn: "Supporting documents and evidentiary filings."
  },
  "أحكام": {
    en: "Provisions / Judgments",
    ar: "أحكام (أحكام النظام الأساسي / الأحكام القضائية)",
    explanationAr: "النصوص والقواعد القانونية الواردة في النظام، أو القرارات والأحكام الصادرة عن الدوائر.",
    explanationEn: "Statutory provisions, or judicial judgments and rulings."
  },
  "مسألة": {
    en: "Issue / Matter / Question",
    ar: "مسألة قانونية أو إجرائية",
    explanationAr: "نقطة قانونية أو واقعية مطروحة للفصل القضائي.",
    explanationEn: "A legal, factual, or procedural question before a Chamber."
  },
  "مسائل": {
    en: "Issues / Matters / Questions",
    ar: "المسائل",
    explanationAr: "النقاط والموضوعات القانونية أو الإجرائية المعروضة على المحكمة.",
    explanationEn: "Questions or matters for judicial resolution."
  },
  "أسباب": {
    en: "Grounds / Reasons",
    ar: "أسباب / دواعي / حيثيات",
    explanationAr: "المبررات القانونية والواقعية التي يقوم عليها الطلب أو الحكم القضائي.",
    explanationEn: "Legal grounds, justifications, or judicial reasoning."
  },
  "سبب": {
    en: "Reason / Ground / Cause",
    ar: "سبب",
    explanationAr: "المسوغ القانوني أو الدافع لاتخاذ الإجراء.",
    explanationEn: "Ground, cause, or justification."
  },
  "سنوات": {
    en: "Years",
    ar: "سنوات / أعوام",
    explanationAr: "وحدة حساب مدد العقوبات أو مدد ولاية القضاة والمسؤولين.",
    explanationEn: "Plural of year, used for terms of office and sentences."
  },
  "سنة": {
    en: "Year",
    ar: "سنة / عام",
    explanationAr: "وحدة زمنية قدرها اثنا عشر شهراً.",
    explanationEn: "A period of twelve months."
  },
  "أيام": {
    en: "Days",
    ar: "أيام",
    explanationAr: "وحدة حساب المواعيد الإجرائية القصيرة.",
    explanationEn: "Days for calculating procedural time limits."
  },
  "يوم": {
    en: "Day",
    ar: "يوم",
    explanationAr: "وحدة زمنية لحساب المواعيد وتحديد الجلسات.",
    explanationEn: "A calendar day."
  },
  "أشهر": {
    en: "Months",
    ar: "أشهر / شهور",
    explanationAr: "وحدة زمنية لحساب المهل القانونية (مثل ستة أشهر أو شهرين).",
    explanationEn: "Months for calculating statutory periods."
  },
  "شهر": {
    en: "Month",
    ar: "شهر",
    explanationAr: "وحدة زمنية لحساب المواعيد القانونية.",
    explanationEn: "A calendar month."
  },
  "تاريخ": {
    en: "Date / History",
    ar: "تاريخ",
    explanationAr: "اليوم المحدد لصدور القرار أو الإخطار أو بدء النفاذ.",
    explanationEn: "Specific calendar date of an event, filing, or entry into force."
  },
  "موعد": {
    en: "Date / Time limit / Appointment",
    ar: "موعد / ميعاد",
    explanationAr: "الوقت المحدد لانعقاد الجلسة أو تقديم المستندات أو التسليم.",
    explanationEn: "Scheduled date or deadline for a hearing or surrender."
  },
  "مواعيد": {
    en: "Time limits / Deadlines / Dates",
    ar: "المواعيد الإجرائية",
    explanationAr: "الآجال والمدد الزمنية المضروبة للقيام بالإجراءات القضائية.",
    explanationEn: "Procedural deadlines and scheduled dates."
  },
  "مهلة": {
    en: "Time limit / Extension of time",
    ar: "مهلة زمنية",
    explanationAr: "فترة زمنية تمنحها الدائرة القضائية للقيام بإجراء أو تقديم رد.",
    explanationEn: "A fixed period of time granted to complete a procedural act."
  },
  "عمل": {
    en: "Work / Act / Functioning",
    ar: "عمل (سير العمل / لغات العمل / عمل عدواني)",
    explanationAr: "أداء المحكمة لوظائفها، أو لغات العمل، أو فعل مادي.",
    explanationEn: "Functioning of the Court, working languages, or an act."
  },
  "أعمال": {
    en: "Acts / Works / Proceedings",
    ar: "أعمال (أعمال المحكمة / أعمال عدائية)",
    explanationAr: "الأفعال المادية أو الأعمال القضائية والإدارية للمحكمة.",
    explanationEn: "Acts, hostilities, or official proceedings."
  },
  "أمر": {
    en: "Order / Warrant / Matter",
    ar: "أمر قضائي / مسألة",
    explanationAr: "أمر صادر عن الدائرة القضائية (مثل أمر القبض أو أمر الحضور أو أمر الحماية).",
    explanationEn: "A binding judicial order, warrant, or matter."
  },
  "أمور": {
    en: "Matters / Things",
    ar: "أمور (من بين أمور أخرى)",
    explanationAr: "المسائل أو العناصر المشمولة بالحكم.",
    explanationEn: "Matters or items (e.g., inter alia)."
  },
  "مدعي": {
    en: "Prosecutor",
    ar: "المدعي العام",
    explanationAr: "رئيس مكتب المدعي العام المختص بالتحقيق والمقاضاة أمام المحكمة.",
    explanationEn: "The Prosecutor of the International Criminal Court."
  },
  "محام": {
    en: "Counsel / Lawyer",
    ar: "محامٍ / مستشار قانوني",
    explanationAr: "المحامي المقيد لتمثيل الدفاع أو الضحايا أمام المحكمة.",
    explanationEn: "Legal counsel representing the defence or victims."
  },
  "محامي": {
    en: "Counsel / Defence counsel",
    ar: "محامي (محامي الدفاع / الممثل القانوني)",
    explanationAr: "المستشار القانوني المتولي للدفاع عن المتهم أو تمثيل الضحايا.",
    explanationEn: "Legal practitioner acting for a party before the Court."
  },
  "محامون": {
    en: "Counsel / Lawyers",
    ar: "المحامون",
    explanationAr: "المستشارون القانونيون المقيدون في قائمة المحامين أمام المحكمة.",
    explanationEn: "Legal counsel admitted to practice before the Court."
  },
  "قاض": {
    en: "Judge / Single judge",
    ar: "قاضٍ (قاضٍ فرد)",
    explanationAr: "عضو الهيئة القضائية في المحكمة، أو القاضي الفرد المنتدب من الدائرة التمهيدية.",
    explanationEn: "An elected Judge of the Court, or a Single Judge."
  },
  "قاضي": {
    en: "Judge",
    ar: "القاضي",
    explanationAr: "عضو المحكمة الجنائية الدولية الممارس للوظيفة القضائية.",
    explanationEn: "A Judge of the International Criminal Court."
  },
  "رئيس": {
    en: "President / Presiding Judge / Superior",
    ar: "رئيس (رئيس المحكمة / القاضي الرئيس / الرئيس الأعلى)",
    explanationAr: "رئيس المحكمة، أو القاضي الذي يرأس الدائرة، أو الرئيس العسكري/المدني.",
    explanationEn: "President of the Court, Presiding Judge of a Chamber, or hierarchical superior."
  },
  "نائب": {
    en: "Vice-President / Deputy",
    ar: "نائب (نائب الرئيس / نائب المدعي العام / نائب المسجل)",
    explanationAr: "المنصب التالي للرئيس أو المدعي العام أو المسجل ويحل محله عند غيابه.",
    explanationEn: "Vice-President, Deputy Prosecutor, or Deputy Registrar."
  },
  "مشارك": {
    en: "Participant",
    ar: "مشارك (في الإجراءات)",
    explanationAr: "طرف أو ممثل قانوني يشارك في إجراءات الدعوى.",
    explanationEn: "A party or representative taking part in proceedings."
  },
  "مشاركون": {
    en: "Participants",
    ar: "المشاركون في الإجراءات",
    explanationAr: "الأطراف والممثلون القانونيون المشاركون في الدعوى أمام الدائرة.",
    explanationEn: "Parties and legal representatives participating in proceedings."
  },
  "مجني": {
    en: "Victim (المجني عليه)",
    ar: "المجني عليه / الضحية",
    explanationAr: "الشخص الذي وقع عليه الفعل الإجرامي ولحقه ضرر منه.",
    explanationEn: "The victim who suffered harm as a result of a crime."
  },
  "ضرر": {
    en: "Harm / Damage / Prejudice",
    ar: "ضرر (جبر الضرر / إلحاق ضرر)",
    explanationAr: "الأذى الجسدي أو النفسي أو المادي الذي يلحق بالضحايا أو يمس بالعدالة.",
    explanationEn: "Physical, mental, or material injury, or procedural prejudice."
  },
  "أضرار": {
    en: "Harm / Damages / Injuries",
    ar: "أضرار (جبر الأضرار)",
    explanationAr: "الخسائر والإصابات المترتبة على الجريمة والتي تستوجب التعويض وجبر الضرر.",
    explanationEn: "Injuries, losses, or damages subject to reparations."
  },
  "هجوم": {
    en: "Attack",
    ar: "هجوم (هجوم واسع النطاق أو منهجي)",
    explanationAr: "سلسلة أفعال عنيفة موجهة ضد السكان المدنيين أو أهداف محمية.",
    explanationEn: "An attack directed against a civilian population or protected objects."
  },
  "مسلح": {
    en: "Armed",
    ar: "مسلح (نزاع مسلح / قوات مسلحة)",
    explanationAr: "وصف للنزاع العسكري أو القوات التي تستخدم السلاح.",
    explanationEn: "Armed (e.g., armed conflict, armed forces)."
  },
  "قائمة": {
    en: "List / Roster / Existing",
    ar: "قائمة (قائمة المحامين / المرشحين / حالة قائمة)",
    explanationAr: "جدول رسمي بأسماء المؤهلين، أو وصف لظرف قائم فعلاً.",
    explanationEn: "An official roster/list, or existing/standing."
  },
  "قوائم": {
    en: "Lists / Rosters",
    ar: "قوائم (قوائم المرشحين أو الخبراء)",
    explanationAr: "الجداول الرسمية المعتمدة في المحكمة.",
    explanationEn: "Official lists or rosters maintained by the Court."
  },
  "كتابة": {
    en: "In writing / Written",
    ar: "كتابةً / خطياً",
    explanationAr: "تقديم الطلبات أو الملاحظات أو القرارات في صيغة مكتوبة.",
    explanationEn: "In written form."
  },
  "شفويا": {
    en: "Orally",
    ar: "شفوياً / شفهياً",
    explanationAr: "الإدلاء بالشهادة أو المرافعة مشافهةً أمام الدائرة.",
    explanationEn: "Delivered by spoken word before the Chamber."
  },
  "شفهيا": {
    en: "Orally / Viva voce",
    ar: "شفهياً (الشهادة الشفهية المباشرة)",
    explanationAr: "تقديم الإفادة أو الحجج شفهياً في الجلسة.",
    explanationEn: "Orally; viva voce testimony."
  },
  "سوء": {
    en: "Misconduct / Abuse / Ill-treatment",
    ar: "سوء (سوء السلوك / سوء المعاملة)",
    explanationAr: "الإخلال بواجبات المنصب (سوء السلوك) أو المعاملة القاسية للأشخاص.",
    explanationEn: "Misconduct, abuse, or ill-treatment."
  },
  "ولايات": {
    en: "Jurisdictions (National jurisdictions) / Mandates",
    ar: "الولايات القضائية (الولايات القضائية الجنائية الوطنية)",
    explanationAr: "السلطات والاختصاصات القضائية للدول التي يكملها اختصاص المحكمة.",
    explanationEn: "National criminal jurisdictions to which the ICC is complementary."
  },
  "ولاية": {
    en: "Jurisdiction / Term of office / Mandate",
    ar: "ولاية قضائية / مدة ولاية المنصب",
    explanationAr: "سلطة القضاء للنظر في الجرائم، أو المدة القانونية لشغل المنصب.",
    explanationEn: "Judicial jurisdiction, mandate, or term of office."
  },
  "مكمل": {
    en: "Complementary",
    ar: "مكمل (مكملة للولايات القضائية الوطنية)",
    explanationAr: "صفة اختصاص المحكمة الجنائية الدولية باعتباره مكملاً للقضاء الوطني (المادة 1).",
    explanationEn: "Complementary to national criminal jurisdictions under Article 1."
  },
  "أشد": {
    en: "Most serious / Gravest",
    ar: "أشد (أشد الجرائم خطورة)",
    explanationAr: "صيغة تفضيل تصف الجرائم البالغة الجسامة التي تدخل في اختصاص المحكمة.",
    explanationEn: "Superlative denoting the 'most serious' crimes of international concern."
  },
  "خطورة": {
    en: "Gravity / Seriousness",
    ar: "خطورة / جسامة",
    explanationAr: "مدى فداحة الجريمة وأثرها، وهو معيار أساسي للمقبولية وتقدير العقوبة.",
    explanationEn: "The severity or gravity of a crime under the Statute."
  },
  "اهتمام": {
    en: "Concern (of the international community)",
    ar: "اهتمام (موضع اهتمام المجتمع الدولي)",
    explanationAr: "ما يمس السلم والأمن والضمير العام للمجتمع الدولي بأسره.",
    explanationEn: "Concern of the international community as a whole."
  },
  "أسلوب": {
    en: "Manner / Method / Functioning",
    ar: "أسلوب (أسلوب عمل المحكمة / أساليب الحرب)",
    explanationAr: "نظام وسير عمل المحكمة، أو الطرق المستخدمة في القتال.",
    explanationEn: "Manner of functioning, method, or mode of warfare."
  },
  "مضيفة": {
    en: "Host (State)",
    ar: "المضيفة (الدولة المضيفة)",
    explanationAr: "الدولة التي يقع في إقليمها مقر المحكمة الجنائية الدولية (هولندا).",
    explanationEn: "The host State where the seat of the Court is located."
  },
  "مضيف": {
    en: "Host",
    ar: "مضيف",
    explanationAr: "الدولة المضيفة للمحكمة أو لاجتماعاتها.",
    explanationEn: "Host State."
  },

  // --- Common Arabic Verbs in Legal Provisions ---
  "يكون": {
    en: "Shall be / Is",
    ar: "يكون / تكون",
    explanationAr: "فعل يفيد تقرير الحكم القانوني أو الإلزام التشريعي.",
    explanationEn: "Statutory verb expressing a binding legal state or requirement ('shall be')."
  },
  "كان": {
    en: "Was / Were / If",
    ar: "كان / كانت",
    explanationAr: "يفيد تحقق الحالة أو الصفة القانونية وقت وقوع الفعل أو في سياق الشرط.",
    explanationEn: "Indicates past status or introduces a legal condition."
  },
  "يتم": {
    en: "Is carried out / Shall be effected",
    ar: "يتم / تتم",
    explanationAr: "يفيد إنجاز الإجراء القانوني وفق الطريقة المقررة.",
    explanationEn: "Is effected, conducted, or completed."
  },
  "تأمر": {
    en: "Orders / Shall order",
    ar: "تأمر / يأمر",
    explanationAr: "إصدار الدائرة القضائية لأمر ملزم للأطراف أو المسجل.",
    explanationEn: "A Chamber formally directs or issues a binding order."
  },
  "يأمر": {
    en: "Orders / Commands",
    ar: "يأمر / تأمر",
    explanationAr: "إصدار أمر قضائي، أو إصدار أمر بارتكاب جريمة.",
    explanationEn: "Issues a judicial order, or orders the commission of a crime."
  },
  "تشير": {
    en: "Refers to / Indicates",
    ar: "تشير / يشير",
    explanationAr: "الإحالة إلى مادة أخرى أو الدلالة على واقعة.",
    explanationEn: "Refers to or indicates."
  },
  "يشير": {
    en: "Refers to / Indicates",
    ar: "يشير / تشير",
    explanationAr: "يدل على أو يحيل إلى نص قانوني آخر.",
    explanationEn: "Points to, cites, or indicates."
  },
  "يقصد": {
    en: "Means / Intends",
    ar: "يُقصد بـ (في التعريفات التشريعية) / يقصد",
    explanationAr: "تحديد المعنى الاصطلاحي الملزم للمفردة القانونية، أو اتجاه الإرادة الجرمية.",
    explanationEn: "Signifies in statutory definitions ('means'), or intends."
  },
  "يلي": {
    en: "Follows (كما يلي / فيما يلي)",
    ar: "يلي (فيما يلي / على النحو التالي)",
    explanationAr: "تُستخدم لتقديم البنود والفقرات التفصيلية اللاحقة في المادة.",
    explanationEn: "Follows ('as follows' / 'the following')."
  },
  "تالي": {
    en: "Following / Subsequent",
    ar: "التالي / التالية",
    explanationAr: "ما يأتي بعده في الترتيب النصي أو الزمني.",
    explanationEn: "Following or subsequent."
  },
  "يكفل": {
    en: "Ensures / Guarantees",
    ar: "يكفل / تكفل",
    explanationAr: "التزام المحكمة أو الدولة بضمان حماية الحقوق وسلامة الإجراءات.",
    explanationEn: "Guarantees or ensures the protection of rights and procedures."
  },
  "يقوم": {
    en: "Performs / Acts / Undertakes",
    ar: "يقوم بـ / تقوم بـ",
    explanationAr: "مباشرة العمل الإجرائي أو الوظيفي المنوط بالجهة أو الشخص.",
    explanationEn: "Carries out, performs, or undertakes an action."
  },
  "ينشأ": {
    en: "Is established / Arises",
    ar: "تنشأ / ينشأ",
    explanationAr: "تأسيس هيئة قانونية بموجب النظام الأساسي أو نشوء التزام أو حق.",
    explanationEn: "Is established or arises under law."
  },
  "يخضع": {
    en: "Is subject to / Is governed by",
    ar: "يخضع / تخضع",
    explanationAr: "سريان أحكام القانون أو اختصاص المحكمة أو الرقابة القضائية على الشخص أو الفعل.",
    explanationEn: "Is subject to or governed by specified provisions or jurisdiction."
  },
  "يبرم": {
    en: "Concludes (an agreement)",
    ar: "يبرم / تبرم",
    explanationAr: "عقد وإبرام اتفاق رسمي (كاتفاق العلاقة مع الأمم المتحدة أو اتفاق المقر).",
    explanationEn: "Formally enters into or concludes a treaty or agreement."
  },
  "يعقد": {
    en: "Holds (a session/hearing) / Concludes",
    ar: "تعقد / يعقد (جلساتها)",
    explanationAr: "التئام المحكمة أو الدائرة القضائية في جلسة رسمية.",
    explanationEn: "Convenes or sits in a judicial session."
  },
  "يرى": {
    en: "Considers / Deems",
    ar: "ترى / يرى (تقدير المحكمة)",
    explanationAr: "ما تقدر المحكمة أو الدائرة القضائية ملاءمته أو ضرورته.",
    explanationEn: "Deems or considers in the exercise of judicial discretion."
  },
  "يتخذ": {
    en: "Takes (measures / steps)",
    ar: "يتخذ / تتخذ",
    explanationAr: "إصدار أو مباشرة التدابير والإجراءات اللازمة.",
    explanationEn: "Takes measures, steps, or decisions."
  },
  "يجوز": {
    en: "May (Discretionary authority)",
    ar: "يجوز (للمحكمة / للدائرة / للمدعي العام)",
    explanationAr: "صيغة تمنح رخصة أو سلطة تقديرية لاتخاذ الإجراء وفق مقتضيات العدالة.",
    explanationEn: "Confers permissive discretionary authority under the Statute and Rules."
  },
  "يجب": {
    en: "Shall / Must (Mandatory obligation)",
    ar: "يجب / يتعين",
    explanationAr: "صيغة آمرة تفرض التزاماً قانونياً وجوبياً لا يجوز مخالفته.",
    explanationEn: "Imposes a binding, mandatory statutory duty."
  },
  "يلتزم": {
    en: "Shall comply / Is obliged",
    ar: "يلتزم / تلتزم",
    explanationAr: "ثبوت الواجب القانوني على عاتق الدولة أو الطرف أو الشخص.",
    explanationEn: "Is legally bound or obligated to comply."
  },
  // Extended ICC Statutory & Procedural Corpus Vocabulary (Bilingual High-Frequency Set)
  an: {
    en: "An / A (Indefinite article)",
    ar: "أداة تنكير (أي / أحد)",
    explanationAr: "أداة تنكير في الصياغة القانونية الإنجليزية تفيد الإطلاق والعموم.",
    explanationEn: "Indefinite article used in statutory drafting to denote any single instance."
  },
  possible: {
    en: "Possible / As soon as possible",
    ar: "ممكن / في أقرب وقت ممكن",
    explanationAr: "معيار الإمكان العملي أو السرعة المطلوبة في اتخاذ الإجراءات القضائية.",
    explanationEn: "Feasible or practicable within procedural timelines."
  },
  use: {
    en: "Use / Employment",
    ar: "استخدام / استعمال",
    explanationAr: "استعمال الوسائل أو اللغات أو القوة أو الإجراءات المنصوص عليها قانوناً.",
    explanationEn: "Utilization or employment of means, languages, force, or procedures."
  },
  views: {
    en: "Views / Observations",
    ar: "آراء / وجهات نظر / ملاحظات",
    explanationAr: "آراء وملاحظات الضحايا أو الأطراف أو الدول التي تعرض على الدوائر القضائية (المادة 68).",
    explanationEn: "Views and concerns of victims or parties presented during proceedings under Article 68."
  },
  there: {
    en: "There / In that case",
    ar: "هناك / يوجد / في تلك الحالة",
    explanationAr: "ظرف مكان أو صيغة وجودية في الصياغة القانونية (مثل وجود أساس معقول).",
    explanationEn: "Existential or locative reference in statutory clauses (e.g., 'there is a reasonable basis')."
  },
  extent: {
    en: "Extent / To the extent that",
    ar: "مدى / قدر / بالقدر الذي",
    explanationAr: "نطاق وحدود انطباق الحكم القانوني أو جسامة الضرر.",
    explanationEn: "The degree, scope, or limit to which a legal rule or harm applies."
  },
  arrangements: {
    en: "Arrangements / Agreements",
    ar: "الترتيبات / ترتيبات",
    explanationAr: "الترتيبات الإجرائية أو الخاصة بالتعاون أو الحماية التي تبرمها المحكمة أو المسجل.",
    explanationEn: "Procedural, cooperative, or protective arrangements concluded by the Court or Registry."
  },
  intended: {
    en: "Intended / Deliberate",
    ar: "مقصود / يعتزم / متعمد",
    explanationAr: "ما اتجهت إليه إرادة الفاعل وقصده الجنائي أو غرض النص القانوني.",
    explanationEn: "Purposed or willed under the mental element of crimes or statutory intent."
  },
  soon: {
    en: "Soon / As soon as practicable",
    ar: "قريباً / في أقرب وقت",
    explanationAr: "معيار زمني يوجب المبادرة الفورية لاتخاذ الإجراء القضائي أو الإخطار.",
    explanationEn: "Promptness standard requiring action at the earliest practicable opportunity."
  },
  own: {
    en: "Own / Proprio motu",
    ar: "خاص به / من تلقاء نفسه / ذاتي",
    explanationAr: "التصرف بمبادرة ذاتية من المحكمة أو المدعي العام أو اختيار المتهم لمحاميه.",
    explanationEn: "Acting on one's own initiative (proprio motu) or personal capacity."
  },
  protective: {
    en: "Protective (measures)",
    ar: "حمائي / تدابير الحماية / وقائي",
    explanationAr: "التدابير التي تأمر بها المحكمة لحماية سلامة الشهود والمجني عليهم وأسرهم (المادة 68).",
    explanationEn: "Measures ordered by a Chamber to protect the safety, privacy, and well-being of victims and witnesses."
  },
  took: {
    en: "Took (place / measures)",
    ar: "اتخذ / وقع / حدث",
    explanationAr: "فعل ماضٍ يفيد وقوع السلوك المادي أو اتخاذ التدابير اللازمة.",
    explanationEn: "Past tense of take; indicates that conduct occurred or measures were taken."
  },
  administration: {
    en: "Administration (of the Court / of justice)",
    ar: "إدارة / الإدارة / سير العدالة",
    explanationAr: "الإدارة السليمة للمحكمة أو حسن سير العدالة الجنائية الدولية (المادتان 38 و70).",
    explanationEn: "Proper management of the Court or the administration of justice under Articles 38 and 70."
  },
  so: {
    en: "So / Accordingly / Thus",
    ar: "كذلك / على هذا النحو / لذلك",
    explanationAr: "أداة ربط تفيد الإحالة إلى ما سبق بيانه أو ترتيب الأثر القانوني.",
    explanationEn: "Conjunctive adverb indicating manner, consequence, or conformity with a preceding rule."
  },
  advisory: {
    en: "Advisory (Committee / Opinion)",
    ar: "استشاري / الاستشارية / المشورة",
    explanationAr: "اللجان أو الملاحظات ذات الطابع الاستشاري كاللجنة الاستشارية المعنية بالنصوص القانونية.",
    explanationEn: "Consultative bodies or opinions, such as the Advisory Committee on Legal Texts."
  },
  number: {
    en: "Number / Case number",
    ar: "عدد / رقم",
    explanationAr: "العدد القانوني المطلوب للنصاب أو الرقم المرجعي للقضية أو الوثيقة.",
    explanationEn: "Numerical count, quorum requirement, or registration number of a record."
  },
  designated: {
    en: "Designated (Judge / State)",
    ar: "معيّن / المخصص / المسمى",
    explanationAr: "القاضي المعين أو الدولة المعينة لإنفاذ الحكم أو مباشرة إجراء محدد.",
    explanationEn: "Officially appointed or specified for a judicial or enforcement function."
  },
  committee: {
    en: "Committee",
    ar: "لجنة / اللجنة",
    explanationAr: "هيئة فرعية أو استشارية مشكلة لدراسة مسائل قانونية أو مالية أو إدارية.",
    explanationEn: "A body established to examine specific legal, budgetary, or administrative matters."
  },
  opportunity: {
    en: "Opportunity (to be heard / to respond)",
    ar: "فرصة / الفرصة",
    explanationAr: "تمكين الخصوم والضحايا والدول من إبداء أقوالهم ودفوعهم تحقيقاً لمبدأ المواجهة.",
    explanationEn: "Procedural right afforded to parties to present submissions and be heard."
  },
  paid: {
    en: "Paid / Remunerated",
    ar: "مدفوع / المدفوعة / بأجر",
    explanationAr: "المبالغ أو المرتبات أو المساهمات المالية المسددة وفق اللوائح المالية.",
    explanationEn: "Disbursed or compensated financially under Court regulations."
  },
  direct: {
    en: "Direct / Directly",
    ar: "مباشر / المباشر / يوجه / توجيه",
    explanationAr: "الاتصال أو الأثر المباشر، أو توجيه الدائرة للإجراءات أو توجيه الهجمات.",
    explanationEn: "Immediate and proximate in causation, or to issue judicial directions."
  },
  personal: {
    en: "Personal (jurisdiction / data / appearance)",
    ar: "شخصي / الشخصية",
    explanationAr: "ما يتصل بذات الشخص الطبيعي أو الاختصاص الشخصي للمحكمة (ratione personae).",
    explanationEn: "Relating to an individual person, personal jurisdiction, or confidential personal data."
  },
  criteria: {
    en: "Criteria / Standards",
    ar: "المعايير / معايير / ضوابط",
    explanationAr: "الضوابط الموضوعية والقانونية المعتمدة لتقييم الأدلة أو اختيار المرشحين أو قبول الطلبات.",
    explanationEn: "Objective legal and procedural standards governing judicial or administrative evaluation."
  },
  facilitate: {
    en: "Facilitate / Facilitation",
    ar: "تيسير / تسهيل / ييسر",
    explanationAr: "تذليل العقبات الإجرائية لتأمين تعاون الدول أو مشاركة الضحايا وحضور الشهود.",
    explanationEn: "To assist and make procedural cooperation, testimony, or participation easier."
  },
  complaint: {
    en: "Complaint",
    ar: "شكوى / الشكوى / التظلم",
    explanationAr: "الشكوى أو البلاغ المقدم بشأن مخالفة تأديبية أو ظروف الاحتجاز أو الانتهاكات.",
    explanationEn: "Formal grievance or allegation of misconduct, detention conditions, or breach."
  },
  least: {
    en: "Least / At least",
    ar: "الأقل / على الأقل / أدنى",
    explanationAr: "الحد الأدنى القانوني المقرر للمدد أو الأغلبية أو عدد القضاة.",
    explanationEn: "The minimum statutory threshold required for time limits, votes, or composition."
  },
  regard: {
    en: "Regard / With regard to / Having regard to",
    ar: "اعتبار / مراعاة / فيما يتعلق بـ",
    explanationAr: "أخذ المعايير أو النصوص القانونية ذات الصلة بعين الاعتبار عند الفصل في المسألة.",
    explanationEn: "Taking into consideration relevant legal rules, facts, or circumstances."
  },
  entitled: {
    en: "Entitled (to)",
    ar: "يحق له / صاحب حق / معنون",
    explanationAr: "ثبوت الحق القانوني للشخص (كالمتهم أو الضحية) في التمتع بضمانة أو ميزة إجرائية.",
    explanationEn: "Possessing a legal right or guarantee under the Statute and Rules."
  },
  form: {
    en: "Form / Forms",
    ar: "شكل / أشكال / نموذج / النماذج",
    explanationAr: "الشكل القانوني للإجراء أو الاستمارة الرسمية المعتمدة أو صورة المساهمة الجرمية.",
    explanationEn: "The procedural format, official template, or mode of criminal participation."
  },
  bureau: {
    en: "Bureau (of the Assembly of States Parties)",
    ar: "مكتب جمعية الدول الأطراف / المكتب",
    explanationAr: "المكتب التنفيذي لجمعية الدول الأطراف المكون من الرئيس ونائبيه و18 عضواً (المادة 112).",
    explanationEn: "The executive body of the Assembly of States Parties established under Article 112(3)."
  },
  contain: {
    en: "Contain / Containing / Contents",
    ar: "يتضمن / يشمل / محتوى / محتويات",
    explanationAr: "ما تشتمل عليه الوثيقة القضائية أو أمر القبض أو لائحة التهم من بيانات إلزامية.",
    explanationEn: "To include or comprise specified mandatory elements within a legal document."
  },
  inter: {
    en: "Inter (Inter alia / Intergovernmental)",
    ar: "بين / من بين (في جملة أمور)",
    explanationAr: "بادئة لاتينية تفيد البينية، وترد في عبارة 'inter alia' بمعنى 'في جملة أمور'.",
    explanationEn: "Latin preposition meaning 'among', used in 'inter alia' (among other things)."
  },
  alia: {
    en: "Alia (Inter alia)",
    ar: "أخرى / في جملة أمور (من بين أمور أخرى)",
    explanationAr: "جزء من المصطلح اللاتيني (inter alia) الذي يفيد ذكر أمثلة على سبيل التمثيل لا الحصر.",
    explanationEn: "Part of the Latin maxim 'inter alia', meaning 'among other things'."
  },
  advice: {
    en: "Advice / Legal advice",
    ar: "مشورة / المشورة / نصح",
    explanationAr: "المشورة القانونية أو الفنية التي يقدمها المحامي أو المستشار أو الهيئة المختصة.",
    explanationEn: "Professional legal or technical guidance provided by counsel or advisers."
  },
  based: {
    en: "Based (on) / Grounded",
    ar: "مستند / يستند / بناءً على",
    explanationAr: "قيام القرار القضائي أو الادعاء على أدلة أو أسس قانونية وواقعية محددة.",
    explanationEn: "Founded or resting upon specified evidentiary or statutory grounds."
  },
  together: {
    en: "Together (with)",
    ar: "معاً / بالاشتراك مع / مشفوعاً بـ",
    explanationAr: "الاقتران في العمل الإجرائي أو إرفاق الوثائق والمستندات المؤيدة.",
    explanationEn: "Jointly or accompanied by supporting documents and materials."
  },
  breach: {
    en: "Breach / Violation",
    ar: "إخلال / الإخلال / خرق / انتهاك",
    explanationAr: "مخالفة الالتزامات القانونية أو القواعد الإجرائية أو اتفاقيات جنيف.",
    explanationEn: "Violation or non-fulfillment of a legal obligation, rule, or treaty norm."
  },
  mutatis: {
    en: "Mutatis (mutatis mutandis)",
    ar: "مع مراعاة التعديلات اللازمة (ما يقتضيه الحال)",
    explanationAr: "جزء من العبارة اللاتينية (mutatis mutandis) لتطبيق القواعد بالقياس مع تعديل ما يلزم.",
    explanationEn: "Part of 'mutatis mutandis', meaning with the necessary procedural adaptations."
  },
  mutandis: {
    en: "Mutandis (mutatis mutandis)",
    ar: "مع إجراء التغييرات الضرورية",
    explanationAr: "سريان حكم مادة أو قاعدة على حالة مماثلة مع مراعاة الفروق الإجرائية.",
    explanationEn: "Applying a rule to a comparable situation with necessary modifications."
  },
  appoint: {
    en: "Appoint / Appointed",
    ar: "يعيّن / تعيين / معيّن",
    explanationAr: "إصدار قرار بتكليف قاضٍ أو محامٍ أو خبير أو موظف بمباشرة مهام رسمية.",
    explanationEn: "To officially designate or assign a judge, counsel, expert, or staff member."
  },
  whole: {
    en: "Whole / In whole or in part",
    ar: "كامل / كلياً (كلياً أو جزئياً)",
    explanationAr: "الشمول الكلي، ويرد خاصة في تعريف الإبادة الجماعية (إهلاك جماعة كلياً أو جزئياً).",
    explanationEn: "Entirety; used in 'in whole or in part' under Article 6 (Genocide) and sentencing."
  },
  sought: {
    en: "Sought (Person sought / Relief sought)",
    ar: "المطلوب / الملتمس / المبتغى",
    explanationAr: "الشخص المطلوب القبض عليه أو تقديمه، أو الطلب القضائي الملتمس من الدائرة.",
    explanationEn: "The person whose arrest/surrender is requested, or the judicial remedy requested."
  },
  final: {
    en: "Final (judgment / decision / clauses)",
    ar: "نهائي / النهائي / الختامية / بات",
    explanationAr: "الحكم البات الذي استنفد طرق الطعن، أو المرافعات الختامية، أو الأحكام الختامية للنظام.",
    explanationEn: "Conclusive and unappealable judicial determination, closing statements, or final clauses."
  },
  define: {
    en: "Define / Defined / Definition",
    ar: "يعرّف / محدّد / تعريف / تحديد",
    explanationAr: "بيان الماهية القانونية الدقيقة للجريمة أو المصطلح وفق مبدأ الشرعية الجنائية.",
    explanationEn: "To specify the exact legal meaning and elements of a term or crime."
  },
  team: {
    en: "Team (Defence team / Investigation team)",
    ar: "فريق / الفريق",
    explanationAr: "مجموعة العمل القانونية أو التحقيقية التابعة للادعاء أو الدفاع.",
    explanationEn: "Organized group of legal or investigative personnel working on a case."
  },
  preparation: {
    en: "Preparation / Preparatory",
    ar: "إعداد / تحضير / التحضيرية",
    explanationAr: "تهيئة الدفاع أو تحضير القضية للمحاكمة أو الأعمال التحضيرية للمعاهدة.",
    explanationEn: "Readying a case or defence for trial, or preparatory works (travaux préparatoires)."
  },
  reasonable: {
    en: "Reasonable (grounds / doubt / basis)",
    ar: "معقول / المعقول / مسوّغ",
    explanationAr: "المعيار الموضوعي المعقول في الإثبات الجنائي (كالأساس المعقول للاعتقاد أو الشك المعقول).",
    explanationEn: "Objective legal standard governing evidentiary thresholds (e.g., reasonable basis, reasonable doubt)."
  },
  first: {
    en: "First (appearance / instance)",
    ar: "الأول / الأولى / أولاً / المثول الأول",
    explanationAr: "المرحلة الأولى أو جلسة المثول الأول للمشتبه فيه أمام الدائرة التمهيدية (المادة 60).",
    explanationEn: "Initial procedural stage, such as the first appearance before the Pre-Trial Chamber."
  },
  management: {
    en: "Management / Manages",
    ar: "إدارة / تسيير / يدير",
    explanationAr: "تنظيم وتوجيه الموارد والعمليات القضائية والإدارية داخل أجهزة المحكمة.",
    explanationEn: "Direction, supervision, and organization of resources and case workflows."
  },
  access: {
    en: "Access / Accessible",
    ar: "الوصول / الاطلاع / متاح",
    explanationAr: "الحق في الاطلاع على السجلات والأدلة أو التواصل مع المحامي والزوار.",
    explanationEn: "Right or ability to inspect records, evidence, or communicate with counsel."
  },
  aware: {
    en: "Aware / Awareness",
    ar: "مدرك / على علم / التوعية / الوعي",
    explanationAr: "إدراك المتهم للظروف الواقعية ضمن الركن المعنوي (المادة 30)، أو نشر الوعي القانوني.",
    explanationEn: "Conscious knowledge of factual circumstances under Article 30 (mens rea), or public awareness."
  },
  further: {
    en: "Further (evidence / proceedings)",
    ar: "إضافي / مزيد من / علاوة على ذلك",
    explanationAr: "ما يستجد من أدلة أو جلسات أو إجراءات تكميلية تأمر بها الدائرة.",
    explanationEn: "Additional or supplementary evidence, submissions, or procedural steps."
  },
  proper: {
    en: "Proper / Properly",
    ar: "سليم / مناسب / لحسن (سير العدالة)",
    explanationAr: "ما يتفق مع الأصول القانونية السليمة وحسن إدارة المحكمة وسير العدالة.",
    explanationEn: "Conforming to established legal standards and the proper administration of justice."
  },
  character: {
    en: "Character / Nature",
    ar: "طابع / الطابع / صفة / طبيعة",
    explanationAr: "الطبيعة القانونية للنزاع أو السلوك أو الاتهام.",
    explanationEn: "The legal nature, quality, or classification of conduct or proceedings."
  },
  assessment: {
    en: "Assessment / Assess / Evaluation",
    ar: "تقييم / التقييم / تقدير",
    explanationAr: "الفحص والتقدير القضائي أو الإداري للأدلة أو المخاطر أو الأضرار.",
    explanationEn: "Judicial or administrative appraisal of evidence, risk, gravity, or reparations."
  },
  approval: {
    en: "Approval / Approve",
    ar: "اعتماد / الاعتماد / موافقة",
    explanationAr: "المصادقة الرسمية من هيئة الرئاسة أو الدائرة أو جمعية الدول الأطراف.",
    explanationEn: "Formal sanction or authorization by a Chamber, Presidency, or Assembly."
  },
  text: {
    en: "Text / Texts",
    ar: "نص / النصوص / الصيغة",
    explanationAr: "المتن القانوني المكتوب للمواد والوثائق الرسمية بلغات المحكمة.",
    explanationEn: "The written wording of legal instruments, filings, or authentic translations."
  },
  panel: {
    en: "Panel (of Judges / of Experts)",
    ar: "هيئة / لجنة (من القضاة أو الخبراء)",
    explanationAr: "تشكيل قضائي فرعي (مثل هيئة قضاة دائرة الاستئناف لبنود تخفيض العقوبة) أو لجنة خبراء.",
    explanationEn: "A designated judicial bench (e.g., three judges for sentence review) or expert group."
  },
  joint: {
    en: "Joint / Jointly",
    ar: "مشترك / المشترك / المشتركة / بالاشتراك",
    explanationAr: "العمل أو التمثيل القانوني المشترك أو المحاكمة المشتركة لعدة متهمين.",
    explanationEn: "Undertaken together, such as joint trials, joint teams, or co-perpetration."
  },
  instruction: {
    en: "Instruction / Instructions / Instruct",
    ar: "تعليمات / توجيه / توجيهات",
    explanationAr: "التوجيهات الصادرة عن الدائرة القضائية أو رئيس الجهاز أو الموكل لمحاميه.",
    explanationEn: "Authoritative directions issued by a Chamber, organ head, or client to counsel."
  },
  behalf: {
    en: "Behalf (On behalf of)",
    ar: "نيابةً عن / باسم",
    explanationAr: "التصرف القانوني أو التمثيل القضائي باسم طرف آخر أو دولة أو ضحايا.",
    explanationEn: "Acting as the legal representative or agent of a party, State, or victim group."
  },
  status: {
    en: "Status / Status conference",
    ar: "وضع / صفة / جلسة بحث الحالة",
    explanationAr: "المركز القانوني للمحكمة أو الأشخاص، أو جلسات بحث سير الإجراءات (Status Conferences).",
    explanationEn: "Legal standing of an entity/person, or procedural status conferences before a Chamber."
  },
  object: {
    en: "Object / Objects / Objection",
    ar: "غرض / أعيان / هدف / اعتراض",
    explanationAr: "موضوع المعاهدة وغرضها، أو الأعيان المدنية والمحمية، أو الاعتراض الإجرائي.",
    explanationEn: "Purpose of a treaty, civilian/protected objects in IHL, or a formal legal objection."
  },
  control: {
    en: "Control / Effective control",
    ar: "سيطرة / السيطرة / تحكم / رقابة",
    explanationAr: "السيطرة الفعلية للقائد العسكري أو الرئيس على المرؤوسين (المادة 28) أو السيطرة على الجريمة.",
    explanationEn: "Effective command and control over subordinates (Article 28) or control over the crime."
  },
  appear: {
    en: "Appear / Appearance",
    ar: "يمثل / حضور / الحضور / المثول",
    explanationAr: "المثول الشخصي أمام الدائرة القضائية استجابةً لأمر حضور أو أمر قبض.",
    explanationEn: "To come formally before a Chamber in person or via video link."
  },
  age: {
    en: "Age",
    ar: "سن / السن / عمر",
    explanationAr: "السن القانونية للمسؤولية الجنائية (18 عاماً بموجب المادة 26) أو لحماية الأطفال (15 عاماً).",
    explanationEn: "Chronological age governing jurisdiction (Article 26) and child protection (Article 8)."
  },
  held: {
    en: "Held (in custody / a hearing)",
    ar: "محتجز / عُقدت / منعقد",
    explanationAr: "عقد الجلسة القضائية، أو بقاء الشخص رهن الاحتجاز القانوني.",
    explanationEn: "Conducted (as a hearing) or detained in custody."
  },
  presiding: {
    en: "Presiding (Judge)",
    ar: "القاضي الرئيس / رئيس الدائرة",
    explanationAr: "القاضي الذي يترأس الدائرة التمهيدية أو الابتدائية أو دائرة الاستئناف ويدير جلساتها.",
    explanationEn: "The Judge chairing a Chamber and directing its hearings and deliberations."
  },
  well: {
    en: "Well / As well as / Well-being",
    ar: "كذلك / فضلاً عن / رفاه / سلامة",
    explanationAr: "تعبير عطف وإضافة ('فضلاً عن')، أو للدلالة على سلامة ورفاه الضحايا والشهود.",
    explanationEn: "Used in 'as well as' (in addition to) or 'well-being' of victims and witnesses."
  },
  activity: {
    en: "Activity / Activities",
    ar: "نشاط / أنشطة / الأنشطة",
    explanationAr: "الأعمال والمهام القضائية أو التحقيقية أو الميدانية التي تباشرها المحكمة.",
    explanationEn: "Operations, functions, and undertakings carried out by organs of the Court."
  },
  outside: {
    en: "Outside",
    ar: "خارج / الخارجي",
    explanationAr: "ما يقع خارج إقليم الدولة أو خارج مقر المحكمة أو خارج نطاق الاختصاص.",
    explanationEn: "Beyond geographical territory, Court premises, or statutory scope."
  },
  offence: {
    en: "Offence / Offences",
    ar: "جرم / جرائم / مخالفة (المساس بسير العدالة)",
    explanationAr: "الأفعال المجرّمة، ولا سيما الجرائم المخلة بإقامة العدالة بموجب المادة 70.",
    explanationEn: "Punishable violations, particularly offences against the administration of justice (Article 70)."
  },
  death: {
    en: "Death",
    ar: "وفاة / الموت / القتل",
    explanationAr: "النتيجة الجرمية المتمثلة في إزهاق الروح، أو واقعة وفاة الشخص.",
    explanationEn: "Loss of life resulting from a crime, or the natural demise of a person."
  },
  note: {
    en: "Note / Take note / Notes",
    ar: "ملاحظة / يحيط علماً / مذكرة",
    explanationAr: "إحاطة الدائرة علماً بمسألة إجرائية، أو المذكرة التفسيرية أو الدبلوماسية.",
    explanationEn: "Judicial acknowledgement of a matter, explanatory note, or diplomatic note."
  },
  ad: {
    en: "Ad hoc (counsel / arrangement)",
    ar: "مؤقت / خاص / لغرض محدد (Ad hoc)",
    explanationAr: "ما يُنشأ أو يُعيّن لغرض محدد أو حالة بعينها (كالمحامي المؤقت أو الترتيب الخاص).",
    explanationEn: "Established or appointed for a specific purpose or case (e.g., ad hoc counsel)."
  },
  hoc: {
    en: "Hoc (Ad hoc)",
    ar: "لهذا الغرض المحدد (مؤقت / خاص)",
    explanationAr: "جزء من المصطلح اللاتيني (ad hoc) الدال على التخصيص لمهمة أو قضية معينة.",
    explanationEn: "Part of the Latin phrase 'ad hoc', meaning 'for this specific purpose'."
  },
  oral: {
    en: "Oral / Orally",
    ar: "شفوي / الشفوية / شفهية / نطقاً",
    explanationAr: "المرافعات أو الشهادات أو القرارات التي تُبدى مشافهةً في الجلسة.",
    explanationEn: "Spoken testimony, submissions, or rulings delivered viva voce during a hearing."
  },
  ex: {
    en: "Ex (Ex parte / Ex officio)",
    ar: "من جانب واحد (Ex parte) / بحكم المنصب (Ex officio)",
    explanationAr: "بادئة لاتينية ترد في الإجراءات غير الوجاهية (ex parte) أو الصلاحيات الذاتية (ex officio).",
    explanationEn: "Latin preposition used in 'ex parte' (one-sided) and 'ex officio' (by virtue of office)."
  },
  parte: {
    en: "Parte (Ex parte)",
    ar: "من طرف واحد / دون حضور الطرف الآخر",
    explanationAr: "إجراء أو طلب يُنظر فيه بحضور طرف واحد فقط لدواعي السرية أو الحماية.",
    explanationEn: "Proceeding or filing conducted by or in the presence of one party only."
  },
  electronic: {
    en: "Electronic / Electronically",
    ar: "إلكتروني / الإلكتروني / الرقمية",
    explanationAr: "الوسائل الرقمية المعتمدة لإيداع الوثائق وحفظ الأدلة وإدارة السجلات.",
    explanationEn: "Digital filing, notification, and evidentiary storage systems of the Court."
  },
  racial: {
    en: "Racial",
    ar: "عرقي / عرقية / العرقية",
    explanationAr: "وصف للجماعة العرقية المحمية من جريمة الإبادة الجماعية والاضطهاد والفصل العنصري.",
    explanationEn: "Relating to a racial group protected against genocide, persecution, and apartheid."
  },
  religious: {
    en: "Religious / Religion",
    ar: "ديني / دينية / الدينية / الدين",
    explanationAr: "وصف للجماعة الدينية أو الأعيان الدينية المحمية بموجب نظام روما الأساسي.",
    explanationEn: "Relating to a protected religious group, belief, or consecrated buildings."
  },
  ethnical: {
    en: "Ethnical / Ethnic",
    ar: "إثني / إثنية / الإثنية",
    explanationAr: "الجماعة الإثنية ذات الهوية الثقافية أو اللغوية المشتركة المحمية بموجب المادة 6.",
    explanationEn: "Protected ethnic group sharing cultural or linguistic heritage under Article 6."
  },
  guilt: {
    en: "Guilt / Guilty",
    ar: "الذنب / بالذنب / الإدانة / مذنب",
    explanationAr: "ثبوت المسؤولية الجنائية للمتهم، أو الإقرار بالذنب بموجب المادة 65.",
    explanationEn: "Culpability established at trial, or an admission of guilt under Article 65."
  },
  hold: {
    en: "Hold (a hearing / in contempt)",
    ar: "يعقد (جلسة) / يحمل المسؤولية / يحتفظ",
    explanationAr: "عقد جلسات الاستماع أو اعتبار الشخص مسؤولاً قانوناً.",
    explanationEn: "To convene a session, detain, or adjudge legally."
  },
  admission: {
    en: "Admission (of guilt / of evidence)",
    ar: "إقرار / الإقرار (بالذنب) / قبول (الأدلة)",
    explanationAr: "اعتراف المتهم بالذنب أمام الدائرة الابتدائية، أو قبول المحكمة لدليل معين.",
    explanationEn: "Formal acknowledgment of guilt under Article 65 or judicial reception of evidence."
  },
  change: {
    en: "Change / Modification / Variation",
    ar: "تغيير / تعديل / تبديل",
    explanationAr: "تعديل الوصف القانوني للوقائع أو تغيير مكان الانعقاد أو شروط الاحتجاز.",
    explanationEn: "Alteration of legal characterization, venue, or procedural conditions."
  },
  receipt: {
    en: "Receipt",
    ar: "تلقي / استلام / إيصال",
    explanationAr: "واقعة تسلم الطلب أو الإخطار التي يبدأ منها سريان المواعيد الإجرائية.",
    explanationEn: "Formal reception of a filing, notice, or request triggering procedural time limits."
  },
  obtain: {
    en: "Obtain / Obtained",
    ar: "يحصل على / استحصَل / جمع",
    explanationAr: "الحصول على الأدلة أو الموافقة أو المعلومات بالطرق القانونية.",
    explanationEn: "To acquire evidence, consent, or authorization."
  },
  dealing: {
    en: "Dealing (with)",
    ar: "التعامل مع / معالجة / النظر في",
    explanationAr: "مباشرة الإجراءات المتعلقة بمسألة قضائية أو إدارية معينة.",
    explanationEn: "Handling or addressing a specific procedural or administrative matter."
  },
  exceed: {
    en: "Exceed / Exceeding",
    ar: "يتجاوز / تتجاوز / يربو على",
    explanationAr: "تخطي الحد الأقصى المقرر قانوناً للعقوبة أو المدة الزمنية.",
    explanationEn: "To go beyond the maximum statutory limit of a penalty or time period."
  },
  name: {
    en: "Name / Names",
    ar: "اسم / الاسم / أسماء",
    explanationAr: "البيانات التعريفية الكاملة للشخص أو الشاهد أو القاضي.",
    explanationEn: "Identifying designation of an individual, party, or witness."
  },
  chief: {
    en: "Chief (of Division / Custody Officer)",
    ar: "رئيس (قسم / شعبة / الحرس)",
    explanationAr: "المسؤول الإداري أو الأمني المشرف على شعبة أو مركز الاحتجاز.",
    explanationEn: "The principal officer heading a section, division, or detention center."
  },
  initiate: {
    en: "Initiate / Initiated / Initiation",
    ar: "يبدأ / يباشر / بدء / الشروع في",
    explanationAr: "مباشرة التحقيق أو الإجراءات القضائية (سواء بإحالة أو بمبادرة ذاتية).",
    explanationEn: "To formally commence an investigation or judicial proceeding."
  },
  intergovernmental: {
    en: "Intergovernmental (organization)",
    ar: "حكومي دولي / المنظمات الحكومية الدولية",
    explanationAr: "المنظمات الدولية المشكلة من الدول والتي تتعاون مع المحكمة بموجب المادة 87.",
    explanationEn: "International organizations composed of sovereign States cooperating with the Court."
  },
  fully: {
    en: "Fully",
    ar: "بصورة تامة / كلياً / تماماً",
    explanationAr: "الوفاء الكامل بالالتزامات (كالتعاون التام للدول الأطراف بموجب المادة 86).",
    explanationEn: "Completely and without reservation (e.g., 'cooperate fully' under Article 86)."
  },
  according: {
    en: "According (to) / Accord",
    ar: "وفقاً لـ / طبقاً لـ / بمقتضى",
    explanationAr: "الاستناد إلى نص قانوني أو معيار معتمد.",
    explanationEn: "In conformity or compliance with a specified legal source."
  },
  body: {
    en: "Body / Bodily",
    ar: "هيئة / جهاز / جسدي / البدنية",
    explanationAr: "الهيئة المؤسسية، أو السلامة البدنية والجسدية للأشخاص المحميين.",
    explanationEn: "An institutional organ/entity, or physical/bodily integrity of persons."
  },
  experience: {
    en: "Experience / Expertise",
    ar: "خبرة / الخبرة / الكفاءة المهنية",
    explanationAr: "الخبرة العملية الواسعة المشترطة في القضاة والمدعي العام والمحامين والخبراء.",
    explanationEn: "Professional competence and practical background required of judges and counsel."
  },
  reference: {
    en: "Reference / References",
    ar: "إشارة / الإشارة / مرجع / مراجع",
    explanationAr: "الإحالة المرجعية إلى مادة قانونية أو وثيقة أو سابقة قضائية.",
    explanationEn: "Citation or cross-reference to a legal provision, record, or precedent."
  },
  transmission: {
    en: "Transmission / Transmit",
    ar: "إحالة / إرسال / نقل / بث",
    explanationAr: "إرسال الطلبات القضائية أو أوامر القبض أو السجلات بين أجهزة المحكمة والدول.",
    explanationEn: "Official forwarding of requests, warrants, or records between organs and States."
  },
  involved: {
    en: "Involved / Involvement / Involving",
    ar: "ضالع / معني / مشارك / المتعلقة",
    explanationAr: "الأشخاص أو الدول ذات الصلة بالواقعة أو الإجراءات.",
    explanationEn: "Implicated, participating, or concerned in a crime or proceeding."
  },
  enable: {
    en: "Enable / To enable",
    ar: "يمكّن / تمكين / لتمكين",
    explanationAr: "إتاحة الوسائل القانونية والعملية لأداء مهمة قضائية أو ممارسة حق الدفاع.",
    explanationEn: "To provide the legal authority or practical means to perform a function."
  },
  address: {
    en: "Address",
    ar: "يخاطب / يعالج / عنوان",
    explanationAr: "مخاطبة الدائرة القضائية، أو معالجة مسألة قانونية، أو محل الإقامة الرسمي.",
    explanationEn: "To speak formally to a Chamber, deal with an issue, or physical/electronic location."
  },
  hear: {
    en: "Hear / Heard",
    ar: "يسمع / سماع / استماع / يُستمع",
    explanationAr: "استماع الدائرة القضائية إلى أقوال الشهود والخصوم والضحايا.",
    explanationEn: "Judicial reception of oral testimony and legal arguments."
  },
  contact: {
    en: "Contact / Communication",
    ar: "اتصال / التواصل / تواصل",
    explanationAr: "التواصل المسموح به للمحتجز مع محاميه أو أسرته أو ممثلي القنصلية.",
    explanationEn: "Permitted communication between a detained person, counsel, family, or Registry."
  },
  previously: {
    en: "Previously / Previous",
    ar: "سابقاً / سلفاً / السابق",
    explanationAr: "ما سبق اتخاذه من إجراءات أو صدوره من أحكام قضائية.",
    explanationEn: "Prior in time or at an earlier stage of proceedings."
  },
  already: {
    en: "Already",
    ar: "فعلاً / مسبقاً / قد تم",
    explanationAr: "تحقق الواقعة أو الإجراء قبل الوقت الحالي.",
    explanationEn: "Prior to the time in question."
  },
  possession: {
    en: "Possession / Custody",
    ar: "حيازة / حوزة / عهدة",
    explanationAr: "وجود الأدلة أو المستندات أو الأصول تحت سيطرة أو حيازة طرف أو دولة.",
    explanationEn: "Physical or legal control over documents, evidence, or property."
  },
  stage: {
    en: "Stage / Stages",
    ar: "مرحلة / مراحل",
    explanationAr: "المراحل المتعاقبة للإجراءات الجنائية (التحقيق، التمهيدية، المحاكمة، الاستئناف).",
    explanationEn: "Distinct phases of judicial proceedings before the Court."
  },
  ongoing: {
    en: "Ongoing",
    ar: "جارٍ / مستمر / قائمة",
    explanationAr: "التحقيقات أو الإجراءات الجارية التي لم يُفصل فيها بعد.",
    explanationEn: "Currently in progress and not yet concluded."
  },
  forth: {
    en: "Forth (Set forth)",
    ar: "مبيّن / منصوص عليه / وارد",
    explanationAr: "يرد في عبارة (set forth) بمعنى المنصوص عليه أو المبين في المواد والقواعد.",
    explanationEn: "Used in 'set forth', meaning stated or prescribed in a legal text."
  },
  need: {
    en: "Need / Needs",
    ar: "حاجة / الحاجة / احتياجات",
    explanationAr: "المقتضيات القانونية أو الاحتياجات الخاصة للضحايا والشهود والأطفال.",
    explanationEn: "Necessity or special requirements of vulnerable victims and witnesses."
  },
  representation: {
    en: "Representation / Represent / Represented",
    ar: "تمثيل / التمثيل / يمثل / دفوع",
    explanationAr: "النيابة القانونية عن المتهم أو الضحايا، أو تقديم الدفوع والبيانات أمام المحكمة.",
    explanationEn: "Acting as legal counsel, balanced geographic/gender composition, or formal submissions."
  },
  external: {
    en: "External",
    ar: "خارجي / الخارجي",
    explanationAr: "الجهات أو الخبراء أو المراجعون من خارج جهاز المحكمة.",
    explanationEn: "Originating outside the internal organs of the Court."
  },
  copy: {
    en: "Copy / Copies",
    ar: "نسخة / النسخة / نسخ",
    explanationAr: "صورة رسمية مطابقة للأصل من الوثائق أو الأحكام أو التسجيلات.",
    explanationEn: "Certified duplicate or reproduction of an official record or filing."
  },
  observations: {
    en: "Observations",
    ar: "ملاحظات / تعقيب / دفوع مكتوبة",
    explanationAr: "المذكرات والتعقيبات القانونية التي تقدمها الأطراف أو الدول أو أصدقاء المحكمة.",
    explanationEn: "Formal written or oral legal submissions presented to a Chamber."
  },
  assistants: {
    en: "Assistants / Assistant",
    ar: "مساعدون / مساعد / المساعد",
    explanationAr: "المساعدون القانونيون المعاونون للقضاة أو لمحامي الدفاع والممثلين القانونيين.",
    explanationEn: "Legal support personnel assisting Judges or counsel."
  },
  far: {
    en: "Far (In so far as / As far as)",
    ar: "بالقدر الذي / إلى الحد الذي",
    explanationAr: "تحديد مدى انطباق النص القانوني أو الإمكان العملي.",
    explanationEn: "To the degree or extent that a condition holds."
  },
  later: {
    en: "Later / Subsequent",
    ar: "لاحقاً / لاحقة / في وقت لاحق",
    explanationAr: "ما يعقب الإجراء الأول زمنياً أو أقصى موعد لتقديم الطلب.",
    explanationEn: "Subsequent in time or no later than a specified deadline."
  },
  accompanied: {
    en: "Accompanied / Accompanying",
    ar: "مشفوعاً / مرفقاً / مصحوباً",
    explanationAr: "اقتران الطلب القضائي بالمستندات المؤيدة أو حضور شخص برفقة محاميه.",
    explanationEn: "Supplemented by supporting documents or attended by counsel."
  },
  applicant: {
    en: "Applicant",
    ar: "مقدم الطلب / طالب / الملتمس",
    explanationAr: "الشخص أو الطرف الذي يتقدم بطلب قضائي أو طلب مشاركة أو جبر ضرر.",
    explanationEn: "A person or party filing a motion, application for participation, or claim."
  },
  knew: {
    en: "Knew (or should have known)",
    ar: "كان يعلم (أو يفترض أنه يعلم)",
    explanationAr: "معيار العلم الفعلي أو المفترض للقائد العسكري أو الرئيس بموجب المادة 28.",
    explanationEn: "Standard of actual or constructive knowledge required under Article 28."
  },
  coordination: {
    en: "Coordination / Coordinate",
    ar: "تنسيق / التنسيق / بالتنسيق",
    explanationAr: "تضافر الجهود وتنظيم العمل المشترك بين أجهزة المحكمة أو مع الدول والمنظمات.",
    explanationEn: "Harmonized action and consultation among Court organs and external partners."
  },
  deemed: {
    en: "Deemed / Deem",
    ar: "يُعتبر / يُعدّ / في حكم",
    explanationAr: "افتراض قانوني يرتب أثراً معيناً بموجب النص التشريعي.",
    explanationEn: "Considered or treated in law as having a specified status."
  },
  inclusion: {
    en: "Inclusion / Include",
    ar: "إدراج / ضم / تضمين / المدرجة",
    explanationAr: "قيد اسم المحامي أو الخبير في القائمة الرسمية أو إدراج مسألة في جدول الأعمال.",
    explanationEn: "Entering a person on an official roster or incorporating an item into a record."
  },
  suffering: {
    en: "Suffering (Great suffering)",
    ar: "معاناة (معاناة شديدة)",
    explanationAr: "الألم الجسدي أو النفسي الجسيم الذي يشكل ركناً في جرائم الحرب والجرائم ضد الإنسانية.",
    explanationEn: "Severe physical or mental pain constituting an element of war crimes and crimes against humanity."
  },
  fair: {
    en: "Fair / Fairness / Fairly",
    ar: "عادل / العادلة / منصفة / إنصاف",
    explanationAr: "ضمانات المحاكمة العادلة والمنصفة المكفولة للمتهم والأطراف (المادة 67).",
    explanationEn: "Impartiality, equity, and due process guarantees of a fair trial."
  },
  military: {
    en: "Military (commander / necessity)",
    ar: "عسكري / العسكري / عسكرية",
    explanationAr: "ما يتصل بالقوات المسلحة أو القادة العسكريين أو الضرورة العسكرية في القانون الدولي الإنساني.",
    explanationEn: "Relating to armed forces, military commanders (Article 28), or military objectives."
  },
  resolution: {
    en: "Resolution",
    ar: "قرار (صادر عن جمعية الدول الأطراف أو مجلس الأمن) / تسوية",
    explanationAr: "القرار الصادر عن جمعية الدول الأطراف أو مجلس الأمن، أو تسوية النزاع.",
    explanationEn: "Formal act adopted by the Assembly of States Parties or UN Security Council, or dispute settlement."
  },
  amount: {
    en: "Amount",
    ar: "مبلغ / مقدار / يرقى إلى",
    explanationAr: "القيمة المالية للغرامة أو التعويض، أو بلوغ السلوك درجة الجريمة الدولية.",
    explanationEn: "Monetary sum of a fine/reparation, or reaching a legal threshold ('amount to')."
  },
  entry: {
    en: "Entry (into force)",
    ar: "بدء النفاذ / دخول / قيد",
    explanationAr: "سريان المعاهدة أو التعديل قانوناً (Entry into force)، أو القيد في السجل.",
    explanationEn: "Commencement of legal validity of a treaty/amendment, or registration of a record."
  },
  english: {
    en: "English",
    ar: "الإنجليزية / الإنكليزية",
    explanationAr: "إحدى لغتي العمل الرسميتين للمحكمة الجنائية الدولية (إلى جانب الفرنسية) بموجب المادة 50.",
    explanationEn: "One of the two working languages of the Court (alongside French) under Article 50."
  },
  french: {
    en: "French",
    ar: "الفرنسية",
    explanationAr: "إحدى لغتي العمل الرسميتين للمحكمة الجنائية الدولية بموجب المادة 50.",
    explanationEn: "One of the two working languages of the Court under Article 50."
  },
  arabic: {
    en: "Arabic",
    ar: "العربية",
    explanationAr: "إحدى اللغات الرسمية الست للمحكمة الجنائية الدولية بموجب المادة 50(1).",
    explanationEn: "One of the six official languages of the Court under Article 50(1)."
  },
  spanish: {
    en: "Spanish",
    ar: "الإسبانية",
    explanationAr: "إحدى اللغات الرسمية الست للمحكمة الجنائية الدولية بموجب المادة 50(1).",
    explanationEn: "One of the six official languages of the Court under Article 50(1)."
  },
  russian: {
    en: "Russian",
    ar: "الروسية",
    explanationAr: "إحدى اللغات الرسمية الست للمحكمة الجنائية الدولية بموجب المادة 50(1).",
    explanationEn: "One of the six official languages of the Court under Article 50(1)."
  },
  chinese: {
    en: "Chinese",
    ar: "الصينية",
    explanationAr: "إحدى اللغات الرسمية الست للمحكمة الجنائية الدولية بموجب المادة 50(1).",
    explanationEn: "One of the six official languages of the Court under Article 50(1)."
  },
  requirements: {
    en: "Requirements / Requirement",
    ar: "المتطلبات / الشروط / مقتضيات",
    explanationAr: "الشروط القانونية والفنية الواجب استيفاؤها لقبول الطلب أو صحة الإجراء.",
    explanationEn: "Mandatory statutory or procedural conditions that must be met."
  },
  original: {
    en: "Original",
    ar: "أصلي / الأصل / النسخة الأصلية",
    explanationAr: "النسخة الأصلية للوثيقة أو المعاهدة أو الدليل قبل الترجمة أو النسخ.",
    explanationEn: "The primary, authentic version of a document, evidence item, or Chamber."
  },
  affect: {
    en: "Affect / Affected",
    ar: "يؤثر / متأثر / يمس",
    explanationAr: "ترتيب أثر قانوني على حقوق الأطراف أو المجتمعات المتأثرة بالجرائم.",
    explanationEn: "To have an impact on legal rights, validity, or victim communities."
  },
  recommendation: {
    en: "Recommendation / Recommendations / Recommend",
    ar: "توصية / توصيات / يوصي",
    explanationAr: "الاقتراح الرسمي الصادر عن جهاز مختص أو لجنة استشارية.",
    explanationEn: "Formal proposal or advice issued by a committee, Registrar, or Chamber."
  },
  due: {
    en: "Due (Due regard / Due process / Duly)",
    ar: "واجب / مستحق / مع المراعاة الواجبة / حسب الأصول",
    explanationAr: "العناية والاعتبار الواجبين قانوناً، ومراعاة الأصول الإجرائية السليمة.",
    explanationEn: "Proper, rightful, and in accordance with established procedural guarantees."
  },
  technical: {
    en: "Technical",
    ar: "تقني / فني",
    explanationAr: "الجوانب الفنية والتقنية المتعلقة بالأدلة أو البث أو نظم المعلومات.",
    explanationEn: "Specialized technological or procedural specifications."
  },
  similar: {
    en: "Similar / Comparable",
    ar: "مماثل / المماثل / مشابه",
    explanationAr: "الأفعال أو الحالات المتماثلة في جسامتها أو طبيعتها القانونية.",
    explanationEn: "Of a comparable legal nature, gravity, or character."
  },
  mechanism: {
    en: "Mechanism",
    ar: "آلية / الآلية",
    explanationAr: "النظام الإجرائي أو المؤسسي المعتمد لتنفيذ مهمة رقابية أو قضائية.",
    explanationEn: "Established procedural or institutional system for accomplishing a legal function."
  },
  summary: {
    en: "Summary / Summaries",
    ar: "موجز / ملخص / خلاصة",
    explanationAr: "ملخص الأدلة أو الوقائع المقدم للدائرة (كملخص الأدلة لحماية هوية الشاهد).",
    explanationEn: "Concise abstract of evidence, facts, or decisions under Article 68(5)."
  },
  family: {
    en: "Family / Families",
    ar: "أسرة / أسرته / عائلة / أسر",
    explanationAr: "أفراد أسرة الضحية أو الشاهد أو المحتجز المشمولون بالحماية أو جبر الضرر أو الزيارة.",
    explanationEn: "Relatives of a victim, witness, or detained person entitled to protection or reparations."
  },
  communicate: {
    en: "Communicate / Communicated",
    ar: "يتواصل / يبلّغ / إبلاغ / أُبلغ",
    explanationAr: "نقل المعلومات أو القرارات رسمياً إلى الأطراف أو الدول أو تواصل المحتجز مع محاميه.",
    explanationEn: "To transmit official notices or converse confidentially with counsel."
  },
  known: {
    en: "Known",
    ar: "معروف / معلوم",
    explanationAr: "ما ثبت العلم به من وقائع أو هويات أو أماكن.",
    explanationEn: "Established or recognized within the knowledge of a party or Chamber."
  },
  allow: {
    en: "Allow / Allowed / Allowance",
    ar: "يسمح / السماح / مسموح / بدلات",
    explanationAr: "الإذن القضائي بمباشرة إجراء، أو البدلات المالية المقررة.",
    explanationEn: "To permit procedurally, or financial allowances granted under regulations."
  },
  injury: {
    en: "Injury (Serious bodily or mental injury)",
    ar: "أذى / إصابة / ضرر جسدي",
    explanationAr: "الأذى الجسدي أو العقلي الجسيم المكون للركن المادي في جرائم الإبادة والحرب.",
    explanationEn: "Physical or mental harm inflicted upon a victim."
  },
  action: {
    en: "Action / Actions",
    ar: "إجراء / عمل / دعوى / تصرف",
    explanationAr: "العمل القانوني أو الإجرائي أو التدبير المتخذ من قبل المحكمة أو الدولة.",
    explanationEn: "Legal step, measure, or conduct undertaken."
  },
  proprio: {
    en: "Proprio (Proprio motu)",
    ar: "من تلقاء نفسه / بمبادرة ذاتية (Proprio motu)",
    explanationAr: "مباشرة المدعي العام للتحقيق أو الدائرة للإجراء من تلقاء نفسها دون طلب خارجي (المادة 15).",
    explanationEn: "Acting on one's own initiative without a formal party request (Article 15)."
  },
  motu: {
    en: "Motu (Proprio motu)",
    ar: "بمبادرة ذاتية (من تلقاء النفس)",
    explanationAr: "جزء من المصطلح اللاتيني (proprio motu) الدال على المبادرة الذاتية للمدعي العام أو المحكمة.",
    explanationEn: "Part of 'proprio motu' (on one's own impulse/initiative)."
  },
  commencement: {
    en: "Commencement / Commence",
    ar: "بدء / البدء / الشروع / افتتاح",
    explanationAr: "بداية سريان التحقيق أو المحاكمة أو الميعاد القانوني.",
    explanationEn: "The formal beginning of an investigation, trial, or time period."
  },
  punishment: {
    en: "Punishment / Punished",
    ar: "عقاب / عقوبة / يُعاقب",
    explanationAr: "الجزاء الجنائي المقرر قانوناً لردع الجرائم الدولية وإنهاء الإفلات من العقاب.",
    explanationEn: "Penal sanction imposed for the commission of international crimes."
  },
  choose: {
    en: "Choose / Chosen / Choice",
    ar: "يختار / اختيار / اختياره / مختار",
    explanationAr: "حق المتهم أو الضحايا في اختيار الممثل القانوني، أو انتخاب القضاة والمسؤولين.",
    explanationEn: "Selection of counsel of one's own choosing or election to office."
  },
  area: {
    en: "Area / Areas",
    ar: "منطقة / مجال / نطاق",
    explanationAr: "النطاق الجغرافي أو المجال الموضوعي والمهني للاختصاص.",
    explanationEn: "Geographical zone or substantive field of competence."
  },
  less: {
    en: "Less (Not less than)",
    ar: "أقل / يقل / تقل",
    explanationAr: "تحديد الحد الأدنى الواجب مراعاته في المواعيد والنصاب القانوني.",
    explanationEn: "Lower in degree or quantity; used in 'not less than' for statutory minimums."
  },
  psychological: {
    en: "Psychological / Psychology",
    ar: "نفسي / النفسية / علم النفس",
    explanationAr: "الجوانب والدعم النفسي المقدم للضحايا والشهود المتضررين من الصدمات.",
    explanationEn: "Mental and emotional health support and assessment for trauma victims."
  },
  sanction: {
    en: "Sanction / Sanctions",
    ar: "جزاء / جزاءات / عقوبة تأديبية",
    explanationAr: "الجزاءات التأديبية أو الإجرائية التي توقع عند الإخلال بالقواعد أو سوء السلوك.",
    explanationEn: "Disciplinary or procedural penalties imposed for misconduct or non-compliance."
  },
  factors: {
    en: "Factors",
    ar: "عوامل / العوامل / اعتبارات",
    explanationAr: "الاعتبارات الموضوعية والشخصية التي تزنها المحكمة عند تقدير العقوبة أو الخطورة.",
    explanationEn: "Circumstances and considerations weighed by a Chamber in sentencing or gravity."
  },
  different: {
    en: "Different",
    ar: "مختلف / مغاير / متفاوت",
    explanationAr: "التمايز في الجنسيات أو النظم القانونية أو الأوصاف الجرمية.",
    explanationEn: "Distinct in nationality, legal system, or procedural posture."
  },
  supervision: {
    en: "Supervision",
    ar: "إشراف / الإشراف / رقابة",
    explanationAr: "رقابة المحكمة على إنفاذ أحكام السجن (المادة 106) أو إشراف الرؤساء الإداريين.",
    explanationEn: "Oversight by the Court over enforcement of sentences (Article 106) or administrative units."
  },
  completion: {
    en: "Completion / Complete",
    ar: "إتمام / استكمال / انتهاء / تام",
    explanationAr: "إنجاز التحقيق أو انتهاء إجراءات المحاكمة أو قضاء مدة العقوبة.",
    explanationEn: "Conclusion and fulfillment of a procedural phase, filing, or sentence."
  },
  statements: {
    en: "Statements / Statement",
    ar: "بيانات / إفادات / أقوال / مرافعات",
    explanationAr: "إفادات الشهود المكتوبة أو المسجلة، أو البيانات الافتتاحية والختامية للخصوم.",
    explanationEn: "Recorded witness accounts, declarations, or opening/closing submissions."
  },
  meet: {
    en: "Meet / Met / Meeting",
    ar: "يجتمع / اجتماع / يستوفي / استوفى",
    explanationAr: "انعقاد اجتماع رسمي، أو استيفاء الشروط والمعايير القانونية المطلوبة.",
    explanationEn: "To convene in session or satisfy statutory requirements."
  },
  proposal: {
    en: "Proposal / Proposals / Propose",
    ar: "اقتراح / مقترح / مقترحات / يقترح",
    explanationAr: "عرض تعديل قانوني أو إجرائي للنظر في اعتماده.",
    explanationEn: "Formal submission of an amendment, candidate, or procedural course of action."
  },
  operation: {
    en: "Operation / Operational",
    ar: "عملية / تشغيل / سريان / عمل",
    explanationAr: "العمليات الميدانية أو العسكرية، أو سريان النظام القانوني.",
    explanationEn: "Field/military activities or the functioning of a legal mechanism."
  },
  efficient: {
    en: "Efficient / Efficiency",
    ar: "فعّال / كفء / الكفاءة",
    explanationAr: "مبدأ الكفاءة والسرعة في إدارة الإجراءات القضائية والموارد المالية.",
    explanationEn: "Conducting judicial and administrative workflows without waste or delay."
  },
  connection: {
    en: "Connection (In connection with)",
    ar: "صلة / ارتباط / فيما يتصل بـ / يرتبط",
    explanationAr: "قيام رابطة موضوعية أو سببية بين الواقعة والجرائم الداخلة في اختصاص المحكمة.",
    explanationEn: "Substantive or causal nexus with a crime or proceeding."
  },
  consistent: {
    en: "Consistent (with)",
    ar: "متسق / يتفق مع / غير متعارض",
    explanationAr: "توافق الإجراء أو التفسير مع حقوق الإنسان المعترف بها دولياً ومع النظام الأساسي.",
    explanationEn: "In harmony and conformity with the Statute and internationally recognized human rights."
  },
  enforce: {
    en: "Enforce / Enforced",
    ar: "ينفذ / إنفاذ / قسري / القسري",
    explanationAr: "تنفيذ الأحكام القضائية جبراً، أو الأفعال القسرية (كالاختفاء القسري أو الحمل القسري).",
    explanationEn: "To execute judgments/orders, or coercive acts (e.g., enforced disappearance)."
  },
  common: {
    en: "Common (purpose / legal representative)",
    ar: "مشترك / المشترك / عام",
    explanationAr: "القصد المشترك للمساهمين في الجريمة (المادة 25) أو الممثل القانوني المشترك للضحايا.",
    explanationEn: "Shared among multiple persons, such as a common criminal purpose or common victim counsel."
  },
  continue: {
    en: "Continue / Continuation",
    ar: "يستمر / استمرار / يظل / تظل",
    explanationAr: "بقاء الالتزام القانوني أو التدبير القضائي سارياً.",
    explanationEn: "To remain in force or carry on a proceeding without interruption."
  },
  audio: {
    en: "Audio / Audio-visual",
    ar: "سمعي / صوتي / السمعي (المرئي)",
    explanationAr: "التسجيلات الصوتية أو البث السمعي المرئي لجلسات المحكمة وإفادات الشهود.",
    explanationEn: "Sound or audio-visual recording and transmission technology used in proceedings."
  },
  video: {
    en: "Video (link)",
    ar: "فيديو / مرئي (ربط مرئي ومسموع)",
    explanationAr: "تقنية الاتصال المرئي المباشر للإدلاء بالشهادة عن بُعد بموجب المادة 69(2).",
    explanationEn: "Live television or video-conference technology for remote testimony."
  },
  certain: {
    en: "Certain",
    ar: "معيّن / محدّد / بعض",
    explanationAr: "تخصيص فئة محددة من الوثائق أو الجرائم أو التدابير.",
    explanationEn: "Specific, designated, or particular."
  },
  seized: {
    en: "Seized (of a matter / property)",
    ar: "معروض عليها / وضع اليد / مضبوط",
    explanationAr: "اتصال الدائرة القضائية بالقضية قانوناً (seized of the case)، أو ضبط الممتلكات والأدلة.",
    explanationEn: "Having formal judicial cognizance of a matter, or confiscated/impounded property."
  },
  develop: {
    en: "Develop / Development",
    ar: "يضع / يطور / تطوير / إعداد",
    explanationAr: "إعداد السياسات والخطط الاستراتيجية أو النماذج والمعايير المهنية.",
    explanationEn: "To formulate policies, standards, or jurisprudence."
  },
  third: {
    en: "Third (State / party)",
    ar: "ثالث / الثالثة / الغير (دولة ثالثة)",
    explanationAr: "الدولة غير الطرف أو الطرف الثالث الذي لم يكن خصماً أصلياً في النزاع.",
    explanationEn: "A non-party State or third entity outside the principal parties."
  },
  second: {
    en: "Second",
    ar: "ثانٍ / الثاني / الثانية",
    explanationAr: "الترتيب العددي الثاني في الفقرات أو المراحل الإجرائية.",
    explanationEn: "Ordinal number following the first."
  },
  carry: {
    en: "Carry (out) / Carried",
    ar: "ينفذ / يضطلع بـ / يباشر",
    explanationAr: "النهوض بالمهام القضائية أو تنفيذ التحقيقات والأوامر.",
    explanationEn: "To execute, perform, or discharge duties and orders."
  },
  prosecute: {
    en: "Prosecute / Prosecuted / Prosecutorial",
    ar: "يقاضي / المقاضاة / مقاضاة / يحاكم",
    explanationAr: "مباشرة الدعوى الجنائية وملاحقة المتهمين أمام القضاء.",
    explanationEn: "To institute and conduct criminal proceedings against an alleged perpetrator."
  },
  privacy: {
    en: "Privacy",
    ar: "خصوصية / الخصوصية / حرمة الحياة الخاصة",
    explanationAr: "حق الضحايا والشهود والمتهمين في حماية سرية بياناتهم وحياتهم الخاصة.",
    explanationEn: "Protection of personal confidentiality and dignity under Article 68."
  },
  diplomatic: {
    en: "Diplomatic (channels / immunity)",
    ar: "دبلوماسي / الدبلوماسية",
    explanationAr: "القنوات الدبلوماسية المعتمدة للتواصل مع الدول، أو الحصانات الدبلوماسية (المادتان 27 و98).",
    explanationEn: "Official State communication channels or diplomatic immunities."
  },
  consular: {
    en: "Consular (assistance)",
    ar: "قنصلي / القنصلية",
    explanationAr: "الحق في التواصل مع الممثلين القنصليين أو إحالة الطلبات عبر القنوات القنصلية.",
    explanationEn: "Relating to consular officials and assistance to detained nationals."
  },
  agree: {
    en: "Agree / Agreed / Agreement",
    ar: "يتفق / المتفق / وافق / اتفاق",
    explanationAr: "تلاقي الإرادات بين الأطراف أو الدول والمحكمة على مسألة إجرائية أو وقائع غير متنازع عليها.",
    explanationEn: "Mutual consent or stipulation between parties or States."
  },
  keep: {
    en: "Keep / Kept",
    ar: "يحفظ / حفظ / يحتفظ / يُبقى",
    explanationAr: "حفظ السجلات والمحاضر والأدلة، أو إبقاء الشخص قيد الاحتجاز أو إطلاع الدائرة.",
    explanationEn: "To maintain records securely, retain in custody, or keep informed."
  },
  single: {
    en: "Single (Judge)",
    ar: "منفرد / المنفرد (القاضي المنفرد)",
    explanationAr: "القاضي المنفرد الذي يمارس مهام الدائرة التمهيدية بموجب المادة 57(2)(ب).",
    explanationEn: "A single judge exercising the functions of the Pre-Trial Chamber under Article 57."
  },
  then: {
    en: "Then",
    ar: "ثم / عندئذٍ / حينئذٍ",
    explanationAr: "ظرف يفيد الترتيب الزمني أو الإجرائي للخطوات القانونية.",
    explanationEn: "Subsequently or in that procedural event."
  },
  internal: {
    en: "Internal",
    ar: "داخلي / الداخلية",
    explanationAr: "القواعد الإدارية الداخلية أو النزاعات المسلحة غير ذات الطابع الدولي.",
    explanationEn: "Operating within an organ of the Court or within the territory of a single State."
  },
  intention: {
    en: "Intention / Intent",
    ar: "نية / قصد / عمد / العمد",
    explanationAr: "اتجاه الإرادة إلى ارتكاب السلوك أو إحداث النتيجة الجرمية (المادة 30).",
    explanationEn: "Mental determination to engage in conduct or cause a consequence."
  },
  care: {
    en: "Care (Medical care / Duty of care)",
    ar: "رعاية / الرعاية / عناية / العناية",
    explanationAr: "الرعاية الطبية والنفسية المكفولة للمحتجزين والضحايا، أو واجب العناية المهنية.",
    explanationEn: "Medical/welfare attention provided to detainees and victims, or standard of diligence."
  },
  officers: {
    en: "Officers / Officer",
    ar: "موظفون / ضباط / مسؤولو الأمن",
    explanationAr: "الموظفون الرسميون أو ضباط الأمن والحراسة التابعون للمحكمة.",
    explanationEn: "Authorized officials, registry staff, or custody/security personnel."
  },
  suspension: {
    en: "Suspension / Suspend / Suspended / Suspensive",
    ar: "وقف / الوقف / تعليق / يوقف / أثر واقف",
    explanationAr: "وقف سريان الإجراء أو العقوبة مؤقتاً، أو الأثر الواقف للاستئناف (المادة 82).",
    explanationEn: "Temporary halting of a proceeding/period, or suspensive effect of an appeal."
  },
  advance: {
    en: "Advance / Advanced",
    ar: "مسبقاً / سلفاً / متقدم",
    explanationAr: "الإخطار أو الكشف المسبق قبل انعقاد الجلسة بوقت كافٍ.",
    explanationEn: "Prior to a scheduled procedural event or deadline."
  },
  new: {
    en: "New / Newly",
    ar: "جديد / الجديدة / مستجد",
    explanationAr: "الوقائع أو الأدلة الجديدة التي تكتشف بعد الحكم وتبرر التماس إعادة النظر (المادة 84).",
    explanationEn: "Newly discovered facts or evidence under Article 84 (Revision)."
  },
  raise: {
    en: "Raise / Raised",
    ar: "يثير / يدفع بـ / يرفع / المرفوعة",
    explanationAr: "إثارة مسألة قانونية أو دفع شكلي أو موضوعي أمام الدائرة.",
    explanationEn: "To bring a legal issue, challenge, or objection before a Chamber."
  },
  unavailable: {
    en: "Unavailable / Availability",
    ar: "غير متاح / تعذّر / توافر",
    explanationAr: "عدم توفر الشاهد للحضور أو انهيار النظام القضائي الوطني وعدم توافره (المادة 17).",
    explanationEn: "Inability of a witness to attend or unavailability of a national judicial system."
  },
  speak: {
    en: "Speak / Speaks",
    ar: "يتحدث / يتكلم / النطق",
    explanationAr: "إجادة اللغة وفهمها والتحدث بها بطلاقة (حق المتهم بموجب المادة 67).",
    explanationEn: "Ability to converse in and understand a language fully under Article 67."
  },
  restrictions: {
    en: "Restrictions / Restriction",
    ar: "القيود / قيود / تقييد",
    explanationAr: "الضوابط والقيود المفروضة على الإفصاح أو الاتصالات لحماية الأمن وسير العدالة.",
    explanationEn: "Limitations imposed on disclosure, communication, or liberty."
  },
  sent: {
    en: "Sent / Send / Sending",
    ar: "أُرسل / المرسلة / يرسل / إرسال",
    explanationAr: "توجيه وإرسال المراسلات والإخطارات القضائية.",
    explanationEn: "Dispatched or transmitted officially."
  },
  exceptional: {
    en: "Exceptional (circumstances)",
    ar: "استثنائي / استثنائية (ظروف استثنائية)",
    explanationAr: "الحالات غير العادية التي تبرر الخروج عن القاعدة العامة بقرار مسبب من الدائرة.",
    explanationEn: "Extraordinary grounds justifying a departure from standard procedure."
  },
  good: {
    en: "Good (Good faith)",
    ar: "حسن (حسن النية / بحسن نية)",
    explanationAr: "مبدأ حسن النية في تفسير المعاهدات ومباشرة الإجراءات القانونية.",
    explanationEn: "Bona fide standard in treaty interpretation and legal representation."
  },
  analysis: {
    en: "Analysis",
    ar: "تحليل / التحليل",
    explanationAr: "الفحص والتحليل الجنائي والقانوني للمعلومات والأدلة في مكتب المدعي العام.",
    explanationEn: "Systematic examination of information, patterns, and evidence."
  },
  appellant: {
    en: "Appellant",
    ar: "المستأنف / الطاعن",
    explanationAr: "الطرف الذي يرفع طعناً بالاستئناف أمام دائرة الاستئناف.",
    explanationEn: "A party filing an appeal before the Appeals Chamber."
  },
  consolidated: {
    en: "Consolidated",
    ar: "موحد / الموحد / الموحدة / مدمج",
    explanationAr: "دمج وتوحيد الطلبات أو اللوائح أو القضايا المرتبطة.",
    explanationEn: "Combined or merged into a single unified filing or proceeding."
  },
  aid: {
    en: "Aid (Legal aid / Aid and abet)",
    ar: "مساعدة / المساعدة القضائية / عون",
    explanationAr: "المساعدة القانونية المجانية للمتهم أو الضحايا، أو تقديم العون والمساعدة في ارتكاب الجريمة (المادة 25).",
    explanationEn: "Financial legal assistance from the Registry, or aiding and abetting a crime (Article 25)."
  },
  hypothesis: {
    en: "Hypothesis / Hypotheses",
    ar: "فرضية / فرضيات (التحقيق)",
    explanationAr: "الفرضيات الوقائعية والقانونية التي يختبرها فريق التحقيق بمكتب المدعي العام.",
    explanationEn: "Case theories and factual propositions tested objectively during investigations."
  },
  life: {
    en: "Life (Life imprisonment / Right to life)",
    ar: "الحياة / المؤبد (السجن المؤبد) / الأرواح",
    explanationAr: "الحق في الحياة، أو عقوبة السجن المؤبد في حالات الخطور القصوى (المادة 77).",
    explanationEn: "Protected human life, or the penalty of life imprisonment under Article 77(1)(b)."
  },
  bring: {
    en: "Bring / Brought",
    ar: "يجلب / يحضر / يعرض / يقدم (للمحاكمة)",
    explanationAr: "إحضار الشخص المقبوض عليه أمام السلطة القضائية أو تقديم الجناة للعدالة.",
    explanationEn: "To present a person before a judicial authority or initiate a claim."
  },
  geneva: {
    en: "Geneva (Conventions)",
    ar: "جنيف (اتفاقيات جنيف لعام 1949)",
    explanationAr: "اتفاقيات جنيف الأربع المؤرخة 12 آب/أغسطس 1949 التي تشكل انتهاكاتها الجسيمة جرائم حرب (المادة 8).",
    explanationEn: "The four Geneva Conventions of 12 August 1949 governing armed conflict under Article 8."
  },
  rome: {
    en: "Rome (Rome Statute)",
    ar: "روما (نظام روما الأساسي)",
    explanationAr: "مدينة روما التي اعتُمد فيها النظام الأساسي للمحكمة الجنائية الدولية في 17 تموز/يوليه 1998.",
    explanationEn: "City where the Statute of the International Criminal Court was adopted on 17 July 1998."
  },
  kampala: {
    en: "Kampala",
    ar: "كمبالا (تعديلات كمبالا بشأن جريمة العدوان)",
    explanationAr: "مؤتمر كمبالا الاستعراضي لعام 2010 الذي اعتمد تعريف جريمة العدوان وشروط ممارسة الاختصاص.",
    explanationEn: "Site of the 2010 Review Conference adopting the Crime of Aggression amendments."
  },
  title: {
    en: "Title",
    ar: "عنوان / صفة / لقب / باب",
    explanationAr: "عنوان المادة أو الوثيقة أو الصفة الرسمية للمنصب.",
    explanationEn: "Heading of a legal provision/filing or official designation."
  },
  addition: {
    en: "Addition (In addition to)",
    ar: "إضافة / بالإضافة إلى / علاوة على",
    explanationAr: "اقتران حكم أو تدبير أو عقوبة إضافية (كالغرامة بالإضافة إلى السجن).",
    explanationEn: "Supplemental measure or penalty alongside a primary provision."
  },
  composed: {
    en: "Composed (of) / Composition / Comprised",
    ar: "مؤلف من / تتألف / تشكيل / تكوين",
    explanationAr: "التشكيل القانوني لأعضاء الدوائر القضائية أو هيئات المحكمة.",
    explanationEn: "The structural membership and judicial bench of an organ or Chamber."
  },
  separate: {
    en: "Separate / Separately",
    ar: "منفصل / على حدة / مستقل (رأي منفصل)",
    explanationAr: "الفصل في المسائل أو المحاكمات بشكل مستقل، أو الرأي القضائي المنفصل للقاضي.",
    explanationEn: "Distinct and apart, such as separate trials or a judge's separate opinion."
  },
  opinion: {
    en: "Opinion / Opinions",
    ar: "رأي / الرأي / آراء",
    explanationAr: "الرأي القضائي (الأغلبية أو الأقلية أو المنفصل) أو رأي الخبير الفني.",
    explanationEn: "Judicial determination, dissenting/separate opinion, or expert conclusion."
  },
  immediate: {
    en: "Immediate / Immediately",
    ar: "فوري / فوراً / في الحال / المباشر",
    explanationAr: "وجوب التنفيذ الفوري دون أي إبطاء (كالإفراج الفوري أو الإخطار الفوري).",
    explanationEn: "Instantaneous action required without delay."
  },
  pending: {
    en: "Pending",
    ar: "ريثما / بانتظار / معلق / قيد النظر",
    explanationAr: "بقاء الأمر قائماً إلى حين الفصل في مسألة قضائية (مثل ريثما يُبت في الطلب).",
    explanationEn: "Awaiting judicial resolution or currently under consideration."
  },
  reduction: {
    en: "Reduction / Reduce",
    ar: "تخفيض / إنقاص / يخفض (تخفيض العقوبة)",
    explanationAr: "إعادة النظر في الحكم لتخفيض العقوبة بعد قضاء ثلثي مدتها بموجب المادة 110.",
    explanationEn: "Review by the Appeals Chamber for reduction of sentence under Article 110."
  },
  pronounced: {
    en: "Pronounced / Pronouncement",
    ar: "النطق (بالحكم أو العقوبة) / منطوق",
    explanationAr: "إعلان الحكم أو العقوبة في جلسة علنية بموجب المادتين 74 و76.",
    explanationEn: "Formal delivery of a judgment or sentence in open court."
  },
  payment: {
    en: "Payment / Pay",
    ar: "دفع / سداد / يدفع",
    explanationAr: "تسديد الغرامات أو الاشتراكات المالية أو مبالغ المساعدة القانونية.",
    explanationEn: "Financial disbursement or settlement of fines, contributions, or fees."
  },
  channels: {
    en: "Channels / Channel",
    ar: "قنوات / قناة (الاتصال)",
    explanationAr: "القنوات الرسمية أو الدبلوماسية المعتمدة لإحالة طلبات التعاون مع الدول (المادة 87).",
    explanationEn: "Designated diplomatic or official pathways for transmitting requests."
  },
  remain: {
    en: "Remain",
    ar: "يبقى / يظل / تظل",
    explanationAr: "استمرار المركز القانوني أو بقاء الشخص قيد الاحتجاز أو بقاء النص نافذاً.",
    explanationEn: "To continue in a specified legal state or custody."
  },
  investigators: {
    en: "Investigators / Investigator / Investigative",
    ar: "المحققون / المحقق / تحقيقي",
    explanationAr: "أعضاء فريق التحقيق بمكتب المدعي العام أو المختصون بجمع الأدلة.",
    explanationEn: "Officials conducting field inquiries and evidence collection."
  },
  found: {
    en: "Found / Finding / Findings",
    ar: "ثبت / استنتاج / النتائج / يجد",
    explanationAr: "ما تنتهي إليه الدائرة القضائية من استنتاجات واقعية وقانونية (Judicial findings).",
    explanationEn: "Factual or legal determinations reached by a Chamber."
  },
  constitute: {
    en: "Constitute / Constituted / Constitutes",
    ar: "يشكل / تشكل / يؤلف",
    explanationAr: "تكوين الأفعال المادية لأركان جريمة دولية، أو تشكيل الدائرة القضائية.",
    explanationEn: "To amount in law to a crime or to form a judicial body."
  },
  occurs: {
    en: "Occurs / Occurred / Occurrence",
    ar: "يحدث / وقع / حدوث / بوقوع",
    explanationAr: "تحقق الواقعة المادية أو الظرف الإجرائي.",
    explanationEn: "Takes place or comes to pass in fact."
  },
  likely: {
    en: "Likely",
    ar: "مرجح / يحتمل / من شأنه",
    explanationAr: "معيار الاحتمال الراجح لترتب أثر معين (كتعريض الأمن أو الشهود للخطر).",
    explanationEn: "Probable or reasonably expected to result."
  },
  relevance: {
    en: "Relevance / Relevant",
    ar: "الصلة بالموضوع / ذو صلة / المتعلقة",
    explanationAr: "معيار تعلق الدليل بالوقائع محل الفصل لتقدير مقبوليته بموجب المادة 69(4).",
    explanationEn: "Probative connection of evidence to a fact in issue under Article 69(4)."
  },
  introduction: {
    en: "Introduction / Introduce / Introduced",
    ar: "مقدمة / تقديم (الأدلة) / عرض",
    explanationAr: "تقديم الأدلة في المحاكمة أو المدخل العام لأركان الجرائم.",
    explanationEn: "Formal presentation of evidence or preliminary explanatory section."
  },
  cannot: {
    en: "Cannot",
    ar: "لا يمكن / يتعذر / لا يجوز",
    explanationAr: "استحالة مادية أو مانع قانوني يحول دون اتخاذ الإجراء.",
    explanationEn: "Legal prohibition or practical impossibility."
  },
  practicable: {
    en: "Practicable",
    ar: "عملياً / مستطاع (بأقرب وقت مستطاع)",
    explanationAr: "ما يمكن تنفيذه عملياً في ظل الظروف القائمة.",
    explanationEn: "Reasonably capable of being carried out in practice."
  },
  description: {
    en: "Description",
    ar: "وصف / توصيف / بيان",
    explanationAr: "البيان التفصيلي للوقائع والتهم والأدلة.",
    explanationEn: "Detailed account of facts, charges, or property."
  },
  ask: {
    en: "Ask",
    ar: "يسأل / يطلب / يستجوب",
    explanationAr: "توجيه الأسئلة للشهود والخبراء أو تقديم طلب للدائرة.",
    explanationEn: "To put questions to a witness or request a Chamber."
  },
  maintenance: {
    en: "Maintenance",
    ar: "حفظ / صيانة / الحفاظ على",
    explanationAr: "الحفاظ على النظام في الجلسة أو صيانة السجلات والمرافق.",
    explanationEn: "Upkeep of records, order in court, or international peace."
  },
  absence: {
    en: "Absence / In absentia",
    ar: "غياب / في حال غياب / تخلّف",
    explanationAr: "عدم حضور القاضي أو الشاهد أو المتهم في الجلسة.",
    explanationEn: "Non-attendance or unavailability of a person or provision."
  },
  designate: {
    en: "Designate",
    ar: "يعيّن / يحدد / يسمي",
    explanationAr: "اختيار قاضٍ أو دولة أو جهة لمباشرة مهمة محددة.",
    explanationEn: "To officially name or assign for a specific role."
  },
  distribution: {
    en: "Distribution",
    ar: "توزيع / تعميم",
    explanationAr: "تعميم الوثائق والمذكرات على القضاة والأطراف والمشاركين.",
    explanationEn: "Circulation of filings, records, or funds."
  },
  programme: {
    en: "Programme / Program / Programmes",
    ar: "برنامج / برامج",
    explanationAr: "برامج حماية الشهود أو برامج التوعية والتدريب والمساعدة.",
    explanationEn: "Structured operational plans, outreach, or protection schemes."
  },
  inflicted: {
    en: "Inflicted / Inflicting",
    ar: "أُلحق / إلحاق / إيقاع (الألم أو الضرر)",
    explanationAr: "إيقاع الألم الشديد أو الأذى الجسدي أو العقلي بالضحية.",
    explanationEn: "Caused or imposed pain, injury, or destructive conditions."
  },
  pain: {
    en: "Pain",
    ar: "ألم / الألم",
    explanationAr: "الألم الشديد الجسدي أو العقلي الذي يشكل ركناً في جريمة التعذيب (المادة 7).",
    explanationEn: "Severe physical or mental torment under the definition of torture."
  },
  hostilities: {
    en: "Hostilities",
    ar: "الأعمال العدائية / القتال",
    explanationAr: "العمليات القتالية الفعلية في النزاعات المسلحة الدولية أو غير الدولية.",
    explanationEn: "Active combat operations during an armed conflict."
  },
  personnel: {
    en: "Personnel",
    ar: "أفراد / الموظفون / العاملون",
    explanationAr: "موظفو المحكمة، أو أفراد بعثات المساعدة الإنسانية وحفظ السلام المحميون.",
    explanationEn: "Staff members of the Court, humanitarian missions, or peacekeeping forces."
  },
  regularly: {
    en: "Regularly / Regular",
    ar: "بانتظام / منتظم / دوري / عادي",
    explanationAr: "القيام بالإجراء بصورة دورية ومنتظمة، أو الدورات العادية للجمعية.",
    explanationEn: "At consistent intervals or in ordinary course."
  },
  recordings: {
    en: "Recordings / Recording",
    ar: "التسجيلات / تسجيل",
    explanationAr: "التسجيلات الصوتية والمرئية الرسمية للتحقيقات والجلسات.",
    explanationEn: "Audio or video captures of interviews and court sessions."
  },
  broadcast: {
    en: "Broadcast / Broadcasting",
    ar: "بث / البث / إذاعة",
    explanationAr: "البث العلني للجلسات القضائية مع مراعاة التأخير الزمني لحماية المعلومات السرية.",
    explanationEn: "Public transmission of proceedings outside the courtroom."
  },
  relief: {
    en: "Relief",
    ar: "إغاثة / إعفاء / انتصاف قضائي",
    explanationAr: "الإغاثة الإنسانية للمدنيين، أو الانتصاف القضائي الملتمس، أو الإعفاء من المهام.",
    explanationEn: "Humanitarian aid, judicial remedy sought, or release from duties."
  },
  rely: {
    en: "Rely / Relied",
    ar: "يستند / استند / يعوّل على",
    explanationAr: "الاعتماد على دليل أو دفع قانوني أمام الدائرة.",
    explanationEn: "To depend upon specific evidence or legal authority."
  },
  seal: {
    en: "Seal / Under seal",
    ar: "ختم / الختم / في مظروف مختوم (سري)",
    explanationAr: "الختم الرسمي للمحكمة، أو إيداع الوثائق وأوامر القبض بصورة سرية مختومة (Under seal).",
    explanationEn: "Official emblem of the Court, or confidential filing restricted from public view."
  },
  secure: {
    en: "Secure",
    ar: "يؤمّن / آمن / ضمان",
    explanationAr: "تأمين سلامة الأدلة والشهود أو ضمان حضور الشخص.",
    explanationEn: "To safeguard or ensure protection and compliance."
  },
  format: {
    en: "Format",
    ar: "صيغة / تنسيق / نسق",
    explanationAr: "الهيئة الفنية أو الشكلية المعتمدة لإعداد الوثائق والسجلات.",
    explanationEn: "Technical or structural layout of filings and data."
  },
  field: {
    en: "Field",
    ar: "ميدان / الميداني / مجال",
    explanationAr: "العمليات والمكاتب الميدانية للمحكمة في دول الحالة، أو مجال الاختصاص المهني.",
    explanationEn: "In-country operational locations or specialized domain of expertise."
  },
  mail: {
    en: "Mail",
    ar: "بريد / البريد / مراسلات",
    explanationAr: "المراسلات البريدية الرسمية أو الخاصة بالمحتجزين.",
    explanationEn: "Postal correspondence."
  },
  via: {
    en: "Via",
    ar: "عبر / عن طريق / بواسطة",
    explanationAr: "الوسيلة أو القناة التي يتم من خلالها الإحالة أو الاتصال.",
    explanationEn: "By way of or through a specified medium or channel."
  },
  prohibited: {
    en: "Prohibited / Prohibition",
    ar: "محظور / ممنوع / حظر",
    explanationAr: "الأفعال أو الأسلحة أو الأساليب المحظورة بموجب القانون الدولي.",
    explanationEn: "Forbidden by the Rome Statute, Rules, or international law."
  },
  vwu: {
    en: "VWU (Victims and Witnesses Unit)",
    ar: "وحدة الضحايا والشهود (VWU)",
    explanationAr: "الوحدة المنشأة داخل قلم المحكمة بموجب المادة 43(6) لتوفير الحماية والدعم للشهود والضحايا.",
    explanationEn: "The Victims and Witnesses Unit established within the Registry under Article 43(6)."
  },
  enter: {
    en: "Enter (into force / an appearance)",
    ar: "يدخل (حيز النفاذ) / يبرم / يقيد",
    explanationAr: "دخول المعاهدة حيز النفاذ، أو إبرام اتفاق، أو دخول قاعة المحكمة.",
    explanationEn: "To come into legal force, conclude an agreement, or record formally."
  },
  destroy: {
    en: "Destroy / Destruction",
    ar: "يدمر / يهلك / إهلاك / تدمير",
    explanationAr: "قصد إهلاك الجماعة المحمية في جريمة الإبادة (المادة 6) أو تدمير الممتلكات في جرائم الحرب.",
    explanationEn: "Intent to annihilate a protected group (Article 6) or unlawful demolition of property."
  },
  temporary: {
    en: "Temporary / Temporarily",
    ar: "مؤقت / مؤقتاً / بصفة مؤقتة",
    explanationAr: "الإجراء أو النقل أو الإفراج المؤقت ريثما يزول السبب.",
    explanationEn: "Provisional and lasting for a limited time."
  },
  extension: {
    en: "Extension / Extend",
    ar: "تمديد / يمدد / امتداد",
    explanationAr: "مدّ المهلة الزمنية أو عدد الصفحات بإذن من الدائرة القضائية لسبب وجيه.",
    explanationEn: "Prolongation of a time limit or page limit granted upon showing good cause."
  },
  nothing: {
    en: "Nothing (in this Part / Statute)",
    ar: "ليس (في هذا الباب / النظام الأساسي) ما يخل",
    explanationAr: "صيغة تحفظية تشريعية تضمن عدم المساس بحقوق أو قواعد دولية قائمة.",
    explanationEn: "Saving clause ensuring a provision does not prejudice other established legal rules."
  },
  satisfy: {
    en: "Satisfy / Satisfied",
    ar: "يقتنع / يستوفي / تتحقق (المحكمة)",
    explanationAr: "اقتناع الدائرة القضائية بتوافر الشروط القانونية والأدلة الكافية.",
    explanationEn: "To convince a Chamber or fulfill a legal requirement."
  },
  equally: {
    en: "Equally / Equal",
    ar: "بالتساوي / على قدم المساواة / تتساوى (في الحجية)",
    explanationAr: "المساواة أمام القانون (المادة 21) أو تساوي النصوص اللغوية الستة في الحجية (المادة 128).",
    explanationEn: "Without discrimination, or having identical legal authenticity (Article 128)."
  },
  aspects: {
    en: "Aspects / Aspect",
    ar: "جوانب / الجوانب / وجه",
    explanationAr: "النواحي القانونية أو الإدارية أو غير القضائية (كإدارة قلم المحكمة للجوانب غير القضائية).",
    explanationEn: "Specific dimensions or features of a case or administration."
  },
  initial: {
    en: "Initial (appearance / proceedings)",
    ar: "أولي / ابتدائي / الأولى (الإجراءات الأولية)",
    explanationAr: "الإجراءات الأولية والمثول الأول للشخص أمام الدائرة التمهيدية (المادة 60).",
    explanationEn: "First procedural steps upon surrender or voluntary appearance."
  },
  throughout: {
    en: "Throughout",
    ar: "طوال / في جميع مراحل",
    explanationAr: "استمرار الحق أو الالتزام في كافة مراحل الإجراءات القضائية.",
    explanationEn: "During the entirety of the proceedings."
  },
  delivery: {
    en: "Delivery / Deliver / Delivered / Delivering",
    ar: "تسليم / النطق بالحكم / تبليغ",
    explanationAr: "إصدار وتلاوة القرار القضائي، أو تسليم المراسلات والأشخاص.",
    explanationEn: "Formal pronouncement of a decision or physical handover."
  },
  institutional: {
    en: "Institutional",
    ar: "مؤسسي / المؤسسية",
    explanationAr: "ما يتعلق بالبنية التنظيمية والمؤسسية للمحكمة الجنائية الدولية.",
    explanationEn: "Relating to the organizational structure and governance of the Court."
  },
  perform: {
    en: "Perform / Performing",
    ar: "يؤدي / يمارس / أداء (المهام)",
    explanationAr: "القيام بالواجبات والاختصاصات الوظيفية والقضائية.",
    explanationEn: "To carry out official duties and functions."
  },
  database: {
    en: "Database",
    ar: "قاعدة بيانات",
    explanationAr: "النظم الإلكترونية لحفظ وإدارة الأدلة والسجلات القضائية.",
    explanationEn: "Structured electronic repository of records and evidence."
  },
  disabilities: {
    en: "Disabilities / Disability",
    ar: "الإعاقة / ذوو الإعاقة",
    explanationAr: "مراعاة الاحتياجات الخاصة للأشخاص ذوي الإعاقة في الإجراءات والاحتجاز.",
    explanationEn: "Physical or mental impairments requiring special procedural accommodations."
  },
  social: {
    en: "Social",
    ar: "اجتماعي / الاجتماعي",
    explanationAr: "الأوضاع الاجتماعية والثقافية للضحايا والمحتجزين.",
    explanationEn: "Relating to community, welfare, and societal context."
  },
  attorney: {
    en: "Attorney / Counsel",
    ar: "محامٍ / وكيل قانوني",
    explanationAr: "المحامي المعتمد للدفاع أو تمثيل الضحايا.",
    explanationEn: "Qualified legal practitioner representing a party."
  },
  unfounded: {
    en: "Unfounded",
    ar: "غير مبرر / لا أساس له من الصحة",
    explanationAr: "الادعاء أو الطلب المفتقر إلى الأساس القانوني أو الواقعي (المادة 85).",
    explanationEn: "Lacking factual or legal merit."
  },
  understood: {
    en: "Understood / Understand",
    ar: "مفهوم / يفهم / يدرك",
    explanationAr: "إدراك المتهم التام للغة الإجراءات وطبيعة التهم الموجهة إليه (المادة 67).",
    explanationEn: "Fully comprehended by the accused or party."
  },
  thereunder: {
    en: "Thereunder",
    ar: "بموجبه / بمقتضاه",
    explanationAr: "ما يصدر أو يُتخذ استناداً إلى النص القانوني المشار إليه.",
    explanationEn: "Under the authority of the aforementioned legal provision."
  },
  value: {
    en: "Value (Probative value)",
    ar: "قيمة (القيمة الإثباتية / الحجية)",
    explanationAr: "وزن الدليل وقيمته الإقناعية في إثبات الوقائع أمام الدائرة (المادة 69).",
    explanationEn: "Evidentiary weight and probative force under Article 69(4)."
  },
  belonged: {
    en: "Belonged / Belong",
    ar: "ينتمي / انتمى / تابع لـ",
    explanationAr: "انتماء الشخص أو الأعيان إلى جماعة محمية أو طرف في النزاع.",
    explanationEn: "Affiliated with or owned by a protected group or party."
  },
  direction: {
    en: "Direction / Directions / Directing",
    ar: "توجيه / إشراف / إدارة (توجيه الهجمات)",
    explanationAr: "توجيه الدائرة لسير المحاكمة (المادة 64) أو جريمة توجيه الهجمات عمداً ضد المدنيين.",
    explanationEn: "Judicial management of proceedings or the act of directing attacks."
  },
  reliable: {
    en: "Reliable / Reliability",
    ar: "موثوق / الموثوقية / يوثق به",
    explanationAr: "معيار مصداقية وموثوقية المعلومات والأدلة والشهود.",
    explanationEn: "Trustworthy and credible in evidentiary assessment."
  },
  conferences: {
    en: "Conferences / Conference",
    ar: "جلسات التشاور / مؤتمر (المؤتمر الاستعراضي)",
    explanationAr: "جلسات بحث الحالة الإجرائية أو المؤتمر الاستعراضي للدول الأطراف.",
    explanationEn: "Procedural status conferences or the Review Conference of States Parties."
  },
  arguments: {
    en: "Arguments / Argument",
    ar: "حجج / دفوع / مرافعات",
    explanationAr: "الأسانيد والحجج القانونية التي يعرضها الخصوم تأييداً لطلباتهم.",
    explanationEn: "Legal reasoning and submissions advanced by parties."
  },
  wishes: {
    en: "Wishes / Wish",
    ar: "يرغب / رغبة",
    explanationAr: "التعبير عن إرادة الشخص أو الدولة في ممارسة خيار إجرائي.",
    explanationEn: "Desires or elects to exercise a procedural option."
  },
  indicate: {
    en: "Indicate / Indicated / Indicating",
    ar: "يبين / يشير / يوضح",
    explanationAr: "تحديد وبيان الأسباب أو الوقائع في القرار أو الطلب.",
    explanationEn: "To specify, state, or point out formally."
  },
  length: {
    en: "Length",
    ar: "مدة / طول / حجم",
    explanationAr: "طول الوثائق المودعة أو مدة الاحتجاز أو العقوبة.",
    explanationEn: "Duration of time or page/word extent of filings."
  },
  killed: {
    en: "Killed / Kill / Killing",
    ar: "قُتل / قتل / إزهاق الروح",
    explanationAr: "الركن المادي لجريمة القتل العمد في الإبادة الجماعية والجرائم ضد الإنسانية وجرائم الحرب.",
    explanationEn: "Causing the death of one or more persons."
  },
  clearly: {
    en: "Clearly / Clear",
    ar: "بوضوح / واضح / جليّ",
    explanationAr: "البيان الصريح والواضح الذي ينفي اللبس أو عدم المشروعية الظاهرة (المادة 33).",
    explanationEn: "Manifestly and unambiguously."
  },
  journal: {
    en: "Journal (Official Journal)",
    ar: "الجريدة الرسمية (للمحكمة)",
    explanationAr: "النشرة الرسمية للمحكمة التي تنشر فيها النصوص القانونية والقرارات الرئيسية.",
    explanationEn: "The Official Journal of the Court publishing texts and decisions."
  },
  hours: {
    en: "Hours / Hour",
    ar: "ساعات / ساعة",
    explanationAr: "المهل الزمنية المقيسة بالساعات أو ساعات العمل والزيارة.",
    explanationEn: "Time periods measured in hours."
  },
  classification: {
    en: "Classification / Classified",
    ar: "تصنيف / مصنف (درجة السرية)",
    explanationAr: "تصنيف مستوى سرية الوثائق (علني، سري، سري للغاية) وإعادة تصنيفها.",
    explanationEn: "Security and confidentiality level assigned to documents and filings."
  },
  fall: {
    en: "Fall (within jurisdiction)",
    ar: "يدخل (في اختصاص المحكمة) / يقع",
    explanationAr: "شمول الواقعة أو الجريمة بولاية المحكمة القضائية.",
    explanationEn: "To come within the scope of the Court's jurisdiction."
  },
  spiritual: {
    en: "Spiritual",
    ar: "روحي / ديني",
    explanationAr: "المساعدة الروحية والدينية المكفولة للأشخاص المحتجزين.",
    explanationEn: "Relating to religious and pastoral care for detained persons."
  },
  monitoring: {
    en: "Monitoring / Monitor",
    ar: "مراقبة / رصد / متابعة",
    explanationAr: "متابعة ورصد الأوضاع أو الاتصالات أو تنفيذ الأحكام.",
    explanationEn: "Continuous observation and review of compliance or conditions."
  },
  vault: {
    en: "Vault (Evidence vault)",
    ar: "خزينة حفظ الأدلة / مستودع آمن",
    explanationAr: "المكان المؤمّن لحفظ الأدلة المادية والمستندات الأصلية.",
    explanationEn: "High-security storage facility for physical and documentary evidence."
  },
  call: {
    en: "Call / Calls / Called",
    ar: "يستدعي / يدعو / مكالمات / دعوة",
    explanationAr: "استدعاء الشهود للإدلاء بالشهادة، أو المكالمات الهاتفية للمحتجزين.",
    explanationEn: "To summon a witness to testify, or telephone communications."
  },
  sit: {
    en: "Sit / Sitting",
    ar: "ينعقد / يجلس (في هيئة قضائية)",
    explanationAr: "انعقاد المحكمة أو القضاة لنظر القضية.",
    explanationEn: "To hold court sessions as a judicial bench."
  },
  calculated: {
    en: "Calculated / Calculation",
    ar: "يُحسب / حساب / يُقدر (يُراد به)",
    explanationAr: "حساب المدد الزمنية، أو فرض ظروف معيشية يراد بها إهلاك الجماعة (المادة 6).",
    explanationEn: "Computation of time limits, or deliberately designed to bring about destruction."
  },
  scale: {
    en: "Scale (Large-scale / Scale of assessments)",
    ar: "نطاق (واسع النطاق) / جدول الأنصبة",
    explanationAr: "نطاق ارتكاب الجرائم، أو جدول أنصبة الاشتراكات المالية للدول الأطراف (المادة 117).",
    explanationEn: "Magnitude of crime commission or scale of financial assessments."
  },
  arising: {
    en: "Arising / Arise",
    ar: "الناشئة / ينشأ / يتفرع عن",
    explanationAr: "المسائل أو الالتزامات المتولدة عن تطبيق النظام الأساسي أو القضية.",
    explanationEn: "Originating or resulting from a legal situation or proceeding."
  },
  cover: {
    en: "Cover / Covered",
    ar: "يشمل / يغطي / مشمول",
    explanationAr: "شمول النص القانوني أو الميزانية أو التأمين لبنود محددة.",
    explanationEn: "To encompass or provide for within scope."
  },
  unique: {
    en: "Unique (investigative opportunity)",
    ar: "فريد (فرصة فريدة للتحقيق)",
    explanationAr: "الفرصة التحقيقية الفريدة التي قد لا تتوافر لاحقاً لإثبات الشهادة بموجب المادة 56.",
    explanationEn: "A non-repeatable opportunity to take testimony or examine evidence under Article 56."
  },
  refusal: {
    en: "Refusal / Refuse",
    ar: "رفض / يرفض / امتناع",
    explanationAr: "الامتناع عن تنفيذ طلب أو الإدلاء بالشهادة أو رفض الطلب القضائي.",
    explanationEn: "Declining to comply with a request or order, or dismissal of an application."
  },
  borne: {
    en: "Borne (Costs borne by)",
    ar: "يتحملها / تُتحمل (التكاليف)",
    explanationAr: "تحديد الجهة التي تتحمل النفقات والتكاليف المالية (المادة 100).",
    explanationEn: "Assumed or paid for (e.g., ordinary costs of execution under Article 100)."
  },
  prison: {
    en: "Prison",
    ar: "سجن / المؤسسة العقابية",
    explanationAr: "المنشأة العقابية التي تُقضى فيها عقوبة السجن في دولة الإنفاذ.",
    explanationEn: "Penitentiary facility where a sentence of imprisonment is served."
  },
  signed: {
    en: "Signed / Signature",
    ar: "موقّع / التوقيع / يوقّع",
    explanationAr: "التوقيع الرسمي على المعاهدة أو القرارات القضائية أو المحاضر.",
    explanationEn: "Authenticated by formal signature."
  },
  storage: {
    en: "Storage / Stored",
    ar: "تخزين / حفظ / مخزّن",
    explanationAr: "حفظ وتخزين الأدلة والبيانات بطريقة آمنة.",
    explanationEn: "Secure retention of evidentiary materials and digital files."
  },
  inherent: {
    en: "Inherent (powers)",
    ar: "أصيل / متأصل / ملازم (سلطات أصيلة)",
    explanationAr: "الاختصاصات والسلطات القضائية الأصيلة الملازمة لوظيفة المحكمة.",
    explanationEn: "Intrinsic judicial authority necessary to safeguard the integrity of proceedings."
  },
  elderly: {
    en: "Elderly",
    ar: "المسنون / والمسنين / كبار السن",
    explanationAr: "فئة كبار السن المشمولة بمعايير الحماية والرعاية الخاصة للضحايا والشهود.",
    explanationEn: "Older persons entitled to special protective and support considerations."
  },
  retain: {
    en: "Retain / Retained / Retention",
    ar: "يحتفظ / الاحتفاظ / استبقاء / يوكّل",
    explanationAr: "الاحتفاظ بالسجلات أو الاختصاص أو توكيل محامٍ.",
    explanationEn: "To keep in custody/archive or engage legal counsel."
  },
  indirectly: {
    en: "Indirectly / Indirect",
    ar: "بصورة غير مباشرة / غير مباشر",
    explanationAr: "ارتكاب الفعل أو تحقيق العائدات الجرمية بالواسطة أو بطريق غير مباشر.",
    explanationEn: "Through an intermediary or secondary causal link."
  },
  imposition: {
    en: "Imposition / Impose / Imposed",
    ar: "فرض / توقيع (العقوبة) / المفروضة",
    explanationAr: "الحكم بالعقوبة أو الغرامة أو فرض التدابير والقيود القانونية.",
    explanationEn: "Formal levying of a sentence, fine, or procedural obligation."
  },
  expeditious: {
    en: "Expeditious / Expeditiously",
    ar: "سريع / ناجز (محاكمة عادلة وسريعة)",
    explanationAr: "مبدأ سرعة الفصل في الإجراءات دون إبطاء غير مبرر (المادة 64(2)).",
    explanationEn: "Prompt and efficient conduct of proceedings without undue delay (Article 64)."
  },
  process: {
    en: "Process / Processes / Processing",
    ar: "عملية / إجراءات / معالجة",
    explanationAr: "سلسلة الإجراءات القانونية أو معالجة البيانات والطلبات.",
    explanationEn: "Course of judicial proceedings or systematic handling of data/filings."
  },
  believe: {
    en: "Believe / Belief",
    ar: "يعتقد / الاعتقاد / للاعتقاد",
    explanationAr: "يرد في معيار 'أساس معقول للاعتقاد' (Reasonable basis/grounds to believe) في المادتين 15 و58.",
    explanationEn: "Used in 'reasonable grounds to believe' for warrants and investigations."
  },
  alternate: {
    en: "Alternate (Judge)",
    ar: "مناوب / قاضٍ احتياطي (بديل)",
    explanationAr: "القاضي الاحتياطي المعين لحضور المحاكمة والحلول محل أحد أعضاء الدائرة عند التعذر (المادة 74).",
    explanationEn: "Judge designated under Article 74(1) to attend trial and replace a member if unable to continue."
  },
  implementation: {
    en: "Implementation / Implement",
    ar: "تنفيذ / تطبيق / ينفذ",
    explanationAr: "وضع القرارات القضائية واللوائح والخطط موضع التطبيق الفعلي.",
    explanationEn: "Carrying out decisions, rules, and mandates in practice."
  },
  become: {
    en: "Become / Becomes",
    ar: "يصبح / يصير / تضحى",
    explanationAr: "تحول الحالة القانونية (كأن يصبح الحكم نهائياً أو تصبح الدولة طرفاً).",
    explanationEn: "To come into a new legal status."
  },
  truth: {
    en: "Truth",
    ar: "الحقيقة (تقصي الحقيقة)",
    explanationAr: "واجب المحكمة والمدعي العام في تقصي الحقيقة كاملةً (المادتان 54 و69).",
    explanationEn: "The objective determination of factual truth under Articles 54(1)(a) and 69(3)."
  },
  gave: {
    en: "Gave",
    ar: "أعطى / أدلى بـ / منح",
    explanationAr: "فعل ماضٍ يفيد الإدلاء بالشهادة أو منح الإذن.",
    explanationEn: "Past tense of give; delivered testimony or granted permission."
  },
  inferred: {
    en: "Inferred / Infer",
    ar: "يُستنتج / يُستدل عليه",
    explanationAr: "استخلاص القصد الجنائي والعلم من الوقائع والظروف المحيطة (أركان الجرائم).",
    explanationEn: "Deduced from relevant facts and circumstances (Elements of Crimes)."
  },
  prepare: {
    en: "Prepare / Prepared / Prepares",
    ar: "يعدّ / يحضّر / مستعد / إعداد",
    explanationAr: "إعداد الدفاع أو تحضير الوثائق والتقارير.",
    explanationEn: "To draft documents or ready a case/witness."
  },
  result: {
    en: "Result / Resulting",
    ar: "نتيجة / الناتج / يترتب",
    explanationAr: "الأثر أو النتيجة المترتبة على السلوك الإجرامي أو القرار القضائي.",
    explanationEn: "Consequence or outcome of conduct or a ruling."
  },
  invite: {
    en: "Invite / Invitation",
    ar: "يدعو / تدعو / دعوة / المدعوة",
    explanationAr: "دعوة الدول أو المنظمات أو الخبراء لتقديم ملاحظات أو حضور جلسة.",
    explanationEn: "To formally request a State, organization, or amicus curiae to submit observations."
  },
  accurate: {
    en: "Accurate / Accuracy",
    ar: "دقيق / الدقة / صحيح",
    explanationAr: "مطابقة السجلات والترجمات والبيانات للحقيقة والواقع بدقة.",
    explanationEn: "Free from error and faithful to the original record."
  },
  discontinuance: {
    en: "Discontinuance",
    ar: "ترك الخصومة / التنازل عن الاستئناف / إنهاء",
    explanationAr: "إجراء تنازل الطاعن عن استئنافه قبل صدور الحكم.",
    explanationEn: "Formal withdrawal or termination of an appeal or proceeding."
  },
  longer: {
    en: "Longer (No longer)",
    ar: "أطول / لم يعد",
    explanationAr: "زوال الشرط أو الظرف القانوني السابق (no longer)، أو امتداد المدة.",
    explanationEn: "Used in 'no longer' when a legal condition ceases to exist, or greater duration."
  },
  some: {
    en: "Some",
    ar: "بعض",
    explanationAr: "تخصيص جزء من العناصر أو الأشخاص أو الوثائق.",
    explanationEn: "An unspecified portion or number."
  },
  pattern: {
    en: "Pattern (of conduct)",
    ar: "نمط / نسق (نمط سلوك مماثل)",
    explanationAr: "وقوع السلوك في سياق نمط واضح من الأفعال المماثلة (أركان جريمة الإبادة الجماعية).",
    explanationEn: "Manifest pattern of similar conduct under the Elements of Crimes."
  },
  deprivation: {
    en: "Deprivation / Deprived",
    ar: "حرمان / الحرمان (من الحرية أو الحياة)",
    explanationAr: "سلب الحرية البدنية أو الحقوق الأساسية تعسفاً أو contrarily للقانون الدولي.",
    explanationEn: "Severe taking away of physical liberty, life, or fundamental rights."
  },
  explanatory: {
    en: "Explanatory",
    ar: "تفسيري / إيضاحي",
    explanationAr: "المذكرات أو الحواشي الإيضاحية المرفقة بالنصوص أو النماذج.",
    explanationEn: "Serving to clarify legal meaning or procedure."
  },
  website: {
    en: "Website",
    ar: "الموقع الإلكتروني (للمحكمة)",
    explanationAr: "البوابة الإلكترونية الرسمية للمحكمة الجنائية الدولية لنشر الأحكام والمعلومات.",
    explanationEn: "Official internet portal of the Court."
  },
  next: {
    en: "Next",
    ar: "التالي / القادم / الموالي",
    explanationAr: "اليوم أو الإجراء أو الدورة التالية مباشرةً.",
    explanationEn: "Immediately following in sequence or time."
  },
  details: {
    en: "Details / Detailed",
    ar: "تفاصيل / مفصّل / بيانات تفصيلية",
    explanationAr: "المعلومات التفصيلية الدقيقة عن التهم أو الوقائع أو الهوية.",
    explanationEn: "Comprehensive particulars of charges, facts, or filings."
  },
  marked: {
    en: "Marked",
    ar: "موسوم / مميز بعلامة / مؤشر عليه",
    explanationAr: "تمييز الوثائق والأدلة بأرقامها ودرجة سريتها أو الشارات المميزة.",
    explanationEn: "Labeled with an official registration number, classification, or emblem."
  },
  errors: {
    en: "Errors / Error",
    ar: "الأخطاء / خطأ / غلط (في القانون أو الوقائع)",
    explanationAr: "الخطأ في الوقائع أو القانون (المادة 32) أو كسبب للطعن بالاستئناف (المادة 81) أو التصحيح المادي.",
    explanationEn: "Mistake of fact/law (Article 32), ground of appeal (Article 81), or clerical error."
  },
  supplemental: {
    en: "Supplemental / Supplementary",
    ar: "تكميلي / إضافي",
    explanationAr: "المذكرات أو الاتفاقات أو الميزانيات التكميلية.",
    explanationEn: "Added to complete or augment an existing filing or instrument."
  },
  inspect: {
    en: "Inspect / Inspection / Inspecting",
    ar: "يفحص / فحص / معاينة / المعاينة / تفتيش",
    explanationAr: "فحص الأدلة والمستندات، أو معاينة مواقع الجرائم أو تفتيش مراكز الاحتجاز.",
    explanationEn: "Formal examination of evidence, crime scenes, or detention facilities."
  },
  items: {
    en: "Items / Item",
    ar: "بنود / مواد / مفردات (الأدلة)",
    explanationAr: "مفردات الأدلة المضبوطة أو بنود جدول الأعمال.",
    explanationEn: "Individual pieces of evidence, property, or agenda entries."
  },
  outreach: {
    en: "Outreach",
    ar: "التوعية / التواصل الخارجي (مع المجتمعات المتأثرة)",
    explanationAr: "برامج التواصل والتوعية التي يباشرها قلم المحكمة مع المجتمعات المتضررة والضحايا.",
    explanationEn: "Registry programmes communicating the Court's work to affected communities."
  },
  confinement: {
    en: "Confinement",
    ar: "حبس / احتجاز / عزل",
    explanationAr: "تقييد الحرية أو الحبس غير المشروع أو العزل في مركز الاحتجاز.",
    explanationEn: "Physical restraint or detention within an enclosed space."
  },
  forcibly: {
    en: "Forcibly / Forcible",
    ar: "عنوةً / قسراً / بالقوة / القسري",
    explanationAr: "استخدام القوة أو التهديد بها أو الإكراه (كالنقل القسري للسكان أو الأطفال).",
    explanationEn: "Accomplished by physical force, threat of force, or coercion."
  },
  multiple: {
    en: "Multiple",
    ar: "متعدد / عدة (الارتكاب المتكرر)",
    explanationAr: "تعدد الأفعال الإجرامية (Multiple commission of acts) في الجرائم ضد الإنسانية (المادة 7).",
    explanationEn: "Involving more than one act, charge, or accused."
  },
  great: {
    en: "Great",
    ar: "شديد / جسيم / عظيم",
    explanationAr: "وصف لدرجة جسامة المعاناة أو الضرر.",
    explanationEn: "Of considerable magnitude or severity."
  },
  sending: {
    en: "Sending (State)",
    ar: "الدولة المرسِلة / إرسال",
    explanationAr: "الدولة التي ينتمي إليها الشخص أو الموظف الموفد (المادة 98).",
    explanationEn: "The State that dispatched diplomatic personnel or forces under Article 98."
  },
  natural: {
    en: "Natural (persons / environment)",
    ar: "طبيعي (الأشخاص الطبيعيون / البيئة الطبيعية)",
    explanationAr: "اختصاص المحكمة بمحاكمة الأشخاص الطبيعيين (المادة 25)، أو حماية البيئة الطبيعية في الحرب.",
    explanationEn: "Individual human beings under Article 25(1), or the natural environment."
  },
  respective: {
    en: "Respective",
    ar: "الخاص بكل منهم / المعني",
    explanationAr: "نسبة الاختصاص أو الدور إلى كل جهاز أو طرف على حدة.",
    explanationEn: "Belonging or relating separately to each organ or party."
  },
  open: {
    en: "Open / Opening",
    ar: "علني / مفتوح / افتتاح (الجلسة)",
    explanationAr: "علنية الجلسات القضائية أو فتح باب التوقيع أو البيانات الافتتاحية.",
    explanationEn: "Publicly accessible session or commencement of a phase."
  },
  collect: {
    en: "Collect / Collected / Collection",
    ar: "يجمع / جمع / تحصيل (الأدلة)",
    explanationAr: "جمع وفحص الأدلة المادية والشهادات بواسطة المدعي العام (المادة 54).",
    explanationEn: "Gathering and preservation of evidence."
  },
  issuance: {
    en: "Issuance / Issue / Issued",
    ar: "إصدار / صدور / يصدر",
    explanationAr: "صدور أمر القبض أو الحضور أو القرار القضائي عن الدائرة المختصة.",
    explanationEn: "Formal promulgation of a warrant, order, or decision."
  },
  benefit: {
    en: "Benefit",
    ar: "لصالح / مصلحة / منفعة",
    explanationAr: "تخصيص صندوق استئمان الضحايا لصالح ضحايا الجرائم وأسرهم (المادة 79).",
    explanationEn: "Advantage or welfare, as in the Trust Fund for the benefit of victims."
  },
  cooperate: {
    en: "Cooperate / Cooperating",
    ar: "يتعاون / التعاون",
    explanationAr: "واجب الدول الأطراف في التعاون التام مع المحكمة في التحقيق والمقاضاة (المادة 86).",
    explanationEn: "To render judicial assistance and comply with Court requests under Part 9."
  },
  expiry: {
    en: "Expiry / Lapse",
    ar: "انقضاء / انتهاء (المهلة أو الولاية)",
    explanationAr: "فوات الأجل القانوني المحدد أو انتهاء مدة الوظيفة.",
    explanationEn: "Termination of a prescribed time period or term of office."
  },
  dispute: {
    en: "Dispute / Disputes",
    ar: "نزاع / المنازعات / خلاف",
    explanationAr: "الخلاف المتعلق بالوظائف القضائية أو بتفسير النظام الأساسي وتطبيقه (المادة 119).",
    explanationEn: "Controversy regarding judicial functions or interpretation of the Statute (Article 119)."
  },
  declare: {
    en: "Declare / Declaration",
    ar: "يعلن / يقرّ / إعلان (قبول الاختصاص)",
    explanationAr: "الإعلان الرسمي (كإعلان الدولة قبول اختصاص المحكمة بموجب المادة 12(3) أو التعهد الرسمي).",
    explanationEn: "To formally state or lodge an official declaration."
  },
  withdraw: {
    en: "Withdraw / Withdrawal",
    ar: "يسحب / سحب / ينسحب / انسحاب",
    explanationAr: "سحب التهم أو الطلبات، أو انسحاب الدولة من النظام الأساسي (المادة 127).",
    explanationEn: "To retract a charge/filing or denounce the Statute under Article 127."
  },
  translated: {
    en: "Translated / Translate / Translation",
    ar: "مترجم / يترجم / ترجمة",
    explanationAr: "نقل الوثائق أو الأقوال إلى لغة يفهمها المتهم فهماً تاماً وإلى لغات المحكمة.",
    explanationEn: "Rendered accurately into another language by certified Court translators."
  },
  faithfully: {
    en: "Faithfully",
    ar: "بأمانة / بإخلاص",
    explanationAr: "أداء المهام القضائية والترجمة والشهادة بأمانة وصدق (المادة 45).",
    explanationEn: "Conscientiously and with strict fidelity to duty."
  },
  draft: {
    en: "Draft",
    ar: "مشروع / مسودة",
    explanationAr: "الصيغة الأولية للنص أو القرار أو الميزانية قبل اعتمادها النهائي.",
    explanationEn: "Preliminary version of a text, decision, or budget."
  },
  negotiated: {
    en: "Negotiated",
    ar: "تم التفاوض عليه / تفاوضي",
    explanationAr: "الاتفاقات التي يتم التوصل إليها بالتفاوض بين المحكمة والدول.",
    explanationEn: "Reached through formal discussion and agreement."
  },
  advise: {
    en: "Advise / Advising",
    ar: "يقدم المشورة / يخطر / ينصح",
    explanationAr: "تقديم الرأي القانوني أو إخطار الشخص بحقوقه الإجرائية.",
    explanationEn: "To offer legal counsel or inform a person of their rights."
  },
  dissemination: {
    en: "Dissemination",
    ar: "نشر / تعميم / إذاعة",
    explanationAr: "نشر المعلومات والوثائق العامة على نطاق واسع.",
    explanationEn: "Widespread distribution of public information or texts."
  },
  associations: {
    en: "Associations / Association",
    ar: "نقابات / جمعيات (المحامين)",
    explanationAr: "نقابات المحامين أو الهيئات التمثيلية للمستشارين القانونيين.",
    explanationEn: "Bar associations or independent representative bodies of counsel."
  },
  earliest: {
    en: "Earliest (opportunity)",
    ar: "أقرب (فرصة ممكنة)",
    explanationAr: "المبادرة إلى اتخاذ الإجراء في أول وقت متاح.",
    explanationEn: "First available moment in the proceedings."
  },
  prejudicial: {
    en: "Prejudicial (to the rights of the accused)",
    ar: "مضرّ / مجحف / مخلّ (بحقوق المتهم أو نزاهة المحاكمة)",
    explanationAr: "ما يمس عدالة الإجراءات أو يلحق ضرراً بحقوق الدفاع (المادتان 67 و68).",
    explanationEn: "Detrimental to or inconsistent with the rights of the accused and a fair trial."
  },
  potential: {
    en: "Potential",
    ar: "محتمل / ممكن",
    explanationAr: "الشهود أو النزاعات أو المخاطر المحتملة التي تستوجب التدبير الوقائي.",
    explanationEn: "Prospective or capable of arising."
  },
  close: {
    en: "Close / Closing / Closure",
    ar: "يغلق / إغلاق / ختامي / إنهاء",
    explanationAr: "اختتام باب المرافعات أو تقديم الأدلة أو عقد جلسات مغلقة.",
    explanationEn: "Conclusion of evidence/submissions or holding hearings in camera."
  },
  attach: {
    en: "Attach / Attached",
    ar: "يرفق / مرفق / يلحق",
    explanationAr: "ضم الملاحق والمستندات المؤيدة إلى المذكرة أو الطلب.",
    explanationEn: "To append supporting documents or annexes."
  },
  endeavour: {
    en: "Endeavour / Endeavor",
    ar: "يسعى / يبذل قصارى جهده",
    explanationAr: "بذل العناية الواجبة لتحقيق التوافق أو إنجاز الإجراء.",
    explanationEn: "To make diligent efforts to achieve a statutory objective."
  },
  danger: {
    en: "Danger",
    ar: "خطر / المخاطر",
    explanationAr: "الخطر المحدق بسلامة الضحايا أو الشهود أو ضياع الأدلة.",
    explanationEn: "Risk of harm to persons or loss of evidence."
  },
  attention: {
    en: "Attention",
    ar: "انتباه / عناية / نظر",
    explanationAr: "لفت نظر الدائرة أو هيئة الرئاسة أو مجلس الأمن إلى مسألة قانونية.",
    explanationEn: "Notice or consideration of a Chamber or authority."
  },
  camera: {
    en: "Camera (In camera)",
    ar: "مغلقة / سرية (جلسة مغلقة - In camera)",
    explanationAr: "عقد الجلسة القضائية في غير علانية لحماية الشهود أو المعلومات السرية (المادة 68).",
    explanationEn: "Private judicial session closed to the public under Article 68(2)."
  },
  constitution: {
    en: "Constitution",
    ar: "تشكيل (الدائرة) / دستور",
    explanationAr: "قرار تشكيل الدائرة القضائية، أو الدستور الوطني للدولة.",
    explanationEn: "Formal establishment of a Chamber, or fundamental national law."
  },
  technology: {
    en: "Technology",
    ar: "تكنولوجيا / التقنية",
    explanationAr: "الوسائل التقنية السمعية والمرئية المستخدمة في الجلسات وحفظ الأدلة.",
    explanationEn: "Electronic, audio, and video systems used in Court operations."
  },
  documentary: {
    en: "Documentary (evidence)",
    ar: "مستندات / وثائقي (أدلة مستندية)",
    explanationAr: "الأدلة المكتوبة والوثائق الرسمية المقدمة للإثبات.",
    explanationEn: "Written records and documents tendered in evidence."
  },
  coercion: {
    en: "Coercion / Coercive",
    ar: "إكراه / قسر / إجبار",
    explanationAr: "حظر إخضاع أي شخص لأي شكل من أشكال الإكراه أو التهديد أثناء التحقيق (المادة 55).",
    explanationEn: "Unlawful compulsion or duress prohibited under Article 55(1)(b)."
  },
  environment: {
    en: "Environment",
    ar: "بيئة / البيئة",
    explanationAr: "البيئة الطبيعية المحمية من الضرر الواسع والطويل الأجل والشديد في النزاعات المسلحة.",
    explanationEn: "The natural surroundings protected under Article 8(2)(b)(iv)."
  },
  genuine: {
    en: "Genuine / Genuinely",
    ar: "حقيقي / جديّ / بصدق",
    explanationAr: "معيار جدية التحقيق أو المقاضاة الوطنية عند فحص المقبولية والتكامل (المادة 17).",
    explanationEn: "Bona fide and authentic (testing whether a State is genuinely able and willing under Article 17)."
  },
  "self-incrimination": {
    en: "Self-incrimination",
    ar: "تجريم الذات (عدم إجبار الشخص على الشهادة ضد نفسه)",
    explanationAr: "الضمانة الأساسية بعدم إكراه المشتبه فيه أو المتهم على الإقرار بالذنب أو الشهادة ضد نفسه (المادتان 55 و67).",
    explanationEn: "Fundamental right against being compelled to confess guilt or testify against oneself."
  },
  incriminate: {
    en: "Incriminate / Incriminating",
    ar: "يجرّم / يدين (أدلة الإثبات / التجريم)",
    explanationAr: "ما يثبت ارتكاب الجريمة أو يورط الشاهد أو المتهم جنائياً.",
    explanationEn: "Tending to establish guilt or expose a person to criminal liability."
  },
  exonerating: {
    en: "Exonerating / Exculpatory",
    ar: "مُبرّئ / نافٍ للتهمة (أدلة النفي أو البراءة)",
    explanationAr: "واجب المدعي العام في التحقيق في ظروف الإدانة والبراءة على السواء والكشف عن الأدلة المبرئة (المادتان 54 و67).",
    explanationEn: "Evidence tending to show the innocence of the accused or mitigate guilt (Articles 54 and 67)."
  },
  permit: {
    en: "Permit / Permitted",
    ar: "يأذن / يسمح / مسموح / تصريح",
    explanationAr: "إجازة أو ترخيص صادر عن الدائرة القضائية أو المسجل.",
    explanationEn: "To authorize or grant official leave."
  },
  production: {
    en: "Production / Produce",
    ar: "تقديم / إبراز (الأدلة والمستندات) / إنتاج",
    explanationAr: "الأمر القضائي بإبراز وتقديم المستندات أو الأدلة أمام المحكمة.",
    explanationEn: "Presenting or yielding documents and evidence before a Chamber."
  },
  education: {
    en: "Education / Educational",
    ar: "تعليم / تثقيف / تعليمي",
    explanationAr: "المؤهلات العلمية، أو حماية المباني المخصصة للتعليم في النزاعات المسلحة.",
    explanationEn: "Academic qualification or protected educational institutions under Article 8."
  },
  modify: {
    en: "Modify / Modification",
    ar: "يعدّل / تعديل / تنقيح",
    explanationAr: "إدخال تعديل على أمر قضائي أو لائحة أو تكييف قانوني.",
    explanationEn: "To alter or amend a ruling, charge, or regulation."
  },
  award: {
    en: "Award (for reparations)",
    ar: "قرار تعويض / يمنح (مبلغ جبر الضرر)",
    explanationAr: "المبلغ أو التدبير المحكوم به لجبر ضرر الضحايا بموجب المادة 75.",
    explanationEn: "Judicial order granting reparations to victims under Article 75."
  },
  withheld: {
    en: "Withheld / Withhold",
    ar: "حجب / يحجب (معلومات أو أدلة لدواعي الحماية)",
    explanationAr: "عدم الكشف المؤقت عن بعض المعلومات أو الهويات لحماية الشهود أو الأمن القومي.",
    explanationEn: "Temporarily refraining from disclosing information under protective rules."
  },
  fulfilled: {
    en: "Fulfilled / Fulfil / Fulfilment",
    ar: "مستوفى / يفي بـ / استيفاء / الوفاء",
    explanationAr: "تحقق الشروط القانونية أو الوفاء بالالتزامات المقررة.",
    explanationEn: "Satisfied or carried out completely."
  },
  equitable: {
    en: "Equitable (geographical representation)",
    ar: "عادل / منصف (التمثيل الجغرافي العادل)",
    explanationAr: "معيار التوزيع الجغرافي العادل عند انتخاب القضاة وتعيين الموظفين (المادة 36).",
    explanationEn: "Fair and balanced distribution across regions and legal systems."
  },
  eligible: {
    en: "Eligible / Eligibility",
    ar: "مؤهل / أهلية / الأهلية",
    explanationAr: "استيفاء الشروط القانونية للترشح أو القيد في القائمة أو الاستفادة من المساعدة.",
    explanationEn: "Legally qualified to hold office, practice as counsel, or receive aid."
  },
  disposition: {
    en: "Disposition / Disposal",
    ar: "تصرف / الفصل في / تحت تصرف",
    explanationAr: "كيفية التصرف في الممتلكات المصادرة أو الفصل النهائي في المسألة.",
    explanationEn: "Final settlement of a matter or allocation of forfeited assets."
  },
  allocation: {
    en: "Allocation",
    ar: "تخصيص / التخصيص / توزيع",
    explanationAr: "توزيع القضايا على الدوائر أو تخصيص الموارد المالية.",
    explanationEn: "Assignment of cases, funds, or time."
  },
  incidental: {
    en: "Incidental",
    ar: "عارض / فرعي / تبعي",
    explanationAr: "المسائل الفرعية أو الأضرار العارضة.",
    explanationEn: "Secondary or collateral to a primary proceeding or attack."
  },
  lead: {
    en: "Lead (Lead counsel)",
    ar: "رئيسي (المحامي الرئيسي) / يؤدي إلى",
    explanationAr: "المحامي الرئيسي الذي يقود فريق الدفاع، أو الإفضاء إلى نتيجة.",
    explanationEn: "Principal counsel heading a defence team, or to result in."
  },
  ethics: {
    en: "Ethics / Ethical",
    ar: "أخلاقيات المهنة / السلوك المهني",
    explanationAr: "مدونة السلوك المهني والأخلاقي للقضاة والمدعي العام والمحامين.",
    explanationEn: "Standards of professional conduct governing Judges, Prosecutors, and Counsel."
  },
  templates: {
    en: "Templates / Template",
    ar: "نماذج / قوالب رسمية",
    explanationAr: "القوالب والنماذج القياسية المعتمدة لإيداع الوثائق والطلبات.",
    explanationEn: "Standardized official forms prescribed by the Registry or Chambers."
  },
  version: {
    en: "Version / Versions",
    ar: "نسخة / صيغة (منقحة أو علنية)",
    explanationAr: "الصيغة اللغوية أو النسخة المنقحة للوثيقة القضائية.",
    explanationEn: "Specific linguistic text or redacted/updated edition of a filing."
  },
  secret: {
    en: "Secret (ballot)",
    ar: "سري (اقتراع سري)",
    explanationAr: "انتخاب القضاة والمدعي العام والمسجل بالاقتراع السري، أو سرية المداولات.",
    explanationEn: "Confidential voting by secret ballot or closed deliberations."
  },
  system: {
    en: "System / Systems",
    ar: "نظام / منظومة (النظم القانونية الرئيسية)",
    explanationAr: "تمثيل النظم القانونية الرئيسية في العالم (المادة 36) أو النظم الإدارية.",
    explanationEn: "Principal legal systems of the world or technical infrastructure."
  },
  acknowledgement: {
    en: "Acknowledgement / Acknowledge",
    ar: "إشعار بالاستلام / إقرار / الاعتراف",
    explanationAr: "الإقرار الرسمي بتلقي الوثيقة أو الإخطار.",
    explanationEn: "Formal confirmation of receipt or recognition."
  },
  footnotes: {
    en: "Footnotes / Footnote",
    ar: "الحواشي / الهوامش",
    explanationAr: "الهوامش الإيضاحية والمرجعية الملحقة بنصوص أركان الجرائم والمذكرات.",
    explanationEn: "Citations and explanatory notes at the bottom of legal texts."
  },
  mode: {
    en: "Mode / Modes (of liability)",
    ar: "صورة / أسلوب (صور المسؤولية الجنائية)",
    explanationAr: "صور المساهمة الجنائية المنصوص عليها في المادة 25 والطريقة المتبعة في الإثبات.",
    explanationEn: "Forms of criminal participation under Article 25 or manner of procedure."
  },
  characterisation: {
    en: "Characterisation / Characterization",
    ar: "التكييف القانوني / توصيف (الوقائع)",
    explanationAr: "إسباغ الوصف القانوني الصحيح على الوقائع المعروضة (اللائحة 55 من لوائح المحكمة).",
    explanationEn: "Legal classification of facts under Regulation 55 of the Regulations of the Court."
  },
  quater: {
    en: "Quater",
    ar: "رابعاً / مكرراً ثالثاً (في ترقيم المواد)",
    explanationAr: "مصطلح لاتيني يستخدم في ترقيم المواد المضافة (مثل المادة 8 مكرراً).",
    explanationEn: "Latin numeral indicator used for fourth-added statutory provisions."
  },
  opposed: {
    en: "Opposed / Opposition",
    ar: "معارض / اعتراض / في مقابل",
    explanationAr: "ممانعة أو اعتراض أحد الخصوم على طلب مقدم.",
    explanationEn: "Contesting or objecting to a motion or measure."
  },
  research: {
    en: "Research",
    ar: "بحث / أبحاث قانونية",
    explanationAr: "البحوث القانونية والجنائية التي تجريها الفرق القضائية.",
    explanationEn: "Scholarly and jurisprudential inquiry."
  },
  arrival: {
    en: "Arrival",
    ar: "وصول / قدوم (إلى مقر المحكمة)",
    explanationAr: "وصول الشخص المقبوض عليه أو الشاهد إلى مقر المحكمة أو مركز الاحتجاز.",
    explanationEn: "Physical reaching of the seat of the Court or detention center."
  },
  cell: {
    en: "Cell",
    ar: "زنزانة / غرفة الاحتجاز",
    explanationAr: "الغرفة الفردية المخصصة للمحتجز في مركز احتجاز المحكمة.",
    explanationEn: "Individual sleeping quarters in the detention centre."
  },
  anonymous: {
    en: "Anonymous / Anonymity",
    ar: "مجهول الهوية / عدم الكشف عن الهوية",
    explanationAr: "حجب هوية الشاهد أو الضحية لحمايته من الخطر.",
    explanationEn: "Withholding the identity of a victim or witness for protection."
  },
  log: {
    en: "Log",
    ar: "سجل / دفتر قيد (الزيارات أو الأدلة)",
    explanationAr: "السجل الزمني المعتمد لقيد حركة الأدلة أو المكالمات أو الزيارات.",
    explanationEn: "Chronological register of events, chain of custody, or communications."
  },
  selection: {
    en: "Selection",
    ar: "اختيار / انتقاء (القضايا أو المرشحين)",
    explanationAr: "معايير انتقاء القضايا والأولويات التحقيقية أو اختيار الموظفين.",
    explanationEn: "Process of choosing cases, candidates, or experts based on objective criteria."
  },
  strategic: {
    en: "Strategic / Strategy / Strategies",
    ar: "استراتيجي / استراتيجية / الخطط",
    explanationAr: "الاستراتيجية القضائية أو التحقيقية لمكتب المدعي العام وقلم المحكمة.",
    explanationEn: "Long-term prosecutorial or institutional planning."
  },
  practices: {
    en: "Practices / Practice",
    ar: "ممارسات / ممارسة (المهنة أو العمل القضائي)",
    explanationAr: "الأعراف والممارسات القضائية والمهنية المستقرة.",
    explanationEn: "Established operational procedures or professional legal practice."
  },
  chain: {
    en: "Chain (of custody / of command)",
    ar: "سلسلة (حفظ الأدلة / التسلسل القيادي)",
    explanationAr: "توثيق تسلسل حيازة الدليل (Chain of custody) لمنع العبث به، أو تسلسل القيادة العسكرية.",
    explanationEn: "Unbroken documented custody of evidence, or military hierarchy."
  },
  instrumentalities: {
    en: "Instrumentalities (of crime)",
    ar: "أدوات (ارتكاب الجريمة)",
    explanationAr: "الوسائل والأدوات المادية المستخدمة في ارتكاب الجرائم.",
    explanationEn: "Means and tools used to perpetrate offences."
  },
  pleaded: {
    en: "Pleaded / Plea",
    ar: "دفع (بالذنب أو البراءة) / إقرار",
    explanationAr: "جواب المتهم على التهم الموجهة إليه بالإقرار بالذنب أو الدفع بالبراءة.",
    explanationEn: "Formal declaration by the accused of guilty or not guilty."
  },
  births: {
    en: "Births / Birth",
    ar: "الإنجاب / الولادة / المواليد",
    explanationAr: "فرض تدابير تستهدف منع الإنجاب داخل الجماعة كأحد أفعال الإبادة الجماعية (المادة 6(د)).",
    explanationEn: "Measures intended to prevent births within a protected group under Article 6(d)."
  },
  wilful: {
    en: "Wilful / Willful / Wilfully",
    ar: "عمدي / عمداً (القتل العمد)",
    explanationAr: "توافر القصد الجنائي العمدي في الانتهاكات الجسيمة لاتفاقيات جنيف (المادة 8).",
    explanationEn: "Intentional and deliberate commission of grave breaches under Article 8."
  },
  position: {
    en: "Position",
    ar: "منصب / مركز / موقف",
    explanationAr: "المنصب الرسمي (الذي لا يعفي من المسؤولية بموجب المادة 27) أو موقف الطرف القانوني.",
    explanationEn: "Official rank/office (Article 27) or legal stance of a party."
  },
  invasion: {
    en: "Invasion",
    ar: "غزو / الغزو",
    explanationAr: "غزو القوات المسلحة لدولة لإقليم دولة أخرى كأحد أفعال جريمة العدوان (المادة 8 مكرراً).",
    explanationEn: "Armed attack or occupation by forces of a State against another State's territory."
  },
  tried: {
    en: "Tried (before the Court)",
    ar: "يحاكم / حوكم (أمام المحكمة)",
    explanationAr: "مثول المتهم للمحاكمة القضائية (ومبدأ عدم جواز المحاكمة عن ذات الجرم مرتين).",
    explanationEn: "Subjected to judicial trial (e.g., ne bis in idem under Article 20)."
  },
  ne: {
    en: "Ne (Ne bis in idem)",
    ar: "عدم (جواز المحاكمة عن ذات الجرم مرتين - Ne bis in idem)",
    explanationAr: "جزء من القاعدة اللاتينية في المادة 20 التي تحظر محاكمة الشخص مرتين عن السلوك ذاته.",
    explanationEn: "Part of the maxim 'ne bis in idem' (prohibition of double jeopardy under Article 20)."
  },
  idem: {
    en: "Idem (Ne bis in idem)",
    ar: "ذات الفعل / الشيء نفسه (Ne bis in idem)",
    explanationAr: "جزء من مبدأ عدم جواز المحاكمة عن ذات الجرم مرتين بموجب المادة 20.",
    explanationEn: "Latin for 'the same', in 'ne bis in idem' (not twice for the same thing)."
  },
  sine: {
    en: "Sine (Nullum crimen / Nulla poena sine lege)",
    ar: "بدون (لا جريمة ولا عقوبة إلا بنص - Sine lege)",
    explanationAr: "جزء من مبدأ الشرعية الجنائية في المادتين 22 و23 (بدون نص قانوني).",
    explanationEn: "Latin for 'without', in 'nullum crimen, nulla poena sine lege' (Articles 22-23)."
  },
  lege: {
    en: "Lege (Sine lege)",
    ar: "نص قانوني (لا جريمة ولا عقوبة إلا بنص)",
    explanationAr: "مبدأ الشرعية الجنائية الدستوري والدولي في المادتين 22 و23 من نظام روما.",
    explanationEn: "Latin for 'law', in the legality principles of Articles 22 and 23."
  },
  ratione: {
    en: "Ratione (temporis / personae / materiae / loci)",
    ar: "من حيث (الزمان / الأشخاص / الموضوع / المكان)",
    explanationAr: "المعيار المحدد لنطاق اختصاص المحكمة الموضوعي والزماني والشخصي والمكاني.",
    explanationEn: "Latin qualifier defining the temporal, personal, material, or territorial scope of jurisdiction."
  },
  temporis: {
    en: "Temporis (Ratione temporis)",
    ar: "من حيث الزمان (الاختصاص الزماني للمحكمة)",
    explanationAr: "الاختصاص الزماني للمحكمة المنصوص عليه في المادة 11 (عدم رجعية الاختصاص).",
    explanationEn: "Temporal jurisdiction of the Court under Article 11."
  },
  distinction: {
    en: "Distinction",
    ar: "تمييز / التمييز / تفرقة",
    explanationAr: "انطباق النظام الأساسي على الجميع دون أي تمييز بسبب الصفة الرسمية (المادة 27)، ومبدأ التمييز في الحرب.",
    explanationEn: "Non-discrimination based on official capacity (Article 27) or IHL principle of distinction."
  },
  liable: {
    en: "Liable (for punishment)",
    ar: "عرضة (للعقاب) / مسؤول قانوناً",
    explanationAr: "خضوع مرتكب الجريمة للمساءلة والعقاب الجنائي بموجب المادة 25.",
    explanationEn: "Legally subject to criminal responsibility and punishment."
  },
  highest: {
    en: "Highest",
    ar: "الأعلى / القصوى / الأقصى",
    explanationAr: "أعلى درجات السلوك الخلقي والمهني المشترطة في القضاة والمدعي العام.",
    explanationEn: "Supreme degree of moral character and competence."
  },
  qualified: {
    en: "Qualified",
    ar: "مؤهل / مستوفٍ للشروط",
    explanationAr: "استيفاء الكفاءة القانونية والمهنية اللازمة للقضاء أو الدفاع.",
    explanationEn: "Possessing the requisite legal credentials and competence."
  },
  custodial: {
    en: "Custodial (State)",
    ar: "الدولة الحاجزة / الاحتجازي",
    explanationAr: "الدولة التي يوجد الشخص المقبوض عليه تحت حراستها واحتجازها (المادة 59).",
    explanationEn: "The State holding a person in custody pending surrender under Article 59."
  },
  deliberate: {
    en: "Deliberate / Deliberately",
    ar: "متعمد / عمداً / عن قصد",
    explanationAr: "ارتكاب الفعل عن سبق إصرار وقصد.",
    explanationEn: "Intentional and calculated."
  },
  parents: {
    en: "Parents",
    ar: "الوالدان / الآباء",
    explanationAr: "والدا الضحية أو الطفل أو المتهم.",
    explanationEn: "Mother and father of a person."
  },
  engaged: {
    en: "Engaged / Engage",
    ar: "مشارك / منخرط / يشارك",
    explanationAr: "الانخراط في النزاع المسلح أو مباشرة المهام المهنية.",
    explanationEn: "Involved in hostilities or undertaking professional duties."
  },
  annual: {
    en: "Annual",
    ar: "سنوي / السنوي / السنوية",
    explanationAr: "التقارير أو الدورات أو الميزانيات السنوية للمحكمة.",
    explanationEn: "Occurring or reported once every year."
  },
  convene: {
    en: "Convene",
    ar: "يعقد / يدعو لانعقاد (جلسة أو مؤتمر)",
    explanationAr: "الدعوة الرسمية لانعقاد جلسة قضائية أو دورة لجمعية الدول الأطراف.",
    explanationEn: "To formally call together a hearing, session, or Assembly."
  },
  deposit: {
    en: "Deposit / Deposited",
    ar: "إيداع / الإيداع / يودع (صكوك التصديق)",
    explanationAr: "إيداع صكوك التصديق أو القبول لدى الأمين العام للأمم المتحدة (المادة 125)، أو إيداع الوثائق.",
    explanationEn: "Formal lodging of instruments of ratification with the UN Secretary-General or filings with the Registry."
  },
  conformity: {
    en: "Conformity (In conformity with)",
    ar: "توافق / تطابق / طبقاً لـ",
    explanationAr: "مطابقة الإجراء لأحكام النظام الأساسي والقواعد.",
    explanationEn: "Compliance and accordance with legal provisions."
  },
  undertake: {
    en: "Undertake / Undertaking",
    ar: "يتعهد / أتعهد / يباشر / تعهد",
    explanationAr: "التعهد الرسمي للقضاة والمسؤولين والشهود، أو مباشرة إجراء تحقيقي.",
    explanationEn: "To make a solemn pledge or embark upon an official task."
  },
  honourably: {
    en: "Honourably / Honour",
    ar: "بشرف / شرف (في التعهد الرسمي)",
    explanationAr: "أداء المهام القضائية بشرف وإخلاص ونزاهة وبكل أمانة (المادة 45).",
    explanationEn: "With high integrity and honor under the solemn undertaking (Article 45)."
  },
  draw: {
    en: "Draw (up / attention)",
    ar: "يعدّ / يحرر (قائمة) / يلفت (النظر)",
    explanationAr: "إعداد قوائم المرشحين أو الأدلة، أو لفت انتباه الدائرة.",
    explanationEn: "To prepare a formal list/document or bring to notice."
  },
  sensitive: {
    en: "Sensitive",
    ar: "حساس / الحساسة (معلومات سرية أو حساسة)",
    explanationAr: "المعلومات أو الأدلة ذات الطبيعة الحساسة التي تستوجب تدابير حماية خاصة.",
    explanationEn: "Requiring special confidentiality or protective handling."
  },
  traumatized: {
    en: "Traumatized / Trauma",
    ar: "مصاب بصدمة نفسية / الصدمة",
    explanationAr: "الضحايا والشهود الذين عانوا من صدمات نفسية جراء العنف الجنسي أو الجرائم الجسيمة (المادة 43(6)).",
    explanationEn: "Suffering severe psychological distress resulting from atrocity crimes."
  },
  cultural: {
    en: "Cultural (property / heritage)",
    ar: "ثقافي / الثقافية (الأعيان والممتلكات الثقافية)",
    explanationAr: "المباني والممتلكات الثقافية والتاريخية المحمية من الهجمات في النزاعات المسلحة (المادة 8).",
    explanationEn: "Historical monuments and cultural heritage protected under international humanitarian law."
  },
  create: {
    en: "Create / Created",
    ar: "ينشئ / يستحدث",
    explanationAr: "إنشاء سجل أو وحدة أو وضع قانوني.",
    explanationEn: "To establish or bring into existence."
  },
  freely: {
    en: "Freely / Freedom / Liberty",
    ar: "بحرية / الحرية (دون إكراه)",
    explanationAr: "ممارسة الحقوق والإدلاء بالإفادات والتواصل مع المحامي بحرية تامة دون قسر.",
    explanationEn: "Voluntarily and without coercion or restriction."
  },
  showing: {
    en: "Showing (Upon showing good cause)",
    ar: "إثبات / بيان (بناءً على بيان سبب وجيه)",
    explanationAr: "تقديم مبررات مقنعة للدائرة القضائية للاستجابة لطلب إجرائي.",
    explanationEn: "Demonstrating sufficient legal or factual justification."
  },
  recover: {
    en: "Recover / Recovery",
    ar: "يسترد / استرداد / يتعافى",
    explanationAr: "استرداد الأموال أو الأصول، أو التعافي الجسدي والنفسي للضحايا.",
    explanationEn: "To reclaim assets/costs or regain health."
  },
  aside: {
    en: "Aside (Set aside)",
    ar: "جانباً (يلغي / ينحي جانباً)",
    explanationAr: "إلغاء الحكم أو القرار المطعون فيه أو تنحية الدليل.",
    explanationEn: "Used in 'set aside' to annul or vacate a decision."
  },
  inserted: {
    en: "Inserted",
    ar: "أُدرج / أُضيفت (في النص)",
    explanationAr: "إضافة مادة أو فقرة جديدة بموجب تعديل معتمد.",
    explanationEn: "Added into the text of a legal instrument by amendment."
  },
  implicated: {
    en: "Implicated",
    ar: "متورط / منسوب إليه / ذو صلة",
    explanationAr: "الشخص الذي تشير الأدلة إلى ضلوعه في الجريمة.",
    explanationEn: "Shown to be involved in a crime or matter."
  },
  procedural: {
    en: "Procedural",
    ar: "إجرائي / الإجرائي / الإجرائية",
    explanationAr: "ما يتعلق بقواعد وسير الإجراءات الجنائية أمام المحكمة.",
    explanationEn: "Relating to the rules and conduct of judicial proceedings."
  },
  justified: {
    en: "Justified / Justification",
    ar: "مبرر / مسوّغ قانوني",
    explanationAr: "قيام سبب قانوني أو ضرورة تبرر الإجراء.",
    explanationEn: "Supported by valid legal reasons or necessity."
  },
  replacement: {
    en: "Replacement / Replace",
    ar: "استبدال / إحلال / بديل",
    explanationAr: "حلول قاضٍ أو محامٍ أو موظف محل آخر وفق الأصول.",
    explanationEn: "Substitution of a judge, counsel, or document."
  },
  arrange: {
    en: "Arrange",
    ar: "يرتب / ينظم / ترتيب",
    explanationAr: "اتخاذ الترتيبات العملية لعقد الجلسة أو النقل أو الزيارة.",
    explanationEn: "To organize and make practical preparations."
  },
  inquire: {
    en: "Inquire / Inquiry",
    ar: "يستفسر / يتحقق / تحقيق",
    explanationAr: "تثبت الدائرة القضائية من مسألة واقعية أو قانونية.",
    explanationEn: "To investigate or seek formal clarification."
  },
  light: {
    en: "Light (In the light of)",
    ar: "في ضوء (بالنظر إلى)",
    explanationAr: "تفسير النص أو تقدير الموقف في ضوء الظروف والأدلة المعروضة.",
    explanationEn: "Taking into consideration surrounding facts or rules."
  },
  preservation: {
    en: "Preservation / Preserve",
    ar: "حفظ / صون / الحفاظ على (الأدلة)",
    explanationAr: "تأمين وصون الأدلة من التلف أو الضياع (المادتان 18 و56).",
    explanationEn: "Safeguarding evidence from loss or deterioration."
  },
  latest: {
    en: "Latest (At the latest)",
    ar: "في موعد أقصاه / الأحدث",
    explanationAr: "الحد الزمني الأقصى الذي يجب اتخاذ الإجراء قبله.",
    explanationEn: "The final permissible deadline."
  },
  discretion: {
    en: "Discretion",
    ar: "سلطة تقديرية / تقدير",
    explanationAr: "الصلاحية الممنوحة للدائرة القضائية أو المدعي العام لتقدير ملاءمة الإجراء.",
    explanationEn: "Judicial or prosecutorial authority to decide within statutory bounds."
  },
  evidentiary: {
    en: "Evidentiary",
    ar: "إثباتي / متعلق بالأدلة",
    explanationAr: "ما يتصل بقواعد الإثبات الجنائي وحجية البينات.",
    explanationEn: "Relating to rules and standards of evidence."
  },
  transcript: {
    en: "Transcript / Transcripts",
    ar: "محضر حرفي / المحاضر (المكتوبة للجلسات)",
    explanationAr: "التدوين الكتابي الكامل والحرفي لكل ما يدور في الجلسات القضائية.",
    explanationEn: "Verbatim written record of courtroom proceedings."
  },
  words: {
    en: "Words / Word",
    ar: "كلمات / ألفاظ / عبارة",
    explanationAr: "الألفاظ والعبارات الواردة في النصوص أو الحد الأقصى لعدد الكلمات في المذكرات.",
    explanationEn: "Textual terms or word-count limits for filings."
  },
  advantage: {
    en: "Advantage (Military advantage)",
    ar: "ميزة (الميزة العسكرية الملموسة والمباشرة)",
    explanationAr: "معيار التناسب في القانون الدولي الإنساني بمقارنة الضرر العارض بالميزة العسكرية المتوقعة (المادة 8).",
    explanationEn: "Concrete and direct overall military advantage weighed in proportionality analysis."
  },
  class: {
    en: "Class / Classes",
    ar: "فئة / طبقة / طائفة",
    explanationAr: "تصنيف فئات الشهود أو الضحايا أو الوظائف.",
    explanationEn: "Category or group sharing common attributes."
  },
  essential: {
    en: "Essential",
    ar: "جوهري / أساسي / لا غنى عنه",
    explanationAr: "العنصر أو الشرط الجوهري اللازم لصحة الإجراء أو قيام المسؤولية.",
    explanationEn: "Indispensable and fundamental."
  },
  assurance: {
    en: "Assurance / Assurances",
    ar: "ضمانات / تأكيدات (دبلوماسية أو قضائية)",
    explanationAr: "التأكيدات والضمانات الرسمية التي تقدمها الدولة للمحكمة (كضمانات عدم المحاكمة أو الحماية).",
    explanationEn: "Formal guarantees provided by a State regarding treatment, return, or immunity."
  },
  avoid: {
    en: "Avoid",
    ar: "يتجنب / تفادي / تلافي",
    explanationAr: "تلافي التأخير غير المبرر أو تضارب المصالح أو الإضرار بالشهود.",
    explanationEn: "To prevent unnecessary delay, conflict of interest, or harm."
  },
  attend: {
    en: "Attend / Attendance",
    ar: "يحضر / حضور / مواظبة",
    explanationAr: "التواجد الفعلي في الجلسات القضائية أو الاجتماعات الرسمية.",
    explanationEn: "To be present at a hearing or session."
  },
  loss: {
    en: "Loss (of life / of property)",
    ar: "خسارة / خسائر (في الأرواح) / فقدان",
    explanationAr: "الخسائر العرضية في أرواح المدنيين أو فقدان الحقوق والممتلكات.",
    explanationEn: "Deprivation or destruction of life, limb, or property."
  },
  conditional: {
    en: "Conditional (release)",
    ar: "مشروط (الإفراج المشروط)",
    explanationAr: "الإفراج المؤقت عن الشخص بشروط تقررها الدائرة التمهيدية لضمان مثوله (المادة 60).",
    explanationEn: "Subject to specified judicial conditions, such as interim release."
  },
  restraint: {
    en: "Restraint (Instruments of restraint)",
    ar: "تقييد (أدوات التقييد / القيود الجسدية)",
    explanationAr: "الضوابط الصارمة التي تمنع استخدام أدوات التقييد إلا للضرورة الأمنية القصوى.",
    explanationEn: "Physical restriction devices governed by strict human dignity rules."
  },
  render: {
    en: "Render (a decision / assistance)",
    ar: "يصدر (حكماً أو قراراً) / يقدم (المساعدة)",
    explanationAr: "إصدار الدائرة لحكمها القضائي أو تقديم المساعدة القانونية.",
    explanationEn: "To deliver a judicial judgment or provide assistance."
  },
  joinder: {
    en: "Joinder (of charges / of trials)",
    ar: "ضمّ (التهم أو المحاكمات)",
    explanationAr: "قرار الدائرة بضم عدة تهم أو محاكمة عدة متهمين معاً (المادة 64(5) والقاعدة 136).",
    explanationEn: "Combining multiple charges or accused into a joint trial under Rule 136."
  },
  interdiction: {
    en: "Interdiction",
    ar: "منع / حظر / الحجر القانوني",
    explanationAr: "منع ممارسة نشاط معين أو تقييد الصلاحية بموجب أمر قضائي.",
    explanationEn: "Authoritative prohibition or suspension of rights."
  },
  capable: {
    en: "Capable",
    ar: "قادر / قادرة / ذو أهلية",
    explanationAr: "القدرة القانونية أو البدنية أو العقلية على مباشرة الإجراءات.",
    explanationEn: "Having the legal, physical, or mental capacity required."
  },
  return: {
    en: "Return",
    ar: "إعادة / الإعادة / عودة / ردّ",
    explanationAr: "إعادة الشخص الموقوف بعد انتهاء الإجراءات (المادة 93(7)) أو رد الممتلكات لأصحابها.",
    explanationEn: "Sending back a transferred person or restoring property."
  },
  liaison: {
    en: "Liaison",
    ar: "اتصال / تنسيق / ضابط ارتباط",
    explanationAr: "مكاتب ومسؤولو الاتصال بين المحكمة والأمم المتحدة والدول.",
    explanationEn: "Official coordination link between organizations and States."
  },
  entire: {
    en: "Entire",
    ar: "كامل / بأكمله / جميع",
    explanationAr: "شمول النص أو السجل أو المدة بكاملها.",
    explanationEn: "Whole and complete."
  },
  bilateral: {
    en: "Bilateral",
    ar: "ثنائي / الثنائي / الثنائية",
    explanationAr: "الاتفاقات أو الترتيبات الثنائية المبرمة بين المحكمة ودولة معينة.",
    explanationEn: "Concluded between two parties (e.g., the Court and a State)."
  },
  geographical: {
    en: "Geographical",
    ar: "جغرافي / الجغرافي",
    explanationAr: "التوزيع الجغرافي العادل للقضاة والموظفين، أو النطاق المكاني للتحقيق.",
    explanationEn: "Relating to regional distribution or territorial locus."
  },
  scheduled: {
    en: "Scheduled / Schedule",
    ar: "مقرر / محدّد الموعد / جدول زمني",
    explanationAr: "الجلسات أو الإجراءات المدرجة في الجدول الزمني للمحكمة.",
    explanationEn: "Timetable or appointed date for a hearing."
  },
  delegate: {
    en: "Delegate",
    ar: "يفوّض / مندوب",
    explanationAr: "تفويض بعض الصلاحيات الإدارية أو مندوب الدولة في الجمعية.",
    explanationEn: "To entrust authority or a State representative."
  },
  facility: {
    en: "Facility / Facilities",
    ar: "مرفق / مرافق / التسهيلات",
    explanationAr: "التسهيلات اللازمة لإعداد الدفاع (المادة 67) أو مرافق الاحتجاز والمحكمة.",
    explanationEn: "Necessary means for defence preparation or Court buildings/detention premises."
  },
  protocol: {
    en: "Protocol / Protocols",
    ar: "بروتوكول (البروتوكولان الإضافيان لاتفاقيات جنيف)",
    explanationAr: "البروتوكولات الملحقة باتفاقيات جنيف أو البروتوكولات الإجرائية المعتمدة.",
    explanationEn: "Supplementary treaty instruments or standardized courtroom procedures."
  },
  early: {
    en: "Early",
    ar: "مبكر / في وقت مبكر",
    explanationAr: "اتخاذ الإجراء في مرحلة مبكرة لتيسير سير العدالة.",
    explanationEn: "At an initial stage of proceedings."
  },
  significant: {
    en: "Significant",
    ar: "هام / هامة / ملموس / ذو شأن",
    explanationAr: "الأثر أو المساهمة الجوهرية في الجريمة أو الإجراءات.",
    explanationEn: "Substantial and legally meaningful."
  },
  neutral: {
    en: "Neutral / Neutrality",
    ar: "محايد / الحياد",
    explanationAr: "التزام الحياد والموضوعية، أو الدول والجهات المحايدة في النزاعات المسلحة.",
    explanationEn: "Impartial and non-aligned."
  },
  deported: {
    en: "Deported / Deportation",
    ar: "مُبعَد / الإبعاد أو النقل القسري للسكان",
    explanationAr: "جريمة إبعاد السكان أو نقلهم قسراً من المنطقة التي يوجدون فيها بصفة مشروعة (المادتان 7 و8).",
    explanationEn: "Forced displacement of persons across a State border under Articles 7 and 8."
  },
  discrimination: {
    en: "Discrimination",
    ar: "تمييز / التمييز (المجحف)",
    explanationAr: "حظر التمييز المجحف على أساس الجنس أو العرق أو الدين أو الرأي السياسي (المادة 21(3)).",
    explanationEn: "Adverse distinction prohibited under Article 21(3) and international law."
  },
  excessive: {
    en: "Excessive",
    ar: "مفرط / مفرطة / متجاوز للحد",
    explanationAr: "كون الخسائر المدنية مفرطة (Clearly excessive) مقارنة بالميزة العسكرية المتوقعة.",
    explanationEn: "Disproportionate beyond legal bounds."
  },
  occupied: {
    en: "Occupied (territory) / Occupation",
    ar: "محتل (إقليم محتل) / الاحتلال",
    explanationAr: "الأراضي الخاضعة للاحتلال العسكري والمشمولة بحماية اتفاقية جنيف الرابعة والمادة 8.",
    explanationEn: "Territory placed under the authority of a hostile army under IHL."
  },
  hors: {
    en: "Hors (Hors de combat)",
    ar: "خارج نطاق القتال / عاجز عن القتال (Hors de combat)",
    explanationAr: "المقاتل الذي ألقى سلاحه أو أصبح عاجزاً عن القتال بسبب الجرح أو الأسر ويحظر مهاجمته (المادة 8).",
    explanationEn: "Combatant who has surrendered or is incapacitated and protected from attack."
  },
  active: {
    en: "Active / Actively",
    ar: "فعّال / نشط / بنشاط (المشاركة الفعلية في الأعمال العدائية)",
    explanationAr: "المشاركة المباشرة والفعلية في الأعمال العدائية (Active part in hostilities).",
    explanationEn: "Direct participation in hostilities or proceedings."
  },
  read: {
    en: "Read / Reading",
    ar: "يقرأ / يتلو / تلاوة (التهم أو الحكم)",
    explanationAr: "تلاوة التهم المعتمدة على المتهم (المادة 64(8)(أ)) أو قراءة الوثائق بلغة يفهمها.",
    explanationEn: "Formal reading out of charges or decisions in court."
  },
  head: {
    en: "Head (of State / of Organ)",
    ar: "رئيس (دولة أو حكومة أو جهاز)",
    explanationAr: "رئيس الدولة أو الحكومة (المادة 27) أو رئيس الجهاز في المحكمة.",
    explanationEn: "Chief executive of a State (Article 27) or principal officer of an organ."
  },
  amongst: {
    en: "Amongst / Among",
    ar: "من بين / فيما بين",
    explanationAr: "الاختيار أو التوزيع فيما بين أعضاء الفئة المحددة.",
    explanationEn: "Within the group of specified persons or items."
  },
  chairperson: {
    en: "Chairperson",
    ar: "رئيس (اللجنة أو الاجتماع)",
    explanationAr: "الشخص الذي يترأس لجنة استشارية أو اجتماعاً رسمياً.",
    explanationEn: "Presiding officer of a committee or board."
  },
  retroactively: {
    en: "Retroactively / Non-retroactivity",
    ar: "بأثر رجعي / رجعية (عدم رجعية القانون على الشخص)",
    explanationAr: "حظر تطبيق النصوص الجنائية بأثر رجعي بموجب المادتين 11 و24 من نظام روما الأساسي.",
    explanationEn: "Prohibition of retroactive criminal application under Articles 11 and 24."
  },
  detriment: {
    en: "Detriment",
    ar: "إضرار / المساس بـ",
    explanationAr: "عدم جواز المساس بحقوق المتهم أو الإضرار بها.",
    explanationEn: "Harm or prejudice to legal rights."
  },
  disqualified: {
    en: "Disqualified / Disqualification",
    ar: "منحّى / معفى / عدم الأهلية (تنحية القاضي أو المدعي العام)",
    explanationAr: "تنحية القاضي أو المدعي العام عن نظر قضية لوجود سبب يمس الحياد (المادتان 41 و42).",
    explanationEn: "Recusal or removal from a case due to conflict of interest or bias."
  },
  vary: {
    en: "Vary / Varied",
    ar: "يعدّل / يغيّر / يتفاوت",
    explanationAr: "سلطة الدائرة في تعديل تدابير الحماية أو أوامر الاحتجاز بتغير الظروف.",
    explanationEn: "To alter or amend an existing judicial order."
  },
  types: {
    en: "Types / Type",
    ar: "أنواع / نوع / فئات",
    explanationAr: "أصناف الأدلة أو الجرائم أو العقوبات.",
    explanationEn: "Categories or kinds."
  },
  daily: {
    en: "Daily",
    ar: "يومي / يومياً",
    explanationAr: "الإجراءات أو التفتيش أو الفسحة اليومية المقررة في لوائح الاحتجاز.",
    explanationEn: "Occurring every day."
  },
  authoritative: {
    en: "Authoritative / Authentic",
    ar: "ذو حجية / معتمد / الحجية",
    explanationAr: "النصوص اللغوية ذات الحجية المتساوية أو التفسير القضائي المعتمد.",
    explanationEn: "Possessing official legal validity and binding weight."
  },
  real: {
    en: "Real (property)",
    ar: "عقاري (الأموال العقارية) / حقيقي",
    explanationAr: "الممتلكات والأموال العقارية، أو الطبيعة الحقيقية للواقعة.",
    explanationEn: "Immovable property/real estate, or actual."
  },
  facsimile: {
    en: "Facsimile / Fax",
    ar: "فاكس / نسخ برقي مصور",
    explanationAr: "وسيلة إرسال الوثائق والإخطارات الفورية المعتمدة في القواعد واللوائح.",
    explanationEn: "Electronic document transmission method."
  },
  counted: {
    en: "Counted / Count",
    ar: "يُحتسب / تُحسب / تهمة",
    explanationAr: "احتساب الأصوات أو المدد الزمنية أو بنود لائحة الاتهام.",
    explanationEn: "Included in a calculation or an individual charge."
  },
  appendix: {
    en: "Appendix / Annex",
    ar: "ملحق / مرفق",
    explanationAr: "الوثيقة الملحقة بالمذكرة أو التقرير أو المعاهدة.",
    explanationEn: "Supplementary document attached to a main text."
  },
  point: {
    en: "Point (of law / in time)",
    ar: "نقطة (قانونية) / مرحلة زمنية",
    explanationAr: "مسألة قانونية محددة أو نقطة زمنية في سير الإجراءات.",
    explanationEn: "Specific legal issue or moment."
  },
  operative: {
    en: "Operative (part of a decision)",
    ar: "منطوق (الحكم أو القرار) / نافذ",
    explanationAr: "الجزء التنفيذي الملزم من الحكم أو القرار القضائي (المنطوق).",
    explanationEn: "The binding dispositive section of a judgment or order."
  },
  conclusion: {
    en: "Conclusion / Conclusions",
    ar: "خاتمة / استنتاج / إبرام",
    explanationAr: "انتهاء الجلسات، أو الخلاصة القانونية التي تنتهي إليها الدائرة، أو إبرام المعاهدة.",
    explanationEn: "Termination of a stage, final reasoning, or treaty signing."
  },
  cumulatively: {
    en: "Cumulatively / Cumulative",
    ar: "بصورة تراكمية / مجتمعة",
    explanationAr: "اجتماع الشروط أو العقوبات معاً.",
    explanationEn: "Combined together in effect or total."
  },
  alternative: {
    en: "Alternative / Alternatively",
    ar: "بديل / على سبيل الاحتياط",
    explanationAr: "التدابير البديلة للاحتجاز أو الطلبات الاحتياطية للخصوم.",
    explanationEn: "Substitute measure or secondary legal submission."
  },
  cited: {
    en: "Cited / Cite",
    ar: "مستشهد به / مذكور / يستشهد",
    explanationAr: "الإشارة إلى السوابق القضائية أو النصوص القانونية في المذكرات والأحكام.",
    explanationEn: "Referenced as legal authority."
  },
  forward: {
    en: "Forward / Forwarded",
    ar: "يحيل / يرسل / قدماً (المضي قدماً)",
    explanationAr: "إرسال الوثائق إلى الجهة المختصة، أو المضي قدماً في الإجراءات.",
    explanationEn: "To transmit officially or proceed onward."
  },
  numbered: {
    en: "Numbered",
    ar: "مرقّم (فقرات أو صفحات مرقمة)",
    explanationAr: "ترقيم فقرات وصفحات المذكرات القضائية لتسهيل الإحالة المرجعية.",
    explanationEn: "Assigned sequential numbers for citation."
  },
  affirmation: {
    en: "Affirmation / Affirm",
    ar: "إقرار رسمي / يؤكد",
    explanationAr: "الإقرار الرسمي بالصدق كبديل لأداء اليمين.",
    explanationEn: "Solemn declaration of truth."
  },
  reopening: {
    en: "Reopening",
    ar: "إعادة فتح (باب المرافعة أو التحقيق)",
    explanationAr: "قرار استثنائي بإعادة فتح مرحلة إجرائية لظهور أدلة جوهرية.",
    explanationEn: "Resumption of a closed procedural phase."
  },
  prospective: {
    en: "Prospective",
    ar: "محتمل / مرتقب / مستقبلي",
    explanationAr: "الشاهد أو المرشح المرتقب.",
    explanationEn: "Expected or future."
  },
  appointee: {
    en: "Appointee",
    ar: "المعيّن / الشخص المكلف",
    explanationAr: "الشخص الذي صدر قرار بتعيينه في منصب أو مهمة.",
    explanationEn: "Individual designated to a post or role."
  },
  solely: {
    en: "Solely / Sole",
    ar: "حصراً / فقط / وحيد",
    explanationAr: "قصر الحكم أو الدليل على غرض محدد دون سواه.",
    explanationEn: "Exclusively and alone."
  },
  travel: {
    en: "Travel",
    ar: "سفر / انتقال (وثائق السفر)",
    explanationAr: "انتقال الشهود والضحايا والمحامين والموظفين للمهمات الرسمية.",
    explanationEn: "Journeying to the Court or field missions."
  },
  periodic: {
    en: "Periodic",
    ar: "دوري / على فترات منتظمة",
    explanationAr: "المراجعة الدورية لأوامر الاحتجاز (كل 120 يوماً بموجب القاعدة 118) أو التقارير الدورية.",
    explanationEn: "Recurring at regular statutory intervals (e.g., 120-day detention review)."
  },
  human: {
    en: "Human (Human rights / Human beings)",
    ar: "الإنسان (حقوق الإنسان) / البشرية",
    explanationAr: "حقوق الإنسان المعترف بها دولياً والتي يجب أن يتفق معها تطبيق وتفسير القانون (المادة 21(3)).",
    explanationEn: "Internationally recognized human rights governing all ICC law application (Article 21(3))."
  },
  humanitarian: {
    en: "Humanitarian (International humanitarian law / assistance)",
    ar: "الإنساني (القانون الدولي الإنساني / المساعدة الإنسانية)",
    explanationAr: "قواعد القانون الدولي الإنساني المطبقة في النزاعات المسلحة وبعثات الإغاثة الإنسانية.",
    explanationEn: "Laws of armed conflict and relief missions protecting civilians and victims."
  },
  safe: {
    en: "Safe (Safe conduct / Safety)",
    ar: "آمن (مرور آمن / أمان / سلامة)",
    explanationAr: "ضمان المرور الآمن للشهود (المادة 93(2)) وتأمين سلامتهم الجسدية والنفسية.",
    explanationEn: "Protected from harm or arrest (e.g., safe conduct assurance under Article 93(2))."
  },
  situated: {
    en: "Situated",
    ar: "واقع / كائن (في إقليم دولة)",
    explanationAr: "المكان الجغرافي الذي توجد فيه الأموال أو الأدلة أو مقر المحكمة.",
    explanationEn: "Physically located within a territory."
  },
  recreation: {
    en: "Recreation",
    ar: "ترفيه / ترويح / فسحة",
    explanationAr: "حقوق الترويح والتمارين البدنية المكفولة للمحتجزين.",
    explanationEn: "Physical exercise and leisure facilities in detention."
  },
  news: {
    en: "News",
    ar: "أخبار / وسائل الإعلام",
    explanationAr: "حق المحتجز في الاطلاع على الأخبار والصحف، والبيانات الصحفية للمحكمة.",
    explanationEn: "Public media and current events."
  },
  telephone: {
    en: "Telephone",
    ar: "هاتف / هاتفي",
    explanationAr: "الاتصالات الهاتفية الرسمية أو الخاصة بالمحتجزين.",
    explanationEn: "Telephonic communication system."
  },
  outcome: {
    en: "Outcome",
    ar: "نتيجة / مآل (الإجراءات أو التحقيق)",
    explanationAr: "النتيجة النهائية التي يسفر عنها التحقيق أو المحاكمة أو الطلب.",
    explanationEn: "Final result of an inquiry, motion, or trial."
  },
  hospital: {
    en: "Hospital / Hospitals",
    ar: "مستشفى / المستشفيات",
    explanationAr: "المستشفيات وأماكن تجمع المرضى والجرحى المحمية من الهجمات العسكرية (المادة 8)، أو الرعاية الاستشفائية للمحتجز.",
    explanationEn: "Medical facilities protected under Article 8 or used for detainee healthcare."
  },
  illness: {
    en: "Illness",
    ar: "مرض / علة صحية",
    explanationAr: "الحالة المرضية التي تبرر الرعاية الطبية أو الإعفاء المؤقت.",
    explanationEn: "Medical condition or sickness."
  },
  complained: {
    en: "Complained (of)",
    ar: "المتظلم منه / المشكو منه",
    explanationAr: "السلوك أو القرار محل الشكوى أو التظلم.",
    explanationEn: "The specific act or ruling challenged in a complaint."
  },
  adhere: {
    en: "Adhere",
    ar: "يلتزم بـ / يتقيد بـ",
    explanationAr: "التقيد الصارم بالمعايير والقواعد القانونية والمهنية.",
    explanationEn: "To comply strictly with rules and standards."
  },
  correction: {
    en: "Correction / Correct",
    ar: "تصحيح / يصوب / صحيح",
    explanationAr: "تصحيح الأخطاء المادية أو المطبعية في السجلات أو القرارات أو الترجمات.",
    explanationEn: "Rectification of clerical, translation, or transcriptional errors."
  },
  quality: {
    en: "Quality",
    ar: "جودة / كفاءة / صفة",
    explanationAr: "معايير الجودة الدقة في الترجمة والعمل القضائي والمهني.",
    explanationEn: "Standard of excellence and accuracy."
  },
  water: {
    en: "Water",
    ar: "ماء / المياه",
    explanationAr: "حرمان المدنيين من المواد التي لا غنى عنها لبقائهم كالغذاء والماء (جريمة حرب بموجب المادة 8)، أو توفيرها للمحتجزين.",
    explanationEn: "Essential survival resource protected against starvation tactics and guaranteed in detention."
  },
  food: {
    en: "Food",
    ar: "غذاء / طعام",
    explanationAr: "حظر تجويع المدنيين وحرمانهم من الغذاء (المادة 8)، وتوفير الغذاء الكافي للمحتجزين.",
    explanationEn: "Nutritional sustenance protected under IHL and detention regulations."
  },
  hygiene: {
    en: "Hygiene",
    ar: "النظافة الصحية / الصحة العامة",
    explanationAr: "معايير النظافة والصحة العامة الواجبة في مركز الاحتجاز.",
    explanationEn: "Sanitary standards maintained in detention facilities."
  },
  visitors: {
    en: "Visitors / Visitor / Visit",
    ar: "الزوار / زائر / زيارة",
    explanationAr: "تنظيم زيارات المحامين والأقارب والدبلوماسيين وهيئات التفتيش للمحتجزين.",
    explanationEn: "Persons authorized to visit detainees or inspect facilities."
  },
  tools: {
    en: "Tools",
    ar: "أدوات /الأدوات / وسائل",
    explanationAr: "الأدوات والوسائل التقنية أو القانونية.",
    explanationEn: "Instruments or software applications."
  },
  interdivisional: {
    en: "Interdivisional",
    ar: "مشترك بين الشعب / بين الأقسام",
    explanationAr: "التنسيق والعمل المشترك بين الشعب المختلفة داخل مكتب المدعي العام أو القلم.",
    explanationEn: "Cooperation across different divisions of an organ."
  },
  guidance: {
    en: "Guidance",
    ar: "إرشاد / توجيهات",
    explanationAr: "التوجيهات والإرشادات القانونية أو الإدارية.",
    explanationEn: "Direction and authoritative advice."
  },
  litigation: {
    en: "Litigation",
    ar: "التقاضي / المرافعات القضائية",
    explanationAr: "مباشرة الخصومة الجنائية والمرافعات أمام دوائر المحكمة.",
    explanationEn: "Conducting legal proceedings before the Chambers."
  },
  level: {
    en: "Level",
    ar: "مستوى / درجة",
    explanationAr: "مستوى السرية أو درجة الخطورة أو المستوى الوظيفي.",
    explanationEn: "Degree, tier, or classification grade."
  },
  interview: {
    en: "Interview / Questioning",
    ar: "مقابلة / استجواب / الاستجواب",
    explanationAr: "سماع أقوال الشهود أو استجواب المشتبه فيهم وفق ضمانات المادة 55.",
    explanationEn: "Formal questioning of a witness or suspect."
  },
  tracing: {
    en: "Tracing (of assets)",
    ar: "تتبع / تقصي (الأصول والممتلكات)",
    explanationAr: "تحديد وتجميد وتتبع العائدات والممتلكات والأصول لأغراض المصادرة وجبر الضرر (المادة 93).",
    explanationEn: "Locating and tracking proceeds, property, and assets for forfeiture or reparations."
  },
  // High-Frequency Arabic Corpus Terms & Roots
  "المتعلقة": {
    en: "Relating to / Concerning",
    ar: "المتعلقة / المتعلق (بـ)",
    explanationAr: "ما يتصل بموضوع المادة أو القضية أو الإجراء قيد النظر.",
    explanationEn: "Pertaining to or connected with a specified legal matter."
  },
  "المتحدة": {
    en: "United (United Nations)",
    ar: "المتحدة (الأمم المتحدة)",
    explanationAr: "منظمة الأمم المتحدة التي ترتبط بها المحكمة الجنائية الدولية باتفاق علاقة بموجب المادة 2.",
    explanationEn: "Referring to the United Nations linked with the ICC under Article 2."
  },
  "المتمثلة": {
    en: "Consisting in / Represented by",
    ar: "المتمثلة / المتمثل (في)",
    explanationAr: "تحديد السلوك المادي أو الأفعال التي تتجسد فيها الجريمة أو الإجراء.",
    explanationEn: "Manifested or consisting in specified acts or elements."
  },
  "يرتبط": {
    en: "Is associated with / Relates to",
    ar: "يرتبط / مرتبط (بـ)",
    explanationAr: "قيام صلة سياقية أو قانونية بين السلوك والهجوم المنهجي أو النزاع المسلح.",
    explanationEn: "Connected or linked contextually to an attack or armed conflict."
  },
  "جانب": {
    en: "Side / Aspect / Alongside",
    ar: "جانب (إلى جانب / من جانب)",
    explanationAr: "يرد بمعنى الطرف أو الناحية الموضوعية أو 'إلى جانب' بمعنى بالإضافة إلى.",
    explanationEn: "Party, aspect, or 'alongside' (in addition to)."
  },
  "الاستئماني": {
    en: "Trust (Trust Fund for Victims)",
    ar: "الاستئماني (الصندوق الاستئماني للضحايا)",
    explanationAr: "الصندوق الاستئماني المنشأ بموجب المادة 79 لصالح ضحايا الجرائم وأسرهم.",
    explanationEn: "Relating to the Trust Fund for Victims established under Article 79."
  },
  "البت": {
    en: "Adjudication / Determination / Ruling",
    ar: "البت / يبت / تبت (في المسألة)",
    explanationAr: "الفصل القضائي الحاسم في الطلب أو الدفع أو الدعوى.",
    explanationEn: "Judicial decision or determination of a pending issue."
  },
  "الإدلاء": {
    en: "Giving (testimony) / Making (a statement)",
    ar: "الإدلاء (بالشهادة أو بأقوال)",
    explanationAr: "تقديم الشاهد لإفادته أو المتهم لأقواله أمام المحكمة.",
    explanationEn: "Delivering oral or written testimony or statements."
  },
  "مقر": {
    en: "Seat / Headquarters (of the Court)",
    ar: "مقر / المقر (مقر المحكمة في لاهاي)",
    explanationAr: "مقر المحكمة الجنائية الدولية في لاهاي بهولندا بموجب المادة 3.",
    explanationEn: "The official Seat of the Court at The Hague under Article 3."
  },
  "تلقاء": {
    en: "Own initiative (Proprio motu)",
    ar: "تلقاء (من تلقاء نفسه / نفسها)",
    explanationAr: "مباشرة المدعي العام للتحقيق أو الدائرة للإجراء بمبادرة ذاتية (Proprio motu).",
    explanationEn: "Acting on one's own motion without external referral."
  },
  "مهام": {
    en: "Functions / Duties / Mandate",
    ar: "مهام / المهام / وظائف",
    explanationAr: "الاختصاصات والواجبات الرسمية الموكولة إلى القضاة وأجهزة المحكمة.",
    explanationEn: "Official responsibilities and statutory functions."
  },
  "الأفعال": {
    en: "Acts / Conduct",
    ar: "الأفعال / أفعال / الفعل",
    explanationAr: "السلوكيات المادية المكونة للجرائم الداخلة في اختصاص المحكمة.",
    explanationEn: "Material acts constituting crimes under the Statute."
  },
  "أفراد": {
    en: "Members / Individuals / Personnel",
    ar: "أفراد / الأفراد / فرد",
    explanationAr: "الأشخاص الطبيعيون أو أعضاء الجماعة المحمية أو أفراد القوات والبعثات.",
    explanationEn: "Natural persons, group members, or mission personnel."
  },
  "هجمات": {
    en: "Attacks / Attack",
    ar: "هجمات / هجوم / مهاجمة",
    explanationAr: "الأعمال العنفية أو العسكرية الموجهة ضد السكان المدنيين أو الأعيان المحمية (المادتان 7 و8).",
    explanationEn: "Acts of violence directed against civilians or protected objects."
  },
  "مصطلح": {
    en: "Term / Terminology",
    ar: "مصطلح / المصطلحات",
    explanationAr: "الألفاظ والمفاهيم القانونية المعرّفة في النظام الأساسي والقواعد.",
    explanationEn: "Defined legal word or expression."
  },
  "صفحة": {
    en: "Page / Pages",
    ar: "صفحة / صفحات / للصفحات",
    explanationAr: "وحدة قياس حجم المذكرات والوثائق المودعة في السجل.",
    explanationEn: "Document leaf governed by formatting regulations."
  },
  "مبادرة": {
    en: "Initiative (Proprio motu)",
    ar: "مبادرة / بمبادرة (ذاتية)",
    explanationAr: "اتخاذ الإجراء أو فتح التحقيق بمبادرة ذاتية من المدعي العام أو الدائرة.",
    explanationEn: "Self-initiated procedural action."
  },
  "خلاف": {
    en: "Contrary (Unless otherwise provided) / Dispute",
    ar: "خلاف (ما لم يُنص على خلاف ذلك) / نزاع",
    explanationAr: "يرد في صيغة الاستثناء التشريعي 'ما لم ينص على خلاف ذلك' أو بمعنى النزاع.",
    explanationEn: "Used in 'unless otherwise provided' or meaning disagreement."
  },
  "العناصر": {
    en: "Elements",
    ar: "العناصر / عناصر / أركان",
    explanationAr: "الأركان القانونية للجرائم (المادية والمعنوية والسياقية) أو عناصر الإثبات.",
    explanationEn: "Constituent parts of a crime or evidentiary test."
  },
  "الواردة": {
    en: "Contained / Set out / Stipulated",
    ar: "الواردة / الوارد (في النص)",
    explanationAr: "الأحكام أو الشروط المنصوص عليها داخل مادة أو وثيقة محددة.",
    explanationEn: "Included or stated within a legal instrument."
  },
  "الأول": {
    en: "First / Initial",
    ar: "الأول / الأولى / أولاً",
    explanationAr: "المرتبة الأولى أو مرحلة المثول الأول أمام المحكمة.",
    explanationEn: "Initial or primary."
  },
  "قيد": {
    en: "Under (detention / consideration) / Registration",
    ar: "قيد / القيد (قيد الاحتجاز / قيد النظر)",
    explanationAr: "التسجيل في السجل الرسمي، أو كون الشخص رهن الاحتجاز أو المسألة قيد البحث.",
    explanationEn: "Official registration, or currently held/pending."
  },
  "يكن": {
    en: "Was / Be (after negation 'lam')",
    ar: "يكن / تكن (لم يكن)",
    explanationAr: "فعل الكون المجزوم بعد أداة النفي في الصياغة التشريعية.",
    explanationEn: "Jussive form of 'to be' used in negative statutory conditions."
  },
  "عبارة": {
    en: "Expression / Phrase / Wording",
    ar: "عبارة / العبارة",
    explanationAr: "الصياغة اللفظية أو التركيب القانوني الوارد في المادة.",
    explanationEn: "Specific statutory phrase or clause."
  },
  "قيام": {
    en: "Commission / Existence / Undertaking",
    ar: "قيام (الشخص بفعل / قيام حالة)",
    explanationAr: "مباشرة الشخص لفعل قانوني أو مادي، أو تحقق وجود حالة أو نزاع.",
    explanationEn: "Performing an act or the existence of a state of affairs."
  },
  "الدليل": {
    en: "Evidence / Proof / Guide",
    ar: "الدليل / دليل / الأدلة",
    explanationAr: "الحجة القانونية أو البينة المقدمة لإثبات واقعة أمام القضاء.",
    explanationEn: "Item of proof tendered before a Chamber."
  },
  "يحق": {
    en: "Is entitled to / Has the right",
    ar: "يحق / تحق (له)",
    explanationAr: "ثبوت المكنة أو الحق القانوني للخصم أو المتهم أو الضحية.",
    explanationEn: "Possesses the statutory right."
  },
  "الحراسة": {
    en: "Custody / Guard",
    ar: "الحراسة / حراسة (تحويل الشخص تحت الحراسة)",
    explanationAr: "الرقابة الأمنية والقانونية على الشخص المحتجز.",
    explanationEn: "Protective or detention supervision."
  },
  "اللغوية": {
    en: "Linguistic / Language",
    ar: "اللغوية / لغوي (الخدمات اللغوية)",
    explanationAr: "خدمات الترجمة الشفوية والتحريرية في المحكمة.",
    explanationEn: "Relating to languages, interpretation, and translation."
  },
  "عدد": {
    en: "Number",
    ar: "عدد / العدد",
    explanationAr: "المقدار الرقمي للأعضاء أو الشهود أو الصفحات.",
    explanationEn: "Quantity or count."
  },
  "طبيعة": {
    en: "Nature / Character",
    ar: "طبيعة / الطبيعة",
    explanationAr: "كنه الجريمة أو التهمة أو الظرف القانوني.",
    explanationEn: "Essential character or legal quality."
  },
  "وجب": {
    en: "Shall / Must (in conditional clauses)",
    ar: "وجب / وجوب (فعل الإلزام في جواب الشرط)",
    explanationAr: "ثبوت الالتزام القانوني الحتمي عند تحقق الشرط المنصوص عليه.",
    explanationEn: "Mandatory obligation triggered when a statutory condition is met."
  },
  "منح": {
    en: "Granting / Awarding",
    ar: "منح / يمنح / منحة",
    explanationAr: "إعطاء الإذن القضائي أو منح المساعدة القانونية.",
    explanationEn: "Conferring permission, status, or financial aid."
  },
  "عما": {
    en: "About what / From what",
    ar: "عما (عن + ما)",
    explanationAr: "تركيب لغوي قانوني مكون من حرف الجر (عن) والاسم الموصول (ما).",
    explanationEn: "Compound preposition meaning 'concerning that which' or 'from what'."
  },
  "مما": {
    en: "Which / From what (resulting in)",
    ar: "مما (من + ما)",
    explanationAr: "تركيب يفيد التبعيض أو بيان النتيجة المترتبة (مما يؤدي إلى).",
    explanationEn: "Compound meaning 'of that which' or 'thereby causing'."
  },
  "ممن": {
    en: "From those who / Of whom",
    ar: "ممن (من + من)",
    explanationAr: "تركيب يفيد بيان الفئة التي ينتمي إليها الشخص.",
    explanationEn: "Compound meaning 'from among those who'."
  },
  "عشرة": {
    en: "Ten / Teens",
    ar: "عشرة / عشر",
    explanationAr: "عدد يدخل في تحديد المدد الزمنية والسن القانونية والنصاب.",
    explanationEn: "Numerical value ten."
  },
  "المؤيدة": {
    en: "Supporting / Corroborating (materials)",
    ar: "المؤيدة / المؤيد (المواد والوثائق المؤيدة)",
    explanationAr: "الأدلة والمستندات المرفقة لتدعيم طلب أمر القبض أو لائحة التهم.",
    explanationEn: "Supporting documentation and evidence corroborating a filing."
  },
  "المصادر": {
    en: "Sources / Forfeited",
    ar: "المصادر / مصادر (مصادر القانون أو المعلومات)",
    explanationAr: "ينابيع القاعدة القانونية (المادة 21) أو مصادر المعلومات السرية، أو المال المصادر.",
    explanationEn: "Legal authorities (Article 21), information origins, or confiscated property."
  },
  "جملة": {
    en: "Among (inter alia) / Sentence / Total",
    ar: "جملة (في جملة أمور / جملة العقوبات)",
    explanationAr: "يرد في تعبير 'في جملة أمور' (inter alia) أو مجموع العقوبات.",
    explanationEn: "Used in 'inter alia' (among other things) or aggregate sentences."
  },
  "جهة": {
    en: "Entity / Authority / Organ",
    ar: "جهة / الجهة (المختصة)",
    explanationAr: "الهيئة أو السلطة الرسمية أو الطرف المعني.",
    explanationEn: "Competent authority, body, or side."
  },
  "بمجرد": {
    en: "As soon as / Upon",
    ar: "بمجرد / فور",
    explanationAr: "ترتب الأثر أو الالتزام الإجرائي فور تحقق الواقعة مباشرةً.",
    explanationEn: "Immediately upon the occurrence of an event."
  },
  "مدعٍ": {
    en: "Prosecutor / Claimant",
    ar: "مدعٍ (المدعي العام / نائب مدعٍ عام)",
    explanationAr: "صيغة التنكير لكلمة المدعي في النصوص المنظمة لمكتب المدعي العام.",
    explanationEn: "Indefinite form of Prosecutor or claimant."
  },
  "الدفوع": {
    en: "Submissions / Defences / Pleas",
    ar: "الدفوع / دفوع",
    explanationAr: "أوجه الدفاع والحجج القانونية والطلبات التي يبديها الخصوم أمام الدائرة.",
    explanationEn: "Legal arguments, challenges, or grounds excluding responsibility."
  },
  "قاعة": {
    en: "Courtroom / Hall",
    ar: "قاعة (قاعة المحكمة / الجلسة)",
    explanationAr: "قاعة الجلسات التي تنعقد فيها الدوائر القضائية.",
    explanationEn: "Chamber room where judicial hearings are conducted."
  },
  "موضع": {
    en: "Subject (of) / Locus",
    ar: "موضع (موضع البحث / موضع التهمة)",
    explanationAr: "محل النظر القضائي أو موضوع الجريمة.",
    explanationEn: "The subject matter under judicial examination."
  },
  "الأحوال": {
    en: "Circumstances / Cases (In all cases)",
    ar: "الأحوال / أحوال (في جميع الأحوال)",
    explanationAr: "الحالات والظروف التي ينطبق فيها الحكم القانوني.",
    explanationEn: "Situations or instances ('in all cases')."
  },
  "المنسوبة": {
    en: "Alleged / Attributed",
    ar: "المنسوبة / المنسوب (إليه)",
    explanationAr: "الأفعال أو الجرائم المسندة إلى المشتبه فيه أو المتهم.",
    explanationEn: "Imputed or charged against an individual."
  },
  "تحال": {
    en: "Is referred / Transmitted",
    ar: "تحال / يحال (إحالة الحالة أو المسألة)",
    explanationAr: "إحالة الحالة إلى المدعي العام (المادتان 13 و14) أو إحالة المسألة للدائرة.",
    explanationEn: "Referred or forwarded officially to the Prosecutor or a Chamber."
  },
  "المهل": {
    en: "Time limits / Deadlines",
    ar: "المهل / مهلة (المواعيد الإجرائية)",
    explanationAr: "الآجال والمواعيد القانونية المحددة لتقديم الطلبات والطعون.",
    explanationEn: "Prescribed procedural periods for filings and appeals."
  },
  "الاحتياطي": {
    en: "Pre-trial (detention) / Alternate / Reserve",
    ar: "الاحتياطي (الحبس الاحتياطي / القاضي الاحتياطي)",
    explanationAr: "الاحتجاز السابق للمحاكمة أو القاضي البديل المعين لحضور الجلسات.",
    explanationEn: "Provisional pre-trial detention or alternate/reserve status."
  },
  "محضر": {
    en: "Record / Minutes / Transcript",
    ar: "محضر / محاضر (الجلسات أو التحقيق)",
    explanationAr: "الوثيقة الرسمية التي تدون فيها وقائع الجلسة أو إجراءات التحقيق.",
    explanationEn: "Official written account of proceedings or interviews."
  },
  "يلحق": {
    en: "Causes / Inflicts (harm) / Attached",
    ar: "يلحق / إلحاق (ضرر أو أذى)",
    explanationAr: "ترتيب ضرر أو أذى بالضحية أو إلحاق وثيقة بأخرى.",
    explanationEn: "Inflicts harm/damage or appends."
  },
  "الرهائن": {
    en: "Hostages (Taking of hostages)",
    ar: "الرهائن / رهينة (أخذ الرهائن)",
    explanationAr: "جريمة أخذ الرهائن المحظورة كجريمة حرب بموجب المادة 8 من نظام روما الأساسي.",
    explanationEn: "Persons seized or detained to compel a third party; war crime under Article 8."
  },
  "الخامسة": {
    en: "Fifth",
    ar: "الخامسة / الخامس / خمسة",
    explanationAr: "الترتيب العددي الخامس في الفقرات أو المواد.",
    explanationEn: "Ordinal number fifth."
  },
  "الرابعة": {
    en: "Fourth",
    ar: "الرابعة / الرابع / أربعة",
    explanationAr: "الترتيب العددي الرابع.",
    explanationEn: "Ordinal number fourth."
  },
  "السادسة": {
    en: "Sixth",
    ar: "السادسة / السادس / ستة",
    explanationAr: "الترتيب العددي السادس.",
    explanationEn: "Ordinal number sixth."
  },
  "السابعة": {
    en: "Seventh",
    ar: "السابعة / السابع / سبع / سبعة",
    explanationAr: "الترتيب العددي السابع.",
    explanationEn: "Ordinal number seventh."
  },
  "الثامنة": {
    en: "Eighth",
    ar: "الثامنة / الثامن / ثمانية",
    explanationAr: "الترتيب العددي الثامن.",
    explanationEn: "Ordinal number eighth."
  },
  "التاسعة": {
    en: "Ninth",
    ar: "التاسعة / التاسع / تسع / تسعة",
    explanationAr: "الترتيب العددي التاسع (ومدة ولاية القضاة تسع سنوات).",
    explanationEn: "Ordinal number ninth (e.g., nine-year judicial term)."
  },
  "العاشرة": {
    en: "Tenth",
    ar: "العاشرة / العاشر",
    explanationAr: "الترتيب العددي العاشر.",
    explanationEn: "Ordinal number tenth."
  },
  "أماكن": {
    en: "Places / Premises / Locations",
    ar: "أماكن / الأماكن",
    explanationAr: "المواقع الجغرافية أو المباني والمرافق.",
    explanationEn: "Sites, buildings, or venues."
  },
  "العطلة": {
    en: "Recess (Judicial recess) / Holiday",
    ar: "العطلة (العطلة القضائية) / إجازة",
    explanationAr: "فترة العطلة القضائية للمحكمة أو الإجازات الرسمية.",
    explanationEn: "Official court recess or leave period."
  },
  "رفع": {
    en: "Lifting (immunity/confidentiality) / Filing (an appeal) / Adjourning",
    ar: "رفع (الدعوى / السرية / الحصانة / الجلسة)",
    explanationAr: "إقامة الطعن أو الدعوى، أو إنهاء الجلسة، أو إزالة قيد السرية أو الحصانة.",
    explanationEn: "Lodging a proceeding, removing a restriction, or adjourning a hearing."
  },
  "الحجز": {
    en: "Attachment / Freezing / Detention",
    ar: "الحجز (التحفظي على الأموال) / الاحتجاز",
    explanationAr: "تجميد الأموال والممتلكات والحجز عليها تحفظياً، أو احتجاز الأشخاص.",
    explanationEn: "Provisional seizure/freezing of assets or custodial detention."
  },
  "الاستعراض": {
    en: "Review (Review Conference / Judicial review)",
    ar: "الاستعراض / استعراض (إعادة النظر / المؤتمر الاستعراضي)",
    explanationAr: "مراجعة القرارات والعقوبات أو المؤتمر الاستعراضي لنظام روما الأساسي.",
    explanationEn: "Formal re-examination of decisions, sentences, or the Statute."
  },
  "يعني": {
    en: "Means / Signifies",
    ar: "يعني / تعني",
    explanationAr: "صيغة التعريف التشريعي للمصطلحات القانونية (المادة 7 والمادة 8 مكرراً).",
    explanationEn: "Statutory definition verb establishing exact legal meaning."
  },
  "معيشية": {
    en: "Conditions of life",
    ar: "معيشية (أحوال معيشية يراد بها إهلاك الجماعة)",
    explanationAr: "إخضاع الجماعة عمداً لأحوال معيشية يقصد بها إهلاكها الفعلي في جريمة الإبادة الجماعية.",
    explanationEn: "Relating to conditions of life calculated to bring about physical destruction."
  },
  "يبدو": {
    en: "Appears / Seems",
    ar: "يبدو / تبدو",
    explanationAr: "ما يظهر للدائرة القضائية من ظاهر الأوراق والوقائع.",
    explanationEn: "Is apparent to a Chamber from the record."
  },
  "المضي": {
    en: "Proceeding / Moving forward",
    ar: "المضي (قدماً في التحقيق أو المحاكمة)",
    explanationAr: "مواصلة السير في الإجراءات القضائية أو التحقيقية.",
    explanationEn: "Continuing onward with an investigation or trial."
  },
  "المعروضة": {
    en: "Before (the Chamber) / Submitted / Presented",
    ar: "المعروضة / المعروض (على المحكمة أو الدائرة)",
    explanationAr: "القضايا أو الأدلة أو الطلبات المطروحة أمام الدائرة القضائية للفصل فيها.",
    explanationEn: "Pending before or presented to a Chamber."
  },
  "احترام": {
    en: "Respect / Compliance",
    ar: "احترام (القانون والحقوق والكرامة)",
    explanationAr: "واجب مراعاة وحماية كرامة الأشخاص وحقوقهم وأحكام القانون.",
    explanationEn: "Observance and upholding of rights, dignity, and legal norms."
  },
  "المقبوض": {
    en: "Arrested (person)",
    ar: "المقبوض (عليه)",
    explanationAr: "الشخص الذي أُلقي القبض عليه بموجب مذكرة توقيف صادرة عن المحكمة.",
    explanationEn: "Person taken into custody pursuant to a warrant of arrest."
  },
  "يؤدي": {
    en: "Leads to / Performs (oath / duties)",
    ar: "يؤدي / تؤدي (إلى نتيجة / اليمين / المهام)",
    explanationAr: "إفضاء الفعل إلى نتيجة، أو حلف اليمين والتعهد، أو القيام بالواجبات.",
    explanationEn: "Results in a consequence, takes an oath, or discharges duties."
  },
  "تتوفر": {
    en: "Is available / Exists / Met",
    ar: "تتوفر / يتوفر / توافر",
    explanationAr: "وجود الشروط القانونية أو الأدلة أو الموارد اللازمة.",
    explanationEn: "Presence or satisfaction of required conditions or evidence."
  },
  "الجمهور": {
    en: "The public",
    ar: "الجمهور / للجمهور (علنية الجلسات والوثائق)",
    explanationAr: "عامة الناس الذين يحق لهم حضور الجلسات العلنية والاطلاع على السجلات العامة.",
    explanationEn: "General public entitled to attend open sessions and access public records."
  },
  "التوطين": {
    en: "Relocation / Resettlement (of witnesses)",
    ar: "التوطين (إعادة توطين الشهود المعرضين للخطر)",
    explanationAr: "تدبير حمائي استثنائي بنقل الشاهد وأسرته للإقامة في مكان آمن.",
    explanationEn: "Protective measure moving an endangered witness to a safe location."
  },
  "ذا": {
    en: "Having / Of (relevant / competent)",
    ar: "ذا / ذات / ذو / ذوي (ذا صلة / ذات الاختصاص)",
    explanationAr: "اسم من الأسماء الخمسة بمعنى صاحب، يفيد الاتصاف بصفة قانونية.",
    explanationEn: "Possessing a specified legal attribute or connection."
  },
  "المقضي": {
    en: "Adjudged / Sentenced / Ordered",
    ar: "المقضي (به من عقوبة أو تعويض)",
    explanationAr: "ما حكمت به المحكمة في منطوق حكمها.",
    explanationEn: "Formally decreed or awarded by judgment."
  },
  "الردود": {
    en: "Responses / Replies",
    ar: "الردود / ردّ",
    explanationAr: "المذكرات الجوابية التي يودعها الخصوم رداً على طلبات الطرف الآخر.",
    explanationEn: "Answering filings submitted by parties."
  },
  "يتمتع": {
    en: "Enjoys (immunities / rights)",
    ar: "يتمتع / تتمتع (بالحقوق أو الامتيازات والحصانات)",
    explanationAr: "ثبوت الحقوق أو الامتيازات والحصانات القانونية للمحكمة أو الأشخاص (المادة 48).",
    explanationEn: "Possesses statutory rights, privileges, or immunities."
  },
  "المعرضين": {
    en: "At risk / Vulnerable / Exposed",
    ar: "المعرضين (للخطر أو الضرر) / عرضة",
    explanationAr: "الشهود أو الضحايا الذين يتهددهم خطر بسبب إدلائهم بالشهادة أو تفاعلهم مع المحكمة.",
    explanationEn: "Persons facing risk of harm on account of testimony or cooperation."
  },
  "بغية": {
    en: "With a view to / In order to",
    ar: "بغية / بهدف / من أجل",
    explanationAr: "بيان الغاية القانونية أو الإجرائية من اتخاذ التدبير.",
    explanationEn: "For the purpose of achieving a specified legal aim."
  },
  "الإسهام": {
    en: "Contribution / Contributing",
    ar: "الإسهام / المساهمة",
    explanationAr: "المساهمة الإجرامية في ارتكاب الجريمة (المادة 25(3)(د)) أو الإسهام في منع الجرائم.",
    explanationEn: "Contributing to the commission of a crime (Article 25) or institutional goals."
  },
  "المرافعات": {
    en: "Pleadings / Oral arguments / Submissions",
    ar: "المرافعات / مرافعة",
    explanationAr: "عرض الحجج والأسانيد القانونية والواقعية شفهياً أو كتابةً أمام المحكمة.",
    explanationEn: "Formal oral or written presentation of a party's case."
  },
  "رتب": {
    en: "Ranks / Grades / Arranged",
    ar: "رتب / رتبة",
    explanationAr: "الدرجات والرتب الوظيفية أو العسكرية.",
    explanationEn: "Official grades or military ranks."
  },
  "الإجازة": {
    en: "Leave / Authorization",
    ar: "الإجازة / إجازة (الإذن بالاستئناف أو إجازة العمل)",
    explanationAr: "إذن الدائرة بالاستئناف (Leave to appeal) أو الإجازة الإدارية للموظفين.",
    explanationEn: "Judicial leave to appeal or administrative leave."
  },
  "إحداث": {
    en: "Causing / Inflicting / Creation",
    ar: "إحداث (ضرر أو أثر)",
    explanationAr: "التسبب في وقوع النتيجة الجرمية.",
    explanationEn: "Bringing about a physical or legal consequence."
  },
  "مرتين": {
    en: "Twice (Double jeopardy - Ne bis in idem)",
    ar: "مرتين (عدم جواز المحاكمة عن ذات الجرم مرتين)",
    explanationAr: "حظر محاكمة الشخص أمام المحكمة أو قضاء آخر مرتين عن السلوك ذاته (المادة 20).",
    explanationEn: "Prohibition of trying a person twice for the same conduct under Article 20."
  },
  "محل": {
    en: "Place / Subject / In place of",
    ar: "محل (محل الإقامة / محل النظر / يحل محل)",
    explanationAr: "المكان القانوني، أو موضوع النزاع، أو الحلول محل شخص آخر.",
    explanationEn: "Locus, subject matter, or substitution."
  },
  "تجريم": {
    en: "Criminalization / Incrimination",
    ar: "تجريم (تجريم الفعل / تجريم الذات)",
    explanationAr: "إسباغ الصفة الجرمية على السلوك بموجب القانون أو حظر إجبار الشخص على تجريم نفسه.",
    explanationEn: "Making conduct a crime by law, or self-incrimination."
  },
  "خطوات": {
    en: "Steps / Measures",
    ar: "خطوات / خطوة",
    explanationAr: "الإجراءات والتدابير العملية التي تتخذها المحكمة أو المدعي العام.",
    explanationEn: "Concrete procedural actions taken."
  },
  "المخلة": {
    en: "Offences against (the administration of justice)",
    ar: "المخلة (الجرائم المخلة بإقامة العدالة)",
    explanationAr: "الأفعال الماسة بحسن سير العدالة وسلامة الإجراءات بموجب المادة 70.",
    explanationEn: "Prejudicial to or violating the administration of justice under Article 70."
  },
  "بإقامة": {
    en: "Administration (of justice) / Establishing",
    ar: "بإقامة / إقامة (إقامة العدالة / إقامة الدعوى)",
    explanationAr: "تحقيق العدالة القضائية وحمايتها من التضليل أو الإعاقة (المادة 70).",
    explanationEn: "Carrying out justice or instituting proceedings."
  },
  "تنص": {
    en: "Provides / Stipulates",
    ar: "تنص / ينص (عليه القانون)",
    explanationAr: "ورود الحكم القانوني صراحةً في متن النظام الأساسي أو القواعد.",
    explanationEn: "Expressly prescribes in a statutory text."
  },
  "توجه": {
    en: "Directs / Sends / Addresses",
    ar: "توجه / يوجه (الطلبات أو الهجمات أو التهم)",
    explanationAr: "إرسال المحكمة لطلباتها، أو توجيه التهم، أو توجيه الهجمات.",
    explanationEn: "Addresses requests, charges, or attacks."
  },
  "جاز": {
    en: "May (in conditional clauses)",
    ar: "جاز (يجوز في جواب الشرط)",
    explanationAr: "ثبوت الرخصة أو السلطة التقديرية للمحكمة عند تحقق الشرط.",
    explanationEn: "Permissive authority triggered when a condition is met."
  },
  "المعترف": {
    en: "Recognized (Internationally recognized human rights)",
    ar: "المعترف (بها دولياً)",
    explanationAr: "الحقوق والمعايير القانونية المقررة والمعترف بها على الصعيد الدولي (المادة 21(3)).",
    explanationEn: "Acknowledged under international law and treaties."
  },
  "بأنني": {
    en: "That I (in solemn undertakings)",
    ar: "بأنني / وبأنني (في صيغة التعهد الرسمي واليمين)",
    explanationAr: "صيغة المتكلم المستخدمة في التعهد الرسمي للقضاة والمسؤولين والشهود.",
    explanationEn: "First-person declaration formula used in solemn undertakings and oaths."
  },
  "نزاهة": {
    en: "Integrity / Impartiality",
    ar: "نزاهة / ونزاهة (الأخلاقية والقضائية)",
    explanationAr: "الاستقامة والتجرد والحياد المشترط في القضاة والمدعي العام وسلامة الإجراءات.",
    explanationEn: "Probity, rectitude, and fairness of officials and proceedings."
  },
  "يقضي": {
    en: "Rules / Orders / Serves (a sentence)",
    ar: "يقضي / تقضي (المحكمة / مدة العقوبة)",
    explanationAr: "حكم المحكمة بأمر معين، أو تنفيذ المحكوم عليه لمدة العقوبة.",
    explanationEn: "Adjudges judicially or serves a term of imprisonment."
  },
  "إساءة": {
    en: "Abuse (of process / of power) / Ill-treatment",
    ar: "إساءة (استعمال الحق أو الإجراءات / المعاملة)",
    explanationAr: "التعسف في استعمال الإجراءات القضائية أو إساءة معاملة الأشخاص.",
    explanationEn: "Misuse of authority/procedure or mistreatment."
  },
  "تسبب": {
    en: "Causes / Caused",
    ar: "تسبب / يتسبب (في ضرر أو ألم)",
    explanationAr: "إحداث النتيجة الضارة كركن مادي في الجريمة.",
    explanationEn: "Brings about harm, injury, or delay."
  },
  "استبعاد": {
    en: "Exclusion (of evidence)",
    ar: "استبعاد (الأدلة غير المقبولة)",
    explanationAr: "قرار الدائرة بعدم قبول دليل تم الحصول عليه بانتهاك النظام الأساسي أو حقوق الإنسان (المادة 69(7)).",
    explanationEn: "Ruling evidence inadmissible under Article 69(7)."
  },
  "للاضطلاع": {
    en: "To discharge / Undertake (functions)",
    ar: "للاضطلاع / يضطلع (بالمهام والاختصاصات)",
    explanationAr: "النهوض بالمسؤوليات والوظائف المقررة قانوناً.",
    explanationEn: "To carry out and fulfill official duties."
  },
  "رأت": {
    en: "Considered / Deemed (if the Chamber considers)",
    ar: "رأت / رأى (إذا رأت الدائرة)",
    explanationAr: "تقدير الدائرة القضائية لملاءمة أو ضرورة اتخاذ إجراء معين.",
    explanationEn: "Judicial determination that a measure is appropriate."
  },
  "تراها": {
    en: "It deems / Considers them",
    ar: "تراها / يراها (مناسبة أو ضرورية)",
    explanationAr: "ما تقدره المحكمة ملائماً في حدود سلطتها التقديرية.",
    explanationEn: "Deemed appropriate by the Chamber."
  },
  "صديق": {
    en: "Amicus curiae (Friend of the Court)",
    ar: "صديق (صديق المحكمة - Amicus curiae)",
    explanationAr: "الدولة أو المنظمة أو الخبير الذي تأذن له الدائرة بتقديم ملاحظات بموجب القاعدة 103.",
    explanationEn: "Intervenor permitted under Rule 103 to submit observations as a friend of the court."
  },
  "لإبداء": {
    en: "To express / Submit (views or observations)",
    ar: "لإبداء / إبداء (الملاحظات أو الآراء)",
    explanationAr: "تقديم وجهات النظر والدفوع أمام الدائرة القضائية.",
    explanationEn: "Presenting observations, views, or arguments."
  },
  "المتبادلة": {
    en: "Mutual (legal assistance)",
    ar: "المتبادلة / متبادل (المساعدة القانونية المتبادلة)",
    explanationAr: "التعاون القضائي المتبادل وتبادل المعلومات والأدلة.",
    explanationEn: "Reciprocal judicial cooperation and exchange."
  },
  "يقتضيه": {
    en: "Required by / As required",
    ar: "يقتضيه / تقتضيه / اقتضت (مصلحة العدالة أو الظروف)",
    explanationAr: "ما تستلزمه وتستوجبه مقتضيات العدالة أو طبيعة الحال.",
    explanationEn: "Necessitated by the interests of justice or circumstances."
  },
  "تتاح": {
    en: "Is made available / Afforded",
    ar: "تتاح / يتاح (تتاح له الفرصة أو الوثائق)",
    explanationAr: "تمكين الطرف من الاطلاع على المواد أو إعطاؤه فرصة الرد.",
    explanationEn: "Provided or granted access/opportunity."
  },
  "العابر": {
    en: "Transit (State of transit)",
    ar: "العابر / عبور (النقل العابر عبر إقليم دولة)",
    explanationAr: "نقل الشخص المسلم للمحكمة عبر إقليم دولة ثالثة بموجب المادة 89(3).",
    explanationEn: "Passage of a surrendered person through a third State under Article 89(3)."
  }
};

