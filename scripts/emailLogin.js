function gacGetLoginElements() {
  return document.querySelectorAll('[data-identifier]');
}

async function gacPerformLogin(email) {
  setTimeout(function(){
    let loginElements = gacGetLoginElements();  
    for (let i = 0; i < loginElements.length; i++) {
      let el = loginElements[i];
      let elEmail = el.getAttribute("data-identifier");
      console.log(elEmail);
      if (elEmail === email) {
        el.click();
      }
    }
  }, 1500); // Wait for 1 second
}


gacPerformLogin("huyvdhe160866@fpt.edu.vn");