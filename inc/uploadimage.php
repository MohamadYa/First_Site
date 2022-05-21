<?php 
    $file1 = $_POST["file1"];
    $imgname = $_FILES["file1"]["name"];
    $targetimg = 'imagecorses/'.$imgname;
    $_SESSION["imgc"]=$imgname;
    move_uploaded_file($_FILES["file1"]["tmp_name"],$targetimg);

?>
