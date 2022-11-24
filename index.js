const {Task}= require("./funciones.js")

const myTasks=new Task()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


readline.question(`
  ---Bienvenido:---
  1. Agregar
  2. Delete
  3. Completar
  4. Exit
  Elige una opcion: 
`, num => {
    if(num==1){
      readline.question(`
        description:  
      `, description => {
          console.log(myTasks.add(description))
      });
    }
    if(num==2){
      readline.question(`
        id tasks delete:  
      `, idTask => {
          console.log(myTasks.deletes(idTask))
      });
    }
    if(num==3){
      readline.question(`
        id tasks complete:  
      `, idTask => {
          console.log(myTasks.complete(idTask))
      });
    }
    if(num==4){
      readline.close();
    }
});

readline.on('line',(input)=>{
  readline.question(`
  ---Bienvenido:---
  1. Agregar
  2. Delete
  3. Completar
  4. Exit
  Elige una opcion: 
`, num => {
    if(num==1){
      readline.question(`
        description:  
      `, description => {
          console.log(myTasks.add(description))
      });
    }
    if(num==2){
      readline.question(`
        id tasks delete:  
      `, idTask => {
          console.log(myTasks.deletes(idTask))
      });
    }
    if(num==3){
      readline.question(`
        id tasks complete:  
      `, idTask => {
          console.log(myTasks.complete(idTask))
      });
    }
    if(num==4){
      readline.close();
    }
});
})