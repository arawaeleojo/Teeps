<?php
$name = htmlspecialchars(strip_tags(trim($_POST["name"])));
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($_POST["message"])));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Invalid email address.";
    exit;
}

$to = "info@teepsproject.com"; // change to your actual admin email
$subject = "New Contact Form Submission from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "Thank you! Your message has been sent.";
} else {
    http_response_code(500);
    echo "Something went wrong. Please try again later.";
}
?>