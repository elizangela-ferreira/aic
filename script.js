let currentLang = 'en-US'; // Default language

const translations = {
    'en-US': {
        pageTitle: "Construction Impact Analysis",
        mainTitle: "Construction Impact Analysis",
        subTitle: "Compare the environmental and financial impact between conventional and ecological masonry.",
        wallWidth: "Wall Width",
        wallHeight: "Wall Height",
        configConventional: "Configure Conventional Masonry Parameters",
        brickType: "Brick Type",
        selectBrickType: "Select brick type",
        unitCost: "Unit Cost",
        distFactoryReseller: "Distance from Factory to Reseller",
        distResellerSite: "Distance from Reseller to Site",
        mortarJoint: "Mortar Joint",
        roughcastThickness: "Roughcast Thickness",
        renderCoatThickness: "Render Coat Thickness",
        plasterThickness: "Plaster Thickness",
        configEcological: "Configure Ecological Masonry Parameters",
        distFactorySite: "Distance from Factory to Site",
        mortarAdhesiveYield: "Mortar Adhesive Yield",
        groutThickness: "Grout Thickness",
        unitBricksPerLiter: "bricks / L",
        referenceData: "Reference Data",
        referenceDataDesc: "This section allows you to edit the reference data used in the calculations.",
        commonData: "Common Data",
        description: "Description",
        value: "Value",
        conventionalMasonry: "Conventional Masonry",
        ecologicalMasonry: "Ecological Masonry",
        calculateButton: "Calculate Comparison",
        calculating: "Calculating...",
        comparisonStandardEco: "Comparison with Standard Ecological Brick",
        indicator: "Indicator",
        conventional: "Conventional",
        ecological: "Ecological",
        comparisonAdditiveEco: "Comparison with Ecological Brick with Additive",
        ecologicalAdditive: "Ecological with Additive",
        additiveEcoNote: "¹ The ecological brick with additives considers the use of a mixture with 15% polyester in its production.",
        errorInvalidValues: "Please enter valid numeric values in all fields.",
        errorPositiveValues: "Width and height must be positive values.",
        // Table rows
        wallArea: "Total Wall Area",
        totalBricks: "Total Bricks",
        carbonEmission: "Carbon Emission",
        wasteGeneration: "Waste Generation",
        waterConsumption: "Water Consumption",
        materialCost: "Material Cost",
        polyesterResidue: "Incorporated Polyester Residue",
        co2EmissionReduction: "CO₂ Emission Reduction",
        netCo2Emission: "Net CO₂ Emission",
        // Charts
        chartCO2: "Carbon Emission (kg CO₂)",
        chartWaste: "Waste Generation (kg)",
        chartWater: "Water Consumption (L)",
        chartCost: "Material Cost (R$)",
        // Chart Labels
        chartLabelConventional: "Conventional",
        chartLabelEcological: "Ecological",
        chartLabelEcologicalAdditive: "Ecological with Additive",
        // Reference Data Descriptions
        refCostCement: "Cement Cost (R$/kg)",
        refCostWater: "Water Cost (R$/L)",
        refCO2FactorTransport: "CO₂ Emission Factor in Transport (kg CO₂/ton.km)",
        refCO2ProdCement: "CO₂ Emission in Cement Production (kg/kg)",
        refCO2FactorBrickProd: "CO₂ Emission in Brick Manufacturing (kg CO₂/kg)",
        refCostPlasticizer: "Plasticizer Cost (R$/L)",
        refCostSand: "Sand Cost (R$/m³)",
        refWaterConsumptionBrickConv: "Water Consumption in Brick Production (L/unit)",
        refWasteGenerationConv: "Waste Generation (kg/m²)",
        refCementRatioMortar: "Mortar Mix: Cement Proportion (kg/m³)",
        refCementRatioRoughcast: "Roughcast Mix: Cement Proportion (kg/m³)",
        refCementRatioRender: "Render Coat Mix: Cement Proportion (kg/m³)",
        refCementRatioPlaster: "Plaster Mix: Cement Proportion (kg/m³)",
        refCementFractionEco: "Cement Fraction per Brick (%)",
        refCostAdhesive: "Mortar Adhesive Cost (R$/L)",
        refCostGrout: "Grout Cost (R$/L)",
        refWaterConsumptionBrickEco: "Water Consumption in Brick Production (L/unit)",
        refWasteGenerationEco: "Waste Generation (kg/m²)",
        refCO2FactorPolyester: "CO₂ Emission Factor of Incinerated Polyester (kg CO₂/kg)",
        langButton: "Mudar para Português",
    },
    'pt-BR': {
        pageTitle: "Análise de Impacto Construtivo",
        mainTitle: "Análise de Impacto Construtivo",
        subTitle: "Compare o impacto ambiental e financeiro entre a alvenaria convencional e a ecológica.",
        wallWidth: "Largura da Parede",
        wallHeight: "Altura da Parede",
        configConventional: "Configurar parâmetros da alvenaria convencional",
        brickType: "Tipo de Tijolo",
        selectBrickType: "Selecione o tipo de tijolo",
        unitCost: "Custo unitário",
        distFactoryReseller: "Distância da Fábrica até o revendedor",
        distResellerSite: "Distância do revendedor até a obra",
        mortarJoint: "Junta de assentamento",
        roughcastThickness: "Espessura do chapisco",
        renderCoatThickness: "Espessura do emboço",
        plasterThickness: "Espessura do reboco",
        configEcological: "Configurar parâmetros da alvenaria ecológica",
        distFactorySite: "Distância da Fábrica até à obra",
        mortarAdhesiveYield: "Rendimento cola assentamento",
        groutThickness: "Espessura do rejunte",
        unitBricksPerLiter: "tijolos / L",
        referenceData: "Dados de Referência",
        referenceDataDesc: "Esta seção permite editar os dados de referência utilizados nos cálculos.",
        commonData: "Dados Comuns",
        description: "Descrição",
        value: "Valor",
        conventionalMasonry: "Alvenaria Convencional",
        ecologicalMasonry: "Alvenaria Ecológica",
        calculateButton: "Calcular Comparativo",
        calculating: "Calculando...",
        comparisonStandardEco: "Comparação com o Tijolo Ecológico Padrão",
        indicator: "Indicador",
        conventional: "Convencional",
        ecological: "Ecológico",
        comparisonAdditiveEco: "Comparação com o Tijolo Ecológico com Aditivo",
        ecologicalAdditive: "Ecológico Aditivado",
        additiveEcoNote: "¹ O tijolo ecológico aditivado considera o uso de uma mistura com 15% de poliéster em sua produção.",
        errorInvalidValues: "Por favor, insira valores numéricos válidos em todos os campos.",
        errorPositiveValues: "A largura e a altura devem ser valores positivos.",
        wallArea: "Área Total da Parede",
        totalBricks: "Total de Tijolos",
        carbonEmission: "Emissão de Carbono",
        wasteGeneration: "Geração de Resíduos",
        waterConsumption: "Consumo de Água",
        materialCost: "Custo de Materiais",
        polyesterResidue: "Resíduo de Poliéster incorporado",
        co2EmissionReduction: "Redução na emissão CO₂",
        netCo2Emission: "Emissão Líquida de CO₂",
        chartCO2: "Emissão de Carbono (kg CO₂)",
        chartWaste: "Geração de Resíduos (kg)",
        chartWater: "Consumo de Água (L)",
        chartCost: "Custo de Materiais (R$)",
        // Rótulos dos Gráficos
        chartLabelConventional: "Convencional",
        chartLabelEcological: "Ecológico",
        chartLabelEcologicalAdditive: "Ecológico Aditivado",
        // Descrições dos Dados de Referência
        refCostCement: "Custo do Cimento (R$/kg)",
        refCostWater: "Custo da Água (R$/L)",
        refCO2FactorTransport: "Fator de Emissão de CO₂ no Transporte (kg CO₂/ton.km)",
        refCO2ProdCement: "Emissão de CO₂ na Produção do Cimento (kg/kg)",
        refCO2FactorBrickProd: "Emissão de CO₂ na Fabricação do Tijolo (kg CO₂/kg)",
        refCostPlasticizer: "Custo do Plastificante (R$/L)",
        refCostSand: "Custo da Areia (R$/m³)",
        refWaterConsumptionBrickConv: "Consumo de Água na Produção do Tijolo (L/un)",
        refWasteGenerationConv: "Geração de Resíduos (kg/m²)",
        refCementRatioMortar: "Traço do Assentamento: Proporção de Cimento (kg/m³)",
        refCementRatioRoughcast: "Traço do Chapisco: Proporção de Cimento (kg/m³)",
        refCementRatioRender: "Traço do Emboço: Proporção de Cimento (kg/m³)",
        refCementRatioPlaster: "Traço do Reboco: Proporção de Cimento (kg/m³)",
        refCementFractionEco: "Fração de Cimento por Tijolo (%)",
        refCostAdhesive: "Custo da Cola de Assentamento (R$/L)",
        refCostGrout: "Custo do Rejunte (R$/L)",
        refWaterConsumptionBrickEco: "Consumo de Água na Produção do Tijolo (L/un)",
        refWasteGenerationEco: "Geração de Resíduos (kg/m²)",
        refCO2FactorPolyester: "Fator de Emissão de CO₂ do Poliéster Incinerado (kg CO₂/kg)",
        langButton: "Switch to English",
    }
};

