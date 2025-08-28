// Dados de referência fixos no código.
const DATA_CONVENCIONAL = {
    altura_tijolo: 0.19,
    largura_tijolo: 0.19,
    profundidade_tijolo: 0.09,
    
    cimento_traco_assentamento: 230, // kg/m3
    cal_traco_assentamento: 140, // kg/m3
    areia_traco_assentamento: 1, // m3
    agua_traco_assentamento: 250, // L/m3
    
    cimento_traco_chapisco: 450, // kg/m3
    cal_traco_chapisco: 0, // kg/m3
    areia_traco_chapisco: 1, // m3
    agua_traco_chapisco: 225, // L/m3
    
    cimento_traco_emboco: 230, // kg/m3
    cal_traco_emboco: 140, // kg/m3
    areia_traco_emboco: 1, // m3
    agua_traco_emboco: 250, // L/m3

    cimento_traco_reboco: 170,
    cal_traco_reboco: 210,
    areia_traco_reboco: 1,
    agua_traco_reboco: 250,

    custo_cimento_kg: 0.50, // R$ por kg
    custo_plastificante_litro: 20.00, // R$ por litro
    custo_cal_kg: 0.50, // R$ por kg
    custo_areia_m3: 200.00, // R$ por m3
    custo_agua_litro: 0.006, // R$ por litro

    tijolos_m2: 25,
    argamassa_m2: 15, // kg
    agua_producao_tijolo: 0.20, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.50, // kg/un
    co2_producao_cimento: 0.90, // kg/kg
    co2_producao_argamassa: 2.50, // kg/saco
    residuos_m2: 10.00, // kg
    energia_m2: 150 // Wh
};
const DATA_ECOLOGICO = {
    altura_tijolo: 0.07,
    largura_tijolo: 0.25,
    profundidade_tijolo: 0.125,

    custo_cimento_kg: 0.50, // R$ por kg
    custo_cola_litro: 50.00, // R$ por litro
    custo_rejunte_litro: 10.00, // R$ por m3
    custo_agua_litro: 0.006, // R$ por litro

    tijolos_m2: 18,
    argamassa_m2: 8, // kg
    agua_producao_tijolo: 0.05, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.15, // kg/un
    co2_producao_cimento: 0.90,
    residuos_m2: 2.00, // kg
    energia_m2: 30 // Wh
};
const DATA_ECOLOGICO_ADITIVADO = {
    altura_tijolo: 0.07,
    largura_tijolo: 0.25,
    profundidade_tijolo: 0.125,

    custo_cimento_kg: 0.50, // R$ por kg
    custo_cola_litro: 50.00, // R$ por litro
    custo_rejunte_litro: 10.00, // R$ por m3
    custo_agua_litro: 0.006, // R$ por litro

    tijolos_m2: 18,
    argamassa_m2: 8, // kg
    agua_producao_tijolo: 0.05, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.15, // kg/un
    co2_producao_cimento: 0.90,
    residuos_m2: 2.00, // kg
    energia_m2: 30 // Wh
};
const PRICE_ARGAMASSA = 25.00; // R$ por saco

let co2Chart; // Variável para armazenar a instância do gráfico
let wasteChart; // Variável para o gráfico de resíduos
let waterChart;
let energyChart;
let costChart;

document.getElementById('calculate-button').addEventListener('click', calculate);

