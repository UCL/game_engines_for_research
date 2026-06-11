const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fimmu.2026.1725581",
    "Title":"M2 macrophage-based classification identifies DOK3 as a driver of pro-tumoral polarization and migration in glioblastoma.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fphys.2025.1708686",
    "Title":"Tmem45b modulates itch via endoplasmic reticulum calcium regulation.",
    "Citations":67,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.19540\/j.cnki.cjcmm.20250427.101",
    "Title":"[Quality evaluation of Xinjiang Rehmannia glutinosa and Rehmannia glutinosa based on fingerprint and multi-component quantification combined with chemical pattern recognition].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.expneurol.2025.115205",
    "Title":"TREM2 promotes hippocampal neurogenesis through regulating microglial M2 polarization in APP\/PS1 mice.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.24272\/j.issn.2095-8137.2024.269",
    "Title":"DNA2 knockout aggravates cerebral ischemia\/reperfusion injury by reducing postsynaptic Homer1a.",
    "Citations":66,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/10286020.2024.2435992",
    "Title":"Tripterygium wilfordii polyglycoside tablets attenuated the progression of hepatocellular carcinoma by targeting IL-6 and downstream signaling pathways in a multi-target manner.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.phymed.2024.156099",
    "Title":"1,8-Cineole alleviates Nrf2-mediated redox imbalance and mitochondrial dysfunction in diabetes mellitus by targeting Sirt1.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.biopha.2024.116977",
    "Title":"Brusatol alleviates pancreatic carcinogenesis via targeting NLRP3 in transgenic Kras(tm4Tyj) Trp53(tm1Brn) Tg (Pdx1-cre\/Esr1*) #Dam mice.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3892\/or.2022.8297",
    "Title":"[Retracted] Silencing NOB1 enhances doxorubicin antitumor activity of the papillary thyroid carcinoma in\u00a0vitro and in\u00a0vivo.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s11596-019-2015-5",
    "Title":"Improvement of Mechanical Stability for Single Unit Recording Based on Skull Cap in Living Chinchilla.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/c7sc04531j",
    "Title":"Tinker-HP: a massively parallel molecular dynamics package for multiscale simulations of large complex systems with advanced point dipole polarizable force fields.",
    "Citations":98,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.asjsur.2017.10.006",
    "Title":"Pediatric differentiated thyroid carcinoma: The clinicopathological features and the coexistence of Hashimoto's thyroiditis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/jcc.24257",
    "Title":"Scalable improvement of SPME multipolar electrostatics in anisotropic polarizable molecular mechanics using a general short-range penetration correction up to quadrupoles.",
    "Citations":58,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3892\/or.2015.3730",
    "Title":"Silencing NOB1 enhances doxorubicin antitumor activity of the papillary thyroid carcinoma in vitro and in vivo.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10571-014-0153-7",
    "Title":"The mGluR5 positive allosteric modulator CDPPB inhibits SO\u2082-induced protein radical formation and mitochondrial dysfunction through activation of Akt in mouse hippocampal HT22 cells.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/c4fo00761a",
    "Title":"Allicin protects spinal cord neurons from glutamate-induced oxidative stress through regulating the heat shock protein 70\/inducible nitric oxide synthase pathway.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neuint.2014.10.005",
    "Title":"Small-molecule inhibitors at the PSD-95\/nNOS interface attenuate MPP+-induced neuronal injury through Sirt3 mediated inhibition of mitochondrial dysfunction.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00894-014-2471-6",
    "Title":"Hydration Gibbs free energies of open and closed shell trivalent lanthanide and actinide cations from polarizable molecular dynamics.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00894-012-1453-9",
    "Title":"Some insights into the binding mechanism of Aurora B kinase gained by molecular dynamics simulation.",
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
