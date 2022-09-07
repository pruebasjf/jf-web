<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}



$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$ciudad = $_POST['ciudad'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$modelo = $_POST['modelo'];
$pago = $_POST['pago'];

if( empty(trim($nombre)) ) $nombre = 'anonimo';


$body = <<<HTML
    <h1>Contacto sobre: $modelo - JORGE FERRO - WEB </h1>
    <p>De: $nombre $apellido</p>
    <p>Telefono: $telefono</p>
    <p>Email: $email</p>
    <p>Ciudad: $ciudad</p>
    <p>Consulta sobre: $modelo</p>
    <p>Forma de pago: $pago</p>
    <h2>Mensaje:</h2>
    $mensaje
HTML;

$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre $apellido <$email> \r\n";
$headers.= "To: Sitio web <prueba@diegovarela.ar> \r\n";

$rta = mail('prueba@diegovare.ar', "Consulta sobre: $modelo", $body, $headers );

header("Location: ../enviado.html" );