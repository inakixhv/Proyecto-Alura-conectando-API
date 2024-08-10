const url = "https://api.nasa.gov/planetary/apod?api_key=tzYNAHIN9n7QbuX6lxwUqZXsQxFemaQoNMglLEYz&count=15";

async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();
        

        const card = document.querySelector('[data-ul]');
        datosImagenes.forEach(element => {
            const contenido= `<li class="card">
                    <img class="card__image" src="${element.url}" alt="imagen">
                    <h3 class="card__title">${element.title}</h3>
                </li>`

            card.innerHTML=card.innerHTML+ contenido;
        });
    }
    catch(error){
        console.log(error);
    }
}




// then y catch
/*function listaImagenes(){
    fetch(url)
    .then(response=>response.json())
    .then(datosImagenes => {
        console.log(datosImagenes);

        const card = document.querySelector('[data-ul]');
        datosImagenes.forEach(element => {
            const contenido= `<li class="card">
                    <img class="card__image" src="${element.url}" alt="imagen">
                    <h3 class="card__title">${element.title}</h3>
                </li>`

            card.innerHTML=card.innerHTML+ contenido;
        });
    })
    .catch(error => console.log('error'));
}*/

listaImagenes();
