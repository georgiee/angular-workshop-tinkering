import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QueryExampleComponent } from './animation/query-example/query-example.component';
import { RoutingComponent } from './animation/routing/routing.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicstuffModule } from './dynamicstuff/dynamicstuff.module';
import { MyFeatureModule } from './myFeature/my-feature/my-feature.module';
import { RoutingModule } from './routing/routing.module';
import { ServicemoduleModule } from './servicemodule/servicemodule.module';
import { TokensModule } from './tokens/tokens.module';



@Component({
  template: '🐙'
})
export class OctpusComponent {
}

@NgModule({
  declarations: [
    AppComponent,
    QueryExampleComponent,
    RoutingComponent,
    OctpusComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyFeatureModule,
    ServicemoduleModule,
    DynamicstuffModule,
    TokensModule
  ],
  bootstrap: [AppComponent, OctpusComponent],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
