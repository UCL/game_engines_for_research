const papers = { 
 "data": [
  {
    "DOI":"10.1016\/j.wneu.2026.125079",
    "Title":"Comparative study of posterior lumbar interbody fusion using expandable cages versus lateral lumbar interbody fusion for lumbar canal stenosis associated with osteoporotic vertebral fractures: a multicenter retrospective cohort study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.resinv.2026.101424",
    "Title":"Insulin-like growth factor 1 by lung fibroblasts from patients with idiopathic pulmonary fibrosis contributes to the development of fibrosis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.22603\/ssrr.2025-0252",
    "Title":"Prognostic Accuracy of Eight Scoring Systems in Untreated Patients with Spinal Metastases: A Comparative Study.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00535-026-02397-2",
    "Title":"Correction: Predictors of lymph node metastases, recurrence, and survival in patients with pedunculated-type T1 colorectal cancer.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/wjo2.70018",
    "Title":"Effect of Stimulus Duration on the Electrogustometric Threshold.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/tropicalmed11030073",
    "Title":"District-Level Dengue Early Warning Prediction System in Bangladesh Using Hybrid Explainable AI and Bayesian Deep Learning.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1136\/bmjment-2025-302303",
    "Title":"Effects of smartphone cognitive behavioural therapy on social functioning in non-depressive and subthreshold depressive adults: a secondary analysis of the RESiLIENT trial.",
    "Citations":32,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41380-026-03521-7",
    "Title":"Examining glycation as a mediator linking bullying to psychotic experience and depressive symptom in adolescents.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.molpha.2026.100102",
    "Title":"Cannabinoid receptor 2 activating antibodies: A promising therapeutic strategy for macrophage-driven fibro-inflammatory diseases.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.31616\/asj.2025.0489",
    "Title":"Risk factors for metastatic spinal cord compression in patients with spinal metastases: analysis of epidural metastases.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s13730-025-01068-0",
    "Title":"Avacopan for severe pulmonary hemorrhage requiring extracorporeal membrane oxygenation in a patient with MPO-ANCA positive vasculitis.",
    "Citations":14,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s11064-026-04673-2",
    "Title":"Metabolic Alterations Induced by a Seizure-Causing Sodium Channel Mutation and their Partial Normalization by Dietary \u03b1-Linolenic Acid in Drosophila.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2147\/NDT.S526034",
    "Title":"Identifying Physiological and Cognitive Indicators of Subthreshold Depression and Major Depressive Disorder Progression Risk.",
    "Citations":66,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12906-025-05240-y",
    "Title":"Oral fermented rice bran supplementation suppresses viral replication and stimulates immune functions in immunocompetent and immunocompromised mice infected with influenza virus.",
    "Citations":69,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.6026\/973206300213264",
    "Title":"Evaluation of pain during gingival depigmentation using diode laser and conventional scalpel technique.",
    "Citations":11,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.lanwpc.2025.101741",
    "Title":"Smartphone based cognitive behavioural therapy for adults with no or minimal depressive symptoms in Japan: an exploratory secondary analysis of RESiLIENT trial.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00535-025-02318-9",
    "Title":"Predictors of lymph node metastases, recurrence, and survival in patients with pedunculated-type T1 colorectal cancer.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10266-025-01264-5",
    "Title":"FK506 enhances bone morphogenetic protein 9-induced cementoblast differentiation in human cementoblast-lineage cells.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12010-025-05387-x",
    "Title":"Unveiling the Impact of Indole Derivatives on Methanogenic Archaea and Microbial Functions in Anaerobic Digestion of Waste Sewage Sludge.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ebiom.2025.105967",
    "Title":"Pro-dopaminergic pharmacological interventions for anhedonia in depression: a living systematic review and network meta-analysis of human and animal studies.",
    "Citations":52,
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
