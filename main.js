import './style.css'

const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  showAnimation()

  const data = new FormData(form)
  const response = await fetch('https://typographyserver.onrender.com/imagine', {
    method: 'POST',   
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: data.get('prompt')
    })
  })

  if (response.ok) {
    const { image } = await response.json()
    const result = document.querySelector('#result')
    result.innerHTML = `<img src="${image}" width="300" height="300" style="border-radius: 10px;"/>`
    hideAnimation()
  } else {
    const err = await response.text()
    alert(err)
  }
})


function showAnimation() {
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'imagining...';
  result.innerHTML = `<img src="load.gif"/>`;
}

function hideAnimation() {
  const button = document.querySelector('button');
  button.disabled = false;
  button.innerHTML = 'Imagine!';
}
