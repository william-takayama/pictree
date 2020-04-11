import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({ providedIn : 'root' }) // Any component can hava acces to http
export class PhotoService {

    constructor(private http: HttpClient) { // Private - No one is allowed to acces http, besides the class

    }
    // Must return just the list
    listFromUser(userName: string){
        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`) // Assures to return a OBJECT ARRAY 
    }
    
    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
        return this.http   
            .get<Photo[]>(`${API}/${userName}/photos`, { params })
    }

    upload(description: string, allowComments: boolean, file: File) {
        // I'm not sending a JSON, must send FormData
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false'); // Must be converted to string
        formData.append('imageFile', file);
        return this.http.post(API + '/photos/upload', formData);
    }

}