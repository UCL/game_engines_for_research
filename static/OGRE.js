const papers = { 
 "data": [
  {
    "DOI":"10.1186\/s12890-026-04320-0",
    "Title":"Incidence and outcomes of patients hospitalised with COPD in Greater Glasgow and Clyde, Scotland 2015-2022: a retrospective cohort study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/nargab\/lqag045",
    "Title":"Nuclear genome profiling of two species of Epidendrum (Orchidaceae): genome size, repeatome, and ploidy.",
    "Citations":86,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1128\/spectrum.02563-25",
    "Title":"Image-based physical characterization of magnetotactic bacteria from an environmental sample.",
    "Citations":74,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-026-39972-9",
    "Title":"A regional-scale mobility model for the early hominin occupation of the Lower Omo Valley (Ethiopia).",
    "Citations":88,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jacadv.2025.102362",
    "Title":"Neutrophil-to-Lymphocyte Ratio and Mortality in Cardiovascular Disease or Cancer: A Population-Based Cohort Study.",
    "Citations":40,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s12021-025-09741-6",
    "Title":"Reducing Inter-Individual Differences in Task fMRI Preprocessing with OGRE (One-Step General Registration and Extraction) Preprocessing.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13104-025-07359-0",
    "Title":"Genomic characterization of repetitive DNA and transposable elements in Dyckia (Pitcairnioideae) species.",
    "Citations":24,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41586-025-08891-6",
    "Title":"Genomic and genetic insights into Mendel's pea genes.",
    "Citations":89,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acsnano.4c12713",
    "Title":"Structure Prediction of Ionic Epitaxial Interfaces with Ogre Demonstrated for Colloidal Heterostructures of Lead Halide Perovskites.",
    "Citations":135,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1590\/1519-6984.284487",
    "Title":"Understanding the habitat selection and natural history of the spider Deinopis cf. cylindracea (Deinopidae).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpls.2024.1419255",
    "Title":"Expansions and contractions of repetitive DNA elements reveal contrasting evolutionary responses to the polyploid genome shock hypothesis in Brachypodium model grasses.",
    "Citations":71,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pgen.1011237",
    "Title":"Dendrite intercalation between epidermal cells tunes nociceptor sensitivity to mechanical stimuli in Drosophila larvae.",
    "Citations":108,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jctc.3c01028",
    "Title":"OGRe: Optimal Grid Refinement Protocol for Accurate Free Energy Surfaces and Its Application in Proton Hopping in Zeolites and 2D COF Stacking.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1101\/2023.09.19.558290",
    "Title":"Reducing individual differences in task fMRI with OGRE (One-step General Registration and Extraction) preprocessing.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1101\/2023.09.14.557275",
    "Title":"Dendrite intercalation between epidermal cells tunes nociceptor sensitivity to mechanical stimuli in Drosophila larvae.",
    "Citations":102,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/gtc.13062",
    "Title":"Daidara: A gigantic Gypsy\u2009LTR retrotransposon lineage in the springtail Allacma fusca genome.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/978-1-0716-3389-2_6",
    "Title":"CicerSpTEdb2.0: An Upgrade of Cicer Species Transposable Elements Database.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12859-023-05422-w",
    "Title":"OGRE: calculate, visualize, and analyze overlap between genomic input regions and public annotations.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.5935\/1518-0557.20230013",
    "Title":"Reproductive plans and knowledge of assisted reproductive techniques among lesbian women: an international survey study.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ueg2.12430",
    "Title":"Young gastroenterologists angle: Friends of the UEG young talent group consensus statement on the structure of young gastroenterology sections.",
    "Citations":5,
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
