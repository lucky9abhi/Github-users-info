import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";


@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.css'],
  providers:[GithubService]
})
export class GitusersComponent implements OnInit {

  public searchText;
  public searchResult;
  public searchCount;

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
        this.searchResult = res;
        this.searchCount = res.total_count;
      }
    );
  }
}
