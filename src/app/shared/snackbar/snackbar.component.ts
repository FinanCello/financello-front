import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  imports: [NgIf]
})
export class SnackbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() icon: string = '';
  @Input() showUndo: boolean = false;

  visible = true;
  isHiding = false;

  ngOnInit() {
    setTimeout(() => {
      this.isHiding = true;
      setTimeout(() => {
        this.visible = false;
      }, 400); // Espera a que termine la animación
    }, 3000);
  }

  onUndo() {
    console.log('Undo clicked');
    // Aquí puedes disparar alguna acción
  }
}
