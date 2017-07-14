import { Component, OnInit } from '@angular/core';
import { RESTSongsService } from '../restsongs.service';
import { ActivatedRoute } from '@angular/router';

import { Song } from '../../model/app.Song';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  song: Song;
  messageError:string;
  id: string;

  constructor(private songSrv: RESTSongsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id= params['id']});

    this.songSrv.getSong(this.id).subscribe(
      data =>this.song=data as Song,
      error => this.messageError = <any>error);
  }

}
