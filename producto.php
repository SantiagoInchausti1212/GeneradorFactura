<?php
    require_once "nusoap.php";
      
        function getProd($categoria) {
        if ($categoria == "libros") {
            return join(",", array(
                "El señor de los anillos",
                "Los límites de la Fundación",
                "The Rails Way"));
        }
        else {
                return "No hay productos de esta categoria";
        }
    }
      
    $server = new soap_server();
    $server->register("getProd");
    if ( !isset( $HTTP_RAW_POST_DATA ) ) $HTTP_RAW_POST_DATA =file_get_contents( 'php://input' );
        $server->service($HTTP_RAW_POST_DATA);
?>