import{Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppService{

    constructor (private http : Http){}
getIndex() {
return this.http.get("http://localhost:52034/api/home/index")

}
}