export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  composition: string;
  uses: string;
  dosage: string;
  description: string;
  keywords?: string; // SEO keywords for the product
}

export const products: Product[] = [
  {
    id: "caltrizin-m",
    name: "Caltrizin-M Tablets",
    image: "/Caltrizin-M Tablets.png",
    category: "Calcium Supplement",
    composition: "Calcium Citrate Malate + Vitamin D3 + Magnesium + Zinc",
    uses: "Treatment of calcium deficiency, osteoporosis prevention, bone health support",
    dosage: "One tablet daily or as directed by physician",
    description: "Caltrizin-M is a comprehensive bone health supplement combining calcium citrate malate with essential vitamins and minerals for optimal absorption and bone strength.",
    keywords: "calcium supplement, bone health, osteoporosis prevention, vitamin D3, magnesium, zinc"
  },
  {
    id: "egapride-m1",
    name: "Egapride-M1",
    image: "/Egapride-M1.png",
    category: "Antidiabetic",
    composition: "Glimepiride + Metformin",
    uses: "Type 2 diabetes mellitus management",
    dosage: "As prescribed by physician, usually once or twice daily with meals",
    description: "Egapride-M1 combines two effective antidiabetic agents to help control blood sugar levels in patients with type 2 diabetes.",
    keywords: "diabetes medication, type 2 diabetes, glimepiride, metformin, blood sugar control, antidiabetic"
  },
  {
    id: "egapride-m2",
    name: "Egapride-M2",
    image: "/Egapride-M2.png",
    category: "Antidiabetic",
    composition: "Glimepiride + Metformin (Higher strength)",
    uses: "Type 2 diabetes mellitus management for better glycemic control",
    dosage: "As prescribed by physician with meals",
    description: "Egapride-M2 offers enhanced strength for patients requiring stronger glycemic control in type 2 diabetes management.",
    keywords: "diabetes medication, type 2 diabetes, glimepiride metformin, glycemic control, antidiabetic drug"
  },
  {
    id: "liacort-6",
    name: "Liacort-6",
    image: "/Liacort-6.png",
    category: "Corticosteroid",
    composition: "Deflazacort 6mg",
    uses: "Anti-inflammatory, immunosuppressant for various inflammatory conditions",
    dosage: "As directed by physician",
    description: "Liacort-6 is a corticosteroid used to reduce inflammation and suppress immune system activity in various medical conditions.",
    keywords: "corticosteroid, deflazacort, anti-inflammatory, immunosuppressant, inflammation treatment"
  },
  {
    id: "liazin-500",
    name: "Liazin-500",
    image: "/Liazin-500.png",
    category: "Antibiotic",
    composition: "Azithromycin 500mg",
    uses: "Bacterial infections including respiratory tract, skin, and soft tissue infections",
    dosage: "Usually once daily for 3-5 days as prescribed",
    description: "Liazin-500 is a broad-spectrum macrolide antibiotic effective against various bacterial infections.",
    keywords: "azithromycin, antibiotic, bacterial infection, respiratory infection, macrolide antibiotic"
  },
  {
    id: "lifestat",
    name: "Lifestat",
    image: "/Lifestat.png",
    category: "Lipid Lowering Agent",
    composition: "Atorvastatin",
    uses: "High cholesterol, cardiovascular disease prevention",
    dosage: "Once daily, preferably in the evening",
    description: "Lifestat helps lower cholesterol levels and reduces the risk of heart disease and stroke.",
    keywords: "atorvastatin, cholesterol medication, statin, cardiovascular health, lipid lowering"
  },
  {
    id: "moxdone-cv",
    name: "Moxdone-CV",
    image: "/Moxdone-CV.png",
    category: "Antibiotic Combination",
    composition: "Amoxicillin + Clavulanic Acid",
    uses: "Bacterial infections resistant to amoxicillin alone",
    dosage: "As prescribed, typically twice or thrice daily",
    description: "Moxdone-CV is a potent antibiotic combination effective against beta-lactamase producing bacteria.",
    keywords: "amoxicillin clavulanic acid, antibiotic combination, bacterial infection, augmentin alternative"
  },
  {
    id: "nacrid-gel",
    name: "Nacrid Gel",
    image: "/Nacrid Gel.png",
    category: "Topical Analgesic",
    composition: "Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol",
    uses: "Muscle pain, joint pain, sprains, strains, sports injuries, back pain",
    dosage: "Apply gently on affected area 3-4 times daily or as directed by physician",
    description: "Nacrid Gel is a topical analgesic formulation that provides fast relief from muscle and joint pain through its unique combination of anti-inflammatory and cooling agents.",
    keywords: "pain relief gel, diclofenac gel, muscle pain relief, joint pain, topical analgesic, sports injury gel, back pain relief"
  },
  {
    id: "nervace-g",
    name: "Nervace-G",
    image: "/Nervace-G.png",
    category: "Neuropathic Pain Relief",
    composition: "Gabapentin + Methylcobalamin",
    uses: "Neuropathic pain, diabetic neuropathy, nerve damage",
    dosage: "As directed by physician",
    description: "Nervace-G combines gabapentin with vitamin B12 for comprehensive neuropathic pain management.",
    keywords: "gabapentin, neuropathic pain, nerve pain, diabetic neuropathy, methylcobalamin, vitamin B12"
  },
  {
    id: "nervace-g-100",
    name: "Nervace-G 100",
    image: "/Nervace-G 100.png",
    category: "Neuropathic Pain Relief",
    composition: "Gabapentin 100mg + Methylcobalamin",
    uses: "Mild to moderate neuropathic pain",
    dosage: "As prescribed by physician",
    description: "Nervace-G 100 offers lower strength for patients requiring gradual dose titration in neuropathic pain management.",
    keywords: "gabapentin 100mg, neuropathic pain relief, nerve pain medication, low dose gabapentin"
  },
  {
    id: "osteroid-gm",
    name: "Osteroid-GM",
    image: "/Osteroid-GM.png",
    category: "Joint Health Supplement",
    composition: "Diacerein, Glucosamine Sulphate Potassium Chloride & Methyl Sulfonyl Methane",
    uses: "Joint health and mobility support, osteoarthritis management, cartilage protection and repair",
    dosage: "As prescribed by physician, usually one tablet twice daily with meals",
    description: "Osteroid-GM is a comprehensive joint health supplement that combines Diacerein, Glucosamine Sulphate, and MSM to support joint health and mobility, helping maintain healthy cartilage and reduce joint discomfort.",
    keywords: "joint health, osteoarthritis, glucosamine, diacerein, MSM, cartilage support, joint mobility, bone health supplement"
  },
  {
    id: "poll-40",
    name: "Poll-40",
    image: "/Poll-40.png",
    category: "Proton Pump Inhibitor",
    composition: "Pantoprazole 40mg",
    uses: "Acid reflux, GERD, peptic ulcers, gastritis",
    dosage: "Once daily before breakfast",
    description: "Poll-40 reduces stomach acid production, providing relief from acid-related disorders.",
    keywords: "pantoprazole, acid reflux, GERD, proton pump inhibitor, gastritis, peptic ulcer"
  },
  {
    id: "relol-20",
    name: "Relol-20",
    image: "/Relol-20.png",
    category: "Proton Pump Inhibitor",
    composition: "Rabeprazole 20mg",
    uses: "GERD, peptic ulcers, acid reflux",
    dosage: "Once daily before meals",
    description: "Relol-20 effectively controls gastric acid secretion for various acid-related conditions.",
    keywords: "rabeprazole, acid reflux medication, GERD treatment, proton pump inhibitor, peptic ulcer"
  },
  {
    id: "relol-dsr",
    name: "Relol-DSR",
    image: "/Relol-DSR.png",
    category: "Prokinetic + PPI",
    composition: "Rabeprazole + Domperidone (Sustained Release)",
    uses: "GERD with motility disorders, bloating, nausea",
    dosage: "Once daily before meals",
    description: "Relol-DSR combines acid suppression with prokinetic action for comprehensive GERD management.",
    keywords: "rabeprazole domperidone, GERD medication, acid reflux, prokinetic, bloating relief"
  },
  {
    id: "relol-ls",
    name: "Relol-LS",
    image: "/Relol-LS.png",
    category: "PPI + Prokinetic",
    composition: "Rabeprazole + Levosulpiride",
    uses: "GERD, functional dyspepsia, IBS",
    dosage: "As prescribed by physician",
    description: "Relol-LS offers dual action for acid control and improved gastric motility.",
    keywords: "rabeprazole levosulpiride, GERD treatment, functional dyspepsia, IBS medication"
  },
  {
    id: "t-bine-xt",
    name: "T-Bine XT",
    image: "/T-Bine XT.jpeg",
    category: "Hematinic",
    composition: "Iron + Folic Acid + Vitamin B12 + Zinc",
    uses: "Iron deficiency anemia, pregnancy, nutritional supplementation",
    dosage: "Once daily or as directed",
    description: "T-Bine XT is a comprehensive hematinic formula for treating and preventing anemia.",
    keywords: "iron supplement, anemia treatment, folic acid, vitamin B12, pregnancy supplement, hematinic"
  },
  {
    id: "tionac-mr",
    name: "Tionac-MR",
    image: "/Tionac-MR.png",
    category: "Muscle Relaxant + Analgesic",
    composition: "Thiocolchicoside + Aceclofenac (Modified Release)",
    uses: "Muscle spasms, back pain, musculoskeletal disorders",
    dosage: "As prescribed, typically twice daily",
    description: "Tionac-MR provides sustained relief from muscle spasms and associated pain.",
    keywords: "muscle relaxant, back pain relief, thiocolchicoside, aceclofenac, muscle spasm treatment"
  },
  {
    id: "tionac-p",
    name: "Tionac-P",
    image: "/Tionac-P.png",
    category: "Analgesic + Antipyretic",
    composition: "Aceclofenac + Paracetamol",
    uses: "Pain relief, fever, inflammation",
    dosage: "As directed by physician",
    description: "Tionac-P combines two effective pain relievers for comprehensive pain and fever management.",
    keywords: "pain relief, fever medication, aceclofenac paracetamol, analgesic, anti-inflammatory"
  },
  {
    id: "tionac-sp",
    name: "Tionac-SP",
    image: "/Tionac-SP.png",
    category: "Analgesic Combination",
    composition: "Aceclofenac + Paracetamol + Serratiopeptidase",
    uses: "Pain, inflammation, swelling, post-surgical recovery",
    dosage: "As prescribed by physician",
    description: "Tionac-SP offers triple action for pain relief, inflammation reduction, and faster healing.",
    keywords: "pain relief, anti-inflammatory, serratiopeptidase, post-surgical recovery, swelling reduction"
  },
  {
    id: "ukast-l-kid-syrup",
    name: "Ukast-L Kid Syrup",
    image: "/Ukast-L Kid Syrup.png",
    category: "Anti-allergic (Pediatric)",
    composition: "Montelukast + Levocetirizine (Syrup)",
    uses: "Allergic rhinitis, asthma, allergies in children",
    dosage: "As per age and weight, prescribed by pediatrician",
    description: "Ukast-L Kid Syrup provides effective allergy relief in a child-friendly formulation.",
    keywords: "pediatric allergy medication, montelukast levocetirizine, children allergy syrup, asthma medication kids"
  },
  {
    id: "ukast-l-kid",
    name: "Ukast-L Kid",
    image: "/Ukast-L Kid.png",
    category: "Anti-allergic (Pediatric)",
    composition: "Montelukast + Levocetirizine (Tablet)",
    uses: "Allergic rhinitis, asthma in children",
    dosage: "Once daily or as prescribed",
    description: "Ukast-L Kid tablets offer convenient allergy management for children.",
    keywords: "pediatric allergy tablet, montelukast levocetirizine, children allergy medication, asthma treatment"
  },
  {
    id: "ukast-l",
    name: "Ukast-L",
    image: "/Ukast-L.jpeg",
    category: "Anti-allergic",
    composition: "Montelukast + Levocetirizine",
    uses: "Allergic rhinitis, asthma, seasonal allergies",
    dosage: "Once daily, preferably in the evening",
    description: "Ukast-L provides comprehensive allergy relief by combining leukotriene receptor antagonist with antihistamine.",
    keywords: "allergy medication, montelukast levocetirizine, allergic rhinitis, asthma treatment, antihistamine"
  }
];
