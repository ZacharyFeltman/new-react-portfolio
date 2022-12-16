<?php

$name = $_GET["name"];
$email = $_GET["email"];
$message = $_GET["message"];

$body = $name . "\n" . $email . "\n" . $message;

mail("zachary.feltman@gmail.com", "Contact Form Submission", $body);

?>
Success.