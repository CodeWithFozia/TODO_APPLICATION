import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

let todoList: string [] = [];
let conditions = true;

// print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<<==================================>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<<========>>>> ${chalk.bold.hex(`#9999FF`)(` Welcome to \ 'CodeWithFozia \' - Todo-List App `)} <<<<========>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<<==================================>>>>\n`));

// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: chalk.green("Enter your New Task"),
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task added in Todo-List successfully`);

//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message: "Do you want to add more task ?",
//             default: "False"
//         }
//     ]);
//     conditions = addMoreTask.addmore
// }
// console.log("your updated Todo-list:" ,todoList); 

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do", 
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],                 
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await UpdateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    }
}

// Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
}

// Function to view all Todo-List Tasks
let viewTask = () => {
    console.log("\n your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}:${task}`) 

    })
} 

// Function to delete a task from the list
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no.` of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List\n`);
}

// Function to Update a task
let UpdateTask = async () => {
    await viewTask()
    let Update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no` of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name:",
        }
    ]);
    todoList[Update_task_index.index - 1] = Update_task_index.new_task
    console.log(`\n task at index no. ${Update_task_index.index - 1} Updated Successfully[For Updated list check option: "View Todo-List"]`)
} 

main();