import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewcategoryFormComponent } from '../newcategory.form/newcategory.form.component';

@Component({
  selector: 'app-historialcontribution-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NewcategoryFormComponent],
  templateUrl: './historialcontribution.form.component.html',
  styleUrls: ['./historialcontribution.form.component.css']
})
export class HistorialContributionFormComponent {
  showModal = false;
  contributionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contributionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contributionForm.valid) {
      console.log('Formulario enviado:', this.contributionForm.value);
      // Aquí podrías llamar a un servicio para guardar la contribución
    } else {
      console.log('Formulario inválido');
    }
  }

  goToNewCategory() {
    this.showModal = true;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}




