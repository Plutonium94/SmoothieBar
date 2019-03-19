import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSmoothieMakerComponent } from './custom-smoothie-maker/custom-smoothie-maker.component';
import { CartComponent } from './cart/cart.component';
import { SmoothieChooserComponent } from './smoothie-chooser/smoothie-chooser.component';
import { ReviewComponent } from './review/review.component';
import { SaladChooserComponent } from './salad-chooser/salad-chooser.component';
import { SaladMakerComponent } from './salad-maker/salad-maker.component';

const appRoutes :Routes = [
    { path: '', redirectTo: 'smoothie', pathMatch: 'full' },
    { path: 'review', component: ReviewComponent},
    { path: 'smoothie', component: SmoothieChooserComponent},
    { path: 'cart', component: CartComponent },
    { path: 'salad', component: SaladChooserComponent },
    { path: 'make-salad', component: SaladMakerComponent }

];

@NgModule({
	declarations: [
		AppComponent,
		CustomSmoothieMakerComponent,
		CartComponent,
		SmoothieChooserComponent,
		ReviewComponent,
		SaladChooserComponent,
		SaladMakerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
        RouterModule.forRoot(appRoutes, {'enableTracing':false})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
