// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Defining constants
// Document 
const addButton = document.querySelector(".button-add");
const friendsInput = document.getElementById("amigo");
const friendsList = document.getElementById("listaAmigos");


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
    // Code logic to be defined

}