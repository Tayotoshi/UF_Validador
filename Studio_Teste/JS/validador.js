//Variável que contem um dicionario com as informações a respeito dos 27 estados brasileiros.
var UFs = [
  {"ID":"SANTA CATARINA","sigla":"SC","nome_por_extenso":"Santa Catarina","capital":"Florianópolis", "regiao":"Sul"},
  {"ID":"ACRE","sigla":"AC","nome_por_extenso":"Acre","capital":"Rio Branco", "regiao":"Norte"},
  {"ID":"ALAGOAS","sigla":"AL","nome_por_extenso":"Alagoas","capital":"Maceió", "regiao":"Nordeste"},
  {"ID":"AMAPA","sigla":"AP","nome_por_extenso":"Amapá","capital":"Macapá", "regiao":"Norte"},
  {"ID":"AMAZONAS","sigla":"AM","nome_por_extenso":"Amazonas","capital":"Manaus", "regiao":"Norte"},
  {"ID":"BAHIA","sigla":"BA","nome_por_extenso":"Bahia","capital":"Salvador", "regiao":"Nordeste"},
  {"ID":"CEARA","sigla":"CE","nome_por_extenso":"Ceará","capital":"Fortaleza", "regiao":"Nordeste"},
  {"ID":"DISTRITO FEDERAL","sigla":"DF","nome_por_extenso":"Distrito Federal","capital":"Brasília", "regiao":"Centro-Oeste"},
  {"ID":"ESPIRITO SANTO","sigla":"ES","nome_por_extenso":"Espírito Santo","capital":"Vitória", "regiao":"Sudeste"},
  {"ID":"GOIAS","sigla":"GO","nome_por_extenso":"Goiás","capital":"Goiânia", "regiao":"Centro-Oeste"},
  {"ID":"MARANHAO","sigla":"MA","nome_por_extenso":"Maranhão","capital":" São Luís", "regiao":"Nordeste"},
  {"ID":"MATO GROSSO","sigla":"MT","nome_por_extenso":"Mato Grosso","capital":"Cuiabá", "regiao":"Centro-Oeste"},
  {"ID":"MATO GROSSO DO SUL","sigla":"MS","nome_por_extenso":"Mato Grosso do Sul","capital":"Campo Grande", "regiao":"Centro-Oeste"},
  {"ID":"MINAS GERAIS","sigla":"MG","nome_por_extenso":"Minas Gerais","capital":"Belo Horizonte", "regiao":"Sudeste"},
  {"ID":"PARA","sigla":"PA","nome_por_extenso":"Pará","capital":"Belém", "regiao":"Norte"},
  {"ID":"PARAIBA","sigla":"PB","nome_por_extenso":"Paraíba","capital":"João Pessoa", "regiao":"Nordeste"},
  {"ID":"PARANA","sigla":"PR","nome_por_extenso":"Paraná","capital":"Curitiba", "regiao":"Sul"},
  {"ID":"PERNAMBUCO","sigla":"PE","nome_por_extenso":"Pernambuco","capital":"Recife", "regiao":"Nordeste"},
  {"ID":"PIAUI","sigla":"PI","nome_por_extenso":"Piauí","capital":"Teresina", "regiao":"Nordeste"},
  {"ID":"RIO DE JANEIRO","sigla":"RJ","nome_por_extenso":"Rio de Janeiro","capital":"Rio de Janeiro", "regiao":"Sudeste"},
  {"ID":"RIO GRANDE DO NORTE","sigla":"RN","nome_por_extenso":"Rio Grande do Norte","capital":"Natal", "regiao":"Nordeste"},
  {"ID":"RIO GRANDE DO SUL","sigla":"RS","nome_por_extenso":"Rio Grande do Sul ","capital":"Porto Alegre", "regiao":"Sul"},
  {"ID":"RONDONIA","sigla":"RO","nome_por_extenso":"Rondônia","capital":"Porto Velho", "regiao":"Norte"},
  {"ID":"RORAIMA","sigla":"RR","nome_por_extenso":"Roraima","capital":"Boa Vista", "regiao":"Sul"},
  {"ID":"SAO PAULO","sigla":"SP","nome_por_extenso":"São Paulo","capital":"São Paulo", "regiao":"Sudeste"},
  {"ID":"SERGIPE","sigla":"SE","nome_por_extenso":"Sergipe","capital":"Aracaju", "regiao":"Nordeste"},
  {"ID":"TOCANTINS","sigla":"TO","nome_por_extenso":"Tocantins","capital":"Palmas", "regiao":"Norte"}
]

//Impede que a pagina recarregue no momento em que o formulario é enviado.
const prevent = document.getElementById("formu");
prevent.addEventListener("submit", (e) =>{
  e.preventDefault()
})

//Função responsavél por verificar se o Estado digitado pelo usuario é valido, e retornar as informações caso seja, e caso não seja, ira retornará uma mensagem de erro.
function validaUF() {
  uf = document.getElementById("NPE").value;
  var nUf = uf.toUpperCase();		
  var sUf = removerAcentos(nUf);
  var tUf = sUf.trim();
  var ufValida = false;			
  var x = 0;
  const busca = document.querySelector('p');
  const num_estados	= 27;		
  while (x<num_estados){
    if (tUf === UFs[x].ID){
      swal("Formulario Preenchido", "Estado encontrado!", "success");
      var estado = (UFs[x].nome_por_extenso + ' | ' + UFs[x].sigla + ' | ' + UFs[x].capital + ' | ' + UFs[x].regiao);
      document.getElementById('NPE').value=''; // Limpa o campo de pesquisa.
      busca.innerHTML = estado+'<br>'+'<p class="exemplo">(Estado | UF | Capital | Região)</p>'
      ufValida == true;				
      break;
    } 
    else {
      ufValida == false;			
      x++;
    }
    if (x === 27 && ufValida == false){
      swal("Por Favor!", "Insira um Estado Valido!", "error");
    }
  }
}

/**
 * Remove acentos de caracteres
 * @param  {String} stringComAcento [string que contem os acentos]
 * @return {String}                 [string sem acentos]
 */
function removerAcentos( newStringComAcento ) {
  var string = newStringComAcento;
  var mapaAcentosHex = {
    a : /[\xE0-\xE6]/g,
    A : /[\xC0-\xC6]/g,
    e : /[\xE8-\xEB]/g,
    E : /[\xC8-\xCB]/g,
    i : /[\xEC-\xEF]/g,
    I : /[\xCC-\xCF]/g,
    o : /[\xF2-\xF6]/g,
    O : /[\xD2-\xD6]/g,
    u : /[\xF9-\xFC]/g,
    U : /[\xD9-\xDC]/g,
    c : /\xE7/g,
    C : /\xC7/g,
    n : /\xF1/g,
    N : /\xD1/g,
    };
	for ( var letra in mapaAcentosHex ) {
		var expressaoRegular = mapaAcentosHex[letra];
		string = string.replace( expressaoRegular, letra );
	}
	return string;
}


