const papers = { 
 "data": [
  {
    "DOI":"10.1530\/ERC-25-0309",
    "Title":"Adrenal-derived factors drive progression of sclerotic prostate cancer in bone.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jcte.2026.100440",
    "Title":"Body weight and waist circumference are differentially associated with the response to L-thyroxine treatment in primary hypothyroidism.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ph19040555",
    "Title":"A Standard Herbal Formula, CGAC, Attenuates Bone Loss by Normalizing Low-Bone Turnover Stagnation in an Orchiectomy-Induced Mouse Model.",
    "Citations":40,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/antiox15040479",
    "Title":"Impact of Orchiectomy on Oxidative Stress-Induced Neurodegeneration in the Male Rat Retina: A Proteomic Analysis.",
    "Citations":97,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/08977151261438296",
    "Title":"Cerebral Autoregulation in Severe Traumatic Brain Injury: Source of Index, Timing, and Relationship to Spreading Depolarization.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1253\/circj.CJ-25-1182",
    "Title":"Two Faces of Cardiovascular Actions of Testosterone Dependent on the Presence or Absence of Nitric Oxide Synthases in Mice.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/jbmrpl\/ziag032",
    "Title":"The orally available SIK2\/SIK3 inhibitor SK-124 increases bone mass in hypogonadal male mice.",
    "Citations":58,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fimmu.2026.1734587",
    "Title":"Host biological sex directs immune control of the Plasmodium parasite liver stage in mice.",
    "Citations":86,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13293-026-00858-0",
    "Title":"Social defeat stress responses in the stress alternative model are dependent on sex and anterior basolateral amygdala orexin 2 receptors.",
    "Citations":110,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.optom.2026.100611",
    "Title":"Optometrist-guided versus self-driven subjective refraction using tunable optics: quantifying the professional's impact.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.bbr.2025.116010",
    "Title":"Differential modulation of contextual fear conditioning by orexin receptors in the dorsal hippocampus.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/sleep\/zsaf368",
    "Title":"Comparative distribution of the hypothalamic neurons activated during wakefulness and paradoxical (REM) sleep using male TRAP2-red mice: contribution of orexin, MCH, Lhx6, and a new marker Meis2.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.cub.2025.10.083",
    "Title":"Orexinergic lateral hypothalamus-anterior cingulate cortex circuit alleviates chronic stress-induced anxiety-like behaviors.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fbioe.2025.1684162",
    "Title":"Pulsed electromagnetic field prevents lumbar bone loss in orchiectomy mice without altering systemic iron metabolism.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.biopsych.2025.11.004",
    "Title":"Functional Plasticity of Orexin\/Hypocretin Neurons Balances Stress States.",
    "Citations":150,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1530\/JOE-25-0315",
    "Title":"Estrogenic prevention of luteinizing hormone releasing hormone agonist-induced bone loss.",
    "Citations":47,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41597-025-06047-9",
    "Title":"A large, paired dataset of robotic and handheld lumbar spine ultrasound with ground-truth CT benchmarking.",
    "Citations":90,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.21037\/tau-2025-311",
    "Title":"Zhenyuan, a kidney- and spleen-tonifying Chinese medicine compound granule, improves erectile dysfunction and fatigue in orchiectomized rats.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neuropharm.2025.110703",
    "Title":"Central and peripheral monoamine changes in a rat model of Gaming Disorder.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fnins.2025.1590556",
    "Title":"The role of orexin and MCH neurons in the hypothalamus in sleep-wake regulation and learning-forgetting balance.",
    "Citations":140,
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
