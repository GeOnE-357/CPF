const slides = document.querySelectorAll("article");
const botones = document.querySelectorAll(".boton");
var pos= 0;

const cambiar=(num)=>
	{
		pos+=num;
		if(pos<=0)
			{
				botones[0].classList.remove("mostrar");
				pos=0;	
			}
		else
			{
				botones[0].classList.add("mostrar");
				botones[1].classList.add("mostrar");
				if(pos>=4)
					{
						botones[1].classList.remove("mostrar");
						pos=4;
					}			
			}
		slide(pos);
	}

const slide=(num)=>
	{
		for(i=0; i<slides.length; i++)
			{
				slides[i].classList.remove("mostrar");
			}
		slides[num].classList.add("mostrar");
	}
