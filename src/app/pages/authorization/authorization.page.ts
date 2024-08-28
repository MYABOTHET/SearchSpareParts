import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleDto } from '../../shared/dto/role.dto';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './authorization.page.html',
  styleUrl: './authorization.page.css',
})
export class AuthorizationPage {
  authorization_form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });
  name_is_valid: boolean = true;
  password_is_valid: boolean = true;
  error_message: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  auth() {
    this.error_message = '';
    this.name_is_valid = this.authorization_form.get('name')?.valid ?? false;
    this.password_is_valid =
      this.authorization_form.get('password')?.valid ?? false;
    if (!this.name_is_valid || !this.password_is_valid) {
      return;
    }
    this.authService.login(this.authorization_form.value).subscribe({
      next: (result: RoleDto) => {
        /* Если пользователь авторизовался будучи уже авторизованным то произвожу данную махинацию,
        иначе Angular не заметит изменение и проект сломается */
        if (this.authService.isAuth()) {
          this.authService.isAuth.set(false);
        }
        this.authService.isAuth.set(true);
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('role', result.role);
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.error_message = 'Неправильный логин или пароль';
        } else {
          this.error_message = 'Неизвестная ошибка';
        }
      },
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.clear();
      this.authService.isAuth.set(false);
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}
