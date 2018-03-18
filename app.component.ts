import { Component } from '@angular/core';//引入
import { GetDataService} from './services/get-data.service';

@Component({//Component函数
  selector: 'app-root',//选择器
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//将类暴露出去，在类中写代码。

  constructor(public get:GetDataService){

  }
  index:number;
  ngOninit(){
    this.index=this.get.index;
  }


  // 插值表达式，两个大括号{{}}
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性  属性绑定[] 事件绑定();
  id = 'box';
  // 循环
  
  arr = [1,2,3,4];

  fn(){
    console.log(123);
  }
  // ngSwitch
  fruit:any;
  changeFruit(v){
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';
  // todolist


  
  // tolist = [];
  // comlist = [];
  // content = '';










  dataArr=[];
  dataA=[];
  data :any;
  add(){
    this.dataArr.push(this.data);
    this.data='';
  }
changeData1(i){
 
  this.dataA.push(this.dataArr[i]);
  this.dataArr.splice(i,1);
}
deData1(i){
  this.dataArr.splice(i,1);
}
changeData2(i){
  this.dataArr.push(this.dataA[i]);
  this.dataA.splice(i,1);
}
deData2(i){
  this.dataA.splice(i,1);
}











  // addData(){
  //   this.tolist.push(this.content);
  //   this.content = '';
  // }
  // keyData(e){
  //   if(e.keyCode==13){
  //     this.tolist.push(this.content);
  //     this.content = '';
  //   }
  // }
  // delData(i){
  // 	this.tolist.splice(i,1);
  // }
  // change(i){
  //   this.comlist.push(this.tolist[i])
  //   this.tolist.splice(i,1);
  // }
  // delData2(i){
  // 	this.comlist.splice(i,1);
  // }
  // change2(i){
  //   this.tolist.push(this.comlist[i])
  //   this.comlist.splice(i,1);
  // }
  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}


