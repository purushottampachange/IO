import { Component, OnInit } from '@angular/core';
import { Imovie } from '../shared/model/movie';
import { movies } from '../shared/const/movie';

@Component({
  selector: 'app-movie-dash',
  templateUrl: './movie-dash.component.html',
  styleUrls: ['./movie-dash.component.scss']
})
export class MovieDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movieArr : Array<Imovie> = movies;

}
