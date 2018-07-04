// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { Humitmp } from './mock-data';
// // import * as echarts from 'echarts';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'app';
//   dataSet = Humitmp;
//   // allDataSet: any;
//   testData = [];
//   time = [];
//   humidity = [];
//   temperature = [];
//   barData = [21, 77];
//   lineData = [50, 10, 50, 50, 50];
//   outlineData = [150, 110];
//   fileCharts: any;
//   constructor(
//     private dataService: DataService
//   ) { }
//   randomData() {
//     let now;
//     // tslint:disable-next-line:prefer-const
//     let oneDay;
//     now = new Date(+now + oneDay);
//     let value;
//     value = value + Math.random() * 21 - 10;
//     return {
//         name: now.toString(),
//         value: [
//             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
//             Math.round(value)
//         ]
//     };
// }
//   ngOnInit(): void {
//     // this.readTxt();
//     const echarts = require('echarts');
//     // 基于准备好的dom，初始化echarts实例
//     const myChart = echarts.init(document.getElementById('main'));
//     const publicOpinion = echarts.init(document.getElementById('publicOpinion'));
//     const testCharts = echarts.init(document.getElementById('test'));
//     this.fileCharts = echarts.init(document.getElementById('file'));
//     this.dataService.getData().subscribe(val => {
//       for (let i = 1; i < val.length; i++) {
//         const b = val[i].value.split(':');
//         const c = b[1].split('-');
//         const humidity = c[0];
//         const temperature = c[1];
//         const time = this.formatDate(new Date(Number(b[0])));
//         // const time = new Date(Number(b[0]));
//         this.time.push(time);
//         this.humidity.push(Number(humidity));
//         this.temperature.push(Number(temperature));
//       }
//     console.log(this.time);
//     myChart.setOption({
//             title: {
//         text: '折线图堆叠'
//       },
//       tooltip: {
//         trigger: 'axis'
//       },
//       legend: {
//         data: ['温度', '湿度']
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//       },
//       toolbox: {
//         feature: {
//           saveAsImage: {}
//         }
//       },
//       xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: this.time
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           name: '温度',
//           type: 'line',
//           data: this.temperature
//         },
//         {
//           name: '湿度',
//           type: 'line',
//           data: this.humidity
//         }
//       ]
//     });
//     });
//     // console.log(this.humidity);
//     // console.log(this.temperature);
//     publicOpinion.setOption({
//       'title': {
//         'text': ''
//       },
//       'backgroundColor': '#101a3c',
//       'grid': {
//         'left': '10%',
//         'top': 10,
//         'bottom': 10
//       },
//       'tooltip': {
//         'trigger': 'item',
//         'textStyle': {
//           'fontSize': 12
//         },
//         'formatter': '{b0}:{c0}'
//       },
//       'xAxis': {
//         'max': 300,
//         'splitLine': {
//           'show': false
//         },
//         'axisLine': {
//           'show': false
//         },
//         'axisLabel': {
//           'show': false
//         },
//         'axisTick': {
//           'show': false
//         }
//       },
//       'yAxis': [
//         {
//           'type': 'category',
//           'inverse': false,
//           'data': [
//             '山西',
//             '四川',
//           ],
//           'axisLine': {
//             'show': false
//           },
//           'axisTick': {
//             'show': false
//           },
//           'axisLabel': {
//             'margin': -4,
//             'textStyle': {
//               'color': '#fff',
//               'fontSize': 16.25
//             }
//           }
//         },
//       ],
//       'series': [
//         {
//           'type': 'pictorialBar',
//           symbol: 'rect',
//           'symbolRepeat': true,
//           'symbolMargin': '5%',
//           'symbolClip': true,
//           'symbolSize': 22.5,
//           'symbolOffset': [
//             20,
//             0
//           ],
//           'data': [
//             23,
//             42,
//           ],
//         },
//         {
//           'type': 'pictorialBar',
//           'itemStyle': {
//             'normal': {
//               'opacity': 0.3
//             }
//           },
//           'label': {
//             'normal': {
//               'show': false
//             }
//           },
//           'animationDuration': 0,
//           'symbolRepeat': 'fixed',
//           'symbolMargin': '5%',
//           symbol: 'rect',
//           'symbolSize': 22.5,
//           'symbolBoundingData': 300,
//           'symbolPosition': 'start',
//           'symbolOffset': [
//             20,
//             0
//           ],
//           'data': [
//             23,
//             42,
//           ],
//           'z': 5
//         }
//       ]
//     });
//     testCharts.setOption({
//       backgroundColor: '#000',
//       color: ['#5490CB', '#CCCCCC'],
//       tooltip: {
//         trigger: 'item',
//         formatter: '数量:{c0}',
//         backgroundColor: 'rgba(255,255,255,0.7)',
//         borderColor: '#458CDC',
//         borderWidth: 1,
//         borderRadius: 0,
//         textStyle: {
//           color: '#333',
//         },
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//       },
//       xAxis: {
//         name: '（件）',
//         type: 'value',
//         axisLine: {
//           lineStyle: {
//             color: '#fff'
//           }
//         },
//         splitLine: {
//           show: false
//         }
//       },
//       yAxis: {
//         type: 'category',
//         data: ['学校管理', '旅馆管理', '危爆管理', '物流寄递页', '精神病人管理', '娱乐场所', '保安监管', '油气管理', '重点人员管理'],
//         axisTick: {
//           alignWithLabel: true
//         },
//         axisLine: {
//           lineStyle: {
//             color: '#fff'
//           }
//         },
//         axisLabel: {
//           color: '#fff',
//           fontSize: 14
//         },
//         splitLine: {
//           show: false
//         }
//       },
//       series: [{
//         type: 'bar',
//         data: [320, 730, 815, 323, 630, 415, 723, 830, 715],
//         barWidth: '30%',
//         barGap: '200%',
//         barMaxWidth: '40px',
//         label: {
//           normal: {
//             show: true,
//             position: 'right',
//             formatter: '{c}',
//             color: '#fff',
//             fontSize: 14
//           }
//         },
//         itemStyle: {
//           normal: {
//             barBorderRadius: 50,
//             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
//               offset: 0,
//               color: '#00A0FD'
//             }, {
//               offset: 0.8,
//               color: '#B0DD5B'
//             }], false)
//           }
//         }
//       }],
//     });
//   }
//   formatDate(date) {
//     const myyear = date.getFullYear();
//     let mymonth = date.getMonth() + 1;
//     let myweekday = date.getDate();
//     let myhour = date.getHours();
//     let mymini = date.getMinutes();
//     let mysecond = date.getSeconds();
//     if (mymonth < 10) {
//       mymonth = '0' + mymonth;
//     }
//     if (myweekday < 10) {
//       myweekday = '0' + myweekday;
//     }
//     if (myhour < 10) {
//       myhour = '0' + myhour;
//     }
//     if (mymini < 10) {
//       mymini = '0' + mymini;
//     }
//     if (mysecond < 10) {
//       mysecond = '0' + mysecond;
//     }
//     return (myyear + '-' + mymonth + '-' + myweekday + ' ' + myhour + ':' + mymini + ':' + mysecond);
//   }
// }\
/**test02 */
// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { Humitmp } from './mock-data';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//     time = [];
//   humidity = [];
//   temperature = [];
//   data = [];
//   now: any;
//   oneDay: any;
//   value = Math.random() * 1000;
//   constructor(
//     private dataService: DataService
//   ) { }
//   randomData() {
//     // tslint:disable-next-line:no-shadowed-variable
//     // tslint:disable-next-line:no-shadowed-variable
//     this.now = new Date(+this.now + this.oneDay);
//     let value;
//     value = value + Math.random() * 21 - 10;
//     // console.log(value);
//     // console.log(this.now);
//     return {
//       name: this.now.toString(),
//       value: [
//         [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
//         Math.round(value)
//       ]
//     };
//   }
//   ngOnInit(): void {
//     const echarts = require('echarts');
//     const myChart = echarts.init(document.getElementById('main'));
//     this.dataService.getData().subscribe(val => {
//       for (let i = 1; i < val.length; i++) {
//         const b = val[i].value.split(':');
//         const c = b[1].split('-');
//         const humidity = c[0];
//         const temperature = c[1];
//         const time = this.formatDate(new Date(Number(b[0])));
//         this.time.push(time);
//         this.humidity.push(Number(humidity));
//         this.temperature.push(Number(temperature));
//       }
//       console.log(this.time);
//       myChart.setOption(
//         {
//           title: {
//             text: ''
//           },
//           tooltip: {
//             trigger: 'axis',
//             formatter() {
//               console.log(this.time + ' : ' + this.temperature);
//               return this.time + ' : ' + this.temperature;
//             },
//             axisPointer: {
//               animation: false
//             }
//           },
//           xAxis: {
//             type: 'time',
//             splitLine: {
//               show: false
//             }
//           },
//           yAxis: {
//             type: 'value',
//             boundaryGap: [0, '100%'],
//             splitLine: {
//               show: false
//             }
//           },
//           series: [{
//             name: '模拟数据',
//             type: 'line',
//             showSymbol: false,
//             hoverAnimation: false,
//             data: this.temperature
//           }]
//         }
//       );
//       setInterval(function () {
//         myChart.setOption({
//           series: [{
//             data: this.temperature
//           }]
//         });
//       }, 1000);
//     });
//     // this.now = +new Date(1997, 9, 3);
//     // this.oneDay = 24 * 3600 * 1000;
//     // for (let i = 0; i < 1000; i++) {
//     //   this.data.push(this.randomData());
//     // }
//   }

