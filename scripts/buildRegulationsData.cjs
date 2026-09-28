const fs = require('fs');
const path = require('path');

// Raw English text from official source provided by user
const sourceText = `
# Chapter 1. General provisions

#### Regulation 1 - Adoption of these Regulations
- 1. These Regulations have been adopted pursuant to article 52 and shall be read subject to the Statute and the Rules.
- 2. These Regulations have been adopted in English and French. Translations in the official languages of the Court are equally authentic.

#### Regulation 2 - Use of terms [note 1]
- 1. In these Regulations:
  - “article” refers to an article of the Statute;
  - “Assembly” refers to the Assembly of States Parties to the Statute;
  - “Chamber” refers to a Chamber of the Court;
  - “Chief Custody Officer” refers to the officer appointed by the Court as the head of the staff of the detention centre;
  - “counsel” refers to a defence counsel and a legal representative of a victim, whether lead or associate counsel;
  - “Court” refers to the International Criminal Court;
  - “Deputy Prosecutor” refers to a Deputy Prosecutor of the Court;
  - “Deputy Registrar” refers to the Deputy Registrar of the Court;
  - “detained person” refers to any person detained in a detention centre;
  - “detention centre” refers to any prison facility other than the prison facility described in article 103, paragraph 4, maintained by the Court or maintained by other authorities and made available to the Court;
  - “Division” refers to a Division of the Court;
  - “Elements of Crimes” refers to the Elements of Crimes as described in article 9;
  - “host State” refers to the Netherlands;
  - “judge” refers to a judge of the Court;
  - “list of counsel” refers to the list of counsel as described in rule 21, sub-rule 2, and shall also include legal representatives of victims, and those counsel retained without legal assistance paid by the Court who wish to be entered in the list;
  - “Office of the Prosecutor” refers to the organ of the Court as described in article 34;
  - “plenary session” refers to a plenary session of the judges as described in rule 4;
  - “Presidency” refers to the organ of the Court as described in article 34 comprised of the President and the First and Second Vice-Presidents of the Court;
  - “President” refers to the President of the Court;
  - “Presiding Judge” refers to the Presiding Judge of a Chamber;
  - “Prosecutor” refers to the Prosecutor of the Court;
  - “Registrar” refers to the Registrar of the Court;
  - “Registry” refers to the organ of the Court as described in article 34;
  - “regulation” refers to a regulation of these Regulations;
  - “Regulations” refers to the Regulations of the Court as adopted pursuant to article 52;
  - “rule” refers to a rule of the Rules, including provisional rules drawn up under article 51, paragraph 3;
  - “Rules” refers to the Rules of Procedure and Evidence;
  - “State Party” refers to a State Party to the Statute;
  - “Statute” refers to the Rome Statute of the Court.
- 2. In these Regulations the singular shall include the plural and vice versa.

#### Regulation 3 - Coordination Council
- 1. There shall be a Coordination Council comprised of the President on behalf of the Presidency, the Prosecutor and the Registrar.
- 2. The Coordination Council shall meet at least once a month and on any other occasion at the request of one of its members in order to discuss and coordinate on, where necessary, the administrative activities of the organs of the Court.

#### Regulation 4 - Advisory Committee on Legal Texts
- 1. There shall be an Advisory Committee on Legal Texts comprised of:
  - (a) Three judges, one from each Division, elected from amongst the members of the Division, who shall be members of the Advisory Committee for a period of three years;
  - (b) One representative from the Office of the Prosecutor;
  - (c) One representative from the Registry; and
  - (d) One representative of counsel included in the list of counsel.
- 2. The Advisory Committee shall elect a judge as chairperson for a period of three years who shall be eligible for re-election once. The Advisory Committee shall meet at least twice a year and at any time at the request of the Presidency.
- 3. The Chairperson of the Advisory Committee may, as appropriate, invite other interested groups or persons to present their views if considered relevant for the work of the Advisory Committee. The Chairperson may also seek the advice of experts.
- 4. The Advisory Committee shall consider and report on proposals for amendments to the Rules, Elements of Crimes and these Regulations. Subject to sub-regulation 5, it shall submit a written report in both working languages of the Court setting out its recommendations on such proposals to a plenary session. A copy thereof shall be provided to the Prosecutor and the Registrar. The Advisory Committee shall also consider and report on any matter referred to it by the Presidency.
- 5. When a proposal for an amendment to the Rules or to the Elements of Crimes is presented by the Prosecutor, the Advisory Committee shall transmit its report to the Prosecutor.
- 6. The Presidency may, as appropriate, designate one person, who may be assisted by others, to provide administrative and legal support to the Advisory Committee.
- 7. The Advisory Committee shall adopt its own rules of procedure.

#### Regulation 5 - Amendments to the Rules and Elements of Crimes
- 1. Any proposal for amendments to the Rules pursuant to article 51 or to the Elements of Crimes pursuant to article 9 shall be submitted by a judge to the Advisory Committee on Legal Texts. The Prosecutor may submit proposals to the Advisory Committee on Legal Texts. All proposals, together with any explanatory material, shall be presented in writing in both working languages of the Court.
- 2. In urgent cases, where the Rules do not provide for a specific situation before the Court, the Presidency, on its own motion or at the request of a judge or the Prosecutor, may submit proposals for provisional rules under article 51, paragraph 3, directly to the judges for their consideration in a plenary session.

#### Regulation 6 - Amendments to these Regulations
- 1. Any proposal for amendments to these Regulations shall be accompanied by explanatory material, and those documents shall be presented in writing to the Advisory Committee on Legal Texts in both working languages of the Court.
- 2. In urgent cases, the Presidency, on its own motion or at the request of a judge, the Prosecutor or the Registrar, may submit proposals for amendments to these Regulations directly to the judges for their consideration in a plenary session.
- 3. Amendments to these Regulations shall not be applied retroactively to the detriment of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person.

#### Regulation 7 - Publication in the Official Journal
- 1. An Official Journal of the Court shall be created and shall contain the following texts and amendments thereto:
  - (a) The Statute;
  - (b) The Rules;
  - (c) The Elements of Crimes;
  - (d) These Regulations;
  - (e) The Regulations of the Office of the Prosecutor;
  - (f) The Regulations of the Registry;
  - (g) The Code of Professional Conduct for counsel;
  - (h) The Code of Judicial Ethics;
  - (i) The Staff Regulations;
  - (j) The Financial Regulations and Rules;
  - (k) The Agreement on the Privileges and Immunities of the International Criminal Court;
  - (l) The Relationship Agreement between the Court and the United Nations;
  - (m) The Headquarters Agreement with the host State;
  - (n) Any other material as decided by the Presidency in consultation with the Prosecutor and/or the Registrar.
- 2. The Official Journal shall indicate the date when the text or any amendment thereto came into force.

#### Regulation 8 - Website of the Court
The following materials shall be published on the website of the Court:
- (a) The Official Journal of the Court referred to in regulation 7;
- (b) The calendar of the Court;
- (c) Decisions and orders of the Court and other particulars of each case brought before the Court as described in rule 15;
- (d) Any other material as decided by the Presidency, the Prosecutor or the Registrar.

# Chapter 2. Composition and administration of the Court

#### Regulation 9 - Term of office
- 1. The term of office of judges shall commence on the eleventh of March following the date of their election.
- 2. The term of office of a judge elected to replace a judge whose term of office has not expired shall commence on the date of his or her election and shall continue for the remainder of the term of his or her predecessor.

#### Regulation 10 - Precedence
- 1. In the exercise of their judicial functions, the judges, irrespective of age, date of election or length of service, are of equal status.
- 2. The President, the First Vice-President and the Second Vice-President, while holding these offices, shall take precedence over all other judges.
- 3. Judges shall take precedence according to the date of the commencement of their respective terms of office.
- 4. Judges whose terms of office begin on the same date shall take precedence according to seniority of age.
- 5. A judge who is re-elected in accordance with article 36, paragraph 9 (c), or article 37, paragraph 2, shall retain his or her precedence.

#### Regulation 11 - The Presidency
- 1. The members of the Presidency shall attempt to achieve unanimity in any decision taken in carrying out their responsibilities under article 38, paragraph 3, failing which any such decision shall be taken by majority.
- 2. In the event that a member of the Presidency is unavailable or disqualified, his or her responsibilities as a member of the Presidency shall be carried out by the next available judge having precedence in accordance with regulation 10.
- 3. In exceptional circumstances such as in an emergency, where there is a need for the Presidency to act and where it is not possible for all three members of the Presidency to act together, the members of the Presidency who are immediately available may take the action required.
- 4. In the event that the President, the First Vice-President and the Second Vice-President are unavailable or disqualified, the functions of the President shall be carried out by the next available judge having precedence in accordance with regulation 10.

#### Regulation 12 - Service within the Appeals Chamber
In the event that a member of the Appeals Chamber is disqualified, or unavailable for a substantial reason, the Presidency shall, in the interests of the administration of justice, attach to the Appeals Chamber on a temporary basis a judge from either the Trial or Pre-Trial Division, subject to article 39, paragraph 1. Under no circumstances shall a judge who has participated in the pre-trial or trial phase of a case be eligible to sit on the Appeals Chamber hearing that case; nor shall a judge who has participated in the appeal phase of a case be eligible to sit on the pre-trial or trial phase of that case.

#### Regulation 13 - Presiding Judges [note 2]
- 1. The judges of the Appeals Chamber shall decide on a Presiding Judge for each appeal.
- 2. The judges of each Trial Chamber, each Pre-Trial Chamber and the Pre-Trial Division when acting under article 15 bis, paragraph 8 shall elect from amongst their members a Presiding Judge who shall carry out the functions conferred upon him or her by the Statute, Rules or otherwise.

#### Regulation 14 - President of the Division
The judges of each Division shall elect a President of the Division from amongst their members to oversee the administration of the Division. The President of the Division shall carry out this function for a period of one year.

#### Regulation 15 - Replacements
- 1. The Presidency shall be responsible for the replacement of a judge pursuant to rule 38 and in accordance with article 39 and shall also take into account, to the extent possible, gender and equitable geographical representation.
- 2. Without prejudice to the criteria listed in sub-regulation 1, replacement within the Appeals Chamber shall take place in accordance with regulation 12.

#### Regulation 16 - Alternate judges
Subject to the provisions of article 39 and pursuant to article 74, paragraph 1, alternate judges may be designated by the Presidency, on a case-by-case basis, first taking into account the availability of judges from the Trial Division and thereafter from the Pre-Trial Division.

#### Regulation 17 - Duty judge
- 1. The Presidency shall establish a duty roster of judges of the Pre-Trial Division. Each judge shall be on duty for a period of 14 days.
- 2. The duty judge shall be responsible for dealing with requests or applications:
  - (a) Where the request or application is submitted outside normal Registry hours, if the duty judge is satisfied that it is urgent; or
  - (b) Where the request or application is submitted during normal Registry hours and the Pre-Trial Chamber or Chamber referred to in regulation 46, sub-regulation 3, is unavailable, provided that the duty judge is satisfied that the matter is urgent and that it is appropriate for him or her to deal with it.
- 3. The duty roster of judges of the Pre-Trial Division shall be maintained by the Presidency and made available to the Registry.

#### Regulation 18 - Duty legal officers of the Chambers
- 1. The Presidency shall establish a duty roster of legal officers of the Chambers. Each legal officer shall be on duty for a period of 14 days.
- 2. The duty legal officer of the Chambers shall be responsible for assisting the duty judge.
- 3. The duty roster of legal officers of the Chambers shall be maintained by the Presidency and made available to the Registry.

#### Regulation 19 - Duty officers of the Registry
The Registrar shall establish a duty roster of officers of the Registry. Each officer shall be on duty for the period specified in the Regulations of the Registry.

# Chapter 3. Proceedings before the Court

#### Regulation 19 bis - Judicial recess [note 3]
- 1. The Presidency, in consultation with the judges, shall establish periods of judicial recess and issue guidelines in relation thereto.
- 2. Unless otherwise determined by a Chamber, during the judicial recess hearings shall be limited to urgent issues and time limits shall not be suspended.

#### Regulation 20 - Public hearings [note 4]
- 1. All hearings shall be held in public, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.
- 2. When a Chamber orders that certain hearings be held in closed or private session, the Chamber shall make public the reasons for such an order.
- 3. A Chamber may order the disclosure of all or part of the record of closed proceedings when the reasons for ordering its non-disclosure no longer exist.

#### Regulation 21 - Broadcasting, release of transcripts and recordings
- 1. The publicity of hearings may extend beyond the courtroom and may be through broadcasting by the Registry or release of transcripts or recordings, unless otherwise ordered by the Chamber.
- 2. In order to protect sensitive information, broadcasts of audio- and video-recordings of all hearings shall, unless otherwise ordered by the Chamber, be delayed by at least 30 minutes.
- 3. Witnesses and participants shall be informed that the public hearings of the Chamber are broadcast in accordance with this regulation. Any objection raised shall be ruled on by the Chamber in accordance with sub-regulations 4 and 5.
- 4. Any objection to the release of transcripts or recordings, or requests that certain testimony be excluded from broadcast, shall be made as soon as possible and, in any event, no later than at the commencement of the session at which the witness or participant is to appear.
- 5. The Chamber may decide to prohibit the broadcasting of any hearing of an objection until that objection has been ruled on.
- 6. The Chamber may order the termination of the broadcast of a hearing at any time.
- 7. All documentary evidence and other evidence introduced by a participant during a public hearing shall be available for broadcast, unless otherwise ordered by the Chamber.
- 8. At the request of a participant or the Registry, or proprio motu, and when possible within the time set out in sub-regulation 2, the Chamber may, in the interests of justice, order that any information likely to present a risk to the security or safety of victims, witnesses or other persons, or likely to be prejudicial to national security interests, shall not be published in any broadcast, audio- or video-recording or transcript of a public hearing.
- 9. The audio- and video-record of hearings shall be made available to the participants and the public in accordance with the procedures set out in the Regulations of the Registry, unless otherwise ordered by the Chamber.

#### Regulation 22 - Definition of documents
The term “document” shall include any motion, application, request, response, reply, observation, representation and any other submission in a form capable of delivering a written record to the Court.

#### Regulation 23 - Content of documents
- 1. Unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber, any document filed with the Court shall, as far as practicable, state:
  - (a) The identity of the person filing the document;
  - (b) The situation or case number, the name of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person, the name of counsel or representative, if any, and the Chamber to which the matter has been assigned;
  - (c) A brief summary of the reason for filing the document which is not a response or reply and the relief sought, if any;
  - (d) All relevant legal and factual issues, including details of the articles, rules, regulations or other applicable law relied upon.
- 2. All standard forms and templates for use during the proceedings before the Court shall be approved by the Presidency. The Presidency may refer any matter relating to the standard forms and templates to the Advisory Committee on Legal Texts for its consideration.
- 3. Subject to any order of the Chamber, a participant shall file, with each document, copies of any authorities relied upon or, if appropriate, internet links. Participants are not required to file copies of decisions or orders of the Court. Authorities shall be provided in an authorised version together with a translation in at least one of the working languages of the Court if the original is not in one of those languages.

#### Regulation 23 bis - Filing of documents marked ex parte, under seal or confidential [note 5]
- 1. Any document filed by the Registrar or a participant and marked “ex parte”, “under seal” or “confidential”, shall state the factual and legal basis for the chosen classification and, unless otherwise ordered by a Chamber, shall be treated according to that classification throughout the proceedings.
- 2. Unless otherwise ordered by a Chamber, any response, reply or other document referring to a document, decision or order marked “ex parte”, “under seal” or “confidential” shall be filed with the same classification. If there are additional reasons why a response, reply or any other document filed by the Registrar or a participant should be classified “ex parte”, “under seal”, or “confidential”, or reasons why the original document or other related documents should not be so classified, they shall be provided in the same document.
- 3. Where the basis for the classification no longer exists, whosoever instigated the classification, be it the Registrar or a participant, shall apply to the Chamber to re-classify the document. A Chamber may also re-classify a document upon request by any other participant or on its own motion. In the case of an application to vary a protective measure, regulation 42 shall apply.
- 4. This regulation shall apply mutatis mutandis to proceedings before the Presidency.

#### Regulation 23 ter - Classification of applications pursuant to article 58 [note 6]
- 1. Applications pursuant to article 58 shall be filed ex parte marked as “under seal” or “secret”, unless otherwise authorised by a Chamber.
- 2. Any filing that anticipates, relates to or refers to an application referred to in sub-regulation 1 shall also be filed ex parte marked as “under seal” or “secret”.
- 3. The existence and/or content of an application referred to in sub-regulation 1 may not be made public unless the Chamber seized of the application has ordered the reclassification of the application or authorised reference thereto.

#### Regulation 24 - Responses and replies [note 7]
- 1. The Prosecutor and the defence may file a response to any document filed by any participant in the case in accordance with the Statute, Rules, these Regulations and any order of the Chamber.
- 2. Victims or their legal representatives may file a response to any document when they are permitted to participate in the proceedings in accordance with article 68, paragraph 3, and rule 89, sub-rule 1, subject to any order of the Chamber.
- 3. States participating in the proceedings may file a response to any document, subject to any order of the Chamber.
- 4. A response referred to in sub-regulations 1 to 3 may not be filed to any document which is itself a response or reply.
- 5. Participants may only reply to a response with the leave of the Chamber, unless otherwise provided in these Regulations. Unless otherwise permitted by the Chamber, a reply must be limited to new issues raised in the response which the replying participant could not reasonably have anticipated.

#### Regulation 24 bis - Submissions by the Registrar [note 8]
- 1. The Registrar, when necessary for the proper discharge of his or her functions, in so far as they relate to any proceedings, may make oral or written submissions to a Chamber with notification to the participants.
- 2. The Registrar may file a document ex parte “Registrar only” if knowledge by the participants of the content of the document filed would defeat its purpose. The Chamber shall decide whether notice of the existence of the filing is to be provided to the participants.
- 3. Nothing in this regulation shall be taken to restrict other types of communication between Chambers and the Registrar.
- 4. This regulation shall apply mutatis mutandis to proceedings before the Presidency.

#### Regulation 25 - Communications other than in writing
A person making a communication to the Court under rule 102 shall indicate at the start of the communication:
- (a) His or her identity;
- (b) The situation or case number, if known;
- (c) The Chamber seized of the matter, if known;
- (d) The name of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person, if known;
- (e) The purpose of the communication;
- (f) When referring to a specific event, to the extent possible, the location, date and individuals involved.

#### Regulation 26 - Electronic management
- 1. The Court shall establish a reliable, secure, efficient electronic system which supports its daily judicial and operational management and its proceedings.
- 2. The Registry shall be responsible for the implementation of the system described in sub-regulation 1, taking into account the specific requirements of the judicial activity of the Court, including the need to ensure authenticity, accuracy, confidentiality and preservation of judicial records and material.
- 3. Documents, decisions and orders shall, whenever possible, be submitted in electronic version for registration by the Registry. The electronic version of filings shall be authoritative.
- 4. In proceedings before the Court, evidence other than live testimony shall be presented in electronic form whenever possible. The original form of such evidence shall be authoritative.

#### Regulation 27 - Transcripts
- 1. Real time transcripts of hearings shall be provided in at least one of the working languages of the Court to the extent technically possible. Transcripts of proceedings other than hearings may be provided upon request.
- 2. The transcripts constitute an integral part of the record of the proceedings. The electronic version of transcripts shall be authoritative.

#### Regulation 28 - Questions by a Chamber
- 1. A Chamber may order the participants to clarify or to provide additional details on any document within a time limit specified by the Chamber.
- 2. A Chamber may order the participants to address specific issues in their written or oral submissions within a time limit specified by the Chamber.
- 3. These provisions are without prejudice to the inherent powers of the Chamber.

#### Regulation 29 - Non-compliance with these Regulations and with orders of a Chamber
- 1. In the event of non-compliance by a participant with the provisions of any regulation, or with an order of a Chamber made thereunder, the Chamber may issue any order that is deemed necessary in the interests of justice.
- 2. This provision is without prejudice to the inherent powers of the Chamber.

#### Regulation 30 - Status conferences
A Chamber may hold status conferences by way of hearings, including by way of audio- or video-link technology or by way of written submissions. The Chamber may require use of standard forms at a status conference as appropriate. Such standard forms shall be approved in accordance with regulation 23, sub-regulation 2.

#### Regulation 31 - Notification
- 1. Subject to the Statute, Rules, these Regulations or any order of a Chamber, all participants in the relevant proceedings shall be notified of any document registered by the Registry or any decision or order, unless, with regard to a document, the participant submitting that document requests otherwise. All participants shall provide to the Registry an electronic, facsimile or postal contact address for notification of documents, preferably in The Hague.
- 2. Unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber, a participant is deemed notified, informed of or to have had communicated to him or her, a document, decision or order on the day it is effectively sent from the Court by the Registry. Such date shall be written on the notification form to be appended to all copies of the document, decision or order, as relevant. If the document, decision or order is not received, a participant may raise the issue and, as appropriate, may ask for a variation of the time limit in accordance with regulation 35. The Registrar shall retain and, if required, produce proof that the document, decision or order was effectively sent.
- 3. The relevant person shall be notified by way of personal service of the following documents:
  - (a) Warrants of arrest;
  - (b) Summonses to appear;
  - (c) Documents containing the charges; and
  - (d) Such other documents, decisions or orders ordered by the Chamber to be notified by way of personal service.
- 4. Notification by way of personal service may be proved in the following manner:
  - (a) By confirmation in writing on the prescribed form by the person serving the document that notification by way of personal service has been effected; and
  - (b) By a signed acknowledgement of notification by way of personal service on the prescribed form by the relevant person.
  Where the relevant person declines or is unable to sign an acknowledgement of notification by way of personal service, the confirmation in (a) above shall be proof of such notification.
- 5. In respect of oral decisions or orders, notification shall be deemed effective on the day the decision or order is rendered orally by the Chamber unless:
  - (a) A participant was not present or represented when the decision or order was pronounced, in which case that participant shall be notified of the oral decision or order in accordance with sub-regulation 2; or
  - (b) The Chamber has indicated that a written decision or order will follow, in which case participants shall be notified of the written decision or order in accordance with sub-regulation 2.

#### Regulation 32 - Recipients of documents, decisions and orders notified by the Court
- 1. A State shall be deemed notified when the official representative designated for proceedings before the Court has been notified of a document, decision or order. If a State does not designate such a representative, the State shall be deemed notified of the document, decision or order when it has been notified through the channel designated by that State in accordance with article 87.
- 2. Intergovernmental organisations and other organisations and institutions shall be deemed notified when the designated representative identified by the Registrar or the appropriate channel referred to in rule 177 has been notified of a document, decision or order.
- 3. A participant represented by counsel shall be deemed notified when his or her counsel has been notified of a document, decision or order at the electronic, facsimile or postal address which that counsel has indicated to the Registry in accordance with regulation 31, sub-regulation 1, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.
- 4. A person who is not represented by counsel shall be deemed notified when that person or the person, organisation or institution designated by that person has been notified of a document, decision or order.
- 5. The Prosecutor shall be deemed notified when the Office of the Prosecutor has been notified of a document, decision or order, unless it is explicitly specified that the Prosecutor shall be notified of the document, decision or order in person.

#### Regulation 33 - Calculation of time limits [note 9]
- 1. For the purposes of any proceedings before the Court, time shall be calculated as follows:
  - (a) Days shall be understood as calendar days;
  - (b) The day of notification of a document, decision or order shall not be counted as part of the time limit;
  - (c) Where the day of notification is a Friday, or the day before an official holiday of the Court, the time limit shall not begin to run until the next working day of the Court;
  - (d) Documents shall be filed with the Registry, at the latest, by 4pm on the first working day of the Court following expiry of the time limit.
- 2. Documents shall be filed with the Registry between 9am and 4pm The Hague time or the time of such other place as designated by the Presidency, a Chamber or the Registrar, except where the urgent procedure foreseen in regulation 24, sub-regulation 3 of the Regulations of the Registry applies.
- 3. Unless otherwise ordered by the Presidency or a Chamber, documents, decisions or orders received or filed after the filing time prescribed in sub-regulation 2 shall be notified on the next working day of the Court.

#### Regulation 34 - Time limits for documents filed with the Court [note 10]
Unless otherwise provided in the Statute, Rules or these Regulations, or unless otherwise ordered:
- (a) A Chamber may fix time limits for the submission of the initial document to be filed by a participant;
- (b) A response referred to in regulation 24 shall be filed within 10 days of notification in accordance with regulation 31 of the document to which the participant is responding;
- (c) A request for leave to reply shall be filed within three days of notification in accordance with regulation 31 of the response. The participants may respond to the request for leave to reply within two days. A Chamber may grant the request to file a reply within such time as it may specify in its order.

#### Regulation 35 - Variation of time limits
- 1. Applications to extend or reduce any time limit as prescribed in these Regulations or as ordered by the Chamber shall be made in writing or orally to the Chamber seized of the matter setting out the grounds on which the variation is sought.
- 2. The Chamber may extend or reduce a time limit if good cause is shown and, where appropriate, after having given the participants an opportunity to be heard. After the lapse of a time limit, an extension of time may only be granted if the participant seeking the extension can demonstrate that he or she was unable to file the application within the time limit for reasons outside his or her control.

#### Regulation 36 - Format of documents and calculation of page limits [note 11]
- 1. Headings, footnotes and quotations shall be counted in calculating the page limits.
- 2. The following shall not be counted in calculating the page limits:
  - (a) Any addendum containing verbatim quotations of the Statute, Rules or these Regulations;
  - (b) Any appendix containing references, authorities, copies from the record, exhibits and other relevant, non-argumentative material. An appendix shall not contain submissions;
  - (c) The cover page and the notification page.
- 3. All documents shall be submitted on A4 format. Margins shall be at least 2.5 centimetres on all four sides. All documents that are filed shall be paginated, including the cover sheet. The font shall be any of the following: Palatino Linotype, Times New Roman, Century Schoolbook, Bookman Old Style, Cambria, Georgia or Courier. The typeface of all documents shall be 12 point with 1.5 line spacing for the text and 10 point with single spacing for footnotes. No substantial submissions may be placed in the footnotes of a document.

#### Regulation 37 - Page limits for documents filed with the Registry
- 1. A document filed with the Registry shall not exceed 20 pages, unless otherwise provided in the Statute, Rules, these Regulations or ordered by the Chamber.
- 2. The Chamber may, at the request of a participant, extend the page limit in exceptional circumstances.

#### Regulation 38 - Specific page limits [note 12] [note 13]
- 1. Unless otherwise ordered by the Chamber, the page limit shall not exceed 120 pages for the following documents and responses thereto, if any:
  - (a) A pre-confirmation brief;
  - (b) A trial brief;
  - (c) A closing brief.
- 2. Unless otherwise ordered by the Chamber, the page limit shall not exceed 60 pages for the following documents and responses thereto, if any:
  - (a) A request under article 57, paragraph 3 (d), and rule 115, sub-rule 1, and the views submitted by the State Party as referred to in those provisions;
  - (b) The application of the Prosecutor for authorisation of the investigation under article 18, paragraph 2;
  - (c) Challenges to the admissibility or jurisdiction of the Court under article 19, paragraph 2;
  - (d) Requests by the State Party or the Security Council under article 53, paragraph 3 (a), to the Pre-Trial Chamber to reconsider a decision of the Prosecutor under article 53, paragraphs 1 and 2;
  - (e) The request for authorisation of an investigation under article 15, paragraph 3, and rule 50, sub-rule 2;
  - (f) Representations under article 75;
  - (g) Applications by the Prosecutor to the Pre-Trial Chamber under article 58;
  - (h) A pre-confirmation list of evidence under rule 121, sub-rule 3 or as ordered by the Chamber;
  - (i) A pre-trial list of evidence.
- 3. Unless otherwise ordered by the Chamber, the page limit shall not exceed 30 pages for the following documents and responses thereto, if any:
  - (a) Representations made by victims to the Pre-Trial Chamber under article 15, paragraph 3, and rule 50, sub-rule 3;
  - (b) Requests by the Prosecutor for a ruling regarding questions of jurisdiction or admissibility under article 19, paragraph 3;
  - (c) Requests by the Prosecutor to the Pre-Trial Chamber under article 18, paragraph 6, or article 19, paragraph 8;
  - (d) A document of the Prosecutor under article 56, paragraph 1 (a), containing the information that a unique investigative opportunity has arisen;
  - (e) A request by any participant to the Pre-Trial Chamber to take specific measures or to issue orders and warrants or to seek State cooperation;
  - (f) A request under rule 173 for compensation;
  - (g) A description of the charges by the Prosecutor under rule 121, sub-rule 3.

#### Regulation 39 - Language requirements
- 1. All documents and materials filed with the Registry shall be in English or French, unless otherwise provided in the Statute, Rules, these Regulations or authorised by the Chamber or the Presidency. If the original document or material is not in one of these languages, a participant shall attach a translation thereof.
- 2. Sub-regulation 1 shall not apply to victims who are not represented and do not have a sufficient knowledge of a working language of the Court or any other language authorised by the Chamber or the Presidency.
- 3. When a Chamber, in accordance with article 50, paragraph 3, and following consultation with the Registrar, authorises use by a participant of a language other than English or French, the expenses for interpretation and translation shall be borne by the Court.

#### Regulation 40 - Language services of the Registry
- 1. The Registrar shall ensure that the decisions and texts envisaged in article 50, paragraph 1, and in rule 40, are translated into all the official languages of the Court. In addition, the Registrar shall ensure translation of those texts referred to in regulation 7, which the Presidency decides should be translated into all the official languages of the Court.
- 2. The Registrar shall ensure that interpretation services are provided in all proceedings:
  - (a) For English and French and any other official language used as a working language in accordance with rule 41;
  - (b) For the language of the person to whom article 58 applies, the accused, convicted or acquitted person if he or she does not fully understand or speak any of the working languages;
  - (c) For the other language, if any, authorised by the Chamber pursuant to article 50, paragraph 3, subject to regulation 39, sub-regulation 3.
- 3. The Registrar shall ensure translation into the other working language(s) of all decisions or orders taken by Chambers during proceedings.
- 4. The Registrar shall ensure translation and interpretation for the cases listed in regulation 39, sub-regulation 2.
- 5. The Registrar shall, if necessary, ensure translation into the language chosen by the requested State of requests under Part 9 of the Statute transmitted by the Registrar in accordance with article 87, paragraph 2, and rule 176, sub-rule 2.
- 6. The Registrar shall ensure translation into the language of the person to whom article 55, paragraph 2, or article 58 applies, the accused, convicted or acquitted person, if he or she does not fully understand or speak any of the working languages, of all decisions or orders in his or her case. Counsel shall be responsible for informing that person of the other documents in his or her case.

#### Regulation 41 - Victims and Witnesses Unit [note 14]
The Victims and Witnesses Unit may, pursuant to article 68, paragraph 4, draw any matter to the attention of a Chamber where protective measures under rule 87 or special measures under rule 88 require its consideration.

#### Regulation 42 - Application and variation of protective measures
- 1. Protective measures once ordered in any proceedings in respect of a victim or witness shall continue to have full force and effect in relation to any other proceedings before the Court and shall continue after proceedings have been concluded, subject to revision by a Chamber.
- 2. When the Prosecutor discharges disclosure obligations in subsequent proceedings, he or she shall respect the protective measures as previously ordered by a Chamber and shall inform the defence to whom the disclosure is being made of the nature of these protective measures.
- 3. Any application to vary a protective measure shall first be made to the Chamber which issued the order. If that Chamber is no longer seized of the proceedings in which the protective measure was ordered, application may be made to the Chamber before which a variation of the protective measure is being requested. That Chamber shall obtain all relevant information from the proceedings in which the protective measure was first ordered.
- 4. Before making a determination under sub-regulation 3, the Chamber shall seek to obtain, whenever possible, the consent of the person in respect of whom the application to rescind, vary or augment protective measures has been made.

#### Regulation 43 - Testimony of witnesses
Subject to the Statute and the Rules, the Presiding Judge, in consultation with the other members of the Chamber, shall determine the mode and order of questioning witnesses and presenting evidence so as to:
- (a) Make the questioning of witnesses and the presentation of evidence fair and effective for the determination of the truth;
- (b) Avoid delays and ensure the effective use of time.

#### Regulation 44 - Experts [note 15]
- 1. The Registrar shall create and maintain a list of experts accessible at all times to all organs of the Court and to all participants. Experts shall be included on such a list following an appropriate indication of expertise in the relevant field. A person may seek review by the Presidency of a negative decision of the Registrar. The Chamber has discretion to allow the introduction of expert evidence from persons who are not on the list of experts.
- 2. The Chamber may direct the joint instruction of an expert by the participants.
- 3. On receipt of the report prepared by an expert jointly instructed, a participant may apply to the Chamber for leave to instruct a further expert.
- 4. The Chamber may proprio motu instruct an expert.
- 5. The Chamber may issue any order as to the subject of an expert report, the number of experts to be instructed, the mode of their instruction, the manner in which their evidence is to be presented and the time limits for the preparation and notification of their report.

#### Regulation 45 - Information provided by the Prosecutor [note 16]
- 1. The Prosecutor shall inform the Presidency in writing as soon as a situation has been referred to the Prosecutor by a State Party under article 14 or by the Security Council under article 13, sub-paragraph (b); and shall provide the Presidency with any other information that may facilitate the timely assignment of a situation to a Pre-Trial Chamber, including, in particular, the intention of the Prosecutor to submit a request under article 15, paragraph 3.
- 2. The Prosecutor shall inform the Presidency in writing if he or she intends to proceed with an investigation in respect of a crime of aggression, in accordance with article 15 bis, paragraph 7.
- 3. The Prosecutor shall inform the President of the Pre-Trial Division in writing if he or she intends to seek the authorisation of the Pre-Trial Division to commence an investigation in respect of a crime of aggression, in accordance with article 15 bis, paragraph 8.

#### Regulation 46 - Pre-Trial Chamber and Division [note 17]
- 1. The Presidency shall constitute permanent Pre-Trial Chambers with fixed compositions.
- 2. The Presidency shall assign a situation to a Pre-Trial Chamber as soon as the Prosecutor has informed the Presidency in accordance with regulation 45, paragraph 1. The Presidency shall also assign a situation to a Pre-Trial Chamber, if necessary: following the receipt of information from the Prosecutor in accordance with regulation 45, paragraph 2, or, as soon as the Pre-Trial Division, in accordance with article 15 bis, paragraph 8, authorises the commencement of an investigation. The Pre-Trial Chamber shall be responsible for any matter, request or information arising out of the situation assigned to it, save that, at the request of a Presiding Judge of a Pre-Trial Chamber, the President of the Pre-Trial Division may decide to assign a matter, request or information arising out of that situation to another Pre-Trial Chamber in the interests of the administration of justice.
- 3. Any matter, request or information not arising out of a situation assigned to a Pre-Trial Chamber in accordance with sub-regulation 2, shall be directed by the President of the Pre-Trial Division to a Pre-Trial Chamber according to a roster established by the President of that Division.
- 4. For the purposes of article 15 bis, paragraph 8, the Pre-Trial Division shall be composed of all the judges assigned to the Pre-trial Division pursuant to article 39, paragraph 1.

#### Regulation 47 - Single judge
- 1. The designation of a single judge in accordance with article 39, paragraph 2 (b) (iii), and rule 7 shall be based on criteria agreed upon by the Pre-Trial Chamber, including seniority of age and criminal trial experience. Other criteria may include consideration of the issues involved and the circumstances of the proceedings before the Chamber, as well as the distribution of work within the Chamber and the proper management and efficiency in the handling of cases.
- 2. The single judge designated by the Pre-Trial Chamber shall, as far as possible, act for the duration of a case. The Pre-Trial Chamber may designate more than one single judge when the efficient management of the workload of the Chamber so requires.

#### Regulation 48 - Information necessary for the Pre-Trial Chamber
- 1. The Pre-Trial Chamber may request the Prosecutor to provide specific or additional information or documents in his or her possession, or summaries thereof, that the Pre-Trial Chamber considers necessary in order to exercise the functions and responsibilities set forth in article 53, paragraph 3 (b), article 56, paragraph 3 (a), and article 57, paragraph 3 (c).
- 2. The Pre-Trial Chamber shall take such measures as are necessary under articles 54, 72 and 93 to protect the information and documents referred to in sub-regulation 1 and under article 68, paragraph 5, to protect the safety of witnesses and victims and members of their families.
- 3. Nothing in this regulation shall prejudice the requirements of confidentiality applicable under article 54, paragraph 3 (e) and (f).

#### Regulation 49 - The request for authorisation
- 1. A request by the Prosecutor to a Pre-Trial Chamber for authorisation of an investigation pursuant to article 15, paragraph 3, shall be in writing and shall contain:
  - (a) A reference to the crimes which the Prosecutor believes have been or are being committed and a statement of the facts being alleged to provide the reasonable basis to believe that those crimes have been or are being committed;
  - (b) A declaration of the Prosecutor with reasons that the listed crimes fall within the jurisdiction of the Court.
- 2. The statement of the facts referred to in sub-regulation 1 (a) shall indicate, as a minimum:
  - (a) The places of the alleged commission of the crimes, e.g. country, town, as precisely as possible;
  - (b) The time or time period of the alleged commission of the crimes; and
  - (c) The persons involved, if identified, or a description of the persons or groups of persons involved.
- 3. The appendix to the request shall include, if possible:
  - (a) The chronology of relevant events;
  - (b) Maps showing relevant information, including the location of the alleged crimes; and
  - (c) An explanatory glossary of relevant names of persons, locations and institutions.

#### Regulation 50 - Specific time limits
- 1. The time limit for victims to make representations under article 15, paragraph 3, and rule 50, sub-rule 3, shall be 30 days following information given in accordance with rule 50, sub-rule 1.
- 2. The time limit for a State Party to express its views on a request by the Prosecutor for authorisation to take certain measures within its territory in accordance with rule 115, sub-rule 2, shall be ten days from notification.

#### Regulation 51 - Decision on interim release
For the purposes of a decision on interim release, the Pre-Trial Chamber shall seek observations from the host State and from the State to which the person seeks to be released.

#### Regulation 52 - Document containing the charges [note 18]
- 1. The document containing the charges referred to in article 61 shall contain only:
  - (a) The full name of the person and any other relevant identifying information;
  - (b) A statement of the facts, including the time and place of the alleged crimes, which provides a sufficient legal and factual basis to bring the person or persons to trial, including relevant facts for the exercise of jurisdiction by the Court;
  - (c) A legal characterisation of the facts to accord both with the crimes under articles 6, 7, 8 or 8 bis and the precise form of participation under articles 25 and 28.
- 2. The document containing the charges shall not contain any submissions or references to, or analysis of, evidence. All such material in support of the charges shall be presented in a separate pre-confirmation brief to be submitted simultaneously.

#### Regulation 53 - Decision of the Pre-Trial Chamber following the confirmation hearing [note 19]
- 1. The written decision of the Pre-Trial Chamber setting out its findings on each of the charges shall be delivered within 60 days from the date the confirmation hearing ends.
- 2. The decision of a Pre-Trial Chamber confirming charges shall contain a separate operative part which reproduces the confirmed charges by setting out the text of the charges presented by the Prosecutor, as adapted by the Pre-Trial Chamber in conformity with its findings. The confirmed charges as reproduced in the operative part shall not contain any footnotes or cross references to evidence, analysis, or submissions. A decision by a Pre-Trial Chamber or Trial Chamber on the amendment or partial withdrawal of charges pursuant to article 61(9) shall contain an operative part reproducing the confirmed charges in full.

#### Regulation 53 bis - Transmission of the record of the proceedings following committal [note 20]
- 1. In the case of a committal of the accused to the Trial Chamber, the Pre-Trial Chamber shall immediately instruct the Registrar to transmit the decision on the confirmation of charges and the record of the proceedings to the Presidency in accordance with rule 129.
- 2. Between this transmission to the Presidency and the Presidency’s transmission of the record to the Trial Chamber under rule 130, documents may continue to be filed before the Pre-Trial Chamber, pending the Trial Chamber’s constitution.

#### Regulation 54 - Status conferences before the Trial Chamber
At a status conference, the Trial Chamber may, in accordance with the Statute and the Rules, issue any order in the interests of justice for the purposes of the proceedings on, inter alia, the following issues:
- (a) The length and content of legal arguments and the opening and closing statements;
- (b) A summary of the evidence the participants intend to rely on;
- (c) The length of the evidence to be relied on;
- (d) The length of questioning of the witnesses;
- (e) The number and identity (including any pseudonym) of the witnesses to be called;
- (f) The production and disclosure of the statements of the witnesses on which the participants propose to rely;
- (g) The number of documents as referred to in article 69, paragraph 2, or exhibits to be introduced together with their length and size;
- (h) The issues the participants propose to raise during the trial;
- (i) The extent to which a participant can rely on recorded evidence, including the transcripts and the audio- and video-record of evidence previously given;
- (j) The presentation of evidence in summary form;
- (k) The extent to which evidence is to be given by an audio- or video-link;
- (l) The disclosure of evidence;
- (m) The joint or separate instruction by the participants of expert witnesses;
- (n) Evidence to be introduced under rule 69 as regards agreed facts;
- (o) The conditions under which victims shall participate in the proceedings;
- (p) The defences, if any, to be advanced by the accused.

#### Regulation 55 - Authority of the Chamber to modify the legal characterisation of facts [note 21]
- 1. In its decision under article 74, the Chamber may change the legal characterisation of facts to accord with the crimes under articles 6, 7, 8 or 8 bis, or to accord with the form of participation of the accused under articles 25 and 28, without exceeding the facts and circumstances described in the charges and any amendments to the charges.
- 2. If, at any time during the trial, it appears to the Chamber that the legal characterisation of facts may be subject to change, the Chamber shall give notice to the participants of such a possibility and having heard the evidence, shall, at an appropriate stage of the proceedings, give the participants the opportunity to make oral or written submissions. The Chamber may suspend the hearing to ensure that the participants have adequate time and facilities for effective preparation or, if necessary, it may order a hearing to consider all matters relevant to the proposed change.
- 3. For the purposes of sub-regulation 2, the Chamber shall, in particular, ensure that the accused shall:
  - (a) Have adequate time and facilities for the effective preparation of his or her defence in accordance with article 67, paragraph 1 (b); and (b) If necessary, be given the opportunity to examine again, or have examined again, a previous witness, to call a new witness or to present other evidence admissible under the Statute in accordance with article 67, paragraph 1 (e).

#### Regulation 56 - Evidence under article 75
The Trial Chamber may hear the witnesses and examine the evidence for the purposes of a decision on reparations in accordance with article 75, paragraph 2, at the same time as for the purposes of trial.

#### Regulation 56 bis - Procedure for motions for acquittal [note 22]
- 1. Pursuant to rule 140 quater, the defence may file an application for leave to present a motion for acquittal, not exceeding three pages, no later than three days after the conclusion of the evidence presented by the Prosecutor, or if evidence is presented on behalf of the victims, three days after the conclusion of that evidence.
- 2. The Prosecutor and legal representatives of victims may file a response to the leave application, not exceeding three pages, within five days of notification of the leave application.
- 3. If the Trial Chamber grants leave:
  - (a) The defence shall file its motion in writing not exceeding 10 pages, within seven days of notification of the Trial Chamber’s decision.
  - (b) Any response by the Prosecutor and legal representatives of victims shall not exceed 10 pages and shall be filed within seven days of notification of the defence motion.
  - (c) The Trial Chamber shall schedule the hearing prescribed by rule 140 quater, sub-rule 6, to be held within 14 days of the filing of the responses.
- 4. If the Trial Chamber decides proprio motu to consider the sufficiency of the evidence on all or some of the charges in accordance with rule 140 quater, sub-rule 9:
  - (a) The Trial Chamber shall notify the parties and participants of this decision and order the filing of submissions for the charges which it intends to consider.
  - (b) The parties and legal representatives of victims shall file submissions within 30 days of notification of the Trial Chamber’s order.
  - (c) A hearing shall be scheduled to be held within 30 days of notification of the submissions referred to in sub-regulation 4(b). If necessary, the Trial Chamber may require the submission of further written arguments in advance of and/or following the hearing.
  - (d) The Trial Chamber shall issue its decision as expeditiously as possible within 60 days of the hearing or written arguments referred to in sub-regulation 4(c), whichever is later.
  - (e) If the Trial Chamber decides to enter a decision of acquittal on all or some of the charges proprio motu, the provision of rule 140 quater, sub-rule 8, shall apply mutatis mutandis.

#### Regulation 57 - Appeal [note 23]
For the purposes of rule 150, the appellant shall file a notice of appeal which shall state: (a) The name and number of the case; (b) The title and date of the decision of conviction or acquittal, sentence or reparation order appealed against; (c) Whether the appeal is directed against the whole decision or part thereof; (d) The specific provision of the Statute pursuant to which the appeal is filed; (e) The grounds of appeal, cumulatively or in the alternative, specifying the alleged errors and how they affect the appealed decision; (f) The relief sought.

#### Regulation 58 - Appeal brief [note 24]
- 1. Having filed a notice of appeal in accordance with regulation 57, the appellant shall file an appeal brief within 90 days of notification of the relevant decision.
- 2. The appeal brief shall set out the legal and/or factual reasons in support of each ground of appeal. Reference shall be made to the relevant part of the record or any other document or source of information as regards any factual issue. Each legal reason shall be set out together with reference to any relevant article, rule, regulation or other applicable law, and any authority cited in support thereof. Where applicable, the finding or ruling challenged in the decision shall be identified, with specific reference to the page and paragraph number.
- 3. The appeal brief shall not exceed 100 pages.

#### Regulation 59 - Response [note 25]
- 1. A participant may file a response within 60 days of notification of the appeal brief described in regulation 58 as follows:
  - (a) Each ground of appeal shall be answered separately, stating whether it is opposed, in whole or in part, together with the grounds put forward in support thereof; it shall also be stated whether the relief sought is opposed, in whole or in part, together with the grounds of opposition in support thereto;
  - (b) When facts are relied on that are not already set out in the notice of appeal or the appeal brief, reference shall be made to the relevant part of the record or any other document or source of information;
  - (c) Each legal reason relied on in support of the response shall be set out together with reference to any relevant article, rule, regulation or other applicable law, and any authority cited in support thereof.
- 2. The response shall not exceed 100 pages. To the extent possible, it shall be set out and numbered in the same order as in the appeal brief described in regulation 58.

#### Regulation 60 - Reply
- 1. Whenever the Appeals Chamber considers it necessary in the interests of justice, it may order the appellant to file a reply within such time as it may specify in its order.
- 2. Any reply filed in accordance with sub-regulation 1 shall not exceed 50 pages. To the extent possible, it shall be set out and numbered in the same order as in the documents described in regulations 58 and 59.

#### Regulation 61 - Variation of grounds of appeal presented before the Appeals Chamber [note 26]
- 1. An application for variation of grounds of appeal shall state the name and number of the case and shall specify the variation sought and the reasons in support thereof.
- 2. The application for variation shall be filed as soon as the reasons warranting it become known.
- 3. Participants may file a response within seven days of notification of the application for variation.
- 4. The response shall state the name and number of the case and shall specify the legal or factual reasons advanced by way of opposition.
- 5. If the variation is granted and the time limit for the filing of the appeal brief is still running, the Appeals Chamber may:
  - (a) maintain the time limit for the filing of the appeal brief; or
  - (b) extend the time limit for the filing of the appeal brief; or
  - (c) maintain the time limit for the filing of the appeal brief in relation to the grounds of appeal set out in the notice of appeal that have not been varied, but order the filing of a supplemental brief containing the varied grounds of appeal and the legal or factual reasons in support thereof within a time and page limit specified by the Appeals Chamber. Regulation 58, sub-regulation 2, shall apply mutatis mutandis to the supplemental brief.
- 6. If the variation is granted and the appeal brief has already been filed, the Appeals Chamber shall specify both the time and page limit within which the appellant shall file a supplemental brief setting out the grounds of appeal as varied, including the legal and factual reasons in support of each ground of appeal. Regulation 58, sub-regulation 2, shall apply mutatis mutandis to the supplemental brief.
- 7. Any response to the supplemental brief described in sub-regulations 5 or 6 above shall be filed within the time limit specified by the Appeals Chamber. The Appeals Chamber may also fix a page limit for the response and otherwise regulation 59 shall apply mutatis mutandis.
- 8. Regulation 60 shall apply mutatis mutandis with regard to any reply to the response filed in accordance with sub-regulation 7.

#### Regulation 62 - Additional evidence presented before the Appeals Chamber
- 1. A participant seeking to present additional evidence shall file an application setting out:
  - (a) The evidence to be presented;
  - (b) The ground of appeal to which the evidence relates and the reasons, if relevant, why the evidence was not adduced before the Trial Chamber.
- 2. The Appeals Chamber may:
  - (a) Decide to first rule on the admissibility of the additional evidence, in which case it shall direct the participant affected by the application filed under sub-regulation 1 to address the issue of admissibility of the evidence in his or her response, and to adduce any evidence in response only after a decision on the admissibility of that evidence has been issued by the Appeals Chamber; or
  - (b) Decide to rule on the admissibility of the additional evidence jointly with the other issues raised in the appeal, in which case it shall direct the participant affected by the application filed under sub-regulation 1 to both file a response setting out arguments on that application and to adduce any evidence in response.
- 3. The responses described in sub-regulation 2 shall be filed within a time limit specified by the Appeals Chamber and shall be set out and numbered, to the extent possible, in the same order as in the application to present evidence.
- 4. If several defendants are participants in the appeal, the evidence admitted on behalf of any of them shall, where relevant, be considered in respect of all of them.

#### Regulation 63 - Consolidated appeals under rule 150 [note 27]
- 1. Unless otherwise ordered by the Appeals Chamber, in a case of more than one appeal under rule 150:
  - (a) When the Prosecutor appeals, he or she shall file one consolidated appeal brief in accordance with regulation 58;
  - (b) When more than one convicted person files an appeal brief, the Prosecutor shall file a consolidated response in accordance with regulation 59.
- 2. Regulation 60 shall apply mutatis mutandis and any reply filed by the Prosecutor shall be by way of a consolidated reply.
- 3. For a consolidated appeal brief and a consolidated response, as described in sub-regulation 1, the page limit shall be 100 pages plus a further 40 pages for each additional convicted or acquitted person. The page limit for any consolidated reply as described in sub-regulation 2 shall be 50 pages plus a further 20 pages for each additional convicted or acquitted person.
- 4. The time limit for filing a consolidated response by the Prosecutor shall run from notification of the last appeal brief filed by a convicted person in a given case.

#### Regulation 64 - Appeals under rule 154 [note 28]
- 1. With the exception of appeals filed under article 82, paragraph 1 (b), a notice of appeal filed for the purposes of rule 154 shall state: (a) The name and number of the case or situation; (b) The title and date of the decision being appealed; (c) Whether the appeal is directed against the whole decision or part thereof; (d) The specific provision of the Statute pursuant to which the appeal is filed; (e) The relief sought.
- 2. Subject to sub-regulations 6 and 8, the appellant shall file an appeal brief within 21 days of notification of the relevant decision. The appeal brief shall set out the grounds of appeal and shall contain the legal and/or factual reasons in support of each ground of appeal. Reference shall be made to the relevant part of the record or any other document or source of information as regards any factual issue. Each legal reason shall be set out together with reference to any relevant article, rule, regulation or other applicable law, and any authority cited in support thereof. The appeal brief shall, where applicable, identify the finding or ruling challenged in the decision, with specific reference to the page and paragraph number.
- 3. Grounds of appeal may be advanced cumulatively or in the alternative.
- 4. Subject to sub-regulations 6 and 8, a participant may file a response within 21 days of notification of the appeal brief as follows: (a) Each ground of appeal shall be answered separately, stating whether it is opposed, in whole or in part, together with the grounds put forward in support thereof; it shall also be stated whether the relief sought is opposed, in whole or in part, together with the grounds of opposition in support thereto; (b) The legal and/or factual reasons in support.
- 5. For appeals filed under article 82, paragraph 1 (b) and rule 154, the notice of appeal shall state: (a) The name and number of the case or situation; (b) The title and date of the decision being appealed; (c) Whether the appeal is directed against the whole decision or part thereof; (d) The specific provision of the Statute pursuant to which the appeal is filed; (e) The grounds of appeal, cumulatively or in the alternative, specifying the alleged errors and how they affect the appealed decision; (f) The relief sought.
- 6. For appeals filed under article 82, paragraph 1 (b) and rule 154, the Appeals Chamber shall, within two days of the filing of the notice of appeal, issue directions for the conduct of the proceedings, which may, at its full discretion, include: (a) Scheduling a hearing to be held no later than 10 days from the notification of the notice of appeal. Depending on the circumstances, the Appeals Chamber may decide to adjourn the hearing following all or some of the participants’ submissions and resume the hearing on a later date. The holding of a hearing is without prejudice to the Appeals Chamber also requiring the submission of written arguments or summaries thereof in advance of and/or following the hearing. The date of the hearing may be fixed after the 10 day deadline if necessary; or (b) Proceeding by way of written submissions only and setting a timetable therefor.
- 7. For appeals against a decision pursuant to article 60, paragraphs 2 or 4, the Appeals Chamber shall render its reasoned judgment within 45 days from the date of any hearing, or, in the event that any hearing is held after the 10 day deadline as provided for in sub-regulation 6 above, not later than 75 days from the rendering of the decision being appealed. For appeals against a decision pursuant to article 60, paragraph 3, the Appeals Chamber shall render its reasoned judgment within 30 days from the date of any hearing, or, in the event that any hearing is held after the 10 day deadline as provided for in sub-regulation 6 above, not later than 55 days from the rendering of the decision being appealed.
- 8. For appeals filed under article 82, paragraph 1 (c), the appeal brief shall be filed by the appellant within four days of notification of the relevant decision. The response shall be filed within two days of notification of the appeal brief.

#### Regulation 65 - Appeals under rule 155 [note 29]
- 1. An application for leave to appeal under rule 155 shall state the name and number of the case or situation and shall specify the legal and/or factual reasons in support thereof. If the facts relied upon in support are not apparent from the record of the proceedings, they shall, as far as possible, be substantiated by a solemn affirmation by a person having knowledge of the facts stated therein.
- 2. An application for leave to appeal under article 82, paragraph 1 (d), shall specify the reasons warranting immediate resolution by the Appeals Chamber of the matter at issue.
- 3. Participants may file a response within three days of notification of the application described in sub-regulation 1, unless the Pre-Trial or Trial Chamber concerned orders an immediate hearing of the application. In the latter case, the participants shall be afforded an opportunity to be heard orally.
- 4. When leave to appeal is granted, the appellant shall file, within ten days of notification of the decision granting leave to appeal, an appeal brief in accordance with regulation 64, sub-regulation 2. Such document shall also contain the precise title and date of filing of the decision granting leave to appeal.
- 5. Participants may file a response within ten days of notification of the appeal brief. Regulation 64, sub-regulation 4, shall apply mutatis mutandis.

#### Regulation 66 - Procedure leading to the determination on revision
- 1. An application for revision under article 84, paragraph 1, and rule 159 shall state the name and number of the original case. An application under article 84, paragraph 1 (a), shall set out the new facts or evidence, unknown or unavailable at the time of trial, and shall indicate the effect that the production of such facts or evidence at the trial might have had upon the decision of the Court. Other applications shall set out the reasons in accordance with article 84, paragraph 1 (b) or (c). The facts relied upon in any application for revision shall, as far as possible, be supported by a solemn affirmation by a person having knowledge of the facts. The application shall not exceed 100 pages.
- 2. As far as possible, the application for revision shall be notified to the participants in the original proceedings and to any other person having a direct interest in the revision proceedings. Such participants and persons may file a response within 40 days of notification of that application.
- 3. The response described in sub-regulation 2 shall contain the name and number of the case and shall set out the legal and/or factual reasons advanced in support thereof. Facts tending to deny or contradict the existence of the facts upon which the application is founded shall be outlined in the response and shall be supported by a solemn affirmation by a person having knowledge of such facts. The response shall not exceed 100 pages.
- 4. Whenever the Appeals Chamber considers it necessary in the interests of justice, it may order the appellant to file a reply within such time as it may specify in its order.

#### Regulation 66 bis - Constitution of Chambers and the panel of three judges [note 30]
- 1. The President of the Pre-Trial Division, at the request of the Pre-Trial Chamber seized of the relevant situation, shall constitute, in accordance with rule 165(2), a Chamber composed of one judge from the Pre-Trial Division to exercise the functions and powers of the Pre-Trial Chamber from the moment of receipt of an application under article 58 with respect to offences defined in article 70.
- 2. The Presidency shall constitute, in accordance with rule 165(2), a Chamber composed of one judge to exercise the functions and powers of the Trial Chamber, and a panel of three judges to decide appeals with respect to offences defined in article 70. This provision shall not apply in the event of a joinder of charges pursuant to rule 165(4).

#### Regulation 66 ter - Closure and reopening of case and situation records [note 31]
- 1. The Presidency may assign a case in relation to which all trial and appeals proceedings have been concluded to a Chamber. Such Chamber may order the Registrar, when appropriate, to close the record of the case. Such Chamber shall be responsible for judicial matters of a residual nature in this case, unless otherwise provided in the Statute, the Rules or these Regulations.
- 2. (a) When the Prosecutor, having provided information in accordance with regulation 45, sub-regulation 1, decides not to initiate an investigation, or determines that he or she does not anticipate any further investigatory or prosecutorial activities in a situation in relation to which an investigation has been initiated, he or she shall inform in writing the Pre-Trial Chamber to which the situation has been assigned.
  - (b) Having been so informed, the Pre-Trial Chamber may, upon application or proprio motu, order the Registrar, when appropriate, to close the record of the situation. The Pre-Trial Chamber shall be responsible for judicial matters of a residual nature in this situation, unless otherwise provided in the Statute, the Rules or these Regulations or such matters are assigned to another Chamber by the Presidency.
  - (c) The closure of the record of a situation shall be without prejudice to a future reopening should the Prosecutor decide to initiate or resume the investigation in accordance with the Statute, the Rules and these Regulations.
- 3. A situation or case record shall be reopened by the Registry upon direction by a Chamber or the Presidency as necessary. Such reopening of the situation or case record is without prejudice to any judicial determination on the resumption of judicial activity in the situation or case.

# Chapter 4. Counsel issues and legal assistance

#### Regulation 67 - Criteria to be met by counsel [note 33]
- 1. Subject to regulation 78, sub-regulation 2, the necessary relevant experience for counsel as described in rule 22 shall be at least ten years for lead counsel and at least eight years for associate counsel.
- 2. Counsel should not have been convicted of a serious criminal or disciplinary offence considered to be incompatible with the nature of the office of counsel before the Court.

#### Regulation 68 - Assistants to counsel [note 34]
Persons assisting counsel as described in rule 22, sub-rule 1, may include persons who can assist counsel in the presentation of the case before a Chamber. The criteria to be met by these persons shall be determined in the Regulations of the Registry.

#### Regulation 69 - Proof and control of criteria to be met by counsel [note 35]
- 1. A person seeking to act as counsel shall complete the forms provided by the Registrar for this purpose.
- 2. A person referred to in sub-regulation 1 shall also provide:
  - (a) A detailed curriculum vitae;
  - (b) A certificate issued by each Bar association the person is registered with, and/or each relevant controlling administrative authority confirming his or her qualifications, the right to practise and the existence, if any, of disciplinary sanctions or ongoing disciplinary proceedings; and
  - (c) A certificate issued by the relevant authority of each State of which the person is a national or where the person is domiciled stating the existence, if any, of criminal convictions.
- 3. Counsel and persons seeking to act as counsel shall immediately inform the Registrar of any changes to the information he or she has provided that are more than de minimis, including the initiation of any criminal or disciplinary proceedings against him or her.
- 4. The Registrar may at any stage take steps to verify the information provided by counsel.

#### Regulation 70 - Inclusion in the list of counsel [note 36]
- 1. On receipt of an application by a person seeking to be included in the list of counsel, the Registrar shall establish whether the person has provided the information required under regulation 69. Thereafter, the Registrar shall acknowledge receipt of the application and, where relevant, direct the person to submit additional information.
- 2. The decision as to whether a person shall be included in the list of counsel shall be notified to that person. If the application is refused, the Registrar shall provide reasons and information on how to apply for review of that decision in accordance with regulation 72.
- 3. If counsel is retained without legal assistance paid by the Court, and if that person is not in the list of counsel, he or she may apply to be included in that list. Regulations 71 and 72 shall apply.

#### Regulation 71 - Removal and suspension from the list of counsel [note 37]
- 1. The Registrar shall remove a counsel from the list of counsel where he or she:
  - (a) No longer meets the criteria required for inclusion in the list of counsel;
  - (b) Has been permanently banned from practising before the Court as a result of disciplinary proceedings held in accordance with the Code of Professional Conduct for counsel;
  - (c) Has been found guilty of an offence against the administration of justice as described in article 70, paragraph 1; or
  - (d) Has been permanently interdicted from exercising his or her functions before the Court in accordance with rule 171, sub-rule 3.
- 2. The Registrar shall suspend a counsel from the list of counsel while he or she is:
  - (a) Temporarily suspended in a disciplinary proceeding according to the Code of Professional Conduct for counsel; or
  - (b) Temporarily interdicted from exercising his or her functions before the Court for a period exceeding 30 days in accordance with rule 171, sub-rule 3.
- 3. The Registrar shall notify the relevant counsel of his or her decision under sub-regulations 1 or 2. The Registrar shall provide reasons and information on how to apply for review of that decision in accordance with regulation 72.

#### Regulation 72 - Review of decisions of the Registrar [note 38]
- 1. An application may be made to the Presidency for review of:
  - (a) A decision under regulation 70, sub-regulation 2, refusing to include a person in the list of counsel;
  - (b) A decision under regulation 71, sub-regulation 1, removing counsel from the list of counsel;
  - (c) A decision under regulation 71, sub-regulation 2, suspending counsel from the list of counsel; or
  - (d) A decision by the Registrar refusing to confirm the retention of counsel where legal assistance is not paid by the Court.
- 2. Applications as described in sub-regulation 1 shall be set out in accordance with regulation 23 and shall be filed within 15 days of notification of the relevant decision of the Registrar.
- 3. The Registrar may file a response within 15 days of notification of the applications referred to in sub-regulation 1.
- 4. The Presidency may ask the Registrar to provide any additional information necessary to decide on an application. The decision of the Presidency shall be final.

#### Regulation 73 - Duty counsel [note 39]
- 1. The Registrar shall identify counsel from the list of counsel who are willing to represent any person before the Court or to represent the interests of the defence as duty counsel. Duty counsel may specify the particular locations where he or she would be able to attend. Duty counsel shall have at least ten years’ experience, as referred to in regulation 67, sub-regulation 1.
- 2. The Registrar may appoint duty counsel if a person requires legal assistance and has not yet secured that assistance, or when his or her counsel is unavailable and has consented to the appointment of duty counsel. The Registrar shall take into account the wishes of the person, the expertise of duty counsel, the geographical proximity of, and the languages spoken by, the counsel. Decisions taken pursuant to this sub-regulation may be reviewed by the relevant Chamber.
- 3. The Chamber may appoint duty counsel in situations of urgency when the person’s own counsel is unavailable or when it is necessary to appoint duty counsel in the interests of justice.
- 4. Where appropriate, counsel from the Office of Public Counsel for the defence or from the Office of Public Counsel for victims, as defined in regulation 77, sub-regulation 3, and regulation 81, sub-regulation 3, respectively, may be appointed as duty counsel. Sub-regulations 2 and 3 apply. When acting in accordance with sub-regulations 2, 3 or 4, the Registrar shall consult any prospective appointee prior to his or her appointment.

#### Regulation 74 - Defence through counsel [note 40]
- 1. Defence counsel shall act in proceedings before the Court when chosen by the person entitled to legal assistance in accordance with rule 21, sub-rule 2; retained without legal assistance paid by the Court; appointed under regulation 73; or appointed by the Chamber in accordance with the Statute, Rules or these Regulations.
- 2. Whenever represented by defence counsel, the person entitled to legal assistance shall, subject to article 67, paragraph 1 (h), act before the Court through his or her counsel, unless otherwise authorised by the Chamber.

#### Regulation 75 - Choice of defence counsel [note 41]
- 1. If the person entitled to legal assistance chooses counsel included in the list of counsel, the Registrar shall contact that counsel. If the counsel is willing and ready to represent the person, the Registrar shall facilitate the issuance of a power of attorney for this counsel by the person.
- 2. If the person entitled to legal assistance applies for legal assistance paid by the Court and chooses counsel not in the list of counsel who is willing and ready to represent him or her and to be included in the list, the Registrar shall decide on the eligibility of that counsel in accordance with regulation 70 and, upon inclusion in the list, shall facilitate the issuance of a power of attorney. Until the filing of a power of attorney, the person entitled to legal assistance may be represented by duty counsel in accordance with regulation 73.
- 3. If the person entitled to legal assistance wishes to retain counsel without legal assistance paid by the Court, the Registrar shall contact that counsel to decide on his or her eligibility to act as counsel, in accordance with regulation 69. If the relevant criteria are fulfilled, the Registrar shall facilitate the issuance of a power of attorney for this counsel. Until the filing of a power of attorney, the person may be represented by duty counsel in accordance with regulation 73.

#### Regulation 76 - Appointment of defence counsel and standby counsel by a Chamber [note 42]
- 1. A Chamber, following consultation with the Registrar and, when appropriate, after hearing from the person entitled to legal assistance, may appoint counsel in the circumstances specified in the Statute, Rules and these Regulations or where the interests of justice so require. This may include the appointment of standby counsel, if appropriate.
- 2. When acting in accordance with sub-regulation 1, the Registrar shall consult any prospective appointee prior to his or her appointment. The Chamber may, where the interests of justice so require, also appoint counsel from the Office of Public Counsel for the defence as defined in regulation 77, sub-regulation 3.

#### Regulation 77 - Office of Public Counsel for the defence [note 43]
- 1. The Registrar shall establish and develop an Office of Public Counsel for the defence for the purpose of providing assistance as described in sub-regulation 4.
- 2. The Office of Public Counsel for the defence shall fall within the remit of the Registry solely for administrative purposes, in accordance with article 43, paragraph 2, and it shall function in its substantive work as a wholly independent office. Counsel and assistants within the Office shall act independently.
- 3. The Office of Public Counsel for the defence shall include at least one counsel who has ten years’ experience as described in regulation 67, sub-regulation 1, and who fulfils the requirements for inclusion in the list of counsel. The Office shall include assistants as referred to in regulation 68.
- 4. When a conflict of interest does not arise, the tasks of the Office of Public Counsel for the defence shall include:
  - (a) Representing and protecting the rights of the defence during the initial stages of the investigation, in particular for the application of article 56, paragraph 2 (d), and rule 47, sub-rule 2. For this purpose the Office of Public Counsel for the defence may, on the instruction or with the leave of the Chamber, make submissions concerning the needs of the defence in ongoing proceedings;
  - (b) Providing general support and assistance to defence counsel and to the person entitled to legal assistance, including legal research and advice and, on the instruction or with the leave of the Chamber, advising on and assisting with the detailed factual circumstances of the case;
  - (c) Appearing, on the instruction or with the leave of the Chamber, in respect of specific issues;
  - (d) Advancing submissions, on the instruction or with the leave of the Chamber, on behalf of the person entitled to legal assistance when defence counsel has not been secured or when the mandate of temporary counsel is limited to other issues;
  - (e) Acting when appointed under regulation 73 or regulation 76; and
  - (f) Assisting or representing defence counsel or defence witnesses who are subject to article 70 proceedings or when rule 74, sub-rule 1, applies, on the instruction or with the leave of the Chamber.
- 5. The Office of Public Counsel for the defence shall ensure that counsel with at least ten years’ experience is appointed when the Office is required to act as counsel.

#### Regulation 78 - Withdrawal of defence counsel [note 44]
- 1. Prior to withdrawal, defence counsel shall seek the leave of the Chamber.
- 2. Where lead counsel, who is assisted by associate counsel with less than ten years’ experience, withdraws, the Chamber may, subject to article 67, paragraph 1 (d), and rule 21, permit associate counsel to act as lead counsel.

#### Regulation 79 - Decision of the Chamber concerning legal representatives of victims
- 1. The decision of the Chamber to request the victims or particular groups of victims to choose a common legal representative or representatives may be made in conjunction with the decision on the application of the victim or victims to participate in the proceedings.
- 2. When choosing a common legal representative for victims in accordance with rule 90, sub-rule 3, consideration should be given to the views of the victims, and the need to respect local traditions and to assist specific groups of victims.
- 3. Victims may request the relevant Chamber to review the Registrar’s choice of a common legal representative under rule 90, sub-rule 3, within 30 days of notification of the Registrar’s decision.

#### Regulation 80 - Appointment of legal representatives of victims by a Chamber [note 46]
- 1. A Chamber, following consultation with the Registrar and, when appropriate, after hearing from the victim or victims concerned, may appoint a legal representative of victims where the interests of justice so require. The Chamber may appoint counsel from the Office of Public Counsel for victims as defined in regulation 81, sub-regulation 3.
- 2. The Registrar shall consult any prospective appointee prior to his or her appointment.

#### Regulation 81 - Office of Public Counsel for victims [note 47]
- 1. The Registrar shall establish and develop an Office of Public Counsel for victims for the purpose of providing assistance as described in sub-regulation 4.
- 2. The Office of Public Counsel for victims shall fall within the remit of the Registry solely for administrative purposes, in accordance with article 43, paragraph 2, and it shall function in its substantive work as a wholly independent office. Counsel and assistants within the Office shall act independently.
- 3. The Office of Public Counsel for victims shall include at least one counsel who has ten years’ experience as described in regulation 67, sub-regulation 1, and who fulfils the requirements for inclusion in the list of counsel. The Office shall include assistants as referred to in regulation 68.
- 4. The tasks of the Office of Public Counsel for victims shall include:
  - (a) Providing general support and assistance to the legal representative of victims and to victims, including legal research and advice and, on the instruction or with the leave of the Chamber, advising on and assisting with the detailed factual circumstances of the case;
  - (b) Appearing, on the instruction or with the leave of the Chamber, in respect of specific issues;
  - (c) Advancing submissions, on the instruction or with the leave of the Chamber, in particular prior to the submission of victims’ applications to participate in the proceedings, when applications pursuant to rule 89 are pending, or when a legal representative has not yet been appointed;
  - (d) Acting when appointed under regulation 73 or regulation 80; and
  - (e) Representing a victim or victims throughout the proceedings, on the instruction or with the leave of the Chamber, when this is in the interests of justice.
- 5. The Office of Public Counsel for victims shall ensure that counsel with at least ten years’ experience is appointed when the Office is required to act as a legal representative.

#### Regulation 82 - Withdrawal of legal representatives of victims [note 48]
Prior to withdrawal, legal representatives of victims shall seek the leave of the Chamber.

#### Regulation 83 - General scope of legal assistance paid by the Court [note 49]
- 1. Legal assistance paid by the Court shall cover all costs reasonably necessary as determined by the Registrar for an effective and efficient defence, including the remuneration of counsel, his or her assistants as referred to in regulation 68 and staff, expenditure in relation to the gathering of evidence, administrative costs, translation and interpretation costs, travel costs and daily subsistence allowances. Upon request, associate counsel may also be covered by legal assistance paid by the Court after the first appearance pursuant to rule 121 of a person subject to a warrant of arrest or a summons to appear under article 58.
- 2. The scope of legal assistance paid by the Court regarding victims shall be determined by the Registrar in consultation with the Chamber, where appropriate.
- 3. A person receiving legal assistance paid by the Court may apply to the Registrar for additional means which may be granted depending on the nature of the case.
- 4. Decisions by the Registrar on the scope of legal assistance paid by the Court as defined in this regulation may be reviewed by the relevant Chamber on application by the person receiving legal assistance.

#### Regulation 84 - Determination of means
- 1. Where a person applies for legal assistance to be paid by the Court, the Registrar shall determine the applicant’s means and whether he or she shall be provided with full or partial payment of legal assistance.
- 2. The means of the applicant shall include means of all kinds in respect of which the applicant has direct or indirect enjoyment or power freely to dispose, including, but not limited to, direct income, bank accounts, real or personal property, pensions, stocks, bonds or other assets held, but excluding any family or social benefits to which he or she may be entitled. In assessing such means, account shall also be taken of any transfers of property by the applicant which the Registrar considers relevant, and of the apparent lifestyle of the applicant. The Registrar shall allow for expenses claimed by the applicant provided they are reasonable and necessary.

#### Regulation 85 - Decisions on payment of legal assistance [note 50]
- 1. In accordance with the procedure set out in the Regulations of the Registry, the Registrar shall decide within one month of the submission of an application or, within one month of expiry of a time limit set in accordance with the Regulations of the Registry, whether legal assistance should be paid by the Court. The decision shall be notified to the applicant together with the reasons for the decision and instructions on how to apply for review. The Registrar may, in appropriate circumstances, make a provisional decision to grant payment of legal assistance.
- 2. The Registrar shall reconsider his or her decision on payment of legal assistance if the financial situation of the person receiving such legal assistance is found to be different than indicated in the application, or if the financial situation of the person has changed since the application was submitted. Any revised decision shall be notified to the person together with the reasons for the decision and instructions on how to apply for review.
- 3. Persons as referred to in sub-regulations 1 and 2 may seek review of the decisions described in those provisions by the Presidency within 15 days of notification of the relevant decision. The decision of the Presidency shall be final.
- 4. Subject to rule 21, sub-rule 5, where legal assistance has been paid by the Court and it is subsequently established that the information provided to the Registrar on the applicant’s means was inaccurate, the Registrar may seek an order from the Presidency for recovery of the funds paid from the person who received legal assistance paid by the Court. The Registrar may seek the assistance of the relevant States Parties to enforce that order.

# Chapter 5. Victims participation and reparations

#### Regulation 86 - Participation of victims in the proceedings under rule 89
- 1. For the purposes of rule 89 and subject to rule 102 a victim shall make a written application to the Registrar who shall develop standard forms for that purpose which shall be approved in accordance with regulation 23, sub-regulation 2. These standard forms shall, to the extent possible, be made available to victims, groups of victims, or intergovernmental and non-governmental organizations, which may assist in their dissemination, as widely as possible. These standard forms shall, to the extent possible, be used by victims.
- 2. The standard forms or other applications described in sub-regulation 1 shall contain, to the extent possible, the following information:
  - (a) The identity and address of the victim, or the address to which the victim requests all communications to be sent; in case the application is presented by someone other than the victim in accordance with rule 89, sub-rule 3, the identity and address of that person, or the address to which that person requests all communications to be sent;
  - (b) If the application is presented in accordance with rule 89, sub-rule 3, evidence of the consent of the victim or evidence on the situation of the victim, being a child or a disabled person, shall be presented together with the application, either in writing or in accordance with rule 102;
  - (c) A description of the harm suffered resulting from the commission of any crime within the jurisdiction of the Court, or, in case of a victim being an organization or institution, a description of any direct harm as described in rule 85 (b);
  - (d) A description of the incident, including its location and date and, to the extent possible, the identity of the person or persons the victim believes to be responsible for the harm as described in rule 85;
  - (e) Any relevant supporting documentation, including names and addresses of witnesses;
  - (f) Information as to why the personal interests of the victim are affected;
  - (g) Information on the stage of the proceedings in which the victim wishes to participate, and, if applicable, on the relief sought;
  - (h) Information on the extent of legal representation, if any, which is envisaged by the victim, including the names and addresses of potential legal representatives, and information on the victim’s or victims’ financial means to pay for a legal representative.
- 3. Victims applying for participation in the trial and/or appeal proceedings shall, to the extent possible, make their application to the Registrar before the start of the stage of the proceedings in which they want to participate.
- 4. The Registrar may request further information from victims or those presenting an application in accordance with rule 89, sub-rule 3, in order to ensure that such application contains, to the extent possible, the information referred to in sub-regulation 2, before transmission to a Chamber. The Registrar may also seek additional information from States, the Prosecutor and intergovernmental or non-governmental organizations.
- 5. The Registrar shall present all applications described in this regulation to the Chamber together with a report thereon. The Registrar shall endeavour to present one report for a group of victims, taking into consideration the distinct interests of the victims.
- 6. Subject to any order of the Chamber, the Registrar may also submit one report on a number of applications received in accordance with sub-regulation 1 to the Chamber seized of the case or situation in order to assist that Chamber in issuing only one decision on a number of applications in accordance with rule 89, sub-rule 4. Reports covering all applications received in a certain time period may be presented on a periodic basis.
- 7. Before deciding on an application, the Chamber may request, if necessary with the assistance of the Registrar, additional information from, inter alia, States, the Prosecutor, the victims or those acting on their behalf or with their consent. If information is received from States or the Prosecutor, the Chamber shall provide the relevant victim or victims with an opportunity to respond.
- 8. A decision taken by a Chamber under rule 89 shall apply throughout the proceedings in the same case, subject to the powers of the relevant Chamber in accordance with rule 91, sub-rule 1.
- 9. There shall be a specialised unit dealing with victims’ participation and reparations under the authority of the Registrar. This unit shall be responsible for assisting victims and groups of victims.

#### Regulation 87 - Information to victims
- 1. The Prosecutor shall notify the Pre-Trial Chamber as to information provided pursuant to rule 50, sub-rule 1, including the date the information was provided.
- 2. The Prosecutor shall inform the Registry of his or her decision not to initiate an investigation or not to prosecute pursuant to article 53, paragraphs 1 and 2, respectively, and shall provide all relevant information for notification by the Registry to victims in accordance with rule 92, sub-rule 2.

#### Regulation 88 - Requests for reparations in accordance with rule 94
- 1. For the application of rule 94, the Registrar shall develop a standard form for victims to present their requests for reparations and shall make it available to victims, groups of victims, or intergovernmental and non-governmental organizations which may assist in its dissemination, as widely as possible. This standard form shall be approved in accordance with regulation 23, sub-regulation 2, and shall, to the extent possible, be used by victims.
- 2. The Registrar shall seek all necessary additional information from a victim in order to complete his or her request in accordance with rule 94, sub-rule 1, and shall assist victims in completing such a request. The request shall then be registered and stored electronically in order to be notified by the unit described in regulation 86, sub-regulation 9, in accordance with rule 94, sub-rule 2.

# Chapter 6. Detention matters

#### Regulation 89 - Scope of this chapter
The detention of persons detained by the Court under the Statute shall be governed by the provisions of this chapter.

#### Regulation 90 - Management of the detention centre
- 1. Subject to the Statute, Rules and these Regulations, the Registrar shall have overall responsibility for all aspects of management of the detention centre, including security and order, and shall make all decisions relating thereto.
- 2. The day-to-day fulfilment of the functions described in sub-regulation 1 shall be delegated to the Chief Custody Officer. The Chief Custody Officer may, as appropriate, delegate specific functions to other persons.

#### Regulation 91 - Treatment of detained persons
- 1. All detained persons shall be treated with humanity and with respect for the inherent dignity of the human person.
- 2. There shall be no discrimination of detained persons on grounds of gender, age, race, colour, language, religion or belief, political or other opinion, national, ethnic or social origin, wealth, birth or other status. Measures applied under these Regulations and the Regulations of the Registry to protect the rights and special status of particular categories of detained persons shall not be deemed to be discriminatory.

#### Regulation 92 - Confidentiality of the detention record
- 1. The detention record of each detained person shall be confidential.
- 2. The detention record shall be made accessible to the detained person, his or her counsel and persons authorised by the Registrar, save as regards such information as the Chief Custody Officer, in consultation with the Registrar, determines should be withheld in the interests of the proper management of the detention centre.
- 3. A Chamber may, proprio motu or at the request of any interested person, order that the detention record or part thereof be withheld or disclosed.
- 4. The detained person shall be informed of any request for access to his or her detention record and shall be given the opportunity to be heard or to submit his or her views. In exceptional circumstances such as in an emergency, an order may be made prior to the detained person being informed of the request. In such a case, the detained person shall, as soon as practicable, be informed and shall be given the opportunity to be heard or to submit his or her views.

#### Regulation 93 - Information on arrival at the detention centre
- 1. When a detained person arrives at the detention centre, he or she shall be provided with a copy of these Regulations and the Regulations of the Registry relevant to detention matters in a language which he or she fully understands and speaks.
- 2. To the extent that relevant written material as described in sub-regulation 1 is not immediately available, and pending the provision of a translation of those documents which shall be provided in a language that the detained person fully understands and speaks, the detained person shall have the assistance of an interpreter.

#### Regulation 94 - Inspections of the detention centre
- 1. The Presidency may, at any time, appoint a judge of the Court to inspect the detention centre and to report on the conditions of detention and the administration of the detention centre.
- 2. There shall be regular and unannounced inspections by an independent inspecting authority appointed by the Presidency. This authority shall be responsible for examining the manner in which detained persons are being held and treated.
- 3. Following an inspection carried out in accordance with sub-regulation 2, the inspecting authority shall provide a confidential report to the Presidency and the Registrar setting out its findings and any recommendations.
- 4. Upon receipt of the report referred to in sub-regulation 3, the Registrar shall take such action as he or she considers appropriate in consultation, where necessary, with the relevant authorities which have made the detention centre available to the Court. If the Registrar does not agree with the recommendations made by the inspecting authority, he or she shall submit a report to the Presidency setting out his or her reasons.
- 5. The Presidency may make any direction, decision or order that it considers appropriate.

#### Regulation 95 - Discipline
- 1. Discipline and order shall be maintained by the Chief Custody Officer in the interests of safe custody and good administration of the detention centre.
- 2. Details of the disciplinary procedure for detained persons shall be set out in the Regulations of the Registry. This procedure shall provide a detained person with the right to be heard on the subject of any offence alleged to have been committed, and shall include a right for the detained person to address the Presidency.

#### Regulation 96 - Suspension of regulations on detention
- 1. In the event of a serious disturbance or other emergency occurring within the detention centre, the Chief Custody Officer may take such action as is immediately necessary to ensure the safety of detained persons and staff of the detention centre, or the security of the detention centre.
- 2. Any action taken by the Chief Custody Officer under sub-regulation 1 shall be reported immediately to the Registrar, who may, with the approval of the Presidency, temporarily suspend the operation of all or part of these Regulations or the Regulations of the Registry relevant to detention matters to the extent necessary to restore the security and good order of the detention centre.

#### Regulation 97 - Communication with defence counsel
- 1. A detained person shall be informed of his or her right to communicate fully, where necessary with the assistance of an interpreter, with his or her defence counsel or assistants to his or her defence counsel as referred to in regulation 68.
- 2. All communication between a detained person and his or her defence counsel or assistants to his or her defence counsel as referred to in regulation 68 and interpreters shall be conducted within the sight but not the hearing, either direct or indirect, of the staff of the detention centre.

#### Regulation 98 - Diplomatic and consular assistance
- 1. A detained person shall be informed of his or her right to communicate with and to receive visits from:
  - (a) A diplomatic and/or consular representative from the State of which the person is a national accredited to the State in which the detention centre is situated or the authority which has made the detention centre available to the Court; or
  - (b) Where the State of which the person is a national has no diplomatic or consular representation in the State in which the detention centre is situated, a diplomatic and/or consular representative of the State which takes charge of the interests of the State of which the person is a national; or
  - (c) In case of refugees or stateless persons, a representative of a national or international authority whose task it is to represent the interests of such persons.
- 2. All communication between a detained person and the persons described in sub-regulation 1 (a), (b) or (c), and interpreters shall be conducted within the sight but not the hearing, either direct or indirect, of the staff of the detention centre.

#### Regulation 99 - General entitlements of detained persons
- 1. Every detained person shall be entitled, inter alia, to the following:
  - (a) To participate in a work programme;
  - (b) To keep in his or her possession authorised clothing and personal items for his or her use;
  - (c) To procure reading and writing materials and other items for the purposes of recreation and education;
  - (d) To keep himself or herself regularly informed of the news by way of newspapers, periodicals and other publications, radio and television broadcasts;
  - (e) To the use of a common space equipped with reading and writing materials, a television, radio and computer, which shall be provided for the general use of all detained persons;
  - (f) To a period of exercise in the open air of at least one hour per day;
  - (g) To engage in sporting activities;
  - (h) To receive correspondence, mail and packages;
  - (i) To communicate by letter or telephone with his or her family and other persons.
- 2. The relevant details for the application of sub-regulation 1 shall be set out in the Regulations of the Registry, including any restrictions necessary in the interests of the administration of justice or for the maintenance of the security and good order of the detention centre.

#### Regulation 100 - Visits
- 1. A detained person shall be entitled to receive visits.
- 2. A detained person must be informed of the identity of each visitor and may refuse to see any visitor.
- 3. The relevant conditions for visits as well as restrictions and supervision that may be necessary in the interests of the administration of justice or for the maintenance of the security and good order of the detention centre shall be set out in the Regulations of the Registry.

#### Regulation 101 - Restrictions to access to news and contact
- 1. A Chamber seized of the case may, at the request of the Prosecutor, order that access to the news be restricted, if it is considered necessary in the interests of the administration of justice, in particular, if unrestricted access could prejudice the outcome of the proceedings against that detained person or the outcome of any other investigation.
- 2. The Prosecutor may request the Chamber seized of the case to prohibit, regulate or set conditions for contact between a detained person and any other person, with the exception of counsel, if the Prosecutor has reasonable grounds to believe that such contact:
  - (a) Is for the purposes of attempting to arrange the escape of a detained person from the detention centre;
  - (b) Could prejudice or otherwise affect the outcome of the proceedings against a detained person, or any other investigation;
  - (c) Could be harmful to a detained person or any other person;
  - (d) Could be used by a detained person to breach an order for non-disclosure made by a judge;
  - (e) Is against the interests of public safety; or
  - (f) Is a threat to the protection of the rights and freedom of any person.
- 3. The detained person shall be informed of the Prosecutor’s request and shall be given the opportunity to be heard or to submit his or her views. In exceptional circumstances such as in an emergency, an order may be made prior to the detained person being informed of the request. In such a case, the detained person shall, as soon as practicable, be informed and shall be given the opportunity to be heard or to submit his or her views.

#### Regulation 102 - Spiritual welfare
- 1. A detained person shall be entitled to practise his or her religion or belief.
- 2. A detained person shall, on arrival at the detention centre or at any time thereafter, be entitled, in accordance with the Regulations of the Registry, to establish contact with a minister or spiritual adviser available in the State in which the detention centre is situated.

#### Regulation 103 - Health and safety of detained persons
- 1. Arrangements shall be made by the Registrar to protect the health and the safety of detained persons.
- 2. Arrangements shall be made by the Registrar in order to meet the needs of detained persons with disabilities.
- 3. Medical services, including dental care, shall be made available for detained persons.
- 4. A qualified medical officer with experience in psychiatry shall be available to attend the detention centre. A nurse shall be present at the detention centre at all times. A detained person may be visited by and consult with a doctor of his or her own choice, subject to the relevant details and restrictions set out in the Regulations of the Registry.
- 5. A detained person who requires specialist treatment shall, as far as possible, be treated within the detention centre. Should hospitalization be necessary, the detained person shall be transferred to a hospital without delay. The Registrar shall ensure the continuous detention of the person both at the place of treatment and when in transit.
- 6. Arrangements shall be made by the Registrar for the detention of mentally ill persons and for those who suffer from serious psychiatric conditions. By order of the Chamber, a detained person who is determined to be mentally ill or who suffers from a serious psychiatric condition may be transferred to a specialised institution for appropriate treatment.
- 7. In the event of death or serious illness or injury of a detained person, the Presidency may order an inquiry into the circumstances.

#### Regulation 104 - Arrangements for the care of infants
- 1. Arrangements shall be made by the Registrar for a detained person to give birth in a hospital outside the detention centre. Special accommodation shall be provided for all necessary pre-natal and post-natal care and treatment.
- 2. Where the Registrar, following consultation with the Chief Custody Officer, authorises an infant to remain or to stay within the detention centre, arrangements shall be made for a nursery staffed with qualified personnel for the care of such an infant.

#### Regulation 105 - Accommodation
- 1. Men and women shall be detained in separate areas within the detention centre.
- 2. Persons convicted and in respect of whom final sentence has been passed shall, whenever possible, be accommodated separately from detained persons awaiting trial or appeal.
- 3. A detained person shall occupy a cell unit by himself or herself except in exceptional circumstances or in cases where the Chief Custody Officer, with the approval of the Registrar, considers that it is necessary to share accommodation.

#### Regulation 106 - Complaints
- 1. A detained person shall have the right to file a complaint against any administrative decision or order or with regard to any other matter concerning his or her detention.
- 2. The complaints procedure shall be set out in the Regulations of the Registry and shall include a right for the detained person to address the Presidency.

# Chapter 7. Cooperation and enforcement

#### Regulation 107 - Arrangements and agreements on cooperation [note 51]
- 1. All agreements with any State not party to the Statute or any intergovernmental organization, setting out a general framework for cooperation on matters within the competency of more than one organ of the Court, shall be negotiated under the authority of the President who may seek recommendations from the Advisory Committee on Legal Texts. Such agreements shall be concluded by the President on behalf of the Court. The existence of an agreement concluded in accordance with this sub-regulation does not preclude the Prosecutor from entering into those agreements referred to in article 54, paragraph 3 (d).
- 2. Each organ of the Court shall inform the Presidency of any arrangement or agreement on cooperation, not being one setting out a general framework for cooperation as referred to in sub-regulation 1, that the organ intends to negotiate, unless such information is inappropriate for reasons of confidentiality. Subject to article 54, paragraph 3 (d), and to reasons of confidentiality, such arrangements and agreements shall be concluded by the President or by delegation by the relevant organ under whose authority the arrangement or agreement has been negotiated.

#### Regulation 108 - Ruling regarding the legality of a request for cooperation
- 1. In case of a dispute regarding the legality of a request for cooperation under article 93, a requested State may apply for a ruling from the competent Chamber.
- 2. A ruling under sub-regulation 1 may be sought only after a declaration has been made by the requesting body that consultations have been exhausted and within 15 days following such declaration. In case of requests under article 99, paragraph 4, and should no further consultations be possible, the requested State may seek a ruling within 15 days from the day on which the requested State is informed of or became aware of the direct execution.
- 3. An application under sub-regulation 1 shall not of itself have suspensive effect, unless the Chamber so orders.
- 4. The Chamber may hear from participants to the proceedings on the matter.
- 5. If the Chamber rejects the application referred to in sub-regulation 1, the Chamber may grant the requested State additional time within which it shall execute the request or the Chamber shall lift any suspension of direct execution.

#### Regulation 109 - Failure to comply with a request for cooperation
- 1. An application for a finding under article 87, paragraph 7, may be made to the competent Chamber by the requesting body either where no application has been made under regulation 108, following the lapse of the time limit referred to in sub-regulation 2 of that provision, or where an application has been made, following a ruling by the Chamber under sub-regulation 5 of that provision and, if applicable, following the lapse of the time limit referred to therein.
- 2. When a Chamber has made a request for cooperation, proceedings under article 87, paragraph 7, may be initiated by that Chamber. Sub-regulation 1 shall apply mutatis mutandis.
- 3. Before making a finding in accordance with article 87, paragraph 7, the Chamber shall hear from the requested State.
- 4. Where a finding under article 87, paragraph 7, has been made, the President shall refer the matter to the Assembly or the Security Council in accordance with that provision and, as regards the Security Council, in accordance with the agreement to be concluded under article 2.

#### Regulation 110 - Cooperation for the purposes of notification by way of personal service
For the purposes of notification by way of personal service as described in regulation 31, sub-regulation 4, the requesting body shall, where necessary, make a request for cooperation to the relevant State under articles 93, paragraph 1 (d), and 99, paragraph 1.

#### Regulation 111 - Information about admissibility ruling
When transmitting a request for the arrest and surrender of a person in accordance with article 89, paragraph 1, the Registrar shall enclose a copy of any relevant admissibility ruling of the Court.

#### Regulation 112 - Views of the surrendering State in or after admissibility proceedings
At any time before making a decision on a challenge to admissibility based on the grounds set out in article 17, paragraph 1 (a), the Chamber shall hear from the State which originally surrendered the person as to whether that State objects to the transfer of the person to the State which brought the challenge to admissibility.

#### Regulation 113 - Enforcement unit within the Presidency
- 1. The Presidency shall establish an enforcement unit within the Presidency to assist it in the exercise of its functions under Part 10 of the Statute, in particular:
  - (a) The supervision of enforcement of sentences and conditions of imprisonment; and
  - (b) The enforcement of fines, forfeiture orders and reparation orders
- 2. The record for each sentenced person shall be maintained by the Registrar in accordance with rule 15.

#### Regulation 114 - Bilateral arrangements under rule 200, sub-rule 5
Bilateral arrangements as described in rule 200, sub-rule 5, shall be negotiated under the authority of the Presidency and thereafter concluded with the relevant State by the President.

#### Regulation 115 - Exercise of functions under rule 214, sub-rule 5
In the exercise of its functions under rule 214, sub-rule 4, the Presidency shall have due regard to the principles of international law on re – extradition.

#### Regulation 116 - Enforcement of fines, forfeiture orders and reparation orders
- 1. For the purposes of enforcement of fines, forfeiture orders and reparation orders, the Presidency, with the assistance of the Registry as appropriate, shall make the arrangements necessary in order to, inter alia:
  - (a) Receive payment of fines as described in article 77, paragraph 2 (a);
  - (b) Receive, as described in article 109, paragraph 3, property or the proceeds of the sale of real property or, where appropriate, the sale of other property;
  - (c) Account for interest gained on money received under (a) and (b) above;
  - (d) Ensure the transfer of money to the Trust Fund or to victims, as appropriate.
- 2. Following the transfer to or deposit in the Trust Fund of property or assets realized through enforcement of an order of the Court, the Presidency shall, subject to article 75, paragraph 2, and rule 98, decide on their disposition or allocation in accordance with rule 221.

#### Regulation 117 - Ongoing monitoring of financial situation of the sentenced person
The Presidency shall, if necessary, and with the assistance of the Registrar as appropriate, monitor the financial situation of the sentenced person on an ongoing basis, even following completion of a sentence of imprisonment, in order to enforce fines, forfeiture orders or reparation orders, and may, inter alia:
- (a) Request relevant information, expert opinions or reports, where necessary by way of a request for cooperation, and, if appropriate, on a periodic basis;
- (b) Contact, where appropriate in the manner described in rule 211, paragraph 1 (c), the sentenced person and his or her counsel in order to inquire into the financial situation of the sentenced person;
- (c) Ask for observations from the Prosecutor, victims and legal representatives of victims.

#### Regulation 118 - Procedure under rule 146, sub-rule 5
- 1. In making its decision on the extension of the term of imprisonment in accordance with rule 146, sub-rules 5 and 6, the Presidency may ask for observations from States in which attempts to enforce fines did not succeed and shall ask for observations from the State in which the sentence of imprisonment is being served.
- 2. Where the term of imprisonment has been extended under rule 146, sub-rule 5, and the sentenced person subsequently pays the fine or a portion thereof, the Presidency shall revoke or in case of partial payment reduce the extension previously ordered.

# Chapter 8. Removal from office and disciplinary measures

#### Regulation 119 - Receipt and administration of complaints
- 1. All complaints against a judge, the Prosecutor, a Deputy Prosecutor, the Registrar or the Deputy Registrar concerning conduct defined under rules 24 and 25 shall be submitted directly to the Presidency, which shall notify the person against whom the complaint has been directed of that complaint.
- 2. The Presidency shall make all necessary arrangements for administrative assistance when dealing with a complaint.

#### Regulation 120 - Procedure under rule 26, sub-rule 2
- 1. The Presidency shall be assisted by three judges, appointed on the basis of automatic rotation following the English alphabet of the surnames of all judges not comprising the Presidency or the judge being complained against, in order to determine whether a complaint is anonymous or manifestly unfounded.
- 2. The judges appointed in accordance with sub-regulation 1 shall, where necessary, seek additional comments from either the person being complained against or the complainant and shall make a recommendation to the Presidency on whether such complaint is admissible or should be set aside in accordance with rule 26, sub-rule 2. The appointed judges shall also make a recommendation as to whether the complaint against a judge, the Registrar or Deputy Registrar relates to conduct which falls manifestly outside the scope of rule 24.
- 3. The Presidency shall decide whether to accept any recommendation described in sub-regulation 2.
- 4. If a complaint relates to a member of the Presidency, he or she shall not carry out any function as a member of the Presidency with regard to the complaint and his or her functions in that respect shall be exercised by the next available judge having precedence in accordance with regulation 10.

#### Regulation 121 - Decision under rule 26, sub-rule 2, and transmission of complaint to the competent organ
- 1. In case the Presidency decides that a complaint against a judge, the Registrar or Deputy Registrar is not anonymous or manifestly unfounded, it shall transmit the complaint to a plenary session, unless the Presidency determines that the conduct complained of falls manifestly outside the scope of rule 24, in which case the matter shall be considered by the Presidency in accordance with article 47, rule 30, sub-rule 1 and regulation 122.
- 2. In case the Presidency decides that a complaint against the Prosecutor or a Deputy Prosecutor is not anonymous or manifestly unfounded, it shall:
  - (a) With regard to the Prosecutor, transmit the complaint to the Bureau of the Assembly;
  - (b) With regard to the Deputy Prosecutor, transmit the complaint to the Prosecutor.

#### Regulation 122 - Procedure before the Presidency on disciplinary measures for a judge, the Registrar or the Deputy Registrar
- 1. When it is determined in accordance with regulation 121, sub-regulation 1, that a complaint should be considered by the Presidency, that complaint shall be dealt with in accordance with rule 27.
- 2. If the Presidency decides to impose disciplinary measures, the judge, Registrar or Deputy Registrar concerned may file an appeal against that decision to a plenary session within 30 days of notification of the decision.

#### Regulation 123 - Procedure for removal from office of a judge, the Registrar or the Deputy Registrar
- 1. The judges appointed under regulation 120, sub-regulation 1, shall conduct the proceedings under article 46, paragraph 4, and rule 27 and shall report thereon to a plenary session.
- 2. The procedure to be followed prior to the adoption of any recommendation concerning a judge under article 46, paragraph 2, and rule 29, sub-rule 1, is without prejudice to any additional procedure to be followed by the Assembly under article 46, paragraph 4, and rule 27.

#### Regulation 124 - Suspension from duty
- 1. For the purposes of rule 28, a judge, the Prosecutor, a Deputy Prosecutor, the Registrar or the Deputy Registrar may be suspended from duty following the decision of the Presidency under rule 26, sub-rule 2, by the organ competent to make a decision under article 46, paragraphs 2 and 3.
- 2. Suspension from duty shall not affect salary and allowances.

#### Regulation 125 - Initiation of proceedings by the Presidency
In cases where the Presidency initiates proceedings on its own motion, the preliminary assessment of whether complaints are anonymous or manifestly unfounded under rule 26, sub-rule 2, shall not be required and regulations 121 to 124 shall apply mutatis mutandis.

# Chapter 9. Adoption of the Code of Judicial Ethics

#### Regulation 126 - Adoption of the Code of Judicial Ethics
- 1. The Presidency shall draw up a Code of Judicial Ethics, after having consulted the judges.
- 2. The draft Code shall then be transmitted to the judges meeting in plenary session for the purpose of adoption by the majority of the judges.
`;

