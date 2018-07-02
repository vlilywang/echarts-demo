import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ServicesModule} from './snippets/services/services.module';
import { ROUTE_CONFIG} from './m-router';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    // ServicesModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [AppComponent],
})
export class AppModule { }
