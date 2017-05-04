import { Component, ViewEncapsulation, Inject, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { View } from "angular2/angular2";
import { HttpServices } from "../../../../shared/services/httpservice";
import { LeagueService } from './league.service';
import { BaThemeConfigProvider, layoutPaths } from '../../../../theme';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import * as moment from 'moment';
import { BaThemePreloader } from '../../../../theme/services';
import { LocalStorageService } from 'angular-2-local-storage';
import '../../../../theme/components/baAmChart/baAmChart.loader.ts';
import { BaAmChartThemeService } from '../../../../theme/components/baAmChart/baAmChartTheme.service';
import * as d3 from 'd3';
import {Slug} from 'ng2-slugify';

class Test {
  title: string;
  slug:  string
}


@Component({
    selector: 'league_monitoring',
    encapsulation: ViewEncapsulation.None,
    styles: [require('chartist/dist/chartist.css'), require('./brand_league.scss')],
    template: require('./brand_league.html'),
    providers: [BaAmChartThemeService],
})



export class League {
    //---------------------------------------------------------------------------------------//
    private brand_count: string;
    public sentimentLabels: string[];
    public sentimentData: number[]
    public sentimentChartType: string;
     private sentimentOptions: any;
        private selectedIndex:number;
    public topMentionLabels: string[];
    public topMentionChartType: string;
    public topMentionLegend: boolean = true;
    public topMentionData: any[];
    private topMentionColor: any[];

    public topBrandMoniteringLabels: string[];
    public topBrandMoniteringData: any[];
    public topBrandMoniteringType: string;

    public topKeywordData: any[];
    public topKeywordLabels: string[];

    public topBrandTypeData: any[];
    public topBrandTypeLabels: string[];
    public topBrandChartType: string;
     


    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public lineChartColors: Array<any> = [];
    public lineChartData: any = []
    public lineChartLabels: any = [];
    private dataValues2: any = [];
    private dataValues4: any = [];
    public lineChartOptions: any = {
        responsive: true
    };
    public sentimental_data: string;
    //------------------------------------------------------------------------------------------------//
    private dateInputs: any = [
        {
            start: moment(),
            end: moment().add(5, 'month'),
        }
    ];
    data2: any;
    public mapchartData: Object;
    private dropDownDate: any[];
    private selectedDate: any;
    private dropDownBrand: any[];
    private selectedBrand: any;
    private dropDownChannel: any[];
    private selectedChannel: any;
    public cloudData: any;
    public mapData: any[];
    private allname: any[];

    private polarOptions: any;



    public userClassLabels: string[];
    public userClassData: number[]
    public userClassChartType: string;
    public userClassLegend: boolean = false;

    public topUserLegend: boolean = true;
    public topUserLabels: string[];
    private topUserOptions: any;
    public topUserData: number[];
    public topUserChartType: string;


    public topDomainLabels: string[];
    public topDomainChartType: string;
    public topDomainLegend: boolean = true;
    public topDomainData: any[];
    private topDomainColor: any[];


    public topReachLabels: string[];
    public topReachChartType: string;
    public topReachLegend: boolean = true;
    public topReachData: any[];
    private topReachColor: any[];


    private url_1: string;
    private url_2: string;
    private url_3: string;
    private url_4: string;
    private words: any;
    private words1: any;
     private words2: any;
     private words3: any;
    private start_date: any;
    private end_date: any;

    public languageLabels: string[];
    public languageData: any;
    private languageChartType: string;
    private languageColor: Array<any> = [];

    private totalarticlesengagement = 0;
    private totalarticlecount = 0;
    private totalimpact = 0;
    private totalreach = 0
    private totalengagedusers = 0;
    private twitterFeeds: any;
    private options2: any;
    private options4: any;


    public polarAreaChartLabels: string[];
    public polarAreaChartData: number[];
    public polarAreaLegend: boolean = true;
    public polarAreaChartType: string;
    private chart: Object;
    private selected_match: any;
    private selected_league: any;
    private dropDownLeague: any;
    private dropDownMatch: any;
    public type: string;

    private tumblrDataCount: string = '--';
    private flickrDataCount: string = '--';
    private twitterDataCount: string = '--';
    private instagramDataCount: string = '--';
    private blogsDataCount: string = '--';
    private newsDataCount: string = '--';
    private redditDataCount: string = '--';
    private facebookDataCount: string = '--';

    private brand;
    private selected_brand;



    private id = "chartdiv";

    private options;
    private timer;
    public fullPath: string;
    public myPicture: string;
    private gtrendGrowthRate: any;
    private facebookGrowthRate:any;
    private instagramGrowthRate:any;
    private twitterGrowthRate:any;

    private gameInfoData:any;
    private linetwitterData:any;
    private linetwitterlabel:any;


  public test = new Test();
  private slug = new Slug('default'); // this will use 'default' keymap
  private slugGerman = new Slug('german'); // for list of all available keymaps see bellow
 
  public generateSlug(): void {
    this.test.slug = this.slug.slugify(this.test.title);
  }


    @ViewChild('baAmChart') private _selector: ElementRef;


    chartData: Object;
    scatterChartOptions: any;


    constructor(private _leagueService: LeagueService, private _baConfig: BaThemeConfigProvider, private _httpService: HttpServices,
        private daterangepickerOptions: DaterangepickerConfig, private localStorageService: LocalStorageService,
        private _baAmChartThemeService: BaAmChartThemeService) {
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

        this.gtrendGrowthRate = {
            value:0,
            status:true
        }

        this.facebookGrowthRate = {
            value:0,
            status:true
        }

        this.twitterGrowthRate = {
            value:0,
            status:true
        }

        this.instagramGrowthRate = {
            value:0,
            status:true
        }



    }





    private _loadChartsLib(): void {
        BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
            let amChartsReadyMsg = 'AmCharts ready';

            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            } else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    }




    ngOnInit() {

        let self = this;
        self.getd3ChartInit();

        jQuery("#second_off").hide()
        jQuery("#third_off").hide()

        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();



        var league_list = [{ name: 'INDvsENG', league: 'INDvsENG' }]
        self.dropDownLeague = league_list
        self.selected_league = self.dropDownLeague[0].league;

        var match_list = [{ name: 'Cricket', match: 'Cricket' }]
        // {"match":"Cricket","league":"INDvsENG"}
        self.dropDownMatch = match_list
        self.selected_match = self.dropDownMatch[0].match;

        self.type = "leagues";


   
        console.log(self.selected_match)
        console.log('league', self.selected_league)


        self.requestLeaguedata({ match: self.selected_match, league: self.selected_league }, self);
        self.requestallBrands(self);
        self.requestGameInfo(self);

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
            { // grey
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


        self.words1 = [{ text: 'Coca-Cola', weight: 1466 },
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
        jQuery("#col2").jQCloud(self.words1, {
            autoResize: true
        });


             self.words2 = [{ text: 'Coca-Cola', weight: 1466 },
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
         jQuery("#col3").jQCloud( self.words2, {
            autoResize: true
        });


             self.words3 = [{ text: 'Coca-Cola', weight: 1466 },
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
          jQuery("#col4").jQCloud(self.words3, {
            autoResize: true
        });

        self.dataValues2 = [{
            name: 'Year 1800',
            data: [194.1, 95.6, 194.1, 29.9]
        }];

        self.dataValues4 = [14, 5, 65]

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
        }

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
        }

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

        self.options2 = self.getOption(self);
        self.options4 = self.getoptions4(self);
        self.options = self.makeChartConfig(self);

        // Updates the chart every 3 seconds
        self.timer = setInterval(() => {
            self.options = self.makeChartConfig(self);
        }, 3000);

        // self.getd3Chart([{
        //     id: "test",
        //     value: 100
        // },
        // {
        //     id: "teasdfst",
        //     value: 200
        // },
        // {
        //     id: "teasdfsst",
        //     value: 300
        // }])


    }






    private onbrandClick(e: any,index:number): void {
        console.log(e);
        jQuery('html, body').animate({
            scrollTop: 610
        });
        jQuery("#third_off").show()
        jQuery("#second_off").hide()
        let self = this;

           this.selectedIndex = index;
      
        self.selected_brand = e;
        self.requestSingleBranddata({ "brand": self.selected_brand }, self);
        console.log('selected ',self.selected_brand );

        if(self.selected_brand == "Pepsi"){
        jQuery("#pepsi").show()

        self.requesttagclouddata({ "brand": self.selected_brand }, self);
        }else{
             jQuery("#pepsi").hide()
        }
        
        self.requesttag({ "brand": self.selected_brand }, self)
        self.requestSingleBrand_Mediadata({"media":"Twitter", "brand": self.selected_brand}, self)
        self.requestSingleBrand_Mediadata1({"media":"facebook", "brand": self.selected_brand}, self)
        self.requestSingleBrand_Mediadata2({"media":"instagram", "brand": self.selected_brand}, self)
       
      
    // jQuery("#spon").addClass('selected').siblings().removeClass('selected');;
      
           //   jQuery(i).addClass('selected');
    }


// jQuery('.sponser-pic-continer img').on('click', function(){
//     jQuery(this).siblings().removeClass('active')
//     jQuery(this).addClass('active');
// })

private onChange(){
        console.log('onchange');
        jQuery('sponser-pic-continer').addClass('selected');
     //       jQuery('sponser-pic-continer').removeClass('selected')
}



// private ram(){
//     $(this).siblings().removeClass('active')
//     $(this).addClass('active');
// })


  public getBackHome(){
       jQuery("#fourth_off").show()
        jQuery("#second_off").hide()
        jQuery("#third_off").hide()
    
  }


    private OnclickOverAll() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
         jQuery("#fourth_off").hide()
        let self = this;
        self.requestLeaguedata({ match: self.selected_match, league: self.selected_league }, self);
    }


    OnclickTwitter() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        let self = this;
        var media = "Twitter";
        //self.makeRequest(self,media);
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()

    }


    private OnclickInstagram() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "instagram";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }

    private OnclickBlogs() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "blogs";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }

    private OnclickFacebook() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "facebook";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }


    private OnclickTumblr() {
        jQuery('html, body').animate({
           scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "tumblr";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }


    private OnclickNews() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "news";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }


    private OnclickReddit() {
        jQuery('html, body').animate({
            scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "reddit";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }


    private OnclickFlicker() {
        jQuery('html, body').animate({
           scrollTop: 60
        });
        jQuery("#second_off").show()
        jQuery("#third_off").hide()
            jQuery("#fourth_off").hide()
        //self.maleResfs();
        let self = this;
        var media = "flickr";
        self.requestMedia({ match: self.selected_match, league: self.selected_league, media: media }, self);
    }






    makeChartConfig(self) {

        // Generate random data

        return {
            "type": "pie",
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "titleField": "country",
            "valueField": "litres",
            "fontSize": 12,
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": self.sentimentHighData

        }
    }




    ngOnDestroy() {
        clearInterval(this.timer);
    }









    makeInputData(self, data) {
        self.channelData = data.all.channels.buckets;
        self.overallData = data.all.seasons.buckets
        //console.log(JSON.stringify(self.channelData));
        self.overallDataCount = self.getOverallDataCount(self.overallData);
        self.overallengagement = (self.overallDataCount*40)/1000000;
        self.overallreach  = (self.overallDataCount*70)/1000000;
        self.getAllChannelDataCount(self.channelData);
        // self.twitterDataCount = self.getTwitterDataCount(self.channelData);
        // self.instagramDataCount = self.getInstagramDataCount(self.channelData);
        // self.blogsDataCount = self.getBlogsDataCount(self.channelData);
        // self.tumblrDataCount = self.getTumblrDataCount(self.channelData);
        // self.newsDataCount = self.getNewsDataCount(self.channelData);
        // self.flickrDataCount = self.getFlickrDataCount(self.channelData);
        // self.redditDataCount = self.getRedditDataCount(self.channelData);
        // self.facebookDataCount = self.getFacebookDataCount(self.channelData);

        //console.log(self.overallDataCount );


        self.sentiments = data.all.article_sentiments.buckets
        self.sentimentHighData = self.getSentimentsData(self.sentiments)
        self.sentimentHighChart = self.getsentiments(self);


        self.source = data.all.article_source.buckets;
        self.sourceHighData = self.getSourceData(self.source)
        self.sourceHighChart = self.getSourceChart(self);

        self.article_hashtags = data.all.article_hastags.buckets
        self.hashtagsHighData = self.getHashtags(self.article_hashtags)
        self.hashtagsHighChart = self.getHashtagsChart(self,  self.hashtagsHighData)

        self.articles_tags = data.all.article_tags.buckets;
        self.tagsHighData = self.getTagsData(self.articles_tags);

        // self.tagsHighData.forEach(function (element) {
        //     element.handlers = {
        //         mouseover: function (e) {
        //             console.log("testJCloud", e);
        //             jQuery(e.currentTarget).webuiPopover({ content: 'Content', trigger: 'hover', autoHide: true });
        //         }
        //     };
        // });


        self.frequency = data.all.frequency.buckets;
        self.frequencyHighData = self.getFrequencyData(self.frequency)
        self.frequencyHighLabel = self.getFrequencyLabel(self.frequency)
        self.frequencyHighChart = self.getFrequencyChart(self)




        self.influence = data.all.influence_score.buckets;
        self.influenceHighData = self.getInfluenceData(self.influence)
        self.influenceHighChart = self.getInfluenceChart(self)
        ///console.log(self.influenceHighData)


        jQuery("#col1").jQCloud('update', self.tagsHighData, {
            autoResize: true
        });


        jQuery("#col2").jQCloud('update', self.languageHighData, {
            autoResize: true
        });

        self.options2 = self.getOption(self);
        self.options4 = self.getoptions4(self);


        self.language = data.all.article_lang.buckets;
        self.languageHighData = self.getLanguageData(self.language)
        console.log('LAN', self.languageHighData)

        //self.getd3Chart(self.languageHighData)


        self.getd3Chart(self.languageHighData, self);

    }




    makeInputChannelData(self, data) {
        self.channelData = data.all.channels.buckets;
        self.overallData = data.all.seasons.buckets


        self.sentiments = data.all.article_sentiments.buckets
        self.sentimentHighData = self.getSentimentsData(self.sentiments)
        self.sentimentHighChart = self.getsentiments(self);


        self.source = data.all.article_source.buckets;
        self.sourceHighData = self.getSourceData(self.source)
        self.sourceHighChart = self.getSourceChart(self);

        self.article_hashtags = data.all.article_hastags.buckets
        self.hashtagsHighData = self.getHashtags(self.article_hashtags)
        self.hashtagsHighChart = self.getHashtagsChart(self, self.hashtagsHighData)

        self.articles_tags = data.all.article_tags.buckets;
        self.tagsHighData = self.getTagsData(self.articles_tags)



        self.frequency = data.all.frequency.buckets;
        self.frequencyHighData = self.getFrequencyData(self.frequency)
        self.frequencyHighLabel = self.getFrequencyLabel(self.frequency)
        self.frequencyHighChart = self.getFrequencyChart(self)




        self.influence = data.all.influence_score.buckets;
        self.influenceHighData = self.getInfluenceData(self.influence)
        self.influenceHighChart = self.getInfluenceChart(self)
        console.log(self.influenceHighData)


        jQuery("#col1").jQCloud('update', self.tagsHighData, {
            autoResize: true
        });


        jQuery("#col2").jQCloud('update', self.languageHighData, {
            autoResize: true
        });

        self.options2 = self.getOption(self);
        self.options4 = self.getoptions4(self);


        self.language = data.all.article_lang.buckets;
        self.languageHighData = self.getLanguageData(self.language)
        self.getd3Chart(self.languageHighData, self);

    }


    makeallBrandsInputData(self, data) {
        self.allBrandsName = data.base.brands.buckets
        // self.allname = self.getAllBrandsDataCount(self.allBrandsName);
        self.fullPath = self.getMyPicture(self.allBrandsName)
       // self.fullPath.forEach()
        console.log('fullPath', self.fullPath)
    }


makeGameInfo(self, data) {
    self.allGameNames = data.all.match.buckets
    self.gameInfoData = self.getGameInfo(self.allGameNames)
}




maketagcloudInputData(self, data){
    self.mentioncloud = data.base.mentions.buckets
    self.brandtagcloud = self.getBrandtagcloud(self.mentioncloud)
        self.brandsentiment =  data.base.sentiment.buckets
        self.sentimentBrandData = self.getBrandSentimentsData(self.sentiments)
        self.sentimentBrandChart = self.getbrandsentimentschart(self);

    self.domain = data.base.domains.buckets;
    self.domainData = self.getDomain(self.domain)
    console.log('self.domainData', self.domainData)
    self.domainChart = self.getHashtagsChart(self, self.domainData)


  //  console.log('brandtagcloud', self.brandtagcloud)

     jQuery("#col3").jQCloud('update', self.brandtagcloud, {
            autoResize: true
        });

}



maketagData(self, data){
    self.wordcloud = data.base.top_tags.buckets;
    self.brandwordcloud = self.getBrandwordcloud(self.wordcloud)

     jQuery("#col4").jQCloud('update', self.brandwordcloud, {
            autoResize: true
        });
}


    makeSingleBrandInputData(self, data) {
        self.avgTimeSpent = data.base.avg_time_spent.value.toFixed(2)
        self.avgPagePerVisit = data.base.avg_pages_per_visit.value.toFixed(2)
        self.gtrend = data.base.frequency4.buckets;
        self.totalvisits = self.gettotalvisits( self.gtrend)
        self.visitsperday = self.getvisitsperday(self.gtrend)
        self.gtrendGrowthRate = self.getgtrendGrowthRate(self.gtrend)

          self.linegtrendData = self.getgtrendchartData(self.gtrend)
          self.linegtrendlabel = self.getgtrendchartLabel(self.gtrend)
          self.linegtrendChart = self.getbrandlinechart(self,  self.linegtrendData , self.linegtrendlabel,"Google")

       // console.log('self. growth', self.gtrendGrowthRate)
    }


      makeSingleBrand_Twitter(self, data){
          self.twitter = data.base.frequency5.buckets;
          self.twitterGrowthRate = self.getGrowthRate(self.twitter)
          self.linetwitterData = self.getlinechartData(self.twitter)
          self.linetwitterlabel = self.getlinechartLabel(self.twitter)
          self.linetwitterChart = self.getbrandlinechart(self,  self.linetwitterData , self.linetwitterlabel, "Twitter Followers")
        
        //  self.followers = data.base.frequency3.buckets;
          self.newtwitterFollower = self.getFollowersAdded(self.twitter)
            self.mentions0 = Math.round(self.newtwitterFollower*0.03)
            self.textmentions0 = Math.round(self.mentions0*0.80)
             self.imagementions0 = Math.round(self.mentions0*0.15)
             self.videomentions0 = Math.round(self.mentions0*0.05)
             self.sum0 = (  self.textmentions0 + self.imagementions0 +    self.videomentions0)
          console.log('linetwitterData',self.linetwitterData)
          console.log('linetwitterlabel',self.linetwitterlabel)
      };


      makeSingleBrand_Facebook(self, data){
          self.facebook = data.base.frequency5.buckets;
          self.facebookGrowthRate = self.getGrowthRate(self.facebook)
            self.linefacebookData = self.getlinechartData(self.facebook)
          self.linefacebooklabel = self.getlinechartLabel(self.facebook)
              self.linefacebookChart = self.getbrandlinechart(self,  self.linefacebookData , self.linefacebooklabel, "Facebook Followers" )
          //self.linetwitterChart = self.gettwitterlinechart(self,  self.linetwitterData , self.linetwitterlabel)
         // self.linefacebookChart = self.getfacebooklinechart(self)
          //  self.followers = data.base.frequency3.buckets;
          self.newfacebookFollower = self.getFollowersAdded(self.facebook)
        //    self.mentionsfacebook = (self.newfacebookFollower*0.03).toFixed(0)
              self.mentions1 = Math.round(self.newfacebookFollower*0.03)
            self.textmentions1 = Math.round(self.mentions1*0.80)
             self.imagementions1 = Math.round(self.mentions1*0.15)
             self.videomentions1 = Math.round(self.mentions1*0.05)
             self.sum1 = (self.textmentions1 + self.imagementions1+ self.videomentions1)
           console.log('linefacebookData',self.linefacebookData)
            //console.log('faceGrowthRate',self.facebookGrowthRate)
      };

      makeSingleBrand_Instagram(self, data){
          self.instagram = data.base.frequency5.buckets;
          self.instagramGrowthRate = self.getGrowthRate(self.instagram)
            self.lineinstagramData = self.getlinechartData(self.instagram)
          self.lineinstagramlabel = self.getlinechartLabel(self.instagram)
              self.lineinstagramChart = self.getbrandlinechart(self,  self.lineinstagramData , self.lineinstagramlabel, "Instagram Followers")
        //  self.lineinstagramChart = self.getinstagramlinechart(self)
         //   self.followers = data.base.frequency3.buckets;
          self.newinstagramFollower = self.getFollowersAdded(self.instagram)
            self.mentions2 = Math.round(self.newinstagramFollower*0.03)
            self.textmentions2 = "--"
             self.imagementions2 = Math.round(self.mentions2*0.75)
             self.videomentions2 = Math.round(self.mentions2*0.25)
             self.sum2 = (self.imagementions2 + self.videomentions2)
           console.log('lineinstagramData',self.lineinstagramData)
           // console.log('instaGrowthRate',self.instagramGrowthRate)
      };



getDomain(data){
     var data = data;
        var key1;
        var value1
        var valuearray = [];
        for (var i = 0; i < 10; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;
            valuearray.push({ name: key1, y: value1 })
        }
        return valuearray;
}


    getBrandSentimentsData(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = [];
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;
            valuearray.push({ name: key1, y: value1 })
        }
        return valuearray;
    }




getBrandwordcloud(data){
        var data = data;
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            var key = data[i].key;
            var value =  data[i].count.value
            valuearray.push({text: key , weight: value} )

        }
        return valuearray

}



getBrandtagcloud(data){
        var data = data;
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            var key = data[i].key;
            var value =  data[i].doc_count
            valuearray.push({text: key , weight: value} )

        }
        return valuearray

}

