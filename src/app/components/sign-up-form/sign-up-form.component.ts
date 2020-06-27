import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { SignUpFormState } from 'src/app/models/signUpFormMemento';

@Component({
	selector: 'sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
	constructor() {}

	@Output('onFormChange') formChange = new EventEmitter();

	signUpForm = new FormGroup({
		name: new FormControl(''),
		lastName: new FormControl(''),
		address: new FormControl(''),
		gender: new FormControl(''),
	});

	ngOnInit() {
		this.signUpForm.valueChanges.subscribe(values =>
			this.formChange.emit(values)
		);
	}

	getState(): SignUpFormState {
		return new SignUpFormState(this.signUpForm.value);
	}

	restoreState(state: SignUpFormState) {
		this.signUpForm.patchValue(state.content, { emitEvent: false });
	}
}
