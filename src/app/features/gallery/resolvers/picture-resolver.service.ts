import { PictureConfiguration } from './../models/PictureConfiguration';
import { GalleryService } from './../services/gallery.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Picture } from '../models/Picture';

@Injectable()
export class PictureResolverService implements Resolve<PictureConfiguration> {

  constructor(private galleryService: GalleryService) { }

  resolve(route: ActivatedRouteSnapshot) {
      return this.galleryService.getPictureConfiguration$();
  }
}
