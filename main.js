const btn=document.getElementById('btn');



const CargaJSON=()=>{ 
    fetch('data/pokemon/pokemon.json')
    .then(resp=>{
        return resp.json();
    })
    .then(data=>{
        let da=Object.values(data);
        console.log(typeof da)
    })

}

btn.addEventListener('click',CargaJSON);