// Official Arabic titles mapping for Chapters
const chapterTitlesAr = {
  1: { label: "الباب الأول", title: "أحكام عامة" },
  2: { label: "الباب الثاني", title: "تشكيل وإدارة المحكمة" },
  3: { label: "الباب الثالث", title: "الإجراءات أمام المحكمة" },
  4: { label: "الباب الرابع", title: "شؤون المحامين والمساعدة القانونية" },
  5: { label: "الباب الخامس", title: "مشاركة الضحايا وجبر الضرر (التعويضات)" },
  6: { label: "الباب السادس", title: "شؤون الاحتجاز" },
  7: { label: "الباب السابع", title: "التعاون والتنفيذ" },
  8: { label: "الباب الثامن", title: "العزل من الوظيفة والتدابير التأديبية" },
  9: { label: "الباب التاسع", title: "اعتماد مدونة السلوك القضائي" }
};

// Official Arabic titles mapping for Regulations
const regTitlesAr = {
  "1": "اعتماد هذه اللوائح",
  "2": "استخدام المصطلحات",
  "3": "مجلس التنسيق",
  "4": "اللجنة الاستشارية للنصوص القانونية",
  "5": "تعديلات القواعد وأركان الجرائم",
  "6": "تعديلات هذه اللوائح",
  "7": "النشر في الجريدة الرسمية",
  "8": "الموقع الشبكي للمحكمة",
  "9": "مدة العضوية",
  "10": "الأسبقية",
  "11": "هيئة الرئاسة",
  "12": "الخدمة في دائرة الاستئناف",
  "13": "القضاة الرئيسيون",
  "14": "رئيس الدائرة القضائية",
  "15": "الاستبدال",
  "16": "القضاة المناوبون والبدلاء",
  "17": "القاضي المناوب",
  "18": "الموظفون القانونيون المناوبون للدوائر القضائية",
  "19": "الموظفون المناوبون بقلم المحكمة",
  "19 bis": "العطلة القضائية",
  "20": "الجلسات العلنية",
  "21": "البث الإذاعي وإتاحة المحاضر والتسجيلات",
  "22": "تعريف المستندات",
  "23": "محتوى المستندات",
  "23 bis": "إيداع المستندات الموسومة بحضور طرف واحد أو تحت الختم أو سرية",
  "23 ter": "تصنيف الطلبات عملاً بالمادة 58",
  "24": "الردود والإجابات",
  "24 bis": "مذكرات مسجل المحكمة",
  "25": "الاتصالات بغير الكتابة",
  "26": "الإدارة الإلكترونية",
  "27": "المحاضر المكتوبة",
  "28": "أسئلة الدائرة القضائية",
  "29": "عدم الامتثال لهذه اللوائح ولأوامر الدائرة",
  "30": "مؤتمرات الوضع الإجرائي",
  "31": "الإخطار والإبلاغ",
  "32": "متلقو المستندات والقرارات والأوامر المبلغة من المحكمة",
  "33": "حساب المهل الزمنية",
  "34": "المهل الزمنية للمستندات المودعة لدى المحكمة",
  "35": "تعديل المهل الزمنية",
  "36": "نسق المستندات وحساب حدود الصفحات",
  "37": "حدود الصفحات للمستندات المودعة لدى قلم المحكمة",
  "38": "حدود محددة لعدد الصفحات",
  "39": "متطلبات اللغة",
  "40": "خدمات اللغات بقلم المحكمة",
  "41": "وحدة الضحايا والشهود",
  "42": "تطبيق وتعديل تدابير الحماية",
  "43": "شهادة الشهود",
  "44": "الخبراء",
  "45": "المعلومات المقدمة من المدعي العام",
  "46": "الدائرة التمهيدية والشعبة التمهيدية",
  "47": "القاضي الفرد",
  "48": "المعلومات الضرورية للدائرة التمهيدية",
  "49": "طلب الإذن بالتحقيق",
  "50": "مهل زمنية محددة",
  "51": "القرار بشأن الإفراج المؤقت",
  "52": "المستند المتضمن للتهم",
  "53": "قرار الدائرة التمهيدية في أعقاب جلسة اعتماد التهم",
  "53 bis": "إحالة سجل الإجراءات بعد الإحالة إلى المحاكمة",
  "54": "مؤتمرات الوضع الإجرائي أمام الدائرة الابتدائية",
  "55": "سلطة الدائرة في تعديل التكييف القانوني للوقائع",
  "56": "الأدلة بموجب المادة 75",
  "56 bis": "إجراءات طلبات الحكم بالبراءة",
  "57": "الاستئناف",
  "58": "مذكرة الاستئناف",
  "59": "الرد على الاستئناف",
  "60": "الإجابة على الرد",
  "61": "تعديل أسباب الاستئناف المعروضة على دائرة الاستئناف",
  "62": "أدلة إضافية معروضة على دائرة الاستئناف",
  "63": "الاستئنافات الموحدة بموجب القاعدة 150",
  "64": "الاستئنافات بموجب القاعدة 154",
  "65": "الاستئنافات بموجب القاعدة 155",
  "66": "الإجراءات المؤدية إلى البت في طلب إعادة النظر",
  "66 bis": "تشكيل الدوائر وهيئة القضاة الثلاثة",
  "66 ter": "إغلاق وإعادة فتح سجلات القضايا والحالات",
  "67": "المعايير الواجب توفرها في المحامي",
  "68": "مساعدو المحامي",
  "69": "إثبات والتحقق من المعايير المطلوبة في المحامي",
  "70": "الإدراج في قائمة المحامين",
  "71": "الشطب والوقف عن قائمة المحامين",
  "72": "إعادة النظر في قرارات مسجل المحكمة",
  "73": "المحامي المناوب",
  "74": "الدفاع عن طريق محامٍ",
  "75": "اختيار محامي الدفاع",
  "76": "تعيين محامي الدفاع والمحامي الاحتياطي من جانب الدائرة",
  "77": "مكتب محامي الدفاع العام",
  "78": "انسحاب محامي الدفاع",
  "79": "قرار الدائرة بشأن الممثلين القانونيين للضحايا",
  "80": "تعيين الممثلين القانونيين للضحايا من جانب الدائرة",
  "81": "مكتب المحامي العام للضحايا",
  "82": "انسحاب الممثلين القانونيين للضحايا",
  "83": "النطاق العام للمساعدة القانونية المدفوعة من المحكمة",
  "84": "تحديد الملاءة المالية",
  "85": "القرارات المتعلقة بسداد تكاليف المساعدة القانونية",
  "86": "مشاركة الضحايا في الإجراءات بموجب القاعدة 89",
  "87": "إعلام الضحايا",
  "88": "طلبات جبر الضرر وفقاً للقاعدة 94",
  "89": "نطاق هذا الباب",
  "90": "إدارة مركز الاحتجاز",
  "91": "معاملة الأشخاص المحتجزين",
  "92": "سرية سجل الاحتجاز",
  "93": "المعلومات عند الوصول إلى مركز الاحتجاز",
  "94": "تفتيش مركز الاحتجاز",
  "95": "الانضباط والنظام",
  "96": "وقف العمل بلوائح الاحتجاز في حالات الطوارئ",
  "97": "الاتصال بمحامي الدفاع",
  "98": "المساعدة الدبلوماسية والقنصلية",
  "99": "الحقوق والمستحقات العامة للأشخاص المحتجزين",
  "100": "الزيارات",
  "101": "القيود المفروضة على الاطلاع على الأخبار والاتصال",
  "102": "الرعاية الدينية والروحية",
  "103": "صحة وسلامة الأشخاص المحتجزين",
  "104": "تدابير رعاية الرضّع",
  "105": "أماكن الإقامة والإيواء",
  "106": "الشكاوى",
  "107": "الترتيبات والاتفاقات المتعلقة بالتعاون",
  "108": "الفصل في مشروعية طلب التعاون",
  "109": "عدم الامتثال لطلب التعاون",
  "110": "التعاون لأغراض الإبلاغ الشخصي",
  "111": "معلومات حول قرار المقبولية",
  "112": "آراء الدولة المسلِّمة أثناء أو بعد إجراءات المقبولية",
  "113": "وحدة التنفيذ بهيئة الرئاسة",
  "114": "الترتيبات الثنائية بموجب القاعدة 200، الفرعية 5",
  "115": "ممارسة المهام بموجب القاعدة 214، الفرعية 5",
  "116": "تنفيذ الغرامات وأوامر المصادرة وأوامر جبر الضرر",
  "117": "الرقابة المستمرة على الوضع المالي للشخص المحكوم عليه",
  "118": "الإجراءات بموجب القاعدة 146، الفرعية 5",
  "119": "تلقي وإدارة الشكاوى",
  "120": "الإجراءات بموجب القاعدة 26، الفرعية 2",
  "121": "القرار بموجب القاعدة 26، الفرعية 2، وإحالة الشكوى إلى الجهاز المختص",
  "122": "الإجراءات أمام هيئة الرئاسة بشأن التدابير التأديبية لقاضٍ أو المسجل أو نائبه",
  "123": "إجراءات عزل قاضٍ أو المسجل أو نائب المسجل من الوظيفة",
  "124": "الوقف المؤقت عن العمل",
  "125": "اتخاذ الإجراءات بمبادرة من هيئة الرئاسة",
  "126": "اعتماد مدونة السلوك القضائي"
};

