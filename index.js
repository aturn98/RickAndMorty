document.addEventListener("DOMContentLoaded", () =>{
    const characterList = document.getElementById('character-list');
    
    
    fetch(`https://rickandmortyapi.com/api/character/`)
    .then(resp => resp.json())
    .then(characters => showCharacters(characters.results));
    // .then(obj => console.log(obj.results));
     
    const showCharacters = characters => {
        characters.forEach(character => {
            const characterElement = document.createElement('li');
            characterElement.id = `${character.id}`;
            characterElement.innerHTML = `${character.name}`;
            characterList.append(characterElement);
        });
    };
    
    
});