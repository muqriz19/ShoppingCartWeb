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
                <label for="">0</label>
            </div>

            <div class="current item">
                <h2>Current</h2>
                <label for="">0</label>
            </div>

            <div class="discount item">
                <h2>Discount</h2>
                <label for="">0%</label>
            </div>


        </div>

        <div class="message">
            <h3>...</h3>
        </div>

        <div class="inputItem">
        
            <div class="title">
                <label for="">Title</label>
                <input type="text">
            </div>

            <div class="price">
                <label for="">Price</label>
                <input type="text">
            </div>

            <div class="quantity">
                <label for="">Quantity</label>
                <input type="number">
                <span class="updownbtn">&uarr;</span>
                <span class="updownbtn">&darr;</span>

            </div>
            
            <div class="btn">
                <button>+</button>
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