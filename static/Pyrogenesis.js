const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/cplu.202400648",
    "Title":"Solvent Effect on Antimicrobial Hydrophilic Xerogel Coating of Medicinal Leathers in Simulated Industrial Finishing Process.",
    "Citations":52,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/gels9090685",
    "Title":"Hybrid Silica Xerogel and Titania\/Silica Xerogel Dispersions Reinforcing Hydrophilicity and Antimicrobial Resistance of Leathers.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/nano13111794",
    "Title":"Comparative Study of the U(VI) Adsorption by Hybrid Silica-Hyperbranched Poly(ethylene imine) Nanoparticles and Xerogels.",
    "Citations":140,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/pharmaceutics15020524",
    "Title":"Dendritic Polymers in Tissue Engineering: Contributions of PAMAM, PPI PEG and PEI to Injury Restoration and Bioactive Scaffold Evolution.",
    "Citations":294,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/plants11243478",
    "Title":"Macrocharcoal Signals in Histosols Reveal Wildfire History of Vast Western Siberian Forest-Peatland Complexes.",
    "Citations":84,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/nano12030445",
    "Title":"Catalytic Neutralization of Water Pollutants Mediated by Dendritic Polymers.",
    "Citations":199,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/nano11010019",
    "Title":"Dendritic Polymers as Promising Additives for the Manufacturing of Hybrid Organoceramic Nanocomposites with Ameliorated Properties Suitable for an Extensive Diversity of Applications.",
    "Citations":179,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00705-016-3166-3",
    "Title":"Broad-spectrum antiviral properties of andrographolide.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3109\/08958378.2016.1150368",
    "Title":"Effects of cigarette smoke, cessation and switching to a candidate modified risk tobacco product on the liver in Apoe -\/- mice--a systems toxicology analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/mi.2013.29",
    "Title":"Contribution of epithelial innate immunity to systemic protection afforded by prolyl hydroxylase inhibition in murine colitis.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/c2em30650f",
    "Title":"Contamination, source, and input route of polycyclic aromatic hydrocarbons in historic wastewater-irrigated agricultural soils.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/mrm.21531",
    "Title":"Interleukin-1 exacerbates focal cerebral ischemia and reduces ischemic brain temperature in the rat.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1191\/096032700701546514",
    "Title":"The composition of cigarette smoke: a retrospective, with emphasis on polycyclic components.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1113\/jphysiol.1983.sp014705",
    "Title":"Intraventricular injections of drugs which inhibit phospholipase A2 suppress fever in rabbits.",
    "Citations":31,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1113\/jphysiol.1982.sp014048",
    "Title":"Inhibition, by trichothecene antibiotics, of brain protein synthesis and fever in rabbits.",
    "Citations":22,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1113\/jphysiol.1980.sp013367",
    "Title":"Suppression of fever in rabbits by a protein synthesis inhibitor, anisomycin.",
    "Citations":8,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1152\/jappl.1976.40.1.35",
    "Title":"Effect of propranolol on endotoxin-induced pyrogenesis in newborn and adult guinea pigs.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1152\/jappl.1976.40.1.29",
    "Title":"Fever: exchange of shivering by nonshivering pyrogenesis in cold-acclimated guinea pigs.",
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
