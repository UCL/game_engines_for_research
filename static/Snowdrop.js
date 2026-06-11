const papers = { 
 "data": [
  {
    "DOI":"10.1371\/journal.pone.0345337",
    "Title":"Recombinant Potyvirus lilimaculae in asymptomatic Galanthus nivalis: Ecological and evolutionary implications.",
    "Citations":138,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpls.2026.1760796",
    "Title":"The magnet species effect of two-leaf squill (Scilla spp.) on pollinator competition with the snowdrop (Galanthus nivalis L.).",
    "Citations":83,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00404-025-08175-4",
    "Title":"Perinatal bereavement rooms: a narrative review of physical space in perinatal grief.",
    "Citations":31,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41746-025-01822-9",
    "Title":"A randomized controlled trial to evaluate innovative decision support in the context of fall prevention.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/plants13131728",
    "Title":"New Cultivars of Galanthus nivalis in Slovenia.",
    "Citations":70,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13002-024-00650-7",
    "Title":"The quest for Homer's moly: exploring the potential of an early ethnobotanical complex.",
    "Citations":76,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.toxicon.2024.107616",
    "Title":"Spider venom neurotoxin based bioinsecticides: A novel bioactive for the control of the Asian citrus psyllid Diaphorina citri (Hemiptera).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s44215-023-00075-w",
    "Title":"Bicuspidization using autologous pericardium for neonatal quadricuspid truncal valve.",
    "Citations":5,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fcimb.2023.1163868",
    "Title":"Evaluation of the yeast phase-specific monoclonal antibody 4D1 and Galanthus nivalis agglutinin sandwich ELISA to detect Talaromyces marneffei antigen in human urine.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12934-023-02176-1",
    "Title":"Heterologous production of the insecticidal pea seed albumin PA1 protein by Pichia pastoris and protein engineering to potentiate aphicidal activity via fusion to snowdrop lectin Galanthus nivalis agglutinin; GNA).",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.4103\/jehp.jehp_451_22",
    "Title":"Therapeutic and medicinal effects of snowdrop (Galanthus spp.) in Alzheimer's disease: A review.",
    "Citations":47,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ani13081375",
    "Title":"Illegal Trade in Exotic Animals and Its Impacts in Slovenia-A Case Study.",
    "Citations":14,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00484-023-02426-2",
    "Title":"Common snowdrop as a climate change bioindicator in Czechia.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/15592324.2022.2163065",
    "Title":"Flower angle favors pollen export efficiency in the snowdrop Galanthus nivalis (Linnaeus, 1753) but not in the lesser celandine Ficaria verna (Huds, 1762).",
    "Citations":45,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ps.7198",
    "Title":"Enhancing the oral and topical insecticidal efficacy of a commercialized spider venom peptide biopesticide via fusion to the carrier snowdrop lectin (Galanthus nivalis agglutinin).",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0272377",
    "Title":"Removal of clinically relevant SARS-CoV-2 variants by an affinity resin containing Galanthus nivalis agglutinin.",
    "Citations":23,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/genes13071169",
    "Title":"Expression of Modified Snowdrop Lectin (Galanthus nivalis Agglutinin) Protein Confers Aphids and Plutella xylostella Resistance in Arabidopsis and Cotton.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/tas\/txac049",
    "Title":"Effect of feeding mid- or zero-tannin faba bean cultivars differing in vicine and covicine content on diet nutrient digestibility and growth performance of weaned pigs.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/insects13040386",
    "Title":"Seed Dispersal by Ants in Three Early-Flowering Plants.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/jcp.30653",
    "Title":"Isolation and functional analysis of OsAOS1\u00a0promoter for resistance to Nilaparvata lugens St\u00e5l infestation in rice.",
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
