export default class ToDoController {
  
  constructor(LoginService) { 
    this.LoginService = LoginService;
    console.log(this.LoginService);
  }
  
  getName(){
     console.log(this.LoginService);
    return this.LoginService.name;
    
  }
  

  
}