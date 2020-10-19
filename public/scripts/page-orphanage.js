const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create Map
const map = L.map('mapid', options).setView([-22.8185356,-47.2663912], 15);

// Create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

// Create Icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L
.marker([-22.8185356,-47.2663912], { icon })
.addTo(map)

/* image gallery */

function selectImage(event){
    const button = event.currentTarget
    console.log(button)
    
    // remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove('active')
    }

    // selecionar a imagem clicada 

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem

    imageContainer.src = image.src

    // adicionar a calsse .active para este botao
    button.classList.add('active')


}
