import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getBooks(): Observable<any[]>{
    return this.http.get<any>('http://localhost:49952/api/book')
  }

  deleteBooks(id:number): Observable<any[]>{
    return this.http.delete<any>('http://localhost:49952/api/book/'+id)
  }
  addBooks(data:any): Observable<any[]>{
    return this.http.post<any>('http://localhost:49952/api/book/',data)
  }
  updateBooks(data:any,id :number): Observable<any[]>{
    return this.http.put<any>('http://localhost:49952/api/book/'+id,data)
  }

}
