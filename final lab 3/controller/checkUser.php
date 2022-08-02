<?php 
    $username = $_POST['username'];
    // echo "<script>console.log('Debug Objects: " . $password . "' );</script>";
    if($username != "")
    {
        echo "Success";
    }
    else
    {
        echo "Insert ID and Password";
    }

?>