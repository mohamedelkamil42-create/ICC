import { Part } from './RomeStatuteViewer';

/**
 * لوائح المحكمة الجنائية الدولية
 * Regulations of the Court - Adopted pursuant to article 52 of the Rome Statute
 * 9 Chapters, 134 Regulations (Regulations 1-126 plus variants)
 * Fully bilingual (Arabic & English) with zero mixed language leakage.
 */
export const regulationsOfTheCourtParts: Part[] = [
  {
    "id": "reg-chapter-1",
    "labelAr": "الباب الأول",
    "labelEn": "CHAPTER 1",
    "titleAr": "أحكام عامة",
    "titleEn": "General provisions",
    "articles": [
      {
        "id": "reg-1",
        "number": "1",
        "titleAr": "اعتماد هذه اللوائح",
        "titleEn": "Adoption of these Regulations",
        "contentAr": "1 - اعتُمدت هذه اللوائح عملاً بالمادة 52 وتُقرأ مع مراعاة أحكام النظام الأساسي والقواعد الإجرائية وقواعد الإثبات.\n2 - اعتُمدت هذه اللوائح باللغتين الإنجليزية والفرنسية، وتتساوى الترجمات باللغات الرسمية للمحكمة في الحجية القانونية.",
        "contentEn": "- 1. These Regulations have been adopted pursuant to article 52 and shall be read subject to the Statute and the Rules.\n- 2. These Regulations have been adopted in English and French. Translations in the official languages of the Court are equally authentic."
      },
      {
        "id": "reg-2",
        "number": "2",
        "titleAr": "استخدام المصطلحات",
        "titleEn": "Use of terms",
        "contentAr": "1 - في هذه اللوائح:\n- تشير كلمة \"المادة\" إلى إحدى مواد النظام الأساسي؛\n- تشير عبارة \"الجمعية\" إلى جمعية الدول الأطراف في النظام الأساسي؛\n- تشير كلمة \"الدائرة\" إلى إحدى دوائر المحكمة؛\n- يشير مصطلح \"كبير مسؤولي الحراسة\" إلى الموظف المعين من جانب المحكمة رئيساً لموظفي مركز الاحتجاز؛\n- تشير كلمة \"محامٍ\" إلى محامي الدفاع والممثل القانوني للضحية، سواء أكان محامياً رئيساً أم محامياً مشاركاً؛\n- تشير كلمة \"المحكمة\" إلى المحكمة الجنائية الدولية؛\n- يشير مصطلح \"نائب المدعي العام\" إلى نائب المدعي العام للمحكمة؛\n- يشير مصطلح \"نائب المسجل\" إلى نائب مسجل المحكمة؛\n- يشير مصطلح \"الشخص المحتجز\" إلى أي شخص محتجز في مركز احتجاز؛\n- يشير مصطلح \"مركز الاحتجاز\" إلى أي منشأة احتجاز أو سجن بخلاف المنشأة الموصوفة في الفقرة 4 من المادة 103 تديرها المحكمة أو توفرها سلطات أخرى للمحكمة؛\n- تشير كلمة \"الشعبة\" إلى إحدى شعب المحكمة القضائية؛\n- يشير مصطلح \"أركان الجرائم\" إلى أركان الجرائم المنصوص عليها في المادة 9؛\n- تشير عبارة \"الدولة المضيفة\" إلى مملكة هولندا؛\n- تشير كلمة \"قاضٍ\" إلى أحد قضاة المحكمة؛\n- تشير عبارة \"قائمة المحامين\" إلى قائمة المحامين الموصوفة في القاعدة الفرعية 2 من القاعدة 21، وتشمل أيضاً الممثلين القانونيين للضحايا، والمحامين الموكلين بدون مساعدة قانونية مدفوعة من المحكمة والذين يرغبون في القيد بالقائمة؛\n- تشير عبارة \"مكتب المدعي العام\" إلى جهاز المحكمة المنصوص عليه في المادة 34؛\n- تشير عبارة \"الجلسة العامة\" إلى الجلسة العامة للقضاة المنصوص عليها في القاعدة 4؛\n- تشير عبارة \"هيئة الرئاسة\" إلى جهاز المحكمة المنصوص عليه في المادة 34 والمؤلف من الرئيس والنائبين الأول والثاني للرئيس؛\n- تشير كلمة \"الرئيس\" إلى رئيس المحكمة؛\n- يشير مصطلح \"القاضي الرئيس\" إلى القاضي الذي يرأس الدائرة؛\n- يشير مصطلح \"المدعي العام\" إلى المدعي العام للمحكمة؛\n- يشير مصطلح \"المسجل\" إلى مسجل المحكمة؛\n- تشير عبارة \"قلم المحكمة\" إلى جهاز المحكمة المنصوص عليه في المادة 34؛\n- تشير كلمة \"اللائحة\" إلى إحدى لوائح هذه اللوائح؛\n- تشير عبارة \"اللوائح\" إلى لوائح المحكمة المعتمدة عملاً بالمادة 52؛\n- تشير كلمة \"القاعدة\" إلى إحدى قواعد القواعد الإجرائية وقواعد الإثبات، بما فيها القواعد المؤقتة الموضوعة بموجب الفقرة 3 من المادة 51؛\n- تشير عبارة \"القواعد\" إلى القواعد الإجرائية وقواعد الإثبات؛\n- تشير عبارة \"الدولة الطرف\" إلى أي دولة طرف في النظام الأساسي؛\n- تشير عبارة \"النظام الأساسي\" إلى نظام روما الأساسي للمحكمة الجنائية الدولية.\n2 - في هذه اللوائح، تشمل صيغة المفرد صيغة الجمع والعكس بالعكس.",
        "contentEn": "- 1. In these Regulations:\n  - “article” refers to an article of the Statute;\n  - “Assembly” refers to the Assembly of States Parties to the Statute;\n  - “Chamber” refers to a Chamber of the Court;\n  - “Chief Custody Officer” refers to the officer appointed by the Court as the head of the staff of the detention centre;\n  - “counsel” refers to a defence counsel and a legal representative of a victim, whether lead or associate counsel;\n  - “Court” refers to the International Criminal Court;\n  - “Deputy Prosecutor” refers to a Deputy Prosecutor of the Court;\n  - “Deputy Registrar” refers to the Deputy Registrar of the Court;\n  - “detained person” refers to any person detained in a detention centre;\n  - “detention centre” refers to any prison facility other than the prison facility described in article 103, paragraph 4, maintained by the Court or maintained by other authorities and made available to the Court;\n  - “Division” refers to a Division of the Court;\n  - “Elements of Crimes” refers to the Elements of Crimes as described in article 9;\n  - “host State” refers to the Netherlands;\n  - “judge” refers to a judge of the Court;\n  - “list of counsel” refers to the list of counsel as described in rule 21, sub-rule 2, and shall also include legal representatives of victims, and those counsel retained without legal assistance paid by the Court who wish to be entered in the list;\n  - “Office of the Prosecutor” refers to the organ of the Court as described in article 34;\n  - “plenary session” refers to a plenary session of the judges as described in rule 4;\n  - “Presidency” refers to the organ of the Court as described in article 34 comprised of the President and the First and Second Vice-Presidents of the Court;\n  - “President” refers to the President of the Court;\n  - “Presiding Judge” refers to the Presiding Judge of a Chamber;\n  - “Prosecutor” refers to the Prosecutor of the Court;\n  - “Registrar” refers to the Registrar of the Court;\n  - “Registry” refers to the organ of the Court as described in article 34;\n  - “regulation” refers to a regulation of these Regulations;\n  - “Regulations” refers to the Regulations of the Court as adopted pursuant to article 52;\n  - “rule” refers to a rule of the Rules, including provisional rules drawn up under article 51, paragraph 3;\n  - “Rules” refers to the Rules of Procedure and Evidence;\n  - “State Party” refers to a State Party to the Statute;\n  - “Statute” refers to the Rome Statute of the Court.\n- 2. In these Regulations the singular shall include the plural and vice versa."
      },
      {
        "id": "reg-3",
        "number": "3",
        "titleAr": "مجلس التنسيق",
        "titleEn": "Coordination Council",
        "contentAr": "1 - يُنشأ مجلس تنسيق يتألف من الرئيس نيابة عن هيئة الرئاسة، والمدعي العام، والمسجل.\n2 - يجتمع مجلس التنسيق مرة واحدة على الأقل شهرياً، وفي أي مناسبة أخرى بناءً على طلب أحد أعضائه، وذلك لمناقشة وتنسيق الأنشطة الإدارية لأجهزة المحكمة عند الاقتضاء.",
        "contentEn": "- 1. There shall be a Coordination Council comprised of the President on behalf of the Presidency, the Prosecutor and the Registrar.\n- 2. The Coordination Council shall meet at least once a month and on any other occasion at the request of one of its members in order to discuss and coordinate on, where necessary, the administrative activities of the organs of the Court."
      },
      {
        "id": "reg-4",
        "number": "4",
        "titleAr": "اللجنة الاستشارية للنصوص القانونية",
        "titleEn": "Advisory Committee on Legal Texts",
        "contentAr": "1 - تُنشأ لجنة استشارية للنصوص القانونية تتألف من:\n(أ) ثلاثة قضاة، قاضٍ من كل شعبة، يُنتخبون من بين أعضاء الشعبة، ويكونون أعضاءً في اللجنة الاستشارية لمدة ثلاث سنوات؛\n(ب) ممثل واحد عن مكتب المدعي العام؛\n(ج) ممثل واحد عن قلم المحكمة؛ و\n(د) ممثل واحد عن المحامين المدرجين في قائمة المحامين.\n2 - تنتخب اللجنة الاستشارية قاضياً كرئيس لها لمدة ثلاث سنوات قابلة للتجديد مرة واحدة. وتجتمع اللجنة الاستشارية مرتين على الأقل في السنة وفي أي وقت بناءً على طلب هيئة الرئاسة.\n3 - يجوز لرئيس اللجنة الاستشارية، حسب الاقتضاء، دعوة أطراف أو أشخاص معنيين آخرين لعرض آرائهم إذا رُئي أنها ذات صلة بعمل اللجنة الاستشارية. ويجوز للرئيس أيضاً طلب المشورة من خبراء.\n4 - تنظر اللجنة الاستشارية في مقترحات التعديلات على القواعد وأركان الجرائم وهذه اللوائح وتقدم تقارير بشأنها. ورهناً باللائحة الفرعية 5، تقدم اللجنة تقريراً خطياً بلغتي عمل المحكمة يحدد توصياتها بشأن هذه المقترحات إلى الجلسة العامة، مع تزويد المدعي العام والمسجل بنسخة منه. وتنظر اللجنة الاستشارية أيضاً في أي مسألة تحيلها إليها هيئة الرئاسة وتقدم تقريراً عنها.\n5 - عندما يقدم المدعي العام مقترحاً لتعديل القواعد أو أركان الجرائم، تحيل اللجنة الاستشارية تقريرها إلى المدعي العام.\n6 - يجوز لهيئة الرئاسة، حسب الاقتضاء، تعيين شخص، يعاونه آخرون، لتقديم الدعم الإداري والقانوني للجنة الاستشارية.\n7 - تعتمد اللجنة الاستشارية نظامها الداخلي الخاص.",
        "contentEn": "- 1. There shall be an Advisory Committee on Legal Texts comprised of:\n  - (a) Three judges, one from each Division, elected from amongst the members of the Division, who shall be members of the Advisory Committee for a period of three years;\n  - (b) One representative from the Office of the Prosecutor;\n  - (c) One representative from the Registry; and\n  - (d) One representative of counsel included in the list of counsel.\n- 2. The Advisory Committee shall elect a judge as chairperson for a period of three years who shall be eligible for re-election once. The Advisory Committee shall meet at least twice a year and at any time at the request of the Presidency.\n- 3. The Chairperson of the Advisory Committee may, as appropriate, invite other interested groups or persons to present their views if considered relevant for the work of the Advisory Committee. The Chairperson may also seek the advice of experts.\n- 4. The Advisory Committee shall consider and report on proposals for amendments to the Rules, Elements of Crimes and these Regulations. Subject to sub-regulation 5, it shall submit a written report in both working languages of the Court setting out its recommendations on such proposals to a plenary session. A copy thereof shall be provided to the Prosecutor and the Registrar. The Advisory Committee shall also consider and report on any matter referred to it by the Presidency.\n- 5. When a proposal for an amendment to the Rules or to the Elements of Crimes is presented by the Prosecutor, the Advisory Committee shall transmit its report to the Prosecutor.\n- 6. The Presidency may, as appropriate, designate one person, who may be assisted by others, to provide administrative and legal support to the Advisory Committee.\n- 7. The Advisory Committee shall adopt its own rules of procedure."
      },
      {
        "id": "reg-5",
        "number": "5",
        "titleAr": "تعديلات القواعد وأركان الجرائم",
        "titleEn": "Amendments to the Rules and Elements of Crimes",
        "contentAr": "1 - يقدم أي مقترح لتعديل القواعد عملاً بالمادة 51 أو لتعديل أركان الجرائم عملاً بالمادة 9 من جانب قاضٍ إلى اللجنة الاستشارية للنصوص القانونية. ويجوز للمدعي العام تقديم مقترحات إلى اللجنة الاستشارية للنصوص القانونية. وتُقدم جميع المقترحات مشفوعة بأي مذكرات إيضاحية كتابةً بلغتي عمل المحكمة.\n2 - في الحالات العاجلة، عندما لا تنص القواعد على معالجة وضع معين أمام المحكمة، يجوز لهيئة الرئاسة، من تلقاء نفسها أو بناءً على طلب قاضٍ أو المدعي العام، أن تقدم مقترحات لقواعد مؤقتة بموجب الفقرة 3 من المادة 51 مباشرة إلى القضاة لنظرها في جلسة عامة.",
        "contentEn": "- 1. Any proposal for amendments to the Rules pursuant to article 51 or to the Elements of Crimes pursuant to article 9 shall be submitted by a judge to the Advisory Committee on Legal Texts. The Prosecutor may submit proposals to the Advisory Committee on Legal Texts. All proposals, together with any explanatory material, shall be presented in writing in both working languages of the Court.\n- 2. In urgent cases, where the Rules do not provide for a specific situation before the Court, the Presidency, on its own motion or at the request of a judge or the Prosecutor, may submit proposals for provisional rules under article 51, paragraph 3, directly to the judges for their consideration in a plenary session."
      },
      {
        "id": "reg-6",
        "number": "6",
        "titleAr": "تعديلات هذه اللوائح",
        "titleEn": "Amendments to these Regulations",
        "contentAr": "1 - يُرفق بأي مقترح لتعديل هذه اللوائح مذكرة إيضاحية، وتُقدم تلك المستندات كتابةً إلى اللجنة الاستشارية للنصوص القانونية بكلتا لغتي عمل المحكمة.\n2 - في الحالات العاجلة، يجوز لهيئة الرئاسة، من تلقاء نفسها أو بناءً على طلب قاضٍ أو المدعي العام أو المسجل، تقديم مقترحات لتعديل هذه اللوائح مباشرةً إلى القضاة لنظرها في جلسة عامة.\n3 - لا تُطبق التعديلات على هذه اللوائح بأثر رجعي على نحو يضر بالشخص المطبق بشأنه الفقرة 2 من المادة 55 أو المادة 58، أو المتهم، أو الشخص المدان، أو الشخص المقضي ببراءته.",
        "contentEn": "- 1. Any proposal for amendments to these Regulations shall be accompanied by explanatory material, and those documents shall be presented in writing to the Advisory Committee on Legal Texts in both working languages of the Court.\n- 2. In urgent cases, the Presidency, on its own motion or at the request of a judge, the Prosecutor or the Registrar, may submit proposals for amendments to these Regulations directly to the judges for their consideration in a plenary session.\n- 3. Amendments to these Regulations shall not be applied retroactively to the detriment of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person."
      },
      {
        "id": "reg-7",
        "number": "7",
        "titleAr": "النشر في الجريدة الرسمية",
        "titleEn": "Publication in the Official Journal",
        "contentAr": "1 - تُنشأ جريدة رسمية للمحكمة وتحتوي على النصوص التالية وأي تعديلات تطرأ عليها:\n(أ) النظام الأساسي؛\n(ب) القواعد الإجرائية وقواعد الإثبات؛\n(ج) أركان الجرائم؛\n(د) هذه اللوائح؛\n(هـ) لوائح مكتب المدعي العام؛\n(و) لوائح قلم المحكمة؛\n(ز) مدونة قواعد السلوك المهني للمحامين؛\n(ح) مدونة السلوك القضائي؛\n(ط) النظام الأساسي للموظفين؛\n(ي) النظام المالي والقواعد المالية؛\n(ك) الاتفاق المتعلق بامتيازات وحصانات المحكمة الجنائية الدولية؛\n(ل) اتفاق العلاقة بين المحكمة والأمم المتحدة؛\n(م) اتفاق المقر مع الدولة المضيفة؛\n(ن) أي وثائق أو مواد أخرى تقررها هيئة الرئاسة بالتشاور مع المدعي العام و/أو المسجل.\n2 - تبين الجريدة الرسمية التاريخ الذي يبدأ فيه نفاذ النص أو أي تعديل عليه.",
        "contentEn": "- 1. An Official Journal of the Court shall be created and shall contain the following texts and amendments thereto:\n  - (a) The Statute;\n  - (b) The Rules;\n  - (c) The Elements of Crimes;\n  - (d) These Regulations;\n  - (e) The Regulations of the Office of the Prosecutor;\n  - (f) The Regulations of the Registry;\n  - (g) The Code of Professional Conduct for counsel;\n  - (h) The Code of Judicial Ethics;\n  - (i) The Staff Regulations;\n  - (j) The Financial Regulations and Rules;\n  - (k) The Agreement on the Privileges and Immunities of the International Criminal Court;\n  - (l) The Relationship Agreement between the Court and the United Nations;\n  - (m) The Headquarters Agreement with the host State;\n  - (n) Any other material as decided by the Presidency in consultation with the Prosecutor and/or the Registrar.\n- 2. The Official Journal shall indicate the date when the text or any amendment thereto came into force."
      },
      {
        "id": "reg-8",
        "number": "8",
        "titleAr": "الموقع الشبكي للمحكمة",
        "titleEn": "Website of the Court",
        "contentAr": "تُنشر المواد والوثائق التالية على الموقع الشبكي للمحكمة:\n(أ) الجريدة الرسمية للمحكمة المشار إليها في اللائحة 7؛\n(ب) الجدول الزمني لجلسات وأعمال المحكمة؛\n(ج) قرارات وأوامر المحكمة وتفاصيل كل قضية معروضة أمامها على النحو الموصوف في القاعدة 15؛\n(د) أي مواد أخرى تقرر هيئة الرئاسة أو المدعي العام أو المسجل نشرها.",
        "contentEn": "The following materials shall be published on the website of the Court:\n- (a) The Official Journal of the Court referred to in regulation 7;\n- (b) The calendar of the Court;\n- (c) Decisions and orders of the Court and other particulars of each case brought before the Court as described in rule 15;\n- (d) Any other material as decided by the Presidency, the Prosecutor or the Registrar."
      }
    ]
  },
  {
    "id": "reg-chapter-2",
    "labelAr": "الباب الثاني",
    "labelEn": "CHAPTER 2",
    "titleAr": "تشكيل وإدارة المحكمة",
    "titleEn": "Composition and administration of the Court",
    "articles": [
      {
        "id": "reg-9",
        "number": "9",
        "titleAr": "مدة العضوية",
        "titleEn": "Term of office",
        "contentAr": "1 - تبدأ مدة عضوية القضاة في الحادي عشر من شهر مارس/آذار الذي يلي تاريخ انتخابهم.\n2 - تبدأ مدة عضوية القاضي المنتخب ليحل محل قاضٍ لم تنتهِ مدة عضويته في تاريخ انتخابه وتستمر لما تبقى من مدة سلفه.",
        "contentEn": "- 1. The term of office of judges shall commence on the eleventh of March following the date of their election.\n- 2. The term of office of a judge elected to replace a judge whose term of office has not expired shall commence on the date of his or her election and shall continue for the remainder of the term of his or her predecessor."
      },
      {
        "id": "reg-10",
        "number": "10",
        "titleAr": "الأسبقية",
        "titleEn": "Precedence",
        "contentAr": "1 - يتمتع القضاة بوضع متساوٍ في ممارسة وظائفهم القضائية، بصرف النظر عن السن أو تاريخ الانتخاب أو طول مدة الخدمة.\n2 - يتقدم الرئيس ونائب الرئيس الأول ونائب الرئيس الثاني أثناء شغلهم هذه المناصب على سائر القضاة الآخرين.\n3 - يتقدم القضاة بحسب تاريخ بدء مدد عضويتهم في المحكمة.\n4 - يتقدم القضاة الذين تبدأ مدة عضويتهم في نفس التاريخ بحسب الأكبر سناً.\n5 - يحتفظ القاضي الذي يُعاد انتخابه وفقاً للفقرة 9(ج) من المادة 36 أو الفقرة 2 من المادة 37 بأسبقيته.",
        "contentEn": "- 1. In the exercise of their judicial functions, the judges, irrespective of age, date of election or length of service, are of equal status.\n- 2. The President, the First Vice-President and the Second Vice-President, while holding these offices, shall take precedence over all other judges.\n- 3. Judges shall take precedence according to the date of the commencement of their respective terms of office.\n- 4. Judges whose terms of office begin on the same date shall take precedence according to seniority of age.\n- 5. A judge who is re-elected in accordance with article 36, paragraph 9 (c), or article 37, paragraph 2, shall retain his or her precedence."
      },
      {
        "id": "reg-11",
        "number": "11",
        "titleAr": "هيئة الرئاسة",
        "titleEn": "The Presidency",
        "contentAr": "1 - يسعى أعضاء هيئة الرئاسة إلى التوصل إلى إجماع الآراء في أي قرار يتخذونه أثناء ممارسة مسؤولياتهم بموجب الفقرة 3 من المادة 38، فإذا تعذر ذلك، يُتخذ القرار بالأغلبية.\n2 - في حالة عدم تيسر أحد أعضاء هيئة الرئاسة أو تنحيه، يمارس مسؤولياته كعضو في هيئة الرئاسة القاضي المتاح التالي له في الأسبقية وفقاً للائحة 10.\n3 - في الظروف الاستثنائية كحالات الطوارئ، وحين تنشأ حاجة ماسة لتصرف هيئة الرئاسة ويتعذر اجتماع أعضائها الثلاثة معاً، يجوز لأعضاء هيئة الرئاسة المتاحين على الفور اتخاذ الإجراء اللازم.\n4 - في حال تعذر حضور الرئيس ونائب الرئيس الأول ونائب الرئيس الثاني أو عدم أهليتهم، يمارس وظائف الرئيس القاضي المتاح التالي في الأسبقية وفقاً للائحة 10.",
        "contentEn": "- 1. The members of the Presidency shall attempt to achieve unanimity in any decision taken in carrying out their responsibilities under article 38, paragraph 3, failing which any such decision shall be taken by majority.\n- 2. In the event that a member of the Presidency is unavailable or disqualified, his or her responsibilities as a member of the Presidency shall be carried out by the next available judge having precedence in accordance with regulation 10.\n- 3. In exceptional circumstances such as in an emergency, where there is a need for the Presidency to act and where it is not possible for all three members of the Presidency to act together, the members of the Presidency who are immediately available may take the action required.\n- 4. In the event that the President, the First Vice-President and the Second Vice-President are unavailable or disqualified, the functions of the President shall be carried out by the next available judge having precedence in accordance with regulation 10."
      },
      {
        "id": "reg-12",
        "number": "12",
        "titleAr": "الخدمة في دائرة الاستئناف",
        "titleEn": "Service within the Appeals Chamber",
        "contentAr": "في حال تجريح أو تنحي أحد أعضاء دائرة الاستئناف أو تعذر حضوره لسبب جوهري، تُلحق هيئة الرئاسة بدائرة الاستئناف، تحقيقاً لمصلحة العدالة وبصفة مؤقتة، قاضياً من الدائرة الابتدائية أو الدائرة التمهيدية، مع مراعاة الفقرة 1 من المادة 39. ولا يجوز بأي حال من الأحوال لأي قاضٍ شارك في مرحلة ما قبل المحاكمة أو المحاكمة في قضية ما أن يشارك في دائرة الاستئناف التي تنظر في نفس القضية؛ كما لا يجوز للقاضي الذي شارك في مرحلة استئناف قضية ما أن ينظر في مرحلة ما قبل المحاكمة أو المحاكمة لتلك القضية.",
        "contentEn": "In the event that a member of the Appeals Chamber is disqualified, or unavailable for a substantial reason, the Presidency shall, in the interests of the administration of justice, attach to the Appeals Chamber on a temporary basis a judge from either the Trial or Pre-Trial Division, subject to article 39, paragraph 1. Under no circumstances shall a judge who has participated in the pre-trial or trial phase of a case be eligible to sit on the Appeals Chamber hearing that case; nor shall a judge who has participated in the appeal phase of a case be eligible to sit on the pre-trial or trial phase of that case."
      },
      {
        "id": "reg-13",
        "number": "13",
        "titleAr": "القضاة الرئيسيون",
        "titleEn": "Presiding Judges",
        "contentAr": "1 - يحدد قضاة دائرة الاستئناف قاضياً رئيساً لكل استئناف.\n2 - ينتخب قضاة كل دائرة ابتدائية، وكل دائرة تمهيدية، والشعبة التمهيدية عند عملها بموجب الفقرة 8 من المادة 15 مكرراً، من بين أعضائهم قاضياً رئيساً يمارس الوظائف المسندة إليه بموجب النظام الأساسي أو القواعد أو غير ذلك.",
        "contentEn": "- 1. The judges of the Appeals Chamber shall decide on a Presiding Judge for each appeal.\n- 2. The judges of each Trial Chamber, each Pre-Trial Chamber and the Pre-Trial Division when acting under article 15 bis, paragraph 8 shall elect from amongst their members a Presiding Judge who shall carry out the functions conferred upon him or her by the Statute, Rules or otherwise."
      },
      {
        "id": "reg-14",
        "number": "14",
        "titleAr": "رئيس الدائرة القضائية",
        "titleEn": "President of the Division",
        "contentAr": "ينتخب قضاة كل شعبة رئيساً للشعبة من بينهم للإشراف على إدارة الشعبة. ويمارس رئيس الشعبة هذه المهام لمدة سنة واحدة.",
        "contentEn": "The judges of each Division shall elect a President of the Division from amongst their members to oversee the administration of the Division. The President of the Division shall carry out this function for a period of one year."
      },
      {
        "id": "reg-15",
        "number": "15",
        "titleAr": "الاستبدال",
        "titleEn": "Replacements",
        "contentAr": "1 - تتولى هيئة الرئاسة استبدال القاضي عملاً بالقاعدة 38 ووفقاً للمادة 39، وتراعي أيضاً قدر الإمكان التمثيل المتوازن بين الجنسين والتمثيل الجغرافي العادل.\n2 - دون المساس بالمعايير المدرجة في اللائحة الفرعية 1، يتم الاستبدال داخل دائرة الاستئناف وفقاً للائحة 12.",
        "contentEn": "- 1. The Presidency shall be responsible for the replacement of a judge pursuant to rule 38 and in accordance with article 39 and shall also take into account, to the extent possible, gender and equitable geographical representation.\n- 2. Without prejudice to the criteria listed in sub-regulation 1, replacement within the Appeals Chamber shall take place in accordance with regulation 12."
      },
      {
        "id": "reg-16",
        "number": "16",
        "titleAr": "القضاة المناوبون والبدلاء",
        "titleEn": "Alternate judges",
        "contentAr": "مع مراعاة أحكام المادة 39 وعملاً بالفقرة 1 من المادة 74، يجوز لهيئة الرئاسة تعيين قضاة مناوبين على أساس كل حالة على حدة، مع مراعاة مدى تيسر القضاة من الشعبة الابتدائية أولاً ثم من الشعبة التمهيدية ثانياً.",
        "contentEn": "Subject to the provisions of article 39 and pursuant to article 74, paragraph 1, alternate judges may be designated by the Presidency, on a case-by-case basis, first taking into account the availability of judges from the Trial Division and thereafter from the Pre-Trial Division."
      },
      {
        "id": "reg-17",
        "number": "17",
        "titleAr": "القاضي المناوب",
        "titleEn": "Duty judge",
        "contentAr": "1 - تضع هيئة الرئاسة جدولاً لمناوبة قضاة الشعبة التمهيدية. ويكون كل قاضٍ في حالة مناوبة لمدة 14 يوماً.\n2 - يكون القاضي المناوب مسؤولاً عن البت في الطلبات أو الالتماسات:\n(أ) إذا قُدم الطلب أو الالتماس خارج ساعات العمل الرسمية لقلم المحكمة، واقتنع القاضي المناوب بصفة الاستعجال؛ أو\n(ب) إذا قُدم الطلب أثناء ساعات العمل الرسمية لقلم المحكمة وكانت الدائرة التمهيدية أو الدائرة المشار إليها في اللائحة 46(3) غير متاحة، بشرط اقتناع القاضي المناوب بأن المسألة عاجلة وبأنه من المناسب له البت فيها.\n3 - تحتفظ هيئة الرئاسة بجدول مناوبة قضاة الشعبة التمهيدية وتتيحه لقلم المحكمة.",
        "contentEn": "- 1. The Presidency shall establish a duty roster of judges of the Pre-Trial Division. Each judge shall be on duty for a period of 14 days.\n- 2. The duty judge shall be responsible for dealing with requests or applications:\n  - (a) Where the request or application is submitted outside normal Registry hours, if the duty judge is satisfied that it is urgent; or\n  - (b) Where the request or application is submitted during normal Registry hours and the Pre-Trial Chamber or Chamber referred to in regulation 46, sub-regulation 3, is unavailable, provided that the duty judge is satisfied that the matter is urgent and that it is appropriate for him or her to deal with it.\n- 3. The duty roster of judges of the Pre-Trial Division shall be maintained by the Presidency and made available to the Registry."
      },
      {
        "id": "reg-18",
        "number": "18",
        "titleAr": "الموظفون القانونيون المناوبون للدوائر القضائية",
        "titleEn": "Duty legal officers of the Chambers",
        "contentAr": "1 - تضع هيئة الرئاسة جدولاً لمناوبة الموظفين القانونيين للدوائر. ويكون كل موظف قانوني في حالة مناوبة لمدة 14 يوماً.\n2 - يتولى الموظف القانوني المناوب للدوائر معاونة القاضي المناوب.\n3 - تحتفظ هيئة الرئاسة بجدول مناوبة الموظفين القانونيين للدوائر وتتيحه لقلم المحكمة.",
        "contentEn": "- 1. The Presidency shall establish a duty roster of legal officers of the Chambers. Each legal officer shall be on duty for a period of 14 days.\n- 2. The duty legal officer of the Chambers shall be responsible for assisting the duty judge.\n- 3. The duty roster of legal officers of the Chambers shall be maintained by the Presidency and made available to the Registry."
      },
      {
        "id": "reg-19",
        "number": "19",
        "titleAr": "الموظفون المناوبون بقلم المحكمة",
        "titleEn": "Duty officers of the Registry",
        "contentAr": "يضع المسجل جدولاً لمناوبة موظفي قلم المحكمة. ويكون كل موظف مناوباً للمدة المحددة في لوائح قلم المحكمة.",
        "contentEn": "The Registrar shall establish a duty roster of officers of the Registry. Each officer shall be on duty for the period specified in the Regulations of the Registry."
      }
    ]
  },
  {
    "id": "reg-chapter-3",
    "labelAr": "الباب الثالث",
    "labelEn": "CHAPTER 3",
    "titleAr": "الإجراءات أمام المحكمة",
    "titleEn": "Proceedings before the Court",
    "articles": [
      {
        "id": "reg-19-bis",
        "number": "19 bis",
        "titleAr": "العطلة القضائية",
        "titleEn": "Judicial recess",
        "contentAr": "1 - تحدد هيئة الرئاسة، بالتشاور مع القضاة، فترات العطلة القضائية وتصدر مبادئ توجيهية بهذا الشأن.\n2 - ما لم تقرر الدائرة خلاف ذلك، تقتصر الجلسات أثناء العطلة القضائية على المسائل العاجلة، ولا تُعلق المهل والآجال الزمنية.",
        "contentEn": "- 1. The Presidency, in consultation with the judges, shall establish periods of judicial recess and issue guidelines in relation thereto.\n- 2. Unless otherwise determined by a Chamber, during the judicial recess hearings shall be limited to urgent issues and time limits shall not be suspended."
      },
      {
        "id": "reg-20",
        "number": "20",
        "titleAr": "الجلسات العلنية",
        "titleEn": "Public hearings",
        "contentAr": "1 - تُعقد جميع الجلسات علناً، ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح على خلاف ذلك أو تأمر الدائرة بغيره.\n2 - عندما تأمر الدائرة بعقد جلسات معينة في جلسة مغلقة أو سرية، تعلن الدائرة أسباب هذا الأمر للجمهور.\n3 - يجوز للدائرة أن تأمر بالكشف عن كل أو جزء من سجل الإجراءات المغلقة عندما تنتفي أسباب الأمر بعدم الكشف عنه.",
        "contentEn": "- 1. All hearings shall be held in public, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.\n- 2. When a Chamber orders that certain hearings be held in closed or private session, the Chamber shall make public the reasons for such an order.\n- 3. A Chamber may order the disclosure of all or part of the record of closed proceedings when the reasons for ordering its non-disclosure no longer exist."
      },
      {
        "id": "reg-21",
        "number": "21",
        "titleAr": "البث الإذاعي وإتاحة المحاضر والتسجيلات",
        "titleEn": "Broadcasting, release of transcripts and recordings",
        "contentAr": "1 - يجوز أن تمتد علانية الجلسات إلى ما وراء قاعة المحكمة عبر البث بواسطة قلم المحكمة أو إتاحة المحاضر الحرفية أو التسجيلات، ما لم تأمر الدائرة بخلاف ذلك.\n2 - لحماية المعلومات الحساسة، يؤخر بث التسجيلات الصوتية والمرئية لجميع الجلسات لمدة 30 دقيقة على الأقل، ما لم تأمر الدائرة بخلاف ذلك.\n3 - يُخطر الشهود والمشاركون بأن الجلسات العلنية للدائرة تُبث وفقاً لهذه اللائحة. وتبت الدائرة في أي اعتراض يُبدى وفقاً للائحتين الفرعيتين 4 و5.\n4 - يُقدم أي اعتراض على إتاحة المحاضر أو التسجيلات، أو طلبات استبعاد شهادة معينة من البث، في أقرب وقت ممكن، وفي موعد أقصاه بدء الجلسة التي سيمثل فيها الشاهد أو المشارك.\n5 - يجوز للدائرة أن تقرر حظر بث أي جلسة لنظر اعتراض إلى حين البت في ذلك الاعتراض.\n6 - يجوز للدائرة أن تأمر بوقف بث الجلسة في أي وقت.\n7 - تكون جميع الأدلة المستندية وغيرها من الأدلة المقدمة من أحد المشاركين أثناء جلسة علنية متاحة للبث، ما لم تأمر الدائرة بخلاف ذلك.\n8 - بناءً على طلب أحد المشاركين أو قلم المحكمة، أو من تلقاء نفسها، وعند الإمكان خلال المدة المحددة في اللائحة الفرعية 2، يجوز للدائرة، تحقيقاً لمصلحة العدالة، أن تأمر بعدم نشر أي معلومات من شأنها تعريض أمن أو سلامة الضحايا أو الشهود أو غيرهم للخطر، أو من شأنها الإضرار بمصالح الأمن القومي، في أي بث أو تسجيل صوتي أو مرئي أو محضر حرفي لجلسة علنية.\n9 - يُتاح التسجيل الصوتي والمرئي للجلسات للمشاركين وللجمهور وفقاً للإجراءات المحددة في لوائح قلم المحكمة، ما لم تأمر الدائرة بخلاف ذلك.",
        "contentEn": "- 1. The publicity of hearings may extend beyond the courtroom and may be through broadcasting by the Registry or release of transcripts or recordings, unless otherwise ordered by the Chamber.\n- 2. In order to protect sensitive information, broadcasts of audio- and video-recordings of all hearings shall, unless otherwise ordered by the Chamber, be delayed by at least 30 minutes.\n- 3. Witnesses and participants shall be informed that the public hearings of the Chamber are broadcast in accordance with this regulation. Any objection raised shall be ruled on by the Chamber in accordance with sub-regulations 4 and 5.\n- 4. Any objection to the release of transcripts or recordings, or requests that certain testimony be excluded from broadcast, shall be made as soon as possible and, in any event, no later than at the commencement of the session at which the witness or participant is to appear.\n- 5. The Chamber may decide to prohibit the broadcasting of any hearing of an objection until that objection has been ruled on.\n- 6. The Chamber may order the termination of the broadcast of a hearing at any time.\n- 7. All documentary evidence and other evidence introduced by a participant during a public hearing shall be available for broadcast, unless otherwise ordered by the Chamber.\n- 8. At the request of a participant or the Registry, or proprio motu, and when possible within the time set out in sub-regulation 2, the Chamber may, in the interests of justice, order that any information likely to present a risk to the security or safety of victims, witnesses or other persons, or likely to be prejudicial to national security interests, shall not be published in any broadcast, audio- or video-recording or transcript of a public hearing.\n- 9. The audio- and video-record of hearings shall be made available to the participants and the public in accordance with the procedures set out in the Regulations of the Registry, unless otherwise ordered by the Chamber."
      },
      {
        "id": "reg-22",
        "number": "22",
        "titleAr": "تعريف المستندات",
        "titleEn": "Definition of documents",
        "contentAr": "يشمل مصطلح \"مستند\" أي التماس، أو طلب، أو دفع، أو رد، أو إجابة، أو ملاحظة، أو مذكرة، وأي مذكرة أخرى مقدمة في شكل يتيح تقديم سجل مكتوب إلى المحكمة.",
        "contentEn": "The term “document” shall include any motion, application, request, response, reply, observation, representation and any other submission in a form capable of delivering a written record to the Court."
      },
      {
        "id": "reg-23",
        "number": "23",
        "titleAr": "محتوى المستندات",
        "titleEn": "Content of documents",
        "contentAr": "1 - ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح على غير ذلك أو تأمر الدائرة بخلافه، يبين أي مستند يُودع لدى المحكمة، قدر الإمكان العملي، ما يلي:\n(أ) هوية الشخص الذي يودع المستند؛\n(ب) رقم الحالة أو القضية، واسم الشخص المطبق بشأنه الفقرة 2 من المادة 55 أو المادة 58، أو المتهم، أو المحكوم عليه، أو الشخص المقضي ببراءته، واسم المحامي أو الممثل إن وُجد، والدائرة المحال إليها الأمر؛\n(ج) ملخص موجز لسبب إيداع المستند الذي لا يشكل رداً أو تعقيباً، والتدبير أو الإنصاف المطلوب، إن وُجد؛\n(د) جميع المسائل القانونية والواقعية ذات الصلة، بما في ذلك تفاصيل المواد أو القواعد أو اللوائح أو غيرها من القوانين الواجبة التطبيق والمستند إليها.\n2 - تعتمد هيئة الرئاسة جميع النماذج والقوالب الموحدة المستخدمة في الإجراءات أمام المحكمة. ويجوز لهيئة الرئاسة إحالة أي مسألة تتعلق بالنماذج والقوالب الموحدة إلى اللجنة الاستشارية للنصوص القانونية لنظرها.\n3 - مع مراعاة أي أمر يصدر عن الدائرة، يودع المشارك مع كل مستند نسخاً من أي مراجع أو مصادر قانونية استند إليها أو روابط إلكترونية مناسبة لها. ولا يُلزم المشاركون بإيداع نسخ من قرارات أو أوامر المحكمة. وتُقدم المراجع في نسخة رسمية مصحوبة بترجمة إلى إحدى لغتي عمل المحكمة على الأقل إذا لم يكن الأصل بإحداهما.",
        "contentEn": "- 1. Unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber, any document filed with the Court shall, as far as practicable, state:\n  - (a) The identity of the person filing the document;\n  - (b) The situation or case number, the name of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person, the name of counsel or representative, if any, and the Chamber to which the matter has been assigned;\n  - (c) A brief summary of the reason for filing the document which is not a response or reply and the relief sought, if any;\n  - (d) All relevant legal and factual issues, including details of the articles, rules, regulations or other applicable law relied upon.\n- 2. All standard forms and templates for use during the proceedings before the Court shall be approved by the Presidency. The Presidency may refer any matter relating to the standard forms and templates to the Advisory Committee on Legal Texts for its consideration.\n- 3. Subject to any order of the Chamber, a participant shall file, with each document, copies of any authorities relied upon or, if appropriate, internet links. Participants are not required to file copies of decisions or orders of the Court. Authorities shall be provided in an authorised version together with a translation in at least one of the working languages of the Court if the original is not in one of those languages."
      },
      {
        "id": "reg-23-bis",
        "number": "23 bis",
        "titleAr": "إيداع المستندات الموسومة بحضور طرف واحد أو تحت الختم أو سرية",
        "titleEn": "Filing of documents marked ex parte, under seal or confidential",
        "contentAr": "1 - أي مستند يودعه المسجل أو أحد المشاركين ويحمل علامة \"بحضور طرف واحد\"، أو \"مختوم\"، أو \"سري\"، يجب أن يبين الأساس الواقعي والقانوني للتصنيف المختار، ويعامل وفقاً لذلك التصنيف طوال الإجراءات ما لم تأمر الدائرة بغير ذلك.\n2 - ما لم تأمر الدائرة بخلاف ذلك، فإن أي رد أو تعقيب أو مستند آخر يشير إلى مستند أو قرار أو أمر يحمل تصنيف \"بحضور طرف واحد\"، أو \"مختوم\"، أو \"سري\"، يجب أن يودع بالتصنيف نفسه. وإذا كانت هناك أسباب إضافية تبرر تصنيف المستند بأي من هذه الصفات، أو أسباب لعدم تصنيف المستند الأصلي بذلك، فيجب ذكرها في المستند نفسه.\n3 - إذا انتفى أساس التصنيف، وجب على الطرف الذي طلب التصنيف، سواء كان المسجل أو أحد المشاركين، أن يطلب من الدائرة إعادة تصنيف المستند. ويجوز للدائرة أيضاً إعادة تصنيف المستند بناءً على طلب أي مشارك آخر أو من تلقاء نفسها. وفي حال تقديم طلب لتعديل تدبير حمائي، تُطبق اللائحة 42.\n4 - تُطبق هذه اللائحة مع ما يلزم من تبديل على الإجراءات أمام هيئة الرئاسة.",
        "contentEn": "- 1. Any document filed by the Registrar or a participant and marked “ex parte”, “under seal” or “confidential”, shall state the factual and legal basis for the chosen classification and, unless otherwise ordered by a Chamber, shall be treated according to that classification throughout the proceedings.\n- 2. Unless otherwise ordered by a Chamber, any response, reply or other document referring to a document, decision or order marked “ex parte”, “under seal” or “confidential” shall be filed with the same classification. If there are additional reasons why a response, reply or any other document filed by the Registrar or a participant should be classified “ex parte”, “under seal”, or “confidential”, or reasons why the original document or other related documents should not be so classified, they shall be provided in the same document.\n- 3. Where the basis for the classification no longer exists, whosoever instigated the classification, be it the Registrar or a participant, shall apply to the Chamber to re-classify the document. A Chamber may also re-classify a document upon request by any other participant or on its own motion. In the case of an application to vary a protective measure, regulation 42 shall apply.\n- 4. This regulation shall apply mutatis mutandis to proceedings before the Presidency."
      },
      {
        "id": "reg-23-ter",
        "number": "23 ter",
        "titleAr": "تصنيف الطلبات عملاً بالمادة 58",
        "titleEn": "Classification of applications pursuant to article 58",
        "contentAr": "1 - تُودع الطلبات المقدمة عملاً بالمادة 58 بحضور طرف واحد مع وسمها بأنها \"مختومة\" أو \"سرية\"، ما لم تأذن الدائرة بغير ذلك.\n2 - أي مستند يتوقع الطلب المشار إليه في اللائحة الفرعية 1 أو يتعلق به أو يشير إليه، يُودع أيضاً بحضور طرف واحد موسوماً بأنه \"مختوم\" أو \"سري\".\n3 - لا يجوز نشر وجود الطلب المشار إليه في اللائحة الفرعية 1 أو محتواه إلا إذا أمرت الدائرة المعروض عليها الطلب بإعادة تصنيفه أو أذنت بالإشارة إليه.",
        "contentEn": "- 1. Applications pursuant to article 58 shall be filed ex parte marked as “under seal” or “secret”, unless otherwise authorised by a Chamber.\n- 2. Any filing that anticipates, relates to or refers to an application referred to in sub-regulation 1 shall also be filed ex parte marked as “under seal” or “secret”.\n- 3. The existence and/or content of an application referred to in sub-regulation 1 may not be made public unless the Chamber seized of the application has ordered the reclassification of the application or authorised reference thereto."
      },
      {
        "id": "reg-24",
        "number": "24",
        "titleAr": "الردود والإجابات",
        "titleEn": "Responses and replies",
        "contentAr": "1 - يجوز للمدعي العام وللدفاع تقديم رد على أي مستند يودعه أي مشارك في القضية وفقاً للنظام الأساسي والقواعد وهذه اللوائح وأي أمر صادر عن الدائرة.\n2 - يجوز للضحايا أو ممثليهم القانونيين تقديم رد على أي مستند متى سُمح لهم بالمشاركة في الإجراءات وفقاً للفقرة 3 من المادة 68 والقاعدة الفرعية 1 من القاعدة 89، مع مراعاة أي أمر صادر عن الدائرة.\n3 - يجوز للدول المشاركة في الإجراءات تقديم رد على أي مستند، رهناً بأي أمر يصدر عن الدائرة.\n4 - لا يجوز تقديم الرد المشار إليه في اللوائح الفرعية 1 إلى 3 على أي مستند يشكل بحد ذاته رداً أو تعقيباً.\n5 - لا يجوز للمشاركين التعقيب على الرد إلا بإذن من الدائرة، ما لم تنص هذه اللوائح على غير ذلك. وما لم تأذن الدائرة بغير ذلك، يجب أن يقتصر التعقيب على المسائل الجديدة المثارة في الرد والتي لم يكن بإمكان المشارك التعقيب عليها توقّعها بشكل معقول.",
        "contentEn": "- 1. The Prosecutor and the defence may file a response to any document filed by any participant in the case in accordance with the Statute, Rules, these Regulations and any order of the Chamber.\n- 2. Victims or their legal representatives may file a response to any document when they are permitted to participate in the proceedings in accordance with article 68, paragraph 3, and rule 89, sub-rule 1, subject to any order of the Chamber.\n- 3. States participating in the proceedings may file a response to any document, subject to any order of the Chamber.\n- 4. A response referred to in sub-regulations 1 to 3 may not be filed to any document which is itself a response or reply.\n- 5. Participants may only reply to a response with the leave of the Chamber, unless otherwise provided in these Regulations. Unless otherwise permitted by the Chamber, a reply must be limited to new issues raised in the response which the replying participant could not reasonably have anticipated."
      },
      {
        "id": "reg-24-bis",
        "number": "24 bis",
        "titleAr": "مذكرات مسجل المحكمة",
        "titleEn": "Submissions by the Registrar",
        "contentAr": "1 - يجوز للمسجل، عند الضرورة لأداء وظائفه على النحو الواجب فيما يتعلق بأي إجراءات، أن يقدم مذكرات شفوية أو كتابية إلى الدائرة مع إخطار المشاركين بذلك.\n2 - يجوز للمسجل أن يودع مستنداً بحضور طرف واحد وموسوماً بـ \"للمسجل فقط\" إذا كان اطلاع المشاركين على محتواه سيحبط الغرض منه. وتبت الدائرة فيما إذا كان ينبغي إشعار المشاركين بوجود المستند المودع.\n3 - لا يُفسر أي شيء في هذه اللائحة على أنه يقيد الأنواع الأخرى من الاتصالات بين الدوائر والمسجل.\n4 - تُطبق هذه اللائحة مع ما يلزم من تبديل على الإجراءات أمام هيئة الرئاسة.",
        "contentEn": "- 1. The Registrar, when necessary for the proper discharge of his or her functions, in so far as they relate to any proceedings, may make oral or written submissions to a Chamber with notification to the participants.\n- 2. The Registrar may file a document ex parte “Registrar only” if knowledge by the participants of the content of the document filed would defeat its purpose. The Chamber shall decide whether notice of the existence of the filing is to be provided to the participants.\n- 3. Nothing in this regulation shall be taken to restrict other types of communication between Chambers and the Registrar.\n- 4. This regulation shall apply mutatis mutandis to proceedings before the Presidency."
      },
      {
        "id": "reg-25",
        "number": "25",
        "titleAr": "الاتصالات بغير الكتابة",
        "titleEn": "Communications other than in writing",
        "contentAr": "على كل شخص يوجه اتصالاً إلى المحكمة بموجب القاعدة 102 أن يبين في بداية الاتصال:\n(أ) هويته؛\n(ب) رقم الحالة أو القضية، إن كان معلوماً؛\n(ج) الدائرة المعروض عليها الأمر، إن كانت معلومة؛\n(د) اسم الشخص المطبق بشأنه الفقرة 2 من المادة 55 أو المادة 58، أو المتهم، أو المحكوم عليه، أو الشخص المقضي ببراءته، إن كان معلوماً؛\n(هـ) الغرض من الاتصال؛\n(و) عند الإشارة إلى حدث محدد، المكان والتاريخ والأفراد المعنيين قدر الإمكان.",
        "contentEn": "A person making a communication to the Court under rule 102 shall indicate at the start of the communication:\n- (a) His or her identity;\n- (b) The situation or case number, if known;\n- (c) The Chamber seized of the matter, if known;\n- (d) The name of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person, if known;\n- (e) The purpose of the communication;\n- (f) When referring to a specific event, to the extent possible, the location, date and individuals involved."
      },
      {
        "id": "reg-26",
        "number": "26",
        "titleAr": "الإدارة الإلكترونية",
        "titleEn": "Electronic management",
        "contentAr": "1 - تنشئ المحكمة نظاماً إلكترونياً موثوقاً وآمناً وفعالاً يدعم إدارتها القضائية والتشغيلية اليومية وإجراءاتها.\n2 - يتولى قلم المحكمة مسؤولية تنفيذ النظام الموصوف في اللائحة الفرعية 1، مع مراعاة المتطلبات الخاصة للنشاط القضائي للمحكمة، بما في ذلك ضمان موثوقية ودقة وسرية وحفظ السجلات والمواد القضائية.\n3 - تُقدم المستندات والقرارات والأوامر بنسخة إلكترونية كلما أمكن لتسجيلها لدى قلم المحكمة. وتكون النسخة الإلكترونية للمستندات المودعة هي النسخة الرسمية الحجية.\n4 - في الإجراءات أمام المحكمة، تُقدم الأدلة بخلاف الشهادة الحية في شكل إلكتروني كلما أمكن ذلك، وتكون الصيغة الأصلية لهذا الدليل هي الحجة.",
        "contentEn": "- 1. The Court shall establish a reliable, secure, efficient electronic system which supports its daily judicial and operational management and its proceedings.\n- 2. The Registry shall be responsible for the implementation of the system described in sub-regulation 1, taking into account the specific requirements of the judicial activity of the Court, including the need to ensure authenticity, accuracy, confidentiality and preservation of judicial records and material.\n- 3. Documents, decisions and orders shall, whenever possible, be submitted in electronic version for registration by the Registry. The electronic version of filings shall be authoritative.\n- 4. In proceedings before the Court, evidence other than live testimony shall be presented in electronic form whenever possible. The original form of such evidence shall be authoritative."
      },
      {
        "id": "reg-27",
        "number": "27",
        "titleAr": "المحاضر المكتوبة",
        "titleEn": "Transcripts",
        "contentAr": "1 - تُتاح محاضر حرفية فورية للجلسات بإحدى لغتي عمل المحكمة على الأقل بالقدر الممكن تقنياً. ويجوز تقديم محاضر للإجراءات الأخرى عند الطلب.\n2 - تشكل المحاضر الحرفية جزءاً لا يتجزأ من سجل الإجراءات. وتكون النسخة الإلكترونية للمحاضر الحرفية هي النسخة المعتمدة.",
        "contentEn": "- 1. Real time transcripts of hearings shall be provided in at least one of the working languages of the Court to the extent technically possible. Transcripts of proceedings other than hearings may be provided upon request.\n- 2. The transcripts constitute an integral part of the record of the proceedings. The electronic version of transcripts shall be authoritative."
      },
      {
        "id": "reg-28",
        "number": "28",
        "titleAr": "أسئلة الدائرة القضائية",
        "titleEn": "Questions by a Chamber",
        "contentAr": "1 - يجوز للدائرة أن تأمر المشاركين بتوضيح أو تقديم تفاصيل إضافية بشأن أي مستند خلال أجل زمني تحدده الدائرة.\n2 - يجوز للدائرة أن تأمر المشاركين بتناول مسائل محددة في مذكراتهم المكتوبة أو الشفوية خلال أجل زمني تحدده الدائرة.\n3 - لا تخل هذه الأحكام بالسلطات المتأصلة للدائرة.",
        "contentEn": "- 1. A Chamber may order the participants to clarify or to provide additional details on any document within a time limit specified by the Chamber.\n- 2. A Chamber may order the participants to address specific issues in their written or oral submissions within a time limit specified by the Chamber.\n- 3. These provisions are without prejudice to the inherent powers of the Chamber."
      },
      {
        "id": "reg-29",
        "number": "29",
        "titleAr": "عدم الامتثال لهذه اللوائح ولأوامر الدائرة",
        "titleEn": "Non-compliance with these Regulations and with orders of a Chamber",
        "contentAr": "1 - في حال عدم امتثال أحد المشاركين لأحكام أي لائحة أو لأمر صادر عن الدائرة بموجبها، يجوز للدائرة أن تصدر أي أمر تراه ضرورياً لصالح العدالة.\n2 - لا يخل هذا الحكم بالسلطات المتأصلة للدائرة.",
        "contentEn": "- 1. In the event of non-compliance by a participant with the provisions of any regulation, or with an order of a Chamber made thereunder, the Chamber may issue any order that is deemed necessary in the interests of justice.\n- 2. This provision is without prejudice to the inherent powers of the Chamber."
      },
      {
        "id": "reg-30",
        "number": "30",
        "titleAr": "مؤتمرات الوضع الإجرائي",
        "titleEn": "Status conferences",
        "contentAr": "يجوز للدائرة عقد مؤتمرات لتنسيق الإجراءات عن طريق جلسات، بما في ذلك عبر تقنية الاتصال الصوتي أو المرئي أو عن طريق المذكرات المكتوبة. وتجوز مطالبة المشاركين باستخدام نماذج موحدة يعتمدها قلم المحكمة عملاً باللائحة 23(2).",
        "contentEn": "A Chamber may hold status conferences by way of hearings, including by way of audio- or video-link technology or by way of written submissions. The Chamber may require use of standard forms at a status conference as appropriate. Such standard forms shall be approved in accordance with regulation 23, sub-regulation 2."
      },
      {
        "id": "reg-31",
        "number": "31",
        "titleAr": "الإخطار والإبلاغ",
        "titleEn": "Notification",
        "contentAr": "1 - مع مراعاة النظام الأساسي والقواعد وهذه اللوائح أو أي أمر صادر عن الدائرة، يُخطر جميع المشاركين في الإجراءات ذات الصلة بأي مستند يسجله قلم المحكمة أو بأي قرار أو أمر، ما لم يطلب المشارك مقدم المستند خلاف ذلك. ويزود جميع المشاركين قلم المحكمة بعنوان اتصال إلكتروني أو بريدي أو بالفاكس لتسلم الإخطارات، ويفضل أن يكون في لاهاي.\n2 - يعتبر المشارك قد أُخطر أو أُبلغ بمستند أو قرار أو أمر في اليوم الذي يُرسل فيه فعلياً من المحكمة عن طريق قلم المحكمة، ويثبت هذا التاريخ في استمارة الإخطار الملحقة. وللمشارك طلب تمديد الأجل وفقاً للائحة 35 إذا لم يتسلم المستند، ويحتفظ المسجل بدليل الإرسال الفعلي.\n3 - يُخطر الشخص المعني بطريق الإعلان الشخصي بالمستندات التالية:\n(أ) أوامر القبض؛\n(ب) أوامر الحضور؛\n(ج) مستندات التهم؛\n(د) أي مستندات أو قرارات أو أوامر أخرى تأمر الدائرة بإعلانها شخصياً.\n4 - يثبت الإعلان الشخصي إما بتأكيد كتابي على النموذج المعتمد من الشخص القائم بالإعلان، أو بتوقيع الشخص المعني بإفادة الاستلام. فإذا امتنع أو عجز عن التوقيع، كان التأكيد الكتابي للقائم بالإعلان دليلاً على الإخطار.\n5 - بالنسبة للقرارات أو الأوامر الشفوية، يعتبر الإخطار نافذاً في يوم النطق بها شفوياً من الدائرة، ما لم يكن المشارك غير حاضر أو غير ممثل، أو كانت الدائرة قد قررت إصدار قرار كتابي لاحق.",
        "contentEn": "- 1. Subject to the Statute, Rules, these Regulations or any order of a Chamber, all participants in the relevant proceedings shall be notified of any document registered by the Registry or any decision or order, unless, with regard to a document, the participant submitting that document requests otherwise. All participants shall provide to the Registry an electronic, facsimile or postal contact address for notification of documents, preferably in The Hague.\n- 2. Unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber, a participant is deemed notified, informed of or to have had communicated to him or her, a document, decision or order on the day it is effectively sent from the Court by the Registry. Such date shall be written on the notification form to be appended to all copies of the document, decision or order, as relevant. If the document, decision or order is not received, a participant may raise the issue and, as appropriate, may ask for a variation of the time limit in accordance with regulation 35. The Registrar shall retain and, if required, produce proof that the document, decision or order was effectively sent.\n- 3. The relevant person shall be notified by way of personal service of the following documents:\n  - (a) Warrants of arrest;\n  - (b) Summonses to appear;\n  - (c) Documents containing the charges; and\n  - (d) Such other documents, decisions or orders ordered by the Chamber to be notified by way of personal service.\n- 4. Notification by way of personal service may be proved in the following manner:\n  - (a) By confirmation in writing on the prescribed form by the person serving the document that notification by way of personal service has been effected; and\n  - (b) By a signed acknowledgement of notification by way of personal service on the prescribed form by the relevant person.\n  Where the relevant person declines or is unable to sign an acknowledgement of notification by way of personal service, the confirmation in (a) above shall be proof of such notification.\n- 5. In respect of oral decisions or orders, notification shall be deemed effective on the day the decision or order is rendered orally by the Chamber unless:\n  - (a) A participant was not present or represented when the decision or order was pronounced, in which case that participant shall be notified of the oral decision or order in accordance with sub-regulation 2; or\n  - (b) The Chamber has indicated that a written decision or order will follow, in which case participants shall be notified of the written decision or order in accordance with sub-regulation 2."
      },
      {
        "id": "reg-32",
        "number": "32",
        "titleAr": "متلقو المستندات والقرارات والأوامر المبلغة من المحكمة",
        "titleEn": "Recipients of documents, decisions and orders notified by the Court",
        "contentAr": "1 - تعتبر الدولة قد أُخطرت متى أُخطر الممثل الرسمي المعين للإجراءات أمام المحكمة. فإذا لم تعين ممثلاً، اعتبرت قد أُخطرت متى أُخطرت عبر القناة المحددة وفقاً للمادة 87.\n2 - تعتبر المنظمات الحكومية الدولية وغيرها من المنظمات والمؤسسات قد أُخطرت متى أُخطر الممثل المعين وفقاً للقاعدة 177.\n3 - يعتبر المشارك الممثل بمحامٍ قد أُخطر متى أُخطر محاميه في عنوانه المحدد لدى قلم المحكمة.\n4 - يعتبر الشخص غير الممثل بمحامٍ قد أُخطر متى أُخطر هو شخصياً أو الشخص أو الجهة المعينة من جانبه.\n5 - يعتبر المدعي العام قد أُخطر متى أُخطر مكتب المدعي العام، ما لم ينص صراحة على إخطاره شخصياً.",
        "contentEn": "- 1. A State shall be deemed notified when the official representative designated for proceedings before the Court has been notified of a document, decision or order. If a State does not designate such a representative, the State shall be deemed notified of the document, decision or order when it has been notified through the channel designated by that State in accordance with article 87.\n- 2. Intergovernmental organisations and other organisations and institutions shall be deemed notified when the designated representative identified by the Registrar or the appropriate channel referred to in rule 177 has been notified of a document, decision or order.\n- 3. A participant represented by counsel shall be deemed notified when his or her counsel has been notified of a document, decision or order at the electronic, facsimile or postal address which that counsel has indicated to the Registry in accordance with regulation 31, sub-regulation 1, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.\n- 4. A person who is not represented by counsel shall be deemed notified when that person or the person, organisation or institution designated by that person has been notified of a document, decision or order.\n- 5. The Prosecutor shall be deemed notified when the Office of the Prosecutor has been notified of a document, decision or order, unless it is explicitly specified that the Prosecutor shall be notified of the document, decision or order in person."
      },
      {
        "id": "reg-33",
        "number": "33",
        "titleAr": "حساب المهل الزمنية",
        "titleEn": "Calculation of time limits",
        "contentAr": "1 - لأغراض أي إجراءات أمام المحكمة، تُحسب المهل الزمنية كما يلي:\n(أ) تُفهم الأيام على أنها أيام تقويمية؛\n(ب) لا يُحسب يوم الإخطار بالمستند أو القرار أو الأمر ضمن المهلة الزمنية؛\n(ج) إذا كان يوم الإخطار يوم جمعة أو اليوم السابق لعطلة رسمية للمحكمة، فلا تبدأ المهلة إلا في أول يوم عمل تالٍ للمحكمة؛\n(د) تُودع المستندات لدى قلم المحكمة في موعد أقصاه الساعة 4:00 عصراً من أول يوم عمل للمحكمة يلي انقضاء المهلة.\n2 - تُودع المستندات لدى قلم المحكمة بين الساعة 9:00 صباحاً و4:00 عصراً بتوقيت لاهاي (أو توقيت أي مكان آخر تعينه هيئة الرئاسة أو الدائرة أو المسجل)، إلا في الحالات العاجلة المقررة في اللائحة 24(3) من لوائح قلم المحكمة.\n3 - ما لم تأمر هيئة الرئاسة أو الدائرة بخلاف ذلك، فإن المستندات أو القرارات أو الأوامر الواردة أو المودعة بعد وقت الإيداع المحدد في اللائحة الفرعية 2 تُخطر في يوم العمل التالي للمحكمة.",
        "contentEn": "- 1. For the purposes of any proceedings before the Court, time shall be calculated as follows:\n  - (a) Days shall be understood as calendar days;\n  - (b) The day of notification of a document, decision or order shall not be counted as part of the time limit;\n  - (c) Where the day of notification is a Friday, or the day before an official holiday of the Court, the time limit shall not begin to run until the next working day of the Court;\n  - (d) Documents shall be filed with the Registry, at the latest, by 4pm on the first working day of the Court following expiry of the time limit.\n- 2. Documents shall be filed with the Registry between 9am and 4pm The Hague time or the time of such other place as designated by the Presidency, a Chamber or the Registrar, except where the urgent procedure foreseen in regulation 24, sub-regulation 3 of the Regulations of the Registry applies.\n- 3. Unless otherwise ordered by the Presidency or a Chamber, documents, decisions or orders received or filed after the filing time prescribed in sub-regulation 2 shall be notified on the next working day of the Court."
      },
      {
        "id": "reg-34",
        "number": "34",
        "titleAr": "المهل الزمنية للمستندات المودعة لدى المحكمة",
        "titleEn": "Time limits for documents filed with the Court",
        "contentAr": "ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح على غير ذلك، أو يصدر أمر بخلافه:\n(أ) يجوز للدائرة تحديد مواعيد لتقديم المستند الأولي الذي يودعه أحد المشاركين؛\n(ب) يُقدم الرد المشار إليه في اللائحة 24 خلال 10 أيام من تاريخ الإخطار بالمستند؛\n(ج) يُقدم طلب الإذن بالتعقيب خلال 3 أيام من تاريخ الإخطار بالرد. ويجوز للمشاركين الرد على طلب الإذن بالتعقيب خلال يومين. ويجوز للدائرة منح الإذن بالتعقيب وتحديد مدة إيداعه.",
        "contentEn": "Unless otherwise provided in the Statute, Rules or these Regulations, or unless otherwise ordered:\n- (a) A Chamber may fix time limits for the submission of the initial document to be filed by a participant;\n- (b) A response referred to in regulation 24 shall be filed within 10 days of notification in accordance with regulation 31 of the document to which the participant is responding;\n- (c) A request for leave to reply shall be filed within three days of notification in accordance with regulation 31 of the response. The participants may respond to the request for leave to reply within two days. A Chamber may grant the request to file a reply within such time as it may specify in its order."
      },
      {
        "id": "reg-35",
        "number": "35",
        "titleAr": "تعديل المهل الزمنية",
        "titleEn": "Variation of time limits",
        "contentAr": "1 - تُقدم طلبات تمديد أو تقليص أي مهلة زمنية مقررة في هذه اللوائح أو بأمر من الدائرة كتابةً أو شفوياً إلى الدائرة المعروض عليها الأمر مع بيان الأسباب الموجبة.\n2 - يجوز للدائرة تمديد أو تقليص المهلة لسبب وجيه وبعد إتاحة الفرصة للمشاركين لإبداء آرائهم عند الاقتضاء. وبعد انقضاء المهلة، لا يُمنح التمديد إلا إذا أثبت المشارك أنه تعذر عليه تقديم الطلب لأسباب خارجة عن إرادته.",
        "contentEn": "- 1. Applications to extend or reduce any time limit as prescribed in these Regulations or as ordered by the Chamber shall be made in writing or orally to the Chamber seized of the matter setting out the grounds on which the variation is sought.\n- 2. The Chamber may extend or reduce a time limit if good cause is shown and, where appropriate, after having given the participants an opportunity to be heard. After the lapse of a time limit, an extension of time may only be granted if the participant seeking the extension can demonstrate that he or she was unable to file the application within the time limit for reasons outside his or her control."
      },
      {
        "id": "reg-36",
        "number": "36",
        "titleAr": "نسق المستندات وحساب حدود الصفحات",
        "titleEn": "Format of documents and calculation of page limits",
        "contentAr": "1 - تُحسب العناوين والحواشي السفلية والاقتباسات ضمن حدود الصفحات.\n2 - لا يُحسب ما يلي ضمن حدود الصفحات:\n(أ) أي إضافة تتضمن اقتباسات نصية من النظام الأساسي أو القواعد أو هذه اللوائح؛\n(ب) أي ملحق يتضمن مراجع أو أدلة أو نسخاً من السجل أو معروضات أو مواد موضوعية غير جدلية (ويحظر أن يحتوي الملحق على دفوع أو مذكرات موضوعية)؛\n(ج) صفحة الغلاف وصفحة الإخطار.\n3 - تُقدم جميع المستندات بحجم A4 وهوامش لا تقل عن 2.5 سم من جميع الجوانب، وبترقيم متسلسل للصفحات. ويكون الخط بحجم 12 نقطة مع تباعد أسطر 1.5 للمتن، و10 نقاط مع تباعد مفرد للحواشي السفلية، ولا يجوز تضمين الحواشي أي دفوع جوهرية.",
        "contentEn": "- 1. Headings, footnotes and quotations shall be counted in calculating the page limits.\n- 2. The following shall not be counted in calculating the page limits:\n  - (a) Any addendum containing verbatim quotations of the Statute, Rules or these Regulations;\n  - (b) Any appendix containing references, authorities, copies from the record, exhibits and other relevant, non-argumentative material. An appendix shall not contain submissions;\n  - (c) The cover page and the notification page.\n- 3. All documents shall be submitted on A4 format. Margins shall be at least 2.5 centimetres on all four sides. All documents that are filed shall be paginated, including the cover sheet. The font shall be any of the following: Palatino Linotype, Times New Roman, Century Schoolbook, Bookman Old Style, Cambria, Georgia or Courier. The typeface of all documents shall be 12 point with 1.5 line spacing for the text and 10 point with single spacing for footnotes. No substantial submissions may be placed in the footnotes of a document."
      },
      {
        "id": "reg-37",
        "number": "37",
        "titleAr": "حدود الصفحات للمستندات المودعة لدى قلم المحكمة",
        "titleEn": "Page limits for documents filed with the Registry",
        "contentAr": "1 - يجب ألا يتجاوز أي مستند يُودع لدى قلم المحكمة 20 صفحة، ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح على خلاف ذلك أو تأمر الدائرة بغيره.\n2 - يجوز للدائرة في ظروف استثنائية وبناءً على طلب أحد المشاركين زيادة هذا الحد الأقصى للصفحات.",
        "contentEn": "- 1. A document filed with the Registry shall not exceed 20 pages, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.\n- 2. The Chamber may, at the request of a participant, extend the page limit in exceptional circumstances."
      },
      {
        "id": "reg-38",
        "number": "38",
        "titleAr": "حدود محددة لعدد الصفحات",
        "titleEn": "Specific page limits",
        "contentAr": "1 - ما لم تأمر الدائرة بخلاف ذلك، لا يتجاوز الحد الأقصى 120 صفحة للمستندات التالية والردود عليها:\n(أ) مذكرة ما قبل اعتماد التهم؛\n(ب) مذكرة المحاكمة؛\n(ج) المذكرة الختامية.\n2 - لا يتجاوز الحد الأقصى 60 صفحة للمستندات التالية:\n(أ) طلب بموجب المادة 57(3)(د) والقاعدة 115(1) وآراء الدولة الطرف؛\n(ب) طلب المدعي العام للإذن ببدء التحقيق بموجب المادة 18(2)؛\n(ج) الطعون في المقبولية أو اختصاص المحكمة بموجب المادة 19(2)؛\n(د) طلبات إعادة النظر بموجب المادة 53(3)(أ)؛\n(هـ) طلب الإذن بالتحقيق بموجب المادة 15(3) والقاعدة 50(2)؛\n(و) الدفوع بموجب المادة 75؛\n(ز) طلبات المدعي العام بموجب المادة 58؛\n(ح) قائمة الأدلة قبل جلسة اعتماد التهم؛\n(ط) قائمة الأدلة قبل المحاكمة.\n3 - لا يتجاوز الحد الأقصى 30 صفحة لطلبات تعويض الضحايا أو طلبات الفصل في الاختصاص أو غيرها من الطلبات الإجرائية المحددة.",
        "contentEn": "- 1. Unless otherwise ordered by the Chamber, the page limit shall not exceed 120 pages for the following documents and responses thereto, if any:\n  - (a) A pre-confirmation brief;\n  - (b) A trial brief;\n  - (c) A closing brief.\n- 2. Unless otherwise ordered by the Chamber, the page limit shall not exceed 60 pages for the following documents and responses thereto, if any:\n  - (a) A request under article 57, paragraph 3 (d), and rule 115, sub-rule 1, and the views submitted by the State Party as referred to in those provisions;\n  - (b) The application of the Prosecutor for authorisation of the investigation under article 18, paragraph 2;\n  - (c) Challenges to the admissibility or jurisdiction of the Court under article 19, paragraph 2;\n  - (d) Requests by the State Party or the Security Council under article 53, paragraph 3 (a), to the Pre-Trial Chamber to reconsider a decision of the Prosecutor under article 53, paragraphs 1 and 2;\n  - (e) The request for authorisation of an investigation under article 15, paragraph 3, and rule 50, sub-rule 2;\n  - (f) Representations under article 75;\n  - (g) Applications by the Prosecutor to the Pre-Trial Chamber under article 58;\n  - (h) A pre-confirmation list of evidence under rule 121, sub-rule 3 or as ordered by the Chamber;\n  - (i) A pre-trial list of evidence.\n- 3. Unless otherwise ordered by the Chamber, the page limit shall not exceed 30 pages for the following documents and responses thereto, if any:\n  - (a) Representations made by victims to the Pre-Trial Chamber under article 15, paragraph 3, and rule 50, sub-rule 3;\n  - (b) Requests by the Prosecutor for a ruling regarding questions of jurisdiction or admissibility under article 19, paragraph 3;\n  - (c) Requests by the Prosecutor to the Pre-Trial Chamber under article 18, paragraph 6, or article 19, paragraph 8;\n  - (d) A document of the Prosecutor under article 56, paragraph 1 (a), containing the information that a unique investigative opportunity has arisen;\n  - (e) A request by any participant to the Pre-Trial Chamber to take specific measures or to issue orders and warrants or to seek State cooperation;\n  - (f) A request under rule 173 for compensation;\n  - (g) A description of the charges by the Prosecutor under rule 121, sub-rule 3."
      },
      {
        "id": "reg-39",
        "number": "39",
        "titleAr": "متطلبات اللغة",
        "titleEn": "Language requirements",
        "contentAr": "1 - تكون جميع المستندات والمواد المودعة لدى قلم المحكمة بالإنجليزية أو الفرنسية ما لم يؤذن بغير ذلك. وإذا كان المستند الأصلي بلغة أخرى وجب إرفاق ترجمة معتمدة له.\n2 - لا تنطبق اللائحة الفرعية 1 على الضحايا غير الممثلين الذين لا يتقنون أياً من لغتي عمل المحكمة.\n3 - عندما تأذن الدائرة لمشارك باستخدام لغة أخرى غير الإنجليزية أو الفرنسية عملاً بالمادة 50(3)، تتحمل المحكمة نفقات الترجمة الشفوية والتحريرية.",
        "contentEn": "- 1. All documents and materials filed with the Registry shall be in English or French, unless otherwise provided in the Statute, Rules, these Regulations or authorised by the Chamber or the Presidency. If the original document or material is not in one of these languages, a participant shall attach a translation thereof.\n- 2. Sub-regulation 1 shall not apply to victims who are not represented and do not have a sufficient knowledge of a working language of the Court or any other language authorised by the Chamber or the Presidency.\n- 3. When a Chamber, in accordance with article 50, paragraph 3, and following consultation with the Registrar, authorises use by a participant of a language other than English or French, the expenses for interpretation and translation shall be borne by the Court."
      },
      {
        "id": "reg-40",
        "number": "40",
        "titleAr": "خدمات اللغات بقلم المحكمة",
        "titleEn": "Language services of the Registry",
        "contentAr": "1 - يكفل المسجل ترجمة القرارات والنصوص المنصوص عليها في المادة 50(1) والقاعدة 40 إلى جميع اللغات الرسمية للمحكمة.\n2 - يكفل المسجل توفير خدمات الترجمة الشفوية في جميع الإجراءات باللغتين الإنجليزية والفرنسية ولغة المتهم أو المحتجز الذي لا يجيد لغات العمل، وأي لغة أخرى مأذون بها.\n3 - يكفل المسجل ترجمة جميع القرارات والأوامر القضائية إلى لغتي عمل المحكمة، وإلى لغة المتهم إذا كان لا يفهم لغات العمل.",
        "contentEn": "- 1. The Registrar shall ensure that the decisions and texts envisaged in article 50, paragraph 1, and in rule 40, are translated into all the official languages of the Court. In addition, the Registrar shall ensure translation of those texts referred to in regulation 7, which the Presidency decides should be translated into all the official languages of the Court.\n- 2. The Registrar shall ensure that interpretation services are provided in all proceedings:\n  - (a) For English and French and any other official language used as a working language in accordance with rule 41;\n  - (b) For the language of the person to whom article 58 applies, the accused, convicted or acquitted person if he or she does not fully understand or speak any of the working languages;\n  - (c) For the other language, if any, authorised by the Chamber pursuant to article 50, paragraph 3, subject to regulation 39, sub-regulation 3.\n- 3. The Registrar shall ensure translation into the other working language(s) of all decisions or orders taken by Chambers during proceedings.\n- 4. The Registrar shall ensure translation and interpretation for the cases listed in regulation 39, sub-regulation 2.\n- 5. The Registrar shall, if necessary, ensure translation into the language chosen by the requested State of requests under Part 9 of the Statute transmitted by the Registrar in accordance with article 87, paragraph 2, and rule 176, sub-rule 2.\n- 6. The Registrar shall ensure translation into the language of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person, if he or she does not fully understand or speak any of the working languages, of all decisions or orders in his or her case. Counsel shall be responsible for informing that person of the other documents in his or her case."
      },
      {
        "id": "reg-41",
        "number": "41",
        "titleAr": "وحدة الضحايا والشهود",
        "titleEn": "Victims and Witnesses Unit",
        "contentAr": "يجوز لوحدة الضحايا والشهود، عملاً بالفقرة 4 من المادة 68، أن توجه انتباه الدائرة إلى أي مسألة تتطلب النظر في اتخاذ تدابير حماية بموجب القاعدة 87 أو تدابير خاصة بموجب القاعدة 88.",
        "contentEn": "The Victims and Witnesses Unit may, pursuant to article 68, paragraph 4, draw any matter to the attention of a Chamber where protective measures under rule 87 or special measures under rule 88 require its consideration."
      },
      {
        "id": "reg-42",
        "number": "42",
        "titleAr": "تطبيق وتعديل تدابير الحماية",
        "titleEn": "Application and variation of protective measures",
        "contentAr": "1 - تظل التدابير الحمائية الصادرة بشأن ضحية أو شاهد نافذة وسارية المفعول بكامل قوتها في أي إجراءات أخرى أمام المحكمة وتستمر بعد اختتام الإجراءات، رهناً بإعادة النظر فيها من جانب إحدى الدوائر.\n2 - عند وفاء المدعي العام بالتزامات الكشف في إجراءات لاحقة، عليه احترام التدابير الحمائية وإخطار الدفاع بطبيعتها.\n3 - يُقدم أي طلب لتعديل تدبير حمائي إلى الدائرة التي أصدرته أولاً، فإن لم تكن قائمة، يُقدم إلى الدائرة المعروضة أمامها الدعوى.\n4 - تسعى الدائرة قبل البت في الطلب إلى الحصول على موافقة الشخص المشمول بالحماية كلما أمكن ذلك.",
        "contentEn": "- 1. Protective measures once ordered in any proceedings in respect of a victim or witness shall continue to have full force and effect in relation to any other proceedings before the Court and shall continue after proceedings have been concluded, subject to revision by a Chamber.\n- 2. When the Prosecutor discharges disclosure obligations in subsequent proceedings, he or she shall respect the protective measures as previously ordered by a Chamber and shall inform the defence to whom the disclosure is being made of the nature of these protective measures.\n- 3. Any application to vary a protective measure shall first be made to the Chamber which issued the order. If that Chamber is no longer seized of the proceedings in which the protective measure was ordered, application may be made to the Chamber before which a variation of the protective measure is being requested. That Chamber shall obtain all relevant information from the proceedings in which the protective measure was first ordered.\n- 4. Before making a determination under sub-regulation 3, the Chamber shall seek to obtain, whenever possible, the consent of the person in respect of whom the application to rescind, vary or augment protective measures has been made."
      },
      {
        "id": "reg-43",
        "number": "43",
        "titleAr": "شهادة الشهود",
        "titleEn": "Testimony of witnesses",
        "contentAr": "مع مراعاة النظام الأساسي والقواعد، يحدد القاضي الرئيس، بالتشاور مع أعضاء الدائرة، كيفية وترتيب استجواب الشهود وتقديم الأدلة بما يكفل:\n(أ) جعل استجواب الشهود وتقديم الأدلة عادلاً وفعالاً لاستجلاء الحقيقة؛\n(ب) تجنب التأخير غير المبرر وضمان الاستخدام الفعال للوقت.",
        "contentEn": "Subject to the Statute and the Rules, the Presiding Judge, in consultation with the other members of the Chamber, shall determine the mode and order of questioning witnesses and presenting evidence so as to:\n- (a) Make the questioning of witnesses and the presentation of evidence fair and effective for the determination of the truth;\n- (b) Avoid delays and ensure the effective use of time."
      },
      {
        "id": "reg-44",
        "number": "44",
        "titleAr": "الخبراء",
        "titleEn": "Experts",
        "contentAr": "1 - ينشئ المسجل قائمة بالخبراء ويحتفظ بها متاحة في جميع الأوقات لجميع أجهزة المحكمة والمشاركين. ويُدرج الخبراء بناءً على إثبات خبراتهم في المجال ذي الصلة. ويجوز التظلم أمام هيئة الرئاسة من قرار الرفض، وللدائرة سلطة تقديرية في قبول أدلة من خبراء غير مقيدين بالقائمة.\n2 - يجوز للدائرة أن تأمر بتكليف خبير مشترك من جانب المشاركين.\n3 - عند استلام تقرير الخبير المشترك، يجوز لأي مشارك طلب الإذن بندب خبير إضافي.\n4 - يجوز للدائرة من تلقاء نفسها ندب خبير في الدعوى.\n5 - تصدر الدائرة الأوامر المتعلقة بموضوع تقرير الخبرة وعددهم وطريقة ندبهم والمهل الزمنية لتقاريرهم.",
        "contentEn": "- 1. The Registrar shall create and maintain a list of experts accessible at all times to all organs of the Court and to all participants. Experts shall be included on such a list following an appropriate indication of expertise in the relevant field. A person may seek review by the Presidency of a negative decision of the Registrar. The Chamber has discretion to allow the introduction of expert evidence from persons who are not on the list of experts.\n- 2. The Chamber may direct the joint instruction of an expert by the participants.\n- 3. On receipt of the report prepared by an expert jointly instructed, a participant may apply to the Chamber for leave to instruct a further expert.\n- 4. The Chamber may proprio motu instruct an expert.\n- 5. The Chamber may issue any order as to the subject of an expert report, the number of experts to be instructed, the mode of their instruction, the manner in which their evidence is to be presented and the time limits for the preparation and notification of their report."
      },
      {
        "id": "reg-45",
        "number": "45",
        "titleAr": "المعلومات المقدمة من المدعي العام",
        "titleEn": "Information provided by the Prosecutor",
        "contentAr": "1 - يخطر المدعي العام هيئة الرئاسة كتابةً بمجرد إحالة حالة إليه من دولة طرف بموجب المادة 14 أو من مجلس الأمن بموجب المادة 13(ب)، ويزود هيئة الرئاسة بأي معلومات أخرى تيسر إحالة الحالة في الوقت المناسب إلى دائرة تمهيدية، بما في ذلك نيته تقديم طلب بموجب المادة 15(3).\n2 - يخطر المدعي العام هيئة الرئاسة كتابةً إذا اعتزم المضي قدماً في تحقيق يتعلق بجريمة عدوان عملاً بالمادة 15 مكرراً (7).\n3 - يخطر المدعي العام رئيس الشعبة التمهيدية كتابةً إذا اعتزم طلب إذن الشعبة التمهيدية ببدء تحقيق في جريمة عدوان عملاً بالمادة 15 مكرراً (8).",
        "contentEn": "- 1. The Prosecutor shall inform the Presidency in writing as soon as a situation has been referred to the Prosecutor by a State Party under article 14 or by the Security Council under article 13, sub-paragraph (b); and shall provide the Presidency with any other information that may facilitate the timely assignment of a situation to a Pre-Trial Chamber, including, in particular, the intention of the Prosecutor to submit a request under article 15, paragraph 3.\n- 2. The Prosecutor shall inform the Presidency in writing if he or she intends to proceed with an investigation in respect of a crime of aggression, in accordance with article 15 bis, paragraph 7.\n- 3. The Prosecutor shall inform the President of the Pre-Trial Division in writing if he or she intends to seek the authorisation of the Pre-Trial Division to commence an investigation in respect of a crime of aggression, in accordance with article 15 bis, paragraph 8."
      },
      {
        "id": "reg-46",
        "number": "46",
        "titleAr": "الدائرة التمهيدية والشعبة التمهيدية",
        "titleEn": "Pre-Trial Chamber and Division",
        "contentAr": "1 - تُنشئ هيئة الرئاسة دوائر تمهيدية دائمة ذات تشكيلات محددة.\n2 - تُحيل هيئة الرئاسة الحالة إلى دائرة تمهيدية بمجرد إخطار المدعي العام لها وفقاً للائحة 45(1). وتكون الدائرة التمهيدية مسؤولة عن أي مسألة أو طلب ينشأ عن الحالة المحالة إليها، ويجوز لرئيس الشعبة التمهيدية إحالة مسألة لدائرة أخرى تحقيقاً لحسن سير العدالة.\n3 - أي مسألة لا تنشأ عن حالة محالة تحال إلى دائرة تمهيدية وفقاً لجدول المناوبة.\n4 - لأغراض المادة 15 مكرراً (8)، تتألف الشعبة التمهيدية من جميع القضاة المعينين فيها بموجب المادة 39(1).",
        "contentEn": "- 1. The Presidency shall constitute permanent Pre-Trial Chambers with fixed compositions.\n- 2. The Presidency shall assign a situation to a Pre-Trial Chamber as soon as the Prosecutor has informed the Presidency in accordance with regulation 45, paragraph 1. The Presidency shall also assign a situation to a Pre-Trial Chamber, if necessary: following the receipt of information from the Prosecutor in accordance with regulation 45, paragraph 2, or, as soon as the Pre-Trial Division, in accordance with article 15 bis, paragraph 8, authorises the commencement of an investigation. The Pre-Trial Chamber shall be responsible for any matter, request or information arising out of the situation assigned to it, save that, at the request of a Presiding Judge of a Pre-Trial Chamber, the President of the Pre-Trial Division may decide to assign a matter, request or information arising out of that situation to another Pre-Trial Chamber in the interests of the administration of justice.\n- 3. Any matter, request or information not arising out of a situation assigned to a Pre-Trial Chamber in accordance with sub-regulation 2, shall be directed by the President of the Pre-Trial Division to a Pre-Trial Chamber according to a roster established by the President of that Division.\n- 4. For the purposes of article 15 bis, paragraph 8, the Pre-Trial Division shall be composed of all the judges assigned to the Pre-trial Division pursuant to article 39, paragraph 1."
      },
      {
        "id": "reg-47",
        "number": "47",
        "titleAr": "القاضي الفرد",
        "titleEn": "Single judge",
        "contentAr": "1 - يستند تعيين قاضٍ منفرد وفقاً للفقرة 2(ب)(3) من المادة 39 والقاعدة 7 إلى معايير تتفق عليها الدائرة التمهيدية، بما في ذلك الأقدمية والخبرة في المحاكمات الجنائية وتوزيع العمل.\n2 - يتولى القاضي المنفرد المعين نظر القضية طوال مدتها قدر الإمكان، ويجوز للدائرة تعيين أكثر من قاضٍ منفرد إذا اقتضى عبء العمل ذلك.",
        "contentEn": "- 1. The designation of a single judge in accordance with article 39, paragraph 2 (b) (iii), and rule 7 shall be based on criteria agreed upon by the Pre-Trial Chamber, including seniority of age and criminal trial experience. Other criteria may include consideration of the issues involved and the circumstances of the proceedings before the Chamber, as well as the distribution of work within the Chamber and the proper management and efficiency in the handling of cases.\n- 2. The single judge designated by the Pre-Trial Chamber shall, as far as possible, act for the duration of a case. The Pre-Trial Chamber may designate more than one single judge when the efficient management of the workload of the Chamber so requires."
      },
      {
        "id": "reg-48",
        "number": "48",
        "titleAr": "المعلومات الضرورية للدائرة التمهيدية",
        "titleEn": "Information necessary for the Pre-Trial Chamber",
        "contentAr": "1 - يجوز للدائرة التمهيدية أن تطلب من المدعي العام تقديم معلومات أو مستندات محددة أو إضافية في حوزته، أو ملخصات عنها، ترى الدائرة أنها لازمة لممارسة مهامها بموجب المادة 53(3)(ب) والمادة 56(3)(أ) والمادة 57(3)(ج).\n2 - تتخذ الدائرة التمهيدية التدابير اللازمة لحماية المعلومات والمستندات وسلامة الشهود والضحايا وأسرهم بموجب المواد 54 و68 و72 و93.\n3 - لا يخل هذا الحكم بمتطلبات السرية الواجبة التطبيق بموجب المادة 54(3)(هـ) و(و).",
        "contentEn": "- 1. The Pre-Trial Chamber may request the Prosecutor to provide specific or additional information or documents in his or her possession, or summaries thereof, that the Pre-Trial Chamber considers necessary in order to exercise the functions and responsibilities set forth in article 53, paragraph 3 (b), article 56, paragraph 3 (a), and article 57, paragraph 3 (c).\n- 2. The Pre-Trial Chamber shall take such measures as are necessary under articles 54, 72 and 93 to protect the information and documents referred to in sub-regulation 1 and under article 68, paragraph 5, to protect the safety of witnesses and victims and members of their families.\n- 3. Nothing in this regulation shall prejudice the requirements of confidentiality applicable under article 54, paragraph 3 (e) and (f)."
      },
      {
        "id": "reg-49",
        "number": "49",
        "titleAr": "طلب الإذن بالتحقيق",
        "titleEn": "The request for authorisation",
        "contentAr": "1 - يُقدم طلب المدعي العام إلى الدائرة التمهيدية للإذن بإجراء تحقيق عملاً بالمادة 15(3) كتابةً ويجب أن يتضمن:\n(أ) إشارة إلى الجرائم التي يعتقد المدعي العام أنها ارتكبت أو يجري ارتكابها وبياناً بالوقائع المدعى بها؛\n(ب) إعلاناً مسبباً من المدعي العام بأن الجرائم المذكورة تقع ضمن اختصاص المحكمة.\n2 - يبين بيان الوقائع على الأقل: أماكن ارتكاب الجرائم المدعاة وتواريخها والأشخاص المتورطين فيها.\n3 - يشتمل ملحق الطلب، إن أمكن، على تسلسل زمني للأحداث، وخرائط توضيحية، ومسرد توضيحي للأسماء والأماكن والمؤسسات.",
        "contentEn": "- 1. A request by the Prosecutor to a Pre-Trial Chamber for authorisation of an investigation pursuant to article 15, paragraph 3, shall be in writing and shall contain:\n  - (a) A reference to the crimes which the Prosecutor believes have been or are being committed and a statement of the facts being alleged to provide the reasonable basis to believe that those crimes have been or are being committed;\n  - (b) A declaration of the Prosecutor with reasons that the listed crimes fall within the jurisdiction of the Court.\n- 2. The statement of the facts referred to in sub-regulation 1 (a) shall indicate, as a minimum:\n  - (a) The places of the alleged commission of the crimes, e.g. country, town, as precisely as possible;\n  - (b) The time or time period of the alleged commission of the crimes; and\n  - (c) The persons involved, if identified, or a description of the persons or groups of persons involved.\n- 3. The appendix to the request shall include, if possible:\n  - (a) The chronology of relevant events;\n  - (b) Maps showing relevant information, including the location of the alleged crimes; and\n  - (c) An explanatory glossary of relevant names of persons, locations and institutions."
      },
      {
        "id": "reg-50",
        "number": "50",
        "titleAr": "مهل زمنية محددة",
        "titleEn": "Specific time limits",
        "contentAr": "1 - تكون المهلة المحددة للضحايا لتقديم مذكراتهم بموجب المادة 15(3) والقاعدة 50(3) هي 30 يوماً من تاريخ تزويدهم بالمعلومات عملاً بالقاعدة 50(1).\n2 - تكون المهلة المحددة للدولة الطرف لإبداء آرائها بشأن طلب المدعي العام لاتخاذ تدابير معينة داخل أراضيها بموجب القاعدة 115(2) هي 10 أيام من تاريخ الإخطار.",
        "contentEn": "- 1. The time limit for victims to make representations under article 15, paragraph 3, and rule 50, sub-rule 3, shall be 30 days following information given in accordance with rule 50, sub-rule 1.\n- 2. The time limit for a State Party to express its views on a request by the Prosecutor for authorisation to take certain measures within its territory in accordance with rule 115, sub-rule 2, shall be ten days from notification."
      },
      {
        "id": "reg-51",
        "number": "51",
        "titleAr": "القرار بشأن الإفراج المؤقت",
        "titleEn": "Decision on interim release",
        "contentAr": "لأغراض البت في الإفراج المؤقت، تطلب الدائرة التمهيدية ملاحظات من الدولة المضيفة ومن الدولة التي يطلب الشخص الإفراج إليه فيها.",
        "contentEn": "For the purposes of a decision on interim release, the Pre-Trial Chamber shall seek observations from the host State and from the State to which the person seeks to be released."
      },
      {
        "id": "reg-52",
        "number": "52",
        "titleAr": "المستند المتضمن للتهم",
        "titleEn": "Document containing the charges",
        "contentAr": "1 - تقتصر وثيقة توجيه التهم المشار إليها في المادة 61 على ما يلي فقط:\n(أ) الاسم الكامل للشخص وأي معلومات تعريفية أخرى ذات صلة؛\n(ب) بيان بالوقائع، بما في ذلك زمان ومكان الجرائم المدعاة، يوفر أساساً قانونياً وواقعياً كافياً لإحالة الشخص أو الأشخاص للمحاكمة؛\n(ج) التكييف القانوني للوقائع ليتطابق مع الجرائم المنصوص عليها في المواد 6 أو 7 أو 8 أو 8 مكرراً، وشكل المساهمة الجنائية الدقيق بموجب المادتين 25 و28.\n2 - لا تتضمن وثيقة توجيه التهم أي دفوع أو إشارات إلى الأدلة أو تحليل لها؛ وتُقدم كل تلك المواد المؤيدة للتهم في مذكرة منفصلة تسبق جلسة اعتماد التهم تُودع بالتزامن معها.",
        "contentEn": "- 1. The document containing the charges referred to in article 61 shall contain only:\n  - (a) The full name of the person and any other relevant identifying information;\n  - (b) A statement of the facts, including the time and place of the alleged crimes, which provides a sufficient legal and factual basis to bring the person or persons to trial, including relevant facts for the exercise of jurisdiction by the Court;\n  - (c) A legal characterisation of the facts to accord both with the crimes under articles 6, 7, 8 or 8 bis and the precise form of participation under articles 25 and 28.\n- 2. The document containing the charges shall not contain any submissions or references to, or analysis of, evidence. All such material in support of the charges shall be presented in a separate pre-confirmation brief to be submitted simultaneously."
      },
      {
        "id": "reg-53",
        "number": "53",
        "titleAr": "قرار الدائرة التمهيدية في أعقاب جلسة اعتماد التهم",
        "titleEn": "Decision of the Pre-Trial Chamber following the confirmation hearing",
        "contentAr": "1 - يصدر القرار الكتابي للدائرة التمهيدية المتضمن استنتاجاتها بشأن كل تهمة خلال 60 يوماً من تاريخ انتهاء جلسة اعتماد التهم.\n2 - يتضمن قرار الدائرة التمهيدية باعتماد التهم منطوقاً مستقلاً يعيد إيراد التهم المعتمدة بنصها المقدم من المدعي العام كما عدلته الدائرة، ولا يجوز أن يتضمن المنطوق حواشي سفلية أو إحالات إلى الأدلة أو الدفوع.",
        "contentEn": "- 1. The written decision of the Pre-Trial Chamber setting out its findings on each of the charges shall be delivered within 60 days from the date the confirmation hearing ends.\n- 2. The decision of a Pre-Trial Chamber confirming charges shall contain a separate operative part which reproduces the confirmed charges by setting out the text of the charges presented by the Prosecutor, as adapted by the Pre-Trial Chamber in conformity with its findings. The confirmed charges as reproduced in the operative part shall not contain any footnotes or cross references to evidence, analysis, or submissions. A decision by a Pre-Trial Chamber or Trial Chamber on the amendment or partial withdrawal of charges pursuant to article 61(9) shall contain an operative part reproducing the confirmed charges in full."
      },
      {
        "id": "reg-53-bis",
        "number": "53 bis",
        "titleAr": "إحالة سجل الإجراءات بعد الإحالة إلى المحاكمة",
        "titleEn": "Transmission of the record of the proceedings following committal",
        "contentAr": "1 - في حال إحالة المتهم إلى الدائرة الابتدائية، تصدر الدائرة التمهيدية تعليماتها فوراً للمسجل بإحالة قرار اعتماد التهم وسجل الإجراءات إلى هيئة الرئاسة عملاً بالقاعدة 129.\n2 - في الفترة الفاصلة بين هذه الإحالة إلى هيئة الرئاسة وإحالة السجل إلى الدائرة الابتدائية بموجب القاعدة 130، يجوز الاستمرار في إيداع المستندات أمام الدائرة التمهيدية ريثما يتم تشكيل الدائرة الابتدائية.",
        "contentEn": "- 1. In the case of a committal of the accused to the Trial Chamber, the Pre-Trial Chamber shall immediately instruct the Registrar to transmit the decision on the confirmation of charges and the record of the proceedings to the Presidency in accordance with rule 129.\n- 2. Between this transmission to the Presidency and the Presidency’s transmission of the record to the Trial Chamber under rule 130, documents may continue to be filed before the Pre-Trial Chamber, pending the Trial Chamber’s constitution."
      },
      {
        "id": "reg-54",
        "number": "54",
        "titleAr": "مؤتمرات الوضع الإجرائي أمام الدائرة الابتدائية",
        "titleEn": "Status conferences before the Trial Chamber",
        "contentAr": "يجوز للدائرة الابتدائية في مؤتمر تنسيق الإجراءات أن تصدر أي أمر تحقيقاً لمصلحة العدالة لأغراض المحاكمة بشأن:\n(أ) مدة ومحتوى الحجج القانونية والبيانات الافتتاحية والختامية؛\n(ب) ملخص الأدلة التي يعتزم المشاركون الاستناد إليها؛\n(ج) حجم الأدلة ومدتها؛\n(د) مدة استجواب الشهود؛\n(هـ) عدد الشهود وهويتهم؛\n(و) تقديم وإفشاء أقوال الشهود؛\n(ز) عدد المستندات والمعروضات؛\n(ح) المسائل التي يعتزم المشاركون إثارتها أثناء المحاكمة؛\n(ط) مدى الاعتماد على الأدلة المسجلة؛\n(ي) تقديم الأدلة في شكل موجز؛\n(ك) الإدلاء بالشهادة عبر دوائر الاتصال الصوتية أو المرئية المغلقة؛\n(ل) الكشف عن الأدلة؛\n(م) ندب الشهود الخبراء المشتركين أو المنفصلين؛\n(ن) الأدلة المقدمة بموجب القاعدة 69 بشأن الوقائع المتفق عليها؛\n(س) شروط مشاركة الضحايا في الإجراءات؛\n(ع) الدفوع التي يثيرها المتهم إن وُجدت.",
        "contentEn": "At a status conference, the Trial Chamber may, in accordance with the Statute and the Rules, issue any order in the interests of justice for the purposes of the proceedings on, inter alia, the following issues:\n- (a) The length and content of legal arguments and the opening and closing statements;\n- (b) A summary of the evidence the participants intend to rely on;\n- (c) The length of the evidence to be relied on;\n- (d) The length of questioning of the witnesses;\n- (e) The number and identity (including any pseudonym) of the witnesses to be called;\n- (f) The production and disclosure of the statements of the witnesses on which the participants propose to rely;\n- (g) The number of documents as referred to in article 69, paragraph 2, or exhibits to be introduced together with their length and size;\n- (h) The issues the participants propose to raise during the trial;\n- (i) The extent to which a participant can rely on recorded evidence, including the transcripts and the audio- and video-record of evidence previously given;\n- (j) The presentation of evidence in summary form;\n- (k) The extent to which evidence is to be given by an audio- or video-link;\n- (l) The disclosure of evidence;\n- (m) The joint or separate instruction by the participants of expert witnesses;\n- (n) Evidence to be introduced under rule 69 as regards agreed facts;\n- (o) The conditions under which victims shall participate in the proceedings;\n- (p) The defences, if any, to be advanced by the accused."
      },
      {
        "id": "reg-55",
        "number": "55",
        "titleAr": "سلطة الدائرة في تعديل التكييف القانوني للوقائع",
        "titleEn": "Authority of the Chamber to modify the legal characterisation of facts",
        "contentAr": "1 - يجوز للدائرة في قرارها الصادر بموجب المادة 74 تعديل التكييف القانوني للوقائع ليتطابق مع الجرائم المنصوص عليها في المواد 6 أو 7 أو 8 أو 8 مكرراً، أو ليتطابق مع شكل مشاركة المتهم بموجب المادتين 25 و28، دون تجاوز الوقائع والظروف الموصوفة في التهم وأي تعديلات عليها.\n2 - إذا تبين للدائرة في أي وقت أثناء المحاكمة أن التكييف القانوني للوقائع قد يكون عرضة للتعديل، تخطر المشاركين بهذا الاحتمال وتتيح لهم الفرصة لتقديم دفوع شفوية أو كتابية. وللدائرة تعليق الجلسة لمنحهم الوقت الكافي للاستعداد.\n3 - تكفل الدائرة للمتهم الوقت الكافي والتسهيلات اللازمة لإعداد دفاعه بموجب المادة 67(1)(ب)، وإعادة استجواب شهود سابقين أو استدعاء شهود جدد عملاً بالمادة 67(1)(هـ).",
        "contentEn": "- 1. In its decision under article 74, the Chamber may change the legal characterisation of facts to accord with the crimes under articles 6, 7, 8 or 8 bis, or to accord with the form of participation of the accused under articles 25 and 28, without exceeding the facts and circumstances described in the charges and any amendments to the charges.\n- 2. If, at any time during the trial, it appears to the Chamber that the legal characterisation of facts may be subject to change, the Chamber shall give notice to the participants of such a possibility and having heard the evidence, shall, at an appropriate stage of the proceedings, give the participants the opportunity to make oral or written submissions. The Chamber may suspend the hearing to ensure that the participants have adequate time and facilities for effective preparation or, if necessary, it may order a hearing to consider all matters relevant to the proposed change.\n- 3. For the purposes of sub-regulation 2, the Chamber shall, in particular, ensure that the accused shall:\n  - (a) Have adequate time and facilities for the effective preparation of his or her defence in accordance with article 67, paragraph 1 (b); and (b) If necessary, be given the opportunity to examine again, or have examined again, a previous witness, to call a new witness or to present other evidence admissible under the Statute in accordance with article 67, paragraph 1 (e)."
      },
      {
        "id": "reg-56",
        "number": "56",
        "titleAr": "الأدلة بموجب المادة 75",
        "titleEn": "Evidence under article 75",
        "contentAr": "يجوز للدائرة الابتدائية سماع الشهود وفحص الأدلة لأغراض إصدار قرار بشأن جبر الأضرار عملاً بالفقرة 2 من المادة 75 في نفس وقت المحاكمة.",
        "contentEn": "The Trial Chamber may hear the witnesses and examine the evidence for the purposes of a decision on reparations in accordance with article 75, paragraph 2, at the same time as for the purposes of trial."
      },
      {
        "id": "reg-56-bis",
        "number": "56 bis",
        "titleAr": "إجراءات طلبات الحكم بالبراءة",
        "titleEn": "Procedure for motions for acquittal",
        "contentAr": "1 - عملاً بالقاعدة 140 رابعاً، يجوز للدفاع تقديم طلب للإذن بعرض ملتمس بالبراءة (لا يتجاوز 3 صفحات) في موعد لا يتجاوز 3 أيام من ختام الأدلة المقدمة من المدعي العام أو من الضحايا.\n2 - يجوز للمدعي العام والممثلين القانونيين للضحايا تقديم رد (لا يتجاوز 3 صفحات) خلال 5 أيام من الإخطار بالطلب.\n3 - إذا منحت الدائرة الإذن، يودع الدفاع ملتمسه كتابةً بما لا يتجاوز 10 صفحات خلال 7 أيام، وتودع الردود خلال 7 أيام، وتحدد الدائرة جلسة خلال 14 يوماً.\n4 - إذا قررت الدائرة من تلقاء نفسها النظر في كفاية الأدلة على كل التهم أو بعضها، تخطر الأطراف وتحدد مهلة لتقديم مذكراتهم وجلسة لسماع أقوالهم، وتصدر قرارها في غضون 60 يوماً.",
        "contentEn": "- 1. Pursuant to rule 140 quater, the defence may file an application for leave to present a motion for acquittal, not exceeding three pages, no later than three days after the conclusion of the evidence presented by the Prosecutor, or if evidence is presented on behalf of the victims, three days after the conclusion of that evidence.\n- 2. The Prosecutor and legal representatives of victims may file a response to the leave application, not exceeding three pages, within five days of notification of the leave application.\n- 3. If the Trial Chamber grants leave:\n  - (a) The defence shall file its motion in writing not exceeding 10 pages, within seven days of notification of the Trial Chamber’s decision.\n  - (b) Any response by the Prosecutor and legal representatives of victims shall not exceed 10 pages and shall be filed within seven days of notification of the defence motion.\n  - (c) The Trial Chamber shall schedule the hearing prescribed by rule 140 quater, sub-rule 6, to be held within 14 days of the filing of the responses.\n- 4. If the Trial Chamber decides proprio motu to consider the sufficiency of the evidence on all or some of the charges in accordance with rule 140 quater, sub-rule 9:\n  - (a) The Trial Chamber shall notify the parties and participants of this decision and order the filing of submissions for the charges which it intends to consider.\n  - (b) The parties and legal representatives of victims shall file submissions within 30 days of notification of the Trial Chamber’s order.\n  - (c) A hearing shall be scheduled to be held within 30 days of notification of the submissions referred to in sub-regulation 4(b). If necessary, the Trial Chamber may require the submission of further written arguments in advance of and/or following the hearing.\n  - (d) The Trial Chamber shall issue its decision as expeditiously as possible within 60 days of the hearing or written arguments referred to in sub-regulation 4(c), whichever is later.\n  - (e) If the Trial Chamber decides to enter a decision of acquittal on all or some of the charges proprio motu, the provision of rule 140 quater, sub-rule 8, shall apply mutatis mutandis."
      },
      {
        "id": "reg-57",
        "number": "57",
        "titleAr": "الاستئناف",
        "titleEn": "Appeal",
        "contentAr": "لأغراض القاعدة 150، يودع المستأنف إشعاراً بالاستئناف يبين:\n(أ) اسم القضية ورقمها؛\n(ب) عنوان وتاريخ الحكم بالإدانة أو البراءة أو العقوبة أو أمر جبر الضرر المستأنف ضده؛\n(ج) ما إذا كان الاستئناف موجهاً ضد القرار بأكمله أو جزء منه؛\n(د) النص المحدد في النظام الأساسي الذي يُرفع الاستئناف بموجبه؛\n(هـ) أسباب الاستئناف بصورة تراكمية أو على سبيل الاحتياط مع تحديد الأخطاء المدعاة وأثرها على القرار المطعون فيه؛\n(و) التدبير أو الإنصاف المطلوب.",
        "contentEn": "For the purposes of rule 150, the appellant shall file a notice of appeal which shall state: (a) The name and number of the case; (b) The title and date of the decision of conviction or acquittal, sentence or reparation order appealed against; (c) Whether the appeal is directed against the whole decision or part thereof; (d) The specific provision of the Statute pursuant to which the appeal is filed; (e) The grounds of appeal, cumulatively or in the alternative, specifying the alleged errors and how they affect the appealed decision; (f) The relief sought."
      },
      {
        "id": "reg-58",
        "number": "58",
        "titleAr": "مذكرة الاستئناف",
        "titleEn": "Appeal brief",
        "contentAr": "1 - بعد إيداع إشعار الاستئناف وفقاً للائحة 57، يودع المستأنف مذكرة الاستئناف خلال 90 يوماً من تاريخ الإخطار بالقرار المستأنف.\n2 - تبين مذكرة الاستئناف الأسباب القانونية والواقعية لكل سبب استئناف، والإشارة المحددة إلى صفحات وفقرات القرار المطعون فيه ومواضع سجل المحاكمة.\n3 - لا يجوز أن تتجاوز مذكرة الاستئناف 100 صفحة.",
        "contentEn": "- 1. Having filed a notice of appeal in accordance with regulation 57, the appellant shall file an appeal brief within 90 days of notification of the relevant decision.\n- 2. The appeal brief shall set out the legal and/or factual reasons in support of each ground of appeal. Reference shall be made to the relevant part of the record or any other document or source of information as regards any factual issue. Each legal reason shall be set out together with reference to any relevant article, rule, regulation or other applicable law, and any authority cited in support thereof. Where applicable, the finding or ruling challenged in the decision shall be identified, with specific reference to the page and paragraph number.\n- 3. The appeal brief shall not exceed 100 pages."
      },
      {
        "id": "reg-59",
        "number": "59",
        "titleAr": "الرد على الاستئناف",
        "titleEn": "Response",
        "contentAr": "1 - يجوز للمشارك إيداع رد خلال 60 يوماً من الإخطار بمذكرة الاستئناف الموصوفة في اللائحة 58.\n2 - لا يجوز أن يتجاوز الرد 100 صفحة، ويُرتب بنفس ترتيب وترقيم مذكرة الاستئناف قدر الإمكان.",
        "contentEn": "- 1. A participant may file a response within 60 days of notification of the appeal brief described in regulation 58 as follows:\n  - (a) Each ground of appeal shall be answered separately, stating whether it is opposed, in whole or in part, together with the grounds put forward in support thereof; it shall also be stated whether the relief sought is opposed, in whole or in part, together with the grounds of opposition in support thereto;\n  - (b) When facts are relied on that are not already set out in the notice of appeal or the appeal brief, reference shall be made to the relevant part of the record or any other document or source of information;\n  - (c) Each legal reason relied on in support of the response shall be set out together with reference to any relevant article, rule, regulation or other applicable law, and any authority cited in support thereof.\n- 2. The response shall not exceed 100 pages. To the extent possible, it shall be set out and numbered in the same order as in the appeal brief described in regulation 58."
      },
      {
        "id": "reg-60",
        "number": "60",
        "titleAr": "الإجابة على الرد",
        "titleEn": "Reply",
        "contentAr": "1 - متى رأت دائرة الاستئناف ذلك ضرورياً لصالح العدالة، يجوز لها أن تأمر المستأنف بتقديم تعقيب خلال الأجل الذي تحدده.\n2 - يجب ألا يتجاوز أي تعقيب 50 صفحة.",
        "contentEn": "- 1. Whenever the Appeals Chamber considers it necessary in the interests of justice, it may order the appellant to file a reply within such time as it may specify in its order.\n- 2. Any reply filed in accordance with sub-regulation 1 shall not exceed 50 pages. To the extent possible, it shall be set out and numbered in the same order as in the documents described in regulations 58 and 59."
      },
      {
        "id": "reg-61",
        "number": "61",
        "titleAr": "تعديل أسباب الاستئناف المعروضة على دائرة الاستئناف",
        "titleEn": "Variation of grounds of appeal presented before the Appeals Chamber",
        "contentAr": "1 - يبين طلب تعديل أسباب الاستئناف اسم القضية ورقمها والتعديل المطلوب وأسبابه، ويُودع بمجرد العلم بالأسباب.\n2 - يجوز للمشاركين الرد خلال 7 أيام من الإخطار.\n3 - إذا قُبل التعديل وكانت مهلة المذكرة جارية، يجوز للدائرة تمديد المهلة أو الأمر بإيداع مذكرة تكميلية.\n4 - إذا كان قد تم إيداع المذكرة بالفعل، تحدد الدائرة مهلة وحدود صفحات لمذكرة تكميلية والرد عليها.",
        "contentEn": "- 1. An application for variation of grounds of appeal shall state the name and number of the case and shall specify the variation sought and the reasons in support thereof.\n- 2. The application for variation shall be filed as soon as the reasons warranting it become known.\n- 3. Participants may file a response within seven days of notification of the application for variation.\n- 4. The response shall state the name and number of the case and shall specify the legal or factual reasons advanced by way of opposition.\n- 5. If the variation is granted and the time limit for the filing of the appeal brief is still running, the Appeals Chamber may:\n  - (a) maintain the time limit for the filing of the appeal brief; or\n  - (b) extend the time limit for the filing of the appeal brief; or\n  - (c) maintain the time limit for the filing of the appeal brief in relation to the grounds of appeal set out in the notice of appeal that have not been varied, but order the filing of a supplemental brief containing the varied grounds of appeal and the legal or factual reasons in support thereof within a time and page limit specified by the Appeals Chamber. Regulation 58, sub-regulation 2, shall apply mutatis mutandis to the supplemental brief.\n- 6. If the variation is granted and the appeal brief has already been filed, the Appeals Chamber shall specify both the time and page limit within which the appellant shall file a supplemental brief setting out the grounds of appeal as varied, including the legal and factual reasons in support of each ground of appeal. Regulation 58, sub-regulation 2, shall apply mutatis mutandis to the supplemental brief.\n- 7. Any response to the supplemental brief described in sub-regulations 5 or 6 above shall be filed within the time limit specified by the Appeals Chamber. The Appeals Chamber may also fix a page limit for the response and otherwise regulation 59 shall apply mutatis mutandis.\n- 8. Regulation 60 shall apply mutatis mutandis with regard to any reply to the response filed in accordance with sub-regulation 7."
      },
      {
        "id": "reg-62",
        "number": "62",
        "titleAr": "أدلة إضافية معروضة على دائرة الاستئناف",
        "titleEn": "Additional evidence presented before the Appeals Chamber",
        "contentAr": "1 - على المشارك الراغب في تقديم أدلة إضافية أمام دائرة الاستئناف إيداع طلب يبين الأدلة وسبب عدم تقديمها أمام الدائرة الابتدائية.\n2 - يجوز لدائرة الاستئناف البت في مقبولية الأدلة الإضافية أولاً أو البت فيها بالاشتراك مع سائر مسائل الاستئناف.\n3 - تُودع الردود خلال المدة التي تحددها الدائرة.\n4 - إذا تعدد المتهمون المشاركون في الاستئناف، فإن الدليل المقبول لصالح أحدهم يُعتد به بالنسبة للباقين عند الاقتضاء.",
        "contentEn": "- 1. A participant seeking to present additional evidence shall file an application setting out:\n  - (a) The evidence to be presented;\n  - (b) The ground of appeal to which the evidence relates and the reasons, if relevant, why the evidence was not adduced before the Trial Chamber.\n- 2. The Appeals Chamber may:\n  - (a) Decide to first rule on the admissibility of the additional evidence, in which case it shall direct the participant affected by the application filed under sub-regulation 1 to address the issue of admissibility of the evidence in his or her response, and to adduce any evidence in response only after a decision on the admissibility of that evidence has been issued by the Appeals Chamber; or\n  - (b) Decide to rule on the admissibility of the additional evidence jointly with the other issues raised in the appeal, in which case it shall direct the participant affected by the application filed under sub-regulation 1 to both file a response setting out arguments on that application and to adduce any evidence in response.\n- 3. The responses described in sub-regulation 2 shall be filed within a time limit specified by the Appeals Chamber and shall be set out and numbered, to the extent possible, in the same order as in the application to present evidence.\n- 4. If several defendants are participants in the appeal, the evidence admitted on behalf of any of them shall, where relevant, be considered in respect of all of them."
      },
      {
        "id": "reg-63",
        "number": "63",
        "titleAr": "الاستئنافات الموحدة بموجب القاعدة 150",
        "titleEn": "Consolidated appeals under rule 150",
        "contentAr": "1 - ما لم تأمر دائرة الاستئناف بخلاف ذلك، في حالة تعدد الاستئنافات بموجب القاعدة 150، يودع المدعي العام مذكرة استئناف واحدة موحدة، كما يودع رداً موحداً في حال تعدد استئنافات المدانين.\n2 - يكون الحد الأقصى للمذكرة أو الرد الموحد 100 صفحة مضافاً إليها 40 صفحة عن كل شخص مدان أو مبرأ إضافي. والحد الأقصى للتعقيب الموحد 50 صفحة مضافاً إليها 20 صفحة عن كل شخص إضافي.",
        "contentEn": "- 1. Unless otherwise ordered by the Appeals Chamber, in a case of more than one appeal under rule 150:\n  - (a) When the Prosecutor appeals, he or she shall file one consolidated appeal brief in accordance with regulation 58;\n  - (b) When more than one convicted person files an appeal brief, the Prosecutor shall file a consolidated response in accordance with regulation 59.\n- 2. Regulation 60 shall apply mutatis mutandis and any reply filed by the Prosecutor shall be by way of a consolidated reply.\n- 3. For a consolidated appeal brief and a consolidated response, as described in sub-regulation 1, the page limit shall be 100 pages plus a further 40 pages for each additional convicted or acquitted person. The page limit for any consolidated reply as described in sub-regulation 2 shall be 50 pages plus a further 20 pages for each additional convicted or acquitted person.\n- 4. The time limit for filing a consolidated response by the Prosecutor shall run from notification of the last appeal brief filed by a convicted person in a given case."
      },
      {
        "id": "reg-64",
        "number": "64",
        "titleAr": "الاستئنافات بموجب القاعدة 154",
        "titleEn": "Appeals under rule 154",
        "contentAr": "1 - مع استثناء الاستئنافات المرفوعة بموجب المادة 82(1)(ب)، يبين إشعار الاستئناف بموجب القاعدة 154 اسم القضية وتاريخ القرار والطلب.\n2 - يودع المستأنف مذكرة الاستئناف خلال 21 يوماً من الإخطار، ويودع الرد خلال 21 يوماً (ما لم تكن بموجب المادة 82(1)(ج) فتودع خلال 4 أيام والرد خلال يومين).\n3 - بالنسبة للاستئناف بموجب المادة 82(1)(ب)، تصدر دائرة الاستئناف توجيهاتها خلال يومين، وتصدر حكمها المسبب خلال 45 يوماً من الجلسة أو 75 يوماً من القرار المستأنف إذا تعلق الأمر بالحبس الاحتياطي بموجب المادة 60(2) أو (4).",
        "contentEn": "- 1. With the exception of appeals filed under article 82, paragraph 1 (b), a notice of appeal filed for the purposes of rule 154 shall state: (a) The name and number of the case or situation; (b) The title and date of the decision being appealed; (c) Whether the appeal is directed against the whole decision or part thereof; (d) The specific provision of the Statute pursuant to which the appeal is filed; (e) The relief sought.\n- 2. Subject to sub-regulations 6 and 8, the appellant shall file an appeal brief within 21 days of notification of the relevant decision. The appeal brief shall set out the grounds of appeal and shall contain the legal and/or factual reasons in support of each ground of appeal. Reference shall be made to the relevant part of the record or any other document or source of information as regards any factual issue. Each legal reason shall be set out together with reference to any relevant article, rule, regulation or other applicable law, and any authority cited in support thereof. The appeal brief shall, where applicable, identify the finding or ruling challenged in the decision, with specific reference to the page and paragraph number.\n- 3. Grounds of appeal may be advanced cumulatively or in the alternative.\n- 4. Subject to sub-regulations 6 and 8, a participant may file a response within 21 days of notification of the appeal brief as follows: (a) Each ground of appeal shall be answered separately, stating whether it is opposed, in whole or in part, together with the grounds put forward in support thereof; it shall also be stated whether the relief sought is opposed, in whole or in part, together with the grounds of opposition in support thereto; (b) The legal and/or factual reasons in support.\n- 5. For appeals filed under article 82, paragraph 1 (b) and rule 154, the notice of appeal shall state: (a) The name and number of the case or situation; (b) The title and date of the decision being appealed; (c) Whether the appeal is directed against the whole decision or part thereof; (d) The specific provision of the Statute pursuant to which the appeal is filed; (e) The grounds of appeal, cumulatively or in the alternative, specifying the alleged errors and how they affect the appealed decision; (f) The relief sought.\n- 6. For appeals filed under article 82, paragraph 1 (b) and rule 154, the Appeals Chamber shall, within two days of the filing of the notice of appeal, issue directions for the conduct of the proceedings, which may, at its full discretion, include: (a) Scheduling a hearing to be held no later than 10 days from the notification of the notice of appeal. Depending on the circumstances, the Appeals Chamber may decide to adjourn the hearing following all or some of the participants’ submissions and resume the hearing on a later date. The holding of a hearing is without prejudice to the Appeals Chamber also requiring the submission of written arguments or summaries thereof in advance of and/or following the hearing. The date of the hearing may be fixed after the 10 day deadline if necessary; or (b) Proceeding by way of written submissions only and setting a timetable therefor.\n- 7. For appeals against a decision pursuant to article 60, paragraphs 2 or 4, the Appeals Chamber shall render its reasoned judgment within 45 days from the date of any hearing, or, in the event that any hearing is held after the 10 day deadline as provided for in sub-regulation 6 above, not later than 75 days from the rendering of the decision being appealed. For appeals against a decision pursuant to article 60, paragraph 3, the Appeals Chamber shall render its reasoned judgment within 30 days from the date of any hearing, or, in the event that any hearing is held after the 10 day deadline as provided for in sub-regulation 6 above, not later than 55 days from the rendering of the decision being appealed.\n- 8. For appeals filed under article 82, paragraph 1 (c), the appeal brief shall be filed by the appellant within four days of notification of the relevant decision. The response shall be filed within two days of notification of the appeal brief."
      },
      {
        "id": "reg-65",
        "number": "65",
        "titleAr": "الاستئنافات بموجب القاعدة 155",
        "titleEn": "Appeals under rule 155",
        "contentAr": "1 - يبين طلب الإذن بالاستئناف بموجب القاعدة 155 الأسباب القانونية والواقعية الموجبة للبت الفوري من دائرة الاستئناف.\n2 - يجوز للمشاركين الرد خلال 3 أيام.\n3 - متى مُنح الإذن، يودع المستأنف مذكرة الاستئناف خلال 10 أيام من الإخطار بالقرار المانح للإذن، ويودع الرد خلال 10 أيام.",
        "contentEn": "- 1. An application for leave to appeal under rule 155 shall state the name and number of the case or situation and shall specify the legal and/or factual reasons in support thereof. If the facts relied upon in support are not apparent from the record of the proceedings, they shall, as far as possible, be substantiated by a solemn affirmation by a person having knowledge of the facts stated therein.\n- 2. An application for leave to appeal under article 82, paragraph 1 (d), shall specify the reasons warranting immediate resolution by the Appeals Chamber of the matter at issue.\n- 3. Participants may file a response within three days of notification of the application described in sub-regulation 1, unless the Pre-Trial or Trial Chamber concerned orders an immediate hearing of the application. In the latter case, the participants shall be afforded an opportunity to be heard orally.\n- 4. When leave to appeal is granted, the appellant shall file, within ten days of notification of the decision granting leave to appeal, an appeal brief in accordance with regulation 64, sub-regulation 2. Such document shall also contain the precise title and date of filing of the decision granting leave to appeal.\n- 5. Participants may file a response within ten days of notification of the appeal brief. Regulation 64, sub-regulation 4, shall apply mutatis mutandis."
      },
      {
        "id": "reg-66",
        "number": "66",
        "titleAr": "الإجراءات المؤدية إلى البت في طلب إعادة النظر",
        "titleEn": "Procedure leading to the determination on revision",
        "contentAr": "1 - يبين طلب إعادة النظر بموجب المادة 84(1) والقاعدة 159 الوقائع أو الأدلة الجديدة غير المعلومة وقت المحاكمة وأثرها المحتمل، بما لا يتجاوز 100 صفحة مشفوعاً بإقرار رسمي.\n2 - يُخطر المشاركون في المحاكمة الأصلية ولهم الرد خلال 40 يوماً بما لا يتجاوز 100 صفحة.\n3 - يجوز لدائرة الاستئناف الأمر بإيداع تعقيب عند الاقتضاء.",
        "contentEn": "- 1. An application for revision under article 84, paragraph 1, and rule 159 shall state the name and number of the original case. An application under article 84, paragraph 1 (a), shall set out the new facts or evidence, unknown or unavailable at the time of trial, and shall indicate the effect that the production of such facts or evidence at the trial might have had upon the decision of the Court. Other applications shall set out the reasons in accordance with article 84, paragraph 1 (b) or (c). The facts relied upon in any application for revision shall, as far as possible, be supported by a solemn affirmation by a person having knowledge of the facts. The application shall not exceed 100 pages.\n- 2. As far as possible, the application for revision shall be notified to the participants in the original proceedings and to any other person having a direct interest in the revision proceedings. Such participants and persons may file a response within 40 days of notification of that application.\n- 3. The response described in sub-regulation 2 shall contain the name and number of the case and shall set out the legal and/or factual reasons advanced in support thereof. Facts tending to deny or contradict the existence of the facts upon which the application is founded shall be outlined in the response and shall be supported by a solemn affirmation by a person having knowledge of such facts. The response shall not exceed 100 pages.\n- 4. Whenever the Appeals Chamber considers it necessary in the interests of justice, it may order the appellant to file a reply within such time as it may specify in its order."
      },
      {
        "id": "reg-66-bis",
        "number": "66 bis",
        "titleAr": "تشكيل الدوائر وهيئة القضاة الثلاثة",
        "titleEn": "Constitution of Chambers and the panel of three judges",
        "contentAr": "1 - يُشكل رئيس الشعبة التمهيدية دائرة من قاضٍ واحد لممارسة سلطات الدائرة التمهيدية من لحظة استلام طلب بموجب المادة 58 بشأن الجرائم المعرفة في المادة 70 (الجرائم ضد إدارة العدالة).\n2 - تُشكل هيئة الرئاسة دائرة من قاضٍ واحد لممارسة سلطات الدائرة الابتدائية، وهيئة من ثلاثة قضاة للبت في الاستئنافات المتعلقة بالجرائم المنصوص عليها في المادة 70.",
        "contentEn": "- 1. The President of the Pre-Trial Division, at the request of the Pre-Trial Chamber seized of the relevant situation, shall constitute, in accordance with rule 165(2), a Chamber composed of one judge from the Pre-Trial Division to exercise the functions and powers of the Pre-Trial Chamber from the moment of receipt of an application under article 58 with respect to offences defined in article 70.\n- 2. The Presidency shall constitute, in accordance with rule 165(2), a Chamber composed of one judge to exercise the functions and powers of the Trial Chamber, and a panel of three judges to decide appeals with respect to offences defined in article 70. This provision shall not apply in the event of a joinder of charges pursuant to rule 165(4)."
      },
      {
        "id": "reg-66-ter",
        "number": "66 ter",
        "titleAr": "إغلاق وإعادة فتح سجلات القضايا والحالات",
        "titleEn": "Closure and reopening of case and situation records",
        "contentAr": "1 - يجوز لهيئة الرئاسة إحالة قضية اختتمت فيها جميع إجراءات المحاكمة والاستئناف إلى دائرة تأمر المسجل بإغلاق سجل القضية وتتولى المسائل القضائية المتبقية ذات الطبيعة المتبقية.\n2 - عندما يقرر المدعي العام عدم بدء تحقيق أو انتفاء أي أنشطة تحقيقية أو ادعائية إضافية في حالة ما، يخطر كتابةً الدائرة التمهيدية التي يجوز لها أن تأمر بإغلاق سجل الحالة دون إخلال بإمكانية إعادة فتحه مستقبلاً.\n3 - يُعاد فتح سجل الحالة أو القضية بواسطة قلم المحكمة بناءً على توجيه من إحدى الدوائر أو هيئة الرئاسة عند الضرورة.",
        "contentEn": "- 1. The Presidency may assign a case in relation to which all trial and appeals proceedings have been concluded to a Chamber. Such Chamber may order the Registrar, when appropriate, to close the record of the case. Such Chamber shall be responsible for judicial matters of a residual nature in this case, unless otherwise provided in the Statute, the Rules or these Regulations.\n- 2. (a) When the Prosecutor, having provided information in accordance with regulation 45, sub-regulation 1, decides not to initiate an investigation, or determines that he or she does not anticipate any further investigatory or prosecutorial activities in a situation in relation to which an investigation has been initiated, he or she shall inform in writing the Pre-Trial Chamber to which the situation has been assigned.\n  - (b) Having been so informed, the Pre-Trial Chamber may, upon application or proprio motu, order the Registrar, when appropriate, to close the record of the situation. The Pre-Trial Chamber shall be responsible for judicial matters of a residual nature in this situation, unless otherwise provided in the Statute, the Rules or these Regulations or such matters are assigned to another Chamber by the Presidency.\n  - (c) The closure of the record of a situation shall be without prejudice to a future reopening should the Prosecutor decide to initiate or resume the investigation in accordance with the Statute, the Rules and these Regulations.\n- 3. A situation or case record shall be reopened by the Registry upon direction by a Chamber or the Presidency as necessary. Such reopening of the situation or case record is without prejudice to any judicial determination on the resumption of judicial activity in the situation or case."
      }
    ]
  },
  {
    "id": "reg-chapter-4",
    "labelAr": "الباب الرابع",
    "labelEn": "CHAPTER 4",
    "titleAr": "شؤون المحامين والمساعدة القانونية",
    "titleEn": "Counsel issues and legal assistance",
    "articles": [
      {
        "id": "reg-67",
        "number": "67",
        "titleAr": "المعايير الواجب توفرها في المحامي",
        "titleEn": "Criteria to be met by counsel",
        "contentAr": "1 - مع مراعاة اللائحة الفرعية 2 من اللائحة 78، تكون الخبرة المهنية ذات الصلة واللازمة للمحامي على النحو الموصوف في القاعدة 22 هي عشر سنوات على الأقل للمحامي الرئيسي، وثماني سنوات على الأقل للمحامي المساعد أو المشارك.\n2 - يجب ألا يكون المحامي قد أُدين بجريمة جنائية خطيرة أو مخالفة تأديبية تُعتبر غير متوافقة مع طبيعة مهمة المحامي أمام المحكمة.",
        "contentEn": "- 1. Subject to regulation 78, sub-regulation 2, the necessary relevant experience for counsel as described in rule 22 shall be at least ten years for lead counsel and at least eight years for associate counsel.\n- 2. Counsel should not have been convicted of a serious criminal or disciplinary offence considered to be incompatible with the nature of the office of counsel before the Court."
      },
      {
        "id": "reg-68",
        "number": "68",
        "titleAr": "مساعدو المحامي",
        "titleEn": "Assistants to counsel",
        "contentAr": "يجوز أن يشمل الأشخاص المعاونون للمحامي المنصوص عليهم في القاعدة الفرعية 1 من القاعدة 22 أشخاصاً مؤهلين لمعاونة المحامي في عرض القضية أمام الدائرة. وتحدد المعايير الواجب توفرها في هؤلاء الأشخاص في لوائح قلم المحكمة.",
        "contentEn": "Persons assisting counsel as described in rule 22, sub-rule 1, may include persons who can assist counsel in the presentation of the case before a Chamber. The criteria to be met by these persons shall be determined in the Regulations of the Registry."
      },
      {
        "id": "reg-69",
        "number": "69",
        "titleAr": "إثبات والتحقق من المعايير المطلوبة في المحامي",
        "titleEn": "Proof and control of criteria to be met by counsel",
        "contentAr": "1 - يستوفي كل شخص يرغب في العمل كمحامٍ النماذج التي يوفرها المسجل لهذا الغرض.\n2 - يقدم الشخص المذكور سيرة ذاتية مفصلة، وشهادة رسمية من نقابة المحامين أو الجهة الإدارية المنظمة تثبت قيده وحقه في الممارسة وعدم وجود جزاءات أو دعاوى تأديبية جارية، وشهادة بالحالة الجنائية تثبت خلو صحيفته من السوابق الجنائية.\n3 - يخطر المحامي المسجل فوراً بأي تغييرات تطرأ على بياناته أو أي إجراءات جنائية أو تأديبية تُتخذ ضده.\n4 - يجوز للمسجل في أي مرحلة اتخاذ تدابير للتحقق من صحة المعلومات المقدمة.",
        "contentEn": "- 1. A person seeking to act as counsel shall complete the forms provided by the Registrar for this purpose.\n- 2. A person referred to in sub-regulation 1 shall also provide:\n  - (a) A detailed curriculum vitae;\n  - (b) A certificate issued by each Bar association the person is registered with, and/or each relevant controlling administrative authority confirming his or her qualifications, the right to practise and the existence, if any, of disciplinary sanctions or ongoing disciplinary proceedings; and\n  - (c) A certificate issued by the relevant authority of each State of which the person is a national or where the person is domiciled stating the existence, if any, of criminal convictions.\n- 3. Counsel and persons seeking to act as counsel shall immediately inform the Registrar of any changes to the information he or she has provided that are more than de minimis, including the initiation of any criminal or disciplinary proceedings against him or her.\n- 4. The Registrar may at any stage take steps to verify the information provided by counsel."
      },
      {
        "id": "reg-70",
        "number": "70",
        "titleAr": "الإدراج في قائمة المحامين",
        "titleEn": "Inclusion in the list of counsel",
        "contentAr": "1 - عند استلام طلب القيد في قائمة المحامين، يتثبت المسجل من استيفاء الشروط ويشعر صاحب الشأن بالاستلام ويطلب أي معلومات إضافية لازمة.\n2 - يُخطر صاحب الشأن بالقرار الصادر بقبول قيده أو رفضه مع تسبيب قرار الرفض وبيان سبل التظلم وفقاً للائحة 72.\n3 - إذا وُكل محامٍ بغير مساعدة قانونية مدفوعة من المحكمة ولم يكن مقيداً بالقائمة، جاز له التقدم بطلب للقيد فيها.",
        "contentEn": "- 1. On receipt of an application by a person seeking to be included in the list of counsel, the Registrar shall establish whether the person has provided the information required under regulation 69. Thereafter, the Registrar shall acknowledge receipt of the application and, where relevant, direct the person to submit additional information.\n- 2. The decision as to whether a person shall be included in the list of counsel shall be notified to that person. If the application is refused, the Registrar shall provide reasons and information on how to apply for review of that decision in accordance with regulation 72.\n- 3. If counsel is retained without legal assistance paid by the Court, and if that person is not in the list of counsel, he or she may apply to be included in that list. Regulations 71 and 72 shall apply."
      },
      {
        "id": "reg-71",
        "number": "71",
        "titleAr": "الشطب والوقف عن قائمة المحامين",
        "titleEn": "Removal and suspension from the list of counsel",
        "contentAr": "1 - يشطب المسجل المحامي من قائمة المحامين إذا:\n(أ) لم يعد مستوفياً للمعايير المطلوبة؛\n(ب) حُرم نهائياً من الممارسة أمام المحكمة بموجب إجراءات تأديبية عملاً بمدونة قواعد السلوك المهني للمحامين؛\n(ج) أُدين بجريمة ضد إدارة العدالة وفقاً للمادة 70(1)؛ أو\n(د) مُنع بصفة دائمة من ممارسة وظائفه أمام المحكمة بموجب القاعدة 171(3).\n2 - يوقف المسجل المحامي عن القيد في القائمة أثناء وقفه مؤقتاً في إجراء تأديبي أو منعه مؤقتاً لمدة تتجاوز 30 يوماً.\n3 - يُخطر المحامي بقرار الشطب أو الوقف مسبباً مع بيان حقه في التظلم وفقاً للائحة 72.",
        "contentEn": "- 1. The Registrar shall remove a counsel from the list of counsel where he or she:\n  - (a) No longer meets the criteria required for inclusion in the list of counsel;\n  - (b) Has been permanently banned from practising before the Court as a result of disciplinary proceedings held in accordance with the Code of Professional Conduct for counsel;\n  - (c) Has been found guilty of an offence against the administration of justice as described in article 70, paragraph 1; or\n  - (d) Has been permanently interdicted from exercising his or her functions before the Court in accordance with rule 171, sub-rule 3.\n- 2. The Registrar shall suspend a counsel from the list of counsel while he or she is:\n  - (a) Temporarily suspended in a disciplinary proceeding according to the Code of Professional Conduct for counsel; or\n  - (b) Temporarily interdicted from exercising his or her functions before the Court for a period exceeding 30 days in accordance with rule 171, sub-rule 3.\n- 3. The Registrar shall notify the relevant counsel of his or her decision under sub-regulations 1 or 2. The Registrar shall provide reasons and information on how to apply for review of that decision in accordance with regulation 72."
      },
      {
        "id": "reg-72",
        "number": "72",
        "titleAr": "إعادة النظر في قرارات مسجل المحكمة",
        "titleEn": "Review of decisions of the Registrar",
        "contentAr": "1 - يجوز تقديم طلب تظلم إلى هيئة الرئاسة لإعادة النظر في:\n(أ) قرار المسجل برفض القيد في قائمة المحامين بموجب اللائحة 70(2)؛\n(ب) قرار المسجل بشطب المحامي من القائمة بموجب اللائحة 71(1)؛\n(ج) قرار المسجل بوقف المحامي من القائمة بموجب اللائحة 71(2)؛ أو\n(د) قرار المسجل برفض اعتماد توكيل محامٍ حيث لا تُدفع المساعدة القانونية من المحكمة.\n2 - تُقدم طلبات التظلم خلال 15 يوماً من تاريخ الإخطار بالقرار.\n3 - يجوز للمسجل تقديم رد خلال 15 يوماً من الإخطار بالطلب.\n4 - قرار هيئة الرئاسة في التظلم يكون نهائياً وباتاً.",
        "contentEn": "- 1. An application may be made to the Presidency for review of:\n  - (a) A decision under regulation 70, sub-regulation 2, refusing to include a person in the list of counsel;\n  - (b) A decision under regulation 71, sub-regulation 1, removing counsel from the list of counsel;\n  - (c) A decision under regulation 71, sub-regulation 2, suspending counsel from the list of counsel; or\n  - (d) A decision by the Registrar refusing to confirm the retention of counsel where legal assistance is not paid by the Court.\n- 2. Applications as described in sub-regulation 1 shall be set out in accordance with regulation 23 and shall be filed within 15 days of notification of the relevant decision of the Registrar.\n- 3. The Registrar may file a response within 15 days of notification of the applications referred to in sub-regulation 1.\n- 4. The Presidency may ask the Registrar to provide any additional information necessary to decide on an application. The decision of the Presidency shall be final."
      },
      {
        "id": "reg-73",
        "number": "73",
        "titleAr": "المحامي المناوب",
        "titleEn": "Duty counsel",
        "contentAr": "1 - يحدد المسجل من قائمة المحامين أسماء المحامين الراغبين في تمثيل أي شخص أمام المحكمة أو تمثيل مصالح الدفاع كمحامين مناوبين بخبرة لا تقل عن 10 سنوات.\n2 - يجوز للمسجل تعيين محامٍ مناوب إذا كان الشخص بحاجة لمساعدة قانونية ولم يؤمنها بعد، أو إذا كان محاميه غير متاح ووافق على ذلك، مع مراعاة رغبة الشخص وخبرة المحامي ولغته وقربه الجغرافي.\n3 - يجوز للدائرة تعيين محامٍ مناوب في الحالات العاجلة أو متى اقتضت مصلحة العدالة ذلك.\n4 - يجوز تعيين محامٍ من مكتب المحامي العام للدفاع أو مكتب المحامي العام للضحايا كمحامٍ مناوب بعد استشارته مسبقاً.",
        "contentEn": "- 1. The Registrar shall identify counsel from the list of counsel who are willing to represent any person before the Court or to represent the interests of the defence as duty counsel. Duty counsel may specify the particular locations where he or she would be able to attend. Duty counsel shall have at least ten years’ experience, as referred to in regulation 67, sub-regulation 1.\n- 2. The Registrar may appoint duty counsel if a person requires legal assistance and has not yet secured that assistance, or when his or her counsel is unavailable and has consented to the appointment of duty counsel. The Registrar shall take into account the wishes of the person, the expertise of duty counsel, the geographical proximity of, and the languages spoken by, the counsel. Decisions taken pursuant to this sub-regulation may be reviewed by the relevant Chamber.\n- 3. The Chamber may appoint duty counsel in situations of urgency when the person’s own counsel is unavailable or when it is necessary to appoint duty counsel in the interests of justice.\n- 4. Where appropriate, counsel from the Office of Public Counsel for the defence or from the Office of Public Counsel for victims, as defined in regulation 77, sub-regulation 3, and regulation 81, sub-regulation 3, respectively, may be appointed as duty counsel. Sub-regulations 2 and 3 apply. When acting in accordance with sub-regulations 2, 3 or 4, the Registrar shall consult any prospective appointee prior to his or her appointment."
      },
      {
        "id": "reg-74",
        "number": "74",
        "titleAr": "الدفاع عن طريق محامٍ",
        "titleEn": "Defence through counsel",
        "contentAr": "1 - يتولى محامي الدفاع تمثيل موكله في الإجراءات أمام المحكمة متى اختاره الشخص المستحق للمساعدة القانونية بموجب القاعدة 21(2)، أو وُكل بدون مساعدة قانونية من المحكمة، أو عُين كمحامٍ مناوب بموجب اللائحة 73، أو عينته الدائرة وفقاً للنظام الأساسي أو القواعد أو هذه اللوائح.\n2 - عندما يكون الشخص ممثلاً بمحامٍ، يتصرف أمام المحكمة من خلال محاميه (مع مراعاة المادة 67(1)(ح))، ما لم تأذن الدائرة بغير ذلك.",
        "contentEn": "- 1. Defence counsel shall act in proceedings before the Court when chosen by the person entitled to legal assistance in accordance with rule 21, sub-rule 2; retained without legal assistance paid by the Court; appointed under regulation 73; or appointed by the Chamber in accordance with the Statute, Rules or these Regulations.\n- 2. Whenever represented by defence counsel, the person entitled to legal assistance shall, subject to article 67, paragraph 1 (h), act before the Court through his or her counsel, unless otherwise authorised by the Chamber."
      },
      {
        "id": "reg-75",
        "number": "75",
        "titleAr": "اختيار محامي الدفاع",
        "titleEn": "Choice of defence counsel",
        "contentAr": "1 - إذا اختار الشخص المستحق للمساعدة محامياً مقيداً بالقائمة، يتصل المسجل بالمحامي وييسر إصدار التوكيل الرسمي له.\n2 - إذا طلب الشخص مساعدة قانونية واختار محامياً غير مقيد بالقائمة ولكنه مستعد للقيد، يبت المسجل في أهليته وييسر إصدار التوكيل فور قيده، ويجوز تمثيل الشخص بمحامٍ مناوب ريثما يتم ذلك.\n3 - إذا رغب الشخص في توكيل محامٍ على نفقته الخاصة، يتثبت المسجل من استيفائه المعايير وييسر إصدار التوكيل.",
        "contentEn": "- 1. If the person entitled to legal assistance chooses counsel included in the list of counsel, the Registrar shall contact that counsel. If the counsel is willing and ready to represent the person, the Registrar shall facilitate the issuance of a power of attorney for this counsel by the person.\n- 2. If the person entitled to legal assistance applies for legal assistance paid by the Court and chooses counsel not in the list of counsel who is willing and ready to represent him or her and to be included in the list, the Registrar shall decide on the eligibility of that counsel in accordance with regulation 70 and, upon inclusion in the list, shall facilitate the issuance of a power of attorney. Until the filing of a power of attorney, the person entitled to legal assistance may be represented by duty counsel in accordance with regulation 73.\n- 3. If the person entitled to legal assistance wishes to retain counsel without legal assistance paid by the Court, the Registrar shall contact that counsel to decide on his or her eligibility to act as counsel, in accordance with regulation 69. If the relevant criteria are fulfilled, the Registrar shall facilitate the issuance of a power of attorney for this counsel. Until the filing of a power of attorney, the person may be represented by duty counsel in accordance with regulation 73."
      },
      {
        "id": "reg-76",
        "number": "76",
        "titleAr": "تعيين محامي الدفاع والمحامي الاحتياطي من جانب الدائرة",
        "titleEn": "Appointment of defence counsel and standby counsel by a Chamber",
        "contentAr": "1 - يجوز للدائرة، بعد استشارة المسجل وسماع الشخص المستحق، تعيين محامٍ كلما اقتضت مصلحة العدالة، بما في ذلك تعيين محامٍ احتياطي عند الاقتضاء.\n2 - يستشير المسجل المحامي المزمع تعيينه قبل صدور قرار التعيين، وللدائرة أيضاً تعيين محامٍ من مكتب المحامي العام للدفاع.",
        "contentEn": "- 1. A Chamber, following consultation with the Registrar and, when appropriate, after hearing from the person entitled to legal assistance, may appoint counsel in the circumstances specified in the Statute, Rules and these Regulations or where the interests of justice so require. This may include the appointment of standby counsel, if appropriate.\n- 2. When acting in accordance with sub-regulation 1, the Registrar shall consult any prospective appointee prior to his or her appointment. The Chamber may, where the interests of justice so require, also appoint counsel from the Office of Public Counsel for the defence as defined in regulation 77, sub-regulation 3."
      },
      {
        "id": "reg-77",
        "number": "77",
        "titleAr": "مكتب محامي الدفاع العام",
        "titleEn": "Office of Public Counsel for the defence",
        "contentAr": "1 - ينشئ المسجل ويطور مكتباً للمحامي العام للدفاع لتقديم المساعدة القانونية.\n2 - يتبع المكتب قلم المحكمة لأغراض إدارية بحتة وفقاً للمادة 43(2)، ويعمل في جوهر اختصاصه وموضوعه كمكتب مستقل استقلالاً تاماً، ويمارس محاموه ومساعدوه مهامهم باستقلالية كاملة.\n3 - يضم المكتب محامياً واحداً على الأقل يتمتع بخبرة لا تقل عن عشر سنوات ومساعدين مؤهلين.\n4 - تشمل مهام المكتب، عند انتفاء تعارض المصالح:\n(أ) تمثيل وحماية حقوق الدفاع في المراحل الأولى للتحقيق خاصة لأغراض المادة 56(2)(د)؛\n(ب) تقديم الدعم والمشورة القانونية والبحوث لمحامي الدفاع والشخص المستحق؛\n(ج) المثول أمام الدوائر في مسائل محددة بناءً على تعليماتها؛\n(د) تقديم الدفوع نيابة عن الشخص المستحق للمساعدة عند عدم توفر محامٍ؛\n(هـ) العمل كمحامٍ مناوب متى تم تعيينه؛\n(و) مساعدة أو تمثيل محامي الدفاع أو شهود الدفاع المعرضين لإجراءات بموجب المادة 70.\n5 - يكفل المكتب تعيين محامٍ بخبرة لا تقل عن عشر سنوات متى طُلب منه العمل كمحامٍ في الدعوى.",
        "contentEn": "- 1. The Registrar shall establish and develop an Office of Public Counsel for the defence for the purpose of providing assistance as described in sub-regulation 4.\n- 2. The Office of Public Counsel for the defence shall fall within the remit of the Registry solely for administrative purposes, in accordance with article 43, paragraph 2, and it shall function in its substantive work as a wholly independent office. Counsel and assistants within the Office shall act independently.\n- 3. The Office of Public Counsel for the defence shall include at least one counsel who has ten years’ experience as described in regulation 67, sub-regulation 1, and who fulfils the requirements for inclusion in the list of counsel. The Office shall include assistants as referred to in regulation 68.\n- 4. When a conflict of interest does not arise, the tasks of the Office of Public Counsel for the defence shall include:\n  - (a) Representing and protecting the rights of the defence during the initial stages of the investigation, in particular for the application of article 56, paragraph 2 (d), and rule 47, sub-rule 2. For this purpose the Office of Public Counsel for the defence may, on the instruction or with the leave of the Chamber, make submissions concerning the needs of the defence in ongoing proceedings;\n  - (b) Providing general support and assistance to defence counsel and to the person entitled to legal assistance, including legal research and advice and, on the instruction or with the leave of the Chamber, advising on and assisting with the detailed factual circumstances of the case;\n  - (c) Appearing, on the instruction or with the leave of the Chamber, in respect of specific issues;\n  - (d) Advancing submissions, on the instruction or with the leave of the Chamber, on behalf of the person entitled to legal assistance when defence counsel has not been secured or when the mandate of temporary counsel is limited to other issues;\n  - (e) Acting when appointed under regulation 73 or regulation 76; and\n  - (f) Assisting or representing defence counsel or defence witnesses who are subject to article 70 proceedings or when rule 74, sub-rule 1, applies, on the instruction or with the leave of the Chamber.\n- 5. The Office of Public Counsel for the defence shall ensure that counsel with at least ten years’ experience is appointed when the Office is required to act as counsel."
      },
      {
        "id": "reg-78",
        "number": "78",
        "titleAr": "انسحاب محامي الدفاع",
        "titleEn": "Withdrawal of defence counsel",
        "contentAr": "1 - قبل انسحاب محامي الدفاع من القضية، يجب عليه الحصول على إذن مسبق من الدائرة.\n2 - إذا انسحب المحامي الرئيسي الذي يعاونه محامٍ مشارك تقل خبرته عن عشر سنوات، جاز للدائرة (مع مراعاة المادة 67(1)(د) والقاعدة 21) الإذن للمحامي المشارك بالعمل كمحامٍ رئيسي.",
        "contentEn": "- 1. Prior to withdrawal, defence counsel shall seek the leave of the Chamber.\n- 2. Where lead counsel, who is assisted by associate counsel with less than ten years’ experience, withdraws, the Chamber may, subject to article 67, paragraph 1 (d), and rule 21, permit associate counsel to act as lead counsel."
      },
      {
        "id": "reg-79",
        "number": "79",
        "titleAr": "قرار الدائرة بشأن الممثلين القانونيين للضحايا",
        "titleEn": "Decision of the Chamber concerning legal representatives of victims",
        "contentAr": "1 - يجوز أن يصدر قرار الدائرة بمطالبة الضحايا أو فئات معينة منهم باختيار ممثل قانوني مشترك أو ممثلين مشتركين بالتزامن مع القرار الصادر بشأن طلباتهم للمشاركة في الإجراءات.\n2 - عند اختيار ممثل قانوني مشترك للضحايا عملاً بالقاعدة 90(3)، يُراعى رأي الضحايا وضرورة احترام التقاليد المحلية ومساعدة الفئات الخاصة من الضحايا.\n3 - يجوز للضحايا أن يطلبوا من الدائرة المختصة مراجعة اختيار المسجل للممثل القانوني المشترك خلال 30 يوماً من تاريخ الإخطار بالقرار.",
        "contentEn": "- 1. The decision of the Chamber to request the victims or particular groups of victims to choose a common legal representative or representatives may be made in conjunction with the decision on the application of the victim or victims to participate in the proceedings.\n- 2. When choosing a common legal representative for victims in accordance with rule 90, sub-rule 3, consideration should be given to the views of the victims, and the need to respect local traditions and to assist specific groups of victims.\n- 3. Victims may request the relevant Chamber to review the Registrar’s choice of a common legal representative under rule 90, sub-rule 3, within 30 days of notification of the Registrar’s decision."
      },
      {
        "id": "reg-80",
        "number": "80",
        "titleAr": "تعيين الممثلين القانونيين للضحايا من جانب الدائرة",
        "titleEn": "Appointment of legal representatives of victims by a Chamber",
        "contentAr": "1 - يجوز للدائرة، بعد التشاور مع المسجل وسماع الضحايا المعنيين عند الاقتضاء، تعيين ممثل قانوني للضحايا متى اقتضت مصلحة العدالة ذلك، بما في ذلك تعيين محامٍ من مكتب المحامي العام للضحايا.\n2 - يستشير المسجل المحامي المعني قبل صدور قرار تعيينه.",
        "contentEn": "- 1. A Chamber, following consultation with the Registrar and, when appropriate, after hearing from the victim or victims concerned, may appoint a legal representative of victims where the interests of justice so require. The Chamber may appoint counsel from the Office of Public Counsel for victims as defined in regulation 81, sub-regulation 3.\n- 2. The Registrar shall consult any prospective appointee prior to his or her appointment."
      },
      {
        "id": "reg-81",
        "number": "81",
        "titleAr": "مكتب المحامي العام للضحايا",
        "titleEn": "Office of Public Counsel for victims",
        "contentAr": "1 - ينشئ المسجل ويطور مكتباً للمحامي العام للضحايا لتقديم المساعدة المنصوص عليها في اللائحة الفرعية 4.\n2 - يتبع المكتب قلم المحكمة لأغراض إدارية بحتة عملاً بالمادة 43(2)، ويمارس عمله الموضوعي كجهاز مستقل استقلالاً تاماً، ويتصرف محاموه ومساعدوه باستقلالية تامة.\n3 - يضم المكتب محامياً واحداً على الأقل بخبرة لا تقل عن عشر سنوات ومساعدين مؤهلين.\n4 - تشمل مهام المكتب:\n(أ) تقديم الدعم العام والمساعدة القانونية والبحوث للممثلين القانونيين للضحايا وللضحايا؛\n(ب) المثول أمام الدوائر في مسائل محددة؛\n(ج) تقديم الدفوع خاصة قبل تقديم طلبات الضحايا للمشاركة في الإجراءات أو أثناء تعليقها؛\n(د) العمل كممثل قانوني متى عُين بموجب اللائحة 73 أو 80؛\n(هـ) تمثيل ضحية أو مجموعة ضحايا طوال الإجراءات بتكليف من الدائرة كلما كان ذلك لصالح العدالة.\n5 - يكفل المكتب تعيين محامٍ لا تقل خبرته عن 10 سنوات متى طُلب منه العمل كممثل قانوني للضحايا.",
        "contentEn": "- 1. The Registrar shall establish and develop an Office of Public Counsel for victims for the purpose of providing assistance as described in sub-regulation 4.\n- 2. The Office of Public Counsel for victims shall fall within the remit of the Registry solely for administrative purposes, in accordance with article 43, paragraph 2, and it shall function in its substantive work as a wholly independent office. Counsel and assistants within the Office shall act independently.\n- 3. The Office of Public Counsel for victims shall include at least one counsel who has ten years’ experience as described in regulation 67, sub-regulation 1, and who fulfils the requirements for inclusion in the list of counsel. The Office shall include assistants as referred to in regulation 68.\n- 4. The tasks of the Office of Public Counsel for victims shall include:\n  - (a) Providing general support and assistance to the legal representative of victims and to victims, including legal research and advice and, on the instruction or with the leave of the Chamber, advising on and assisting with the detailed factual circumstances of the case;\n  - (b) Appearing, on the instruction or with the leave of the Chamber, in respect of specific issues;\n  - (c) Advancing submissions, on the instruction or with the leave of the Chamber, in particular prior to the submission of victims’ applications to participate in the proceedings, when applications pursuant to rule 89 are pending, or when a legal representative has not yet been appointed;\n  - (d) Acting when appointed under regulation 73 or regulation 80; and\n  - (e) Representing a victim or victims throughout the proceedings, on the instruction or with the leave of the Chamber, when this is in the interests of justice.\n- 5. The Office of Public Counsel for victims shall ensure that counsel with at least ten years’ experience is appointed when the Office is required to act as a legal representative."
      },
      {
        "id": "reg-82",
        "number": "82",
        "titleAr": "انسحاب الممثلين القانونيين للضحايا",
        "titleEn": "Withdrawal of legal representatives of victims",
        "contentAr": "يجب على الممثلين القانونيين للضحايا الحصول على إذن مسبق من الدائرة قبل الانسحاب من التمثيل القانوني في القضية.",
        "contentEn": "Prior to withdrawal, legal representatives of victims shall seek the leave of the Chamber."
      },
      {
        "id": "reg-83",
        "number": "83",
        "titleAr": "النطاق العام للمساعدة القانونية المدفوعة من المحكمة",
        "titleEn": "General scope of legal assistance paid by the Court",
        "contentAr": "1 - تغطي المساعدة القانونية المدفوعة من المحكمة جميع النفقات الضرورية بصورة معقولة التي يحددها المسجل لضمان دفاع فعال وكفء، بما يشمل أتعاب المحامي ومساعديه وموظفيه، ونفقات جمع الأدلة، والتكاليف الإدارية، وتكاليف الترجمة الشفوية والتحريرية، ونفقات السفر وبدلات المعيشة اليومية. ويجوز تغطية المحامي المشارك أيضاً بعد المثول الأول.\n2 - يحدد المسجل نطاق المساعدة القانونية المدفوعة للضحايا بالتشاور مع الدائرة عند الاقتضاء.\n3 - يجوز للشخص الذي يتلقى مساعدة قانونية التقدم للمسجل بطلب للحصول على موارد إضافية وفقاً لطبيعة القضية.\n4 - تخضع قرارات المسجل بشأن نطاق المساعدة القانونية للمراجعة أمام الدائرة المختصة بناءً على طلب متلقي المساعدة.",
        "contentEn": "- 1. Legal assistance paid by the Court shall cover all costs reasonably necessary as determined by the Registrar for an effective and efficient defence, including the remuneration of counsel, his or her assistants as referred to in regulation 68 and staff, expenditure in relation to the gathering of evidence, administrative costs, translation and interpretation costs, travel costs and daily subsistence allowances. Upon request, associate counsel may also be covered by legal assistance paid by the Court after the first appearance pursuant to rule 121 of a person subject to a warrant of arrest or a summons to appear under article 58.\n- 2. The scope of legal assistance paid by the Court regarding victims shall be determined by the Registrar in consultation with the Chamber, where appropriate.\n- 3. A person receiving legal assistance paid by the Court may apply to the Registrar for additional means which may be granted depending on the nature of the case.\n- 4. Decisions by the Registrar on the scope of legal assistance paid by the Court as defined in this regulation may be reviewed by the relevant Chamber on application by the person receiving legal assistance."
      },
      {
        "id": "reg-84",
        "number": "84",
        "titleAr": "تحديد الملاءة المالية",
        "titleEn": "Determination of means",
        "contentAr": "1 - عندما يتقدم شخص بطلب للمساعدة القانونية، يحدد المسجل موارده المالية ومدى استحقاقه لمساعدة قانونية كاملة أو جزئية.\n2 - تشمل موارد مقدم الطلب جميع الأموال والأصول والدخول التي يتمتع بحيازتها أو سلطة التصرف فيها (حسابات بنكية، عقارات، منقولات، أسهم وسندات)، مع استبعاد الإعانات الاجتماعية والأسرية. وتُراعى نفقات المعيشة الضرورية والمعقولة لمقدم الطلب.",
        "contentEn": "- 1. Where a person applies for legal assistance to be paid by the Court, the Registrar shall determine the applicant’s means and whether he or she shall be provided with full or partial payment of legal assistance.\n- 2. The means of the applicant shall include means of all kinds in respect of which the applicant has direct or indirect enjoyment or power freely to dispose, including, but not limited to, direct income, bank accounts, real or personal property, pensions, stocks, bonds or other assets held, but excluding any family or social benefits to which he or she may be entitled. In assessing such means, account shall also be taken of any transfers of property by the applicant which the Registrar considers relevant, and of the apparent lifestyle of the applicant. The Registrar shall allow for expenses claimed by the applicant provided they are reasonable and necessary."
      },
      {
        "id": "reg-85",
        "number": "85",
        "titleAr": "القرارات المتعلقة بسداد تكاليف المساعدة القانونية",
        "titleEn": "Decisions on payment of legal assistance",
        "contentAr": "1 - يبت المسجل في طلب المساعدة القانونية خلال شهر واحد من تقديمه بقرار مسبب يُخطر به الطالب مع بيان إجراءات التظلم، وله اتخاذ قرار مؤقت بالموافقة في الظروف المناسبة.\n2 - يعيد المسجل النظر في قراره إذا تبين اختلاف الوضع المالي عما ورد بالطلب أو إذا طرأ تغيير على وضعه المالي.\n3 - يجوز التظلم من قرارات المسجل أمام هيئة الرئاسة خلال 15 يوماً من الإخطار، ويكون قرار هيئة الرئاسة نهائياً وباتاً.\n4 - إذا ثبت لاحقاً أن البيانات المقدمة عن الموارد كانت غير صحيحة، يجوز للمسجل استصدار أمر من هيئة الرئاسة باسترداد الأموال المدفوعة بالتعاون مع الدول الأطراف المعنية.",
        "contentEn": "- 1. In accordance with the procedure set out in the Regulations of the Registry, the Registrar shall decide within one month of the submission of an application or, within one month of expiry of a time limit set in accordance with the Regulations of the Registry, whether legal assistance should be paid by the Court. The decision shall be notified to the applicant together with the reasons for the decision and instructions on how to apply for review. The Registrar may, in appropriate circumstances, make a provisional decision to grant payment of legal assistance.\n- 2. The Registrar shall reconsider his or her decision on payment of legal assistance if the financial situation of the person receiving such legal assistance is found to be different than indicated in the application, or if the financial situation of the person has changed since the application was submitted. Any revised decision shall be notified to the person together with the reasons for the decision and instructions on how to apply for review.\n- 3. Persons as referred to in sub-regulations 1 and 2 may seek review of the decisions described in those provisions by the Presidency within 15 days of notification of the relevant decision. The decision of the Presidency shall be final.\n- 4. Subject to rule 21, sub-rule 5, where legal assistance has been paid by the Court and it is subsequently established that the information provided to the Registrar on the applicant’s means was inaccurate, the Registrar may seek an order from the Presidency for recovery of the funds paid from the person who received legal assistance paid by the Court. The Registrar may seek the assistance of the relevant States Parties to enforce that order."
      }
    ]
  },
  {
    "id": "reg-chapter-5",
    "labelAr": "الباب الخامس",
    "labelEn": "CHAPTER 5",
    "titleAr": "مشاركة الضحايا وجبر الضرر (التعويضات)",
    "titleEn": "Victims participation and reparations",
    "articles": [
      {
        "id": "reg-86",
        "number": "86",
        "titleAr": "مشاركة الضحايا في الإجراءات بموجب القاعدة 89",
        "titleEn": "Participation of victims in the proceedings under rule 89",
        "contentAr": "1 - لأغراض تطبيق القاعدة 89، يقدم الضحية طلباً كتابياً إلى المسجل عبر نماذج موحدة تعتمدها المحكمة وتوزع على أوسع نطاق ممكن بالتعاون مع المنظمات غير الحكومية.\n2 - تتضمن النماذج قدر الإمكان: هوية الضحية وعنوانه، سند الوكالة إذا قُدم الطلب نيابة عنه، وصفاً للضرر الناجم عن جريمة تدخل في اختصاص المحكمة، وصفاً للحادث وتاريخه ومكانه وهوية المسؤولين، والمستندات المؤيدة، وأسباب تأثر مصالحه الشخصية، ومرحلة الإجراءات المراد المشاركة فيها، ونطاق التمثيل القانوني وموارده المالية.\n3 - يودع طلب المشاركة قبل بدء المرحلة القضائية المراد المشاركة فيها قدر الإمكان.\n4 - يتولى المسجل فحص الطلبات وتقديم تقرير موحد بشأن مجموعات الضحايا إلى الدائرة المعنية.\n5 - يسري القرار الصادر عن الدائرة بقبول مشاركة الضحية طوال إجراءات القضية نفسها.\n6 - تُنشأ وحدة متخصصة لمشاركة الضحايا وجبر الضرر تتبع قلم المحكمة لمعاونة الضحايا ومجموعاتهم.",
        "contentEn": "- 1. For the purposes of rule 89 and subject to rule 102 a victim shall make a written application to the Registrar who shall develop standard forms for that purpose which shall be approved in accordance with regulation 23, sub-regulation 2. These standard forms shall, to the extent possible, be made available to victims, groups of victims, or intergovernmental and non-governmental organizations, which may assist in their dissemination, as widely as possible. These standard forms shall, to the extent possible, be used by victims.\n- 2. The standard forms or other applications described in sub-regulation 1 shall contain, to the extent possible, the following information:\n  - (a) The identity and address of the victim, or the address to which the victim requests all communications to be sent; in case the application is presented by someone other than the victim in accordance with rule 89, sub-rule 3, the identity and address of that person, or the address to which that person requests all communications to be sent;\n  - (b) If the application is presented in accordance with rule 89, sub-rule 3, evidence of the consent of the victim or evidence on the situation of the victim, being a child or a disabled person, shall be presented together with the application, either in writing or in accordance with rule 102;\n  - (c) A description of the harm suffered resulting from the commission of any crime within the jurisdiction of the Court, or, in case of a victim being an organization or institution, a description of any direct harm as described in rule 85 (b);\n  - (d) A description of the incident, including its location and date and, to the extent possible, the identity of the person or persons the victim believes to be responsible for the harm as described in rule 85;\n  - (e) Any relevant supporting documentation, including names and addresses of witnesses;\n  - (f) Information as to why the personal interests of the victim are affected;\n  - (g) Information on the stage of the proceedings in which the victim wishes to participate, and, if applicable, on the relief sought;\n  - (h) Information on the extent of legal representation, if any, which is envisaged by the victim, including the names and addresses of potential legal representatives, and information on the victim’s or victims’ financial means to pay for a legal representative.\n- 3. Victims applying for participation in the trial and/or appeal proceedings shall, to the extent possible, make their application to the Registrar before the start of the stage of the proceedings in which they want to participate.\n- 4. The Registrar may request further information from victims or those presenting an application in accordance with rule 89, sub-rule 3, in order to ensure that such application contains, to the extent possible, the information referred to in sub-regulation 2, before transmission to a Chamber. The Registrar may also seek additional information from States, the Prosecutor and intergovernmental or non-governmental organizations.\n- 5. The Registrar shall present all applications described in this regulation to the Chamber together with a report thereon. The Registrar shall endeavour to present one report for a group of victims, taking into consideration the distinct interests of the victims.\n- 6. Subject to any order of the Chamber, the Registrar may also submit one report on a number of applications received in accordance with sub-regulation 1 to the Chamber seized of the case or situation in order to assist that Chamber in issuing only one decision on a number of applications in accordance with rule 89, sub-rule 4. Reports covering all applications received in a certain time period may be presented on a periodic basis.\n- 7. Before deciding on an application, the Chamber may request, if necessary with the assistance of the Registrar, additional information from, inter alia, States, the Prosecutor, the victims or those acting on their behalf or with their consent. If information is received from States or the Prosecutor, the Chamber shall provide the relevant victim or victims with an opportunity to respond.\n- 8. A decision taken by a Chamber under rule 89 shall apply throughout the proceedings in the same case, subject to the powers of the relevant Chamber in accordance with rule 91, sub-rule 1.\n- 9. There shall be a specialised unit dealing with victims’ participation and reparations under the authority of the Registrar. This unit shall be responsible for assisting victims and groups of victims."
      },
      {
        "id": "reg-87",
        "number": "87",
        "titleAr": "إعلام الضحايا",
        "titleEn": "Information to victims",
        "contentAr": "1 - يُخطر المدعي العام الدائرة التمهيدية بالمعلومات المقدمة عملاً بالقاعدة 50(1) وتاريخ تقديمها.\n2 - يُخطر المدعي العام قلم المحكمة بقراره بعدم بدء التحقيق أو عدم إقامة الدعوى عملاً بالمادة 53(1) و(2) لتتولى إخطار الضحايا عملاً بالقاعدة 92(2).",
        "contentEn": "- 1. The Prosecutor shall notify the Pre-Trial Chamber as to information provided pursuant to rule 50, sub-rule 1, including the date the information was provided.\n- 2. The Prosecutor shall inform the Registry of his or her decision not to initiate an investigation or not to prosecute pursuant to article 53, paragraphs 1 and 2, respectively, and shall provide all relevant information for notification by the Registry to victims in accordance with rule 92, sub-rule 2."
      },
      {
        "id": "reg-88",
        "number": "88",
        "titleAr": "طلبات جبر الضرر وفقاً للقاعدة 94",
        "titleEn": "Requests for reparations in accordance with rule 94",
        "contentAr": "1 - لتطبيق القاعدة 94، يعد المسجل نموذجاً موحداً لطلبات جبر الضرر وإصلاح الأضرار يُتاح للضحايا والمنظمات المعنية على أوسع نطاق ممكن.\n2 - يتولى قلم المحكمة استيفاء أي معلومات ناقصة ومساعدة الضحايا في استكمال طلباتهم، وتُقيد الطلبات إلكترونياً وتُخطر للأطراف المعنية.",
        "contentEn": "- 1. For the application of rule 94, the Registrar shall develop a standard form for victims to present their requests for reparations and shall make it available to victims, groups of victims, or intergovernmental and non-governmental organizations which may assist in its dissemination, as widely as possible. This standard form shall be approved in accordance with regulation 23, sub-regulation 2, and shall, to the extent possible, be used by victims.\n- 2. The Registrar shall seek all necessary additional information from a victim in order to complete his or her request in accordance with rule 94, sub-rule 1, and shall assist victims in completing such a request. The request shall then be registered and stored electronically in order to be notified by the unit described in regulation 86, sub-regulation 9, in accordance with rule 94, sub-rule 2."
      }
    ]
  },
  {
    "id": "reg-chapter-6",
    "labelAr": "الباب السادس",
    "labelEn": "CHAPTER 6",
    "titleAr": "شؤون الاحتجاز",
    "titleEn": "Detention matters",
    "articles": [
      {
        "id": "reg-89",
        "number": "89",
        "titleAr": "نطاق هذا الباب",
        "titleEn": "Scope of this chapter",
        "contentAr": "يخضع احتجاز الأشخاص المحتجزين لدى المحكمة بموجب النظام الأساسي لأحكام هذا الباب.",
        "contentEn": "The detention of persons detained by the Court under the Statute shall be governed by the provisions of this chapter."
      },
      {
        "id": "reg-90",
        "number": "90",
        "titleAr": "إدارة مركز الاحتجاز",
        "titleEn": "Management of the detention centre",
        "contentAr": "1 - مع مراعاة النظام الأساسي والقواعد وهذه اللوائح، يتولى المسجل المسؤولية الشاملة عن جميع جوانب إدارة مركز الاحتجاز، بما في ذلك الأمن والنظام، ويتخذ جميع القرارات المتعلقة بذلك.\n2 - يُفوض التنفيذ اليومي لهذه المهام إلى كبير مسؤولي الحراسة، الذي يجوز له تفويض مهام محددة لمرؤوسيه عند الاقتضاء.",
        "contentEn": "- 1. Subject to the Statute, Rules and these Regulations, the Registrar shall have overall responsibility for all aspects of management of the detention centre, including security and order, and shall make all decisions relating thereto.\n- 2. The day-to-day fulfilment of the functions described in sub-regulation 1 shall be delegated to the Chief Custody Officer. The Chief Custody Officer may, as appropriate, delegate specific functions to other persons."
      },
      {
        "id": "reg-91",
        "number": "91",
        "titleAr": "معاملة الأشخاص المحتجزين",
        "titleEn": "Treatment of detained persons",
        "contentAr": "1 - يُعامل جميع الأشخاص المحتجزين بإنسانية وباحترام لكرامة الإنسان المتأصلة.\n2 - يُحظر التمييز بين المحتجزين بسبب الجنس، أو السن، أو العرق، أو اللون، أو اللغة، أو الدين، أو الرأي السياسي، أو الأصل القومي أو الاجتماعي، أو الثروة، أو المولد. ولا تُعتبر التدابير المتخذة لحماية الفئات الخاصة تدابير تمييزية.",
        "contentEn": "- 1. All detained persons shall be treated with humanity and with respect for the inherent dignity of the human person.\n- 2. There shall be no discrimination of detained persons on grounds of gender, age, race, colour, language, religion or belief, political or other opinion, national, ethnic or social origin, wealth, birth or other status. Measures applied under these Regulations and the Regulations of the Registry to protect the rights and special status of particular categories of detained persons shall not be deemed to be discriminatory."
      },
      {
        "id": "reg-92",
        "number": "92",
        "titleAr": "سرية سجل الاحتجاز",
        "titleEn": "Confidentiality of the detention record",
        "contentAr": "1 - يكون ملف احتجاز كل شخص محتجز سرياً.\n2 - يُتاح ملف الاحتجاز للشخص المحتجز ومحاميه والأشخاص المرخص لهم من المسجل، باستثناء المعلومات التي يقرر كبير مسؤولي الحراسة حجبها لمصلحة حسن إدارة المركز.\n3 - يجوز للدائرة من تلقاء نفسها أو بناءً على طلب أي شخص ذي مصلحة الأمر بحجب أو إفشاء ملف الاحتجاز أو جزء منه.\n4 - يُخطر المحتجز بأي طلب للاطلاع على ملفه وتُتاح له فرصة إبداء رأيه.",
        "contentEn": "- 1. The detention record of each detained person shall be confidential.\n- 2. The detention record shall be made accessible to the detained person, his or her counsel and persons authorised by the Registrar, save as regards such information as the Chief Custody Officer, in consultation with the Registrar, determines should be withheld in the interests of the proper management of the detention centre.\n- 3. A Chamber may, proprio motu or at the request of any interested person, order that the detention record or part thereof be withheld or disclosed.\n- 4. The detained person shall be informed of any request for access to his or her detention record and shall be given the opportunity to be heard or to submit his or her views. In exceptional circumstances such as in an emergency, an order may be made prior to the detained person being informed of the request. In such a case, the detained person shall, as soon as practicable, be informed and shall be given the opportunity to be heard or to submit his or her views."
      },
      {
        "id": "reg-93",
        "number": "93",
        "titleAr": "المعلومات عند الوصول إلى مركز الاحتجاز",
        "titleEn": "Information on arrival at the detention centre",
        "contentAr": "1 - عند وصول الشخص المحتجز إلى مركز الاحتجاز، يُزود بنسخة من هذه اللوائح ولوائح قلم المحكمة المتعلقة بمسائل الاحتجاز بلغة يفهمها ويتحدثها جيداً.\n2 - في حال عدم تيسر المواد المكتوبة فوراً، يُستعان بمترجم فوري لمعاونة المحتجز ريثما تُتاح الترجمة التحريرية.",
        "contentEn": "- 1. When a detained person arrives at the detention centre, he or she shall be provided with a copy of these Regulations and the Regulations of the Registry relevant to detention matters in a language which he or she fully understands and speaks.\n- 2. To the extent that relevant written material as described in sub-regulation 1 is not immediately available, and pending the provision of a translation of those documents which shall be provided in a language that the detained person fully understands and speaks, the detained person shall have the assistance of an interpreter."
      },
      {
        "id": "reg-94",
        "number": "94",
        "titleAr": "تفتيش مركز الاحتجاز",
        "titleEn": "Inspections of the detention centre",
        "contentAr": "1 - يجوز لهيئة الرئاسة في أي وقت تعيين قاضٍ لتفقد مركز الاحتجاز وتقديم تقرير عن ظروف الاحتجاز وإدارته.\n2 - تُجرى عمليات تفتيش دورية ومفاجئة من قِبل هيئة تفتيش مستقلة تعينها هيئة الرئاسة لفحص طريقة احتجاز الأشخاص ومعاملتهم.\n3 - تقدم هيئة التفتيش تقريراً سرياً بنتائجها وتوصياتها إلى هيئة الرئاسة والمسجل.\n4 - يتخذ المسجل التدابير المناسبة بالتشاور مع سلطات الدولة المضيفة، وتصدر هيئة الرئاسة التوجيهات أو القرارات التي تراها مناسبة.",
        "contentEn": "- 1. The Presidency may, at any time, appoint a judge of the Court to inspect the detention centre and to report on the conditions of detention and the administration of the detention centre.\n- 2. There shall be regular and unannounced inspections by an independent inspecting authority appointed by the Presidency. This authority shall be responsible for examining the manner in which detained persons are being held and treated.\n- 3. Following an inspection carried out in accordance with sub-regulation 2, the inspecting authority shall provide a confidential report to the Presidency and the Registrar setting out its findings and any recommendations.\n- 4. Upon receipt of the report referred to in sub-regulation 3, the Registrar shall take such action as he or she considers appropriate in consultation, where necessary, with the relevant authorities which have made the detention centre available to the Court. If the Registrar does not agree with the recommendations made by the inspecting authority, he or she shall submit a report to the Presidency setting out his or her reasons.\n- 5. The Presidency may make any direction, decision or order that it considers appropriate."
      },
      {
        "id": "reg-95",
        "number": "95",
        "titleAr": "الانضباط والنظام",
        "titleEn": "Discipline",
        "contentAr": "1 - يتولى كبير مسؤولي الحراسة حفظ الانضباط والنظام تحقيقاً للحراسة الآمنة وحسن إدارة مركز الاحتجاز.\n2 - تُفصل الإجراءات التأديبية في لوائح قلم المحكمة، مع كفالة حق المحتجز في سماع أقواله وحقه في مخاطبة هيئة الرئاسة.",
        "contentEn": "- 1. Discipline and order shall be maintained by the Chief Custody Officer in the interests of safe custody and good administration of the detention centre.\n- 2. Details of the disciplinary procedure for detained persons shall be set out in the Regulations of the Registry. This procedure shall provide a detained person with the right to be heard on the subject of any offence alleged to have been committed, and shall include a right for the detained person to address the Presidency."
      },
      {
        "id": "reg-96",
        "number": "96",
        "titleAr": "وقف العمل بلوائح الاحتجاز في حالات الطوارئ",
        "titleEn": "Suspension of regulations on detention",
        "contentAr": "1 - في حالة حدوث اضطراب خطير أو طوارئ بمركز الاحتجاز، يجوز لكبير مسؤولي الحراسة اتخاذ تدابير فورية لضمان سلامة المحتجزين والموظفين وأمن المركز.\n2 - يُبلغ المسجل فوراً بأي إجراء متخذ، ويجوز له بموافقة هيئة الرئاسة تعليق العمل كلياً أو جزئياً بلوائح الاحتجاز مؤقتاً لاستعادة الأمن والنظام.",
        "contentEn": "- 1. In the event of a serious disturbance or other emergency occurring within the detention centre, the Chief Custody Officer may take such action as is immediately necessary to ensure the safety of detained persons and staff of the detention centre, or the security of the detention centre.\n- 2. Any action taken by the Chief Custody Officer under sub-regulation 1 shall be reported immediately to the Registrar, who may, with the approval of the Presidency, temporarily suspend the operation of all or part of these Regulations or the Regulations of the Registry relevant to detention matters to the extent necessary to restore the security and good order of the detention centre."
      },
      {
        "id": "reg-97",
        "number": "97",
        "titleAr": "الاتصال بمحامي الدفاع",
        "titleEn": "Communication with defence counsel",
        "contentAr": "1 - يُخطر الشخص المحتجز بحقه في الاتصال الكامل بمحامي دفاعه ومساعديه، وبمعاونة مترجم فوري عند الضرورة.\n2 - تجري جميع الاتصالات بين المحتجز ومحاميه ومساعديه ومترجميه الفوريين على مرأى من موظفي مركز الاحتجاز ولكن دون سماعها، سواء بصورة مباشرة أو غير مباشرة.",
        "contentEn": "- 1. A detained person shall be informed of his or her right to communicate fully, where necessary with the assistance of an interpreter, with his or her defence counsel or assistants to his or her defence counsel as referred to in regulation 68.\n- 2. All communication between a detained person and his or her defence counsel or assistants to his or her defence counsel as referred to in regulation 68 and interpreters shall be conducted within the sight but not the hearing, either direct or indirect, of the staff of the detention centre."
      },
      {
        "id": "reg-98",
        "number": "98",
        "titleAr": "المساعدة الدبلوماسية والقنصلية",
        "titleEn": "Diplomatic and consular assistance",
        "contentAr": "1 - يُخطر المحتجز بحقه في الاتصال بالممثل الدبلوماسي أو القنصلي لدولته واستقبال زياراته، أو ممثل الدولة الراعية لمصالحه، أو ممثلي المنظمات الدولية المعنية بحماية اللاجئين وعديمي الجنسية.\n2 - تجري هذه الاتصالات على مرأى من موظفي المركز ولكن دون سماعها بأي شكل.",
        "contentEn": "- 1. A detained person shall be informed of his or her right to communicate with and to receive visits from:\n  - (a) A diplomatic and/or consular representative from the State of which the person is a national accredited to the State in which the detention centre is situated or the authority which has made the detention centre available to the Court; or\n  - (b) Where the State of which the person is a national has no diplomatic or consular representation in the State in which the detention centre is situated, a diplomatic and/or consular representative of the State which takes charge of the interests of the State of which the person is a national; or\n  - (c) In case of refugees or stateless persons, a representative of a national or international authority whose task it is to represent the interests of such persons.\n- 2. All communication between a detained person and the persons described in sub-regulation 1 (a), (b) or (c), and interpreters shall be conducted within the sight but not the hearing, either direct or indirect, of the staff of the detention centre."
      },
      {
        "id": "reg-99",
        "number": "99",
        "titleAr": "الحقوق والمستحقات العامة للأشخاص المحتجزين",
        "titleEn": "General entitlements of detained persons",
        "contentAr": "1 - يحق لكل شخص محتجز، من بين أمور أخرى:\n(أ) المشاركة في برامج العمل والتأهيل؛\n(ب) الاحتفاظ بملابس ومقتنيات شخصية مأذون بها؛\n(ج) الحصول على مواد للقراءة والكتابة والترفيه والتعليم؛\n(د) متابعة الأخبار بانتظام عبر الصحف والمجلات والإذاعة والتلفزيون؛\n(هـ) استخدام مكان مشترك مجهز بأجهزة تلفاز وحاسوب ومواد قراءة؛\n(و) ممارسة التمارين الرياضية في الهواء الطلق لمدة ساعة على الأقل يومياً؛\n(ز) ممارسة الأنشطة الرياضية؛\n(ح) تسلم الخطابات والطرود البريدية؛\n(ط) الاتصال التلفوني والمراسلة مع أسرته وغيرهم.\n2 - تنظم لوائح قلم المحكمة تفاصيل هذه الحقوق والقيود الضرورية لأمن المركز أو حسن سير العدالة.",
        "contentEn": "- 1. Every detained person shall be entitled, inter alia, to the following:\n  - (a) To participate in a work programme;\n  - (b) To keep in his or her possession authorised clothing and personal items for his or her use;\n  - (c) To procure reading and writing materials and other items for the purposes of recreation and education;\n  - (d) To keep himself or herself regularly informed of the news by way of newspapers, periodicals and other publications, radio and television broadcasts;\n  - (e) To the use of a common space equipped with reading and writing materials, a television, radio and computer, which shall be provided for the general use of all detained persons;\n  - (f) To a period of exercise in the open air of at least one hour per day;\n  - (g) To engage in sporting activities;\n  - (h) To receive correspondence, mail and packages;\n  - (i) To communicate by letter or telephone with his or her family and other persons.\n- 2. The relevant details for the application of sub-regulation 1 shall be set out in the Regulations of the Registry, including any restrictions necessary in the interests of the administration of justice or for the maintenance of the security and good order of the detention centre."
      },
      {
        "id": "reg-100",
        "number": "100",
        "titleAr": "الزيارات",
        "titleEn": "Visits",
        "contentAr": "1 - يحق للمحتجز استقبال الزيارات.\n2 - يُخطر المحتجز بهوية كل زائر وله الحق في رفض استقبال أي زائر.\n3 - تحدد لوائح قلم المحكمة شروط الزيارات والإشراف عليها والقيود الضرورية لحسن سير العدالة وأمن المركز.",
        "contentEn": "- 1. A detained person shall be entitled to receive visits.\n- 2. A detained person must be informed of the identity of each visitor and may refuse to see any visitor.\n- 3. The relevant conditions for visits as well as restrictions and supervision that may be necessary in the interests of the administration of justice or for the maintenance of the security and good order of the detention centre shall be set out in the Regulations of the Registry."
      },
      {
        "id": "reg-101",
        "number": "101",
        "titleAr": "القيود المفروضة على الاطلاع على الأخبار والاتصال",
        "titleEn": "Restrictions to access to news and contact",
        "contentAr": "1 - يجوز للدائرة المعروضة أمامها الدعوى، بناءً على طلب المدعي العام، تقييد وصول المحتجز للأخبار إذا كان ضرورياً لعدم الإضرار بسير الإجراءات أو التحقيقات.\n2 - يجوز للمدعي العام أن يطلب من الدائرة حظر أو تنظيم الاتصال بين المحتجز وأي شخص آخر (باستثناء محاميه) لمنع الهروب، أو منع الإضرار بالتحقيقات، أو حماية السلامة العامة وسلامة الأشخاص.\n3 - يُخطر المحتجز بطلب المدعي العام وتُتاح له الفرصة لإبداء رأيه قبل صدور القرار، ما لم تقتضِ الطوارئ صدور أمر مؤقت عاجل.",
        "contentEn": "- 1. A Chamber seized of the case may, at the request of the Prosecutor, order that access to the news be restricted, if it is considered necessary in the interests of the administration of justice, in particular, if unrestricted access could prejudice the outcome of the proceedings against that detained person or the outcome of any other investigation.\n- 2. The Prosecutor may request the Chamber seized of the case to prohibit, regulate or set conditions for contact between a detained person and any other person, with the exception of counsel, if the Prosecutor has reasonable grounds to believe that such contact:\n  - (a) Is for the purposes of attempting to arrange the escape of a detained person from the detention centre;\n  - (b) Could prejudice or otherwise affect the outcome of the proceedings against a detained person, or any other investigation;\n  - (c) Could be harmful to a detained person or any other person;\n  - (d) Could be used by a detained person to breach an order for non-disclosure made by a judge;\n  - (e) Is against the interests of public safety; or\n  - (f) Is a threat to the protection of the rights and freedom of any person.\n- 3. The detained person shall be informed of the Prosecutor’s request and shall be given the opportunity to be heard or to submit his or her views. In exceptional circumstances such as in an emergency, an order may be made prior to the detained person being informed of the request. In such a case, the detained person shall, as soon as practicable, be informed and shall be given the opportunity to be heard or to submit his or her views."
      },
      {
        "id": "reg-102",
        "number": "102",
        "titleAr": "الرعاية الدينية والروحية",
        "titleEn": "Spiritual welfare",
        "contentAr": "1 - يحق للمحتجز ممارسة شعائر دينه أو معتقده.\n2 - يحق للمحتجز عند وصوله أو بعد ذلك الاتصال بمرشد ديني أو روحي متاح في الدولة المضيفة وفقاً للوائح قلم المحكمة.",
        "contentEn": "- 1. A detained person shall be entitled to practise his or her religion or belief.\n- 2. A detained person shall, on arrival at the detention centre or at any time thereafter, be entitled, in accordance with the Regulations of the Registry, to establish contact with a minister or spiritual adviser available in the State in which the detention centre is situated."
      },
      {
        "id": "reg-103",
        "number": "103",
        "titleAr": "صحة وسلامة الأشخاص المحتجزين",
        "titleEn": "Health and safety of detained persons",
        "contentAr": "1 - يتخذ المسجل التدابير اللازمة لحماية صحة وسلامة المحتجزين وتلبية احتياجات ذوي الإعاقة.\n2 - تتاح خدمات طبية ورعاية أسنان للمحتجزين، مع توفير طبيب نفسي مؤهل وممرض بصفة دائمة، مع حق المحتجز في استشارة طبيب من اختياره على نفقته.\n3 - يُعالج المحتجز في المركز قدر الإمكان، ويُنقل إلى المستشفى فوراً إذا اقتضت حالته، مع استمرار حراسته.\n4 - توفر الترتيبات لاحتجاز ورعاية المصابين بأمراض عقلية أو حالات نفسية خطيرة في مؤسسات علاجية متخصصة بأمر من الدائرة.\n5 - في حال وفاة محتجز أو إصابته بمرض أو جرح خطير، يجوز لهيئة الرئاسة الأمر بفتح تحقيق في الظروف والملابسات.",
        "contentEn": "- 1. Arrangements shall be made by the Registrar to protect the health and the safety of detained persons.\n- 2. Arrangements shall be made by the Registrar in order to meet the needs of detained persons with disabilities.\n- 3. Medical services, including dental care, shall be made available for detained persons.\n- 4. A qualified medical officer with experience in psychiatry shall be available to attend the detention centre. A nurse shall be present at the detention centre at all times. A detained person may be visited by and consult with a doctor of his or her own choice, subject to the relevant details and restrictions set out in the Regulations of the Registry.\n- 5. A detained person who requires specialist treatment shall, as far as possible, be treated within the detention centre. Should hospitalization be necessary, the detained person shall be transferred to a hospital without delay. The Registrar shall ensure the continuous detention of the person both at the place of treatment and when in transit.\n- 6. Arrangements shall be made by the Registrar for the detention of mentally ill persons and for those who suffer from serious psychiatric conditions. By order of the Chamber, a detained person who is determined to be mentally ill or who suffers from a serious psychiatric condition may be transferred to a specialised institution for appropriate treatment.\n- 7. In the event of death or serious illness or injury of a detained person, the Presidency may order an inquiry into the circumstances."
      },
      {
        "id": "reg-104",
        "number": "104",
        "titleAr": "تدابير رعاية الرضّع",
        "titleEn": "Arrangements for the care of infants",
        "contentAr": "1 - يتخذ المسجل التدابير اللازمة لتمكين المرأة المحتجزة من الولادة في مستشفى خارج المركز مع توفير الرعاية الكاملة قبل الولادة وبعدها.\n2 - متى أذن المسجل ببقاء الرضيع مع أمه داخل المركز، تُهيأ دار حضانة مزودة بموظفين مؤهلين لرعاية الرضيع.",
        "contentEn": "- 1. Arrangements shall be made by the Registrar for a detained person to give birth in a hospital outside the detention centre. Special accommodation shall be provided for all necessary pre-natal and post-natal care and treatment.\n- 2. Where the Registrar, following consultation with the Chief Custody Officer, authorises an infant to remain or to stay within the detention centre, arrangements shall be made for a nursery staffed with qualified personnel for the care of such an infant."
      },
      {
        "id": "reg-105",
        "number": "105",
        "titleAr": "أماكن الإقامة والإيواء",
        "titleEn": "Accommodation",
        "contentAr": "1 - يُحتجز الرجال والنساء في أقسام منفصلة داخل مركز الاحتجاز.\n2 - يُفصل المحكوم عليهم بأحكام نهائية عن المحتجزين المنتظرين للمحاكمة أو الاستئناف قدر الإمكان.\n3 - يشغل كل محتجز زنزانة منفردة ما لم تقتضِ الضرورة الاستثنائية مشاركة مكان الإقامة بموافقة المسجل.",
        "contentEn": "- 1. Men and women shall be detained in separate areas within the detention centre.\n- 2. Persons convicted and in respect of whom final sentence has been passed shall, whenever possible, be accommodated separately from detained persons awaiting trial or appeal.\n- 3. A detained person shall occupy a cell unit by himself or herself except in exceptional circumstances or in cases where the Chief Custody Officer, with the approval of the Registrar, considers that it is necessary to share accommodation."
      },
      {
        "id": "reg-106",
        "number": "106",
        "titleAr": "الشكاوى",
        "titleEn": "Complaints",
        "contentAr": "1 - للمحتجز الحق في التقدم بشكوى ضد أي قرار أو أمر إداري أو بشأن أي مسألة تتعلق باحتجازه.\n2 - تفصل لوائح قلم المحكمة إجراءات الشكاوى مع كفالة حق المحتجز في مخاطبة هيئة الرئاسة.",
        "contentEn": "- 1. A detained person shall have the right to file a complaint against any administrative decision or order or with regard to any other matter concerning his or her detention.\n- 2. The complaints procedure shall be set out in the Regulations of the Registry and shall include a right for the detained person to address the Presidency."
      }
    ]
  },
  {
    "id": "reg-chapter-7",
    "labelAr": "الباب السابع",
    "labelEn": "CHAPTER 7",
    "titleAr": "التعاون والتنفيذ",
    "titleEn": "Cooperation and enforcement",
    "articles": [
      {
        "id": "reg-107",
        "number": "107",
        "titleAr": "الترتيبات والاتفاقات المتعلقة بالتعاون",
        "titleEn": "Arrangements and agreements on cooperation",
        "contentAr": "1 - تُتفاوض جميع الاتفاقات مع الدول غير الأطراف والمنظمات الدولية التي تضع إطاراً عاماً للتعاون تحت إشراف الرئيس، ويبرمها الرئيس نيابة عن المحكمة. ولا يمنع ذلك المدعي العام من إبرام الاتفاقات المشار إليها في المادة 54(3)(د).\n2 - يُخطر كل جهاز هيئة الرئاسة بأي ترتيبات أو اتفاقات تعاون يعتزم التفاوض بشأنها، وتُبرم بمعرفة الرئيس أو بتفويض منه للجهاز المعني.",
        "contentEn": "- 1. All agreements with any State not party to the Statute or any intergovernmental organization, setting out a general framework for cooperation on matters within the competency of more than one organ of the Court, shall be negotiated under the authority of the President who may seek recommendations from the Advisory Committee on Legal Texts. Such agreements shall be concluded by the President on behalf of the Court. The existence of an agreement concluded in accordance with this sub-regulation does not preclude the Prosecutor from entering into those agreements referred to in article 54, paragraph 3 (d).\n- 2. Each organ of the Court shall inform the Presidency of any arrangement or agreement on cooperation, not being one setting out a general framework for cooperation as referred to in sub-regulation 1, that the organ intends to negotiate, unless such information is inappropriate for reasons of confidentiality. Subject to article 54, paragraph 3 (d), and to reasons of confidentiality, such arrangements and agreements shall be concluded by the President or by delegation by the relevant organ under whose authority the arrangement or agreement has been negotiated."
      },
      {
        "id": "reg-108",
        "number": "108",
        "titleAr": "الفصل في مشروعية طلب التعاون",
        "titleEn": "Ruling regarding the legality of a request for cooperation",
        "contentAr": "1 - في حال النزاع حول مشروعية طلب التعاون بموجب المادة 93، يجوز للدولة المطلوب منها تقديم طلب للبت فيه أمام الدائرة المختصة.\n2 - لا يُطلب هذا البت إلا بعد إعلان استنفاد المشاورات وخلال 15 يوماً من ذلك الإعلان.\n3 - لا يترتب على الطلب أثر موقف للتنفيذ من تلقاء نفسه ما لم تأمر الدائرة بذلك، وللدائرة سماع المشاركين والبت في الأمر.",
        "contentEn": "- 1. In case of a dispute regarding the legality of a request for cooperation under article 93, a requested State may apply for a ruling from the competent Chamber.\n- 2. A ruling under sub-regulation 1 may be sought only after a declaration has been made by the requesting body that consultations have been exhausted and within 15 days following such declaration. In case of requests under article 99, paragraph 4, and should no further consultations be possible, the requested State may seek a ruling within 15 days from the day on which the requested State is informed of or became aware of the direct execution.\n- 3. An application under sub-regulation 1 shall not of itself have suspensive effect, unless the Chamber so orders.\n- 4. The Chamber may hear from participants to the proceedings on the matter.\n- 5. If the Chamber rejects the application referred to in sub-regulation 1, the Chamber may grant the requested State additional time within which it shall execute the request or the Chamber shall lift any suspension of direct execution."
      },
      {
        "id": "reg-109",
        "number": "109",
        "titleAr": "عدم الامتثال لطلب التعاون",
        "titleEn": "Failure to comply with a request for cooperation",
        "contentAr": "1 - يجوز للجهة الطالبة التقدم للدائرة بطلب إصدار استنتاج بعدم الامتثال بموجب المادة 87(7) إذا لم تمتثل الدولة لطلب التعاون.\n2 - يجوز للدائرة التي طلبت التعاون مباشرة الإجراءات من تلقاء نفسها وسماع الدولة المعنية.\n3 - متى صدر استنتاج بعدم الامتثال، يُحيل الرئيس المسألة إلى جمعية الدول الأطراف أو إلى مجلس الأمن بحسب الأحوال.",
        "contentEn": "- 1. An application for a finding under article 87, paragraph 7, may be made to the competent Chamber by the requesting body either where no application has been made under regulation 108, following the lapse of the time limit referred to in sub-regulation 2 of that provision, or where an application has been made, following a ruling by the Chamber under sub-regulation 5 of that provision and, if applicable, following the lapse of the time limit referred to therein.\n- 2. When a Chamber has made a request for cooperation, proceedings under article 87, paragraph 7, may be initiated by that Chamber. Sub-regulation 1 shall apply mutatis mutandis.\n- 3. Before making a finding in accordance with article 87, paragraph 7, the Chamber shall hear from the requested State.\n- 4. Where a finding under article 87, paragraph 7, has been made, the President shall refer the matter to the Assembly or the Security Council in accordance with that provision and, as regards the Security Council, in accordance with the agreement to be concluded under article 2."
      },
      {
        "id": "reg-110",
        "number": "110",
        "titleAr": "التعاون لأغراض الإبلاغ الشخصي",
        "titleEn": "Cooperation for the purposes of notification by way of personal service",
        "contentAr": "لأغراض الإخطار بطريق الإعلان الشخصي، تقدم الجهة الطالبة طلباً للتعاون إلى الدولة المعنية بموجب المادتين 93(1)(د) و99(1).",
        "contentEn": "For the purposes of notification by way of personal service as described in regulation 31, sub-regulation 4, the requesting body shall, where necessary, make a request for cooperation to the relevant State under articles 93, paragraph 1 (d), and 99, paragraph 1."
      },
      {
        "id": "reg-111",
        "number": "111",
        "titleAr": "معلومات حول قرار المقبولية",
        "titleEn": "Information about admissibility ruling",
        "contentAr": "عند إرسال طلب للقبض على شخص وتسليمه عملاً بالمادة 89(1)، يرفق المسجل نسخة من أي قرار ذي صلة صادر عن المحكمة بشأن مقبولية الدعوى.",
        "contentEn": "When transmitting a request for the arrest and surrender of a person in accordance with article 89, paragraph 1, the Registrar shall enclose a copy of any relevant admissibility ruling of the Court."
      },
      {
        "id": "reg-112",
        "number": "112",
        "titleAr": "آراء الدولة المسلِّمة أثناء أو بعد إجراءات المقبولية",
        "titleEn": "Views of the surrendering State in or after admissibility proceedings",
        "contentAr": "في أي وقت قبل البت في الطعن بعدم المقبولية المستند إلى المادة 17(1)(أ)، تستطلع الدائرة رأي الدولة التي سلمت الشخص أصلاً عما إذا كانت تعترض على نقله إلى الدولة التي أقامت الطعن.",
        "contentEn": "At any time before making a decision on a challenge to admissibility based on the grounds set out in article 17, paragraph 1 (a), the Chamber shall hear from the State which originally surrendered the person as to whether that State objects to the transfer of the person to the State which brought the challenge to admissibility."
      },
      {
        "id": "reg-113",
        "number": "113",
        "titleAr": "وحدة التنفيذ بهيئة الرئاسة",
        "titleEn": "Enforcement unit within the Presidency",
        "contentAr": "1 - تُنشئ هيئة الرئاسة وحدة للتنفيذ تتبعها لمعاونتها في ممارسة وظائفها بموجب الباب 10 من النظام الأساسي، ولا سيما الإشراف على تنفيذ الأحكام وظروف الحبس، وتنفيذ الغرامات وأوامر المصادرة وقرارات جبر الضرر.\n2 - يحتفظ المسجل بملف كل شخص محكوم عليه وفقاً للقاعدة 15.",
        "contentEn": "- 1. The Presidency shall establish an enforcement unit within the Presidency to assist it in the exercise of its functions under Part 10 of the Statute, in particular:\n  - (a) The supervision of enforcement of sentences and conditions of imprisonment; and\n  - (b) The enforcement of fines, forfeiture orders and reparation orders\n- 2. The record for each sentenced person shall be maintained by the Registrar in accordance with rule 15."
      },
      {
        "id": "reg-114",
        "number": "114",
        "titleAr": "الترتيبات الثنائية بموجب القاعدة 200، الفرعية 5",
        "titleEn": "Bilateral arrangements under rule 200, sub-rule 5",
        "contentAr": "تُتفاوض الترتيبات الثنائية الموصوفة في القاعدة 200(5) تحت إشراف هيئة الرئاسة، ويبرمها الرئيس مع الدولة المعنية.",
        "contentEn": "Bilateral arrangements as described in rule 200, sub-rule 5, shall be negotiated under the authority of the Presidency and thereafter concluded with the relevant State by the President."
      },
      {
        "id": "reg-115",
        "number": "115",
        "titleAr": "ممارسة المهام بموجب القاعدة 214، الفرعية 5",
        "titleEn": "Exercise of functions under rule 214, sub-rule 5",
        "contentAr": "في ممارسة مهامها بموجب القاعدة 214(4)، تراعي هيئة الرئاسة المبادئ المستقرة للقانون الدولي بشأن إعادة التسليم لمقاضاة لاحقة.",
        "contentEn": "In the exercise of its functions under rule 214, sub-rule 4, the Presidency shall have due regard to the principles of international law on re – extradition."
      },
      {
        "id": "reg-116",
        "number": "116",
        "titleAr": "تنفيذ الغرامات وأوامر المصادرة وأوامر جبر الضرر",
        "titleEn": "Enforcement of fines, forfeiture orders and reparation orders",
        "contentAr": "1 - لأغراض تنفيذ الغرامات وأوامر المصادرة وقرارات جبر الضرر، تتخذ هيئة الرئاسة بمعاونة قلم المحكمة الترتيبات اللازمة لتحصيل أموال الغرامات وحصيلة بيع العقارات والمنقولات، وقيد الفوائد، وتحويل الأموال للصندوق الاستئماني أو للضحايا.\n2 - تبت هيئة الرئاسة في تخصيص الأصول المحصلة وفقاً للمادة 75(2) والقاعدتين 98 و221.",
        "contentEn": "- 1. For the purposes of enforcement of fines, forfeiture orders and reparation orders, the Presidency, with the assistance of the Registry as appropriate, shall make the arrangements necessary in order to, inter alia:\n  - (a) Receive payment of fines as described in article 77, paragraph 2 (a);\n  - (b) Receive, as described in article 109, paragraph 3, property or the proceeds of the sale of real property or, where appropriate, the sale of other property;\n  - (c) Account for interest gained on money received under (a) and (b) above;\n  - (d) Ensure the transfer of money to the Trust Fund or to victims, as appropriate.\n- 2. Following the transfer to or deposit in the Trust Fund of property or assets realized through enforcement of an order of the Court, the Presidency shall, subject to article 75, paragraph 2, and rule 98, decide on their disposition or allocation in accordance with rule 221."
      },
      {
        "id": "reg-117",
        "number": "117",
        "titleAr": "الرقابة المستمرة على الوضع المالي للشخص المحكوم عليه",
        "titleEn": "Ongoing monitoring of financial situation of the sentenced person",
        "contentAr": "ترصد هيئة الرئاسة بمعاونة قلم المحكمة الوضع المالي للشخص المحكوم عليه بصورة مستمرة حتى بعد إتمام عقوبة السجن بغية إنفاذ الغرامات وأوامر التعويض، ولها طلب تقارير خبرة والاتصال بالمحكوم عليه وسماع ملاحظات المدعي العام وممثلي الضحايا.",
        "contentEn": "The Presidency shall, if necessary, and with the assistance of the Registrar as appropriate, monitor the financial situation of the sentenced person on an ongoing basis, even following completion of a sentence of imprisonment, in order to enforce fines, forfeiture orders or reparation orders, and may, inter alia:\n- (a) Request relevant information, expert opinions or reports, where necessary by way of a request for cooperation, and, if appropriate, on a periodic basis;\n- (b) Contact, where appropriate in the manner described in rule 211, paragraph 1 (c), the sentenced person and his or her counsel in order to inquire into the financial situation of the sentenced person;\n- (c) Ask for observations from the Prosecutor, victims and legal representatives of victims."
      },
      {
        "id": "reg-118",
        "number": "118",
        "titleAr": "الإجراءات بموجب القاعدة 146، الفرعية 5",
        "titleEn": "Procedure under rule 146, sub-rule 5",
        "contentAr": "1 - عند اتخاذ قرار تمديد مدة السجن عملاً بالقاعدة 146(5) و(6) لعدم دفع الغرامة، يجوز لهيئة الرئاسة طلب ملاحظات من الدول المعنية والدولة التي تُقضى فيها العقوبة.\n2 - إذا سدد المحكوم عليه الغرامة كلياً أو جزئياً بعد تمديد الحبس، تلغي هيئة الرئاسة التمديد أو تخفضه بنسبة السداد.",
        "contentEn": "- 1. In making its decision on the extension of the term of imprisonment in accordance with rule 146, sub-rules 5 and 6, the Presidency may ask for observations from States in which attempts to enforce fines did not succeed and shall ask for observations from the State in which the sentence of imprisonment is being served.\n- 2. Where the term of imprisonment has been extended under rule 146, sub-rule 5, and the sentenced person subsequently pays the fine or a portion thereof, the Presidency shall revoke or in case of partial payment reduce the extension previously ordered."
      }
    ]
  },
  {
    "id": "reg-chapter-8",
    "labelAr": "الباب الثامن",
    "labelEn": "CHAPTER 8",
    "titleAr": "العزل من الوظيفة والتدابير التأديبية",
    "titleEn": "Removal from office and disciplinary measures",
    "articles": [
      {
        "id": "reg-119",
        "number": "119",
        "titleAr": "تلقي وإدارة الشكاوى",
        "titleEn": "Receipt and administration of complaints",
        "contentAr": "1 - تُقدم جميع الشكاوى ضد قاضٍ أو المدعي العام أو نائب المدعي العام أو المسجل أو نائب المسجل بشأن السلوك المعرف بالقاعدتين 24 و25 مباشرةً إلى هيئة الرئاسة، التي تخطر المشكو في حقه بها.\n2 - تتخذ هيئة الرئاسة الترتيبات الإدارية اللازمة لنظر الشكوى.",
        "contentEn": "- 1. All complaints against a judge, the Prosecutor, a Deputy Prosecutor, the Registrar or the Deputy Registrar concerning conduct defined under rules 24 and 25 shall be submitted directly to the Presidency, which shall notify the person against whom the complaint has been directed of that complaint.\n- 2. The Presidency shall make all necessary arrangements for administrative assistance when dealing with a complaint."
      },
      {
        "id": "reg-120",
        "number": "120",
        "titleAr": "الإجراءات بموجب القاعدة 26، الفرعية 2",
        "titleEn": "Procedure under rule 26, sub-rule 2",
        "contentAr": "1 - يعاون هيئة الرئاسة ثلاثة قضاة يُعينون بنظام التناوب التلقائي بحسب الترتيب الهجائي الإنجليزي لألقاب جميع القضاة الذين ليسوا أعضاء بهيئة الرئاسة ولا المشكو في حقه، وذلك للبت فيما إذا كانت الشكوى مجهولة المصدر أو لا أساس لها من الصحة بشكل واضح.\n2 - يطلب القضاة المعينون إيضاحات إضافية عند الاقتضاء، ويقدمون توصية لهيئة الرئاسة بشأن قبول الشكوى أو حفظها بموجب القاعدة 26(2).\n3 - تبت هيئة الرئاسة في قبول التوصية. وإذا تعلقت الشكوى بعضو من هيئة الرئاسة، يتنحى عن نظرها ويحل محله القاضي التالي في الأسبقية.",
        "contentEn": "- 1. The Presidency shall be assisted by three judges, appointed on the basis of automatic rotation following the English alphabet of the surnames of all judges not comprising the Presidency or the judge being complained against, in order to determine whether a complaint is anonymous or manifestly unfounded.\n- 2. The judges appointed in accordance with sub-regulation 1 shall, where necessary, seek additional comments from either the person being complained against or the complainant and shall make a recommendation to the Presidency on whether such complaint is admissible or should be set aside in accordance with rule 26, sub-rule 2. The appointed judges shall also make a recommendation as to whether the complaint against a judge, the Registrar or Deputy Registrar relates to conduct which falls manifestly outside the scope of rule 24.\n- 3. The Presidency shall decide whether to accept any recommendation described in sub-regulation 2.\n- 4. If a complaint relates to a member of the Presidency, he or she shall not carry out any function as a member of the Presidency with regard to the complaint and his or her functions in that respect shall be exercised by the next available judge having precedence in accordance with regulation 10."
      },
      {
        "id": "reg-121",
        "number": "121",
        "titleAr": "القرار بموجب القاعدة 26، الفرعية 2، وإحالة الشكوى إلى الجهاز المختص",
        "titleEn": "Decision under rule 26, sub-rule 2, and transmission of complaint to the competent organ",
        "contentAr": "1 - إذا قررت هيئة الرئاسة أن الشكوى ضد قاضٍ أو المسجل أو نائبه ليست مجهولة المصدر ولها أساس، تحيلها إلى الجلسة العامة ما لم يكن السلوك خارج نطاق القاعدة 24 فتفصل فيها هيئة الرئاسة وفقاً للمادة 47 والقاعدة 30(1) واللائحة 122.\n2 - إذا تعلقت الشكوى بالمدعي العام تحال إلى مكتب جمعية الدول الأطراف، وإذا تعلقت بنائب المدعي العام تحال إلى المدعي العام.",
        "contentEn": "- 1. In case the Presidency decides that a complaint against a judge, the Registrar or Deputy Registrar is not anonymous or manifestly unfounded, it shall transmit the complaint to a plenary session, unless the Presidency determines that the conduct complained of falls manifestly outside the scope of rule 24, in which case the matter shall be considered by the Presidency in accordance with article 47, rule 30, sub-rule 1 and regulation 122.\n- 2. In case the Presidency decides that a complaint against the Prosecutor or a Deputy Prosecutor is not anonymous or manifestly unfounded, it shall:\n  - (a) With regard to the Prosecutor, transmit the complaint to the Bureau of the Assembly;\n  - (b) With regard to the Deputy Prosecutor, transmit the complaint to the Prosecutor."
      },
      {
        "id": "reg-122",
        "number": "122",
        "titleAr": "الإجراءات أمام هيئة الرئاسة بشأن التدابير التأديبية لقاضٍ أو المسجل أو نائبه",
        "titleEn": "Procedure before the Presidency on disciplinary measures for a judge, the Registrar or the Deputy Registrar",
        "contentAr": "1 - إذا تقرر نظر الشكوى أمام هيئة الرئاسة، يُتبع الإجراء المنصوص عليه في القاعدة 27.\n2 - إذا قررت هيئة الرئاسة توقيع جزاء تأديبي، جاز للمعني استئناف القرار أمام الجلسة العامة للقضاة خلال 30 يوماً من الإخطار.",
        "contentEn": "- 1. When it is determined in accordance with regulation 121, sub-regulation 1, that a complaint should be considered by the Presidency, that complaint shall be dealt with in accordance with rule 27.\n- 2. If the Presidency decides to impose disciplinary measures, the judge, Registrar or Deputy Registrar concerned may file an appeal against that decision to a plenary session within 30 days of notification of the decision."
      },
      {
        "id": "reg-123",
        "number": "123",
        "titleAr": "إجراءات عزل قاضٍ أو المسجل أو نائب المسجل من الوظيفة",
        "titleEn": "Procedure for removal from office of a judge, the Registrar or the Deputy Registrar",
        "contentAr": "1 - يتولى القضاة المعينون بموجب اللائحة 120(1) إدارة إجراءات عزل القاضي أو المسجل أو نائبه بموجب المادة 46(4) والقاعدة 27 ويقدمون تقريراً بذلك للجلسة العامة.\n2 - لا تخل هذه الإجراءات بأي إجراءات إضافية تتبعها جمعية الدول الأطراف.",
        "contentEn": "- 1. The judges appointed under regulation 120, sub-regulation 1, shall conduct the proceedings under article 46, paragraph 4, and rule 27 and shall report thereon to a plenary session.\n- 2. The procedure to be followed prior to the adoption of any recommendation concerning a judge under article 46, paragraph 2, and rule 29, sub-rule 1, is without prejudice to any additional procedure to be followed by the Assembly under article 46, paragraph 4, and rule 27."
      },
      {
        "id": "reg-124",
        "number": "124",
        "titleAr": "الوقف المؤقت عن العمل",
        "titleEn": "Suspension from duty",
        "contentAr": "1 - لأغراض القاعدة 28، يجوز وقف القاضي أو المدعي العام أو نائبه أو المسجل أو نائبه عن العمل بقرار من الجهاز المختص بعد قرار هيئة الرئاسة عملاً بالقاعدة 26(2).\n2 - لا يؤثر الوقف عن العمل على المرتب والبدلات المقررة.",
        "contentEn": "- 1. For the purposes of rule 28, a judge, the Prosecutor, a Deputy Prosecutor, the Registrar or the Deputy Registrar may be suspended from duty following the decision of the Presidency under rule 26, sub-rule 2, by the organ competent to make a decision under article 46, paragraphs 2 and 3.\n- 2. Suspension from duty shall not affect salary and allowances."
      },
      {
        "id": "reg-125",
        "number": "125",
        "titleAr": "اتخاذ الإجراءات بمبادرة من هيئة الرئاسة",
        "titleEn": "Initiation of proceedings by the Presidency",
        "contentAr": "عندما تباشر هيئة الرئاسة الإجراءات من تلقاء نفسها، لا يُشترط التقييم الأولي لما إذا كانت الشكوى مجهولة أو لا أساس لها بموجب القاعدة 26(2)، وتُطبق اللوائح من 121 إلى 124 مع ما يلزم من تبديل.",
        "contentEn": "In cases where the Presidency initiates proceedings on its own motion, the preliminary assessment of whether complaints are anonymous or manifestly unfounded under rule 26, sub-rule 2, shall not be required and regulations 121 to 124 shall apply mutatis mutandis."
      }
    ]
  },
  {
    "id": "reg-chapter-9",
    "labelAr": "الباب التاسع",
    "labelEn": "CHAPTER 9",
    "titleAr": "اعتماد مدونة السلوك القضائي",
    "titleEn": "Adoption of the Code of Judicial Ethics",
    "articles": [
      {
        "id": "reg-126",
        "number": "126",
        "titleAr": "اعتماد مدونة السلوك القضائي",
        "titleEn": "Adoption of the Code of Judicial Ethics",
        "contentAr": "1 - تضع هيئة الرئاسة مدونة للسلوك القضائي وأخلاقيات القضاء بعد التشاور مع القضاة.\n2 - يُحال مشروع المدونة بعد ذلك إلى القضاة مجتمعين في جلسة عامة لاعتمادها بأغلبية القضاة.",
        "contentEn": "- 1. The Presidency shall draw up a Code of Judicial Ethics, after having consulted the judges.\n- 2. The draft Code shall then be transmitted to the judges meeting in plenary session for the purpose of adoption by the majority of the judges."
      }
    ]
  }
];
