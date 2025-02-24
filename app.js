// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Defining constants
// Document 
const addButton = document.querySelector(".button-add");
const friendsInput = document.getElementById("amigo");
const friendsList = document.getElementById("listaAmigos");

const sortResult = document.getElementById('resultado');
const sortButton = document.querySelector('.button-draw');

// Defining some internal variables
let friends = ["Edgar", "Juan", "Maria", "Manuel", "Jose", "John"];
let remainingFriends = ["Edgar", "Juan", "Maria", "Manuel", "Jose", "John"];
let secretSantaResults = {};
let assignedFriends = 0;
let missingFriends = 0;

// Defining base functions for challenge: initially we'd need 3: addFriends, updateFriends and sortFriends/assignFriends
function addFriends(){ //This function will add a new friend anytime the user want to
    // Getting friend's name from user
    const friendName = friendsInput.value.trim();

    // Check if name is blank
    if (friendName === ""){
        alert("Ingresa un nombre valido, no puede ser vacio.");
        return;
    }

    // Append new name
    friends.push(friendName);
    remainingFriends.push(friendName);

    // Updating element to the UI using DOM
    updateFriends();

    // Restore | clean name field
    friendsInput.value = "";
}

function updateFriends(){
    // Get specific element from list
    const currentFriends = document.getElementById('listaAmigos');
    
    // Clean-up list before adding new elements
    currentFriends.innerHTML = "";

    // Iterate over current array and add each new name as <li>
    for (let i = 0; i < friends.length; i++) {
        // TODO: Add functionality to check if name exists and update it
        const friend = friends[i];

        // Create new element in list
        const listItems = document.createElement("li");

        // Establecer el texto del <li> con el nombre del amigo
        listItems.textContent = friend;

        // Agregar el <li> a la lista HTML
        currentFriends.appendChild(listItems);
    }

    // Update assigned and remaining friends
    missingFriends = remainingFriends.length;
    assignedFriends = friends.length - missingFriends;
    
    // Update counter on UI
    const counter = document.getElementById("contador");
    counter.textContent = `Amigos asignados: ${assignedFriends}, Amigos restantes: ${missingFriends}`;
}


function sortFriends(){
    let updateCurrentPlayer = true

    // Asking who is playing
    const currentPlayer = prompt("Ingresa tu nombre:");

    // Check if you want to show results
    if (currentPlayer.toLowerCase() === "results") {
        alert(JSON.stringify(secretSantaResults, null, 2)); // Mostrar resultados como JSON
        return;
    }
    
    // Check if there are enough friends
    if (remainingFriends.length === 0){
        alert("Ya todos los jugadores fueron asignados. Por favor agrega algunos nombres para poder jugar");
        return;
    }

    // Check if player has been assigned before
    if (secretSantaResults[currentPlayer]) {
        alert(`${currentPlayer} ya ha sido asignado un amigo secreto.`);
        return; 
    }    

    // Check if player is in the firends list
    if (!friends.includes(currentPlayer)) {
        alert("Este nombre no está en la lista de amigos.");
        return;
    }

    if (!remainingFriends.includes(currentPlayer)) {
        updateCurrentPlayer = false
    }

    // Temporary delete current player name from the list
    // Anybody shouldn't choose themselves
    remainingFriends = remainingFriends.filter(friend => friend !== currentPlayer);

    // Perform sorting randomized
    // Select index name randomly
    const randomName = Math.floor(Math.random() * remainingFriends.length);
    const secretSanta = remainingFriends[randomName];

    // Show result in screen
    sortResult.textContent = `Felicitaciones! ¡Tu amigo secreto es: ${secretSanta}!`;

    // Verify if friends are odd and will keep a single player without SecretSanta :(
    if (remainingFriends.length === 1) {
        secretSantaResults[remainingFriends[0]] = null; // El último amigo no tendrá pareja
    } else {
        // Registrar el resultado del sorteo
        secretSantaResults[currentPlayer] = secretSanta;
    }

    // Delete choosen secret santa from friends list
    const choosenIndex = remainingFriends.indexOf(secretSanta)
    console.log(choosenIndex)
    if (choosenIndex > -1) {
        remainingFriends.splice(choosenIndex, 1); // Deletes choosen friend
    }

    if (updateCurrentPlayer){
        remainingFriends.push(currentPlayer); // Adding current player to the list
    }
    
    // Need to update UI again
    updateFriends();

}

// Adding listeners to the buttons to call functions
//addButton.addEventListener("click", addFriends);
//sortButton.addEventListener("click", sortFriends);
