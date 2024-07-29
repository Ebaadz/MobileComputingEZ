import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  tipForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.tipForm = this.fb.group({
      cost: ['', [Validators.required, Validators.min(0)]],
      quality: ['0.15', Validators.required],
      roundUp: [false]
    });
  }

  onSubmit() {
    if (this.tipForm.valid) {
      this.router.navigate(['/output'], { state: this.tipForm.value });
    }
  }
}

