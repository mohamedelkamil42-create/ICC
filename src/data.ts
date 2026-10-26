import { DrawerItem } from './types';
import glossaryDataRaw from './glossaryData.json';

import { romeStatuteParts } from './romeStatuteData';
import { rulesOfProcedureParts } from './rulesOfProcedureData';

const glossaryData = glossaryDataRaw as any[];

export const libraryDataAr: DrawerItem[] = [
  {
    id: '1',
    title: 'نبذة شاملة عن المحكمة',
    type: 'content',
    content: 'المحكمة الجنائية الدولية هي هيئة قضائية دولية دائمة ومستقلة، أُنشئت بموجب نظام روما الأساسي المعتمد في 17 يوليو 1998 والذي دخل حيز النفاذ في 1 يوليو 2002. تتمتع المحكمة بشخصية قانونية دولية ولها السلطة لممارسة اختصاصها على الأشخاص إزاء أشد الجرائم خطورة موضع الاهتمام الدولي، وهي: جريمة الإبادة الجماعية، والجرائم ضد الإنسانية، وجرائم الحرب، وجريمة العدوان.\n\nتتميز المحكمة بكونها "مكملة" للولايات القضائية الجنائية الوطنية، مما يعني أنها لا تتدخل إلا إذا كانت الدول غير راغبة أو غير قادرة حقاً على الاضطلاع بالتحقيق أو المقاضاة. يقع مقر المحكمة في لاهاي بهولندا، وترتبط بعلاقة مع منظمة الأمم المتحدة بموجب اتفاق تعتمده جمعية الدول الأطراف.\n\nتقوم المحكمة على مبادئ قانونية صارمة، أهمها: لا جريمة ولا عقوبة إلا بنص، وعدم رجعية الأثر على الأشخاص، والمسؤولية الجنائية الفردية التي لا تعفي أية صفة رسمية — بما في ذلك رؤساء الدول أو الحكومات — من المساءلة الجنائية. وتهدف المحكمة في جوهرها إلى وضع حد لإفلات مرتكبي هذه الجرائم من العقاب والإسهام بالتالي في منعها وتحقيق العدالة الدولية الدائمة.'
  },
  {
    id: '2',
    title: 'الوثائق القانونية الأساسية',
    type: 'folder',
    children: [
      { id: '2-1', title: 'نظام روما الأساسي للمحكمة الجنائية الدولية (النظام الأساسي)', type: 'statute' },
      { id: '2-2', title: 'قواعد الإجراءات والإثبات', type: 'statute' },
      { id: '2-3', title: 'أركان الجرائم', type: 'statute' },
      { id: '2-4', title: 'لوائح المحكمة', type: 'statute' },
      { id: '2-5', title: 'لوائح قلم المحكمة', type: 'statute' },
      { id: '2-6', title: 'لائحة مكتب المدعي العام', type: 'statute' },
      { id: '2-7', title: 'مدونة قواعد السلوك المهني للمحامين', type: 'content', content: 'اعتمدتها جمعية الدول الأطراف بموجب القرار ICC-ASP/4/Res.1 في 2 ديسمبر 2005 استناداً إلى القاعدة 8 من قواعد الإجراءات والإثبات. وتحدد هذه المدونة المعايير الأخلاقية والمهنية الملزمة للمحامين الممارسين أمام المحكمة، بما يشمل مبادئ الاستقلالية والنزاهة، والسرية المهنية، وتنظيم العلاقة بالموكلين، وواجبات المحامي تجاه المحكمة، والنظام التأديبي الخاص بالمخالفات المهنية.' }
    ]
  },
  {
    id: '3',
    title: 'سياسات المساعدة والدفاع',
    type: 'folder',
    children: [
      { id: '3-1', title: 'سياسة المساعدة القانونية', type: 'content', content: 'تضمن توفير المساعدة القانونية الفعالة للأشخاص الذين لا يملكون الموارد الكافية لتوكيل محامٍ.' }
    ]
  },
  {
    id: '4',
    title: 'الجرائم الداخلة في اختصاص المحكمة',
    type: 'folder',
    children: [
      { id: '4-1', title: 'جريمة الإبادة الجماعية', type: 'content', content: 'أي فعل من الأفعال المحددة المرتكبة بقصد إهلاك جماعة قومية أو إثنية أو عرقية أو دينية، بصفتها هذه، إهلاكاً كلياً أو جزئياً (المادة 6 من نظام روما الأساسي).' },
      { id: '4-2', title: 'الجرائم ضد الإنسانية', type: 'content', content: 'أي فعل من الأفعال المحددة المرتكبة في إطار هجوم واسع النطاق أو منهجي موجه ضد أية مجموعة من السكان المدنيين، وعن علم بالهجوم (المادة 7 من نظام روما الأساسي).' },
      { id: '4-3', title: 'جرائم الحرب', type: 'content', content: 'الانتهاكات الجسيمة لاتفاقيات جنيف المؤرخة 12 أغسطس 1949 وغيرها من الانتهاكات الخطيرة للقوانين والأعراف السارية على المنازعات المسلحة الدولية وغير ذات الطابع الدولي (المادة 8 من نظام روما الأساسي).' },
      { id: '4-4', title: 'جريمة العدوان', type: 'content', content: 'قيام شخص في وضع يتيح له فعلياً التحكم في العمل السياسي أو العسكري للدولة أو توجيهه، بالتخطيط لعمل عدواني أو إعداده أو بدئه أو تنفيذه، بما يشكل بحكم طابعه وخطورته ونطاقه انتهاكاً واضحاً لميثاق الأمم المتحدة (المادة 8 مكرراً من نظام روما الأساسي).' }
    ]
  },
  {
    id: '5',
    title: 'قواعد القانون الدولي العام والتكميلي',
    type: 'folder',
    children: [
      { id: '5-1', title: 'القانون الدولي الإنساني', type: 'content', content: 'مجموعة القواعد التي تسعى، لأسباب إنسانية، إلى الحد من آثار النزاعات المسلحة.' },
      { id: '5-2', title: 'القانون الدولي لحقوق الإنسان', type: 'content', content: 'القواعد الدولية التي تهدف إلى تعزيز وحماية حقوق الإنسان والحريات الأساسية.' },
      { id: '5-3', title: 'المبادئ العامة للقانون', type: 'content', content: 'المبادئ القانونية الأساسية المستخلصة من القوانين الوطنية للنظم القانونية في العالم وفقاً للمادة 21 من نظام روما الأساسي.' }
    ]
  },
  {
    id: '6',
    title: 'السوابق القضائية والاجتهادات',
    type: 'folder',
    children: [
      { id: '6-1', title: 'أحكام وسوابق المحكمة الجنائية الدولية', type: 'content', content: 'القرارات والأحكام الصادرة عن دوائر المحكمة الجنائية الدولية في القضايا والحالات المختلفة.' },
      { id: '6-2', title: 'سوابق المحاكم الجنائية الدولية الخاصة', type: 'content', content: 'الاجتهادات القضائية الصادرة عن المحاكم الجنائية الدولية المؤقتة (مثل المحكمة الجنائية الدولية ليوغوسلافيا السابقة والمحكمة الجنائية الدولية لرواندا).' }
    ]
  },
  {
    id: '7',
    title: 'شروط التسجيل كمحامٍ أمام المحكمة',
    type: 'folder',
    children: [
      { id: '7-1', title: 'متطلبات الكفاءة المهنية', type: 'content', content: 'كفاءة مشهود بها في القانون الدولي أو القانون الجنائي والإجراءات الجنائية، وخبرة لازمة في الإجراءات الجنائية لا تقل عن 10 سنوات للمحامي الرئيسي و8 سنوات للمحامي المساعد (وفقاً للقاعدة 22 والمادة 67 من لوائح المحكمة)، والتمتع بسمعة حسنة وعدم الإدانة بجريمة جنائية أو تأديبية خطيرة.' },
      { id: '7-2', title: 'إتقان لغات العمل', type: 'content', content: 'إجادة تامة لإحدى لغتي العمل بالمحكمة (الإنجليزية أو الفرنسية) قراءةً وكتابةً وتحدثاً.' },
      { id: '7-3', title: 'إجراءات تقديم الطلب', type: 'content', content: 'تقديم النماذج الرسمية، وشهادات القيد في النقابة، وشهادة الخلو من السوابق، وخطابات التوصية.' }
    ]
  },
  {
    id: '8',
    title: 'المراجع والمصادر القانونية',
    type: 'folder',
    children: [
      { 
        id: '8-1', 
        title: 'الموقع الرسمي للمحكمة الجنائية الدولية', 
        type: 'content', 
        content: 'الموقع الرسمي هو المصدر الرئيسي لكافة المعلومات المتعلقة بالقضايا، والوثائق القانونية، والبيانات الصحفية، والمنشورات الرسمية للمحكمة.\n\nرابط الموقع: https://www.icc-cpi.int/' 
      },
      { 
        id: '8-2', 
        title: 'مصادر قانونية إضافية', 
        type: 'content', 
        content: 'قائمة شاملة بأهم المراجع القانونية والكتب والمقالات التي تدعم الباحثين والمحامين في عملهم أمام المحكمة.' 
      }
    ]
  },
  {
    id: '9',
    title: 'قاموس المصطلحات (1000+ مصطلح)',
    type: 'folder',
    children: glossaryData.map((section, idx) => ({
      id: `glossary-${idx}`,
      title: section.titleAr,
      type: 'glossary',
      terms: section.terms
    }))
  }
];

