import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {HttpServices} from "../../shared/services/httpservice";
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./register.scss')],
  template: require('./register.html'),
})


export class Register {

 public form:FormGroup;
 public firstname:AbstractControl;
 public lastname:AbstractControl;
 public phone:AbstractControl;
 public email:AbstractControl;
 public company:AbstractControl;
 public password:AbstractControl;
 public repeatPassword:AbstractControl;
 public passwords:FormGroup;
 private httpServices: HttpServices;

 public submitted:boolean = false;

 constructor(fb:FormBuilder,  httpServices: HttpServices, private router: Router) {
   this.httpServices = httpServices;

   this.form = fb.group({
     'firstname': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
     'lastname': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
     'company': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
     'phone': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
     'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
     'passwords': fb.group({
       'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
       'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
     }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
   });

   this.firstname = this.form.controls['firstname'];
   this.lastname = this.form.controls['lastname'];
   this.company = this.form.controls['company'];
   this.phone = this.form.controls['phone'];
   this.email = this.form.controls['email'];
   this.passwords = <FormGroup> this.form.controls['passwords'];
   this.password = this.passwords.controls['password'];
   this.repeatPassword = this.passwords.controls['repeatPassword'];
 }

 public onSubmit(values:Object):void {
   this.submitted = true;
   if (this.form.valid) {
     // your code goes here
      
      var data = {"vcFirstname":this.firstname.value,"vcLastname":this.lastname.value,"vcphonenumber":this.phone.value,
      "vcEmail":this.email.value,"vcCompany":this.company.value ,"createdBy":"1","vcUsername":this.email.value ,"vcPassword":this.repeatPassword.value}
      
      this.httpServices.PostHttpWithoutToken(JSON.stringify(data), "registration")
            .subscribe(
            (data) => {
               // this.toastr.success('Success!');
                this.onSuccess(data);
                console.log("success registration");
               
            },
            (error) => {
                this.customeError(error);
            }
            );
   }
 }


   onSuccess(success) {
     console.log(success.result);
        localStorage.setItem('currentUser', success.result);
        this.router.navigate(['login']);
    }

    customeError(error) {
      console.log(error);
        var errMessage = "<ul style='vertical-align: middle; margin: 0;'>";
        if (error.error) {
            error.error.forEach((message) => {
                console.log(message);
                errMessage += "<li style='text-transform: uppercase; font-size:10px;'>" + message.message + "</li>"
            })
        }
        errMessage += "</ul>";
         this.router.navigate(['login']);
       // this.toastr.error(errMessage, null, { enableHTML: true });
    }


}






// export class LoginComponent {
//     private isRegistration: boolean;
//     private username: string;
//     private password: string;
//     private email: string;
//     private httpServices: HttpServices;

    // constructor(httpServices: HttpServices, public toastr: ToastsManager, private router: Router) {
    //     this.isRegistration = false;
    //     this.httpServices = httpServices;
    // }

    // toggleRegistration(status) {
    //     this.isRegistration = status;
    //     this.username = "";
    //     this.password = "";
    //     this.email = "";
    // }

// //     // login() {
// //     //     var data = {
// //     //         vcUsername: this.username,
// //     //         vcPassword: this.password
// //     //     };

// //     //     this.httpServices.PostHttpWithoutToken(JSON.stringify(data), "login")
// //     //         .subscribe(
// //     //         (data) => {
// //     //             this.toastr.success('Success!');
// //     //             this.onSuccess(data);
// //     //         },
// //     //         (error) => {
// //     //             this.customeError(error);
// //     //         }
// //     //         );
// //     // }

//     registration() {
//         var data = {
//             vcUsername: this.username,
//             vcPassword: this.password,
//             vcEmail: this.email,
//         };

        // this.httpServices.PostHttpWithoutToken(JSON.stringify(data), "registration")
        //     .subscribe(
        //     (data) => {
        //         this.toastr.success('Success!');
        //         this.onSuccess(data);
        //     },
        //     (error) => {
        //         this.customeError(error);
        //     }
        //     );
//     }


