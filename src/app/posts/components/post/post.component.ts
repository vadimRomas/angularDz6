import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../model/iposts";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
  posts:IPosts;
  constructor() { }

  ngOnInit(): void {
  }

}
