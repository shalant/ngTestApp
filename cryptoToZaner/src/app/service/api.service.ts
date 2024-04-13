import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCurrency(currency:string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  getTrendingCurrency(currency:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }

  getGraphicalCurrencyData(coinId: string, currency: string, days: number){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }

  getCurrencyById(coinId:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }

  getUsdaInfo() {
    return this.http.get<any>('https://quickstats.nass.usda.gov/api/api_GET/?key=DELETED&commodity_desc=CORN&statisticcat_desc=AREA%20PLANTED&unit_desc=ACRES&year__GE=2023')
  }



  // fetchData() {
  //   try {
  //     this.httpClient
  //     .get('https://quickstats.nass.usda.gov/api/api_GET/?key=C2ADF26B-BD8D-328A-968F-2F175A287144&commodity_desc=CORN&statisticcat_desc=AREA%20PLANTED&unit_desc=ACRES&year__GE=2023')
  //     // .get('environment.usdaQuickStatUrl2023')
  //     .subscribe((data: any) => {
  //     console.log(data);
  //     this.data = data;
  //   });
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  
}
