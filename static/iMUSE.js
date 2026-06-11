const papers = { 
 "data": [
  {
    "DOI":"10.1371\/journal.pone.0332874",
    "Title":"Mapping unconventional Leishmania in human and animal leishmaniasis: A scoping review protocol on pathogen diversity, geographic distribution and knowledge gaps.",
    "Citations":15,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1155\/japr\/2102270",
    "Title":"A Century of Epidemiological Advances in Cutaneous and Visceral Leishmaniasis in Algeria.",
    "Citations":130,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.heliyon.2024.e40895",
    "Title":"Ticks as vectors of Trypanosomatidae with medical or veterinary interest: Insights and implications from a comprehensive systematic review and meta-analysis.",
    "Citations":170,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/tci.2024.3449101",
    "Title":"Multi-Scale Energy (MuSE) framework for inverse problems in imaging.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/v15122318",
    "Title":"Harnessing Attenuation-Related Mutations of Viral Genomes: Development of a Serological Assay to Differentiate between Capripoxvirus-Infected and -Vaccinated Animals.",
    "Citations":52,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1128\/jvi.00723-23",
    "Title":"Constitutive proteins of lumpy skin disease virion assessed by next-generation proteomics.",
    "Citations":100,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0273494",
    "Title":"SILVI, an open-source pipeline for T-cell epitope selection.",
    "Citations":74,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jproteome.1c00244",
    "Title":"Proteomic Analysis of the Promastigote Secretome of Seven Leishmania Species.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/microorganisms9061144",
    "Title":"Revisiting Ehrlichia ruminantium Replication Cycle Using Proteomics: The Host and the Bacterium Perspectives.",
    "Citations":97,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1073\/pnas.2004468117",
    "Title":"Estimation of Rift Valley fever virus spillover to humans during the Mayotte 2018-2019 epidemic.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jclinane.2020.110017",
    "Title":"Perioperative management of patients with hip fractures and COVID-19: A single institution's early experiences.",
    "Citations":5,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1017\/S0950268820000990",
    "Title":"Chaos theory applied to the outbreak of COVID-19: an ancillary approach to decision making in pandemic context.",
    "Citations":25,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ijms21051684",
    "Title":"Noninvasive Biological Samples to Detect and Diagnose Infections due to Trypanosomatidae Parasites: A Systematic Review and Meta-Analysis.",
    "Citations":381,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41541-019-0144-2",
    "Title":"Peptide-based vaccine successfully induces protective immunity against canine visceral leishmaniasis.",
    "Citations":56,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ttbdis.2019.101283",
    "Title":"Tick-borne diseases in the Union of the Comoros are a hindrance to livestock development: Circulation and associated risk factors.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/tbed.13323",
    "Title":"Co-circulation and characterization of novel African arboviruses (genus Ephemerovirus) in cattle, Mayotte island, Indian Ocean, 2017.",
    "Citations":16,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.vpoa.2019.100014",
    "Title":"Trypanosoma vivax infection in sheep: Different patterns of virulence and pathogenicity associated with differentially expressed proteomes.",
    "Citations":99,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-018-29999-y",
    "Title":"Livestock trade network: potential for disease transmission and implications for risk-based surveillance on the island of Mayotte.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fimmu.2018.00778",
    "Title":"Trypanosomatid Infections: How Do Parasites and Their Excreted-Secreted Factors Modulate the Inducible Metabolism of l-Arginine in Macrophages?",
    "Citations":166,
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
