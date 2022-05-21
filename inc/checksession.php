<?php 
if(isset($_SESSION["userlo"])){
    // dont do any think
}else {
    // back him to log in 
    echo '
    <script type="text/javascript">
    location.href="login.php";
    </script>
    ';
}
?>