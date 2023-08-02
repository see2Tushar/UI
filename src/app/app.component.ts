import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';

  cards = [];

  addCard() {
    this.cards.push({
      title: 'Card Title',
      description: 'Card Description',
    });
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
