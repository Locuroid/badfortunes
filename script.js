function fortuning() {
  let fetchFortune = fetch("https://bad-fortune-api.fleece123.repl.co/fortune");

  fetchFortune
  .then(res => res.json())
  .then(data => { 
    document.getElementById('fortune-text').innerHTML = data.fortune;
  })
}

fortuning()

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    fortuning();
  }
})