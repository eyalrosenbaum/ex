class Cell {
  content = "";
  invalid = false;

  constructor(editable, spreadsheet) {
    this.editable = editable;
    this.spreadsheet = spreadsheet;
  }

  get value() {
    const doubleVal = parseFloat(this.content);
  }

  set value(val) {
    if (isLegalExpression(val)) {
      if (isDoubleValue(val)){
        this.content = val;
      } else {
        this.content = parseComplexExpression(val, this.spreadsheet);
      }
    }
  }
}

class HeaderCell extends Cell {
  constructor(){
    super(false);
  }
}

class Spreadsheet {
  cells = new Array([]);

  init() {
    
  }

  getCell(str) {
    const col = str[0] - 'A';
    const row = parseInt(str.slice(1));
    return cells[row, col].content;
  }
}