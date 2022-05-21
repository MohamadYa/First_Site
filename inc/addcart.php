<?php 
include "inc/db.php";
if(isset($_SESSION["userlo"])){
    $u_id = $_SESSION["u_id"];
    if(isset($_SESSION["carth_id"]))
    { // add a productes in cardd
        
        $carth_id = $_SESSION["carth_id"];
        $today = date('Y/m/d');
        $sqlcheck = "SELECT * FROM cartd where c_id='$c_id'";
        $rescheck = $conn->query($sqlcheck);
        if($rescheck->num_rows>0){
            echo 'Corses An Exist';
        }
        else {
            $sqlinsertcartd = "INSERT INTO cartd(carth_id , c_id , c_name , c_image , c_price)
            value( '$carth_id' , '$c_id' , '$c_name' , '$c_image' , '$c_price')";
            if($conn->query($sqlinsertcartd) == true){
                echo 'Insert Productes Successfull';
            }    
        }
    }else // creat cart id and insert the prodactu
    { 
        $today = date('Y/m/d');
        $sqladdcart = "INSERT INTO carth(cart_date , u_id)value('$today' , '$u_id')";
        if($conn->query($sqladdcart) == true){
            $carth_id = $conn->insert_id;
            $_SESSION['carth_id']=$carth_id;
        }
        $sqlcheck = "SELECT * FROM cartd where c_id='$c_id'";
        $rescheck = $conn->query($sqlcheck);
        if($rescheck->num_rows>0){
            $carth_id = $_SESSION["carth_id"];
            $today = date('Y/m/d');
            $sqlinsertcartd = "INSERT INTO cartd(carth_id , c_id , c_name , c_image , c_price)
            value( '$carth_id' , '$c_id' , '$c_name' , '$c_image' , '$c_price')";
            if($conn->query($sqlinsertcartd) == true){
                echo 'Insert Productes Successfull';
            }    
        }

    }
}else {
    echo "<script type='text/javascript'>location.href='login.php';</script>";
}
?>