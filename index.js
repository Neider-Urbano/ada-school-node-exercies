const { Task } = require("./funciones.js");

const myTasks = new Task();

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `
  ---Bienvenido:---
  1. Agregar
  2. Delete
  3. Completar
  4. Exit
  Elige una opcion: 
`,
  (num) => {
    if (num == 1) {
      readline.question(
        `
        description:  
      `,
        async (description) => {
          console.log(await myTasks.add(description));
        }
      );
    }
    if (num == 2) {
      readline.question(
        `
        id tasks delete:  
      `,
        async (idTask) => {
          console.log(await myTasks.deletes(idTask));
        }
      );
    }
    if (num == 3) {
      readline.question(
        `
        id tasks complete:  
      `,
        async (idTask) => {
          console.log(await myTasks.complete(idTask));
        }
      );
    }
    if (num == 4) {
      readline.close();
    }

    if (num > 4) {
      console.log("Invalid number");
    }
  }
);

readline.on("line", (input) => {
  readline.question(
    `
  ---Bienvenido:---
  1. Agregar
  2. Delete
  3. Completar
  4. Exit
  Elige una opcion:
`,
    (num) => {
      if (num == 1) {
        readline.question(
          `
        description:
      `,
          (description) => {
            myTasks.add(description).then((data) => {
              console.log(data);
            });
          }
        );
      }
      if (num == 2) {
        readline.question(
          `
        id tasks delete:
      `,
          (idTask) => {
            myTasks.deletes(idTask).then((data) => {
              console.log(data);
            });
          }
        );
      }
      if (num == 3) {
        readline.question(
          `
        id tasks complete:
      `,
          (idTask) => {
            myTasks.complete(idTask).then((data) => {
              console.log(data);
            });
          }
        );
      }
      if (num == 4) {
        readline.close();
      }
      if (num > 4) {
        console.log("Invalid number");
      }
    }
  );
});
