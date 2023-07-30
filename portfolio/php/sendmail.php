<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = filter_input(INPUT_POST, "naam", FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
    $onderwerp = filter_input(INPUT_POST, "onderwerp", FILTER_SANITIZE_SPECIAL_CHARS);
    $bericht = filter_input(INPUT_POST, "bericht", FILTER_SANITIZE_SPECIAL_CHARS);

    // Verzend e-mail met ingevulde gegevens
    $to = "f.haringsma@xaci-development.com";
    $subject = "Contactformulier ingevuld";
    $message = "Naam: " . $naam . "\n";
    $message .= "E-mail: " . $email . "\n";
    $message .= "Onderwerp: " . $onderwerp . "\n";
    $message .= "Bericht: " . $bericht . "\n";

    if (mail($to, $subject, $message)) {
        // Succesbericht
        echo '<h1>Bedankt!</h1>';
        echo '<p>Je bericht is succesvol verzonden.</p>';
        echo '<p>We nemen zo snel mogelijk contact met je op.</p>';
        // Redirect naar de homepage na 3 seconden
        header("refresh:3;url=https://www.xaci-development.com/");
        exit();
    } else {
        // Foutmelding bij het verzenden van de e-mail
        echo '<h1>Fout!</h1>';
        echo '<p>Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.</p>';
        // Redirect naar de homepage na 3 seconden
        header("refresh:3;url=https://www.xaci-development.com/");
        exit();
    }
}
?>

