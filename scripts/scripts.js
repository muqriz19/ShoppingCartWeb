var addBTNel = document.getElementById('addBTN');

var upBTNel = document.getElementById('up-btn');

var downBTNel = document.getElementById('down-btn');

var listAreael = document.getElementById('listArea');

var productaddlabel = document.getElementById('productaddlabel');

var count = 0;

var quantityCounter = 1;

var idCode = 0;

/* var product = {
    id: "#" + 0,
    name: "Product",
    price: 0,
    quantity: 0,
    total: 0
}; */



function getObject(object) {

    return object;
}

function getArray(array) {

    return array;
}

var currentBudget = {
    money: 0,

    getCurrentMoney: function () {
        
        return this.money;
    }
};

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

       var shoppingInfo = {
        budget: 0,
        discount: 0,
        nameOfShop: "Shop 1",
        shopAddress: "Shop Street"
        };
       
        shoppingInfo.budget = parseInt(budget);

        shoppingInfo.discount = parseInt(discount);
        shoppingInfo.nameOfShop = nameOfShop;
        shoppingInfo.shopAddress = addressOfShop;

        //currentBudget.money = parseInt(budget);
        //window.localStorage.setItem("currentMoney", budget);


        window.localStorage.setItem("shoppingInfo", JSON.stringify(shoppingInfo));
               
        window.location.href = "page2.php";

    }

}


// when user clicks + (add) button
if(addBTNel) {
    addBTNel.addEventListener('click', function() {
        var nameofProduct = document.getElementById('nameInput').value;
    
        if(nameofProduct === "") {
            nameofProduct = "Product " + count;
        }
        
        var priceofProduct = document.getElementById('priceInput').value;
        var quantityofProduct = document.getElementById('quantityInput').value;

        var shoppingInfo = JSON.parse(window.localStorage.getItem('shoppingInfo'));

        var currentMoney = window.localStorage.getItem('currentMoney');

        //console.log(currentBudget.getCurrentMoney());
        

        if(currentMoney < shoppingInfo.budget) {

            

            var messageDOM = document.getElementById('messageArea');
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
            currentBudget.money += priceofProduct * quantityofProduct;
            messageDOM.innerHTML = "Added " + nameofProduct + ".";
            count += 1;

            window.localStorage.setItem("currentMoney", currentBudget.money);

            window.localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

            updateDisplay();

            setInterval(function() {
                messageDOM.innerHTML = "...";   
            }, 4000);   

            console.log(shoppingList);  



        } else {    
            alert('Exceed Budget');
        }
    });

}

if(upBTNel) {
    upBTNel.addEventListener('click', function() {
    
        quantityCounter += 1;
        document.getElementById('quantityInput').value = quantityCounter;

    });
}

if(downBTNel){
    downBTNel.addEventListener('click', function() {
    
        if(quantityCounter != 0) {
            quantityCounter -= 1;
            document.getElementById('quantityInput').value = quantityCounter;
        }
        
        
    });
}


function showList() {
    var allItems = [];
    
    //object has array inside called shoppinglist
    allItems = JSON.parse(window.localStorage.getItem('shoppingList'));
    
    console.log(allItems);    
    
    var list = document.getElementById('productItem');

    var item = document.createElement('li');

    item.classList.add('items');

    if(allItems) {
        for(var iCount = 0; iCount < allItems.length; iCount++) {
            var item = document.createElement('li');
            
            item.innerText = allItems[iCount].name + " " + "RM" + allItems[iCount].price + " " + "Qty" + allItems[iCount].quantity;
    
            list.appendChild(item);
            
        }
    }
}

if(listAreael){
    listAreael.addEventListener('click', function() {
        
        window.location.href = 'page3.php';

        
        updateDisplay();

    });
}

if(window.location.pathname === '/page3.php') {
    showList();
}

if (productaddlabel) {
    productaddlabel.addEventListener('click', function() {
        window.location.href = 'page2.php';
    });
}




function updateDisplay() {


        var shopInfo = JSON.parse(window.localStorage.getItem('shoppingInfo'));
        var currentBudget = JSON.parse(window.localStorage.getItem('currentMoney'));



        //console.log(shopInfo);

        document.getElementById('budgetMessage').innerHTML = shopInfo.budget;
        document.getElementById('currentMessage').innerHTML =  currentBudget === null ? 0: currentBudget;
        document.getElementById('discountMessage').innerHTML = shopInfo.discount;
    
    
}


if(window.location.pathname == '/page1.php') {;
    window.localStorage.clear();
    
}

if(window.location.pathname == '/page2.php' || window.location.pathname == '/page3.php' || window.location.pathname == '/page4.php') {;
    updateDisplay();
    
}

if(window.location.pathname == '/page4.php') {;
    showList();
    
}


function checkout() {
    window.location.href = 'page4.php';

}