//   formatDate(date) {
//     const myyear = date.getFullYear();
//     let mymonth = date.getMonth() + 1;
//     let myweekday = date.getDate();
//     let myhour = date.getHours();
//     let mymini = date.getMinutes();
//     let mysecond = date.getSeconds();
//     if (mymonth < 10) {
//       mymonth = '0' + mymonth;
//     }
//     if (myweekday < 10) {
//       myweekday = '0' + myweekday;
//     }
//     if (myhour < 10) {
//       myhour = '0' + myhour;
//     }
//     if (mymini < 10) {
//       mymini = '0' + mymini;
//     }
//     if (mysecond < 10) {
//       mysecond = '0' + mysecond;
//     }
//     return (myyear + '-' + mymonth + '-' + myweekday + ' ' + myhour + ':' + mymini + ':' + mysecond);
//   }
// }
/***test03 */
// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { Humitmp } from './mock-data';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//     time = [];
//   humidity = [];
//   temperature = [];
//   data = [];
//   testData = [];
//   now: any;
//   myChart: any;
//   echarts: any;
//   oneDay: any;
//   value = Math.random() * 1000;
//   constructor(
//     private dataService: DataService
//   ) { }
//   randomData() {
//     // tslint:disable-next-line:no-shadowed-variable
//     // tslint:disable-next-line:no-shadowed-variable
//     this.now = new Date(+this.now + this.oneDay);
//     let value;
//     value = value + Math.random() * 21 - 10;
//     // console.log(value);
//     // console.log(this.now);
//     return {
//       name: this.now.toString(),
//       value: [
//         [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
//         Math.round(value)
//       ]
//     };
//   }
//   ngOnInit(): void {
//     this.echarts = require('echarts');
//     this.myChart = this.echarts.init(document.getElementById('main'));
//     this.dataService.getData().subscribe(val => {
//       for (let i = 1; i < val.length; i++) {
//         const b = val[i].value.split(':');
//         const c = b[1].split('-');
//         const humidity = c[0];
//         const temperature = c[1];
//         const time = this.formatDate(new Date(Number(b[0])));
//         this.time.push(time);
//         this.humidity.push(Number(humidity));
//         this.temperature.push(Number(temperature));
//         let data = [];
//         let a = [];
//         data.push(time, Number(temperature));
//         // a.push(data);
//         this.testData.push(data);
//       }
//       this.data.push(this.testData);
//       this.test();
//     });
//   }
//   test() {
//   //   this.data = [
//   //     [[28604,77,],[31163,77.4],[1516,68],[13670,74.7],[28599,75],[29476,77.1],
//   //     [31476,75.4],[28666,78.1],[1777,57.7],[29550,79.1],[2076,67.9],[12087,72],
//   //     [24021,75.4],[43296,76.8,4240375],[10088,70.8],[19349,69.6],[10670,67.3],[26424,75.7],[37062,75.4]],
//   // ];
//   console.log(this.data);
//     this.myChart.setOption(
//       {
//         backgroundColor: new this.echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//             offset: 0,
//             color: '#f7f8fa'
//         }, {
//             offset: 1,
//             color: '#cdd0d5'
//         }]),
//         title: {
//             text: '1990 与 2015 年各国家人均寿命与 GDP'
//         },
//         legend: {
//             right: 10,
//             data: ['1990', '2015']
//         },
//         xAxis: {
//             splitLine: {
//                 lineStyle: {
//                     type: 'dashed'
//                 }
//             }
//         },
//         yAxis: {
//             splitLine: {
//                 lineStyle: {
//                     type: 'dashed'
//                 }
//             },
//             scale: true
//         },
//         series: [{
//             name: '1990',
//             data: this.data[0],
//             type: 'scatter',
//             symbolSize: function (data) {
//                 return Math.sqrt(data[2]) / 5e2;
//             },
//             label: {
//                 emphasis: {
//                     show: true,
//                     formatter: function (param) {
//                         return param.data[3];
//                     },
//                     position: 'top'
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     shadowBlur: 10,
//                     shadowColor: 'rgba(120, 36, 50, 0.5)',
//                     shadowOffsetY: 5,
//                     color: new this.echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                         offset: 0,
//                         color: 'rgb(251, 118, 123)'
//                     }, {
//                         offset: 1,
//                         color: 'rgb(204, 46, 72)'
//                     }])
//                 }
//             }
//         }]
//     });
//   }

