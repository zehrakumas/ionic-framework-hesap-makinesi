import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


sayi1:string="";
sayi2:string="";

sayac:number=1;

label1:string;
label2:string;

operator:string;

sonuc:number;

  constructor() {}


  birlestir(deger:string)
  {
    if(this.sayac==1)
    {
      this.sayi1=this.sayi1+deger;
      this.label1="Sayı-1";
      this.label2=this.sayi1;
    }
    else
    {
      this.sayi2=this.sayi2+deger;
      this.label1="Sayı-2";
      this.label2=this.sayi2;
    }
  }

  operatoral(op:string)
  {
    this.operator=op;
    this.sayac=2;
  }

  islemyap()
  {
    switch(this.operator){
      case "+":{
        this.sonuc=parseInt(this.sayi1)+parseInt(this.sayi2);
        this.label1="Sonuç: ";
        this.label2=this.sonuc.toString();
        this.sayi1="";
        this.sayi2="";
        this.sayac=1;
        break;
      }
      case "-":{
        this.sonuc=parseInt(this.sayi1)-parseInt(this.sayi2);
        this.label1="Sonuç: ";
        this.label2=this.sonuc.toString();
        this.sayi1="";
        this.sayi2="";
        this.sayac=1;       
        break;
      }
      case "*":{
        this.sonuc=parseInt(this.sayi1)*parseInt(this.sayi2);
        this.label1="Sonuç: ";
        this.label2=this.sonuc.toString();
        this.sayi1="";
        this.sayi2="";
        this.sayac=1;
        break;
      }
      case "/":{
        this.sonuc=parseInt(this.sayi1)/parseInt(this.sayi2);
        this.label1="Sonuç: ";
        this.label2=this.sonuc.toString();
        this.sayi1="";
        this.sayi2="";
        this.sayac=1;
        break;
      }
    }
    
  }

}
