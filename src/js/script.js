
function imgSlider(anything){
    document.querySelector('.Starbucks').src = anything;
}

// função que gera uma cor aleatória
function randomColor()
{
   const color = '#'+ Math.floor(Math.random()*16777215).toString(16);
   return color;
}

// Função para mudar a cor do elemento com uma cor aleatória
function randomCircleColor()
{
    const circle = document.querySelector('.circle');
    circle.style.background = randomColor();
}

// Função para mudar a cor do elemento conforme cor colocada por parametro
function changeCircleColor(color)
{
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}