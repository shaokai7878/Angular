import { BrowserModule } from '@angular/platform-browser';//数据绑定
import { NgModule } from '@angular/core';//实现双向数据绑定引入的模块

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { FirstComponent } from './components/first/first.component';
import { GetDataService } from './services/get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
