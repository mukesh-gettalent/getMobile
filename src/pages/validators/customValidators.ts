import { AbstractControl, ValidatorFn } from '@angular/forms';
import {  FormGroup } from '@angular/forms'; //FormBuilder, , Validators

export function checkFirstCharacterValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = /(?=.*[A-Z])/.test(control.value);
	return (valid) ? {checkFirstCharacterValidatorOutput: true} : null;
  };
}

// FORM GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  console.log("match");
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    
    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}

// Password Validation
export function passwordPattern(sample:any) {
  console.log("passwordPattern");
        var passwordPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
        if (passwordPattern.test(sample.value)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
