const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jacasi.2024.08.004",
    "Title":"Expectations for MIRACLE-AF: Ensuring Guideline-Recommended AF Treatment Strategy Is\u00a0More Than Pie in the Sky.",
    "Citations":17,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/WNO.0000000000001601",
    "Title":"Visual Field Defect Patterns Associated With Lesions of the Retrochiasmal Visual Pathway.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jtcvs.2022.04.025",
    "Title":"Commentary: Multidisciplinary management of pediatric endocarditis: No PIE in the sky.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/hsc.13435",
    "Title":"'Grounding a PIE in the sky': Laying empirical foundations for a psychologically informed environment (PIE) to enhance well-being and practice in a homeless organisation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00261-021-02976-2",
    "Title":"The \"pie-in-the-sky\" bladder.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/ckj\/sfaa103",
    "Title":"Opportunities in the cloud or pie in the sky? Current status and future perspectives of telemedicine in nephrology.",
    "Citations":145,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00246-020-02303-4",
    "Title":"Personalized Interventions: A Reality in the Next 20 Years or Pie in the Sky.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.dld.2017.07.011",
    "Title":"A consumer's guide for probiotics: 10 golden rules for a correct use.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.yjmcc.2015.10.023",
    "Title":"Induced pluripotent stem cell-derived cardiac myocytes to understand and test calcium handling: Pie in the sky?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/BRS.0000000000001215",
    "Title":"\"Lovely Pie in the Sky Plans\": A Qualitative Study of Clinicians' Perspectives on Guidelines for Managing Low Back Pain in Primary Care in England.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1055\/s-0032-1321751",
    "Title":"Evidence-based information on mammography screening in Austria--reality or more pie in the sky?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/1062860609333866",
    "Title":"Pie in the sky--or a grassroots call to action?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2217\/17410541.6.1.67",
    "Title":"Pharmacogenomic biomarkers of susceptibility to adverse drug reactions: just around the corner or pie in the sky?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/978-0-387-73960-1_7",
    "Title":"Pertussis immunisation in adolescents and adults.",
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
