document.addEventListener('DOMContentLoaded', (event) => {

})

const COLS = 27;
const ROWS = 100;

function buildSpreadSheet() {
  const body = document.querySelector("body");
  const spreadSheet = document.createElement("div");
  spreadSheet.setAttribute("id", "spreadsheet");
  /*first row is indexes*/
  
  for (let i = 1; i< ROWS;i++){
    const cell = document.createElement("input");
    cell.setAttribute("type","text");

  }
  body.appendChild(spreadSheet);
}