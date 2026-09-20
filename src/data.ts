import { DrawerItem } from './types';
import glossaryDataRaw from './glossaryData.json';

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
    title: 'قانون العقوبات والجرائم',
    type: 'folder',
    children: [
      { id: '4-1', title: 'الإبادة الجماعية', type: 'content', content: 'أي فعل من الأفعال المحددة المرتكبة بقصد إهلاك جماعة قومية أو إثنية أو عرقية أو دينية.' },
      { id: '4-2', title: 'الجرائم ضد الإنسانية', type: 'content', content: 'أي فعل من الأفعال المحددة المرتكبة في إطار هجوم واسع النطاق أو منهجي موجه ضد أية مجموعة من السكان المدنيين.' },
      { id: '4-3', title: 'جرائم الحرب', type: 'content', content: 'الانتهاكات الجسيمة لاتفاقيات جنيف وغيرها من الانتهاكات الخطيرة للقوانين والأعراف السارية على المنازعات المسلحة.' }
    ]
  },
  {
    id: '5',
    title: 'شروط التسجيل كمحامي',
    type: 'content',
    content: 'للتسجيل في قائمة المحامين، يجب إثبات الكفاءة العالية في القانون الجنائي أو القانون الدولي، وإجادة إحدى لغات العمل بالمحكمة (الإنجليزية أو الفرنسية)، والتمتع بسجل مهني نظيف.'
  },
  {
    id: '8',
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
    title: 'About the Court',
    type: 'content',
    content: 'The International Criminal Court (ICC) is the first permanent, treaty-based international criminal court. It was established to help end impunity for the most serious crimes of concern to the international community: genocide, crimes against humanity, war crimes, and the crime of aggression.'
  },
  {
    id: '2',
    title: 'Core Legal Texts',
    type: 'folder',
    children: [
      { id: '2-1', title: 'Rome Statute', type: 'content', content: 'The Rome Statute is the founding treaty of the ICC, adopted on 17 July 1998.' },
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
    title: 'Crimes & Jurisdiction',
    type: 'folder',
    children: [
      { id: '4-1', title: 'Genocide', type: 'content', content: 'Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group.' },
      { id: '4-2', title: 'Crimes Against Humanity', type: 'content', content: 'Acts committed as part of a widespread or systematic attack directed against any civilian population.' },
      { id: '4-3', title: 'War Crimes', type: 'content', content: 'Grave breaches of the Geneva Conventions and other serious violations of the laws and customs applicable in armed conflict.' }
    ]
  },
  {
    id: '5',
    title: 'Counsel Registration',
    type: 'content',
    content: 'To be admitted to the List of Counsel, one must demonstrate high competence in criminal or international law, fluency in a working language (English/French), and an unblemished record.'
  },
  {
    id: '8',
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
