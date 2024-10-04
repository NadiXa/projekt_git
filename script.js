function changeColor() 
{
    const bigDot = document.getElementById('big-red-dot');
    bigDot.style.backgroundColor = 'blue';
    bigDot.textContent = "BIG RED DOT";
}

function addDot()
{
    const min = 1;
    const max = 10;
    const liczba = Math.floor(Math.random() * (max - min + 1)) + min;

    // newDot = document.createElement('div');
    // newDot.id = 'big-red-dot';
    // document.body.appendChild(newDot);
    // document.getElementById('kw').appendChild(newDot);

    for(let i=0; i<liczba; i++)
    {
        newDot = document.createElement('div');
        newDot.id = 'big-red-dot';
        document.getElementById('kw').appendChild(newDot);
    }
}

function deleteDot()
{
    const bigDot = document.getElementById('big-red-dot');

    if(bigDot.style.backgroundColor == 'blue')
    {
        document.getElementById('kw').removeChild(bigDot);
    }
}