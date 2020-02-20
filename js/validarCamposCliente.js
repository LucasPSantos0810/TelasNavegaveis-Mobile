function validarCampos(){
	var nome = document.getElementById("nome").value;
	var snome = document.getElementById("sobrenome").value;
	var datanasc = document.getElementById("datanasc").value;
	var cep = document.getElementById("cep").value;
	var rua = document.getElementById("rua").value;
	var num = document.getElementById("numero").value;
	var bairro = document.getElementById("bairro").value;
	var cidade = document.getElementById("cidade").value;
	var estado = document.getElementById("estado").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var confsenha = document.getElementById("confsenha").value;
	var recarregar = document.getElementById('cadastro').innerHTML = '<a href="cadastroCliente.html" id="cadastrar"><div class="link0"><center>Cadastrar</div></a>';
	
	//verifica se todos os campos estão preenchidos
	if(nome=="" || snome=="" || datanasc=="" || cep=="" || rua=="" || num=="" || bairro=="" || cidade=="" || estado=="" || email=="" || senha=="" || confsenha==""){
		alert("Preencha todos os campos!");
		return recarregar;
	}
	else{
		return validarSenha();
	}
}

function validarSenha(){
	var senha = document.getElementById("senha").value;
	var confsenha = document.getElementById("confsenha").value;
	var recarregar = document.getElementById('cadastro').innerHTML = '<a href="cadastroCliente.html" id="cadastrar"><div class="link0"><center>Cadastrar</div></a>';
	
	//verifica se a senha do campo confsenha é a mesma que esta no campo senha
	if(senha!=confsenha){
		alert("As senhas devem ser iguais!");
		return recarregar;
	}
	else{
		document.getElementById('cadastrar').innerHTML = '<a href="principalCliente.html" id="cadastro"><div class="link0"><center>Cadastrar</div></a>';
	}
}