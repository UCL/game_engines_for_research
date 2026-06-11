const papers = { 
 "data": [
  {
    "DOI":"10.21980\/J8J343",
    "Title":"Two-Screen Virtual Board Game Didactic for Teaching Wilderness and Environmental Medicine Topics to Emergency Medicine Residents.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/milmed\/usag254",
    "Title":"Imaging and Interventional Radiology Capabilities in Extreme Cold Environments: Operational Implications for Military Medicine.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/procel\/pwag001",
    "Title":"Correction to: Skin organoid transplantation promotes tissue repair with scarless in frostbite.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fsurg.2026.1829574",
    "Title":"Case Report: Frostbite in the tropics: abdominal pedicled flap reconstruction to prevent the metacarpal hand.",
    "Citations":12,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ijbiomac.2026.152686",
    "Title":"Polysaccharide architecture regulates the therapeutic performance of ferrous ion-coordinated hydrogels in frostbite wounds.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1136\/bmjopen-2025-110475",
    "Title":"Comparison of iloprost therapy versus non-iloprost therapy for severe frostbite: a retrospective cohort study of two Canadian cities.",
    "Citations":25,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/03007995.2026.2670004",
    "Title":"Nitrous oxide abuse prevalence, mechanisms, treatments and prevention.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1001\/jama.2026.7908",
    "Title":"Cryobiopsy vs Forceps for Bronchoscopic Lung Biopsy: The FROSTBITE-2 Randomized Clinical Trial.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00330-026-12592-7",
    "Title":"Percutaneous image-guided cryoablation of umbilical endometriosis: safety, feasibility, clinical, and imaging outcomes.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1364\/BOE.588321",
    "Title":"Terahertz spectral imaging for early assessment of frostbite injuries using the double Debye model and supervised machine learning.",
    "Citations":71,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/milmed\/usag164",
    "Title":"Medical Treatment in the Arctic: A Retrospective 10-Year Analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.17116\/sudmed20266902142",
    "Title":"[About the color of the skin outside the livor mortis marks in cases of death from general hypothermia].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.7759\/cureus.105337",
    "Title":"Collaborative Management of Opioid Use Disorder and Cancer Care in a Patient With Medical Complexity and Housing Instability.",
    "Citations":10,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.mmr.2026.100007",
    "Title":"Frostbite: diagnosis, treatment, prognosis, and future directions.",
    "Citations":99,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c11565",
    "Title":"Silk Microneedles for Targeted Epidermal Delivery of Antifreeze Proteins.",
    "Citations":40,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/jbcr\/irag045",
    "Title":"Impact of Thrombolytic Treatment on Functional Rehabilitation in Severe Frostbite Patients.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/22925503261424890",
    "Title":"Frostbite in Children: A Case Series and Development of a New Iloprost-Driven Protocol: Les engelures chez les enfants : une s\u00e9rie de cas et l'\u00e9laboration d'un nouveau protocole faisant appel \u00e0 l'iloprost.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.freeradbiomed.2026.02.059",
    "Title":"Peripheral cannabinoid receptor activation attenuates frostbite-induced chronic pain via modulation of TRP channels, neuroinflammation, and autophagy.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d5nr05331e",
    "Title":"CaO(2) nanoparticle-loaded injectable hydrogel with sustained oxygen release and ROS-scavenging functions for accelerating frostbite wound healing at high altitude.",
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
