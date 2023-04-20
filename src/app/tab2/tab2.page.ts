import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab2Page {

  operacoes: string[] = [];

  adicionarOperacao(operacao: string) {
    this.operacoes.push(operacao);
  }

  limparOperacoes() {
    this.operacoes = [];
  }

}
