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
        mail($to, $subject, $message);
    }


?>

