// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { Humitmp } from './mock-data';
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
  now: any;
  oneDay: any;
  value = Math.random() * 1000;
  constructor(
    private dataService: DataService
  ) { }
  randomData() {
    // tslint:disable-next-line:no-shadowed-variable
    // tslint:disable-next-line:no-shadowed-variable
    this.now = new Date(+this.now + this.oneDay);
    let value;
    value = value + Math.random() * 21 - 10;
    // console.log(value);
    // console.log(this.now);
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  }
  ngOnInit(): void {
    const echarts = require('echarts');
    const myChart = echarts.init(document.getElementById('main'));
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
      }
      console.log(this.time);
      myChart.setOption(
        {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            formatter() {
              console.log(this.time + ' : ' + this.temperature);
              return this.time + ' : ' + this.temperature;
            },
            axisPointer: {
              animation: false
            }
          },
          xAxis: {
            type: 'time',
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false
            }
          },
          series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: this.temperature
          }]
        }
      );
      setInterval(function () {
        myChart.setOption({
          series: [{
            data: this.temperature
          }]
        });
      }, 1000);
    });
    // this.now = +new Date(1997, 9, 3);
    // this.oneDay = 24 * 3600 * 1000;
    // for (let i = 0; i < 1000; i++) {
    //   this.data.push(this.randomData());
    // }
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
