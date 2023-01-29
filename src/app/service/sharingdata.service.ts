import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  private sendata = new BehaviorSubject('Basic Approval is required!');
  currentsendata = this.sendata.asObservable();

  constructor() {

  }
  updateApprovalMessage(message: any) {
  this.sendata.next(message)
  }
}
