var shopInfo = JSON.parse(window.localStorage.getItem('shoppingInfo'));

var count = 0;

var quantityCounter = 1;

var idCode = 0;

var budgetMoney = shopInfo.budget;

var currentMoney = 0;

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
    quantity: 0,
    total: 0
}

var messageDOM = document.getElementById('messageArea');

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
    
    if(nameofProduct === "")
    {
        nameofProduct = "Product " + count;
    }
    
    var priceofProduct = document.getElementById('priceInput').value;
    var quantityofProduct = document.getElementById('quantityInput').value;

    // console.log(nameofProduct);
    // console.log(priceofProduct);
    // console.log(quantityofProduct);

        if(!(currentMoney > budgetMoney)) {
            count += 1;
            
            priceofProduct = parseInt(document.getElementById('priceInput').value);
            quantityofProduct = parseInt(document.getElementById('quantityInput').value);
            idCode++;


            shoppingList.push
            (
                {
                    id: "#" + idCode,
                    name: nameofProduct,
                    price: priceofProduct,
                    quantity: quantityofProduct,
                    total: priceofProduct * quantityofProduct
                }
            )

            currentMoney += priceofProduct * quantityofProduct;
            messageDOM.innerHTML = "Added " + nameofProduct + ".";

            console.log(currentMoney);
            
            updateDisplay();
            
            setInterval(function() {
                messageDOM.innerHTML = "...";

            }, 4000);


    
            console.log(shoppingList); 

        } else {

            alert('Exceed Budget');
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
    
    document.getElementById('budgetMessage').innerHTML = budgetMoney;
    document.getElementById('currentMessage').innerHTML = currentMoney;
    document.getElementById('discountMessage').innerHTML = shopInfo.discount;
    
}
updateDisplay();