function calculaMetricasParedeConvencional(materialData, larguraParede, alturaParede, custoTijolo, 
    espessuraJunta, espessuraChapisco, espessuraEmboco, espessuraReboco) {
    const metrics = {};
    
    // Quantidade de tijolos
    const areaParede = larguraParede * alturaParede;
    const alturaEfetivaTijolo  = espessuraJunta + materialData.altura_tijolo;
    const larguraEfetivaTijolo = espessuraJunta + materialData.largura_tijolo;
    const numTijolos = areaParede / (alturaEfetivaTijolo * larguraEfetivaTijolo);
    const volumeParede = areaParede * materialData.profundidade_tijolo
    const volumeTijolo = materialData.altura_tijolo * materialData.largura_tijolo * materialData.profundidade_tijolo;

    // Perdas
    const perdasAssentamento = 1.1; // 10% de perda na argamassa de assentamento
    const perdasChapisco = 1.2; // 20% de perda no chapisco
    const perdasEmboco = 1.5; // 50% de perda no emboço
    const perdasReboco = 1.2; // 20% de perda no reboco

    // Volumes necessários ao cálculo de consumo por etapa
    const volumeTijolos = numTijolos * volumeTijolo;
    const volumeAssentamento = (volumeParede - volumeTijolos) * perdasAssentamento; 
    const volumeChapisco = (areaParede * espessuraChapisco) * perdasChapisco; 
    const volumeEmboco = (areaParede * espessuraEmboco) * perdasEmboco;
    const volumeReboco = (areaParede * espessuraReboco) * perdasReboco;

    // Etapa de assentamento
    const cimentoAssentamento   = volumeAssentamento * materialData.cimento_traco_assentamento;
    const plastifAssentamento   = cimentoAssentamento * 0.002;
    const calAssentamento       = volumeAssentamento * materialData.cal_traco_assentamento;
    const areiaAssentamento     = volumeAssentamento * materialData.areia_traco_assentamento;
    const aguaAssentamento      = volumeAssentamento * materialData.agua_traco_assentamento;

    // Etapa de chapisco
    const cimentoChapisco   = volumeChapisco * materialData.cimento_traco_chapisco;
    const plastifChapisco   = cimentoChapisco * 0.002;
    const calChapisco       = volumeChapisco * materialData.cal_traco_chapisco;
    const areiaChapisco     = volumeChapisco * materialData.areia_traco_chapisco;
    const aguaChapisco      = volumeChapisco * materialData.agua_traco_chapisco;

    // Etapa de emboço
    const cimentoEmboco   = volumeEmboco * materialData.cimento_traco_emboco; 
    const plastifEmboco   = cimentoEmboco * 0.002;
    const calEmboco       = volumeEmboco * materialData.cal_traco_emboco;
    const areiaEmboco     = volumeEmboco * materialData.areia_traco_emboco;
    const aguaEmboco      = volumeEmboco * materialData.agua_traco_emboco;

    // Etapa de reboco
    const cimentoReboco   = volumeReboco * materialData.cimento_traco_reboco; 
    const plastifReboco   = cimentoReboco * 0.002;
    const calReboco       = volumeReboco * materialData.cal_traco_reboco;
    const areiaReboco     = volumeReboco * materialData.areia_traco_reboco;
    const aguaReboco      = volumeReboco * materialData.agua_traco_reboco;
    
    
    const totalCimento = cimentoAssentamento + cimentoChapisco + cimentoEmboco + cimentoReboco;
    const totalPlastificante = plastifAssentamento + plastifChapisco + plastifEmboco + plastifReboco;
    const totalCal = calAssentamento + calChapisco + calEmboco + calReboco;
    const totalAreia = areiaAssentamento + areiaChapisco + areiaEmboco + areiaReboco;
    const totalAguaConstrucao = aguaAssentamento + aguaChapisco + aguaEmboco + aguaReboco;
    
    // Custo (materiais)
    const custoTijolos = numTijolos * custoTijolo;
    const custoCimento = totalCimento * materialData.custo_cimento_kg;
    const custoPlastificante = totalPlastificante * materialData.custo_plastificante_litro;
    const custoCal = totalCal * materialData.custo_cal_kg;
    const custoAreia = totalAreia * materialData.custo_areia_m3;
    const custoAgua = totalAguaConstrucao * materialData.custo_agua_litro;

    metrics.custo = custoTijolos + custoCimento + custoPlastificante + custoAreia + custoAgua;

    // Água
    const totalAgua = (materialData.agua_producao_tijolo * numTijolos) + totalAguaConstrucao;                       
    metrics.agua = totalAgua;

    // CO2
    const co2 = (materialData.co2_producao_tijolo * numTijolos) +
                (materialData.co2_producao_cimento * totalCimento);
    metrics.co2 = co2;

    // Resíduos por m²
    metrics.residuos = materialData.residuos_m2 * areaParede;

    // Energia por m²
    metrics.energia = materialData.energia_m2 * areaParede;

    // Relatório detalhado (para debug)
    // console.log(`--- Detalhes da alvenaria convencional ---`);
    // console.log(`Área da parede: ${areaParede.toFixed(2)} m²`);
    // console.log(`Número de tijolos: ${numTijolos.toFixed(2)}`);
    // console.log(`Volume de tijolos: ${volumeTijolos.toFixed(2)} m³`);
    // console.log(`Volume de argamassa de assentamento: ${volumeAssentamento.toFixed(2)} m³`);
    // console.log(`Volume de chapisco: ${volumeChapisco.toFixed(2)} m³`);
    // console.log(`Volume de emboço: ${volumeEmboco.toFixed(2)} m³`);
    // console.log(`Volume de reboco: ${volumeReboco.toFixed(2)} m³`);
    // console.log(`Custo dos tijolos: R$ ${custoTijolos.toFixed(2)}`);
    // console.log(`Custo do cimento: R$ ${custoCimento.toFixed(2)}`);
    // console.log(`Custo do plastificante: R$ ${custoPlastificante.toFixed(2)}`);    
    // console.log(`Custo da areia: R$ ${custoAreia.toFixed(2)}`);
    // console.log(`Custo da água: R$ ${custoAgua.toFixed(2)}`);
    // console.log(`Custo total: R$ ${metrics.custo.toFixed(2)}`);

    return metrics;
}

