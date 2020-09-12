import { Component, OnInit } from '@angular/core';
import { TranslationService } from './core/_base/services/translation.service';
// Import langs
import { locale as esLang } from './core/_config/i18n/es';
import { AppService } from './core/_base/services/app.service';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { SetPublicKey, AddLogMessge } from './core/store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba';

  constructor(
    private translationService: TranslationService,
    private appService: AppService,
    private store: Store
    ) {
    this.translationService.loadTranslations(esLang);
  }

  ngOnInit() {
    this.appService.getPublicKey()
    .pipe(
      map( (response: any) => {
        if (response.key) {
          this.store.dispatch( new SetPublicKey(response.key));
        }
        this.store.dispatch(new AddLogMessge({
          date: Date.now(),
          action: 'getPublicKeyServerResponse',
          response
        }));
      })
    )
    .subscribe();
  }
}
