const papers = { 
 "data": [
  {
    "DOI":"10.1109\/TNNLS.2025.3567001",
    "Title":"UBG: An Unreal BattleGround Benchmark With Object-Aware Hierarchical Proximal Policy Optimization.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jflm.2025.102865",
    "Title":"Unidentified: Simulation-based education in forensic odontology.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neunet.2025.107207",
    "Title":"U3UNet: An accurate and reliable segmentation model for forest fire monitoring based on UAV vision.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0308848",
    "Title":"DomeVR: Immersive virtual reality for primates and rodents.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1101\/2023.12.08.570879",
    "Title":"Rendering protein structures inside cells at the atomic level with Unreal Engine.",
    "Citations":21,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/46398",
    "Title":"Design and Evaluation of Using Head-Mounted Virtual Reality for Learning Clinical Procedures: Mixed Methods Study.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0231152",
    "Title":"Accuracy and precision of stimulus timing and reaction times with Unreal Engine and SteamVR.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-026-54621-x",
    "Title":"Transformer-based 3D pose estimation pipeline with modular SmoothNet integration for animation generation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1167\/jov.26.4.12",
    "Title":"A model of the Unity High-Definition Render Pipeline, with applications to flat-panel and head-mounted display characterization.",
    "Citations":24,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s41205-026-00313-1",
    "Title":"Application of mixed augmented reality with holographic platform for interactive teaching of veterinary osteology.",
    "Citations":23,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/icvts\/ivag047",
    "Title":"Building an Extracorporeal Membrane Oxygenation Digital Twin Using High-Resolution Patient Data: An artificial intelligence model for virtual reality simulation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0342166",
    "Title":"Research on the influence of virtual reality on muscle fatigue during rowing ergometer exercise - pilot study.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s25247569",
    "Title":"OCC-Based Positioning Method for Autonomous UAV Navigation in GNSS-Denied Environments: An Offshore Wind Farm Simulation Study.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/healthcare13233093",
    "Title":"MetaAcuPoint: MetaHuman-Generated Synthetic Data for Hand Acupoint Localization.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/EMBC58623.2025.11253356",
    "Title":"Integration of a virtual reality system with a FES-assisted trike for rehabilitation of individuals with spinal cord injury.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/jimaging11110395",
    "Title":"Multi-Weather DomainShifter: A Comprehensive Multi-Weather Transfer LLM Agent for Handling Domain Shift in Aerial Image Processing.",
    "Citations":106,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-25617-w",
    "Title":"Construction of UE4 model and virtual experience technology for Qiang ethnic architectural environment based on improved A* algorithm.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/biomimetics10090587",
    "Title":"Graph-Driven Micro-Expression Rendering with Emotionally Diverse Expressions for Lifelike Digital Humans.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s25175569",
    "Title":"SegGen: An Unreal Engine 5 Pipeline for Generating Multimodal Semantic Segmentation Datasets.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s25175318",
    "Title":"Instance Segmentation Method for Insulators in Complex Backgrounds Based on Improved SOLOv2.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1039\/d5nh00330j",
    "Title":"TRIumph in nanotoxicology: simplifying transcriptomics into a single predictive variable.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TPAMI.2025.3604574",
    "Title":"An End-to-End Depth-Based Pipeline for Selfie Image Rectification.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s25165117",
    "Title":"Development of an Interactive Digital Human with Context-Sensitive Facial Expressions.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/frobt.2025.1583479",
    "Title":"AUSPEX: An integrated open-source decision-making framework for UAVs in rescue missions.",
    "Citations":62,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-08224-7",
    "Title":"Research on the improvement of daily living skills of children with autism in virtual campus environments.",
    "Citations":28,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-02356-6",
    "Title":"Improved double DQN with deep reinforcement learning for UAV indoor autonomous obstacle avoidance.",
    "Citations":39,
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
