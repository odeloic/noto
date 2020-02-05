/* This function will attach a Node on the contentArea
 * The contentArea should always have one childElement
 * It should also check if there is more than one child element and remove all the child element
 */
import { activateBtns } from './headerController';
export const attachViewToContentArea = (newNode, view) => {
  const contentArea = document.getElementById('contentArea');
  // remove it
  if (contentArea && contentArea.childElementCount === 1) {
    contentArea.removeChild(contentArea.firstElementChild);
  }
  // append the editor element
  contentArea.appendChild(newNode);
  activateBtns(view);
};
