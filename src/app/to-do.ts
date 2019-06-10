class Task {
  done: boolean = false;
//If constructor() parameters share the exact same name as class properties (like description, or priority in the example above), TypeScript will automatically assign them to a public property of the same name and type.

  constructor (public description: string, public priority: string){ }

  markDone() {
    this.done = true;
  }
}

let tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

for(let task of tasks){
  console.log(task);
}
