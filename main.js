function negativoA()
{
	var txt_negativo = document.getElementById("negativo-txt");
	var checkA = document.getElementById("negativo_a");

	if(checkA.checked)
	{
		txt_negativo.innerHTML = "SI";
	}else{
		txt_negativo.innerHTML = "NO";
	}
}

function evaluar()
{
	var aNegative = document.getElementById("negativo_a").checked;
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
	var posNeg  = 0;
        
	if(a < 0 && b > 0 && aNegative == true )
    {
            posNeg  = 0;
            salida.innerHTML = posNeg;
        
        }else if (a > 0 && b < 0 && aNegative == true )
        {
            posNeg  = 0;
            salida.innerHTML = posNeg;
        }else
        {
            posNeg  = 1;
            salida.innerHTML = posNeg;
        }
}







