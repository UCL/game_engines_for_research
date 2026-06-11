const papers = { 
 "data": [
  {
    "DOI":"10.1002\/jcc.70397",
    "Title":"PES-trotter: A Cross-Platform Open-Source Application for the Analysis of Molecular Processes on 3D Potential-Energy Landscapes.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ebiom.2026.106269",
    "Title":"Antibody-mediated targeting of SOSIP HIV-1 Env to skin Langerhans cells potentiates humoral responses.",
    "Citations":52,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.soin.2025.12.010",
    "Title":"[inzee.Care, from healthcare to IT: feedback on digital entrepreneurship].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/S2213-8587(25)00364-X",
    "Title":"Tubeless automated insulin delivery versus multiple daily injections in children and adults with type 1 diabetes with elevated HbA(1c) (RADIANT): a multicentre, international, parallel-group, open-label, randomised, controlled trial.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/jbmr\/zjag031",
    "Title":"Waiting for Godot: why therapeutic hesitancy fails patients with early CKD.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/15209156251414981",
    "Title":"Overcoming Closed-Loop System Limits: Diluted Insulin Improves Glycemic Control and Reduces Nighttime Hypoglycemia in Toddlers with Low Insulin Requirements.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.annder.2025.103419",
    "Title":"Therapeutic patient education through digital technology: Recommendations for paediatrics and dermatology.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.12688\/wellcomeopenres.23879.2",
    "Title":"Linking behaviour change techniques to mechanisms of action: Using the Theory and Techniques Tool alongside the Behaviour Change Intervention Ontology.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/15209156251390819",
    "Title":"Real-World Use of Hybrid Closed-Loop System in Very Young Children with Type 1 Diabetes: Daily Glycemic Patterns Support Glycemic Improvements and Highlight Emerging Challenges for Hypoglycemia.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/jdv.70152",
    "Title":"Hair follicle stem cell fate supports distinct clinical endotypes in hidradenitis suppurativa.",
    "Citations":16,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s40359-025-03446-w",
    "Title":"Non-immersive virtual environments for the treatment of hoarding disorder: a preliminary randomized controlled trial based on a non-clinical sample.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41541-025-01214-w",
    "Title":"Targeting Langerhans cells via skin delivery of HIV Envelope enhances the antibody response to vaccination.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neunet.2025.107816",
    "Title":"EEGMamba: An EEG foundation model with Mamba.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ajh.70010",
    "Title":"Cold Agglutinin Syndrome Secondary to Mycoplasma pneumoniae Infection in Adults: Results From a Large French Observational Study (MyCOLD Study).",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1210\/jendso\/bvaf083",
    "Title":"Safety and Effectiveness of Oral Glyburide Suspension in Neonatal Diabetes Mellitus: French Retrospective Cohort Study.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.spp.2025.03.012",
    "Title":"[\"L'Atelier des sens\": Parenting group for children with eating disorders].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.diabet.2025.101637",
    "Title":"Practical implementation of automated insulin delivery systems in 2025: A French position statement update.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/ndt\/gfaf034",
    "Title":"More versus less intensive blood pressure reduction and kidney function outcomes-Waiting for Godot?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/20552076241313164",
    "Title":"Digital healthcare services in community pharmacies in Switzerland: Pharmacist and patient acceptability, and pharmacist readiness-the Pneumoscope\u2122 pilot study.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/dom.16140",
    "Title":"Paediatric-to-adult transition in type 1 diabetes: A two-centre experience of a structured program, 2014 to 2022.",
    "Citations":39,
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
