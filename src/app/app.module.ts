import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoModule } from './forms/todo/todo.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './forms/todo/store/todos.reducer';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todoState: todoReducer}),
    BrowserAnimationsModule,
    TodoModule,
    MatCardModule,
    MatFormFieldModule,
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: !isDevMode(),
      autoPause: true, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
