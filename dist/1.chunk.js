webpackJsonpac__name_([1],{

/***/ 1320:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(19);
var nga_module_1 = __webpack_require__(333);
var http_1 = __webpack_require__(111);
var charts_routing_1 = __webpack_require__(1362);
var charts_component_1 = __webpack_require__(1334);
var chartistJs_component_1 = __webpack_require__(1337);
var chartistJs2_component_1 = __webpack_require__(1338);
var brand_league_components_1 = __webpack_require__(1336);
var chartistJs_service_1 = __webpack_require__(1363);
var chartistJs2_service_1 = __webpack_require__(1339);
var BrandLeague_service_1 = __webpack_require__(1335);
var maps_component_1 = __webpack_require__(1328);
var bubbleMaps_component_1 = __webpack_require__(1326);
var bubbleMaps_service_1 = __webpack_require__(1327);
var angular_tag_cloud_module_1 = __webpack_require__(1392);
var ng2_google_charts_1 = __webpack_require__(1401);
var ng2_charts_1 = __webpack_require__(1400);
var ng2_daterangepicker_1 = __webpack_require__(1329);
var ChartsALLModule = (function () {
    function ChartsALLModule() {
    }
    ChartsALLModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                charts_routing_1.routing,
                http_1.HttpModule,
                ng2_charts_1.ChartsModule,
                angular_tag_cloud_module_1.TagCloudModule,
                ng2_google_charts_1.Ng2GoogleChartsModule,
                ng2_daterangepicker_1.Daterangepicker
            ],
            declarations: [
                charts_component_1.Charts,
                chartistJs_component_1.ChartistJs,
                chartistJs2_component_1.ChartistJs2,
                maps_component_1.Maps,
                bubbleMaps_component_1.BubbleMaps,
                brand_league_components_1.BrandLeague
            ],
            providers: [
                chartistJs_service_1.ChartistJsService,
                chartistJs2_service_1.ChartistJs2Service,
                BrandLeague_service_1.BrandLeagueService,
                bubbleMaps_service_1.BubbleMapsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsALLModule);
    return ChartsALLModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChartsALLModule;


/***/ },

/***/ 1326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var bubbleMaps_service_1 = __webpack_require__(1327);
var BubbleMaps = (function () {
    function BubbleMaps(_bubbleMapsService) {
        this._bubbleMapsService = _bubbleMapsService;
    }
    BubbleMaps.prototype.ngOnInit = function () {
        this.chartData = this._bubbleMapsService.getData();
    };
    BubbleMaps = __decorate([
        core_1.Component({
            selector: 'bubble-maps',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(1331)],
            template: __webpack_require__(1332),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof bubbleMaps_service_1.BubbleMapsService !== 'undefined' && bubbleMaps_service_1.BubbleMapsService) === 'function' && _a) || Object])
    ], BubbleMaps);
    return BubbleMaps;
    var _a;
}());
exports.BubbleMaps = BubbleMaps;


/***/ },

/***/ 1327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var theme_1 = __webpack_require__(82);
var BubbleMapsService = (function () {
    function BubbleMapsService(_baConfig) {
        this._baConfig = _baConfig;
    }
    BubbleMapsService.prototype.getData = function () {
        var layoutColors = this._baConfig.get().colors;
        var latlong = {};
        latlong['AD'] = { 'latitude': 42.5, 'longitude': 1.5 };
        latlong['AE'] = { 'latitude': 24, 'longitude': 54 };
        latlong['AF'] = { 'latitude': 33, 'longitude': 65 };
        latlong['AG'] = { 'latitude': 17.05, 'longitude': -61.8 };
        latlong['AI'] = { 'latitude': 18.25, 'longitude': -63.1667 };
        latlong['AL'] = { 'latitude': 41, 'longitude': 20 };
        latlong['AM'] = { 'latitude': 40, 'longitude': 45 };
        latlong['AN'] = { 'latitude': 12.25, 'longitude': -68.75 };
        latlong['AO'] = { 'latitude': -12.5, 'longitude': 18.5 };
        latlong['AP'] = { 'latitude': 35, 'longitude': 105 };
        latlong['AQ'] = { 'latitude': -90, 'longitude': 0 };
        latlong['AR'] = { 'latitude': -34, 'longitude': -64 };
        latlong['AS'] = { 'latitude': -14.3333, 'longitude': -170 };
        latlong['AT'] = { 'latitude': 47.3333, 'longitude': 13.3333 };
        latlong['AU'] = { 'latitude': -27, 'longitude': 133 };
        latlong['AW'] = { 'latitude': 12.5, 'longitude': -69.9667 };
        latlong['AZ'] = { 'latitude': 40.5, 'longitude': 47.5 };
        latlong['BA'] = { 'latitude': 44, 'longitude': 18 };
        latlong['BB'] = { 'latitude': 13.1667, 'longitude': -59.5333 };
        latlong['BD'] = { 'latitude': 24, 'longitude': 90 };
        latlong['BE'] = { 'latitude': 50.8333, 'longitude': 4 };
        latlong['BF'] = { 'latitude': 13, 'longitude': -2 };
        latlong['BG'] = { 'latitude': 43, 'longitude': 25 };
        latlong['BH'] = { 'latitude': 26, 'longitude': 50.55 };
        latlong['BI'] = { 'latitude': -3.5, 'longitude': 30 };
        latlong['BJ'] = { 'latitude': 9.5, 'longitude': 2.25 };
        latlong['BM'] = { 'latitude': 32.3333, 'longitude': -64.75 };
        latlong['BN'] = { 'latitude': 4.5, 'longitude': 114.6667 };
        latlong['BO'] = { 'latitude': -17, 'longitude': -65 };
        latlong['BR'] = { 'latitude': -10, 'longitude': -55 };
        latlong['BS'] = { 'latitude': 24.25, 'longitude': -76 };
        latlong['BT'] = { 'latitude': 27.5, 'longitude': 90.5 };
        latlong['BV'] = { 'latitude': -54.4333, 'longitude': 3.4 };
        latlong['BW'] = { 'latitude': -22, 'longitude': 24 };
        latlong['BY'] = { 'latitude': 53, 'longitude': 28 };
        latlong['BZ'] = { 'latitude': 17.25, 'longitude': -88.75 };
        latlong['CA'] = { 'latitude': 54, 'longitude': -100 };
        latlong['CC'] = { 'latitude': -12.5, 'longitude': 96.8333 };
        latlong['CD'] = { 'latitude': 0, 'longitude': 25 };
        latlong['CF'] = { 'latitude': 7, 'longitude': 21 };
        latlong['CG'] = { 'latitude': -1, 'longitude': 15 };
        latlong['CH'] = { 'latitude': 47, 'longitude': 8 };
        latlong['CI'] = { 'latitude': 8, 'longitude': -5 };
        latlong['CK'] = { 'latitude': -21.2333, 'longitude': -159.7667 };
        latlong['CL'] = { 'latitude': -30, 'longitude': -71 };
        latlong['CM'] = { 'latitude': 6, 'longitude': 12 };
        latlong['CN'] = { 'latitude': 35, 'longitude': 105 };
        latlong['CO'] = { 'latitude': 4, 'longitude': -72 };
        latlong['CR'] = { 'latitude': 10, 'longitude': -84 };
        latlong['CU'] = { 'latitude': 21.5, 'longitude': -80 };
        latlong['CV'] = { 'latitude': 16, 'longitude': -24 };
        latlong['CX'] = { 'latitude': -10.5, 'longitude': 105.6667 };
        latlong['CY'] = { 'latitude': 35, 'longitude': 33 };
        latlong['CZ'] = { 'latitude': 49.75, 'longitude': 15.5 };
        latlong['DE'] = { 'latitude': 51, 'longitude': 9 };
        latlong['DJ'] = { 'latitude': 11.5, 'longitude': 43 };
        latlong['DK'] = { 'latitude': 56, 'longitude': 10 };
        latlong['DM'] = { 'latitude': 15.4167, 'longitude': -61.3333 };
        latlong['DO'] = { 'latitude': 19, 'longitude': -70.6667 };
        latlong['DZ'] = { 'latitude': 28, 'longitude': 3 };
        latlong['EC'] = { 'latitude': -2, 'longitude': -77.5 };
        latlong['EE'] = { 'latitude': 59, 'longitude': 26 };
        latlong['EG'] = { 'latitude': 27, 'longitude': 30 };
        latlong['EH'] = { 'latitude': 24.5, 'longitude': -13 };
        latlong['ER'] = { 'latitude': 15, 'longitude': 39 };
        latlong['ES'] = { 'latitude': 40, 'longitude': -4 };
        latlong['ET'] = { 'latitude': 8, 'longitude': 38 };
        latlong['EU'] = { 'latitude': 47, 'longitude': 8 };
        latlong['FI'] = { 'latitude': 62, 'longitude': 26 };
        latlong['FJ'] = { 'latitude': -18, 'longitude': 175 };
        latlong['FK'] = { 'latitude': -51.75, 'longitude': -59 };
        latlong['FM'] = { 'latitude': 6.9167, 'longitude': 158.25 };
        latlong['FO'] = { 'latitude': 62, 'longitude': -7 };
        latlong['FR'] = { 'latitude': 46, 'longitude': 2 };
        latlong['GA'] = { 'latitude': -1, 'longitude': 11.75 };
        latlong['GB'] = { 'latitude': 54, 'longitude': -2 };
        latlong['GD'] = { 'latitude': 12.1167, 'longitude': -61.6667 };
        latlong['GE'] = { 'latitude': 42, 'longitude': 43.5 };
        latlong['GF'] = { 'latitude': 4, 'longitude': -53 };
        latlong['GH'] = { 'latitude': 8, 'longitude': -2 };
        latlong['GI'] = { 'latitude': 36.1833, 'longitude': -5.3667 };
        latlong['GL'] = { 'latitude': 72, 'longitude': -40 };
        latlong['GM'] = { 'latitude': 13.4667, 'longitude': -16.5667 };
        latlong['GN'] = { 'latitude': 11, 'longitude': -10 };
        latlong['GP'] = { 'latitude': 16.25, 'longitude': -61.5833 };
        latlong['GQ'] = { 'latitude': 2, 'longitude': 10 };
        latlong['GR'] = { 'latitude': 39, 'longitude': 22 };
        latlong['GS'] = { 'latitude': -54.5, 'longitude': -37 };
        latlong['GT'] = { 'latitude': 15.5, 'longitude': -90.25 };
        latlong['GU'] = { 'latitude': 13.4667, 'longitude': 144.7833 };
        latlong['GW'] = { 'latitude': 12, 'longitude': -15 };
        latlong['GY'] = { 'latitude': 5, 'longitude': -59 };
        latlong['HK'] = { 'latitude': 22.25, 'longitude': 114.1667 };
        latlong['HM'] = { 'latitude': -53.1, 'longitude': 72.5167 };
        latlong['HN'] = { 'latitude': 15, 'longitude': -86.5 };
        latlong['HR'] = { 'latitude': 45.1667, 'longitude': 15.5 };
        latlong['HT'] = { 'latitude': 19, 'longitude': -72.4167 };
        latlong['HU'] = { 'latitude': 47, 'longitude': 20 };
        latlong['ID'] = { 'latitude': -5, 'longitude': 120 };
        latlong['IE'] = { 'latitude': 53, 'longitude': -8 };
        latlong['IL'] = { 'latitude': 31.5, 'longitude': 34.75 };
        latlong['IN'] = { 'latitude': 20, 'longitude': 77 };
        latlong['IO'] = { 'latitude': -6, 'longitude': 71.5 };
        latlong['IQ'] = { 'latitude': 33, 'longitude': 44 };
        latlong['IR'] = { 'latitude': 32, 'longitude': 53 };
        latlong['IS'] = { 'latitude': 65, 'longitude': -18 };
        latlong['IT'] = { 'latitude': 42.8333, 'longitude': 12.8333 };
        latlong['JM'] = { 'latitude': 18.25, 'longitude': -77.5 };
        latlong['JO'] = { 'latitude': 31, 'longitude': 36 };
        latlong['JP'] = { 'latitude': 36, 'longitude': 138 };
        latlong['KE'] = { 'latitude': 1, 'longitude': 38 };
        latlong['KG'] = { 'latitude': 41, 'longitude': 75 };
        latlong['KH'] = { 'latitude': 13, 'longitude': 105 };
        latlong['KI'] = { 'latitude': 1.4167, 'longitude': 173 };
        latlong['KM'] = { 'latitude': -12.1667, 'longitude': 44.25 };
        latlong['KN'] = { 'latitude': 17.3333, 'longitude': -62.75 };
        latlong['KP'] = { 'latitude': 40, 'longitude': 127 };
        latlong['KR'] = { 'latitude': 37, 'longitude': 127.5 };
        latlong['KW'] = { 'latitude': 29.3375, 'longitude': 47.6581 };
        latlong['KY'] = { 'latitude': 19.5, 'longitude': -80.5 };
        latlong['KZ'] = { 'latitude': 48, 'longitude': 68 };
        latlong['LA'] = { 'latitude': 18, 'longitude': 105 };
        latlong['LB'] = { 'latitude': 33.8333, 'longitude': 35.8333 };
        latlong['LC'] = { 'latitude': 13.8833, 'longitude': -61.1333 };
        latlong['LI'] = { 'latitude': 47.1667, 'longitude': 9.5333 };
        latlong['LK'] = { 'latitude': 7, 'longitude': 81 };
        latlong['LR'] = { 'latitude': 6.5, 'longitude': -9.5 };
        latlong['LS'] = { 'latitude': -29.5, 'longitude': 28.5 };
        latlong['LT'] = { 'latitude': 55, 'longitude': 24 };
        latlong['LU'] = { 'latitude': 49.75, 'longitude': 6 };
        latlong['LV'] = { 'latitude': 57, 'longitude': 25 };
        latlong['LY'] = { 'latitude': 25, 'longitude': 17 };
        latlong['MA'] = { 'latitude': 32, 'longitude': -5 };
        latlong['MC'] = { 'latitude': 43.7333, 'longitude': 7.4 };
        latlong['MD'] = { 'latitude': 47, 'longitude': 29 };
        latlong['ME'] = { 'latitude': 42.5, 'longitude': 19.4 };
        latlong['MG'] = { 'latitude': -20, 'longitude': 47 };
        latlong['MH'] = { 'latitude': 9, 'longitude': 168 };
        latlong['MK'] = { 'latitude': 41.8333, 'longitude': 22 };
        latlong['ML'] = { 'latitude': 17, 'longitude': -4 };
        latlong['MM'] = { 'latitude': 22, 'longitude': 98 };
        latlong['MN'] = { 'latitude': 46, 'longitude': 105 };
        latlong['MO'] = { 'latitude': 22.1667, 'longitude': 113.55 };
        latlong['MP'] = { 'latitude': 15.2, 'longitude': 145.75 };
        latlong['MQ'] = { 'latitude': 14.6667, 'longitude': -61 };
        latlong['MR'] = { 'latitude': 20, 'longitude': -12 };
        latlong['MS'] = { 'latitude': 16.75, 'longitude': -62.2 };
        latlong['MT'] = { 'latitude': 35.8333, 'longitude': 14.5833 };
        latlong['MU'] = { 'latitude': -20.2833, 'longitude': 57.55 };
        latlong['MV'] = { 'latitude': 3.25, 'longitude': 73 };
        latlong['MW'] = { 'latitude': -13.5, 'longitude': 34 };
        latlong['MX'] = { 'latitude': 23, 'longitude': -102 };
        latlong['MY'] = { 'latitude': 2.5, 'longitude': 112.5 };
        latlong['MZ'] = { 'latitude': -18.25, 'longitude': 35 };
        latlong['NA'] = { 'latitude': -22, 'longitude': 17 };
        latlong['NC'] = { 'latitude': -21.5, 'longitude': 165.5 };
        latlong['NE'] = { 'latitude': 16, 'longitude': 8 };
        latlong['NF'] = { 'latitude': -29.0333, 'longitude': 167.95 };
        latlong['NG'] = { 'latitude': 10, 'longitude': 8 };
        latlong['NI'] = { 'latitude': 13, 'longitude': -85 };
        latlong['NL'] = { 'latitude': 52.5, 'longitude': 5.75 };
        latlong['NO'] = { 'latitude': 62, 'longitude': 10 };
        latlong['NP'] = { 'latitude': 28, 'longitude': 84 };
        latlong['NR'] = { 'latitude': -0.5333, 'longitude': 166.9167 };
        latlong['NU'] = { 'latitude': -19.0333, 'longitude': -169.8667 };
        latlong['NZ'] = { 'latitude': -41, 'longitude': 174 };
        latlong['OM'] = { 'latitude': 21, 'longitude': 57 };
        latlong['PA'] = { 'latitude': 9, 'longitude': -80 };
        latlong['PE'] = { 'latitude': -10, 'longitude': -76 };
        latlong['PF'] = { 'latitude': -15, 'longitude': -140 };
        latlong['PG'] = { 'latitude': -6, 'longitude': 147 };
        latlong['PH'] = { 'latitude': 13, 'longitude': 122 };
        latlong['PK'] = { 'latitude': 30, 'longitude': 70 };
        latlong['PL'] = { 'latitude': 52, 'longitude': 20 };
        latlong['PM'] = { 'latitude': 46.8333, 'longitude': -56.3333 };
        latlong['PR'] = { 'latitude': 18.25, 'longitude': -66.5 };
        latlong['PS'] = { 'latitude': 32, 'longitude': 35.25 };
        latlong['PT'] = { 'latitude': 39.5, 'longitude': -8 };
        latlong['PW'] = { 'latitude': 7.5, 'longitude': 134.5 };
        latlong['PY'] = { 'latitude': -23, 'longitude': -58 };
        latlong['QA'] = { 'latitude': 25.5, 'longitude': 51.25 };
        latlong['RE'] = { 'latitude': -21.1, 'longitude': 55.6 };
        latlong['RO'] = { 'latitude': 46, 'longitude': 25 };
        latlong['RS'] = { 'latitude': 44, 'longitude': 21 };
        latlong['RU'] = { 'latitude': 60, 'longitude': 100 };
        latlong['RW'] = { 'latitude': -2, 'longitude': 30 };
        latlong['SA'] = { 'latitude': 25, 'longitude': 45 };
        latlong['SB'] = { 'latitude': -8, 'longitude': 159 };
        latlong['SC'] = { 'latitude': -4.5833, 'longitude': 55.6667 };
        latlong['SD'] = { 'latitude': 15, 'longitude': 30 };
        latlong['SE'] = { 'latitude': 62, 'longitude': 15 };
        latlong['SG'] = { 'latitude': 1.3667, 'longitude': 103.8 };
        latlong['SH'] = { 'latitude': -15.9333, 'longitude': -5.7 };
        latlong['SI'] = { 'latitude': 46, 'longitude': 15 };
        latlong['SJ'] = { 'latitude': 78, 'longitude': 20 };
        latlong['SK'] = { 'latitude': 48.6667, 'longitude': 19.5 };
        latlong['SL'] = { 'latitude': 8.5, 'longitude': -11.5 };
        latlong['SM'] = { 'latitude': 43.7667, 'longitude': 12.4167 };
        latlong['SN'] = { 'latitude': 14, 'longitude': -14 };
        latlong['SO'] = { 'latitude': 10, 'longitude': 49 };
        latlong['SR'] = { 'latitude': 4, 'longitude': -56 };
        latlong['ST'] = { 'latitude': 1, 'longitude': 7 };
        latlong['SV'] = { 'latitude': 13.8333, 'longitude': -88.9167 };
        latlong['SY'] = { 'latitude': 35, 'longitude': 38 };
        latlong['SZ'] = { 'latitude': -26.5, 'longitude': 31.5 };
        latlong['TC'] = { 'latitude': 21.75, 'longitude': -71.5833 };
        latlong['TD'] = { 'latitude': 15, 'longitude': 19 };
        latlong['TF'] = { 'latitude': -43, 'longitude': 67 };
        latlong['TG'] = { 'latitude': 8, 'longitude': 1.1667 };
        latlong['TH'] = { 'latitude': 15, 'longitude': 100 };
        latlong['TJ'] = { 'latitude': 39, 'longitude': 71 };
        latlong['TK'] = { 'latitude': -9, 'longitude': -172 };
        latlong['TM'] = { 'latitude': 40, 'longitude': 60 };
        latlong['TN'] = { 'latitude': 34, 'longitude': 9 };
        latlong['TO'] = { 'latitude': -20, 'longitude': -175 };
        latlong['TR'] = { 'latitude': 39, 'longitude': 35 };
        latlong['TT'] = { 'latitude': 11, 'longitude': -61 };
        latlong['TV'] = { 'latitude': -8, 'longitude': 178 };
        latlong['TW'] = { 'latitude': 23.5, 'longitude': 121 };
        latlong['TZ'] = { 'latitude': -6, 'longitude': 35 };
        latlong['UA'] = { 'latitude': 49, 'longitude': 32 };
        latlong['UG'] = { 'latitude': 1, 'longitude': 32 };
        latlong['UM'] = { 'latitude': 19.2833, 'longitude': 166.6 };
        latlong['US'] = { 'latitude': 38, 'longitude': -97 };
        latlong['UY'] = { 'latitude': -33, 'longitude': -56 };
        latlong['UZ'] = { 'latitude': 41, 'longitude': 64 };
        latlong['VA'] = { 'latitude': 41.9, 'longitude': 12.45 };
        latlong['VC'] = { 'latitude': 13.25, 'longitude': -61.2 };
        latlong['VE'] = { 'latitude': 8, 'longitude': -66 };
        latlong['VG'] = { 'latitude': 18.5, 'longitude': -64.5 };
        latlong['VI'] = { 'latitude': 18.3333, 'longitude': -64.8333 };
        latlong['VN'] = { 'latitude': 16, 'longitude': 106 };
        latlong['VU'] = { 'latitude': -16, 'longitude': 167 };
        latlong['WF'] = { 'latitude': -13.3, 'longitude': -176.2 };
        latlong['WS'] = { 'latitude': -13.5833, 'longitude': -172.3333 };
        latlong['YE'] = { 'latitude': 15, 'longitude': 48 };
        latlong['YT'] = { 'latitude': -12.8333, 'longitude': 45.1667 };
        latlong['ZA'] = { 'latitude': -29, 'longitude': 24 };
        latlong['ZM'] = { 'latitude': -15, 'longitude': 30 };
        latlong['ZW'] = { 'latitude': -20, 'longitude': 30 };
        var mapData = [
            { 'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': layoutColors.primaryDark },
            { 'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': layoutColors.warning },
            { 'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': layoutColors.danger },
            { 'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': layoutColors.danger },
            { 'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': layoutColors.success },
            { 'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': layoutColors.warning },
            { 'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': layoutColors.warningDark },
            { 'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': layoutColors.warning },
            { 'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': layoutColors.warning },
            { 'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': layoutColors.primaryDark },
            { 'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': layoutColors.primaryDark },
            { 'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': layoutColors.warning },
            { 'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': layoutColors.warning },
            { 'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': layoutColors.danger },
            { 'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': layoutColors.primaryDark },
            { 'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': layoutColors.success },
            { 'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': layoutColors.warning },
            { 'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': layoutColors.danger },
            { 'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': layoutColors.success },
            { 'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': layoutColors.primaryDark },
            { 'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': layoutColors.warning },
            { 'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': layoutColors.danger },
            { 'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': layoutColors.danger },
            { 'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': layoutColors.primaryDark },
            { 'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': layoutColors.danger },
            { 'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': layoutColors.primary },
            { 'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': layoutColors.danger },
            { 'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': layoutColors.danger },
            { 'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': layoutColors.danger },
            { 'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': layoutColors.success },
            { 'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': layoutColors.primaryDark },
            { 'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': layoutColors.success },
            { 'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': layoutColors.danger },
            { 'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': layoutColors.danger },
            { 'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': layoutColors.danger },
            { 'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': layoutColors.primary },
            { 'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': layoutColors.danger },
            { 'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': layoutColors.warning },
            { 'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': layoutColors.primary },
            { 'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': layoutColors.warning },
            { 'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': layoutColors.warning },
            { 'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': layoutColors.warning },
            { 'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': layoutColors.danger },
            { 'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': layoutColors.primary },
            { 'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': layoutColors.success },
            { 'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': layoutColors.danger },
            { 'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': layoutColors.primary },
            { 'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': layoutColors.danger },
            { 'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': layoutColors.danger },
            { 'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': layoutColors.warning },
            { 'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': layoutColors.danger },
            { 'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': layoutColors.warningDark },
            { 'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': layoutColors.warning },
            { 'code': 'FR', 'name': 'France', 'value': 63125894, 'color': layoutColors.warning },
            { 'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': layoutColors.danger },
            { 'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': layoutColors.danger },
            { 'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': layoutColors.warning },
            { 'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': layoutColors.warning },
            { 'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': layoutColors.danger },
            { 'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': layoutColors.warning },
            { 'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': layoutColors.primary },
            { 'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': layoutColors.danger },
            { 'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': layoutColors.danger },
            { 'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': layoutColors.success },
            { 'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': layoutColors.primary },
            { 'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': layoutColors.primary },
            { 'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': layoutColors.primaryDark },
            { 'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': layoutColors.warning },
            { 'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': layoutColors.warning },
            { 'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': layoutColors.primaryDark },
            { 'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': layoutColors.primaryDark },
            { 'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': layoutColors.primaryDark },
            { 'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': layoutColors.primaryDark },
            { 'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': layoutColors.warning },
            { 'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': layoutColors.primaryDark },
            { 'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': layoutColors.warning },
            { 'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': layoutColors.primary },
            { 'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': layoutColors.primaryDark },
            { 'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': layoutColors.primaryDark },
            { 'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': layoutColors.primaryDark },
            { 'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': layoutColors.danger },
            { 'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': layoutColors.primaryDark },
            { 'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': layoutColors.primaryDark },
            { 'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': layoutColors.primaryDark },
            { 'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': layoutColors.primaryDark },
            { 'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': layoutColors.primaryDark },
            { 'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': layoutColors.warning },
            { 'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': layoutColors.primaryDark },
            { 'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': layoutColors.danger },
            { 'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': layoutColors.danger },
            { 'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': layoutColors.danger },
            { 'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': layoutColors.warning },
            { 'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': layoutColors.warning },
            { 'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': layoutColors.warning },
            { 'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': layoutColors.danger },
            { 'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': layoutColors.danger },
            { 'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': layoutColors.primaryDark },
            { 'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': layoutColors.danger },
            { 'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': layoutColors.danger },
            { 'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': layoutColors.danger },
            { 'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': layoutColors.primary },
            { 'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': layoutColors.warning },
            { 'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': layoutColors.primaryDark },
            { 'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': layoutColors.warning },
            { 'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': layoutColors.danger },
            { 'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': layoutColors.danger },
            { 'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': layoutColors.primaryDark },
            { 'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': layoutColors.danger },
            { 'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': layoutColors.primaryDark },
            { 'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': layoutColors.warning },
            { 'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': layoutColors.warningDark },
            { 'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': layoutColors.primary },
            { 'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': layoutColors.danger },
            { 'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': layoutColors.danger },
            { 'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': layoutColors.warning },
            { 'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': layoutColors.primaryDark },
            { 'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': layoutColors.primaryDark },
            { 'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': layoutColors.primary },
            { 'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': layoutColors.warningDark },
            { 'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': layoutColors.success },
            { 'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': layoutColors.success },
            { 'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': layoutColors.primaryDark },
            { 'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': layoutColors.warning },
            { 'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': layoutColors.warning },
            { 'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': layoutColors.primary },
            { 'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': layoutColors.primaryDark },
            { 'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': layoutColors.warning },
            { 'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': layoutColors.warning },
            { 'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': layoutColors.danger },
            { 'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': layoutColors.primaryDark },
            { 'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': layoutColors.danger },
            { 'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': layoutColors.warning },
            { 'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': layoutColors.danger },
            { 'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': layoutColors.primaryDark },
            { 'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': layoutColors.warning },
            { 'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': layoutColors.warning },
            { 'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': layoutColors.warningDark },
            { 'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': layoutColors.danger },
            { 'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': layoutColors.danger },
            { 'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': layoutColors.warning },
            { 'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': layoutColors.primaryDark },
            { 'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': layoutColors.danger },
            { 'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': layoutColors.success },
            { 'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': layoutColors.danger },
            { 'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': layoutColors.warning },
            { 'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': layoutColors.warning },
            { 'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': layoutColors.primaryDark },
            { 'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': layoutColors.primaryDark },
            { 'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': layoutColors.primaryDark },
            { 'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': layoutColors.danger },
            { 'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': layoutColors.primaryDark },
            { 'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': layoutColors.danger },
            { 'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': layoutColors.primary },
            { 'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': layoutColors.danger },
            { 'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': layoutColors.warning },
            { 'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': layoutColors.primaryDark },
            { 'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': layoutColors.danger },
            { 'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': layoutColors.warning },
            { 'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': layoutColors.primaryDark },
            { 'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': layoutColors.warning },
            { 'code': 'US', 'name': 'United States', 'value': 313085380, 'color': layoutColors.primary },
            { 'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': layoutColors.success },
            { 'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': layoutColors.primaryDark },
            { 'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': layoutColors.success },
            { 'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': layoutColors.primaryDark },
            { 'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': layoutColors.primaryDark },
            { 'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': layoutColors.primaryDark },
            { 'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': layoutColors.danger },
            { 'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': layoutColors.danger }
        ];
        var minBulletSize = 3, maxBulletSize = 70, min = Infinity, max = -Infinity;
        // get min and max values
        for (var i = 0; i < mapData.length; i++) {
            var value = mapData[i].value;
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }
        }
        var dataProvider = {
            mapVar: AmCharts.maps.worldLow,
            images: []
        };
        var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
        // create circle for each country
        for (var i = 0; i < mapData.length; i++) {
            var dataItem = mapData[i];
            var value_1 = dataItem.value;
            // calculate size of a bubble
            var square = (value_1 - min) / (max - min) * (maxSquare - minSquare) + minSquare;
            if (square < minSquare) {
                square = minSquare;
            }
            var size = Math.sqrt(square / (Math.PI * 2));
            var id = dataItem.code;
            dataProvider.images.push({
                type: 'circle',
                width: size,
                height: size,
                color: dataItem.color,
                longitude: latlong[id].longitude,
                latitude: latlong[id].latitude,
                title: dataItem.name,
                value: value_1
            });
        }
        return {
            type: 'map',
            theme: 'blur',
            titles: [
                { text: 'Reach around the world', size: 14 },
                { text: 'source: Twitter', size: 11 }
            ],
            dataProvider: dataProvider,
            areasSettings: {
                unlistedAreasColor: '#000000',
                unlistedAreasAlpha: 0.1
            },
            imagesSettings: {
                balloonText: '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>'
            },
            export: {
                enabled: true
            },
            pathToImages: theme_1.layoutPaths.images.amMap
        };
    };
    BubbleMapsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _a) || Object])
    ], BubbleMapsService);
    return BubbleMapsService;
    var _a;
}());
exports.BubbleMapsService = BubbleMapsService;


