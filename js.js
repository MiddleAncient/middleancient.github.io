welcome = document.getElementById("hover1");
async function change(){
setTimeout(function(){
welcome.style.fontSize = "300%"
welcome.style.color = 'blue'}, 1000)
}
async function change2(){
welcome.style.fontSize = "200%"
welcome.style.color = 'grey'
}
welcome.addEventListener('mouseenter', (change));
welcome.addEventListener('mouseleave', (change2));
