const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;

const colors = {
    fire: 'red',
    grass: 'green',
    electric: 'yellow',
    water: 'blue',
    ground: 'brown',
    rock: 'grey',
    fairy: 'pink',
    poison: 'violet',
    bug: 'gold',
    dragon: 'orange',
    psychic: 'brown',
    flying: 'light-blue',
    fighting: 'purple',
    normal: 'pink',
}

const main_types = Object.keys(colors);
console.log(main_types);


const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);

    const color = colors[type];
    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src= "https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}" alt="image">
        </div>

        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span> </small>
        </div>
        `

        pokemonEl.innerHTML = pokemonInnerHTML;
        poke_container.appendChild(pokemonEl);




}




fetchPokemon(); 

