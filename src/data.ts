import { DrawerItem } from './types';
import glossaryDataRaw from './glossaryData.json';

const glossaryData = glossaryDataRaw as any[];

export const libraryDataAr: DrawerItem[] = [
  {
    id: '1',
    title: 'نبذة شاملة عن المحكمة',
    type: 'content',
    content: 'المحكمة الجنائية الدولية هي هيئة دولية دائمة ومستقلة، أُنشئت بموجب نظام روما الأساسي المعتمد في 17 يوليو 1998. تتمتع المحكمة بشخصية قانونية دولية ولها السلطة لممارسة اختصاصها على الأشخاص إزاء أشد الجرائم خطورة موضع الاهتمام الدولي، وهي: الإبادة الجماعية، والجرائم ضد الإنسانية، وجرائم الحرب، وجريمة العدوان.\n\nتتميز المحكمة بكونها "مكملة" للولايات القضائية الجنائية الوطنية، مما يعني أنها لا تتدخل إلا إذا كانت الدول غير راغبة أو غير قادرة حقاً على التحقيق أو المقاضاة. يقع مقر المحكمة في لاهاي بهولندا، وترتبط بعلاقة وثيقة مع منظمة الأمم المتحدة.\n\nتقوم المحكمة على مبادئ قانونية صارمة، أهمها: لا جريمة ولا عقوبة إلا بنص، وعدم رجعية الأثر على الأشخاص، والمسؤولية الجنائية الفردية التي لا تعفي حتى رؤساء الدول من المساءلة. تهدف المحكمة في جوهرها إلى وضع حد لإفلات مرتكبي هذه الجرائم من العقاب والمساهمة بالتالي في منعها وتحقيق العدالة الدولية الدائمة.'
  },
  {
    id: '2',
    title: 'الوثائق الأساسية للمحكمة الجنائية الدولية',
    type: 'folder',
    children: [
      { id: '2-1', title: 'نظام روما الأساسي', type: 'statute' },
      { id: '2-2', title: 'القواعد الاجرائية وقواعد الإثبات', type: 'content', content: 'أداة لتطبيق نظام روما الأساسي، تحدد القواعد التفصيلية للإجراءات أمام المحكمة.' },
      { id: '2-3', title: 'أركان الجريمة', type: 'content', content: 'تساعد المحكمة في تفسير وتطبيق المواد المتعلقة بالجرائم التي تدخل في اختصاصها.' },
      { id: '2-4', title: 'لوائح المحكمة', type: 'content', content: 'تنظم المسائل الروتينية لعمل المحكمة وتكمل نظام روما والقواعد الإجرائية.' }
    ]
  },
  {
    id: '3',
    title: 'قواعد السلوك والمهنة والدفاع',
    type: 'folder',
    children: [
      { id: '3-1', title: 'مدونة السلوك المهني للمحامي', type: 'content', content: 'تحدد معايير السلوك والأخلاقيات التي يجب أن يلتزم بها المحامون أمام المحكمة.' },
      { id: '3-2', title: 'سياسة المساعدة القانونية', type: 'content', content: 'تضمن توفير المساعدة القانونية الفعالة للأشخاص الذين لا يملكون الموارد الكافية لتوكيل محامٍ.' }
    ]
  },
  {
    id: '4',
    title: 'الجرائم الداخلة في اختصاص المحكمة',
    type: 'folder',
    children: [
      { id: '4-1', title: 'جريمة الإبادة الجماعية', type: 'content', content: 'أي فعل من الأفعال المحددة المرتكبة بقصد إهلاك جماعة قومية أو إثنية أو عرقية أو دينية إهلاكاً كلياً أو جزئياً.' },
      { id: '4-2', title: 'الجرائم ضد الإنسانية', type: 'content', content: 'أي فعل من الأفعال المحددة المرتكبة في إطار هجوم واسع النطاق أو منهجي موجه ضد أية مجموعة من السكان المدنيين.' },
      { id: '4-3', title: 'جرائم الحرب', type: 'content', content: 'الانتهاكات الجسيمة لاتفاقيات جنيف وغيرها من الانتهاكات الخطيرة للقوانين والأعراف السارية على المنازعات المسلحة.' },
      { id: '4-4', title: 'جريمة العدوان', type: 'content', content: 'قيام شخص في وضع يتيح له التحكم في العمل السياسي أو العسكري للدولة أو توجيهه، بالتخطيط لعمل عدواني أو إعداده أو بدئه أو تنفيذه.' }
    ]
  },
  {
    id: '5',
    title: 'قواعد القانون الدولي العام والتكميلي',
    type: 'folder',
    children: [
      { id: '5-1', title: 'القانون الدولي الإنساني', type: 'content', content: 'مجموعة القواعد التي تسعى، لأسباب إنسانية، إلى الحد من آثار النزاعات المسلحة.' },
      { id: '5-2', title: 'القانون الدولي لحقوق الإنسان', type: 'content', content: 'القواعد الدولية التي تهدف إلى تعزيز وحماية حقوق الإنسان والحريات الأساسية.' },
      { id: '5-3', title: 'المباديء العامة للقانون', type: 'content', content: 'المبادئ القانونية الأساسية المعترف بها في النظم القانونية الوطنية حول العالم.' }
    ]
  },
  {
    id: '6',
    title: 'السوابق القضائية والاجتهادات',
    type: 'folder',
    children: [
      { id: '6-1', title: 'احكام وسوابق المحكمة الجنائية الدولية', type: 'content', content: 'القرارات والأحكام الصادرة عن المحكمة الجنائية الدولية في القضايا والمواقف المختلفة.' },
      { id: '6-2', title: 'سوابق المحكمة الجنائية الدولية الخاصة', type: 'content', content: 'الاجتهادات القضائية الصادرة عن المحاكم الجنائية الدولية المؤقتة (مثل محكمة يوغوسلافيا ورواندا).' }
    ]
  },
  {
    id: '7',
    title: 'شروط التسجيل كمحامي المحكمة',
    type: 'folder',
    children: [
      { id: '7-1', title: 'متطلبات الكفاءة المهنية', type: 'content', content: 'إثبات خبرة لا تقل عن 10 سنوات في القانون الجنائي أو الدولي، والتمتع بسيرة مهنية ممتازة.' },
      { id: '7-2', title: 'إتقان لغات العمل', type: 'content', content: 'إجادة تامة لإحدى لغات العمل بالمحكمة (الإنجليزية أو الفرنسية) قراءة وكتابة ونطقاً.' },
      { id: '7-3', title: 'إجراءات تقديم الطلب', type: 'content', content: 'تقديم النماذج الرسمية، شهادات القيد في النقابة، شهادة خلو من السوابق، وخطابات التوصية.' }
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
    content: 'The International Criminal Court (ICC) is a permanent and independent international institution established by the Rome Statute, adopted on 17 July 1998. It has international legal personality and the power to exercise jurisdiction over persons for the most serious crimes of international concern: genocide, crimes against humanity, war crimes, and the crime of aggression.\n\nA cornerstone of the Court is the principle of "complementarity," meaning it acts only as a court of last resort when national systems are unwilling or unable genuinely to carry out investigations or prosecutions. Headquartered in The Hague, Netherlands, the ICC maintains a close relationship with the United Nations system.\n\nThe Court operates based on strict legal principles, including "nullum crimen sine lege" (no crime without law), non-retroactivity, and individual criminal responsibility, which applies equally to all persons regardless of official capacity, including Heads of State. Its ultimate goal is to put an end to impunity for the perpetrators of these grave crimes, thereby contributing to their prevention and ensuring lasting international justice.'
  },
  {
    id: '2',
    title: 'Core Legal Texts',
    type: 'folder',
    children: [
      { id: '2-1', title: 'Rome Statute', type: 'statute' },
      { id: '2-2', title: 'Rules of Procedure and Evidence', type: 'content', content: 'An instrument for the application of the Rome Statute, setting out detailed rules for proceedings.' },
      { id: '2-3', title: 'Elements of Crimes', type: 'content', content: 'Assists the Court in interpretation and application of articles pertaining to crimes.' },
      { id: '2-4', title: 'Regulations of the Court', type: 'content', content: 'Regulates routine matters for the functioning of the Court.' }
    ]
  },
  {
    id: '3',
    title: 'Code of Conduct & Defense',
    type: 'folder',
    children: [
      { id: '3-1', title: 'Code of Professional Conduct', type: 'content', content: 'Sets standards of conduct and ethics for counsel practicing before the Court.' },
      { id: '3-2', title: 'Legal Assistance Policy', type: 'content', content: 'Ensures effective legal assistance for persons lacking sufficient means.' }
    ]
  },
  {
    id: '4',
    title: 'Crimes within Court Jurisdiction',
    type: 'folder',
    children: [
      { id: '4-1', title: 'Crime of Genocide', type: 'content', content: 'Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group.' },
      { id: '4-2', title: 'Crimes Against Humanity', type: 'content', content: 'Acts committed as part of a widespread or systematic attack directed against any civilian population.' },
      { id: '4-3', title: 'War Crimes', type: 'content', content: 'Grave breaches of the Geneva Conventions and other serious violations of the laws and customs applicable in armed conflict.' },
      { id: '4-4', title: 'Crime of Aggression', type: 'content', content: 'The use of armed force by a State against the sovereignty, territorial integrity or political independence of another State.' }
    ]
  },
  {
    id: '5',
    title: 'Public International and Complementary Law',
    type: 'folder',
    children: [
      { id: '5-1', title: 'International Humanitarian Law', type: 'content', content: 'A set of rules which seek, for humanitarian reasons, to limit the effects of armed conflict.' },
      { id: '5-2', title: 'International Human Rights Law', type: 'content', content: 'International rules that aim to promote and protect human rights and fundamental freedoms.' },
      { id: '5-3', title: 'General Principles of Law', type: 'content', content: 'Fundamental legal principles recognized across national legal systems worldwide.' }
    ]
  },
  {
    id: '6',
    title: 'Case Law and Jurisprudence',
    type: 'folder',
    children: [
      { id: '6-1', title: 'ICC Judgments and Jurisprudence', type: 'content', content: 'Decisions and judgments issued by the International Criminal Court in various cases and situations.' },
      { id: '6-2', title: 'Ad Hoc Tribunals Jurisprudence', type: 'content', content: 'Legal precedents issued by temporary international criminal tribunals (e.g., ICTY, ICTR).' }
    ]
  },
  {
    id: '7',
    title: 'ICC Counsel Registration',
    type: 'folder',
    children: [
      { id: '7-1', title: 'Professional Competence Requirements', type: 'content', content: 'Evidence of at least 10 years of experience in criminal or international law, with an excellent professional record.' },
      { id: '7-2', title: 'Working Languages Proficiency', type: 'content', content: 'Full proficiency in one of the Court’s working languages (English or French) in reading, writing, and speaking.' },
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
