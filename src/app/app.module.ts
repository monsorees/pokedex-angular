import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { InputButtonComponent } from './components/input-button/input-button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent, InputButtonComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
