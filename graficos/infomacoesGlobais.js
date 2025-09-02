const url = "https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json";

async function visualizarInformacoesGlobais() {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const pessoasMundo = (dados.total_pessoas_mundo / 1e9);
    const trabalhadoresMundo = (dados.total_trabalhadores_mundo / 1e9);
    const tempoDesTrabalho = parseInt(dados.tempo_medio_deslocamento_para_trabalho);
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - tempoDesTrabalho) * 60);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container_texto');

    paragrafo.innerHTML = `
        O mundo tem <span>${pessoasMundo.toFixed(2)}</span> bilhões de pessoas. Dessas, aproximadamente 
        <span>${trabalhadoresMundo.toFixed(2)}</span> bilhões estão empregadas e passam, em média, 
        <span>${tempoDesTrabalho} horas</span> e <span>${minutos} minutos</span> por dia no caminho para o trabalho. 
        Isso indica que mais da metade da população mundial não exerce trabalhos com vínculos empregatícios legais. 
        Esse número pode refletir a presença de aposentados, mas também uma alta taxa de trabalho informal.
    `;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();
