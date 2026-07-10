let num = document.getElementById("numberInput")
let btn = document.getElementById("checkBtn")
let result = document.getElementById("result")


let speed_Checker = () => {
    let userNumber = num.value;
    
    result.classList.remove("hidden")

    result.classList.remove("text-green-400", "text-amber-400")
    result.classList.add("text-red-400")

    if (userNumber == "") {
        result.innerHTML = "please enter something.";
        return
    }

    if (userNumber <= 0 || userNumber >= 300) {
        result.innerHTML = "Please Enter a Valid Speed.";
    }
    else if (userNumber >= 120 && userNumber < 300) {
        result.innerHTML = "License Suspended";
    }
    else if (userNumber >= 100 && userNumber < 120) {
        result.innerHTML = "Fine: Rs. 5000";
    }
    else if (userNumber >= 80 && userNumber < 100) {
        result.innerHTML = "Fine: Rs. 2000";
    }
    else if (userNumber >= 60 && userNumber < 80) {
        result.classList.remove("text-red-400")
        result.classList.add("text-amber-400")
        result.innerHTML = "Warning! Drive Carefully.";
    }
    else {
        result.classList.remove("text-amber-400")
        result.classList.remove("text-red-400")
        result.classList.add("text-green-400")
        result.innerHTML = "Safe Driving.";

    }
}

btn.addEventListener("click", speed_Checker)