export const libraryDataEn: DrawerItem[] = [
  {
    id: '1',
    title: 'Comprehensive Overview',
    type: 'content',
    content: 'The International Criminal Court (ICC) is a permanent and independent international judicial institution established by the Rome Statute, adopted on 17 July 1998 and entered into force on 1 July 2002. It has international legal personality and the power to exercise jurisdiction over persons for the most serious crimes of international concern: genocide, crimes against humanity, war crimes, and the crime of aggression.\n\nA cornerstone of the Court is the principle of "complementarity," meaning it acts only when national judicial systems are unwilling or unable genuinely to carry out investigations or prosecutions. Headquartered in The Hague, Netherlands, the ICC maintains a relationship with the United Nations system through an agreement approved by the Assembly of States Parties.\n\nThe Court operates based on strict legal principles, including "nullum crimen sine lege" (no crime without law), "nulla poena sine lege" (no penalty without law), non-retroactivity ratione personae, and individual criminal responsibility, which applies equally to all persons without any distinction based on official capacity, including Heads of State or Government. Its ultimate goal is to put an end to impunity for the perpetrators of these grave crimes, thereby contributing to their prevention and ensuring lasting international justice.'
  },
  {
    id: '2',
    title: 'Core Legal Documents',
    type: 'folder',
    children: [
      { id: '2-1', title: 'Rome Statute of the International Criminal Court (The Statute)', type: 'statute' },
      { id: '2-2', title: 'Rules of Procedure and Evidence', type: 'statute' },
      { id: '2-3', title: 'Elements of Crimes', type: 'statute' },
      { id: '2-4', title: 'Regulations of the Court', type: 'statute' },
      { id: '2-5', title: 'Regulations of the Registry', type: 'statute' },
      { id: '2-6', title: 'Regulations of the Office of the Prosecutor', type: 'statute' },
      { id: '2-7', title: 'Code of Professional Conduct for Counsel', type: 'content', content: 'Adopted by the Assembly of States Parties in Resolution ICC-ASP/4/Res.1 on 2 December 2005 pursuant to Rule 8 of the Rules of Procedure and Evidence. It establishes binding ethical and professional standards for counsel practicing before the Court, covering independence, integrity, professional secrecy, client relations, duties towards the Court, and the disciplinary regime.' }
    ]
  },
  {
    id: '3',
    title: 'Assistance and Defense Policies',
    type: 'folder',
    children: [
      { id: '3-1', title: 'Legal Assistance Policy', type: 'content', content: 'Ensures effective legal assistance for persons lacking sufficient means.' }
    ]
  },
  {
    id: '4',
    title: 'Crimes within Court Jurisdiction',
    type: 'folder',
    children: [
      { id: '4-1', title: 'Crime of Genocide', type: 'content', content: 'Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such (Article 6 of the Rome Statute).' },
      { id: '4-2', title: 'Crimes Against Humanity', type: 'content', content: 'Acts committed as part of a widespread or systematic attack directed against any civilian population, with knowledge of the attack (Article 7 of the Rome Statute).' },
      { id: '4-3', title: 'War Crimes', type: 'content', content: 'Grave breaches of the Geneva Conventions of 12 August 1949 and other serious violations of the laws and customs applicable in international and non-international armed conflicts (Article 8 of the Rome Statute).' },
      { id: '4-4', title: 'Crime of Aggression', type: 'content', content: 'The planning, preparation, initiation or execution, by a person in a position effectively to exercise control over or to direct the political or military action of a State, of an act of aggression which, by its character, gravity and scale, constitutes a manifest violation of the Charter of the United Nations (Article 8 bis of the Rome Statute).' }
    ]
  },
  {
    id: '5',
    title: 'Public International and Complementary Law',
    type: 'folder',
    children: [
      { id: '5-1', title: 'International Humanitarian Law', type: 'content', content: 'A set of rules which seek, for humanitarian reasons, to limit the effects of armed conflict.' },
      { id: '5-2', title: 'International Human Rights Law', type: 'content', content: 'International rules that aim to promote and protect human rights and fundamental freedoms.' },
      { id: '5-3', title: 'General Principles of Law', type: 'content', content: 'Fundamental legal principles derived from national laws of legal systems of the world pursuant to Article 21 of the Rome Statute.' }
    ]
  },
  {
    id: '6',
    title: 'Case Law and Jurisprudence',
    type: 'folder',
    children: [
      { id: '6-1', title: 'ICC Judgments and Jurisprudence', type: 'content', content: 'Decisions and judgments issued by the Chambers of the International Criminal Court in various cases and situations.' },
      { id: '6-2', title: 'Ad Hoc Tribunals Jurisprudence', type: 'content', content: 'Legal precedents issued by ad hoc international criminal tribunals (such as the ICTY and ICTR).' }
    ]
  },
  {
    id: '7',
    title: 'ICC Counsel Registration',
    type: 'folder',
    children: [
      { id: '7-1', title: 'Professional Competence Requirements', type: 'content', content: 'Established competence in international or criminal law and procedure, relevant experience in criminal proceedings of at least 10 years for lead counsel and 8 years for associate counsel (pursuant to Rule 22 and Regulation 67 of the Regulations of the Court), and no conviction for a serious criminal or disciplinary offence.' },
      { id: '7-2', title: 'Working Languages Proficiency', type: 'content', content: 'Excellent knowledge of and fluency in at least one of the working languages of the Court (English or French) in reading, writing, and speaking.' },
      { id: '7-3', title: 'Application Procedures', type: 'content', content: 'Submission of official forms, bar certificates, criminal record checks, and recommendation letters.' }
    ]
  },
  {
    id: '8',
    title: 'Legal References and Sources',
    type: 'folder',
    children: [
      { 
        id: '8-1', 
        title: 'Official ICC Website', 
        type: 'content', 
        content: 'The official website is the primary source for all information regarding cases, legal documents, press releases, and official publications of the Court.\n\nWebsite link: https://www.icc-cpi.int/' 
      },
      { 
        id: '8-2', 
        title: 'Additional Legal Resources', 
        type: 'content', 
        content: 'A comprehensive list of legal references, books, and articles supporting researchers and counsel in their work before the Court.' 
      }
    ]
  },
  {
    id: '9',
    title: 'Legal Glossary (1000+ Terms)',
    type: 'folder',
    children: glossaryData.map((section, idx) => ({
      id: `glossary-${idx}`,
      title: section.titleEn,
      type: 'glossary',
      terms: section.terms
    }))
  }
];
