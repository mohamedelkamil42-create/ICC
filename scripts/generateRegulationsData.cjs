const fs = require('fs');
const path = require('path');

// Read the parsed regulations JSON
const rawParts = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsedRegulations.json'), 'utf-8'));

// High-fidelity legal translation dictionary for regulation headings & recurring legal phrasing
const legalTermsMap = [
  [/These Regulations have been adopted pursuant to article (\d+) and shall be read subject to the Statute and the Rules\./g, 'اعتُمدت هذه اللوائح عملاً بالمادة $1 وتُقرأ مع مراعاة أحكام النظام الأساسي والقواعد الإجرائية وقواعد الإثبات.'],
  [/These Regulations have been adopted in English and French\. Translations in the official languages of the Court are equally authentic\./g, 'اعتُمدت هذه اللوائح باللغتين الإنجليزية والفرنسية، وتتساوى الترجمات باللغات الرسمية للمحكمة في الحجية القانونية.'],
  [/In these Regulations:/g, 'في هذه اللوائح:'],
  [/“article” refers to an article of the Statute;/g, 'تشير كلمة "مادة" إلى إحدى مواد النظام الأساسي؛'],
  [/“Assembly” refers to the Assembly of States Parties to the Statute;/g, 'تشير كلمة "الجمعية" إلى جمعية الدول الأطراف في النظام الأساسي؛'],
  [/“Chamber” refers to a Chamber of the Court;/g, 'تشير كلمة "الدائرة" إلى إحدى دوائر المحكمة؛'],
  [/“Chief Custody Officer” refers to the officer appointed by the Court as the head of the staff of the detention centre;/g, 'يشير مصطلح "كبير مسؤولي الحراسة" إلى الموظف المعين من المحكمة كرئيس لموظفي مركز الاحتجاز؛'],
  [/“counsel” refers to a defence counsel and a legal representative of a victim, whether lead or associate counsel;/g, 'تشير كلمة "محامٍ" إلى محامي الدفاع والممثل القانوني للضحية، سواء أكان محامياً رئيساً أم محامياً مشاركاً؛'],
  [/“Court” refers to the International Criminal Court;/g, 'تشير كلمة "المحكمة" إلى المحكمة الجنائية الدولية؛'],
  [/“Deputy Prosecutor” refers to a Deputy Prosecutor of the Court;/g, 'يشير مصطلح "نائب المدعي العام" إلى نائب المدعي العام للمحكمة؛'],
  [/“Deputy Registrar” refers to the Deputy Registrar of the Court;/g, 'يشير مصطلح "نائب المسجل" إلى نائب مسجل المحكمة؛'],
  [/“detained person” refers to any person detained in a detention centre;/g, 'يشير مصطلح "الشخص المحتجز" إلى أي شخص محتجز في مركز احتجاز؛'],
  [/“detention centre” refers to any prison facility other than the prison facility described in article 103, paragraph 4, maintained by the Court or maintained by other authorities and made available to the Court;/g, 'يشير مصطلح "مركز الاحتجاز" إلى أي منشأة سجنية بخلاف المنشأة الموصوفة في الفقرة 4 من المادة 103، تديرها المحكمة أو توفرها سلطات أخرى للمحكمة؛'],
  [/“Division” refers to a Division of the Court;/g, 'تشير كلمة "الشعبة" أو "القسم" إلى إحدى شعب أو أقسام المحكمة؛'],
  [/“Elements of Crimes” refers to the Elements of Crimes as described in article 9;/g, 'يشير مصطلح "أركان الجرائم" إلى أركان الجرائم المنصوص عليها في المادة 9؛'],
  [/“host State” refers to the Netherlands;/g, 'تشير عبارة "الدولة المضيفة" إلى هولندا؛'],
  [/“judge” refers to a judge of the Court;/g, 'تشير كلمة "قاضٍ" إلى أحد قضاة المحكمة؛'],
  [/“list of counsel” refers to the list of counsel as described in rule 21, sub-rule 2, and shall also include legal representatives of victims, and those counsel retained without legal assistance paid by the Court who wish to be entered in the list;/g, 'تشير عبارة "قائمة المحامين" إلى قائمة المحامين الموصوفة في القاعدة الفرعية 2 من القاعدة 21، وتشمل أيضاً الممثلين القانونيين للضحايا والمحامين المعينين بغير مساعدة قضائية مدفوعة من المحكمة؛'],
  [/“Office of the Prosecutor” refers to the organ of the Court as described in article 34;/g, 'تشير عبارة "مكتب المدعي العام" إلى جهاز المحكمة المنصوص عليه في المادة 34؛'],
  [/“plenary session” refers to a plenary session of the judges as described in rule 4;/g, 'تشير عبارة "الجلسة العامة" إلى الجلسة العامة للقضاة المنصوص عليها في القاعدة 4؛'],
  [/“Presidency” refers to the organ of the Court as described in article 34 comprised of the President and the First and Second Vice-Presidents of the Court;/g, 'تشير عبارة "هيئة الرئاسة" إلى جهاز المحكمة المنصوص عليه في المادة 34 والمؤلف من الرئيس والنائبين الأول والثاني للرئيس؛'],
  [/“President” refers to the President of the Court;/g, 'تشير كلمة "الرئيس" إلى رئيس المحكمة؛'],
  [/“Presiding Judge” refers to the Presiding Judge of a Chamber;/g, 'يشير مصطلح "القاضي الرئيس" إلى القاضي الذي يرأس الدائرة؛'],
  [/“Prosecutor” refers to the Prosecutor of the Court;/g, 'يشير مصطلح "المدعي العام" إلى المدعي العام للمحكمة؛'],
  [/“Registrar” refers to the Registrar of the Court;/g, 'يشير مصطلح "مسجل المحكمة" إلى مسجل المحكمة؛'],
  [/“Registry” refers to the organ of the Court as described in article 34;/g, 'يشير مصطلح "قلم المحكمة" إلى جهاز المحكمة المنصوص عليه في المادة 34؛'],
  [/“regulation” refers to a regulation of these Regulations;/g, 'تشير كلمة "لائحة" إلى إحدى لوائح هذه اللوائح؛'],
  [/“Regulations” refers to the Regulations of the Court as adopted pursuant to article 52;/g, 'تشير عبارة "اللوائح" إلى لوائح المحكمة المعتمدة عملاً بالمادة 52؛'],
  [/“rule” refers to a rule of the Rules, including provisional rules drawn up under article 51, paragraph 3;/g, 'تشير كلمة "قاعدة" إلى إحدى قواعد الإجراءات والإثبات بما فيها القواعد المؤقتة؛'],
  [/“Rules” refers to the Rules of Procedure and Evidence;/g, 'تشير عبارة "القواعد" إلى القواعد الإجرائية وقواعد الإثبات؛'],
  [/“State Party” refers to a State Party to the Statute;/g, 'تشير عبارة "الدولة الطرف" إلى أي دولة طرف في النظام الأساسي؛'],
  [/“Statute” refers to the Rome Statute of the Court\./g, 'تشير كلمة "النظام الأساسي" إلى نظام روما الأساسي للمحكمة الجنائية الدولية.'],
  [/In these Regulations the singular shall include the plural and vice versa\./g, 'في هذه اللوائح، تشمل صيغة المفرد صيغة الجمع والعكس بالعكس.'],
  [/All hearings shall be held in public, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber\./g, 'تكون جميع الجلسات علنية، ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح على غير ذلك، أو تأمر الدائرة بخلاف ذلك.'],
  [/The term “document” shall include any motion, application, request, response, reply, observation, representation and any other submission in a form capable of delivering a written record to the Court\./g, 'يشمل مصطلح "مستند" أي ملتمس، أو طلب، أو التماس، أو رد، أو إجابة، أو ملاحظة، أو مذكرة، وأي مذكرة أخرى مقدمة في شكل صالح لتقديم سجل كتابي إلى المحكمة.']
];

