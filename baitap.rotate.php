<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotate</title>
    <?php include("html/css.html");?>
</head>
<body>
    <li><a href="bmwt2311e.html">Trang chủ</a></li>

    <main class="section main">
        <div class="container">
            <button type="button" onclick="stopfan()">Stop Fan</button>
            <button type="button" onclick="fan()">01</button>
            <button type="button" onclick="fan()">02</button>
            <button type="button" onclick="fan()">03</button>
            <div id="fan" onmouseenter="fan()" onmouseleave="stopfan()"></div>
        </div>
        </main>
        <script type="text/javascript" src="js/demo3.js"></script>
        <style>
            #fan
            {
                width : 450px;
                height : 10px;
                float: left;
                margin: 300px;
                background-color: black;
            }
        </style>
    </body>
    </html>