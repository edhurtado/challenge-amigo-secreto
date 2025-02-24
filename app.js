// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Defining constants
// Document 
const addButton = document.querySelector(".button-add");
const friendsInput = document.getElementById("amigo");
const friendsList = document.getElementById("listaAmigos");

const sortResult = document.getElementById('resultado');

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

    // Adding new element to the UI using DOM
    const listItems = document.createElement("li");
    listItems.textContent = friendName;

    friendsList.appendChild(listItems);

    // Restore | clean name field
    friendsInput.value = "";
}

function updateFriends(){
    // Code logic to be defined

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