<html>
    <head>
        <title>
            Login
        </title>
        <script src="../asset/loginjs.js"></script>
    </head>
    <body>
        <fieldset>
            <legend>Login</legend>
            <!-- <div id="error"></div> -->
            <form id="loginform" method='post' action="../controller/logincheck.php" enctype=""> 
                <table>
                    <tr><td>User ID</td></tr>
                    <tr><td><input type="text" name="username" id="userid" value=""/><div id="iderror"></div></td></tr>
                    <tr><td>Password</td></tr>
                    <tr><td><input type="password" name="password" id="pass" value=""/></td></tr>
                    <tr><td><input type="button" name="submit" value="Submit" onclick='ajax()'/> <a href="../view/reg.php">Register</a></tr></td>
                </table>
            </form>
        </fieldset>
    
    </body>
</html>