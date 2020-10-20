// Create Map
const map = L.map('mapid').setView([-22.8185356,-47.2663912], 15);

// Create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

// Create Icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor: [170, 2]
 })

let marker;

// create and add marker
map.on('click', (event) => {
    console.log()
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove marker from map
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})

// adicionar o campo de fotos

function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicinoar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//select yes or no

function toggleSelect(event) {
    
    
    //retirar a classe active dos botoes
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'))

    // colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')

    //verificar se sim ou nao
    
    input.value = button.dataset.value
}

function validate(event){
/*
    //validar se lat e lng estao preenchidos 
    //precisa pegar o campo e verificar se esta vazio
    const needsLatandLng = true;
    if(needsLatandLng){

    } 
    event.preventDefault() // nao envia o formulario
    alert('Selecione um ponto no mapa!')
*/
}
