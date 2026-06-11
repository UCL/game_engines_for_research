const papers = { 
 "data": [
  {
    "DOI":"10.1021\/acsomega.5c13163",
    "Title":"Removal of Glyphosate from Water by Adsorption Using the Zeolitic Imidazolate Framework ZIF-8: Characterization of Equilibrium Isotherms and Adsorption Kinetics.",
    "Citations":81,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.marpolbul.2026.119616",
    "Title":"Machine learning approach for heavy metal source identification and spatial distribution in coastal sediments of Tiruchendur, Southern India.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jconrel.2026.114802",
    "Title":"Fibroblast growth factor 21 with molybdenum nanodots in a self-contracting thermosensitive hydrogel promotes diabetic wound repair by reprogramming lipid metabolism.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/81254",
    "Title":"Harmonizing Logical Observation Identifiers Names and Codes (LOINC) Codes and Units in Real-World Oncology Data: Method Development and Evaluation.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10653-026-03112-z",
    "Title":"Analysis of the sources of rare earth elements in deep groundwater of the Huainan Coalfield based on the ACPS-MLR model.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TVCG.2026.3668980",
    "Title":"Spectral Image Rendering of Fluorescent Objects Using a Conventional Renderer.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-026-39389-4",
    "Title":"Exogenous myrosinase from mustard seed increases bioavailability of sulforaphane from a glucoraphanin-rich broccoli seed extract in a randomized clinical study.",
    "Citations":95,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.chemosphere.2026.144856",
    "Title":"Defined microbial consortium with bioremediation potential: atrazine removal, phytotoxicity, and detection of genes involved in herbicide catabolism.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.marpolbul.2026.119357",
    "Title":"Simulating the copper distribution in coastal waters and sediments in Quintero Bay and adjacent shores.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0331258",
    "Title":"Water treatment and E. coli in drinking water: Household responses to (invisible) water quality risks.",
    "Citations":20,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12866-025-04503-5",
    "Title":"Functionalization of textile using streptomyces erythrogriseus GH80 brown bioactive pigment with in silico studies.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.inorgchem.5c05400",
    "Title":"A Lewis Superacidic Borirane Derivative Featuring a Tris(Carboranyl)Borane Environment.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d5ob01606a",
    "Title":"Copper-catalyzed synthesis of functionalized dithioalkenes from solid calcium carbide.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.cub.2025.10.045",
    "Title":"Water-like timbral quality in birdsong arises from complex motor control of two sound sources.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pgph.0005458",
    "Title":"Characteristics associated with women undergoing their first mammography screening at a younger age.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10739-025-09833-8",
    "Title":"The Embryo Project: A Rich Resource for the HPS Community.",
    "Citations":4,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/md23090360",
    "Title":"Co-Culture of Auxenochlorella protothecoides and Serratia liquefaciens Promotes Lutein Accumulation.",
    "Citations":32,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.19540\/j.cnki.cjcmm.20250625.601",
    "Title":"[Root causes of quality changes in cultivated Chinese materia medica and countermeasures for high-quality production].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/toxics13080689",
    "Title":"Distribution of Legacy and Emerging PFASs in a Terrestrial Ecosystem Located near a Fluorochemical Manufacturing Facility.",
    "Citations":68,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1136\/bmjopen-2024-093210",
    "Title":"Procalcitonin to guide antibiotic use during the first wave of COVID-19 in English and Welsh hospitals: integration and triangulation of findings from quantitative and qualitative sources.",
    "Citations":30,
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
