import { ProfessionalComponent } from './features/benefits/containers/professional/professional.component';
import { IntroductionComponent } from './features/introduction/containers/introduction/introduction.component';
import { AboutComponent } from './features/about/containers/about/about.component';
import { ContactsComponent } from './features/contacts/containers/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/containers/home/home.component';
import { GalleryComponent } from './features/gallery/containers/gallery/gallery.component';
import { BenefitsComponent } from './features/benefits/containers/benefits/benefits.component';
import { PictureResolverService } from './features/gallery/resolvers/picture-resolver.service';
import { ParticularComponent } from './features/benefits/containers/particular/particular.component';

const routes: Routes = [
  //{ path: '*', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'benefits',
        component: BenefitsComponent,
      },
      {
        path: 'benefits/particular',
        component: ParticularComponent,
      },
      {
        path: 'benefits/professional',
        component: ProfessionalComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        resolve: { picturesConfiguration: PictureResolverService }
      },
      {
        path: 'contact',
        component: ContactsComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '',
        component: IntroductionComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
