const mensagens = [

`❤️ Sim.

Se eu não respondi,
provavelmente estou trabalhando.

O silêncio nunca significa
que deixei de gostar de você.

Eu só estou ocupado agora.

Assim que puder,
eu volto.

❤️`,

`❤️ Ei...

Respira.

Eu continuo gostando de você.

Se eu sumi por algumas horas,
é porque o trabalho me chamou.

Não porque eu deixei de pensar em você.`,

`❤️ Você continua sendo importante para mim.

Não importa quanto tempo eu demore para responder.

Eu volto.

Sempre volto.`,

`❤️ Ainda gosto de você.

Ainda quero conversar com você.

Ainda quero cuidar de você.`,

`❤️ Atualização do Sistema

Status:
✔ Continua sendo especial.

Motivo da demora:
🛠 Trabalhando.

Previsão:
Assim que possível,
Arthur aparecerá por aqui ❤️`

];

const botao = document.getElementById("botao");

const resposta = document.getElementById("resposta");

botao.onclick = () => {

    let aleatoria = Math.floor(Math.random()*mensagens.length);

    resposta.innerHTML = mensagens[aleatoria].replace(/\n/g,"<br>");

}