
function goToFAP() {
  chrome.tabs.create({
    active: true,
    url: "https://fap.fpt.edu.vn",
  });
}

function goToWT() {
  chrome.tabs.create({
    active: true,
    url: "https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx",
  });
}

function goToEdunext() {
  chrome.tabs.create({
    active: true,
    url: "https://fu-edunext.fpt.edu.vn",
  });
}

function goToClassroom() {
  chrome.tabs.create({
    active: true,
    url: "https://classroom.google.com/u/0/h",
  });
}
function goToCMS() {
  chrome.tabs.create({
    active: true,
    url: "https://cmshn.fpt.edu.vn/",
  });
}

document.getElementById("go_to_fap-weekly").addEventListener("click", goToWT);
document.getElementById("go_to_fap-button").addEventListener("click", goToFAP);
document.getElementById("go_to_edunext-button").addEventListener("click", goToEdunext);
document.getElementById("go_to_ggclassroom-button").addEventListener("click", goToClassroom);
document.getElementById("go_to_cms-button").addEventListener("click", goToCMS);
