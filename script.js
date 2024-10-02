let tura = 1;
let pola = new Array(3);
for(let i=0; i<pola.length; i++)
{
    pola[i] = new Array(3);
}
for(let i=0;i<pola.length;i++)
{
    for(let j=0;j<pola.length;j++)
    {
        pola[i][j] = document.querySelector(id)
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
    if(pola[0][0].innerHTML == pola[0][1].innerHTML && pola[0][1].innerHTML == pola[0][2].innerHTML && pola[0][0].innerHTML != "")
    {
        console.log("wygrales")
    }
}