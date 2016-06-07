/*global Firebase */
export default class ToDoController {
  
  constructor(LoginService, $firebaseArray) { 
    this.LoginService = LoginService;
    
    this.ref  = new Firebase("https://angular-project-1826a.firebaseio.com/");
    this.items = $firebaseArray(this.ref);
    this.buttonText = "All Tasks";
    let that = this;
    this.items.$loaded().then(function(items) {
      that.updateStats()
      that.statisLength = that.items.length;
    });
  }
  
  addTask(){
      this.items.$add({
          desc: this.taskName, 
          owner: this.LoginService.name,
          status: "active"
          
      });
      this.taskName = null;
      this.updateStats();
      
      let that = this;
      this.items.$loaded().then(function(items) {
        that.updateStats();
        that.statisLength++;
      });
  }
  
  removeTask(item){
     this.items.$remove(item);
      let that = this;
      this.items.$loaded().then(function(items) {
        that.updateStats();
        that.statisLength--;
      });
      
  }
  
  updateTask(task){
    
    if(task.owner == this.LoginService.name)
    {
      var taskToUpdate = new Firebase("https://angular-project-1826a.firebaseio.com/"+task.$id);
      taskToUpdate.update({ status: this.getNewStatus(task.status)});
    }
      let that = this;
      this.items.$loaded().then(function(items) {
        that.updateStats()
        
      });
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
  
  updateStats(){
    
    this.doneTask = 0;
    this.activeTask = 0;
    this.yourTask = 0;
    for(var i=0 ; i<this.items.length; i++)
    {
      
      if( this.items[i].owner == this.LoginService.name )
        this.yourTask++;  
      
      if( this.buttonText == "Your tasks" && this.items[i].owner != this.LoginService.name )
        continue;
        
      if( this.items[i].status == 'done' )
        this.doneTask++;
      
      if( this.items[i].status == 'active' )
        this.activeTask++;

   
      
    }
  }
  
  getPrcnt(number, allTasks){
      return (100 * number / allTasks)+"%";
  }
  
  changeStats(){
    if( this.buttonText == "All Tasks"){
      this.buttonText = "Your tasks";
      this.statisLength = this.yourTask;
    }
    else{
      this.buttonText = "All Tasks";
      this.statisLength = this.items.length;
    }
    
    this.updateStats();
    
  }
  
}