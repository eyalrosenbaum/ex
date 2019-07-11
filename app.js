const COLS = 27;
const ROWS = 100;

function createFirstRow() {
    /*first row is indexes*/
  const firstRow = document.createElement("div");
  let firstRowCells = new Array(COLS);
  firstRowCells = firstRowCells.map((cell, index) => {
    const element = document.createElement("div");
    const text = document.createTextNode(!index ? "" : String.fromCharCode(64 + index));
    element.appendChild(text);
    firstRow.appendChild(element);
  });
  return firstRow;
}

function createOrdinaryRow(index) {
  const row = document.createElement("div");
  setAttributes(row, {"class": "row", "id":`row_${index}`});
  const firstCell = document.createElement("div");
  const firstCellText = document.createTextNode(`${index}`);
  firstCell.appendChild(firstCellText);
  setAttributes(firstCell, {"class": "first-cell", "id":`cell_${index}_0`});
  row.appendChild(firstCell);
  for (let i=1;i<=COLS;i++) {
    const cell = document.createElement("input");
    setAttributes(cell, {"class": "cell", "id":`cell_${index}_${i}`, "type":"text"});
    row.appendChild(cell);
  }
  return row;
}

function buildSpreadSheet() {
  const body = document.querySelector("body");
  const spreadSheet = document.createElement("div");
  spreadSheet.setAttribute("id", "spreadsheet");
  spreadSheet.appendChild(createFirstRow());
  for(let i=1;o<ROWS;i++){
    const row = createOrdinaryRow(i);
    spreadSheet.appendChild(row);
  }
  body.appendChild(spreadSheet);
}

document.addEventListener('DOMContentLoaded', (event) => {
  const spreadsheet = new Spreadsheet();
  buildSpreadSheet();

})