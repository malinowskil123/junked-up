export function slideDown(id) {
  const elm = document.getElementById(id)
  if (elm) elm.style.animation = 'slideDown 0.5s ease-out forwards'
}

export function fadeIn(id) {
  const elm = document.getElementById(id)
  if (elm) elm.classList.add('fade-in')
}

export function fadeOut(id) {
  const elm = document.getElementById(id)
  elm.classList.remove('fade-in')
  elm.classList.add('fade-out')
}
