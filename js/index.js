const menuBtn = document.querySelector(".menu__btn");
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");
const blurOverlay = document.querySelector(".blur__overlay");

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
};

const CLICK = "click";

menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

new fullpage("#fullPage", {
  autoScrolling: true,
  scrollBar: true,
});
