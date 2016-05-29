export default class LoginController {
  
  constructor(LoginService, $state) { //wstrzykniecie service (do controllera innego widoku też go musisz wstrzyknac i bedzie mogl sie odwolac do zmiennej name)
    this.LoginService = LoginService;
    this.$state = $state;
  }
  
     createAccount() {
       
       if(this.LoginService.name!=null){
         this.$state.go('todo');
       }
     }

  
}