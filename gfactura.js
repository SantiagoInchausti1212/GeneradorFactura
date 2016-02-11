$(document).ready(function(){

	$('#generate').click(function(){

		var destino = $('#destino').val();
		var fnacimiento = $('#fnacimiento').val();
		var fpago = $('#fpago').val();
		var montoBruto = $('#montoBruto').val();
		var montoNoFacturable = $('#montoNoFacturable').val();
		var nroCompra = $('#nroCompra').val();
		//Productos - start
			var indicadorFacturacion = $('#indicadorFacturacion').val();
			var nombreProducto = $('#nombreProducto').val();
			var cantidad = $('#cantidad').val();
			var precioUnitario = $('#precioUnitario').val();
			var unidadMedida = $('#unidadMedida').val();
			var agenteResponsable = $('#agenteResponsable').val();
			var descripcionProducto = $('#descripcionProducto').val();
			var montoProducto = $('#montoProducto').val();
			var montoTotalProducto = $('#montoTotalProducto').val();
			var nroLinea = $('#nroLinea').val();
			var porcentajeDescuento = $('#porcentajeDescuento').val();
			var porcentajeRecargo = $('#porcentajeRecargo').val();
		//Productos - end
		//Receptor - start
			var ciudadReceptor = $('#ciudadReceptor').val();
			var CPReceptor = $('#CPReceptor').val();
			var departamentoReceptor = $('#departamentoReceptor').val();
			var direccionReceptor = $('#direccionReceptor').val();
				//Documento - start
				var documento = $('#documento').val();
				var nombreDocumento = $('#nombreDocumento').val();
				var tipoDocumento = $('#tipoDocumento').val();
				//Documento - end
			var nombreReceptor = $('#nombreReceptor').val();
			var paisReceptor = $('#paisReceptor').val();
		//Receptor - end
		var tasaBasicaIVA = $('#tasaBasicaIVA').val();
		var tasaMinimaIVA = $('#tasaMinimaIVA').val();
		var textoAdicional = $('#textoAdicional').val();
		var tipo = $('#tipo').val();
		var tipoCambio = $('#tipoCambio').val();
		var tipoMoneda = $('#tipoMoneda').val();
		var totalMontoExportacion = $('#totalMontoExportacion').val();
		var totalMontoImpuestoPercibido = $('#totalMontoImpuestoPercibido').val();
		var totalMontoIVASuspenso = $('#totalMontoIVASuspenso').val();
		var totalMontoIVAOtraTasa = $('#totalMontoIVAOtraTasa').val();
		var totalMontoIVATasaBasica = $('#totalMontoIVATasaBasica').val();
		var totalMontoIVATasaMinima = $('#totalMontoIVATasaMinima').val();
		var totalMontoNoGravado = $('#totalMontoNoGravado').val();


		$.ajax({
			url: 'helloworld.php',
			type: 'POST',
			async: true,
			data: 'destino=destino&fnacimiento=fnacimiento',
			success:function(datos){
				alert(datos);
			},
			error:function(){
				alert("Error realizando la generacion de factura");
			}
		});




	});

})