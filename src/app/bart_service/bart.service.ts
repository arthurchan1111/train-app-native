import { Injectable } from  '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class BartService{
  constructor(private _httpClient: HttpClient){

  }
  public getStations(){
    this._httpClient.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y")
    .subscribe(
      (data:any) =>
      console.log(data);
    )
  }
}
