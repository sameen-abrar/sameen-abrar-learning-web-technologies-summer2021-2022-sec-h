<?php 
    $password = $_POST['password'];
    // echo "<script>console.log('Debug Objects: " . $password . "' );</script>";
    if($password != "")
    {
        echo "valid password";
    }
    else if(strlen($password) < 8)
    {
        echo "Password must be atleast 8 characters";
    }
    else
    {
        echo "Insert ID and Password";
    }

?>