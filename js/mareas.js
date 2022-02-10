function main()
	{
		
		const fechaHoy = new Date;
		//const marea=filtrarFecha(fechaHoy.getMonth(),fechaHoy.getDate());
		const mareas=filtrarFecha(0,1);
		if(mareas === null)
			{
				console.log(mareas);		
			}
		definirHoras(mareas,2);
	}

main();

//Funcion que define los horarios de transito segun el sector elegido.
function definirHoras(mareasRecibidas,cantidad)
	{
		const fecha = new Date;
		let mareas;
		if(cantidad===2)
			{
				mareas= dosHoras(mareasRecibidas);		
			}
		if(cantidad===3)
			{
				mareas= tresHoras(mareasRecibidas);
			}
		const actual = mareaActual(fecha, mareas);
		//const minutosHoy = fecha.getHours()*60 + fecha.getMinutes();
		const minutosHoy = 2*60 + 50;
		if(mareas[actual].estado==="pleamar")
			{
				const inicio = mareas[actual].horas*60 + mareas[actual].minutos;
				const fin = mareas[actual].horas_fin*60 + mareas[actual].minutos_fin;
				if(minutosHoy >= inicio && minutosHoy <= fin)
					{
						mareas[actual].circular="No transitar.";
					}
				else
					{
						mareas[actual].circular="Transitar.";	
					}
			}
		else
			{
				mareas[actual].circular="Transitar.";
			}
		console.log(mareas);
	}

//Punta Popper y Costa Norte --- 2 horas, 1 antes y 1 despues de cada pleamar.
//Define las horas de inicio y fin de pleamar cuando es de "2 horas".
function dosHoras(mareas)
	{
		for( dato in mareas)
			{
				
				if(mareas[dato].estado==="pleamar")
					{
						mareas[dato].horas_fin=sumaDeHoras(mareas[dato].horas,1);
						mareas[dato].minutos_fin=mareas[dato].minutos;
						mareas[dato].horas=sumaDeHoras(mareas[dato].horas,-1);
					}
			}

		return mareas;
	}

//Monumento Malvinas --- 3 horas, 2 despues de cada pleamar.
//Define las horas de inicio y fin de pleamar cuando es de "3 horas".
function tresHoras(mareas)
	{
		for( dato in mareas)
			{
				
				if(mareas[dato].estado==="pleamar")
					{
						mareas[dato].horas_fin=sumaDeHoras(mareas[dato].horas,5);
						mareas[dato].minutos_fin=mareas[dato].minutos;
						mareas[dato].horas=sumaDeHoras(mareas[dato].horas,2);
					}
			}

		return mareas;
	}


/*-------------------------- FUNCIONES GENERALES --------------------------*/

//Funcion que recibe un objeto Date y el objeto con las mareas del dia, y devuelve cerca de cual de las 4 mareas del dia se encuentra mas cerca.
function mareaActual(fecha, mareas)
	{
		let actual=null;
		let menor=null;
		//const minutosHoy = fecha.getHours()*60 + fecha.getMinutes();
		const minutosHoy = 2*60 + 50;
		for( dato in mareas)
			{
				const minutosDato = mareas[dato].horas*60+mareas[dato].minutos;
				const resultado = diferencia(minutosDato, minutosHoy);
				if(menor===null)
					{
						menor = resultado;
						actual = dato;
					}
				else
					{
						if (menor > resultado)
							{
								menor = resultado;
								actual = dato;
							}
					}	
			}
		return actual;
	}

//Obtiene la diferencia positiva de los 2 valores enviados. 
function diferencia(a,b)
	{
		let resultado;
		if(a < b)
			{
				resultado = b - a;
			}
		else
			{
				resultado = a - b;
			}
		return resultado;
	}

//Realiza la suma de horas, para que se ajuste al limite de 24 horas.
function sumaDeHoras(a,b)
	{
		let resultado = a+b;
		if (resultado === 24)
			{
				resultado = 0;
			}
		if (resultado > 24)
			{
				resultado = resultado - 24;
			}
		if (resultado < 0)
			{
				resultado = 24 + resultado;
			}
		return resultado;
	}