const papers = { 
 "data": [
  {
    "DOI":"10.1186\/s40359-025-03154-5",
    "Title":"The impact of game character identification on otome game players' mate selection criteria.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s40359-025-02865-z",
    "Title":"The impact of a love language game intervention on relationship satisfaction among Chinese couples in China and Malaysia: examining the role of individualism-collectivism.",
    "Citations":33,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02640414.2025.2526290",
    "Title":"Barriers and facilitators to participation in women's and girls' rugby: A mixed-methods study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/sports13060172",
    "Title":"A Multi-Stakeholder Evaluation of a Walking Football Group for People with Dementia Developed in Partnership with a Premier League Club.",
    "Citations":69,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1556\/2006.2025.00044",
    "Title":"Love at first glance: Imbalanced processing to\u00a0gaming and natural rewards in internet gaming\u00a0disorder.",
    "Citations":68,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10508-025-03082-w",
    "Title":"Feeling Love and Lust: An Examination of Individualistic and Mutualistic Erotic Talk.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/bs14100959",
    "Title":"Do Chinese Preschool Children Love Their Motherland? Evidence from the Game-Based Assessment.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fsoc.2024.1412154",
    "Title":"Beyond the Iron Throne: exploring the representation of homosexuality in the series Game of Thrones.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/SLA.0000000000006414",
    "Title":"For the Love of the Game: Calculating the Premium Associated With Academic Surgical Practice.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0288330",
    "Title":"Are you thinking what I'm thinking? Perspective-taking in a language game.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1136\/bmjopen-2023-077022",
    "Title":"Specialist healthcare services for concussion\/mild traumatic brain injury in England: a consensus statement using modified Delphi methodology.",
    "Citations":77,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3897\/zookeys.1183.111330",
    "Title":"\ufeffName game conundrum: identical specific epithets in Microgastrinae (Hymenoptera, Braconidae).",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.actpsy.2023.104049",
    "Title":"Problematic online anime (animation) use: It's relationship with viewers' satisfaction with life, emotions, and emotion regulation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/bs13090775",
    "Title":"The Relationship between Technology Addiction and Attitude toward Reading: An Investigation on Pre-Service Teachers.",
    "Citations":71,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/tops.12683",
    "Title":"Human Performance in Competitive and Collaborative Human-Machine Teams.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/bs13060494",
    "Title":"A Face to Love or Trust.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/19322968231179730",
    "Title":"Uses and Considerations for Cinematic Virtual Reality in Health Care.",
    "Citations":16,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/brainsci13050833",
    "Title":"Increased Interpersonal Brain Synchronization in Romantic Couples Is Associated with Higher Honesty: An fNIRS Hyperscanning Study.",
    "Citations":93,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/19322968231171136",
    "Title":"Feasibility of a Cinematic-Virtual Reality Training Program for Health Professional Students: A Single-Arm Pre-Post Study.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/19322968231171586",
    "Title":"Cinematic Virtual Reality for Educating Health Care Providers About Type 2 Diabetes, Disability, and Elder Abuse and Neglect: A Pilot Study.",
    "Citations":32,
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
