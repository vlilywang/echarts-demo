import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Humitmp } from './mock-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dataSet = Humitmp;
  // allDataSet: any;
  testData = [];
  time = [];
  humidity = [];
  temperature = [];
  barData = [21, 77];
  lineData = [50, 10, 50, 50, 50];
  outlineData = [150, 110];
  constructor(
    private dataService: DataService
  ) { }
  ngOnInit(): void {
    // this.readTxt();
    const echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    const publicOpinion = echarts.init(document.getElementById('publicOpinion'));
    const testCharts = echarts.init(document.getElementById('test'));
    this.dataService.getData().subscribe(val => {
      console.log(val.toString());
    });
    // let a = this.dataSet.split(':');
    // console.log(this.allDataSet);
    for (let i = 1; i < this.dataSet.length; i++) {
      const b = this.dataSet[i].split(':');
      const c = b[1].split('-');
      const humidity = c[0];
      const temperature = c[1];
      const time = this.formatDate(new Date(Number(b[0])));
      this.time.push(time);
      this.humidity.push(Number(humidity));
      this.temperature.push(Number(temperature));
    }
    // 绘制图表
    myChart.setOption({
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['温度', '湿度']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.time
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '温度',
          type: 'line',
          data: this.temperature
        },
        {
          name: '湿度',
          type: 'line',
          data: this.humidity
        }
      ]
    });
    publicOpinion.setOption({
      'title': {
        'text': ''
      },
      'backgroundColor': '#101a3c',
      'grid': {
        'left': '10%',
        'top': 10,
        'bottom': 10
      },
      'tooltip': {
        'trigger': 'item',
        'textStyle': {
          'fontSize': 12
        },
        'formatter': '{b0}:{c0}'
      },
      'xAxis': {
        'max': 300,
        'splitLine': {
          'show': false
        },
        'axisLine': {
          'show': false
        },
        'axisLabel': {
          'show': false
        },
        'axisTick': {
          'show': false
        }
      },
      'yAxis': [
        {
          'type': 'category',
          'inverse': false,
          'data': [
            '山西',
            '四川',
          ],
          'axisLine': {
            'show': false
          },
          'axisTick': {
            'show': false
          },
          'axisLabel': {
            'margin': -4,
            'textStyle': {
              'color': '#fff',
              'fontSize': 16.25
            }
          }
        },
      ],
      'series': [
        {
          'type': 'pictorialBar',
          symbol: 'rect',
          'symbolRepeat': true,
          'symbolMargin': '5%',
          'symbolClip': true,
          'symbolSize': 22.5,
          'symbolOffset': [
            20,
            0
          ],
          'data': [
            23,
            42,
          ],
        },
        {
          'type': 'pictorialBar',
          'itemStyle': {
            'normal': {
              'opacity': 0.3
            }
          },
          'label': {
            'normal': {
              'show': false
            }
          },
          'animationDuration': 0,
          'symbolRepeat': 'fixed',
          'symbolMargin': '5%',
          symbol: 'rect',
          'symbolSize': 22.5,
          'symbolBoundingData': 300,
          'symbolPosition': 'start',
          'symbolOffset': [
            20,
            0
          ],
          'data': [
            23,
            42,
          ],
          'z': 5
        }
      ]
    });
    testCharts.setOption({
      backgroundColor: '#000',
      color: ['#5490CB', '#CCCCCC'],
      tooltip: {
          trigger: 'item',
          formatter: '数量:{c0}',
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderColor: '#458CDC',
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
              color: '#333',
          },
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          name: '（件）',
          type: 'value',
          axisLine: {
              lineStyle: {
                  color: '#fff'
              }
          },
          splitLine: {
              show: false
          }
      },
      yAxis: {
          type: 'category',
          data: ['学校管理', '旅馆管理', '危爆管理', '物流寄递页', '精神病人管理', '娱乐场所', '保安监管', '油气管理', '重点人员管理'],
          axisTick: {
              alignWithLabel: true
          },
          axisLine: {
              lineStyle: {
                  color: '#fff'
              }
          },
          axisLabel: {
              color: '#fff',
              fontSize: 14
          },
          splitLine: {
              show: false
          }
      },
      series: [{
          type: 'bar',
          data: [320, 730, 815, 323, 630, 415, 723, 830, 715],
          barWidth: '30%',
          barGap: '200%',
          barMaxWidth: '40px',
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}',
                  color: '#fff',
                  fontSize:14
              }
          },
          itemStyle: {
              normal: {
                  barBorderRadius: 50,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: '#00A0FD'
                  }, {
                      offset: 0.8,
                      color: '#B0DD5B'
                  }], false)
              }
          }
      }],
    });
  }
  formatDate(date) {
    const myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();
    if (mymonth < 10) {
      mymonth = '0' + mymonth;
    }
    if (myweekday < 10) {
      myweekday = '0' + myweekday;
    }
    return (myyear + '-' + mymonth + '-' + myweekday);
  }
  // readTxt() {
  //   const reader = new FileReader();
  //   const input = document.getElementById('idName'); // input file
  //   let dataSet: any;
  //   function foo(str) {
  //     const temp = str.split(/[\n,]/g);
  //       for (let i = 0; i < temp.length; i++) {
  //       if (temp[i] === '') {
  //         temp.splice(i, 1);
  //         // 删除数组索引位置应保持不变
  //         i--;
  //       }
  //     }
  //     console.log(temp);
  //   }
  //   input.onchange = function () {
  //     const file = this.files[0];
  //     if (!!file) {
  //       // tslint:disable-next-line:no-shadowed-variable
  //       const reader = new FileReader();
  //       reader.readAsText(file, 'gbk');
  //       reader.onload = function () {
  //         dataSet = this.result;
  //         let a = '';
  //         a = dataSet.toString();
  //         let b = foo(a);
  //         // console.log(b);
  //       };
  //     }
  //   };
  // }
  // foo(str) {
  //   const temp = str.split(/[\n,]/g);
  //     for (let i = 0; i < temp.length; i++) {
  //     if (temp[i] === '') {
  //       temp.splice(i, 1);
  //       // 删除数组索引位置应保持不变
  //       i--;
  //     }
  //   }
  //   console.log(temp);
  // }
}
