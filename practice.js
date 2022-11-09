const btn = document.querySelector('button');
const p = document.querySelector('div p');


const updateContent = (joke)=>
{
    p.innerHTML= joke;
}
function getJoke() {

     fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json"
        }
    }).then((result) => {
        // console.log(result.json())
        return result.json();
    }).then((data) => {
        updateContent(data.joke);
    }).catch(error => {
        console.log(error);
    })
    //inner function returning promise which is not store at so it will lost and nothing is return by the getjoke function
    // so we have to write return at the top
}
btn.addEventListener('click', () => {
    getJoke();
})
getJoke();