function calcularRejunte(area, diametroCordao) {
  // area: área da parede em m² (número positivo)
  // diametroCordao: diâmetro do cordão em mm (número positivo, ex.: 5 para 5mm)
  
  const l = 0.25; // comprimento do tijolo em metros
  const h = 0.07; // altura do tijolo em metros
  
  // Densidade linear de canais (metros lineares por m²)
  const densidadeLinear = (1 / l) + (1 / h); // ≈ 18.2857 m/m²
  
  // Comprimento total de canais (em metros)
  const comprimentoTotal = area * densidadeLinear;
  
  // Conversão de diâmetro para metros
  const diametroM = diametroCordao / 1000;
  const raio = diametroM / 2;
  
  // Área da seção transversal do cordão (em m²)
  const areaSecao = Math.PI * raio * raio;
  
  // Volume total em m³
  const volumeM3 = areaSecao * comprimentoTotal;
  
  // Conversão para litros (1 m³ = 1000 L)
  const litros = volumeM3 * 1000;
  
  return litros.toFixed(3); // Retorna com 3 casas decimais para precisão
}

function calculaMetricasParedeEcologica(materialData, larguraParede, alturaParede, custoTijolo, 
    rendimentoAssentamento, espessuraRejunte) {
    const metrics = {};
    
    // Quantidade de tijolos
    const areaParede = larguraParede * alturaParede;
    const alturaEfetivaTijolo  = materialData.altura_tijolo;
    const larguraEfetivaTijolo = materialData.largura_tijolo;
    const numTijolos = areaParede / (alturaEfetivaTijolo * larguraEfetivaTijolo);
    const volumeParede = areaParede * materialData.profundidade_tijolo

    // Volumes necessários ao cálculo de consumo por etapa
    const volumeTijolos = numTijolos * (materialData.altura_tijolo * materialData.largura_tijolo * materialData.profundidade_tijolo);
    
    // Volume de cola para assentamento
    const volumeAssentamento = numTijolos / rendimentoAssentamento; // litros

    // Volume de rejunte
    const areaRejunte = Math.PI * (espessuraRejunte / 2) * (espessuraRejunte / 2);
    const volumeRejunte = areaRejunte * (numTijolos * (materialData.altura_tijolo + materialData.largura_tijolo) ) * 1000; // litros
    const volumeRejunteCorrigido = calcularRejunte(areaParede, espessuraRejunte * 1000); // litros
    
    const totalCimento = 0; 
    // Adicionar a água utilizada no rejunte + limpeza dos tijolos
    const totalAguaConstrucao = numTijolos * 0.1;
    
    // Custo (materiais)
    const custoTijolos = numTijolos * custoTijolo;
    const custoCimento = totalCimento * materialData.custo_cimento_kg;
    const custoAssentamento = volumeAssentamento * materialData.custo_cola_litro;
    const custoRejunte = volumeRejunteCorrigido * materialData.custo_rejunte_litro;
    const custoAgua = totalAguaConstrucao * materialData.custo_agua_litro;

    metrics.custo = custoTijolos + custoCimento + custoAssentamento + custoRejunte + custoAgua;

    // Água
    const totalAgua = (materialData.agua_producao_tijolo * numTijolos) + totalAguaConstrucao;                       
    metrics.agua = totalAgua;

    // CO2
    const co2 = (materialData.co2_producao_tijolo * numTijolos) +
                (materialData.co2_producao_cimento * totalCimento);
    metrics.co2 = co2;

    // Resíduos por m²
    metrics.residuos = materialData.residuos_m2 * areaParede;

    // Energia por m²
    metrics.energia = materialData.energia_m2 * areaParede;

    // Relatório detalhado (para debug)
    // console.log(`--- Detalhes da alvenaria ecológica ---`);
    // console.log(`Área da parede: ${areaParede.toFixed(2)} m²`);
    // console.log(`Número de tijolos: ${numTijolos.toFixed(2)}`);
    // console.log(`Volume de tijolos: ${volumeTijolos.toFixed(2)} m³`);
    // console.log(`Volume de argamassa de assentamento: ${volumeAssentamento.toFixed(2)} L`);
    // console.log(`Volume de rejunte: ${volumeRejunte.toFixed(2)} L`);
    // console.log(`Volume de rejunte (calculado): ${volumeRejunteCorrigido} L`);
    // console.log(`Custo dos tijolos: R$ ${custoTijolos.toFixed(2)}`);
    // console.log(`Custo da argamassa de assentamento: R$ ${custoAssentamento.toFixed(2)}`);
    // console.log(`Custo do rejunte: R$ ${custoRejunte.toFixed(2)}`);
    // console.log(`Custo do cimento: R$ ${custoCimento.toFixed(2)}`);
    // console.log(`Custo da água: R$ ${custoAgua.toFixed(2)}`);
    // console.log(`Custo total: R$ ${metrics.custo.toFixed(2)}`);

    return metrics;
}


