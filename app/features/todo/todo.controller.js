export default class ToDoController {
  
  constructor(LoginService) { 
    this.LoginService = LoginService;
    this.listOfTask = [];
  }
  
  addTask(){
    this.listOfTask.push(this.taskName);
  }
}