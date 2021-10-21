const url = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"

function newGame() {
   fetch(url).then(response => {return response.json()}).then(data => {
      window.document.getElementById("number").innerHTML = data.value
   })
   
}






// function newGame() {
//    fetch(url).then(response => response.json()).then(data => {
//       window.document.getElementById("number").innerHTML = data.value
//    })
// }