/***/ },

/***/ 1328:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Maps = (function () {
    function Maps() {
    }
    Maps.prototype.ngOnInit = function () {
    };
    Maps = __decorate([
        core_1.Component({
            selector: 'maps',
            styles: [],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], Maps);
    return Maps;
}());
exports.Maps = Maps;


/***/ },

/***/ 1329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1361));
__export(__webpack_require__(1333));
__export(__webpack_require__(1330));
//# sourceMappingURL=index.js.map

/***/ },

/***/ 1330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var DaterangepickerConfig = (function () {
    function DaterangepickerConfig() {
        this.settings = {};
    }
    DaterangepickerConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DaterangepickerConfig);
    return DaterangepickerConfig;
}());
exports.DaterangepickerConfig = DaterangepickerConfig;


/***/ },

/***/ 1331:
/***/ function(module, exports) {

module.exports = ".bubble-maps {\n  width: 100%;\n  height: calc(100vh - 283px);\n  font-size: 11px; }\n"

/***/ },

/***/ 1332:
/***/ function(module, exports) {

module.exports = "<ba-card title=\"Map with bubbles\">\n  <ba-am-chart baAmChartClass=\"bubble-maps\" [baAmChartConfiguration]=\"chartData\"></ba-am-chart>\n</ba-card>\n"

/***/ },

/***/ 1333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var config_service_1 = __webpack_require__(1330);
var $ = __webpack_require__(14);
__webpack_require__(1394);
var DaterangePickerComponent = (function () {
    function DaterangePickerComponent(input, config) {
        this.input = input;
        this.config = config;
        this.options = {};
        this.selected = new core_1.EventEmitter();
    }
    DaterangePickerComponent.prototype.ngAfterViewInit = function () {
        $('head').append('<style>' + __webpack_require__(1404) + '</style>');
        var targetOptions = Object.assign({}, this.config.settings, this.options);
        $(this.input.nativeElement).daterangepicker(targetOptions, this.callback.bind(this));
    };
    DaterangePickerComponent.prototype.callback = function (start, end) {
        var obj = {
            start: start,
            end: end
        };
        this.selected.emit(obj);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DaterangePickerComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DaterangePickerComponent.prototype, "selected", void 0);
    DaterangePickerComponent = __decorate([
        core_1.Directive({ selector: '[daterangepicker]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof config_service_1.DaterangepickerConfig !== 'undefined' && config_service_1.DaterangepickerConfig) === 'function' && _b) || Object])
    ], DaterangePickerComponent);
    return DaterangePickerComponent;
    var _a, _b;
}());
exports.DaterangePickerComponent = DaterangePickerComponent;


/***/ },

/***/ 1334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Charts = (function () {
    function Charts() {
    }
    Charts.prototype.ngOnInit = function () {
    };
    Charts = __decorate([
        core_1.Component({
            selector: 'maps',
            styles: [],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], Charts);
    return Charts;
}());
exports.Charts = Charts;


/***/ },

/***/ 1335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var theme_1 = __webpack_require__(82);
var BrandLeagueService = (function () {
    function BrandLeagueService(_baConfig) {
        this._baConfig = _baConfig;
        this._data = {
            simplePieData: {
                labels: ['<100', '100-1k', '1k-10k', '10k>'],
                series: [12, 12, 21, 3]
            },
            simplePieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelInterpolationFnc: function (value) {
                    return Math.round(value / 12 * 100) + '%';
                }
            },
            scatterChartOptions: {
                chartType: 'ScatterChart',
                dataTable: [
                    ['Age', 'Weight'],
                    [8, 12],
                    [4, 5.5],
                    [11, 14],
                    [4, 5],
                    [3, 3.5],
                    [6.5, 7]
                ],
                options: {
                    title: 'HasTag  and Count',
                    hAxis: { title: 'HashTag' },
                    vAxis: { title: 'Count' },
                    legend: 'none'
                }
            },
            labelsPieData: {
                labels: ['fr', 'en', 'pt', 'tl', 'ja', 'es'],
                series: [3, 34, 1, 2, 14, 1]
            },
            labelsPieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value;
                }
            },
            simpleDonutData: {
                labels: ['neutral', 'positive', 'negative'],
                series: [20, 34, 5]
            },
            simpleDonutOptions: {
                fullWidth: true,
                donut: true,
                height: '100px',
                weight: '100px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            },
            simpleLineOptions: {
                color: this._baConfig.get().colors.defaultText,
                fullWidth: true,
                height: '300px',
                chartPadding: {
                    right: 40
                }
            },
            simpleLineData: {
                labels: ['2016-11-09', '2016-11-10', '2016-11-11', '2016-11-12', '2016-11-13', '2016-11-14'],
                series: [
                    [173, 127, 54, 176, 117, 187],
                    [48, 52, 39, 93, 54, 55],
                    [53, 46, 9, 33, 43, 76]
                ]
            },
            areaLineData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [5, 9, 7, 8, 5, 3, 5, 4]
                ]
            },
            areaLineOptions: {
                fullWidth: true,
                height: '300px',
                low: 0,
                showArea: true
            },
            biLineData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [1, 2, 3, 1, -2, 0, 1],
                    [-2, -1, -2, -1, -2.5, -1, -2],
                    [0, 0, 0, 1, 2, 2.5, 2],
                    [2.5, 2, 1, 0.5, 1, 0.5, -1]
                ]
            },
            biLineOptions: {
                height: '300px',
                high: 3,
                low: -3,
                showArea: true,
                showLine: false,
                showPoint: false,
                fullWidth: true,
                axisX: {
                    showGrid: false
                }
            },
            // simpleBarData: {
            //   labels: ['@iptl', '@IndianAces', '@rogerfederer', '@naterzzzz', '@geniebouchard', '@IPTL', '@jakedavi5', '@MattBarbarin', '@MirzaSania', '@hotdog6969'],
            //   series: [
            //     [4, 2, 2, 1, 1, 1, 1,1, 1,1]
            //   ]
            // },
            // simpleBarOptions: {
            //   fullWidth: true,
            //   height: '300px'
            // },
            multiBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [5, 4, 3, 7],
                    [3, 2, 9, 5],
                    [1, 5, 8, 4],
                    [2, 3, 4, 6],
                    [4, 1, 2, 1]
                ]
            },
            multiBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value.split(/\s+/).map(function (word) {
                            return word[0];
                        }).join('');
                    }
                },
                axisY: {
                    offset: 20
                }
            },
            multiBarResponsive: [
                ['screen and (min-width: 400px)', {
                        reverseData: true,
                        horizontalBars: true,
                        axisX: {
                            labelInterpolationFnc: function (n) { return n; }
                        },
                        axisY: {
                            offset: 60
                        }
                    }],
                ['screen and (min-width: 700px)', {
                        stackBars: false,
                        reverseData: false,
                        horizontalBars: false,
                        seriesBarDistance: 15
                    }]
            ],
            stackedBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            },
            stackedBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1000) + 'k';
                    }
                }
            }
        };
    }
    BrandLeagueService.prototype.getAll = function () {
        return this._data;
    };
    BrandLeagueService.prototype.getResponsive = function (padding, offset) {
        return [
            ['screen and (min-width: 1550px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 1200px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 600px)', {
                    chartPadding: 0,
                    labelOffset: 0,
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }]
        ];
    };
    BrandLeagueService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _a) || Object])
    ], BrandLeagueService);
    return BrandLeagueService;
    var _a;
}());
exports.BrandLeagueService = BrandLeagueService;


/***/ },

