webpackJsonpac__name_([4],{

/***/ 1325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(19);
var nga_module_1 = __webpack_require__(333);
var http_1 = __webpack_require__(111);
//import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
var register_component_1 = __webpack_require__(1357);
var register_routing_1 = __webpack_require__(1391);
var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                register_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                register_component_1.Register
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterModule);
    return RegisterModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterModule;


/***/ },

/***/ 1357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(19);
var validators_1 = __webpack_require__(654);
var httpservice_1 = __webpack_require__(650);
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var router_1 = __webpack_require__(55);
var Register = (function () {
    function Register(fb, httpServices, router) {
        this.router = router;
        this.submitted = false;
        this.httpServices = httpServices;
        this.form = fb.group({
            'firstname': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'lastname': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'company': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'phone': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.EmailValidator.validate])],
            'passwords': fb.group({
                'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
                'repeatPassword': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
            }, { validator: validators_1.EqualPasswordsValidator.validate('password', 'repeatPassword') })
        });
        this.firstname = this.form.controls['firstname'];
        this.lastname = this.form.controls['lastname'];
        this.company = this.form.controls['company'];
        this.phone = this.form.controls['phone'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    Register.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            var data = { "vcFirstname": this.firstname.value, "vcLastname": this.lastname.value, "vcphonenumber": this.phone.value,
                "vcEmail": this.email.value, "vcCompany": this.company.value, "createdBy": "1", "vcUsername": this.email.value, "vcPassword": this.repeatPassword.value };
            this.httpServices.PostHttpWithoutToken(JSON.stringify(data), "registration")
                .subscribe(function (data) {
                // this.toastr.success('Success!');
                _this.onSuccess(data);
                console.log("success registration");
            }, function (error) {
                _this.customeError(error);
            });
        }
    };
    Register.prototype.onSuccess = function (success) {
        console.log(success.result);
        localStorage.setItem('currentUser', success.result);
        this.router.navigate(['login']);
    };
    Register.prototype.customeError = function (error) {
        console.log(error);
        var errMessage = "<ul style='vertical-align: middle; margin: 0;'>";
        if (error.error) {
            error.error.forEach(function (message) {
                console.log(message);
                errMessage += "<li style='text-transform: uppercase; font-size:10px;'>" + message.message + "</li>";
            });
        }
        errMessage += "</ul>";
        this.router.navigate(['login']);
        // this.toastr.error(errMessage, null, { enableHTML: true });
    };
    Register = __decorate([
        core_1.Component({
            selector: 'register',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(1422)],
            template: __webpack_require__(1445),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof httpservice_1.HttpServices !== 'undefined' && httpservice_1.HttpServices) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], Register);
    return Register;
    var _a, _b, _c;
}());
exports.Register = Register;
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


/***/ },

/***/ 1391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(55);
var register_component_1 = __webpack_require__(1357);
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: register_component_1.Register
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 1422:
/***/ function(module, exports) {

module.exports = ".auth-main {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: #99ccff; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00acac; }\n    .auth-block a:hover {\n      color: #009292; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n"

/***/ },

/***/ 1445:
/***/ function(module, exports) {

module.exports = "<div class=\"auth-main\">\n  <div class=\"auth-block\">\n    <h1>Sign up to Drive Account</h1>\n    <a routerLink=\"/login\" class=\"auth-link\">Already have an Drive account? Sign in!</a>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!firstname.valid && firstname.touched), 'has-success': (firstname.valid && firstname.touched)}\">\n        <label for=\"inputfirstName3\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"firstname\" type=\"text\" class=\"form-control\" id=\"inputfirstName3\" placeholder=\"First Name\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!lastname.valid && lastname.touched), 'has-success': (lastname.valid && lastname.touched)}\">\n        <label for=\"inputlastName3\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"lastname\" type=\"text\" class=\"form-control\" id=\"inputlastName3\" placeholder=\"last Name\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!company.valid && company.touched), 'has-success': (company.valid && company.touched)}\">\n        <label for=\"inputcompany3\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"company\" type=\"text\" class=\"form-control\" id=\"inputcompany3\" placeholder=\"Company\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!phone.valid && phone.touched), 'has-success': (phone.valid && phone.touched)}\">\n        <label for=\"inputphone3\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"phone\" type=\"text\" class=\"form-control\" id=\"inputphone3\" placeholder=\"Phone\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\n        <label for=\"inputPassword4\" class=\"col-sm-2 control-label\"></label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Repeat\">\n          <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\">Passwords don't match.</span>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-2 col-sm-10\">\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">Sign up</button>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"auth-sep\"><span><span>or Sign up with one click</span></span></div>\n\n    <div class=\"al-share-auth\">\n      <ul class=\"al-share clearfix\">\n        <li><i class=\"socicon socicon-facebook\" title=\"Share on Facebook\"></i></li>\n        <li><i class=\"socicon socicon-twitter\" title=\"Share on Twitter\"></i></li>\n        <li><i class=\"socicon socicon-google\" title=\"Share on Google Plus\"></i></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=4.map