const btn = document.querySelector('button');
const textElement = document.querySelector('p');

changeText();
async function changeText ()
{
      const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com', config);
   const data = await res.json();
    textElement.innerText= data.joke;
} 


btn.addEventListener('click',changeText);
// Note:async code is copied from site