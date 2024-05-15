// Calculator 

display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value= "";
}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Syntax Error"
    }
}

function displaySidebar(){
    var sidebar = document.querySelector('.sidebar')
   sidebar.style.display='flex';
}

function closeSidebar(){
    var sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none';
}