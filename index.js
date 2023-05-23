//    let obj = {
//     name : "ali",
//     sayHi (){
//         console.log(`mening ismim  ${obj.name}`);
//     }
//    }

//    obj.sayHi()

// let obj = {
//     name: 'ali'
// }
// function sayHello() {
//     let other = {
//      name: "a"
//     }
//     console.log(other.name);
// }
// sayHello(this.name);


// let a = +prompt("raqam kiriting")
// let obj = {
//     name : 'ali',
//     age : a ,
//     oddYears(){
//     if (a %  2 === 0){
//         console.log("juft son");
//     }else{
//         console.log("toq son");
//     }
//     }
//     }

// obj.oddYears()


// fetch("url")
// .then(res => res.json())
// .then((data) =>{
//     data.forEach((elem,index,arr) => {
//         console.log(elem);
//         console.log(index);
//         console.log(arr);
//     });
// })

// let row = document.querySelector(".row")

// let fragment = new DocumentFragment()

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res=> res.json())
// .then(data=>{
//     data.forEach((values,index)=>{
//          if(values.id == 100) return true;
//          console.log(values);
//         const divEl = document.createElement("div")
//         const h1EL = document.createElement("h1")
//         divEl.setAttribute("class","col-3")
//         const imgEl = document.createElement("img");
//         h1EL.textContent = values.id
//         imgEl.src = values.url;

//         divEl.appendChild(h1EL)
//         divEl.appendChild(imgEl)

//         row.appendChild(divEl)
//     })
// })


// row.appendChild(fragment)
// 


// for(let i= 0; i<100; i++){
//     



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))





