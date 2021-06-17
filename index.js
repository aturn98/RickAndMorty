document.addEventListener("DOMContentLoaded", () =>{
    let counter = 1;
    const characterList = document.getElementById('character-list');
    const pannelImage = document.getElementById('character-image');
    const pannelName = document.getElementById('name');
    const pannelStatus = document.getElementById('status');
    const pannelSpecies = document.getElementById('species');
    const pannelType = document.getElementById('type');
    const pannelGender = document.getElementById('gender');
    const pannelOrigin = document.getElementById('origin');
    const pannelLocation = document.getElementById('location');
    const moreButton = document.getElementById('more');

    fetch(`https://rickandmortyapi.com/api/character/`)
    .then(resp => resp.json())
    .then(characters => showCharacters(characters.results));
    // .then(obj => console.log(obj.results));
    
    const showCharacters = characters => {
        characters.map(characterInfo => {
            const characterElement = document.createElement('li');
            // characterElement.id = `${characterInfo.id}`;
            characterElement.innerHTML =`${characterInfo.name}`;
            characterList.append(characterElement);
            characterElement.addEventListener('click', function(event){
                pannelUpdate(characterInfo)
            });
        });
    };
    
    function nextPage(){
        counter++
        fetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
        .then(resp => resp.json())
        .then(characters => showCharacters(characters.results));
    }
    
    function pannelUpdate(character){
        pannelImage.src = `${character.image}`;
        pannelName.innerHTML = `Name:  ${character.name}`;
        pannelStatus.innerHTML = `Status:  ${character.status}`;
        pannelSpecies.innerHTML = `Species:  ${character.species}`;
        pannelType.innerHTML = `Type:  ${character.type}`;
        pannelGender.innerHTML = `Gender:  ${character.gender}`;
        pannelOrigin.innerHTML = `Origin:  ${character.origin.name}`;
        pannelLocation.innerHTML = `Location:  ${character.location.name}`;
    }
    
    moreButton.addEventListener('click', function(event){
        nextPage()
    });
    
});

    
    // Set glob counter = to 1
    // Create a new function that does another fetch request to get result from next page
    // fetch(`https://rickandmortyapi.com/api/character/?page=${i}`
    