import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { routes } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RESTSongsService} from './restsongs.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewSongComponent } from './new-song/new-song.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewSongComponent,
    AboutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RESTSongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
