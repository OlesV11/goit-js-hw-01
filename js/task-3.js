function getElementWidth(content, padding, border) {
  const contenT = parseFloat(content);
  const paddinG = parseFloat(padding);
  const bordeR = parseFloat(border);
  return contenT + 2 * paddinG + 2 * bordeR;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 

