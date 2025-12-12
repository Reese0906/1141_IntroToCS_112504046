let rowCount = 0;

document.getElementById("submitBtn").addEventListener("click", function () {
  const math = Number(document.getElementById("mathInput").value);
  const eng = Number(document.getElementById("engInput").value);

  if (isNaN(math) || isNaN(eng) || document.getElementById("mathInput").value === "" || document.getElementById("engInput").value === "") {
    alert("Please enter valid numbers!");
    return;
  }

  rowCount++;

  const avg = ((math + eng) / 2).toFixed(2);

  const tableBody = document.getElementById("tableBody");

  const newRow = `
    <tr>
      <td>${rowCount}</td>
      <td class="mathCol">${math}</td>
      <td class="engCol">${eng}</td>
      <td>${avg}</td>
    </tr>
  `;

  tableBody.insertAdjacentHTML("beforeend", newRow);

  updateColumnAverages();

  document.getElementById("mathInput").value = "";
  document.getElementById("engInput").value = "";
});


function updateColumnAverages() {

  // Math 平均
  const mathCells = document.querySelectorAll(".mathCol");
  let mathSum = 0;
  mathCells.forEach(cell => mathSum += Number(cell.textContent));
  const mathAvg = mathCells.length ? (mathSum / mathCells.length).toFixed(2) : "0.00";
  document.getElementById("mathAvg").textContent = mathAvg;

  // English 平均
  const engCells = document.querySelectorAll(".engCol");
  let engSum = 0;
  engCells.forEach(cell => engSum += Number(cell.textContent));
  const engAvg = engCells.length ? (engSum / engCells.length).toFixed(2) : "0.00";
  document.getElementById("engAvg").textContent = engAvg;

  // Overall 平均
  const overall = ((Number(mathAvg) + Number(engAvg)) / 2).toFixed(2);
  document.getElementById("overallAvg").textContent = overall;
}
