function getAlert(){
    alert("Hello World")
}

var blue = document.getElementById('blue')
var red = document.getElementById('red')

blue.addEventListener('click', changeColorToBlue)
red.addEventListener('click', changeColorToRed)

function changeColorToBlue() {

    body.style.backgroundColor = 'blue'
    
}

function changeColorToRed() {

    body.style.backgroundColor = 'red'

}



var submit = document.getElementById('text-submit')

submit.addEventListener('click', textSubmitted)

function textSubmitted() {

var text = document.getElementById('text').value
    alert(text)
    console.log(text) 


}



function changePicture() {
    
    document.getElementById('pic').src = 'https://cdn.lifehack.org/wp-content/uploads/2014/08/5427691534_d2eeab1207_o.jpg';
}


var quotes = ["“At any given moment, you have the power to say: this is not how the story is going to end.”", 
"“Do what is right, not what is easy nor what is popular.”",
"“If there is a book that you want to read, but it has not been written yet, then you must write it.”",
"“Start where you are. Use what you have. Do what you can.” ",
"“By changing nothing, nothing changes.”",
"“You can, you should, and if you are brave enough to start, you will.”",
"“A ship in harbor is safe, but that is not what ships are built for.”",
"“Fear is forward. No one is afraid of yesterday.”",
"“For every minute you are angry, you lose sixty seconds of happiness.”",
"“There is nothing brilliant or outstanding in my record, except perhaps this one thing. I do the things I believe ought to be done. And when I make up my mind to do a thing, I act.”"]

var quote = document.getElementById('enter-innerText')

function quoteGenerator() {

    var randomNumber = Math.floor(Math.random() * 10);

    quote.innerText = quotes[randomNumber]


}



var displayLength = document.getElementById('displayLength')

function lenght() {

    var userInput = document.getElementById('userInput').value
    displayLength.innerText = "The length of the Entered Text is: " + userInput.length
    

}



var dateAndTime = document.getElementById('dateAndTime')
var CurrentDT = document.getElementById('CurrentDT')

dateAndTime.addEventListener('click', showDateAndTime)

function showDateAndTime() {

    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()

    // let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    

    CurrentDT.innerText = cDay + " - " + cMonth + " - " + cYear + "\n" + "Time: " + time;
    console.log(cDay);
    console.log(cMonth);
    console.log(cYear);
    console.log(time);

}