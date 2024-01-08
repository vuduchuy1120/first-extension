function Login() {
  const footer = document.getElementById("cssTable");
  if (!footer) return;
  const injectedText = document.createElement("span");
  injectedText.classList.add("h4");
  injectedText.textContent = "FAP Auto Login is working...";
  footer.insertAdjacentHTML(
    "beforeend",
    '<div class="row"> \n \
      <h4 style="text-align: center;  margin-top: 30px; margin-bottom: 0; font-weight: bold;">Tool By: HV</h4> \n \
    </div>'
  );
  const campusSelection = window.document.querySelector("#ctl00_mainContent_ddlCampus");
  if (!campusSelection) return;
  campusSelection.value = "3";
  footer.insertAdjacentHTML(
    "beforeend",
    '<h5 id="pointer_button" style="text-align: center;display:none; font-weight: bold;" onclick=" \n \
      const loginButton = document.querySelector(\'#ctl00_mainContent_btnLogin\'); \n \
      if (loginButton) \n \
        loginButton.click(); \n \
    ">Tool By: HV</h5>'
  );
  const loginButton = document.querySelector("#pointer_button");
  if (!loginButton) return;
  loginButton.click();
}

Login();