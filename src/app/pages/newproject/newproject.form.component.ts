import {Component, ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder,  Validators } from '@angular/forms';
import {Customer} from './customer.interface';

@Component({
  selector: 'formdetails-newproject',
  styles: [require('./newproject.scss')],
    template: require('./newproject.html'),
})
export class FormDetailsNewproject {
     public myForm: FormGroup;

  constructor(private router: Router, private _fb: FormBuilder) {
  }

ngOnInit() {
  
      this.myForm = this._fb.group({
            brand: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
  
  this.gameclicked()
 }



 initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }


   removeAddress(index: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(index);
    }


        save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }

  none(){
    jQuery("#game").hide()
    jQuery("#video").hide()
    jQuery("#brand").hide()

  }





  gameclicked() { 
    
    jQuery("#game").show()
    //jQuery("div").addClass("important");
    jQuery("#video").hide()
    jQuery("#brand").hide()


    
}

    brandclicked() {     
 jQuery("#game").hide()
 jQuery("#video").hide()
 jQuery("#brand").show()
  }


    videoclicked() { 
      
    //  this.none();
      jQuery("#game").hide()
    jQuery("#video").show()
    jQuery("#brand").hide()

  }


//   jQuery('#menu a').on('click', function(){
//     $('li a.current').removeClass('current');
//     $(this).addClass('current');
// });

}