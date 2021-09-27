import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Id:any;
  book:any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.Id = activatedRoute.snapshot.paramMap.get('Id');

   }
  ngOnInit(): void {
    this.dataService.getBooksById(this.Id).subscribe(data => {
      this.book = data;
    })

  }

}
