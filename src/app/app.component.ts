import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Daily Note';
  data;
  info = {
    "uCurrency":false,
    "location":{
      "village": "daramuda",
      "upazila": "santhia",
      "dist": "pabna"
      },
    "currency":[
      {
      "value":"USD",
      "key": {
        "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
        }
      },
      {
      "value":"CAD",
      "key":{
          "symbol": "CA$",
          "name": "Canadian Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "CAD",
          "name_plural": "Canadian dollars"
        }
      },
      {
      "value":"EUR",
      "key": {
          "symbol": "€",
          "name": "Euro",
          "symbol_native": "€",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "EUR",
          "name_plural": "euros"
        }
      },
      {
      "value":"AED",
      "key":{
          "symbol": "AED",
          "name": "United Arab Emirates Dirham",
          "symbol_native": "د.إ.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "AED",
          "name_plural": "UAE dirhams"
        }
      },
      {
      "value":"AFN",
      "key": {
            "symbol": "Af",
            "name": "Afghan Afghani",
            "symbol_native": "؋",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AFN",
            "name_plural": "Afghan Afghanis"
        }
      },
      {
      "value":"ALL",
      "key": {
            "symbol": "ALL",
            "name": "Albanian Lek",
            "symbol_native": "Lek",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ALL",
            "name_plural": "Albanian lekë"
        }
      },
      {
      "value":"AMD",
      "key": {
            "symbol": "AMD",
            "name": "Armenian Dram",
            "symbol_native": "դր.",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AMD",
            "name_plural": "Armenian drams"
        }
      },
      {
        "value":"ARS",
        "key": {
            "symbol": "AR$",
            "name": "Argentine Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ARS",
            "name_plural": "Argentine pesos"
        }
      },
      {
        "value":"AUD",
        "key": {
            "symbol": "AU$",
            "name": "Australian Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AUD",
            "name_plural": "Australian dollars"
        }
      }
    ],
    "college": {
      "std": [
        {"id": 201111017, "fname": "mahmudul", "lname": "islam"},
        {"id": 201111018, "fname": "firoz", "lname": "ahmed"}
      ]
    },
    "dept":[
        { "dept_no": 1, "dept_name": "CSE" },
        { "dept_no": 2, "dept_name": "EEE" },
        { "dept_no": 3, "dept_name": "CE" }
      ],
    "shippingFormat": [
      { "key": "On", "value": "on" },
      { "key": "Off", "value": "off" }
    ],
    "discountFormat":[
      { "key": "Flat Discount", "value": "flat"},
      { "key": "% Discount", "value": "percentage"},
      { "key": "On", "value": "on" }
    ],
    "taxFormat":[
      { "key": "VAT", "value": "vat"},
      { "key": "Flat Tax", "value": "flat"},
      { "key": "% Tax", "value": "percentage"},
      { "key": "On", "value": "on" }
    ],

  }

  dept_no=1;
  value="on";
  currencySymbol="$";
  taxFormat='vat';
  discountFormat='flat';
  shippingFormat='on';


  ngOnInit(){
    this.setLocal();
  }

  setLocal(){
    localStorage.setItem("info", JSON.stringify(this.info));
    this.getLocal();
  }

  getLocal(){
    this.data = JSON.parse(localStorage.getItem('info'));
    console.log(this.data);
    this.Display(this.data);
  }

  Display(mydata){
      console.log(mydata.dept.length);
      for(let i=0; i< mydata.dept.length; i++)
      {
        console.log(mydata.dept[i]["dept_no"], mydata.dept[i]["dept_name"]);
      }
  }

  removeLocal(){
    localStorage.clear();
  }
}
