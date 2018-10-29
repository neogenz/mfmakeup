import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from './containers/benefits/benefits.component';
import { ParticularComponent } from './containers/particular/particular.component';
import { ProfessionalComponent } from './containers/professional/professional.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BenefitsComponent, ParticularComponent, ProfessionalComponent]
})
export class BenefitsModule { }
