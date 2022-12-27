import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

 private logging: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);

 get sharingObservable(){

  return this.logging.asObservable();
 }

 set sharingObservableData(data: any){

  this.logging.next(data);
 }


}
