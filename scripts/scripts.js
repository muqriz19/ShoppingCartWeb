function clearMessage() {
    document.getElementById()
}


function checkBudget() {
    var x = document.getElementById("budget").value;

    if (x === "") {
        document.getElementById("message").innerHTML = "Budget required...";

    }
    
    setTimeout(function() {
        document.getElementById("message").innerHTML = "Awaiting input...";

    }, 5000);
}

