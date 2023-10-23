/*
* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
* Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

*• MILESTONE 0:
* Creare l’array di oggetti con le informazioni fornite.

*• MILESTONE 1:
* Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

*• MILESTONE 2:
* Stampare le stesse informazioni su DOM sottoforma di stringhe
* Trasformare la stringa foto in una immagine effettiva
*/

/*
* MILESTONE 0
*/
"use strict";
//create array objects
const teamMemb = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer	',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }
]

/*
* MILESTONE 1
*/

//create loop "for" to print info of each member
for(let i = 0; i < teamMemb.length; i++){
    printMemb(teamMemb[i]);
}


/*
    <div class="card">
        <img src="" alt="">
        <div class="card-body">
            <h4 class='card-title'></h4>
            <p class='card-text'></p>
        </div>
    </div>
*/

/*
*MILESTONE 2
*/
// create function to print card member
function printMemb(member){
    const col = document.createElement('div');
    col.classList.add('col-3');
    const card = `
    <div class="card">
        <img class='card-img-top' src="img" alt="">
        <div class="card-body">
            <h4 class='card-title'></h4>
            <p class='card-text'></p>
        </div>
    </div>

    `
    let name = member.name;
    let role = member.role;
    let picture = member.picture;
}
