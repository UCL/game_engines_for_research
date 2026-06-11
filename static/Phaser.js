const papers = { 
 "data": [
  {
    "DOI":"10.1038\/s41386-026-02439-6",
    "Title":"Allele-specific expression in the brain links genetic risk and cortical thinning in psychiatric disorders.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jpclett.6c00770",
    "Title":"DEEP Phaser: A Deep Learning Tandem Vision Transformer for Fully Automated NMR Phase Correction.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41524-026-01956-8",
    "Title":"phaser: a unified and extensible framework for fast electron ptychography.",
    "Citations":82,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/75744",
    "Title":"SMARTCLOTH Prototype for Dietary Management in Patients With Diabetes Mellitus: Tutorial on Human-Centered Design Methodology for Health Care Hardware Development.",
    "Citations":99,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fresc.2025.1653302",
    "Title":"Beyond the joystick: deep learning games for hand movement recovery.",
    "Citations":23,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S2059798325009647",
    "Title":"Xtricorder: a likelihood-enhanced self-rotation function and application to a machine learning-enhanced Matthews prediction of asymmetric unit copy number.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/gigascience\/giaf138",
    "Title":"TinkerHap-a novel read-based phasing algorithm with integrated multimethod support for enhanced accuracy.",
    "Citations":15,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.dmd.2025.100153",
    "Title":"Application of a mouse model humanized for cytochrome P450-mediated drug metabolism to predict drug-drug interactions between a peptide and small molecule drugs.",
    "Citations":22,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1101\/2025.09.10.675457",
    "Title":"Interneuron theta phase locking controls seizure susceptibility.",
    "Citations":92,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.12788\/fp.0554",
    "Title":"Improved Pharmacogenomic Testing Process for Veterans in Outpatient Settings by Clinical Pharmacist Practitioners.",
    "Citations":16,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jpet.2024.100053",
    "Title":"Use of an extensively humanized mouse model to predict the risk of drug-drug interactions in patients receiving dexamethasone.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S2059798325001251",
    "Title":"Slice'N'Dice: maximizing the value of predicted models for structural biologists.",
    "Citations":58,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.17691\/stm2024.16.1.01",
    "Title":"Biomineralization of Human Genomic DNA into ZIF-8, a Zeolite-Like Metal-Organic Framework.",
    "Citations":57,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/pro.5136",
    "Title":"ARCIMBOLDO at low resolution: Verification for coiled coils and globular proteins.",
    "Citations":72,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.analchem.4c00992",
    "Title":"Phaser-Trim: A Phase Separation Based Genetically Encoded Reporter for H3K9 Trimethylation in Living Cells.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00520-024-08716-8",
    "Title":"The safety and effectiveness of naldemedine for opioid-induced constipation in patients with advanced cancer in real-world palliative care settings: a multicenter prospective observational study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/ajhp\/zxae122",
    "Title":"Integration of a clinical pharmacist practitioner-led pharmacogenomics service in a Veterans Affairs hematology\/oncology clinic.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.heliyon.2023.e23847",
    "Title":"Mineral composition, crystallinity and dielectric evaluation of Bamboo Salt, Himalaya Salt, and Ba'kelalan salt content.",
    "Citations":52,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00520-024-08352-2",
    "Title":"Effectiveness of antipsychotics for managing agitated delirium in patients with advanced cancer: a secondary analysis of a multicenter prospective observational study in Japan (Phase-R).",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1073\/pnas.2315069121",
    "Title":"Acceleration of infectious disease drug discovery and development using a humanized model of drug metabolism.",
    "Citations":56,
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
