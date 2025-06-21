import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../../services/Category.service';
import { CategoryRequest, CategorySimpleResponse } from '../../../../models/Category';
import Swal from 'sweetalert2';

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
  selectedCategory: any = null;
  categories: CategorySimpleResponse[] = [];

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCategories();
  }

  loadCategories(): void {
    
    const userId = 1; //hardcoded
    this.categoryService.getCategories(userId).subscribe({
        next: (res) => (this.categories = res),
        error: (err) => this.showError(err)
    })
  }

  showError(error: any) {
    const msg = 
    error?.error?.detail ||
    error?.error?.message ||
    error?.message ||
    'Error inesperado';
    Swal.fire('Error', msg, 'error')
  }

  initForm(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
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

    const data = this.categoryForm.value as CategoryRequest;
    const userId = 1; //mas hardcodeo
    if (this.action === 'create') {
        this.categoryService.createCategory(userId, data).subscribe({
            next: () => {
                Swal.fire('Creado', 'La categoría fue creada correctamente', 'success');
            },
            error: (err) => this.showError(err)
        });
    } else if (this.action === 'edit' && this.selectedCategory) {
        const id = this.selectedCategory.id;
        this.categoryService.updateCategory(id, data).subscribe({
            next: () => {
                Swal.fire('Actualizado', 'La categoría fue actualizada correctamente', 'success');
                this.cancelEdit();
                this.loadCategories();
            },
            error: (err) => this.showError(err)
        });
    }
  }

  selectCategoryToDelete(cat: any): void {
    this.selectedCategory = cat;
  }

  confirmDelete(): void {
    if (this.selectedCategory) {
        const id = this.selectedCategory.id;
        this.categoryService.deleteCategory(id).subscribe({
            next: () => {
                Swal.fire('Eliminado', 'La categoría fue eliminada correctamente', 'success');
                this.selectedCategory = null;
                this.loadCategories();
            },
            error: (err) => this.showError(err)
        });
    }
  }

}
