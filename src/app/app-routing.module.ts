import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CSouthIndiaComponent } from './c-south-india/c-south-india.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { ColorsOfRajasthanComponent } from './colors-of-rajasthan/colors-of-rajasthan.component';
import { DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent } from './d-vara-khaj-orcha-agra-jaip-jodh-uda-m/d-vara-khaj-orcha-agra-jaip-jodh-uda-m.component';
import { DELHISRINAGARAGRAJAIPURComponent } from './delhi-srinagar-agra-jaipur/delhi-srinagar-agra-jaipur.component';
import { DELHIVKOAJComponent } from './delhi-v-k-o-a-j/delhi-v-k-o-a-j.component';
import { ESouthIndiaComponent } from './e-south-india/e-south-india.component';
import { ENCHANTINGSOUTHINDIAComponent } from './enchanting-south-india/enchanting-south-india.component';
import { ENLIGHTENMENTOFBUDDHATOURComponent } from './enlightenment-of-buddha-tour/enlightenment-of-buddha-tour.component';
import { ExoticGoaComponent } from './exotic-goa/exotic-goa.component';
import { FlightComponent } from './flight/flight.component';
import { GOLDENTRIANGLEOFRANTHAMBOREComponent } from './golden-triangle-of-ranthambore/golden-triangle-of-ranthambore.component';
import { GTGOLDENTEMPLEComponent } from './gt-golden-temple/gt-golden-temple.component';
import { GujaratComponent } from './gujarat/gujarat.component';
import { HomeComponent } from './home/home.component';
import { HotalBookingComponent } from './hotal-booking/hotal-booking.component';
import { IndiaComponent } from './india/india.component';
import { KarnatkaGoaTourComponent } from './karnatka-goa-tour/karnatka-goa-tour.component';
import { KeralaComponent } from './kerala/kerala.component';
import { LordBuddhaComponent } from './lord-buddha/lord-buddha.component';
import { MiceComponent } from './mice/mice.component';
import { NorthIndiaComponent } from './north-india/north-india.component';
import { SouthIndiaComponent } from './south-india/south-india.component';
import { TempleTourComponent } from './temple-tour/temple-tour.component';
import { TrainBookingComponent } from './train-booking/train-booking.component';
import { VisaComponent } from './visa/visa.component';

const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },

    //  home
    {path:'home', component:HomeComponent},
    {path:'mice', component:MiceComponent},
    {path:'booking',component:BookingComponent},
    {path:'hotel', component:HotalBookingComponent},
    {path:'visa', component:VisaComponent},
    {path:'train', component:TrainBookingComponent},
    {path:'car-Booking', component:CarBookingComponent},
    {path:'flight', component:FlightComponent},
    {path:'india', component:IndiaComponent},


    // india-dest
    {path:'temple-tour', component:TempleTourComponent},
    {path:'north-india', component:NorthIndiaComponent},
    {path:'kerala', component:KeralaComponent},
    {path:'south-india', component:SouthIndiaComponent},
    {path:'e-south-india', component:ESouthIndiaComponent},
    {path:'lord-buddha', component:LordBuddhaComponent},
    {path:'Gujarat', component:GujaratComponent},
    {path:'C-SouthIndia', component:CSouthIndiaComponent},
    {path:'ColorsOfRajasthanComponent', component:ColorsOfRajasthanComponent},
    {path:'CULTURE-TOUR', component:ENCHANTINGSOUTHINDIAComponent},
    {path:'DELHISRINAGARAGRAJAIPUR', component:DELHISRINAGARAGRAJAIPURComponent},
    {path:'ENLIGHTENMENTOFBUDDHATOUR', component:ENLIGHTENMENTOFBUDDHATOURComponent},
    {path:'ExoticGoa', component:ExoticGoaComponent},
    {path:'GOLDENTRIANGLEOFRANTHAMBORE', component:GOLDENTRIANGLEOFRANTHAMBOREComponent},
    {path:'GT-OR-GOLDENTEMPLE', component:GTGOLDENTEMPLEComponent},
    {path:'DELHI–VARANASI–KHAJURAHO–ORCHA–AGRA–JAIPUR–DELHI', component:DELHIVKOAJComponent},
    {path:'D-VARA-KHAJ-ORCHA-AGRA-JAIP-JODH-UDA-M', component:DVARAKHAJORCHAAGRAJAIPJODHUDAMComponent},
    {path:'Karnatka-Goa-Tour', component:KarnatkaGoaTourComponent},
     



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
