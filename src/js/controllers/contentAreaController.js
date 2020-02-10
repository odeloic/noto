/* This function will attach a Node on the contentArea
 * The contentArea should always have one childElement
 * It should also check if there is more than one child element and remove all the child element
 */
import { activateBtns, controlBtns } from './headerController';
export const attachViewToContentArea = (newNode, view) => {
  const contentArea = document.getElementById('contentArea');
  // remove it
  if (contentArea && contentArea.childElementCount === 1) {
    // remove every child inside the contentArea at first
    contentArea.removeChild(contentArea.firstElementChild);
    // initialize the content area without any button
    controlBtns.forEach(button => {
      if (button.node.classList.contains('active'))
        button.node.classList.remove('active');
    });
  }
  // append the editor element
  contentArea.appendChild(newNode);
  activateBtns(view);
};
