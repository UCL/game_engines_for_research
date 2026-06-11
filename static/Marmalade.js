const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.scitotenv.2026.181822",
    "Title":"Effects of a formulation of the veterinary drug moxidectin on the performance of a plant-insect food chain.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.tjnut.2026.101518",
    "Title":"Free Sugar Intake and Dementia Risk: A Swedish Cohort Study on Dietary Sources and Dementia Subtypes.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41597-026-07148-9",
    "Title":"Comprehensive stage- and tissue-specific transcriptome of the global ecosystem service insect, marmalade hoverfly Episyrphus balteatus.",
    "Citations":26,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pgen.1011864",
    "Title":"Expanding the fly eye gene regulatory network: From Drosophila to the hoverfly Episyrphus balteatus.",
    "Citations":108,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1155\/jotm\/4178099",
    "Title":"Unveiling the Antimalarial Potential of Leaf Extracts of Mussaenda erythrophylla Schum. & Thonn. and Mussaenda philippica Dona Luz x M. flava in Mice.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ajcnut.2026.101199",
    "Title":"Genetic influences on diet in young Swedish adults: a twin study.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s11130-025-01446-0",
    "Title":"Applying Wild Mistol Fruits (Sarcomphalus Mistol) from the Paraguayan Chaco as Value-Added Food Ingredients.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d5ra05086c",
    "Title":"Waste robusta coffee husk pectin: ultrasound-assisted extraction and applications in roselle flower marmalade and fruit coating.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/1365-2656.70126",
    "Title":"Long-range pollen transport across the North Sea: Insights from migratory hoverflies landing on a remote oil rig.",
    "Citations":83,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/1750-3841.70553",
    "Title":"Effect of Ohmic Heating on the Quality and Nutrient Preservation of Plum Marmalade: A Comparison With Conventional Heating.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/S1474-4422(24)00526-X",
    "Title":"Autoinflammatory encephalopathy due to PTPN1 haploinsufficiency: a case series.",
    "Citations":31,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1098\/rsob.240235",
    "Title":"Multiple factors contribute to female dominance in migratory bioflows.",
    "Citations":126,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/14786419.2025.2455461",
    "Title":"Pectin as a functional food ingredient in jelly marmalade.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.isci.2024.111345",
    "Title":"Enhanced flight performance in hoverfly migrants.",
    "Citations":77,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fmicb.2024.1433909",
    "Title":"Effects of developmental stages, sex difference, and diet types of the host marmalade hoverfly (Episyrphus balteatus) on symbiotic bacteria.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41597-024-03666-6",
    "Title":"Chromosome-level genome assembly of marmalade hoverfly Episyrphus balteatus (Diptera: Syrphidae).",
    "Citations":79,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/jsfa.13593",
    "Title":"Development of sensory tools for green rooibos (Aspalathus linearis (Burm.f.) R.Dahlgren) and changes in quality attributes during shelf-life storage.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fmicb.2023.1308393",
    "Title":"Episyrphus balteatus symbiont variation across developmental stages, living states, two sexes, and potential horizontal transmission from prey or environment.",
    "Citations":74,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12010-023-04826-x",
    "Title":"Phytochemical Content of Malus floribunda: In Vitro and Molecular Docking Studies.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.3c00698",
    "Title":"Utilization of Quince (Cydonia oblonga) Peel and Exploration of Its Metabolite Profiling and Cardioprotective Potential Against Doxorubicin-Induced Cardiotoxicity in Wistar Rats.",
    "Citations":59,
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
