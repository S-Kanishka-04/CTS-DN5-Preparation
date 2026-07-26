import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

/**
 * Root component of the Student Course Portal.
 * Hosts the persistent Header and the RouterOutlet where all page
 * components (Home, Courses, Profile, Enrollment, etc.) are rendered.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = 'Student Course Portal';
}
