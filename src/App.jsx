import React, { useState } from 'react';
import { 
  BookOpen, Search, Award, ShieldAlert, Cpu, 
  TrendingUp, Globe, FileText, ChevronRight, HelpCircle, 
  Compass, Map, History, Sun, CheckCircle, RotateCcw
} from 'lucide-react';

const MODES = [
  { id: 'ca', name: 'Current Affairs 2026', icon: Globe },
  { id: 'gs', name: 'General Science', icon: Cpu },
  { id: 'gk', name: 'General Studies & GK', icon: BookOpen }
];

const CA_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

const GS_SUBJECTS = [
  { id: 'physics', name: 'Physics (భౌతిక శాస్త్రం)', icon: Cpu },
  { id: 'chemistry', name: 'Chemistry (రసాయన శాస్త్రం)', icon: Sun },
  { id: 'biology', name: 'Biology (జీవశాస్త్రం)', icon: BookOpen }
];

const GK_SUBJECTS = [
  { id: 'history', name: 'History (చరిత్ర)', icon: History },
  { id: 'geography', name: 'Geography (భూగోళశాస్త్రం)', icon: Map },
  { id: 'economy', name: 'Economy (ఆర్థికశాస్త్రం)', icon: TrendingUp },
  { id: 'staticgk', name: 'Static GK (స్టాటిక్ జీకే)', icon: Compass },
  { id: 'artculture', name: 'Art & Culture (కళలు & సంస్కృతి)', icon: Award }
];

