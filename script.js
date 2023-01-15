 let users = [
    {name:'Ben'},
    {name:'Eli'}
];
class User {
    usersData;
    constructor (usersdataInput){
        this.usersData = usersdataInput;
    }
    render(){
        const item = document.createElement('div');//created div 
        item.className = "item";
        document.body.appendChild(item);
        const title = document.createElement('h1');
        title.innerText = this.usersData.name;
        item.appendChild(title);

    }

 }
// let user = new User ({name:"ben"});//
// user.render();

// for(let user of users){
//    new User(user).render();
// }
localStorage.setItem("user",JSON.stringify({name:"ben"}));// this value is a Json
let user = JSON.parse (localStorage.getItem("user"));// from string to object 
console.log (user);
new User (user).render();