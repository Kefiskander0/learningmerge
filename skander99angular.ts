import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appppp-example',

  template: `
    <h1>Bienvenue sur la page d'exemple !</h1>
    <p>{{ message }}</p>
  `,
})
export class ExampleComponent implements OnInit {
  message: string = '';
    messagefrommaster: string


  ngOnInit() {
    this.setMessage();

  }

  private setMessage() {
    this.message = 'Ce texte est affiché grâce à une méthode privée.';
  }
}

