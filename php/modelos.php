<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}



$nombre = $_POST['nombre'];
$localidad = $_POST['localidad'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$provincia = $_POST['provincia'];
$planes = $_POST['planes'];
$pago = $_POST['pago'];

if( empty(trim($nombre)) ) $nombre = 'anonimo';
if( empty(trim($localidad )) ) $localidad = '';

$body = <<<HTML
    <h1>Contacto sobre: $planes -  desde la web</h1>
    <p>De: $nombre</p>
    <p>Telefono: $telefono</p>
    <p>Mail: $email</p>
    <p>Localidad: $localidad</p>
    <p>Provincia: $provincia</p>
    <p>Forma de pago: $pago</p>
    <h2>Mensaje:</h2>
    $mensaje
HTML;



$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre $telefono <$email> \r\n";
$headers.= "To: Sitio web <prueba@prueba> \r\n";

$rta = mail('prueba@prueba', "Mensaje web: $nombre", $body, $headers );


header("Location: ../enviado.html" );