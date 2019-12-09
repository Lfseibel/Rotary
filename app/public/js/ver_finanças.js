function financas_verificar() {
	var total_financas = JSON.parse(localStorage.getItem('Finanças Rotary'));
	var txt_ganho;
	var txt_gasto;
	var txt_caixa;
	txt_ganho = document.getElementById('valor_ganho');
	txt_gasto = document.getElementById('valor_gasto');
	txt_caixa = document.getElementById('valor_caixa');
    txt_ganho.innerHTML ="";
    txt_gasto.innerHTML ="";
    txt_caixa.innerHTML ="";
	
	txt_ganho.innerHTML = 'Ganho:' + total_financas.ganho;
	txt_gasto.innerHTML = 'Gasto:' + total_financas.gasto;
    txt_caixa.innerHTML = 'Caixa:' + total_financas.caixa;	    
}