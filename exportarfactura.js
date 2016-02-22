$(document).ready(function(){

	$('#generate').click(function(){

		$("#resultado").empty();

		var tipo;
		var idFactura;
		var formato;

		if ($('#tipo').val() == ""){
			$('#tipo').focus()
			return;
		}else{
			tipo = $('#tipo').val();
		}

		if ($('#idFactura').val() == ""){
			$('#idFactura').focus()
			return;
		}else{
			idFactura = $('#idFactura').val();
		}

		if ($('#formato').val() == ""){
			$('#formato').focus()
			return;
		}else{
			formato = $('#formato').val();
		}
		

		$.ajax({
			url: 'exportarFactura.php',
			type: 'POST',
			async: true,
			data: 'tipo=' + tipo + '&id=' + idFactura + '&formato=' + formato,
			success:function(datos){
				$('#resultado').append(datos);
			},
			error:function(){
				alert("Error realizando la exportacion de factura a PDF");
			}
		});




	});

})
