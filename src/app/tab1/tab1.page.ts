import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class Tab1Page {

  @ViewChild(Tab2Page) historico!: Tab2Page;

  binary1 = '';
  binary2 = '';
  result = '';

  constructor() { }

  sum() {
    const decimal1 = parseInt(this.binary1, 2);
    const decimal2 = parseInt(this.binary2, 2);
    const decimalSum = decimal1 + decimal2;
    this.result = decimalSum.toString(2);

    const operacao = `${this.binary1} + ${this.binary2} = ${this.result}`;
    this.historico.adicionarOperacao(operacao);
  }
}
