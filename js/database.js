function dbDia(num)
	{
		const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		return semana[num];
	}

function dbSitios()
	{
		const db = [
			{"clave":"norte", "sitio":"Costa Norte", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1AW-sz4dfRQPeRaLH2Mym4lPjw-doJ5qm&ehbc=2E312F"},
			{"clave":"norte", "sitio":"Costa Norte ", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1AW-sz4dfRQPeRaLH2Mym4lPjw-doJ5qm&ehbc=2E312F"},
			{"clave":"malvinas", "sitio":"Monumento Malvinas", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1AW-sz4dfRQPeRaLH2Mym4lPjw-doJ5qm&ehbc=2E312F"},
			{"clave":"malvinas", "sitio":"Monumento Malvinas", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1AW-sz4dfRQPeRaLH2Mym4lPjw-doJ5qm&ehbc=2E312F"},
			{"clave":"popper", "sitio":"Punta Popper", "circular":"Transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1AW-sz4dfRQPeRaLH2Mym4lPjw-doJ5qm&ehbc=2E312F"},
			{"clave":"popper", "sitio":"Punta Popper", "circular":"No transitar", "mapa":"https://www.google.com/maps/d/u/0/embed?mid=1AW-sz4dfRQPeRaLH2Mym4lPjw-doJ5qm&ehbc=2E312F"}
		]

		return db;
	}

function dbMareas()
	{
		const db = [
			{"mes":0, "dia":1, "mareas":[{"horas":0, "minutos":56, "altura":11.95},{"horas":6, "minutos":51, "altura":7.69},{"horas":13, "minutos":24, "altura":1.06},{"horas":19, "minutos":39, "altura":7.83}]},
			{"mes":0, "dia":2, "mareas":[{"horas":0, "minutos":56, "altura":1.95},{"horas":6, "minutos":51, "altura":7.69},{"horas":13, "minutos":24, "altura":1.06},{"horas":19, "minutos":39, "altura":7.83}]},
			{"mes":1, "dia":18, "mareas":[{"horas":0, "minutos":56, "altura":1.95},{"horas":6, "minutos":51, "altura":7.69},{"horas":13, "minutos":24, "altura":1.06},{"horas":19, "minutos":39, "altura":7.83}]}		
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
				mareas[0].estado="bajamar";
				mareas[1].estado="pleamar";
				mareas[2].estado="bajamar";
				mareas[3].estado="pleamar";
			}
		else
			{
				mareas[0].estado="pleamar";
				mareas[1].estado="bajamar";
				mareas[2].estado="pleamar";
				mareas[3].estado="bajamar";
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