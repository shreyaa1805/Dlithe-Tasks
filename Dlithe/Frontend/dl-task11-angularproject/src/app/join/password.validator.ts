//Custom Validation
import {AbstractControl} from '@angular/forms';

export function PasswordValidator(control: AbstractControl) {
    const password = control.get('pass');
    const confirmpassword = control.get('cpass');
    if(!password?.pristine && confirmpassword?.pristine){
        return null;
    }
    return password && confirmpassword && password.value !== confirmpassword.value
    ? {doNotMatch : true}
    : null;
}