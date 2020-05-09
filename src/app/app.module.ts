import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ApiServiceService } from '../app/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent, SearchUserComponent, UserDetailsComponent],
  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
