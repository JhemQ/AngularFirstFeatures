import { Component, OnInit } from '@angular/core';
import { BlogInterface } from '../../models/blog-interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs:BlogInterface[] = []
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  blogAction(blog: BlogInterface){
    console.log(blog)
  }

}
