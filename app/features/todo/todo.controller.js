/*global Firebase */
export default class ToDoController {
  
  constructor(LoginService, $firebaseArray) { 
    this.LoginService = LoginService;
    
    this.ref  = new Firebase("https://angular-project-1826a.firebaseio.com/");
    this.items = $firebaseArray(this.ref);
  }
  
  addTask(){
      this.items.$add({
          desc: this.taskName, 
          owner: this.LoginService.name,
          status: "active"
          
      });
      this.taskName = null;
  }
  
  removeTask(item){
     this.items.$remove(item);
  }
  
  updateTask(task){
    
    if(task.owner == this.LoginService.name)
    {
      var taskToUpdate = new Firebase("https://angular-project-1826a.firebaseio.com/"+task.$id);
      taskToUpdate.update({ status: this.getNewStatus(task.status)});
    }
  }
  
  getNewStatus(status){
    if(status == 'done')
      return 'active';
    else
      return 'done';
  }
  
  getOpacity(task){
    if(task.status == 'done')
      return 1;
    else
      return 0;
  }
  
  getClass(task){
    if(task.status == 'done')
      return "success";
    else
      return "";
  }
  
}