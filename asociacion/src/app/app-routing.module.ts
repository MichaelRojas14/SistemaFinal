import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//COMPONENTES
import { InformacionComponent } from './components/informacion/informacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PataguasComponent } from './components/pataguas/pataguas.component';
import { PeralesComponent } from './components/perales/perales.component';
import { SomosComponent } from './components/somos/somos.component';
import { TablaGoleadoresComponent } from './components/tabla-goleadores/tabla-goleadores.component';
import { TablaPosicionesComponent } from './components/tabla-posiciones/tabla-posiciones.component';
import { TablaSuspensionesComponent } from './components/tabla-suspensiones/tabla-suspensiones.component';
import { TablaVallaBatidaComponent } from './components/tabla-valla-batida/tabla-valla-batida.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { EstrellaComponent } from './components/estrella/estrella.component';
import { EsperanzaComponent } from './components/esperanza/esperanza.component';
import { SantaElenaComponent } from './components/santa-elena/santa-elena.component';
import { LosBatrosComponent } from './components/los-batros/los-batros.component';
import { MaitencilloComponent } from './components/maitencillo/maitencillo.component';
import { MolinoComponent } from './components/molino/molino.component';
import { OhigginsComponent } from './components/ohiggins/ohiggins.component';
import { PenascoComponent } from './components/penasco/penasco.component';
import { RiverComponent } from './components/river/river.component';
import { SanVictorComponent } from './components/san-victor/san-victor.component';
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
import { IngresarposicionComponent } from './components/ingresarposicion/ingresarposicion.component';
import { TablaJuvenilComponent } from './components/tabla-juvenil/tabla-juvenil.component';
import { TablaJuvenilAdminComponent } from './components/tabla-juvenil-admin/tabla-juvenil-admin.component';
import { IngresarjuvenilComponent } from './components/ingresarjuvenil/ingresarjuvenil.component';
import { TablaCincuentaAdminComponent } from './components/tabla-cincuenta-admin/tabla-cincuenta-admin.component';
import { TablaCincuentaComponent } from './components/tabla-cincuenta/tabla-cincuenta.component';
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
const routes: Routes = [
  //Inicio
  {path: '', component: InicioComponent},
  {path: 'informacion', component: InformacionComponent},
  {path: 'quienes-somos', component: SomosComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'contacto', component: ContactosComponent},

  //Equipos
  {path: 'perales', component: PeralesComponent},
  {path: 'estrella', component: EstrellaComponent},
  {path: 'pataguas', component: PataguasComponent},
  {path: 'esperanza', component: EsperanzaComponent},
  {path: 'santa-elena', component: SantaElenaComponent},
  {path: 'los-batros', component: LosBatrosComponent},
  {path: 'maitencillo', component: MaitencilloComponent},
  {path: 'molino', component: MolinoComponent},
  {path: 'ohiggins', component: OhigginsComponent},
  {path: 'penasco', component: PenascoComponent},
  {path: 'river', component: RiverComponent},
  {path: 'san-victor', component: SanVictorComponent},

  //Componentes
  {path: 'goleador', component: TablaGoleadoresComponent},
  {path: 'menos-batida', component: TablaVallaBatidaComponent},
  {path: 'posiciones', component: TablaPosicionesComponent},
  {path: 'suspension', component: TablaSuspensionesComponent},
  {path: 'login', component: LoginComponent},

  //Admin
  {path: 'inicio-admin', component: InicioAdminComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'clubes', component: ClubesComponent},
  {path: 'suspensiones-jugador', component: SuspensionesComponent},
  {path: 'calendario-admin', component: CalendarioAdminComponent},
  {path: 'ingresar-jugador', component: IngresarjugadorComponent},
  {path: 'editar-jugador/:rut_jugador', component: IngresarjugadorComponent},
  {path: 'ingresar-club', component: IngresarclubComponent},
  {path: 'editar-club/:id_club', component: IngresarclubComponent},
  {path: 'ingresar-suspension', component: IngresarsuspensionComponent},
  {path: 'editar-suspension/:id_suspension', component: IngresarsuspensionComponent},
  {path: 'tabla-goleadores-admin', component:TablaGoleadoresAdminComponent},
  {path: 'ingresar-goleador', component:IngresargoleadorComponent},
  {path: 'editar-goleador/:id_tabla_goleador', component:IngresargoleadorComponent},
  {path: 'tabla-valla-batida-admin', component:TablaVallaBatidaAdminComponent},
  {path: 'ingresar-vallabatida', component:IngresarVallabatidaComponent},
  {path: 'editar-vallabatida/:id_vall_men_batida', component:IngresarVallabatidaComponent},
  {path: 'posiciones-admin', component:TablaPosicionesAdminComponent},
  {path: 'ingresar-calendario', component: IngresarcalendarioComponent},
  {path: 'editar-calendario/:id_calendario', component: IngresarcalendarioComponent},
  {path: 'resultados-admin', component: ResultadoJuvenilComponent},
  {path: 'ingresar-resjuvenil', component: IngresarResJuvComponent},
  {path: 'editar-juvenil/:id_part_serie', component: IngresarResJuvComponent},
  {path: 'ingresar-posicion', component: IngresarposicionComponent},
  {path: 'editar-posicion/:id_tabla', component: IngresarposicionComponent},
  {path: 'tabla-juvenil', component: TablaJuvenilComponent},
  {path: 'tabla-juvenil-admin', component: TablaJuvenilAdminComponent},
  {path: 'ingresar-posjuvenil', component: IngresarjuvenilComponent},
  {path: 'editar-posjuvenil/:id_tabla_juv', component: IngresarjuvenilComponent},
  {path: 'tabla-cincuenta', component: TablaCincuentaComponent},
  {path: 'tabla-cincuenta-admin', component: TablaCincuentaAdminComponent},
  {path: 'ingresar-poscincuenta', component: IngresarcincuentaComponent},
  {path: 'editar-poscincuenta/:id_tabla50', component: IngresarcincuentaComponent},
  {path: 'tabla-primera', component: TablaPrimeraComponent},
  {path: 'tabla-primera-admin', component: TablaPrimeraAdminComponent},
  {path: 'ingresar-posprimera', component: IngresarPrimeraComponent},
  {path: 'editar-posprimera/:id_tabla_prim', component: IngresarPrimeraComponent},
  {path: 'tabla-cuarenta', component: TablaCuarentaComponent},
  {path: 'tabla-cuarenta-admin', component: TablaCuarentaAdminComponent},
  {path: 'ingresar-poscuarenta', component: IngresarPoscuarentaComponent},
  {path: 'editar-poscuarenta/:id_tabla45', component: IngresarPoscuarentaComponent},
  {path: 'tabla-treinta', component: TablaTreintaComponent},
  {path: 'tabla-treinta-admin', component: TablaTreintaAdminComponent},
  {path: 'ingresar-postreinta', component: IngresarPostreintaComponent},
  {path: 'editar-postreinta/:id_tabla35', component: IngresarPostreintaComponent},




  

  


  {path: '**',redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
