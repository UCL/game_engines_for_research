const papers = { 
 "data": [
  {
    "DOI":"10.1016\/j.wneu.2026.125108",
    "Title":"Safety and Efficacy of Endovascular Thrombectomy for Progressive Anterior Circulation Large Vessel Occlusion Stroke Treated Beyond 24 Hours: A Single-Center Retrospective Cohort Study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/bco2.70233",
    "Title":"Multicentre real-world evaluation of the Haematuria Cancer Risk Score to risk-stratify the detection of bladder cancer in patients referred from primary care.",
    "Citations":20,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.18332\/ejm\/221144",
    "Title":"Resources and challenges for midwives supporting women in the latent phase of labor: A qualitative study from Germany.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1088\/1748-3190\/ae7884",
    "Title":"A novel cellular structure inspired by White Jade Bodhi: Mechanical behavior and energy absorption performance.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jaad.2026.05.113",
    "Title":"JAAD Game Changers: \"Phase 3 efficacy and safety of abrocitinib in adults with moderate-to-severe atopic dermatitis after switching from dupilumab (JADE EXTEND)\".",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/S0140-6736(26)00960-8",
    "Title":"Atrasentan in patients with IgA nephropathy (ALIGN): final 2\u00b75-year results from a randomised, double-blind, placebo-controlled, phase 3 trial.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/S0140-6736(26)01094-9",
    "Title":"Endothelin antagonism in IgA nephropathy: promise ahead of proof?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1001\/jama.2026.9379",
    "Title":"Low-Dose Rivaroxaban and Cardiovascular Events in Advanced Kidney Disease: The TRACK Randomized Clinical Trial.",
    "Citations":24,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00401-026-03033-2",
    "Title":"AETA peptide contributes to Alzheimer's disease signature of synapse dysfunction.",
    "Citations":52,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12884-026-09382-w",
    "Title":"Navigating the latent phase of labour: women's experiences within structural constraints - a qualitative study from Germany.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1159\/000551131",
    "Title":"Global Treatment Patterns for Immunoglobulin A Nephropathy in Adults: Results from a Real-World Survey.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/09546634.2026.2672328",
    "Title":"Sustained on\/off-treatment disease control with abrocitinib for moderate-to-severe atopic dermatitis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s13555-026-01778-y",
    "Title":"Efficacy and Safety of Variable-Dose Versus Continuous-Dose Abrocitinib Treatment in Patients with Moderate-to-Severe Atopic Dermatitis: A Pooled Analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fphar.2026.1773130",
    "Title":"Dual-targeting phytochemicals Ergosterol and Quercetagetin implicate steroid metabolism-associated pathways in lung and liver cancer models.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-026-52689-z",
    "Title":"Greenstone artifacts in pre-Columbian Costa Rica: from raw material to local and interregional exchanges.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ejso.2026.111874",
    "Title":"Thromboprophylaxis, pain and organization: How do expert centers manage PIPAC's perioperative care? An international survey.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.psychsport.2026.103157",
    "Title":"\"You can just be in your body how it is\": Queer embodiment and resistance in physical activity.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s40814-026-01835-5",
    "Title":"Just in Time Adaptive Interventions for Behavioral Activation in Patients with Depression (JADE): protocol of a design, feasibility and preliminary effectiveness study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2337\/dc26-0114",
    "Title":"Precision Medicine to Redefine Insulin Secretion and Monogenic Diabetes (PRISM): A Randomized Controlled Trial in Chinese Patients With Young-Onset Diabetes.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/14992027.2026.2665401",
    "Title":"Evaluation of a novel phrase-based speech-recognition test using synthetic speech.",
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
