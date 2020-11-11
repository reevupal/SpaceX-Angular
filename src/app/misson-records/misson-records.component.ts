import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-misson-records',
  templateUrl: './misson-records.component.html',
  styleUrls: ['./misson-records.component.css']
})
export class MissonRecordsComponent implements OnInit {

  launchYearArray : any = [];
  tempresponse: any;
  filterForm :FormGroup;

  constructor(private httpSevice : HttpServiceService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      'yearfilter' : [''],
      'launchFilter' : [''],
      'landfilter' : ['']
    })
    this.fetchAllRecords();

    this.filterForm.valueChanges.subscribe(newValue =>{
      this.filterByYear();
    })
  }
  fetchAllRecords() {

    this.httpSevice.getAllRecords().subscribe(response =>{
      console.log(response);
      this.tempresponse = response;
      this.fetchYear(this.tempresponse);
    })
  }

  fetchYear(data){
    data.forEach(element => {
      this.launchYearArray.push(element['launch_year']);
    });

    this.launchYearArray = [... new Set (this.launchYearArray)];
    console.log(this.launchYearArray);
  }

  filterByYear(){
    const reqObj = {
      year : this.filterForm.get('yearfilter').value,
      launch : this.filterForm.get('launchFilter').value,
      land : this.filterForm.get('landfilter').value
    }
    this.httpSevice.filterRecords(reqObj).subscribe(response =>{
      console.log(response);
      this.tempresponse = response;
    })
  }

  reset(){
    //this.filterForm.reset();
    this.filterForm.patchValue({
      yearfilter : '',
      launchFilter : '',
      landfilter : ''
    })
    this.fetchAllRecords();
    
  }
}
