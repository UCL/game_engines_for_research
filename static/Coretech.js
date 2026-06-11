const papers = { 
 "data": [
  {
    "DOI":"10.1021\/acs.nanolett.6c01310",
    "Title":"Merging Biological and Synthetic Nanoplatforms: Magnetic Engineering of Extracellular Vesicles via Liposome Fusion.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsnano.5c18264",
    "Title":"Identifying and Overcoming the Polaron-Induced Mobility Limit in a 2D Germanium Halide Perovskite.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12885-026-15680-5",
    "Title":"SCANDARE: an institutional dynamic prospective interventional biobanking study.",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.lanepe.2025.101524",
    "Title":"Management and survival of patients with cancer of unknown primary discussed by a French national multidisciplinary tumour board: a retrospective analysis.",
    "Citations":40,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/nar\/gkaf1200",
    "Title":"Chemical inhibition of exon junction complex assembly impairs mRNA localization and neural stem cells ciliogenesis.",
    "Citations":83,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/polym17212823",
    "Title":"Study on Cooling Layer and Thin Insert Thickness Between Coolant and Cavity for Injection Mold with Bridge-Type Composite Product.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.molmet.2025.102262",
    "Title":"TERT expression attenuates metabolic disorders in obese mice by promoting adipose stem and progenitor cell expansion and differentiation.",
    "Citations":78,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1155\/2024\/5556537",
    "Title":"Motion Accuracy of Pneumatic Stepper Motor-Driven Robotic System Developed for MRI-Guided High-Intensity Focused Ultrasound Treatment of Prostate Disease.",
    "Citations":22,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12015-024-10796-2",
    "Title":"Cirrhotic Patients Exhibit Remarkable Vascular Regenerative Profile One Month after Liver Transplantation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/jex2.115",
    "Title":"Cell culture-derived extracellular vesicles: Considerations for reporting cell culturing parameters.",
    "Citations":315,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12015-024-10727-1",
    "Title":"The Onset of Intussusceptive Angiogenesis in COVID-19 Patients Might Come from the Mobilization of Stem Cell Sub-Populations Expressing the Hemangioblast Marker CD143.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/adma.202307850",
    "Title":"Dislodgement of Hydrogen Bubbles in Microchannels with Embedded Pillars: An Analytical, Experimental, and Numerical Study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fcvm.2023.1206279",
    "Title":"Therapeutic potential of extracellular vesicles derived from cardiac progenitor cells in rodent models of chemotherapy-induced cardiomyopathy.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41586-023-05899-8",
    "Title":"A LaCl(3)-based lithium superionic conductor compatible with lithium metal.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41467-023-36977-0",
    "Title":"Sustainable methane utilization technology via photocatalytic halogenation with alkali halides.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/polym15010129",
    "Title":"Reinforcing a Thermoplastic Starch\/Poly(butylene adipate-co-terephthalate) Composite Foam with Polyethylene Glycol under Supercritical Carbon Dioxide.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/adma.202209556",
    "Title":"Suppressing the Dynamic Oxygen Evolution of Sodium Layered Cathodes through Synergistic Surface Dielectric Polarization and Bulk Site-Selective Co-Doping.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/polym14214747",
    "Title":"Investigation of Parameter Sensitivity and the Physical Mechanism for the Formation of a Core-Skin-Core (CSC) Structure in Two-Stage Co-Injection Molding.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma15155376",
    "Title":"A Distance-Field-Based Pipe-Routing Method.",
    "Citations":25,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/polym14132652",
    "Title":"Sensor Fusion for Simultaneous Estimation of In-Plane Permeability and Porosity of Fiber Reinforcement in Resin Transfer Molding.",
    "Citations":25,
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
