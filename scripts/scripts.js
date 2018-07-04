function checkBudget() {
    var budget = document.getElementById("budget").value;
    var discount = document.getElementById("discount").value;
    //var nameOfShop = document.getElementById('shop-name').value;
    //var addressOfShop = document.getElementById('location-name').value;

        /* 
            checks if budget input field is filled in
        */
    if(budget == 0) {

        document.getElementById("message").innerHTML = "Budget required...";

        // updates message after 4s
        setTimeout(function() {
            document.getElementById("message").innerHTML = "Awaiting input...";
    
        }, 4000);

    } else if (budget >= 1) {

        /* 
        if input budget has a value > 0, this else statement will run,
        and parse into integer

        */

        
        window.location.href = "page2.php";






    }

    

}

