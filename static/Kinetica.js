const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/lary.70291",
    "Title":"The Balancing Act: Ergonomic Challenges for Pregnant Microvascular Surgeons in the Operating Room.",
    "Citations":24,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/falgy.2025.1594655",
    "Title":"Fluticasone propionate in chronic rhinosinusitis with nasal polyps (CRSwNP): an artificial intelligence-driven consensus.",
    "Citations":25,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/19386400251330103",
    "Title":"Allograft Reconstruction of a Ruptured Flexor Hallucis Longus Tendon in a Professional Dancer: A Case Report.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1097\/FTD.0000000000001304",
    "Title":"Examining Different Methods to Assess Busulfan Exposure in Pediatric Hematopoietic Stem Cell Transplant Recipients.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.jctc.4c00333",
    "Title":"Predicting Long-Time-Scale Kinetics under Variable Experimental Conditions with Kinetica.jl.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/oto2.126",
    "Title":"Ergonomic Assessment of Septorhinoplasty Maneuvers During Simulated Pregnancy.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.amjsurg.2023.07.028",
    "Title":"Artificial intelligence based real-time video ergonomic assessment and training improves resident ergonomics.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fphar.2022.796336",
    "Title":"Influence of Gender, Body Mass Index, and Age on the Pharmacokinetics of Itraconazole in Healthy Subjects: Non-Compartmental Versus Compartmental Analysis.",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0267791",
    "Title":"Evaluation of pharmacokinetic interactions of amoxicillin with ranitidine in healthy human volunteers of Karachi, Pakistan.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.xphs.2022.02.008",
    "Title":"Pharmacokinetics and Pharmacodynamics of Avian Egg-Yolk Derived Pure Anti-Snake Venom in Healthy and Disease Animal-Model.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/jfbc.13804",
    "Title":"Effects of Citri Reticulatae Pericarpium and grapefruit juice on the pharmacokinetics of omeprazole in rats.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-021-82312-2",
    "Title":"Population pharmacokinetic modeling and clinical application of vancomycin in Chinese patients hospitalized in intensive care units.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0238951",
    "Title":"Pharmacokinetics and bioequivalence assessment of optimized directly compressible Aceclofenac (100 mg) tablet formulation in healthy human subjects.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2147\/DDDT.S233047",
    "Title":"Comparative Assessment of Distribution Characteristics and Ocular Pharmacokinetics of Norvancomycin Between Continuous Topical Ocular Instillation and Hourly Administration of Eye Drop.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s13318-019-00597-1",
    "Title":"Pharmacokinetics of\u00a0Active Ingredients of Salvia miltiorrhiza and Carthamus tinctorius in Compatibility in Normal and Cerebral Ischemia Rats: A Comparative Study.",
    "Citations":63,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma12233938",
    "Title":"Obtaining Alumina from Kaolin Clay via Aluminum Chloride.",
    "Citations":33,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma12193180",
    "Title":"Aluminum-Alumina Composites: Part \u2160: Obtaining and Characterization of Powders.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1556\/1646.10.2018.45",
    "Title":"Development and evaluation of isradipine via rutin-loaded coated solid-lipid nanoparticles.",
    "Citations":32,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2147\/CPAA.S167150",
    "Title":"Pharmacokinetic evaluation of D-ribose after oral and intravenous administration to healthy rabbits.",
    "Citations":18,
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
