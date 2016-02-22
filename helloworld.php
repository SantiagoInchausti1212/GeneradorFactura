<?php
error_reporting(0);
include("nusoap.php");

$destino = $_POST['destino'];
$fVencimiento = $_POST['fvencimiento'];
$formaPago = $_POST['fpago'];
$montoBruto = $_POST['montoBruto'];
$montoNoFacturable = $_POST['montoNoFacturable'];
$nroCompra = $_POST['nroCompra'];
$documento   = array("documento" => $_POST['documento'], "pais" => $_POST['paisDocumento'], "tipo" => $_POST['tipoDocumento']);
$productos   = array("indicadorFacturacion" => $_POST['indicadorFacturacion'], "nombre" => $_POST['nombreProducto'], "cantidad" => $_POST['cantidad'], "precioUnitario" => $_POST['precioUnitario'], "unidadDeMedida" => $_POST['unidadMedida'], "agenteResponsable" => $_POST['agenteResponsable'], "descripcion" => $_POST['descripcionProducto'], "monto" => $_POST['montoProducto'], "montoTotalAPagar" => $_POST['montoTotalProducto'], "nroLinea" => $_POST['nroLinea'], "porcentajeDescuento" => $_POST['porcentajeDescuento'], "porcentajeRecargo" => $_POST['porcentajeRecargo']);
$receptor    = array("ciudad" => $_POST['ciudadReceptor'], "cp" => $_POST['CPReceptor'], "departamento" => $_POST['departamentoReceptor'], "direccion" => $_POST['direccionReceptor'], "documento" => $documento, "nombre" => $_POST['nombreReceptor'], "pais" => $_POST['paisReceptor']);
$tasaBasicaIVA = $_POST['tasaBasicaIVA'];
$tasaMinimaIVA = $_POST['tasaMinimaIVA'];
$textoAdicional = $_POST['textoAdicional'];
$tipo = $_POST['tipo'];
$tipoCambio = $_POST['tipoCambio'];
$tipoMoneda = $_POST['tipoMoneda'];
$totalMontoExportacion = $_POST['totalMontoExportacion'];
$totalImpuestoPercibido = $_POST['totalMontoImpuestoPercibido'];
$totalMontoIVAEnSuspenso = $_POST['totalMontoIVASuspenso'];
$totalMontoIVAOtraTasa = $_POST['totalMontoIVAOtraTasa'];
$totalMontoIVATasaBasica = $_POST['totalMontoIVATasaBasica'];
$totalMontoIVATasaMinima = $_POST['totalMontoIVATasaMinima'];
$totalMontoNoGravado = $_POST['totalMontoNoGravado'];

/*---  FALTAN CAMPOS DE LA INFO REFERENCIAS --- */

/*----------- parametros para generar factura (pool datos de prueba) -------------';
$destino = '';
$fVencimiento = "2016-12-31";
$formaPago = 1;
$montoBruto = "0";
$montoNoFacturable = "5000";
$nroCompra = "1";
$documento = array("documento" =>"214844360018","pais" => "UY","tipo" => "2");
$productos = array("indicadorFacturacion" =>"3", "nombre" => ">aaa", "cantidad" => "10", "precioUnitario" => "1000", "unidadDeMedida" => "kg", "agenteResponsable" => "R", "descripcion" => "", "monto" => "10000", "montoTotalAPagar" => "10000", "nroLinea" => "1", "porcentajeDescuento" => "0", "porcentajeRecargo" => "0");
$receptor = array("ciudad" => "Montevideo","cp" =>'11100',"departamento" =>"Montevideo", "direccion" =>'Fernndez Crespo 1534',"documento" => $documento ,"nombre" => "DGI", "pais" => "UY");
$tasaBasicaIVA = "22";
$tasaMinimaIVA = "10";
$textoAdicional = "TXT ADD";
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
*/

