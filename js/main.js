const primaryNav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavOptions = document.querySelectorAll('#primary-navigation a');

navToggle.addEventListener('click', () =>{
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    window.addEventListener('scroll', () => {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute('aria-expanded', false);
    });
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    window.addEventListener('scroll', () => {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute('aria-expanded', false);
    });
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute('aria-expanded', false);
  }
});


primaryNavOptions.forEach(element => {
  element.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute('aria-expanded', true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
});
