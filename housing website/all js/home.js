const header = document.getElementById(`header`);
const headerIcons = [...document.querySelectorAll(`.header .bi`)];
const overlay = document.getElementById(`overlay-container`);
const closeX = document.getElementById(`close-modal-icon`);
const menuList = [...document.querySelectorAll(`.list-container p`)];
//Hover Effect to the header icons + Menu overlay display
headerIcons.forEach((icon) => {
  icon.addEventListener(`mouseenter`, function () {
    this.style.color = `#D49E72`;
    this.style.transition = `color 0.3s ease`;
  });
  icon.addEventListener(`mouseleave`, function () {
    this.style.color = `aliceblue`;
  });

  if (icon.classList.contains(`bi-list`)) {
    icon.addEventListener(`click`, function () {
      if (overlay.classList.contains(`overlay-hide`)) {
        overlay.classList.replace(`overlay-hide`, `overlay-container`);
        overlay.style.transition = `opacity 5s ease`;
      }
    });
  }
});

//closing menu overlay
closeX.addEventListener(`click`, resetAll);
overlay.addEventListener(`click`, resetAll);
function resetAll() {
  if (overlay.classList.contains(`overlay-container`)) {
    overlay.classList.replace(`overlay-container`, `overlay-hide`);
  }
}

//click action on menu list displayed on overlay
menuList.forEach((listItem) => {
  listItem.addEventListener(`click`, () => {
    alert`go to the corresponding page`;
    resetAll();
  });
});
