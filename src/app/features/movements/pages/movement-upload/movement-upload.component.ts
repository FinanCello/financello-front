import { Component } from '@angular/core';
import { FinancialMovementService } from '../../../../services/FinancialMovement.service';
import { CommonModule } from '@angular/common';

interface FileUpload {
  id: string;
  file: File;
  status: 'uploading' | 'success' | 'error';
  error?: string;
  uploadedAt?: Date;
}

@Component({
  selector: 'app-movement-upload',
  templateUrl: './movement-upload.component.html',
  styleUrls: ['./movement-upload.component.css'],
  imports: [CommonModule]
})
export class MovementUploadComponent {
  isDragging = false;
  selectedFile: File | null = null;
  isUploading = false;
  uploadSuccess = false;
  uploadError: string | null = null;
  uploadedFiles: FileUpload[] = [];

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
        this.uploadError = 'Only .xlsx files';
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
        this.uploadError = 'Only .xlsx files';
      }
    }
  }

  upload() {
    if (!this.selectedFile) return;

    const fileUpload: FileUpload = {
      id: Date.now().toString(),
      file: this.selectedFile,
      status: 'uploading'
    };

    this.uploadedFiles.unshift(fileUpload);
    this.isUploading = true;
    this.uploadSuccess = false;
    this.uploadError = null;

    this.financialService.uploadExcel(this.selectedFile).subscribe({
      next: () => {
        fileUpload.status = 'success';
        fileUpload.uploadedAt = new Date();
        this.uploadSuccess = true;
        this.selectedFile = null;
      },
      error: (err) => {
        fileUpload.status = 'error';
        fileUpload.error = err.error || 'Error on upload';
        this.uploadError = err.error || 'Error on upload';
      },
      complete: () => {
        this.isUploading = false;
      },
    });
  }

  removeFile(fileId: string) {
    this.uploadedFiles = this.uploadedFiles.filter(f => f.id !== fileId);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'uploading': return 'status-uploading';
      case 'success': return 'status-success';
      case 'error': return 'status-error';
      default: return '';
    }
  }
}
