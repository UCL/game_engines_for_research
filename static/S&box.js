const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c04540",
    "Title":"What's in My Coffee? Do-It-Yourself Testing for Chicory Adulteration Using Particle Trapping in Stencil-Based Paper Devices.",
    "Citations":32,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c04146",
    "Title":"Antioxidant and Anti-inflammatory Activity of Eugenol, Bis-eugenol, and Clove Essential Oil: An In Vitro Study.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c05456",
    "Title":"Environmentally Friendly Nanocoating for Rapid Detection of Nerve Agents on Textile Fabric.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c04551",
    "Title":"Antileishmanial and Antitoxoplasmal Activities of 1,4-Dihydropyridines.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c03536",
    "Title":"Quasiparticle Band Structure, Exciton, and Optical Property in Janus Structures of Transition-Metal Dichalcogenide Monolayers.",
    "Citations":74,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c03018",
    "Title":"Molecular Determinants of Mg(2+)-Mediated Inhibition in RyR1: Insights from Computational Approaches.",
    "Citations":47,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c02227",
    "Title":"Phenotypic Drug Discovery Platform by Quantitative High-Throughput Screening Identifies Antiapoptotic Molecules in a Zebrafish Model of Age-Related Macular Degeneration.",
    "Citations":59,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c02695",
    "Title":"Facile Diastereoselective Synthesis of Dihydroxyadipic Acid and Dihydroxyadipic Dilactone by Catalytic Reduction of Biosourced 3\u2011Hydroxy-2-Pyrone-6-Carboxylic Acid.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c01443",
    "Title":"MCST-AFN: A Multichannel Spatiotemporal Feature Adaptive Fusion Network Framework Based on a Low-Fidelity Molecular Dynamics Model.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c01531",
    "Title":"Early Exposure of an Infantile Rat to Sex-Related Content Induces Precocious Puberty by Activation of Cholinergic Neurons in the Amygdala and KNDy Neurons in the Arcuate Nucleus.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c06137",
    "Title":"Retraction of \"Design, Synthesis, and Biological Evaluation of Notopterol Derivatives as Triple Inhibitors of AChE\/BACE1\/GSK3\u03b2 for the Treatment of Alzheimer's Disease\".",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c03389",
    "Title":"Elastic Constants of Few-Layer \u03b1\u2011Sb(2)O(3) from First-Principles Calculations: Insights into Mechanical Properties.",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c02699",
    "Title":"Naphthylimide Chemosensor Based on Anion-\u03c0 Interactions: A Promising Tool for Environmental Monitoring.",
    "Citations":66,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c04238",
    "Title":"Microfluidic Paper-Based Electrochemical Immunosensor for the Detection of Prostate-Specific Antigen (PSA) Based on Modified Flexible Screen-Printed Carbon Electrodes.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c02315",
    "Title":"Photoactive Hydrogel-Based Therapy for Biofilm Disruption in Chronic Wound Infections.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c04707",
    "Title":"Waste-to-Resource Transformation: Porous Carbon Materials Derived from Distiller's Grains for Efficient Adsorption of Light Gaseous Hydrocarbons.",
    "Citations":45,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c02054",
    "Title":"Effects of Different Pressures and Temperatures on the Gas Adsorption Characteristics of Coking Coal Based on Two-Factor Variance.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c00957",
    "Title":"Advanced Molecular Electron Density Theory Study of the Substituent Effects in Nucleophilic Substitution Reactions.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.4c09933",
    "Title":"A Low Protein Binding Electrospun Membrane Filter for Efficient Biological Media Sterilization.",
    "Citations":35,
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
