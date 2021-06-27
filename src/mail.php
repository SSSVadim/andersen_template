<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$creditType = $_POST['credit-type'];
$creditTel = $_POST['credit-tel'];
$creditValue = $_POST['credit-value'];
$creditPeriod = $_POST['credit-period'];

//$mail->SMTPDebug = 3;                           // Enable verbose debug output

$mail->isSMTP();                                  // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                        // Enable SMTP authentication
$mail->Username = 'vadimtestmail@mail.ru'; //Login
$mail->Password = 'newpassword111';      //Password
$mail->SMTPSecure = 'ssl';              // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to 

$mail->setFrom('vadimtestmail@mail.ru', 'NoReplyMsg'); // From
$mail->addAddress('vadimtestmail2@mail.ru');   //To 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                           // Set email format to HTML

$mail->Subject = 'Вам поступила заявка на кредит';
$mail->Body    = 'Пользователь оставил данные: <br>
Телефон пользователя: ' .$creditTel . ' <br>
Тип кредита: ' .$creditType . ' <br>
Сумма кредита: ' .$creditValue . '<br>
Период кредита: ' .$creditPeriod;


$mail->AltBody = 'Что-то пошло не так, письмо доставлено с ошибкой';



if(!$mail->send() ){
	return true;
} else {
    return false;
}
?>