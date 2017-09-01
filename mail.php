<?php

$frm_name  = "Youname";
$recepient = "webkofanov@yandex.ru";
$sitename  = "fatBurner";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);

$message = "
Имя: $name
Телефон: $phone <br>
Email: $email <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
?>