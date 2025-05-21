import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Event } from '../app.component';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [HeaderComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent implements OnInit {
  service = inject(ServiceService);
  router = inject(Router);

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.getAllService().subscribe((Res) => {
      if (Res) {
        this.allEvent = Res;
        console.log(Res);
        for (let i = 0; i < this.allEvent.length; i++) {
          if (this.allEvent[i].category == this.category1name) {
            this.category1.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == this.category2name) {
            this.category2.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == this.category3name) {
            this.category3.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == this.category4name) {
            this.category4.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == this.category5name) {
            this.category5.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == this.category6name) {
            this.category6.push(this.allEvent[i]);
          }
        }
      }
    });
  }

  category1: Event[] = [];
  category2: Event[] = [];
  category3: Event[] = [];
  category4: Event[] = [];
  category5: Event[] = [];
  category6: Event[] = [];
  category7: Event[] = [];
  allEvent: Event[] = [];

  category1name = 'Musica & Cultura';
  category2name = 'Negocios & Networking';
  category3name = 'Tecnologia y Innovacion';
  category4name = 'FesFestivalestival';
  category5name = 'Salud Mental';
  category6name = 'Deportes y Fitness';

  onClickEvent(i: any) {
    localStorage.setItem('eventid', i);
    this.router.navigate(['event']);
  }
}
