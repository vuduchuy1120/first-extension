
function goToFAP() {
  chrome.tabs.create({
    active: true,
    url: "https://fap.fpt.edu.vn/",
  });
}

function goToWT() {
  chrome.tabs.create({
    active: true,
    url: "https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx/",
  });
}

function goToEdunext() {
  chrome.tabs.create({
    active: true,
    url: "https://fu-edunext.fpt.edu.vn/",
  });
}

document.getElementById("go_to_fap-weekly").addEventListener("click", goToWT);
document.getElementById("go_to_fap-button").addEventListener("click", goToFAP);
document.getElementById("go_to_edunext-button").addEventListener("click", goToEdunext);

