// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Defining constants
// Document 
const addButton = document.querySelector(".button-add");
const friendsInput = document.getElementById("amigo");
const friendsList = document.getElementById("listaAmigos");

const sortResult = document.getElementById('resultado');
const sortButton = document.querySelector('.button-draw');

// Defining base array to store all friends' names
let friends = [];

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
}


function sortFriends(){
    // Check if there are enough friends
    if (friends.length <= 1){
        alert("Por favor agrega algunos nombres para poder jugar");
        return;
    }

    // Select index name randomly
    const randomName = Math.floor(Math.random() * friends.length);
    const secretSanta = friends[randomName];

    // Show result in screen
    sortResult.textContent = `Felicitaciones! ¡Tu amigo secreto es: ${secretSanta}!`;

    // TODO: Implement functionality to delete choosen secretSanta name
    // TODO: Implement functionality to choose player (anybody shouldn't choose themselves)

}

// Adding listeners to the buttons to call functions
//addButton.addEventListener("click", addFriends);
//sortButton.addEventListener("click", sortFriends);
