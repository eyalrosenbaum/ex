function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function onePointOrLess(str) {
  return (typeof str === "string") && str.split(".").length < 3;
}

function matchRegex(str, regex) {
  return (typeof str === "string") && !!str.match(regex);
}

function isColumnIndex(char) {
  const regex = RegExp("[A-Z]");
  return matchRegex(char, regex);
}

function onlyDigitsAndPoints(str) {
  const regex = RegExp("^([0-9]*\.[0-9]+|[0-9]+)$");
  return matchRegex(str, regex);
}

function isDoubleValue(str) {
  return onePointOrLess(str) && onlyDigitsAndPoints(str);
}

function isCell(str) {
  /*cell col is up to Z and cell row is up to 99*/
  const regex = RegExp("^([A-Z])([0-9]){1,2}$");
  return matchRegex(str, regex);
}

function isLegalExpression(str) {
  if (typeof str !== "string") {
    return false;
  }
  const noSpaces = str.replace(/\s+/g, '');
  const splitString = noSpaces.split("+");
  const regex = RegExp("^(([A-Z])([0-9]){1,2})|(([0-9]*\.[0-9]+|([0-9]+)))$");
  const res =  splitString.every(expression => matchRegex(expression, regex));
  return res;
}

function parseComplexExpression(str, spreadsheet) {
  const noSpaces = str.replace(/\s+/g, '');
  const splitString = noSpaces.split("+");
  let sum = 0;
  for(let i=0;i<splitString.length;i++){
    const floatVal = parseFloat(splitString[i]);
    if (!isNaN(floatVal)){
      sum += floatVal;
    } else {
      const cellValue = parseFloat(spreadsheet.getCell(splitString[i]));
      if (isNaN(cellValue)){
        throw new Error();
      }
      sum += cellValue;
    }
  }
  return sum;
}