/*--- NO SE UTILIZA POR EL MOMENTO EN LA GENERACION DE LA FACTURA PERO PUEDE LLEGAR A PEDIR A FUTURO
      $infoReferencias = array("nroCFEReferencia" => "12", "nroLinea" => "1", "serieCFEReferencia" => "A", "tipoCFEReferencia" => "111");*/

/*--- PARAMETROS -- */

$arg0 = array("adenda" => "", "destino" => $destino, "fechaVencimiento" => $fVencimiento, "formaPago" => $formaPago, "montoBruto" => $montoBruto, "montoNoFacturable" => $montoNoFacturable, "nroCompra" => $nroCompra, "productos" => $productos, "receptor" => $receptor, "tasaBasicaIva" => $tasaBasicaIVA, "tasaMinimaIva" => $tasaMinimaIVA, "textoAdicional" => $textoAdicional, "tipo" => $tipo, "tipoCambio" => $tipoCambio, "tipoMoneda" => $tipoMoneda, "totalMontoExportacion" => $totalMontoExportacion, "totalMontoImpuestoPercibido" => $totalImpuestoPercibido, "totalMontoIvaEnSuspenso" => $totalMontoIVAEnSuspenso, "totalMontoIvaOtraTasa" => $totalMontoIVAOtraTasa, "totalMontoIvaTasaBasica" => $totalMontoIVATasaBasica, "totalMontoIvaTasaMinima" => $totalMontoIVATasaMinima, "totalMontoNoGravado" => $totalMontoNoGravado);
$arg1 = 'PDFCreator';
$arg2 = 'pdf';

/*
var_dump($arg0);
return;
*/

/*--- REALIZAMOS LA CONSULTA ----*/

try{
   $clienteSOAP = new SoapClient("http://cfe.factura-lista.com:80/FacturaListaTest/facturaelectronica?wsdl");
   $result = $clienteSOAP->generarFactura($arg0,$arg1,$arg2);
} catch(SoapFault $e){
   var_dump($e);
}

/*--- DEVOLVEMOS ---- */

echo "<table border='1' ><tr><td colspan='2'>&nbsp;</td></tr>";
echo "<tr><td colspan='2'><strong>" . $result->descripcion . "</strong></td></tr>";
echo "<tr><td colspan='2'>&nbsp;</td></tr>";
echo "<tr><td colspan='2'><strong>Documento</strong></tr></td>";
echo "<tr><td>Documento: </td><td>" . $result->documento->id . "</td></tr>";
echo "<tr><td>Fecha desde: </td><td>" . $result->documento->fechadesde . "</td></tr>";
echo "<tr><td>Fecha hasta: </td><td>" . $result->documento->fechahasta . "</td></tr>";
echo "<tr><td>Habilitado: </td><td>" . $result->documento->habilitado . "</td></tr>";
echo "<tr><td>Hasta: </td><td>" . $result->documento->hasta . "</td></tr>";
echo "<tr><td>Nro. autorizaci&oacute;n DGI: </td><td>" . $result->documento->nroAutorizacionDGI . "</td></tr>";
echo "<tr><td>Nro. : </td><td>" . $result->documento->numero . "</td></tr>";
echo "<tr><td>Serie : </td><td>" . $result->documento->serie . "</td></tr>";
echo "<tr><td>Tipo CFE : </td><td>" . $result->documento->tipoCFE . "</td></tr>";
echo "<tr><td colspan='2'>&nbsp;</td></tr>";
echo "<tr><td>Fecha firma : </td><td>" . $result->fechaFirma . "</td></tr>";
echo "<tr><td>Firma : </td><td>" . $result->firma . "</td></tr>";
echo "<tr><td>Monto : </td><td>" . $result->monto . "</td></tr>";
echo "<tr><td>Referencia : </td><td>" . $result->referencia . "</td></tr>";
echo "<tr><td>RUC Emisor : </td><td>" . $result->rucEmisor . "</td></tr>";
echo "<tr><td>Tipo CFE : </td><td>" . $result->tipoCFE . "</td></tr>";
echo "</table>";



?>