/***/ 1336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__(0);
var httpservice_1 = __webpack_require__(650);
var BrandLeague_service_1 = __webpack_require__(1335);
var theme_1 = __webpack_require__(82);
var ng2_daterangepicker_1 = __webpack_require__(1329);
var moment = __webpack_require__(2);
var services_1 = __webpack_require__(210);
__webpack_require__(651);
var baAmChartTheme_service_1 = __webpack_require__(652);
var BrandLeague = (function () {
    function BrandLeague(_chartistJs2Service, _baConfig, _httpService, daterangepickerOptions, _baAmChartThemeService) {
        this._chartistJs2Service = _chartistJs2Service;
        this._baConfig = _baConfig;
        this._httpService = _httpService;
        this.daterangepickerOptions = daterangepickerOptions;
        this._baAmChartThemeService = _baAmChartThemeService;
        this.topMentionLegend = true;
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartColors = [];
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        //------------------------------------------------------------------------------------------------//
        this.dateInputs = [
            {
                start: moment(),
                end: moment().add(5, 'month'),
            }
        ];
        this.userClassLegend = false;
        this.topUserLegend = true;
        this.topDomainLegend = true;
        this.topReachLegend = true;
        this.languageColor = [];
        this.totalarticlesengagement = 0;
        this.totalarticlecount = 0;
        this.totalimpact = 0;
        this.totalreach = 0;
        this.totalengagedusers = 0;
        this.polarAreaLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.articleChartOptions = {
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        display: false
                    }]
            },
            responsive: true
        };
        this._loadChartsLib();
        this.daterangepickerOptions.settings = {
            timePicker: true,
            timePickerIncrement: 10,
            locale: {
                format: 'MM/DD/YYYY h:mm:ss A'
            },
            alwaysShowCalendars: false,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        };
    }
    BrandLeague.prototype._loadChartsLib = function () {
        services_1.BaThemePreloader.registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    BrandLeague.prototype.ngOnInit = function () {
        var self = this;
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
        self.requestLeague(self);
        //sentiment  
        self.sentimentLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        self.sentimentData = [300, 500, 100];
        self.polarAreaChartData = [300, 500, 100, 40, 120];
        self.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        self.polarAreaChartType = 'polarArea';
        // top brands 
        self.topBrandMoniteringType = 'bar';
        self.topMentionColor = [{
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#1EF9A1",
                hoverBorderColor: "#7FFD1F"
            }];
        // Brand Monitoring 
        self.topBrandMoniteringLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topBrandMoniteringData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Brand Monitoring Category' }];
        // Top Brand Keywords  
        self.topKeywordLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topKeywordData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Brand Monitoring Brands' }];
        // Top Mentions Labels
        self.topMentionChartType = 'horizontalBar';
        self.topMentionLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topMentionData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Mentions' }];
        // top Brand type 
        self.topBrandTypeData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Brand Type' }];
        self.topBrandTypeLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topBrandChartType = 'horizontalBar';
        //Articles Languages
        self.topUserLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        self.topUserData = [300, 500, 100, 40, 120];
        // line chart 
        self.lineChartData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }, { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },];
        self.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        self.lineChartColors = [
            {
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: '#00acac',
                pointBackgroundColor: '#348fe2',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        // word cloud 
        self.words = [{ text: 'Coca-Cola', weight: 1466 },
            { text: 'Coca', weight: 1080 },
            { text: 'Cola', weight: 1024 },
            { text: 'Christmas', weight: 647 },
            { text: 'advert', weight: 582 },
            { text: 'Coke', weight: 417 },
            { text: 'cola', weight: 372 },
            { text: 'Zero', weight: 323 },
            { text: 'way', weight: 322 },
            { text: 'coca', weight: 322 },
            { text: 'Diet', weight: 319 },
            { text: '#MasterTheChoiceIMAXSweepstakes', weight: 313 },
            { text: 'Rebellion', weight: 313 },
            { text: 'Empire', weight: 312 },
            { text: 'Rogue', weight: 303 },
            { text: 'Either', weight: 302 },
            { text: '#HolidaysAreComing', weight: 232 }
        ];
        jQuery("#col1").jQCloud(self.words, {
            autoResize: true
        });
        self.twitterFeeds = [
            {
                url: "https://twitter.com/AMAs/status/800378679536676864",
            },
            {
                url: "https://twitter.com/AMAs/status/800458706823561216",
            },
            {
                url: "https://twitter.com/AMAs/status/800466263034109952",
            },
            {
                url: "https://twitter.com/AMAs/status/800443605223501824",
            }
        ];
        self.userClassLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        self.userClassData = [300, 500, 100];
        self.url_1 = "https://twitter.com/AMAs/status/800378679536676864";
        self.url_2 = "https://twitter.com/AMAs/status/800458706823561216";
        self.url_3 = "https://twitter.com/AMAs/status/800466263034109952";
        self.url_4 = "https://twitter.com/AMAs/status/800443605223501824";
        self.sentimentChartType = 'doughnut';
        self.sentimentOptions = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                    }
                }
            }
        };
        self.polarOptions = [{ scaleShowLabels: false }];
        self.userClassChartType = 'radar';
        self.topUserChartType = 'pie';
        self.topUserOptions = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                    }
                }
            }
        };
        self.topDomainChartType = 'horizontalBar';
        self.topReachChartType = 'bar';
        self.topDomainLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topDomainData = [{ label: 'Top Domain', data: [65, 59, 80, 81, 56, 55, 40] }];
        self.topDomainColor = [{
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#1EF9A1",
                hoverBorderColor: "#7FFD1F"
            }];
        self.topReachLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topReachData = [{ label: 'Top Domain', data: [65, 59, 80, 81, 56, 55, 40] }];
        self.topReachColor = [{
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#1EF9A1",
                hoverBorderColor: "#7FFD1F"
            }];
        self.mapData = [{ "code": "BE", "name": "Belgium", "value": 19, "color": "#e7ba08" }, { "code": "BG", "name": "Bulgaria", "value": 1, "color": "#e7ba08" }, { "code": "BA", "name": "Bosnia and Herzegovina", "value": 2, "color": "#e7ba08" }, { "code": "JP", "name": "Japan", "value": 7, "color": "#0091d8" }, { "code": "JM", "name": "Jamaica", "value": 4, "color": "#00abff" }, { "code": "BW", "name": "Botswana", "value": 1, "color": "#f95372" }, { "code": "BR", "name": "Brazil", "value": 20, "color": "#8bd22f" }, { "code": "RU", "name": "Russia", "value": 4, "color": "#e7ba08" }, { "code": "RS", "name": "Serbia", "value": 3, "color": "#e7ba08" }, { "code": "RO", "name": "Romania", "value": 1, "color": "#e7ba08" }, { "code": "GT", "name": "Guatemala", "value": 1, "color": "#00abff" }, { "code": "GR", "name": "Greece", "value": 1, "color": "#e7ba08" }, { "code": "GB", "name": "United Kingdom", "value": 345, "color": "#e7ba08" }, { "code": "GH", "name": "Ghana", "value": 2, "color": "#f95372" }, { "code": "HR", "name": "Croatia", "value": 1, "color": "#e7ba08" }, { "code": "HT", "name": "Haiti", "value": 1, "color": "#00abff" }, { "code": "HU", "name": "Hungary", "value": 1, "color": "#e7ba08" }, { "code": "HK", "name": "Hong Kong, China", "value": 4, "color": "#0091d8" }, { "code": "PT", "name": "Portugal", "value": 5, "color": "#e7ba08" }, { "code": "PA", "name": "Panama", "value": 2, "color": "#00abff" }, { "code": "UY", "name": "Uruguay", "value": 8, "color": "#8bd22f" }, { "code": "PE", "name": "Peru", "value": 2, "color": "#8bd22f" }, { "code": "PK", "name": "Pakistan", "value": 10, "color": "#0091d8" }, { "code": "PH", "name": "Philippines", "value": 8, "color": "#0091d8" }, { "code": "PL", "name": "Poland", "value": 3, "color": "#e7ba08" }, { "code": "EE", "name": "Estonia", "value": 1, "color": "#e7ba08" }, { "code": "EG", "name": "Egypt", "value": 5, "color": "#f95372" }, { "code": "ZA", "name": "South Africa", "value": 25, "color": "#f95372" }, { "code": "EC", "name": "Ecuador", "value": 20, "color": "#8bd22f" }, { "code": "ZW", "name": "Zimbabwe", "value": 2, "color": "#f95372" }, { "code": "ES", "name": "Spain", "value": 19, "color": "#e7ba08" }, { "code": "MA", "name": "Morocco", "value": 43, "color": "#f95372" }, { "code": "MM", "name": "Myanmar", "value": 1, "color": "#0091d8" }, { "code": "MN", "name": "Mongolia", "value": 1, "color": "#0091d8" }, { "code": "MK", "name": "Macedonia, FYR", "value": 1, "color": "#e7ba08" }, { "code": "MY", "name": "Malaysia", "value": 5, "color": "#0091d8" }, { "code": "MX", "name": "Mexico", "value": 8, "color": "#00abff" }, { "code": "FR", "name": "France", "value": 6, "color": "#e7ba08" }, { "code": "FI", "name": "Finland", "value": 2, "color": "#e7ba08" }, { "code": "NI", "name": "Nicaragua", "value": 1, "color": "#00abff" }, { "code": "NL", "name": "Netherlands", "value": 95, "color": "#e7ba08" }, { "code": "NO", "name": "Norway", "value": 3, "color": "#e7ba08" }, { "code": "NA", "name": "Namibia", "value": 1, "color": "#f95372" }, { "code": "NG", "name": "Nigeria", "value": 21, "color": "#f95372" }, { "code": "NZ", "name": "New Zealand", "value": 9, "color": "#c49e06" }, { "code": "CH", "name": "Switzerland", "value": 3, "color": "#e7ba08" }, { "code": "CO", "name": "Colombia", "value": 4, "color": "#8bd22f" }, { "code": "CN", "name": "China", "value": 66, "color": "#0091d8" }, { "code": "CL", "name": "Chile", "value": 2, "color": "#8bd22f" }, { "code": "CA", "name": "Canada", "value": 55, "color": "#00abff" }, { "code": "CR", "name": "Costa Rica", "value": 1, "color": "#00abff" }, { "code": "KE", "name": "Kenya", "value": 16, "color": "#f95372" }, { "code": "KR", "name": "Korea, Rep.", "value": 1, "color": "#0091d8" }, { "code": "SI", "name": "Slovenia", "value": 2, "color": "#e7ba08" }, { "code": "SO", "name": "Somalia", "value": 1, "color": "#f95372" }, { "code": "KW", "name": "Kuwait", "value": 1, "color": "#0091d8" }, { "code": "SA", "name": "Saudi Arabia", "value": 5, "color": "#0091d8" }, { "code": "SG", "name": "Singapore", "value": 2, "color": "#0091d8" }, { "code": "SE", "name": "Sweden", "value": 2, "color": "#e7ba08" }, { "code": "DO", "name": "Dominican Rep.", "value": 9, "color": "#00abff" }, { "code": "DK", "name": "Denmark", "value": 2, "color": "#e7ba08" }, { "code": "DE", "name": "Germany", "value": 12, "color": "#e7ba08" }, { "code": "US", "name": "United States", "value": 872, "color": "#00abff" }, { "code": "TZ", "name": "Tanzania", "value": 2, "color": "#f95372" }, { "code": "LA", "name": "Laos", "value": 1, "color": "#0091d8" }, { "code": "TR", "name": "Turkey", "value": 2, "color": "#e7ba08" }, { "code": "TN", "name": "Tunisia", "value": 1, "color": "#f95372" }, { "code": "LT", "name": "Lithuania", "value": 1, "color": "#e7ba08" }, { "code": "LU", "name": "Luxembourg", "value": 1, "color": "#e7ba08" }, { "code": "TH", "name": "Thailand", "value": 6, "color": "#0091d8" }, { "code": "AE", "name": "United Arab Emirates", "value": 14, "color": "#0091d8" }, { "code": "VE", "name": "Venezuela", "value": 11, "color": "#8bd22f" }, { "code": "IQ", "name": "Iraq", "value": 3, "color": "#0091d8" }, { "code": "IT", "name": "Italy", "value": 6, "color": "#e7ba08" }, { "code": "VN", "name": "Vietnam", "value": 18, "color": "#0091d8" }, { "code": "AR", "name": "Argentina", "value": 4, "color": "#8bd22f" }, { "code": "AU", "name": "Australia", "value": 22, "color": "#c49e06" }, { "code": "IL", "name": "Israel", "value": 3, "color": "#0091d8" }, { "code": "IN", "name": "India", "value": 38, "color": "#0091d8" }, { "code": "LB", "name": "Lebanon", "value": 2, "color": "#0091d8" }, { "code": "AZ", "name": "Azerbaijan", "value": 1, "color": "#e7ba08" }, { "code": "IE", "name": "Ireland", "value": 42, "color": "#e7ba08" }, { "code": "ID", "name": "Indonesia", "value": 4, "color": "#0091d8" }, { "code": "BD", "name": "Bangladesh", "value": 2, "color": "#0091d8" }];
        self.transformationLocation(self.mapData, self);
        self.languageChartType = 'doughnut';
        self.languageLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.languageColor = [{
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                hoverBorderColor: "#7FFD1F"
            }];
        self.languageData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Mentions' }];
    };
    BrandLeague.prototype.makeRequest = function (self) {
        if (self.sentimental_data !== "") {
            self.requestSentimental({ "sentimental": self.sentimental_data }, self);
        }
    };
    BrandLeague.prototype.makeInputData = function (self, data) {
        self.brand_count = data.allbrand_count;
        self.sentimentLabels = self.getChartLabel(data.sentiment);
        self.sentimentData = self.getChartValue(data.sentiment);
        self.topMentionLabels = self.getChartLabel(data.top_mention);
        self.topMentionData = [{ data: self.getChartValue(data.top_mention), label: 'Top Mentions' }];
        self.topBrandMoniteringLabels = self.getChartLabel(data.channels);
        self.topBrandMoniteringData = [{ data: self.getChartValue(data.channels), label: 'Brand Monitoring Category' }];
        self.topDomainLabels = self.getChartLabel(data.top_domain);
        self.topDomainData = [{ label: 'Top Domain', data: self.getChartValue(data.top_domain) }];
        self.topKeywordLabels = self.getChartLabel(data.brands);
        self.topKeywordData = [{ data: self.getChartValue(data.brands), label: 'Top Brand Monitoring Brands' }];
        self.topBrandTypeData = [{ data: self.getChartValue(data.brand_type), label: 'Top Brand Type' }];
        self.topBrandTypeLabels = self.getChartLabel(data.brand_type);
        self.topUserLabels = self.getLanguageLabel(data.article_lang);
        self.topUserData = self.getLanguageValue(data.article_lang);
        self.lineChartData = [{ data: self.getLineValueTrue(data.histogram), label: 'Engaged True' }, { data: self.getLineValueFalse(data.histogram), label: 'Engaged False' },];
        self.lineChartLabels = self.getLineLabel(data.histogram);
        var data_array = [];
        var logoData = data.tags;
        logoData = JSON.parse(JSON.stringify(logoData).split('"key":').join('"text":'));
        logoData = JSON.parse(JSON.stringify(logoData).split('"doc_count":').join('"weight":'));
        logoData.forEach(function (element) {
            var objWord = {
                text: element.text,
                weight: element.weight,
                handlers: {
                    click: function () {
                        console.log("it worked for" + element.text);
                        self.logo_ele = element.text;
                        //self.makeRequest(self);
                    }
                }
            };
            data_array.push(objWord);
        });
        jQuery("#col1").jQCloud('update', data_array, {
            autoResize: true
        });
    };
    BrandLeague.prototype.getBackHome = function () {
        console.log('click');
        var self = this;
        self.requestLeague(self);
    };
    BrandLeague.prototype.requestLeague = function (self) {
        this._httpService.GetHttp("get_league")
            .subscribe(function (data) {
            //console.log(data)
            self.makeInputData(self, data);
        }, function (error) {
            console.log(error);
        });
    };
    BrandLeague.prototype.requestLeagueWithDate = function (self, post_data) {
        this._httpService.PostHttp(JSON.stringify(post_data), "get_league_date")
            .subscribe(function (data) {
            console.log(data);
            self.makeInputData(self, data);
        }, function (error) {
            console.log(error);
        });
    };
    BrandLeague.prototype.getLineLabel = function (data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            //console.log(JSON.stringify(obj.key_as_string));
            label.push(obj.key_as_string);
        }
        return label;
    };
    BrandLeague.prototype.getLineValueTrue = function (data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var data_count = obj.data_ins.buckets;
            for (var j = 0; j < data_count.length; j++) {
                var obj1 = data_count[j];
                if (obj1.key_as_string == 'true') {
                    value.push(obj1.doc_count);
                }
            }
        }
        return value;
    };
    BrandLeague.prototype.getLineValueFalse = function (data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var data_count = obj.data_ins.buckets;
            for (var j = 0; j < data_count.length; j++) {
                var obj1 = data_count[j];
                if (obj1.key_as_string == 'false') {
                    value.push(obj1.doc_count);
                }
            }
        }
        return value;
    };
    BrandLeague.prototype.getLanguageLabel = function (data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            //console.log(JSON.stringify(obj.key));
            label.push(obj.key);
        }
        return label;
    };
    BrandLeague.prototype.getLanguageValue = function (data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            value.push(obj.doc_count);
        }
        return value;
    };
    BrandLeague.prototype.formatDate = function (date) {
        var d = new Date(date);
        var epoc = (d.getTime() - d.getSeconds()) / 1000;
        return epoc + '000';
    };
    BrandLeague.prototype.ProcessTwitt_Data = function (data2, self) {
        if (data2.hasOwnProperty("top_articles")) {
            self.url_1 = "https://twitter.com/AMAs/status/800378679536676864";
            self.url_2 = "https://twitter.com/AMAs/status/800458706823561216";
            self.url_3 = "https://twitter.com/AMAs/status/800466263034109952";
            self.url_4 = "https://twitter.com/AMAs/status/800443605223501824";
            self.mapData = self.getMapLocationData(data2.article_locations, self);
            self.transformationLocation(self.mapData, self);
        }
        ;
    };
    BrandLeague.prototype.getResponsive = function (padding, offset) {
        return this._chartistJs2Service.getResponsive(padding, offset);
    };
    BrandLeague.prototype.OnChangeDate = function () {
        var self = this;
        var post_data = {};
        if (self.start_date !== "" || self.end_date !== "") {
            post_data = { "gte": "1480591800547", "lte": "1485775800547" };
            self.requestLeagueWithDate(self, post_data);
        }
        else {
            post_data = { "gte": self.start_date, "lte": self.end_date };
            self.requestLeagueWithDate(self, post_data);
        }
    };
    BrandLeague.prototype.selectDate = function (value, dateInput) {
        var self = this;
        dateInput.start = value.start;
        dateInput.end = value.end;
        self.start_date = this.formatDate(dateInput.start);
        console.log(self.start_date);
        self.end_date = this.formatDate(dateInput.end);
        console.log(self.end_date);
        self.OnChangeDate();
    };
    BrandLeague.prototype.OnChangeBrand = function () {
        var self = this;
        self.OnChangeDate();
    };
    BrandLeague.prototype.OnChangeChannel = function () {
        var self = this;
        self.OnChangeDate();
    };
    // events
    BrandLeague.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    BrandLeague.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    BrandLeague.prototype.chartSentimentalClicked = function (e) {
        var self = this;
        self.sentimental_data = e.active[0]._model.label;
        self.makeRequest(self);
    };
    BrandLeague.prototype.randomize = function () {
    };
    BrandLeague.prototype.getChartLabel = function (data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            label.push(obj.key);
        }
        return label;
    };
    BrandLeague.prototype.getChartValue = function (data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            value.push(obj.doc_count);
        }
        return value;
    };
    BrandLeague.prototype.getMapLocationData = function (result, self) {
        var mapResult = [];
        for (var key in result) {
            if (key !== "") {
                var data = self.getMapData(key, result[key]);
                mapResult.push(data);
            }
        }
        return mapResult;
    };
    BrandLeague.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    BrandLeague.prototype.getMapData = function (key, value) {
        var layoutColors = this._baConfig.get().colors;
        var mapData = [
            { 'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': layoutColors.primaryDark },
            { 'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': layoutColors.warning },
            { 'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': layoutColors.danger },
            { 'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': layoutColors.danger },
            { 'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': layoutColors.success },
            { 'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': layoutColors.warning },
            { 'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': layoutColors.warningDark },
            { 'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': layoutColors.warning },
            { 'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': layoutColors.warning },
            { 'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': layoutColors.primaryDark },
            { 'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': layoutColors.primaryDark },
            { 'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': layoutColors.warning },
            { 'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': layoutColors.warning },
            { 'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': layoutColors.danger },
            { 'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': layoutColors.primaryDark },
            { 'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': layoutColors.success },
            { 'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': layoutColors.warning },
            { 'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': layoutColors.danger },
            { 'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': layoutColors.success },
            { 'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': layoutColors.primaryDark },
            { 'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': layoutColors.warning },
            { 'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': layoutColors.danger },
            { 'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': layoutColors.danger },
            { 'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': layoutColors.primaryDark },
            { 'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': layoutColors.danger },
            { 'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': layoutColors.primary },
            { 'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': layoutColors.danger },
            { 'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': layoutColors.danger },
            { 'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': layoutColors.danger },
            { 'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': layoutColors.success },
            { 'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': layoutColors.primaryDark },
            { 'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': layoutColors.success },
            { 'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': layoutColors.danger },
            { 'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': layoutColors.danger },
            { 'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': layoutColors.danger },
            { 'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': layoutColors.primary },
            { 'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': layoutColors.danger },
            { 'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': layoutColors.warning },
            { 'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': layoutColors.primary },
            { 'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': layoutColors.warning },
            { 'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': layoutColors.warning },
            { 'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': layoutColors.warning },
            { 'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': layoutColors.danger },
            { 'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': layoutColors.primary },
            { 'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': layoutColors.success },
            { 'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': layoutColors.danger },
            { 'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': layoutColors.primary },
            { 'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': layoutColors.danger },
            { 'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': layoutColors.danger },
            { 'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': layoutColors.warning },
            { 'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': layoutColors.danger },
            { 'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': layoutColors.warningDark },
            { 'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': layoutColors.warning },
            { 'code': 'FR', 'name': 'France', 'value': 63125894, 'color': layoutColors.warning },
            { 'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': layoutColors.danger },
            { 'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': layoutColors.danger },
            { 'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': layoutColors.warning },
            { 'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': layoutColors.warning },
            { 'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': layoutColors.danger },
            { 'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': layoutColors.warning },
            { 'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': layoutColors.primary },
            { 'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': layoutColors.danger },
            { 'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': layoutColors.danger },
            { 'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': layoutColors.success },
            { 'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': layoutColors.primary },
            { 'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': layoutColors.primary },
            { 'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': layoutColors.primaryDark },
            { 'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': layoutColors.warning },
            { 'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': layoutColors.warning },
            { 'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': layoutColors.primaryDark },
            { 'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': layoutColors.primaryDark },
            { 'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': layoutColors.primaryDark },
            { 'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': layoutColors.primaryDark },
            { 'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': layoutColors.warning },
            { 'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': layoutColors.primaryDark },
            { 'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': layoutColors.warning },
            { 'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': layoutColors.primary },
            { 'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': layoutColors.primaryDark },
            { 'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': layoutColors.primaryDark },
            { 'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': layoutColors.primaryDark },
            { 'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': layoutColors.danger },
            { 'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': layoutColors.primaryDark },
            { 'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': layoutColors.primaryDark },
            { 'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': layoutColors.primaryDark },
            { 'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': layoutColors.primaryDark },
            { 'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': layoutColors.primaryDark },
            { 'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': layoutColors.warning },
            { 'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': layoutColors.primaryDark },
            { 'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': layoutColors.danger },
            { 'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': layoutColors.danger },
            { 'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': layoutColors.danger },
            { 'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': layoutColors.warning },
            { 'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': layoutColors.warning },
            { 'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': layoutColors.warning },
            { 'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': layoutColors.danger },
            { 'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': layoutColors.danger },
            { 'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': layoutColors.primaryDark },
            { 'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': layoutColors.danger },
            { 'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': layoutColors.danger },
            { 'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': layoutColors.danger },
            { 'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': layoutColors.primary },
            { 'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': layoutColors.warning },
            { 'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': layoutColors.primaryDark },
            { 'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': layoutColors.warning },
            { 'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': layoutColors.danger },
            { 'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': layoutColors.danger },
            { 'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': layoutColors.primaryDark },
            { 'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': layoutColors.danger },
            { 'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': layoutColors.primaryDark },
            { 'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': layoutColors.warning },
            { 'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': layoutColors.warningDark },
            { 'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': layoutColors.primary },
            { 'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': layoutColors.danger },
            { 'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': layoutColors.danger },
            { 'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': layoutColors.warning },
            { 'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': layoutColors.primaryDark },
            { 'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': layoutColors.primaryDark },
            { 'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': layoutColors.primary },
            { 'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': layoutColors.warningDark },
            { 'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': layoutColors.success },
            { 'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': layoutColors.success },
            { 'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': layoutColors.primaryDark },
            { 'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': layoutColors.warning },
            { 'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': layoutColors.warning },
            { 'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': layoutColors.primary },
            { 'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': layoutColors.primaryDark },
            { 'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': layoutColors.warning },
            { 'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': layoutColors.warning },
            { 'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': layoutColors.danger },
            { 'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': layoutColors.primaryDark },
            { 'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': layoutColors.danger },
            { 'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': layoutColors.warning },
            { 'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': layoutColors.danger },
            { 'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': layoutColors.primaryDark },
            { 'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': layoutColors.warning },
            { 'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': layoutColors.warning },
            { 'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': layoutColors.warningDark },
            { 'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': layoutColors.danger },
            { 'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': layoutColors.danger },
            { 'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': layoutColors.warning },
            { 'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': layoutColors.primaryDark },
            { 'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': layoutColors.danger },
            { 'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': layoutColors.success },
            { 'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': layoutColors.danger },
            { 'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': layoutColors.warning },
            { 'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': layoutColors.warning },
            { 'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': layoutColors.primaryDark },
            { 'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': layoutColors.primaryDark },
            { 'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': layoutColors.primaryDark },
            { 'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': layoutColors.danger },
            { 'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': layoutColors.primaryDark },
            { 'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': layoutColors.danger },
            { 'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': layoutColors.primary },
            { 'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': layoutColors.danger },
            { 'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': layoutColors.warning },
            { 'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': layoutColors.primaryDark },
            { 'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': layoutColors.danger },
            { 'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': layoutColors.warning },
            { 'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': layoutColors.primaryDark },
            { 'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': layoutColors.warning },
            { 'code': 'US', 'name': 'United States', 'value': 313085380, 'color': layoutColors.primary },
            { 'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': layoutColors.success },
            { 'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': layoutColors.primaryDark },
            { 'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': layoutColors.success },
            { 'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': layoutColors.primaryDark },
            { 'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': layoutColors.primaryDark },
            { 'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': layoutColors.primaryDark },
            { 'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': layoutColors.danger },
            { 'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': layoutColors.danger }
        ];
        for (var i = 0; i < mapData.length; i++) {
            var obj = mapData[i];
            if (obj.code === key && key != "") {
                var data = {};
                data['code'] = key;
                data['name'] = obj.name;
                data['value'] = value;
                data['color'] = obj.color;
                return data;
            }
        }
    };
    BrandLeague.prototype.transformationLocation = function (mapdata, self) {
        self.inputdata = mapdata;
        self.chartData = self.getDataWithParam(self.inputdata);
        var chart = AmCharts.makeChart(this._selector.nativeElement, self.chartData);
    };
    BrandLeague.prototype.transformationDateDropdown = function (result, self) {
        var sampleObject = [];
        result.forEach(function (element) {
            var sO = {
                name: element,
                date: element
            };
            sampleObject.push(sO);
        });
        self.dropDownDate = sampleObject;
    };
    BrandLeague.prototype.transformationChannalDropdown = function (result, self) {
        var sampleObject = [];
        var c_name;
        result.forEach(function (element) {
            if (element === 'reddit') {
                c_name = 'Reddit';
            }
            if (element === 'facebook') {
                c_name = 'Facebook';
            }
            if (element === 'tumblr') {
                c_name = 'Tumblr';
            }
            if (element === 'flickr') {
                c_name = 'Flickr';
            }
            if (element === 'news') {
                c_name = 'News';
            }
            if (element === 'all_media_stat') {
                c_name = 'All';
            }
            if (element === 'twitter') {
                c_name = 'Twitter';
            }
            if (element === 'Plus') {
                c_name = 'Plus';
            }
            if (element === 'blogs') {
                c_name = 'Blogs';
            }
            var sO = {
                name: c_name,
                channel: element
            };
            sampleObject.push(sO);
        });
        self.dropDownChannel = sampleObject;
    };
    BrandLeague.prototype.transformationBrandDropdown = function (result, self) {
        var sampleObject = [];
        result.forEach(function (element) {
            var sO = {
                name: element,
                brand: element
            };
            sampleObject.push(sO);
        });
        self.dropDownBrand = sampleObject;
    };
    BrandLeague.prototype.makeHasTagInput = function (result) {
        var cloud = [];
        for (var i = 0; i < 10; i++) {
            var data_lb = result[i];
            cloud.push(data_lb);
        }
        return cloud;
    };
    BrandLeague.prototype.makeReachInput = function (result) {
        var cloud = [];
        for (var i = 0; i < 20; i++) {
            var data_lb = result[i];
            cloud.push(data_lb);
        }
        return cloud;
    };
    BrandLeague.prototype.getDataWithParam = function (mapdata, self) {
        var layoutColors = this._baConfig.get().colors;
        var latlong = {};
        latlong['AD'] = { 'latitude': 42.5, 'longitude': 1.5 };
        latlong['AE'] = { 'latitude': 24, 'longitude': 54 };
        latlong['AF'] = { 'latitude': 33, 'longitude': 65 };
        latlong['AG'] = { 'latitude': 17.05, 'longitude': -61.8 };
        latlong['AI'] = { 'latitude': 18.25, 'longitude': -63.1667 };
        latlong['AL'] = { 'latitude': 41, 'longitude': 20 };
        latlong['AM'] = { 'latitude': 40, 'longitude': 45 };
        latlong['AN'] = { 'latitude': 12.25, 'longitude': -68.75 };
        latlong['AO'] = { 'latitude': -12.5, 'longitude': 18.5 };
        latlong['AP'] = { 'latitude': 35, 'longitude': 105 };
        latlong['AQ'] = { 'latitude': -90, 'longitude': 0 };
        latlong['AR'] = { 'latitude': -34, 'longitude': -64 };
        latlong['AS'] = { 'latitude': -14.3333, 'longitude': -170 };
        latlong['AT'] = { 'latitude': 47.3333, 'longitude': 13.3333 };
        latlong['AU'] = { 'latitude': -27, 'longitude': 133 };
        latlong['AW'] = { 'latitude': 12.5, 'longitude': -69.9667 };
        latlong['AZ'] = { 'latitude': 40.5, 'longitude': 47.5 };
        latlong['BA'] = { 'latitude': 44, 'longitude': 18 };
        latlong['BB'] = { 'latitude': 13.1667, 'longitude': -59.5333 };
        latlong['BD'] = { 'latitude': 24, 'longitude': 90 };
        latlong['BE'] = { 'latitude': 50.8333, 'longitude': 4 };
        latlong['BF'] = { 'latitude': 13, 'longitude': -2 };
        latlong['BG'] = { 'latitude': 43, 'longitude': 25 };
        latlong['BH'] = { 'latitude': 26, 'longitude': 50.55 };
        latlong['BI'] = { 'latitude': -3.5, 'longitude': 30 };
        latlong['BJ'] = { 'latitude': 9.5, 'longitude': 2.25 };
        latlong['BM'] = { 'latitude': 32.3333, 'longitude': -64.75 };
        latlong['BN'] = { 'latitude': 4.5, 'longitude': 114.6667 };
        latlong['BO'] = { 'latitude': -17, 'longitude': -65 };
        latlong['BR'] = { 'latitude': -10, 'longitude': -55 };
        latlong['BS'] = { 'latitude': 24.25, 'longitude': -76 };
        latlong['BT'] = { 'latitude': 27.5, 'longitude': 90.5 };
        latlong['BV'] = { 'latitude': -54.4333, 'longitude': 3.4 };
        latlong['BW'] = { 'latitude': -22, 'longitude': 24 };
        latlong['BY'] = { 'latitude': 53, 'longitude': 28 };
        latlong['BZ'] = { 'latitude': 17.25, 'longitude': -88.75 };
        latlong['CA'] = { 'latitude': 54, 'longitude': -100 };
        latlong['CC'] = { 'latitude': -12.5, 'longitude': 96.8333 };
        latlong['CD'] = { 'latitude': 0, 'longitude': 25 };
        latlong['CF'] = { 'latitude': 7, 'longitude': 21 };
        latlong['CG'] = { 'latitude': -1, 'longitude': 15 };
        latlong['CH'] = { 'latitude': 47, 'longitude': 8 };
        latlong['CI'] = { 'latitude': 8, 'longitude': -5 };
        latlong['CK'] = { 'latitude': -21.2333, 'longitude': -159.7667 };
        latlong['CL'] = { 'latitude': -30, 'longitude': -71 };
        latlong['CM'] = { 'latitude': 6, 'longitude': 12 };
        latlong['CN'] = { 'latitude': 35, 'longitude': 105 };
        latlong['CO'] = { 'latitude': 4, 'longitude': -72 };
        latlong['CR'] = { 'latitude': 10, 'longitude': -84 };
        latlong['CU'] = { 'latitude': 21.5, 'longitude': -80 };
        latlong['CV'] = { 'latitude': 16, 'longitude': -24 };
        latlong['CX'] = { 'latitude': -10.5, 'longitude': 105.6667 };
        latlong['CY'] = { 'latitude': 35, 'longitude': 33 };
        latlong['CZ'] = { 'latitude': 49.75, 'longitude': 15.5 };
        latlong['DE'] = { 'latitude': 51, 'longitude': 9 };
        latlong['DJ'] = { 'latitude': 11.5, 'longitude': 43 };
        latlong['DK'] = { 'latitude': 56, 'longitude': 10 };
        latlong['DM'] = { 'latitude': 15.4167, 'longitude': -61.3333 };
        latlong['DO'] = { 'latitude': 19, 'longitude': -70.6667 };
        latlong['DZ'] = { 'latitude': 28, 'longitude': 3 };
        latlong['EC'] = { 'latitude': -2, 'longitude': -77.5 };
        latlong['EE'] = { 'latitude': 59, 'longitude': 26 };
        latlong['EG'] = { 'latitude': 27, 'longitude': 30 };
        latlong['EH'] = { 'latitude': 24.5, 'longitude': -13 };
        latlong['ER'] = { 'latitude': 15, 'longitude': 39 };
        latlong['ES'] = { 'latitude': 40, 'longitude': -4 };
        latlong['ET'] = { 'latitude': 8, 'longitude': 38 };
        latlong['EU'] = { 'latitude': 47, 'longitude': 8 };
        latlong['FI'] = { 'latitude': 62, 'longitude': 26 };
        latlong['FJ'] = { 'latitude': -18, 'longitude': 175 };
        latlong['FK'] = { 'latitude': -51.75, 'longitude': -59 };
        latlong['FM'] = { 'latitude': 6.9167, 'longitude': 158.25 };
        latlong['FO'] = { 'latitude': 62, 'longitude': -7 };
        latlong['FR'] = { 'latitude': 46, 'longitude': 2 };
        latlong['GA'] = { 'latitude': -1, 'longitude': 11.75 };
        latlong['GB'] = { 'latitude': 54, 'longitude': -2 };
        latlong['GD'] = { 'latitude': 12.1167, 'longitude': -61.6667 };
        latlong['GE'] = { 'latitude': 42, 'longitude': 43.5 };
        latlong['GF'] = { 'latitude': 4, 'longitude': -53 };
        latlong['GH'] = { 'latitude': 8, 'longitude': -2 };
        latlong['GI'] = { 'latitude': 36.1833, 'longitude': -5.3667 };
        latlong['GL'] = { 'latitude': 72, 'longitude': -40 };
        latlong['GM'] = { 'latitude': 13.4667, 'longitude': -16.5667 };
        latlong['GN'] = { 'latitude': 11, 'longitude': -10 };
        latlong['GP'] = { 'latitude': 16.25, 'longitude': -61.5833 };
        latlong['GQ'] = { 'latitude': 2, 'longitude': 10 };
        latlong['GR'] = { 'latitude': 39, 'longitude': 22 };
        latlong['GS'] = { 'latitude': -54.5, 'longitude': -37 };
        latlong['GT'] = { 'latitude': 15.5, 'longitude': -90.25 };
        latlong['GU'] = { 'latitude': 13.4667, 'longitude': 144.7833 };
        latlong['GW'] = { 'latitude': 12, 'longitude': -15 };
        latlong['GY'] = { 'latitude': 5, 'longitude': -59 };
        latlong['HK'] = { 'latitude': 22.25, 'longitude': 114.1667 };
        latlong['HM'] = { 'latitude': -53.1, 'longitude': 72.5167 };
        latlong['HN'] = { 'latitude': 15, 'longitude': -86.5 };
        latlong['HR'] = { 'latitude': 45.1667, 'longitude': 15.5 };
        latlong['HT'] = { 'latitude': 19, 'longitude': -72.4167 };
        latlong['HU'] = { 'latitude': 47, 'longitude': 20 };
        latlong['ID'] = { 'latitude': -5, 'longitude': 120 };
        latlong['IE'] = { 'latitude': 53, 'longitude': -8 };
        latlong['IL'] = { 'latitude': 31.5, 'longitude': 34.75 };
        latlong['IN'] = { 'latitude': 20, 'longitude': 77 };
        latlong['IO'] = { 'latitude': -6, 'longitude': 71.5 };
        latlong['IQ'] = { 'latitude': 33, 'longitude': 44 };
        latlong['IR'] = { 'latitude': 32, 'longitude': 53 };
        latlong['IS'] = { 'latitude': 65, 'longitude': -18 };
        latlong['IT'] = { 'latitude': 42.8333, 'longitude': 12.8333 };
        latlong['JM'] = { 'latitude': 18.25, 'longitude': -77.5 };
        latlong['JO'] = { 'latitude': 31, 'longitude': 36 };
        latlong['JP'] = { 'latitude': 36, 'longitude': 138 };
        latlong['KE'] = { 'latitude': 1, 'longitude': 38 };
        latlong['KG'] = { 'latitude': 41, 'longitude': 75 };
        latlong['KH'] = { 'latitude': 13, 'longitude': 105 };
        latlong['KI'] = { 'latitude': 1.4167, 'longitude': 173 };
        latlong['KM'] = { 'latitude': -12.1667, 'longitude': 44.25 };
        latlong['KN'] = { 'latitude': 17.3333, 'longitude': -62.75 };
        latlong['KP'] = { 'latitude': 40, 'longitude': 127 };
        latlong['KR'] = { 'latitude': 37, 'longitude': 127.5 };
        latlong['KW'] = { 'latitude': 29.3375, 'longitude': 47.6581 };
        latlong['KY'] = { 'latitude': 19.5, 'longitude': -80.5 };
        latlong['KZ'] = { 'latitude': 48, 'longitude': 68 };
        latlong['LA'] = { 'latitude': 18, 'longitude': 105 };
        latlong['LB'] = { 'latitude': 33.8333, 'longitude': 35.8333 };
        latlong['LC'] = { 'latitude': 13.8833, 'longitude': -61.1333 };
        latlong['LI'] = { 'latitude': 47.1667, 'longitude': 9.5333 };
        latlong['LK'] = { 'latitude': 7, 'longitude': 81 };
        latlong['LR'] = { 'latitude': 6.5, 'longitude': -9.5 };
        latlong['LS'] = { 'latitude': -29.5, 'longitude': 28.5 };
        latlong['LT'] = { 'latitude': 55, 'longitude': 24 };
        latlong['LU'] = { 'latitude': 49.75, 'longitude': 6 };
        latlong['LV'] = { 'latitude': 57, 'longitude': 25 };
        latlong['LY'] = { 'latitude': 25, 'longitude': 17 };
        latlong['MA'] = { 'latitude': 32, 'longitude': -5 };
        latlong['MC'] = { 'latitude': 43.7333, 'longitude': 7.4 };
        latlong['MD'] = { 'latitude': 47, 'longitude': 29 };
        latlong['ME'] = { 'latitude': 42.5, 'longitude': 19.4 };
        latlong['MG'] = { 'latitude': -20, 'longitude': 47 };
        latlong['MH'] = { 'latitude': 9, 'longitude': 168 };
        latlong['MK'] = { 'latitude': 41.8333, 'longitude': 22 };
        latlong['ML'] = { 'latitude': 17, 'longitude': -4 };
        latlong['MM'] = { 'latitude': 22, 'longitude': 98 };
        latlong['MN'] = { 'latitude': 46, 'longitude': 105 };
        latlong['MO'] = { 'latitude': 22.1667, 'longitude': 113.55 };
        latlong['MP'] = { 'latitude': 15.2, 'longitude': 145.75 };
        latlong['MQ'] = { 'latitude': 14.6667, 'longitude': -61 };
        latlong['MR'] = { 'latitude': 20, 'longitude': -12 };
        latlong['MS'] = { 'latitude': 16.75, 'longitude': -62.2 };
        latlong['MT'] = { 'latitude': 35.8333, 'longitude': 14.5833 };
        latlong['MU'] = { 'latitude': -20.2833, 'longitude': 57.55 };
        latlong['MV'] = { 'latitude': 3.25, 'longitude': 73 };
        latlong['MW'] = { 'latitude': -13.5, 'longitude': 34 };
        latlong['MX'] = { 'latitude': 23, 'longitude': -102 };
        latlong['MY'] = { 'latitude': 2.5, 'longitude': 112.5 };
        latlong['MZ'] = { 'latitude': -18.25, 'longitude': 35 };
        latlong['NA'] = { 'latitude': -22, 'longitude': 17 };
        latlong['NC'] = { 'latitude': -21.5, 'longitude': 165.5 };
        latlong['NE'] = { 'latitude': 16, 'longitude': 8 };
        latlong['NF'] = { 'latitude': -29.0333, 'longitude': 167.95 };
        latlong['NG'] = { 'latitude': 10, 'longitude': 8 };
        latlong['NI'] = { 'latitude': 13, 'longitude': -85 };
        latlong['NL'] = { 'latitude': 52.5, 'longitude': 5.75 };
        latlong['NO'] = { 'latitude': 62, 'longitude': 10 };
        latlong['NP'] = { 'latitude': 28, 'longitude': 84 };
        latlong['NR'] = { 'latitude': -0.5333, 'longitude': 166.9167 };
        latlong['NU'] = { 'latitude': -19.0333, 'longitude': -169.8667 };
        latlong['NZ'] = { 'latitude': -41, 'longitude': 174 };
        latlong['OM'] = { 'latitude': 21, 'longitude': 57 };
        latlong['PA'] = { 'latitude': 9, 'longitude': -80 };
        latlong['PE'] = { 'latitude': -10, 'longitude': -76 };
        latlong['PF'] = { 'latitude': -15, 'longitude': -140 };
        latlong['PG'] = { 'latitude': -6, 'longitude': 147 };
        latlong['PH'] = { 'latitude': 13, 'longitude': 122 };
        latlong['PK'] = { 'latitude': 30, 'longitude': 70 };
        latlong['PL'] = { 'latitude': 52, 'longitude': 20 };
        latlong['PM'] = { 'latitude': 46.8333, 'longitude': -56.3333 };
        latlong['PR'] = { 'latitude': 18.25, 'longitude': -66.5 };
        latlong['PS'] = { 'latitude': 32, 'longitude': 35.25 };
        latlong['PT'] = { 'latitude': 39.5, 'longitude': -8 };
        latlong['PW'] = { 'latitude': 7.5, 'longitude': 134.5 };
        latlong['PY'] = { 'latitude': -23, 'longitude': -58 };
        latlong['QA'] = { 'latitude': 25.5, 'longitude': 51.25 };
        latlong['RE'] = { 'latitude': -21.1, 'longitude': 55.6 };
        latlong['RO'] = { 'latitude': 46, 'longitude': 25 };
        latlong['RS'] = { 'latitude': 44, 'longitude': 21 };
        latlong['RU'] = { 'latitude': 60, 'longitude': 100 };
        latlong['RW'] = { 'latitude': -2, 'longitude': 30 };
        latlong['SA'] = { 'latitude': 25, 'longitude': 45 };
        latlong['SB'] = { 'latitude': -8, 'longitude': 159 };
        latlong['SC'] = { 'latitude': -4.5833, 'longitude': 55.6667 };
        latlong['SD'] = { 'latitude': 15, 'longitude': 30 };
        latlong['SE'] = { 'latitude': 62, 'longitude': 15 };
        latlong['SG'] = { 'latitude': 1.3667, 'longitude': 103.8 };
        latlong['SH'] = { 'latitude': -15.9333, 'longitude': -5.7 };
        latlong['SI'] = { 'latitude': 46, 'longitude': 15 };
        latlong['SJ'] = { 'latitude': 78, 'longitude': 20 };
        latlong['SK'] = { 'latitude': 48.6667, 'longitude': 19.5 };
        latlong['SL'] = { 'latitude': 8.5, 'longitude': -11.5 };
        latlong['SM'] = { 'latitude': 43.7667, 'longitude': 12.4167 };
        latlong['SN'] = { 'latitude': 14, 'longitude': -14 };
        latlong['SO'] = { 'latitude': 10, 'longitude': 49 };
        latlong['SR'] = { 'latitude': 4, 'longitude': -56 };
        latlong['ST'] = { 'latitude': 1, 'longitude': 7 };
        latlong['SV'] = { 'latitude': 13.8333, 'longitude': -88.9167 };
        latlong['SY'] = { 'latitude': 35, 'longitude': 38 };
        latlong['SZ'] = { 'latitude': -26.5, 'longitude': 31.5 };
        latlong['TC'] = { 'latitude': 21.75, 'longitude': -71.5833 };
        latlong['TD'] = { 'latitude': 15, 'longitude': 19 };
        latlong['TF'] = { 'latitude': -43, 'longitude': 67 };
        latlong['TG'] = { 'latitude': 8, 'longitude': 1.1667 };
        latlong['TH'] = { 'latitude': 15, 'longitude': 100 };
        latlong['TJ'] = { 'latitude': 39, 'longitude': 71 };
        latlong['TK'] = { 'latitude': -9, 'longitude': -172 };
        latlong['TM'] = { 'latitude': 40, 'longitude': 60 };
        latlong['TN'] = { 'latitude': 34, 'longitude': 9 };
        latlong['TO'] = { 'latitude': -20, 'longitude': -175 };
        latlong['TR'] = { 'latitude': 39, 'longitude': 35 };
        latlong['TT'] = { 'latitude': 11, 'longitude': -61 };
        latlong['TV'] = { 'latitude': -8, 'longitude': 178 };
        latlong['TW'] = { 'latitude': 23.5, 'longitude': 121 };
        latlong['TZ'] = { 'latitude': -6, 'longitude': 35 };
        latlong['UA'] = { 'latitude': 49, 'longitude': 32 };
        latlong['UG'] = { 'latitude': 1, 'longitude': 32 };
        latlong['UM'] = { 'latitude': 19.2833, 'longitude': 166.6 };
        latlong['US'] = { 'latitude': 38, 'longitude': -97 };
        latlong['UY'] = { 'latitude': -33, 'longitude': -56 };
        latlong['UZ'] = { 'latitude': 41, 'longitude': 64 };
        latlong['VA'] = { 'latitude': 41.9, 'longitude': 12.45 };
        latlong['VC'] = { 'latitude': 13.25, 'longitude': -61.2 };
        latlong['VE'] = { 'latitude': 8, 'longitude': -66 };
        latlong['VG'] = { 'latitude': 18.5, 'longitude': -64.5 };
        latlong['VI'] = { 'latitude': 18.3333, 'longitude': -64.8333 };
        latlong['VN'] = { 'latitude': 16, 'longitude': 106 };
        latlong['VU'] = { 'latitude': -16, 'longitude': 167 };
        latlong['WF'] = { 'latitude': -13.3, 'longitude': -176.2 };
        latlong['WS'] = { 'latitude': -13.5833, 'longitude': -172.3333 };
        latlong['YE'] = { 'latitude': 15, 'longitude': 48 };
        latlong['YT'] = { 'latitude': -12.8333, 'longitude': 45.1667 };
        latlong['ZA'] = { 'latitude': -29, 'longitude': 24 };
        latlong['ZM'] = { 'latitude': -15, 'longitude': 30 };
        latlong['ZW'] = { 'latitude': -20, 'longitude': 30 };
        var oldData = mapdata;
        var mapData = [];
        for (var key in oldData) {
            if (oldData[key] === "" || oldData[key] === null || oldData[key] === undefined) {
                delete oldData[key];
            }
            else {
                mapData.push(oldData[key]);
            }
        }
        //console.log(JSON.stringify(mapData));
        var minBulletSize = 3, maxBulletSize = 70, min = Infinity, max = -Infinity;
        // get min and max values
        for (var i = 0; i < mapData.length; i++) {
            var value = mapData[i].value;
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }
        }
        var dataProvider = {
            mapVar: AmCharts.maps.worldLow,
            images: []
        };
        var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
        // create circle for each country
        for (var i = 0; i < mapData.length; i++) {
            var dataItem = mapData[i];
            var value_1 = dataItem.value;
            // calculate size of a bubble
            var square = (value_1 - min) / (max - min) * (maxSquare - minSquare) + minSquare;
            if (square < minSquare) {
                square = minSquare;
            }
            var size = Math.sqrt(square / (Math.PI * 2));
            var id = dataItem.code;
            dataProvider.images.push({
                type: 'circle',
                width: size,
                height: size,
                color: dataItem.color,
                longitude: latlong[id].longitude,
                latitude: latlong[id].latitude,
                title: dataItem.name,
                value: value_1
            });
        }
        return {
            type: 'map',
            theme: 'blur',
            titles: [
                { text: 'Reach around the world', size: 14 },
                { text: 'source: Twitter', size: 11 }
            ],
            dataProvider: dataProvider,
            areasSettings: {
                unlistedAreasColor: '#000000',
                unlistedAreasAlpha: 0.1
            },
            imagesSettings: {
                balloonText: '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>'
            },
            export: {
                enabled: true
            },
            pathToImages: theme_1.layoutPaths.images.amMap
        };
    };
    __decorate([
        core_1.ViewChild('baAmChart'), 
        __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
    ], BrandLeague.prototype, "_selector", void 0);
    BrandLeague = __decorate([
        core_1.Component({
            selector: 'brand_league',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(653), __webpack_require__(1405)],
            template: __webpack_require__(1423),
            providers: [baAmChartTheme_service_1.BaAmChartThemeService],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof BrandLeague_service_1.BrandLeagueService !== 'undefined' && BrandLeague_service_1.BrandLeagueService) === 'function' && _b) || Object, (typeof (_c = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _c) || Object, (typeof (_d = typeof httpservice_1.HttpServices !== 'undefined' && httpservice_1.HttpServices) === 'function' && _d) || Object, (typeof (_e = typeof ng2_daterangepicker_1.DaterangepickerConfig !== 'undefined' && ng2_daterangepicker_1.DaterangepickerConfig) === 'function' && _e) || Object, (typeof (_f = typeof baAmChartTheme_service_1.BaAmChartThemeService !== 'undefined' && baAmChartTheme_service_1.BaAmChartThemeService) === 'function' && _f) || Object])
    ], BrandLeague);
    return BrandLeague;
    var _a, _b, _c, _d, _e, _f;
}());
exports.BrandLeague = BrandLeague;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },

