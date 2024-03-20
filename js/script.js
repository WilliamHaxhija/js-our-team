const namesContainer = document.querySelector('.name');
const rolesContainer = document.querySelector('.role');
const photosContainer = document.querySelector('.photo'); 
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
for (let i = 0; i < teamMembers.length; i++) {
    thisMember = teamMembers[i];
    namesContainer.innerHTML += `<div class="border">${thisMember.nome}</div>`;
    rolesContainer.innerHTML += `<div class="border">${thisMember.ruolo}</div>`;
    photosContainer.innerHTML += `<div class="border">${thisMember.foto}</div>`;
}