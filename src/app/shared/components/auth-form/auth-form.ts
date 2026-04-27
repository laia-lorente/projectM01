import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Supongamos que tienes un booleano para alternar entre Login y Registro
  isLoginMode = true;

  async onSubmit(email: string, pass: string) {
    try {
      if (this.isLoginMode) {
        await this.authService.login(email, pass);
      } else {
        await this.authService.signUp(email, pass);
      }
      
      // UX: Redirigir al éxito
      this.router.navigate(['/pedidos']);
    } catch (error) {
      console.error("Error en la autenticación", error);
      alert("Fallo en el acceso: " + error);
    }
  }
}
