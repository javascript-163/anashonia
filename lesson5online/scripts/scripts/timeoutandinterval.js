// ·setTimeOut და setInterval მეთოდები;

function greetusers() {
    console.log("greetings to all of you ppl!")
}

// console.log("start of the program")
// const mytimeout = settimeout(greetusers, 5000)

const interval1 = setinterval(function() {
    console.log("hey some delayed massage here!")
    clearInterval(interval1)
}, 2000)
