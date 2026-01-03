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

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    MovieDashComponent,
    MovieCardComponent,
    PostDashComponent,
    ProdDashComponent,
    ProdCardComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