function calculate() {
    const loading = document.getElementById('loading-message');
    const resultsSection = document.getElementById('results-section');
    const alertContainer = document.getElementById('alert-container');
    const resultsBody = document.getElementById('results-body');

    loading.style.display = 'block';
    resultsSection.style.display = 'none';
    alertContainer.innerHTML = ''; // Limpa alertas anteriores

    resultsBody.innerHTML = ''; // Limpa resultados anteriores

    setTimeout(() => {
        try {
            // Parâmetros de entrada do usuário
            const larguraParede = parseFloat(document.getElementById('wall-length').value);
            const alturaParede = parseFloat(document.getElementById('wall-height').value);
            
            // Parâmetros da alvenaria com tijolo convencional
            const custoTijoloConv = parseFloat(document.getElementById('custo-tijolo-conv').value);
            const espessuraJunta = parseFloat(document.getElementById('espessura-junta-conv').value) / 100.0; // Espessura da junta de assentamento (m)
            const espessuraChapisco = parseFloat(document.getElementById('espessura-chapisco-conv').value) / 100.0; // Espessura do chapisco (m)
            const espessuraEmboco = parseFloat(document.getElementById('espessura-emboco-conv').value) / 100.0; // Espessura do emboço (m)
            const espessuraReboco = parseFloat(document.getElementById('espessura-reboco-conv').value) / 100.0; // Espessura do reboco (m)
            
            

            if (isNaN(custoTijoloConv) || isNaN(larguraParede) || isNaN(alturaParede)) {
                throw new Error('Por favor, insira valores numéricos válidos em todos os campos.');
            }
            if (larguraParede <= 0 || alturaParede <= 0) {
                throw new Error('A largura e a altura devem ser valores positivos.');
            }

            const totalM2 = larguraParede * alturaParede;

            // Parâmetros da alvenaria com tijolo ecológico
            const custoTijoloEco = parseFloat(document.getElementById('custo-tijolo-eco').value);
            const rendimentoAssentamento = parseFloat(document.getElementById('valor-rendimento-assentamento').value); // tijolos por litro
            const espessuraRejunte = parseFloat(document.getElementById('valor-espessura-rejunte').value) / 100.0; // m

            // Cálculos
            const conv = calculaMetricasParedeConvencional(DATA_CONVENCIONAL, larguraParede, alturaParede, custoTijoloConv, 
                espessuraJunta, espessuraChapisco, espessuraEmboco, espessuraReboco);
            const eco = calculaMetricasParedeEcologica(DATA_ECOLOGICO, larguraParede, alturaParede, custoTijoloEco, 
                rendimentoAssentamento, espessuraRejunte);
            // NOTA: Usando o mesmo preço do ecológico para o aditivado.
            const ecoAditivado = calculaMetricasParedeEcologica(DATA_ECOLOGICO_ADITIVADO, larguraParede, alturaParede, custoTijoloEco, 
                rendimentoAssentamento, espessuraRejunte);

            // Exibe os resultados
            displayResults(conv, eco, ecoAditivado, totalM2);

        } catch (error) {
            loading.style.display = 'none';
            resultsSection.style.display = 'none';
            console.error(error);            
            // Exibe o erro no contêiner dedicado, sem destruir a estrutura da página.
            alertContainer.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }, 100);
}

/**
 * Cria ou atualiza um gráfico Chart.js.
 * @param {Chart} chartInstance - A instância do gráfico existente (pode ser nula).
 * @param {string} canvasId - O ID do elemento canvas.
 * @param {string} chartLabel - O rótulo para o conjunto de dados.
 * @param {string} chartTitle - O título do gráfico.
 * @param {Array<number>} chartData - Os dados para o gráfico.
 * @returns {Chart} A nova instância do gráfico.
 */
function createOrUpdateChart(chartInstance, canvasId, chartLabel, chartTitle, chartData) {
    if (chartInstance) {
        chartInstance.destroy();
    }
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Convencional', 'Ecológico', 'Ecológico Aditivado'],
            datasets: [{
                label: chartLabel,
                data: chartData,
                backgroundColor: [
                    'rgba(220, 53, 69, 0.6)', // Danger
                    'rgba(25, 135, 84, 0.6)',  // Success
                    'rgba(13, 110, 253, 0.6)'   // Primary
                ],
                borderColor: [
                    'rgb(220, 53, 69)',
                    'rgb(25, 135, 84)',
                    'rgb(13, 110, 253)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: { display: true, text: chartTitle, font: { size: 16 } }
            }
        }
    });
}

