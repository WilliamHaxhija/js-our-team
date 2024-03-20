//Creo un array di oggetti con all'interno le chiavi fornite
const teamMembers = [
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder Ceo',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
];
for (let key in teamMembers) {
    const thisMember = teamMembers[key];
    console.log(thisMember.nome);
    console.log(thisMember.ruolo);
    console.log(thisMember.foto);
}