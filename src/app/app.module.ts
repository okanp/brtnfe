import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { DragulaModule } from "ng2-dragula";
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

// Components [declarations]
import { AppComponent } from "./app.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { FrontpageComponent } from "./frontpage/frontpage.component";
import { RoutineComponent } from "./routine/routine.component";
import { BuildComponent } from "./create/build.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import { CriteriaComponent } from "./criteria/criteria.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MyRoutinesComponent } from "./my-routines/my-routines.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

// Services [providers]
import { RoutineService } from "./services/routine.service";
import { ExerciseService } from "./services/exercise.service";
import { InternalService } from "./services/internal.service";

// Dialogs [declarations, entryComponents]
import { AddExerciseComponent } from "./create/add-exercise.dialog";

const appRoutes: Routes = [
  { path: "frontpage", component: FrontpageComponent },
  { path: "routine/:id", component: RoutineComponent },
  { path: "build", component: BuildComponent },
  { path: "build/:id", component: BuildComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "myroutines", component: MyRoutinesComponent },
  { path: "", redirectTo: "/frontpage", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent
    , ScheduleComponent
    , FrontpageComponent
    , RoutineComponent
    , BuildComponent
    , AddExerciseComponent
    , UserMenuComponent
    , CriteriaComponent
    , LoginComponent
    , SignupComponent
    , MyRoutinesComponent
    , ToolbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
    , BrowserModule
    , FormsModule
    , HttpModule
    , MaterialModule
    , DragulaModule
    , FlexLayoutModule.forRoot()
  ],
  providers: [
      RoutineService
    , ExerciseService
    , InternalService
  ],
  entryComponents: [
      AddExerciseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