//   formatDate(date) {
//     const myyear = date.getFullYear();
//     let mymonth = date.getMonth() + 1;
//     let myweekday = date.getDate();
//     let myhour = date.getHours();
//     let mymini = date.getMinutes();
//     let mysecond = date.getSeconds();
//     if (mymonth < 10) {
//       mymonth = '0' + mymonth;
//     }
//     if (myweekday < 10) {
//       myweekday = '0' + myweekday;
//     }
//     if (myhour < 10) {
//       myhour = '0' + myhour;
//     }
//     if (mymini < 10) {
//       mymini = '0' + mymini;
//     }
//     if (mysecond < 10) {
//       mysecond = '0' + mysecond;
//     }
//     return (myyear + '-' + mymonth + '-' + myweekday + ' ' + myhour + ':' + mymini + ':' + mysecond);
//   }
// }
/***test04 */
// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { Humitmp } from './mock-data';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//     time = [];
//   humidity = [];
//   temperature = [];
//   data = [];
//   testData = [];
//   now: any;
//   myChart: any;
//   echarts: any;
//   oneDay: any;
//   value = Math.random() * 1000;
//   constructor(
//     private dataService: DataService
//   ) { }
//   randomData() {
//     // tslint:disable-next-line:no-shadowed-variable
//     // tslint:disable-next-line:no-shadowed-variable
//     this.now = new Date(+this.now + this.oneDay);
//     let value;
//     value = value + Math.random() * 21 - 10;
//     // console.log(value);
//     // console.log(this.now);
//     return {
//       name: this.now.toString(),
//       value: [
//         [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
//         Math.round(value)
//       ]
//     };
//   }
//   ngOnInit(): void {
//     this.echarts = require('echarts');
//     this.myChart = this.echarts.init(document.getElementById('main'));
//     this.dataService.getData().subscribe(val => {
//       for (let i = 1; i < val.length; i++) {
//         const b = val[i].value.split(':');
//         const c = b[1].split('-');
//         const humidity = c[0];
//         const temperature = c[1];
//         const time = this.formatDate(new Date(Number(b[0])));
//         this.time.push(time);
//         this.humidity.push(Number(humidity));
//         this.temperature.push(Number(temperature));
//       }
//     });
//   }
//   test() {
//     function randomData() {
//       let now;
//       let oneDay;
//       now = new Date(+now + oneDay);
//       let value;
//       value = value + Math.random() * 21 - 10;
//       return {
//           name: now.toString(),
//           value: [
//               [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
//               Math.round(value)
//           ]
//       }
//   }
//   var data = [];
//   var now = +new Date(1997, 9, 3);
//   var oneDay = 24 * 3600 * 1000;
//   var value = Math.random() * 1000;
//   for (var i = 0; i < 1000; i++) {
//       data.push(randomData());
//   }

