import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userInitial: string;
  currentUrl: string;
  isWalkinDashboard: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      this.checkUrl();
    });
  }

  checkUrl() {
    this.isWalkinDashboard = false;
    if (this.currentUrl?.includes('walkins')) {
      // getting first character of username
      this.userInitial = this.authService.userEmail.charAt(0);
      this.isWalkinDashboard = true;
    }
  }
}
