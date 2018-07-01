<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/styles.css">
    <title>Page 1</title>
</head>
<body>
    <div id="logo">
        <h1>ShoppingCartWeb</h1>
    </div>

    <div class="container">
        <div class="info">
            <h2>Enter Budget</h2>
            <hr>
            <img src="assets/images/shopping-cart-32.png" class="shopping-cart-img" alt="shopping-cart">
            <label id=message>Awaiting Input...</label>
        </div>

        <div class="budget">
            <label>RM</label>
            <input type="number" id="budget" placeholder="0">
            <label>Discount</label>
            <input type="number">
        </div>

        <div class="optional">
            <h2>Optional</h2>
            <hr>
            <label>Name of Shop</label>
            <input type="text">
            <label for="">Address of Shop</label>
            <input type="text">
        </div>

        <div class="submit">
            <button onclick="checkBudget()">Confirm</button>
        </div>
    </div>

    <footer>
        <small class="footer-notes">&copy ShoppingCartWeb 2018 created by Muhammad Muqriz Bin Othman</small>
    </footer>
    <script src="scripts/scripts.js"></script>
</body>
</html>