import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

const materialComponents = [
	MatSliderModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatRadioModule,
	MatButtonModule,
];

@NgModule({
	exports: materialComponents,
	imports: materialComponents,
})
export class MaterialModule {}
