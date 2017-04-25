import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css'],
  providers:[GithubService]
})
export class CircularComponent implements OnInit {

  public searchText ;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
  }

  onKeyup(event){
    this.searchText = event.target.value;
  }

  getUsers(){
    this.githubService.getUser(this.searchText).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
