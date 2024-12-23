import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const eventos = ["touchstart", "click"];

  function openMenu() {
    menuButton.classList.add("active");
    menuList.classList.add("active");

    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }

  eventos.forEach((userEvent) => {
    menuButton.addEventListener(userEvent, openMenu);
  });
}
