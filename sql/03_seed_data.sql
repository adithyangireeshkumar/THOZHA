-- ============================================
-- THUNA — Seed Data
-- 90 cases across 3 stations, August 2025
-- 3 cases per day × 30 days
-- ============================================

-- ============================================
-- POLICE STATIONS
-- ============================================

INSERT INTO police_stations (station_id, station_name, district, address, phone) VALUES
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Kakkanad Police Station', 'Ernakulam', 'Kakkanad, Kochi, Kerala 682030', '0484-2428100'),
  ('a1b2c3d4-0002-4000-8000-000000000002', 'Kalamassery Police Station', 'Ernakulam', 'Kalamassery, Kochi, Kerala 682022', '0484-2532100'),
  ('a1b2c3d4-0003-4000-8000-000000000003', 'Aluva Police Station', 'Ernakulam', 'Aluva, Kochi, Kerala 683101', '0484-2624100');

-- ============================================
-- OFFICERS (3 per station = 9 total)
-- ============================================

INSERT INTO officers (officer_id, officer_name, rank, badge_number, station_id) VALUES
  -- Kakkanad Officers
  ('b1b2c3d4-0001-4000-8000-000000000001', 'SI Rajeev Kumar', 'Sub Inspector', 'KKD-101', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('b1b2c3d4-0002-4000-8000-000000000002', 'CI Priya Menon', 'Circle Inspector', 'KKD-102', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('b1b2c3d4-0003-4000-8000-000000000003', 'ASI Deepak Nair', 'Assistant Sub Inspector', 'KKD-103', 'a1b2c3d4-0001-4000-8000-000000000001'),
  -- Kalamassery Officers
  ('b1b2c3d4-0004-4000-8000-000000000004', 'SI Anjali Thomas', 'Sub Inspector', 'KLM-201', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('b1b2c3d4-0005-4000-8000-000000000005', 'CI Manoj Pillai', 'Circle Inspector', 'KLM-202', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('b1b2c3d4-0006-4000-8000-000000000006', 'ASI Reshma Das', 'Assistant Sub Inspector', 'KLM-203', 'a1b2c3d4-0002-4000-8000-000000000002'),
  -- Aluva Officers
  ('b1b2c3d4-0007-4000-8000-000000000007', 'SI Vishnu Prasad', 'Sub Inspector', 'ALV-301', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('b1b2c3d4-0008-4000-8000-000000000008', 'CI Lakshmi Warrier', 'Circle Inspector', 'ALV-302', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('b1b2c3d4-0009-4000-8000-000000000009', 'ASI Arun Mohan', 'Assistant Sub Inspector', 'ALV-303', 'a1b2c3d4-0003-4000-8000-000000000003');

-- ============================================
-- FIR RECORDS (90 total — 30 per station)
-- ============================================

-- ---- KAKKANAD STATION (KKD) ----

INSERT INTO fir (fir_id, fir_number, fir_date, fir_time, crime_type, ipc_section, location, description, complainant, station_id) VALUES
  ('c1000001-0001-4000-8000-000000000001', 'KKD/2025/0001', '2025-08-01', '09:15', 'theft', 'IPC 379', 'Infopark Phase 1, Kakkanad', 'Laptop stolen from parked vehicle in Infopark parking lot during working hours.', 'Arun Krishnan', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0002-4000-8000-000000000002', 'KKD/2025/0002', '2025-08-01', '14:30', 'fraud', 'IPC 420', 'Kakkanad Market Road', 'Online payment fraud involving fake e-commerce website. Victim lost Rs 45,000.', 'Meera Suresh', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0003-4000-8000-000000000003', 'KKD/2025/0003', '2025-08-01', '19:45', 'assault', 'IPC 323', 'Thrikkakara Temple Road', 'Physical altercation between two groups near temple premises during festival.', 'Rajan Nambiar', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0004-4000-8000-000000000004', 'KKD/2025/0004', '2025-08-02', '08:00', 'burglary', 'IPC 457', 'Kakkanad Civil Station Road', 'Residential break-in. Jewelry and cash worth Rs 2,50,000 stolen from locked house.', 'Suja Menon', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0005-4000-8000-000000000005', 'KKD/2025/0005', '2025-08-02', '11:20', 'cybercrime', 'IT Act 66C', 'Infopark Phase 2, Kakkanad', 'Identity theft through phishing email targeting IT company employees.', 'Vivek Sharma', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0006-4000-8000-000000000006', 'KKD/2025/0006', '2025-08-02', '16:10', 'traffic_violation', 'MV Act 184', 'Seaport-Airport Road', 'Reckless driving causing damage to multiple parked vehicles near toll plaza.', 'Jayesh Pillai', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0007-4000-8000-000000000007', 'KKD/2025/0007', '2025-08-03', '07:30', 'theft', 'IPC 379', 'Kakkanad Bus Stand', 'Mobile phone snatching incident near bus stand during morning rush hour.', 'Divya Raj', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0008-4000-8000-000000000008', 'KKD/2025/0008', '2025-08-03', '13:00', 'domestic_violence', 'IPC 498A', 'Kakkanad Vazhakkala', 'Domestic violence complaint filed by wife against husband. Dowry harassment alleged.', 'Latha Nair', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0009-4000-8000-000000000009', 'KKD/2025/0009', '2025-08-03', '18:45', 'drug_offense', 'NDPS Act 20', 'Thrikkakara East', 'Seizure of cannabis (2kg) from suspects during routine vehicle check.', 'Police Patrol', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0010-4000-8000-000000000010', 'KKD/2025/0010', '2025-08-04', '10:00', 'robbery', 'IPC 392', 'Kakkanad Pottakuzhi Junction', 'Armed robbery at jewelry shop. Two masked individuals escaped with gold worth Rs 15 lakhs.', 'Mohammed Rafiq', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0011-4000-8000-000000000011', 'KKD/2025/0011', '2025-08-04', '14:15', 'fraud', 'IPC 420', 'Smart City Kochi', 'Investment fraud scheme targeting tech workers promising 200% returns.', 'Anitha George', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0012-4000-8000-000000000012', 'KKD/2025/0012', '2025-08-04', '20:30', 'assault', 'IPC 325', 'Kakkanad Pallimukku', 'Grievous hurt caused during road rage incident. Victim hospitalized.', 'Sunil Kumar', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0013-4000-8000-000000000013', 'KKD/2025/0013', '2025-08-05', '06:45', 'theft', 'IPC 379', 'Kakkanad Collectorate', 'Two-wheeler theft from government office parking area.', 'Pradeep Varma', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0014-4000-8000-000000000014', 'KKD/2025/0014', '2025-08-05', '12:00', 'cybercrime', 'IT Act 66D', 'Infopark Kakkanad', 'Ransomware attack on small business. Data encrypted and Rs 5 lakh demanded.', 'Santhosh Babu', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0015-4000-8000-000000000015', 'KKD/2025/0015', '2025-08-05', '17:30', 'other', 'IPC 504', 'Kakkanad CSEZ', 'Criminal intimidation and abusive language at workplace.', 'Rekha Mohan', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0016-4000-8000-000000000016', 'KKD/2025/0016', '2025-08-06', '09:00', 'burglary', 'IPC 454', 'Kakkanad Kunnumpuram', 'House break-in during daytime. Electronic items and cash stolen.', 'Thomas Mathew', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0017-4000-8000-000000000017', 'KKD/2025/0017', '2025-08-06', '15:20', 'fraud', 'IPC 468', 'Kakkanad Civil Station', 'Document forgery - fake property documents used for bank loan.', 'Bank Manager SBI', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0018-4000-8000-000000000018', 'KKD/2025/0018', '2025-08-06', '21:00', 'assault', 'IPC 324', 'Thrikkakara West', 'Attack with sharp weapon during neighborhood dispute. Minor injuries.', 'Gopalan Kutty', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0019-4000-8000-000000000019', 'KKD/2025/0019', '2025-08-07', '08:30', 'kidnapping', 'IPC 363', 'Kakkanad Chittoor Road', 'Missing minor reported. Last seen near school premises.', 'Beena Joseph', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0020-4000-8000-000000000020', 'KKD/2025/0020', '2025-08-07', '13:45', 'theft', 'IPC 380', 'Kakkanad Infopark Gate', 'Bag snatching from car at traffic signal. Documents and laptop lost.', 'Nithin Raj', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0021-4000-8000-000000000021', 'KKD/2025/0021', '2025-08-07', '19:00', 'drug_offense', 'NDPS Act 22', 'Kakkanad Padamugal', 'Synthetic drug peddling ring busted. Three suspects apprehended.', 'Excise Dept', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0022-4000-8000-000000000022', 'KKD/2025/0022', '2025-08-08', '10:30', 'traffic_violation', 'MV Act 185', 'NH Bypass Kakkanad', 'Drunk driving causing accident. Two persons injured.', 'Highway Patrol', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0023-4000-8000-000000000023', 'KKD/2025/0023', '2025-08-08', '14:00', 'robbery', 'IPC 394', 'Kakkanad Kinfra Park', 'Dacoity at ATM kiosk. Guard assaulted and Rs 8 lakhs looted.', 'Security Guard', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0024-4000-8000-000000000024', 'KKD/2025/0024', '2025-08-08', '22:15', 'murder', 'IPC 302', 'Kakkanad Changampuzha Nagar', 'Homicide reported. Victim found deceased in apartment. Suspected personal enmity.', 'Neighbor', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0025-4000-8000-000000000025', 'KKD/2025/0025', '2025-08-09', '07:00', 'theft', 'IPC 379', 'Kakkanad Pipeline Road', 'Construction material theft from building site.', 'Site Engineer', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0026-4000-8000-000000000026', 'KKD/2025/0026', '2025-08-09', '11:30', 'fraud', 'IPC 406', 'Kakkanad Chembumukku', 'Criminal breach of trust by business partner. Rs 12 lakh misappropriated.', 'George Kurian', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0027-4000-8000-000000000027', 'KKD/2025/0027', '2025-08-09', '16:00', 'domestic_violence', 'DV Act 12', 'Kakkanad Vazhakkala East', 'Protection order sought. Physical and mental harassment by in-laws.', 'Sreelakshmi R', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0028-4000-8000-000000000028', 'KKD/2025/0028', '2025-08-10', '09:45', 'cybercrime', 'IT Act 67', 'Smart City Phase 1', 'Online harassment and defamation through social media.', 'Arya Lakshmi', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0029-4000-8000-000000000029', 'KKD/2025/0029', '2025-08-10', '15:00', 'assault', 'IPC 326', 'Kakkanad Edachira', 'Group clash near shopping complex. Multiple injuries reported.', 'Shop Owner', 'a1b2c3d4-0001-4000-8000-000000000001'),
  ('c1000001-0030-4000-8000-000000000030', 'KKD/2025/0030', '2025-08-10', '20:00', 'other', 'IPC 341', 'Thrikkakara Municipality', 'Wrongful restraint and threatening behavior over property dispute.', 'Kurian Mathew', 'a1b2c3d4-0001-4000-8000-000000000001');

-- ---- KALAMASSERY STATION (KLM) ----

INSERT INTO fir (fir_id, fir_number, fir_date, fir_time, crime_type, ipc_section, location, description, complainant, station_id) VALUES
  ('c1000002-0001-4000-8000-000000000001', 'KLM/2025/0001', '2025-08-01', '08:30', 'theft', 'IPC 379', 'CUSAT Campus, Kalamassery', 'Bicycle theft from university hostel parking area.', 'Student Union', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0002-4000-8000-000000000002', 'KLM/2025/0002', '2025-08-01', '12:15', 'assault', 'IPC 323', 'Kalamassery Market', 'Physical assault during market dispute between vendors.', 'Vijayan P', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0003-4000-8000-000000000003', 'KLM/2025/0003', '2025-08-01', '18:00', 'traffic_violation', 'MV Act 184', 'NH 544, Kalamassery', 'Hit and run case. Pedestrian injured by unidentified vehicle.', 'Bystander', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0004-4000-8000-000000000004', 'KLM/2025/0004', '2025-08-02', '09:00', 'fraud', 'IPC 420', 'Kalamassery HMT Colony', 'Ponzi scheme targeting retired employees. Rs 30 lakh collected.', 'Retired Employees Group', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0005-4000-8000-000000000005', 'KLM/2025/0005', '2025-08-02', '14:45', 'burglary', 'IPC 457', 'Kalamassery South', 'Shop break-in at night. Electronics worth Rs 5 lakhs stolen.', 'Shop Owner Ravi', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0006-4000-8000-000000000006', 'KLM/2025/0006', '2025-08-02', '20:30', 'drug_offense', 'NDPS Act 20', 'Kalamassery Bus Stand', 'Ganja seizure (500g) during surprise check at bus stand.', 'Narcotics Bureau', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0007-4000-8000-000000000007', 'KLM/2025/0007', '2025-08-03', '07:45', 'robbery', 'IPC 392', 'Kalamassery Jn', 'Chain snatching from woman pedestrian during morning walk.', 'Sarita Devi', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0008-4000-8000-000000000008', 'KLM/2025/0008', '2025-08-03', '11:30', 'cybercrime', 'IT Act 66C', 'Kalamassery Industrial Area', 'Phishing attack on factory employees. Salary accounts compromised.', 'HR Manager', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0009-4000-8000-000000000009', 'KLM/2025/0009', '2025-08-03', '16:30', 'theft', 'IPC 380', 'Ernakulam Medical College', 'Theft of medical equipment from hospital storage room.', 'Hospital Admin', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0010-4000-8000-000000000010', 'KLM/2025/0010', '2025-08-04', '08:15', 'domestic_violence', 'IPC 498A', 'Kalamassery North', 'Dowry death complaint. Suspicious death of newly married woman.', 'Victim Parents', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0011-4000-8000-000000000011', 'KLM/2025/0011', '2025-08-04', '13:00', 'assault', 'IPC 325', 'CUSAT South Gate', 'Student gang fight resulting in serious injuries to three persons.', 'Campus Security', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0012-4000-8000-000000000012', 'KLM/2025/0012', '2025-08-04', '19:45', 'fraud', 'IPC 468', 'Kalamassery Municipality Office', 'Forgery of municipal documents for illegal construction permit.', 'Municipal Inspector', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0013-4000-8000-000000000013', 'KLM/2025/0013', '2025-08-05', '07:00', 'theft', 'IPC 379', 'Kalamassery Railway Station', 'Luggage theft from railway platform during peak hours.', 'Traveler Mohan', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0014-4000-8000-000000000014', 'KLM/2025/0014', '2025-08-05', '12:30', 'kidnapping', 'IPC 364', 'Kalamassery East', 'Abduction of businessman for ransom. Rs 50 lakh demanded.', 'Family Members', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0015-4000-8000-000000000015', 'KLM/2025/0015', '2025-08-05', '17:00', 'other', 'IPC 509', 'Kalamassery Metro Station', 'Eve teasing and stalking complaint at metro station.', 'Kavitha S', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0016-4000-8000-000000000016', 'KLM/2025/0016', '2025-08-06', '08:45', 'burglary', 'IPC 454', 'HMT Colony Phase 2', 'Series of house break-ins in residential colony. Suspected organized gang.', 'Colony Association', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0017-4000-8000-000000000017', 'KLM/2025/0017', '2025-08-06', '14:15', 'traffic_violation', 'MV Act 185', 'Kalamassery Bypass', 'Multiple vehicle collision due to drunk driving. Three injured.', 'Traffic Police', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0018-4000-8000-000000000018', 'KLM/2025/0018', '2025-08-06', '19:30', 'assault', 'IPC 324', 'Kalamassery Town', 'Acid attack attempt. Suspect identified and at large.', 'Victim Friend', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0019-4000-8000-000000000019', 'KLM/2025/0019', '2025-08-07', '09:30', 'fraud', 'IPC 420', 'Kalamassery Online', 'Job scam targeting engineering graduates. Rs 2 lakh per victim.', 'Multiple Victims', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0020-4000-8000-000000000020', 'KLM/2025/0020', '2025-08-07', '15:00', 'drug_offense', 'NDPS Act 21', 'Kalamassery Cochin University', 'Drug peddling near university campus. MDMA tablets seized.', 'Anti-Narcotics', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0021-4000-8000-000000000021', 'KLM/2025/0021', '2025-08-07', '21:00', 'murder', 'IPC 302', 'Kalamassery Industrial Estate', 'Factory worker found dead with stab wounds. Dispute over wages suspected.', 'Co-worker', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0022-4000-8000-000000000022', 'KLM/2025/0022', '2025-08-08', '08:00', 'theft', 'IPC 379', 'Kalamassery Pipe Line Road', 'Vehicle accessory theft. Side mirrors stolen from 5 cars in parking.', 'Car Owner', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0023-4000-8000-000000000023', 'KLM/2025/0023', '2025-08-08', '13:30', 'cybercrime', 'IT Act 66D', 'Kalamassery Tech Park', 'Corporate espionage. Confidential data leaked from company servers.', 'CEO Tech Corp', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0024-4000-8000-000000000024', 'KLM/2025/0024', '2025-08-08', '18:45', 'robbery', 'IPC 394', 'Kalamassery Gold Souk', 'Armed robbery at prominent jewelry showroom. Rs 25 lakhs worth stolen.', 'Showroom Manager', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0025-4000-8000-000000000025', 'KLM/2025/0025', '2025-08-09', '07:30', 'assault', 'IPC 323', 'Kalamassery Fish Market', 'Fight among fish vendors over space allocation.', 'Market Committee', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0026-4000-8000-000000000026', 'KLM/2025/0026', '2025-08-09', '12:00', 'fraud', 'IPC 406', 'Kalamassery Bank Road', 'Cheating by real estate developer. Apartments sold to multiple buyers.', 'Buyer Group', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0027-4000-8000-000000000027', 'KLM/2025/0027', '2025-08-09', '17:30', 'domestic_violence', 'DV Act 12', 'Kalamassery East Colony', 'Elderly parent abuse by son over property dispute.', 'Elderly Father', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0028-4000-8000-000000000028', 'KLM/2025/0028', '2025-08-10', '10:00', 'theft', 'IPC 379', 'CUSAT Library', 'Rare book theft from university library special collection.', 'Librarian', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0029-4000-8000-000000000029', 'KLM/2025/0029', '2025-08-10', '15:30', 'other', 'IPC 341', 'Kalamassery Toll Junction', 'Wrongful confinement and threats over business rivalry.', 'Business Owner', 'a1b2c3d4-0002-4000-8000-000000000002'),
  ('c1000002-0030-4000-8000-000000000030', 'KLM/2025/0030', '2025-08-10', '20:15', 'burglary', 'IPC 457', 'Kalamassery Godown Area', 'Warehouse break-in. Goods worth Rs 10 lakhs looted.', 'Warehouse Owner', 'a1b2c3d4-0002-4000-8000-000000000002');

-- ---- ALUVA STATION (ALV) ----

INSERT INTO fir (fir_id, fir_number, fir_date, fir_time, crime_type, ipc_section, location, description, complainant, station_id) VALUES
  ('c1000003-0001-4000-8000-000000000001', 'ALV/2025/0001', '2025-08-01', '07:00', 'theft', 'IPC 379', 'Aluva Manappuram', 'Gold chain snatching from temple-goer near Sivarathri Manappuram.', 'Kamala Devi', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0002-4000-8000-000000000002', 'ALV/2025/0002', '2025-08-01', '11:00', 'fraud', 'IPC 420', 'Aluva Town', 'Fake lottery scheme duping residents. Rs 10 lakh collected.', 'Town Residents', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0003-4000-8000-000000000003', 'ALV/2025/0003', '2025-08-01', '16:30', 'assault', 'IPC 326', 'Aluva Bridge Road', 'Group attack on auto driver over fare dispute. Serious injuries.', 'Auto Driver Union', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0004-4000-8000-000000000004', 'ALV/2025/0004', '2025-08-02', '08:15', 'burglary', 'IPC 457', 'Aluva Desam', 'ATM machine broken open. Rs 12 lakhs stolen using gas cutting.', 'Bank Security', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0005-4000-8000-000000000005', 'ALV/2025/0005', '2025-08-02', '13:30', 'traffic_violation', 'MV Act 184', 'Aluva-Munnar Road', 'Fatal road accident. Tourist bus overturned due to speeding.', 'Highway Police', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0006-4000-8000-000000000006', 'ALV/2025/0006', '2025-08-02', '19:00', 'drug_offense', 'NDPS Act 22', 'Aluva Periyar River Bank', 'Major drug bust. 5kg hashish and Rs 2 lakh cash seized.', 'Narcotics Team', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0007-4000-8000-000000000007', 'ALV/2025/0007', '2025-08-03', '09:00', 'robbery', 'IPC 392', 'Aluva Market Road', 'Armed robbery at finance company office during working hours.', 'Finance Manager', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0008-4000-8000-000000000008', 'ALV/2025/0008', '2025-08-03', '14:00', 'cybercrime', 'IT Act 66C', 'Aluva Industrial Area', 'OTP fraud targeting senior citizens. Rs 8 lakh siphoned from accounts.', 'Senior Citizen Group', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0009-4000-8000-000000000009', 'ALV/2025/0009', '2025-08-03', '18:30', 'domestic_violence', 'IPC 498A', 'Aluva West', 'Domestic violence and dowry demand. Wife hospitalized with injuries.', 'Victim Mother', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0010-4000-8000-000000000010', 'ALV/2025/0010', '2025-08-04', '07:30', 'theft', 'IPC 380', 'Aluva Railway Station', 'Pickpocketing gang operating at railway station. Wallet stolen.', 'Commuter', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0011-4000-8000-000000000011', 'ALV/2025/0011', '2025-08-04', '12:45', 'kidnapping', 'IPC 363', 'Aluva School Zone', 'Child abduction attempt near school. Suspect fled on seeing CCTV.', 'School Principal', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0012-4000-8000-000000000012', 'ALV/2025/0012', '2025-08-04', '17:15', 'fraud', 'IPC 468', 'Aluva Municipal Office', 'Fake birth certificate racket busted. 50+ forged certificates found.', 'Registrar Office', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0013-4000-8000-000000000013', 'ALV/2025/0013', '2025-08-05', '08:00', 'assault', 'IPC 323', 'Aluva Bus Stand', 'Attack on public servant during duty hours. Head injury reported.', 'Bus Conductor', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0014-4000-8000-000000000014', 'ALV/2025/0014', '2025-08-05', '13:15', 'murder', 'IPC 304', 'Aluva Paravur Road', 'Culpable homicide during property feud. Victim succumbed to injuries.', 'Neighbor Ahmad', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0015-4000-8000-000000000015', 'ALV/2025/0015', '2025-08-05', '19:00', 'other', 'IPC 504', 'Aluva Temple Road', 'Religious provocation and communal tension. Preventive arrests made.', 'Temple Committee', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0016-4000-8000-000000000016', 'ALV/2025/0016', '2025-08-06', '07:15', 'theft', 'IPC 379', 'Aluva Boat Jetty', 'Outboard motor stolen from fishing boat at jetty.', 'Fisherman Jose', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0017-4000-8000-000000000017', 'ALV/2025/0017', '2025-08-06', '12:00', 'cybercrime', 'IT Act 67', 'Aluva Cyber Cafe', 'Child pornography distribution through internet cafe computers.', 'Cyber Cell', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0018-4000-8000-000000000018', 'ALV/2025/0018', '2025-08-06', '17:45', 'burglary', 'IPC 454', 'Aluva Company Padi', 'Temple donation box break-in. Offerings and cash stolen.', 'Temple Priest', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0019-4000-8000-000000000019', 'ALV/2025/0019', '2025-08-07', '09:30', 'robbery', 'IPC 394', 'Aluva Petta', 'Daylight robbery at mobile phone shop. Stock worth Rs 6 lakhs taken.', 'Shop Owner Biju', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0020-4000-8000-000000000020', 'ALV/2025/0020', '2025-08-07', '14:30', 'fraud', 'IPC 406', 'Aluva Kadungalloor', 'Chit fund scam. Organizer absconded with Rs 20 lakh from members.', 'Chit Group Leader', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0021-4000-8000-000000000021', 'ALV/2025/0021', '2025-08-07', '20:00', 'assault', 'IPC 325', 'Aluva Palace Road', 'Road rage attack with iron rod. Victim suffered fractures.', 'Victim Suresh', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0022-4000-8000-000000000022', 'ALV/2025/0022', '2025-08-08', '08:30', 'drug_offense', 'NDPS Act 20', 'Aluva Perumbavoor Road', 'Cannabis cultivation busted in residential area. 100+ plants seized.', 'Excise Squad', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0023-4000-8000-000000000023', 'ALV/2025/0023', '2025-08-08', '13:00', 'traffic_violation', 'MV Act 185', 'Aluva Bypass Junction', 'Drunk driving on wrong side causing head-on collision. Critical injuries.', 'Accident Witness', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0024-4000-8000-000000000024', 'ALV/2025/0024', '2025-08-08', '18:00', 'domestic_violence', 'DV Act 12', 'Aluva East', 'Elderly mother evicted from house by son. Seeking shelter and protection.', 'NGO Worker', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0025-4000-8000-000000000025', 'ALV/2025/0025', '2025-08-09', '07:45', 'theft', 'IPC 379', 'Aluva Choondy', 'Motorcycle theft from apartment parking. CCTV footage available.', 'Bike Owner Ravi', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0026-4000-8000-000000000026', 'ALV/2025/0026', '2025-08-09', '12:30', 'fraud', 'IPC 420', 'Aluva Online Platform', 'Cryptocurrency scam. Fake exchange platform. Rs 40 lakh from 20 victims.', 'Cyber Crime Cell', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0027-4000-8000-000000000027', 'ALV/2025/0027', '2025-08-09', '18:00', 'assault', 'IPC 324', 'Aluva Market Junction', 'Knife attack during personal grudge. Suspect identified.', 'Eye Witness', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0028-4000-8000-000000000028', 'ALV/2025/0028', '2025-08-10', '09:00', 'kidnapping', 'IPC 365', 'Aluva Masjid Road', 'Missing person complaint. Young woman not seen since two days.', 'Father of Victim', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0029-4000-8000-000000000029', 'ALV/2025/0029', '2025-08-10', '14:00', 'cybercrime', 'IT Act 66D', 'Aluva Town', 'Deepfake video used for blackmail and extortion. Rs 3 lakh demanded.', 'Victim Anoop', 'a1b2c3d4-0003-4000-8000-000000000003'),
  ('c1000003-0030-4000-8000-000000000030', 'ALV/2025/0030', '2025-08-10', '19:30', 'other', 'IPC 506', 'Aluva Pipeline Road', 'Criminal intimidation through anonymous letters and phone calls.', 'Teacher Seema', 'a1b2c3d4-0003-4000-8000-000000000003');


-- ============================================
-- CASES (90 total — one per FIR)
-- ============================================

-- Kakkanad Cases
INSERT INTO cases (case_id, fir_id, officer_id, case_status, start_date) VALUES
  ('d1000001-0001-4000-8000-000000000001', 'c1000001-0001-4000-8000-000000000001', 'b1b2c3d4-0001-4000-8000-000000000001', 'case_closed', '2025-08-01'),
  ('d1000001-0002-4000-8000-000000000002', 'c1000001-0002-4000-8000-000000000002', 'b1b2c3d4-0002-4000-8000-000000000002', 'chargesheet_filed', '2025-08-01'),
  ('d1000001-0003-4000-8000-000000000003', 'c1000001-0003-4000-8000-000000000003', 'b1b2c3d4-0003-4000-8000-000000000003', 'arrest_made', '2025-08-01'),
  ('d1000001-0004-4000-8000-000000000004', 'c1000001-0004-4000-8000-000000000004', 'b1b2c3d4-0001-4000-8000-000000000001', 'evidence_collected', '2025-08-02'),
  ('d1000001-0005-4000-8000-000000000005', 'c1000001-0005-4000-8000-000000000005', 'b1b2c3d4-0002-4000-8000-000000000002', 'investigation_started', '2025-08-02'),
  ('d1000001-0006-4000-8000-000000000006', 'c1000001-0006-4000-8000-000000000006', 'b1b2c3d4-0003-4000-8000-000000000003', 'case_closed', '2025-08-02'),
  ('d1000001-0007-4000-8000-000000000007', 'c1000001-0007-4000-8000-000000000007', 'b1b2c3d4-0001-4000-8000-000000000001', 'arrest_made', '2025-08-03'),
  ('d1000001-0008-4000-8000-000000000008', 'c1000001-0008-4000-8000-000000000008', 'b1b2c3d4-0002-4000-8000-000000000002', 'chargesheet_filed', '2025-08-03'),
  ('d1000001-0009-4000-8000-000000000009', 'c1000001-0009-4000-8000-000000000009', 'b1b2c3d4-0003-4000-8000-000000000003', 'arrest_made', '2025-08-03'),
  ('d1000001-0010-4000-8000-000000000010', 'c1000001-0010-4000-8000-000000000010', 'b1b2c3d4-0001-4000-8000-000000000001', 'evidence_collected', '2025-08-04'),
  ('d1000001-0011-4000-8000-000000000011', 'c1000001-0011-4000-8000-000000000011', 'b1b2c3d4-0002-4000-8000-000000000002', 'investigation_started', '2025-08-04'),
  ('d1000001-0012-4000-8000-000000000012', 'c1000001-0012-4000-8000-000000000012', 'b1b2c3d4-0003-4000-8000-000000000003', 'case_closed', '2025-08-04'),
  ('d1000001-0013-4000-8000-000000000013', 'c1000001-0013-4000-8000-000000000013', 'b1b2c3d4-0001-4000-8000-000000000001', 'complaint_registered', '2025-08-05'),
  ('d1000001-0014-4000-8000-000000000014', 'c1000001-0014-4000-8000-000000000014', 'b1b2c3d4-0002-4000-8000-000000000002', 'evidence_collected', '2025-08-05'),
  ('d1000001-0015-4000-8000-000000000015', 'c1000001-0015-4000-8000-000000000015', 'b1b2c3d4-0003-4000-8000-000000000003', 'case_closed', '2025-08-05'),
  ('d1000001-0016-4000-8000-000000000016', 'c1000001-0016-4000-8000-000000000016', 'b1b2c3d4-0001-4000-8000-000000000001', 'arrest_made', '2025-08-06'),
  ('d1000001-0017-4000-8000-000000000017', 'c1000001-0017-4000-8000-000000000017', 'b1b2c3d4-0002-4000-8000-000000000002', 'chargesheet_filed', '2025-08-06'),
  ('d1000001-0018-4000-8000-000000000018', 'c1000001-0018-4000-8000-000000000018', 'b1b2c3d4-0003-4000-8000-000000000003', 'investigation_started', '2025-08-06'),
  ('d1000001-0019-4000-8000-000000000019', 'c1000001-0019-4000-8000-000000000019', 'b1b2c3d4-0001-4000-8000-000000000001', 'case_closed', '2025-08-07'),
  ('d1000001-0020-4000-8000-000000000020', 'c1000001-0020-4000-8000-000000000020', 'b1b2c3d4-0002-4000-8000-000000000002', 'evidence_collected', '2025-08-07'),
  ('d1000001-0021-4000-8000-000000000021', 'c1000001-0021-4000-8000-000000000021', 'b1b2c3d4-0003-4000-8000-000000000003', 'arrest_made', '2025-08-07'),
  ('d1000001-0022-4000-8000-000000000022', 'c1000001-0022-4000-8000-000000000022', 'b1b2c3d4-0001-4000-8000-000000000001', 'case_closed', '2025-08-08'),
  ('d1000001-0023-4000-8000-000000000023', 'c1000001-0023-4000-8000-000000000023', 'b1b2c3d4-0002-4000-8000-000000000002', 'arrest_made', '2025-08-08'),
  ('d1000001-0024-4000-8000-000000000024', 'c1000001-0024-4000-8000-000000000024', 'b1b2c3d4-0003-4000-8000-000000000003', 'investigation_started', '2025-08-08'),
  ('d1000001-0025-4000-8000-000000000025', 'c1000001-0025-4000-8000-000000000025', 'b1b2c3d4-0001-4000-8000-000000000001', 'complaint_registered', '2025-08-09'),
  ('d1000001-0026-4000-8000-000000000026', 'c1000001-0026-4000-8000-000000000026', 'b1b2c3d4-0002-4000-8000-000000000002', 'chargesheet_filed', '2025-08-09'),
  ('d1000001-0027-4000-8000-000000000027', 'c1000001-0027-4000-8000-000000000027', 'b1b2c3d4-0003-4000-8000-000000000003', 'evidence_collected', '2025-08-09'),
  ('d1000001-0028-4000-8000-000000000028', 'c1000001-0028-4000-8000-000000000028', 'b1b2c3d4-0001-4000-8000-000000000001', 'investigation_started', '2025-08-10'),
  ('d1000001-0029-4000-8000-000000000029', 'c1000001-0029-4000-8000-000000000029', 'b1b2c3d4-0002-4000-8000-000000000002', 'arrest_made', '2025-08-10'),
  ('d1000001-0030-4000-8000-000000000030', 'c1000001-0030-4000-8000-000000000030', 'b1b2c3d4-0003-4000-8000-000000000003', 'case_closed', '2025-08-10');

-- Kalamassery Cases
INSERT INTO cases (case_id, fir_id, officer_id, case_status, start_date) VALUES
  ('d1000002-0001-4000-8000-000000000001', 'c1000002-0001-4000-8000-000000000001', 'b1b2c3d4-0004-4000-8000-000000000004', 'case_closed', '2025-08-01'),
  ('d1000002-0002-4000-8000-000000000002', 'c1000002-0002-4000-8000-000000000002', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-01'),
  ('d1000002-0003-4000-8000-000000000003', 'c1000002-0003-4000-8000-000000000003', 'b1b2c3d4-0006-4000-8000-000000000006', 'chargesheet_filed', '2025-08-01'),
  ('d1000002-0004-4000-8000-000000000004', 'c1000002-0004-4000-8000-000000000004', 'b1b2c3d4-0004-4000-8000-000000000004', 'evidence_collected', '2025-08-02'),
  ('d1000002-0005-4000-8000-000000000005', 'c1000002-0005-4000-8000-000000000005', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-02'),
  ('d1000002-0006-4000-8000-000000000006', 'c1000002-0006-4000-8000-000000000006', 'b1b2c3d4-0006-4000-8000-000000000006', 'case_closed', '2025-08-02'),
  ('d1000002-0007-4000-8000-000000000007', 'c1000002-0007-4000-8000-000000000007', 'b1b2c3d4-0004-4000-8000-000000000004', 'investigation_started', '2025-08-03'),
  ('d1000002-0008-4000-8000-000000000008', 'c1000002-0008-4000-8000-000000000008', 'b1b2c3d4-0005-4000-8000-000000000005', 'evidence_collected', '2025-08-03'),
  ('d1000002-0009-4000-8000-000000000009', 'c1000002-0009-4000-8000-000000000009', 'b1b2c3d4-0006-4000-8000-000000000006', 'case_closed', '2025-08-03'),
  ('d1000002-0010-4000-8000-000000000010', 'c1000002-0010-4000-8000-000000000010', 'b1b2c3d4-0004-4000-8000-000000000004', 'chargesheet_filed', '2025-08-04'),
  ('d1000002-0011-4000-8000-000000000011', 'c1000002-0011-4000-8000-000000000011', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-04'),
  ('d1000002-0012-4000-8000-000000000012', 'c1000002-0012-4000-8000-000000000012', 'b1b2c3d4-0006-4000-8000-000000000006', 'investigation_started', '2025-08-04'),
  ('d1000002-0013-4000-8000-000000000013', 'c1000002-0013-4000-8000-000000000013', 'b1b2c3d4-0004-4000-8000-000000000004', 'complaint_registered', '2025-08-05'),
  ('d1000002-0014-4000-8000-000000000014', 'c1000002-0014-4000-8000-000000000014', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-05'),
  ('d1000002-0015-4000-8000-000000000015', 'c1000002-0015-4000-8000-000000000015', 'b1b2c3d4-0006-4000-8000-000000000006', 'case_closed', '2025-08-05'),
  ('d1000002-0016-4000-8000-000000000016', 'c1000002-0016-4000-8000-000000000016', 'b1b2c3d4-0004-4000-8000-000000000004', 'evidence_collected', '2025-08-06'),
  ('d1000002-0017-4000-8000-000000000017', 'c1000002-0017-4000-8000-000000000017', 'b1b2c3d4-0005-4000-8000-000000000005', 'case_closed', '2025-08-06'),
  ('d1000002-0018-4000-8000-000000000018', 'c1000002-0018-4000-8000-000000000018', 'b1b2c3d4-0006-4000-8000-000000000006', 'investigation_started', '2025-08-06'),
  ('d1000002-0019-4000-8000-000000000019', 'c1000002-0019-4000-8000-000000000019', 'b1b2c3d4-0004-4000-8000-000000000004', 'chargesheet_filed', '2025-08-07'),
  ('d1000002-0020-4000-8000-000000000020', 'c1000002-0020-4000-8000-000000000020', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-07'),
  ('d1000002-0021-4000-8000-000000000021', 'c1000002-0021-4000-8000-000000000021', 'b1b2c3d4-0006-4000-8000-000000000006', 'evidence_collected', '2025-08-07'),
  ('d1000002-0022-4000-8000-000000000022', 'c1000002-0022-4000-8000-000000000022', 'b1b2c3d4-0004-4000-8000-000000000004', 'complaint_registered', '2025-08-08'),
  ('d1000002-0023-4000-8000-000000000023', 'c1000002-0023-4000-8000-000000000023', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-08'),
  ('d1000002-0024-4000-8000-000000000024', 'c1000002-0024-4000-8000-000000000024', 'b1b2c3d4-0006-4000-8000-000000000006', 'investigation_started', '2025-08-08'),
  ('d1000002-0025-4000-8000-000000000025', 'c1000002-0025-4000-8000-000000000025', 'b1b2c3d4-0004-4000-8000-000000000004', 'case_closed', '2025-08-09'),
  ('d1000002-0026-4000-8000-000000000026', 'c1000002-0026-4000-8000-000000000026', 'b1b2c3d4-0005-4000-8000-000000000005', 'chargesheet_filed', '2025-08-09'),
  ('d1000002-0027-4000-8000-000000000027', 'c1000002-0027-4000-8000-000000000027', 'b1b2c3d4-0006-4000-8000-000000000006', 'evidence_collected', '2025-08-09'),
  ('d1000002-0028-4000-8000-000000000028', 'c1000002-0028-4000-8000-000000000028', 'b1b2c3d4-0004-4000-8000-000000000004', 'investigation_started', '2025-08-10'),
  ('d1000002-0029-4000-8000-000000000029', 'c1000002-0029-4000-8000-000000000029', 'b1b2c3d4-0005-4000-8000-000000000005', 'arrest_made', '2025-08-10'),
  ('d1000002-0030-4000-8000-000000000030', 'c1000002-0030-4000-8000-000000000030', 'b1b2c3d4-0006-4000-8000-000000000006', 'case_closed', '2025-08-10');

-- Aluva Cases
INSERT INTO cases (case_id, fir_id, officer_id, case_status, start_date) VALUES
  ('d1000003-0001-4000-8000-000000000001', 'c1000003-0001-4000-8000-000000000001', 'b1b2c3d4-0007-4000-8000-000000000007', 'case_closed', '2025-08-01'),
  ('d1000003-0002-4000-8000-000000000002', 'c1000003-0002-4000-8000-000000000002', 'b1b2c3d4-0008-4000-8000-000000000008', 'arrest_made', '2025-08-01'),
  ('d1000003-0003-4000-8000-000000000003', 'c1000003-0003-4000-8000-000000000003', 'b1b2c3d4-0009-4000-8000-000000000009', 'chargesheet_filed', '2025-08-01'),
  ('d1000003-0004-4000-8000-000000000004', 'c1000003-0004-4000-8000-000000000004', 'b1b2c3d4-0007-4000-8000-000000000007', 'arrest_made', '2025-08-02'),
  ('d1000003-0005-4000-8000-000000000005', 'c1000003-0005-4000-8000-000000000005', 'b1b2c3d4-0008-4000-8000-000000000008', 'case_closed', '2025-08-02'),
  ('d1000003-0006-4000-8000-000000000006', 'c1000003-0006-4000-8000-000000000006', 'b1b2c3d4-0009-4000-8000-000000000009', 'arrest_made', '2025-08-02'),
  ('d1000003-0007-4000-8000-000000000007', 'c1000003-0007-4000-8000-000000000007', 'b1b2c3d4-0007-4000-8000-000000000007', 'evidence_collected', '2025-08-03'),
  ('d1000003-0008-4000-8000-000000000008', 'c1000003-0008-4000-8000-000000000008', 'b1b2c3d4-0008-4000-8000-000000000008', 'chargesheet_filed', '2025-08-03'),
  ('d1000003-0009-4000-8000-000000000009', 'c1000003-0009-4000-8000-000000000009', 'b1b2c3d4-0009-4000-8000-000000000009', 'arrest_made', '2025-08-03'),
  ('d1000003-0010-4000-8000-000000000010', 'c1000003-0010-4000-8000-000000000010', 'b1b2c3d4-0007-4000-8000-000000000007', 'case_closed', '2025-08-04'),
  ('d1000003-0011-4000-8000-000000000011', 'c1000003-0011-4000-8000-000000000011', 'b1b2c3d4-0008-4000-8000-000000000008', 'investigation_started', '2025-08-04'),
  ('d1000003-0012-4000-8000-000000000012', 'c1000003-0012-4000-8000-000000000012', 'b1b2c3d4-0009-4000-8000-000000000009', 'arrest_made', '2025-08-04'),
  ('d1000003-0013-4000-8000-000000000013', 'c1000003-0013-4000-8000-000000000013', 'b1b2c3d4-0007-4000-8000-000000000007', 'evidence_collected', '2025-08-05'),
  ('d1000003-0014-4000-8000-000000000014', 'c1000003-0014-4000-8000-000000000014', 'b1b2c3d4-0008-4000-8000-000000000008', 'investigation_started', '2025-08-05'),
  ('d1000003-0015-4000-8000-000000000015', 'c1000003-0015-4000-8000-000000000015', 'b1b2c3d4-0009-4000-8000-000000000009', 'case_closed', '2025-08-05'),
  ('d1000003-0016-4000-8000-000000000016', 'c1000003-0016-4000-8000-000000000016', 'b1b2c3d4-0007-4000-8000-000000000007', 'complaint_registered', '2025-08-06'),
  ('d1000003-0017-4000-8000-000000000017', 'c1000003-0017-4000-8000-000000000017', 'b1b2c3d4-0008-4000-8000-000000000008', 'arrest_made', '2025-08-06'),
  ('d1000003-0018-4000-8000-000000000018', 'c1000003-0018-4000-8000-000000000018', 'b1b2c3d4-0009-4000-8000-000000000009', 'evidence_collected', '2025-08-06'),
  ('d1000003-0019-4000-8000-000000000019', 'c1000003-0019-4000-8000-000000000019', 'b1b2c3d4-0007-4000-8000-000000000007', 'chargesheet_filed', '2025-08-07'),
  ('d1000003-0020-4000-8000-000000000020', 'c1000003-0020-4000-8000-000000000020', 'b1b2c3d4-0008-4000-8000-000000000008', 'investigation_started', '2025-08-07'),
  ('d1000003-0021-4000-8000-000000000021', 'c1000003-0021-4000-8000-000000000021', 'b1b2c3d4-0009-4000-8000-000000000009', 'arrest_made', '2025-08-07'),
  ('d1000003-0022-4000-8000-000000000022', 'c1000003-0022-4000-8000-000000000022', 'b1b2c3d4-0007-4000-8000-000000000007', 'case_closed', '2025-08-08'),
  ('d1000003-0023-4000-8000-000000000023', 'c1000003-0023-4000-8000-000000000023', 'b1b2c3d4-0008-4000-8000-000000000008', 'chargesheet_filed', '2025-08-08'),
  ('d1000003-0024-4000-8000-000000000024', 'c1000003-0024-4000-8000-000000000024', 'b1b2c3d4-0009-4000-8000-000000000009', 'evidence_collected', '2025-08-08'),
  ('d1000003-0025-4000-8000-000000000025', 'c1000003-0025-4000-8000-000000000025', 'b1b2c3d4-0007-4000-8000-000000000007', 'investigation_started', '2025-08-09'),
  ('d1000003-0026-4000-8000-000000000026', 'c1000003-0026-4000-8000-000000000026', 'b1b2c3d4-0008-4000-8000-000000000008', 'arrest_made', '2025-08-09'),
  ('d1000003-0027-4000-8000-000000000027', 'c1000003-0027-4000-8000-000000000027', 'b1b2c3d4-0009-4000-8000-000000000009', 'case_closed', '2025-08-09'),
  ('d1000003-0028-4000-8000-000000000028', 'c1000003-0028-4000-8000-000000000028', 'b1b2c3d4-0007-4000-8000-000000000007', 'complaint_registered', '2025-08-10'),
  ('d1000003-0029-4000-8000-000000000029', 'c1000003-0029-4000-8000-000000000029', 'b1b2c3d4-0008-4000-8000-000000000008', 'investigation_started', '2025-08-10'),
  ('d1000003-0030-4000-8000-000000000030', 'c1000003-0030-4000-8000-000000000030', 'b1b2c3d4-0009-4000-8000-000000000009', 'evidence_collected', '2025-08-10');


-- ============================================
-- CASE FOLLOWUPS (varied per case)
-- ============================================

-- Kakkanad case followups (selected cases with multiple followups)
INSERT INTO case_followups (case_id, followup_date, status, remarks) VALUES
  -- Case 1 (closed) - full timeline
  ('d1000001-0001-4000-8000-000000000001', '2025-08-01', 'complaint_registered', 'FIR registered. Complainant statement recorded.'),
  ('d1000001-0001-4000-8000-000000000001', '2025-08-03', 'investigation_started', 'CCTV footage from Infopark parking collected. Suspects identified.'),
  ('d1000001-0001-4000-8000-000000000001', '2025-08-06', 'evidence_collected', 'Laptop recovered from pawn shop. Digital evidence secured.'),
  ('d1000001-0001-4000-8000-000000000001', '2025-08-08', 'arrest_made', 'Suspect apprehended from Thrissur. Confessed to crime.'),
  ('d1000001-0001-4000-8000-000000000001', '2025-08-12', 'chargesheet_filed', 'Chargesheet filed before Kakkanad Court.'),
  ('d1000001-0001-4000-8000-000000000001', '2025-08-20', 'case_closed', 'Case closed. Accused convicted and sentenced.'),
  -- Case 2
  ('d1000001-0002-4000-8000-000000000002', '2025-08-01', 'complaint_registered', 'Complaint received. Bank statements collected.'),
  ('d1000001-0002-4000-8000-000000000002', '2025-08-04', 'investigation_started', 'Cyber cell investigation initiated. Website traced.'),
  ('d1000001-0002-4000-8000-000000000002', '2025-08-10', 'evidence_collected', 'Server logs obtained. Transaction trail established.'),
  ('d1000001-0002-4000-8000-000000000002', '2025-08-15', 'arrest_made', 'Two suspects arrested from Bengaluru.'),
  ('d1000001-0002-4000-8000-000000000002', '2025-08-22', 'chargesheet_filed', 'Chargesheet submitted with digital evidence.'),
  -- Case 3
  ('d1000001-0003-4000-8000-000000000003', '2025-08-01', 'complaint_registered', 'Multiple complaints filed. Video evidence received.'),
  ('d1000001-0003-4000-8000-000000000003', '2025-08-03', 'investigation_started', 'Witness statements recorded. Medical reports collected.'),
  ('d1000001-0003-4000-8000-000000000003', '2025-08-07', 'evidence_collected', 'CCTV footage analyzed. Four suspects identified.'),
  ('d1000001-0003-4000-8000-000000000003', '2025-08-10', 'arrest_made', 'All four suspects arrested. Weapons recovered.'),
  -- Case 10 (robbery)
  ('d1000001-0010-4000-8000-000000000010', '2025-08-04', 'complaint_registered', 'Armed robbery reported. Shop sealed for evidence.'),
  ('d1000001-0010-4000-8000-000000000010', '2025-08-06', 'investigation_started', 'CCTV evidence collected from neighboring shops.'),
  ('d1000001-0010-4000-8000-000000000010', '2025-08-12', 'evidence_collected', 'Getaway vehicle identified. Weapons found discarded.'),
  -- Case 24 (murder)
  ('d1000001-0024-4000-8000-000000000024', '2025-08-08', 'complaint_registered', 'Homicide registered. Crime scene secured and documented.'),
  ('d1000001-0024-4000-8000-000000000024', '2025-08-09', 'investigation_started', 'Post-mortem conducted. Forensic samples sent.'),
  -- Case 19 (kidnapping - closed/found)
  ('d1000001-0019-4000-8000-000000000019', '2025-08-07', 'complaint_registered', 'Missing child complaint registered. Search operation launched.'),
  ('d1000001-0019-4000-8000-000000000019', '2025-08-07', 'investigation_started', 'CCTV from school and nearby areas being reviewed.'),
  ('d1000001-0019-4000-8000-000000000019', '2025-08-08', 'evidence_collected', 'Child found safe at relative house. Was a custody dispute.'),
  ('d1000001-0019-4000-8000-000000000019', '2025-08-09', 'case_closed', 'Case resolved. Child reunited with custodial parent.');

-- Kalamassery case followups
INSERT INTO case_followups (case_id, followup_date, status, remarks) VALUES
  -- Case 1 (closed)
  ('d1000002-0001-4000-8000-000000000001', '2025-08-01', 'complaint_registered', 'Bicycle theft reported by student union.'),
  ('d1000002-0001-4000-8000-000000000001', '2025-08-02', 'investigation_started', 'Hostel CCTV reviewed. Suspect seen at 2 AM.'),
  ('d1000002-0001-4000-8000-000000000001', '2025-08-04', 'evidence_collected', 'Bicycle found in nearby pawn shop with serial number match.'),
  ('d1000002-0001-4000-8000-000000000001', '2025-08-06', 'arrest_made', 'Suspect identified as non-student. Arrested.'),
  ('d1000002-0001-4000-8000-000000000001', '2025-08-10', 'case_closed', 'Bicycle returned. Case settled.'),
  -- Case 14 (kidnapping)
  ('d1000002-0014-4000-8000-000000000014', '2025-08-05', 'complaint_registered', 'Abduction reported. Last seen near factory area.'),
  ('d1000002-0014-4000-8000-000000000014', '2025-08-05', 'investigation_started', 'Mobile phone tracking initiated. Ransom call recorded.'),
  ('d1000002-0014-4000-8000-000000000014', '2025-08-06', 'evidence_collected', 'Kidnappers location traced. Rescue operation planned.'),
  ('d1000002-0014-4000-8000-000000000014', '2025-08-07', 'arrest_made', 'Three kidnappers arrested. Victim rescued safely.'),
  -- Case 21 (murder)
  ('d1000002-0021-4000-8000-000000000021', '2025-08-07', 'complaint_registered', 'Body discovered. Crime scene cordoned off.'),
  ('d1000002-0021-4000-8000-000000000021', '2025-08-08', 'investigation_started', 'Autopsy report received. Stab wounds confirmed.'),
  ('d1000002-0021-4000-8000-000000000021', '2025-08-10', 'evidence_collected', 'Murder weapon recovered. DNA evidence sent to FSL.'),
  -- Case 24 (armed robbery)
  ('d1000002-0024-4000-8000-000000000024', '2025-08-08', 'complaint_registered', 'Armed robbery at jewelry showroom reported.'),
  ('d1000002-0024-4000-8000-000000000024', '2025-08-09', 'investigation_started', 'CCTV from multiple angles analyzed. Vehicle number noted.');

-- Aluva case followups
INSERT INTO case_followups (case_id, followup_date, status, remarks) VALUES
  -- Case 1 (closed)
  ('d1000003-0001-4000-8000-000000000001', '2025-08-01', 'complaint_registered', 'Chain snatching complaint registered at station.'),
  ('d1000003-0001-4000-8000-000000000001', '2025-08-02', 'investigation_started', 'CCTV from temple area reviewed.'),
  ('d1000003-0001-4000-8000-000000000001', '2025-08-05', 'evidence_collected', 'Suspect seen selling gold at pawn shop.'),
  ('d1000003-0001-4000-8000-000000000001', '2025-08-07', 'arrest_made', 'Habitual offender apprehended.'),
  ('d1000003-0001-4000-8000-000000000001', '2025-08-12', 'case_closed', 'Gold recovered and returned to complainant.'),
  -- Case 4 (ATM burglary)
  ('d1000003-0004-4000-8000-000000000004', '2025-08-02', 'complaint_registered', 'ATM break-in reported by bank security.'),
  ('d1000003-0004-4000-8000-000000000004', '2025-08-03', 'investigation_started', 'Forensic team dispatched. Fingerprints found on gas cutter.'),
  ('d1000003-0004-4000-8000-000000000004', '2025-08-05', 'evidence_collected', 'Fingerprints matched with known offender from Thrissur.'),
  ('d1000003-0004-4000-8000-000000000004', '2025-08-08', 'arrest_made', 'Three-member gang arrested. Rs 9 lakhs recovered.'),
  -- Case 6 (drug bust)
  ('d1000003-0006-4000-8000-000000000006', '2025-08-02', 'complaint_registered', 'Drug seizure recorded. Suspects detained.'),
  ('d1000003-0006-4000-8000-000000000006', '2025-08-03', 'investigation_started', 'Supply chain investigation started. Phone records analyzed.'),
  ('d1000003-0006-4000-8000-000000000006', '2025-08-06', 'evidence_collected', 'Interstate drug network identified. Three more suspects tracked.'),
  ('d1000003-0006-4000-8000-000000000006', '2025-08-09', 'arrest_made', 'Drug supply network busted. Five arrests in total.'),
  -- Case 14 (murder)
  ('d1000003-0014-4000-8000-000000000014', '2025-08-05', 'complaint_registered', 'Culpable homicide FIR registered. Scene documented.'),
  ('d1000003-0014-4000-8000-000000000014', '2025-08-06', 'investigation_started', 'Property dispute history investigated. Witnesses interviewed.');


-- ============================================
-- NEWS ARTICLES (25+ articles)
-- ============================================

INSERT INTO news_articles (case_id, title, source, publication_date, article_url, verified) VALUES
  -- Kakkanad news
  ('d1000001-0010-4000-8000-000000000010', 'Armed Robbery at Kakkanad Jewelry Shop - Two Masked Men Escape with Gold Worth Rs 15 Lakhs', 'Manorama Online', '2025-08-04', 'https://www.manoramaonline.com/news/kakkanad-robbery-aug-2025', true),
  ('d1000001-0010-4000-8000-000000000010', 'Police Launch Massive Hunt for Kakkanad Jewelry Robbers', 'Mathrubhumi', '2025-08-05', 'https://www.mathrubhumi.com/news/kakkanad-robbery-suspects', true),
  ('d1000001-0024-4000-8000-000000000024', 'Man Found Dead in Changampuzha Nagar Apartment - Murder Suspected', 'The Hindu', '2025-08-09', 'https://www.thehindu.com/news/changampuzha-nagar-murder', true),
  ('d1000001-0024-4000-8000-000000000024', 'Changampuzha Nagar Murder: Personal Enmity Suspected, Investigation Continues', 'Times of India', '2025-08-10', 'https://timesofindia.com/kochi/changampuzha-murder-update', true),
  ('d1000001-0009-4000-8000-000000000009', 'Cannabis Seizure in Thrikkakara: 2kg Ganja Recovered During Vehicle Check', 'Asianet News', '2025-08-04', 'https://www.asianetnews.com/thrikkakara-drug-bust', true),
  ('d1000001-0021-4000-8000-000000000021', 'Synthetic Drug Ring Busted in Kakkanad Padamugal - Three Arrested', 'India Today', '2025-08-08', 'https://www.indiatoday.in/kakkanad-drug-ring-bust', true),
  ('d1000001-0023-4000-8000-000000000023', 'Dacoity at Kakkanad ATM Kiosk: Guard Assaulted, Rs 8 Lakhs Looted', 'Deccan Chronicle', '2025-08-09', 'https://www.deccanchronicle.com/kakkanad-atm-dacoity', true),
  ('d1000001-0014-4000-8000-000000000014', 'Ransomware Attack Hits Infopark Company - Rs 5 Lakh Ransom Demanded', 'Economic Times', '2025-08-06', 'https://economictimes.com/kochi-ransomware-attack', true),
  ('d1000001-0019-4000-8000-000000000019', 'Missing Child Found Safe: Was Custody Dispute Says Kakkanad Police', 'News18', '2025-08-09', 'https://www.news18.com/kakkanad-missing-child-found', true),
  -- Kalamassery news
  ('d1000002-0014-4000-8000-000000000014', 'Businessman Kidnapped in Kalamassery - Rs 50 Lakh Ransom Demanded', 'NDTV', '2025-08-06', 'https://www.ndtv.com/kalamassery-kidnapping-case', true),
  ('d1000002-0014-4000-8000-000000000014', 'Kalamassery Kidnapping: Three Arrested, Businessman Rescued Safely', 'Manorama Online', '2025-08-08', 'https://www.manoramaonline.com/kalamassery-kidnap-rescue', true),
  ('d1000002-0021-4000-8000-000000000021', 'Factory Worker Murdered in Kalamassery Industrial Estate', 'The Hindu', '2025-08-08', 'https://www.thehindu.com/kalamassery-murder-industrial-estate', true),
  ('d1000002-0024-4000-8000-000000000024', 'Armed Robbery at Kalamassery Gold Souk - Rs 25 Lakhs Worth Stolen', 'India Today', '2025-08-09', 'https://www.indiatoday.in/kalamassery-gold-souk-robbery', true),
  ('d1000002-0004-4000-8000-000000000004', 'Ponzi Scheme Targeting Retired Employees Busted in Kalamassery', 'Mathrubhumi', '2025-08-03', 'https://www.mathrubhumi.com/kalamassery-ponzi-scheme', true),
  ('d1000002-0020-4000-8000-000000000020', 'MDMA Tablets Seized Near Cochin University Campus', 'Asianet News', '2025-08-08', 'https://www.asianetnews.com/cusat-drug-seizure', true),
  ('d1000002-0018-4000-8000-000000000018', 'Acid Attack Attempt in Kalamassery Town - Suspect at Large', 'News18', '2025-08-07', 'https://www.news18.com/kalamassery-acid-attack', true),
  ('d1000002-0011-4000-8000-000000000011', 'Student Gang Fight Near CUSAT: Three Seriously Injured', 'Times of India', '2025-08-05', 'https://timesofindia.com/kochi/cusat-student-fight', true),
  -- Aluva news
  ('d1000003-0004-4000-8000-000000000004', 'ATM Heist in Aluva: Gas Cutter Used to Break Machine, Rs 12 Lakhs Stolen', 'Manorama Online', '2025-08-03', 'https://www.manoramaonline.com/aluva-atm-heist', true),
  ('d1000003-0004-4000-8000-000000000004', 'Aluva ATM Robbery Gang Arrested: Rs 9 Lakhs Recovered', 'Mathrubhumi', '2025-08-09', 'https://www.mathrubhumi.com/aluva-atm-gang-arrested', true),
  ('d1000003-0006-4000-8000-000000000006', 'Major Drug Bust Along Periyar River Bank - 5kg Hashish Seized', 'The Hindu', '2025-08-03', 'https://www.thehindu.com/aluva-periyar-drug-bust', true),
  ('d1000003-0006-4000-8000-000000000006', 'Interstate Drug Network Busted by Aluva Police - Five Arrested', 'NDTV', '2025-08-10', 'https://www.ndtv.com/aluva-drug-network-busted', true),
  ('d1000003-0014-4000-8000-000000000014', 'Man Killed in Property Dispute on Aluva Paravur Road', 'Deccan Chronicle', '2025-08-06', 'https://www.deccanchronicle.com/aluva-property-murder', true),
  ('d1000003-0005-4000-8000-000000000005', 'Tourist Bus Overturns on Aluva-Munnar Road Due to Speeding', 'India Today', '2025-08-03', 'https://www.indiatoday.in/aluva-munnar-bus-accident', true),
  ('d1000003-0019-4000-8000-000000000019', 'Daylight Robbery at Aluva Mobile Shop - Stock Worth Rs 6 Lakhs Stolen', 'Times of India', '2025-08-08', 'https://timesofindia.com/kochi/aluva-mobile-shop-robbery', true),
  ('d1000003-0026-4000-8000-000000000026', 'Cryptocurrency Scam in Aluva: 20 Victims Lose Rs 40 Lakh on Fake Platform', 'Economic Times', '2025-08-10', 'https://economictimes.com/aluva-crypto-scam', true),
  ('d1000003-0011-4000-8000-000000000011', 'CCTV Footage Helps Prevent Child Abduction Near Aluva School', 'News18', '2025-08-05', 'https://www.news18.com/aluva-child-abduction-prevented', true);
