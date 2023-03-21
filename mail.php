<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set email recipient and subject
    $to = "your-email@example.com";
    $subject = "New message from contact form";

    // Set email headers
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Compose email message
    $email_message = "Name: " . $name . "\n\n" .
                     "Email: " . $email . "\n\n" .
                     "Message:\n" . $message;

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        // Error sending email
        echo "There was an error sending your message. Please try again later.";
    }
}
?>
