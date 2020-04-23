import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }
    
    ngOnInit(): void {  
      // You must subscribe to prevent problem when changing a route
      this.activatedRoute.params.subscribe(params => {
        this.userName = params.userName;
        this.photos = this.activatedRoute.snapshot.data['photos']; // Data Pick resolve: { photos }
      });
    }

    load(){
      this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.filter = '';
          this.photos = this.photos.concat(photos) // Concat both array resulting in a new one
          if(!photos.length) this.hasMore = false;
        });
    }
}
