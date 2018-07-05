import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
const API_URL = 'http://localhost:3001/v1';

@Injectable()
export class LayoutService {
  public headers: any;
  private errorMsg: string = "Network Error: Please check your network connection";

      constructor(private http: Http) {
  }
  
getLayoutByClientName(name:string) {
  let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/getlayout?client='+name;
    this.http.get(apiURL).subscribe((res)=>{
      resolve(res.json().data)
    },(err)=>{
      reject(err)
    });   
  });
  return promise;
}

getAllClient() {
  let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/getclients';
    this.http.get(apiURL).subscribe((res)=>{
       resolve(res.json().data)
    },(err)=>{
      reject(err)
    });
  });
   return promise;
}

updateLayout(layout:any,client:string) {
   var formatedPostData={
    "type": layout.type,
    "callnumber": layout.callnumber,
    "buttons": {
        "button_1": {
            "name_en": layout.name_en,
            "dataUrl": layout.dataUrl,
            "icon": layout.icon,
            "modal": layout.modal,
            "avatar": layout.avatar,
            "action": layout.action
        },
        "button_2": {
            "name_en": "DOCTORS",
            "dataUrl": "getdoctors",
            "icon": "person",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_3": {
            "name_en": "INSURANCES",
            "dataUrl": "getinsurances",
            "icon": "list-box",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_4": {
            "name_en": "SERVICES",
            "dataUrl": "getinsurances",
            "icon": "medkit",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_5": {
            "name_en": "LOCATION",
            "dataUrl": "",
            "icon": "md-locate",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_6": {
            "name_en": "NEWS EVENTS",
            "dataUrl": "getnews",
            "icon": "megaphone",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_7": {
            "name_en": "ABOUT US",
            "dataUrl": "medical",
            "icon": "medical",
            "modal": "Card",
            "avatar": true,
            "action": "list"
        }
    }
  }
  this.postCallWithoutLoader(API_URL + '/editlayout?client='+client,formatedPostData);
}

private postCallWithoutLoader(completeURL,postData){
  return new Promise((resolve, reject) => {
    this.http.post(completeURL, postData,{headers: this.headers})
      .subscribe(
        (res) => {
          const data:any = res.json();
          console.log(res.status);
         
           switch (res.status) {
              case 200:
                resolve(data.data)
                break;
              case 400:
                console.log("unautharized");
                break;
              default:
                reject(data.error);                
                break;
            }
        },
        (err) => {
          reject(err)
        })
    })
}

deleteLayout(client:string) {

  var formatedPostDataForDelete={

    "type": "",
    "callnumber": "",
    "buttons": {
        "button_1": {
            "name_en": "",
            "dataUrl": "",
            "icon": "",
            "modal": "",
            "avatar":"",
            "action": ""
        },
        "button_2": {
            "name_en": "DOCTORS",
            "dataUrl": "getdoctors",
            "icon": "person",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_3": {
            "name_en": "INSURANCES",
            "dataUrl": "getinsurances",
            "icon": "list-box",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_4": {
            "name_en": "SERVICES",
            "dataUrl": "getinsurances",
            "icon": "medkit",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_5": {
            "name_en": "LOCATION",
            "dataUrl": "",
            "icon": "md-locate",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_6": {
            "name_en": "NEWS EVENTS",
            "dataUrl": "getnews",
            "icon": "megaphone",
            "modal": "List",
            "avatar": true,
            "action": "list"
        },
        "button_7": {
            "name_en": "ABOUT US",
            "dataUrl": "medical",
            "icon": "medical",
            "modal": "Card",
            "avatar": true,
            "action": "list"
        }
    }
  }
  this.postCallWithoutLoader(API_URL + '/deleteLayout?client='+client,formatedPostDataForDelete);
}

}
