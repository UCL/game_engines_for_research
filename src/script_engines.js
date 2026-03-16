// The following is mostly copy and pasted (with thanks) from:
// https://medium.com/@rihab.beji099/transform-json-data-into-dynamic-html-tables-with-ease-c3ad579f6e59
// The functions to sort the table by clicking the header was added by Claude Sonnet 4.6

// Function to generate the table
function generateTable(data) {
  if (!data || data.length === 0) return "No data available.";
  // Create the table element
  const table = document.createElement('table');

  const keys = Object.keys(data[0]);

  // Sort state
  let sortKey = null;
  let sortAsc = true;

  // Generate table headers
  const headerRow = document.createElement('tr');
  keys.forEach(key => {
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
      // Update header indicators
      headerRow.querySelectorAll('th').forEach(h => {
        h.textContent = h.textContent.replace(/ [▲▼]$/, '');
      });
      th.textContent += sortAsc ? ' ▲' : ' ▼';
      renderRows();
    });
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Generate a row element for one data item
  function makeRow(item) {
    const row = document.createElement('tr');
    keys.forEach(key => {
      const td = document.createElement('td');
      if (item[key] === 0){
         td.textContent = item[key]
      }
      else{
         td.textContent = item[key] || ""; // Fill empty fields with blank
      };
      if (key === 'PubMed Link' || key === 'PubMed Game Link'){
        td.innerHTML = "<a href=" + item[key] + " target='_blank'>PubMed</a>";
      };
      if (key === 'Name'){
	if (item['PubMed game citations'] != '-' && item['PubMed game citations'] > 0){
          td.innerHTML = "<a href=" + item[key].split(" ").join("_") + ".html>" + item[key] + "</a>";
	};
      };
      row.appendChild(td);
    });
    return row;
  }

  // Render (or re-render) rows in sorted order
  function renderRows() {
    // Remove existing data rows (keep header)
    while (table.rows.length > 1) table.deleteRow(1);

    const sorted = [...data].sort((a, b) => {
      if (!sortKey) return 0;
      let va = a[sortKey];
      let vb = b[sortKey];
      // Treat "-" as greater than any number so it sinks to the bottom
      const aNum = (va !== '-' && va !== '' && va !== null) ? Number(va) : null;
      const bNum = (vb !== '-' && vb !== '' && vb !== null) ? Number(vb) : null;
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
const table = generateTable(game_engines.data);
if (table) container.appendChild(table);
