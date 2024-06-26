const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
   {
       enunciado: "Qual é umas das principais conseguencias da falta de saneamento basico?",
       alternativas: [
           {
               texto: "Aumento na incidÊncia de doenças transmitidas pela água",
         
           },
           {
               texto: "Crescimento econÔmico acelerado",
             
           }
       ]
   },
   {
       enunciado: "O que é mais sustentável ao visitar áreas naturais?",
       alternativas: [
           {
               texto: "Usar transporte público ou bicicletas",
             
           },
           {
               texto: "Usar veículos motorizados individuais",
             
           }
       ]
   },
   {
       enunciado: "O que é uma escolha responsável ao se hospedar durante uma viagem de eco-turismo?",
       alternativas: [
           {
               texto: "Ficar em acomodações que implementam práticas de sustentabilidade",
             
           },
           {
               texto: "Ficar em grandes resorts que não têm preocupações ambientais",
             
           }
       ]
   },
 
];








let atual = 0;
let perguntaAtual;
let historiaFinal = "";




function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}




function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}




function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}




mostraPergunta();

