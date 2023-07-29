<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = $_POST["naam"];
    $email = $_POST["email"];
    $onderwerp = $_POST["onderwerp"];
    $bericht = $_POST["bericht"];
    
    // Verzend e-mail met ingevulde gegevens
    $to = "f.haringsma@xaci-development.com";
    $subject = "Contactformulier ingevuld";
    $message = "Naam: " . $naam . "\n";
    $message .= "E-mail: " . $email . "\n";
    $message .= "Onderwerp: " . $onderwerp . "\n";
    $message .= "Bericht: " . $bericht . "\n";
    mail($to, $subject, $message);
}
?>