// --- COMPLETE SENTENCES DATASET IN PURE TINGLISH ---
const APP_DATABASE = {
  ca: {
    January: [
      "**Republic Day Guest Special:** Desamlo jarigina 77th Republic Day celebration program loop lo main chief guests ga Presidents of the European Commission (Ursula von der Leyen) and European Council (Charles Michel) participate chesaru, veella presence valla India and Europe relations build cheyadaniki helpful aindi.",
      "**Namo Drone Didi Yojana Updates:** Rural self-help groups lo unna women leaders agricultural drones control control cheyadaniki training parameters government successfully pass chesindi, deenivalla green agriculture speed penchadam primary goal.",
      "**Supreme Court Verdict on Environmental Audit:** High-speed bullet train projects designs check targets lo clean drinking water supply safety system guidelines environmental validation parameters mandatory ga complete cheyali ani historic resolution SC specify chesindi.",
      "**TRAI call regulations update:** Mobile phone spam calls standard control systems build cheyadaniki dynamic transaction calls validation process launch chesaru, consumer security targets control control cheyadam parameters update.",
      "**New Sea Ports approvals:** Central home ministry dynamic e-visa facility extra **11 Sea Ports** range lo launch chesi international security checks processes simplified form loop finalized chesindi."
    ],
    February: [
      "**Union Budget 2026-27 Highlights:** Union finance minister Nirmala Sitharaman dynamic budget lo capital expenditure (CapEx) railway lines modernization specifications dynamic ga setup chesi fiscal deficit targets **4.4%** daggara forecast chesaru.",
      "**Amrit Bharat Stations Progress:** Southern central railway zone lo multi-station developments upgrade models, modern facilities (glowing smart lights, security digital controls) install processes complete chesaru.",
      "**GOBARdhan Scheme budget allocation:** National Unified scheme for Compressed Biogas development projects allocation target dynamic parameters list checking budget details output values standard values check check complete, ₹23,731 Crore allocations approvals done.",
      "**PM-Vidyalaxmi Education Loan System:** Students education loans processing simplify standards dynamic check interest subsidies online validations start cheyadaniki website portals dynamically active details.",
      "**TRAI 1601 Series Voice Security:** Telemarketing calling systems verification status updates checks parameters control control done to secure client systems from spam notifications."
    ],
    March: [
      "**New Telecom Act implementation:** Central government digital spectrum auctions safety systems simplify rules guidelines output parameters clear standard directives execute details details.",
      "**BRICS Membership Expand Talks:** India 2026 BRICS chairmanship coordinate dynamic checking local trade currencies optimization check models parameters finalize check check done.",
      "**SBI Banking profit reports:** State Bank of India Q4 net profit high statistics records cross chesthu corporate sectors dynamic transactions levels margins reports release chesindi.",
      "**ISRO PSLV-C59 launch successfully:** Indian Space Research Organisation heavy earth observation and weather forecast payload satellites coordinates clean system successfully launch details.",
      "**Airforce Joint military practices Tarang Shakti:** Airforce friendly countries coordinates dynamic airforce training and air shield tests dynamically successful coordination finish done."
    ],
    April: [
      "**GST Collection Records:** April month GST monthly tax collections historical dynamic peak reach high status records touches **2.21 Lakh Crore** values range lo update details.",
      "**RBI Monetary Policy Repo Rates:** RBI Governor Shaktikanta Das guidance loop repo rate value baseline standard value unchanged ga **6.5%** levels lo setup parameters complete details.",
      "**Stock Market Milestone checks:** sensex and nifty local indexes records high statistics values cross cheyadaniki foreign investments and domestic funds stability coordinates check dynamic.",
      "**Agni-V MIRV missile technology tests:** DRDO multiple payloads simultaneously target clear target system Agni series target capability checking trials successfully finish.",
      "**Agnikul Cosmos suborbital launch:** Private space startup dynamically 3D-printed engine checks spacecraft launch successfully Sriharikota launch details."
    ],
    May: [
      "**General Elections Voter Percentage:** Southern state constituencies report record high voting percentage rates in local constituencies, security systems coordinate dynamic checks complete.",
      "**Unified Pension Scheme (UPS) updates:** Central government employees standard retirement safety pensions allocations revisions details clear directives updates execute.",
      "**Digital India Phase 3 allocations:** Rural areas target internet broadband setups upgrades and AI based public help tools support systems execute details.",
      "**ISRO INSAT-3DS payload launch:** Weather studies target satellite systems coordinates GSLV series rocket targets launch dynamically done.",
      "**Param-Siddhi global ranks upgrade:** Indian supercomputer parameters checks dynamic world fast systems index parameters update details output list."
    ],
    June: [
      "**New Cabinet Portfolios allocations:** Prime Minister Narendra Modi cabinet ministers departments assignment process complete parameters release lists done.",
      "**Kavach installation speedup:** South Central Railways coordinates dynamic line speed limits upgrade tracks check safety systems installations details details.",
      "**G7 Outreach meeting invite:** India Prime Minister invited as special guest to discuss global green energy supply chain checks and green hydrogen integrations.",
      "**e-Rupee offline trials updates:** RBI starts offline smart card based e-rupee transactions system tests in remote areas details details.",
      "**T20 World Cup winners coronation:** Major world cricket tournament match details final winner teams records update details."
    ],
    July: [
      "**Kavach 4.0 Milestone target details:** Total **2,633 Route Kilometers** range lo automatic train protection safety system success integration checks complete.",
      "**High Court Appointments:** Supreme Court collegium suggests multiple states high courts new chief justices designations parameters list complete.",
      "**Cartosat-4 launch successfully:** ISRO mapping and geographic database updates high resolution imaging satellite payload launch successfully done.",
      "**Henley Passport Index ranks upgrade:** India passport global ranking position improved by 2 spots allowing hassle free visa applications.",
      "**Wimbledon Grand Slam titles winners:** Grasscourt tournament champions single winners lists details details."
    ],
    August: [
      "**80th Independence Day Speeches:** PM outlines 'Mission 2047' roadmap targets to make India a fully developed nation during Red Fort address.",
      "**Deepti Gaur Mukerjee Appointment:** Senior 1993-batch IAS officer appointed as Secretary of Higher Education under Ministry of Education.",
      "**Nuclear Power Expansion approvals:** Central government approves 10 new indigenous nuclear power reactors construction in various states.",
      "**NABL Mobile Food Testing Labs:** NABL launches India's first accreditation scheme for mobile food testing laboratories to ensure purity checks.",
      "**Paris Olympics 2026 Medal updates:** Indian athletes medal tallies, javelin throw records, and key bronze/silver positions details details."
    ]
  },
  gs: {
    physics: [
      "**Units & Measurements (ప్రమాణాలు):** Force units are Newton ($N$), Work and Energy units are Joule ($J$). Power is calculated as Work divided by Time ($P = W/t$). Remember that **1 Horse Power (HP) = 746 Watts**.",
      "**Light (కాంతి) Reflections & Refractions:** Light velocity in vacuum is maximum at $3 \times 10^8 \text{ m/s}$. The Mirror formula is $\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$ and the Lens formula is $\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$.",
      "**Power of Lens & Corrections:** Lens power unit is Dioptre ($D$). Myopia (short-sightedness) is corrected using a **Concave Lens** (కుంభాకార కాటకము) and Hypermetropia (far-sightedness) is corrected using a **Convex Lens** (పుటాకార కాటకము).",
      "**Newton's Laws of Motion:** First law defines Inertia (జడత్వ నియమం). Second law gives the force formula $F = ma$. Third law states that for every action, there is an equal and opposite reaction (e.g. rocket launching, swimming).",
      "**Electricity (విద్యుత్):** Ohm's Law states that Voltage is directly proportional to Current ($V = IR$). Resistance in series is $R_s = R_1 + R_2$ and in parallel is $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2}$.",
      "**Numerical Problem 1 (Kinematics):** If a train starts from rest ($u = 0$) and accelerates uniformly at $2 \\text{ m/s}^2$ for $10 \\text{ seconds}$, we can calculate its final velocity using $v = u + at$. The step-by-step solution is: $v = 0 + (2 \\times 10) = 20 \\text{ m/s}$.",
      "**Numerical Problem 2 (Work & Power):** If a person applies a force of $50 \\text{ N}$ to push a cart by $10 \\text{ meters}$ in $5 \\text{ seconds}$, the work done is calculated as $W = F \\cdot s = 50 \\times 10 = 500 \\text{ Joules}$. The power spent is calculated as $P = W/t = 500 / 5 = 100 \\text{ Watts}$.",
      "**Numerical Problem 3 (Ohm's Law):** If a bulb of resistance $10 \\text{ ohms}$ is connected to a $220 \\text{ V}$ battery, the current flowing through the circuit is calculated as $I = V/R$. The solution is: $I = 220 / 10 = 22 \\text{ Amperes}$."
    ],
    chemistry: [
      "**Modern Periodic Table (ఆవర్తన పట్టిక):** Designed by Henry Moseley based on atomic numbers. It contains **7 Periods (rows)** and **18 Groups (columns)**. Group 18 is inert/noble gases like Helium and Argon.",
      "**Reactive Alkali Metals:** Group 1 elements Lithium, Sodium, and Potassium are highly reactive. Sodium and Potassium are stored in kerosene oil because they catch fire easily in air.",
      "**pH Scale (ఆమ్లాలు, క్షారాలు):** pH range is 0 to 14. Acidic solutions have pH less than 7, neutral water has pH exactly 7, and alkaline basic solutions have pH greater than 7.",
      "**Chemical Formulas & Compounds:** Baking Soda is Sodium Bicarbonate ($NaHCO_3$), Washing Soda is Sodium Carbonate ($Na_2CO_3 \\cdot 10H_2O$), and Bleaching Powder is Calcium Oxychloride ($CaOCl_2$).",
      "**Plaster of Paris (POP):** Chemical formula is Calcium Sulphate Hemihydrate ($CaSO_4 \\cdot \\frac{1}{2}H_2O$). It is used for setting fractured bones and making toys.",
      "**Numerical Problem 1 (Molecular Mass of Water):** To find the molecular mass of Water ($H_2O$), we add the atomic masses of all atoms: $(2 \\times \\text{Hydrogen mass } 1) + (1 \\times \\text{Oxygen mass } 16) = 2 + 16 = 18 \\text{ u}$.",
      "**Numerical Problem 2 (Molecular Mass of Carbon Dioxide):** To find the molecular mass of Carbon Dioxide ($CO_2$), we calculate: $(1 \\times \\text{Carbon mass } 12) + (2 \\times \\text{Oxygen mass } 16) = 12 + 32 = 44 \\text{ u}$."
    ],
    biology: [
      "**Cell Biology (కణం):** Cell study is called Cytology. Mitochondria is the 'Powerhouse of the Cell' where ATP energy is generated. Lysosomes are the 'Suicide Bags of the Cell'.",
      "**Human Blood System:** Blood pH is **7.4** (slightly alkaline). Blood groups were discovered by Karl Landsteiner. **O negative** is the Universal Donor and **AB positive** is the Universal Acceptor.",
      "**RBC & WBC Functions:** Red Blood Cells contain hemoglobin with Iron ($Fe$) to transport oxygen. White Blood Cells fight diseases. Iron deficiency causes Anemia (రక్తహీనత).",
      "**Vitamins & Deficiency Diseases:** Vitamin A deficiency causes Night Blindness, Vitamin B1 causes Beriberi, Vitamin C causes Scurvy, Vitamin D causes Rickets, and Vitamin K deficiency delays blood clotting.",
      "**Brain Control Center:** Medulla Oblongata in the hindbrain controls involuntary actions like heartbeat, breathing, and blood pressure."
    ]
  },
  gk: {
    history: [
      "**Indus Valley Civilization (సింధు నాగరికత):** Harappa was discovered by Daya Ram Sahni in 1921. It was a highly planned urban civilization with brick houses, drainage systems, and great baths.",
      "**Maurya Empire (మౌర్య సామ్రాజ్యం):** Founded by Chandragupta Maurya. Emperor Ashoka adopted Buddhism after the Kalinga War in 261 BC, propagating peace and dharma through rock edicts.",
      "**Mughal Empire (మొఘల్ సామ్రాజ్యం):** Founded by Babur in 1526 after the First Battle of Panipat. Akbar was famous for his religious tolerance and administration, while Shah Jahan built the Taj Mahal.",
      "**Revolt of 1857 (సిపాయిల తిరుగుబాటు):** Started at Meerut on May 10, 1857, initiated by Mangal Pandey. It is considered the first war of Indian Independence against British East India Company rule.",
      "**Indian National Congress (INC):** Founded in 1885 by A.O. Hume. First session was held at Bombay under W.C. Bonnerjee. Mahatma Gandhi returned to India in 1915 and led the freedom struggle."
    ],
    geography: [
      "**India Physical Borders:** India is the 7th largest country by area. It shares the longest border with Bangladesh and has a vast coastline of 7,516 kilometers.",
      "**River Systems of India:** Ganga is the longest river in India. Godavari is known as 'Dakshin Ganga' (Vriddha Ganga). Indus and Brahmaputra originate in Tibet near Lake Mansarovar.",
      "**Soils in India:** Alluvial soil is the most fertile and covers the largest area in Northern plains. Black soil (Regur soil) is highly suitable for cotton cultivation.",
      "**Himalayan Ranges:** The Himalayas are young fold mountains. Mount K2 (Godwin Austen) is the highest peak in India, while Mount Everest is the highest in the world.",
      "**Climate & Monsoon:** India has a tropical monsoon climate. The Southwest Monsoon (June to September) brings the maximum rainfall to most parts of the country."
    ],
    economy: [
      "**Five-Year Plans (పంచవర్ష ప్రణాళికలు):** 1st Plan (1951-56) based on Harrod-Domar model focused on Agriculture. 2nd Plan (1956-61) based on Mahalanobis model focused on Heavy Industries.",
      "**NITI Aayog (నీతి ఆయోగ్):** Established on January 1, 2015, replacing the Planning Commission. The Prime Minister is the ex-officio Chairperson, acting as a think tank.",
      "**RBI (భారతీయ రిజర్వ్ బ్యాంక్):** Established on April 1, 1935, based on Hilton Young Commission. Nationalized in 1949. It acts as the banker of banks and issues currency.",
      "**Inflation Basics:** Inflation is the general rise in prices. CPI (Consumer Price Index) is used to measure retail inflation, monitored closely by RBI to adjust interest rates.",
      "**GDP & National Income:** Gross Domestic Product (GDP) is the total money value of all final goods and services produced within a country's boundary in a financial year."
    ],
    staticgk: [
      "**Longest & Largest in India:** Hirakud Dam (Odisha) on Mahanadi river is the longest dam in India. Tehri Dam (Uttarakhand) on Bhagirathi river is the tallest dam in India.",
      "**National Parks (జాతీయ పార్కులు):** Jim Corbett National Park (Uttarakhand) is the oldest national park. Kaziranga (Assam) is famous for one-horned rhinoceros.",
      "**Important Lakes:** Wular Lake (Jammu & Kashmir) is the largest freshwater lake. Chilika Lake (Odisha) is the largest saltwater lagoon lake in India.",
      "**Classical Dances of India:** Bharatanatyam (Tamil Nadu), Kuchipudi (Andhra Pradesh), Kathakali (Kerala), Kathak (Uttar Pradesh), Odissi (Odisha), and Sattriya (Assam).",
      "**UNESCO Heritage Sites:** Taj Mahal, Ajanta Caves, Ellora Caves, and Sun Temple Konark were among the first sites selected from India in 1983."
    ],
    artculture: [
      "**Classical Music Traditions:** Carnatic Music is the classical tradition of South India, while Hindustani Music is the classical tradition of North India.",
      "**Important Festivals (పండుగలు):** Onam is the harvest festival of Kerala. Pongal is the harvest festival of Tamil Nadu. Bihu is celebrated in Assam during harvest season.",
      "**Famous Paintings:** Madhubani paintings originate from Bihar. Pattachitra paintings are from Odisha. Warli art is a famous tribal art form from Maharashtra.",
      "**Monuments & Architects:** Taj Mahal was designed by Ustad Ahmad Lahori. Red Fort in Delhi and Jama Masjid were built by Mughal Emperor Shah Jahan.",
      "**Theater & Puppetry:** Kathputli is the traditional string puppetry of Rajasthan. Yakshagana is a famous traditional theater form of Karnataka."
    ]
  }
};