getGameInfo(data){
        var data = data;
        var game;
        var seasons
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            game = data[i].key;
            seasons = data[i].league.buckets;
            var seasonsName ;
            for (var j = 0; j < seasons.length; j++) {
                seasonsName = seasons[j].key;
                valuearray.push({game: game, season: seasonsName, date: null, location: null})
        }
         
        }
        return valuearray;
}



getgtrendchartData(data){
    var data = data;
      var valuearray = []
        for (var i = 0; i < data.length; i++) {
            var obj= data[i].gtrend.value
            valuearray.push(obj)
        }
        return valuearray;
}


getgtrendchartLabel(data){
    var data = data;
      var valuearray = []
        for (var i = 0; i < data.length; i++) {
            var obj= data[i].key_as_string.substring(0, 10)
            valuearray.push(obj)
        }
        return valuearray;
}






getlinechartData(data){
    var data = data;
      var valuearray = []
        for (var i = 0; i < data.length; i++) {
            var obj= data[i].brand_followers.value
            valuearray.push(obj)
        }
        return valuearray;
}


getlinechartLabel(data){
    var data = data;
      var valuearray = []
        for (var i = 0; i < data.length; i++) {
            var obj= data[i].key_as_string.substring(0, 10)
            valuearray.push(obj)
        }
        return valuearray;
}


