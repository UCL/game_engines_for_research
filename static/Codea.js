const papers = { 
 "data": [
  {
    "DOI":"10.3390\/toxics14020124",
    "Title":"From Farm to Retail: Decoding the Elemental Landscape of Milk and Dairy Products Across Organic and Conventional Production Systems Using ICP-MS.",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.aap.2026.108451",
    "Title":"CoDEA: A framework for extraction and augmentation of cooperative lane-changing scenarios from naturalistic driving data.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1155\/vmi\/6645642",
    "Title":"Anesthetic Protocols for Enhancing Physiological Stability in Rabbits During Hemorrhagic Shock.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1121\/10.0038944",
    "Title":"Identifying sentinel indicators of acoustic propagation conditions using the soundscape codea).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.drugalcdep.2025.112781",
    "Title":"Assessing an ICD-10 code approach for estimating xylazine-involved overdose deaths in the United States.",
    "Citations":16,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/vetsci12050485",
    "Title":"Veterinary Perspectives on Hemoglobin-Based Oxygen Carriers in Experimental Hemorrhagic Shock: Insights from Rabbit Models.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/toxics12100752",
    "Title":"Spatial and Bioaccumulation of Heavy Metals in a Sheep-Based Food System: Implications for Human Health.",
    "Citations":70,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/life14070867",
    "Title":"Effect of Ultrasound-Guided Renal Biopsies on Urinary N-Acetyl-Beta-D-Glucosaminidase Index Activity in Dogs with Diffuse Parenchymal Nephropathies.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1121\/10.0022514",
    "Title":"Multidimensional comparison of underwater soundscapes using the soundscape codea).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/nu15204392",
    "Title":"The Nephroprotective Effect of Cornelian Cherry (Cornus mas L.) and Rowanberry (Sorbus aucuparia L.) in Gentamicin-Induced Nephrotoxicity on Wistar Rats with Emphasis on the Evaluation of Novel Renal Biomarkers and the Antioxidant Capacity in Correlation with Nitro-Oxidative Stress.",
    "Citations":67,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1103\/PhysRevE.108.035003",
    "Title":"Correlations in randomly stacked solids.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/reports6040044",
    "Title":"Rare Onset of Tubercular Peritonitis Amidst Chronic Renal Dysfunction.",
    "Citations":32,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.12865\/CHSJ.48.01.10",
    "Title":"Combination of Pentoxifylline and Ginko Biloba Nephroprotective Effect in Animal Models with Vancomycin-Induced Nephrotoxicity.",
    "Citations":18,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma15030772",
    "Title":"A Flavonoid-Rich Extract of Sambucus nigra L. Reduced Lipid Peroxidation in a Rat Experimental Model of Gentamicin Nephrotoxicity.",
    "Citations":166,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.xjidi.2021.100011",
    "Title":"Determination of Chemical Irritation Potential Using a Defined Gene Signature Set on Tissue-Engineered Human Skin Equivalents.",
    "Citations":67,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/10400435.2021.1983070",
    "Title":"Collective making: Co-designing 3D printed assistive technologies with occupational therapists, designers, and end-users.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma14112715",
    "Title":"Can Ultrasound Therapy Be an Environmental-Friendly Alternative to Non-Steroidal Anti-Inflammatory Drugs in Knee Osteoarthritis Treatment?",
    "Citations":127,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.26444\/aaem\/130712",
    "Title":"Modification of exhaled air nitric oxide in patients with asthma - cortisone monotherapy or dual inhalation therapy?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/pathogens10020198",
    "Title":"Toxocara cati and Other Parasitic Enteropathogens: More Commonly Found in Owned Cats with Gastrointestinal Signs Than in Clinically Healthy Ones.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00048-019-00225-8",
    "Title":"Implicit Changes of Model Uses in Astrophysics, Illustrated on the Paris-Durham Shock Model.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  }
]}
// The following is mostly copy and pasted (with thanks) from:
// https://medium.com/@rihab.beji099/transform-json-data-into-dynamic-html-tables-with-ease-c3ad579f6e59
// The functions to sort the table by clicking the header was added by Claude Sonnet 4.6

// Function to generate the table
function generateTable(data) {
  if (!data || data.length === 0) return "No data available.";
  // Create the table element
  const table = document.createElement('table');

  const keys = Object.keys(data[0]);
  const visibleKeys = keys.filter(k => k !== 'DOI');

  // Sort state
  let sortKey = null;
  let sortAsc = true;

  // Generate table headers
  const headerRow = document.createElement('tr');
  visibleKeys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize header
    th.style.cursor = 'pointer';
    th.title = 'Click to sort';
    th.addEventListener('click', () => {
      if (sortKey === key) {
        sortAsc = !sortAsc;
      } else {
        sortKey = key;
        sortAsc = true;
      }
      headerRow.querySelectorAll('th').forEach(h => {
        h.textContent = h.textContent.replace(/ [▲▼]$/, '');
      });
      th.textContent += sortAsc ? ' ▲' : ' ▼';
      renderRows();
    });
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  function makeRow(item) {
    const row = document.createElement('tr');
    visibleKeys.forEach(key => {
      const td = document.createElement('td');
      td.textContent = item[key] || ""; // Fill empty fields with blank
      if (key === 'Title'){
        td.innerHTML = "<a href=https://doi.org/" + item['DOI'] + " target='_blank'>" + item[key] + "</a>";
      };
      row.appendChild(td);
    });
    return row;
  }

  function renderRows() {
    while (table.rows.length > 1) table.deleteRow(1);

    const sorted = [...data].sort((a, b) => {
      if (!sortKey) return 0;
      let va = a[sortKey];
      let vb = b[sortKey];
      const aNum = (va !== '' && va !== null && va !== undefined) ? Number(va) : null;
      const bNum = (vb !== '' && vb !== null && vb !== undefined) ? Number(vb) : null;
      if (aNum !== null && !isNaN(aNum) && bNum !== null && !isNaN(bNum)) {
        return sortAsc ? aNum - bNum : bNum - aNum;
      }
      va = String(va ?? '');
      vb = String(vb ?? '');
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });

    sorted.forEach(item => table.appendChild(makeRow(item)));
  }

  renderRows();
  return table;
}
// Render the table
const container = document.getElementById('table-container');
const table = generateTable(papers.data);
if (table) container.appendChild(table);
