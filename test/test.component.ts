import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  books: any[] = [];

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  onButtonClick(book: any){
    console.log("onbutton")
    this.dataService.deleteBooks(book.Id).subscribe()
    this.router.navigateByUrl("test")
    .then(()=>{
      window.location.reload();
    });

  }

onSubmit(data :any)
{
  console.log(data);
  this.dataService.addBooks(data).subscribe()
  this.router.navigateByUrl("test")
  .then(()=>{
    window.location.reload();
  }

  );

}
onButtonClickEdit(book: any){
  console.log("onbuttonedit")
  this.router.navigate(['/edit',book.Id ])
}

onButtonClickView(book: any){
  console.log("onbuttonview")
  this.router.navigate(['/view',book.Id ])
}

}
