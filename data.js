const CargaJSON=()=>{
   fetch('data/pokemon/pokemon.json')
    .then(resp=> resp.json())
    .then( data=> {
        let da=data.pokemon;
        let pokedex = da.map(po => {
            return { num: po.num, img: po.img, 
                name: po.name, 
                avg_spawns: po.avg_spawns };
          });
          console.log(pokedex)
        return pokedex;
        
        })
        
    }
    


