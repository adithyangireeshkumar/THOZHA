/**
 * THUNA — Demo/Fallback Data
 * Used when Supabase is not configured
 * This mirrors the seed data from SQL
 */

export const demoStations = [
  {
    station_id: 'a1b2c3d4-0001-4000-8000-000000000001',
    station_name: 'Kakkanad Police Station',
    district: 'Ernakulam',
    address: 'Kakkanad, Kochi, Kerala 682030',
    phone: '0484-2428100',
  },
  {
    station_id: 'a1b2c3d4-0002-4000-8000-000000000002',
    station_name: 'Kalamassery Police Station',
    district: 'Ernakulam',
    address: 'Kalamassery, Kochi, Kerala 682022',
    phone: '0484-2532100',
  },
  {
    station_id: 'a1b2c3d4-0003-4000-8000-000000000003',
    station_name: 'Aluva Police Station',
    district: 'Ernakulam',
    address: 'Aluva, Kochi, Kerala 683101',
    phone: '0484-2624100',
  },
];

export const demoOfficers = [
  { officer_id: 'b1b2c3d4-0001-4000-8000-000000000001', officer_name: 'SI Rajeev Kumar', rank: 'Sub Inspector', badge_number: 'KKD-101', station_id: 'a1b2c3d4-0001-4000-8000-000000000001' },
  { officer_id: 'b1b2c3d4-0002-4000-8000-000000000002', officer_name: 'CI Priya Menon', rank: 'Circle Inspector', badge_number: 'KKD-102', station_id: 'a1b2c3d4-0001-4000-8000-000000000001' },
  { officer_id: 'b1b2c3d4-0003-4000-8000-000000000003', officer_name: 'ASI Deepak Nair', rank: 'Assistant Sub Inspector', badge_number: 'KKD-103', station_id: 'a1b2c3d4-0001-4000-8000-000000000001' },
  { officer_id: 'b1b2c3d4-0004-4000-8000-000000000004', officer_name: 'SI Anjali Thomas', rank: 'Sub Inspector', badge_number: 'KLM-201', station_id: 'a1b2c3d4-0002-4000-8000-000000000002' },
  { officer_id: 'b1b2c3d4-0005-4000-8000-000000000005', officer_name: 'CI Manoj Pillai', rank: 'Circle Inspector', badge_number: 'KLM-202', station_id: 'a1b2c3d4-0002-4000-8000-000000000002' },
  { officer_id: 'b1b2c3d4-0006-4000-8000-000000000006', officer_name: 'ASI Reshma Das', rank: 'Assistant Sub Inspector', badge_number: 'KLM-203', station_id: 'a1b2c3d4-0002-4000-8000-000000000002' },
  { officer_id: 'b1b2c3d4-0007-4000-8000-000000000007', officer_name: 'SI Vishnu Prasad', rank: 'Sub Inspector', badge_number: 'ALV-301', station_id: 'a1b2c3d4-0003-4000-8000-000000000003' },
  { officer_id: 'b1b2c3d4-0008-4000-8000-000000000008', officer_name: 'CI Lakshmi Warrier', rank: 'Circle Inspector', badge_number: 'ALV-302', station_id: 'a1b2c3d4-0003-4000-8000-000000000003' },
  { officer_id: 'b1b2c3d4-0009-4000-8000-000000000009', officer_name: 'ASI Arun Mohan', rank: 'Assistant Sub Inspector', badge_number: 'ALV-303', station_id: 'a1b2c3d4-0003-4000-8000-000000000003' },
];

const crimeTypes = ['theft', 'robbery', 'assault', 'burglary', 'fraud', 'cybercrime', 'drug_offense', 'murder', 'kidnapping', 'domestic_violence', 'traffic_violation', 'other'];
const statuses = ['complaint_registered', 'investigation_started', 'evidence_collected', 'arrest_made', 'chargesheet_filed', 'case_closed'];
const ipcSections = {
  theft: 'IPC 379', robbery: 'IPC 392', assault: 'IPC 323', burglary: 'IPC 457',
  fraud: 'IPC 420', cybercrime: 'IT Act 66C', drug_offense: 'NDPS Act 20',
  murder: 'IPC 302', kidnapping: 'IPC 363', domestic_violence: 'IPC 498A',
  traffic_violation: 'MV Act 184', other: 'IPC 504',
};

