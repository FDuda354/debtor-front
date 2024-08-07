import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuBarComponent } from './components/layout/menu-bar/menu-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { MenuItemComponent } from './components/layout/menu-bar/menu-item/menu-item.component';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './components/layout/default/default-component';
import { HeaderBarComponent } from './components/layout/header-bar/header-bar.component';
import { HomeComponent } from './components/modules/home/home.component';
import { DebtorsComponent } from './components/modules/debtors/debtors.component';
import { CreditorsComponent } from './components/modules/creditors/creditors.component';
import { TransactionsComponent } from './components/modules/transactions/transactions.component';
import { SettingsComponent } from './components/modules/settings/settings.component';
import { RouterModule } from '@angular/router';
import { MenageDebtComponent } from './components/common/components/menage-debt/menage-debt.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './components/modules/login/login.component';
import { LoginFormComponent } from './components/modules/login/login-form/login-form.component';
import { PasswordModule } from 'primeng/password';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { UserAuthGuard } from './components/common/guard/user-auth-guard';
import { PaginatorModule } from 'primeng/paginator';
import { HttpInterceptorService } from './services/auth/http-interceptor.service';
import { DebtCardComponent } from './components/common/components/debt-card/debt-card.component';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';
import { TransformDatePipe } from './pipes/transform-date.pipe';
import { TableModule } from 'primeng/table';
import { TransformDateWithHourPipe } from './pipes/transform-date-with-hour.pipe';
import { HomeTableComponent } from './components/modules/home/home-table/home-table.component';
import { HomeSummaryComponent } from './components/modules/home/home-summary/home-summary.component';
import { ChartModule } from 'primeng/chart';
import { HomeDebtCountComponent } from './components/modules/home/home-debt-count/home-debt-count.component';
import { ChipModule } from 'primeng/chip';
import { SkeletonModule } from 'primeng/skeleton';
import { RegistrationPageComponent } from './components/modules/registration-page/registration-page.component';
import { MessageModule } from 'primeng/message';
import {
  RegistrationFormComponent
} from './components/modules/registration-page/registration-form/registration-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DebtDetailsComponent } from './components/common/components/debt-details/debt-details.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UiHeaderComponent } from './components/common/components/ui/ui-header/ui-header.component';
import { PayFormComponent } from './components/common/components/debt-details/pay-form/pay-form.component';
import { SettingItemComponent } from './components/modules/settings/setting-item/setting-item.component';
import { PasswordChangeComponent } from './components/modules/settings/password-change/password-change.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FriendsComponent } from './components/modules/friends/friends.component';
import { FriendCardComponent } from './components/modules/friends/friend-card/friend-card.component';
import { AddFriendComponent } from './components/modules/friends/add-friend/add-friend.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProfileImageChangeComponent } from './components/modules/settings/profile-image-change/profile-image-change.component';
import {FileUploadModule} from "primeng/fileupload";
import {ImageModule} from "primeng/image";
import { FieldsetModule } from 'primeng/fieldset';
import { NotificationService } from './services/notification.service';
import { BadgeModule } from 'primeng/badge';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    MenuBarComponent,
    MenuItemComponent,
    HeaderBarComponent,
    HomeComponent,
    DebtorsComponent,
    CreditorsComponent,
    TransactionsComponent,
    SettingsComponent,
    MenageDebtComponent,
    LoginComponent,
    LoginFormComponent,
    DebtCardComponent,
    TransformDatePipe,
    TransformDateWithHourPipe,
    HomeTableComponent,
    HomeSummaryComponent,
    HomeDebtCountComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    DebtDetailsComponent,
    UiHeaderComponent,
    PayFormComponent,
    SettingItemComponent,
    PasswordChangeComponent,
    FriendsComponent,
    FriendCardComponent,
    AddFriendComponent,
    ProfileImageChangeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
    MenuModule,
    CheckboxModule,
    InputNumberModule,
    CalendarModule,
    PasswordModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    PaginatorModule,
    CardModule,
    NgOptimizedImage,
    TableModule,
    ChartModule,
    ChipModule,
    SkeletonModule,
    MessageModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    InputTextareaModule,
    ConfirmDialogModule,
    InputSwitchModule,
    FileUploadModule,
    ImageModule,
    FieldsetModule,
    BadgeModule,
    VirtualScrollerModule,
    OverlayPanelModule,
  ],
  providers: [
    UserAuthGuard,
    NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
