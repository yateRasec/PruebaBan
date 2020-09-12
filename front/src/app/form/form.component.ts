import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {enmascararValor, encriptarCampo} from './../core/_util/forge.all.min.js';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../core/store/state/app.state.js';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../core/_base/services/app.service.js';
import { AddLogMessge } from '../core/store/actions/app.actions.js';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  publicKey: string;
  @Select(AppState.getPublicKey) publicKey$: Observable<any>;
  submited = false;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private store: Store
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      document: [null, [Validators.required]],
      cryptDocument: [null, Validators.required]
    });

    this.publicKey$.pipe(
      map( key => this.publicKey = key )
    ).subscribe();
  }

  applyMask() {
    if (!this.form.controls.document.invalid) {
      this.form.controls.cryptDocument.setValue(
        encriptarCampo(this.form.controls.document.value, this.publicKey)
      );
      this.store.dispatch(new AddLogMessge({
        date: Date.now(),
        action: 'encriptarCampo',
        response: this.form.controls.cryptDocument.value
      }));
      this.form.controls.document.setValue(
        enmascararValor( this.form.controls.document.value, 2 )
      );
      this.store.dispatch(new AddLogMessge({
        date: Date.now(),
        action: 'enmascararValor',
        response: this.form.controls.document.value
      }));
    }
  }
  get f() { return this.form.controls; }
  submit() {
    this.submited = true;
    if ( this.form.valid ) {
      const form = this.form.getRawValue();
      const data = {name: form.name, document: form.cryptDocument};
      this.store.dispatch(new AddLogMessge({
        date: Date.now(),
        action: 'sendForm',
        response: data
      }));
      this.appService.sendForm(data)
      .pipe(map( response => {
        this.store.dispatch(new AddLogMessge({
          date: Date.now(),
          action: 'sendFormServerResponse',
          response
        }));
      }))
      .subscribe();
    }
  }

}
