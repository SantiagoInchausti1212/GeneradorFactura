<?php
require_once("nusoap.php");
$server = new soap_server();
$server->configureWSDL("Testing WSDL ","urn:Testing WSDL ");
 
$server->register("gethelloworld",array("name" => "xsd:string"),array("return" => "xsd:string"),"urn:helloworld","urn:helloworld#gethelloworld");
 
function gethelloworld($name) {
$myname    =    "Aca tenemos hecho un webservice, hecho por  <b><strong>".$name . "</strong></b>";
return $myname;
}
 
$HTTP_RAW_POST_DATA = isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : '';
$server->service($HTTP_RAW_POST_DATA);
?>