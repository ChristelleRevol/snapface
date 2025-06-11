import { Component, OnInit } from '@angular/core';
import {FaceSnapComponent} from "./face-snap/face-snap.component"
import {FaceSnap} from "./models/face-snap"

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mySnap!: FaceSnap;
  secondSnap!: FaceSnap

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "Something something", 
      "We Win",
      new Date,
      0,
      "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZD22PcM9yBT804IzKtqSC9rti4v_rKw0Ge9FTiSlkiplGFGl4VwR7boTWZKz7g9hnRJCxyrC966Ve_X-RSWguD9E7vAFXeGsdx7.jpg?r=40f")
    this.mySnap.setLocation("no location duh")

    
    this.secondSnap = new FaceSnap(
      "Maledictus",
      "rip",
      new Date,
      5,
      "https://www.metalorgie.com/media/cache/band_hero/images/band/picture/Ultra-Vomit.jpg"
    )
    }
}
