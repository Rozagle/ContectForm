<?php

ini_set('SMTP', 'smtp.gmail.com');
ini_set('smtp_port', 25);  // Replace with your mail server's port


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$website = $_POST['website'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)) {

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {     //if user enter the valid email


        $receiver = "rozaallafi@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website \nMessage:$message\n\nRegards,\n$name";
        $sender = "From: $email";

        if (mail($receiver, $subject, $body, $sender)) {

            echo "Your message has been sent.";
        } else {
            echo "Sorry, we can't send your message!";
        }
    } else {

        echo "Enter a valid email address!";
    }
} else {
    echo "Please make sure fill all fields";
}
