async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json';
    
    const res = await fetch(url);
    const dados = await res.json();

    const nomeDosPostos = Object.keys(dados);
    const quantidadeTrabalhadores = Object.values(dados);

    const data = [{
        x: nomeDosPostos,
        y: quantidadeTrabalhadores,
        type: 'bar',
        marker: { color: '#F05454' }
    }];

    const layout = {
        title: 'Quantidade de Trabalhadores por Tipo de Ocupação',
        xaxis: { title: 'Tipo de Ocupação' },
        yaxis: { title: 'Quantidade de Trabalhadores' },
        plot_bgcolor: "#222831",
        paper_bgcolor: "#222831",
        font: { color: "#DDDDDD" }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);

    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuarios();
