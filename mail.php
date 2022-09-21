<?php
$adres = "kontakt@weheron.pl";
$tytul = $_POST['contact-topic'] . " od: " $_POST['contact-mail']; 

$wiadomosc = $_POST['contact-name'] . "pisze: \r\n" . $_POST['contact-msg'];

// użycie funkcji mail
mail($adres, $tytul, $wiadomosc);

header('Location: '.$_SERVER['HTTP_REFERER']);
?>