const DEFAULT_DATA_CONVENCIONAL = {
    altura_tijolo: 0.19,
    largura_tijolo: 0.19,
    profundidade_tijolo: 0.09,
    massa_tijolo: 2.2, // kg/un
    fator_emissao_co2_transporte: 0.062, // kg CO2 / (tonelada * km)
    fator_emissao_co2_fabricacao: 0.3, // kg CO2 / kg de tijolo
    
    cimento_traco_assentamento: 230, // kg/m3
    areia_traco_assentamento: 1, // m3
    agua_traco_assentamento: 250, // L/m3
    
    cimento_traco_chapisco: 450, // kg/m3
    areia_traco_chapisco: 1, // m3
    agua_traco_chapisco: 225, // L/m3
    
    cimento_traco_emboco: 230, // kg/m3
    areia_traco_emboco: 1, // m3
    agua_traco_emboco: 250, // L/m3

    cimento_traco_reboco: 170,
    areia_traco_reboco: 1,
    agua_traco_reboco: 250,

    custo_cimento_kg: 0.50, // R$ por kg
    custo_plastificante_litro: 20.00, // R$ por litro
    custo_areia_m3: 200.00, // R$ por m3
    custo_agua_litro: 0.006, // R$ por litro

    argamassa_m2: 15, // kg
    agua_producao_tijolo: 0.20, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.50, // kg/un
    co2_producao_cimento: 0.60, // kg/kg
    co2_producao_argamassa: 2.50, // kg/saco
    residuos_m2: 10.00, // kg
    energia_m2: 150 // Wh
};
const DEFAULT_DATA_ECOLOGICO = {
    altura_tijolo: 0.07,
    largura_tijolo: 0.25,
    profundidade_tijolo: 0.125,
    massa_tijolo: 2.8, // kg/un
    fator_emissao_co2_transporte: 0.062, // kg CO2 / (tonelada * km)
    fracao_cimento_por_tijolo: 0.125, // 1/8 = 0,125 (ou 12,5%) [Traço Cimento:Solo = 1:7]
    // fracao_cimento_por_tijolo: 0.111, // 1/9 = 0,111 (ou 11,1%) [Traço Cimento:Solo = 1:8]

    custo_cimento_kg: 0.50, // R$ por kg
    custo_cola_litro: 50.00, // R$ por litro
    custo_rejunte_litro: 10.00, // R$ por m3
    custo_agua_litro: 0.006, // R$ por litro

    argamassa_m2: 8, // kg
    agua_producao_tijolo: 0.05, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.15, // kg/un
    co2_producao_cimento: 0.60, // kg CO2/kg
    residuos_m2: 2.00, // kg
    energia_m2: 30 // Wh
};
const DEFAULT_DATA_ECOLOGICO_ADITIVADO = {
    altura_tijolo: 0.07,
    largura_tijolo: 0.25,
    profundidade_tijolo: 0.125,
    massa_tijolo: 2.8, // kg/un
    fator_emissao_co2_transporte: 0.062, // kg CO2 / (tonelada * km)
    fracao_cimento_por_tijolo: 0.125, // 1/8 = 0,125 (ou 12,5%) [Traço Cimento:Solo = 1:7]
    // fracao_cimento_por_tijolo: 0.111, // 1/9 = 0,111 (ou 11,1%) [Traço Cimento:Solo = 1:8]
    fator_emissao_co2_poliester_incinerado: 2.8, // kg CO2 / kg

    custo_cimento_kg: 0.50, // R$ por kg
    custo_cola_litro: 50.00, // R$ por litro
    custo_rejunte_litro: 10.00, // R$ por m3
    custo_agua_litro: 0.006, // R$ por litro

    argamassa_m2: 8, // kg
    agua_producao_tijolo: 0.05, // L/un
    agua_argamassa_saco: 5.00, // L/saco
    co2_producao_tijolo: 0.15, // kg/un
    co2_producao_cimento: 0.60,
    residuos_m2: 2.00, // kg
    energia_m2: 30 // Wh
};
const PRICE_ARGAMASSA = 25.00; // R$ por saco

