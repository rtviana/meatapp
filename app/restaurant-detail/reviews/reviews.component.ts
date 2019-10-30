import {Component, OnInit} from '@angular/core';``
import {ActivatedRoute} from '@angular/router';
import {RestaurantService} from '../../restaurants/restaurants.service'
import {Observable} from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'  
})

export class ReviewsComponent implements OnInit {

  //usando o pipe ao inves do subscribe
  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }
}
