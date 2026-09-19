import { DrawerItem } from './types';
import glossaryDataRaw from './glossaryData.json';

// Type assertion for the imported JSON
const glossaryData = glossaryDataRaw as any[];

export const libraryDataAr: DrawerItem[] = [
  {
    id: '1',
    title: 'نبذة عن المحكمة',
    type: 'content',
    content: 'المحكمة الجنائية الدولية (ICC) هي أول محكمة جنائية دولية دائمة قائمة على معاهدة. تأسست للمساعدة في إنهاء الإفلات من العقاب على أخطر الجرائم التي تثير قلق المجتمع الدولي، وهي الإبادة الجماعية والجرائم ضد الإنسانية وجرائم الحرب وجريمة العدوان.'
  },
  {
    id: '2',
    title: 'الوثائق الأساسية للمحكمة الجنائية الدولية',
    type: 'folder',
    children: [
      { id: '2-1', title: 'نظام روما الأساسي', type: 'content', content: 'نظام روما الأساسي هو المعاهدة المؤسسة للمحكمة الجنائية الدولية، اعتمد في 17 يوليو 1998.' },
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
    title: 'قواعد القانون الدولي العام والتكميلي',
    type: 'folder',
    children: [
      { id: '4-1', title: 'القانون الدولي الإنساني', type: 'content', content: 'مجموعة القواعد التي تسعى، لأسباب إنسانية، إلى الحد من آثار النزاعات المسلحة.' },
      { id: '4-2', title: 'القانون الدولي لحقوق الإنسان', type: 'content', content: 'القواعد الدولية التي تهدف إلى تعزيز وحماية حقوق الإنسان والحريات الأساسية.' },
      { id: '4-3', title: 'المباديء العامة للقانون', type: 'content', content: 'المبادئ القانونية الأساسية المعترف بها في النظم القانونية الوطنية حول العالم.' }
    ]
  },
  {
    id: '5',
    title: 'السوابق القضائية',
    type: 'folder',
    children: [
      { id: '5-1', title: 'احكام وسوابق المحكمة الجنائية الدولية', type: 'content', content: 'القرارات والأحكام الصادرة عن المحكمة الجنائية الدولية في القضايا السابقة.' },
      { id: '5-2', title: 'سوابق المحكمة الجنائية الدولية الخاصة', type: 'content', content: 'السوابق القضائية الصادرة عن المحاكم الجنائية الدولية الخاصة.' }
    ]
  },
  {
    id: '6',
    title: 'شروط التسجيل كمحامي المحكمة الجنائية الدولية',
    type: 'content',
    content: 'تتضمن الشروط الكفاءة العالية في القانون الجنائي أو الدولي، وإجادة إحدى لغات العمل في المحكمة، والتمتع بسلوك مهني لا شائبة فيه.'
  },
  {
    id: '7',
    title: 'المراجع',
    type: 'content',
    content: 'قائمة بأهم المراجع القانونية والكتب والمقالات المتعلقة بعمل المحكمة الجنائية الدولية.'
  },
  {
    id: '8',
    title: 'المصطلحات',
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
    title: 'About the Court',
    type: 'content',
    content: 'The International Criminal Court (ICC) is the first permanent, treaty-based international criminal court. It was established to help end impunity for the most serious crimes of concern to the international community: genocide, crimes against humanity, war crimes, and the crime of aggression.'
  },
  {
    id: '2',
    title: 'Core Legal Texts of the ICC',
    type: 'folder',
    children: [
      { id: '2-1', title: 'Rome Statute', type: 'content', content: 'The Rome Statute is the founding treaty of the International Criminal Court, adopted on 17 July 1998.' },
      { id: '2-2', title: 'Rules of Procedure and Evidence', type: 'content', content: 'An instrument for the application of the Rome Statute, setting out the detailed rules for proceedings before the Court.' },
      { id: '2-3', title: 'Elements of Crimes', type: 'content', content: 'Assists the Court in the interpretation and application of articles pertaining to crimes within its jurisdiction.' },
      { id: '2-4', title: 'Regulations of the Court', type: 'content', content: 'Regulates routine matters for the functioning of the Court and supplements the Rome Statute and the Rules of Procedure.' }
    ]
  },
  {
    id: '3',
    title: 'Code of Conduct, Profession and Defense',
    type: 'folder',
    children: [
      { id: '3-1', title: 'Code of Professional Conduct for Counsel', type: 'content', content: 'Sets out the standards of conduct and ethics that counsel practicing before the Court must observe.' },
      { id: '3-2', title: 'Legal Assistance Policy', type: 'content', content: 'Ensures the provision of effective legal assistance to persons who lack sufficient means to pay for counsel.' }
    ]
  },
  {
    id: '4',
    title: 'Public International and Complementary Law',
    type: 'folder',
    children: [
      { id: '4-1', title: 'International Humanitarian Law', type: 'content', content: 'A set of rules which seek, for humanitarian reasons, to limit the effects of armed conflict.' },
      { id: '4-2', title: 'International Human Rights Law', type: 'content', content: 'International rules that aim to promote and protect human rights and fundamental freedoms.' },
      { id: '4-3', title: 'General Principles of Law', type: 'content', content: 'Fundamental legal principles recognized across national legal systems worldwide.' }
    ]
  },
  {
    id: '5',
    title: 'Case Law',
    type: 'folder',
    children: [
      { id: '5-1', title: 'ICC Judgments and Jurisprudence', type: 'content', content: 'Decisions and judgments issued by the International Criminal Court in previous cases.' },
      { id: '5-2', title: 'Ad Hoc Tribunals Jurisprudence', type: 'content', content: 'Case law issued by special international criminal tribunals.' }
    ]
  },
  {
    id: '6',
    title: 'Conditions for Registration of ICC Counsel',
    type: 'content',
    content: 'Conditions include high competence in criminal or international law, fluency in at least one of the working languages of the Court, and an unblemished professional record.'
  },
  {
    id: '7',
    title: 'References',
    type: 'content',
    content: 'A list of the most important legal references, books, and articles related to the work of the International Criminal Court.'
  },
  {
    id: '8',
    title: 'Glossary',
    type: 'folder',
    children: glossaryData.map((section, idx) => ({
      id: `glossary-${idx}`,
      title: section.titleEn,
      type: 'glossary',
      terms: section.terms
    }))
  }
];
