const papers = { 
 "data": [
  {
    "DOI":"10.1089\/g4h.2022.0046",
    "Title":"\"STAR WARS: The first Jedi\" Gamification Program: Use of a Mobile App to Improve Body Composition in College Students.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.resplu.2026.101347",
    "Title":"Resuscitation needs justice: an intersectional view on justice, equity, diversity, and inclusion.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.64898\/2026.04.08.717226",
    "Title":"Designer indicators for two-photon recording of subthreshold voltage dynamics.",
    "Citations":71,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1227\/neu.0000000000004036",
    "Title":"Choroid Plexus Cauterization Prevents Postoperative Hydrocephalus in Adult Glioblastoma Resection With Ventricular Entry.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12909-026-08998-y",
    "Title":"Feasibility of an interactive, iterative zoom-based anti-racism course for academic neurology faculty.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41586-025-09844-9",
    "Title":"Investigating the analytical robustness of the social and behavioural sciences.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/cells15060544",
    "Title":"Harnessing Gut Endocrine Cell Plasticity to Restore Insulin Production.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/psyp.70265",
    "Title":"Neurocognitive Dynamics of Translating Information From a Spatial Map Into Action.",
    "Citations":93,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.dib.2026.112462",
    "Title":"Deep-sea image dataset for organism detection.",
    "Citations":12,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ijc.70291",
    "Title":"Effect of chemoradiation treatment on methylated BCAT1 and IKZF1 in rectal cancer.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pgph.0005854",
    "Title":"Evaluating the perceived outcome and impact of an integrated knowledge translation approach in the development of an equity reporting guideline: A cross-sectional survey.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/JTE.0000000000000468",
    "Title":"The Impact of Lynda D. Woodruff Lectures on First-Semester Doctor of Physical Therapy Students: A Qualitative Study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.xnsj.2025.100833",
    "Title":"Following posterior spinal fusion for adolescent idiopathic scoliosis, patients with asthma are at increased odds of pulmonary adverse events.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/plphys\/kiaf618",
    "Title":"Modeling omics integration with HIVE identifies response signatures to multifactorial stress in plants.",
    "Citations":15,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1113\/JP289806",
    "Title":"Physiological mechanisms underlying enhanced performance with blood flow restriction training: neuromuscular, vascular and metabolic adaptations.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/1878-0261.70175",
    "Title":"LINC01116, a hypoxia-lncRNA marker of pathological lymphangiogenesis and poor prognosis in lung adenocarcinoma.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acschemneuro.5c00670",
    "Title":"Absolute Membrane Potential Recording with ASAP-Type Genetically Encoded Voltage Indicators Using Fluorescence Lifetime Imaging.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jposna.2025.100258",
    "Title":"Diversity and Discrimination at the Workplace - A Survey of the Members of the Pediatric Orthopaedic Society of North America.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12910-025-01313-2",
    "Title":"Prevalence of defensive medicine behaviors, associated risk factors and its mitigation strategies among physicians in Gaza Strip, palestine: a mixed method study.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41467-025-63867-4",
    "Title":"All-optical voltage interrogation for probing synaptic plasticity in vivo.",
    "Citations":63,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ph18091397",
    "Title":"PROTACs and Glues: Striking Perspectives for Engineering Cancer Therapy \u00c0 La Carte.",
    "Citations":57,
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
