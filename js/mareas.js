function iniciar(sitio)
	{
		const fechaHoy = new Date;
		console.log(fechaHoy.getMonth()+1);
		const mareas=filtrarFecha(fechaHoy.getMonth()+1,fechaHoy.getDate());
		if(mareas===null)
			{
				noHayFecha(sitio,fechaHoy);
			}
		else
			{
				definirHoras(mareas,sitio,fechaHoy);		
			}
		
		cambiar(1);
	}

//Funcion que define los horarios de transito segun el sector elegido.
function definirHoras(mareasRecibidas,sitio,fecha)
	{
		let mareas = mareasRecibidas;
		const actual = mareaActual(fecha, mareas);
		if(sitio==="norte" || sitio==="popper")
			{
				mareas= dosHoras(mareasRecibidas);		
			}
		if(sitio==="malvinas")
			{
				mareas= tresHoras(mareasRecibidas);
			}
		const minutosHoy = fecha.getHours()*60 + fecha.getMinutes();
		if(mareas[actual].estado==="pleamar")
			{
				const inicio = mareas[actual].horas*60 + mareas[actual].minutos;
				const fin = mareas[actual].horas_fin*60 + mareas[actual].minutos_fin;
				if(minutosHoy >= inicio && minutosHoy <= fin)
					{
						mareas[actual].circular="No transitar";
					}
				else
					{
						mareas[actual].circular="Transitar";	
					}
			}
		else
			{
				mareas[actual].circular="Transitar";
			}
		const lugar = filtrarSitio(mareas, sitio, actual);
		completar(mareas, lugar, fecha);
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
		const minutosHoy = fecha.getHours()*60 + fecha.getMinutes();
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

//Recopila los articles del html 
function slides()
	{
		const slides = document.querySelectorAll("article");
		return slides;
	}

//Cambio de slide;
function cambiar(num)
	{
		const slide = slides();
		for(item of slide)
			{
				item.classList.remove("mostrar", 'animate__animated', 'animate__backInRight');
			}

		if (num===0)
			{
				slide[0].classList.add("mostrar", 'animate__animated', 'animate__backInLeft');
				vaciar();
			}
		else
			{
				slide[1].classList.add("mostrar", 'animate__animated', 'animate__backInRight');
			}
	}

//Vacia todos los elementos de slide.
function vaciar()
	{
		document.querySelector("#sitio").innerHTML="";
		document.querySelector("#fecha").innerHTML="";
		document.querySelector("#listado").innerHTML="";
		document.querySelector("#mapa").src="";
		document.querySelector("#horario").innerHTML="";
	}

//Agrega los contenidos al slide.
function completar(mareas, sitio, fecha)
	{
		document.querySelector("#sitio").innerHTML=sitio.sitio;
		document.querySelector("#mapa").src=sitio.mapa;
		const dia = dbDia(fecha.getDay());
		let hoy = fecha.getDate();
		hoy = agregarCero(hoy);
		let mes = fecha.getMonth()+1;
		mes = agregarCero(mes);
		document.querySelector("#fecha").innerHTML="Consulta: "+dia+" "+hoy+"/"+mes+" - "+agregarCero(fecha.getHours())+":"+agregarCero(fecha.getMinutes());
		if(sitio.clave==="norte" || sitio.clave==="popper")
			{
				document.querySelector("#horario").innerHTML="<b>Restricción horaria: </b>Comienza <b>1 hora antes</b> de cada pleamar y finaliza <b>1 hora después</b> de cada pleamar.";
			}
		if(sitio.clave==="malvinas")
			{
				document.querySelector("#horario").innerHTML="<b>Restricción horaria: </b>Comienza <b>2 horas después</b> de cada pleamar con una duración de <b>3 horas</b>.";
			}

		
		const listado = document.querySelector("#listado");
		let estado;
		for(dato of mareas)
			{
				const item = document.createElement("li");
				item.innerHTML="<b>"+agregarCero(dato.horas)+":"+agregarCero(dato.minutos)+"</b>";
				if(dato.horas_fin!==undefined)
					{
						item.innerHTML+=" a <b>"+agregarCero(dato.horas_fin)+":"+agregarCero(dato.minutos_fin)+"</b>";
					}
				if(dato.estado!=="bajamar")
					{
						item.innerHTML+=" - <b>No transitar.</b>"	
					}
				if(dato.circular)
					{
						estado=dato.circular;
						item.classList.add("cercano");
					}

				listado.appendChild(item);
			}
		const item = document.createElement("li");
		item.classList.add("select");
		if(estado==="No transitar")
			{
				item.classList.add("mal");
				item.innerHTML="<b>Ud. no puede transitar ahora.</b>";
			}
		else
			{	
				item.classList.add("bien");
				item.innerHTML="<b>Ud. puede transitar ahora.</b>";
			}
		
		const item2 = document.createElement("li");
		item2.innerHTML="Cálculos realizados a partir de la </br><a href='http://www.hidro.gov.ar/oceanografia/Tmareas/Form_Tmareas.asp'>Tabla de mareas del Servicio de </br>Hidrografía Naval<a/>."

		listado.appendChild(item);
		listado.appendChild(item2);
	}

//Excepcion para cuando la fecha buscada no esta en la BD.
function noHayFecha(sitio, fecha)
	{
		let lugar = filtrarSitioPorLugar(sitio);
		document.querySelector("#sitio").innerHTML=lugar.sitio;
		document.querySelector("#mapa").src=lugar.mapa;
		const dia = dbDia(fecha.getDay());
		let hoy = fecha.getDate();
		hoy = agregarCero(hoy);
		let mes = fecha.getMonth()+1;
		mes = agregarCero(mes);
		document.querySelector("#fecha").innerHTML="Consulta: "+dia+" "+hoy+"/"+mes+" - "+agregarCero(fecha.getHours())+":"+agregarCero(fecha.getMinutes());
		document.querySelector("#horario").innerHTML="<b>Restricción horaria: </b>No existe restricción horaria para el día de la consulta.";
	}

//Agrega un cero a los numeros menores a nueve.
function agregarCero(num)
	{
		let final;
		if(num < 10)
			{
				final = "0"+num;
			}
		else
			{
				final = num;
			}
		return final;
	}