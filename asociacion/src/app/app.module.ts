import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter/filter.pipe'; 
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';


//COMPONENTES
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { SomosComponent } from './components/somos/somos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { PeralesComponent } from './components/perales/perales.component';
import { EstrellaComponent } from './components/estrella/estrella.component';
import { PataguasComponent } from './components/pataguas/pataguas.component';
import { EsperanzaComponent } from './components/esperanza/esperanza.component';
import { SantaElenaComponent } from './components/santa-elena/santa-elena.component';
import { LosBatrosComponent } from './components/los-batros/los-batros.component';
import { MaitencilloComponent } from './components/maitencillo/maitencillo.component';
import { MolinoComponent } from './components/molino/molino.component';
import { OhigginsComponent } from './components/ohiggins/ohiggins.component';
import { PenascoComponent } from './components/penasco/penasco.component';
import { RiverComponent } from './components/river/river.component';
import { SanVictorComponent } from './components/san-victor/san-victor.component';
import { TablaPosicionesComponent } from './components/tabla-posiciones/tabla-posiciones.component';
import { TablaGoleadoresComponent } from './components/tabla-goleadores/tabla-goleadores.component';
import { TablaVallaBatidaComponent } from './components/tabla-valla-batida/tabla-valla-batida.component';
import { TablaSuspensionesComponent } from './components/tabla-suspensiones/tabla-suspensiones.component';
import { LoginComponent } from './components/login/login.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { SuspensionesComponent } from './components/suspensiones/suspensiones.component';
import { CalendarioAdminComponent } from './components/calendario-admin/calendario-admin.component';
import { IngresarjugadorComponent } from './components/ingresarjugador/ingresarjugador.component';
import { IngresarclubComponent } from './components/ingresarclub/ingresarclub.component';
import { IngresarsuspensionComponent } from './components/ingresarsuspension/ingresarsuspension.component';
import { TablaGoleadoresAdminComponent } from './components/tabla-goleadores-admin/tabla-goleadores-admin.component';
import { IngresargoleadorComponent } from './components/ingresargoleador/ingresargoleador.component';
import { TablaVallaBatidaAdminComponent } from './components/tabla-valla-batida-admin/tabla-valla-batida-admin.component';
import { IngresarVallabatidaComponent } from './components/ingresar-vallabatida/ingresar-vallabatida.component';
import { TablaPosicionesAdminComponent } from './components/tabla-posiciones-admin/tabla-posiciones-admin.component';
import { IngresarcalendarioComponent } from './components/ingresarcalendario/ingresarcalendario.component';
import { ResultadoJuvenilComponent } from './components/resultado-juvenil/resultado-juvenil.component';
import { IngresarResJuvComponent } from './components/ingresar-res-juv/ingresar-res-juv.component';
import { IngresarResCincuentaComponent } from './components/ingresar-res-cincuenta/ingresar-res-cincuenta.component';
import { IngresarposicionComponent } from './components/ingresarposicion/ingresarposicion.component';
import { TablaJuvenilComponent } from './components/tabla-juvenil/tabla-juvenil.component';
import { TablaJuvenilAdminComponent } from './components/tabla-juvenil-admin/tabla-juvenil-admin.component';
import { IngresarjuvenilComponent } from './components/ingresarjuvenil/ingresarjuvenil.component';
import { TablaCincuentaComponent } from './components/tabla-cincuenta/tabla-cincuenta.component';
import { TablaCincuentaAdminComponent } from './components/tabla-cincuenta-admin/tabla-cincuenta-admin.component';
import { IngresarcincuentaComponent } from './components/ingresarcincuenta/ingresarcincuenta.component';
import { TablaPrimeraComponent } from './components/tabla-primera/tabla-primera.component';
import { TablaPrimeraAdminComponent } from './components/tabla-primera-admin/tabla-primera-admin.component';
import { IngresarPrimeraComponent } from './components/ingresar-primera/ingresar-primera.component';
import { TablaCuarentaComponent } from './components/tabla-cuarenta/tabla-cuarenta.component';
import { TablaCuarentaAdminComponent } from './components/tabla-cuarenta-admin/tabla-cuarenta-admin.component';
import { IngresarPoscuarentaComponent } from './components/ingresar-poscuarenta/ingresar-poscuarenta.component';
import { TablaTreintaComponent } from './components/tabla-treinta/tabla-treinta.component';
import { TablaTreintaAdminComponent } from './components/tabla-treinta-admin/tabla-treinta-admin.component';
import { IngresarPostreintaComponent } from './components/ingresar-postreinta/ingresar-postreinta.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InformacionComponent,
    SomosComponent,
    CalendarioComponent,
    ContactosComponent,
    PeralesComponent,
    EstrellaComponent,
    PataguasComponent,
    EsperanzaComponent,
    SantaElenaComponent,
    LosBatrosComponent,
    MaitencilloComponent,
    MolinoComponent,
    OhigginsComponent,
    PenascoComponent,
    RiverComponent,
    SanVictorComponent,
    TablaPosicionesComponent,
    TablaGoleadoresComponent,
    TablaVallaBatidaComponent,
    TablaSuspensionesComponent,
    LoginComponent,
    InicioAdminComponent,
    JugadoresComponent,
    ClubesComponent,
    SuspensionesComponent,
    CalendarioAdminComponent,
    IngresarjugadorComponent,
    IngresarclubComponent,
    IngresarsuspensionComponent,
    TablaGoleadoresAdminComponent,
    IngresargoleadorComponent,
    TablaVallaBatidaAdminComponent,
    IngresarVallabatidaComponent,
    TablaPosicionesAdminComponent,
    IngresarcalendarioComponent,
    ResultadoJuvenilComponent,
    IngresarResJuvComponent,
    IngresarResCincuentaComponent,
    FilterPipe,
    IngresarposicionComponent,
    TablaJuvenilComponent,
    TablaJuvenilAdminComponent,
    IngresarjuvenilComponent,
    TablaCincuentaComponent,
    TablaCincuentaAdminComponent,
    IngresarcincuentaComponent,
    TablaPrimeraComponent,
    TablaPrimeraAdminComponent,
    IngresarPrimeraComponent,
    TablaCuarentaComponent,
    TablaCuarentaAdminComponent,
    IngresarPoscuarentaComponent,
    TablaTreintaComponent,
    TablaTreintaAdminComponent,
    IngresarPostreintaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