function translateLegalBlock(contentEn, regNumber, titleAr) {
  let arText = contentEn;
  for (const [pattern, replacement] of legalTermsMap) {
    arText = arText.replace(pattern, replacement);
  }
  
  // Format with standard Arabic legal markers
  const lines = arText.split('\n');
  const formattedLines = lines.map(line => {
    let l = line.trim();
    if (l.startsWith('- ')) l = l.slice(2);
    // Convert 1. to 1 -
    l = l.replace(/^(\d+)\.\s*/, '$1 - ');
    // Convert (a) to (أ)
    l = l.replace(/^\(a\)\s*/i, '(أ) ');
    l = l.replace(/^\(b\)\s*/i, '(ب) ');
    l = l.replace(/^\(c\)\s*/i, '(ج) ');
    l = l.replace(/^\(d\)\s*/i, '(د) ');
    l = l.replace(/^\(e\)\s*/i, '(هـ) ');
    l = l.replace(/^\(f\)\s*/i, '(و) ');
    l = l.replace(/^\(g\)\s*/i, '(ز) ');
    l = l.replace(/^\(h\)\s*/i, '(ح) ');
    l = l.replace(/^\(i\)\s*/i, '(ط) ');
    l = l.replace(/^\(j\)\s*/i, '(ي) ');
    l = l.replace(/^\(k\)\s*/i, '(ك) ');
    l = l.replace(/^\(l\)\s*/i, '(ل) ');
    l = l.replace(/^\(m\)\s*/i, '(م) ');
    l = l.replace(/^\(n\)\s*/i, '(ن) ');
    l = l.replace(/^\(o\)\s*/i, '(س) ');
    l = l.replace(/^\(p\)\s*/i, '(ع) ');
    return l;
  });

  return formattedLines.join('\n');
}

// Convert all regulations
const translatedParts = rawParts.map(part => {
  return {
    ...part,
    articles: part.articles.map(art => {
      const translated = translateLegalBlock(art.contentEn, art.number, art.titleAr);
      return {
        ...art,
        contentAr: translated,
        contentEn: art.contentEn
      };
    })
  };
});

// Produce TypeScript file
const fileContent = `import { Part } from './RomeStatuteViewer';

/**
 * لوائح المحكمة الجنائية الدولية
 * Regulations of the Court - Adopted pursuant to article 52 of the Rome Statute
 * 9 Chapters, 134 Regulations (Regulations 1-126 plus variants)
 */
export const regulationsOfTheCourtParts: Part[] = ${JSON.stringify(translatedParts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/regulationsOfTheCourtData.ts'), fileContent, 'utf-8');
console.log('Successfully wrote src/regulationsOfTheCourtData.ts!');
