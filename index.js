bB// // class Todo{
// //   constructor(){
// //     this.openTodos=[];
// //     this.completedTodos=[];

// //   }
// //   createTodo(text){
// //      this.openTodos.push(text)
// //   }
// //   completeTodo(index){
// //     const getCurrentTodo=this.openTodos[index]
// //     this.openTodos.splice(index,1)
// //     this.completedTodos.push(getCurrentTodo)
// //   }
// // }
// // const todo=new Todo()
// // todo.createTodo("I have a class in 10AM")
// // todo.createTodo("I have a metting at 02:00PM")
// // todo.createTodo("I have a to go dhaka at 10PM")

// // todo.completeTodo(2)
// // console.log(todo)
// // console.log('openTodo:',todo.openTodos)
// // console.log('completd todo:',todo.completedTodos)

// // const app=document.getElementById('index')

// // const ul=document.createElement('ul')
// // const li=document.createElement('li')
// // const h3=document.createElement('h3')
// // h3.innerHTML='Open Tasks'
// // app.appendChild(h3)
// // app.appendChild(ul)
// // li.innerText='Hello'
// // ul.appendChild(li)


// // const ul2=document.createElement('ul')
// // const li2=document.createElement('li')
// // const h32=document.createElement('h3')
 

// // h32.innerHTML='Completed Task'
// // app.appendChild(h32)
// // app.appendChild(ul2)
// // li2.innerHTML="Hello Bangladesh"
// // ul2.appendChild(li2)

// const app = document.getElementById("index");

// const h31 = document.createElement("h3");
// const ul1 = document.createElement("ul");
// const h32 = document.createElement("h3");
// const ul2 = document.createElement("ul");
// h31.innerText = "Open Tasks";
// app.appendChild(h31);
// app.appendChild(ul1);
// h32.innerText = "Completed tasks";
// app.appendChild(h32);
// app.appendChild(ul2);

// function getList(open, completed) {
//   const openList = open.map((d, i) => {
//     return `<li onclick="handleComplete(${i})">${d}</li>`;
//   });
//   ul1.innerHTML = openList;

//   const completedList = completed.map((d, i) => {
//     return `<li onclick="handleOpen(${i})"><del>${d}</del></li>`;
//   });
//   ul2.innerHTML = completedList;
// }

// class ToDo {
//   constructor() {
//     this.open = [];
//     this.completed = [];
//   }

//   create(text) {
//     this.open.push(text);
//   }

//   complete(index) {
//     this.completed.push(this.open[index]);
//     this.open.splice(index, 1);
//     getList(this.open, this.completed);
//   }

//   onopen(index) {
//     this.open.push(this.completed[index]);
//     this.completed.splice(index, 1);
//     getList(this.open, this.completed);
//   }
// }

// const todo = new ToDo();

// todo.create("Today i have a class at 9:30pm");
// todo.create("I have a meeting at 11:00pm");
// todo.create("I have a meeting at 12:00pm");

// todo.complete(2);
// todo.complete(0);
// todo.onopen(0);

// const handleComplete = (i) => {
//   todo.complete(i);
// };
// const handleOpen = (i) => {
//   todo.onopen(i);
// };

// const element=document.getElementById('element')




 

 


// total=(quantity,price)=>{
//  const totalPrice= this.quantity * this.price
//  this.total.push(totalPrice)
//  }

// add=(name,quantity,price,total)=>{
//   if(this.name){
//     total(quantity,price)
//   }
//   this.name=this.name.push(name)
//   this.quantity=this.quantity.push(quantity)
//   this.price=this.price.push(price)
// }
// }
// const result=new Products ()
// console.log(result.total())

// .................