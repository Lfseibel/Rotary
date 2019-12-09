function adicionar() {
	var valor =+ document.getElementById('valor_alter').value;
	var caixa =+ valor;
	var total_financas = JSON.parse(localStorage.getItem('Finanças Rotary')) || 0;		
	class Financas{
		constructor(valor, gasto, caixa){
			this.ganho = valor;
			this.gasto = gasto;
			this.caixa = caixa;
		}
	}
	if (total_financas == 0) {
	var x = new Financas(valor, 0, caixa);
	localStorage.setItem('Finanças Rotary', JSON.stringify(x)); 
	}else{
		total_financas.ganho = (total_financas.ganho + valor);
		total_financas.caixa = (total_financas.caixa + caixa);
		localStorage.setItem('Finanças Rotary', JSON.stringify(total_financas)); 
	}
	document.getElementById('valor_alter').value = "";
}

function subtrair(){	
	var valorr =+ document.getElementById('valor_alter').value;
	var gasto =+ valorr 
	var total_financas = JSON.parse(localStorage.getItem('Finanças Rotary')) || 0;
	total_financas.caixa = (total_financas.caixa - valorr);
	total_financas.gasto = (total_financas.gasto + gasto);	
	localStorage.setItem('Finanças Rotary', JSON.stringify(total_financas)); 
	document.getElementById('valor_alter').value = "";
}