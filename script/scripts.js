function validar(e){
	
	if(e)
		e.preventDefault();
	
	limpar();
	
	//var nome=document.getElementById("nome").value;
	var email=document.getElementById("email").value;
	
	var nome = $("#nome").val();
	
	console.log(nome)
	
	if(nome === "") {
		$("#DIVMSGNome").css("display", "block");
		$('#nome').focus();
		return false;
	}
	
	/*if(nome === "") {
		console.log("Nome é obrigatório!");
		document.getElementById("DIVMSGNome").style.display = "block";
		document.getElementById("nome").focus();
		//document.getElementById("DIVMSGNome").innerHTML = "Campo inválido";
	}*/

	if(email === "") {
		console.log("Email é obrigatório!");
		document.getElementById("DIVMSGEmail").style.display = "block";
		document.getElementById("DIVMSGEmail").innerHTML = "Campo email é obrigatório!";
		document.getElementById("email").focus();
		return false;
	} else {
		var test = validarEmail(email);
		if(!test) {
			document.getElementById("DIVMSGEmail").style.display = "block";
			document.getElementById("DIVMSGEmail").innerHTML = "Campo email é invalido!";
			document.getElementById("email").focus();
			return false;
		}
	}
	
	document.getElementById("formularioContato").submit();
}

function validarEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

var limpar = function() {
	$("#DIVMSGNome").css("display", "none");
	document.getElementById("DIVMSGEmail").style.display = "none";
}

/*
var validar = function(){
	var nome=document.getElementById("nome").value;
	console.log(nome);
}

*/

document.getElementById("btn").addEventListener("click", validar);


