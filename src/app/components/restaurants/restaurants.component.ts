import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public data: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.data().subscribe((data) => {
      this.data = data
      console.log("DATA", data );

    })

  }

}