// --- MINI PRACTICE QUIZ DATASET ---
const QUIZ_QUESTIONS = {
  ca: {
    question: "January 2026 lo, India's 77th Republic Day celebration guest speaker ga evaru vacharu?",
    options: [
      { text: "Presidents of European Commission & Council", correct: true },
      { text: "US President Joe Biden", correct: false },
      { text: "French President Emmanuel Macron", correct: false }
    ],
    hint: "Ursula von der Leyen and Charles Michel were chief guests."
  },
  gs: {
    question: "Physics lo 1 Horse Power (HP) value entha Watts ki samananga vuntundhi?",
    options: [
      { text: "500 Watts", correct: false },
      { text: "746 Watts", correct: true },
      { text: "1000 Watts", correct: false }
    ],
    hint: "It is a standard value used for measuring motor engines power."
  },
  gk: {
    question: "Indian National Congress (INC) ni 1885 lo evaru sthapincharu?",
    options: [
      { text: "Mahatma Gandhi", correct: false },
      { text: "W. C. Bonnerjee", correct: false },
      { text: "A. O. Hume", correct: true }
    ],
    hint: "He was a retired British civil servant."
  }
};

export default function App() {
  const [activeMode, setActiveMode] = useState('ca');
  const [selectedSubKey, setSelectedSubKey] = useState('January'); // January for CA, physics for GS, history for GK
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [readNotes, setReadNotes] = useState({});

  const handleModeChange = (modeId) => {
    setActiveMode(modeId);
    setSelectedAnswer(null);
    setShowHint(false);
    if (modeId === 'ca') setSelectedSubKey('January');
    else if (modeId === 'gs') setSelectedSubKey('physics');
    else if (modeId === 'gk') setSelectedSubKey('history');
  };

  const handleSubKeyChange = (subKey) => {
    setSelectedSubKey(subKey);
    setSelectedAnswer(null);
    setShowHint(false);
  };

  const toggleReadStatus = (noteIndex) => {
    const key = `${activeMode}_${selectedSubKey}_${noteIndex}`;
    setReadNotes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // --- FILTERED DATA LOGIC ---
  const getFilteredNotes = () => {
    const activeList = APP_DATABASE[activeMode][selectedSubKey] || [];
    if (!searchQuery.trim()) return activeList;

    const query = searchQuery.toLowerCase();
    const allMatching = [];
    
    // Search within active mode across all its sub-keys
    Object.keys(APP_DATABASE[activeMode]).forEach(subKey => {
      APP_DATABASE[activeMode][subKey].forEach((noteText, idx) => {
        if (noteText.toLowerCase().includes(query)) {
          allMatching.push({
            subKeyName: subKey,
            text: noteText,
            index: idx
          });
        }
      });
    });
    return allMatching;
  };

  const filteredNotes = getFilteredNotes();
  const currentQuiz = QUIZ_QUESTIONS[activeMode];

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
      {/* HEADER SECTION */}
      <header className="nav-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
          <span style={{ fontSize: '1.8rem' }}>🎓</span>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '900', background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              RRB Group D Prep Hub
            </h1>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Science, General Studies & Current Affairs 2026 (Tinglish)</p>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-container">
          <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search study points (e.g. Kavach, Blood)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {/* MODE SELECTOR (TOP BAR) */}
      <div style={{ display: 'flex', gap: '10px', padding: '12px 24px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)' }}>
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => handleModeChange(mode.id)}
              className="btn-action"
              style={{
                background: isActive ? 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))' : 'rgba(255,255,255,0.04)',
                border: 'none',
                padding: '10px 20px',
                fontSize: '0.85rem'
              }}
            >
              <Icon size={14} /> {mode.name}
            </button>
          );
        })}
      </div>

      {/* CORE WORKSPACE */}
      <div className="workspace-layout">
        {/* Left Sub-Navigation Sidebar */}
        <aside className="month-sidebar">
          <p style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'left', paddingLeft: '8px' }}>
            {activeMode === 'ca' ? 'Select Month' : 'Select Subject'}
          </p>
          
          {activeMode === 'ca' && CA_MONTHS.map((month) => {
            const isActive = selectedSubKey === month;
            return (
              <button 
                key={month} 
                onClick={() => handleSubKeyChange(month)}
                className={`month-item ${isActive ? 'active' : ''}`}
              >
                <span>{month} 2026</span>
                <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.4 }} />
              </button>
            );
          })}

          {activeMode === 'gs' && GS_SUBJECTS.map((sub) => {
            const isActive = selectedSubKey === sub.id;
            const Icon = sub.icon;
            return (
              <button 
                key={sub.id} 
                onClick={() => handleSubKeyChange(sub.id)}
                className={`month-item ${isActive ? 'active' : ''}`}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={14} /> {sub.name}
                </span>
                <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.4 }} />
              </button>
            );
          })}

          {activeMode === 'gk' && GK_SUBJECTS.map((sub) => {
            const isActive = selectedSubKey === sub.id;
            const Icon = sub.icon;
            return (
              <button 
                key={sub.id} 
                onClick={() => handleSubKeyChange(sub.id)}
                className={`month-item ${isActive ? 'active' : ''}`}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={14} /> {sub.name}
                </span>
                <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.4 }} />
              </button>
            );
          })}
        </aside>

        {/* Main Content Workspace */}
        <main className="content-main">
          {/* Scrollable Study Notes */}
          <div className="notes-container">
            {searchQuery.trim() && (
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', marginBottom: '4px' }}>
                Search results for: "<strong>{searchQuery}</strong>" in {MODES.find(m => m.id === activeMode).name}
              </p>
            )}

            {filteredNotes.length === 0 ? (
              <div style={{ margin: 'auto', textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                <ShieldAlert size={48} style={{ strokeWidth: '1.2px', marginBottom: '14px', color: 'var(--border-glass)' }} />
                <p style={{ fontSize: '0.9rem' }}>No study points found matching your search. Try changing the query! 😊</p>
              </div>
            ) : (
              filteredNotes.map((note, idx) => {
                const isSearch = typeof note === 'object';
                const noteText = isSearch ? note.text : note;
                const noteIndex = isSearch ? note.index : idx;
                const subKeyHeader = isSearch ? note.subKeyName : null;

                const readKey = `${activeMode}_${selectedSubKey}_${noteIndex}`;
                const isRead = readNotes[readKey];

                return (
                  <div 
                    key={idx} 
                    className="note-card"
                    style={isRead ? { borderLeft: '4px solid #10b981', background: 'rgba(16, 185, 129, 0.02)' } : { borderLeft: '4px solid var(--accent-purple)' }}
                  >
                    {isSearch && (
                      <span style={{ fontSize: '0.65rem', background: 'rgba(139,92,246,0.15)', color: 'var(--accent-purple)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px', fontWeight: '800' }}>
                        {subKeyHeader}
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
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'white' }}>Quick Review Test: {MODES.find(m => m.id === activeMode).name}</h4>
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
                        onClick={() => setSelectedAnswer(idx)}
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

          {/* Footer Signature */}
          <footer style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-glass)', padding: '12px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Built with ❤️ by **Malapalli Suryam (N210056)**
          </footer>
        </main>
      </div>
    </div>
  );
}