function displayResults(conv, eco, ecoAditivado, totalM2) {
    const resultsBody1 = document.getElementById('results-body');
    const resultsBody2 = document.getElementById('results-body-aditivado');
    
    const resultsHtml1 = `
        <tr>
            <td>Área Total da Parede</td>
            <td colspan="3" style="font-weight: bold;">${totalM2.toFixed(2)} m²</td>
        </tr>        
        
        <tr>
            <td>Emissão de Carbono</td>
            <td class="conventional-col">${conv.co2.toFixed(2)} kg CO₂</td>
            <td class="ecological-col">${eco.co2.toFixed(2)} kg CO₂</td>            
        </tr>
        <tr>
            <td>Geração de Resíduos</td>
            <td class="conventional-col">${conv.residuos.toFixed(2)} kg</td>
            <td class="ecological-col">${eco.residuos.toFixed(2)} kg</td>            
        </tr>
        <tr>
            <td>Consumo de Água</td>
            <td class="conventional-col">${conv.agua.toFixed(2)} L</td>
            <td class="ecological-col">${eco.agua.toFixed(2)} L</td>            
        </tr>
        <tr>
            <td>Consumo de Energia</td>
            <td class="conventional-col">${conv.energia.toFixed(2)} Wh</td>
            <td class="ecological-col">${eco.energia.toFixed(2)} Wh</td>            
        </tr>
        <tr>
            <td>Custo Total</td>
            <td class="conventional-col">R$ ${conv.custo.toFixed(2)}</td>
            <td class="ecological-col">R$ ${eco.custo.toFixed(2)}</td>            
        </tr>
    `;
    resultsBody1.innerHTML = resultsHtml1;

    // Tabela 2: Convencional vs. Ecológico Aditivado
    const resultsHtml2 = `
        <tr>
            <td>Área Total da Parede</td>
            <td colspan="2" style="font-weight: bold;">${totalM2.toFixed(2)} m²</td>
        </tr>
        <tr>
            <td>Emissão de Carbono</td>
            <td class="conventional-col">${conv.co2.toFixed(2)} kg CO₂</td>
            <td class="ecological-col">${ecoAditivado.co2.toFixed(2)} kg CO₂</td>
        </tr>
        <tr>
            <td>Geração de Resíduos</td>
            <td class="conventional-col">${conv.residuos.toFixed(2)} kg</td>
            <td class="ecological-col">${ecoAditivado.residuos.toFixed(2)} kg</td>
        </tr>
        <tr>
            <td>Consumo de Água</td>
            <td class="conventional-col">${conv.agua.toFixed(2)} L</td>
            <td class="ecological-col">${ecoAditivado.agua.toFixed(2)} L</td>
        </tr>
        <tr>
            <td>Consumo de Energia</td>
            <td class="conventional-col">${conv.energia.toFixed(2)} Wh</td>
            <td class="ecological-col">${ecoAditivado.energia.toFixed(2)} Wh</td>
        </tr>
        <tr>
            <td>Custo Total</td>
            <td class="conventional-col">R$ ${conv.custo.toFixed(2)}</td>
            <td class="ecological-col">R$ ${ecoAditivado.custo.toFixed(2)}</td>
        </tr>
    `;
    resultsBody2.innerHTML = resultsHtml2;
   

    // --- CRIAÇÃO DOS GRÁFICOS ---
    const co2Data = [conv.co2, eco.co2, ecoAditivado.co2].map(d => d.toFixed(2));
    co2Chart = createOrUpdateChart(co2Chart, 'co2-chart', 'Emissão de Carbono (kg CO₂)', 'Emissão de Carbono (kg CO₂)', co2Data);

    const wasteData = [conv.residuos, eco.residuos, ecoAditivado.residuos].map(d => d.toFixed(2));
    wasteChart = createOrUpdateChart(wasteChart, 'waste-chart', 'Geração de Resíduos (kg)', 'Geração de Resíduos (kg)', wasteData);

    const waterData = [conv.agua, eco.agua, ecoAditivado.agua].map(d => d.toFixed(2));
    waterChart = createOrUpdateChart(waterChart, 'water-chart', 'Consumo de Água (L)', 'Consumo de Água (L)', waterData);

    const energyData = [conv.energia, eco.energia, ecoAditivado.energia].map(d => d.toFixed(2));
    energyChart = createOrUpdateChart(energyChart, 'energy-chart', 'Consumo de Energia (Wh)', 'Consumo de Energia (Wh)', energyData);

    const costData = [conv.custo, eco.custo, ecoAditivado.custo].map(d => d.toFixed(2));
    costChart = createOrUpdateChart(costChart, 'cost-chart', 'Custo Total (R$)', 'Custo Total (R$)', costData);

    document.getElementById('loading-message').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';
}
