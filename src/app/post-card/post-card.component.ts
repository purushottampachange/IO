import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../shared/model/postCard';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent  {
  
@Input() postdata!: IPost
  
}
