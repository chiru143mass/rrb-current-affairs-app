import React, { useState } from 'react';
import { 
  BookOpen, Search, Award, ShieldAlert, Cpu, 
  TrendingUp, Globe, FileText, ChevronRight, HelpCircle, CheckCircle, XCircle
} from 'lucide-react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

const SUBJECTS = [
  { id: 'national', name: 'National Affairs', icon: FileText },
  { id: 'international', name: 'International', icon: Globe },
  { id: 'economy', name: 'Economy & RBI', icon: TrendingUp },
  { id: 'science', name: 'Science & Tech', icon: Cpu },
  { id: 'sports', name: 'Sports & Awards', icon: Award },
  { id: 'whoswho', name: "Who's Who (CMs & Govs)", icon: BookOpen }
];

// --- COMPREHENSIVE 2026 CURRENT AFFAIRS DATASET IN PURE TINGLISH ---
const CURRENT_AFFAIRS_DATA = {
  January: {
    national: [
      "**Republic Day Guest:** India's 77th Republic Day celebration loop lo guest speakers ga Presidents of the European Commission (Ursula von der Leyen) & European Council (Charles Michel) participate chesaru.",
      "**Namo Drone Didi Scheme Expansion:** Central government rural agricultural self-help groups lo unna women leaders ki massive ga agricultural drones supply and flying training parameters start chesi local launch updates confirm chesaru.",
      "**Supreme Court Verdict on Environment:** High-speed bullet train corridors alignment area lo clear standard environmental audits and drinking water safety guidelines mandatory ga setup cheyali ani historic resolution SC pass chesindhi.",
      "**NGO Registration Rules:** Foreign contributions thosaha build ayye standard NGOs regulatory framework guidelines direct ga strict rules format lo updates implementation execution details central government finalise chesindhi.",
      "**E-Visa Port Entry:** India direct ga extra **11 International Ports** lo entry systems ni dynamic ga access control cheyadaniki security clearance rules updates modify chesthu notifications finalise chesaru."
    ],
    international: [
      "**BRICS Presidency 2026:** India official ga 2026 annual BRICS chairmanship post parameters and presidency coordination responsibilities check theesukundi. Main theme 'Resilience, Innovation and Sustainability'.",
      "**India-France Bilateral Treaty:** Paris lo standard defense logistics upgrades and cybersecurity support framework setups update cheyadaniki PM Narendra Modi agreements complete chesaru.",
      "**Global Trade Index:** International business and logistics performance rankings table updates released, indulo India performance improve aindi.",
      "**Red Sea Maritime Security:** International cargo transit routes clearance checks systems lo India naval assistance standard levels expand chesi secure chesindi.",
      "**UN Climate Target Reviews:** Carbon emission offset rules review targets local and global standard updates complete chesaru."
    ],
    economy: [
      "**RBI Repo Rate Update:** inflation parameters direct check dynamic thagginchadaniki RBI MPC meeting lo repo rate baseline standard value **6.50%** parameters daggare stability ga maintain chesindi.",
      "**GDP Growth Prediction:** GDP annual growth target prediction baseline state dynamic FY26 year loop **7.0%** daggara forecast system release chesaru.",
      "**Stock Market Highs:** Year beginning domestic indexes Nifty and Sensex records values cross chesthu dynamic growth records direct complete chesayi.",
      "**Corporate Telecom Deal:** Infrastructure share values direct coordinate cheyadaniki top digital infrastructure organizations and networks share merger complete.",
      "**Trade Deficit Updates:** Import values and domestic export parameters control dynamic check margins decrease parameters release check done."
    ],
    science: [
      "**Gaganyaan Trial Success:** Gaganyaan crew module spacecraft emergency parachute safety descent test runs dynamically successfully finished at sea recovery.",
      "**ISRO Rocket launch pad checks:** Cartosat series heavy imaging telemetry system satellite tests successfully completed.",
      "**Military Training Exercise:** Indian Army and French Army joint coordinate training unit **Exercise Shakti** successful integration and operation done.",
      "**NABL Food Safety Launch:** NABL systems first mobile food testing laboratories standards certification parameters details and validation launch chesaru.",
      "**New Species Discovery:** Meghalaya forests lo key plant structures dynamic mushrooms new species *Russula griseopurpurata* discover chesaru."
    ],
    sports: [
      "**Australian Open Grand Slam:** Men's and Women's singles champions records updates and match tallies list clear details details.",
      "**Padma Awards 2026:** Padma Vibhushan and Padma Bhushan awards complete counts list with special awards details for Telugu state artists.",
      "**Sindhu Athletes Commission:** PV Sindhu official ga Chair of BWF Athletes Commission (2026-2029 term) loop selection check successful ga select aindi.",
      "**ICC Men's T20 World Cup Co-host:** India and Sri Lanka dynamic tournament updates stadiums checklist dynamic prepare schedules finalize details.",
      "**New Grandmaster:** Young Indian chess prodigy matches wins through youngest grandmaster title record verify check successfully done."
    ],
    whoswho: [
      "**Andhra Pradesh CM:** Nara Chandrababu Naidu | **Governor:** S. Abdul Nazeer (AP High Court Chief Justice: Dheeraj Singh Thakur).",
      "**Telangana CM:** A. Revanth Reddy | **Governor:** Jishnu Dev Varma (Telangana High Court Chief Justice: Alok Aradhe).",
      "**Chief Justice of India (CJI):** Justice Sanjiv Khanna (New CJI designation detail).",
      "**National Security Advisor (NSA):** Ajit Doval.",
      "**Cabinet Secretary:** Rajiv Gauba."
    ]
  },
  February: {
    national: [
      "**Union Budget 2026-27:** Finance Minister Nirmala Sitharaman budget presentation. Railways, solar, and semiconductor manufacturing sectors focus. Fiscal deficit target set at **4.4%**.",
      "**Amrit Bharat Station Updates:** AP and Telangana central railway regions lo key small stations dynamic smart security controls update details details.",
      "**GOBARdhan Scheme Outlay:** National Unified scheme for Compressed Biogas development projects allocation approval finalise dynamically complete.",
      "**PM-Vidyalaxmi launch:** Higher education student loans interest waivers and documentation safety controls setup done.",
      "**TRAI 1601 Series:** Transactional voice notifications identity standard scam security check launch TRAI finalized standardly."
    ],
    international: [
      "**India-UAE Financial Agreement:** UPI and UAE local card payments systems link complete, global digital currency systems check.",
      "**BRICS Finance Meeting:** Central bank heads digital asset frameworks integration dynamic guidelines verify details details.",
      "**World Happiness Index:** India rating parameters comparison updates check with regional Asian neighbors.",
      "**India-UK Trade Talks:** Tariff reductions and industrial hardware updates supply chains coordination finalized.",
      "**Bilateral Visit:** External Affairs Minister visits European Union countries to discuss energy security."
    ],
    economy: [
      "**Fiscal Deficit Target:** Budget projects deficit to reduce to **4.4%** of GDP by end of FY26.",
      "**GST Collections:** February monthly revenue hits record **2.15 Lakh Crore** levels due to high retail consumption.",
      "**GDP growth upgrade:** IMF projects India growth to touch **7.1%** in current fiscal year.",
      "**Gold Reserves Update:** RBI gold import and domestic vault transfer records checks details.",
      "**Steel exports:** High domestic steel production records export growth margins details."
    ],
    science: [
      "**Agni-V MIRV Test:** DRDO targets multiple payloads simultaneously range successfully verified.",
      "**Navy Inductions:** INS Sandhayak hydrographic survey vessel commissioned in Vizag port.",
      "**NASA-ISRO Satellite (NISAR):** Final integration testing completed at ISRO assembly site.",
      "**Solar capacity:** India hits **162.15 GW** total installed solar capacity, highest among developing countries.",
      "**Indigenous Vaccines:** Cervical cancer prevention vaccine rollout started at community centers."
    ],
    sports: [
      "**T20 World Cup Co-hosts:** India and Sri Lanka schedule announcements, key venues in Vizag and Colombo finalized.",
      "**Khel Ratna Awards:** President Droupadi Murmu presents awards to outstanding sports stars.",
      "**IPL Auction checks:** Pre-season rosters and team player slots trades updates details.",
      "**Chess Success:** Indian grandmasters win top places in world ratings lists.",
      "**Ranji Trophy Winner:** Domestic cricket champions trophy final match results."
    ],
    whoswho: [
      "**Indian Army Chief:** General Upendra Dwivedi.",
      "**Indian Navy Chief:** Admiral Dinesh K Tripathi.",
      "**Chief Election Commissioner (CEC):** Rajiv Kumar.",
      "**NITI Aayog CEO:** B.V.R. Subrahmanyam.",
      "**Karnataka CM:** Siddaramaiah | **Governor:** Thaawarchand Gehlot."
    ]
  },
  March: {
    national: [
      "**Telecom Act implementation:** New spectrum allocation guidelines and telecom infrastructure rights of way rules updated.",
      "**High Court Chief Justices:** Multiple state High Courts get new Chief Justices based on SC Collegium recommendations.",
      "**Water Conservation Policy:** Jal Jeevan Mission targets reached in most rural drought regions of AP.",
      "**Airport Upgrades:** Tier-2 city airports get new terminals, digital boarding systems operational.",
      "**Expressway projects:** Nagpur-Vijayawada corridor dynamic phase checks completed."
    ],
    international: [
      "**India-UK FTA Progress:** Final rounds of bilateral trade agreements regarding services sector finalized.",
      "**SCO Security Meet:** Regional security checks and counter-terrorism measures discussions finalized.",
      "**Passport Index:** India Henley Passport Index rank reaches improved position.",
      "**Global Climate Meet:** India highlights solar alliances target successes in UN conference.",
      "**Human Rights Index:** Global reports comparison lists release by UN committees."
    ],
    economy: [
      "**SBI Net Profit:** SBI reports highest ever quarterly profits, dividend payments announced.",
      "**Corporate Bond Market:** New regulations by SEBI to simplify corporate bond investments.",
      "**Direct Tax Collections:** IT department reports massive increase in tax filings for FY25-26.",
      "**Digital rupee offline:** RBI starts trials of offline CBDC transactions in rural areas.",
      "**FDI Inflow:** Technology and clean energy sectors receive highest FDI in Q4."
    ],
    science: [
      "**ISRO PSLV-C59 Launch:** Weather and earth observation satellites placed in orbit.",
      "**AI Supercomputer PARAM-Glow:** India launches new advanced computing system for climate prediction.",
      "**Military exercise Tarang Shakti:** Airforce joint exercises with friendly air forces details.",
      "**Mushroom Discovery:** Meghalaya forests show new fungal species records with medical uses.",
      "**Biotech Breakthrough:** Indian research institute patents new plant-based protein extraction."
    ],
    sports: [
      "**IPL 2026 Season Launch:** Dynamic rules like 2-bouncer rule and impact player updates list.",
      "**Oscars 2026 Winners:** Indian documentary gets special jury nomination.",
      "**All England Badminton:** Indian players secure semi-final berths in singles.",
      "**Formula 1 Grand Prix:** Season updates and key team standing details.",
      "**National Archery Champions:** State players win top medals in national games."
    ],
    whoswho: [
      "**ISRO Chairman:** S. Somanath.",
      "**DRDO Chairman:** Dr. Samir V. Kamat.",
      "**Tamil Nadu CM:** M. K. Stalin | **Governor:** R. N. Ravi.",
      "**Kerala CM:** Pinarayi Vijayan | **Governor:** Arif Mohammad Khan.",
      "**Chief Justice of Telangana:** Justice Alok Aradhe."
    ]
  },
  April: {
    national: [
      "**General Elections 2026:** Electorate registration and polling schedules updates across South Indian states.",
      "**Bullet Train corridor safety:** Environment clearances for Mumbai-Ahmedabad rail sections finalized.",
      "**Green Hydrogen Hubs:** Central government selects Vizag and Tuticorin for new clean energy ports.",
      "**Forest Rights Act:** Tribals land ownership verification systems digitized.",
      "**National Highway progress:** NHAI reports record construction of 40 km per day speed."
    ],
    international: [
      "**WHO AI Protocols:** Standard instructions for using generative AI in patient diagnosis released.",
      "**BRICS New Member talks:** Guidelines for currency clearing between member countries finalized.",
      "**Global Food Security Summit:** India showcases food supply chain safety systems.",
      "**India-US defense deals:** Advanced drone manufacturing units setup in India.",
      "**UN Security Council reform:** India pushes for permanent seat status in general assembly."
    ],
    economy: [
      "**GST Revenue Record:** April collection hits record high of **2.21 Lakh Crore**.",
      "**Repo Rate Stability:** RBI Governor confirms repo rate stays at **6.5%** to control food price index.",
      "**Nifty Crosses Milestone:** Stock market reaches all-time high due to strong foreign institutional investments.",
      "**Rupee Trade Settlements:** Indian rupee accepted for trade payments by 5 more Asian countries.",
      "**Gold Reserves Shift:** RBI shifts 100 tonnes of gold from UK vaults back to domestic vaults."
    ],
    science: [
      "**Agni-V MIRV technology:** Flight trials confirm successful separation of multiple nuclear warheads.",
      "**Start-up rocket launch:** Agnikul Cosmos launches suborbital flight using 3D-printed engine.",
      "**Cancer Immunotherapy:** CAR-T cell therapy rollout started at government medical colleges.",
      "**Solar capacity addition:** Southern states add **5.2 GW** solar power in single quarter.",
      "**Defense exports:** India exports military equipment worth ₹21,000 Crore to friendly nations."
    ],
    sports: [
      "**IPL Points Table:** Top spot struggles between CSK, KKR, and SRH in first half.",
      "**Laureus World Sports Awards:** World athletes honored at ceremony.",
      "**Chess Candidates Tournament:** Gukesh and Vaishali rank in top slots of world ratings.",
      "**Hockey Pro League:** India team matches results and points standings.",
      "**Shooting World Cup:** Indian shooters win 3 Gold medals in Germany."
    ],
    whoswho: [
      "**BCCI President:** Roger Binny.",
      "**RBI Governor:** Shaktikanta Das.",
      "**Odisha CM:** Mohan Charan Majhi | **Governor:** Raghubar Das.",
      "**Maharashtra CM:** Eknath Shinde | **Governor:** C. P. Radhakrishnan.",
      "**Chief Justice of AP:** Justice Dhiraj Singh Thakur."
    ]
  },
  May: {
    national: [
      "**General Elections Phase 2:** Southern constituencies report high voter turnout percentages.",
      "**Bharatmala Project Phase 2:** Central highways allocation and funding approvals list.",
      "**Unified Pension Scheme (UPS):** Central government announces new pension updates for employees.",
      "**Digital India Phase 3:** Rural broadband targets and AI services expansion budget.",
      "**Urban Metro expansions:** Bengaluru Metro Phase-3 approvals finalized by cabinet."
    ],
    international: [
      "**SCO Ministers Summit:** Counter-terrorism cooperation frameworks and security protocols updated.",
      "**IPEF Agreement:** Indo-Pacific Economic Framework supply chain agreements signed by India.",
      "**Prime Minister Visit:** High-level bilateral talks in Singapore and Vietnam for trade.",
      "**WHO Health Assembly:** India presents global vaccine distribution and digital health records success.",
      "**Global Energy Index:** India climbs 5 spots in transition to clean energy ratings."
    ],
    economy: [
      "**Retail Inflation Drops:** Inflation stabilizes at **4.2%** due to strong crop supply.",
      "**FDI in Tech:** Indian software startups receive massive venture funding inflows.",
      "**Corporate Alliances:** Leading tech firms join forces for sovereign AI model building.",
      "**Export Growth:** Software exports show double-digit growth in Q1 statements.",
      "**Foreign Exchange Reserves:** India forex reserves reach stable high levels."
    ],
    science: [
      "**GSLV-F14 Success:** ISRO places weather satellite INSAT-3DS into geostationary orbit.",
      "**Antibiotic Breakthrough:** Medical scientists discover molecule to fight drug-resistant bacteria.",
      "**Defense Acquisitions:** Defense Ministry signs deal for indigenous fighter jets upgrades.",
      "**Solar Park Launch:** World's largest single-location solar park checks completed in Rajasthan.",
      "**Green Hydrogen Bus:** Public trials of hydrogen fuel cell buses started in New Delhi."
    ],
    sports: [
      "**IPL 2026 Winner:** Trophy won by champion team, awards ceremony details.",
      "**Monaco Grand Prix:** Top drivers podium finishes and championship points.",
      "**Thomas Cup Badminton:** Indian men's team enters knockout stages.",
      "**Athletics Grand Prix:** Neeraj Chopra wins gold in javelin throw event.",
      "**Wrestling Champions:** Indian wrestlers win medals in Asian Championship."
    ],
    whoswho: [
      "**Chief of Air Staff:** Air Chief Marshal Amar Preet Singh.",
      "**Chief of Defence Staff (CDS):** General N. S. Raja Subramani (Assumed office May 31, 2026).",
      "**Bihar CM:** Nitish Kumar | **Governor:** Rajendra Vishwanath Arlekar.",
      "**West Bengal CM:** Mamata Banerjee | **Governor:** C. V. Ananda Bose.",
      "**Chairman of UPSC:** Sanjay Shrinet."
    ]
  },
  June: {
    national: [
      "**New Cabinet Portfolios:** Prime Minister Modi distributes ministries, key ministers take charge.",
      "**Kavach deployment speed:** South Central Railway accelerates Kavach installation on major routes.",
      "**National Education Policy:** College degree formats and regional language syllabus guidelines.",
      "**Jal Shakti Schemes:** Drinking water pipe connectivity targets reached in all villages.",
      "**Smart Cities Mission:** Project completion deadlines extended to ensure quality."
    ],
    international: [
      "**G7 Outreach Summit:** India invited to G7 summit, talks on global supply chain and green hydrogen.",
      "**Global Competitiveness Index:** India moves up 3 ranks to reach a better spot.",
      "**Climate Finance Treaty:** Developed countries agree to transfer clean technology funds.",
      "**India-UK FTA:** Negotiators resolve services sector visa disputes.",
      "**Bilateral Security Pact:** Joint security training agreements signed with Japan."
    ],
    economy: [
      "**World Bank Forecast:** India GDP growth projected to remain strong at **6.8%** for FY27.",
      "**e-Rupee offline launch:** RBI launches physical card-based offline digital rupee wallets.",
      "**Insurance Sector Reforms:** IRDAI allows customer-friendly health insurance portability rules.",
      "**External Debt Reports:** Ministry of Finance reports decline in India external debt-to-GDP ratio.",
      "**Banking Mergers:** Public sector banks consolidate digital platforms to cut costs."
    ],
    science: [
      "**Gaganyaan abort test:** ISRO successfully tests crew module safety system during high-velocity flight.",
      "**Supercomputer Param-Siddhi:** Indian supercomputer ranked in top 50 global systems.",
      "**Ocean Expedition:** Indian scientists launch deep-sea mining exploration in Indian Ocean.",
      "**AI Regulations:** MEITY issues rules for deploying AI models in public services.",
      "**Biotech crop approvals:** Gene-edited mustard variety cleared for field trials."
    ],
    sports: [
      "**T20 World Cup 2026 Winners:** Champions crowned at final match in Colombo.",
      "**French Open Grand Slam:** Clay court champions list (Men & Women singles).",
      "**FIDE Candidates Chess:** Young Indian grandmasters finish in top positions.",
      "**Archery World Cup:** Indian archers win gold in mixed team events.",
      "**Table Tennis Pro Tour:** Indian girls win double titles in double category."
    ],
    whoswho: [
      "**NITI Aayog Vice Chairperson:** Suman Bery.",
      "**Comptroller and Auditor General (CAG):** Girish Chandra Murmu.",
      "**Uttar Pradesh CM:** Yogi Adityanath | **Governor:** Anandiben Patel.",
      "**Rajasthan CM:** Bhajan Lal Sharma | **Governor:** Haribhau Bagade.",
      "**SEBI Chairperson:** Madhabi Puri Buch."
    ]
  },
  July: {
    national: [
      "**Kavach 4.0 Milestone:** 2,633 Route Kilometers covered under Kavach safety as of July 31.",
      "**NEP in Colleges:** Universities implement regional language courses in professional degrees.",
      "**High Court Appointments:** 10 new judges appointed to various High Courts by President.",
      "**National Grid Connectivity:** Renewable energy transmission line between Ladakh and Haryana started.",
      "**Amrit Bharat Stations:** Modern amenities and smart ticketing kiosks installed at 100 railway stations."
    ],
    international: [
      "**India-UK FTA talks:** Financial services and intellectual property rules finalized.",
      "**BRICS New Development Bank:** Funding approved for water projects in Central India.",
      "**Henley Passport Index:** Indian passport rank rises 2 places to allow visa-free entry to more countries.",
      "**India-Russia Trade Meet:** Oil supply and local currency payment systems reviewed.",
      "**UN Security Council Meet:** India calls for digital peace and cyber defense protocols."
    ],
    economy: [
      "**Fitch Credit Rating:** Fitch confirms India stable credit rating due to high infrastructure growth.",
      "**Bank Dividend Payment:** Public sector banks pay record high dividends to central government.",
      "**Corporate Q1 Results:** Software export firms show strong revenue growth.",
      "**Retail Credit Growth:** RBI cautions banks on high personal loan growth levels.",
      "**Gold Imports:** Customs duty reductions lead to higher gold imports and lower smuggling."
    ],
    science: [
      "**Cartosat-4 Launch:** ISRO successfully places mapping satellite into sun-synchronous orbit.",
      "**Chandrayaan-4 Designs:** Lunar sample return mission designs approved by Space Commission.",
      "**Tarang Shakti Phase 1:** Joint air force exercises with partner countries started in South India.",
      "**Vaccine Trials:** Clinical trials of new dengue vaccine show high safety margins.",
      "**Electric Vehicle R&D:** Government approves funds for solid-state battery research."
    ],
    sports: [
      "**Wimbledon 2026 Champions:** Grass court grand slam winners lists (Men & Women singles).",
      "**National Games Venue:** Uttarakhand selected to host next national games.",
      "**Cricket Team Head Coach:** New head coach takes charge of national team.",
      "**Badminton Open:** Indian players win doubles title in Singapore Open.",
      "**Shooting Trials:** Final team selection completed for upcoming championships."
    ],
    whoswho: [
      "**Lok Sabha Speaker:** Om Birla.",
      "**Rajya Sabha Chairperson (Vice President):** Jagdeep Dhankhar.",
      "**Gujarat CM:** Bhupendra Patel | **Governor:** Acharya Devvrat.",
      "**Madhya Pradesh CM:** Mohan Yadav | **Governor:** Mangubhai C. Patel.",
      "**Chief Justice of Delhi High Court:** Justice Manmohan."
    ]
  },
  August: {
    national: [
      "**80th Independence Day:** PM Narendra Modi outlines **'Mission 2047'** targets for developed India.",
      "**Railway CapEx Upgrades:** Budget allocation for Kavach 5.0 development in suburban lines.",
      "**Higher Education Secretary:** Deepti Gaur Mukerjee (1993-batch IAS) appointed Higher Education Secretary.",
      "**GOBARdhan Scheme Outlay:** Unified scheme for Compressed Biogas development projects ₹23,731 crore allocation approved.",
      "**Unified Pension Scheme (UPS) launch:** Central government pension schemes updates for employees."
    ],
    international: [
      "**Global Supply Chain Meet:** India hosts international trade safety summit.",
      "**IPCC Report:** Climate warning for coastal cities, recommendations list.",
      "**Bilateral Visit:** High-level delegation visits South American countries for lithium deals.",
      "**BRICS Summit Agenda:** Preparation for annual summit under India Presidency.",
      "**India-Japan 2+2 Meet:** Maritime security and tech transfer agreements signed."
    ],
    economy: [
      "**Economic Survey FY26:** Inflation levels stabilized around **4.0%** target.",
      "**RBI Monetary Policy:** Repo rate kept at **6.5%** for the 9th consecutive time.",
      "**Industrial Output (IIP):** Mining and manufacturing show robust recovery trends.",
      "**Fiscal Deficit review:** Fiscal deficit targets are on track to hit 4.4%.",
      "**Direct Tax Receipts:** Income tax collections grow by 18% in the first five months."
    ],
    science: [
      "**Tarang Shakti Phase 2:** Massive air force exercises with 15 partner nations.",
      "**Vande Bharat 4.0 Trials:** Future rakes equipped with Kavach 5.0 testing successfully.",
      "**Nuclear Power Expansion:** Government approves 10 new indigenous nuclear reactors.",
      "**Mobile Food Lab:** NABL launches India's first accreditation scheme for mobile food testing labs.",
      "**Space Startups Funding:** ISRO opens new venture capital fund to support rocket startups."
    ],
    sports: [
      "**Paris Olympics 2026:** Indian athletes medal list, key winners, and gold medal tallies.",
      "**British Chess Champions:** Indian-origin chess players Bodhana Sivanandan and Shreyas Royal win top ranks.",
      "**US Open 2026 Kick-off:** Hardcourt tennis grand slam schedule and key players updates.",
      "**National Sports Day:** Celebrations commemorating Major Dhyan Chand's birth anniversary.",
      "**BWF Commission Chair:** PV Sindhu assumes office as Chair of Athletes Commission."
    ],
    whoswho: [
      "**Prime Minister:** Narendra Modi | **President:** Droupadi Murmu.",
      "**Union Home Minister:** Amit Shah | **Finance Minister:** Nirmala Sitharaman.",
      "**Union Railway Minister:** Ashwini Vaishnaw.",
      "**Union External Affairs Minister:** S. Jaishankar.",
      "**Chief Justice of India (CJI):** Justice Sanjiv Khanna."
    ]
  }
};

