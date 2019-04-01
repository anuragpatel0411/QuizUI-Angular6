import { Component } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  constructor( router: Router ) { 
    router.events
      .pipe(
        filter(
            ( event: NavigationEvent ) => {
                return( event instanceof NavigationStart );
            }
        )
      )
      .subscribe(
        ( event: NavigationStart ) => {
          console.group( "NavigationStart Event" );            
          console.log( "navigation id:", event.id );
          console.log( "route:", event.url );
          console.log( "trigger:", event.navigationTrigger );

          if ( event.restoredState ) {
            console.warn(
              "restoring navigation id:",
              event.restoredState.navigationId
            );
          }
          console.groupEnd();
        }
      );
  } 
}
