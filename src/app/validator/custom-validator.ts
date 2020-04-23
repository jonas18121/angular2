import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


/*
(control: AbstractControl): ValidationErrors | null;
*/


export class CustomValidator{

    public static email(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            //(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
            const regexp = new RegExp('/^([a-zA-Z0-9]{2,})@[a-z]{4,8}[.]fr|com$/');
            if (!regexp.test(control.value)){
                return { error_email : true };
            }
            return null;
        };
    }

    public static match_password(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.get('password').value !== control.get('confirm').value) {
                return {match_password: true};
            }
            return null;
        }
    }

}