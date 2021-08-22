import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {firstname:'',lastname:'',username: '', password: '', admin: false};
  errMess: string;


  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
    this.authservice.signUp(this.user)
    .subscribe(response=>
      {console.log(response)},
      error=>{console.log(error.error.err.message);this.errMess=error.error.err.message}
      
      )}

}
