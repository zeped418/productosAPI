function getData() {
    let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });//fetch
    promesa
        .then((response) => {
            response.json()
                .then((data) => {
                    createCards(data);
                })
                .catch((error) => {
                    console.error(error, "Ups! error en JSON");
                })
        })
        .catch((error) => {
            console.error(error, "Ups! error");
        });
};//getData


let mainProds = document.getElementById("main__prods");
function createCards(prods) {
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",
            `
                    <!-- productos-->
                    <div class="col" style="margin-bottom: 1rem;">
                        <div class="card card__team">
                            <div style="text-align: center;">
                                <img src="${prod.image}"
                                    style="width: 150px; height: 150px; margin-top: 1rem;"
                                    class="img-fluid rounded" alt="${prod.title}">
                            </div>
                            <div class="card-body">
                                <div class="nombre__integrante">
                                    <span>${prod.title.slice(0,30)}</span>
                                </div>
                                <div class="profesion__integrante">
                                    <span>${prod.category}</span>
                                </div>
                                <p class="card-text" style="text-align: justify;">${prod.description.slice(0, 80)} ... </p>
                            </div>
                            
                            <div style="text-align:right; margin-top:0;">
                            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}" style="width:100px; margin: 15px;">
                                Ver más
                            </button>

                            </div>

                            <div class="modal fade" id="exampleModal${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h6 class="modal-title"><strong>${prod.title}</strong>  </h6>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>${prod.description}</p>
                                        </div>
                                        <div style="text-align:right;">
                                            <p><strong>Price:</strong> ${prod.price} USD &ensp;&ensp;</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        );

    });
}


getData();
