(function(){

const rootElement = document.querySelector(':root');
const htmlElement = document.querySelector('html')
const lightModeButton = document.querySelector('main + button')
lightModeButton.addEventListener('click', switchLightAndDark)

let lightMode = false
if(matchMedia('(prefers-color-scheme: light)').matches){
switchLightAndDark()
}



function switchLightAndDark(){
if(!lightMode){
lightMode = true;
htmlElement.classList.add('light');
lightModeButton.innerText = 'Switch to Dark Mode'
}
else{
lightMode = false;
htmlElement.classList.remove('light');
lightModeButton.innerText = 'Switch to Light Mode'
}
}


})()

