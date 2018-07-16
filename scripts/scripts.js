var count = 0;

var quantityCounter = 1;

var idCode = 0;

var shoppingInfo = {
    budget: 0,
    discount: 0,
    nameOfShop: "Shop 1",
    shopAddress: "Shop Street"
}


var product = {
    id: "#" + 0,
    name: "Product",
    price: 0,
    quantity: 0
}

var shoppingList = [];



function checkBudget() {

    var budget = document.getElementById("budget").value;
    var discount = document.getElementById("discount").value;
    var nameOfShop = document.getElementById("shop-name").value;
    var addressOfShop = document.getElementById("location-name").value;


        /* 
            checks if budget input field is filled in
        */
    if(budget <= 0) {

        document.getElementById("message").innerHTML = "Budget required...";

        // updates message after 4s
        setTimeout(function() {
            document.getElementById("message").innerHTML = "Awaiting input...";
    
        }, 4000);

    } else if (budget >= 1) {

        /* 
        if input budget has a value > 0, this else if statement will run,
        and parse into integer

        */
       
        shoppingInfo.budget = parseInt(budget);

        shoppingInfo.discount = parseInt(discount);
        shoppingInfo.nameOfShop = nameOfShop;
        shoppingInfo.shopAddress = addressOfShop;

        window.localStorage.setItem("shoppingInfo", JSON.stringify(shoppingInfo));
               
        window.location.href = "page2.php";

    }

}

// function test() {
//     console.log(document.location.pathname);
    
// }

document.getElementById('addBTN').addEventListener('click', function() {
    
    var nameofProduct = document.getElementById('nameInput').value;
    var priceofProduct = document.getElementById('priceInput').value;
    var quantityofProduct = document.getElementById('quantityInput').value;

    // console.log(nameofProduct);
    // console.log(priceofProduct);
    // console.log(quantityofProduct);

    if(nameofProduct !== 0 || priceofProduct !== 0) {

        count += 1;
        nameofProduct = "Product " + count;
        priceofProduct = parseInt(document.getElementById('priceInput').value);
        quantityofProduct = parseInt(document.getElementById('quantityInput').value);
        idCode++;

        shoppingList.push
        (
            {
                id: "#" + idCode,
                name: nameofProduct,
                price: priceofProduct,
                quantity: quantityofProduct
            }
        )

        console.log(shoppingList);
    }


});

document.getElementById('up-btn').addEventListener('click', function() {
    
        quantityCounter += 1;
        document.getElementById('quantityInput').value = quantityCounter;

});


document.getElementById('down-btn').addEventListener('click', function() {
    
    if(quantityCounter != 0) {
        quantityCounter -= 1;
        document.getElementById('quantityInput').value = quantityCounter;
    }
    
    
});

function updateDisplay() {

    if(document.location.pathname === "/page2.php")
    {

        var shopInfo = JSON.parse(window.localStorage.getItem('shoppingInfo'));

        document.getElementById('budgetMessage').innerHTML = shopInfo.budget;
        document.getElementById('currentMessage').innerHTML = 0;
        document.getElementById('discountMessage').innerHTML = shopInfo.discount;

    }

    
}

updateDisplay();


