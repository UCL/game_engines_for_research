const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00267-026-02504-2",
    "Title":"Multi-tissue contamination (mercury, lead, and organochlorine pesticides) and health biomarkers in Northern Shoveler and Northern Pintail during wintering.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41592-026-03102-0",
    "Title":"Decoding sequence determinants of gene expression in diverse cellular and disease states.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.tvjl.2026.106629",
    "Title":"Abdominal ultrasonography in Lahille's bottlenose dolphin (Tursiops truncatus gephyreus): Description and reference values.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/DCR.0000000000003951",
    "Title":"Understanding the Long-term Psychosocial and Health Care Needs of Adults With Congenital Colorectal and Pelvic Malformations.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s42003-024-06717-1",
    "Title":"Gelatinous filter feeders increase ecosystem efficiency.",
    "Citations":99,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/healthcare12141368",
    "Title":"Association of Overweight and Obesity with Impaired Executive Functioning in Mexican Adolescents: The Importance of Inhibitory Control.",
    "Citations":73,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma17040809",
    "Title":"Biochar as Alternative Material for Heavy Metal Adsorption from Groundwaters: Lab-Scale (Column) Experiment Review.",
    "Citations":296,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ultramic.2024.113923",
    "Title":"X-ray production cross sections for Ir and Bi M-subshells induced by electron impact.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.7589\/JWD-D-22-00083",
    "Title":"Fibropapillomatosis Associated with Chelonid alphaherpesvirus 5 (ChHV5) in a Green Turtle Chelonia mydas in Argentine Waters.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fneur.2022.973380",
    "Title":"National stroke management plan in Uruguay: Challenges and opportunities.",
    "Citations":12,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41467-022-35204-6",
    "Title":"Salp blooms drive strong increases in passive carbon export in the Southern Ocean.",
    "Citations":102,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma15207162",
    "Title":"Physical-Chemical Characterization of Different Carbon-Based Sorbents for Environmental Applications.",
    "Citations":159,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.cub.2022.07.065",
    "Title":"The leaf beetle Chelymorpha alternans propagates a plant pathogen in exchange for pupal protection.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/plankt\/fbab074",
    "Title":"The effect of phytoplankton properties on the ingestion of marine snow by Calanus pacificus.",
    "Citations":70,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/jns.12450",
    "Title":"Incidence of Guillain-Barr\u00e9 syndrome in an Uruguayan population. A prospective cohort study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1590\/0001-3765202120201604",
    "Title":"The Program for Biodiversity Research in Brazil: The role of regional networks for biodiversity knowledge, dissemination, and conservation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.11646\/zootaxa.4878.3.2",
    "Title":"Hydroids (Cnidaria, Hydrozoa) from Mauritanian Coral Mounds.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/1179544120931086",
    "Title":"Patient-Reported Outcomes After Platelet-Rich Plasma, Bone Marrow Aspirate, and Adipose-Derived Mesenchymal Stem Cell Injections for Symptomatic Knee Osteoarthritis.",
    "Citations":24,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.cub.2020.05.020",
    "Title":"GWAS for Lifespan and Decline in Climbing Ability in Flies upon Dietary Restriction Reveal decima as a Mediator of Insulin-like Peptide Production.",
    "Citations":70,
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