getvisitsperday(data){
        var data = data;
 
          
    var first = data[0].cumulative.value;
    var last = data[data.length - 1].cumulative.value;
    var visitsperday = ((last- first)/(data.length*1000000)).toFixed(2)
       // sum = sum + value
        //var last = data[data.length - 1].followers_added.value;
   
       
   //  console.log('visitsperday', visitsperday)
        return visitsperday;
}

gettotalvisits(data){
    var data = data;
    var first = data[0].cumulative.value;
    var last = data[data.length - 1].cumulative.value;
    var totalvisits = ((last- first)/1000000).toFixed(2)
    return totalvisits
}

getFollowersAdded(data){
    var data = data;
    var sum = 0;
     
        var first = data[0].brand_followers.value;
        var last = data[data.length - 1].brand_followers.value;
       // sum = sum + value
        //var last = data[data.length - 1].followers_added.value;
        var val = (last - first) 
       
   //  console.log('added', val)
        return val;
}



getGrowthRate(data){
         var data = data;
        var first = data[0].brand_followers.value;
        var last = data[data.length - 1].brand_followers.value;
         //   console.log('last',last)
        var val = (((last - first) / first) * 100).toFixed(2)
     
        var growthrate = {
            value: val,
            status: ((last > first) ? true : false)
        }
     //   console.log('first',first)
    
        return growthrate;
}





    getgtrendGrowthRate(data) {
        var data = data;
        var first = data[0].gtrend.value;
        var last = data[data.length - 1].gtrend.value;
            console.log('last',last)
        var val = (((last - first) / first) * 100).toFixed(2)
        var growthrate = {
            value: val,
            status: ((last > first) ? true : false)
        }
        console.log('first',first)
    
        return growthrate;
    }







    getInfluenceData(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key_as_string;
            value1 = data[i].uniqueness.value;
            valuearray.push(value1)
        }
        //  valuearray.push(valuearray1)
        console.log('influ', valuearray)
        return valuearray;
    }



    getFrequencyLabel(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key_as_string;
            value1 = data[i].doc_count;
            var keystring = key1.substring(0, 10)
            valuearray.push(keystring)
        }
        //  valuearray.push(valuearray1)

        return valuearray;
    }





    getFrequencyData(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = []
        var engagedarray = [];
        var nonengagedarray = [];
        var fullarray = [];
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;
            var label1 = "Overall"
            valuearray.push(value1)
            var obj = data[i].user_engagements.buckets
            for (var j = 0; j < obj.length; j++) {
                if (obj[j].key_as_string === 'true') {
                    var label2 = "Engaged"
                    engagedarray.push(obj[j].doc_count)
                }
                else {
                    var label3 = "UnEngaged"
                    nonengagedarray.push(obj[j].doc_count)
                }
            }

        }
        fullarray.push({ name: label1, data: valuearray }, { name: label2, data: engagedarray }, { name: label3, data: nonengagedarray })

        return fullarray;
    }



    getLanguageData(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = []
        for (var i = 0; i < (data.length) / 3; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;

            valuearray.push({ id: key1, value: value1 })
        }
        //  valuearray.push(valuearray1)

        return valuearray;
    }


    getTagsData(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;

            valuearray.push({ text: key1, weight: value1 })
        }
        //  valuearray.push(valuearray1)
        //   console.log('valuearray', JSON.stringify(valuearray));
        return valuearray;
    }



    getHashtags(data) {
        var color = ['#3b5998', '#e9573f', '#f6bb42', '#00b1e1', '#37bc9b', '#8cc152', '#db4b3a']
        var data = data;
        var key1;
        var value1
        var value_kilos;
        var valuearray = []
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;

            valuearray.push([key1, value1])
        }
        //  valuearray.push(valuearray1)
        console.log('valuearray', JSON.stringify(valuearray));
        return valuearray;
    }








    getSourceData(data) {
        var color = ['#3b5998', '#e9573f', '#f6bb42', '#00b1e1', '#37bc9b', '#8cc152', '#db4b3a']
        var data = data;
        var key1;
        var value1
        var valuearray = [];
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;
            valuearray.push({ name: key1, value: value1, color: color[i] })
        }
        return valuearray;
    }


    getSentimentsData(data) {
        var data = data;
        var key1;
        var value1
        var valuearray = [];
        for (var i = 0; i < data.length; i++) {
            key1 = data[i].key;
            value1 = data[i].doc_count;
            valuearray.push({ name: key1, y: value1 })
        }
        return valuearray;
    }


    getOverallDataCount(data) {
        var data = data;
        var obj;
        var overallDataCount;
        overallDataCount = data[0].doc_count;
        return overallDataCount;
    }


    // getAllBrandsDataCount(data) {
    //     var name_array = [];
    //     let self = this;
    //     var data = data;


    //     for (var i = 0; i < data.length; i++) {
    //         name_array.push(data[i].key);
    //     }
    //     return name_array
    // }


    getMyPicture(data) {
        var name_array = [];
        let self = this;
        var data = data;


        for (var i = 0; i < data.length; i++) {
            var name = data[i].key
            var fullPath = "./assets/img/app/brands/" + data[i].key + ".png";
            name_array.push({ name: name, fullpath: fullPath });
        }
        return name_array

    }


    getAllChannelDataCount(data) {
        let self = this;
        var data = data;
        var name;
        var count;

        for (var i = 0; i < data.length; i++) {
            name = data[i].key;
            count = data[i].doc_count;

            if (name == "flickr") {
                self.flickrDataCount = count;
            } else if (name == "Twitter") {
                self.twitterDataCount = count;
            } else if (name == "blogs") {
                self.blogsDataCount = count;
            } else if (name == "news") {
                self.newsDataCount = count;
            } else if (name == "tumblr") {
                self.tumblrDataCount = count;
            } else if (name == "facebook") {
                self.facebookDataCount = count;
            } else if (name == "reddit") {
                self.redditDataCount = count;
            } else if (name == "instagram") {
                self.instagramDataCount = count;
            }
        }

    }














    getHighLanValue(data) {
        var data = data;
        var value = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0,10,220,0.5)', 'rgba(220,0,10,0.5)', 'rgba(220,0,0,0.5)', 'rgba(120,250,120,0.5)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'];

        for (var i = 0; i < data.length; i++) {

            var random1 = Math.round(Math.random() * 30 + 2);
            var random2 = Math.round(Math.random() * 20 + 1);

            var obj = data[i];
            value.push({ x: random1, y: random2, name: obj.key, z: obj.doc_count, color: color[i] });
            //console.log(random)
        }

        return value;

    }


    private svg;
    private width;
    private height;
    private format;
    private color;
    private pack;

    getd3ChartInit() {
        let self = this;
        self.svg = d3.select("svg");
        self.width = +self.svg.attr("width");
        self.height = +self.svg.attr("height");

        self.format = d3.format(",d");
        self.color = d3.scaleOrdinal(d3.schemeCategory20c);
        self.pack = d3.pack()
            .size([self.width, self.height])
            .padding(1.5);

    }

    getd3Chart(data, self) {

        var sumOfValue = 0;

        var classes = data;

        var root = d3.hierarchy({ children: classes })
            .sum(function (d: any) { return d.value; })
            .each(function (d: any) {
                if (d.data.id) {
                    var id = d.data.id;
                    d.id = id;
                    d.package = id;
                    d.class = id;
                }
            });

        var node = self.svg.selectAll(".node")
            .data(self.pack(root).leaves())
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("circle")
            .attr("id", function (d) { return d.id; })
            .attr("r", function (d) { return d.r; })
            .style("fill", function (d: any) { return self.color(d.package); });

        node.append("clipPath")
            .attr("id", function (d) { return "clip-" + d.id; })
            .append("use")
            .attr("xlink:href", function (d) { return "#" + d.id; });

        node.append("text")
            .attr("clip-path", function (d) { return "url(#clip-" + d.id + ")"; })
            .selectAll("tspan")
            .data(function (d: any) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
            .enter().append("tspan")
            .attr("x", 0)
            .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
            .text(function (d: any) { return d; });

        node.append("title")
            .text(function (d) { return d.id + "\n" + self.format(d.value); });
    }




    getHighChartValue(data) {
        var color = ['#50B432', '#DDDF00', '#ED561B'];
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];

            value.push({ name: obj.key, y: obj.doc_count, color: color[i] });
        }
        console.log(JSON.stringify(value))
        return value;

    }







    private getbrandsentimentschart(self) {
        var data_json = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'

            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: ' <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                    }
                }
            },
            series: [{
                name: '',
                colorByPoint: true,
                data: self.sentimentBrandData
            }]
        }
        return data_json
    }

















 //self.linetwitterData , self.linetwitterlabel
