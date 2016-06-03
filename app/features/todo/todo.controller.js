/*global Firebase */
export default class ToDoController {
  
  constructor(LoginService, $firebaseArray) { 
    this.LoginService = LoginService;
    
    var ref  = new Firebase("https://angular-project-1826a.firebaseio.com/");
    this.items = $firebaseArray(ref);
    this.displayData = [].concat(this.items);
    
    
    this.filtrOwner = LoginService.name;
    this.filtr();
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
  
  filtr(){
    
   
    
    console.log(this.displayData);
  }
  
}