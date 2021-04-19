import { Component } from '@angular/core';
import { COUNTRY_STATE_CITY_LIST } from './core/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countryStateCity';
  countryList = COUNTRY_STATE_CITY_LIST;
  stateList:any;
  cityList:any;
  selectedCountry!:any;
  selectedState!:any;
  selectedCity!:any;

  onCountry(e:any){
    let obj = this.countryList.find((item)=>{
      return item.iso2 == e.value;
    });
    this.stateList = obj?.states;
    this.cityList = [];
    this.selectedCountry = obj?.name;
    this.selectedState = '';
    this.selectedCity = '';
  }
  onState(e:any){
    const obj = this.stateList.find((item:any)=>{
      return item.state_code == e.value;
    });
    this.cityList = obj?.cities;
    this.selectedState = obj?.name;
    this.selectedCity = '';
  }
  onCity(e:any){
    this.selectedCity = e.value;
  }
}
