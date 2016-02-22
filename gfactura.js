$(document).ready(function(){

			var count = 0;
			

	       $("#add").click(function(){
            // Obtenemos el numero de filas (td) que tiene la primera columna
            // (tr) del id "tabla"
            var tds=$("#tabla tr:first td").length -1;
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#tabla tr").length;
            var nuevaFila="<tr>";
            for(var i=0;i<tds;i++){
                // añadimos las columnas
                nuevaFila+="<td><input type='text' /></td>";
            }
            // Añadimos una columna con el numero total de columnas.
            // Añadimos uno al total, ya que cuando cargamos los valores para la
            // columna, todavia no esta añadida
            nuevaFila+="<td>";
            nuevaFila+="</tr>";
            $("#tabla").append(nuevaFila);
        });
 
        /**
         * Funcion para eliminar la ultima columna de la tabla.
         * Si unicamente queda una columna, esta no sera eliminada
         */
        $("#del").click(function(){
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#tabla tr").length;
            if(trs>2)
            {
                // Eliminamos la ultima columna
                $("#tabla tr:last").remove();
            }
        });



	$('#generate').click(function(){

		$("#resultado").empty();


		var fvencimiento;
		var fpago;
		var montoBruto;
		var montoNoFacturable;
		var nroCompra;
		var destino = $('#destino').val();

		if ($('#fvencimiento').val() == ""){
			$('#fvencimiento').focus()
			return;
		}else{
			fvencimiento = $('#fvencimiento').val();
		}
		if ($('#fpago').val() == ""){
			$('#fpago').focus()
			return;
		}else{
			fpago = $('#fpago').val();
		}
		if ($('#montoBruto').val() == ""){
			$('#montoBruto').focus()
			return;
		}else{
			montoBruto = $('#montoBruto').val();
		}
		if ($('#montoNoFacturable').val() == ""){
			$('#montoNoFacturable').focus()
			return;
		}else{
			montoNoFacturable = $('#montoNoFacturable').val();
		}
		if ($('#nroCompra').val() == ""){
			$('#nroCompra').focus()
			return;
		}else{
			nroCompra = $('#nroCompra').val();
		}

		var tasaBasicaIVA;
		var tasaMinimaIVA;
		var textoAdicional;
		var tipo;
		var tipoCambio;
		var tipoMoneda;
		var totalMontoExportacion;
		var totalMontoImpuestoPercibido;
		var totalMontoIVASuspenso;
		var totalMontoIVAOtraTasa;
		var totalMontoIVATasaBasica;
		var totalMontoIVATasaMinima;
		var totalMontoNoGravado;

		if ($('#tasaBasicaIVA').val() == ""){
			$('#tasaBasicaIVA').focus()
			return;
		}else{
			tasaBasicaIVA = $('#tasaBasicaIVA').val();
		}
		if ($('#tasaMinimaIVA').val() == ""){
			$('#tasaMinimaIVA').focus()
			return;
		}else{
			tasaMinimaIVA = $('#tasaMinimaIVA').val();
		}
		if ($('#textoAdicional').val() == ""){
			$('#textoAdicional').focus()
			return;
		}else{
			textoAdicional = $('#textoAdicional').val();
		}
		if ($('#tipo').val() == ""){
			$('#tipo').focus()
			return;
		}else{
			tipo = $('#tipo').val();
		}
		if ($('#tipoCambio').val() == ""){
			$('#tipoCambio').focus()
			return;
		}else{
			tipoCambio = $('#tipoCambio').val();
		}
		if ($('#tipoMoneda').val() == ""){
			$('#tipoMoneda').focus()
			return;
		}else{
			tipoMoneda = $('#tipoMoneda').val();
		}
		if ($('#totalMontoExportacion').val() == ""){
			$('#totalMontoExportacion').focus()
			return;
		}else{
			totalMontoExportacion = $('#totalMontoExportacion').val();
		}
		if ($('#totalMontoImpuestoPercibido').val() == ""){
			$('#totalMontoImpuestoPercibido').focus()
			return;
		}else{
			totalMontoImpuestoPercibido = $('#totalMontoImpuestoPercibido').val();
		}
		if ($('#totalMontoIVASuspenso').val() == ""){
			$('#totalMontoIVASuspenso').focus()
			return;
		}else{
			totalMontoIVASuspenso = $('#totalMontoIVASuspenso').val();
		}
		if ($('#totalMontoIVAOtraTasa').val() == ""){
			$('#totalMontoIVAOtraTasa').focus()
			return;
		}else{
			totalMontoIVAOtraTasa = $('#totalMontoIVAOtraTasa').val();
		}
		if ($('#totalMontoIVATasaBasica').val() == ""){
			$('#totalMontoIVATasaBasica').focus()
			return;
		}else{
			totalMontoIVATasaBasica = $('#totalMontoIVATasaBasica').val();
		}
		if ($('#totalMontoIVATasaMinima').val() == ""){
			$('#totalMontoIVATasaMinima').focus()
			return;
		}else{
			totalMontoIVATasaMinima = $('#totalMontoIVATasaMinima').val();
		}
		if ($('#totalMontoNoGravado').val() == ""){
			$('#totalMontoNoGravado').focus()
			return;
		}else{
			totalMontoNoGravado = $('#totalMontoNoGravado').val();
		}


		var indicadorFacturacion;
		var nombreProducto;
		var cantidad;
		var precioUnitario;
		var unidadMedida;
		var agenteResponsable;
		var descripcionProducto;
		var montoProducto;
		var montoTotalProducto;
		var nroLinea;
		var porcentajeDescuento;
		var porcentajeRecargo;


		if ($('#indicadorFacturacion').val() == ""){
			$('#indicadorFacturacion').focus()
			return;
		}else{
			indicadorFacturacion = $('#indicadorFacturacion').val();
		}
		if ($('#nombreProducto').val() == ""){
			$('#nombreProducto').focus()
			return;
		}else{
			nombreProducto = $('#nombreProducto').val();
		}
		if ($('#cantidad').val() == ""){
			$('#cantidad').focus()
			return;
		}else{
			cantidad = $('#cantidad').val();
		}
		if ($('#precioUnitario').val() == ""){
			$('#precioUnitario').focus()
			return;
		}else{
			precioUnitario = $('#precioUnitario').val();
		}
		if ($('#unidadMedida').val() == ""){
			$('#unidadMedida').focus()
			return;
		}else{
			unidadMedida = $('#unidadMedida').val();
		}
		if ($('#agenteResponsable').val() == ""){
			$('#agenteResponsable').focus()
			return;
		}else{
			agenteResponsable = $('#agenteResponsable').val();
		}
		if ($('#descripcionProducto').val() == ""){
			$('#descripcionProducto').focus()
			return;
		}else{
			descripcionProducto = $('#descripcionProducto').val();
		}
		if ($('#montoProducto').val() == ""){
			$('#montoProducto').focus()
			return;
		}else{
			montoProducto = $('#montoProducto').val();
		}
		if ($('#montoTotalProducto').val() == ""){
			$('#montoTotalProducto').focus()
			return;
		}else{
			montoTotalProducto = $('#montoTotalProducto').val();
		}
		if ($('#nroLinea').val() == ""){
			$('#nroLinea').focus()
			return;
		}else{
			nroLinea = $('#nroLinea').val();
		}
		if ($('#porcentajeDescuento').val() == ""){
			$('#porcentajeDescuento').focus()
			return;
		}else{
			porcentajeDescuento = $('#porcentajeDescuento').val();
		}
		if ($('#porcentajeRecargo').val() == ""){
			$('#porcentajeRecargo').focus()
			return;
		}else{
			porcentajeRecargo = $('#porcentajeRecargo').val();
		}
		//Productos - start
			
		//Productos - end
		//Receptor - start
		var ciudadReceptor;
		var CPReceptor;
		var departamentoReceptor;
		var direccionReceptor;
			//Documento - start
			var documento;
			var paisDocumento;
			var tipoDocumento;
			//Documento - end
		var nombreReceptor;
		var paisReceptor;
		

		if ($('#ciudadReceptor').val() == ""){
			$('#ciudadReceptor').focus()
			return;
		}else{
			ciudadReceptor = $('#ciudadReceptor').val();
		}
		if ($('#CPReceptor').val() == ""){
			$('#CPReceptor').focus()
			return;
		}else{
			CPReceptor = $('#CPReceptor').val();
		}
		if ($('#departamentoReceptor').val() == ""){
			$('#departamentoReceptor').focus()
			return;
		}else{
			departamentoReceptor = $('#departamentoReceptor').val();
		}
		if ($('#direccionReceptor').val() == ""){
			$('#direccionReceptor').focus()
			return;
		}else{
			direccionReceptor = $('#direccionReceptor').val();
		}
		if ($('#documento').val() == ""){
			$('#documento').focus()
			return;
		}else{
			documento = $('#documento').val();
		}
		if ($('#paisDocumento').val() == ""){
			$('#paisDocumento').focus()
			return;
		}else{
			paisDocumento = $('#paisDocumento').val();
		}
		if ($('#tipoDocumento').val() == ""){
			$('#tipoDocumento').focus()
			return;
		}else{
			tipoDocumento = $('#tipoDocumento').val();
		}
		if ($('#nombreReceptor').val() == ""){
			$('#nombreReceptor').focus()
			return;
		}else{
			nombreReceptor = $('#nombreReceptor').val();
		}
		if ($('#paisReceptor').val() == ""){
			$('#paisReceptor').focus()
			return;
		}else{
			paisReceptor = $('#paisReceptor').val();
		}

		//Receptor - end
		


		$.ajax({
			url: 'helloworld.php',
			type: 'POST',
			async: true,
			data: 'fvencimiento=' + fvencimiento + '&destino=' + destino + '&fpago=' + fpago + '&montoBruto=' + montoBruto + '&montoNoFacturable=' + montoNoFacturable+ '&nroCompra=' + nroCompra + '&tasaBasicaIVA=' + tasaBasicaIVA + '&tasaMinimaIVA=' + tasaMinimaIVA + '&textoAdicional=' + textoAdicional + '&tipo=' + tipo + '&tipoCambio=' + tipoCambio + '&tipoMoneda=' + tipoMoneda + '&totalMontoExportacion=' + totalMontoExportacion + '&totalMontoImpuestoPercibido=' + totalMontoImpuestoPercibido + '&totalMontoIVASuspenso=' + totalMontoIVASuspenso + '&totalMontoIVAOtraTasa=' + totalMontoIVAOtraTasa + '&totalMontoIVATasaBasica=' + totalMontoIVATasaBasica + '&totalMontoIVATasaMinima=' + totalMontoIVATasaMinima + '&totalMontoNoGravado=' + totalMontoNoGravado + '&totalMontoImpuestoPercibido=' + totalMontoImpuestoPercibido + '&totalMontoIVASuspenso=' + totalMontoIVASuspenso + '&totalMontoIVAOtraTasa=' + totalMontoIVAOtraTasa + '&totalMontoIVATasaBasica=' + totalMontoIVATasaBasica + '&totalMontoIVATasaMinima=' + totalMontoIVATasaMinima + '&totalMontoNoGravado=' + totalMontoNoGravado + '&indicadorFacturacion=' + indicadorFacturacion + '&nombreProducto=' + nombreProducto + '&cantidad=' + cantidad + '&precioUnitario=' + precioUnitario + '&unidadMedida=' + unidadMedida + '&agenteResponsable=' + agenteResponsable + '&descripcionProducto=' + descripcionProducto + '&montoProducto=' + montoProducto + '&montoTotalProducto=' + montoTotalProducto + '&nroLinea=' + nroLinea + '&porcentajeDescuento=' + porcentajeDescuento + '&porcentajeRecargo=' + porcentajeRecargo + '&ciudadReceptor=' + ciudadReceptor + '&CPReceptor=' + CPReceptor + '&departamentoReceptor=' + departamentoReceptor + '&direccionReceptor=' + direccionReceptor + '&documento=' + documento + '&paisDocumento=' + paisDocumento + '&tipoDocumento=' + tipoDocumento + '&nombreReceptor=' + nombreReceptor + '&paisReceptor=' + paisReceptor ,
			success:function(datos){
				$('#resultado').append(datos);
			},
			error:function(){
				alert("Error realizando la generacion de factura");
			}
		});




	});

})