let co2Chart; // Variável para armazenar a instância do gráfico
let wasteChart; // Variável para o gráfico de resíduos
let waterChart;
let energyChart;
let costChart;

/**
 * Formata um número para o padrão pt-BR.
 * @param {number} value O número a ser formatado.
 * @param {Intl.NumberFormatOptions} options Opções de formatação.
 * @returns {string} O número formatado.
 */
function formatNumber(value, options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}) {
    if (typeof value !== 'number' || isNaN(value)) {
        // Retorna um valor padrão ou string vazia para entradas inválidas
        const emptyFormatted = (0).toLocaleString(currentLang, options);
        return emptyFormatted;
    }
    return value.toLocaleString(currentLang, options);
}

document.getElementById('calculate-button').addEventListener('click', calculate);
document.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('language') || navigator.language || 'en-US';
    // Handle cases like 'pt' from navigator.language to match 'pt-BR'
    if (savedLang.startsWith('pt')) savedLang = 'pt-BR';    
    const langToLoad = translations[savedLang] ? savedLang : 'en-US'; // Fallback to en-US    

    document.getElementById('language-switcher').addEventListener('click', (event) => {
        event.preventDefault();
        // Alterna para o idioma oposto
        const newLang = currentLang === 'en-US' ? 'pt-BR' : 'en-US';
        setLanguage(newLang);
    });
    
    populateReferenceData();
    setLanguage(langToLoad);
});


