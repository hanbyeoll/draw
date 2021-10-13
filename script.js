let bNames = []

document.querySelector("#add_btn").addEventListener("click", addName);
function addName(){
  const name = document.querySelector("#like").value
  bNames.push(name)
  document.querySelector("#nameList").innerHTML = bNames.join('<br>')
}

document.querySelector("#btn_choice").addEventListener("click", randomPick);

function randomPick() {
  let ranNum = Math.round(Math.random()*(bNames.length-1));
  document.querySelector("#choice").textContent = bNames[ranNum]
}