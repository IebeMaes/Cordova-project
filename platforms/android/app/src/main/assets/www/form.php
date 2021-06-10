<?php
echo "working iebe";
$email = $_POST["email"];
$name = $_POST["name"];
$subject = $_POST['subject'];
$message = $_POST['message'];

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '*************';                   // SMTP username
$mail->Password = '*****************';               // SMTP password               // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS
$mail->setFrom('*****************', 'utilities app');     //Set who the message is to be sent from
$mail->addAddress('******************');
//    $mail->addAddress('waar moet toe');               // Name is optional
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$content = "<h1>Bericht van: $name</h1><br><h4>Email: $email</h4><br><h4>Onderwerp: $subject</h4><br><h4>Bericht: </h4><p>$message</p>"; $mail->MsgHTML($content);
$mail->IsHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Een nieuw bericht van je app!';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    exit;
}

?>
