const COLS = 27;
const ROWS = 100;

function createFirstRow() {
    /*first row is indexes*/
  const firstRow = document.createElement("div");
  setAttributes(firstRow, {"class": "row", "id":`row_0`});
  for (let i = 0;i<COLS;i++) {
    const element = document.createElement("div");
    setAttributes(element, {"class": "first-cell", "id":`cell_0_${i}`});
    const text = document.createTextNode(!i ? "" : String.fromCharCode(64 + i));
    element.appendChild(text);
    firstRow.appendChild(element);
  };
  return firstRow;
}

function updateCell(event, spreadsheetRow, index, inputField){
  try{
    spreadsheetRow[index].value = event.target.value;
    inputField.value = spreadsheetRow[index].value;
    inputField.classList.remove("err");
  } catch(err) {
    alert("Error - not valid expression!");
    inputField.value = "ERROR";
    inputField.classList.add("err");
  }
}

function createOrdinaryRow(index, spreadsheetRow) {
  const row = document.createElement("div");
  setAttributes(row, {"class": "row", "id":`row_${index}`});
  const firstCell = document.createElement("div");
  const firstCellText = document.createTextNode(`${index}`);
  firstCell.appendChild(firstCellText);
  setAttributes(firstCell, {"class": "first-cell", "id":`cell_${index}_0`});
  row.appendChild(firstCell);
  for (let i=1;i<COLS;i++) {
    const cell = document.createElement("input");
    setAttributes(cell, {"class": "cell", "id":`cell_${index}_${i}`, "type":"text"});
    cell.addEventListener("change", (e) => updateCell(e,spreadsheetRow,i,cell));
    row.appendChild(cell);
  }
  return row;
}

function buildSpreadSheet(spreadsheet) {
  const body = document.querySelector("body");
  const spreadSheet = document.createElement("div");
  spreadSheet.setAttribute("id", "spreadsheet");
  spreadSheet.appendChild(createFirstRow());
  for(let i=1;i<ROWS;i++){
    const row = createOrdinaryRow(i, spreadsheet.cells[i]);
    spreadSheet.appendChild(row);
  }
  body.appendChild(spreadSheet);
}

document.addEventListener('DOMContentLoaded', (event) => {
  const spreadsheet = new Spreadsheet(ROWS-1, COLS-1);
  buildSpreadSheet(spreadsheet);

})