//     this.myChart.setOption({
//       title: {
//           text: '动态数据 + 时间坐标轴'
//       },
//       tooltip: {
//           trigger: 'axis',
//           formatter: function (params) {
//               params = params[0];
//               var date = new Date(params.name);
//               return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
//           },
//           axisPointer: {
//               animation: false
//           }
//       },
//       xAxis: {
//           type: 'time',
//           splitLine: {
//               show: false
//           }
//       },
//       yAxis: {
//           type: 'value',
//           boundaryGap: [0, '100%'],
//           splitLine: {
//               show: false
//           }
//       },
//       series: [{
//           name: '模拟数据',
//           type: 'line',
//           showSymbol: false,
//           hoverAnimation: false,
//           data: data
//       }]
//   });
//   setInterval(function () {

//     for (var i = 0; i < 5; i++) {
//         data.shift();
//         data.push(randomData());
//     }

//     this.myChart.setOption({
//         series: [{
//             data: data
//         }]
//     });
// }, 1000);
//   }

//   formatDate(date) {
//     const myyear = date.getFullYear();
//     let mymonth = date.getMonth() + 1;
//     let myweekday = date.getDate();
//     let myhour = date.getHours();
//     let mymini = date.getMinutes();
//     let mysecond = date.getSeconds();
//     if (mymonth < 10) {
//       mymonth = '0' + mymonth;
//     }
//     if (myweekday < 10) {
//       myweekday = '0' + myweekday;
//     }
//     if (myhour < 10) {
//       myhour = '0' + myhour;
//     }
//     if (mymini < 10) {
//       mymini = '0' + mymini;
//     }
//     if (mysecond < 10) {
//       mysecond = '0' + mysecond;
//     }
//     return (myyear + '-' + mymonth + '-' + myweekday + ' ' + myhour + ':' + mymini + ':' + mysecond);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Humitmp } from './mock-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time = [];
  humidity = [];
  temperature = [];
  data = [];
  testData = [];
  now: any;
  option: any;
  myChart: any;
  myChart1: any;
  echarts: any;
  oneDay: any;
  value = Math.random() * 1000;
  constructor(
    private dataService: DataService
  ) { }
  ngOnInit(): void {
    this.echarts = require('echarts');
    this.myChart = this.echarts.init(document.getElementById('main'));
    this.myChart1 = this.echarts.init(document.getElementById('main1'));
    this.dataService.getData().subscribe(val => {
      for (let i = 1; i < val.length; i++) {
        const b = val[i].value.split(':');
        const c = b[1].split('-');
        const humidity = c[0];
        const temperature = c[1];
        const time = this.formatDate(new Date(Number(b[0])));
        this.time.push(time);
        this.humidity.push(Number(humidity));
        this.temperature.push(Number(temperature));
        let data = [];
        let a = [];
        data.push(time, Number(temperature));
        this.testData.push(data);
      }
      this.data.push(this.testData);
      this.test(this.testData);
    });
  }
  test(data) {
    // let data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
    console.log(data);
    var dateList = data.map(function (item) {
      return item[0];
    });
    var valueList = data.map(function (item) {
      return item[1];
    });

    function randomData() {
      let now; let value; let oneDay;
      now = new Date(+now + oneDay);
      value = Math.random() * 100;
      return [
        [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
        Math.round(value)
      ]

    }

    var now = +new Date(2018, 3, 31);
    var oneDay = 24 * 3600 * 1000;

    // option = {
    // };
    this.myChart.setOption({
      // Make gradient line here
      visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
      }, {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: dateList.length - 1
      }],


      title: [{
        left: 'center',
        text: 'Gradient along the y axis'
      }, {
        top: '55%',
        left: 'center',
        text: 'Gradient along the x axis'
      }],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [{
        data: dateList
      }, {
        data: dateList,
        gridIndex: 1
      }],
      yAxis: [{
        splitLine: { show: false }
      }, {
        splitLine: { show: false },
        gridIndex: 1
      }],
      grid: [{
        bottom: '60%'
      }, {
        top: '60%'
      }],
      series: [{
        type: 'line',
        showSymbol: false,
        data: valueList,
        areaStyle: {}
      }, {
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 1,
        yAxisIndex: 1
      }]
    });
    setInterval(function () {

      for (var i = 0; i < 1; i++) {
        data.shift();
        console.log(data);
        data.push(randomData());
        console.log(data);
      }

      var dateList = data.map(function (item) {
        return item[0];
      });
      var valueList = data.map(function (item) {
        return item[1];
      });

      this.myChart.setOption({
        xAxis: [{
          data: dateList
        }, {
          data: dateList,
          gridIndex: 1
        }],
        series: [{
          type: 'line',
          showSymbol: false,
          data: valueList,
          areaStyle: {}
        }, {
          type: 'line',
          showSymbol: false,
          data: valueList,
          xAxisIndex: 1,
          yAxisIndex: 1
        }
      ]
      });
    }, 1000);
    // let dateList = data.map(function (item) {
    //   return item[0];
    // });
    // let valueList = data.map(function (item) {
    //   return item[1];
    // });

    // function randomData() {
    //   let now;
    //   let value;
    //   let oneDay;
    //   now = new Date(+now + oneDay);
    //   value = Math.random() * 100;
    //   return [
    //     [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
    //     Math.round(value)
    //   ]
    // }
    // let now = +new Date(2018, 3, 31);
    // let oneDay = 24 * 3600 * 1000;
    // // this.option = {
    // // }
    // this.myChart.setOption({
    //   // Make gradient line here
    //   visualMap: [{
    //     show: false,
    //     type: 'continuous',
    //     seriesIndex: 0,
    //     min: 0,
    //     max: 400
    //   }, {
    //     show: false,
    //     type: 'continuous',
    //     seriesIndex: 1,
    //     dimension: 0,
    //     min: 0,
    //     max: dateList.length - 1
    //   }],
    //   title: [{
    //     left: 'center',
    //     text: 'Gradient along the y axis'
    //   }, {
    //     top: '55%',
    //     left: 'center',
    //     text: 'Gradient along the x axis'
    //   }],
    //   tooltip: {
    //     trigger: 'axis'
    //   },
    //   xAxis: [{
    //     data: dateList
    //   }, {
    //     data: dateList,
    //     gridIndex: 1
    //   }],
    //   yAxis: [{
    //     splitLine: { show: false }
    //   }, {
    //     splitLine: { show: false },
    //     gridIndex: 1
    //   }],
    //   grid: [{
    //     bottom: '60%'
    //   }, {
    //     top: '60%'
    //   }],
    //   series: [{
    //     type: 'line',
    //     showSymbol: false,
    //     data: valueList,
    //     areaStyle: {}
    //   }, {
    //     type: 'line',
    //     showSymbol: false,
    //     data: valueList,
    //     xAxisIndex: 1,
    //     yAxisIndex: 1
    //   }]
    // });
    // setInterval(function () {
    //   for (let i = 0; i < 1; i++) {
    //     data.shift();
    //     data.push(randomData());
    //   }
    //   let dateList = data.map(function (item) {
    //     return item[0];
    //   });
    //   let valueList = data.map(function (item) {
    //     return item[1];
    //   });
    //   this.myChart.setOption({
    //     xAxis: [{
    //       data: dateList
    //     }, {
    //       data: dateList,
    //       gridIndex: 1
    //     }],
    //     series: [{
    //       type: 'line',
    //       showSymbol: false,
    //       data: valueList,
    //       areaStyle: {}
    //     }, {
    //       type: 'line',
    //       showSymbol: false,
    //       data: valueList,
    //       xAxisIndex: 1,
    //       yAxisIndex: 1
    //     }]
    //   });
    // }, 1000);
  }
  formatDate(date) {
    const myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();
    let myhour = date.getHours();
    let mymini = date.getMinutes();
    let mysecond = date.getSeconds();
    if (mymonth < 10) {
      mymonth = '0' + mymonth;
    }
    if (myweekday < 10) {
      myweekday = '0' + myweekday;
    }
    if (myhour < 10) {
      myhour = '0' + myhour;
    }
    if (mymini < 10) {
      mymini = '0' + mymini;
    }
    if (mysecond < 10) {
      mysecond = '0' + mysecond;
    }
    return (myyear + '-' + mymonth + '-' + myweekday + ' ' + myhour + ':' + mymini + ':' + mysecond);
  }
}