private getbrandlinechart(self, data, label, media){
            var data_json = {
   chart: {
                type: 'line',
                width: 900,
                height: 300
            },
   title: {
        text: media + " Trends"
    },

    subtitle: {
        text: ''
    },
       xAxis: {
                categories:label,
                title: {
            text: 'Date'
        }
            },

    yAxis: {
        title: {
            text: 'Followers'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
           line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
    },

    series: [{
        showInLegend: false,   
        name: 'Followers',
        data: data
    }]



            }
        return data_json;
}










    private getInfluenceChart(self) {
        var data_json = {
            chart: {
                type: 'spline',
                width: 1500
            },
            title: {
                text: ''
            },

            xAxis: {
                type: ' ',
                categories: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                labels: {
                    overflow: 'justify'
                },
                plotBands: [{ // Light air
                    from: 0,
                    to: 1,
                    color: 'rgba(60,179,113, 0.1)',
                    label: {
                        text: 'Zero  Influence',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Light breeze
                    from: 1,
                    to: 3,
                    color: 'rgba(60,179,113, 0.2)',
                    label: {
                        text: 'Low Influence',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Gentle breeze
                    from: 3,
                    to: 6,
                    color: 'rgba(60,179,113, 0.3)',
                    label: {
                        text: 'Medium Influence',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Gentle breeze
                    from: 6,
                    to: 9,
                    color: 'rgba(60,179,113, 0.5)',
                    label: {
                        text: 'High Influence',
                        style: {
                            color: '#606060'
                        }
                    }
                }
                ]
            },

            yAxis: {
                title: {
                    text: 'Frequency'
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,

            },
            tooltip: {
                valueSuffix: '',
                crosshairs: [true]
            },

            series: [{
                name: 'Number of Fans',
                data: self.influenceHighData

            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        }
        return data_json
    }










    private getFrequencyChart(self) {
        var data_json = {




            chart: {
                type: 'line',
                width: 1500
            },
            title: {
                text: ''

            },

            xAxis: {
                categories: self.frequencyHighLabel
            },
            yAxis: {
                title: {
                    text: 'Frequency '
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: self.frequencyHighData
        }
        return data_json
    }




    // private getLanguage(self) {
    //     var data_json = {

    //         chart: {
    //             plotBackgroundColor: null,
    //             plotBorderWidth: 0,
    //             plotShadow: false
    //         },
    //         title: {
    //             text: 'Browser<br>shares<br>2015',
    //             align: 'center',
    //             verticalAlign: 'middle',
    //             y: 40
    //         },
    //         tooltip: {
    //             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //         },
    //         plotOptions: {
    //             pie: {
    //                 dataLabels: {
    //                     enabled: true,
    //                     distance: -50,
    //                     style: {
    //                         fontWeight: 'bold',
    //                         color: 'white'
    //                     }
    //                 }

    //             }
    //         },
    //         series: [{
    //             type: 'pie',
    //             name: 'Browser share',
    //             innerSize: '50%',
    //             data: self.languageHighData
    //         }]
    //     }
    //     return data_json
    // }





    private getfakesentiments(self) {
        var data_json = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'

            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: ' <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                    }
                }
            },
            series: [{
                name: '',
                colorByPoint: true,
                data: self.sentimentHighData
            }]
        }
        return data_json
    }







    private getsentiments(self) {
        var data_json = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'

            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: ' <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                    }
                }
            },
            series: [{
                name: '',
                colorByPoint: true,
                data: self.sentimentHighData
            }]
        }
        return data_json
    }



    private getSourceChart(self) {
        var data_json = {
            colorAxis: {
                minColor: '#FFFFFF',
                maxColor: '#fff'
            },
            chart: {
                width: 700

            },
            series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',
                data: self.sourceHighData
            }],
            title: {
                text: ''
            }
        }
        return data_json
    }



    private getHashtagsChart(self, data) {
        var data_json = {
            chart: {
                type: 'column',
                width: 650
            },
            title: {
                text: ''
            },
            subtitle: {
                //   text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Tags Count'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: ' Tags Count: <b>{point.y:.1f} </b>'
            },
            series: [{
                name: 'Hashtags',
                data: data,
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: ['#3b5998', '#e9573f', '#f6bb42', '#00b1e1', '#37bc9b', '#8cc152', '#db4b3a'],
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        }
        return data_json
    }
    // private optionsentiments = {
    //  chart: {
    //         plotBackgroundColor: null,
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: 'pie'
    //     },
    //     title: {
    //        // text: 'Browser market shares January, 2015 to May, 2015'
    //     },
    //     tooltip: {
    //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //     },
    //     plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             dataLabels: {
    //                 enabled: true,
    //                 format: '<b>{point.name}</b>: {point.percentage:.1f} %',
    //                 style: {
    //                     color: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)']
    //                 }
    //             }
    //         }
    //     },
    //     series: [{
    //         name: 'Brands',
    //         colorByPoint: true,
    //         data: [{
    //             name: 'Postive',
    //             y: 60
    //         }, {
    //             name: 'Negative',
    //             y: 25,
    //             sliced: true,
    //             selected: true
    //         }, {
    //             name: 'Neutral',
    //             y: 15
    //         }]
    //     }]
    // }















    private optionLanguage = {
        chart: {
            type: 'bubble',
            //  plotBorderWidth: 1,
            zoomType: 'xy',
            width: 700
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Distribution by Language'
        },



        xAxis: {
            // gridLineWidth: 1,
            title: {
                //  text: 'Daily fat intake'
            },
            labels: {
                //    format: '{value} gr',
                enabled: false
            }
            // plotLines: [{
            //     color: 'black',
            // //    dashStyle: 'dot',
            //    // width: 2,
            //     value: 65,
            //     label: {
            //         rotation: 0,
            //         y: 15,
            //         style: {
            //             fontStyle: 'italic'
            //         },
            //        // text: 'Safe fat intake 65g/day'
            //     },
            //     zIndex: 3
            // }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,

            labels: {
                //  format: '{value} ',
                enabled: false
            },
            maxPadding: 0.2,
            // plotLines: [{
            //     color: 'black',
            //     dashStyle: 'dot',

            //     value: 50,
            //     label: {
            //         align: 'right',
            //         style: {
            //             fontStyle: 'italic'
            //         },

            //         x: -10
            //     },
            //     zIndex: 3
            // }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Count:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            data: [
                { x: 95, y: 95, z: 43.8, name: 'ENG', country: 'English' },
                { x: 86.5, y: 102.9, z: 4.7, name: 'HIN', country: 'Hindi' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'French' },
                { x: 80.4, y: 102.5, z: 2, name: 'URDU', country: 'Urdu' },
                { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Swedish' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spainanse' },
                { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'French' },


                { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italian' },
                { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russian' },

            ]
        }]
    }




    private options3 = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Height Versus Weight of 507 Individuals by Gender'
        },
        subtitle: {
            text: 'Source: Heinz  2003'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Height (cm)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Weight (kg)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Female',
            color: 'rgba(223, 83, 83, .5)',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
            [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
            [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
            [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
            [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
            [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
            [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
            [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
            [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
            [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
            [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
            [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
            [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
            [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
            [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
            [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
            [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
            [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
            [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
            [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
            [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
            [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
            [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
            [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
            [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
            [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
            [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

        }, {
            name: 'Male',
            color: 'rgba(119, 152, 191, .5)',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
            [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
            [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
            [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
            [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
            [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
            [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
            [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
            [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
            [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
            [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
            [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
            [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
            [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
            [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
            [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
            [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
            [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
            [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
            [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
            [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
            [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
            [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
            [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
            [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
            [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
            [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
            [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
            [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
            [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
            [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
            [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
            [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
            [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
            [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
            [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
            [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
            [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
            [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
            [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
            [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
            [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
            [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
            [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
            [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
            [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
            [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
            [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
            [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
            [180.3, 83.2], [180.3, 83.2]]
        }]
    }




    private options5 = {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 100,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 30,
                color: '#55BF3B' // green
            }, {
                from: 30,
                to: 60,
                color: '#DDDF0D' // yellow
            }, {
                from: 60,
                to: 100,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    }



    private getoptions4(self) {
        var data_json = {

            chart: {
                type: 'solidgauge',
                marginTop: 50
            },

            title: {
                text: 'Activity',
                style: {
                    fontSize: '24px'
                }
            },

            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                positioner: function (labelWidth) {
                    return {
                        x: 300 - labelWidth / 2,
                        y: 180
                    };
                }
            },

            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{ // Track for Move
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderWidth: 0
                }, { // Track for Exercise
                    outerRadius: '87%',
                    innerRadius: '63%',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 0
                }, { // Track for Stand
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: 'rgba(219, 50, 54, 0.2)',
                    borderWidth: 0
                }]
            },

            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'round',
                    stickyTracking: false,
                    rounded: true
                }
            },

            series: [{
                name: 'Neutral',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                data: [{
                    color: 'rgba(255, 206, 86, 0.8)',
                    radius: '112%',
                    innerRadius: '88%',
                    y: self.dataValues4[0]
                }]
            }, {
                name: 'Positive',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                data: [{
                    color: 'rgba(75, 192, 192, 0.8)',
                    radius: '87%',
                    innerRadius: '63%',
                    y: self.dataValues4[1]
                }]
            }, {
                name: 'Negative',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                data: [{
                    color: 'rgba(219, 50, 54, 0.8)',
                    radius: '62%',
                    innerRadius: '38%',
                    y: self.dataValues4[2]
                }]
            }]
        }
        return data_json;
    }








    function(chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    }























    private getOption(self) {
        var data_json = {


            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: self.dataValues2,

        }
        return data_json;
    }



    // private getDeviceData = {
    //     colorAxis: {
    //         minColor: '#FFFFFF',
    //         maxColor: '#fff'
    //     },
    //         chart: {
    //        width:700

    //     },
    //     series: [{
    //         type: 'treemap',
    //         layoutAlgorithm: 'squarified',
    //         data: [{
    //             name: 'Iphone',
    //             value: 122336,
    //             color: '#FF8787'
    //         }, {
    //             name: 'Android',
    //             value: 131336,
    //             color:  '#8cc152'
    //         }, {
    //             name: 'Desktop',
    //             value: 13234,
    //             color: '#3b5998'
    //         }, {
    //             name: 'Webclient',
    //             value: 67853,
    //             color: '#e9573f'
    //         }, {
    //             name: 'windows',
    //             value: 54652,
    //             color: '#f6bb42'
    //         }, {
    //             name: 'deck',
    //             value: 3432,
    //             color:  '#00b1e1'
    //         },{
    //             name: 'ipad',
    //             value: 13532,
    //             color:  '#db4b3a'
    //         }, {
    //             name: 'twitterFeeds',
    //             value: 256677,
    //             color: '#37bc9b'
    //         }
    //       ]
    //     }],
    //     title: {
    //         text: 'Tweets Source'
    //     }
    // }








    // private getoptions7(self) {
    //     var data_json=  {
    //       chart: {
    //         type: 'bubble',
    //       //  plotBorderWidth: 1,
    //         zoomType: 'xy',
    //          width: 700
    //     },   

    //     legend: {
    //         enabled: false
    //     },

    //     title: {
    //         text: 'Distribution by Language'
    //     },



    //     xAxis: {
    //        // gridLineWidth: 1,
    //         title: {
    //          //  text: 'Daily fat intake'
    //         },
    //         labels: {
    //         //    format: '{value} gr',
    //              enabled: true
    //         }
    //         // plotLines: [{
    //         //     color: 'black',
    //         // //    dashStyle: 'dot',
    //         //    // width: 2,
    //         //     value: 65,
    //         //     label: {
    //         //         rotation: 0,
    //         //         y: 15,
    //         //         style: {
    //         //             fontStyle: 'italic'
    //         //         },
    //         //        // text: 'Safe fat intake 65g/day'
    //         //     },
    //         //     zIndex: 3
    //         // }]
    //     },

    //     yAxis: {
    //         startOnTick: false,
    //         endOnTick: false,

    //         labels: {
    //           //  format: '{value} ',
    //              enabled: false
    //         },
    //         maxPadding: 0.2,
    //         // plotLines: [{
    //         //     color: 'black',
    //         //     dashStyle: 'dot',

    //         //     value: 50,
    //         //     label: {
    //         //         align: 'right',
    //         //         style: {
    //         //             fontStyle: 'italic'
    //         //         },

    //         //         x: -10
    //         //     },
    //         //     zIndex: 3
    //         // }]
    //     },

    //     tooltip: {
    //         useHTML: true,
    //         headerFormat: '<table>',
    //         pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
    //             '<tr><th>Count:</th><td>{point.z}</td></tr>',
    //         footerFormat: '</table>',
    //         followPointer: true
    //     },

    //     // plotOptions: {
    //     //     series: {
    //     //         dataLabels: {
    //     //             enabled: false,
    //     //             format: '{point.name}'
    //     //         }
    //     //     }
    //     // },

    //     series: [{
    //         data: self.languageHighData
    //     }]
    // }
    // return data_json
    // }









    // getBackHome(){
    //   console.log('click');
    //   let self = this;  
    // self.requestLeague(self);
    // }

    // requestLeague(self){
    //   this._httpService.GetHttp("select_all")
    //             .subscribe(
    //             (data) => {
    //              //console.log(data)
    //             self.makeInputData(self,data);
    //             },
    //             (error) => {
    //                console.log(error);
    //             }
    //             );
    // }



    // this._httpService.GetHttp("channel"){
    //             .subscribe(
    //             (data2) => {
    //               self.selectedChannel = data2[0];
    //               self.transformationChannalDropdown(data2, self);

    //             },
    //             (error) => {
    //                console.log(error);
    //             }
    //             )
    // }



    requestallBrands(self) {

        self._httpService.GetHttp("gtrend_all")
            .subscribe(
            (data) => {
                console.log('gtrends', data)
                self.makeallBrandsInputData(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }


requestGameInfo(self) {

        self._httpService.GetHttp("game_info")
            .subscribe(
            (data) => {
             //   console.log('game_info', data)
                self.makeGameInfo(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }


    requestSingleBranddata(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "gtrend_brand")
            .subscribe(
            (data) => {
                console.log(data)
                self.makeSingleBrandInputData(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }


    requesttagclouddata(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "fake_tags")
            .subscribe(
            (data) => {
                console.log(data)
                self.maketagcloudInputData(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }



    requesttag(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "indvseng_tags")
            .subscribe(
            (data) => {
                console.log(data)
                self.maketagData(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }

 
 requestSingleBrand_Mediadata(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "select_gtrend")
            .subscribe(
            (data) => {
                console.log(data)
                self.makeSingleBrand_Twitter(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }

 requestSingleBrand_Mediadata1(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "select_gtrend")
            .subscribe(
            (data) => {
                console.log(data)
             self.makeSingleBrand_Facebook(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }


     requestSingleBrand_Mediadata2(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "select_gtrend")
            .subscribe(
            (data) => {
                console.log(data)
             self.makeSingleBrand_Instagram(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }

    requestLeaguedata(post_data, self) {

        //  console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "select_league_match")
            .subscribe(
            (data) => {
                console.log(data)
                self.makeInputData(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }

    requestMedia(post_data, self) {
        console.log(JSON.stringify(post_data))
        self._httpService.PostHttp(JSON.stringify(post_data), "select_media")
            .subscribe(
            (data) => {
                console.log(data)
                self.makeInputChannelData(self, data);
            },
            (error) => {
                console.log(error);
            }

            );
    }


    getLineLabel(data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            //console.log(JSON.stringify(obj.key_as_string));
            label.push(obj.key_as_string);
        }
        return label;
    }

    getLineValueTrue(data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var data_count = obj.data_ins.buckets
            for (var j = 0; j < data_count.length; j++) {
                var obj1 = data_count[j];
                if (obj1.key_as_string == 'true') {
                    value.push(obj1.doc_count);
                }
            }

        }
        return value;
    }

    getLineValueFalse(data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var data_count = obj.data_ins.buckets
            for (var j = 0; j < data_count.length; j++) {
                var obj1 = data_count[j];
                if (obj1.key_as_string == 'false') {
                    value.push(obj1.doc_count);
                }
            }

        }
        return value;
    }



    getLanguageLabel(data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            //console.log(JSON.stringify(obj.key));
            label.push(obj.key);
        }
        return label;
    }

    getLanguageValue(data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            value.push(obj.doc_count);
        }
        return value;
    }

    formatDate(date) {
        var d = new Date(date);
        var nowEpoch = Date.now();
        console.log("epoc now ", nowEpoch);
        var epoc = (d.getTime() - d.getSeconds());
        return epoc;
    }



    ProcessTwitt_Data(data2, self) {

        if (data2.hasOwnProperty("top_articles")) {
            self.url_1 = "https://twitter.com/AMAs/status/800378679536676864";
            self.url_2 = "https://twitter.com/AMAs/status/800458706823561216";
            self.url_3 = "https://twitter.com/AMAs/status/800466263034109952";
            self.url_4 = "https://twitter.com/AMAs/status/800443605223501824";

            self.mapData = self.getMapLocationData(data2.article_locations, self);
            self.transformationLocation(self.mapData, self);
        };

    }



    getResponsive(padding, offset) {
        return this._leagueService.getResponsive(padding, offset);
    }




    //   OnChangeDate() {
    //     let self = this;
    //     let post_data= {};
    //     if(self.start_date !== "" ||  self.end_date !=="") {
    //       post_data = {"gte":"1480591800547","lte":"1485775800547"}
    //       self.requestLeagueWithDate(self,post_data);
    //      } else{
    //         post_data = {"gte":self.start_date,"lte":self.end_date}
    //         self.requestLeagueWithDate(self,post_data);
    //   }

    // }


    //    private selectDate(value: any, dateInput: any) {
    //       let self = this;
    //        dateInput.start = value.start;

    //        dateInput.end = value.end;
    //        self.start_date = this.formatDate(dateInput.start);
    //        console.log('das',self.start_date);

    //        self.end_date = this.formatDate(dateInput.end);
    //        console.log('end' ,self.end_date);
    //        self.OnChangeDate()


    //        }






    //   OnChangeBrand() {
    //      let self = this;
    //      self.OnChangeDate();
    //   }



    //   OnChangeChannel() {
    //     let self = this;
    //     self.OnChangeDate();

    //   }

    // events
    public chartClicked(e: any): void {
        //console.log(e);
    }

    public chartHovered(e: any): void {
        //console.log(e);
    }

    //   public chartSentimentalClicked(e:any):void{
    //     let self = this;
    //      self.sentimental_data = e.active[0]._model.label;
    //     self.makeRequest(self);
    //   }

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    public articleChartOptions: any = {
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [{
                display: false
            }]
        },
        responsive: true
    };

    public randomize(): void {


    }

    getChartLabel(data) {
        var data = data;
        var label = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            label.push(obj.key);
        }
        return label;
    }



    getChartValue(data) {
        var data = data;
        var value = [];
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            value.push(obj.doc_count);
        }
        return value;
    }



    getChartPercentageValue(data) {
        var data = data;
        var value = []
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            sum = sum + obj.doc_count;
        }

        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var percent = Math.round((obj.doc_count / sum) * 100);
            var per = percent

            value.push(per);
        }
        console.log(value);
        return value;

    }

    getMapLocationData(result, self) {


        var mapResult = [];

        for (var key in result) {
            if (key !== "") {
                var data = self.getMapData(key, result[key]);
                mapResult.push(data);
            }

        }

        return mapResult;


    }



    ngAfterViewInit() {
        !function (d, s, id) {
            var js: any,
                fjs = d.getElementsByTagName(s)[0],
                p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }
            (document, "script", "twitter-wjs");




    }

    getMapData(key, value) {
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



    }


    transformationLocation(mapdata, self) {
        self.inputdata = mapdata;
        self.chartData = self.getDataWithParam(self.inputdata);
        let chart = AmCharts.makeChart(this._selector.nativeElement, self.chartData);
    }


    transformationDateDropdown(result, self) {
        var sampleObject = [];
        result.forEach(function (element) {
            var sO = {
                name: element,
                date: element
            };
            sampleObject.push(sO);
        });


        self.dropDownDate = sampleObject;

    }



    // transformationChannalDropdown(result,self){
    //     var sampleObject =[];
    //     var c_name;
    //     result.forEach(function(element){


    //       if(element ==='reddit'){ c_name ='Reddit'; }
    //       if(element ==='facebook'){ c_name ='Facebook'; }
    //       if(element ==='tumblr'){ c_name ='Tumblr'; }
    //       if(element ==='flickr'){ c_name ='Flickr'; }
    //       if(element ==='news'){ c_name ='News'; }
    //       if(element ==='all_media_stat'){ c_name ='All'; }
    //       if(element ==='twitter'){ c_name ='Twitter'; }
    //       if(element ==='Plus'){ c_name ='Plus'; }
    //       if(element ==='blogs'){ c_name ='Blogs'; }


    //       var sO={
    //         name: c_name,
    //         channel: element
    //       };
    //       sampleObject.push(sO);
    //     });


    //     self.dropDownChannel = sampleObject;
    // }



    // transformationBrandDropdown(result,self){
    //     var sampleObject =[];
    //     result.forEach(function(element){
    //       var sO={
    //         name: element,
    //         brand: element
    //       };
    //       sampleObject.push(sO);
    //     });


    //     self.dropDownBrand = sampleObject;
    // }

    // makeHasTagInput(result){

    //   var cloud =[];
    // for (var i = 0; i < 10; i++) { 
    //   var data_lb = result[i];

    //     cloud.push(data_lb);
    // }
    // return cloud;
    // }

    makeReachInput(result) {

        var cloud = [];
        for (var i = 0; i < 20; i++) {
            var data_lb = result[i];

            cloud.push(data_lb);
        }
        return cloud;
    }











    getDataWithParam(mapdata, self) {


        let layoutColors = this._baConfig.get().colors;
        let latlong = {};
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

        let oldData = mapdata;
        let mapData = []
        for (var key in oldData) {
            if (oldData[key] === "" || oldData[key] === null || oldData[key] === undefined) {
                delete oldData[key];

            } else {
                mapData.push(oldData[key]);

            }
        }

        //console.log(JSON.stringify(mapData));
        let minBulletSize = 3
            , maxBulletSize = 70
            , min = Infinity
            , max = -Infinity;

        // get min and max values
        for (let i = 0; i < mapData.length; i++) {

            var value = mapData[i].value;
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }


        }


        let dataProvider = {
            mapVar: AmCharts.maps.worldLow,
            images: []
        };

        var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

        // create circle for each country
        for (let i = 0; i < mapData.length; i++) {
            let dataItem = mapData[i];
            let value = dataItem.value;
            // calculate size of a bubble
            let square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
            if (square < minSquare) {
                square = minSquare;
            }
            let size = Math.sqrt(square / (Math.PI * 2));
            let id = dataItem.code;



            dataProvider.images.push({
                type: 'circle',
                width: size,
                height: size,
                color: dataItem.color,
                longitude: latlong[id].longitude,
                latitude: latlong[id].latitude,
                title: dataItem.name,
                value: value
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
            pathToImages: layoutPaths.images.amMap
        };
    }


}