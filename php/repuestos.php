<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}



$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$localidad = $_POST['localidad'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$modelos = $_POST['modelos'];
$chasis = $_POST['chasis'];
$año = $_POST['año'];
$mensaje = $_POST['mensaje'];


if( empty(trim($nombre)) ) $nombre = 'anonimo';
if( empty(trim($apellido )) ) $apellido = '';

$body = <<<HTML
    <h1>Solicitud de repuestos -Jorge Ferro web</h1>
    <p>De: $nombre $apellido</p>
    <p>Telefono: $telefono</p>
    <p>Mail: $email</p>
    <p>Localidad: $localidad</p>
    <p>Modelos: $modelos</p>
    <p>Numero de Chasis: $chasis</p>
    <p>Año: $año</p>
    <h2>Mensaje:</h2>
    $mensaje
HTML;



$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre $telefono <$email> \r\n";
$headers.= "To: Sitio web <prueba@diegovarela.ar> \r\n";

$rta = mail('prueba@diegovarela.ar', "Mensaje web: $nombre", $body, $headers );


header("Location: ../enviado.html" );