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

// --- CORE DATASET IN PURE TINGLISH ---
const CURRENT_AFFAIRS_DATA = {
  January: {
    national: [
      "**Namo Drone Didi Scheme:** Ee scheme kinda central government agricultural drone training and subsidy updates release chesaru.",
      "**Judiciary Verdict:** Supreme Court high-speed rail projects surrounding guidelines and safety checks mandatory cheyali ani ruling ichindi.",
      "**State Elections:** Southern states and local bodies poll schedules and updates notifications start ayyayi."
    ],
    international: [
      "**India-France Bilateral Summit:** Paris lo digital and defense security agreements paina Modi sign chesaru.",
      "**Global Index:** India corruption perception index and international trade index rankings updates release ayyayi.",
      "**Geopolitics:** Red Sea shipping routes safety parameters system update chesaru."
    ],
    economy: [
      "**RBI Monetary Policy:** Repo rate ni RBI **6.50%** daggare unchanged ga ఉంచింది inflation control kosam.",
      "**GDP Estimates:** FY26 annual GDP growth rate prediction **7.0%** daggara stable ga vuntundi ani announce chesaru.",
      "**Corporate Merger:** India key telecom and tech companies massive merger agreements finish cheskunayi."
    ],
    science: [
      "**Gaganyaan Mission:** Gaganyaan crew module high-speed parachute escape system trials successfully run chesaru.",
      "**ISRO Satellite:** Communication upgrade system satellite launch date parameters announce chesaru.",
      "**Defense Exercise:** Indian Army and French Army kalisi run chesina **Exercise Shakti** successful ga start aindi."
    ],
    sports: [
      "**Australian Open 2026:** Men's and Women's singles grand slam winners titles updates and records notes.",
      "**Padma Awards 2026:** Padma Vibhushan, Padma Bhushan counts list with special focus on Telugu states achievers.",
      "**Appointments:** Chief Justice of India and new Army Staff Chief key designations details check."
    ],
    whoswho: [
      "**Andhra Pradesh CM:** Nara Chandrababu Naidu | **Governor:** S. Abdul Nazeer.",
      "**Telangana CM:** A. Revanth Reddy | **Governor:** Jishnu Dev Varma.",
      "**Chief Justice of India (CJI):** Sanjiv Khanna (New CJI updates check).",
      "**National Security Advisor (NSA):** Ajit Doval."
    ]
  },
  February: {
    national: [
      "**Union Budget 2026-27:** Railway budget CapEx upgrades, Vande Bharat sleeper routes and Kavach system updates details details.",
      "**Amrit Bharat Station Scheme:** AP and Telangana lo main stations upgrade list details budget lo parameters finalise chesaru.",
      "**Policy Launch:** PM-Vidyalaxmi educational interest subsidy scheme updates parameters execute chesaru."
    ],
    international: [
      "**India-UAE Trade Treaty:** Technical and financial digital payments systems integration complete chesaru.",
      "**G20 Finance Ministers Meet:** digital currency rules standardise cheyadaniki main decisions theesukunaru.",
      "**Reports:** World Happiness Index 2026 and climate change performance reports updates released."
    ],
    economy: [
      "**Economic Survey Highlights:** Infrastructure spends standard growth dynamic details updates details.",
      "**Inflation Rate:** Domestic wholesale and retail inflation **4.4%** levels ki decrease aindi.",
      "**GST Collection:** Monthly GST revenue collection records range details."
    ],
    science: [
      "**DRDO Test:** Agni-V Missile range updates trials successfully verify chesaru.",
      "**NASA-ISRO NISAR:** NISAR satellite integration and radar payload checks complete chesaru.",
      "**Navy Inductions:** Indigenous stealth destroyer system commissioning done successfully."
    ],
    sports: [
      "**BCCI Contracts:** National team players dynamic grades and match fee updates lists details.",
      "**Khel Ratna Awards:** Khel Ratna and Arjuna awards lists standard distribution ceremony details.",
      "**Obituaries:** Key sports and political leaders who passed away recently."
    ],
    whoswho: [
      "**Indian Army Chief:** General Upendra Dwivedi.",
      "**Indian Navy Chief:** Admiral Dinesh K Tripathi.",
      "**Chief Election Commissioner (CEC):** Rajiv Kumar.",
      "**Karnataka CM:** Siddaramaiah | **Governor:** Thaawarchand Gehlot."
    ]
  },
  March: {
    national: [
      "**Telecom Bill 2026:** New digital spectrum auctions guidelines and customer safety locks details details.",
      "**Landmark Verdict:** Clean drinking water and basic environment checks citizens primary rights guidelines SC ruling.",
      "**State Projects:** Southern ports and industrial corridor projects approvals details."
    ],
    international: [
      "**BRICS Expansion:** New member nations entries and trade system currency updates check.",
      "**SCO Meeting:** Regional security checks and economic trade agreements Astana lo execute chesaru.",
      "**Treaty:** South Asian nations custom clearance thagginchadaniki treaty clear."
    ],
    economy: [
      "**RBI Digital Rupee:** Offline e-rupee payment limits and offline wallet parameters updates.",
      "**GDP Revision:** Moody's and IMF India GDP predictions **7.2%** levels ki revise chesaru.",
      "**SBI Profit:** Record net profit and dividend allocations details."
    ],
    science: [
      "**ISRO PSLV-C58:** Commercial satellites launch successfully done by ISRO.",
      "**Vaccine Development:** New malaria prevention vaccine and clinical trials successfully complete.",
      "**Tarang Shakti Exercise:** Indian Airforce conduct chesthunna massive air force practice sessions details."
    ],
    sports: [
      "**IPL 2026 Kick-off:** Team rosters, Captain changes and brand new rules updates list.",
      "**National Film Awards:** Best actor, actress and best regional movie parameters lists details.",
      "**Oscar Awards 2026:** Best picture and main international awards lists notes."
    ],
    whoswho: [
      "**ISRO Chairman:** S. Somanath.",
      "**DRDO Chairman:** Dr. Samir V. Kamat.",
      "**Tamil Nadu CM:** M. K. Stalin | **Governor:** R. N. Ravi.",
      "**Kerala CM:** Pinarayi Vijayan | **Governor:** Arif Mohammad Khan."
    ]
  },
  April: {
    national: [
      "**Lok Sabha Elections 2026:** General elections schedules and voting dates schedules updates.",
      "**Water Conservation Policy:** Har Ghar Jal scheme coverage updates in rural South India.",
      "**High-Speed Rail Safety:** Bullet train corridor environmental checks guidelines release."
    ],
    international: [
      "**WHO AI Policy:** Healthcare systems lo AI tools safe ga vadaniki new protocols standard list.",
      "**India-UK Free Trade Agreement:** Custom duty levels check and trade talks details.",
      "**Global Hunger Index:** India rank status updates and measurements data."
    ],
    economy: [
      "**GST Milestone:** Monthly GST collections reach record **2.10 Lakh Crore** levels.",
      "**RBI Policy:** Repo rate kept at **6.5%** again, focus on inflation stabilization.",
      "**Stock Market Trends:** Nifty and Sensex cross record high levels due to stable investments."
    ],
    science: [
      "**Agni-V MIRV Test:** DRDO targets multiple warheads range successfully tested.",
      "**Privately Built Rocket:** Private aerospace startup launches suborbital flight successfully.",
      "**Cancer Treatment:** Indigenous CAR-T cell therapy approvals and hospitals rollout."
    ],
    sports: [
      "**IPL Standings:** Teams points table updates, top run-scorers list in the first half.",
      "**Laureus Sports Awards:** World sports stars and key award winners lists.",
      "**Appointments:** New ICC Chairman and BCCI executive updates."
    ],
    whoswho: [
      "**BCCI President:** Roger Binny.",
      "**RBI Governor:** Shaktikanta Das.",
      "**Odisha CM:** Mohan Charan Majhi | **Governor:** Raghubar Das.",
      "**Maharashtra CM:** Eknath Shinde | **Governor:** C. P. Radhakrishnan."
    ]
  },
  May: {
    national: [
      "**General Elections Status:** Phase-wise voting percentage records in Southern states.",
      "**Forest Conservation Bill:** Protected forest zones upgrades and tribals protection rules.",
      "**National Highway Expansion:** Bharatmala project phase-2 budget checks approvals."
    ],
    international: [
      "**SCO Summit Astana:** Regional counter-terrorism and digital corridors talks updates.",
      "**IPEF Agreement:** Indo-Pacific Economic Framework supply chain stability sign done.",
      "**Bilateral Visit:** Prime Minister visits East Asian countries for trade talks."
    ],
    economy: [
      "**Inflation Control:** Retail inflation drops to **4.2%** levels (lowest in recent months).",
      "**Foreign Direct Investment (FDI):** India technology sector lo FDI limits and inflow records.",
      "**Corporate Deals:** Leading software firms announce global cloud partnership deals."
    ],
    science: [
      "**ISRO Cartosat-4:** High-resolution mapping satellite ready for launch pad checks.",
      "**AI Supercomputer:** India's PARAM-Siddhi climbs up in global fast computers ranking.",
      "**Green Hydrogen Project:** Public sector oil firms launch green hydrogen production units."
    ],
    sports: [
      "**IPL 2026 Finals:** Winner team name, Runner-up, Orange/Purple cap holders final list.",
      "**Grand Prix:** Formula 1 Monaco GP and key racing winners names.",
      "**Arjuna Awards Recommendations:** Outstanding athletes names selection list."
    ],
    whoswho: [
      "**Chief of Air Staff:** Air Chief Marshal Amar Preet Singh.",
      "**Cabinet Secretary:** Rajiv Gauba.",
      "**Bihar CM:** Nitish Kumar | **Governor:** Rajendra Vishwanath Arlekar.",
      "**West Bengal CM:** Mamata Banerjee | **Governor:** C. V. Ananda Bose."
    ]
  },
  June: {
    national: [
      "**New Cabinet Oath:** Prime Minister and cabinet ministers portfolio list distribution details.",
      "**Kavach expansion budget:** Kavach implementation across South Central railway sections.",
      "**Digital India Phase 3:** Rural internet connectivity and public AI services budget."
    ],
    international: [
      "**G7 Summit:** India invited as outreach country, talks on global green energy transition.",
      "**Global Competitiveness Index:** India climbs 3 ranks to reach improved global spot.",
      "**Climate Finance Agreements:** Developing nations financial support guidelines finalized."
    ],
    economy: [
      "**World Bank Report:** India FY27 GDP growth rate prediction set to **6.8%**.",
      "**RBI Digital Rupee Offline:** e-rupee offline card payments rollout launched.",
      "**Mergers & Acquisitions:** Dynamic banking and insurance sectors merger updates."
    ],
    science: [
      "**ISRO GSLV-F14:** Heavy satellite launch system tests successful.",
      "**Superbug Antibiotic:** Indian medical research institute discovers new antibiotic molecule.",
      "**Defense Deals:** India signs deal for advanced drones purchase from US."
    ],
    sports: [
      "**T20 World Cup 2026 Winners:** Cup winners, Player of the tournament and top performances.",
      "**French Open 2026:** Rafael Nadal / new generation clay court winners list.",
      "**FIDE Candidates Chess:** Indian young grandmasters rankings and results."
    ],
    whoswho: [
      "**NITI Aayog Vice Chairperson:** Suman Bery.",
      "**Comptroller and Auditor General (CAG):** Girish Chandra Murmu.",
      "**Uttar Pradesh CM:** Yogi Adityanath | **Governor:** Anandiben Patel.",
      "**Rajasthan CM:** Bhajan Lal Sharma | **Governor:** Haribhau Bagade."
    ]
  },
  July: {
    national: [
      "**Kavach 4.0 Milestone:** 2,633 Route Kilometers covered under Kavach collision safety.",
      "**National Education Policy updates:** regional languages teaching guidelines in colleges.",
      "**High Court Appointments:** Supreme Court collegium suggests new Chief Justices list."
    ],
    international: [
      "**India-UK Free Trade Talks:** Intellectual property and tariff thagginchadam details.",
      "**BRICS New Bank Spends:** Infrastructure projects funding approvals list.",
      "**Passport Index:** India Henley Passport Index rank improved by 2 spots."
    ],
    economy: [
      "**Fitch Ratings:** India stable credit rating confirmed due to strong GDP growth.",
      "**Public Sector Bank Dividends:** Record payments to central government treasury.",
      "**Corporate Earnings:** Software exports show positive growth in Q1 reports."
    ],
    science: [
      "**Cartosat-4 Launch:** ISRO successfully places mapping satellite into orbit.",
      "**Chandrayaan-4 Plans:** Lunar sample return mission designs approved by Space Commission.",
      "**Military Drill:** Multi-nation air drill **Tarang Shakti** host done in India."
    ],
    sports: [
      "**Wimbledon 2026:** Grass court grand slam winners lists (Men & Women singles).",
      "**National Games Schedules:** Venue details and sports addition list.",
      "**Appointments:** New head coach of Indian cricket team takes charge."
    ],
    whoswho: [
      "**Lok Sabha Speaker:** Om Birla.",
      "**Rajya Sabha Chairperson (Vice President):** Jagdeep Dhankhar.",
      "**Gujarat CM:** Bhupendra Patel | **Governor:** Acharya Devvrat.",
      "**Madhya Pradesh CM:** Mohan Yadav | **Governor:** Mangubhai C. Patel."
    ]
  },
  August: {
    national: [
      "**80th Independence Day:** PM outlines **'Mission 2047'** targets for developed India.",
      "**Railway CapEx Upgrades:** Budget allocation for Kavach 5.0 development in suburban lines.",
      "**Welfare Pension Hikes:** Central employees pension schemes updates (Unified Pension Scheme)."
    ],
    international: [
      "**Global Supply Chain Meet:** India hosts international trade safety summit.",
      "**IPCC Report:** Climate warning for coastal cities, recommendations list.",
      "**Bilateral Visit:** High-level delegation visits South American countries for lithium deals."
    ],
    economy: [
      "**Economic Survey FY26:** Inflation levels stabilized around **4.0%** target.",
      "**RBI Monetary Policy:** Repo rate kept at **6.5%** for the 9th consecutive time.",
      "**Industrial Output (IIP):** Mining and manufacturing show robust recovery trends."
    ],
    science: [
      "**Tarang Shakti Phase 2:** Massive air force exercises with 15 partner nations.",
      "**Vande Bharat 4.0 Trials:** Future rakes equipped with Kavach 5.0 testing successfully.",
      "**Nuclear Power Expansion:** Government approves 10 new indigenous nuclear reactors."
    ],
    sports: [
      "**Paris Olympics 2026:** Indian athletes medal list, key winners, and gold medal tallies.",
      "**US Open 2026 Kick-off:** Hardcourt tennis grand slam schedule and key players updates.",
      "**National Sports Day:** Celebrations commemorating Major Dhyan Chand's birth anniversary."
    ],
    whoswho: [
      "**Prime Minister:** Narendra Modi | **President:** Droupadi Murmu.",
      "**Union Home Minister:** Amit Shah | **Finance Minister:** Nirmala Sitharaman.",
      "**Union Railway Minister:** Ashwini Vaishnaw.",
      "**Union External Affairs Minister:** S. Jaishankar."
    ]
  }
};

