import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HistoricoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  operacoes: string[] = [];

  adicionarOperacao(operacao: string) {
    console.log(operacao)
    this.operacoes.push(operacao);
  }

  limparOperacoes() {
    this.operacoes = [];
  }

}
