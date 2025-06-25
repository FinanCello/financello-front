import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule]
})
export class EditProfileComponent implements OnInit {
  userInfo: any;
  profileForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.userInfo = JSON.parse(userStr);

      this.profileForm = this.fb.group({
        firstName: [this.userInfo.firstName || '', Validators.required],
        lastName: [this.userInfo.lastName || '', Validators.required],
        password: [''],
        email: [{ value: this.userInfo.email || '', disabled: true }]
      });
    }
  }

  onSave(): void {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.getRawValue();
      console.log('Guardando perfil:', formValues);
      this.router.navigate(['/dashboard/profile']);
    } else {
      console.warn('Formulario inválido');
    }
  }
}
