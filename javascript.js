const matchScreenSize = (screen) => {
  const menu = document.getElementById("nav-right");
  const menuButton = document.getElementById("nav-right-icon");
  if (screen.matches) {
    menu.classList.add("disable");
    menuButton.classList.remove("disable");
  } else {
    menu.classList.remove("disable");
    menuButton.classList.add("disable");
    sidebar.classList.remove("showSidebar");
  }
};

let screenSize = window.matchMedia("(max-width: 768px)");
matchScreenSize(screenSize);
screenSize.addEventListener("change", matchScreenSize);

const showSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("sidebarHideAnimation");
  sidebar.classList.add("sidebarShowAnimation");
};

const hideSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("sidebarShowAnimation");
  sidebar.classList.add("sidebarHideAnimation");
};
