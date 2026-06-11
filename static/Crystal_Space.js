const papers = { 
 "data": [
  {
    "DOI":"10.1021\/acs.inorgchem.6c00707",
    "Title":"Halogen Substitution Dual Regulation of Structure and Symmetry in an Edge-Shared ABX(3) Hybrid Ferroelectric.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.inorgchem.5c04117",
    "Title":"Redox-Active Ligand Platforms for Spin-Crossover Materials: Influence of Halogen Substitution in Pt(II) and Ni(II) Hofmann-Type Frameworks.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d5dt01632k",
    "Title":"RCuMg(2) compounds (R = Dy-Tm, Lu): crystal structure, chemical bonding and magnetic properties.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.scib.2025.09.035",
    "Title":"Space group informed transformer for crystalline materials generation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jpclett.5c02690",
    "Title":"Modulating Nonlinear Optical Properties of (1R,2R)-DACHGeI(4) through Ce(3+) Doping.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/jacs.5c02663",
    "Title":"Triclinic Liquid Crystal of Counter-Rotating Squashed Double Helices in a Side-Chain Polymer.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S2053273324009008",
    "Title":"Stability of inorganic ionic structures: the uniformity approach.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1103\/PhysRevLett.133.137001",
    "Title":"Molded, Solid-State Biomolecular Assemblies with Programmable Electromechanical Properties.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.inorgchem.4c03033",
    "Title":"Topology of Intermetallic Crystals: Classification, Uniformity, and Transitions.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d4dt02095b",
    "Title":"Crystal structures, bonding and electronic structures of \u03b1- and \u03b2-Ir(2)B(3-x) compounds.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jpca.4c02516",
    "Title":"Rewc-GNN Algorithm for the Property Prediction of Large-Scale Crystals.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/cphc.202400067",
    "Title":"A Set of New Promising Solid Chalcogenides for Na-Ion Batteries: Yield from the Crystal Chemical, Monte-Carlo and Quantum-Chemical Calculations.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41467-023-39819-1",
    "Title":"Atomic structure of a nudivirus occlusion body protein determined from a 70-year-old crystal sample.",
    "Citations":47,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41563-023-01523-2",
    "Title":"Covalent organic framework atropisomers with multiple gas-triggered structural flexibilities.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S2414314623000251",
    "Title":"Methyl 1-[(6-meth-oxy-5-methyl-pyrimidin-4-yl)meth-yl]-1H-benzo[d]imidazole-7-carboxyl-ate: a combined X-ray and DFT study.",
    "Citations":25,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.fochms.2022.100146",
    "Title":"Pea and lentil 7S globulin crystal structures with comparative immunoglobulin epitope mapping.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00894-022-05200-0",
    "Title":"Theoretical simulation study on crystal property and hygroscopicity of ADN doping with nitramine explosives (RDX, HMX, and CL-20).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.inorgchem.1c01168",
    "Title":"Unpredicted but It Exists: Trigonal Sc(2)Ru with a Significant Metal-Metal Charge Transfer.",
    "Citations":21,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1098\/rsos.201987",
    "Title":"A novel sodium-fluorescent crystal.",
    "Citations":47,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jpca.1c00903",
    "Title":"Crystal Structure Prediction for Benzene Using Basin-Hopping Global Optimization.",
    "Citations":73,
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
