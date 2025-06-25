import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-historialcontribution-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './historialcontribution.form.component.html',
  styleUrls: ['./historialcontribution.form.component.css']
})
export class HistorialContributionFormComponent {
  contributionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contributionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      note: ['']
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
}
