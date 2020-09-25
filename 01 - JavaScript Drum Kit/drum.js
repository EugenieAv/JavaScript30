console.log('blabla')

removeStyle = () => {
  const letters = document.querySelectorAll('.keys > div')
  letters.forEach( (l) => {
    const letterKey = (l.dataset.key)
    l.addEventListener('transitionend', (e) => {
      if (e.propertyName !== 'transform') return
      l.classList.remove('playing')
    })
  })
}

play = (e) => {
  const piste = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!piste) return;
  piste.currentTime = 0;
  piste.play();
}
addStyle = (e) => {
  const elem = document.querySelector(`div[data-key="${e.keyCode}"]`)
  console.log(elem)
  elem.classList.add('playing')
}


document.addEventListener('keydown', (e) => {
  removeStyle();
  play(e);
  addStyle(e);
})
