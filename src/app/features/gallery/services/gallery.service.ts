import { PictureConfiguration } from './../models/PictureConfiguration';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Picture } from '../models/Picture';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient) { }


  public getPictureConfiguration$(): Observable<PictureConfiguration> {
    return this.http.get<PictureConfiguration>(`${environment.backend}/assets/pictures_configuration.json`).pipe(tap(c => console.log(c)));
  }

  public buildFilter(picture: Picture): string[] {
    return picture.categories.map((category) => `filter-${category}`)
  }
}
