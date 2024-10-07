let index = 0;

function addDot()
{
    const min = 1;
    const max = 10;
    const liczba = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i=0; i<liczba; i++)
    {
        newDot = document.createElement('div');
        newDot.classList.add('big-red-dot');
        newDot.id = `newDot-${index}`
        document.getElementById('kw').appendChild(newDot);
        index++;
        newDot.textContent = index;
    }
}

function changeColor() 
{
    const newDot = document.getElementsByClassName('big-red-dot');
    newDot.style.backgroundColor = 'blue';
    newDot.textContent = "BIG RED DOT";
}

function deleteDot()
{
    const bigDot = document.getElementsByClassName('big-red-dot');

    if(bigDot.style.backgroundColor == 'blue')
    {
        document.getElementById('kw').removeChild(bigDot);
    }
}