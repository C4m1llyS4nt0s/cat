const catContainer = document.getElementById('cat-container');
const getCatButton = document.getElementById('get-cat');


async function fetchCatImage() {        
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        
        if(data && data.length > 0) {
            const catImage = document.createElement('img');
            catImage.src = data[0].url;            
           
            catContainer.innerHTML = ''; 
            catContainer.appendChild(catImage);
        }
    } catch (error) {
        console.error('Erro ao buscar gato:', error);
        catContainer.innerHTML = '<p>Não foi possível carregar a imagem do gato 😿</p>';
    }
}

getCatButton.addEventListener('click', fetchCatImage);

fetchCatImage();    