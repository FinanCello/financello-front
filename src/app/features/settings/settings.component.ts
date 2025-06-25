import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="settings-wrapper">
      <div class="settings-header">
        <h1>Settings</h1>
      </div>

      <div class="settings-container">
        <p class="settings-description">
          Variety of tools to tailor the user experience
        </p>

        <div class="settings-buttons">
          <button class="setting-btn">Currency conversion</button>
          <button class="setting-btn" [routerLink]="['/dashboard/filter-movements']">Filter Movements</button>
          <button class="setting-btn" [routerLink]="['/dashboard/categories']">Create categories</button>
          <button class="setting-btn">Spending preferences</button>
          <button class="setting-btn">Custom reminders</button>
          <button class="setting-btn">Unit segmentation</button>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToCategories() {
    this.router.navigate(['categories'], { relativeTo: this.route });
  }
}
