import { Component } from '@angular/core';
import { FinancialMovementService } from '../../../../services/FinancialMovement.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movement-upload',
  templateUrl: './movement-upload.component.html',
  styleUrls: ['./movement-upload.component.css'],
  imports: [CommonModule, RouterOutlet]
})
export class MovementUploadComponent {
  isDragging = false;
  selectedFile: File | null = null;
  isUploading = false;
  uploadSuccess = false;
  uploadError: string | null = null;

  constructor(private financialService: FinancialMovementService) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      if (file.name.endsWith('.xlsx')) {
        this.selectedFile = file;
        this.uploadSuccess = false;
        this.uploadError = null;
      } else {
        this.uploadError = 'Solo se permiten archivos .xlsx';
      }
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.name.endsWith('.xlsx')) {
        this.selectedFile = file;
        this.uploadSuccess = false;
        this.uploadError = null;
      } else {
        this.uploadError = 'Solo se permiten archivos .xlsx';
      }
    }
  }

  upload() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.uploadSuccess = false;
    this.uploadError = null;

    this.financialService.uploadExcel(this.selectedFile).subscribe({
      next: () => {
        this.uploadSuccess = true;
        this.selectedFile = null;
      },
      error: (err) => {
        this.uploadError = err.error || 'Error inesperado al subir';
      },
      complete: () => {
        this.isUploading = false;
      },
    });
  }
}
