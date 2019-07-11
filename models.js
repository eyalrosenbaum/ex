class Cell {
  content = "";
  invalid = false;

  constructor(spreadsheet) {
    this.spreadsheet = spreadsheet;
  }

  get value() {
    return isNaN(parseFloat(this.content)) ? "ERROR" : this.content;
  }

  set value(val) {
    if (isLegalExpression(val)) {
      if (isDoubleValue(val)){
        this.content = val;
      } else {
        this.content = parseComplexExpression(val, this.spreadsheet);
      }
      this.invalid = false;
    }
    else {
      this.invalid = true;
      this.content = "ERROR";
      throw(new Error());
    }
  }
}

class Spreadsheet {
  constructor(rows, cols) {
    this.cells = new Array(rows);
    for (let i=0;i <rows;i++){
      this.cells[i] = new Array(cols).fill(new Cell(this));
    }
  }

  getCell(str) {
    const col = str.charCodeAt(0) - 'A'.charCodeAt(0);
    const row = parseInt(str.slice(1));
    return this.cells[row][col].content;
  }
}