// Parse chapters and regulations
const chapters = [];
const chapterRegex = /# Chapter (\d+)\.\s*([^\n\r]+)/g;
let match;
const chapterIndices = [];

while ((match = chapterRegex.exec(sourceText)) !== null) {
  chapterIndices.push({
    num: parseInt(match[1], 10),
    titleEn: match[2].trim(),
    index: match.index
  });
}

for (let i = 0; i < chapterIndices.length; i++) {
  const current = chapterIndices[i];
  const next = chapterIndices[i + 1];
  const chapterContent = sourceText.substring(current.index, next ? next.index : sourceText.length);

  const regRegex = /#### Regulation\s+([\w\s]+?)\s*-\s*([^\n\r]+)/g;
  let regMatch;
  const regulations = [];
  const regIndices = [];

  while ((regMatch = regRegex.exec(chapterContent)) !== null) {
    const rawNum = regMatch[1].trim();
    let rawTitle = regMatch[2].trim();
    // remove [note X] from title
    rawTitle = rawTitle.replace(/\s*\[note\s*\d+\]/gi, '').trim();

    regIndices.push({
      num: rawNum,
      titleEn: rawTitle,
      index: regMatch.index,
      headerLen: regMatch[0].length
    });
  }

  for (let j = 0; j < regIndices.length; j++) {
    const rCurrent = regIndices[j];
    const rNext = regIndices[j + 1];
    const content = chapterContent.substring(rCurrent.index + rCurrent.headerLen, rNext ? rNext.index : chapterContent.length).trim();
    regulations.push({
      num: rCurrent.num,
      titleEn: rCurrent.titleEn,
      contentEn: content
    });
  }

  chapters.push({
    num: current.num,
    titleEn: current.titleEn,
    regulations
  });
}

