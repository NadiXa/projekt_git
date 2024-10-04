function changeColor() 
{
    const bigDot = document.getElementById('big-red-dot');
    bigDot.style.backgroundColor = 'blue';
    bigDot.textContent = "BIG RED DOT";
}

function addDot()
{
    newDot = document.createElement('div');
    newDot.id = 'big-red-dot';
    document.body.appendChild(newDot);
    document.getElementById('kw').appendChild(newDot);
}

function deleteDot()
{
    const bigDot = document.getElementById('big-red-dot');

    if(bigDot.style.backgroundColor == 'blue')
    {
        document.getElementById('kw').removeChild(bigDot);
    }
}