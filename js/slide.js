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
				if(pos>=6)
					{
						botones[1].classList.remove("mostrar");
						pos=6;
					}			
			}
		slide(pos,num);
	}

const slide=(pos, num)=>
	{
		for(i=0; i<slides.length; i++)
			{
				slides[i].classList.remove("mostrar", 'animate__animated', 'animate__backInRight');
			}

		if(num==-1)
			{
				slides[pos].classList.add("mostrar", 'animate__animated', 'animate__backInLeft');						
			}
		else
			{
				slides[pos].classList.add("mostrar", 'animate__animated', 'animate__backInRight');

			}	
		
	}
