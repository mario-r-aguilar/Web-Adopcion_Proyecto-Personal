let contenedor = document.getElementById('contenedor');
const renderizar = async () => {
	try {
		const respuesta = await fetch('../js/candidatos.JSON');
		const datos = await respuesta.json();
		datos.forEach((element) => {
			const div = document.createElement('div');
			div.classList.add('col-sm-6');
			div.classList.add('col-md-4');
			div.classList.add('col-lg-3');
			div.classList.add('card');
			div.classList.add('border-0');
			div.innerHTML = `
        <img class="card-img-top img-fluid" src="${element.foto}">
        <p class="card-text">Sexo: ${element.sexo}</p>
        <p class="card-text">Edad: ${element.edad} año/s</p>
        <p class="card-text">Castrado: ${element.castrado}</p>
        <p class="card-text">Vacunas: ${element.vacunas}</p>
        <p class="card-text">Desparasitado: ${element.desparasitado}</p>
        <p class="card-text">Observaciones: ${element.observaciones}</p>
        `;
			contenedor.append(div);
		});
	} catch (error) {
		console.log(error);
	}
};
renderizar();
