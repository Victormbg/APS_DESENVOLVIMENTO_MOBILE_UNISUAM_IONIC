import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoricoPage } from '../historico/historico.page';
import { RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(public alertController: AlertController) { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('historico:', this.historico);
  }

  isBinary(val: string) {
    return val.split('').filter(x => x == "0" || x == "1").length == val.length;
  }

  async sum() {

    if (this.isBinary(this.binary1) && this.isBinary(this.binary2)) {

      const decimal1 = parseInt(this.binary1, 2);
      const decimal2 = parseInt(this.binary2, 2);
      const decimalSum = decimal1 + decimal2;
      this.result = decimalSum.toString(2);

      const operacao = `${this.binary1} + ${this.binary2} = ${this.result}`;
      console.log(operacao);

      this.historico.adicionarOperacao(operacao);
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Os números devem ser binários (0 ou 1)',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}