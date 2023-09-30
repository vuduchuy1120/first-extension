
function gacGetLoginElements() {
  return document.querySelectorAll('[data-identifier]');
}
async function gacPerformLogin(email) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
  let loginElements = gacGetLoginElements();
  for (let i = 0; i < loginElements.length; i++) {
    let el = loginElements[i];
    let elEmail = el.getAttribute("data-identifier");
    if (elEmail === email) {
      el.click();
    }
  }
}
gacPerformLogin("huyvdhe160866@fpt.edu.vn");


