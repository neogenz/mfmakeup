import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './containers/gallery/gallery.component';
import { PictureComponent } from './components/picture/picture.component';
import { FiltersComponent } from './components/filters/filters.component';
import { GalleryService } from './services/gallery.service';
import { PictureResolverService } from './resolvers/picture-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleryComponent, PictureComponent, FiltersComponent],
  providers: [GalleryService, PictureResolverService]
})
export class GalleryModule { }
