const kw = document.getElementById('kw');

function clearDots()
{
    while(kw.firstChild != null)
    {
        kw.removeChild(kw.firstChild);
    }
}

function addDot()
{
    clearDots();

    const min = 1;
    const max = 10;
    const numberOfElementsToAdd = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i=0; i<numberOfElementsToAdd; i++)
    {
        const newDot = document.createElement('div');
        newDot.classList.add('big-red-dot');
        newDot.id = `newDot-${i}`;
        newDot.textContent = i;

        const button = document.createElement('button');
        button.textContent = "Usuń";
        button.id = 'delete-button';
        button.onclick = () => {
            const bigDot = document.getElementById(`newDot-${i}`);
            kw.removeChild(bigDot);
        }
        newDot.appendChild(button);
        kw.appendChild(newDot);
    }
}

function changeColor() 
{
    const bigDot = document.querySelector('.big-red-dot');
    bigDot.style.backgroundColor = 'blue';
    bigDot.textContent = "BIG RED DOT";
}