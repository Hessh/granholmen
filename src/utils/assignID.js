/**
 * Assign uniq id to the HTML elements.
 * @param {NodeList} elements
 * @param {Array} idData
 */
export const assignIDs = (elements, idData) => {
  idData.forEach((elem, i) => {
    elements[i].id = elem.id;
  });
};
