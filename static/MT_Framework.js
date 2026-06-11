const papers = { 
 "data": [
  {
    "DOI":"10.1167\/tvst.15.4.5",
    "Title":"An Evaluation of the Mean Teacher Framework for Semi-Supervised Cataract Surgical Image Segmentation.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1126\/sciadv.ady8518",
    "Title":"Electroluminescent perovskite QD-based neural networks for energy-efficient and accelerate multitasking learning.",
    "Citations":104,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TNNLS.2025.3649537",
    "Title":"Boosting Semi-Supervised Medical Image Segmentation Through Inter-Instance Information Complementarity.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.patcog.2025.112184",
    "Title":"Medical image segmentation using dual-decoder mutual teaching with a mean teacher framework.",
    "Citations":51,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12539-025-00727-1",
    "Title":"Semi-supervised Medical Image Segmentation Using Heterogeneous Complementary Correction Network and Confidence Contrastive Learning.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/bioengineering12050453",
    "Title":"PE-MT: A Perturbation-Enhanced Mean Teacher for Semi-Supervised Image Segmentation.",
    "Citations":31,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/mp.17809",
    "Title":"Semi-supervised medical image segmentation based on dual swap data mixing and cross EMA strategies.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.compbiomed.2025.110055",
    "Title":"Unsupervised domain adaptation with multi-level distillation boost and adaptive mask for medical image segmentation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/mp.17115",
    "Title":"Multimodal radiotherapy dose prediction using a multi-task deep learning model.",
    "Citations":40,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.artmed.2023.102757",
    "Title":"Semi-supervised image segmentation using a residual-driven mean teacher and an exponential Dice loss.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TNNLS.2022.3213576",
    "Title":"A Multitask Latent Feature Augmentation Method for Few-Shot Learning.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TMI.2022.3209798",
    "Title":"Contrastive Semi-Supervised Learning for Domain Adaptive Segmentation Across Similar Anatomical Structures.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.compbiomed.2022.105972",
    "Title":"Semi-supervised region-connectivity-based cerebrovascular segmentation for time-of-flight magnetic resonance angiography image.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S2052520621010015",
    "Title":"The role of local heteropolyhedral substitutions in the stoichiometry, topological characteristics and ion-migration paths in the eudialyte-related structures: a quantitative analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.cmpb.2021.106419",
    "Title":"Automatic segmentation of organs at risk and tumors in CT images of lung cancer from partially labelled datasets with a semi-supervised conditional nnU-Net.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/mrm.28611",
    "Title":"Free-breathing diffusion tensor MRI of the whole left ventricle using second-order motion compensation and multitasking respiratory motion correction.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/jp4047209",
    "Title":"Molecular-thermodynamic framework to predict the micellization behavior of mixtures of fluorocarbon-based and hydrocarbon-based surfactants.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.pbi.2013.10.008",
    "Title":"The rise and fall of the phragmoplast microtubule array.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/s0108768101021619",
    "Title":"Crystal chemistry of zirconosilicates and their analogs: topological classification of MT frameworks and suprapolyhedral invariants.",
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
