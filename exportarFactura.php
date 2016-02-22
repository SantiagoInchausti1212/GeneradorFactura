<?php
error_reporting(0);
include("nusoap.php");

$tipo = $_POST['tipo'];
$id = $_POST['id'];
$formato = $_POST['formato'];

$arg0 = $tipo;
$arg1 = $id;
$arg2 = $formato;

/*
var_dump($arg0);
return;
*/

/*--- REALIZAMOS LA CONSULTA ----*/

try{
   $clienteSOAP = new SoapClient("http://cfe.factura-lista.com:80/FacturaListaTest/facturaelectronica?wsdl");
   $result = $clienteSOAP->getImprimible($arg0,$arg1,$arg2);
} catch(SoapFault $e){
   var_dump($e);
}

/*--- DEVOLVEMOS ---- */
$pdf_base64 = "base64pdf.txt";
//Delete contenido
$file=fopen($pdf_base64,"w");

//fwrite($file,$result->imprimible);
fwrite($file, base64_encode($result->imprimible . PHP_EOL));
fclose($file);
//Get File content from txt file
$pdf_base64_handler = fopen($pdf_base64,'r');
$pdf_content = fread ($pdf_base64_handler,filesize($pdf_base64));
fclose ($pdf_base64_handler);
//Decode pdf content
$pdf_decoded = base64_decode ($pdf_content);
//Write data back to pdf file
$pdf = fopen ('pdfs/' . $id . '.pdf','w');
fwrite ($pdf,$pdf_decoded);
//close output file
fclose ($pdf);

echo "<table border='0'>";
echo "<tr><td colspan='2'> PDF exportado con <strong>" . $result->descripcion . "</strong> , en la carpeta pdfs/" . $id . ".pdf </td></tr>";
echo "</table>";


?>