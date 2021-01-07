const manejarEventos =(e)=>
	{
		var evento = e || window.event;
		var objetivo = evento.target || evento.srcElement;
	
		if(objetivo.classList.contains("hov"))
			{
				estadoHover(objetivo);		
			}
	
		if(objetivo.parentElement.classList.contains("hov"))
			{
				estadoHover(objetivo.parentElement);
			}
	}


const estadoHover=(objetivo)=>
	{
		objetivo.classList.add("presionado");
		setTimeout(sacarHover,300,objetivo);
	}


const sacarHover=(objetivo)=>
	{
		objetivo.classList.remove("presionado");
	}

document.querySelector("body").addEventListener("click", manejarEventos, false);