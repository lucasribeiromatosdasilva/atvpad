import "./App.css";
import artemis2Imagem from "./artemis2.jpg" ;
import artemisImagem from "./artemis.jpg" ;
import perso1Imagem from "./perso1.jpg";
import minotauroImagem from "./minotauro.jpg"


function App() {
  
  return (
    <div className="App">
      <h1>Jogo: A lenda de ártemis</h1>
      
      <div className="Sinopse">

        <div className="imagem">
          <img src={artemisImagem} alt="Imagem do minotauro" />
        </div>

        <div>
          <p>
          A história dita nessa lenda representa as desventuras enfrentadas pela deusa Ártemis, divindade da caça, da Lua e dos animais selvagens
          APÓS DESAFIAR SEU PAI, ZEUS, O MESMO A EXPULSA DO MONTE OLIMPO PARA A ILHA DE CRETA. Lá, ÁRTEMIS SE ENCONTRA PRESA NO LABIRINTO DE DÉDALO, LAR DO FAMOSO MONSTRO MINOTAURO. 
          AGORA, ÁRTEMIS TERÁ QUE PROVAR SEU VALOR PARA O DEUS DOS DEUSES, ENFRENTANDO OS MAIS DIVERSOS DESAFIOS DESCRITOS da MITOLOGIA GREGA.

          </p>
        </div>

      </div>
      
      <div className="Historia">
            
            <p2>
          Ártemis era uma divindade da religiosidade grega conhecida por ser a deusa da caça, da natureza e da castidade. Ela era considerada a patrona e protetora das mulheres, 
          das crianças e dos nascimentos. Era uma das deusas mais veneradas de toda a Grécia Essa deusa era filha de Zeus e Leto e também era irmã gêmea de Apolo, 
          conhecido como deus grego do Sol. Narra-se que o nascimento de Ártemis foi atribulado, uma vez que Hera, esposa de Zeus, voltou-se contra Leto, que havia ficado grávida do deus em uma relação
         extraconjugal. Hera havia impedido que Leto pudesse dar à luz em qualquer lugar da Terra,
          o que fez com que ela sofresse as dores do parto por muitos meses.

          Ártemis era considerada a deusa da caça pelo fato de possuir um arco e flecha e dezenas de cães de caça. Sua relação com a caça fez com que ela fosse comumente associada a alguns animais selvagens, como os veados e os javalis.
          Seu pedido para ser eternamente virgem fez com que ela se associasse com a castidade. 
          Já o fato de ela ser a protetora das mulheres jovens fez com que ela recebesse o epíteto de Ártemis 
          Kourotrofos. Os gregos enxergavam Ártemis, sobretudo, como protetora, principalmente das mulheres que 
          eram noivas e estavam prestes a se casar. mis não é considerada uma figura central dos mitos gregos,
          embora, como mencionado, fosse uma deusa muito importante da religiosidade da Grécia Antiga. 
          Existem determinados mitos que demonstram a propensão da deusa em punir aqueles que agiam de maneira 
          impertinente contra ela
            </p2>
      <div className="imagem2">
          <img src={artemis2Imagem} alt="Imagem historia" />
        </div>

      </div>


      <div className = "Personagem">
        <h3>Personagens </h3>
        <div className="imagem3">
        <img src={perso1Imagem} alt="personagem" />
        <img src={minotauroImagem} alt="personagem" />
        </div>
      </div>

      <div className="Mecanica">
           <h4> Mecanica </h4>
           <h5> Boss Rush || Gameplay estilo Shadow of the Colossus e valheim.
          </h5>
      </div>
      
      <div className="creditos">
       <h6>CRÉDITOS </h6>
        <h7>
                                  
               Lucas ribeiro (81) 988185786 || lucas.matos@nave.org.br
               Ruan Portela  (81) 982422568 || ruan,portela@nave.org.br        
        </h7>
      </div>

    </div>







  







  );
}

export default App;