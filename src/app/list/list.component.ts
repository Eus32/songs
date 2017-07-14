import { Component, OnInit } from '@angular/core';
import { RESTSongsService } from '../restsongs.service';

import { Song } from '../../model/app.Song';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  songsList: Song[];
  messageError: string;

  constructor(private songSrv: RESTSongsService) { }

  ngOnInit() {
    this.songSrv.getSongs().subscribe(
      data =>this.songsList=data as Song[],
      error => this.messageError = <any>error);
  }
}
