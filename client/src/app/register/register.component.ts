import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
model:any ={};
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
 register(){
   this.accountService.register(this.model).subscribe(resposne => {
     console.log(resposne);
     this.cancel();
   }, error =>{
      console.log(error);
      this.toastr.error(error.error);
   })
 }

 cancel(){
   this.cancelRegister.emit(false);
 }
}
