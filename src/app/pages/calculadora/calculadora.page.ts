import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoricoPage } from '../historico/historico.page';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})

export class CalculadoraPage implements OnInit, AfterViewInit {

  @ViewChild(HistoricoPage) historico!: HistoricoPage;

  binary1 = '';
  binary2 = '';
  result = '';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('historico:', this.historico);
  }

  sum() {
    const decimal1 = parseInt(this.binary1, 2);
    const decimal2 = parseInt(this.binary2, 2);
    const decimalSum = decimal1 + decimal2;
    this.result = decimalSum.toString(2);

    const operacao = `${this.binary1} + ${this.binary2} = ${this.result}`;
    console.log(operacao);

    this.historico.adicionarOperacao(operacao);
  }
}






