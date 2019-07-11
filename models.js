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
      alert("Error - not valid expression!");
    }
  }
}

class Spreadsheet {
  constructor() {
    this.cells = new Array([]).fill(new Cell(this));
  }

  getCell(str) {
    const col = str[0] - 'A';
    const row = parseInt(str.slice(1));
    return cells[row, col].content;
  }
}