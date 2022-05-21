<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;

require 'mailer/phpmailer/phpmailer/src/PHPMailer.php';
require 'mailer/phpmailer/phpmailer/src/SMTP.php';
require 'mailer/phpmailer/phpmailer/src/Exception.php';
//Load Composer's autoloader
require 'mailer/autoload.php';

//Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer();

    //Server settings
    $mail->isSMTP();//Send using SMTP
    $mail->Host       = 'smtp.gmail.com';//Set the SMTP server to send through
    $mail->SMTPAuth   = true;//Enable SMTP authentication
    $mail->Username   = 'yamengithub@gmail.com';//SMTP username
    $mail->addAddress("yamengithub@gmail.com");
    $mail->Password   = 'mohamad123';//SMTP password
    $mail->SMTPSecure = "ssl";//Enable implicit TLS encryption
    $mail->Port       = 465;//TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Content
    $mail->isHTML(true);//Set email format to HTML
    $mail->CharSet = "UTF-8";
?>