<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/styles.css">
    <title>Page 2</title>
</head>
<body>
    <div id="logo">
        <h1>ShoppingCartWeb</h1>
    </div>

    <div class="container">

        <div class="display">

            <div class="budget item">
                <h2>Budget</h2>
                <span id="budgetMessage">0</span>
            </div>

            <div class="current item">
                <h2>Current</h2>
                <span id="currentMessage">0</span>
            </div>

            <div class="discount item">
                <h2>Discount</h2>
                <span id="discountMessage">0</span>
            </div>

        </div>

        <div class="message messagecontainer">
            <h3 id="messageArea">...</h3>
        </div>

        <div class="list">
            <span id="listArea">List<img src="" alt="" > </span>
        </div>

        <div class="inputItem">
        
            <div class="name">
                <label for="">Name</label>
                <input type="text" id="nameInput" placeholder="Product">
            </div>

            <div class="price">
                <label for="">Price</label>
                <input type="number" id="priceInput" value="0" placeholder="0" >
            </div>

            <div class="quantity">
                <label for="">Quantity</label>
                <input type="number" id="quantityInput" placeholder="1" value="1" min="1">
                <span id="up-btn" class="updownbtn">&uarr;</span>
                <span id="down-btn" class="updownbtn">&darr;</span>

            </div>
            
            <div class="btn">
                <button id="addBTN">+</button>
                <button class="submit">Submit</button>
            </div>


        </div>
    
    </div>

    <footer>
        <small class="footer-notes">&copy ShoppingCartWeb 2018 created by Muhammad Muqriz Bin Othman</small>
    </footer>
    <script src="scripts/scripts.js"></script>
</body>
</html>