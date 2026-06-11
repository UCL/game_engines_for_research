const papers = { 
 "data": [
  {
    "DOI":"10.1186\/s13054-026-05871-8",
    "Title":"Attenuated hemodynamic response to adjunct vasopressin in obese septic shock patients: a physiological or dose-dependent effect?",
    "Citations":11,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41419-025-08143-5",
    "Title":"Orphan nuclear receptor 4A1 (NR4A1) and NR4A2 are endogenous regulators of CD71 and their ligands induce ferroptosis in breast cancer.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13054-025-05710-2",
    "Title":"Towards optimised nutrition therapy after critical illness: a position statement and research framework by the global research initiative on post-intensive care nutrition (GRIP) consortium.",
    "Citations":120,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.clnu.2025.09.011",
    "Title":"The impact of an individually tailored, stepwise nutrition protocol on energy and protein adequacy in post-ICU patients: The PROSPECT-II observational cohort study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1210\/endocr\/bqaf144",
    "Title":"Dual Targeting of Orphan Nuclear Receptors NR4A1 and NR4A2 for Nonhormonal Endometriosis Therapy.",
    "Citations":62,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10653-025-02728-x",
    "Title":"Assessment of trace element contamination and human health risk in unrefined sea salt from Chattogram and Cox's Bazar, Bangladesh.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ijms26083909",
    "Title":"Expression of Prooncogenic Nuclear Receptor 4A (NR4A)-Regulated Genes \u03b21-Integrin and G9a Inhibited by Dual NR4A1\/2 Ligands.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.21203\/rs.3.rs-6214709\/v1",
    "Title":"Orphan Nuclear Receptor 4A1 (NR4A1) and NR4A2are Endogenous Regulators of CD71 and TheirLigands Induce Ferroptosis in Breast Cancer.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13613-025-01472-w",
    "Title":"Hemodynamic effects of adjunct arginine vasopressin to norepinephrine in septic shock: insights from a prospective multicenter registry study.",
    "Citations":45,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.clnesp.2025.03.042",
    "Title":"Urea-to-creatinine ratio as a biomarker for clinical outcome and response to nutritional support in non-critically ill patients: A secondary analysis of a randomized controlled trial.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.molpha.2024.100009",
    "Title":"Dual nuclear receptor 4A1 (NR4A1\/NR4A2) ligands inhibit glioblastoma growth and target TWIST1.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.ccc.2024.09.003",
    "Title":"Protein Delivery in Critical Care- What Have Recent Trials Shown Us?",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13054-024-05153-1",
    "Title":"How to define parenteral nutrition.",
    "Citations":7,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/jpen.2700",
    "Title":"What do we know about micronutrients in critically ill patients? A narrative review.",
    "Citations":263,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/burnst\/tkae027",
    "Title":"Early protein delivery in critically ill patients with acute kidney injury: post hoc analysis of a multicenter cluster-randomized controlled trial.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13054-024-05001-2",
    "Title":"Vitamin K: a potential missing link in critical illness-a scoping review.",
    "Citations":126,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/biom14030284",
    "Title":"Bis-Indole Derivatives as Dual Nuclear Receptor 4A1 (NR4A1) and NR4A2 Ligands.",
    "Citations":51,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13054-023-04783-1",
    "Title":"The effects of higher versus lower protein delivery in critically ill patients: an updated systematic review and meta-analysis of randomized controlled trials with trial sequential analysis.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.clnu.2023.10.029",
    "Title":"Association between first-week propofol administration and long-term outcomes of critically ill mechanically ventilated patients: A retrospective cohort study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jcrc.2023.154361",
    "Title":"Resting energy expenditure measured by indirect calorimetry in mechanically ventilated patients during ICU stay and post-ICU hospitalization: A prospective observational study.",
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
