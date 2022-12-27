import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmarnathComponent } from './amarnath/amarnath.component';
import { OotyComponent } from './Bangalore/Mysore/ooty/ooty.component';
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
import { KASHMIRPARADISEComponent } from './kashmir-paradise/kashmir-paradise.component';
import { KeralaComponent } from './kerala/kerala.component';
import { KerlaBlackwaterComponent } from './kerla-blackwater/kerla-blackwater.component';
import { LordBuddhaComponent } from './lord-buddha/lord-buddha.component';
import { MiceComponent } from './mice/mice.component';
import { MumbaiWithKeralaComponent } from './mumbai-with-kerala/mumbai-with-kerala.component';
import { NINatureAndAdvantureTureComponent } from './ni-nature-and-advanture-ture/ni-nature-and-advanture-ture.component';
import { NorthIndiaComponent } from './north-india/north-india.component';
import { OrissaGoldenTriangleComponent } from './orissa-golden-triangle/orissa-golden-triangle.component';
import { RajasthanCulturalComponent } from './rajasthan-cultural/rajasthan-cultural.component';
import { RishikeshDevprayagRajasthanComponent } from './rishikesh-devprayag-rajasthan/rishikesh-devprayag-rajasthan.component';
import { SouthIndiaTourComponent } from './south-india-tour/south-india-tour.component';
import { SouthIndiaComponent } from './south-india/south-india.component';
import { TempleTourComponent } from './temple-tour/temple-tour.component';
import { TrainBookingComponent } from './train-booking/train-booking.component';
import { VisaComponent } from './visa/visa.component';
import { WestIndiaCultureAndBeachComponent } from './west-india-culture-and-beach/west-india-culture-and-beach.component';
import { WestIndiaCultureComponent } from './west-india-culture/west-india-culture.component';
import { YogaMeditianComponent } from './yoga-meditian/yoga-meditian.component';

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
    {path:'KASHMIR-PARADISE', component:KASHMIRPARADISEComponent},
    {path:'kerla-blackwater', component:KerlaBlackwaterComponent},
  { path: 'MumbaiWithKerala', component: MumbaiWithKeralaComponent }, 
  { path: 'NINatureAndAdvantureTure', component: NINatureAndAdvantureTureComponent }, 
  { path: 'Orissa-Golden-Triangle', component: OrissaGoldenTriangleComponent }, 
  { path:'Rajasthan-Cultural', component:RajasthanCulturalComponent},
  { path: 'Amarnath', component: AmarnathComponent }, 
  { path: 'RishikeshDevprayagRajasthan', component:RishikeshDevprayagRajasthanComponent},
  { path: 'SouthIndiaTour', component: SouthIndiaTourComponent},
  { path: 'bangalore-mysore-ooty', component: OotyComponent },
  { path: 'West-India-CultureAndBeach', component:WestIndiaCultureAndBeachComponent },
  { path: 'WestIndiaCulture', component:WestIndiaCultureComponent},
  { path: 'YogaMeditian', component: YogaMeditianComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