// --- MINI PRACTICE QUIZ DATASET ---
const QUIZ_QUESTIONS = {
  January: {
    question: "January 2026 lo, ISRO ey space mission crew module escape system trials successfully run chesaru?",
    options: [
      { text: "Chandrayaan-4", correct: false },
      { text: "Gaganyaan", correct: true },
      { text: "Aditya-L1", correct: false },
      { text: "Mangalyaan-2", correct: false }
    ],
    hint: "Astronauts ni space ki pampadaniki ready chesthunna mission."
  },
  February: {
    question: "Union Budget 2026-27 lo stations modernization kosam dynamic ga implement chesthunna scheme name?",
    options: [
      { text: "Amrit Bharat Station Scheme", correct: true },
      { text: "PM Garib Kalyan Yojana", correct: false },
      { text: "Mission Raftar", correct: false },
      { text: "Kavach 4.0 Upgrades", correct: false }
    ],
    hint: "Total 1275 Railway Stations upgrade target scheme."
  },
  March: {
    question: "March 2026 lo, DRDO targets multiple warheads range run chesina missile name?",
    options: [
      { text: "Prithvi-II", correct: false },
      { text: "Agni-V (MIRV)", correct: true },
      { text: "BrahMos", correct: false },
      { text: "Akash-NG", correct: false }
    ],
    hint: "Intercontinental ballistic missile system developed by DRDO."
  },
  April: {
    question: "April 2026 lo, monthly GST revenue collections peak cross chesina record level values?",
    options: [
      { text: "1.5 Lakh Crore", correct: false },
      { text: "1.8 Lakh Crore", correct: false },
      { text: "2.1 Lakh Crore", correct: true },
      { text: "2.5 Lakh Crore", correct: false }
    ],
    hint: "Highest monthly collection record in India history."
  },
  May: {
    question: "May 2026 lo, low food prices valla retail inflation drop aina target levels?",
    options: [
      { text: "3.5%", correct: false },
      { text: "4.2%", correct: true },
      { text: "5.1%", correct: false },
      { text: "5.5%", correct: false }
    ],
    hint: "Lowest inflation level in recent months."
  },
  June: {
    question: "June 2026 lo, jarigina T20 World Cup 2026 parameters and host countries updates?",
    options: [
      { text: "ICC World Cup matches were played", correct: true },
      { text: "Only Test championship was played", correct: false },
      { text: "Ranji Trophy matches", correct: false },
      { text: "No cricket events", correct: false }
    ],
    hint: "Mega T20 tournament held recently."
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
    question: "August 2026 starting lo jarigina Paris Olympics lo Indian players score tally updates jarigina target city name?",
    options: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Tokyo", correct: false },
      { text: "Los Angeles", correct: false }
    ],
    hint: "France capital city host for Olympics 2026."
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
