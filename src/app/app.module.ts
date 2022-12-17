import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiceComponent } from './mice/mice.component';
import { BookingComponent } from './booking/booking.component';
import { HotalBookingComponent } from './hotal-booking/hotal-booking.component';
import { VisaComponent } from './visa/visa.component';
import { TrainBookingComponent } from './train-booking/train-booking.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { FlightComponent } from './flight/flight.component';
import { HeaderComponent } from './header/header.component';
import { IndiaComponent } from './india/india.component';
import { TempleTourComponent } from './temple-tour/temple-tour.component';
import { NorthIndiaComponent } from './north-india/north-india.component';
import { KeralaComponent } from './kerala/kerala.component';
import { SouthIndiaComponent } from './south-india/south-india.component';
import { ESouthIndiaComponent } from './e-south-india/e-south-india.component';
import { LordBuddhaComponent } from './lord-buddha/lord-buddha.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { CSouthIndiaComponent } from './c-south-india/c-south-india.component';
import { ColorsOfRajasthanComponent } from './colors-of-rajasthan/colors-of-rajasthan.component';
import { ENCHANTINGSOUTHINDIAComponent } from './enchanting-south-india/enchanting-south-india.component';
import { DELHISRINAGARAGRAJAIPURComponent } from './delhi-srinagar-agra-jaipur/delhi-srinagar-agra-jaipur.component';
import { ENLIGHTENMENTOFBUDDHATOURComponent } from './enlightenment-of-buddha-tour/enlightenment-of-buddha-tour.component';
import { ExoticGoaComponent } from './exotic-goa/exotic-goa.component';
import { GOLDENTRIANGLEOFRANTHAMBOREComponent } from './golden-triangle-of-ranthambore/golden-triangle-of-ranthambore.component';
import { GTGOLDENTEMPLEComponent } from './gt-golden-temple/gt-golden-temple.component';
import { DELHIVKOAJComponent } from './delhi-v-k-o-a-j/delhi-v-k-o-a-j.component';
import { DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent } from './d-vara-khaj-orcha-agra-jaip-jodh-uda-m/d-vara-khaj-orcha-agra-jaip-jodh-uda-m.component';
import { KarnatkaGoaTourComponent } from './karnatka-goa-tour/karnatka-goa-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiceComponent,
    BookingComponent,
    HotalBookingComponent,
    VisaComponent,
    TrainBookingComponent,
    CarBookingComponent,
    FlightComponent,
    HeaderComponent,
    IndiaComponent,
    TempleTourComponent,
    NorthIndiaComponent,
    KeralaComponent,
    SouthIndiaComponent,
    ESouthIndiaComponent,
    LordBuddhaComponent,
    GujaratComponent,
    CSouthIndiaComponent,
    ColorsOfRajasthanComponent,
    ENCHANTINGSOUTHINDIAComponent,
    DELHISRINAGARAGRAJAIPURComponent,
    ENLIGHTENMENTOFBUDDHATOURComponent,
    ExoticGoaComponent,
    GOLDENTRIANGLEOFRANTHAMBOREComponent,
    GTGOLDENTEMPLEComponent,
    DELHIVKOAJComponent,
    DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent,
    KarnatkaGoaTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
