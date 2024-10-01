let tura = 1;
let pola = new Array(3);
for(let i=0; i<pola.lenght; i++)
{
    pola[i] = new Array();
}
for(let i=0;i<pola.lenght;i++)
{
    for(let j=0;j<pola.lenght;j++)
    {
        pola[i][j] = document.querySelector()
    }
}
function klik(id)
{
    id = "#"+id;
    const element = document.querySelector(id);

    if(document.querySelector(id).innerHTML=="")
    {
        if(tura%2==1)
        {
            element.innerHTML="X";
        }else
        {
            element.innerHTML="O";
        }
        element.classList.add("nonactiv");
        tura++
    }
    if(pola[0][0] == pola[0][1] && pola[0][1] == pola[0][2])
    {
        console.log("wygrales")
    }
}