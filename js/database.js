function dbMareas()
	{
		const db = [
			{"mes":0, "dia":1, "mareas":[{"horas":0, "minutos":56, "altura":11.95},{"horas":6, "minutos":51, "altura":7.69},{"horas":13, "minutos":24, "altura":1.06},{"horas":19, "minutos":39, "altura":7.83}]},
			{"mes":0, "dia":2, "mareas":[{"horas":0, "minutos":56, "altura":1.95},{"horas":6, "minutos":51, "altura":7.69},{"horas":13, "minutos":24, "altura":1.06},{"horas":19, "minutos":39, "altura":7.83}]}		
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