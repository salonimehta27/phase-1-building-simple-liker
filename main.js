// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heart=document.getElementsByClassName("like-glyph");
for (let i = 0 ; i < heart.length; i++) { 
heart[i].addEventListener("click",(e)=>
{ const like=e.target;
  mimicServerCall().then(()=>{
    if(like.innerText===EMPTY_HEART)
    {
      like.innerText=FULL_HEART;
      like.setAttribute("class","activated-heart");
    }
    else if(like.innerText===FULL_HEART)
    {
      like.innerText=EMPTY_HEART;
      like.removeAttribute("class","activated-heart");
    }
  }).catch(()=>{
    let getError=document.getElementById("modal");
  getError.removeAttribute("class","hidden");
  setTimeout(()=> getError.setAttribute("class","hidden"),3000)
  }
)
})
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}