const papers = { 
 "data": [
  {
    "DOI":"10.3389\/fnbeh.2025.1561548",
    "Title":"The impact of online games on creativity and the role of imagination.",
    "Citations":89,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.comppsych.2024.152500",
    "Title":"Going beyond video game consumption when considering Internet Gaming Disorder.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/MOP.0000000000001341",
    "Title":"Caring for screenagers (part 2): a pediatrician's primer on popular games and educational tools.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3233\/SHTI260642",
    "Title":"Developing a Roblox-Based Fire Drill Simulation for Safety Training in Occupational Health Education.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1136\/bmj.s760",
    "Title":"TikTok, Meta, and Roblox deny their products are addictive for children as UK government announces school smartphone ban.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s40359-025-03802-w",
    "Title":"Navigating parental concerns in children's engagement with roblox - a multi-method analysis of emotional and thematic patterns across online communities.",
    "Citations":40,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/MCG.2025.3591956",
    "Title":"Level Generation With Quantum Reservoir Computing.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/66625",
    "Title":"Evaluating the Effectiveness of a Roblox Video Game (Super U Story) in Improving Body Image Among Children and Adolescents in the United States: Randomized Controlled Trial.",
    "Citations":96,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/nyas.15393",
    "Title":"Independently testing prosocial interventions: Methods and recommendations from 31 researchers.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s44184-023-00041-y",
    "Title":"Differential temporal utility of passively sensed smartphone features for depression and anxiety symptom prediction: a longitudinal cohort study.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2215\/CJN.0000000000000398",
    "Title":"Histologic and Clinical Factors Associated with Kidney Outcomes in IgA Vasculitis Nephritis.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3233\/SHTI230646",
    "Title":"Empirical Evaluation of Metaverse Accessibility for People Who Use Alternative Input\/Output Methods.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/S2352-4642(23)00177-3",
    "Title":"Social adolescents, social media, and social emotional development.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.eclinm.2023.102072",
    "Title":"Metaverse-based social skills training programme for children with autism spectrum disorder to improve social interaction ability: an open-label, single-centre, randomised controlled pilot trial.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.brat.2023.104342",
    "Title":"Analyzing text message linguistic features: Do people with depression communicate differently with their close and non-close contacts?",
    "Citations":45,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/mrm.29703",
    "Title":"Motion-compensated low-rank reconstruction for simultaneous structural and functional UTE lung MRI.",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2215\/CJN.0000000000000163",
    "Title":"Probing the Association between Acute Kidney Injury and Cardiovascular Outcomes.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/da.23286",
    "Title":"Prospective associations of text-message-based sentiment with symptoms of depression, generalized anxiety, and social anxiety.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/35960",
    "Title":"Development and Application of a Metaverse-Based Social Skills Training Program for Children With Autism Spectrum Disorder to Improve Social Interaction: Protocol for a Randomized Controlled Trial.",
    "Citations":40,
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
