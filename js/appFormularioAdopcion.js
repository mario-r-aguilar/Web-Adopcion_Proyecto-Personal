let formularioAdopcion = document.forms['datosAdopcion'];
let datosFormularioAdopcion = [];

formularioAdopcion.onsubmit = (e) => {
	e.preventDefault();
	let ID = formularioAdopcion.ID.value;
	let nombreCompleto = formularioAdopcion.nombreCompleto.value;
	let telefono = formularioAdopcion.telefono.value;
	let barrio = formularioAdopcion.barrio.value;
	let tipoDeVivienda = formularioAdopcion.tipoDeVivienda.value;
	let email = formularioAdopcion.email.value;
	let redSocial = formularioAdopcion.redSocial.value;
	let usuarioRedSocial = formularioAdopcion.usuarioRedSocial.value;

	datosFormularioAdopcion = [];

	datosFormularioAdopcion.push(
		ID,
		nombreCompleto,
		telefono,
		barrio,
		tipoDeVivienda,
		email,
		redSocial,
		usuarioRedSocial
	);

	document.getElementById('datosAdopcion').reset();

	const modalStatus = document.getElementById('cerrarModal');
	modalStatus.click();

	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Pronto nos comunicaremos con vos!',
		showConfirmButton: false,
		timer: 2000,
	});

	console.log(datosFormularioAdopcion);
};
