import { Component, ViewChild } from '@angular/core';
import { SignUpFormHistory } from 'src/app/models/signUpFormMemento';

import { SignUpFormComponent } from './../../components/sign-up-form/sign-up-form.component';
import { areEqual } from 'src/app/helpers/compareObjects';

@Component({
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
	constructor() {}
	@ViewChild(SignUpFormComponent, { static: false }) form: SignUpFormComponent;

	history = new SignUpFormHistory();

	addStateToHistory() {
		this.history.push(this.form.getState());
	}

	undo() {
		let state = this.history.pop();
		const sameState = areEqual(state.content, this.form.getState().content);

		state = sameState ? this.history.pop() : state;
		this.form.restoreState(state);
	}
}
