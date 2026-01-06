import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MovieDashComponent } from './movie-dash/movie-dash.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PostDashComponent } from './post-dash/post-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProdDashComponent } from './prod-dash/prod-dash.component';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { TudoDashComponent } from './tudo-dash/tudo-dash.component';
import { TudoListComponent } from './tudo-list/tudo-list.component';
import { TudoFormComponent } from './tudo-form/tudo-form.component';
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { ProductDashComponent } from './product-dash/product-dash.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    MovieDashComponent,
    MovieCardComponent,
    PostDashComponent,
    ProdDashComponent,
    ProdCardComponent,
    TudoDashComponent,
    TudoListComponent,
    TudoFormComponent,
    GetConfirmComponent,
    ProductDashComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
