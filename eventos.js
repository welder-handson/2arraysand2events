function lumos() {
    document.getElementById('botao').remove();
    document.getElementById('textoinicial').remove();
    const div1 =new Array("<div id='card' onmouseover='revelio()'></div>");
    document.body.innerHTML = div1.join('');
    const texto = new Array("<p>Este é o mapa do maroto</p>","<p><img src='imgs/mapinha.png'width='500px'></p>","<p>deslise o cursor sobre o mapa para ativar o Revélio</p>");
    document.getElementById("card").innerHTML = texto.join('');
    document.body.style.backgroundColor='#ffffff';
    
 }
 function revelio()  {
    document.getElementById('card').remove();
    const div2 =new Array("<div id='card2'</div>");
    document.body.innerHTML = div2.join('');
    const texto2 = new Array("<p id='waringtext'>PERIGO!</p>" , "<img src='imgs/mapinha2.png' width='500px'><br>" , "Frederico Barbosa te avistou e está indo em sua direção, fuja para bem longe o mais rapido que puder, caso contrário terá que passar:<br>" , "<img src='imgs/freddys.png' width='150px'><br>" , "<p id='waringtext'>CINCO NOITES COM FRED</p>")
    document.getElementById("card2").innerHTML = texto2.join('');
 }