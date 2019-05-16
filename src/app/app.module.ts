import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/HomePageComponent';
import { EventBindingComponent } from './EventBinding/EventBindingComponent';
import {PageNotFoundComponent} from './PageNotFound/PageNotFoundComponent';
import{InterpolationComponent} from './Interpolation/InterpolationComponent';
import{PropertyBindingComponent} from './PropertyBinding/PropertyBindingComponent';
import{ClassStyleBindingComponent} from './ClassStyleBinding/ClassStyleBindingComponent';
import {ExternalJsonComponent} from './ExternalJsonBind/ExternalJsonComponent';
import {examplesComponent} from './Examples/examplesComponent';



const appRoutes : Routes = [
{
	path: 'home',
	component: HomePageComponent
},
{
	path: 'examples',
	component: examplesComponent
},
{
	path: 'event-binding',
	component: EventBindingComponent		
},
{
  path: 'interpolation',
  component: InterpolationComponent
},
{
  path:'property-binding',
  component: PropertyBindingComponent
},
{
  path:'classStyle-Binding',
  component:ClassStyleBindingComponent
},
{
  path:'json-binding',
  component:ExternalJsonComponent
},
{
	path: '',
	redirectTo:'/home',
	pathMatch:'full'
},
{
	path: '**',
	component: PageNotFoundComponent	
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventBindingComponent,
    PageNotFoundComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassStyleBindingComponent,
    ExternalJsonComponent,
    examplesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
