const papers = { 
 "data": [
  {
    "DOI":"10.1016\/j.atssr.2025.10.002",
    "Title":"Transoral Circular Stapler for Cervical Anastomosis During Esophagectomy.",
    "Citations":4,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.cgd.6c00376",
    "Title":"Compression of Ribavirin to 35 GPa.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S1600577526004832",
    "Title":"High\/low temperature setups for submillimetric samples under various extreme conditions at the AILES beamline.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/advs.75887",
    "Title":"Pressure-Driven Phase Transition Unlocking Unique Eu(2+) Luminescence in Li(2)SrSiO(4) for Optical Sensing and White-LEDs.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-026-54731-6",
    "Title":"Cold SiO(2)-rich slabs reaching the CMB revealed by the seifertite phase boundary.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jcim.5c02461",
    "Title":"A(C)VPpred: Transfer Learning-Enhanced Prediction of Antiviral and Anticoronavirus Peptides from Sequence Data.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10329-026-01264-1",
    "Title":"New evidence of baobab (Adansonia digitata) pounding by western chimpanzees (Pan troglodytes verus).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/molecules31101631",
    "Title":"Hydrogen-Disordering Transformation and High-Temperature and High-Pressure Phase Diagram of Brucite: Insights from Raman Spectroscopy and Electrical Conductivity.",
    "Citations":45,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/pro.70645",
    "Title":"Dual targeting of inhibitory EGFR epitopes with synthetic antibodies in therapeutic-resistant cancers.",
    "Citations":77,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.6c02580",
    "Title":"Twinning-Dominated Plasticity and Structural Stability of NiCoCrX(0.1) (X= Mo, Ti) MEA under 52 GPa Pressure.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41467-026-72896-6",
    "Title":"Opposing transient and equilibrium effective radiative forcing from aerosol-cloud interactions.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1107\/S205252062600291X",
    "Title":"Form (III) of artemisinin: discovery and crystallographic characterization of a new high-pressure polymorph.",
    "Citations":63,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0317317",
    "Title":"Hyperspectral radiance mapping and chromatic correction for temperature measurement in laser-heated diamond anvil cells.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12687-026-00891-x",
    "Title":"How parents and community care professionals use a genetic diagnosis to inform care: expanding the concept of utility.",
    "Citations":19,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s42004-026-02041-3",
    "Title":"Tetrahedral frameworks and chains in oP32 CaC(2)O(5) and mP80 CaCO(3) calcium carbonates above 100\u2009GPa.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1126\/sciadv.aea8372",
    "Title":"Formation of calcium silicate perovskite above the core-mantle boundary during solidification of Earth's magma ocean.",
    "Citations":70,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0319399",
    "Title":"Thermal management and design optimization for ultrahigh-temperature-pressure experiments in multi-anvil presses.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0331185",
    "Title":"High-pressure laser-heating induced formation and equation of state of benzene-derived carbon nanothreads.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0323039",
    "Title":"High-pressure generation above 45\u00a0GPa over a 10\u00a0mm3 volume with a multi-anvil press.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.saa.2026.127886",
    "Title":"Time-resolved Raman spectroscopy study of rapid compressed \u03b2-HMX (octahydro-1,3,5,7-tetranitro-1,3,5,7-tetrazocine) using a dynamic diamond anvil cell.",
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
