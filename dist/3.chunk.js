webpackJsonpac__name_([3],{

/***/ 1324:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(19);
var nga_module_1 = __webpack_require__(333);
var game_component_1 = __webpack_require__(1388);
var newproject_component_1 = __webpack_require__(1356);
var gamedetails_component_1 = __webpack_require__(1354);
var newproject_routing_1 = __webpack_require__(1390);
var branddetails_component_1 = __webpack_require__(1353);
var brand_component_1 = __webpack_require__(1387);
var videodetails_component_1 = __webpack_require__(1355);
var video_component_1 = __webpack_require__(1389);
var NewprojectModule = (function () {
    function NewprojectModule() {
    }
    NewprojectModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                newproject_routing_1.routing,
                // Ng2SmartTableModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                game_component_1.GameForm,
                gamedetails_component_1.GameDetails,
                newproject_component_1.Newproject,
                branddetails_component_1.BrandDetails,
                brand_component_1.BrandTable,
                videodetails_component_1.VideoDetails,
                video_component_1.VideoForm
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], NewprojectModule);
    return NewprojectModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewprojectModule;


/***/ },

/***/ 1353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var BrandDetails = (function () {
    function BrandDetails() {
    }
    BrandDetails = __decorate([
        core_1.Component({
            selector: 'branddetails',
            encapsulation: core_1.ViewEncapsulation.None,
            template: __webpack_require__(1439),
        }), 
        __metadata('design:paramtypes', [])
    ], BrandDetails);
    return BrandDetails;
}());
exports.BrandDetails = BrandDetails;


/***/ },

/***/ 1354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var GameDetails = (function () {
    function GameDetails() {
    }
    GameDetails = __decorate([
        core_1.Component({
            selector: 'gamedetails',
            encapsulation: core_1.ViewEncapsulation.None,
            template: __webpack_require__(1441),
        }), 
        __metadata('design:paramtypes', [])
    ], GameDetails);
    return GameDetails;
}());
exports.GameDetails = GameDetails;


/***/ },

/***/ 1355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var VideoDetails = (function () {
    function VideoDetails() {
    }
    VideoDetails.prototype.ngOnInit = function () {
    };
    VideoDetails = __decorate([
        core_1.Component({
            selector: 'videodetails',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [],
            template: __webpack_require__(1443),
        }), 
        __metadata('design:paramtypes', [])
    ], VideoDetails);
    return VideoDetails;
}());
exports.VideoDetails = VideoDetails;


/***/ },

