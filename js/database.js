function dbMareas()
	{
		const db = [
			{"mes":1, "dia":19, "mareas":[{"horas":4, "minutos":18, "altura":1.53},{"horas":10, "minutos":13, "altura":7.94},{"horas":16, "minutos":37, "altura":0.91},{"horas":22, "minutos":43, "altura":7.96}]},
			{"mes":1, "dia":20, "mareas":[{"horas":4, "minutos":56, "altura":1.30},{"horas":10, "minutos":53, "altura":8.05},{"horas":17, "minutos":17, "altura":0.94},{"horas":23, "minutos":19, "altura":7.95}]},
			{"mes":1, "dia":21, "mareas":[{"horas":5, "minutos":37, "altura":1.21},{"horas":11, "minutos":36, "altura":8.01},{"horas":18, "minutos":0, "altura":1.16}]},
			{"mes":1, "dia":22, "mareas":[{"horas":0, "minutos":0, "altura":7.83},{"horas":6, "minutos":22, "altura":1.26},{"horas":12, "minutos":25, "altura":7.84},{"horas":18, "minutos":47, "altura":1.53}]},
			{"mes":1, "dia":23, "mareas":[{"horas":0, "minutos":46, "altura":7.60},{"horas":7, "minutos":11, "altura":1.45},{"horas":13, "minutos":23, "altura":7.56},{"horas":19, "minutos":40, "altura":2.00}]},
			{"mes":1, "dia":24, "mareas":[{"horas":1, "minutos":41, "altura":7.32},{"horas":8, "minutos":9, "altura":1.70},{"horas":14, "minutos":31, "altura":7.28},{"horas":20, "minutos":43, "altura":2.46}]},
			{"mes":1, "dia":25, "mareas":[{"horas":2, "minutos":47, "altura":7.06},{"horas":9, "minutos":17, "altura":1.91},{"horas":15, "minutos":49, "altura":7.13},{"horas":21, "minutos":58, "altura":2.75}]},
			{"mes":1, "dia":26, "mareas":[{"horas":4, "minutos":2, "altura":6.95},{"horas":10, "minutos":35, "altura":1.91},{"horas":17, "minutos":8, "altura":7.18},{"horas":23, "minutos":19, "altura":2.72}]},
			{"mes":1, "dia":27, "mareas":[{"horas":5, "minutos":18, "altura":7.05},{"horas":11, "minutos":51, "altura":1.65},{"horas":18, "minutos":21, "altura":7.43}]},
			{"mes":1, "dia":28, "mareas":[{"horas":0, "minutos":29, "altura":2.39},{"horas":6, "minutos":27, "altura":7.33},{"horas":12, "minutos":55, "altura":1.24},{"horas":19, "minutos":23, "altura":7.75}]},
			{"mes":2, "dia":1, "mareas":[{"horas":1, "minutos":28, "altura":1.94},{"horas":7, "minutos":28, "altura":7.67},{"horas":13, "minutos":50, "altura":0.84},{"horas":20, "minutos":16, "altura":8.05}]},
			{"mes":2, "dia":2, "mareas":[{"horas":2, "minutos":18, "altura":1.51},{"horas":8, "minutos":21, "altura":7.99},{"horas":14, "minutos":39, "altura":0.57},{"horas":21, "minutos":1, "altura":8.24}]}						
		]

		return db;
	}

function dbDia(num)
	{
		const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		return semana[num];
	}

function dbSitios()
	{
		const db = [
			{"clave":"norte", "sitio":"Costa Norte", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1zsMgskGdRRw7KyFd0tlvqmqRm8X_kcuL&ehbc=2E312F"},
			{"clave":"norte", "sitio":"Costa Norte ", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1eM9rWFIz1u_bxq6MyhEhE8cBbmS5Wn3C&ehbc=2E312F"},
			{"clave":"malvinas", "sitio":"Monumento Malvinas", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1aMmMIPxf2Ldqi3Kzd5Iub_anxrauWlqF&ehbc=2E312F"},
			{"clave":"malvinas", "sitio":"Monumento Malvinas", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=17qKk4hHmpDEGy-YzBX42enl09BFlp1ME&ehbc=2E312F"},
			{"clave":"popper", "sitio":"Punta Popper", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1CNUUXrJYfagvRE3xZYmH947Ep41SsOhm&ehbc=2E312F"},
			{"clave":"popper", "sitio":"Punta Popper", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1WqlxM6bQhlQiqXNZFf75gQAtkSJ7Ndas&ehbc=2E312F"}
		]

		return db;
	}

//Funcion que filtra el listado de mareas segun el mes y el dia.
function filtrarFecha(mes, dia)
	{
		let buscado;
		const db = dbMareas();
		for ( dato of db)
			{
				if(dato.mes === mes && dato.dia === dia)
					{
						buscado= definirEstado(dato.mareas);
						return buscado;
					}
			}
		return null;
	}

//Funcion que define cuales son "pleamar" y cuales "bajamar".
function definirEstado(mareas)
	{
		
		if(mareas[0].altura < mareas[1].altura)
			{
				for(num in mareas)
					{
						if (num%2 === 0)
							{
								mareas[num].estado="bajamar";			
							}
						else
							{
								mareas[num].estado="pleamar"
							}
					}
			}
		else
			{
				for(num in mareas)
					{
						if (num%2 === 0)
							{
								mareas[num].estado="pleamar";			
							}
						else
							{
								mareas[num].estado="bajamar"
							}
					}
			}
		
		return mareas;
	}

function filtrarSitio(marea, lugar, actual)
	{
		const sitios = dbSitios();
		const circular = marea[Number(actual)].circular;
		for(sitio in sitios)
			{
				if (sitios[sitio].clave===lugar && sitios[sitio].circular===circular)
					{
						return sitios[sitio];
					}
			}
	}