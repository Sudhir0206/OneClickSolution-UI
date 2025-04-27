import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ImportExport } from './import-export.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImportExportService {
  url: string = environment.apiBaseUrl + '/AddQuotation';
  list: ImportExport[]=[];
  fromData:ImportExport= new ImportExport(); 
  constructor(private http: HttpClient) { }
  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list=res as ImportExport[];
        },
        error: err => { console.log(err) }
      })
  }
  postImportExport(){
    return this.http.post(this.url, this.fromData)
  }
  resetForm(form:NgForm){
    form.form.reset()
     this.fromData=new ImportExport()
  }
}