/***/ 1337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__(0);
var httpservice_1 = __webpack_require__(650);
var theme_1 = __webpack_require__(82);
var ng2_daterangepicker_1 = __webpack_require__(1329);
var moment = __webpack_require__(2);
var services_1 = __webpack_require__(210);
__webpack_require__(651);
var baAmChartTheme_service_1 = __webpack_require__(652);
var ChartistJs = (function () {
    function ChartistJs(_baConfig, _httpService, daterangepickerOptions, _baAmChartThemeService) {
        this._baConfig = _baConfig;
        this._httpService = _httpService;
        this.daterangepickerOptions = daterangepickerOptions;
        this._baAmChartThemeService = _baAmChartThemeService;
        this.topAssetLegend = true;
        this.topAssetWiseLegend = true;
        this.topLogoLegend = false;
        this.asset_data = "";
        this.logo_data = "";
        this.logo_ele = "";
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartColors = [];
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.allLineChartData = [];
        this.allLineChartLabels = [];
        this.topAssetOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                    }
                }
            }
        };
        this.lineChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            layout: {
                padding: 75
            },
            title: {
                display: true,
                padding: 15,
                text: "Frames Counts Vs Time ",
                fontSize: 25,
                fontColor: "#36a2eb"
            },
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Frames Count',
                            fontSize: 18,
                        },
                        ticks: {
                            fontSize: 13,
                            showLabelBackdrop: true,
                            fontFamily: "Verdana",
                            //fontColor: 'red'
                            backdropPaddingY: 25,
                            backdropPaddingX: 59
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Time',
                            fontSize: 18,
                        },
                        ticks: {
                            fontSize: 13,
                            fontFamily: " Helvetica Neue"
                        }
                    }]
            },
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        this.topAssetWiseOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        //var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + ' (' + tooltipData + '%)';
                    }
                }
            }
        };
        this.topLogoOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            layout: {
                padding: 55
            },
            title: {
                display: true,
                padding: 15,
                text: "Frames Counts Vs Brands Detected",
                fontSize: 25,
                fontColor: "#36a2eb"
            },
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Frames Count',
                            fontSize: 18,
                        },
                        ticks: {
                            fontSize: 13,
                            showLabelBackdrop: true,
                            fontFamily: "Verdana",
                            //fontColor: 'red'
                            backdropPaddingY: 25,
                            backdropPaddingX: 59
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Logos',
                            fontSize: 18,
                        },
                        ticks: {
                            fontSize: 13,
                            fontFamily: " Helvetica Neue"
                        }
                    }]
            },
            legend: {
                position: 'bottom'
            }
        };
        this.articleChartOptions = {
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        display: false
                    }]
            },
            responsive: true
        };
        this._loadChartsLib();
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            minDate: '2016-11-11',
            maxDate: '2016-11-30',
            alwaysShowCalendars: false,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        };
    }
    ChartistJs.prototype._loadChartsLib = function () {
        services_1.BaThemePreloader.registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    //   private timeFormatChange(){
    //      var sec_num1 = parseInt(asecs, 10); // don't forget the second param
    //        var hours1   = Math.floor(sec_num1 / 3600);
    //        var minutes1 = Math.floor((sec_num1 - (hours1 * 3600)) / 60);
    //        var seconds1 = sec_num1 - (hours1 * 3600) - (minutes1 * 60);
    //        if (hours1   < 10) { var hours2   = "0"+hours1;}
    //        if (minutes1 < 10) {var minutes2 = "0"+minutes1;}
    //        if (seconds1 < 10) {var seconds2 = "0"+seconds1;}
    //  }
    ChartistJs.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
        var self = this;
        self.words = [{ text: 'Coca-Cola', weight: 1466 }, { text: 'Coca', weight: 1080 }, { text: 'Cola', weight: 1024 }, { text: 'Christmas', weight: 647 }, { text: 'advert', weight: 582 }, { text: 'Coke', weight: 417 }, { text: 'cola', weight: 372 }, { text: 'Zero', weight: 323 }, { text: 'way', weight: 322 }, { text: 'coca', weight: 322 }, { text: 'Diet', weight: 319 }, { text: '#MasterTheChoiceIMAXSweepstakes', weight: 313 }, { text: 'Rebellion', weight: 313 }, { text: 'Empire', weight: 312 }, { text: 'Rogue', weight: 303 }, { text: 'Either', weight: 302 }, { text: '#HolidaysAreComing', weight: 232 }];
        jQuery("#col1").jQCloud(self.words, {
            autoResize: true
        });
        self.lineChartData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', fill: false }];
        self.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        // self.gaugeChartOptions ={chartType: 'Gauge',
        //     dataTable: [
        //       ['Label', 'Length'],
        //       ['Value', 2.10]
        //     ],
        //     options: {
        //       animation: {easing: 'out'},
        //       width: 250, height: 250,
        //       greenFrom: 1, greenTo: 4,
        //       minorTicks: 5,
        //       min: 0, max: 5,
        //       majorTicks: ['0', '1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'],
        //       greenColor: '#d0e9c6'
        // }
        // };
        self.topAssetData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Asset Exposure' }];
        self.topAssetChartType = 'pie';
        self.topAssetLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topAssetColor = [{
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,10,220,1)', 'rgba(220,0,10,1)', 'rgba(220,0,0,1)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "#421006",
                hoverBorderColor: "#421006"
            }];
        self.topAssetWiseData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Asset Exposure' }];
        self.topAssetWiseChartType = 'doughnut';
        self.topAssetWiseLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topAssetWiseColor = [{
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 2)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0,10,220,1)', 'rgba(220,0,10,1)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "#421006",
                hoverBorderColor: "#421006"
            }];
        self.topLogoType = 'bar';
        self.topLogoData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Logo`s' }];
        self.topLogoLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.brands_exposure = "00:00:00";
        var match_list = [{ name: 'SYS Vs WBD', match: 'SYS vs WBD' }];
        self.dropDownMatch = match_list;
        self.selected_match = self.dropDownMatch[0].match;
        var league_list = [{ name: 'AFL', league: 'AFL' }, { name: 'PKL', league: 'PKL' }];
        self.dropDownLeague = league_list;
        self.selected_league = self.dropDownLeague[0].league;
        var interval_list = [{ name: '2 secs', value: '2s' }, { name: '30 secs', value: '30s' }, { name: '2 mins', value: '2m' }, { name: '5 mins', value: '5m' }, { name: '10 mins', value: '10m' }];
        self.dropDownInterval = interval_list;
        self.selected_interval = self.dropDownInterval[3].value;
        self.type = "afl_output_2016";
        self.requestBrandExposure({ match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
    };
    ChartistJs.prototype.requestBrandExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "brand_exposure")
            .subscribe(function (data2) {
            self.getExposure(data2, self);
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.OnChangeChannel = function () {
        var self = this;
        if (self.selected_league === 'AFL') {
            var match_list = [{ name: 'SYS Vs WBD', match: 'SYS vs WBD' }];
            self.dropDownMatch = match_list;
            self.type = "afl_output_2016";
            self.selected_match = self.dropDownMatch[0].match;
        }
        if (self.selected_league === 'AFL_1') {
            var match_list = [{ name: 'SYS vs WBD_1', match: 'SYS vs WBD_1' }];
            self.dropDownMatch = match_list;
            self.type = "afl_output_2016_1";
            self.selected_match = self.dropDownMatch[0].match;
        }
        if (self.selected_league === 'PKL') {
            var match_list = [{ name: 'PP vs JPP', match: 'PP vs JPP' }];
            self.dropDownMatch = match_list;
            self.type = "pkl_output_2016";
            self.selected_match = self.dropDownMatch[0].match;
        }
        self.requestBrandExposure({ match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
    };
    ChartistJs.prototype.OnChangeInterval = function () {
        var self = this;
        var selected = self.selected_interval;
        self.makeRequest(self);
        //console.log('data',self.selected_interval);
        //self.requestBrandExposure({match:self.selected_match,type:self.type,interval:self.selected_interval},self);
    };
    ChartistJs.prototype.topTenLogo = function () {
        var self = this;
        self.topLogoData = [{ data: self.getTopTenChartValue(self.allData), label: 'Top Logos' }];
        self.topLogoLabels = self.getTopTenChartLabel(self.allLogoLabels);
    };
    ChartistJs.prototype.topLastTenLogo = function () {
        var self = this;
        self.topLogoData = [{ data: self.getLastTenChartValue(self.allData), label: 'Top Logos' }];
        self.topLogoLabels = self.getLastTenChartLabel(self.allLogoLabels);
    };
    ChartistJs.prototype.topLogos = function () {
        var self = this;
        self.topLogoData = [{ data: self.allData, label: 'Top Logos' }];
        self.topLogoLabels = self.allLogoLabels;
    };
    ChartistJs.prototype.requestAssetExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "asset_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.requestElementExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "element_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.requestLogoExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "logo_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.requestAssetAndLogoExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "asset_logo_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.requestLogoAndElementExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "logo_element_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.requestAssetAndElementExposure = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "asset_element_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.requestAssetAndLogoAndElement = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "asset_logo__elements_exposure")
            .subscribe(function (data2) {
            self.processMaplytiksData(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs.prototype.firstHalfInterval = function () {
        var self = this;
        var chartData = self.getFirstHalfTimeValue(self.allLineChartData);
        var chartLabels = self.getFirstHalfTimeLabel(self.allLineChartLabels);
        self.lineChartData = [{ data: chartData, label: 'Time Interval', fill: false, lineTension: 0.1, backgroundColor: "rgba(75,192,192,0.4)", borderColor: "rgba(75,192,192,1)", borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0.0, borderJoinStyle: 'miter', pointBorderColor: "rgba(75,192,192,1)", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "rgba(75,192,192,1)", pointHoverBorderColor: "rgba(220,220,220,1)", pointHoverBorderWidth: 2, pointRadius: 1, pointHitRadius: 10 }];
        self.lineChartLabels = chartLabels;
    };
    ChartistJs.prototype.fullInterval = function () {
        var self = this;
        self.lineChartData = [{ data: self.allLineChartData, label: 'Time Interval', fill: false, lineTension: 0.1, backgroundColor: "rgba(75,192,192,0.4)", borderColor: "rgba(75,192,192,1)", borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0.0, borderJoinStyle: 'miter', pointBorderColor: "rgba(75,192,192,1)", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "rgba(75,192,192,1)", pointHoverBorderColor: "rgba(220,220,220,1)", pointHoverBorderWidth: 2, pointRadius: 1, pointHitRadius: 10 }];
        self.lineChartLabels = self.allLineChartLabels;
    };
    ChartistJs.prototype.secondHalfInterval = function () {
        var self = this;
        var chartData = self.getSecondHalfTimeValue(self.allLineChartData);
        var chartLabels = self.getSecondHalfTimeLabel(self.allLineChartLabels);
        self.lineChartData = [{ data: chartData, label: 'Time Interval', fill: false, lineTension: 0.1, backgroundColor: "rgba(75,192,192,0.4)", borderColor: "rgba(75,192,192,1)", borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0.0, borderJoinStyle: 'miter', pointBorderColor: "rgba(75,192,192,1)", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "rgba(75,192,192,1)", pointHoverBorderColor: "rgba(220,220,220,1)", pointHoverBorderWidth: 2, pointRadius: 1, pointHitRadius: 10 }];
        self.lineChartLabels = chartLabels;
    };
    ChartistJs.prototype.getExposure = function (data, self) {
        self.brands_exposure = data.brands_exposure;
        self.totalExposureTime = data.tot_brand_exposure;
        self.totalFrameCount = data.frameCount;
        self.topAssetWiseData = [{ data: self.getDiffAssetChartValue(data.asset, data.frameCount), label: 'Top Types' }];
        self.topAssetWiseLabels = self.getChartLabel(data.asset);
    };
    ChartistJs.prototype.processMaplytiksData = function (data, self) {
        self.brand_exposure = data.brand_exposure;
        self.topAssetData = [{ data: self.getChartValue(data.asset), label: 'Top Types' }];
        self.topAssetLabels = self.getChartLabel(data.asset);
        var data_array = [];
        var logoData = data.logoElements;
        logoData = JSON.parse(JSON.stringify(logoData).split('"key":').join('"text":'));
        logoData = JSON.parse(JSON.stringify(logoData).split('"doc_count":').join('"weight":'));
        logoData.forEach(function (element) {
            var objWord = {
                text: element.text,
                weight: element.weight,
                handlers: {
                    click: function () {
                        //console.log("it worked for" + element.text); 
                        self.logo_ele = element.text;
                        self.makeRequest(self);
                    }
                }
            };
            data_array.push(objWord);
        });
        jQuery("#col1").jQCloud('update', data_array, {
            autoResize: true
        });
        self.allData = self.getChartValue(data.logoNames);
        self.allLogoLabels = self.getChartLabel(data.logoNames);
        self.topLogoData = [{ data: self.getTopTenChartValue(self.allData), label: 'Top Logos' }];
        self.topLogoLabels = self.getTopTenChartLabel(self.allLogoLabels);
        self.allLineChartData = self.getTimeValue(data.time);
        self.allLineChartLabels = self.getTimeLabel(data.time);
        self.lineChartData = [{ data: self.allLineChartData, label: 'Time Interval', fill: false, lineTension: 0.1, backgroundColor: "rgba(75,192,192,0.4)", borderColor: "rgba(75,192,192,1)", borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0.0, borderJoinStyle: 'miter', pointBorderColor: "rgba(75,192,192,1)", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "rgba(75,192,192,1)", pointHoverBorderColor: "rgba(220,220,220,1)", pointHoverBorderWidth: 2, pointRadius: 1, pointHitRadius: 10 }];
        self.lineChartLabels = self.allLineChartLabels;
    };
    ChartistJs.prototype.getChartLabel = function (data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            label.push(obj.key);
        }
        return label;
    };
    ChartistJs.prototype.getFirstHalfTimeLabel = function (data) {
        var data = data;
        var length = Math.round(data.length / 2);
        var label = [];
        for (var i = 0; i < length; i++) {
            label.push(data[i]);
        }
        return label;
    };
    ChartistJs.prototype.getFirstHalfTimeValue = function (data) {
        var data = data;
        var length = Math.round(data.length / 2);
        var value = [];
        for (var i = 0; i < length; i++) {
            value.push(data[i]);
        }
        return value;
    };
    ChartistJs.prototype.getSecondHalfTimeLabel = function (data) {
        var data = data;
        var length = Math.floor(data.length / 2);
        var label = [];
        for (var i = length; i < data.length; i++) {
            label.push(data[i]);
        }
        return label;
    };
    ChartistJs.prototype.getSecondHalfTimeValue = function (data) {
        var data = data;
        var length = Math.floor(data.length / 2);
        var value = [];
        for (var i = length; i < data.length; i++) {
            value.push(data[i]);
        }
        return value;
    };
    ChartistJs.prototype.getTimeLabel = function (data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var lab = obj.key_as_string;
            var res = lab.substring(11, 19);
            label.push(res);
        }
        return label;
    };
    ChartistJs.prototype.getTimeValue = function (data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            value.push(obj.doc_count);
        }
        return value;
    };
    ChartistJs.prototype.getTopTenChartLabel = function (data) {
        var data = data;
        var count = 0;
        if (data.length <= 10) {
            count = data.length;
        }
        else {
            count = 10;
        }
        var label = [];
        for (var i = 0; i < count; i++) {
            label.push(data[i]);
        }
        return label;
    };
    ChartistJs.prototype.getTopTenChartValue = function (data) {
        var data = data;
        var count = 0;
        if (data.length <= 10) {
            count = data.length;
        }
        else {
            count = 10;
        }
        var label = [];
        for (var i = 0; i < count; i++) {
            label.push(data[i]);
        }
        return label;
    };
    ChartistJs.prototype.getLastTenChartLabel = function (data) {
        var data = data;
        var k = data.length;
        var label = [];
        for (var i = 0; i < 10; i++) {
            k = k - 1;
            label.push(data[k]);
        }
        return label;
    };
    ChartistJs.prototype.getLastTenChartValue = function (data) {
        var data = data;
        var k = data.length;
        var label = [];
        for (var i = 0; i < 10; i++) {
            k = k - 1;
            label.push(data[k]);
        }
        return label;
    };
    ChartistJs.prototype.getChartValue = function (data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            value.push(obj.doc_count);
        }
        return value;
    };
    ChartistJs.prototype.getDiffAssetChartValue = function (data, totalframe) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var diff_val = (obj.doc_count / totalframe) * 100;
            //console.log(diff_val.toFixed(2));
            value.push(diff_val.toFixed(2));
        }
        return value;
    };
    ChartistJs.prototype.makeRequest = function (self) {
        if (self.asset_data !== "" && self.logo_data !== "" && self.logo_ele !== "") {
            self.requestAssetAndLogoAndElement({ "asset": self.asset_data, "logo": self.logo_data, logo_element: self.logo_ele, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
        }
        else if (self.asset_data !== "" && self.logo_data !== "") {
            self.requestAssetAndLogoExposure({ "asset": self.asset_data, "logo": self.logo_data, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.logo_ele === "";
        }
        else if (self.logo_data !== "" && self.logo_ele !== "") {
            self.requestLogoAndElementExposure({ "logo": self.logo_data, "logo_element": self.logo_data, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.asset_data === "";
        }
        else if (self.asset_data !== "" && self.logo_ele !== "") {
            self.requestAssetAndElementExposure({ "asset": self.asset_data, "logo_element": self.logo_ele, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.logo_data === "";
        }
        else if (self.logo_data !== "") {
            self.requestLogoExposure({ "logo": self.logo_data, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.asset_data === "";
            self.logo_ele === "";
        }
        else if (self.logo_ele !== "") {
            self.requestElementExposure({ "logo_element": self.logo_ele, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.asset_data === "";
            self.logo_data === "";
        }
        else if (self.asset_data !== "") {
            self.requestAssetExposure({ "asset": self.asset_data, match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.logo_data === "";
            self.logo_ele === "";
        }
        else {
            self.requestBrandExposure({ match: self.selected_match, type: self.type, interval: self.selected_interval }, self);
            self.asset_data === "";
            self.logo_data === "";
            self.logo_ele === "";
        }
    };
    // events
    ChartistJs.prototype.assetExposureClicked = function (e) {
        var self = this;
        //console.log(self.topAssetLabels[e.active[0]._index]);
        self.asset_data = self.topAssetLabels[e.active[0]._index];
        self.makeRequest(self);
    };
    ChartistJs.prototype.logoExposureClicked = function (e) {
        var self = this;
        self.logo_data = e.active[0]._model.label;
        self.makeRequest(self);
    };
    ChartistJs.prototype.getBackHome = function () {
        var self = this;
        self.asset_data = "";
        self.logo_ele = "";
        self.logo_data = "";
        self.selected_league = self.dropDownLeague[0].league;
        self.requestBrandExposure({ match: "SYS vs WBD", type: "afl_output_2016", interval: "10m" }, self);
        //self.topTenLogo();
    };
    ChartistJs.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    ChartistJs.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    ChartistJs.prototype.randomize = function () {
    };
    ChartistJs.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    __decorate([
        core_1.ViewChild('baAmChart'), 
        __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
    ], ChartistJs.prototype, "_selector", void 0);
    ChartistJs = __decorate([
        core_1.Component({
            selector: 'chartist-js',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(653), __webpack_require__(1406)],
            template: __webpack_require__(1424),
            providers: [baAmChartTheme_service_1.BaAmChartThemeService],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _b) || Object, (typeof (_c = typeof httpservice_1.HttpServices !== 'undefined' && httpservice_1.HttpServices) === 'function' && _c) || Object, (typeof (_d = typeof ng2_daterangepicker_1.DaterangepickerConfig !== 'undefined' && ng2_daterangepicker_1.DaterangepickerConfig) === 'function' && _d) || Object, (typeof (_e = typeof baAmChartTheme_service_1.BaAmChartThemeService !== 'undefined' && baAmChartTheme_service_1.BaAmChartThemeService) === 'function' && _e) || Object])
    ], ChartistJs);
    return ChartistJs;
    var _a, _b, _c, _d, _e;
}());
exports.ChartistJs = ChartistJs;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },

/***/ 1338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__(0);
var httpservice_1 = __webpack_require__(650);
var chartistJs2_service_1 = __webpack_require__(1339);
var theme_1 = __webpack_require__(82);
var ng2_daterangepicker_1 = __webpack_require__(1329);
var moment = __webpack_require__(2);
var services_1 = __webpack_require__(210);
__webpack_require__(651);
var baAmChartTheme_service_1 = __webpack_require__(652);
var ChartistJs2 = (function () {
    function ChartistJs2(_chartistJs2Service, _baConfig, _httpService, daterangepickerOptions, _baAmChartThemeService) {
        this._chartistJs2Service = _chartistJs2Service;
        this._baConfig = _baConfig;
        this._httpService = _httpService;
        this.daterangepickerOptions = daterangepickerOptions;
        this._baAmChartThemeService = _baAmChartThemeService;
        this.dateInputs = [
            {
                start: moment(),
                end: moment().add(5, 'month'),
            }
        ];
        this.userClassLegend = false;
        this.topUserLegend = true;
        this.topMentionLegend = true;
        this.topDomainLegend = true;
        this.topReachLegend = true;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartColors = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartLegend = true;
        this.languageColor = [];
        this.totalarticlesengagement = 0;
        this.totalarticlecount = 0;
        this.totalimpact = 0;
        this.totalreach = 0;
        this.totalengagedusers = 0;
        this.polarAreaLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.articleChartOptions = {
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        display: false
                    }]
            },
            responsive: true
        };
        this._loadChartsLib();
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            minDate: '2016-11-11',
            maxDate: '2016-11-30',
            alwaysShowCalendars: false,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        };
    }
    ChartistJs2.prototype._loadChartsLib = function () {
        services_1.BaThemePreloader.registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    ChartistJs2.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
        var self = this;
        self.words = [{ text: 'Coca-Cola', weight: 1466 },
            { text: 'Coca', weight: 1080 },
            { text: 'Cola', weight: 1024 },
            { text: 'Christmas', weight: 647 },
            { text: 'advert', weight: 582 },
            { text: 'Coke', weight: 417 },
            { text: 'cola', weight: 372 },
            { text: 'Zero', weight: 323 },
            { text: 'way', weight: 322 },
            { text: 'coca', weight: 322 },
            { text: 'Diet', weight: 319 },
            { text: '#MasterTheChoiceIMAXSweepstakes', weight: 313 },
            { text: 'Rebellion', weight: 313 },
            { text: 'Empire', weight: 312 },
            { text: 'Rogue', weight: 303 },
            { text: 'Either', weight: 302 },
            { text: '#HolidaysAreComing', weight: 232 }
        ];
        jQuery("#col1").jQCloud(self.words, {
            autoResize: true
        });
        // jQuery('.autoplay').slick({
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
        //   autoplay: true,
        //   autoplaySpeed: 2000,
        // });
        //console.log(jQuery().jQCloud);
        self.twitterFeeds = [
            {
                url: "https://twitter.com/AMAs/status/800378679536676864",
            },
            {
                url: "https://twitter.com/AMAs/status/800458706823561216",
            },
            {
                url: "https://twitter.com/AMAs/status/800466263034109952",
            },
            {
                url: "https://twitter.com/AMAs/status/800443605223501824",
            }
        ];
        self.sentimentLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        self.sentimentData = [300, 500, 100];
        self.userClassLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        self.userClassData = [300, 500, 100];
        self.topUserLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        self.topUserData = [300, 500, 100, 40, 120];
        self.polarAreaChartData = [300, 500, 100, 40, 120];
        self.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        //this.chartData = self.getDataWithParam();
        self.polarAreaChartType = 'polarArea';
        self.url_1 = "https://twitter.com/AMAs/status/800378679536676864";
        self.url_2 = "https://twitter.com/AMAs/status/800458706823561216";
        self.url_3 = "https://twitter.com/AMAs/status/800466263034109952";
        self.url_4 = "https://twitter.com/AMAs/status/800443605223501824";
        self.sentimentChartType = 'doughnut';
        self.sentimentOptions = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                    }
                }
            }
        };
        self.polarOptions = [{ scaleShowLabels: false }];
        self.userClassChartType = 'radar';
        self.topUserChartType = 'pie';
        self.topUserOptions = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                    }
                }
            }
        };
        self.topMentionChartType = 'bar';
        self.topDomainChartType = 'horizontalBar';
        self.topReachChartType = 'bar';
        self.topMentionLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topMentionColor = [{
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#1EF9A1",
                hoverBorderColor: "#7FFD1F"
            }];
        self.topMentionData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Mentions' }];
        self.topDomainLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topDomainData = [{ label: 'Top Domain', data: [65, 59, 80, 81, 56, 55, 40] }];
        self.topDomainColor = [{
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#1EF9A1",
                hoverBorderColor: "#7FFD1F"
            }];
        self.topReachLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.topReachData = [{ label: 'Top Domain', data: [65, 59, 80, 81, 56, 55, 40] }];
        self.topReachColor = [{
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#1EF9A1",
                hoverBorderColor: "#7FFD1F"
            }];
        self.lineChartData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }];
        self.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        self.lineChartType = 'line';
        self.lineChartColors = [
            {
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: '#00acac',
                pointBackgroundColor: '#348fe2',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        self.mapData = [{ "code": "BE", "name": "Belgium", "value": 19, "color": "#e7ba08" }, { "code": "BG", "name": "Bulgaria", "value": 1, "color": "#e7ba08" }, { "code": "BA", "name": "Bosnia and Herzegovina", "value": 2, "color": "#e7ba08" }, { "code": "JP", "name": "Japan", "value": 7, "color": "#0091d8" }, { "code": "JM", "name": "Jamaica", "value": 4, "color": "#00abff" }, { "code": "BW", "name": "Botswana", "value": 1, "color": "#f95372" }, { "code": "BR", "name": "Brazil", "value": 20, "color": "#8bd22f" }, { "code": "RU", "name": "Russia", "value": 4, "color": "#e7ba08" }, { "code": "RS", "name": "Serbia", "value": 3, "color": "#e7ba08" }, { "code": "RO", "name": "Romania", "value": 1, "color": "#e7ba08" }, { "code": "GT", "name": "Guatemala", "value": 1, "color": "#00abff" }, { "code": "GR", "name": "Greece", "value": 1, "color": "#e7ba08" }, { "code": "GB", "name": "United Kingdom", "value": 345, "color": "#e7ba08" }, { "code": "GH", "name": "Ghana", "value": 2, "color": "#f95372" }, { "code": "HR", "name": "Croatia", "value": 1, "color": "#e7ba08" }, { "code": "HT", "name": "Haiti", "value": 1, "color": "#00abff" }, { "code": "HU", "name": "Hungary", "value": 1, "color": "#e7ba08" }, { "code": "HK", "name": "Hong Kong, China", "value": 4, "color": "#0091d8" }, { "code": "PT", "name": "Portugal", "value": 5, "color": "#e7ba08" }, { "code": "PA", "name": "Panama", "value": 2, "color": "#00abff" }, { "code": "UY", "name": "Uruguay", "value": 8, "color": "#8bd22f" }, { "code": "PE", "name": "Peru", "value": 2, "color": "#8bd22f" }, { "code": "PK", "name": "Pakistan", "value": 10, "color": "#0091d8" }, { "code": "PH", "name": "Philippines", "value": 8, "color": "#0091d8" }, { "code": "PL", "name": "Poland", "value": 3, "color": "#e7ba08" }, { "code": "EE", "name": "Estonia", "value": 1, "color": "#e7ba08" }, { "code": "EG", "name": "Egypt", "value": 5, "color": "#f95372" }, { "code": "ZA", "name": "South Africa", "value": 25, "color": "#f95372" }, { "code": "EC", "name": "Ecuador", "value": 20, "color": "#8bd22f" }, { "code": "ZW", "name": "Zimbabwe", "value": 2, "color": "#f95372" }, { "code": "ES", "name": "Spain", "value": 19, "color": "#e7ba08" }, { "code": "MA", "name": "Morocco", "value": 43, "color": "#f95372" }, { "code": "MM", "name": "Myanmar", "value": 1, "color": "#0091d8" }, { "code": "MN", "name": "Mongolia", "value": 1, "color": "#0091d8" }, { "code": "MK", "name": "Macedonia, FYR", "value": 1, "color": "#e7ba08" }, { "code": "MY", "name": "Malaysia", "value": 5, "color": "#0091d8" }, { "code": "MX", "name": "Mexico", "value": 8, "color": "#00abff" }, { "code": "FR", "name": "France", "value": 6, "color": "#e7ba08" }, { "code": "FI", "name": "Finland", "value": 2, "color": "#e7ba08" }, { "code": "NI", "name": "Nicaragua", "value": 1, "color": "#00abff" }, { "code": "NL", "name": "Netherlands", "value": 95, "color": "#e7ba08" }, { "code": "NO", "name": "Norway", "value": 3, "color": "#e7ba08" }, { "code": "NA", "name": "Namibia", "value": 1, "color": "#f95372" }, { "code": "NG", "name": "Nigeria", "value": 21, "color": "#f95372" }, { "code": "NZ", "name": "New Zealand", "value": 9, "color": "#c49e06" }, { "code": "CH", "name": "Switzerland", "value": 3, "color": "#e7ba08" }, { "code": "CO", "name": "Colombia", "value": 4, "color": "#8bd22f" }, { "code": "CN", "name": "China", "value": 66, "color": "#0091d8" }, { "code": "CL", "name": "Chile", "value": 2, "color": "#8bd22f" }, { "code": "CA", "name": "Canada", "value": 55, "color": "#00abff" }, { "code": "CR", "name": "Costa Rica", "value": 1, "color": "#00abff" }, { "code": "KE", "name": "Kenya", "value": 16, "color": "#f95372" }, { "code": "KR", "name": "Korea, Rep.", "value": 1, "color": "#0091d8" }, { "code": "SI", "name": "Slovenia", "value": 2, "color": "#e7ba08" }, { "code": "SO", "name": "Somalia", "value": 1, "color": "#f95372" }, { "code": "KW", "name": "Kuwait", "value": 1, "color": "#0091d8" }, { "code": "SA", "name": "Saudi Arabia", "value": 5, "color": "#0091d8" }, { "code": "SG", "name": "Singapore", "value": 2, "color": "#0091d8" }, { "code": "SE", "name": "Sweden", "value": 2, "color": "#e7ba08" }, { "code": "DO", "name": "Dominican Rep.", "value": 9, "color": "#00abff" }, { "code": "DK", "name": "Denmark", "value": 2, "color": "#e7ba08" }, { "code": "DE", "name": "Germany", "value": 12, "color": "#e7ba08" }, { "code": "US", "name": "United States", "value": 872, "color": "#00abff" }, { "code": "TZ", "name": "Tanzania", "value": 2, "color": "#f95372" }, { "code": "LA", "name": "Laos", "value": 1, "color": "#0091d8" }, { "code": "TR", "name": "Turkey", "value": 2, "color": "#e7ba08" }, { "code": "TN", "name": "Tunisia", "value": 1, "color": "#f95372" }, { "code": "LT", "name": "Lithuania", "value": 1, "color": "#e7ba08" }, { "code": "LU", "name": "Luxembourg", "value": 1, "color": "#e7ba08" }, { "code": "TH", "name": "Thailand", "value": 6, "color": "#0091d8" }, { "code": "AE", "name": "United Arab Emirates", "value": 14, "color": "#0091d8" }, { "code": "VE", "name": "Venezuela", "value": 11, "color": "#8bd22f" }, { "code": "IQ", "name": "Iraq", "value": 3, "color": "#0091d8" }, { "code": "IT", "name": "Italy", "value": 6, "color": "#e7ba08" }, { "code": "VN", "name": "Vietnam", "value": 18, "color": "#0091d8" }, { "code": "AR", "name": "Argentina", "value": 4, "color": "#8bd22f" }, { "code": "AU", "name": "Australia", "value": 22, "color": "#c49e06" }, { "code": "IL", "name": "Israel", "value": 3, "color": "#0091d8" }, { "code": "IN", "name": "India", "value": 38, "color": "#0091d8" }, { "code": "LB", "name": "Lebanon", "value": 2, "color": "#0091d8" }, { "code": "AZ", "name": "Azerbaijan", "value": 1, "color": "#e7ba08" }, { "code": "IE", "name": "Ireland", "value": 42, "color": "#e7ba08" }, { "code": "ID", "name": "Indonesia", "value": 4, "color": "#0091d8" }, { "code": "BD", "name": "Bangladesh", "value": 2, "color": "#0091d8" }];
        self.transformationLocation(self.mapData, self);
        self.languageChartType = 'doughnut';
        self.languageLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        self.languageColor = [{
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)'],
                hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
                hoverBorderColor: "#7FFD1F"
            }];
        self.languageData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Top Mentions' }];
        this._httpService.GetHttp("twit-by-date")
            .subscribe(function (data2) {
            self.selectedDate = data2[1];
            self.transformationDateDropdown(data2, self);
        }, function (error) {
            console.log(error);
        });
        this._httpService.GetHttp("twit-brand")
            .subscribe(function (data2) {
            self.selectedBrand = data2[0];
            self.transformationBrandDropdown(data2, self);
        }, function (error) {
            console.log(error);
        });
        this._httpService.GetHttp("channel")
            .subscribe(function (data2) {
            self.selectedChannel = data2[0];
            self.transformationChannalDropdown(data2, self);
        }, function (error) {
            console.log(error);
        });
        var post_data = {};
        post_data = {
            channel: "twitter",
            brand: "coke",
            date: "2016-11-20"
        };
        this._httpService.PostHttp(JSON.stringify(post_data), "twit-by-social")
            .subscribe(function (data2) {
            self.ProcessTwitt_Data(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs2.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ChartistJs2.prototype.ProcessTwitt_Data = function (data2, self) {
        var ilabel = data2.impact_score_label;
        var rlabel = data2.reach_label;
        self.totalimpact = data2.impact_score;
        self.totalreach = data2.reach;
        self.totalengagedusers = data2.engaged_users;
        self.totalarticlesengagement = data2.articles_engagements;
        self.totalarticlecount = data2.articles_count;
        self.polarAreaChartData = [self.totalarticlecount, self.totalarticlesengagement, self.totalengagedusers, self.totalreach, self.totalimpact];
        self.polarAreaChartLabels = ['Total Articles', 'Articles Engagement', 'Engaged Users', rlabel, ilabel];
        self.topMentionLabels = data2.mentions_chart_label;
        var data_mention = data2.mentions_chart_value;
        self.topMentionData = [{ data: data_mention, label: 'Top Mentions' }];
        self.topDomainLabels = data2.domain_chart_label;
        var data_domain = data2.domain_chart_value;
        self.topDomainData = [{ data: data_domain, label: 'Top Domain' }];
        self.sentimentLabels = data2.sentiment_label,
            self.sentimentData = data2.sentiment_value;
        self.userClassLabels = data2.users_classification_label,
            self.userClassData = data2.users_classification_value;
        self.topUserLabels = data2.top_users_label,
            self.topUserData = data2.top_users_value;
        self.languageLabels = data2.language_label;
        var data_language = data2.language_value;
        self.languageData = [{ data: data_language, label: 'Languages' }];
        //var hastag_value = self.makeHasTagInput(data2.hastags_chart_value);
        //var hastag_label = self.makeHasTagInput(data2.hastags_chart_label);
        //self.lineChartData =  [ {data: hastag_value, label: 'HashTag'}];
        //self.lineChartLabels = hastag_label;
        //self.words = []; 
        self.words = data2.hastag_result;
        //console.log(JSON.stringify(self.words));
        jQuery("#col1").jQCloud('update', self.words, {
            autoResize: true
        });
        if (data2.hasOwnProperty("top_articles")) {
            self.url_1 = "https://twitter.com/AMAs/status/800378679536676864";
            self.url_2 = "https://twitter.com/AMAs/status/800458706823561216";
            self.url_3 = "https://twitter.com/AMAs/status/800466263034109952";
            self.url_4 = "https://twitter.com/AMAs/status/800443605223501824";
            self.mapData = self.getMapLocationData(data2.article_locations, self);
            self.transformationLocation(self.mapData, self);
        }
        ;
    };
    ChartistJs2.prototype.getResponsive = function (padding, offset) {
        return this._chartistJs2Service.getResponsive(padding, offset);
    };
    ChartistJs2.prototype.OnChangeDate = function () {
        var self = this;
        var post_data = {};
        if (self.start_date === self.end_date) {
            console.log('strat Date');
            post_data = { channel: this.selectedChannel, brand: this.selectedBrand, date: self.start_date };
            self.twitBySameDateAPI(post_data, self);
        }
        else {
            console.log('called diff');
            post_data = { channel: this.selectedChannel, brand: this.selectedBrand, start_date: self.start_date, end_date: self.end_date };
            self.twitByDiffDateAPI(post_data, self);
        }
    };
    ChartistJs2.prototype.twitBySameDateAPI = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "twit-by-social")
            .subscribe(function (data2) {
            self.ProcessTwitt_Data(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs2.prototype.twitByDiffDateAPI = function (post_data, self) {
        self._httpService.PostHttp(JSON.stringify(post_data), "twit-bydate-social")
            .subscribe(function (data2) {
            self.ProcessTwitt_Data(data2, self);
        }, function (error) {
            console.log(error);
        });
    };
    ChartistJs2.prototype.selectDate = function (value, dateInput) {
        var self = this;
        dateInput.start = value.start;
        dateInput.end = value.end;
        self.start_date = this.formatDate(dateInput.start);
        self.end_date = this.formatDate(dateInput.end);
        self.OnChangeDate();
    };
    ChartistJs2.prototype.OnChangeBrand = function () {
        var self = this;
        self.OnChangeDate();
    };
    ChartistJs2.prototype.OnChangeChannel = function () {
        var self = this;
        self.OnChangeDate();
    };
    // events
    ChartistJs2.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    ChartistJs2.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    ChartistJs2.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        var clone = JSON.parse(JSON.stringify(this.topMentionData));
        clone[0].data = data;
        this.topMentionData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    ChartistJs2.prototype.getMapLocationData = function (result, self) {
        var mapResult = [];
        for (var key in result) {
            if (key !== "") {
                var data = self.getMapData(key, result[key]);
                mapResult.push(data);
            }
        }
        return mapResult;
    };
    ChartistJs2.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    ChartistJs2.prototype.getMapData = function (key, value) {
        var layoutColors = this._baConfig.get().colors;
        var mapData = [
            { 'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': layoutColors.primaryDark },
            { 'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': layoutColors.warning },
            { 'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': layoutColors.danger },
            { 'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': layoutColors.danger },
            { 'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': layoutColors.success },
            { 'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': layoutColors.warning },
            { 'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': layoutColors.warningDark },
            { 'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': layoutColors.warning },
            { 'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': layoutColors.warning },
            { 'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': layoutColors.primaryDark },
            { 'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': layoutColors.primaryDark },
            { 'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': layoutColors.warning },
            { 'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': layoutColors.warning },
            { 'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': layoutColors.danger },
            { 'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': layoutColors.primaryDark },
            { 'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': layoutColors.success },
            { 'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': layoutColors.warning },
            { 'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': layoutColors.danger },
            { 'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': layoutColors.success },
            { 'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': layoutColors.primaryDark },
            { 'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': layoutColors.warning },
            { 'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': layoutColors.danger },
            { 'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': layoutColors.danger },
            { 'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': layoutColors.primaryDark },
            { 'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': layoutColors.danger },
            { 'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': layoutColors.primary },
            { 'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': layoutColors.danger },
            { 'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': layoutColors.danger },
            { 'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': layoutColors.danger },
            { 'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': layoutColors.success },
            { 'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': layoutColors.primaryDark },
            { 'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': layoutColors.success },
            { 'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': layoutColors.danger },
            { 'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': layoutColors.danger },
            { 'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': layoutColors.danger },
            { 'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': layoutColors.primary },
            { 'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': layoutColors.danger },
            { 'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': layoutColors.warning },
            { 'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': layoutColors.primary },
            { 'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': layoutColors.warning },
            { 'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': layoutColors.warning },
            { 'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': layoutColors.warning },
            { 'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': layoutColors.danger },
            { 'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': layoutColors.primary },
            { 'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': layoutColors.success },
            { 'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': layoutColors.danger },
            { 'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': layoutColors.primary },
            { 'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': layoutColors.danger },
            { 'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': layoutColors.danger },
            { 'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': layoutColors.warning },
            { 'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': layoutColors.danger },
            { 'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': layoutColors.warningDark },
            { 'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': layoutColors.warning },
            { 'code': 'FR', 'name': 'France', 'value': 63125894, 'color': layoutColors.warning },
            { 'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': layoutColors.danger },
            { 'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': layoutColors.danger },
            { 'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': layoutColors.warning },
            { 'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': layoutColors.warning },
            { 'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': layoutColors.danger },
            { 'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': layoutColors.warning },
            { 'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': layoutColors.primary },
            { 'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': layoutColors.danger },
            { 'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': layoutColors.danger },
            { 'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': layoutColors.success },
            { 'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': layoutColors.primary },
            { 'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': layoutColors.primary },
            { 'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': layoutColors.primaryDark },
            { 'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': layoutColors.warning },
            { 'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': layoutColors.warning },
            { 'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': layoutColors.primaryDark },
            { 'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': layoutColors.primaryDark },
            { 'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': layoutColors.primaryDark },
            { 'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': layoutColors.primaryDark },
            { 'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': layoutColors.warning },
            { 'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': layoutColors.primaryDark },
            { 'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': layoutColors.warning },
            { 'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': layoutColors.primary },
            { 'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': layoutColors.primaryDark },
            { 'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': layoutColors.primaryDark },
            { 'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': layoutColors.primaryDark },
            { 'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': layoutColors.danger },
            { 'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': layoutColors.primaryDark },
            { 'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': layoutColors.primaryDark },
            { 'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': layoutColors.primaryDark },
            { 'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': layoutColors.primaryDark },
            { 'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': layoutColors.primaryDark },
            { 'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': layoutColors.warning },
            { 'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': layoutColors.primaryDark },
            { 'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': layoutColors.danger },
            { 'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': layoutColors.danger },
            { 'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': layoutColors.danger },
            { 'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': layoutColors.warning },
            { 'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': layoutColors.warning },
            { 'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': layoutColors.warning },
            { 'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': layoutColors.danger },
            { 'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': layoutColors.danger },
            { 'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': layoutColors.primaryDark },
            { 'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': layoutColors.danger },
            { 'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': layoutColors.danger },
            { 'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': layoutColors.danger },
            { 'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': layoutColors.primary },
            { 'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': layoutColors.warning },
            { 'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': layoutColors.primaryDark },
            { 'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': layoutColors.warning },
            { 'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': layoutColors.danger },
            { 'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': layoutColors.danger },
            { 'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': layoutColors.primaryDark },
            { 'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': layoutColors.danger },
            { 'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': layoutColors.primaryDark },
            { 'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': layoutColors.warning },
            { 'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': layoutColors.warningDark },
            { 'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': layoutColors.primary },
            { 'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': layoutColors.danger },
            { 'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': layoutColors.danger },
            { 'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': layoutColors.warning },
            { 'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': layoutColors.primaryDark },
            { 'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': layoutColors.primaryDark },
            { 'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': layoutColors.primary },
            { 'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': layoutColors.warningDark },
            { 'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': layoutColors.success },
            { 'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': layoutColors.success },
            { 'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': layoutColors.primaryDark },
            { 'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': layoutColors.warning },
            { 'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': layoutColors.warning },
            { 'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': layoutColors.primary },
            { 'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': layoutColors.primaryDark },
            { 'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': layoutColors.warning },
            { 'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': layoutColors.warning },
            { 'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': layoutColors.danger },
            { 'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': layoutColors.primaryDark },
            { 'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': layoutColors.danger },
            { 'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': layoutColors.warning },
            { 'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': layoutColors.danger },
            { 'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': layoutColors.primaryDark },
            { 'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': layoutColors.warning },
            { 'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': layoutColors.warning },
            { 'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': layoutColors.warningDark },
            { 'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': layoutColors.danger },
            { 'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': layoutColors.danger },
            { 'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': layoutColors.warning },
            { 'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': layoutColors.primaryDark },
            { 'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': layoutColors.danger },
            { 'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': layoutColors.success },
            { 'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': layoutColors.danger },
            { 'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': layoutColors.warning },
            { 'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': layoutColors.warning },
            { 'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': layoutColors.primaryDark },
            { 'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': layoutColors.primaryDark },
            { 'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': layoutColors.primaryDark },
            { 'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': layoutColors.danger },
            { 'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': layoutColors.primaryDark },
            { 'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': layoutColors.danger },
            { 'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': layoutColors.primary },
            { 'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': layoutColors.danger },
            { 'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': layoutColors.warning },
            { 'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': layoutColors.primaryDark },
            { 'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': layoutColors.danger },
            { 'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': layoutColors.warning },
            { 'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': layoutColors.primaryDark },
            { 'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': layoutColors.warning },
            { 'code': 'US', 'name': 'United States', 'value': 313085380, 'color': layoutColors.primary },
            { 'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': layoutColors.success },
            { 'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': layoutColors.primaryDark },
            { 'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': layoutColors.success },
            { 'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': layoutColors.primaryDark },
            { 'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': layoutColors.primaryDark },
            { 'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': layoutColors.primaryDark },
            { 'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': layoutColors.danger },
            { 'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': layoutColors.danger }
        ];
        for (var i = 0; i < mapData.length; i++) {
            var obj = mapData[i];
            if (obj.code === key && key != "") {
                var data = {};
                data['code'] = key;
                data['name'] = obj.name;
                data['value'] = value;
                data['color'] = obj.color;
                return data;
            }
        }
    };
    ChartistJs2.prototype.transformationLocation = function (mapdata, self) {
        self.inputdata = mapdata;
        self.chartData = self.getDataWithParam(self.inputdata);
        var chart = AmCharts.makeChart(this._selector.nativeElement, self.chartData);
    };
    ChartistJs2.prototype.transformationHashTag = function (result, self) {
        self.cloudData = result;
    };
    ChartistJs2.prototype.transformationDateDropdown = function (result, self) {
        var sampleObject = [];
        result.forEach(function (element) {
            var sO = {
                name: element,
                date: element
            };
            sampleObject.push(sO);
        });
        self.dropDownDate = sampleObject;
    };
    ChartistJs2.prototype.transformationChannalDropdown = function (result, self) {
        var sampleObject = [];
        var c_name;
        result.forEach(function (element) {
            if (element === 'reddit') {
                c_name = 'Reddit';
            }
            if (element === 'facebook') {
                c_name = 'Facebook';
            }
            if (element === 'tumblr') {
                c_name = 'Tumblr';
            }
            if (element === 'flickr') {
                c_name = 'Flickr';
            }
            if (element === 'news') {
                c_name = 'News';
            }
            if (element === 'all_media_stat') {
                c_name = 'All';
            }
            if (element === 'twitter') {
                c_name = 'Twitter';
            }
            if (element === 'Plus') {
                c_name = 'Plus';
            }
            if (element === 'blogs') {
                c_name = 'Blogs';
            }
            var sO = {
                name: c_name,
                channel: element
            };
            sampleObject.push(sO);
        });
        self.dropDownChannel = sampleObject;
    };
    ChartistJs2.prototype.transformationBrandDropdown = function (result, self) {
        var sampleObject = [];
        result.forEach(function (element) {
            var sO = {
                name: element,
                brand: element
            };
            sampleObject.push(sO);
        });
        self.dropDownBrand = sampleObject;
    };
    // mentionChart
    ChartistJs2.prototype.transformationmentionsChart = function (result, self) {
        self.simpleBarData = result;
        self.simpleBarOptions = {
            fullWidth: true,
            height: '400px',
            horizontalBars: true,
            //chartPadding: 60,
            showLabel: true,
            axisX: {
                showGrid: true,
                showLabel: true,
                offset: 0
            },
            axisY: {
                offset: 110,
            },
        };
    };
    ChartistJs2.prototype.transformationdomainChart = function (result, self) {
        self.domainBarData = result;
        self.domianBarOptions = {
            fullWidth: true,
            height: '400px',
            horizontalBars: true,
            //chartPadding: 60,
            showLabel: true,
            axisX: {
                showGrid: true,
                showLabel: true,
                offset: 0
            },
            axisY: {
                offset: 100,
            },
        };
    };
    ChartistJs2.prototype.transformationsentimentsChart = function (result, self) {
        self.simpleDonutData = result;
        self.simpleDonutOptions = {
            fullWidth: true,
            donut: true,
            height: '300px',
            weight: '300px',
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        };
    };
    ChartistJs2.prototype.transformationuserclassChart = function (result, self) {
        self.labelsPieData = result;
        self.labelsPieOptions = {
            fullWidth: true,
            height: '300px',
            weight: '300px',
            labelDirection: 'explode',
            labelOffset: 80,
            // chartPadding: 50,
            labelInterpolationFnc: function (value) {
                return value;
            }
        };
    };
    ChartistJs2.prototype.transformationttopusersChart = function (result, self) {
        self.simplePieData = result;
        self.simplePieOptions = {
            fullWidth: true,
            height: '300px',
            weight: '300px',
            labelInterpolationFnc: function (value) {
                return Math.round(value / 12 * 100) + '%';
            }
        };
    };
    ChartistJs2.prototype.makeHasTagInput = function (result) {
        var cloud = [];
        for (var i = 0; i < 10; i++) {
            var data_lb = result[i];
            cloud.push(data_lb);
        }
        return cloud;
    };
    ChartistJs2.prototype.makeReachInput = function (result) {
        var cloud = [];
        for (var i = 0; i < 20; i++) {
            var data_lb = result[i];
            cloud.push(data_lb);
        }
        return cloud;
    };
    ChartistJs2.prototype.transformationtotaltweets = function (result, self) {
        self.totalimpact = result;
    };
    ChartistJs2.prototype.transformationtotalreach = function (result, self) {
        self.totalreach = result;
    };
    ChartistJs2.prototype.transformationtotalengagement = function (result, self) {
        self.totalarticlesengagement = result;
    };
    ChartistJs2.prototype.transformationtotalarticles = function (result, self) {
        self.totalarticlecount = result;
    };
    ChartistJs2.prototype.transformationilabel = function (result, self) {
        self.ilabel = result;
    };
    ChartistJs2.prototype.transformationrlabel = function (result, self) {
        self.rlabel = result;
    };
    ChartistJs2.prototype.getDataWithParam = function (mapdata, self) {
        var layoutColors = this._baConfig.get().colors;
        var latlong = {};
        latlong['AD'] = { 'latitude': 42.5, 'longitude': 1.5 };
        latlong['AE'] = { 'latitude': 24, 'longitude': 54 };
        latlong['AF'] = { 'latitude': 33, 'longitude': 65 };
        latlong['AG'] = { 'latitude': 17.05, 'longitude': -61.8 };
        latlong['AI'] = { 'latitude': 18.25, 'longitude': -63.1667 };
        latlong['AL'] = { 'latitude': 41, 'longitude': 20 };
        latlong['AM'] = { 'latitude': 40, 'longitude': 45 };
        latlong['AN'] = { 'latitude': 12.25, 'longitude': -68.75 };
        latlong['AO'] = { 'latitude': -12.5, 'longitude': 18.5 };
        latlong['AP'] = { 'latitude': 35, 'longitude': 105 };
        latlong['AQ'] = { 'latitude': -90, 'longitude': 0 };
        latlong['AR'] = { 'latitude': -34, 'longitude': -64 };
        latlong['AS'] = { 'latitude': -14.3333, 'longitude': -170 };
        latlong['AT'] = { 'latitude': 47.3333, 'longitude': 13.3333 };
        latlong['AU'] = { 'latitude': -27, 'longitude': 133 };
        latlong['AW'] = { 'latitude': 12.5, 'longitude': -69.9667 };
        latlong['AZ'] = { 'latitude': 40.5, 'longitude': 47.5 };
        latlong['BA'] = { 'latitude': 44, 'longitude': 18 };
        latlong['BB'] = { 'latitude': 13.1667, 'longitude': -59.5333 };
        latlong['BD'] = { 'latitude': 24, 'longitude': 90 };
        latlong['BE'] = { 'latitude': 50.8333, 'longitude': 4 };
        latlong['BF'] = { 'latitude': 13, 'longitude': -2 };
        latlong['BG'] = { 'latitude': 43, 'longitude': 25 };
        latlong['BH'] = { 'latitude': 26, 'longitude': 50.55 };
        latlong['BI'] = { 'latitude': -3.5, 'longitude': 30 };
        latlong['BJ'] = { 'latitude': 9.5, 'longitude': 2.25 };
        latlong['BM'] = { 'latitude': 32.3333, 'longitude': -64.75 };
        latlong['BN'] = { 'latitude': 4.5, 'longitude': 114.6667 };
        latlong['BO'] = { 'latitude': -17, 'longitude': -65 };
        latlong['BR'] = { 'latitude': -10, 'longitude': -55 };
        latlong['BS'] = { 'latitude': 24.25, 'longitude': -76 };
        latlong['BT'] = { 'latitude': 27.5, 'longitude': 90.5 };
        latlong['BV'] = { 'latitude': -54.4333, 'longitude': 3.4 };
        latlong['BW'] = { 'latitude': -22, 'longitude': 24 };
        latlong['BY'] = { 'latitude': 53, 'longitude': 28 };
        latlong['BZ'] = { 'latitude': 17.25, 'longitude': -88.75 };
        latlong['CA'] = { 'latitude': 54, 'longitude': -100 };
        latlong['CC'] = { 'latitude': -12.5, 'longitude': 96.8333 };
        latlong['CD'] = { 'latitude': 0, 'longitude': 25 };
        latlong['CF'] = { 'latitude': 7, 'longitude': 21 };
        latlong['CG'] = { 'latitude': -1, 'longitude': 15 };
        latlong['CH'] = { 'latitude': 47, 'longitude': 8 };
        latlong['CI'] = { 'latitude': 8, 'longitude': -5 };
        latlong['CK'] = { 'latitude': -21.2333, 'longitude': -159.7667 };
        latlong['CL'] = { 'latitude': -30, 'longitude': -71 };
        latlong['CM'] = { 'latitude': 6, 'longitude': 12 };
        latlong['CN'] = { 'latitude': 35, 'longitude': 105 };
        latlong['CO'] = { 'latitude': 4, 'longitude': -72 };
        latlong['CR'] = { 'latitude': 10, 'longitude': -84 };
        latlong['CU'] = { 'latitude': 21.5, 'longitude': -80 };
        latlong['CV'] = { 'latitude': 16, 'longitude': -24 };
        latlong['CX'] = { 'latitude': -10.5, 'longitude': 105.6667 };
        latlong['CY'] = { 'latitude': 35, 'longitude': 33 };
        latlong['CZ'] = { 'latitude': 49.75, 'longitude': 15.5 };
        latlong['DE'] = { 'latitude': 51, 'longitude': 9 };
        latlong['DJ'] = { 'latitude': 11.5, 'longitude': 43 };
        latlong['DK'] = { 'latitude': 56, 'longitude': 10 };
        latlong['DM'] = { 'latitude': 15.4167, 'longitude': -61.3333 };
        latlong['DO'] = { 'latitude': 19, 'longitude': -70.6667 };
        latlong['DZ'] = { 'latitude': 28, 'longitude': 3 };
        latlong['EC'] = { 'latitude': -2, 'longitude': -77.5 };
        latlong['EE'] = { 'latitude': 59, 'longitude': 26 };
        latlong['EG'] = { 'latitude': 27, 'longitude': 30 };
        latlong['EH'] = { 'latitude': 24.5, 'longitude': -13 };
        latlong['ER'] = { 'latitude': 15, 'longitude': 39 };
        latlong['ES'] = { 'latitude': 40, 'longitude': -4 };
        latlong['ET'] = { 'latitude': 8, 'longitude': 38 };
        latlong['EU'] = { 'latitude': 47, 'longitude': 8 };
        latlong['FI'] = { 'latitude': 62, 'longitude': 26 };
        latlong['FJ'] = { 'latitude': -18, 'longitude': 175 };
        latlong['FK'] = { 'latitude': -51.75, 'longitude': -59 };
        latlong['FM'] = { 'latitude': 6.9167, 'longitude': 158.25 };
        latlong['FO'] = { 'latitude': 62, 'longitude': -7 };
        latlong['FR'] = { 'latitude': 46, 'longitude': 2 };
        latlong['GA'] = { 'latitude': -1, 'longitude': 11.75 };
        latlong['GB'] = { 'latitude': 54, 'longitude': -2 };
        latlong['GD'] = { 'latitude': 12.1167, 'longitude': -61.6667 };
        latlong['GE'] = { 'latitude': 42, 'longitude': 43.5 };
        latlong['GF'] = { 'latitude': 4, 'longitude': -53 };
        latlong['GH'] = { 'latitude': 8, 'longitude': -2 };
        latlong['GI'] = { 'latitude': 36.1833, 'longitude': -5.3667 };
        latlong['GL'] = { 'latitude': 72, 'longitude': -40 };
        latlong['GM'] = { 'latitude': 13.4667, 'longitude': -16.5667 };
        latlong['GN'] = { 'latitude': 11, 'longitude': -10 };
        latlong['GP'] = { 'latitude': 16.25, 'longitude': -61.5833 };
        latlong['GQ'] = { 'latitude': 2, 'longitude': 10 };
        latlong['GR'] = { 'latitude': 39, 'longitude': 22 };
        latlong['GS'] = { 'latitude': -54.5, 'longitude': -37 };
        latlong['GT'] = { 'latitude': 15.5, 'longitude': -90.25 };
        latlong['GU'] = { 'latitude': 13.4667, 'longitude': 144.7833 };
        latlong['GW'] = { 'latitude': 12, 'longitude': -15 };
        latlong['GY'] = { 'latitude': 5, 'longitude': -59 };
        latlong['HK'] = { 'latitude': 22.25, 'longitude': 114.1667 };
        latlong['HM'] = { 'latitude': -53.1, 'longitude': 72.5167 };
        latlong['HN'] = { 'latitude': 15, 'longitude': -86.5 };
        latlong['HR'] = { 'latitude': 45.1667, 'longitude': 15.5 };
        latlong['HT'] = { 'latitude': 19, 'longitude': -72.4167 };
        latlong['HU'] = { 'latitude': 47, 'longitude': 20 };
        latlong['ID'] = { 'latitude': -5, 'longitude': 120 };
        latlong['IE'] = { 'latitude': 53, 'longitude': -8 };
        latlong['IL'] = { 'latitude': 31.5, 'longitude': 34.75 };
        latlong['IN'] = { 'latitude': 20, 'longitude': 77 };
        latlong['IO'] = { 'latitude': -6, 'longitude': 71.5 };
        latlong['IQ'] = { 'latitude': 33, 'longitude': 44 };
        latlong['IR'] = { 'latitude': 32, 'longitude': 53 };
        latlong['IS'] = { 'latitude': 65, 'longitude': -18 };
        latlong['IT'] = { 'latitude': 42.8333, 'longitude': 12.8333 };
        latlong['JM'] = { 'latitude': 18.25, 'longitude': -77.5 };
        latlong['JO'] = { 'latitude': 31, 'longitude': 36 };
        latlong['JP'] = { 'latitude': 36, 'longitude': 138 };
        latlong['KE'] = { 'latitude': 1, 'longitude': 38 };
        latlong['KG'] = { 'latitude': 41, 'longitude': 75 };
        latlong['KH'] = { 'latitude': 13, 'longitude': 105 };
        latlong['KI'] = { 'latitude': 1.4167, 'longitude': 173 };
        latlong['KM'] = { 'latitude': -12.1667, 'longitude': 44.25 };
        latlong['KN'] = { 'latitude': 17.3333, 'longitude': -62.75 };
        latlong['KP'] = { 'latitude': 40, 'longitude': 127 };
        latlong['KR'] = { 'latitude': 37, 'longitude': 127.5 };
        latlong['KW'] = { 'latitude': 29.3375, 'longitude': 47.6581 };
        latlong['KY'] = { 'latitude': 19.5, 'longitude': -80.5 };
        latlong['KZ'] = { 'latitude': 48, 'longitude': 68 };
        latlong['LA'] = { 'latitude': 18, 'longitude': 105 };
        latlong['LB'] = { 'latitude': 33.8333, 'longitude': 35.8333 };
        latlong['LC'] = { 'latitude': 13.8833, 'longitude': -61.1333 };
        latlong['LI'] = { 'latitude': 47.1667, 'longitude': 9.5333 };
        latlong['LK'] = { 'latitude': 7, 'longitude': 81 };
        latlong['LR'] = { 'latitude': 6.5, 'longitude': -9.5 };
        latlong['LS'] = { 'latitude': -29.5, 'longitude': 28.5 };
        latlong['LT'] = { 'latitude': 55, 'longitude': 24 };
        latlong['LU'] = { 'latitude': 49.75, 'longitude': 6 };
        latlong['LV'] = { 'latitude': 57, 'longitude': 25 };
        latlong['LY'] = { 'latitude': 25, 'longitude': 17 };
        latlong['MA'] = { 'latitude': 32, 'longitude': -5 };
        latlong['MC'] = { 'latitude': 43.7333, 'longitude': 7.4 };
        latlong['MD'] = { 'latitude': 47, 'longitude': 29 };
        latlong['ME'] = { 'latitude': 42.5, 'longitude': 19.4 };
        latlong['MG'] = { 'latitude': -20, 'longitude': 47 };
        latlong['MH'] = { 'latitude': 9, 'longitude': 168 };
        latlong['MK'] = { 'latitude': 41.8333, 'longitude': 22 };
        latlong['ML'] = { 'latitude': 17, 'longitude': -4 };
        latlong['MM'] = { 'latitude': 22, 'longitude': 98 };
        latlong['MN'] = { 'latitude': 46, 'longitude': 105 };
        latlong['MO'] = { 'latitude': 22.1667, 'longitude': 113.55 };
        latlong['MP'] = { 'latitude': 15.2, 'longitude': 145.75 };
        latlong['MQ'] = { 'latitude': 14.6667, 'longitude': -61 };
        latlong['MR'] = { 'latitude': 20, 'longitude': -12 };
        latlong['MS'] = { 'latitude': 16.75, 'longitude': -62.2 };
        latlong['MT'] = { 'latitude': 35.8333, 'longitude': 14.5833 };
        latlong['MU'] = { 'latitude': -20.2833, 'longitude': 57.55 };
        latlong['MV'] = { 'latitude': 3.25, 'longitude': 73 };
        latlong['MW'] = { 'latitude': -13.5, 'longitude': 34 };
        latlong['MX'] = { 'latitude': 23, 'longitude': -102 };
        latlong['MY'] = { 'latitude': 2.5, 'longitude': 112.5 };
        latlong['MZ'] = { 'latitude': -18.25, 'longitude': 35 };
        latlong['NA'] = { 'latitude': -22, 'longitude': 17 };
        latlong['NC'] = { 'latitude': -21.5, 'longitude': 165.5 };
        latlong['NE'] = { 'latitude': 16, 'longitude': 8 };
        latlong['NF'] = { 'latitude': -29.0333, 'longitude': 167.95 };
        latlong['NG'] = { 'latitude': 10, 'longitude': 8 };
        latlong['NI'] = { 'latitude': 13, 'longitude': -85 };
        latlong['NL'] = { 'latitude': 52.5, 'longitude': 5.75 };
        latlong['NO'] = { 'latitude': 62, 'longitude': 10 };
        latlong['NP'] = { 'latitude': 28, 'longitude': 84 };
        latlong['NR'] = { 'latitude': -0.5333, 'longitude': 166.9167 };
        latlong['NU'] = { 'latitude': -19.0333, 'longitude': -169.8667 };
        latlong['NZ'] = { 'latitude': -41, 'longitude': 174 };
        latlong['OM'] = { 'latitude': 21, 'longitude': 57 };
        latlong['PA'] = { 'latitude': 9, 'longitude': -80 };
        latlong['PE'] = { 'latitude': -10, 'longitude': -76 };
        latlong['PF'] = { 'latitude': -15, 'longitude': -140 };
        latlong['PG'] = { 'latitude': -6, 'longitude': 147 };
        latlong['PH'] = { 'latitude': 13, 'longitude': 122 };
        latlong['PK'] = { 'latitude': 30, 'longitude': 70 };
        latlong['PL'] = { 'latitude': 52, 'longitude': 20 };
        latlong['PM'] = { 'latitude': 46.8333, 'longitude': -56.3333 };
        latlong['PR'] = { 'latitude': 18.25, 'longitude': -66.5 };
        latlong['PS'] = { 'latitude': 32, 'longitude': 35.25 };
        latlong['PT'] = { 'latitude': 39.5, 'longitude': -8 };
        latlong['PW'] = { 'latitude': 7.5, 'longitude': 134.5 };
        latlong['PY'] = { 'latitude': -23, 'longitude': -58 };
        latlong['QA'] = { 'latitude': 25.5, 'longitude': 51.25 };
        latlong['RE'] = { 'latitude': -21.1, 'longitude': 55.6 };
        latlong['RO'] = { 'latitude': 46, 'longitude': 25 };
        latlong['RS'] = { 'latitude': 44, 'longitude': 21 };
        latlong['RU'] = { 'latitude': 60, 'longitude': 100 };
        latlong['RW'] = { 'latitude': -2, 'longitude': 30 };
        latlong['SA'] = { 'latitude': 25, 'longitude': 45 };
        latlong['SB'] = { 'latitude': -8, 'longitude': 159 };
        latlong['SC'] = { 'latitude': -4.5833, 'longitude': 55.6667 };
        latlong['SD'] = { 'latitude': 15, 'longitude': 30 };
        latlong['SE'] = { 'latitude': 62, 'longitude': 15 };
        latlong['SG'] = { 'latitude': 1.3667, 'longitude': 103.8 };
        latlong['SH'] = { 'latitude': -15.9333, 'longitude': -5.7 };
        latlong['SI'] = { 'latitude': 46, 'longitude': 15 };
        latlong['SJ'] = { 'latitude': 78, 'longitude': 20 };
        latlong['SK'] = { 'latitude': 48.6667, 'longitude': 19.5 };
        latlong['SL'] = { 'latitude': 8.5, 'longitude': -11.5 };
        latlong['SM'] = { 'latitude': 43.7667, 'longitude': 12.4167 };
        latlong['SN'] = { 'latitude': 14, 'longitude': -14 };
        latlong['SO'] = { 'latitude': 10, 'longitude': 49 };
        latlong['SR'] = { 'latitude': 4, 'longitude': -56 };
        latlong['ST'] = { 'latitude': 1, 'longitude': 7 };
        latlong['SV'] = { 'latitude': 13.8333, 'longitude': -88.9167 };
        latlong['SY'] = { 'latitude': 35, 'longitude': 38 };
        latlong['SZ'] = { 'latitude': -26.5, 'longitude': 31.5 };
        latlong['TC'] = { 'latitude': 21.75, 'longitude': -71.5833 };
        latlong['TD'] = { 'latitude': 15, 'longitude': 19 };
        latlong['TF'] = { 'latitude': -43, 'longitude': 67 };
        latlong['TG'] = { 'latitude': 8, 'longitude': 1.1667 };
        latlong['TH'] = { 'latitude': 15, 'longitude': 100 };
        latlong['TJ'] = { 'latitude': 39, 'longitude': 71 };
        latlong['TK'] = { 'latitude': -9, 'longitude': -172 };
        latlong['TM'] = { 'latitude': 40, 'longitude': 60 };
        latlong['TN'] = { 'latitude': 34, 'longitude': 9 };
        latlong['TO'] = { 'latitude': -20, 'longitude': -175 };
        latlong['TR'] = { 'latitude': 39, 'longitude': 35 };
        latlong['TT'] = { 'latitude': 11, 'longitude': -61 };
        latlong['TV'] = { 'latitude': -8, 'longitude': 178 };
        latlong['TW'] = { 'latitude': 23.5, 'longitude': 121 };
        latlong['TZ'] = { 'latitude': -6, 'longitude': 35 };
        latlong['UA'] = { 'latitude': 49, 'longitude': 32 };
        latlong['UG'] = { 'latitude': 1, 'longitude': 32 };
        latlong['UM'] = { 'latitude': 19.2833, 'longitude': 166.6 };
        latlong['US'] = { 'latitude': 38, 'longitude': -97 };
        latlong['UY'] = { 'latitude': -33, 'longitude': -56 };
        latlong['UZ'] = { 'latitude': 41, 'longitude': 64 };
        latlong['VA'] = { 'latitude': 41.9, 'longitude': 12.45 };
        latlong['VC'] = { 'latitude': 13.25, 'longitude': -61.2 };
        latlong['VE'] = { 'latitude': 8, 'longitude': -66 };
        latlong['VG'] = { 'latitude': 18.5, 'longitude': -64.5 };
        latlong['VI'] = { 'latitude': 18.3333, 'longitude': -64.8333 };
        latlong['VN'] = { 'latitude': 16, 'longitude': 106 };
        latlong['VU'] = { 'latitude': -16, 'longitude': 167 };
        latlong['WF'] = { 'latitude': -13.3, 'longitude': -176.2 };
        latlong['WS'] = { 'latitude': -13.5833, 'longitude': -172.3333 };
        latlong['YE'] = { 'latitude': 15, 'longitude': 48 };
        latlong['YT'] = { 'latitude': -12.8333, 'longitude': 45.1667 };
        latlong['ZA'] = { 'latitude': -29, 'longitude': 24 };
        latlong['ZM'] = { 'latitude': -15, 'longitude': 30 };
        latlong['ZW'] = { 'latitude': -20, 'longitude': 30 };
        var oldData = mapdata;
        var mapData = [];
        for (var key in oldData) {
            if (oldData[key] === "" || oldData[key] === null || oldData[key] === undefined) {
                delete oldData[key];
            }
            else {
                mapData.push(oldData[key]);
            }
        }
        //console.log(JSON.stringify(mapData));
        var minBulletSize = 3, maxBulletSize = 70, min = Infinity, max = -Infinity;
        // get min and max values
        for (var i = 0; i < mapData.length; i++) {
            var value = mapData[i].value;
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }
        }
        var dataProvider = {
            mapVar: AmCharts.maps.worldLow,
            images: []
        };
        var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
        // create circle for each country
        for (var i = 0; i < mapData.length; i++) {
            var dataItem = mapData[i];
            var value_1 = dataItem.value;
            // calculate size of a bubble
            var square = (value_1 - min) / (max - min) * (maxSquare - minSquare) + minSquare;
            if (square < minSquare) {
                square = minSquare;
            }
            var size = Math.sqrt(square / (Math.PI * 2));
            var id = dataItem.code;
            dataProvider.images.push({
                type: 'circle',
                width: size,
                height: size,
                color: dataItem.color,
                longitude: latlong[id].longitude,
                latitude: latlong[id].latitude,
                title: dataItem.name,
                value: value_1
            });
        }
        return {
            type: 'map',
            theme: 'blur',
            titles: [
                { text: 'Reach around the world', size: 14 },
                { text: 'source: Twitter', size: 11 }
            ],
            dataProvider: dataProvider,
            areasSettings: {
                unlistedAreasColor: '#000000',
                unlistedAreasAlpha: 0.1
            },
            imagesSettings: {
                balloonText: '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>'
            },
            export: {
                enabled: true
            },
            pathToImages: theme_1.layoutPaths.images.amMap
        };
    };
    __decorate([
        core_1.ViewChild('baAmChart'), 
        __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
    ], ChartistJs2.prototype, "_selector", void 0);
    ChartistJs2 = __decorate([
        core_1.Component({
            selector: 'chartist-js2',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(653), __webpack_require__(1407)],
            template: __webpack_require__(1425),
            providers: [baAmChartTheme_service_1.BaAmChartThemeService],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof chartistJs2_service_1.ChartistJs2Service !== 'undefined' && chartistJs2_service_1.ChartistJs2Service) === 'function' && _b) || Object, (typeof (_c = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _c) || Object, (typeof (_d = typeof httpservice_1.HttpServices !== 'undefined' && httpservice_1.HttpServices) === 'function' && _d) || Object, (typeof (_e = typeof ng2_daterangepicker_1.DaterangepickerConfig !== 'undefined' && ng2_daterangepicker_1.DaterangepickerConfig) === 'function' && _e) || Object, (typeof (_f = typeof baAmChartTheme_service_1.BaAmChartThemeService !== 'undefined' && baAmChartTheme_service_1.BaAmChartThemeService) === 'function' && _f) || Object])
    ], ChartistJs2);
    return ChartistJs2;
    var _a, _b, _c, _d, _e, _f;
}());
exports.ChartistJs2 = ChartistJs2;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },

/***/ 1339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var theme_1 = __webpack_require__(82);
var ChartistJs2Service = (function () {
    function ChartistJs2Service(_baConfig) {
        this._baConfig = _baConfig;
        this._data = {
            simplePieData: {
                labels: ['<100', '100-1k', '1k-10k', '10k>'],
                series: [12, 12, 21, 3]
            },
            simplePieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelInterpolationFnc: function (value) {
                    return Math.round(value / 12 * 100) + '%';
                }
            },
            scatterChartOptions: {
                chartType: 'ScatterChart',
                dataTable: [
                    ['Age', 'Weight'],
                    [8, 12],
                    [4, 5.5],
                    [11, 14],
                    [4, 5],
                    [3, 3.5],
                    [6.5, 7]
                ],
                options: {
                    title: 'HasTag  and Count',
                    hAxis: { title: 'HashTag' },
                    vAxis: { title: 'Count' },
                    legend: 'none'
                }
            },
            labelsPieData: {
                labels: ['fr', 'en', 'pt', 'tl', 'ja', 'es'],
                series: [3, 34, 1, 2, 14, 1]
            },
            labelsPieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value;
                }
            },
            simpleDonutData: {
                labels: ['neutral', 'positive', 'negative'],
                series: [20, 34, 5]
            },
            simpleDonutOptions: {
                fullWidth: true,
                donut: true,
                height: '100px',
                weight: '100px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            },
            simpleLineOptions: {
                color: this._baConfig.get().colors.defaultText,
                fullWidth: true,
                height: '300px',
                chartPadding: {
                    right: 40
                }
            },
            simpleLineData: {
                labels: ['2016-11-09', '2016-11-10', '2016-11-11', '2016-11-12', '2016-11-13', '2016-11-14'],
                series: [
                    [173, 127, 54, 176, 117, 187],
                    [48, 52, 39, 93, 54, 55],
                    [53, 46, 9, 33, 43, 76]
                ]
            },
            areaLineData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [5, 9, 7, 8, 5, 3, 5, 4]
                ]
            },
            areaLineOptions: {
                fullWidth: true,
                height: '300px',
                low: 0,
                showArea: true
            },
            biLineData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [1, 2, 3, 1, -2, 0, 1],
                    [-2, -1, -2, -1, -2.5, -1, -2],
                    [0, 0, 0, 1, 2, 2.5, 2],
                    [2.5, 2, 1, 0.5, 1, 0.5, -1]
                ]
            },
            biLineOptions: {
                height: '300px',
                high: 3,
                low: -3,
                showArea: true,
                showLine: false,
                showPoint: false,
                fullWidth: true,
                axisX: {
                    showGrid: false
                }
            },
            // simpleBarData: {
            //   labels: ['@iptl', '@IndianAces', '@rogerfederer', '@naterzzzz', '@geniebouchard', '@IPTL', '@jakedavi5', '@MattBarbarin', '@MirzaSania', '@hotdog6969'],
            //   series: [
            //     [4, 2, 2, 1, 1, 1, 1,1, 1,1]
            //   ]
            // },
            // simpleBarOptions: {
            //   fullWidth: true,
            //   height: '300px'
            // },
            multiBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [5, 4, 3, 7],
                    [3, 2, 9, 5],
                    [1, 5, 8, 4],
                    [2, 3, 4, 6],
                    [4, 1, 2, 1]
                ]
            },
            multiBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value.split(/\s+/).map(function (word) {
                            return word[0];
                        }).join('');
                    }
                },
                axisY: {
                    offset: 20
                }
            },
            multiBarResponsive: [
                ['screen and (min-width: 400px)', {
                        reverseData: true,
                        horizontalBars: true,
                        axisX: {
                            labelInterpolationFnc: function (n) { return n; }
                        },
                        axisY: {
                            offset: 60
                        }
                    }],
                ['screen and (min-width: 700px)', {
                        stackBars: false,
                        reverseData: false,
                        horizontalBars: false,
                        seriesBarDistance: 15
                    }]
            ],
            stackedBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            },
            stackedBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1000) + 'k';
                    }
                }
            }
        };
    }
    ChartistJs2Service.prototype.getAll = function () {
        return this._data;
    };
    ChartistJs2Service.prototype.getResponsive = function (padding, offset) {
        return [
            ['screen and (min-width: 1550px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 1200px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 600px)', {
                    chartPadding: 0,
                    labelOffset: 0,
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }]
        ];
    };
    ChartistJs2Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _a) || Object])
    ], ChartistJs2Service);
    return ChartistJs2Service;
    var _a;
}());
exports.ChartistJs2Service = ChartistJs2Service;


/***/ },

/***/ 1358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(58);
var TagCloudComponent = (function () {
    function TagCloudComponent(el, renderer, sanitizer) {
        this.el = el;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.width = 500;
        this.height = 300;
        this.removeOverflow = false;
        this.alreadyPlacedWords = [];
    }
    TagCloudComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            console.error('angular-tag-cloud: No data passed. Please pass tags data as json');
            return;
        }
        this.options = {
            step: 2.0,
            aspectRatio: (this.width / this.height),
            width: this.width,
            height: this.height,
            center: {
                x: (this.width / 2.0),
                y: (this.height / 2.0)
            },
            removeOverflow: this.removeOverflow
        };
        this.renderer.setElementStyle(this.el.nativeElement, 'width', this.options.width + 'px');
        this.renderer.setElementStyle(this.el.nativeElement, 'height', this.options.height + 'px');
        this.drawWordCloud();
    };
    TagCloudComponent.prototype.drawWordCloud = function () {
        var _this = this;
        // Sort this.data from the word with the highest weight to the one with the lowest
        this.data.sort(function (a, b) {
            if (a.weight < b.weight) {
                return 1;
            }
            else if (a.weight > b.weight) {
                return -1;
            }
            else {
                return 0;
            }
        });
        this.data.forEach(function (elem, index) {
            _this.drawWord(index, elem);
        });
    };
    // Helper function to test if an element overlaps others
    TagCloudComponent.prototype.hitTest = function (currentEl, otherEl) {
        // Check elements for overlap one by one, stop and return false as soon as an overlap is found
        for (var i = 0; i < otherEl.length; i++) {
            if (this.overlapping(currentEl, otherEl[i])) {
                return true;
            }
        }
        return false;
    };
    // Pairwise overlap detection
    TagCloudComponent.prototype.overlapping = function (a, b) {
        return (Math.abs(2.0 * a.offsetLeft + a.offsetWidth - 2.0 * b.offsetLeft - b.offsetWidth) < a.offsetWidth + b.offsetWidth &&
            Math.abs(2.0 * a.offsetTop + a.offsetHeight - 2.0 * b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight)
            ? true : false;
    };
    ;
    // Function to draw a word, by moving it in spiral until it finds a suitable empty place. This will be iterated on each word.
    TagCloudComponent.prototype.drawWord = function (index, word) {
        // Define the ID attribute of the span that will wrap the word
        var angle = 6.28 * Math.random(), radius = 0.0, weight = 5, wordSpan;
        // Check if min(weight) > max(weight) otherwise use default
        if (this.data[0].weight > this.data[this.data.length - 1].weight) {
            // Linearly map the original weight to a discrete scale from 1 to 10
            weight = Math.round((word.weight - this.data[this.data.length - 1].weight) /
                (this.data[0].weight - this.data[this.data.length - 1].weight) * 9.0) + 1;
        }
        // Create a new span and insert node.
        wordSpan = this.renderer.createElement(this.el.nativeElement, 'span');
        wordSpan.className = 'w' + weight;
        var node = this.renderer.createText(this.el.nativeElement, word.text);
        // Append href if there's a link alongwith the tag
        if (word.link !== undefined && word.link !== '') {
            var wordLink = this.renderer.createElement(this.el.nativeElement, 'a');
            wordLink.href = word.link;
            if (word.external !== undefined && word.external) {
                wordLink.target = '_blank';
            }
            wordLink.appendChild(node);
            node = wordLink;
        }
        if (word.color !== undefined && word.color !== '') {
            this.renderer.setElementStyle(node, 'color', word.color);
        }
        wordSpan.appendChild(node);
        var width = wordSpan.offsetWidth, height = wordSpan.offsetHeight, left = this.options.center.x, top = this.options.center.y;
        // Save a reference to the style property, for better performance
        var wordStyle = wordSpan.style;
        wordStyle.position = 'absolute';
        // place the first word
        wordStyle.left = left + 'px';
        wordStyle.top = top + 'px';
        while (this.hitTest(wordSpan, this.alreadyPlacedWords)) {
            radius += this.options.step;
            angle += (index % 2 === 0 ? 1 : -1) * this.options.step;
            left = this.options.center.x - (width / 2.0) + (radius * Math.cos(angle)) * this.options.aspectRatio;
            top = this.options.center.y + radius * Math.sin(angle) - (height / 2.0);
            wordStyle.left = left + 'px';
            wordStyle.top = top + 'px';
        }
        // Don't render word if part of it would be outside the container
        if (this.options.removeOverflow && (left < 0 || top < 0 || (left + width) > this.options.width || (top + height) > this.options.height)) {
            wordSpan.remove();
            return;
        }
        this.alreadyPlacedWords.push(wordSpan);
    };
    ;
    TagCloudComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'angular-tag-cloud',
                    template: '',
                    styles: ["\n    /* fonts */\n    :host {\n      font-family: \"Helvetica\", \"Arial\", sans-serif;\n      font-size: 10px;\n      line-height: normal;\n    }\n    :host /deep/ a:host {\n      font-size: inherit;\n      text-decoration: none;\n    }\n    :host /deep/ span.w10 { font-size: 550%; }\n    :host /deep/ span.w9 { font-size: 500%; }\n    :host /deep/ span.w8 { font-size: 450%; }\n    :host /deep/ span.w7 { font-size: 400%; }\n    :host /deep/ span.w6 { font-size: 350%; }\n    :host /deep/ span.w5 { font-size: 300%; }\n    :host /deep/ span.w4 { font-size: 250%; }\n    :host /deep/ span.w3 { font-size: 200%; }\n    :host /deep/ span.w2 { font-size: 150%; }\n    :host /deep/ span.w1 { font-size: 100%; }\n\n    /* colors */\n    :host /deep/ a { color: inherit; }\n    :host /deep/ a:hover { color: #0df; }\n    :host /deep/ a:hover { color: #0cf; }\n    :host /deep/ span.w10 { color: #0cf; }\n    :host /deep/ span.w9 { color: #0cf; }\n    :host /deep/ span.w8 { color: #0cf; }\n    :host /deep/ span.w7 { color: #39d; }\n    :host /deep/ span.w6 { color: #90c5f0; }\n    :host /deep/ span.w5 { color: #90a0dd; }\n    :host /deep/ span.w4 { color: #90c5f0; }\n    :host /deep/ span.w3 { color: #a0ddff; }\n    :host /deep/ span.w2 { color: #99ccee; }\n    :host /deep/ span.w1 { color: #aab5f0; }\n\n    /* layout */\n    :host {\n      color: #09f;\n      overflow: hidden;\n      position: relative;\n      display: block;\n    }\n    :host /deep/ span { padding: 0; }\n  "]
                },] },
    ];
    /** @nocollapse */
    TagCloudComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: platform_browser_1.DomSanitizer, },
    ];
    TagCloudComponent.propDecorators = {
        'data': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'removeOverflow': [{ type: core_1.Input },],
    };
    return TagCloudComponent;
}());
exports.TagCloudComponent = TagCloudComponent;
//# sourceMappingURL=tag-cloud.component.js.map

/***/ },

/***/ 1359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var google_charts_loader_service_1 = __webpack_require__(1360);
var GoogleChartComponent = (function () {
    function GoogleChartComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['data']) {
            if (this.data === null) {
                return;
            }
            this.loaderService.load(this.data.chartType).then(function () {
                if (_this.wrapper === undefined) {
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                }
                else {
                    _this.wrapper.setDataTable(_this.data.dataTable);
                    _this.wrapper.setOptions(_this.data.options);
                }
                _this.wrapper.draw(_this.el.nativeElement.querySelector('div'));
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GoogleChartComponent.prototype, "data", void 0);
    GoogleChartComponent = __decorate([
        core_1.Component({
            selector: 'google-chart',
            template: '<div></div>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, google_charts_loader_service_1.GoogleChartsLoaderService])
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());
exports.GoogleChartComponent = GoogleChartComponent;


/***/ },

/***/ 1360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var GoogleChartsLoaderService = (function () {
    function GoogleChartsLoaderService() {
        this.chartPackage = {
            'AnnotationChart': 'annotationchart',
            'AreaChart': 'corechart',
            'Bar': 'bar',
            'BarChart': 'corechart',
            'BubbleChart': 'corechart',
            'Calendar': 'calendar',
            'CandlestickChart': 'corechart',
            'ColumnChart': 'corechart',
            'ComboChart': 'corechart',
            'PieChart': 'corechart',
            'Gantt': 'gantt',
            'Gauge': 'gauge',
            'GeoChart': 'geochart',
            'Histogram': 'corechart',
            'Line': 'line',
            'LineChart': 'corechart',
            'Map': 'map',
            'OrgChart': 'orgChart',
            'Sankey': 'sankey',
            'Scatter': 'scatter',
            'ScatterChart': 'corechart',
            'SteppedAreaChart': 'corechart',
            'Table': 'table',
            'Timeline': 'timeline',
            'TreeMap': 'treemap',
            'WordTree': 'wordtree',
        };
    }
    GoogleChartsLoaderService.prototype.load = function (chartType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            google.charts.load('45', {
                'packages': [_this.chartPackage[chartType]],
                'callback': resolve
            });
        });
    };
    GoogleChartsLoaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GoogleChartsLoaderService);
    return GoogleChartsLoaderService;
}());
exports.GoogleChartsLoaderService = GoogleChartsLoaderService;


/***/ },

/***/ 1361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var daterangepicker_component_1 = __webpack_require__(1333);
var config_service_1 = __webpack_require__(1330);
var Daterangepicker = (function () {
    function Daterangepicker() {
    }
    Daterangepicker = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [daterangepicker_component_1.DaterangePickerComponent],
            providers: [config_service_1.DaterangepickerConfig],
            exports: [daterangepicker_component_1.DaterangePickerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Daterangepicker);
    return Daterangepicker;
}());
exports.Daterangepicker = Daterangepicker;


/***/ },

/***/ 1362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(55);
var charts_component_1 = __webpack_require__(1334);
var chartistJs_component_1 = __webpack_require__(1337);
var chartistJs2_component_1 = __webpack_require__(1338);
var bubbleMaps_component_1 = __webpack_require__(1326);
var brand_league_components_1 = __webpack_require__(1336);
//import { Maps } from '../maps/maps.component';
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: charts_component_1.Charts,
        children: [
            { path: 'chartist-js', component: chartistJs_component_1.ChartistJs },
            { path: 'chartist-js2', component: chartistJs2_component_1.ChartistJs2 },
            { path: 'brand_league', component: brand_league_components_1.BrandLeague },
            { path: 'bubblemaps', component: bubbleMaps_component_1.BubbleMaps }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 1363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var theme_1 = __webpack_require__(82);
var ChartistJsService = (function () {
    function ChartistJsService(_baConfig) {
        this._baConfig = _baConfig;
        this._data = {
            simplePieData: {
                labels: ['<100', '100-1k', '1k-10k', '10k>'],
                series: [12, 12, 21, 3]
            },
            simplePieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelInterpolationFnc: function (value) {
                    return Math.round(value / 12 * 100) + '%';
                }
            },
            scatterChartOptions: {
                chartType: 'ScatterChart',
                dataTable: [
                    ['Age', 'Weight'],
                    [8, 12],
                    [4, 5.5],
                    [11, 14],
                    [4, 5],
                    [3, 3.5],
                    [6.5, 7]
                ],
                options: {
                    title: 'HasTag  and Count',
                    hAxis: { title: 'HashTag' },
                    vAxis: { title: 'Count' },
                    legend: 'none'
                }
            },
            labelsPieData: {
                labels: ['fr', 'en', 'pt', 'tl', 'ja', 'es'],
                series: [3, 34, 1, 2, 14, 1]
            },
            labelsPieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value;
                }
            },
            simpleDonutData: {
                labels: ['neutral', 'positive', 'negative'],
                series: [20, 34, 5]
            },
            simpleDonutOptions: {
                fullWidth: true,
                donut: true,
                height: '100px',
                weight: '100px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            },
            simpleLineOptions: {
                color: this._baConfig.get().colors.defaultText,
                fullWidth: true,
                height: '300px',
                chartPadding: {
                    right: 40
                }
            },
            simpleLineData: {
                labels: ['2016-11-09', '2016-11-10', '2016-11-11', '2016-11-12', '2016-11-13', '2016-11-14'],
                series: [
                    [173, 127, 54, 176, 117, 187],
                    [48, 52, 39, 93, 54, 55],
                    [53, 46, 9, 33, 43, 76]
                ]
            },
            areaLineData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [5, 9, 7, 8, 5, 3, 5, 4]
                ]
            },
            areaLineOptions: {
                fullWidth: true,
                height: '300px',
                low: 0,
                showArea: true
            },
            biLineData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [1, 2, 3, 1, -2, 0, 1],
                    [-2, -1, -2, -1, -2.5, -1, -2],
                    [0, 0, 0, 1, 2, 2.5, 2],
                    [2.5, 2, 1, 0.5, 1, 0.5, -1]
                ]
            },
            biLineOptions: {
                height: '300px',
                high: 3,
                low: -3,
                showArea: true,
                showLine: false,
                showPoint: false,
                fullWidth: true,
                axisX: {
                    showGrid: false
                }
            },
            // simpleBarData: {
            //   labels: ['@iptl', '@IndianAces', '@rogerfederer', '@naterzzzz', '@geniebouchard', '@IPTL', '@jakedavi5', '@MattBarbarin', '@MirzaSania', '@hotdog6969'],
            //   series: [
            //     [4, 2, 2, 1, 1, 1, 1,1, 1,1]
            //   ]
            // },
            // simpleBarOptions: {
            //   fullWidth: true,
            //   height: '300px'
            // },
            multiBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [5, 4, 3, 7],
                    [3, 2, 9, 5],
                    [1, 5, 8, 4],
                    [2, 3, 4, 6],
                    [4, 1, 2, 1]
                ]
            },
            multiBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value.split(/\s+/).map(function (word) {
                            return word[0];
                        }).join('');
                    }
                },
                axisY: {
                    offset: 20
                }
            },
            multiBarResponsive: [
                ['screen and (min-width: 400px)', {
                        reverseData: true,
                        horizontalBars: true,
                        axisX: {
                            labelInterpolationFnc: function (n) { return n; }
                        },
                        axisY: {
                            offset: 60
                        }
                    }],
                ['screen and (min-width: 700px)', {
                        stackBars: false,
                        reverseData: false,
                        horizontalBars: false,
                        seriesBarDistance: 15
                    }]
            ],
            stackedBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            },
            stackedBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1000) + 'k';
                    }
                }
            }
        };
    }
    ChartistJsService.prototype.getAll = function () {
        return this._data;
    };
    ChartistJsService.prototype.getResponsive = function (padding, offset) {
        return [
            ['screen and (min-width: 1550px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 1200px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 600px)', {
                    chartPadding: 0,
                    labelOffset: 0,
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }]
        ];
    };
    ChartistJsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof theme_1.BaThemeConfigProvider !== 'undefined' && theme_1.BaThemeConfigProvider) === 'function' && _a) || Object])
    ], ChartistJsService);
    return ChartistJsService;
    var _a;
}());
exports.ChartistJsService = ChartistJsService;


/***/ },

/***/ 1392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1393));
__export(__webpack_require__(1358));
//# sourceMappingURL=index.js.map

/***/ },

/***/ 1393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var tag_cloud_component_1 = __webpack_require__(1358);
var TagCloudModule = (function () {
    function TagCloudModule() {
    }
    TagCloudModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [tag_cloud_component_1.TagCloudComponent],
                    exports: [tag_cloud_component_1.TagCloudComponent]
                },] },
    ];
    /** @nocollapse */
    TagCloudModule.ctorParameters = [];
    return TagCloudModule;
}());
exports.TagCloudModule = TagCloudModule;
//# sourceMappingURL=tag-cloud.module.js.map

/***/ },

/***/ 1394:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* @version: 2.1.24
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2016 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: https://www.improvely.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (true) {
        // AMD. Make globaly available as well
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (moment, jquery) {
            return (root.daterangepicker = factory(moment, jquery));
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        module.exports = factory(require('moment'), jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: 'MM/DD/YYYY',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string')
              this.locale.customRangeLabel = options.locale.customRangeLabel;

        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) 
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').prependTo( this.container.find('.calendar.left').parent() );
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
            .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate;
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate;
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate;

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (!this.endDate && timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function() {
          var customRange = true;
          var i = 0;
          for (var range in this.ranges) {
              if (this.timePicker) {
                  if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                      customRange = false;
                      this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                      break;
                  }
              } else {
                  //ignore times when comparing dates if time picker is not enabled
                  if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                      customRange = false;
                      this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                      break;
                  }
              }
              i++;
          }
          if (customRange && this.showCustomRangeLabel) {
              this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
              this.showCalendars();
          }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateView();
        },

        formInputsFocused: function(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }

        },

        formInputsBlurred: function(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));


/***/ },

/***/ 1399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets') || changes.hasOwnProperty('labels')) {
                this.chart.data.datasets = this.getDatasets();
                this.chart.data.labels = this.labels;
                this.chart.update();
            }
            else {
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]', exportAs: 'base-chart' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = [];
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ },

/***/ 1400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1399));


/***/ },

/***/ 1401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1359));
var google_charts_module_1 = __webpack_require__(1402);
exports.Ng2GoogleChartsModule = google_charts_module_1.Ng2GoogleChartsModule;


/***/ },

/***/ 1402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var google_chart_component_1 = __webpack_require__(1359);
var google_charts_loader_service_1 = __webpack_require__(1360);
var Ng2GoogleChartsModule = (function () {
    function Ng2GoogleChartsModule() {
    }
    Ng2GoogleChartsModule = __decorate([
        core_1.NgModule({
            declarations: [
                google_chart_component_1.GoogleChartComponent,
            ],
            providers: [
                google_charts_loader_service_1.GoogleChartsLoaderService,
            ],
            exports: [
                google_chart_component_1.GoogleChartComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2GoogleChartsModule);
    return Ng2GoogleChartsModule;
}());
exports.Ng2GoogleChartsModule = Ng2GoogleChartsModule;


/***/ },

/***/ 1404:
/***/ function(module, exports) {

module.exports = ".daterangepicker {\r\n  position: absolute;\r\n  color: #111;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  width: 278px;\r\n  padding: 4px;\r\n  margin-top: 1px;\r\n  top: 100px;\r\n  left: 20px;\r\n  /* Calendars */ }\r\n  .daterangepicker:before, .daterangepicker:after {\r\n    position: absolute;\r\n    display: inline-block;\r\n    border-bottom-color: rgba(0, 0, 0, 0.2);\r\n    content: ''; }\r\n  .daterangepicker:before {\r\n    top: -7px;\r\n    border-right: 7px solid transparent;\r\n    border-left: 7px solid transparent;\r\n    border-bottom: 7px solid #ccc; }\r\n  .daterangepicker:after {\r\n    top: -6px;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 6px solid #fff;\r\n    border-left: 6px solid transparent; }\r\n  .daterangepicker.opensleft:before {\r\n    right: 9px; }\r\n  .daterangepicker.opensleft:after {\r\n    right: 10px; }\r\n  .daterangepicker.openscenter:before {\r\n    left: 0;\r\n    right: 0;\r\n    width: 0;\r\n    margin-left: auto;\r\n    margin-right: auto; }\r\n  .daterangepicker.openscenter:after {\r\n    left: 0;\r\n    right: 0;\r\n    width: 0;\r\n    margin-left: auto;\r\n    margin-right: auto; }\r\n  .daterangepicker.opensright:before {\r\n    left: 9px; }\r\n  .daterangepicker.opensright:after {\r\n    left: 10px; }\r\n  .daterangepicker.dropup {\r\n    margin-top: -5px; }\r\n    .daterangepicker.dropup:before {\r\n      top: initial;\r\n      bottom: -7px;\r\n      border-bottom: initial;\r\n      border-top: 7px solid #ccc; }\r\n    .daterangepicker.dropup:after {\r\n      top: initial;\r\n      bottom: -6px;\r\n      border-bottom: initial;\r\n      border-top: 6px solid #fff; }\r\n  .daterangepicker.dropdown-menu {\r\n    max-width: none;\r\n    z-index: 3001; }\r\n  .daterangepicker.single .ranges, .daterangepicker.single .calendar {\r\n    float: none; }\r\n  .daterangepicker.show-calendar .calendar {\r\n    display: block; }\r\n  .daterangepicker .calendar {\r\n    display: none;\r\n    max-width: 270px;\r\n    margin: 4px; }\r\n    .daterangepicker .calendar.single .calendar-table {\r\n      border: none; }\r\n    .daterangepicker .calendar th, .daterangepicker .calendar td {\r\n      white-space: nowrap;\r\n      text-align: center;\r\n      min-width: 32px; }\r\n  .daterangepicker .calendar-table {\r\n    border: 1px solid #fff;\r\n    padding: 4px;\r\n    border-radius: 4px;\r\n    background: #fff; }\r\n  .daterangepicker table {\r\n    width: 100%;\r\n    margin: 0; }\r\n  .daterangepicker td, .daterangepicker th {\r\n    text-align: center;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 4px;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    cursor: pointer; }\r\n    .daterangepicker td.available:hover, .daterangepicker th.available:hover {\r\n      background-color: #eee;\r\n      border-color: transparent;\r\n      color: inherit; }\r\n    .daterangepicker td.week, .daterangepicker th.week {\r\n      font-size: 80%;\r\n      color: #ccc; }\r\n  .daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\r\n    background-color: #fff;\r\n    border-color: transparent;\r\n    color: #999; }\r\n  .daterangepicker td.in-range {\r\n    background-color: #ebf4f8;\r\n    border-color: transparent;\r\n    color: #000;\r\n    border-radius: 0; }\r\n  .daterangepicker td.start-date {\r\n    border-radius: 4px 0 0 4px; }\r\n  .daterangepicker td.end-date {\r\n    border-radius: 0 4px 4px 0; }\r\n  .daterangepicker td.start-date.end-date {\r\n    border-radius: 4px; }\r\n  .daterangepicker td.active, .daterangepicker td.active:hover {\r\n    background-color: #357ebd;\r\n    border-color: transparent;\r\n    color: #fff; }\r\n  .daterangepicker th.month {\r\n    width: auto; }\r\n  .daterangepicker td.disabled, .daterangepicker option.disabled {\r\n    color: #999;\r\n    cursor: not-allowed;\r\n    text-decoration: line-through; }\r\n  .daterangepicker select.monthselect, .daterangepicker select.yearselect {\r\n    font-size: 12px;\r\n    padding: 1px;\r\n    height: auto;\r\n    margin: 0;\r\n    cursor: default; }\r\n  .daterangepicker select.monthselect {\r\n    margin-right: 2%;\r\n    width: 56%; }\r\n  .daterangepicker select.yearselect {\r\n    width: 40%; }\r\n  .daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\r\n    width: 50px;\r\n    margin-bottom: 0; }\r\n  .daterangepicker .input-mini {\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    color: #555;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    display: block;\r\n    vertical-align: middle;\r\n    margin: 0 0 5px 0;\r\n    padding: 0 6px 0 28px;\r\n    width: 100%; }\r\n    .daterangepicker .input-mini.active {\r\n      border: 1px solid #08c;\r\n      border-radius: 4px; }\r\n  .daterangepicker .daterangepicker_input {\r\n    position: relative; }\r\n    .daterangepicker .daterangepicker_input i {\r\n      position: absolute;\r\n      left: 8px;\r\n      top: 8px; }\r\n  .daterangepicker.rtl .input-mini {\r\n    padding-right: 28px;\r\n    padding-left: 6px; }\r\n  .daterangepicker.rtl .daterangepicker_input i {\r\n    left: auto;\r\n    right: 8px; }\r\n  .daterangepicker .calendar-time {\r\n    text-align: center;\r\n    margin: 5px auto;\r\n    line-height: 30px;\r\n    position: relative;\r\n    padding-left: 28px; }\r\n    .daterangepicker .calendar-time select.disabled {\r\n      color: #ccc;\r\n      cursor: not-allowed; }\r\n\r\n.ranges {\r\n  font-size: 11px;\r\n  float: none;\r\n  margin: 4px;\r\n  text-align: left; }\r\n  .ranges ul {\r\n    list-style: none;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 100%; }\r\n  .ranges li {\r\n    font-size: 13px;\r\n    background: #f5f5f5;\r\n    border: 1px solid #f5f5f5;\r\n    border-radius: 4px;\r\n    color: #08c;\r\n    padding: 3px 12px;\r\n    margin-bottom: 8px;\r\n    cursor: pointer; }\r\n    .ranges li:hover {\r\n      background: #08c;\r\n      border: 1px solid #08c;\r\n      color: #fff; }\r\n    .ranges li.active {\r\n      background: #08c;\r\n      border: 1px solid #08c;\r\n      color: #fff; }\r\n\r\n/*  Larger Screen Styling */\r\n@media (min-width: 564px) {\r\n  .daterangepicker {\r\n    width: auto; }\r\n    .daterangepicker .ranges ul {\r\n      width: 160px; }\r\n    .daterangepicker.single .ranges ul {\r\n      width: 100%; }\r\n    .daterangepicker.single .calendar.left {\r\n      clear: none; }\r\n    .daterangepicker.single.ltr .ranges, .daterangepicker.single.ltr .calendar {\r\n      float: left; }\r\n    .daterangepicker.single.rtl .ranges, .daterangepicker.single.rtl .calendar {\r\n      float: right; }\r\n    .daterangepicker.ltr {\r\n      direction: ltr;\r\n      text-align: left; }\r\n      .daterangepicker.ltr .calendar.left {\r\n        clear: left;\r\n        margin-right: 0; }\r\n        .daterangepicker.ltr .calendar.left .calendar-table {\r\n          border-right: none;\r\n          border-top-right-radius: 0;\r\n          border-bottom-right-radius: 0; }\r\n      .daterangepicker.ltr .calendar.right {\r\n        margin-left: 0; }\r\n        .daterangepicker.ltr .calendar.right .calendar-table {\r\n          border-left: none;\r\n          border-top-left-radius: 0;\r\n          border-bottom-left-radius: 0; }\r\n      .daterangepicker.ltr .left .daterangepicker_input {\r\n        padding-right: 12px; }\r\n      .daterangepicker.ltr .calendar.left .calendar-table {\r\n        padding-right: 12px; }\r\n      .daterangepicker.ltr .ranges, .daterangepicker.ltr .calendar {\r\n        float: left; }\r\n    .daterangepicker.rtl {\r\n      direction: rtl;\r\n      text-align: right; }\r\n      .daterangepicker.rtl .calendar.left {\r\n        clear: right;\r\n        margin-left: 0; }\r\n        .daterangepicker.rtl .calendar.left .calendar-table {\r\n          border-left: none;\r\n          border-top-left-radius: 0;\r\n          border-bottom-left-radius: 0; }\r\n      .daterangepicker.rtl .calendar.right {\r\n        margin-right: 0; }\r\n        .daterangepicker.rtl .calendar.right .calendar-table {\r\n          border-right: none;\r\n          border-top-right-radius: 0;\r\n          border-bottom-right-radius: 0; }\r\n      .daterangepicker.rtl .left .daterangepicker_input {\r\n        padding-left: 12px; }\r\n      .daterangepicker.rtl .calendar.left .calendar-table {\r\n        padding-left: 12px; }\r\n      .daterangepicker.rtl .ranges, .daterangepicker.rtl .calendar {\r\n        text-align: right;\r\n        float: right; } }\r\n@media (min-width: 730px) {\r\n  .daterangepicker .ranges {\r\n    width: auto; }\r\n  .daterangepicker.ltr .ranges {\r\n    float: left; }\r\n  .daterangepicker.rtl .ranges {\r\n    float: right; }\r\n  .daterangepicker .calendar.left {\r\n    clear: none !important; } }\r\n"

/***/ },

/***/ 1405:
/***/ function(module, exports) {

module.exports = ".ct-area {\n  fill-opacity: .5; }\n\n.ct-label {\n  color: #000000;\n  opacity: 0.9;\n  fill: #000000; }\n\n.ct-chart .ct-label {\n  font-size: 1em; }\n\n.ct-chart svg {\n  width: 100%;\n  display: block; }\n\n#col1 {\n  z-index: 1000;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 80%;\n  cursor: pointer;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%); }\n\n.ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {\n  stroke: #00acac; }\n\n.ct-series-a .ct-slice-pie {\n  stroke: #00acac; }\n\n.ct-series-a .ct-bar {\n  stroke: #ffcd03;\n  stroke-width: 14px; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00acac; }\n\n.ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut, .ct-series-b .ct-slice-pie {\n  stroke: #8bd22f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #8bd22f; }\n\n.ct-series-c .ct-bar, .ct-series-c .ct-line, .ct-series-c .ct-point, .ct-series-c .ct-slice-donut, .ct-series-c .ct-slice-pie {\n  stroke: #f95372; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f95372; }\n\n.ct-series-d .ct-bar, .ct-series-d .ct-line, .ct-series-d .ct-point, .ct-series-d .ct-slice-donut, .ct-series-d .ct-slice-pie {\n  stroke: #e7ba08; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #e7ba08; }\n\n.ct-series-e .ct-bar, .ct-series-e .ct-line, .ct-series-e .ct-point, .ct-series-e .ct-slice-donut, .ct-series-e .ct-slice-pie {\n  stroke: #40daf1; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #40daf1; }\n\n.stacked-bar .ct-bar {\n  stroke-width: 30px;\n  position: relative;\n  left: -102px; }\n\n.bubble-maps {\n  width: 100%;\n  height: calc(100vh - 283px);\n  font-size: 11px; }\n\n.popup {\n  position: relative;\n  display: block; }\n  .popup span {\n    cursor: pointer; }\n  .popup .popup-in {\n    position: absolute;\n    border: 1px solid #eee;\n    max-width: 400px;\n    left: 25px;\n    top: 100%; }\n  .popup.showing span {\n    color: red; }\n\n.dropbtn {\n  background-color: #00acac;\n  color: white;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px; }\n\n.dropbtn:hover {\n  background-color: white;\n  color: black;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px;\n  box-shadow: black; }\n\n.ct-tooltip {\n  position: absolute;\n  display: inline-block;\n  min-width: 5em;\n  padding: 8px 10px;\n  background: #383838;\n  color: #fff;\n  text-align: center;\n  pointer-events: none;\n  z-index: 100;\n  transition: opacity .2s linear; }\n  .ct-tooltip:before {\n    position: absolute;\n    bottom: -14px;\n    left: 50%;\n    border: solid transparent;\n    content: ' hey';\n    height: 0;\n    width: 0;\n    pointer-events: none;\n    border-color: rgba(251, 249, 228, 0);\n    border-top-color: #383838;\n    border-width: 7px;\n    margin-left: -8px; }\n  .ct-tooltip.hide {\n    display: block;\n    opacity: 0;\n    visibility: hidden; }\n"

/***/ },

/***/ 1406:
/***/ function(module, exports) {

module.exports = "#barchart {\n  cursor: pointer; }\n\n.ct-area {\n  fill-opacity: .5; }\n\n.chartAreaWrapper {\n  width: 2400px;\n  overflow-x: scroll; }\n\n.ct-label {\n  color: #000000;\n  opacity: 0.9;\n  fill: #000000; }\n\n.ct-chart .ct-label {\n  font-size: 1em; }\n\n.ct-chart svg {\n  width: 100%;\n  display: block; }\n\n#col1 {\n  z-index: 1000;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 80%;\n  cursor: pointer;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%); }\n\n.ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {\n  stroke: #00acac; }\n\n.ct-series-a .ct-slice-pie {\n  stroke: #00acac; }\n\n.ct-series-a .ct-bar {\n  stroke: #ffcd03;\n  stroke-width: 14px; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00acac; }\n\n.ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut, .ct-series-b .ct-slice-pie {\n  stroke: #8bd22f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #8bd22f; }\n\n.ct-series-c .ct-bar, .ct-series-c .ct-line, .ct-series-c .ct-point, .ct-series-c .ct-slice-donut, .ct-series-c .ct-slice-pie {\n  stroke: #f95372; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f95372; }\n\n.ct-series-d .ct-bar, .ct-series-d .ct-line, .ct-series-d .ct-point, .ct-series-d .ct-slice-donut, .ct-series-d .ct-slice-pie {\n  stroke: #e7ba08; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #e7ba08; }\n\n.ct-series-e .ct-bar, .ct-series-e .ct-line, .ct-series-e .ct-point, .ct-series-e .ct-slice-donut, .ct-series-e .ct-slice-pie {\n  stroke: #40daf1; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #40daf1; }\n\n.stacked-bar .ct-bar {\n  stroke-width: 30px;\n  position: relative;\n  left: -102px; }\n\n.bubble-maps {\n  width: 100%;\n  height: calc(100vh - 283px);\n  font-size: 11px; }\n\n.popup {\n  position: relative;\n  display: block; }\n  .popup span {\n    cursor: pointer; }\n  .popup .popup-in {\n    position: absolute;\n    border: 1px solid #eee;\n    max-width: 400px;\n    left: 25px;\n    top: 100%; }\n  .popup.showing span {\n    color: red; }\n\n.dropbtn {\n  background-color: #00acac;\n  color: white;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px; }\n\n.dropbtn:hover {\n  background-color: white;\n  color: black;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px;\n  box-shadow: black; }\n\n.Intervalbutton {\n  background-color: #00acac;\n  color: white;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px; }\n\n.Intervalbutton:hover {\n  background-color: white;\n  color: black;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px;\n  box-shadow: black; }\n\n.ct-tooltip {\n  position: absolute;\n  display: inline-block;\n  min-width: 5em;\n  padding: 8px 10px;\n  background: #383838;\n  color: #fff;\n  text-align: center;\n  pointer-events: none;\n  z-index: 100;\n  transition: opacity .2s linear; }\n  .ct-tooltip:before {\n    position: absolute;\n    bottom: -14px;\n    left: 50%;\n    border: solid transparent;\n    content: ' hey';\n    height: 0;\n    width: 0;\n    pointer-events: none;\n    border-color: rgba(251, 249, 228, 0);\n    border-top-color: #383838;\n    border-width: 7px;\n    margin-left: -8px; }\n  .ct-tooltip.hide {\n    display: block;\n    opacity: 0;\n    visibility: hidden; }\n\n.space-overall {\n  margin-top: 20px;\n  margin-bottom: 25px; }\n\n.space-asset {\n  margin-top: 15px;\n  margin-bottom: 35px; }\n\n.padding-xsmall-card {\n  padding: 35px 15px; }\n\n.card-text {\n  font-size: 18px;\n  font-family: cursive;\n  padding: 15px 0px 2px; }\n\n.top-buffer {\n  margin-top: 20px; }\n"

/***/ },

/***/ 1407:
/***/ function(module, exports) {

module.exports = ".ct-area {\n  fill-opacity: .5; }\n\n.ct-label {\n  color: #000000;\n  opacity: 0.9;\n  fill: #000000; }\n\n.ct-chart .ct-label {\n  font-size: 1em; }\n\n.ct-chart svg {\n  width: 100%;\n  display: block; }\n\n#col1 {\n  z-index: 1000;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 80%;\n  cursor: pointer;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%); }\n\n.ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {\n  stroke: #00acac; }\n\n.ct-series-a .ct-slice-pie {\n  stroke: #00acac; }\n\n.ct-series-a .ct-bar {\n  stroke: #ffcd03;\n  stroke-width: 14px; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00acac; }\n\n.ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut, .ct-series-b .ct-slice-pie {\n  stroke: #8bd22f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #8bd22f; }\n\n.ct-series-c .ct-bar, .ct-series-c .ct-line, .ct-series-c .ct-point, .ct-series-c .ct-slice-donut, .ct-series-c .ct-slice-pie {\n  stroke: #f95372; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f95372; }\n\n.ct-series-d .ct-bar, .ct-series-d .ct-line, .ct-series-d .ct-point, .ct-series-d .ct-slice-donut, .ct-series-d .ct-slice-pie {\n  stroke: #e7ba08; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #e7ba08; }\n\n.ct-series-e .ct-bar, .ct-series-e .ct-line, .ct-series-e .ct-point, .ct-series-e .ct-slice-donut, .ct-series-e .ct-slice-pie {\n  stroke: #40daf1; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #40daf1; }\n\n.stacked-bar .ct-bar {\n  stroke-width: 30px;\n  position: relative;\n  left: -102px; }\n\n.bubble-maps {\n  width: 100%;\n  height: calc(100vh - 283px);\n  font-size: 11px; }\n\n.popup {\n  position: relative;\n  display: block; }\n  .popup span {\n    cursor: pointer; }\n  .popup .popup-in {\n    position: absolute;\n    border: 1px solid #eee;\n    max-width: 400px;\n    left: 25px;\n    top: 100%; }\n  .popup.showing span {\n    color: red; }\n\n.dropbtn {\n  background-color: #00acac;\n  color: white;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px; }\n\n.dropbtn:hover {\n  background-color: white;\n  color: black;\n  padding: 9px 24px;\n  font-family: Cursive;\n  font-size: 16px;\n  border: 2px solid #00acac;\n  cursor: pointer;\n  display: block;\n  border-radius: 6px;\n  box-shadow: black; }\n\n.ct-tooltip {\n  position: absolute;\n  display: inline-block;\n  min-width: 5em;\n  padding: 8px 10px;\n  background: #383838;\n  color: #fff;\n  text-align: center;\n  pointer-events: none;\n  z-index: 100;\n  transition: opacity .2s linear; }\n  .ct-tooltip:before {\n    position: absolute;\n    bottom: -14px;\n    left: 50%;\n    border: solid transparent;\n    content: ' hey';\n    height: 0;\n    width: 0;\n    pointer-events: none;\n    border-color: rgba(251, 249, 228, 0);\n    border-top-color: #383838;\n    border-width: 7px;\n    margin-left: -8px; }\n  .ct-tooltip.hide {\n    display: block;\n    opacity: 0;\n    visibility: hidden; }\n"

/***/ },

/***/ 1423:
/***/ function(module, exports) {

module.exports = "\n\n<section class=\"chartist\">\n\n\n  <!--<div class=\"row\">\n     <button (click)=\"onClickMe()\">Click me!</button>\n  </div>-->\n  <ba-card title=\"Select options\" baCardClass=\"with-scroll\">\n   <div class=\"row\">\n   \n    \n    \n      <!--<div class=\"col-md-15 col-sm-3\">\n            <select class=\"dropbtn\"  (change)=\"OnChangeDate()\" [(ngModel)]=\"selectedDate\">\n               \n                <option *ngFor=\"let item of dropDownDate\" value=\"{{item.date}}\">\n                  {{item.name}}\n                </option>\n            </select>\n      </div>-->\n\n     \n\n     </div>\n     </ba-card>\n\n\n\n     \n  \n    <ba-card title=\"Overall Statistics Summary\">\n  <div class=\"row\">\n         <div class=\"col-md-12 col-lg-3\">\n               <ba-card  baCardClass=\"with-scroll\">\n                   <h4> Total Count </h4>\n             <h2> {{ brand_count }} </h2>\n          </ba-card>\n          </div>\n            \n          <div class=\"col-md-12 col-lg-3\">\n             <ba-card  baCardClass=\"with-scroll\">\n              <div class=\"button-wrapper\">\n                <button type=\"button\" (click)=\"getBackHome()\" class=\"btn btn-default  btn-xs\">Home</button>\n              </div>\n              </ba-card>\n          </div>\n             <div class=\"col-md-15 col-sm-3\"  >\n         <form>\n           \n           <div class=\"form-group \" *ngFor=\"let dateInput of dateInputs\" >\n             <div  daterangepicker [options]=\"{startDate:dateInput.start, endDate:dateInput.end }\" (change)=\"OnChangeDate()\" (selected)=\"selectDate($event, dateInput)\" >\n                   <span class=\"dropbtn\"  name=\"daterange\" >\n                       {{ dateInput.start | date:'yyyy/MM/dd' }} - {{ dateInput.end| date:'yyyy/MM/dd' }}\n                   </span>\n               </div>\n           </div>\n       </form>\n       </div>\n  </div>\n    </ba-card>\n\n\n    <div class=\"row\">\n    <div class=\"col-md-6\"> \n                <ba-card  title=\" Sentimental\" baCardClass=\"with-scroll\">\n               <canvas baseChart\n          [data]=\"sentimentData\"\n          [labels]=\"sentimentLabels\"\n          [options]=\"sentimentOptions\"\n          [chartType]=\"sentimentChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartSentimentalClicked($event)\"></canvas>\n           </ba-card>\n    </div>\n     <div class=\"col-md-6\"> \n      <ba-card  title=\"Brand Monitoring - Media Count\" baCardClass=\"with-scroll\">\n      <canvas baseChart\n            [datasets]=\"topBrandMoniteringData\"\n            [labels]=\"topBrandMoniteringLabels\"\n            [colors]=\"topMentionColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topMentionLegend\"\n            [chartType]=\"topBrandMoniteringType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n      </ba-card>\n    </div>\n    </div>\n\n    <div class=\"row\">\n       \n      <ba-card  title=\" Top tag\" baCardClass=\"with-scroll\"> \n        <div id=\"col1\" style=\"height: 520px; position: relative;\" >  </div>\n      </ba-card>\n      </div>\n          \n\n<div class=\"row\">\n   <div class=\"col-md-6 \">\n   <ba-card  title=\"Total Mentions\" baCardClass=\"with-scroll\">\n      <canvas baseChart \n            [datasets]=\"topMentionData\"\n            [labels]=\"topMentionLabels\"\n            [colors]=\"topMentionColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topMentionLegend\"\n            [chartType]=\"topMentionChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n      </ba-card>\n    </div>\n  <div class=\"col-md-6 \">\n     \n      <ba-card title=\"Total Domain\" baCardClass=\"with-scroll\">\n       <canvas baseChart\n            [datasets]=\"topDomainData\"\n            [labels]=\"topDomainLabels\"\n            [colors]=\"topDomainColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topDomainLegend\"\n            [chartType]=\"topDomainChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n\n      </ba-card>\n    </div>\n</div>\n  \n<div class=\"row\">\n  <ba-card  title=\"Top Brands\" baCardClass=\"with-scroll\">\n      <canvas baseChart\n            [datasets]=\"topKeywordData\"\n            [labels]=\"topKeywordLabels\"\n            [colors]=\"topMentionColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topMentionLegend\"\n            [chartType]=\"topBrandMoniteringType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n      </ba-card>\n</div>\n\n<div class=\"row\">\n  <ba-card  title=\"Top Brands Type\" baCardClass=\"with-scroll\">\n      <canvas baseChart\n            [datasets]=\"topBrandTypeData\"\n            [labels]=\"topBrandTypeLabels\"\n            [colors]=\"topMentionColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topMentionLegend\"\n            [chartType]=\"topBrandChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n      </ba-card>\n</div>\n\n<div class=\"row\">\n  <ba-card  title=\"ARTICLES DISTRIBUTION BY LANGUAGE\" baCardClass=\"with-scroll\">\n     <canvas baseChart\n          [data]=\"topUserData\"\n          [labels]=\"topUserLabels\"\n          [legend]=\"topUserLegend\"\n          [options]=\"topUserOptions\"\n          [chartType]=\"topUserChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n      </ba-card>\n</div>\n\n\n<ba-card title=\" Brand DISTRIBUTION By Location\">\n  <div #baAmChart class=\"ba-am-chart bubble-maps\"></div>\n</ba-card>\n\n\n\n <div class=\"row\">\n  <ba-card  title=\" Brand Monitering Engagments \" baCardClass=\"with-scroll\"> \n    \n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n   \n </ba-card>\n  \n</div>\n\n<div class=\"row\">\n  <ba-card title=\"Top Tweets\" baCardClass=\"with-scroll\">\n    <div class=\"col-md-12\" >\n       <div class=\"col-xs-6 col-sm-3\"  *ngFor=\"let item of twitterFeeds\"  >\n       <blockquote class=\"twitter-tweet\"><a href=  {{item.url}} > May 5, 2014</a></blockquote>\n       <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n       </div>\n </div>\n </ba-card>\n</div>\n\n\n\n  \n \n\n\n</section>\n"

/***/ },

/***/ 1424:
/***/ function(module, exports) {

module.exports = "\n\n<section class=\"chartist\">\n\n<div class=\"row\">\n  <div class=\"col-md-6 \">\n    <div class=\"row\">\n      <div class=\" col-md-6 col-sm-6 col-xs-6 col-lg-6\">\n     <ba-card title=\" Select\"  baCardClass=\"xsmall-card\">\n       <div class=\"row top-buffer\">\n      <div class=\"col-md-6 col-sm-4 offset-md-1  col-xs-4 col-lg-4\">\n      <div class=\"row\">\n        <div class=\"col-md-6 card-text\"> <label for=\"name\">   League </label> </div>\n        <div class=\"col-md-6\"> \n            <select class=\"dropbtn\" (change)=\"OnChangeChannel()\"   [(ngModel)]=\"selected_league\">\n                \n                <option *ngFor=\"let item of dropDownLeague \" value=\"{{item.league}}\" >\n                    {{item.name | uppercase }}\n                   \n                </option>\n            </select>\n        </div>  \n         </div>\n     </div>\n     </div>\n\n       <div class=\"row top-buffer\">\n      <div class=\"col-md-6 col-sm-4 offset-md-1  col-xs-4 col-lg-4\">\n      <div class=\"row\">\n        <div class=\"col-md-6 card-text\"> <label for=\"name\">   Match </label> </div>\n        <div class=\"col-md-6\"> \n          <select class=\"dropbtn\"    [(ngModel)]=\"selected_match\">\n                \n                <option *ngFor=\"let item of dropDownMatch\" value=\"{{item.match}}\" disabled >\n                    {{item.name | uppercase }}\n                   \n                </option>\n            </select>\n        </div>  \n         </div>\n     </div>\n     </div>\n\n\n\n\n        </ba-card>\n    </div>\n\n\n\n        <div class=\"col-md-6 col-lg-6\">  \n          <ba-card   baCardClass=\"xsmall-card2\">\n            <h1 >{{totalFrameCount}} </h1>\n            <h4> Frames</h4>\n            <p >Total Frame Count </p>\n          </ba-card>\n          </div>\n          </div>\n\n\n    <div class=\"row\">\n           <div class=\"col-md-6 col-lg-6\"> \n               <ba-card   baCardClass=\"xsmall-card3\">\n                 \n             <h1>{{totalExposureTime }}</h1>\n                <h4> Video Length</h4>\n             <p>Total Video Length (HH:MM:SS)</p>\n             \n          </ba-card>\n          </div>\n\n          <div class=\"col-md-6 col-lg-6\"> \n            <ba-card  baCardClass=\"xsmall-card1\">\n              <h1>{{brands_exposure}}</h1>\n                 <h4> Brand Exposure</h4>\n              <p>Overall Brand Exposure (HH:MM:SS)</p>\n           \n          </ba-card>\n          </div>\n\n\n    </div>\n\n  </div>\n    <div class=\"col-md-6 \">\n    <ba-card  title=\" Assets exposure \" baCardClass=\"medium-card\">\n    <canvas class=\"space-asset\"  baseChart \n            [datasets]=\"topAssetWiseData\"\n            [labels]=\"topAssetWiseLabels\"\n            [colors]=\"topAssetWiseColor\"\n            [options]=\"topAssetWiseOptions\"\n            [legend]=\"topAssetWiseLegend\"\n            [chartType]=\"topAssetWiseChartType\"\n            (chartHover)=\"chartHovered($event)\"></canvas>\n      </ba-card>\n  </div>\n\n</div>\n\n\n\n  <!--<div class=\"row\">\n               <div class=\"col-md-15 col-sm-3\">\n              <div class=\"button-wrapper\">\n                <button type=\"button\" (click)=\"getBackHome()\" class=\"dropbtn  btn-xs\">Reset</button>\n              </div>  \n    </div>\n  </div>-->\n\n\n <!--<div class=\"row\">\n  <div class=\"col-md-6 \">\n    <google-chart [data]=\"gaugeChartOptions\"></google-chart>\n   \n\n  </div>\n  <div class=\"col-md-6 \"></div>\n </div>-->\n\n  <div class=\"row\">\n  \n\n    <div class=\"col-md-6\">\n        \n    <ba-card  title=\"Logos\" baCardClass=\"with-scroll\">\n\n        <div class=\" col-md-12 input-demo radio-demo row\">\n\n    <div class=\"col-md-3\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" (click)=\"topTenLogo()\" name=\"toplogo\" id=\"toptenlogo\"  >\n        <span>Top Ten Logos</span>\n      </label>\n    </div>\n       <div class=\"col-md-3\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" (click)=\"topLastTenLogo()\" name=\"toplogo\" id=\"leastten\" >\n        <span>Lowest Ten Logos</span>\n      </label>\n    </div>\n    <div class=\"col-md-3\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" (click)=\"topLogos()\" name=\"toplogo\" id=\"toplogos\" checked=\"checked\" >\n        <span>All Logos</span>\n      </label>\n    </div>\n              <div class=\"col-md-15 col-sm-3\">\n              <div class=\"button-wrapper\">\n                <button type=\"button\" (click)=\"getBackHome()\" class=\"dropbtn  btn-xs\">Reset</button>\n              </div>  \n    </div>\n \n    </div>\n\n      <canvas class=\"space-overall\" baseChart\n            [datasets]=\"topLogoData\"\n            [labels]=\"topLogoLabels\"\n            [colors]=\"topAssetColor\"\n            [options]=\"topLogoOptions\"\n            [legend]=\"topLogoLegend\"\n            [chartType]=\"topLogoType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"logoExposureClicked($event)\"></canvas>\n      </ba-card>\n  </div>\n    <div class=\"col-md-6 \">\n  <ba-card  title=\" Percentage Exposure of Assets \" baCardClass=\"with-scroll\">\n    <canvas class=\"space-asset\"  baseChart \n            [datasets]=\"topAssetData\"\n            [labels]=\"topAssetLabels\"\n            [colors]=\"topAssetColor\"\n            [options]=\"topAssetOptions\"\n            [legend]=\"topAssetLegend\"\n            [chartType]=\"topAssetChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"assetExposureClicked($event)\"></canvas>\n      </ba-card>\n    </div>\n \n</div>\n\n<div class=\"row\">\n  <ba-card  title=\" Detections Across Time \" baCardClass=\"medium-card with-scroll\"> \n    \n      <div class=\" col-md-6 input-demo radio-demo row\">\n\n    <div class=\"col-md-3\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" name=\"inlineRadioOptions\" (click)=\"fullInterval()\" id=\"inlineRadio1\" value=\"option1\" checked=\"checked\">\n        <span>full </span>\n      </label>\n    </div>\n    <div class=\"col-md-3\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" name=\"inlineRadioOptions\" (click)=\"firstHalfInterval()\" id=\"inlineRadio1\" value=\"option2\" >\n        <span>first Half</span>\n      </label>\n    </div>\n    <div class=\"col-md-3\">\n      <label class=\"radio-inline custom-radio nowrap\">\n        <input type=\"radio\" name=\"inlineRadioOptions\" (click)=\"secondHalfInterval()\" id=\"inlineRadio2\" value=\"option3\">\n        <span>Second Half</span>\n      </label>\n    </div>\n\n  <div class=\"col-md-3\">\n      <select class=\"Intervalbutton\" (change)=\"OnChangeInterval()\"   [(ngModel)]=\"selected_interval\">\n                \n                <option *ngFor=\"let item of dropDownInterval \" value=\"{{item.value}}\" >\n                    {{item.name | uppercase }}\n                   \n                </option>\n      </select>\n    </div>\n  </div>\n\n <div class=\"chartAreaWrapper\">\n\n    <canvas baseChart width=\"5000\" height=\"650\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"topAssetWiseColor\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n </div>\n   \n </ba-card>\n  \n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ba-card  title=\" Logo Elements\" baCardClass=\"with-scroll\"> \n            <div id=\"col1\" style=\"height: 420px; position: relative;\" >  </div>\n            <p><b> Logo Elements:</b> Total number of 120 logo elements were detected from total 67 Sponsors Logo.</p>\n          </ba-card>\n  </div>      \n </div>\n\n\n\n\n\n\n</section>"

/***/ },

/***/ 1425:
/***/ function(module, exports) {

module.exports = "\n\n<section class=\"chartist\">\n\n\n  <!--<div class=\"row\">\n     <button (click)=\"onClickMe()\">Click me!</button>\n  </div>-->\n  <ba-card title=\"Select options\" baCardClass=\"with-scroll\">\n   <div class=\"row\">\n   \n      <div class=\"col-md-15 col-sm-3  \">\n            <select class=\"dropbtn\"  (change)=\"OnChangeChannel()\"  [(ngModel)]=\"selectedChannel\">\n                \n                <option *ngFor=\"let item of dropDownChannel \" value=\"{{item.channel}}\" >\n                    {{item.name | uppercase }}\n                   \n                </option>\n            </select>\n     </div>\n\n    <div class=\"col-md-15 col-sm-3\" >\n            <select class=\"dropbtn\"  (change)=\"OnChangeBrand()\"   [(ngModel)]=\"selectedBrand\">\n                \n                <option *ngFor=\"let item of dropDownBrand\" value=\"{{item.brand}}\">\n                  {{item.name | uppercase }}\n                </option>\n            </select>\n     </div>\n    \n      <!--<div class=\"col-md-15 col-sm-3\">\n            <select class=\"dropbtn\"  (change)=\"OnChangeDate()\" [(ngModel)]=\"selectedDate\">\n               \n                <option *ngFor=\"let item of dropDownDate\" value=\"{{item.date}}\">\n                  {{item.name}}\n                </option>\n            </select>\n      </div>-->\n\n        <div class=\"col-md-15 col-sm-3\"  >\n         <form>\n           <div class=\"form-group \" *ngFor=\"let dateInput of dateInputs\" >\n             <div  daterangepicker [options]=\"{startDate:dateInput.start, endDate:dateInput.end }\" (change)=\"OnChangeDate()\" (selected)=\"selectDate($event, dateInput)\" >\n                   <span class=\"dropbtn\"  name=\"daterange\" >\n                       {{ dateInput.start | date:'yyyy/MM/dd' }} - {{ dateInput.end| date:'yyyy/MM/dd' }}\n                   </span>\n               </div>\n           </div>\n       </form>\n       </div>\n\n     </div>\n     </ba-card>\n\n\n\n     \n  \n    \n\n\n    <div class=\"row\">\n       \n          \n\n<div class=\"col-md-6\"> \n  <ba-card  title=\"Total Engagement\" baCardClass=\"with-scroll\">\n        <canvas baseChart width=\"400\" height=\"225\"\n          [data]=\"polarAreaChartData\"\n          [labels]=\"polarAreaChartLabels\"\n          [options]=\"polarOptions\"\n          [legend]=\"polarAreaLegend\"\n          [chartType]=\"polarAreaChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n  </ba-card>\n\n</div>\n\n<div class=\"col-md-6\">\n   \n      <ba-card  title=\" Top tag\" baCardClass=\"with-scroll\"> \n<div id=\"col1\" style=\"height: 420px; position: relative;\" >  </div>\n</ba-card>\n  \n\n</div>\n  \n </div>\n\n\n  \n\n\n<div class=\"row\">\n\n    <div class=\"col-md-12\">\n       \n      <ba-card title=\"Impact Score\" baCardClass=\"with-scroll\">\n       \n\n        <div class=\"row\">\n           \n           <div class=\"col-md-12 col-lg-4\"><h5> Sentiments Analysis </h5>\n           \n             <canvas baseChart\n          [data]=\"sentimentData\"\n          [labels]=\"sentimentLabels\"\n          [options]=\"sentimentOptions\"\n          [chartType]=\"sentimentChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n            \n          </div>\n         \n          <div class=\"col-md-12 col-lg-4\"><h5>User's Classification</h5>\n            <canvas baseChart\n          [data]=\"userClassData\"\n          [labels]=\"userClassLabels\"\n          [legend]=\"userClassLegend\"\n          [chartType]=\"userClassChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n\n           <div class=\"col-md-12 col-lg-4\"><h5>Top Users </h5>\n            <canvas baseChart\n          [data]=\"topUserData\"\n          [labels]=\"topUserLabels\"\n          [legend]=\"topUserLegend\"\n          [options]=\"topUserOptions\"\n          [chartType]=\"topUserChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n         \n        </div>\n      </ba-card>\n    </div>\n</div>\n\n<div class=\"row\">\n   \n\n    <div class=\"col-md-6 \">\n      <ba-card  title=\"Total Mentions\" baCardClass=\"with-scroll\">\n      <canvas baseChart\n            [datasets]=\"topMentionData\"\n            [labels]=\"topMentionLabels\"\n            [colors]=\"topMentionColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topMentionLegend\"\n            [chartType]=\"topMentionChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n      </ba-card>\n    </div>\n\n     <div class=\"col-md-6 \">\n     \n      <ba-card title=\"Total Domain\" baCardClass=\"with-scroll\">\n       <canvas baseChart\n            [datasets]=\"topDomainData\"\n            [labels]=\"topDomainLabels\"\n            [colors]=\"topDomainColor\"\n            [options]=\"barChartOptions\"\n            [legend]=\"topDomainLegend\"\n            [chartType]=\"topDomainChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n\n      </ba-card>\n    </div>\n  </div>\n\n\n\n<ba-card title=\"Map with bubbles\">\n  <div #baAmChart class=\"ba-am-chart bubble-maps\"></div>\n</ba-card>\n\n\n<div class=\"row\">\n   <div class=\"col-md-12 \">\n   \n     <ba-card title=\"Articles distribution by Language\" baCardClass=\"with-scroll\">\n      <canvas baseChart  width=\"400\" height=\"100\"\n           [datasets]=\"languageData\"\n           [labels]=\"languageLabels\"\n           [colors]=\"languageColor\"\n           [options]=\"articleChartOptions\"\n           [legend]=\"topReachLegend\"\n           [chartType]=\"languageChartType\"\n           (chartHover)=\"chartHovered($event)\"\n           (chartClick)=\"chartClicked($event)\"></canvas>\n     </ba-card>\n     </div>\n\n</div>\n \n\n<div class=\"row\">\n  <ba-card title=\"Top Tweets\" baCardClass=\"with-scroll\">\n    <div class=\"col-md-12\" >\n       <div class=\"col-xs-6 col-sm-3\"  *ngFor=\"let item of twitterFeeds\"  >\n       <blockquote class=\"twitter-tweet\"><a href=  {{item.url}} > May 5, 2014</a></blockquote>\n       <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n       </div>\n </div>\n </ba-card>\n</div>\n\n\n\n  \n \n\n\n</section>\n"

/***/ }

});
//# sourceMappingURL=1.map