const locations = {
  'a1b2c3d4-0001-4000-8000-000000000001': ['Infopark Phase 1, Kakkanad','Kakkanad Market Road','Thrikkakara Temple Road','Kakkanad Civil Station Road','Smart City Kochi','Seaport-Airport Road','Kakkanad Bus Stand','Kakkanad Vazhakkala','Thrikkakara East','Kakkanad Pottakuzhi Junction'],
  'a1b2c3d4-0002-4000-8000-000000000002': ['CUSAT Campus, Kalamassery','Kalamassery Market','NH 544, Kalamassery','Kalamassery HMT Colony','Kalamassery South','Kalamassery Bus Stand','Kalamassery Jn','Kalamassery Industrial Area','Ernakulam Medical College','Kalamassery North'],
  'a1b2c3d4-0003-4000-8000-000000000003': ['Aluva Manappuram','Aluva Town','Aluva Bridge Road','Aluva Desam','Aluva-Munnar Road','Aluva Periyar River Bank','Aluva Market Road','Aluva Industrial Area','Aluva West','Aluva Railway Station'],
};

const descriptions = {
  theft: ['Laptop stolen from parked vehicle during working hours.','Mobile phone snatching incident during rush hour.','Two-wheeler theft from parking area.','Wallet picked from passenger at bus stand.','Construction material theft from building site.'],
  robbery: ['Armed robbery at jewelry shop. Masked individuals escaped with gold.','Chain snatching from pedestrian during morning walk.','Dacoity at ATM kiosk. Guard assaulted.','Armed robbery at finance company office.','Daylight robbery at mobile phone shop.'],
  assault: ['Physical altercation between two groups near temple.','Grievous hurt caused during road rage incident.','Group clash near shopping complex.','Attack with sharp weapon during neighborhood dispute.','Fight among vendors over space allocation.'],
  burglary: ['Residential break-in. Jewelry and cash stolen from locked house.','Shop break-in at night. Electronics stolen.','House break-in during daytime. Electronic items and cash stolen.','ATM machine broken open using gas cutting equipment.','Warehouse break-in. Goods looted.'],
  fraud: ['Online payment fraud involving fake e-commerce website.','Investment fraud scheme promising 200% returns.','Document forgery for bank loan.','Ponzi scheme targeting retired employees.','Chit fund scam. Organizer absconded with funds.'],
  cybercrime: ['Identity theft through phishing email targeting employees.','Ransomware attack on small business.','Online harassment and defamation through social media.','OTP fraud targeting senior citizens.','Corporate espionage. Confidential data leaked.'],
  drug_offense: ['Seizure of cannabis during routine vehicle check.','Synthetic drug peddling ring busted.','Ganja seizure during surprise check.','MDMA tablets seized near university campus.','Cannabis cultivation busted in residential area.'],
  murder: ['Homicide reported. Victim found deceased in apartment.','Factory worker found dead with stab wounds.','Culpable homicide during property feud.'],
  kidnapping: ['Missing minor reported. Last seen near school premises.','Abduction of businessman for ransom.','Child abduction attempt near school.','Missing person complaint.'],
  domestic_violence: ['Domestic violence complaint. Dowry harassment alleged.','Protection order sought. Physical and mental harassment.','Dowry death complaint. Suspicious death reported.','Elderly parent abuse by son over property dispute.'],
  traffic_violation: ['Reckless driving causing damage to multiple vehicles.','Hit and run case. Pedestrian injured.','Drunk driving causing accident.','Fatal road accident due to speeding.'],
  other: ['Criminal intimidation and abusive language at workplace.','Wrongful restraint and threatening behavior.','Eve teasing and stalking complaint.','Criminal intimidation through anonymous letters.'],
};

const complainants = ['Arun Krishnan','Meera Suresh','Rajan Nambiar','Suja Menon','Vivek Sharma','Jayesh Pillai','Divya Raj','Latha Nair','Mohammed Rafiq','Anitha George','Sunil Kumar','Pradeep Varma','Santhosh Babu','Rekha Mohan','Thomas Mathew','George Kurian','Sreelakshmi R','Arya Lakshmi','Kurian Mathew','Vijayan P','Sarita Devi','Kavitha S','Kamala Devi','Jose Fisherman','Ravi Kumar'];

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate 90 FIRs
function generateFIRs() {
  const firs = [];
  const stationPrefixes = ['KKD', 'KLM', 'ALV'];
  let counter = 0;

  for (let s = 0; s < 3; s++) {
    const stationId = demoStations[s].station_id;
    const prefix = stationPrefixes[s];
    const locs = locations[stationId];

    for (let i = 1; i <= 30; i++) {
      const day = Math.ceil(i / 3);
      const r = seededRandom(counter + 42);
      const crimeIdx = Math.floor(r * crimeTypes.length);
      const crime = crimeTypes[crimeIdx];
      const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
      const hour = hours[Math.floor(seededRandom(counter + 100) * hours.length)];

      firs.push({
        fir_id: `fir-${s}-${i}`,
        fir_number: `${prefix}/2025/${String(i).padStart(4, '0')}`,
        fir_date: `2025-08-${String(day).padStart(2, '0')}`,
        fir_time: `${String(hour).padStart(2, '0')}:${String(Math.floor(seededRandom(counter + 200) * 60)).padStart(2, '0')}`,
        crime_type: crime,
        ipc_section: ipcSections[crime],
        location: locs[Math.floor(seededRandom(counter + 300) * locs.length)],
        description: descriptions[crime][Math.floor(seededRandom(counter + 400) * descriptions[crime].length)],
        complainant: complainants[Math.floor(seededRandom(counter + 500) * complainants.length)],
        station_id: stationId,
      });
      counter++;
    }
  }
  return firs;
}

