/*global Firebase */
export default class ToDoController {
  
  constructor(LoginService, $firebaseArray) { 
    this.LoginService = LoginService;
    
    this.ref  = new Firebase("https://angular-project-1826a.firebaseio.com/");
    this.items = $firebaseArray(this.ref);
    let that = this;
    this.items.$loaded().then(function(items) {
      that.updateStats()
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
        that.updateStats()
      });
  }
  
  removeTask(item){
     this.items.$remove(item);
      let that = this;
      this.items.$loaded().then(function(items) {
        that.updateStats()
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
      
      if( this.items[i].status == 'done' )
        this.doneTask++;
      
      if( this.items[i].status == 'active' )
        this.activeTask++;

      if( this.items[i].owner == this.LoginService.name )
        this.yourTask++;     
      
    }
  }
  
  getPrcnt(number){
      return (100 * number / this.items.length)+"%";
  }
  
}