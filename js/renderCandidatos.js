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
			div.setAttribute('id', 'cardCandidato');
			div.innerHTML = `
			<img class="card-img-top img-fluid" src="${element.foto}">		
			<button onclick="getID ()" type="button" class="btn btn-primary mt-1 mb-2" data-bs-toggle="modal" data-bs-target="#adopcionModal">
			Adoptar
			</button>
			<p class="card-text">ID: ${element.id}</p>
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

const getID = async () => {
	try {
		let contentID = document.getElementById('candidatoID');
		let candidatoIdentify = document.createElement('p');
		candidatoIdentify.innerHTML = `ID: ${element.id}`;
		contentID.append(candidatoIdentify);
	} catch (error) {
		console.log(error);
	}
};
