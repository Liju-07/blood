import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  constructor() { }

  name=""
  blood=""
  donatDate=""
  Disease=""
  dob=""
  Address=""
  Pin=""
  Mobile=""
  Email=""

  read=()=>{
let data={
  
  name:this.name,
  blood:this.blood,
  donatDate:this.donatDate,
  Disease:this.Disease,
  dob:this.dob,
  Address:this.Address,
  Pin:this.Pin,
  Mobile:this.Mobile,
  Email:this.Email,

}
console.log(data)
  }


  ngOnInit(): void {
  }

}