function calculaMetricasParedeConvencional(materialData, larguraParede, alturaParede, custoTijolo, 
    espessuraJunta, espessuraChapisco, espessuraEmboco, espessuraReboco, dist_fab_rev, dist_rev_obra) {
    const metrics = {};
    
    // Quantidade de tijolos
    const areaParede = larguraParede * alturaParede;
    const alturaEfetivaTijolo  = espessuraJunta + materialData.altura_tijolo;
    const larguraEfetivaTijolo = espessuraJunta + materialData.largura_tijolo;
    const numTijolos = Math.ceil(areaParede / (alturaEfetivaTijolo * larguraEfetivaTijolo));
    const volumeParede = areaParede * materialData.profundidade_tijolo
    const volumeTijolo = materialData.altura_tijolo * materialData.largura_tijolo * materialData.profundidade_tijolo;
    const massaTijolos = numTijolos * materialData.massa_tijolo;

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
    const areiaAssentamento     = volumeAssentamento * materialData.areia_traco_assentamento;
    const aguaAssentamento      = volumeAssentamento * materialData.agua_traco_assentamento;

    // Etapa de chapisco
    const cimentoChapisco   = volumeChapisco * materialData.cimento_traco_chapisco;
    const plastifChapisco   = cimentoChapisco * 0.002;
    const areiaChapisco     = volumeChapisco * materialData.areia_traco_chapisco;
    const aguaChapisco      = volumeChapisco * materialData.agua_traco_chapisco;

    // Etapa de emboço
    const cimentoEmboco   = volumeEmboco * materialData.cimento_traco_emboco; 
    const plastifEmboco   = cimentoEmboco * 0.002;
    const areiaEmboco     = volumeEmboco * materialData.areia_traco_emboco;
    const aguaEmboco      = volumeEmboco * materialData.agua_traco_emboco;

    // Etapa de reboco
    const cimentoReboco   = volumeReboco * materialData.cimento_traco_reboco; 
    const plastifReboco   = cimentoReboco * 0.002;
    const areiaReboco     = volumeReboco * materialData.areia_traco_reboco;
    const aguaReboco      = volumeReboco * materialData.agua_traco_reboco;
    
    
    const totalCimento = cimentoAssentamento + cimentoChapisco + cimentoEmboco + cimentoReboco;
    const totalPlastificante = plastifAssentamento + plastifChapisco + plastifEmboco + plastifReboco;
    const totalAreia = areiaAssentamento + areiaChapisco + areiaEmboco + areiaReboco;
    const totalAguaConstrucao = aguaAssentamento + aguaChapisco + aguaEmboco + aguaReboco;
    
    // Custo (materiais)
    const custoTijolos = numTijolos * custoTijolo;
    const custoCimento = totalCimento * materialData.custo_cimento_kg;
    const custoPlastificante = totalPlastificante * materialData.custo_plastificante_litro;
    const custoAreia = totalAreia * materialData.custo_areia_m3;
    const custoAgua = totalAguaConstrucao * materialData.custo_agua_litro;

    metrics.numTijolos = numTijolos;
    metrics.custo = custoTijolos + custoCimento + custoPlastificante + custoAreia + custoAgua;

    // Água
    const totalAgua = (materialData.agua_producao_tijolo * numTijolos) + totalAguaConstrucao;                       
    metrics.agua = totalAgua;

    // CO2 Tijolo Cerâmico
    const co2_producao = massaTijolos * materialData.fator_emissao_co2_fabricacao;
                
    dist_transporte = (dist_fab_rev * 2) + (dist_rev_obra * 2); // ida e volta
    co2_transporte = dist_transporte * (massaTijolos/1000.0) * materialData.fator_emissao_co2_transporte;
    // kg = km * ton * (kg CO2 / (ton * km))
    metrics.co2 = co2_producao + co2_transporte;

    // Resíduos por m²
    metrics.residuos = materialData.residuos_m2 * areaParede;

    // Energia por m²
    metrics.energia = materialData.energia_m2 * areaParede;

    // Relatório detalhado (para debug)
    console.log(`--- Detalhes da alvenaria convencional ---`);
    console.log(`Área da parede: ${formatNumber(areaParede)} m²`);
    console.log(`Número de tijolos: ${formatNumber(numTijolos)}`);
    console.log(`Massa dos tijolos: ${formatNumber(massaTijolos)} kg`);
    console.log(`Volume de tijolos: ${formatNumber(volumeTijolos)} m³`);
    console.log(`Volume de argamassa de assentamento: ${formatNumber(volumeAssentamento)} m³`);
    console.log(`Volume de chapisco: ${formatNumber(volumeChapisco)} m³`);
    console.log(`Volume de emboço: ${formatNumber(volumeEmboco)} m³`);
    console.log(`Volume de reboco: ${formatNumber(volumeReboco)} m³`);
    console.log(`Custo dos tijolos: R$ ${formatNumber(custoTijolos)}`);
    console.log(`Custo do cimento: R$ ${formatNumber(custoCimento)}`);
    console.log(`Custo do plastificante: R$ ${formatNumber(custoPlastificante)}`);
    console.log(`Custo da areia: R$ ${formatNumber(custoAreia)}`);
    console.log(`Custo da água: R$ ${formatNumber(custoAgua)}`);
    console.log(`Custo de materiais: R$ ${formatNumber(metrics.custo)}`);
    console.log(`CO2 da produção: ${formatNumber(co2_producao)} kg`);
    console.log(`CO2 do transporte: ${formatNumber(co2_transporte)} kg`);

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
  
  return litros; // Retorna o valor numérico para permitir cálculos
}

