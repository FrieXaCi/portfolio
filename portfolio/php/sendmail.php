

 <?php
$to = "f.haringsma@xaci-development.com";
$subject = "Test e-mail";
$message = "Dit is een test e-mail.";
$headers = "From: f.haringsma@xaci-development.com";
if (mail($to, $subject, $message, $headers)) {
    echo "E-mail verzonden!";
} else {
    echo "Er is een fout opgetreden bij het verzenden van de e-mail.";
}
?>