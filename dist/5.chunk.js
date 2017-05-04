webpackJsonpac__name_([5],{

/***/ 1322:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(19);
var nga_module_1 = __webpack_require__(333);
var ng2_toastr_1 = __webpack_require__(334);
var login_component_1 = __webpack_require__(1348);
var login_routing_1 = __webpack_require__(1383);
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                ng2_toastr_1.ToastModule,
                login_routing_1.routing
            ],
            declarations: [
                login_component_1.Login
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;


/***/ },

/***/ 1348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(19);
var httpservice_1 = __webpack_require__(650);
var router_1 = __webpack_require__(55);
var ng2_toastr_1 = __webpack_require__(334);
var Login = (function () {
    function Login(fb, httpServices, toastr, router, viewContainerRef) {
        this.toastr = toastr;
        this.router = router;
        this.viewContainerRef = viewContainerRef;
        this.submitted = false;
        this.httpServices = httpServices;
        this.toastr.setRootViewContainerRef(viewContainerRef);
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    Login.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var self = this;
            // your code goes here
            var post_data = { vcUsername: this.email.value, vcPassword: this.password.value };
            self.httpServices.PostHttpWithoutToken(JSON.stringify(post_data), "login")
                .subscribe(function (data2) {
                _this.toastr.success('Success!');
                _this.onSuccess(data2);
            }, function (error) {
                _this.customeError(error);
            });
        }
    };
    Login.prototype.onSuccess = function (success) {
        console.log(success.result);
        localStorage.setItem("id_token", success.result);
        localStorage.setItem('currentUser', success.result);
        this.router.navigate(['chartist-js']);
    };
    Login.prototype.customeError = function (error) {
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
        this.toastr.error(errMessage, null, { enableHTML: true });
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(1417)],
            template: __webpack_require__(1435),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof httpservice_1.HttpServices !== 'undefined' && httpservice_1.HttpServices) === 'function' && _b) || Object, (typeof (_c = typeof ng2_toastr_1.ToastsManager !== 'undefined' && ng2_toastr_1.ToastsManager) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _e) || Object])
    ], Login);
    return Login;
    var _a, _b, _c, _d, _e;
}());
exports.Login = Login;


/***/ },

/***/ 1383:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(55);
var login_component_1 = __webpack_require__(1348);
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: login_component_1.Login
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 1417:
/***/ function(module, exports) {

module.exports = ".auth-main {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: #99ccff; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00acac; }\n    .auth-block a:hover {\n      color: #009292; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n"

/***/ },

/***/ 1435:
/***/ function(module, exports) {

module.exports = "<div class=\"auth-main\">\n  <div class=\"auth-block\">\n    <h1>Sign in to Drive Dashboard</h1>\n    <a routerLink=\"/register\" class=\"auth-link\">New to Drive ? Sign up!</a>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">Sign in</button>\n          <a routerLink=\"/login\" class=\"forgot-pass\">Forgot password?</a>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"auth-sep\"><span><span>or Sign in with one click</span></span></div>\n\n    <div class=\"al-share-auth\">\n      <ul class=\"al-share clearfix\">\n        <li><i class=\"socicon socicon-facebook\" title=\"Share on Facebook\"></i></li>\n        <li><i class=\"socicon socicon-twitter\" title=\"Share on Twitter\"></i></li>\n        <li><i class=\"socicon socicon-google\" title=\"Share on Google Plus\"></i></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=5.map