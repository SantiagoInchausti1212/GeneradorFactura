<?php
include("nusoap.php");

//$destino = $_POST['destino'];
//$fVencimiento = $_POST['fVencimiento'];
//$formaPago = $_POST['formaPago'];
//$montoBruto = $_POST['montoBruto'];
//$montoNoFacturable = $_POST['montoNoFacturable'];
//$nroCompra = $_POST['nroCompra'];
//$documento   = array($_POST['documento'],$_POST['pais'],$_POST['tipo']);
//$productos   = array($_POST['indicadorFacturacion'], $_POST['cantidad'],$_POST['nombre'],$_POST['precioUnitario'],$_POST['unidadDeMedida'],$_POST['agenteResponsable'],$_POST['descripcion'],$_POST['monto'],$_POST['montoTotalAPagar'],$_POST['nroLinea'],$_POST['porcentajeDescuento'],$_POST['porcentajeRecargo']);
//$receptor    = array($_POST['ciudad'], $_POST['cp'], $_POST['departamento'], $_POST['direccion'], $documento, $_POST['nombre'], $_POST['pais']);
//$tasaBasicaIVA = $_POST['tasaBasicaIVA'];
//$tasaMinimaIVA = $_POST['tasaMinimaIVA'];
//$textoAdicional = $_POST['textoAdicional'];
//$tipo = $_POST['tipo'];
//$tipoCambio = $_POST['tipoCambio'];
//$tipoMoneda = $_POST['tipoMoneda'];
//$totalMontoExportacion = $_POST['totalMontoExportacion'];
//$totalImpuestoPercibido = $_POST['totalMontoImpuestoPercibido'];
//$totalMontoIVAEnSuspenso = $_POST['totalMontoIVAEnSuspenso'];
//$totalMontoIVAOtraTasa = $_POST['totalMontoIVAOtraTasa'];
//$totalMontoIVATasaBasica = $_POST['totalMontoIVATasaBasica'];
//$totalMontoIVATasaMinima = $_POST['totalMontoIVATasaMinima'];
//$totalMontoNoGravado = $_POST['totalMontoNoGravado'];

/*  FALTAN CAMPOS DE LA INFO REFERENCIAS */

'----------- parametros para generar factura (datos de prueba) -------------';
$destino = '';
$fVencimiento = "2016-12-31";
$formapago = "1";
$montoBruto = "0";
$montoNoFacturable = "5000";
$nroCompra = "1";
$documento = array("documento" =>"214844360018","pais" => "UY","tipo" => "2");
$productos = array("indicadorFacturacion" =>"3", "cantidad" => "1", "nombre" => ">Módulo de facturación electrónica - pago inicial ", "precioUnitario" => "950", "unidadDeMedida" => "N/A", "agenteResponsable" => "R", "descripcion" => "", "monto" => "950", "montoTotalAPagar" => "950", "nroLinea" => "1", "porcentajeDescuento" => "0", "porcentajeRecargo" => "0");
$receptor = array("ciudad" => "Montevideo","cp" =>'13000',"departamento" =>"Montevideo", "direccion" =>'Solano Garcia 2361',"documento" => $documento ,"nombre" => "DGI", "pais" => "UY");
$tasaBasicaIVA = "22";
$tasaMinimaIVA = "10";
$textoAdicional = "Santiago Trepcom prueba";
$tipo = "111";
$tipoCambio = "1";
$tipoMoneda = "UYU";
$totalMontoExportacion = "0";
$totalImpuestoPercibido = "0";
$totalMontoIVAEnSuspenso = "0";
$totalMontoIVAOtraTasa = "0";
$totalMontoIVATasaBasica = "20000";
$totalMontoIVATasaMinima = "0";
$totalMontoNoGravado = "0";
$infoReferencias = array("nroCFEReferencia" => "12", "nroLinea" => "1", "serieCFEReferencia" => "A", "tipoCFEReferencia" => "111");
'---- arg1';
$tipoExportacion = 'PDFCreator';
'---- arg2';
$tipo = 'pdf';

$cliente = new SoapClient("http://cfe.factura-lista.com:80/FacturaListaTest/facturaelectronica?wsdl");

$cliente->generarFactura(array("destino" => $destino, "fechaVencimiento" => $fVencimiento, "formaPago" => $formapago, "montoBruto" => $montoBruto, "montoNoFacturable" => $montoNoFacturable, "nroCompra" => $nroCompra, "productos" => $productos, "receptor" => $receptor, "tasaBasicaIVA" => $tasaBasicaIVA, "tasaMinimaIVA" => $tasaMinimaIVA, "textoAdicional" => $textoAdicional, "tipo" => $tipo, "tipoCambio" => $tipoCambio, "tipoMoneda" => $tipoMoneda, "totalMontoExportacion" => $totalMontoExportacion, "totalMontoImpuestoPercibido" => $totalImpuestoPercibido, "totalMontoIvaEnSuspenso" => $totalMontoIVAEnSuspenso, "totalMontoIVAOtraTasa" => $totalMontoIVAOtraTasa, "totalMontoIVATasaBasica" => $totalMontoIVATasaBasica, "totalMontoIVATasaMinima" => $totalMontoIVATasaMinima, "totalMontoNoGravado" => $totalMontoNoGravado, "infoReferencias" => $infoReferencias));
/*echo "<pre>";
print_r($result);
echo "</pre>";*/

?>