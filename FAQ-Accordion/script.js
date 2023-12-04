'use strict'

document.querySelectorAll('button').forEach((b, i) => {
  b.addEventListener('click', function () {
    const p = this.nextElementSibling

    if (p.style.display === 'none') {
      p.style.display = 'block'
      this.classList.remove('expand')
      this.classList.add('collapse')
    } else {
      p.style.display = 'none'
      this.classList.remove('collapse')
      this.classList.add('expand')
    }

    document.querySelectorAll('button').forEach(b => {
      if (b !== this) {
        b.nextElementSibling.style.display = 'none'
        b.classList.remove('collapse')
        b.classList.add('expand')
      }
    })
  })

  if (i > 0) {
    b.nextElementSibling.style.display = 'none'
  }
})