function generateCases(firs) {
  return firs.map((fir, idx) => {
    const r = seededRandom(idx + 700);
    const statusIdx = Math.floor(r * statuses.length);
    const officerStationOfficers = demoOfficers.filter(o => o.station_id === fir.station_id);
    const officer = officerStationOfficers[idx % officerStationOfficers.length];

    return {
      case_id: `case-${idx}`,
      fir_id: fir.fir_id,
      officer_id: officer.officer_id,
      case_status: statuses[statusIdx],
      start_date: fir.fir_date,
    };
  });
}

const statusOrder = ['complaint_registered', 'investigation_started', 'evidence_collected', 'arrest_made', 'chargesheet_filed', 'case_closed'];

const followupRemarks = {
  complaint_registered: ['FIR registered. Complainant statement recorded.', 'Complaint received and documented.', 'Initial report filed.'],
  investigation_started: ['Investigation team deployed. CCTV footage being collected.', 'Witness statements being recorded.', 'Crime scene analysis underway.'],
  evidence_collected: ['Physical evidence secured and sent to FSL.', 'Digital evidence collected. Analysis in progress.', 'Key evidence recovered from scene.'],
  arrest_made: ['Suspect apprehended. Confession recorded.', 'Arrests made based on evidence and witness testimony.', 'Primary suspect taken into custody.'],
  chargesheet_filed: ['Chargesheet submitted to court with all evidence.', 'Case file completed and sent for prosecution.'],
  case_closed: ['Case resolved and closed.', 'All proceedings completed. Case closed.'],
};

function generateFollowups(cases) {
  const allFollowups = [];

  cases.forEach((c, idx) => {
    const currentStatusIdx = statusOrder.indexOf(c.case_status);
    const baseDate = new Date(c.start_date);

    for (let i = 0; i <= currentStatusIdx; i++) {
      const fDate = new Date(baseDate);
      fDate.setDate(fDate.getDate() + i * 2);
      const status = statusOrder[i];
      const remarks = followupRemarks[status];

      allFollowups.push({
        followup_id: `fu-${idx}-${i}`,
        case_id: c.case_id,
        followup_date: fDate.toISOString().split('T')[0],
        status: status,
        remarks: remarks[Math.floor(seededRandom(idx * 10 + i) * remarks.length)],
      });
    }
  });

  return allFollowups;
}

function generateNews(cases) {
  const newsItems = [];
  const sources = ['Manorama Online', 'Mathrubhumi', 'The Hindu', 'Times of India', 'India Today', 'NDTV', 'Asianet News', 'News18', 'Deccan Chronicle', 'Economic Times'];
  let newsCount = 0;

  cases.forEach((c, idx) => {
    const fir = demoFIRs.find(f => f.fir_id === c.fir_id);
    if (!fir) return;

    // ~30% of cases get news
    if (seededRandom(idx + 900) > 0.3) return;

    const numArticles = Math.floor(seededRandom(idx + 1000) * 2) + 1;
    for (let a = 0; a < numArticles; a++) {
      const pubDate = new Date(fir.fir_date);
      pubDate.setDate(pubDate.getDate() + a + 1);
      const source = sources[Math.floor(seededRandom(newsCount + 1100) * sources.length)];
      const crimeLabel = fir.crime_type.replace(/_/g, ' ');

      newsItems.push({
        article_id: `news-${newsCount}`,
        case_id: c.case_id,
        title: `${crimeLabel.charAt(0).toUpperCase() + crimeLabel.slice(1)} case reported at ${fir.location} — ${fir.description.substring(0, 60)}...`,
        source: source,
        publication_date: pubDate.toISOString().split('T')[0],
        article_url: `https://example.com/news/${newsCount}`,
        verified: seededRandom(newsCount + 1200) > 0.2,
      });
      newsCount++;
    }
  });

  return newsItems;
}

export const demoFIRs = generateFIRs();
export const demoCases = generateCases(demoFIRs);
export const demoFollowups = generateFollowups(demoCases);
export const demoNews = generateNews(demoCases);

/**
 * Helper to get enriched case data with joins
 */
export function getEnrichedCases() {
  return demoCases.map(c => {
    const fir = demoFIRs.find(f => f.fir_id === c.fir_id);
    const officer = demoOfficers.find(o => o.officer_id === c.officer_id);
    const station = demoStations.find(s => s.station_id === fir?.station_id);

    return {
      ...c,
      fir,
      officer,
      station,
    };
  });
}
