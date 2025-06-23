import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SavingGoalService } from '../../../../services/SavingGoal.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-savinggoal-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './savinggoal-form.component.html',
  styleUrls: ['./savinggoal-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavinggoalFormComponent {
  savingGoalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private savingGoalService: SavingGoalService,
    private router: Router
  ) {
    this.savingGoalForm = this.fb.group({
      name: ['', Validators.required],
      targetAmount: [0, [Validators.required, Validators.min(1)]],
      currentAmount: [0, [Validators.required, Validators.min(0)]],
      dueDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.savingGoalForm.valid) {
      this.savingGoalService.addSavingGoal(this.savingGoalForm.value).subscribe(() => {
        this.router.navigate(['/savinggoals']);
      });
    }
  }
}