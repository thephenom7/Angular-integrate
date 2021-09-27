import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
Id:any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.Id = activatedRoute.snapshot.paramMap.get('Id');

   }

  ngOnInit(): void {
  }

onSubmit(data :any)
{
  console.log(data);
  this.dataService.updateBooks(data,this.Id).subscribe()
  this.router.navigateByUrl("test")

}

}
