const papers = { 
 "data": [
  {
    "DOI":"10.1001\/jamanetworkopen.2026.1272",
    "Title":"Glucagon-Like Peptide-1 Receptor Agonist Switching and Treatment Persistence in Adults Without Diabetes.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/osp4.70123",
    "Title":"Negative Consequences of Removing GLP-1 RA Obesity Coverage: A Cross-Sectional Cohort Comparison Study.",
    "Citations":14,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.diabres.2026.113119",
    "Title":"GLP-1 RA initiation versus metformin and risk of cardiomyopathy in patients with cancer and diabetes treated with chemotherapy, radiation, or immunotherapy: a target trial emulation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/obr.70095",
    "Title":"Association of Adverse Childhood Experiences and Metabolic Syndrome: A Systematic Review and Meta-Analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fsoc.2025.1579227",
    "Title":"Practice as research as a decolonial praxis: Yoruba culture retrieval.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/19390211.2026.2616440",
    "Title":"Creatine Supplementation and the Brain: Have We Put the Cart Before the Horse?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/NHH.0000000000001406",
    "Title":"Saving Lives with Words-Communication for Vaccination.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ajog.2025.09.046",
    "Title":"Chlorhexidine is the preferred agent for vaginal antisepsis prior to cesarean delivery: a systematic review and network meta-analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.4253\/wjge.v17.i12.113467",
    "Title":"Quality of life, dumping symptoms, and weight bias internalization after endoscopic bariatric revisional therapies.",
    "Citations":33,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41366-025-01977-1",
    "Title":"Sex differences in the influence of weight bias internalization on preferences for telehealth utilization among people with obesity.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1101\/2025.07.30.667555",
    "Title":"Understanding the Causal Impact of Elevated Maternal Stress During Pregnancy: A Systematic Literature Review of Guinea Pig Models.",
    "Citations":95,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1542\/peds.2024-070370",
    "Title":"Obesity and Severe Obesity in Youth Before and During COVID-19.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.7759\/cureus.95664",
    "Title":"Racial, Sex, and Age Disparities in Cardiomyopathy Etiology: A Social Determinant Analysis of 366 Cardiac Patients.",
    "Citations":23,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.fertnstert.2025.11.015",
    "Title":"Social and healthcare discrimination, polycystic ovary syndrome, and cardiometabolic health among US women.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/bs15111497",
    "Title":"Impact of a Mental Health Consultation Program on Child Psychosocial Development over Two School Years.",
    "Citations":51,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-25444-z",
    "Title":"Strongest constraint on the parastatistical Quon model with the VIP-2 measurements.",
    "Citations":45,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/cancers17213579",
    "Title":"Effects of Metformin on Cancer Survival Among Men Diagnosed with Advanced Prostate Cancer Treated with Androgen-Deprivation Therapy: Emulating a Target Trial.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.24248\/eahrj.v9i1.819",
    "Title":"Association Between COVID19 Vaccination Uptake and Socio-Demographic Characteristics Among Pregnant Women in Kenya.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/10669817.2025.2575396",
    "Title":"The impact of fellowship and board-certification on diagnostic clinical reasoning in lumbar spine dysfunction using the script concordance test.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1123\/ijsnem.2025-0161",
    "Title":"Summary of the 2025 Professionals in Nutrition for Exercise and Sport \"10 Questions\/10 Experts\" Session-Can Everyday Foods Replace Some Ergogenic Supplements and Commercially Available Sports Foods?",
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
