import {todoInterface} from "./todointerface";

class Todo implements todoInterface{
constructor(){}
tasks: Array<string> = [];

addTask(task:string):number{

    let count : number = this.tasks.push(task);
    console.log ("Item " + task + "added to array tasks");
}


}