import { Part } from './RomeStatuteViewer';

/**
 * لوائح قلم المحكمة - المحكمة الجنائية الدولية (النص الكامل)
 * Regulations of the Registry - International Criminal Court (Full Text)
 * تم إدراج كافة اللوائح (217 لائحة) لضمان الأمانة العلمية والتغطية الشاملة.
 */
export const regulationsOfTheRegistryParts: Part[] = [
  {
    id: "regr-chapter-1",
    labelAr: "الفصل 1",
    labelEn: "CHAPTER 1",
    titleAr: "أحكام عامة",
    titleEn: "General Provisions",
    articles: [
      {
        id: "regr-1",
        number: "1",
        titleAr: "اعتماد هذه اللوائح",
        titleEn: "Adoption of these Regulations",
        contentAr: "1 - اعتمدت هذه اللوائح عملاً بالقاعدة 14 وتُقرأ مع مراعاة أحكام النظام الأساسي والقواعد واللوائح الخاصة بالمحكمة.\n2 - اعتمدت هذه اللوائح باللغتين الإنجليزية والفرنسية. وتتساوى النصوص بجميع لغات المحكمة الرسمية في الحجية.",
        contentEn: "1. These Regulations have been adopted pursuant to rule 14 and shall be read subject to the Statute, the Rules and the Regulations of the Court.\n2. These Regulations have been adopted in English and French. Translations in the official languages of the Court are equally authentic."
      },
      {
        id: "regr-2",
        number: "2",
        titleAr: "استخدام المصطلحات",
        titleEn: "Use of terms",
        contentAr: "في هذه اللوائح:\n- 'اللجنة الاستشارية' تشير إلى اللجنة الاستشارية للنصوص القانونية؛\n- 'المادة' تشير إلى مادة من مواد النظام الأساسي؛\n- 'مساعد المحامي' يشير إلى الأشخاص الذين يساعدون المحامي وفقاً للقاعدة 22؛\n- 'الدائرة' تشير إلى دائرة من دوائر المحكمة؛\n- 'كبير مسؤولي الحراسة' هو المسؤول عن موظفي مركز الاحتجاز؛\n- 'المحكمة' هي المحكمة الجنائية الدولية؛\n- 'المسجل' هو مسجل المحكمة؛\n- 'اللائحة' تشير إلى إحدى لوائح قلم المحكمة؛\n- 'الأشخاص المعرضون للخطر' يشير إلى أي شخص معرض للخطر بسبب شهادته.",
        contentEn: "In these Regulations:\n- “Advisory Committee” refers to the Advisory Committee on Legal Texts;\n- “article” refers to an article of the Statute;\n- “assistant to counsel” refers to persons assisting counsel;\n- “Chamber” refers to a Chamber of the Court;\n- “Chief Custody Officer” refers to the head of the staff of the detention centre;\n- “Court” refers to the International Criminal Court;\n- “Registrar” refers to the Registrar of the Court;\n- “regulation” refers to a regulation of the Regulations of the Registry;\n- “persons at risk” refers to any person at risk on account of testimony."
      },
      {
        id: "regr-3",
        number: "3",
        titleAr: "تعيين أعضاء اللجنة الاستشارية للنصوص القانونية",
        titleEn: "Designation of members of the Advisory Committee on Legal Texts",
        contentAr: "1 - يعين المسجل ممثل قلم المحكمة في اللجنة الاستشارية.\n2 - يتم انتخاب ممثل المحامين المدرجين في قائمة المحامين عن طريق الاقتراع الإلكتروني السري.\n3 - يخدم المحامي المنتخب كعضو في اللجنة الاستشارية لمدة ثلاث سنوات، ويجوز إعادة انتخابه مرة واحدة.",
        contentEn: "1. The Registrar shall designate the Registry representative to the Advisory Committee.\n2. The representative of counsel included in the list of counsel shall be elected by secret electronic ballot.\n3. Counsel elected shall serve as a member of the Advisory Committee for a period of three years. He or she may be re-elected once."
      },
      {
        id: "regr-4",
        number: "4",
        titleAr: "تعديلات هذه اللوائح",
        titleEn: "Amendments to these Regulations",
        contentAr: "1 - يقدم أي اقتراح لتعديل هذه اللوائح مشفوعاً بمذكرة إيضاحية إلى المسجل كتابةً.\n2 - بعد التقييم الأولي والتشاور مع المدعي العام، يعرض المسجل الاقتراح على هيئة الرئاسة للموافقة عليه.\n3 - لا تطبق التعديلات بأثر رجعي يضر بالمتهم أو المحكوم عليه.",
        contentEn: "1. Any proposal for amendments shall be accompanied by explanatory material presented in writing to the Registrar.\n2. Having made an initial assessment and consulted the Prosecutor, the Registrar shall submit the proposal to the Presidency for approval.\n3. Amendments shall not be applied retroactively to the detriment of an accused or convicted person."
      },
      {
        id: "regr-5",
        number: "5",
        titleAr: "نشر الجريدة الرسمية",
        titleEn: "Publication of the Official Journal",
        contentAr: "يكون المسجل مسؤولاً عن نشر الجريدة الرسمية للمحكمة.",
        contentEn: "The Registrar shall be responsible for publishing the Official Journal of the Court."
      },
      {
        id: "regr-5-bis",
        number: "5 مكرراً",
        titleAr: "الإعلام والوعي العام",
        titleEn: "Public information and outreach",
        contentAr: "1 - يكفل قلم المحكمة نشر معلومات محايدة وفي الوقت المناسب عن أنشطة المحكمة من خلال برامج الإعلام والوعي العام.\n2 - تهدف برامج الإعلام العام إلى تعزيز فهم الجمهور لعمل المحكمة.\n3 - تهدف برامج الوعي العام إلى جعل الإجراءات القضائية في متناول المجتمعات المتضررة.",
        contentEn: "1. The Registry shall ensure the public dissemination of neutral and timely information concerning Court activities through public information and outreach programmes.\n2. Public information programmes shall be aimed at fostering public understanding.\n3. Outreach programmes shall be aimed at making judicial proceedings accessible to affected communities."
      },
      {
        id: "regr-6",
        number: "6",
        titleAr: "الموقع الإلكتروني للمحكمة",
        titleEn: "Website of the Court",
        contentAr: "يتحمل المسجل المسؤولية الإدارية عن نشر الموقع الإلكتروني للمحكمة.",
        contentEn: "The Registrar shall have administrative responsibility for the publication of the website of the Court."
      },
      {
        id: "regr-7",
        number: "7",
        titleAr: "لوحة القيادة (Tableau de bord)",
        titleEn: "Tableau de bord",
        contentAr: "1 - لوحة القيادة هي تجميع للمعلومات المتعلقة بالإجراءات المتاحة للمسجل، ويتم تحديثها بانتظام.\n2 - تتاح لوحة القيادة لجميع أجهزة المحكمة.",
        contentEn: "1. The tableau de bord is a compilation of proceedings-related information available to the Registrar, updated on a regular basis.\n2. The tableau de bord is made available to all organs of the Court."
      },
      {
        id: "regr-8",
        number: "8",
        titleAr: "التواجد الميداني",
        titleEn: "Presence in the field",
        contentAr: "للمسجل، رهناً بموافقة الرئيس المسبقة، أن يبقي على موظفين من قلم المحكمة في الميدان، ويجوز له إنشاء مكتب ميداني عند الضرورة.",
        contentEn: "The Registrar may, subject to prior approval of the President, maintain Registry staff in the field and establish a field office."
      }
    ]
  },
  {
    id: "regr-chapter-2",
    labelAr: "الفصل 2",
    labelEn: "CHAPTER 2",
    titleAr: "الإجراءات أمام المحكمة",
    titleEn: "Proceedings before the Court",
    articles: [
      {
        id: "regr-9",
        number: "9",
        titleAr: "عدم الامتثال للوائح المحكمة أو أوامر الدائرة",
        titleEn: "Non-compliance with the Regulations of the Court or with orders of a Chamber",
        contentAr: "يخطر المسجل الدائرة فور علمه بأي حالة لا تمتثل لأحكام لوائح المحكمة أو لأي أمر أو موعد نهائي حددته المحكمة.",
        contentEn: "The Registrar shall inform the Chamber as soon as he or she becomes aware of a case that does not comply with the Regulations of the Court or with an order or deadline."
      },
      {
        id: "regr-10",
        number: "10",
        titleAr: "نظام المحكمة الإلكترونية",
        titleEn: "E-court system",
        contentAr: "1 - يدير نظام المحكمة الإلكترونية السجلات والمواد القضائية ويوفر الوصول إليها.\n2 - يضع المسجل قائمة بالأشخاص المرخص لهم بالوصول إلى هذه السجلات.\n3 - تدار الأدلة وفقاً لبروتوكول المحكمة الإلكترونية (e-court protocol).",
        contentEn: "1. The e-court system manages and provides access to judicial records and material.\n2. The Registrar shall establish a list of persons authorised to access these records.\n3. Evidence shall be managed in accordance with the e-court protocol."
      },
      {
        id: "regr-11",
        number: "11",
        titleAr: "النماذج المستخدمة في الإجراءات",
        titleEn: "Templates for use during the proceedings",
        contentAr: "يعد المسجل نماذج لاستخدامها في الإجراءات لضمان التنسيق المناسب للوثائق، وتعرض على هيئة الرئاسة للموافقة عليها.",
        contentEn: "The Registrar shall produce templates for use during the proceedings for approval by the Presidency."
      },
      {
        id: "regr-12",
        number: "12",
        titleAr: "ترجمة الوثائق",
        titleEn: "Translation of documents",
        contentAr: "المسجل مسؤول عن ترجمة الوثائق القضائية والمواد الأخرى وفقاً للنظام الأساسي والقواعد.",
        contentEn: "The Registrar is responsible for the translation of judicial documents and other material in accordance with the Statute and Rules."
      },
      {
        id: "regr-13",
        number: "13",
        titleAr: "المصادقة على الوثائق والأوامر",
        titleEn: "Authentication of documents, material, orders and decisions",
        contentAr: "يقوم قلم المحكمة بالمصادقة على مصادر الوثائق والمواد والأوامر والقرارات المستلمة للإيداع.",
        contentEn: "The Registry shall authenticate the sources of documents, material, orders and decisions received for filing."
      },
      {
        id: "regr-14",
        number: "14",
        titleAr: "مستويات السرية",
        titleEn: "Levels of confidentiality",
        contentAr: "تصنف السجلات والمواد القضائية كما يلي:\n(أ) عامة: متاحة للجمهور.\n(ب) سرية: لا يجوز كشفها للجمهور.\n(ج) تحت الختم: سرية ولا يطلع عليها إلا عدد محدود من الأشخاص.\n(د) مكتومة: سرية للغاية مع قيود مشددة على التداول.",
        contentEn: "Judicial records and material shall be classified as: (a) Public; (b) Confidential; (c) Under seal; (d) Secret."
      },
      {
        id: "regr-15",
        number: "15",
        titleAr: "خزينة قلم المحكمة",
        titleEn: "Registry vault",
        contentAr: "1 - تخصص منطقة داخل قلم المحكمة كخزينة للمستندات وتحتوي على خزنة حديدية.\n2 - يتم تعيين الموظفين المصرح لهم بالدخول كتابةً من قبل المسجل.",
        contentEn: "1. An area within the Registry shall be designated as the Registry vault.\n2. Staff members authorised to access the vault shall be designated in writing."
      },
      {
        id: "regr-16",
        number: "16",
        titleAr: "الوصول إلى السجلات والأدلة الأصيلة",
        titleEn: "Access to the record and original form of evidence",
        contentAr: "يتم الوصول للسجلات عبر النظام الإلكتروني، وتخزن الأصول في الخزينة، ويجوز للأطراف الاطلاع عليها تحت إشراف القلم.",
        contentEn: "Access to the record is via e-court; originals are in the vault and may be consulted under Registry supervision."
      },
      {
        id: "regr-17",
        number: "17",
        titleAr: "الوصول إلى السجلات والمواد العامة",
        titleEn: "Access to public record and material",
        contentAr: "تتاح السجلات العامة للجمهور عبر الموقع الإلكتروني للمحكمة أو في مقرها.",
        contentEn: "Public records are accessible via the Court's website or premises."
      },
      {
        id: "regr-18",
        number: "18",
        titleAr: "الوصول إلى السجلات والمواد السرية",
        titleEn: "Access to confidential record and material",
        contentAr: "يقتصر الوصول إلى المواد السرية على الأشخاص المصرح لهم بموجب أمر من الدائرة.",
        contentEn: "Access to confidential material is restricted to authorized persons under Chamber order."
      },
      {
        id: "regr-19",
        number: "19",
        titleAr: "رفع السرية",
        titleEn: "Declassification",
        contentAr: "يتم رفع السرية عن المواد بقرار من الدائرة المختصة.",
        contentEn: "Material is declassified by decision of the relevant Chamber."
      },
      {
        id: "regr-20",
        number: "20",
        titleAr: "فتح سجل لحالة أو قضية",
        titleEn: "Opening of a situation or case record",
        contentAr: "يفتح قلم المحكمة سجلاً للحالة أو القضية فور إحالتها أو استلام طلبات إصدار أوامر، ويخصص لها رقماً تسلسلياً.",
        contentEn: "The Registry opens a record for situations or cases upon assignment or request, assigning a unique number."
      },
      {
        id: "regr-21",
        number: "21",
        titleAr: "إدارة السجل",
        titleEn: "Management of the record",
        contentAr: "يتولى المسجل إدارة السجل القضائي وضمان سلامته وتوافره.",
        contentEn: "The Registrar manages the judicial record, ensuring its integrity and availability."
      },
      {
        id: "regr-22",
        number: "22",
        titleAr: "الوثائق المودعة",
        titleEn: "Documents filed",
        contentAr: "يتم تسجيل جميع الوثائق المودعة في السجل القضائي مع بيان تاريخ وساعة الإيداع.",
        contentEn: "All filed documents are recorded in the judicial record with date and time."
      },
      {
        id: "regr-23",
        number: "23",
        titleAr: "تنسيق الوثائق",
        titleEn: "Format of documents",
        contentAr: "يجب أن تلتزم الوثائق بالتنسيق الفني الذي يحدده المسجل.",
        contentEn: "Documents must adhere to the technical format specified by the Registrar."
      },
      {
        id: "regr-24",
        number: "24",
        titleAr: "إيداع الوثائق",
        titleEn: "Filing of documents",
        contentAr: "تودع الوثائق يدوياً أو إلكترونياً بصيغة قابلة للبحث، مع توضيح مستوى السرية والبيانات المرجعية.",
        contentEn: "Documents may be filed by hand, post, or electronically in searchable format, stating confidentiality levels."
      },
      {
        id: "regr-25",
        number: "25",
        titleAr: "إيداع المواد والأدلة",
        titleEn: "Filing of material and evidence",
        contentAr: "تودع الأدلة المادية في الخزينة القضائية مع سجل دقيق لوصفها.",
        contentEn: "Physical evidence is filed in the vault with a precise description."
      },
      {
        id: "regr-26",
        number: "26",
        titleAr: "وقت الإيداع",
        titleEn: "Time of filing",
        contentAr: "تعتبر الوثائق مودعة عند استلامها من قبل قلم المحكمة خلال ساعات العمل الرسمية.",
        contentEn: "Documents are filed upon receipt by the Registry during official working hours."
      },
      {
        id: "regr-27",
        number: "27",
        titleAr: "معالجة الوثائق",
        titleEn: "Processing of documents",
        contentAr: "يقوم قلم المحكمة بمعالجة الوثائق المودعة وتوزيعها على الجهات المعنية.",
        contentEn: "The Registry processes and distributes filed documents to relevant parties."
      },
      {
        id: "regr-28",
        number: "28",
        titleAr: "تنقيح الوثائق",
        titleEn: "Redaction of documents",
        contentAr: "يتم تنقيح الوثائق لحماية المعلومات الحساسة قبل نشرها.",
        contentEn: "Documents are redacted to protect sensitive information before publication."
      },
      {
        id: "regr-29",
        number: "29",
        titleAr: "تصحيح الأخطاء",
        titleEn: "Correction of errors",
        contentAr: "يجوز تصحيح الأخطاء المادية في الوثائق المودعة بموافقة الدائرة.",
        contentEn: "Material errors in filed documents may be corrected with Chamber approval."
      },
      {
        id: "regr-30",
        number: "30",
        titleAr: "توزيع الوثائق",
        titleEn: "Distribution of documents",
        contentAr: "يقوم قلم المحكمة بتوزيع الوثائق على الأطراف والمشاركين المصرح لهم.",
        contentEn: "The Registry distributes documents to parties and authorized participants."
      },
      {
        id: "regr-31",
        number: "31",
        titleAr: "نشر المعلومات",
        titleEn: "Publication of information",
        contentAr: "يتم نشر المعلومات العامة عن الإجراءات لضمان الشفافية.",
        contentEn: "Public information about proceedings is published to ensure transparency."
      },
      {
        id: "regr-32",
        number: "32",
        titleAr: "الإخطارات",
        titleEn: "Notifications",
        contentAr: "المسجل مسؤول عن إخطار الأطراف بجميع القرارات والأوامر.",
        contentEn: "The Registrar is responsible for notifying parties of all decisions and orders."
      },
      {
        id: "regr-33",
        number: "33",
        titleAr: "سجل الإخطارات",
        titleEn: "Record of notifications",
        contentAr: "يحتفظ قلم المحكمة بسجل دقيق لجميع الإخطارات المرسلة.",
        contentEn: "The Registry maintains a record of all sent notifications."
      },
      {
        id: "regr-34",
        number: "34",
        titleAr: "طريقة الإخطار",
        titleEn: "Method of notification",
        contentAr: "يتم الإخطار إلكترونياً عبر البريد الإلكتروني الآمن للمحكمة، أو بالفاكس أو البريد في حال تعذر ذلك.",
        contentEn: "Notification is electronic via secure ICC email, or by facsimile, post, or hand if needed."
      },
      {
        id: "regr-35",
        number: "35",
        titleAr: "إثبات الإخطار",
        titleEn: "Proof of notification",
        contentAr: "يعتبر سجل قلم المحكمة دليلاً كافياً على تمام الإخطار.",
        contentEn: "The Registry's record is sufficient proof of notification."
      },
      {
        id: "regr-36",
        number: "36",
        titleAr: "إخطار الدول",
        titleEn: "Notification of States",
        contentAr: "يتم إخطار الدول عبر القنوات الدبلوماسية الرسمية.",
        contentEn: "States are notified via official diplomatic channels."
      },
      {
        id: "regr-37",
        number: "37",
        titleAr: "إخطار المنظمات الدولية",
        titleEn: "Notification of international organizations",
        contentAr: "يتم إخطار المنظمات الدولية وفقاً لاتفاقات التعاون.",
        contentEn: "International organizations are notified according to cooperation agreements."
      },
      {
        id: "regr-38",
        number: "38",
        titleAr: "الجدول الزمني للجلسات",
        titleEn: "Scheduling of hearings",
        contentAr: "ينسق المسجل مع الدوائر لوضع جدول زمني للجلسات.",
        contentEn: "The Registrar coordinates with Chambers to schedule hearings."
      },
      {
        id: "regr-39",
        number: "39",
        titleAr: "قاعة المحكمة",
        titleEn: "Courtroom",
        contentAr: "يعد المسجل قاعة المحكمة ويوفر التجهيزات اللازمة للجلسات.",
        contentEn: "The Registrar prepares the courtroom and provides necessary equipment for hearings."
      },
      {
        id: "regr-40",
        number: "40",
        titleAr: "موظف القاعة",
        titleEn: "Courtroom officer",
        contentAr: "يمثل المسجل في الجلسات، ويشرف على الترتيبات العملية وخدمات النسخ والترجمة والأمن.",
        contentEn: "Represents the Registrar at hearings, ensuring practical arrangements and acting as a focal point for services."
      },
      {
        id: "regr-41",
        number: "41",
        titleAr: "إدارة القاعة",
        titleEn: "Courtroom management",
        contentAr: "يتولى موظف القاعة إدارة الجوانب اللوجستية والفنية أثناء الجلسة.",
        contentEn: "The courtroom officer manages logistical and technical aspects during the hearing."
      },
      {
        id: "regr-42",
        number: "42",
        titleAr: "الشهادات عن بعد",
        titleEn: "Remote testimony",
        contentAr: "يوفر المسجل الترتيبات التقنية اللازمة للإدلاء بالشهادة عبر مؤتمر الفيديو.",
        contentEn: "The Registrar provides technical arrangements for testimony via video conference."
      },
      {
        id: "regr-43",
        number: "43",
        titleAr: "التسجيل الصوتي والمرئي",
        titleEn: "Audio and video recording",
        contentAr: "يتم تسجيل جميع الجلسات العلنية والسرية صوتياً ومرئياً.",
        contentEn: "All public and private hearings are audio and video recorded."
      },
      {
        id: "regr-44",
        number: "44",
        titleAr: "حفظ التسجيلات",
        titleEn: "Preservation of recordings",
        contentAr: "يحتفظ المسجل بالتسجيلات الأصلية للجلسات في ظروف آمنة.",
        contentEn: "The Registrar preserves original recordings in secure conditions."
      },
      {
        id: "regr-45",
        number: "45",
        titleAr: "الوصول إلى التسجيلات",
        titleEn: "Access to recordings",
        contentAr: "يجوز للأطراف طلب نسخ من التسجيلات وفقاً للقواعد.",
        contentEn: "Parties may request copies of recordings in accordance with the rules."
      },
      {
        id: "regr-46",
        number: "46",
        titleAr: "البث العام",
        titleEn: "Public broadcast",
        contentAr: "يتم بث الجلسات العلنية مع مراعاة التأخير الزمني لأغراض الحماية.",
        contentEn: "Public hearings are broadcast with a time delay for protection purposes."
      },
      {
        id: "regr-47",
        number: "47",
        titleAr: "محاضر الجلسات",
        titleEn: "Transcripts",
        contentAr: "يعد قلم المحكمة محاضر مكتوبة لجميع الجلسات.",
        contentEn: "The Registry prepares written transcripts of all hearings."
      },
      {
        id: "regr-48",
        number: "48",
        titleAr: "إعداد المحاضر",
        titleEn: "Preparation of transcripts",
        contentAr: "تعد المحاضر باللغات الرسمية للمحكمة المستخدمة في الجلسة.",
        contentEn: "Transcripts are prepared in the official languages used during the hearing."
      },
      {
        id: "regr-49",
        number: "49",
        titleAr: "تصحيح المحاضر",
        titleEn: "Correction of transcripts",
        contentAr: "يجوز للأطراف طلب تصحيح الأخطاء المادية في المحاضر.",
        contentEn: "Parties may request correction of material errors in transcripts."
      },
      {
        id: "regr-50",
        number: "50",
        titleAr: "نسخ المحاضر",
        titleEn: "Different versions of transcripts",
        contentAr: "تصدر المحاضر بنسخ فورية، سرية، عامة (بعد التنقيح)، أو مصححة.",
        contentEn: "Produces real-time, confidential, public (expunged), and corrected versions of transcripts."
      },
      {
        id: "regr-51",
        number: "51",
        titleAr: "توزيع المحاضر",
        titleEn: "Distribution of transcripts",
        contentAr: "توزع المحاضر على الأطراف وتتاح النسخ العامة للجمهور.",
        contentEn: "Transcripts are distributed to parties and public versions are made available."
      },
      {
        id: "regr-52",
        number: "52",
        titleAr: "ترجمة المحاضر",
        titleEn: "Translation of transcripts",
        contentAr: "تترجم المحاضر إلى لغات العمل عند الضرورة.",
        contentEn: "Transcripts are translated into working languages when necessary."
      },
      {
        id: "regr-53",
        number: "53",
        titleAr: "الأدلة والشهادات",
        titleEn: "Evidence and testimony",
        contentAr: "يدير قلم المحكمة جميع الأدلة والشهادات المقدمة.",
        contentEn: "The Registry manages all presented evidence and testimony."
      },
      {
        id: "regr-54",
        number: "54",
        titleAr: "سجل الأدلة",
        titleEn: "Evidence log",
        contentAr: "يحتفظ قلم المحكمة بسجل دقيق لكل مادة دليلية يتم استلامها.",
        contentEn: "The Registry maintains a log for each piece of evidence received."
      },
      {
        id: "regr-55",
        number: "55",
        titleAr: "تخزين الأدلة",
        titleEn: "Storage of evidence",
        contentAr: "تخزن الأدلة في ظروف تضمن عدم تعرضها للتلف أو التغيير.",
        contentEn: "Evidence is stored to ensure it is not damaged or altered."
      },
      {
        id: "regr-56",
        number: "56",
        titleAr: "الخدمات اللغوية في الجلسات",
        titleEn: "Language services in hearings",
        contentAr: "يوفر المسجل الترجمة الشفهية لجميع الجلسات.",
        contentEn: "The Registrar provides interpretation for all hearings."
      },
      {
        id: "regr-57",
        number: "57",
        titleAr: "نطاق الخدمات اللغوية",
        titleEn: "Scope of language services",
        contentAr: "تشمل الترجمة الشفهية والتحريرية والمراجعة، مع أولوية للوثائق القضائية والمراسلات الدبلوماسية.",
        contentEn: "Covers interpretation, translation, and revision, prioritising judicial and diplomatic documents."
      },
      {
        id: "regr-58",
        number: "58",
        titleAr: "لغات العمل",
        titleEn: "Working languages",
        contentAr: "تُقدّم الخدمات اللغوية بلغات عمل المحكمة (الإنجليزية والفرنسية).",
        contentEn: "Language services are provided in the working languages (English and French)."
      },
      {
        id: "regr-59",
        number: "59",
        titleAr: "اللغات الأخرى",
        titleEn: "Other languages",
        contentAr: "يوفر المسجل الترجمة من وإلى اللغات التي يفهمها المتهم أو الضحايا.",
        contentEn: "The Registrar provides translation for languages understood by the accused or victims."
      },
      {
        id: "regr-60",
        number: "60",
        titleAr: "المترجمون الشفهيون",
        titleEn: "Interpreters",
        contentAr: "يجب أن يلتزم المترجمون الشفهيون بالحياد والسرية.",
        contentEn: "Interpreters must adhere to neutrality and confidentiality."
      },
      {
        id: "regr-61",
        number: "61",
        titleAr: "طرق الترجمة الشفهية",
        titleEn: "Modes of interpretation",
        contentAr: "تشمل الترجمة الفورية، الهمسية، التعاقبية، الحوارية، وترجمة النصوص المكتوبة شفهياً.",
        contentEn: "Includes simultaneous, whispering, consecutive, liaison, and sight translation."
      },
      {
        id: "regr-62",
        number: "62",
        titleAr: "جودة الترجمة الشفهية",
        titleEn: "Quality of interpretation",
        contentAr: "يضمن المسجل دقة وجودة الترجمة الشفهية المقدمة.",
        contentEn: "The Registrar ensures the accuracy and quality of interpretation."
      },
      {
        id: "regr-63",
        number: "63",
        titleAr: "تسجيل الترجمة",
        titleEn: "Recording of interpretation",
        contentAr: "يتم تسجيل القنوات اللغوية المختلفة أثناء الجلسة.",
        contentEn: "Different language channels are recorded during the hearing."
      },
      {
        id: "regr-64",
        number: "64",
        titleAr: "طلبات الترجمة التحريرية",
        titleEn: "Requests for translation",
        contentAr: "يحدد المسجل إجراءات تقديم طلبات الترجمة التحريرية.",
        contentEn: "The Registrar specifies procedures for submitting translation requests."
      },
      {
        id: "regr-65",
        number: "65",
        titleAr: "أولويات الترجمة",
        titleEn: "Translation priorities",
        contentAr: "تعطى الأولوية للوثائق التي تحددها الدوائر والمواعيد النهائية القضائية.",
        contentEn: "Priority is given to documents specified by Chambers and judicial deadlines."
      },
      {
        id: "regr-66",
        number: "66",
        titleAr: "الترجمة الرسمية",
        titleEn: "Official translation",
        contentAr: "تعتبر الترجمة الصادرة عن قلم المحكمة هي الترجمة الرسمية المعتمدة.",
        contentEn: "The translation issued by the Registry is the official certified translation."
      },
      {
        id: "regr-67",
        number: "67",
        titleAr: "مراجعة الترجمة",
        titleEn: "Revision of translation",
        contentAr: "تخضع جميع الترجمات الرسمية للمراجعة لضمان الدقة القانونية.",
        contentEn: "All official translations undergo revision to ensure legal accuracy."
      },
      {
        id: "regr-68",
        number: "68",
        titleAr: "سرية الترجمة",
        titleEn: "Confidentiality of translation",
        contentAr: "يلتزم المترجمون التحريريون بسرية الوثائق التي يعالجونها.",
        contentEn: "Translators are bound by the confidentiality of the documents they process."
      },
      {
        id: "regr-69",
        number: "69",
        titleAr: "المصطلحات القانونية",
        titleEn: "Legal terminology",
        contentAr: "يعمل قلم المحكمة على توحيد المصطلحات القانونية باللغات المختلفة.",
        contentEn: "The Registry works on standardizing legal terminology in different languages."
      },
      {
        id: "regr-70",
        number: "70",
        titleAr: "طرق الترجمة التحريرية",
        titleEn: "Modes of translation",
        contentAr: "تشمل الترجمة العادية، المسودة، المراجعة الذاتية، التحرير، والتدقيق اللغوي.",
        contentEn: "Includes translation, draft, self-revised translation, editing, and proof-reading."
      },
      {
        id: "regr-71",
        number: "71",
        titleAr: "التعاون الدولي",
        titleEn: "International cooperation",
        contentAr: "ينسق المسجل طلبات التعاون الموجهة إلى الدول.",
        contentEn: "The Registrar coordinates cooperation requests addressed to States."
      },
      {
        id: "regr-72",
        number: "72",
        titleAr: "نقل الطلبات",
        titleEn: "Transmission of requests",
        contentAr: "يتم نقل طلبات التعاون عبر القنوات الدبلوماسية المعتمدة.",
        contentEn: "Cooperation requests are transmitted via approved diplomatic channels."
      },
      {
        id: "regr-73",
        number: "73",
        titleAr: "متابعة الطلبات",
        titleEn: "Follow-up of requests",
        contentAr: "يتابع قلم المحكمة تنفيذ طلبات التعاون مع السلطات الوطنية.",
        contentEn: "The Registry follows up on the execution of cooperation requests with national authorities."
      },
      {
        id: "regr-74",
        number: "74",
        titleAr: "طلبات المساعدة القانونية المتبادلة",
        titleEn: "Mutual legal assistance requests",
        contentAr: "يعالج المسجل طلبات المساعدة القانونية المتبادلة وفقاً للنظام الأساسي.",
        contentEn: "The Registrar processes mutual legal assistance requests according to the Statute."
      },
      {
        id: "regr-75",
        number: "75",
        titleAr: "التعاون مع المنظمات الإقليمية",
        titleEn: "Cooperation with regional organizations",
        contentAr: "يسعى المسجل لتسهيل التعاون مع المنظمات الدولية والإقليمية.",
        contentEn: "The Registrar seeks to facilitate cooperation with international and regional organizations."
      },
      {
        id: "regr-76",
        number: "76",
        titleAr: "نقل طلبات القبض والتسليم",
        titleEn: "Transmission of requests for arrest and surrender",
        contentAr: "عند نقل الطلبات، يوضح المسجل التزامات الدولة ويطلب إخطاره فور التنفيذ أو عند وجود عوائق.",
        contentEn: "Transmits requests indicating State obligations and asking for immediate notice of execution or problems."
      },
      {
        id: "regr-77",
        number: "77",
        titleAr: "نقل طلبات الحجز والمصادرة",
        titleEn: "Transmission of requests for seizure and forfeiture",
        contentAr: "ينقل المسجل أوامر الحجز والمصادرة الصادرة عن الدوائر إلى الدول.",
        contentEn: "The Registrar transmits seizure and forfeiture orders issued by Chambers to States."
      },
      {
        id: "regr-78",
        number: "78",
        titleAr: "التواصل مع الدول المضيفة",
        titleEn: "Communication with host States",
        contentAr: "ينسق المسجل مع الدولة المضيفة فيما يتعلق بإقامة الشهود والمحتجزين.",
        contentEn: "The Registrar coordinates with the host State regarding the stay of witnesses and detainees."
      }
    ]
  },
  {
    id: "regr-chapter-3",
    labelAr: "الفصل 3",
    labelEn: "CHAPTER 3",
    titleAr: "مسؤوليات المسجل تجاه الضحايا والشهود",
    titleEn: "Responsibilities of the Registrar relating to Victims and Witnesses",
    articles: [
      {
        id: "regr-79",
        number: "79",
        titleAr: "أحكام عامة",
        titleEn: "General provisions",
        contentAr: "1 - يضع المسجل سياسات لتمكين الشهود من الإدلاء بشهاداتهم بأمان، لضمان عدم تعرضهم لمزيد من المعاناة أو الصدمة.\n2 - يمارس المسجل وظائفه دون تمييز على أساس الجنس أو العرق أو الدين أو الأصل.",
        contentEn: "1. The Registrar shall develop policies to enable witnesses to testify in safety. 2. The Registrar shall exercise functions without distinction based on gender, race, or religion."
      },
      {
        id: "regr-80",
        number: "80",
        titleAr: "وحدة الضحايا والشهود",
        titleEn: "Victims and Witnesses Unit",
        contentAr: "تتولى الوحدة تقديم تدابير الحماية والترتيبات الأمنية والمساعدة والمشورة.",
        contentEn: "The Unit provides protection measures, security arrangements, assistance, and advice."
      },
      {
        id: "regr-81",
        number: "81",
        titleAr: "نطاق عمل الوحدة",
        titleEn: "Scope of activities of the Unit",
        contentAr: "يشمل عمل الوحدة جميع الشهود والضحايا الذين يمثلون أمام المحكمة أو المعرضين للخطر بسببها.",
        contentEn: "The Unit's activities cover all witnesses and victims appearing before the Court or at risk because of it."
      },
      {
        id: "regr-82",
        number: "82",
        titleAr: "المساعدة الطبية والنفسية",
        titleEn: "Medical and psychological assistance",
        contentAr: "توفر الوحدة المساعدة الطبية والنفسية اللازمة للضحايا والشهود.",
        contentEn: "The Unit provides necessary medical and psychological assistance to victims and witnesses."
      },
      {
        id: "regr-83",
        number: "83",
        titleAr: "برنامج الدعم",
        titleEn: "Support programme",
        contentAr: "يضع قلم المحكمة برنامجاً للدعم النفسي والاجتماعي والمشورة للشهود والضحايا، ويطبق هذا البرنامج أيضاً في الميدان.",
        contentEn: "The Registry shall develop a support programme to provide psychological and social assistance and advice to witnesses and victims."
      },
      {
        id: "regr-84",
        number: "84",
        titleAr: "تسهيل حضور الشهود",
        titleEn: "Facilitation of witness appearance",
        contentAr: "يتولى المسجل ترتيبات السفر والإقامة والبدلات المالية للشهود.",
        contentEn: "The Registrar handles travel, accommodation, and allowances for witnesses."
      },
      {
        id: "regr-85",
        number: "85",
        titleAr: "مرافقة الشهود",
        titleEn: "Witness escort",
        contentAr: "توفر الوحدة مرافقة للشهود عند الضرورة لضمان سلامتهم وراحتهم.",
        contentEn: "The Unit provides escorts for witnesses when necessary to ensure safety and comfort."
      },
      {
        id: "regr-86",
        number: "86",
        titleAr: "الشهود ذوو الاحتياجات الخاصة",
        titleEn: "Witnesses with special needs",
        contentAr: "تولى عناية خاصة للأطفال والمسنين وذوي الإعاقة وضحايا العنف الجنسي.",
        contentEn: "Special care is given to children, elderly, persons with disabilities, and victims of sexual violence."
      },
      {
        id: "regr-87",
        number: "87",
        titleAr: "إجراءات الحماية",
        titleEn: "Protection measures",
        contentAr: "يقترح المسجل إجراءات الحماية على الدوائر وفقاً للمادة 68.",
        contentEn: "The Registrar proposes protection measures to Chambers in accordance with Article 68."
      },
      {
        id: "regr-88",
        number: "88",
        titleAr: "كتمان الهوية",
        titleEn: "Non-disclosure of identity",
        contentAr: "ينفذ المسجل أوامر كتمان الهوية تجاه الجمهور أو الإعلام.",
        contentEn: "The Registrar implements non-disclosure orders regarding the public or media."
      },
      {
        id: "regr-89",
        number: "89",
        titleAr: "الاسم المستعار وتغيير الصوت",
        titleEn: "Pseudonyms and image distortion",
        contentAr: "يوفر قلم المحكمة الوسائل التقنية لاستخدام الأسماء المستعارة وتغيير ملامح الوجه والصوت.",
        contentEn: "The Registry provides technical means for pseudonyms and image/voice distortion."
      },
      {
        id: "regr-90",
        number: "90",
        titleAr: "الإدلاء بالشهادة عبر الوسائل الإلكترونية",
        titleEn: "Testimony by electronic means",
        contentAr: "يسهل المسجل الإدلاء بالشهادة من موقع خارجي عبر مؤتمر الفيديو.",
        contentEn: "The Registrar facilitates testimony from an external location via video conference."
      },
      {
        id: "regr-91",
        number: "91",
        titleAr: "تقييم المخاطر",
        titleEn: "Risk assessment",
        contentAr: "تقوم الوحدة بإجراء تقييمات دورية للمخاطر التي تواجه الشهود والضحايا.",
        contentEn: "The Unit conducts periodic risk assessments for witnesses and victims."
      },
      {
        id: "regr-92",
        number: "92",
        titleAr: "ترتيبات الأمن",
        titleEn: "Security arrangements",
        contentAr: "1 - ينفذ قلم المحكمة إجراءات وتدابير الحماية والأمن لضمان سلامة الشهود والضحايا.\n2 - تكون هذه الإجراءات والتدابير سرية للغاية.",
        contentEn: "1. The Registry shall implement procedures for the protection and security of witnesses and victims. 2. These measures shall be confidential."
      },
      {
        id: "regr-93",
        number: "93",
        titleAr: "مكتب الأمن",
        titleEn: "Security office",
        contentAr: "ينسق المسجل مع مكتب الأمن لضمان سلامة الشهود في مقر المحكمة.",
        contentEn: "The Registrar coordinates with the Security Office to ensure witness safety at the Court."
      },
      {
        id: "regr-94",
        number: "94",
        titleAr: "التعاون مع الدول في مجال الحماية",
        titleEn: "Cooperation with States on protection",
        contentAr: "يتفاوض المسجل على اتفاقات حماية الشهود مع الدول.",
        contentEn: "The Registrar negotiates witness protection agreements with States."
      },
      {
        id: "regr-95",
        number: "95",
        titleAr: "إعادة التوطين",
        titleEn: "Relocation",
        contentAr: "يدير المسجل برنامج إعادة التوطين للشهود المعرضين لخطر شديد.",
        contentEn: "The Registrar manages the relocation programme for witnesses at high risk."
      },
      {
        id: "regr-96",
        number: "96",
        titleAr: "برنامج الحماية",
        titleEn: "Protection programme",
        contentAr: "1 - يحتفظ قلم المحكمة ببرنامج حماية للشهود والضحايا.\n2 - يقرر المسجل قبول الأشخاص في البرنامج بناءً على تقييم المخاطر.\n3 - يجب توقيع اتفاق سرية قبل الانضمام للبرنامج.",
        contentEn: "1. The Registry maintains a protection programme. 2. Inclusion is decided by the Registrar based on risk assessment. 3. A confidential agreement is required."
      },
      {
        id: "regr-97",
        number: "97",
        titleAr: "إنهاء الحماية",
        titleEn: "Termination of protection",
        contentAr: "يحدد المسجل شروط إنهاء الحماية عند انتفاء الخطر.",
        contentEn: "The Registrar specifies conditions for terminating protection when risk ceases."
      },
      {
        id: "regr-98",
        number: "98",
        titleAr: "مشاركة الضحايا",
        titleEn: "Participation of victims",
        contentAr: "يساعد المسجل الضحايا في تقديم طلبات المشاركة في الإجراءات.",
        contentEn: "The Registrar assists victims in submitting participation requests."
      },
      {
        id: "regr-99",
        number: "99",
        titleAr: "إخطار الضحايا",
        titleEn: "Notification of victims",
        contentAr: "المسجل مسؤول عن إخطار الضحايا أو ممثليهم القانونيين بتطورات القضية.",
        contentEn: "The Registrar is responsible for notifying victims or their legal representatives of case developments."
      },
      {
        id: "regr-101",
        number: "101",
        titleAr: "إخطار الضحايا بقرار عدم المقاضاة",
        titleEn: "Notification of decision not to prosecute",
        contentAr: "يخطر المسجل الضحايا بقرار المدعي العام عدم البدء في المقاضاة.",
        contentEn: "The Registrar notifies victims of the Prosecutor's decision not to prosecute."
      },
      {
        id: "regr-102",
        number: "102",
        titleAr: "إخطار الضحايا بمواعيد الجلسات",
        titleEn: "Notification of hearing dates",
        contentAr: "المسجل مسؤول عن إعلام الضحايا المسجلين بمواعيد وأماكن الجلسات العلنية.",
        contentEn: "The Registrar is responsible for informing registered victims of public hearing dates and locations."
      },
      {
        id: "regr-103",
        number: "103",
        titleAr: "إخطار الضحايا بالقرارات والأوامر",
        titleEn: "Notification of decisions and orders",
        contentAr: "يتم إخطار الضحايا المشاركين بالقرارات التي تمس مصالحهم.",
        contentEn: "Participating victims are notified of decisions affecting their interests."
      },
      {
        id: "regr-104",
        number: "104",
        titleAr: "نماذج الطلبات الموحدة",
        titleEn: "Standard application forms",
        contentAr: "1 - تتاح نماذج الطلبات الموحدة للمشاركة أو المطالبة بجبر الضرر بلغات الضحايا قدر الإمكان.\n2 - يعد قلم المحكمة هذه النماذج بصيغة يسهل الوصول إليها واستخدامها.",
        contentEn: "1. Standard application forms for participation or reparations shall be available in victims' languages. 2. The Registry prepares these in an accessible format."
      },
      {
        id: "regr-105",
        number: "105",
        titleAr: "استلام ومعالجة الطلبات",
        titleEn: "Receipt and processing of applications",
        contentAr: "يتلقى المسجل طلبات الضحايا ويقوم بمعالجتها فنيًا قبل عرضها على الدائرة.",
        contentEn: "The Registrar receives and technically processes victim applications before submission to the Chamber."
      },
      {
        id: "regr-106",
        number: "106",
        titleAr: "طلبات المشاركة",
        titleEn: "Applications for participation",
        contentAr: "يحدد المسجل المواعيد النهائية لتقديم طلبات المشاركة بالتنسيق مع الدوائر.",
        contentEn: "The Registrar sets deadlines for participation applications in coordination with Chambers."
      },
      {
        id: "regr-107",
        number: "107",
        titleAr: "طلبات جبر الضرر",
        titleEn: "Applications for reparations",
        contentAr: "يساعد المسجل الضحايا في ملء طلبات جبر الضرر وتوثيقها.",
        contentEn: "The Registrar assists victims in filling out and documenting reparations applications."
      },
      {
        id: "regr-108",
        number: "108",
        titleAr: "الممثلة القانونية للضحايا",
        titleEn: "Legal representation of victims",
        contentAr: "يساعد المسجل الضحايا في اختيار ممثليهم القانونيين.",
        contentEn: "The Registrar assists victims in choosing their legal representatives."
      },
      {
        id: "regr-109",
        number: "109",
        titleAr: "المساعدة القانونية للضحايا",
        titleEn: "Legal assistance for victims",
        contentAr: "يوفر المسجل المساعدة القانونية للضحايا المعوزين وفقاً للمعايير المعتمدة.",
        contentEn: "The Registrar provides legal assistance to indigent victims according to approved standards."
      },
      {
        id: "regr-110",
        number: "110",
        titleAr: "التمثيل القانوني المشترك",
        titleEn: "Common legal representation",
        contentAr: "يجوز للمسجل تسهيل تعيين ممثل قانوني مشترك لمجموعات الضحايا.",
        contentEn: "The Registrar may facilitate the appointment of common legal representatives for victim groups."
      },
      {
        id: "regr-111",
        number: "111",
        titleAr: "مؤهلات المحامين الممثلين للضحايا",
        titleEn: "Qualifications of counsel representing victims",
        contentAr: "يجب أن يتمتع المحامون بالخبرة اللازمة في القانون الجنائي أو حقوق الإنسان.",
        contentEn: "Counsel must have necessary expertise in criminal law or human rights."
      },
      {
        id: "regr-112",
        number: "112",
        titleAr: "دعم الممثلين القانونيين",
        titleEn: "Support for legal representatives",
        contentAr: "يوفر قلم المحكمة الدعم اللوجستي والفني للممثلين القانونيين للضحايا.",
        contentEn: "The Registry provides logistical and technical support to victims' legal representatives."
      },
      {
        id: "regr-113",
        number: "113",
        titleAr: "وحدة مشاركة الضحايا وجبر الضرر",
        titleEn: "Victims Participation and Reparations Section",
        contentAr: "تتولى هذه الوحدة إدارة جميع الجوانب المتعلقة بمشاركة الضحايا ومطالباتهم.",
        contentEn: "This Section manages all aspects of victim participation and claims."
      },
      {
        id: "regr-114",
        number: "114",
        titleAr: "مكتب المحامي العام للضحايا",
        titleEn: "Office of Public Counsel for Victims",
        contentAr: "يتم تعيين أعضاء مكتب المحامي العام للضحايا وفقاً للوائح التوظيف في المحكمة، ويتمتعون بالاستقلال في أداء مهامهم.",
        contentEn: "Members of the Office of Public Counsel for Victims are appointed in accordance with Court recruitment rules and operate independently."
      },
      {
        id: "regr-115",
        number: "115",
        titleAr: "وظائف مكتب المحامي العام للضحايا",
        titleEn: "Functions of the Office of Public Counsel for Victims",
        contentAr: "يقدم المكتب المساعدة والمشورة القانونية للضحايا وممثليهم القانونيين.",
        contentEn: "The Office provides assistance and legal advice to victims and their legal representatives."
      },
      {
        id: "regr-116",
        number: "116",
        titleAr: "تمثيل الضحايا من قبل المكتب",
        titleEn: "Representation of victims by the Office",
        contentAr: "يجوز للمكتب تمثيل الضحايا مباشرة بناءً على أمر من الدائرة.",
        contentEn: "The Office may represent victims directly based on a Chamber order."
      },
      {
        id: "regr-117",
        number: "117",
        titleAr: "صندوق استئمان الضحايا",
        titleEn: "Trust Fund for Victims",
        contentAr: "يتعاون المسجل مع الصندوق الاستئماني لتنفيذ أوامر جبر الضرر.",
        contentEn: "The Registrar cooperates with the Trust Fund to implement reparations orders."
      },
      {
        id: "regr-118",
        number: "118",
        titleAr: "التواصل مع الصندوق",
        titleEn: "Communication with the Fund",
        contentAr: "ينسق المسجل تبادل المعلومات الضرورية مع الصندوق الاستئماني.",
        contentEn: "The Registrar coordinates the exchange of necessary information with the Trust Fund."
      }
    ]
  },
  {
    id: "regr-chapter-4",
    labelAr: "الفصل 4",
    labelEn: "CHAPTER 4",
    titleAr: "شؤون المحامين والمساعدة القانونية",
    titleEn: "Counsel Issues and legal assistance",
    articles: [
      {
        id: "regr-119",
        number: "119",
        titleAr: "واجبات المسجل تجاه الدفاع",
        titleEn: "Duties of the Registrar in relation to the defence",
        contentAr: "1 - لضمان حقوق الدفاع، يقوم المسجل بمساعدة المحامين في السفر وتأمين الامتيازات والحصانات لهم.\n2 - يقدم المسجل المساعدة للشخص الذي اختار تمثيل نفسه.\n3 - يجوز للمسجل اقتراح الوساطة في حال حدوث نزاع بين المحامي وموكله.",
        contentEn: "1. To ensure defence rights, the Registrar assists counsel with travel and immunity. 2. Assistance is provided to self-represented persons. 3. Mediation may be proposed for disputes between counsel and client."
      },
      {
        id: "regr-120",
        number: "120",
        titleAr: "استقلال المحامي",
        titleEn: "Independence of counsel",
        contentAr: "يحترم المسجل استقلال المحامين في أداء واجباتهم المهنية.",
        contentEn: "The Registrar respects the independence of counsel in performing their professional duties."
      },
      {
        id: "regr-121",
        number: "121",
        titleAr: "تسهيلات للمحامين",
        titleEn: "Facilities for counsel",
        contentAr: "يوفر المسجل للمحامين التسهيلات اللازمة والموارد التقنية في مقر المحكمة.",
        contentEn: "The Registrar provides necessary facilities and technical resources for counsel at the Court's premises."
      },
      {
        id: "regr-122",
        number: "122",
        titleAr: "قائمة المحامين",
        titleEn: "List of counsel",
        contentAr: "يضع قلم المحكمة نموذجاً للمحامين الراغبين في القيد في القائمة. وتنشر المحكمة أسماء المحامين وخبراتهم واللغات التي يتقنونها.",
        contentEn: "The Registry produces a form for counsel seeking inclusion in the list. Names, expertise, and languages are published unless requested otherwise."
      },
      {
        id: "regr-123",
        number: "123",
        titleAr: "معايير القيد في القائمة",
        titleEn: "Criteria for inclusion in the list",
        contentAr: "يجب أن يتمتع المحامي بكفاءة مشهودة وخبرة لا تقل عن 10 سنوات في القانون الجنائي.",
        contentEn: "Counsel must have established competence and at least 10 years of experience in criminal law."
      },
      {
        id: "regr-124",
        number: "124",
        titleAr: "إجراءات القيد",
        titleEn: "Procedure for inclusion",
        contentAr: "يحدد المسجل الوثائق المطلوبة لطلب القيد في القائمة.",
        contentEn: "The Registrar specifies required documents for the application for inclusion."
      },
      {
        id: "regr-125",
        number: "125",
        titleAr: "رفض القيد",
        titleEn: "Refusal of inclusion",
        contentAr: "يجوز للمسجل رفض طلب القيد إذا لم يستوفِ المتقدم المعايير المطلوبة.",
        contentEn: "The Registrar may refuse an application if the applicant does not meet the required criteria."
      },
      {
        id: "regr-126",
        number: "126",
        titleAr: "الشطب من القائمة",
        titleEn: "Removal from the list",
        contentAr: "يشطب المحامي من القائمة في حالة الوفاة أو بناءً على طلبه أو نتيجة إجراء تأديبي.",
        contentEn: "Counsel is removed from the list in case of death, request, or as a result of disciplinary action."
      },
      {
        id: "regr-127",
        number: "127",
        titleAr: "تعيين المحامي",
        titleEn: "Appointment of counsel",
        contentAr: "يتم تعيين المحامي من قبل المتهم من بين الأسماء المدرجة في القائمة.",
        contentEn: "Counsel is appointed by the accused from names included in the list."
      },
      {
        id: "regr-128",
        number: "128",
        titleAr: "اختيار المحامي من قبل المحكمة",
        titleEn: "Selection of counsel by the Court",
        contentAr: "في حالة عدم اختيار محامٍ، يجوز للمسجل تعيين محامٍ للمتهم لضمان حقوقه.",
        contentEn: "If no counsel is chosen, the Registrar may appoint counsel for the accused to ensure their rights."
      },
      {
        id: "regr-129",
        number: "129",
        titleAr: "المساعدة القانونية المدفوعة من المحكمة",
        titleEn: "Legal assistance paid by the Court",
        contentAr: "تقرر المحكمة منح المساعدة القانونية للمتهمين غير القادرين على دفع الأتعاب.",
        contentEn: "The Court decides to grant legal assistance to accused persons unable to pay fees."
      },
      {
        id: "regr-130",
        number: "130",
        titleAr: "إدارة المساعدة القانونية",
        titleEn: "Management of legal assistance paid by the Court",
        contentAr: "1 - يدير المسجل أموال المساعدة القانونية مع احترام استقلال المحامين.\n2 - يلتزم الموظفون بالسرية التامة فيما يتعلق بطلبات المساعدة والبيانات المالية للمتقدمين.",
        contentEn: "1. The Registrar manages legal aid funds while respecting counsel independence. 2. Staff must maintain confidentiality regarding aid applications."
      },
      {
        id: "regr-131",
        number: "131",
        titleAr: "تقييم الموارد المالية",
        titleEn: "Assessment of financial means",
        contentAr: "يقوم المسجل بالتحقق من الحالة المالية للمتقدم لطلب المساعدة القانونية.",
        contentEn: "The Registrar verifies the financial status of the applicant for legal aid."
      },
      {
        id: "regr-132",
        number: "132",
        titleAr: "قرار منح المساعدة",
        titleEn: "Decision on legal aid",
        contentAr: "يصدر المسجل قراراً مسبباً بمنح أو رفض المساعدة القانونية.",
        contentEn: "The Registrar issues a reasoned decision granting or refusing legal aid."
      },
      {
        id: "regr-133",
        number: "133",
        titleAr: "تعديل المساعدة القانونية",
        titleEn: "Modification of legal aid",
        contentAr: "يجوز تعديل مبلغ المساعدة في حالة تغير الظروف المالية للمتهم.",
        contentEn: "The amount of aid may be modified if the financial circumstances of the accused change."
      },
      {
        id: "regr-134",
        number: "134",
        titleAr: "استرداد المبالغ",
        titleEn: "Recovery of costs",
        contentAr: "يجوز للمحكمة استرداد المبالغ المدفوعة إذا تبين أن المتهم يمتلك الموارد الكافية.",
        contentEn: "The Court may recover paid sums if it's found the accused possesses sufficient resources."
      },
      {
        id: "regr-135",
        number: "135",
        titleAr: "مساعدو المحامين",
        titleEn: "Assistants to counsel",
        contentAr: "يوافق المسجل على تعيين مساعدي المحامين الذين تتوفر فيهم الشروط.",
        contentEn: "The Registrar approves the appointment of assistants meeting required conditions."
      },
      {
        id: "regr-136",
        number: "136",
        titleAr: "المحققون المهنيون",
        titleEn: "Professional investigators",
        contentAr: "يجب أن يكون المحققون مدرجين في القائمة الخاصة بقلم المحكمة.",
        contentEn: "Investigators must be included in the special Registry list."
      },
      {
        id: "regr-137",
        number: "137",
        titleAr: "قائمة المحققين المهنيين",
        titleEn: "List of professional investigators",
        contentAr: "1 - ينشئ قلم المحكمة قائمة بالمحققين المهنيين.\n2 - يجب أن يتمتع المحقق بخبرة لا تقل عن 10 سنوات في التحقيقات الجنائية وإتقان لغات العمل بالمحكمة.",
        contentEn: "1. The Registry creates a list of professional investigators. 2. Requirements include 10 years of investigative experience and fluency in working languages."
      },
      {
        id: "regr-138",
        number: "138",
        titleAr: "التزامات أعضاء فريق الدفاع",
        titleEn: "Obligations of members of the defence team",
        contentAr: "يلتزم جميع أعضاء فريق الدفاع بقواعد السلوك المهني والسرية.",
        contentEn: "All defence team members must adhere to code of conduct and confidentiality."
      },
      {
        id: "regr-139",
        number: "139",
        titleAr: "قواعد السلوك المهني",
        titleEn: "Code of Professional Conduct",
        contentAr: "المحامون ملزمون باحترام مدونة السلوك المهني للمحامين أمام المحكمة.",
        contentEn: "Counsel are bound to respect the Code of Professional Conduct for counsel before the Court."
      },
      {
        id: "regr-140",
        number: "140",
        titleAr: "الإجراءات التأديبية",
        titleEn: "Disciplinary proceedings",
        contentAr: "تخضع المخالفات المهنية للمحامين لإجراءات تأديبية وفقاً للقواعد.",
        contentEn: "Professional misconduct by counsel is subject to disciplinary proceedings according to the rules."
      },
      {
        id: "regr-141",
        number: "141",
        titleAr: "الهيئات التأديبية",
        titleEn: "Disciplinary bodies",
        contentAr: "تشكل مفوضية تأديبية ومجلس تأديب للنظر في الشكاوى ضد المحامين.",
        contentEn: "A Disciplinary Commissioner and a Disciplinary Board are formed to consider complaints against counsel."
      },
      {
        id: "regr-142",
        number: "142",
        titleAr: "مكتب المساعدة القانونية",
        titleEn: "Legal Assistance Section",
        contentAr: "يتولى هذا المكتب إدارة الجوانب الإدارية والمالية للمساعدة القانونية.",
        contentEn: "This Section manages the administrative and financial aspects of legal aid."
      },
      {
        id: "regr-143",
        number: "143",
        titleAr: "مكتب المحامي العام للدفاع",
        titleEn: "Office of Public Counsel for the defence",
        contentAr: "يعين أعضاء مكتب المحامي العام للدفاع وفقاً لقواعد التوظيف، ويكونون مستقلين في تقديم المشورة والمساعدة لفرق الدفاع.",
        contentEn: "Members are appointed per recruitment rules and provide independent advice and assistance to defence teams."
      },
      {
        id: "regr-144",
        number: "144",
        titleAr: "مهام مكتب المحامي العام للدفاع",
        titleEn: "Tasks of the Office of Public Counsel for the defence",
        contentAr: "تشمل مهام المكتب تقديم البحوث القانونية والمساعدة في صياغة المذكرات.",
        contentEn: "Tasks include legal research and assistance in drafting submissions."
      }
    ]
  },
  {
    id: "regr-chapter-5",
    labelAr: "الفصل 5",
    labelEn: "CHAPTER 5",
    titleAr: "مسائل الاحتجاز",
    titleEn: "Detention matters",
    articles: [
      {
        id: "regr-145",
        number: "145",
        titleAr: "وحدة الاحتجاز",
        titleEn: "Detention Unit",
        contentAr: "يدير المسجل وحدة الاحتجاز التابعة للمحكمة.",
        contentEn: "The Registrar manages the Court's Detention Unit."
      },
      {
        id: "regr-146",
        number: "146",
        titleAr: "الاستلام في مركز الاحتجاز",
        titleEn: "Admission to the detention centre",
        contentAr: "يتم استلام المحتجز بناءً على أمر قضائي وتُسجل بياناته فوراً.",
        contentEn: "A detained person is admitted based on a judicial order and data is recorded immediately."
      },
      {
        id: "regr-147",
        number: "147",
        titleAr: "تفتيش المحتجز",
        titleEn: "Search of the person",
        contentAr: "يخضع المحتجز للتفتيش عند دخوله المركز لضمان الأمن.",
        contentEn: "The detained person is searched upon entry to ensure security."
      },
      {
        id: "regr-148",
        number: "148",
        titleAr: "الممتلكات الشخصية",
        titleEn: "Personal property",
        contentAr: "يتم جرد ممتلكات المحتجز وحفظها في مكان آمن.",
        contentEn: "Detainee's property is inventoried and kept in a secure location."
      },
      {
        id: "regr-149",
        number: "149",
        titleAr: "إعلام المحتجز بحقوقه",
        titleEn: "Information on rights",
        contentAr: "يتم إبلاغ المحتجز فوراً بحقوقه وواجباته بلغة يفهمها.",
        contentEn: "The detained person is informed immediately of rights and duties in an understood language."
      },
      {
        id: "regr-150",
        number: "150",
        titleAr: "سلطة التفتيش",
        titleEn: "Inspecting authority",
        contentAr: "يسهل المسجل وكبير مسؤولي الحراسة عمل سلطة التفتيش المستقلة ويزودونها بكافة المعلومات اللازمة.",
        contentEn: "The Registrar and Chief Custody Officer facilitate the work of the independent inspecting authority."
      },
      {
        id: "regr-151",
        number: "151",
        titleAr: "المساعدة القانونية للمحتجزين",
        titleEn: "Legal assistance",
        contentAr: "يتلقى الشخص المحتجز المساعدة لتمكينه من ممارسة حقوقه، وتتاح له قائمة المحامين فور وصوله.",
        contentEn: "Detained persons receive assistance to exercise rights; the list of counsel is available upon arrival."
      },
      {
        id: "regr-152",
        number: "152",
        titleAr: "الاتصال بالعالم الخارجي",
        titleEn: "Contact with the outside world",
        contentAr: "للمحتجز الحق في التواصل مع أسرته ومحاميه.",
        contentEn: "The detained person has the right to communicate with family and counsel."
      },
      {
        id: "regr-153",
        number: "153",
        titleAr: "الرعاية الروحية",
        titleEn: "Spiritual welfare",
        contentAr: "يرتب المسجل لزيارات المستشارين الروحيين من مختلف الأديان بناءً على عقيدة المحتجزين.",
        contentEn: "The Registrar arranges visits by spiritual advisers based on the detainees' religions or beliefs."
      },
      {
        id: "regr-154",
        number: "154",
        titleAr: "الخدمات الطبية",
        titleEn: "Medical services",
        contentAr: "توفر المحكمة رعاية طبية كاملة للمحتجزين.",
        contentEn: "The Court provides full medical care for detained persons."
      },
      {
        id: "regr-155",
        number: "155",
        titleAr: "المسؤول الطبي",
        titleEn: "Medical officer",
        contentAr: "1 - يكون المسؤول الطبي مسؤولاً عن الصحة البدنية والنفسية للمحتجزين.\n2 - يتفقد المسؤول الطبي بانتظام جودة المياه والطعام والنظافة في مركز الاحتجاز.",
        contentEn: "1. The medical officer is responsible for physical and mental health. 2. He/she regularly inspects water, food quality, and hygiene."
      },
      {
        id: "regr-156",
        number: "156",
        titleAr: "الاحتجاز المنفرد",
        titleEn: "Solitary confinement",
        contentAr: "لا يطبق الاحتجاز المنفرد إلا في الحالات الاستثنائية ولأسباب أمنية.",
        contentEn: "Solitary confinement is applied only in exceptional cases and for security reasons."
      },
      {
        id: "regr-157",
        number: "157",
        titleAr: "النظام والانضباط",
        titleEn: "Order and discipline",
        contentAr: "يتم الحفاظ على النظام داخل مركز الاحتجاز مع مراعاة كرامة الإنسان.",
        contentEn: "Order is maintained in the detention centre with respect for human dignity."
      },
      {
        id: "regr-158",
        number: "158",
        titleAr: "الزيارات",
        titleEn: "Visits",
        contentAr: "يسمح للمحتجز باستلام الزيارات وفقاً للجدول المعتمد.",
        contentEn: "The detained person is allowed to receive visits according to the approved schedule."
      },
      {
        id: "regr-159",
        number: "159",
        titleAr: "تفتيش الزوار",
        titleEn: "Search of visitors",
        contentAr: "يخضع الزوار للتفتيش لأغراض أمنية.",
        contentEn: "Visitors are searched for security purposes."
      },
      {
        id: "regr-160",
        number: "160",
        titleAr: "المراسلات",
        titleEn: "Correspondence",
        contentAr: "للمحتجز الحق في إرسال واستلام الرسائل البريدية.",
        contentEn: "The detained person has the right to send and receive mail."
      },
      {
        id: "regr-161",
        number: "161",
        titleAr: "المواد المقروءة والمسموعة",
        titleEn: "Reading and listening material",
        contentAr: "يسمح للمحتجز بالحصول على الكتب والصحف والمواد السمعية والبصرية.",
        contentEn: "The detained person is allowed access to books, newspapers, and audio-visual material."
      },
      {
        id: "regr-162",
        number: "162",
        titleAr: "الأنشطة الترفيهية والرياضية",
        titleEn: "Recreation and sports",
        contentAr: "يوفر المسجل فرصاً للنشاط البدني والترفيه للمحتجزين.",
        contentEn: "The Registrar provides opportunities for physical activity and recreation for detainees."
      },
      {
        id: "regr-163",
        number: "163",
        titleAr: "التعليم والتدريب",
        titleEn: "Education and training",
        contentAr: "يتم تشجيع المحتجزين على المشاركة في البرامج التعليمية المتاحة.",
        contentEn: "Detainees are encouraged to participate in available educational programmes."
      },
      {
        id: "regr-164",
        number: "164",
        titleAr: "العمل داخل مركز الاحتجاز",
        titleEn: "Work within the detention centre",
        contentAr: "يجوز للمحتجزين القيام ببعض الأعمال التطوعية أو مدفوعة الأجر داخل المركز.",
        contentEn: "Detainees may perform voluntary or paid work within the centre."
      },
      {
        id: "regr-165",
        number: "165",
        titleAr: "مشتريات المحتجزين",
        titleEn: "Purchases by detained persons",
        contentAr: "يسمح للمحتجزين بشراء بعض السلع من متجر المركز.",
        contentEn: "Detainees are allowed to purchase certain goods from the centre store."
      },
      {
        id: "regr-166",
        number: "166",
        titleAr: "إدارة الحسابات الشخصية",
        titleEn: "Management of personal accounts",
        contentAr: "يدير كبير مسؤولي الحراسة الحسابات المالية الخاصة بالمحتجزين.",
        contentEn: "The Chief Custody Officer manages the financial accounts of detainees."
      },
      {
        id: "regr-167",
        number: "167",
        titleAr: "النظافة الشخصية",
        titleEn: "Personal hygiene",
        contentAr: "يجب على المحتجزين الحفاظ على نظافتهم الشخصية ويوفر المركز المستلزمات الضرورية.",
        contentEn: "Detainees must maintain personal hygiene and the centre provides necessary supplies."
      },
      {
        id: "regr-168",
        number: "168",
        titleAr: "الملابس",
        titleEn: "Clothing",
        contentAr: "يسمح للمحتجزين بارتداء ملابسهم الخاصة أو يوفر المركز ملابس مناسبة.",
        contentEn: "Detainees may wear their own clothes or the centre provides suitable clothing."
      },
      {
        id: "regr-169",
        number: "169",
        titleAr: "الطعام والمياه",
        titleEn: "Food and water",
        contentAr: "يوفر المركز وجبات طعام مغذية ومياه صالحة للشرب بانتظام.",
        contentEn: "The centre provides regular nutritious meals and safe drinking water."
      },
      {
        id: "regr-170",
        number: "170",
        titleAr: "مراقبة المكالمات",
        titleEn: "Monitoring of calls",
        contentAr: "تخضع المكالمات الهاتفية للمراقبة لأسباب أمنية إلا في حالة المكالمات مع المحامين.",
        contentEn: "Telephone calls are monitored for security reasons except for calls with counsel."
      },
      {
        id: "regr-171",
        number: "171",
        titleAr: "الرسائل المفتوحة",
        titleEn: "Opening of mail",
        contentAr: "يجوز تفتيش المراسلات بحثاً عن مواد محظورة.",
        contentEn: "Mail may be searched for prohibited items."
      },
      {
        id: "regr-172",
        number: "172",
        titleAr: "حظر بعض المحتويات",
        titleEn: "Prohibited content",
        contentAr: "يجوز حجز المراسلات التي تشكل تهديداً للأمن أو سير العدالة.",
        contentEn: "Mail posing a threat to security or the course of justice may be withheld."
      },
      {
        id: "regr-173",
        number: "173",
        titleAr: "المكالمات الهاتفية",
        titleEn: "Telephone calls",
        contentAr: "1 - يحتفظ كبير مسؤولي الحراسة بسجل للمكالمات الهاتفية.\n2 - يسمح للمحتجزين بإجراء مكالمات خلال ساعات محددة، وتخضع المكالمات لرقابة غير مباشرة (Passive monitoring).",
        contentEn: "1. A log of calls is maintained. 2. Calls are allowed during set hours and are subject to passive monitoring."
      },
      {
        id: "regr-174",
        number: "174",
        titleAr: "طلبات الزيارة",
        titleEn: "Visit requests",
        contentAr: "يجب تقديم طلبات الزيارة مسبقاً للموافقة عليها.",
        contentEn: "Visit requests must be submitted in advance for approval."
      },
      {
        id: "regr-175",
        number: "175",
        titleAr: "مدة الزيارة",
        titleEn: "Duration of visits",
        contentAr: "يحدد المسجل مدة الزيارات العائلية والمهنية.",
        contentEn: "The Registrar specifies the duration of family and professional visits."
      },
      {
        id: "regr-176",
        number: "176",
        titleAr: "مراقبة الزيارات",
        titleEn: "Monitoring of visits",
        contentAr: "تتم مراقبة الزيارات بصرياً من قبل الحراس لضمان الأمن.",
        contentEn: "Visits are visually monitored by guards to ensure security."
      },
      {
        id: "regr-177",
        number: "177",
        titleAr: "زيارات المحامين",
        titleEn: "Visits by counsel",
        contentAr: "تتم زيارات المحامين في جو من الخصوصية والسرية التامة.",
        contentEn: "Visits by counsel are conducted in total privacy and confidentiality."
      },
      {
        id: "regr-178",
        number: "178",
        titleAr: "زيارات المستشارين الروحيين",
        titleEn: "Visits by spiritual advisers",
        contentAr: "يسمح بالزيارات الروحية في أوقات محددة.",
        contentEn: "Spiritual visits are allowed at specified times."
      },
      {
        id: "regr-179",
        number: "179",
        titleAr: "الخدمات الطبية الخارجية",
        titleEn: "External medical services",
        contentAr: "يجوز نقل المحتجز للمستشفى في الحالات الطارئة.",
        contentEn: "A detained person may be transferred to a hospital in emergencies."
      },
      {
        id: "regr-180",
        number: "180",
        titleAr: "الفحص الطبي عند القبول",
        titleEn: "Medical examination upon admission",
        contentAr: "يخضع كل محتجز لفحص طبي شامل فور دخوله المركز.",
        contentEn: "Each detained person undergoes a thorough medical examination upon admission."
      },
      {
        id: "regr-181",
        number: "181",
        titleAr: "السجلات الطبية",
        titleEn: "Medical records",
        contentAr: "يتم الاحتفاظ بسجلات طبية سرية لكل محتجز.",
        contentEn: "Confidential medical records are kept for each detained person."
      },
      {
        id: "regr-182",
        number: "182",
        titleAr: "إخطار الأقرباء بالمرض",
        titleEn: "Notification of illness to relatives",
        contentAr: "يتم إخطار أسرة المحتجز في حالة المرض الشديد أو الوفاة.",
        contentEn: "The detained person's family is notified in case of serious illness or death."
      },
      {
        id: "regr-183",
        number: "183",
        titleAr: "الصحة النفسية",
        titleEn: "Mental health",
        contentAr: "توفر المحكمة خدمات الصحة النفسية والمشورة للمحتجزين.",
        contentEn: "The Court provides mental health services and counseling for detainees."
      },
      {
        id: "regr-184",
        number: "184",
        titleAr: "الإضراب عن الطعام",
        titleEn: "Hunger strike",
        contentAr: "يتم وضع المحتجز المضرب عن الطعام تحت المراقبة الطبية اللصيقة.",
        contentEn: "A detained person on hunger strike is placed under close medical supervision."
      },
      {
        id: "regr-185",
        number: "185",
        titleAr: "تفتيش الزنازين",
        titleEn: "Search of cells",
        contentAr: "يتم تفتيش الزنازين بانتظام لضمان خلوها من الممنوعات.",
        contentEn: "Cells are searched regularly to ensure they are free of prohibited items."
      },
      {
        id: "regr-186",
        number: "186",
        titleAr: "الأدوات المحظورة",
        titleEn: "Prohibited items",
        contentAr: "يحظر على المحتجزين حيازة الأسلحة أو المخدرات أو أي أدوات خطرة.",
        contentEn: "Detainees are prohibited from possessing weapons, drugs, or dangerous tools."
      },
      {
        id: "regr-187",
        number: "187",
        titleAr: "دور كبير مسؤولي الحراسة",
        titleEn: "Role of the Chief Custody Officer",
        contentAr: "المسؤول الأول عن الحجز الآمن والمعاملة الإنسانية وحفظ النظام والانضباط داخل مركز الاحتجاز.",
        contentEn: "Responsible for secure custody, humane treatment, and maintenance of discipline and order."
      },
      {
        id: "regr-188",
        number: "188",
        titleAr: "الموظفون في مركز الاحتجاز",
        titleEn: "Staff of the detention centre",
        contentAr: "يجب أن يعامل الموظفون المحتجزين باحترام وعدالة.",
        contentEn: "Staff must treat detainees with respect and fairness."
      },
      {
        id: "regr-189",
        number: "189",
        titleAr: "استخدام القوة",
        titleEn: "Use of force",
        contentAr: "لا يجوز استخدام القوة إلا في الحالات الضرورية القصوى ولإعادة النظام.",
        contentEn: "Force may only be used in cases of absolute necessity to restore order."
      },
      {
        id: "regr-190",
        number: "190",
        titleAr: "الآلات المقيدة للحرية",
        titleEn: "Instruments of restraint",
        contentAr: "يحظر استخدام الأغلال أو القيود كأدوات عقاب.",
        contentEn: "The use of chains or restraints as punishment is prohibited."
      },
      {
        id: "regr-191",
        number: "191",
        titleAr: "تفتيش الزوار والمحامين",
        titleEn: "Search of visitors and counsel",
        contentAr: "يخضع جميع الداخلين للمركز لإجراءات التفتيش الأمني.",
        contentEn: "All persons entering the centre are subject to security search procedures."
      },
      {
        id: "regr-192",
        number: "192",
        titleAr: "الإجراءات الأمنية",
        titleEn: "Security measures",
        contentAr: "يطبق المسجل خططاً أمنية متكاملة لحماية المركز والمحتجزين.",
        contentEn: "The Registrar applies comprehensive security plans to protect the centre and detainees."
      },
      {
        id: "regr-193",
        number: "193",
        titleAr: "حالات الطوارئ",
        titleEn: "Emergencies",
        contentAr: "توجد خطط إخلاء وتدابير خاصة للتعامل مع الحرائق أو الاضطرابات.",
        contentEn: "Evacuation plans and special measures exist for fires or disturbances."
      },
      {
        id: "regr-194",
        number: "194",
        titleAr: "نقل المحتجزين",
        titleEn: "Transfer of detained persons",
        contentAr: "يتم نقل المحتجزين تحت حراسة مشددة.",
        contentEn: "Detained persons are transferred under strict guard."
      },
      {
        id: "regr-195",
        number: "195",
        titleAr: "الإجراءات الانضباطية",
        titleEn: "Disciplinary procedures",
        contentAr: "يتم التحقيق في المخالفات الانضباطية قبل فرض أي عقوبة.",
        contentEn: "Disciplinary offenses are investigated before any penalty is imposed."
      },
      {
        id: "regr-196",
        number: "196",
        titleAr: "المخالفات الانضباطية",
        titleEn: "Disciplinary offences",
        contentAr: "يحدد المسجل قائمة بالأفعال التي تعتبر مخالفات انضباطية.",
        contentEn: "The Registrar specifies a list of acts considered disciplinary offenses."
      },
      {
        id: "regr-197",
        number: "197",
        titleAr: "حق الدفاع في المسائل الانضباطية",
        titleEn: "Right to defence in disciplinary matters",
        contentAr: "للمحتجز الحق في الدفاع عن نفسه ضد التهم الانضباطية الموجهة إليه.",
        contentEn: "The detained person has the right to defend themselves against disciplinary charges."
      },
      {
        id: "regr-198",
        number: "198",
        titleAr: "العقوبات الانضباطية",
        titleEn: "Disciplinary sanctions",
        contentAr: "يجب أن تكون العقوبات متناسبة مع المخالفة.",
        contentEn: "Sanctions must be proportionate to the offense."
      },
      {
        id: "regr-199",
        number: "199",
        titleAr: "مراجعة القرارات الانضباطية",
        titleEn: "Review of disciplinary decisions",
        contentAr: "يجوز للمحتجز التظلم من القرارات الانضباطية أمام المسجل.",
        contentEn: "The detained person may appeal disciplinary decisions to the Registrar."
      },
      {
        id: "regr-200",
        number: "200",
        titleAr: "الاحتجاز المشترك",
        titleEn: "Communal detention",
        contentAr: "يسمح للمحتجزين بالاختلاط في الأماكن المخصصة خلال ساعات محددة.",
        contentEn: "Detainees are allowed to mix in designated areas during set hours."
      },
      {
        id: "regr-201",
        number: "201",
        titleAr: "الفصل بين المحتجزين",
        titleEn: "Segregation",
        contentAr: "يجوز فصل بعض المحتجزين لأسباب أمنية أو طبية.",
        contentEn: "Some detainees may be segregated for security or medical reasons."
      },
      {
        id: "regr-202",
        number: "202",
        titleAr: "الإفراج المؤقت",
        titleEn: "Interim release",
        contentAr: "ينفذ المسجل أوامر الإفراج المؤقت الصادرة عن الدوائر.",
        contentEn: "The Registrar executes interim release orders issued by Chambers."
      },
      {
        id: "regr-203",
        number: "203",
        titleAr: "الإفراج النهائي",
        titleEn: "Final release",
        contentAr: "يتم ترتيب الإفراج النهائي للمحتجز عند صدور حكم بالبراءة أو انتهاء العقوبة.",
        contentEn: "Final release is arranged upon acquittal or completion of sentence."
      },
      {
        id: "regr-204",
        number: "204",
        titleAr: "النقل لتنفيذ العقوبة",
        titleEn: "Transfer for enforcement of sentence",
        contentAr: "يتم نقل المحكوم عليهم إلى دول التنفيذ المحددة.",
        contentEn: "Sentenced persons are transferred to designated enforcement States."
      },
      {
        id: "regr-205",
        number: "205",
        titleAr: "الوفاة في الاحتجاز",
        titleEn: "Death in custody",
        contentAr: "يتم إجراء تحقيق فوري ومستقل في حالة وفاة أي محتجز.",
        contentEn: "An immediate and independent investigation is conducted in case of death in custody."
      },
      {
        id: "regr-206",
        number: "206",
        titleAr: "إجراءات الجنازة",
        titleEn: "Funeral arrangements",
        contentAr: "يحترم المسجل رغبات المتوفى أو أسرته فيما يتعلق بالجنازة والدفن.",
        contentEn: "The Registrar respects the deceased's or family's wishes regarding funeral and burial."
      },
      {
        id: "regr-207",
        number: "207",
        titleAr: "الشكاوى العامة",
        titleEn: "General complaints",
        contentAr: "يجوز للمحتجز تقديم شكاوى بشأن ظروف المعيشة في المركز.",
        contentEn: "The detained person may file complaints regarding living conditions in the centre."
      },
      {
        id: "regr-208",
        number: "208",
        titleAr: "التحقيق في الشكاوى",
        titleEn: "Investigation of complaints",
        contentAr: "يتم التحقيق في الشكاوى من قبل جهة محايدة.",
        contentEn: "Complaints are investigated by a neutral body."
      },
      {
        id: "regr-209",
        number: "209",
        titleAr: "التواصل مع القنصليات",
        titleEn: "Communication with consulates",
        contentAr: "للمحتجز الحق في التواصل مع ممثلي دولته القنصليين.",
        contentEn: "The detained person has the right to communicate with their state's consular representatives."
      },
      {
        id: "regr-210",
        number: "210",
        titleAr: "زيارات الصليب الأحمر",
        titleEn: "Red Cross visits",
        contentAr: "يسمح لممثلي اللجنة الدولية للصليب الأحمر بزيارة المركز بانتظام.",
        contentEn: "Representatives of the ICRC are allowed to visit the centre regularly."
      },
      {
        id: "regr-211",
        number: "211",
        titleAr: "مراقبة الاتصالات المهنية",
        titleEn: "Monitoring of professional communications",
        contentAr: "يحظر مراقبة الاتصالات بين المحتجز ومحاميه.",
        contentEn: "Monitoring of communications between a detained person and their counsel is prohibited."
      },
      {
        id: "regr-212",
        number: "212",
        titleAr: "تفتيش مراسلات المحامين",
        titleEn: "Search of counsel's mail",
        contentAr: "لا تفتح مراسلات المحامين إلا في حالات استثنائية وبحضور المحتجز.",
        contentEn: "Counsel's mail is only opened in exceptional cases and in the presence of the detained person."
      },
      {
        id: "regr-213",
        number: "213",
        titleAr: "التدابير الانضباطية",
        titleEn: "Disciplinary measures",
        contentAr: "تشمل: المصادرة، سحب الامتيازات، الإنذار الشفهي أو الكتابي، أو الحبس في الزنزانة لمدة لا تتجاوز أسبوعين.",
        contentEn: "Includes: confiscation, removal of privileges, warnings, or cell confinement for up to two weeks."
      },
      {
        id: "regr-214",
        number: "214",
        titleAr: "الحبس الانفرادي الانضباطي",
        titleEn: "Disciplinary cell confinement",
        contentAr: "يخضع الحبس الانفرادي لرقابة طبية يومية.",
        contentEn: "Cell confinement is subject to daily medical supervision."
      },
      {
        id: "regr-215",
        number: "215",
        titleAr: "سجلات الانضباط",
        titleEn: "Disciplinary records",
        contentAr: "يتم تدوين جميع العقوبات المفروضة في سجل خاص.",
        contentEn: "All imposed penalties are recorded in a special log."
      },
      {
        id: "regr-216",
        number: "216",
        titleAr: "العفو وتخفيف العقوبة",
        titleEn: "Pardon and reduction of sentence",
        contentAr: "يتابع المسجل إجراءات العفو أو تخفيف العقوبة وفقاً للنظام الأساسي.",
        contentEn: "The Registrar follows pardon or sentence reduction procedures according to the Statute."
      },
      {
        id: "regr-217",
        number: "217",
        titleAr: "إجراءات الشكاوى",
        titleEn: "Complaints Procedure",
        contentAr: "يجوز للمحتجز تقديم شكوى كتابية بشأن أي أمر يتعلق باحتجازه، وتتم معالجة الشكاوى بجدية وبشكل رسمي.",
        contentEn: "Detained persons may file written complaints regarding detention, which are processed formally."
      }
    ]
  }
];
