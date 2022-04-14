
const apiKey = config.APIKey;

document.querySelector('button').addEventListener('click', getImage)   // event listener for click input


function getImage(){
   
      
      fetch("https://api.unsplash.com/photos/random?client_id=" + apiKey)
         .then(res => res.json()) // parse response as json
         .then(data => {
            console.log(data.urls.regular)
            document.querySelector('img').src = data.urls.regular
         })
         .catch(err => {
            console.log(`error ${err}`)
         });
}