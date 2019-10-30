import { Component, OnInit ,Inject} from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { error } from 'protractor';

import { flyInOut , expand} from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish:Dish
  promotion:Promotion;
  leader:Leader;
  disherr:string;
  promotionerr:string;
  leadererr:string;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService:LeaderService,
    @Inject("BaseURL")private BaseURL
    ) { }

  ngOnInit() {
    //this.dish = 
    this.dishservice.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
      disherr=>this.disherr=<any> disherr);
    this.promotionservice.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion,
      promotionerr=> this.promotionerr=<any>promotionerr);
    this.leaderService.getFeaturedLeader()
    .subscribe(leader => this.leader = leader,
      leadererr => this.leadererr = <any>leadererr);
  }

}
