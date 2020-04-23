import { Component, OnInit } from '@angular/core';
import { CustomValidator } from '../../validator/custom-validator';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirmation: FormControl;
  term: FormControl;

  form: FormGroup;

  passwordLength = 3;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // new FormControl(default value, [Validators], [Asynchronous Validators])

    this.email = new FormControl(null, [
      Validators.required,
      CustomValidator.email()
    ]);
    this.password = new FormControl(null, [
      Validators.required,
      Validators.minLength(this.passwordLength)
    ]);
    this.confirmation = new FormControl(null, [Validators.required]);
    this.term = new FormControl(false, [Validators.requiredTrue]);

    this.form = this.fb.group(
      {
        email: this.email,
        password: this.password,
        confirm: this.confirmation,
        term: this.term 
      },
      {
        validators: CustomValidator.match_password()
      }
    );
  }

  singup(): void{
    for(const key in this.form.controls){
      if(this.form.contains(key)){
        this.form.get(key).markAsDirty();
        this.form.get(key).markAsTouched();
      }
    }

    if(this.form.valid){
      console.log(this.form.value);
      this.form.reset();
    }
  }

  public controlEmail(): string 
  {
    if(this.email.touched){
      if(this.email.hasError('required')){
        return 'Le email est obligatoire';
      }
      if(this.email.hasError('error_email')){
        return 'Le email n\'est pas vide';
      }
    }
    return null;
  }

  public controlPassword(): string {
    if(this.password.touched){
      if(this.password.hasError('required')){
        return 'Le mot de passe est obligatoire';
      }
      if(this.password.hasError('minlength')){
        return 'Le mot de passe doit contenir au moins ${this.passwordLength} caractères';
      }
    }
    return null;
  }

  public controlConfirmation(): string{
    if (this.confirmation.touched){
      if (this.confirmation.hasError('required')){
        return 'Le confirmation est obligatoire';
      }

      if (this.form.hasError('match_password')){
        return 'Le mot de passe et la confirmation ne sont pas identique';
      }
    }
    return null;
  }

  public controlTerm() : string 
  {
    if(this.term.touched){
      if(this.term.hasError('required')){
        return 'Veuillez validez tous ça MERDE!!!!';
      }
    }
    return null;
  }

}
