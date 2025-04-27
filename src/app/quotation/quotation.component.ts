import { Component } from '@angular/core';
import { ImportExportService } from '../Shared/import-export.service';  
import { NgForm } from '@angular/forms';
import { ImportExport } from '../Shared/import-export.model';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css'
})
export class QuotationComponent {
constructor(public service:ImportExportService){

}
ngOnInit():void{
  this.service.refreshList();
}
OnSubmit(form:NgForm){
 this.service.postImportExport().subscribe({
  next:res=>{
    this.service.list=res as ImportExport[];
    //    console.log(res);
   // this.service.resetForm(form);
    
  },  
  error:err=>{console.log(err)}
 })
}
}
