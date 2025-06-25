import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newcategory-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newcategory.form.component.html',
  styleUrls: ['./newcategory.form.component.css']
})
export class NewcategoryFormComponent {
  @Output() close = new EventEmitter<void>();

  constructor() {
    console.log('NewcategoryFormComponent constructor called');
  }

  onClose() {
    console.log('onClose called');
    this.close.emit();
  }
}
