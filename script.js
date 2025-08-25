// Dados de referência fixos no código.
const DATA_CONVENCIONAL = {
    tijolos_m2: 25,
    argamassa_m2: 15, // kg
    agua_producao_tijolo: 0.20, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.50, // kg/un
    co2_producao_argamassa: 2.50, // kg/saco
    residuos_m2: 10.00, // kg
    rendimento_saco: 20, // kg por saco
    energia_m2: 150 // Wh
};
const DATA_ECOLOGICO = {
    tijolos_m2: 18,
    argamassa_m2: 8, // kg
    agua_producao_tijolo: 0.00, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.15, // kg/un
    co2_producao_argamassa: 2.50, // kg/saco
    residuos_m2: 2.00, // kg
    rendimento_saco: 20, // kg por saco
    energia_m2: 30 // Wh
};
const DATA_ECOLOGICO_ADITIVADO = {
    tijolos_m2: 17,
    argamassa_m2: 7, // kg
    agua_producao_tijolo: 0.00, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.12, // kg/un
    co2_producao_argamassa: 2.20, // kg/saco (aditivo pode reduzir cimento)
    residuos_m2: 1.50, // kg
    rendimento_saco: 20, // kg por saco
    energia_m2: 25 // Wh
};
const PRICE_ARGAMASSA = 25.00; // R$ por saco

let co2Chart; // Variável para armazenar a instância do gráfico
let wasteChart; // Variável para o gráfico de resíduos
let waterChart;
let energyChart;
let costChart;

document.getElementById('calculate-button').addEventListener('click', calculate);

function calculateWallMetrics(materialData, priceTijolo, totalM2) {
    const metrics = {};
    
    // Custo por m² (material + mão de obra)
    const costPerM2 = (priceTijolo * materialData.tijolos_m2) + 
                      (PRICE_ARGAMASSA * (materialData.argamassa_m2 / materialData.rendimento_saco));
    metrics.custo = costPerM2 * totalM2;

    // Água por m²
    const waterPerM2 = (materialData.agua_producao_tijolo * materialData.tijolos_m2) +
                       (materialData.agua_argamassa_saco * (materialData.argamassa_m2 / materialData.rendimento_saco));
    metrics.agua = waterPerM2 * totalM2;

    // CO2 por m²
    const co2PerM2 = (materialData.co2_producao_tijolo * materialData.tijolos_m2) +
                     (materialData.co2_producao_argamassa * (materialData.argamassa_m2 / materialData.rendimento_saco));
    metrics.co2 = co2PerM2 * totalM2;

    // Resíduos por m²
    metrics.residuos = materialData.residuos_m2 * totalM2;

    // Energia por m²
    metrics.energia = materialData.energia_m2 * totalM2;

    return metrics;
}

function calculate() {
    const loading = document.getElementById('loading-message');
    const resultsSection = document.getElementById('results-section');
    const resultsBody = document.getElementById('results-body');

    loading.style.display = 'block';
    resultsSection.style.display = 'none';
    resultsBody.innerHTML = ''; // Limpa resultados anteriores

    setTimeout(() => { // Simula um tempo de processamento
        try {
            // Parâmetros de entrada do usuário
            const wallWidth = parseFloat(document.getElementById('wall-length').value);
            const wallHeight = parseFloat(document.getElementById('wall-height').value);
            const priceConv = parseFloat(document.getElementById('custo-tijolo-conv').value);
            const priceEco = parseFloat(document.getElementById('custo-tijolo-eco').value);            

            if (isNaN(priceConv) || isNaN(priceEco) || isNaN(wallWidth) || isNaN(wallHeight)) {
                throw new Error('Por favor, insira valores numéricos válidos em todos os campos.');
            }
            if (wallWidth <= 0 || wallHeight <= 0) {
                throw new Error('A largura e a altura devem ser valores positivos.');
            }

            const totalM2 = wallWidth * wallHeight;

            // Cálculos
            const conv = calculateWallMetrics(DATA_CONVENCIONAL, priceConv, totalM2);
            const eco = calculateWallMetrics(DATA_ECOLOGICO, priceEco, totalM2);
            // NOTA: Usando o mesmo preço do ecológico para o aditivado. O ideal seria ter um campo de preço separado.
            const ecoAditivado = calculateWallMetrics(DATA_ECOLOGICO_ADITIVADO, priceEco, totalM2);

            // Exibe os resultados
            displayResults(conv, eco, ecoAditivado, totalM2);

        } catch (error) {
            loading.style.display = 'none';
            resultsSection.style.display = 'block';
            resultsSection.innerHTML = `<p style="color:red; text-align: center;">Erro: ${error.message}</p>`;
        }
    }, 500); // Pequeno atraso para simular o cálculo
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
    const resultsBody = document.getElementById('results-body');
    const resultsHtml = `
        <tr>
            <td>Área Total da Parede</td>
            <td colspan="3" style="font-weight: bold;">${totalM2.toFixed(2)} m²</td>
        </tr>        
        
        <tr>
            <td>Emissão de Carbono</td>
            <td class="conventional-col">${conv.co2.toFixed(2)} kg CO₂</td>
            <td class="ecological-col">${eco.co2.toFixed(2)} kg CO₂</td>
            <td class="ecological-col">${ecoAditivado.co2.toFixed(2)} kg CO₂</td>
        </tr>
        <tr>
            <td>Geração de Resíduos</td>
            <td class="conventional-col">${conv.residuos.toFixed(2)} kg</td>
            <td class="ecological-col">${eco.residuos.toFixed(2)} kg</td>
            <td class="ecological-col">${ecoAditivado.residuos.toFixed(2)} kg</td>
        </tr>
        <tr>
            <td>Consumo de Água</td>
            <td class="conventional-col">${conv.agua.toFixed(2)} L</td>
            <td class="ecological-col">${eco.agua.toFixed(2)} L</td>
            <td class="ecological-col">${ecoAditivado.agua.toFixed(2)} L</td>
        </tr>
        <tr>
            <td>Consumo de Energia</td>
            <td class="conventional-col">${conv.energia.toFixed(2)} Wh</td>
            <td class="ecological-col">${eco.energia.toFixed(2)} Wh</td>
            <td class="ecological-col">${ecoAditivado.energia.toFixed(2)} Wh</td>
        </tr>
        <tr>
            <td>Custo Total</td>
            <td class="conventional-col">R$ ${conv.custo.toFixed(2)}</td>
            <td class="ecological-col">R$ ${eco.custo.toFixed(2)}</td>
            <td class="ecological-col">R$ ${ecoAditivado.custo.toFixed(2)}</td>
        </tr>
    `;
    resultsBody.innerHTML = resultsHtml;

    // Adiciona o indicador de referência ao cabeçalho da tabela dinamicamente.
    const headers = document.querySelectorAll('#results-section thead th');
    // O índice 3 corresponde à quarta coluna de dados ("Ecológico Aditivado")
    if (headers.length > 3 && !headers[3].innerHTML.includes('<sup>')) {
        headers[3].innerHTML += '<sup>1</sup>';
    }

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