/***/ 1356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Newproject = (function () {
    function Newproject() {
    }
    Newproject = __decorate([
        core_1.Component({
            selector: 'newproject',
            styles: [],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], Newproject);
    return Newproject;
}());
exports.Newproject = Newproject;


/***/ },

/***/ 1387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(19);
var router_1 = __webpack_require__(55);
var BrandTable = (function () {
    function BrandTable(_fb, router) {
        this._fb = _fb;
        this.router = router;
        this.fakeArray = new Array(12);
    }
    BrandTable.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            brand: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    };
    BrandTable.prototype.initAddress = function () {
        return this._fb.group({
            street: ['', forms_1.Validators.required],
            postcode: ['']
        });
    };
    BrandTable.prototype.addAddress = function () {
        var control = this.myForm.controls['addresses'];
        control.push(this.initAddress());
    };
    BrandTable.prototype.removeAddress = function (index) {
        var control = this.myForm.controls['addresses'];
        control.removeAt(index);
    };
    BrandTable.prototype.save = function (model) {
        // call API to save
        // ...
        console.log(model);
    };
    BrandTable.prototype.clicked = function () {
        this.router.navigate(['/pages/newproject/videodetails']);
    };
    BrandTable.prototype.clickback = function () {
        this.router.navigate(['/pages/newproject/gamedetails']);
    };
    BrandTable = __decorate([
        core_1.Component({
            selector: 'brand-form',
            styles: [__webpack_require__(1421)],
            template: __webpack_require__(1440),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], BrandTable);
    return BrandTable;
    var _a, _b;
}());
exports.BrandTable = BrandTable;


/***/ },

/***/ 1388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(55);
// noinspection TypeScriptValidateTypes
var GameForm = (function () {
    function GameForm(router) {
        this.router = router;
    }
    GameForm.prototype.clicked = function () {
        this.router.navigate(['/pages/newproject/branddetails']);
    };
    GameForm = __decorate([
        core_1.Component({
            selector: 'game-form',
            template: __webpack_require__(1442)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], GameForm);
    return GameForm;
    var _a;
}());
exports.GameForm = GameForm;


/***/ },

/***/ 1389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(55);
var VideoForm = (function () {
    function VideoForm(router) {
        this.router = router;
    }
    VideoForm.prototype.clickback = function () {
        this.router.navigate(['/pages/newproject/branddetails']);
    };
    VideoForm = __decorate([
        core_1.Component({
            selector: 'video-form',
            template: __webpack_require__(1444),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], VideoForm);
    return VideoForm;
    var _a;
}());
exports.VideoForm = VideoForm;


/***/ },

/***/ 1390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(55);
var gamedetails_component_1 = __webpack_require__(1354);
var newproject_component_1 = __webpack_require__(1356);
var branddetails_component_1 = __webpack_require__(1353);
var videodetails_component_1 = __webpack_require__(1355);
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: newproject_component_1.Newproject,
        children: [
            { path: 'gamedetails', component: gamedetails_component_1.GameDetails },
            { path: 'branddetails', component: branddetails_component_1.BrandDetails },
            { path: 'videodetails', component: videodetails_component_1.VideoDetails }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 1421:
/***/ function(module, exports) {

module.exports = ".checkbox {\n  display: inline-block;\n  margin-bottom: -12px;\n  margin-left: 12px; }\n\n.text {\n  color: cadetblue;\n  font-family: 'Monsterrat', sans-serif; }\n"

/***/ },

/***/ 1439:
/***/ function(module, exports) {

module.exports = "  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ba-card  baCardClass=\"with-scroll\">\n        <brand-form></brand-form>\n      </ba-card>\n    </div>\n  </div>"

/***/ },

/***/ 1440:
/***/ function(module, exports) {

module.exports = "\n<form *ngFor=\"let a of myForm.controls.addresses.controls; let index = index\" class=\"row form-inline\">\n \n  <div class=\"panel-heading \">\n              <span>Logo {{index + 1}}</span>\n              <span class=\"fa fa-close pull-right\" *ngIf=\"myForm.controls.addresses.controls.length > 1\" (click)=\"removeAddress(index)\"></span>\n  </div>\n \n  <div class=\"form-group col-sm-3\">\n    \n    <input type=\"text\" class=\"form-control\" id=\"brand\" placeholder=\"Brand\">\n  </div>\n   <div  class=\"form-group col-sm-3\">\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Asset\">\n  </div>\n     <div  class=\"form-group col-sm-3\">\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Tag Line\">\n  </div>\n  <div  class=\"form-group col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"pic\">\n  </div>\n\n\n    \n  <!--<div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary\">Send invitation</button>\n  </div>-->\n</form>\n\n<div class=\"form-group text\">\n          <a (click)=\"addAddress()\" style=\"cursor: default\">\n            Add another +\n</a>\n</div>\n\n        <div class=\"form-group\">\n          <button (click)=\"clickback()\" class=\"btn btn-primary pull-left \" > Back</button>\n          <button (click)=\"clicked()\" class=\"btn btn-primary pull-right \" > Next</button>\n        </div>\n<div class=\"clearfix\"></div>\n\n\n  <!--<div class=\"margin-20\">\n          <div>myForm details:-</div>\n          <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>\n          <pre>form value: <br>{{myForm.value | json}}</pre>\n        </div>-->"

/***/ },

/***/ 1441:
/***/ function(module, exports) {

module.exports = "<div class=\"widgets\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n\n     <div>\n        <ba-card  baCardClass=\"with-scroll\">\n\n          <game-form></game-form>\n        </ba-card>\n      </div>\n\n</div>\n</div>\n</div>\n\n\n\n"

/***/ },

/***/ 1442:
/***/ function(module, exports) {

module.exports = "\n \n<div class=\"row col-md-12\">\n \n <div class=\"form-group col-md-10 offset-md-1 \">\n  <label for=\"Sports\">Sports</label>   \n  <select type=\"text\"   class=\"form-control\" id=\"Sports\">\n    <option>Cricket</option>\n    <option>Football</option>\n    <option>Rugby</option>\n    <option>Tennis</option>\n  </select>\n</div>\n\n<div class=\" form-group col-md-10 offset-md-1 \">\n  <label for=\"Tournament\">Tournament</label>\n  <select  class=\"form-control\" id=\"Tournament\">\n    <option>IPL</option>\n    <option>ICL</option>\n    <option>PPL</option>\n  </select>\n</div>\n\n<div class=\"form-group col-md-10 offset-md-1 \">\n  <label for=\"Round\">Round </label>\n  <select   class=\"form-control\" id=\"Round\">\n    <option>FIRST</option>\n    <option>SECOND</option>\n    <option>SEMI-FINAL</option>\n    <option>FINAL</option>\n  </select>\n</div>\n\n\n\n<div class=\"form-group col-md-4 offset-md-1  \">\n  <label for=\"Match\">Match (Team A Vs Team B)</label>\n  <!--<class=\"row\">-->\n  <select   class=\"form-control\"  id=\"team1\">\n    <option>IND </option>\n    <option> PAK</option>\n    <option> NZL</option>\n    <option> AUS</option>\n    <option> ENG</option>\n    <option> BAN</option>\n  </select>\n\n  <select   class=\"form-control\" id=\"team2\">\n    <option>NZL </option>\n    <option> PAK</option>\n    <option> IND</option>\n    <option> AUS</option>\n    <option> ENG</option>\n    <option> BAN</option>\n  </select>\n  </div>\n\n\n\n\n <!--<div class=\"checkbox \">\n    <ba-checkbox [(ngModel)]=\"isChecked\" [label]=\"'Confirm Details'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\n  </div>-->\n  \n<div class=\"form-group col-md-10 offset-md-1\">\n  <button (click)=\"clicked()\" class=\"btn btn-primary dropbtn pull-right \"> Next </button>\n</div>\n\n\n  </div>\n\n\n"

/***/ },

/***/ 1443:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div>\n        <ba-card  baCardClass=\"with-scroll\">\n          <video-form></video-form>\n        </ba-card>\n      </div>\n    </div>\n</div>"

/***/ },

/***/ 1444:
/***/ function(module, exports) {

module.exports = "<form>\n\n<div class=\"row col-md-12\">\n  <div class=\"form-group input-demo radio-demo row\">\n    <div class=\"col-md-4 offset-md-2\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\" checked=\"checked\">\n        <span>FTP</span>\n      </label>\n    </div>\n    <div class=\"col-md-4 \">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <span>SFTP</span>\n      </label>\n    </div>\n  </div>\n\n\n <div class=\"form-group col-md-6 offset-md-2\">\n      <label for=\"inputHost\">Host</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputHost\" placeholder=\"Host\">\n</div>\n\n<div class=\"form-group col-md-2 \">\n      <label for=\"inputPort\">Port</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputPort\" placeholder=\"Port\">\n</div>\n\n\n<div class=\"form-group col-md-8 offset-md-2\">\n      <label for=\"inputLogon\">Logon Type</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputLogon\" placeholder=\"Logon\" >\n</div>\n\n  <div class=\"form-group col-md-8 offset-md-2\">\n    <label for=\"InputEmail\">User ID</label>\n    <input type=\"email\" class=\"form-control\" id=\"InputEmail\" placeholder=\"User ID\">\n  </div>\n  <div class=\"form-group col-md-8 offset-md-2\">\n    <label for=\"InputPassword\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"InputPassword\" placeholder=\"Password\">\n  </div>\n\n  <div class=\"form-group col-md-8 offset-md-2\">\n    <label for=\"Message\">Message</label>\n    <textarea  placeholder=\"Default Input\" class=\"form-control\" id=\"Message\"></textarea>\n  </div>\n  \n  <div class=\"form-group col-md-8 offset-md-2\">\n  <button (click)=\"clickback()\" class=\"btn btn-primary pull-left  \" > Back</button>\n  <button type=\"submit2\" class=\"btn btn-danger pull-right \">Submit</button>\n  </div>\n  </div>\n</form>\n"

/***/ }

});
//# sourceMappingURL=3.map