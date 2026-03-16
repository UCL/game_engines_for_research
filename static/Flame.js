const papers = { 
 "data": [
  {
    "DOI":"10.1021\/acs.energyfuels.5c05727",
    "Title":"Fuel Effects on Aviation Engine Emissions: A Chemical Reactor Network Modeling Study.",
    "Citations":80,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d5ra07016c",
    "Title":"A review on multifunctional applications of MgO nanostructures: from material science to environmental and agricultural innovations.",
    "Citations":183,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.saa.2026.127688",
    "Title":"Spectrophotometric determination of tin in canned fruit samples using sappan wood extract as a natural reagent.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ecoenv.2026.119986",
    "Title":"Deriving toxicity thresholds for hexabromocyclododecanes by cross-species and cross-route extrapolations on the basis of a human multiroute physiologically based toxicokinetic model.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jhazmat.2026.141669",
    "Title":"Emerging organophosphate flame retardant CDP causes neovascular macular degeneration-like alterations of outer blood-retinal barrier via paracrine VEGFA signaling.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s40820-026-02128-5",
    "Title":"Self-Sensing NiFe@N-doped Carbon Aerogel: Integrating Excellent Radar Stealth, Inherent Structural Health Monitoring, Thermal Management, and Flame Retardancy.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.est.5c15217",
    "Title":"Nationwide Indoor-Outdoor Exchange and Health Risks of Organophosphate Esters in China.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/smll.202511249",
    "Title":"Design of Phosphate-Based Gel Electrolytes Toward Stabilizing the Lithium Metal Battery Interface.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/15376516.2026.2634933",
    "Title":"Integrating NHANES and network toxicology to assess the impact of organophosphate flame retardants on cardiovascular disease.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.envres.2026.124229",
    "Title":"Gestational exposure to organophosphate ester flame retardants and child growth in weight, height, and body mass index at age 2-10 years: the Environmental influences on Child Health Outcomes Program.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.est.5c13234",
    "Title":"Prenatal Exposure to Mixtures of Nonpersistent Endocrine-Disrupting Chemicals and Angiogenic Biomarkers, Placental Function, and Fetal Growth.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsomega.5c10518",
    "Title":"Research Progress on the Stable Operation of Pulverized Coal-Fired Boilers under Low-Load Conditions.",
    "Citations":58,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.isci.2026.115001",
    "Title":"Evaluation of heavy metal concentration in drinking water, feed, and milk of dairy cows in Kombolcha metropolitan town, Ethiopia.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.est.5c14706",
    "Title":"Mechanistic Insights into Anaerobic Biotransformation of Tris(2-Chloroethyl) Phosphate by Compound-Specific Stable Isotope Analysis and Quantum Chemical Calculations.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.yebeh.2026.110968",
    "Title":"Burn injuries in patients with epilepsy: A narrative review.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.envres.2026.124227",
    "Title":"Unveiling the Modulatory Role of Microplastics in the Release of Chlorinated Organophosphorus Flame Retardants from Landfill Soils.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/00494755261428923",
    "Title":"Microbiological profile of bloodstream infections in burn patients admitted to a tertiary care hospital: A descriptive cross-sectional study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10456-026-10039-7",
    "Title":"Progressive endothelial coverage enhances hemocompatibility and prevents calcification in bioprosthetic valve tissue.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.burns.2026.107945",
    "Title":"Burning questions: A 10-year retrospective study of fatal burn cases in the Eastern Metropolitan area of Cape Town, South Africa.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ijbiomac.2026.151187",
    "Title":"Ionic liquid-enabled hydrogen-bonding networks in corn stalk-derived cellulose\/poly(butylene succinate) composite films for sustainable flexible sensors.",
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
