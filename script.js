let index = 0;

function addDot()
{
    const min = 1;
    const max = 10;
    const numberOfElementsToAdd = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i=0; i<numberOfElementsToAdd; i++)
    {
        newDot = document.createElement('div');
        newDot.classList.add('big-red-dot');
        newDot.id = `newDot-${index}`
        document.getElementById('kw').appendChild(newDot);
        index++;
        newDot.textContent = index;

        button = document.createElement('button');
        button.textContent = "Usuń";
        button.id = 'delete-button';
        newDot.appendChild(button);
    }
}

function changeColor() 
{
    const bigDot = document.querySelector('.big-red-dot');
    bigDot.style.backgroundColor = 'blue';
    bigDot.textContent = "BIG RED DOT";
}

function deleteDot()
{
    const bigDot = document.querySelector('.big-red-dot');

    if(bigDot.style.backgroundColor == 'blue')
    {
        document.getElementById('kw').removeChild(bigDot);
    }
}