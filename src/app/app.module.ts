import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MovieModule } from './modules/movie/movie.module';
import { ArticleModule } from './modules/article/article.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryModule } from './modules/country/country.module';

@NgModule({
  declarations: [
    AppComponent, NavComponent, ArticlesComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule, MovieModule, ArticleModule, BrowserAnimationsModule, CountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
