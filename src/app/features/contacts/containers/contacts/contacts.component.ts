import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Scrollable } from '../../../../shared/ScrollablePage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as uuid from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent extends Scrollable implements OnInit, AfterViewInit {

  contactForm: FormGroup;
  public $sending: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    super();
  }

  ngOnInit() {
    this.buildForm();
    this.contactForm.controls.phoneNumber.valueChanges.subscribe((val) => {
    })
  }

  ngAfterViewInit(): void {
    this.initScrollbar();
  }

  private buildForm(): void {
    this.contactForm = this.fb.group({
      lastname: ['', [Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      phoneNumber: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]]
    });
  }

  public sendEmail(): void {
    this.$sending.next(true);
    const requestId: string = uuid.v4();

    let body = {
      content: this.contactForm.controls['message'].value,
      customer: this.contactForm.controls['email'].value,
      subject: this.contactForm.controls['subject'].value,
      firstname: this.contactForm.controls['firstname'].value,
      lastname: this.contactForm.controls['lastname'] ? this.contactForm.controls['lastname'].value : '',
      phoneNumber: this.contactForm.controls['phoneNumber'].value,
      requestId
    }

    this.http.post(`${environment.emailBackend}/email`, body)
      .pipe(finalize(() => this.$sending.next(false)))
      .subscribe(() => {
        this.toastr.success('Votre demande a été envoyée !', 'Bravo !');
        this.contactForm.reset();
      }, () => {
        this.toastr.error('Une erreur est survenue, essayez de me contacter directement !', 'Oups !');
      });
  }

}
