const dotContainer = document.getElementById('dot-container');

function clearDots()
{
    while(dotContainer.firstChild != null)
    {
        dotContainer.removeChild(dotContainer.firstChild);
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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Usuń";
        deleteButton.id = 'delete-button';
        deleteButton.onclick = () => 
        {
            const bigDot = document.getElementById(`newDot-${i}`);
            dotContainer.removeChild(bigDot);
        }

        const colorButton = document.createElement('button');
        colorButton.textContent = "Pokoloruj";
        colorButton.id = 'color-button';
        colorButton.onclick = () => 
        {
            const bigDot = document.getElementById(`newDot-${i}`);
            bigDot.style.backgroundColor = 'blue';
            bigDot.textContent = "BIG RED DOT";
        }

        newDot.appendChild(deleteButton);
        newDot.appendChild(colorButton);
        dotContainer.appendChild(newDot);
    }
}

// function changeColor() 
// {
//     const bigDot = document.querySelector('.big-red-dot');
//     bigDot.style.backgroundColor = 'blue';
//     bigDot.textContent = "BIG RED DOT";
// }