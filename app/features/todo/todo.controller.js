/*global Firebase */
export default class ToDoController {
  
  constructor(LoginService, $firebaseArray) { 
    this.LoginService = LoginService;
    var ref  = new Firebase("https://angular-project-1826a.firebaseio.com/");
    this.items = $firebaseArray(ref);
  }
  
  addTask(){
    
   // this.task.name = this.taskName;
   // this.task.status = "active";
   // this.task.owner = this.LoginService.name;
    
  //  this.listOfTask.push(this.task);
  
  
  this.items.$add({
      desc: this.taskName, 
      owner: this.LoginService.name,
      status: "active"
      
  });
  console.log(this.listOfTask);
 //   console.log(myData);
  }
}