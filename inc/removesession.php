<?php 
/* sleep(2); */

session_unset();

session_destroy();

header("location: index.php")
?>