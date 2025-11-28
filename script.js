// Dados simulados dos carros (Você pode substituir por uma API no futuro)
const carrosData = [
    { modelo: "Fiat Mobi", ano: 2020, preco: 45000, marca: "Fiat", imagem: "imagens/fiat-mobi.jpg" },
    { modelo: "VW Gol", ano: 2018, preco: 38000, marca: "Volkswagen", imagem: "imagens/vw-gol.jpg" },
    { modelo: "Chevrolet Onix", ano: 2021, preco: 60000, marca: "Chevrolet", imagem: "imagens/chevrolet-onix.jpg" },
    { modelo: "Hyundai HB20", ano: 2022, preco: 72000, marca: "Hyundai", imagem: "imagens/hyundai-hb20.jpg" },
    { modelo: "Ford Ka", ano: 2017, preco: 35000, marca: "Ford", imagem: "imagens/ford-ka.jpg" },
    // **Importante:** Crie a pasta 'imagens' e coloque as fotos com esses nomes!
];

const carList = document.getElementById('car-list');
const searchInput = document.getElementById('search-model');
const applyFiltersButton = document.getElementById('apply-filters');

// Função para criar o HTML de um único card
function createCarCard(car) {
    return `
        <div class="car-card" data-marca="${car.marca}" data-ano="${car.ano}">
            <img src="${car.imagem}" alt="${car.modelo}">
            <h3>${car.modelo}</h3>
            <p class="ano">Ano: ${car.ano}</p>
            <p class="preco">R$ ${car.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }</p>
            <a href="#" class="btn-detalhes">Ver Detalhes</a>
        </div>
    `;
}

// Renderiza a lista de carros
function renderCars(cars) {
    carList.innerHTML = ''; // Limpa antes de renderizar
    if (cars.length === 0) {
        carList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Nenhum carro encontrado com este filtro.</p>';
        return;
    }
    cars.forEach(car => {
        carList.innerHTML += createCarCard(car);
    });
}

// Filtra os carros com base no input de busca
function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = carrosData.filter(car => {
        // Verifica se o termo de busca está no modelo ou na marca
        const modelMatch = car.modelo.toLowerCase().includes(searchTerm);
        const brandMatch = car.marca.toLowerCase().includes(searchTerm);
        return modelMatch || brandMatch; 
    });

    renderCars(filtered);
}

// Event Listeners para a busca
applyFiltersButton.addEventListener('click', filterCars);
searchInput.addEventListener('keyup', (event) => {
    // Filtra automaticamente ao digitar, mas pode ser ajustado para só filtrar no 'Enter'
    filterCars();
});

// 🚀 Inicia a página carregando todos os carros
document.addEventListener('DOMContentLoaded', () => {
    renderCars(carrosData);
});