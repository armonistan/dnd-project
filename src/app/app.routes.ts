import { Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { NotesComponent } from './notes/notes.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notes', component: NotesComponent }
];