function calculaMetricasParedeEcologica(materialData, larguraParede, alturaParede, custoTijolo, 
    rendimentoAssentamento, espessuraRejunte, dist_fab_obra, showlog=true) {
    const metrics = {};
    
    // Quantidade de tijolos
    const areaParede = larguraParede * alturaParede;
    const alturaEfetivaTijolo  = materialData.altura_tijolo;
    const larguraEfetivaTijolo = materialData.largura_tijolo;
    const numTijolos = Math.ceil(areaParede / (alturaEfetivaTijolo * larguraEfetivaTijolo));
    const volumeParede = areaParede * materialData.profundidade_tijolo
    const massaTijolos = numTijolos * materialData.massa_tijolo;

    // Volumes necessários ao cálculo de consumo por etapa
    const volumeTijolos = numTijolos * (materialData.altura_tijolo * materialData.largura_tijolo * materialData.profundidade_tijolo);
    
    // Volume de cola para assentamento
    const volumeAssentamento = numTijolos / rendimentoAssentamento; // litros

    // Volume de rejunte
    const areaRejunte = Math.PI * (espessuraRejunte / 2) * (espessuraRejunte / 2);
    const volumeRejunte = areaRejunte * (numTijolos * (materialData.altura_tijolo + materialData.largura_tijolo)) * 1000; // litros
    const volumeRejunteCorrigido = calcularRejunte(areaParede, espessuraRejunte * 1000); // litros
    
    const totalCimento = massaTijolos * materialData.fracao_cimento_por_tijolo;
    // Adicionar a água utilizada no rejunte + limpeza dos tijolos
    const totalAguaConstrucao = numTijolos * 0.1;
    
    // Custo (materiais)
    const custoTijolos = numTijolos * custoTijolo;
    const custoCimento = totalCimento * materialData.custo_cimento_kg;
    const custoAssentamento = volumeAssentamento * materialData.custo_cola_litro;
    const custoRejunte = volumeRejunteCorrigido * materialData.custo_rejunte_litro;
    const custoAgua = totalAguaConstrucao * materialData.custo_agua_litro;

    metrics.numTijolos = numTijolos;
    metrics.custo = custoTijolos + custoCimento + custoAssentamento + custoRejunte + custoAgua;

    // Água
    const totalAgua = (materialData.agua_producao_tijolo * numTijolos) + totalAguaConstrucao;                       
    metrics.agua = totalAgua;

    // CO2 Tijolo Ecológico
    const co2_producao = totalCimento * materialData.co2_producao_cimento;
    dist_transporte = (dist_fab_obra * 2) ; // ida e volta
    co2_transporte = dist_transporte * (massaTijolos/1000.0) * materialData.fator_emissao_co2_transporte;
    // kg = km * ton * (kg CO2 / (ton * km))
    metrics.co2 = co2_producao + co2_transporte;

    // Resíduos por m²
    metrics.residuos = materialData.residuos_m2 * areaParede;

    // Energia por m²
    metrics.energia = materialData.energia_m2 * areaParede;

    // Resíduo de poliéster (apenas para o aditivado)
    metrics.residuo_poliester = (materialData.fator_emissao_co2_poliester_incinerado) ? (8.6/1000 * numTijolos) : 0; // kg

    metrics.reducao_emissao = metrics.residuo_poliester * materialData.fator_emissao_co2_poliester_incinerado;
    metrics.emissao_liquida_co2 = metrics.co2 - metrics.reducao_emissao;

    // Relatório detalhado (para debug)
    if (showlog) {
    console.log(`--- Detalhes da alvenaria ecológica ---`);
    console.log(`Área da parede: ${formatNumber(areaParede)} m²`);
    console.log(`Número de tijolos: ${formatNumber(numTijolos)}`);
    console.log(`Massa dos tijolos: ${formatNumber(massaTijolos)} kg`);
    console.log(`Volume de tijolos: ${formatNumber(volumeTijolos)} m³`);
    console.log(`Volume de argamassa de assentamento: ${formatNumber(volumeAssentamento)} L`);
    console.log(`Volume de rejunte: ${formatNumber(volumeRejunte)} L`);
    console.log(`Volume de rejunte (calculado): ${formatNumber(volumeRejunteCorrigido, { minimumFractionDigits: 3, maximumFractionDigits: 3 })} L`);
    console.log(`Custo dos tijolos: R$ ${formatNumber(custoTijolos)}`);
    console.log(`Custo da argamassa de assentamento: R$ ${formatNumber(custoAssentamento)}`);
    console.log(`Custo do rejunte: R$ ${formatNumber(custoRejunte)}`);
    console.log(`Custo do cimento: R$ ${formatNumber(custoCimento)}`);
    console.log(`Custo da água: R$ ${formatNumber(custoAgua)}`);
    console.log(`Custo de materiais: R$ ${formatNumber(metrics.custo)}`);
    console.log(`CO2 da produção: ${formatNumber(co2_producao)} kg`);
    console.log(`CO2 do transporte: ${formatNumber(co2_transporte)} kg`);
    }

    return metrics;
}