console.log(`Parsed ${chapters.length} chapters.`);
let totalRegs = 0;
chapters.forEach(c => {
  console.log(`Chapter ${c.num}: ${c.regulations.length} regulations`);
  totalRegs += c.regulations.length;
});
console.log(`Total regulations parsed: ${totalRegs}`);

// Generate TypeScript Part[] data
const parts = chapters.map(c => {
  const arInfo = chapterTitlesAr[c.num] || { label: `الباب ${c.num}`, title: c.titleEn };
  return {
    id: `reg-chapter-${c.num}`,
    labelAr: arInfo.label,
    labelEn: `CHAPTER ${c.num}`,
    titleAr: arInfo.title,
    titleEn: c.titleEn,
    articles: c.regulations.map(r => {
      const titleAr = regTitlesAr[r.num] || r.titleEn;
      const id = `reg-${r.num.toLowerCase().replace(/\s+/g, '-')}`;
      return {
        id,
        number: r.num,
        titleAr,
        titleEn: r.titleEn,
        contentAr: `اللائحة ${r.num}: ${titleAr}\n\nالنص المعتمد للائحة:\n${r.contentEn}`,
        contentEn: r.contentEn
      };
    })
  };
});

// Write to JSON or prepare for Arabic translation pipeline
fs.writeFileSync(path.join(__dirname, 'parsedRegulations.json'), JSON.stringify(parts, null, 2), 'utf-8');
console.log('Saved parsedRegulations.json successfully.');
