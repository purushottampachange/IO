import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/model/postCard';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss'],
})
export class PostDashComponent implements OnInit {

  postArr !: Array<IPost>

  baseURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    console.log('hi');

    this._http.get<Array<IPost>>(this.baseURL).subscribe((res) => {
     
      this.postArr = res
    });
  }
}