function getEditedReferenceData() {
    const dataConv = { ...DEFAULT_DATA_CONVENCIONAL };
    const dataEco = { ...DEFAULT_DATA_ECOLOGICO };
    const dataEcoAditivado = { ...DEFAULT_DATA_ECOLOGICO_ADITIVADO };

    // Helper para ler valor do input
    const getValue = (id) => parseFloat(document.getElementById(id).value);

    // Dados Comuns
    dataConv.custo_cimento_kg = dataEco.custo_cimento_kg = dataEcoAditivado.custo_cimento_kg = getValue('ref-custo_cimento_kg');
    dataConv.custo_agua_litro = dataEco.custo_agua_litro = dataEcoAditivado.custo_agua_litro = getValue('ref-custo_agua_litro');
    dataConv.fator_emissao_co2_transporte = dataEco.fator_emissao_co2_transporte = dataEcoAditivado.fator_emissao_co2_transporte = getValue('ref-fator_emissao_co2_transporte');
    dataConv.co2_producao_cimento = dataEco.co2_producao_cimento = dataEcoAditivado.co2_producao_cimento = getValue('ref-co2_producao_cimento');

    // Dados Convencionais
    dataConv.fator_emissao_co2_fabricacao = getValue('ref-fator_emissao_co2_fabricacao');
    dataConv.custo_plastificante_litro = getValue('ref-custo_plastificante_litro');
    dataConv.custo_areia_m3 = getValue('ref-custo_areia_m3');
    dataConv.agua_producao_tijolo = getValue('ref-agua_producao_tijolo_conv');
    dataConv.residuos_m2 = getValue('ref-residuos_m2_conv');
    dataConv.cimento_traco_assentamento = getValue('ref-cimento_traco_assentamento');
    dataConv.cimento_traco_chapisco = getValue('ref-cimento_traco_chapisco');
    dataConv.cimento_traco_emboco = getValue('ref-cimento_traco_emboco');
    dataConv.cimento_traco_reboco = getValue('ref-cimento_traco_reboco');

    // Dados Ecológicos
    dataEco.fracao_cimento_por_tijolo = dataEcoAditivado.fracao_cimento_por_tijolo = getValue('ref-fracao_cimento_por_tijolo') / 100; // Converte de % para decimal
    dataEco.custo_cola_litro = dataEcoAditivado.custo_cola_litro = getValue('ref-custo_cola_litro');
    dataEco.custo_rejunte_litro = dataEcoAditivado.custo_rejunte_litro = getValue('ref-custo_rejunte_litro');
    dataEco.agua_producao_tijolo = dataEcoAditivado.agua_producao_tijolo = getValue('ref-agua_producao_tijolo_eco');
    dataEco.residuos_m2 = dataEcoAditivado.residuos_m2 = getValue('ref-residuos_m2_eco');

    return { dataConv, dataEco, dataEcoAditivado };
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
            const dist_fab_rev = parseFloat(document.getElementById('dist-fab-rev-conv').value); // km
            const dist_rev_obra = parseFloat(document.getElementById('dist-rev-obra-conv').value); // km

            const espessuraJunta = parseFloat(document.getElementById('espessura-junta-conv').value) / 100.0; // Espessura da junta de assentamento (m)
            const espessuraChapisco = parseFloat(document.getElementById('espessura-chapisco-conv').value) / 100.0; // Espessura do chapisco (m)
            const espessuraEmboco = parseFloat(document.getElementById('espessura-emboco-conv').value) / 100.0; // Espessura do emboço (m)
            const espessuraReboco = parseFloat(document.getElementById('espessura-reboco-conv').value) / 100.0; // Espessura do reboco (m)
            
            
            

            if (isNaN(custoTijoloConv) || isNaN(larguraParede) || isNaN(alturaParede)) {
                throw new Error(translations[currentLang].errorInvalidValues);
            }
            if (larguraParede <= 0 || alturaParede <= 0) {
                throw new Error(translations[currentLang].errorPositiveValues);
            }

            const totalM2 = larguraParede * alturaParede;

            // Parâmetros da alvenaria com tijolo ecológico
            const custoTijoloEco = parseFloat(document.getElementById('custo-tijolo-eco').value);
            const dist_fab_obra = parseFloat(document.getElementById('dist-fab-obra-eco').value); // km
            const rendimentoAssentamento = parseFloat(document.getElementById('valor-rendimento-assentamento').value); // tijolos por litro
            const espessuraRejunte = parseFloat(document.getElementById('valor-espessura-rejunte').value) / 100.0; // m

            // Pega os dados de referência (editáveis) da UI
            const { dataConv, dataEco, dataEcoAditivado } = getEditedReferenceData();

            // Cálculos
            const conv = calculaMetricasParedeConvencional(dataConv, larguraParede, alturaParede, custoTijoloConv, 
                espessuraJunta, espessuraChapisco, espessuraEmboco, espessuraReboco, dist_fab_rev, dist_rev_obra);
            const eco = calculaMetricasParedeEcologica(dataEco, larguraParede, alturaParede, custoTijoloEco, 
                rendimentoAssentamento, espessuraRejunte, dist_fab_obra, showlog=true);
            // NOTA: Usando o mesmo preço do ecológico para o aditivado.
            const ecoAditivado = calculaMetricasParedeEcologica(dataEcoAditivado, larguraParede, alturaParede, custoTijoloEco, 
                rendimentoAssentamento, espessuraRejunte, dist_fab_obra, showlog=false);

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

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang.split('-')[0];

    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            // Use innerHTML for keys that might contain superscripts like <sup>1</sup>
            if (key === 'additiveEcoNote') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('#language-switcher').forEach(button => {
        button.textContent = translations[lang].langButton;
    });

    // Re-populate reference data to update descriptions
    populateReferenceData();
}

