import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './core/store/state/app.state';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    NgxsModule.forRoot([AppState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
