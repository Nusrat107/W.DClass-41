function checkResult()

{


    let roll = document.getElementById("roll").value;
    let reg = document.getElementById("reg").value;
    let captcha = document.getElementById("captcha").value;
    
    if (roll === "" || reg === "" || captcha !== "11") {
        document.getElementById("result").innerText = "Please enter valid information!";
    } else {
        document.getElementById("result").innerText = "Fetching result... (Demo)";
    }

   
}

document.getElementById('marks').value = "";


function calculateGrade()
{

    event.preventDefault();

    let marks = document.getElementById('marks').value; //"56"

    let convertedMarks = parseFloat(marks); // 56.0

    if(convertedMarks > 100){
        console.log("Invalid Marks");
        document.getElementById("result").innerHTML = "Invalid Marks";
    }

    else if(convertedMarks < 0){
        console.log("Invalid Marks");
        document.getElementById("result").innerHTML = "Invalid Marks";
    }

    else if(convertedMarks >= 80){
        console.log("The Grade is A+");
        document.getElementById("result").innerHTML = "The Grade is A+";
    }

    else if(convertedMarks >= 70){
        console.log("The Grade is A");
        document.getElementById("result").innerHTML = "The Grade is A";
    }

    else if(convertedMarks >= 60){
        console.log("The Grade is A-");
        document.getElementById("result").innerHTML = "The Grade is A-";
    }

    else if(convertedMarks >= 50){
        console.log("The Grade is B");
        document.getElementById("result").innerHTML = "The Grade is B";
    }

    else if(convertedMarks >= 40){
        console.log("The Grade is C");
        document.getElementById("result").innerHTML = "The Grade is C";
    }

    else if(convertedMarks >= 33){
        console.log("The Grade is D");
        document.getElementById("result").innerHTML = "The Grade is D";
    }

    else{
        console.log("The Grade is F");
        document.getElementById("result").innerHTML = "The Grade is F";
    }

    document.getElementById('marks').value = "";

}