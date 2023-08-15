import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form);

    const user = this.form.value.user;
    const password = this.form.value.password;

    if (user == "0123" && password == "0123") {

      this.loadingFake();
    } else {
      this.error();
    }
  }

  error() {
    this._snackBar.open('Dados informados invalidos!', '', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  loadingFake(){
    this.loading = true;
    setTimeout(() =>{
      this.router.navigate(['dashboard/alugueis'])
    }, 1500)
  }
}
