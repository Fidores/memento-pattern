export interface ISignUpFormHistory {
	push: (state: SignUpFormState) => void;
	pop: () => SignUpFormState;
}

export class SignUpFormStateContent {
	lastName: string = '';
	name: string = '';
	address: string = '';
	gender: string = '';
}

export class SignUpFormHistory implements ISignUpFormHistory {
	states: SignUpFormState[] = [];

	push(state: SignUpFormState) {
		this.states.push(state);
	}

	pop() {
		return (
			this.states.pop() || new SignUpFormState(new SignUpFormStateContent())
		);
	}

	peak() {
		return (
			this.states[this.states.length - 1] ||
			new SignUpFormState(new SignUpFormStateContent())
		);
	}
}

export class SignUpFormState {
	constructor(private readonly _state: SignUpFormStateContent) {}

	get content(): SignUpFormStateContent {
		return this._state;
	}
}
