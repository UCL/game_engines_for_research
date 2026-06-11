const papers = { 
 "data": [
  {
    "DOI":"10.2967\/jnumed.125.270179",
    "Title":"Embracing Flow: Exploring Panta Rhei in the Context of Nuclear Medicine.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/healthcare13060586",
    "Title":"Indigenous Epistemological Frameworks and Evidence-Informed Approaches to Consciousness and Body Representations in Osteopathic Care: A Call for Academic Engagement.",
    "Citations":56,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1024\/0301-1526\/a001181",
    "Title":"Ta panta rhei in vascular medicine.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1055\/a-2374-1418",
    "Title":"[Panta rhei - Everything Flows].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ijms25010295",
    "Title":"Dynamic Structures of Bioactive Proteins as Determined by Nuclear Magnetic Resonance.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.14309\/ajg.0000000000002550",
    "Title":"Panta Rhei: An Unusual Biliary Stent in the Common Bile Duct.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1183\/13993003.02490-2022",
    "Title":"Panta rhei (\u03a0\u03ac\u03bd\u03c4\u03b1 \u1fe5\u03b5\u1fd6), or everything flows with long COVID.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1055\/a-1644-3851",
    "Title":"\u201ePanta rhei - alles flie\u00dft\u201c.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/febs.16133",
    "Title":"Calcium signaling in cancer progression and therapy.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s21041083",
    "Title":"Protocol Development for Point Clouds, Triangulated Meshes and Parametric Model Acquisition and Integration in an HBIM Workflow for Change Control and Management in a UNESCO's World Heritage Site.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10029-020-02331-2",
    "Title":"Hernia research from bench to bed side or \"panta rhei in troubled times\".",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00345-020-03519-y",
    "Title":"TURPxit or not: the guidelines perspective-Panta Rhei.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.pharmthera.2020.107713",
    "Title":"Two-pore and TRPML cation channels: Regulators of phagocytosis, autophagy and lysosomal exocytosis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ccd.28918",
    "Title":"Panta rhei, also drug eluting stent technology.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00415-020-09764-w",
    "Title":"Neurocognition after prenatal levetiracetam, lamotrigine, carbamazepine or valproate exposure.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.5114\/reum.2019.86421",
    "Title":"Panta rhei in diagnosing rheumatic diseases.",
    "Citations":8,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/epi.15968",
    "Title":"Behavioral problems in children of mothers with epilepsy prenatally exposed to valproate, carbamazepine, lamotrigine, or levetiracetam monotherapy.",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1159\/000492410",
    "Title":"Panta Rhei: Neovascularization, Angiogenesis and Nutritive Perfusion in Wound Healing.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/papt.12175",
    "Title":"Mindfulness-based weekend retreats for people bereaved by suicide (Panta Rhei): A pilot feasibility study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10048-017-0517-5",
    "Title":"Male patients affected by mosaic PCDH19 mutations: five new cases.",
    "Citations":30,
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
