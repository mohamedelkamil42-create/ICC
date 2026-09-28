const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsedRegulations.json'), 'utf-8'));

// Comprehensive sentence & clause translation dictionary for ICC Regulations
const phraseTranslations = [
  // General Provisions
  ["These Regulations have been adopted pursuant to article 52 and shall be read subject to the Statute and the Rules.", "اعتُمدت هذه اللوائح عملاً بالمادة 52 وتُقرأ مع مراعاة أحكام النظام الأساسي والقواعد الإجرائية وقواعد الإثبات."],
  ["These Regulations have been adopted in English and French. Translations in the official languages of the Court are equally authentic.", "اعتُمدت هذه اللوائح باللغتين الإنجليزية والفرنسية، وتتساوى الترجمات باللغات الرسمية للمحكمة في الحجية القانونية."],
  ["There shall be a Coordination Council comprised of the President on behalf of the Presidency, the Prosecutor and the Registrar.", "يُنشأ مجلس تنسيق يتألف من الرئيس نيابة عن هيئة الرئاسة، والمدعي العام، والمسجل."],
  ["The Coordination Council shall meet at least once a month and on any other occasion at the request of one of its members in order to discuss and coordinate on, where necessary, the administrative activities of the organs of the Court.", "يجتمع مجلس التنسيق مرة واحدة على الأقل شهرياً، وفي أي مناسبة أخرى بناءً على طلب أحد أعضائه، لمناقشة وتنسيق الأنشطة الإدارية لأجهزة المحكمة عند الاقتضاء."],
  ["There shall be an Advisory Committee on Legal Texts comprised of:", "تُنشأ لجنة استشارية للنصوص القانونية تتألف من:"],
  ["Three judges, one from each Division, elected from amongst the members of the Division, who shall be members of the Advisory Committee for a period of three years;", "ثلاثة قضاة، قاضٍ من كل شعبة، يُنتخبون من بين أعضاء الشعبة، ويكونون أعضاءً في اللجنة الاستشارية لمدة ثلاث سنوات؛"],
  ["One representative from the Office of the Prosecutor;", "ممثل واحد عن مكتب المدعي العام؛"],
  ["One representative from the Registry; and", "ممثل واحد عن قلم المحكمة؛ و"],
  ["One representative of counsel included in the list of counsel.", "ممثل واحد عن المحامين المدرجين في قائمة المحامين."],
  ["The Advisory Committee shall elect a judge as chairperson for a period of three years who shall be eligible for re-election once. The Advisory Committee shall meet at least twice a year and at any time at the request of the Presidency.", "تنتخب اللجنة الاستشارية قاضياً كرئيس لها لمدة ثلاث سنوات قابلة للتجديد مرة واحدة. وتجتمع اللجنة مرتين على الأقل في السنة وفي أي وقت بناءً على طلب هيئة الرئاسة."],
  ["The Chairperson of the Advisory Committee may, as appropriate, invite other interested groups or persons to present their views if considered relevant for the work of the Advisory Committee. The Chairperson may also seek the advice of experts.", "يجوز لرئيس اللجنة الاستشارية، حسب الاقتضاء، دعوة أطراف أو أشخاص معنيين آخرين لعرض آرائهم إذا رُئي أنها ذات صلة بعمل اللجنة. ويجوز له أيضاً طلب المشورة من خبراء."],
  ["The Advisory Committee shall consider and report on proposals for amendments to the Rules, Elements of Crimes and these Regulations. Subject to sub-regulation 5, it shall submit a written report in both working languages of the Court setting out its recommendations on such proposals to a plenary session. A copy thereof shall be provided to the Prosecutor and the Registrar. The Advisory Committee shall also consider and report on any matter referred to it by the Presidency.", "تنظر اللجنة الاستشارية في مقترحات التعديلات على القواعد وأركان الجرائم وهذه اللوائح وتقدم تقارير بشأنها. وتقدم تقريراً خطياً بلغتي عمل المحكمة يحدد توصياتها إلى الجلسة العامة، مع تزويد المدعي العام والمسجل بنسخة منه."],
  ["When a proposal for an amendment to the Rules or to the Elements of Crimes is presented by the Prosecutor, the Advisory Committee shall transmit its report to the Prosecutor.", "عندما يقدم المدعي العام مقترحاً لتعديل القواعد أو أركان الجرائم، تحيل اللجنة الاستشارية تقريرها إلى المدعي العام."],
  ["The Presidency may, as appropriate, designate one person, who may be assisted by others, to provide administrative and legal support to the Advisory Committee.", "يجوز لهيئة الرئاسة، حسب الاقتضاء، تعيين شخص لتقديم الدعم الإداري والقانوني للجنة الاستشارية."],
  ["The Advisory Committee shall adopt its own rules of procedure.", "تعتمد اللجنة الاستشارية نظامها الداخلي الخاص."],
  ["Any proposal for amendments to the Rules pursuant to article 51 or to the Elements of Crimes pursuant to article 9 shall be submitted by a judge to the Advisory Committee on Legal Texts. The Prosecutor may submit proposals to the Advisory Committee on Legal Texts. All proposals, together with any explanatory material, shall be presented in writing in both working languages of the Court.", "يقدم أي مقترح لتعديل القواعد عملاً بالمادة 51 أو أركان الجرائم عملاً بالمادة 9 من جانب قاضٍ إلى اللجنة الاستشارية للنصوص القانونية. ويجوز للمدعي العام تقديم مقترحات للجنة. وتُقدم جميع المقترحات كتابةً بلغتي عمل المحكمة."],
  ["In urgent cases, where the Rules do not provide for a specific situation before the Court, the Presidency, on its own motion or at the request of a judge or the Prosecutor, may submit proposals for provisional rules under article 51, paragraph 3, directly to the judges for their consideration in a plenary session.", "في الحالات العاجلة التي لا تعالج فيها القواعد وضعاً محدداً، يجوز لهيئة الرئاسة تلقائياً أو بناءً على طلب قاضٍ أو المدعي العام، تقديم مقترحات لقواعد مؤقتة بموجب المادة 51(3) إلى القضاة في الجلسة العامة."],
  ["Any proposal for amendments to these Regulations shall be accompanied by explanatory material, and those documents shall be presented in writing to the Advisory Committee on Legal Texts in both working languages of the Court.", "يُرفق بأي مقترح لتعديل هذه اللوائح مذكرة إيضاحية، وتُقدم كتابةً إلى اللجنة الاستشارية للنصوص القانونية بلغتي عمل المحكمة."],
  ["In urgent cases, the Presidency, on its own motion or at the request of a judge, the Prosecutor or the Registrar, may submit proposals for amendments to these Regulations directly to the judges for their consideration in a plenary session.", "في الحالات العاجلة، يجوز لهيئة الرئاسة تقديم مقترحات لتعديل هذه اللوائح مباشرةً إلى القضاة في الجلسة العامة."],
  ["Amendments to these Regulations shall not be applied retroactively to the detriment of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person.", "لا تُطبق التعديلات على هذه اللوائح بأثر رجعي يضر بالشخص المطبق عليه المادة 55(2) أو 58، أو المتهم، أو المحكوم عليه، أو الشخص المقضي ببراءته."],
  ["An Official Journal of the Court shall be created and shall contain the following texts and amendments thereto:", "تُنشأ جريدة رسمية للمحكمة وتحتوي على النصوص التالية وتعديلاتها:"],
  ["The Statute;", "النظام الأساسي؛"],
  ["The Rules;", "القواعد الإجرائية وقواعد الإثبات؛"],
  ["The Elements of Crimes;", "أركان الجرائم؛"],
  ["These Regulations;", "هذه اللوائح؛"],
  ["The Regulations of the Office of the Prosecutor;", "لوائح مكتب المدعي العام؛"],
  ["The Regulations of the Registry;", "لوائح قلم المحكمة؛"],
  ["The Code of Professional Conduct for counsel;", "مدونة قواعد السلوك المهني للمحامين؛"],
  ["The Code of Judicial Ethics;", "مدونة السلوك القضائي؛"],
  ["The Staff Regulations;", "النظام الأساسي للموظفين؛"],
  ["The Financial Regulations and Rules;", "النظام المالي والقواعد المالية؛"],
  ["The Agreement on the Privileges and Immunities of the International Criminal Court;", "الاتفاق المتعلق بامتيازات وحصانات المحكمة الجنائية الدولية؛"],
  ["The Relationship Agreement between the Court and the United Nations;", "اتفاق العلاقة بين المحكمة والأمم المتحدة؛"],
  ["The Headquarters Agreement with the host State;", "اتفاق المقر مع الدولة المضيفة؛"],
  ["Any other material as decided by the Presidency in consultation with the Prosecutor and/or the Registrar.", "أي مواد أخرى تقررها هيئة الرئاسة بالتشاور مع المدعي العام و/أو المسجل."],
  ["The Official Journal shall indicate the date when the text or any amendment thereto came into force.", "تحدد الجريدة الرسمية تاريخ بدء نفاذ النص أو أي تعديل عليه."],
  ["The following materials shall be published on the website of the Court:", "تُنشر المواد التالية على الموقع الشبكي للمحكمة:"],
  ["The Official Journal of the Court referred to in regulation 7;", "الجريدة الرسمية للمحكمة المشار إليها في اللائحة 7؛"],
  ["The calendar of the Court;", "الجدول الزمني لجلسات وأنشطة المحكمة؛"],
  ["Decisions and orders of the Court and other particulars of each case brought before the Court as described in rule 15;", "قرارات وأوامر المحكمة وتفاصيل كل قضية معروضة أمامها وفق القاعدة 15؛"],
  ["Any other material as decided by the Presidency, the Prosecutor or the Registrar.", "أي مواد أخرى تقررها هيئة الرئاسة أو المدعي العام أو المسجل."],

  // Composition and administration
  ["The term of office of judges shall commence on the eleventh of March following the date of their election.", "تبدأ مدة عضوية القضاة في اليوم الحادي عشر من شهر مارس/آذار الذي يلي تاريخ انتخابهم."],
  ["The term of office of a judge elected to replace a judge whose term of office has not expired shall commence on the date of his or her election and shall continue for the remainder of the term of his or her predecessor.", "تبدأ مدة عضوية القاضي المنتخب ليحل محل قاضٍ لم تنتهِ مدته في تاريخ انتخابه وتستمر لما تبقى من مدة سلفه."],
  ["In the exercise of their judicial functions, the judges, irrespective of age, date of election or length of service, are of equal status.", "يتمتع القضاة بوضع متساوٍ في ممارسة وظائفهم القضائية، بصرف النظر عن السن أو تاريخ الانتخاب أو مدة الخدمة."],
  ["The President, the First Vice-President and the Second Vice-President, while holding these offices, shall take precedence over all other judges.", "يتقدم الرئيس ونائب الرئيس الأول ونائب الرئيس الثاني أثناء توليهم هذه المناصب على سائر القضاة."],
  ["Judges shall take precedence according to the date of the commencement of their respective terms of office.", "يتقدم القضاة وفقاً لتاريخ بدء مدة عضويتهم في المحكمة."],
  ["Judges whose terms of office begin on the same date shall take precedence according to seniority of age.", "يتقدم القضاة الذين تبدأ مدة عضويتهم في نفس التاريخ بحسب الأكبر سناً."],
  ["A judge who is re-elected in accordance with article 36, paragraph 9 (c), or article 37, paragraph 2, shall retain his or her precedence.", "يحتفظ القاضي الذي يُعاد انتخابه وفق المادة 36(9)(ج) أو المادة 37(2) بأسبقيته."],
  ["The members of the Presidency shall attempt to achieve unanimity in any decision taken in carrying out their responsibilities under article 38, paragraph 3, failing which any such decision shall be taken by majority.", "يسعى أعضاء هيئة الرئاسة إلى التوصل للإجماع في أي قرار يُتخذ، وإلا فيُتخذ القرار بالأغلبية."],
  ["The judges of the Appeals Chamber shall decide on a Presiding Judge for each appeal.", "يحدد قضاة دائرة الاستئناف قاضياً رئيساً لكل استئناف."],
  ["The judges of each Division shall elect a President of the Division from amongst their members to oversee the administration of the Division. The President of the Division shall carry out this function for a period of one year.", "ينتخب قضاة كل شعبة رئيساً للشعبة من بينهم للإشراف على إدارة الشعبة، ويمارس مهامه لمدة عام واحد."],
  ["The Presidency shall be responsible for the replacement of a judge pursuant to rule 38 and in accordance with article 39 and shall also take into account, to the extent possible, gender and equitable geographical representation.", "تتولى هيئة الرئاسة استبدال القاضي عملاً بالقاعدة 38 والمادة 39 مع مراعاة التمثيل الجنساني والجغرافي العادل قدر الإمكان."],
  ["The Presidency shall establish a duty roster of judges of the Pre-Trial Division. Each judge shall be on duty for a period of 14 days.", "تضع هيئة الرئاسة جدول مناوبة لقضاة الشعبة التمهيدية، ويكون كل قاضٍ مناوباً لمدة 14 يوماً."],
  ["The Presidency shall establish a duty roster of legal officers of the Chambers. Each legal officer shall be on duty for a period of 14 days.", "تضع هيئة الرئاسة جدول مناوبة للموظفين القانونيين بالدوائر، وتكون المناوبة لمدة 14 يوماً."],
  ["The Registrar shall establish a duty roster of officers of the Registry. Each officer shall be on duty for the period specified in the Regulations of the Registry.", "يضع المسجل جدول مناوبة لموظفي قلم المحكمة وفق المدة المحددة في لوائح القلم."],

  // Proceedings
  ["The Presidency, in consultation with the judges, shall establish periods of judicial recess and issue guidelines in relation thereto.", "تحدد هيئة الرئاسة بالتشاور مع القضاة فترات العطلة القضائية وتصدر مبادئ توجيهية بشأنها."],
  ["Unless otherwise determined by a Chamber, during the judicial recess hearings shall be limited to urgent issues and time limits shall not be suspended.", "ما لم تقرر الدائرة غير ذلك، تقتصر الجلسات أثناء العطلة القضائية على المسائل العاجلة ولا تُعلّق المهل الزمنية."],
  ["All hearings shall be held in public, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.", "تكون جميع الجلسات علنية، ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح على خلاف ذلك أو تأمر الدائرة بذلك."],
  ["When a Chamber orders that certain hearings be held in closed or private session, the Chamber shall make public the reasons for such an order.", "عندما تأمر الدائرة بعقد جلسات سرية أو مغلقة، تعلن الدائرة أسباب إصدار هذا الأمر علناً."],
  ["A Chamber may order the disclosure of all or part of the record of closed proceedings when the reasons for ordering its non-disclosure no longer exist.", "يجوز للدائرة أن تأمر بالكشف عن كل أو جزء من سجل الإجراءات السرية عند زوال أسباب عدم الكشف."],
  ["In order to protect sensitive information, broadcasts of audio- and video-recordings of all hearings shall, unless otherwise ordered by the Chamber, be delayed by at least 30 minutes.", "لحماية المعلومات الحساسة، يؤخر بث التسجيلات الصوتية والمرئية للجلسات لمدة 30 دقيقة على الأقل ما لم تأمر الدائرة بخلاف ذلك."],
  ["The term “document” shall include any motion, application, request, response, reply, observation, representation and any other submission in a form capable of delivering a written record to the Court.", "يشمل مصطلح \"مستند\" أي ملتمس أو طلب أو التماس أو رد أو إجابة أو ملاحظة أو مذكرة وأي إيداع كتابي آخر للمحكمة."],
  ["All standard forms and templates for use during the proceedings before the Court shall be approved by the Presidency.", "تعتمد هيئة الرئاسة جميع النماذج والقوالب الموحدة المستخدمة في الإجراءات أمام المحكمة."],
  ["Applications pursuant to article 58 shall be filed ex parte marked as “under seal” or “secret”, unless otherwise authorised by a Chamber.", "تُودع الطلبات المقدمة عملاً بالمادة 58 بحضور طرف واحد وتوسم بعبارة \"تحت الختم\" أو \"سري\" ما لم تأذن الدائرة بخلاف ذلك."],
  ["A document filed with the Registry shall not exceed 20 pages, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.", "يجب ألا يتجاوز المستند المودع لدى قلم المحكمة 20 صفحة، ما لم ينص النظام الأساسي أو القواعد أو هذه اللوائح أو تأمر الدائرة بخلاف ذلك."],
  ["All documents and materials filed with the Registry shall be in English or French, unless otherwise provided in the Statute, Rules, these Regulations or authorised by the Chamber or the Presidency.", "تكون جميع المستندات والمواد المودعة لدى قلم المحكمة باللغة الإنجليزية أو الفرنسية، ما لم يُؤذن بخلاف ذلك."],
  ["The Registrar shall ensure that the decisions and texts envisaged in article 50, paragraph 1, and in rule 40, are translated into all the official languages of the Court.", "يكفل المسجل ترجمة القرارات والنصوص المنصوص عليها في المادة 50(1) والقاعدة 40 إلى جميع اللغات الرسمية للمحكمة."],
  ["The Victims and Witnesses Unit may, pursuant to article 68, paragraph 4, draw any matter to the attention of a Chamber where protective measures under rule 87 or special measures under rule 88 require its consideration.", "يجوز لوحدة الضحايا والشهود عملاً بالمادة 68(4) لفت انتباه الدائرة لأي مسألة تتطلب تدابير حماية بموجب القاعدة 87 أو تدابير خاصة بموجب القاعدة 88."],
  ["Protective measures once ordered in any proceedings in respect of a victim or witness shall continue to have full force and effect in relation to any other proceedings before the Court and shall continue after proceedings have been concluded, subject to revision by a Chamber.", "تظل تدابير الحماية الصادرة لصالح ضحية أو شاهد نافذة وسارية المفعول بكامل قوتها في أي إجراءات أخرى وبعد اختتام المحاكمة ما لم تعدلها الدائرة."],
  ["The Registrar shall create and maintain a list of experts accessible at all times to all organs of the Court and to all participants.", "ينشئ المسجل ويحتفظ بقائمة للخبراء تكون متاحة في جميع الأوقات لكافة أجهزة المحكمة ولجميع المشاركين."],
  ["The Prosecutor shall inform the Presidency in writing as soon as a situation has been referred to the Prosecutor by a State Party under article 14 or by the Security Council under article 13, sub-paragraph (b);", "يخطر المدعي العام هيئة الرئاسة كتابةً فور إحالة حالة إليه من دولة طرف بموجب المادة 14 أو من مجلس الأمن بموجب المادة 13(ب)؛"],
  ["The Presidency shall constitute permanent Pre-Trial Chambers with fixed compositions.", "تنشئ هيئة الرئاسة دوائر تمهيدية دائمة ذات تشكيل ثابت."],
  ["For the purposes of a decision on interim release, the Pre-Trial Chamber shall seek observations from the host State and from the State to which the person seeks to be released.", "لأغراض البت في الإفراج المؤقت، تطلب الدائرة التمهيدية ملاحظات من الدولة المضيفة ومن الدولة التي يطلب الشخص الإفراج إليه فيها."],
  ["The written decision of the Pre-Trial Chamber setting out its findings on each of the charges shall be delivered within 60 days from the date the confirmation hearing ends.", "يصدر القرار المكتوب للدائرة التمهيدية المتضمن استنتاجاتها بشأن كل تهمة في غضون 60 يوماً من تاريخ انتهاء جلسة اعتماد التهم."],
  ["In its decision under article 74, the Chamber may change the legal characterisation of facts to accord with the crimes under articles 6, 7, 8 or 8 bis, or to accord with the form of participation of the accused under articles 25 and 28, without exceeding the facts and circumstances described in the charges and any amendments to the charges.", "يجوز للدائرة في قرارها بموجب المادة 74 تعديل التكييف القانوني للوقائع لتتوافق مع الجرائم المنصوص عليها دون تجاوز الوقائع والظروف الموصوفة في التهم."],
  ["The appeal brief shall not exceed 100 pages.", "يجب ألا تتجاوز مذكرة الاستئناف 100 صفحة."],
  ["The response shall not exceed 100 pages.", "يجب ألا يتجاوز الرد 100 صفحة."],
  ["Any reply filed in accordance with sub-regulation 1 shall not exceed 50 pages.", "يجب ألا تتجاوز أي إجابة 50 صفحة."],

  // Counsel & Legal Assistance
  ["Subject to regulation 78, sub-regulation 2, the necessary relevant experience for counsel as described in rule 22 shall be at least ten years for lead counsel and at least eight years for associate counsel.", "مع مراعاة اللائحة 78(2)، تكون الخبرة العملية اللازمة للمحامي لا تقل عن عشر سنوات للمحامي الرئيس وثماني سنوات للمحامي المشارك."],
  ["Counsel should not have been convicted of a serious criminal or disciplinary offence considered to be incompatible with the nature of the office of counsel before the Court.", "يجب ألا يكون المحامي قد أُدين بجريمة جنائية خطيرة أو مخالفة تأديبية تتعارض مع طبيعة مهنة المحاماة أمام المحكمة."],
  ["A person seeking to act as counsel shall complete the forms provided by the Registrar for this purpose.", "يملأ الشخص الراغب في العمل كمحامٍ النماذج التي يوفرها المسجل لهذا الغرض."],
  ["The Registrar shall identify counsel from the list of counsel who are willing to represent any person before the Court or to represent the interests of the defence as duty counsel.", "يحدد المسجل محامين من القائمة يرغبون في تمثيل الأشخاص أو تمثيل مصالح الدفاع بصفتهم محامين مناوبين."],
  ["The Registrar shall establish and develop an Office of Public Counsel for the defence for the purpose of providing assistance as described in sub-regulation 4.", "ينشئ المسجل ويطور مكتب المحامي العام للدفاع لتقديم المساعدة القانونية."],
  ["Prior to withdrawal, defence counsel shall seek the leave of the Chamber.", "يجب على محامي الدفاع طلب إذن الدائرة قبل الانسحاب."],
  ["Prior to withdrawal, legal representatives of victims shall seek the leave of the Chamber.", "يجب على الممثلين القانونيين للضحايا طلب إذن الدائرة قبل الانسحاب."],
  ["The Registrar shall establish and develop an Office of Public Counsel for victims for the purpose of providing assistance as described in sub-regulation 4.", "ينشئ المسجل ويطور مكتب المحامي العام للضحايا لتقديم المساعدة والتمثيل."],
  ["Legal assistance paid by the Court shall cover all costs reasonably necessary as determined by the Registrar for an effective and efficient defence,", "تغطي المساعدة القانونية المدفوعة من المحكمة جميع التكاليف الضرورية معقولياً للدفاع الفعال والنزيه،"],

  // Victims & Detention
  ["For the purposes of rule 89 and subject to rule 102 a victim shall make a written application to the Registrar who shall develop standard forms for that purpose", "لأغراض القاعدة 89، يقدم الضحية طلباً كتابياً للمسجل الذي يضع نماذج موحدة لهذا الغرض."],
  ["The detention of persons detained by the Court under the Statute shall be governed by the provisions of this chapter.", "يخضع احتجاز الأشخاص المحتجزين لدى المحكمة بموجب النظام الأساسي لأحكام هذا الباب."],
  ["Subject to the Statute, Rules and these Regulations, the Registrar shall have overall responsibility for all aspects of management of the detention centre, including security and order, and shall make all decisions relating thereto.", "يتولى المسجل المسؤولية الشاملة عن كافة جوانب إدارة مركز الاحتجاز بما فيها الأمن والنظام."],
  ["All detained persons shall be treated with humanity and with respect for the inherent dignity of the human person.", "يُعامل جميع الأشخاص المحتجزين بإنسانية مع احترام الكرامة الأصيلة لشخص الإنسان."],
  ["There shall be no discrimination of detained persons on grounds of gender, age, race, colour, language, religion or belief, political or other opinion, national, ethnic or social origin, wealth, birth or other status.", "يحظر التمييز ضد المحتجزين بسبب الجنس أو السن أو العرق أو اللون أو اللغة أو الدين أو الرأي السياسي أو الأصل القومي أو الاجتماعي."],
  ["The detention record of each detained person shall be confidential.", "يكون سجل الاحتجاز الخاص بكل محتجز سرياً."],
  ["When a detained person arrives at the detention centre, he or she shall be provided with a copy of these Regulations and the Regulations of the Registry relevant to detention matters in a language which he or she fully understands and speaks.", "يُزود المحتجز عند وصوله بنسخة من اللوائح بلغة يفهمها ويتحدث بها بطلاقة."],
  ["Men and women shall be detained in separate areas within the detention centre.", "يُحتجز الرجال والنساء في أقسام منفصلة داخل مركز الاحتجاز."],
  ["A detained person shall occupy a cell unit by himself or herself except in exceptional circumstances", "يشغل المحتجز غرفة احتجاز بمفرده باستثناء الحالات الاستثنائية."],
  ["A detained person shall have the right to file a complaint against any administrative decision or order or with regard to any other matter concerning his or her detention.", "يحق للشخص المحتجز تقديم شكوى ضد أي قرار أو إجراء إداري يتعلق باحتجازه."],

  // Ethics
  ["The Presidency shall draw up a Code of Judicial Ethics, after having consulted the judges.", "تضع هيئة الرئاسة مدونة السلوك القضائي بعد التشاور مع القضاة."],
  ["The draft Code shall then be transmitted to the judges meeting in plenary session for the purpose of adoption by the majority of the judges.", "يحال مشروع المدونة إلى القضاة في الجلسة العامة لاعتمادها بأغلبية القضاة."]
];

function translateTextToLegalArabic(text, regNum, titleAr) {
  let res = text;
  for (const [en, ar] of phraseTranslations) {
    if (res.includes(en)) {
      res = res.replaceAll(en, ar);
    }
  }

  // Formatting markers
  const lines = res.split('\n');
  const formatted = lines.map(line => {
    let l = line.trim();
    if (l.startsWith('- ')) l = l.slice(2);
    l = l.replace(/^(\d+)\.\s*/, '$1 - ');
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

  return formatted.join('\n');
}

parsed.forEach(chapter => {
  chapter.articles.forEach(art => {
    art.contentAr = translateTextToLegalArabic(art.contentAr, art.number, art.titleAr);
  });
});

const tsOutput = `import { Part } from './RomeStatuteViewer';

/**
 * لوائح المحكمة الجنائية الدولية
 * Regulations of the Court - Adopted pursuant to article 52 of the Rome Statute
 * Official 9 Chapters, 134 Regulations (Regulations 1-126 plus variants)
 */
export const regulationsOfTheCourtParts: Part[] = ${JSON.stringify(parsed, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/regulationsOfTheCourtData.ts'), tsOutput, 'utf-8');
console.log('Successfully updated src/regulationsOfTheCourtData.ts with detailed legal Arabic!');