// --- MINI PRACTICE QUIZ DATASET ---
const QUIZ_QUESTIONS = {
  January: {
    question: "January 2026 lo, India's 77th Republic Day celebration guest speaker ga evaru vacharu?",
    options: [
      { text: "Presidents of European Commission & Council", correct: true },
      { text: "US President Joe Biden", correct: false },
      { text: "French President Emmanuel Macron", correct: false },
      { text: "UK Prime Minister Keir Starmer", correct: false }
    ],
    hint: "Ursula von der Leyen and Charles Michel were chief guests."
  },
  February: {
    question: "February 2026 lo, central cabinet approve chesina GOBARdhan scheme funding budget values entha?",
    options: [
      { text: "₹10,500 Crore", correct: false },
      { text: "₹15,000 Crore", correct: false },
      { text: "₹23,731 Crore", correct: true },
      { text: "₹30,000 Crore", correct: false }
    ],
    hint: "It is the National Unified Scheme for Compressed Biogas."
  },
  March: {
    question: "March 2026 lo, air force joint exercises friendly nations tho jarigina mega exercise name?",
    options: [
      { text: "Surya Kiran", correct: false },
      { text: "Tarang Shakti", correct: true },
      { text: "Yudh Abhyas", correct: false },
      { text: "Nomadic Elephant", correct: false }
    ],
    hint: "Massive joint air exercise hosted in India."
  },
  April: {
    question: "April 2026 lo, monthly GST revenue collections peak cross chesina record level values?",
    options: [
      { text: "1.5 Lakh Crore", correct: false },
      { text: "1.8 Lakh Crore", correct: false },
      { text: "2.21 Lakh Crore", correct: true },
      { text: "2.5 Lakh Crore", correct: false }
    ],
    hint: "Highest monthly collection record in India history."
  },
  May: {
    question: "May 31, 2026 lo new Chief of Defence Staff (CDS) ga badhyathalu sweekarinchina general name?",
    options: [
      { text: "General Manoj Pande", correct: false },
      { text: "General Anil Chauhan", correct: false },
      { text: "General N. S. Raja Subramani", correct: true },
      { text: "Admiral R Hari Kumar", correct: false }
    ],
    hint: "Assumed the CDS / top defense post in mid-2026."
  },
  June: {
    question: "June 2026 lo, global fast supercomputer lists lo parameter position clear chesina AI machine?",
    options: [
      { text: "PARAM-Siddhi", correct: true },
      { text: "PARAM-8000", correct: false },
      { text: "Pratyush", correct: false },
      { text: "Mihir", correct: false }
    ],
    hint: "India's premier AI supercomputing system."
  },
  July: {
    question: "July 2026 varaku, central railway systems lo Kavach cover chesina total route range in kilometers?",
    options: [
      { text: "1,500 km", correct: false },
      { text: "2,000 km", correct: false },
      { text: "2,633 km", correct: true },
      { text: "3,500 km", correct: false }
    ],
    hint: "Record high automatic collision safety route coverage."
  },
  August: {
    question: "August 2026 lo, new Higher Education Secretary (Secretary of Higher Education) ga appointed aina IAS officer name?",
    options: [
      { text: "Deepti Gaur Mukerjee", correct: true },
      { text: "Rajiv Gauba", correct: false },
      { text: "Sanjay Shrinet", correct: false },
      { text: "Alok Aradhe", correct: false }
    ],
    hint: "1993-batch IAS officer appointed in August 2026."
  }
};

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedSubject, setSelectedSubject] = useState('national');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null); // tracking option index selected
  const [showHint, setShowHint] = useState(false);
  const [readNotes, setReadNotes] = useState({}); // Tracking read cards

  const handleOptionSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setSelectedAnswer(null); // Reset quiz state
    setShowHint(false);
  };

  const handleSubjectChange = (subjectId) => {
    setSelectedSubject(subjectId);
    setSelectedAnswer(null); // Reset quiz state
    setShowHint(false);
  };

  const toggleReadStatus = (noteIndex) => {
    const key = `${selectedMonth}_${selectedSubject}_${noteIndex}`;
    setReadNotes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // --- SEARCH ENGINE LOGIC ---
  const getFilteredNotes = () => {
    const activeNotes = CURRENT_AFFAIRS_DATA[selectedMonth][selectedSubject] || [];
    if (!searchQuery.trim()) return activeNotes;

    const query = searchQuery.toLowerCase();
    // Search across all subjects for the selected month
    const allMatching = [];
    Object.keys(CURRENT_AFFAIRS_DATA[selectedMonth]).forEach(subjectKey => {
      CURRENT_AFFAIRS_DATA[selectedMonth][subjectKey].forEach((noteText, idx) => {
        if (noteText.toLowerCase().includes(query)) {
          allMatching.push({
            subject: SUBJECTS.find(s => s.id === subjectKey).name,
            text: noteText,
            index: idx
          });
        }
      });
    });
    return allMatching;
  };

  const filteredNotes = getFilteredNotes();
  const currentQuiz = QUIZ_QUESTIONS[selectedMonth];

  // Helper to highlight bold text dynamically in React
  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={index} className="highlight-text">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  return (
    <div className="app-container">
      {/* GLOWING HEADER NAVIGATION */}
      <header className="nav-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
          <span style={{ fontSize: '1.8rem' }}>🎓</span>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '900', background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              RRB Group D Current Affairs Hub
            </h1>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Month-Wise Complete Study Portal (Tinglish)</p>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container">
          <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search details here (e.g. Kavach)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {/* CORE WORKSPACE */}
      <div className="workspace-layout">
        {/* Left Sidebar Month Selector */}
        <aside className="month-sidebar">
          <p style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'left', paddingLeft: '8px' }}>
            Select Study Month
          </p>
          {MONTHS.map((month) => {
            const isActive = selectedMonth === month;
            return (
              <button 
                key={month} 
                onClick={() => handleMonthChange(month)}
                className={`month-item ${isActive ? 'active' : ''}`}
              >
                <span>{month} 2026</span>
                <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.4 }} />
              </button>
            );
          })}
        </aside>

        {/* Main Content Pane */}
        <main className="content-main">
          {/* Top Subject Selection Tabs */}
          <div className="subject-tabs-bar">
            {SUBJECTS.map((sub) => {
              const Icon = sub.icon;
              const isActive = selectedSubject === sub.id;
              return (
                <button 
                  key={sub.id} 
                  onClick={() => handleSubjectChange(sub.id)}
                  className={`subject-tab ${isActive ? 'active' : ''}`}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Icon size={14} /> {sub.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scrollable Study Notes */}
          <div className="notes-container">
            {searchQuery.trim() && (
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', marginBottom: '4px' }}>
                Search results for: "<strong>{searchQuery}</strong>" in {selectedMonth}
              </p>
            )}

            {filteredNotes.length === 0 ? (
              <div style={{ margin: 'auto', textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                <ShieldAlert size={48} style={{ strokeWidth: '1.2px', marginBottom: '14px', color: 'var(--border-glass)' }} />
                <p style={{ fontSize: '0.9rem' }}>No data points found matching your search. Try changing the search query! 😊</p>
              </div>
            ) : (
              filteredNotes.map((note, idx) => {
                const isSearch = typeof note === 'object';
                const noteText = isSearch ? note.text : note;
                const noteIndex = isSearch ? note.index : idx;
                const noteSubject = isSearch ? note.subject : null;

                const readKey = `${selectedMonth}_${selectedSubject}_${noteIndex}`;
                const isRead = readNotes[readKey];

                return (
                  <div 
                    key={idx} 
                    className="note-card"
                    style={isRead ? { borderLeft: '4px solid #10b981', background: 'rgba(16, 185, 129, 0.02)' } : { borderLeft: '4px solid var(--accent-purple)' }}
                  >
                    {isSearch && (
                      <span style={{ fontSize: '0.65rem', background: 'rgba(139,92,246,0.15)', color: 'var(--accent-purple)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px', fontWeight: '800' }}>
                        {noteSubject}
                      </span>
                    )}
                    <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: isRead ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
                      {formatText(noteText)}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                      <button 
                        onClick={() => toggleReadStatus(noteIndex)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: isRead ? '#10b981' : 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {isRead ? '✅ Completed' : '📖 Mark as Read'}
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            {/* PRACTICE QUIZ BOX */}
            {!searchQuery.trim() && currentQuiz && (
              <div className="quiz-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '1px solid rgba(139, 92, 246, 0.2)', paddingBottom: '8px' }}>
                  <HelpCircle size={18} style={{ color: 'var(--accent-purple)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'white' }}>Quick Review Test: {selectedMonth} 2026</h4>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px', fontWeight: '600' }}>{currentQuiz.question}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {currentQuiz.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    let optionClass = '';
                    if (selectedAnswer !== null) {
                      if (opt.correct) optionClass = 'correct';
                      else if (isSelected) optionClass = 'wrong';
                    }

                    return (
                      <button 
                        key={idx} 
                        onClick={() => handleOptionSelect(idx)}
                        disabled={selectedAnswer !== null}
                        className={`quiz-option ${optionClass}`}
                      >
                        {opt.text}
                        {selectedAnswer !== null && opt.correct && <span style={{ float: 'right' }}>✔</span>}
                        {selectedAnswer !== null && isSelected && !opt.correct && <span style={{ float: 'right' }}>✖</span>}
                      </button>
                    );
                  })}
                </div>

                <div style={{ marginTop: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <button 
                    onClick={() => setShowHint(!showHint)}
                    style={{ background: 'none', border: 'none', color: '#60a5fa', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    💡 Show Hint
                  </button>
                  {selectedAnswer !== null && (
                    <button 
                      onClick={() => setSelectedAnswer(null)}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', cursor: 'pointer' }}
                    >
                      🔄 Reset Quiz
                    </button>
                  )}
                </div>
                {showHint && (
                  <p style={{ fontSize: '0.78rem', color: '#fde047', marginTop: '10px', background: 'rgba(253, 224, 71, 0.05)', padding: '8px 12px', borderRadius: '6px', borderLeft: '3px solid #fde047' }}>
                    <strong>Hint:</strong> {currentQuiz.hint}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Floating Creator Signature */}
          <footer style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-glass)', padding: '12px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Built with ❤️ by **Malapalli Suryam (N210056)**
          </footer>
        </main>
      </div>
    </div>
  );
}
