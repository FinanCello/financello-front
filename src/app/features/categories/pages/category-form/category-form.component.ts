import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFormComponent {
  categoryForm!: FormGroup;
  action: 'create' | 'edit' | 'delete' = 'create';

  categories = [
    { id: '1', title: 'Comida', description: 'Categoría de comida' },
    { id: '2', title: 'Viajes', description: 'Categoría de viajes' }
  ];
  selectedCategory: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  setAction(newAction: 'create' | 'edit' | 'delete'): void {
    this.action = newAction;
    this.selectedCategory = null;
    this.categoryForm.reset();
  }

  selectCategoryToEdit(cat: any): void {
    this.selectedCategory = cat;
    this.categoryForm.patchValue(cat);
  }

  cancelEdit(): void {
    this.selectedCategory = null;
    this.categoryForm.reset();
  }

  onSubmit(): void {
    if (!this.categoryForm.valid) return;

    const data = this.categoryForm.value;
    if (this.action === 'create') {
      console.log('Crear categoría:', data);
    } else if (this.action === 'edit' && this.selectedCategory) {
      console.log('Actualizar categoría con ID:', this.selectedCategory.id, data);
    }
  }

  selectCategoryToDelete(cat: any): void {
    this.selectedCategory = cat;
  }

  confirmDelete(): void {
    if (this.selectedCategory) {
      console.log('Eliminar categoría con ID:', this.selectedCategory.id);
    }
  }
}