function populateReferenceData() {
    const comumBody = document.getElementById('ref-comum-body');
    const convBody = document.getElementById('ref-conv-body');
    const ecoBody = document.getElementById('ref-eco-body');

    // Usando os dados default para popular os campos
    const dataComum = {
        "custo_cimento_kg": ["refCostCement", DEFAULT_DATA_CONVENCIONAL.custo_cimento_kg, 0.01],
        "custo_agua_litro": ["refCostWater", DEFAULT_DATA_CONVENCIONAL.custo_agua_litro, 0.001],
        "fator_emissao_co2_transporte": ["refCO2FactorTransport", DEFAULT_DATA_CONVENCIONAL.fator_emissao_co2_transporte, 0.001],
        "co2_producao_cimento": ["refCO2ProdCement", DEFAULT_DATA_ECOLOGICO.co2_producao_cimento, 0.01]
    };

    const dataConv = {
        "fator_emissao_co2_fabricacao": ["refCO2FactorBrickProd", DEFAULT_DATA_CONVENCIONAL.fator_emissao_co2_fabricacao, 0.01],
        "custo_plastificante_litro": ["refCostPlasticizer", DEFAULT_DATA_CONVENCIONAL.custo_plastificante_litro, 0.01],
        "custo_areia_m3": ["refCostSand", DEFAULT_DATA_CONVENCIONAL.custo_areia_m3, 1],
        "agua_producao_tijolo_conv": ["refWaterConsumptionBrickConv", DEFAULT_DATA_CONVENCIONAL.agua_producao_tijolo, 0.01],
        "residuos_m2_conv": ["refWasteGenerationConv", DEFAULT_DATA_CONVENCIONAL.residuos_m2, 0.1],
        "cimento_traco_assentamento": ["refCementRatioMortar", DEFAULT_DATA_CONVENCIONAL.cimento_traco_assentamento, 1],
        "cimento_traco_chapisco": ["refCementRatioRoughcast", DEFAULT_DATA_CONVENCIONAL.cimento_traco_chapisco, 1],
        "cimento_traco_emboco": ["refCementRatioRender", DEFAULT_DATA_CONVENCIONAL.cimento_traco_emboco, 1],
        "cimento_traco_reboco": ["refCementRatioPlaster", DEFAULT_DATA_CONVENCIONAL.cimento_traco_reboco, 1],
    };

    const dataEco = {
        "fracao_cimento_por_tijolo": ["refCementFractionEco", DEFAULT_DATA_ECOLOGICO.fracao_cimento_por_tijolo * 100, 0.1],
        "custo_cola_litro": ["refCostAdhesive", DEFAULT_DATA_ECOLOGICO.custo_cola_litro, 0.01],
        "custo_rejunte_litro": ["refCostGrout", DEFAULT_DATA_ECOLOGICO.custo_rejunte_litro, 0.01],
        "agua_producao_tijolo_eco": ["refWaterConsumptionBrickEco", DEFAULT_DATA_ECOLOGICO.agua_producao_tijolo, 0.01],
        "residuos_m2_eco": ["refWasteGenerationEco", DEFAULT_DATA_ECOLOGICO.residuos_m2, 0.1],
        "fator_emissao_co2_poliester_incinerado": ["refCO2FactorPolyester", DEFAULT_DATA_ECOLOGICO_ADITIVADO.fator_emissao_co2_poliester_incinerado, 0.1]
    };

    const fillTable = (tbody, data) => {
        tbody.innerHTML = '';
        for (const [key, [descriptionKey, value, step]] of Object.entries(data)) {
            const description = translations[currentLang][descriptionKey] || descriptionKey;
            // Extrai a unidade da descrição (texto entre parênteses)
            const match = description.match(/\(([^)]+)\)/);
            const unit = match ? match[1] : '';
            const cleanDescription = description.replace(/\s*\(([^)]+)\)/, '').trim();

            const row = tbody.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = cleanDescription;

            if (unit) {
                cell2.innerHTML = `
                    <div class="input-group input-group-sm">
                        <input type="number" class="form-control" id="ref-${key}" value="${value}" step="${step}">
                        <span class="input-group-text">${unit}</span>
                    </div>`;
            } else {
                cell2.innerHTML = `<input type="number" class="form-control form-control-sm" id="ref-${key}" value="${value}" step="${step}">`;
            }
        }
    };

    fillTable(comumBody, dataComum);
    fillTable(convBody, dataConv);
    fillTable(ecoBody, dataEco);
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
            labels: [
                translations[currentLang].chartLabelConventional, 
                translations[currentLang].chartLabelEcological, 
                translations[currentLang].chartLabelEcologicalAdditive
            ],
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
                title: { display: true, text: chartTitle, font: { size: 16 } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            if (value === null) return '';
                            const formattedValue = formatNumber(value);

                            if (chartLabel.includes('R$')) {
                                return `R$ ${formattedValue}`;
                            }
                            
                            return `${context.dataset.label || ''}: ${formattedValue}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            const formattedValue = formatNumber(value, { maximumFractionDigits: 0 });
                            if (chartLabel.includes('R$')) {
                                return `R$ ${formattedValue}`;
                            }
                            return formattedValue;
                        }
                    }
                }
            }
        }
    });
}

function displayResults(conv, eco, ecoAditivado, totalM2) {
    const resultsBody1 = document.getElementById('results-body');
    const resultsBody2 = document.getElementById('results-body-aditivado');
    
    const resultsHtml1 = `
        <tr>
            <td data-lang-key="wallArea">${translations[currentLang].wallArea}</td>
            <td colspan="3" style="font-weight: bold;">${formatNumber(totalM2)} m²</td>
        </tr>        
        <tr>
            <td data-lang-key="totalBricks">${translations[currentLang].totalBricks}</td>
            <td class="conventional-col">${formatNumber(conv.numTijolos, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} un</td>
            <td class="ecological-col">${formatNumber(eco.numTijolos, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} un</td>
        </tr>
        <tr>
            <td data-lang-key="carbonEmission">${translations[currentLang].carbonEmission}</td>
            <td class="conventional-col">${formatNumber(conv.co2)} kg CO₂</td>
            <td class="ecological-col">${formatNumber(eco.co2)} kg CO₂</td>            
        </tr>
        <tr>
            <td data-lang-key="wasteGeneration">${translations[currentLang].wasteGeneration}</td>
            <td class="conventional-col">${formatNumber(conv.residuos)} kg</td>
            <td class="ecological-col">${formatNumber(eco.residuos)} kg</td>            
        </tr>
        <tr>
            <td data-lang-key="waterConsumption">${translations[currentLang].waterConsumption}</td>
            <td class="conventional-col">${formatNumber(conv.agua)} L</td>
            <td class="ecological-col">${formatNumber(eco.agua)} L</td>            
        </tr>
        <tr>
            <td data-lang-key="materialCost">${translations[currentLang].materialCost}</td>
            <td class="conventional-col">R$ ${formatNumber(conv.custo)}</td>
            <td class="ecological-col">R$ ${formatNumber(eco.custo)}</td>            
        </tr>
    `;
    resultsBody1.innerHTML = resultsHtml1;

    // Table 2: Conventional vs. Ecological Additive
    const resultsHtml2 = `
        <tr>
            <td data-lang-key="wallArea">${translations[currentLang].wallArea}</td>
            <td colspan="2" style="font-weight: bold;">${formatNumber(totalM2)} m²</td>
        </tr>
        <tr>
            <td data-lang-key="totalBricks">${translations[currentLang].totalBricks}</td>
            <td class="conventional-col">${formatNumber(conv.numTijolos, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} un</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.numTijolos, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} un</td>
        </tr>
        <tr>
            <td data-lang-key="carbonEmission">${translations[currentLang].carbonEmission}</td>
            <td class="conventional-col">${formatNumber(conv.co2)} kg CO₂</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.co2)} kg CO₂</td>
        </tr>
        <tr>
            <td data-lang-key="wasteGeneration">${translations[currentLang].wasteGeneration}</td>
            <td class="conventional-col">${formatNumber(conv.residuos)} kg</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.residuos)} kg</td>
        </tr>
        <tr>
            <td data-lang-key="waterConsumption">${translations[currentLang].waterConsumption}</td>
            <td class="conventional-col">${formatNumber(conv.agua)} L</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.agua)} L</td>
        </tr>
        <tr>
            <td data-lang-key="materialCost">${translations[currentLang].materialCost}</td>
            <td class="conventional-col">R$ ${formatNumber(conv.custo)}</td>
            <td class="ecological-col">R$ ${formatNumber(ecoAditivado.custo)}</td>
        </tr>
        <tr>
            <td data-lang-key="polyesterResidue">${translations[currentLang].polyesterResidue}</td>
            <td class="conventional-col">-</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.residuo_poliester)} kg</td>
        </tr>
        <tr>
            <td data-lang-key="co2EmissionReduction">${translations[currentLang].co2EmissionReduction}</td>
            <td class="conventional-col">-</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.reducao_emissao)} kg CO₂</td>
        </tr>
        <tr>
            <td data-lang-key="netCo2Emission">${translations[currentLang].netCo2Emission}</td>
            <td class="conventional-col">${formatNumber(conv.co2)} kg CO₂</td>
            <td class="ecological-col">${formatNumber(ecoAditivado.emissao_liquida_co2)} kg CO₂</td>
        </tr>
    `;
    resultsBody2.innerHTML = resultsHtml2;
   
    // --- CHART CREATION ---
    const co2Data = [conv.co2, eco.co2, ecoAditivado.emissao_liquida_co2];
    co2Chart = createOrUpdateChart(co2Chart, 'co2-chart', translations[currentLang].chartCO2, translations[currentLang].chartCO2, co2Data);

    const wasteData = [conv.residuos, eco.residuos, ecoAditivado.residuos];    
    wasteChart = createOrUpdateChart(wasteChart, 'waste-chart', translations[currentLang].chartWaste, translations[currentLang].chartWaste, wasteData);

    const waterData = [conv.agua, eco.agua, ecoAditivado.agua];    
    waterChart = createOrUpdateChart(waterChart, 'water-chart', translations[currentLang].chartWater, translations[currentLang].chartWater, waterData);

    const costData = [conv.custo, eco.custo, ecoAditivado.custo];    
    costChart = createOrUpdateChart(costChart, 'cost-chart', translations[currentLang].chartCost, translations[currentLang].chartCost, costData);

    document.getElementById('loading-message').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';
}
