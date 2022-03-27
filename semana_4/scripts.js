let pokemonId = 1;

const fetchPokemon = (pokeName_get) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName_get}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        pokemonId = data.id;
        let pokeName = data.species.name;
        
        document.getElementById('pokeImg').src = pokeImg;
        document.getElementById('pokeName').innerHTML = `#${pokemonId}-${pokeName}`;
        
        let types = '';
        for (let i = 0; i < data.types.length; i++) {
            types += `| ${data.types[i].type.name} `;
        }
        types += '|';
        document.getElementById('type').innerHTML = `<p>${types}</p>`;

        document.getElementById('hp').innerHTML = data.stats[0].base_stat;
        document.getElementById('attack').innerHTML = data.stats[1].base_stat;
        document.getElementById('defense').innerHTML = data.stats[2].base_stat;
        document.getElementById('special-attack').innerHTML = data.stats[3].base_stat;
        document.getElementById('special-defense').innerHTML = data.stats[4].base_stat;
        document.getElementById('speed').innerHTML = data.stats[5].base_stat;

        let abilities = '';
        for (let i = 0; i < data.abilities.length; i++) {
            abilities += `| ${data.abilities[i].ability.name} `;
        }
        abilities += '|';
        document.getElementById('abilities').innerHTML = `<p>${abilities}</p>`

        document.getElementById('height').innerHTML = `${data.height/10} m`;
        document.getElementById('weight').innerHTML = `${data.weight/10} Kg`;
    })
}

const consultar = () => {
    const pokeName_get = document.getElementById('pokeInput').value.toLowerCase();
    fetchPokemon(pokeName_get);
}

const cambiarId = (variable) => {
    if (variable < 0) {
        if (pokemonId > 1){
            fetchPokemon(pokemonId + variable);
        }
    }else {
        if (pokemonId < 898){
            fetchPokemon(pokemonId + variable);
        }
    }
}

fetchPokemon(1);