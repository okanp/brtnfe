import { Component, OnInit, ViewChild, Renderer } from "@angular/core";
import * as _ from "lodash";
import { RoutineService } from "../services/routine.service";
import { Routine } from "../models/routine.model";
import { Exercise } from "../models/exercise.model";
import { MdDialog, MdDialogRef, MdDialogConfig } from "@angular/material";
import { AddExerciseComponent } from "./add-exercise.dialog";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-build",
  templateUrl: "build.component.html",
  styleUrls: ["./build.component.scss", "../schedule/schedule.component.scss"]
})
export class BuildComponent implements OnInit {
  routine: Routine = new Routine();
  addExerciseDialogRef: MdDialogRef<AddExerciseComponent>;
  @ViewChild("uploadButton") uploadFileButton;

  constructor(private serv: RoutineService, public dialog: MdDialog, private route: ActivatedRoute, private renderer: Renderer) { }

  ngOnInit() {
    const self = this;
    self.route.params.subscribe(params => {
      const rid = params["id"]; // (+) converts string 'id' to a number
      if (rid) {
        self.serv.getRoutine({ id: rid }).then(routine => {
          self.routine = routine;
          self.routine.id = null;
          self.routine.name = self.routine.name + "'s Fork";
        });
      }
    });
  }

  openAddExercise(day) {
    const self = this;
    this.addExerciseDialogRef = this.dialog.open(AddExerciseComponent);
    this.addExerciseDialogRef.afterClosed().subscribe((result) => {
      this.addExerciseDialogRef = null;
      if (result) {
        self.addExerciseToDay(result, day);
      }
    });
  }

  addExerciseToDay(exercise: Exercise, _day) {
    const self = this;
    const rand = Math.floor((Math.random() * 1000000));
    _.each(self.routine.days, day => {
      if (day.id === _day.id) {
        exercise.id = "e" + rand;
        day.exercises.push(exercise);
        return false;
      }
    });
  }

  onClickAddDay() {
    const self = this;
    const rand = Math.floor((Math.random() * 1000000));
    self.routine.days.push({
      id: "d" + rand,
      name: "",
      exercises: []
    });
  }

  onClickRemoveDay(_id) {
    const self = this;
    _.each(self.routine.days, day => {
      if (_id === day.id) {
        const index = self.routine.days.indexOf(day);
        self.routine.days.splice(index, 1);
        return false;
      }
    });
  }

  onClickRemoveExercise(_day, _exercise) {
    const self = this;
    _.each(self.routine.days, day => {
      if (_day.id === day.id) {
        _.each(day.exercises, exercise => {
          if (_exercise.id === exercise.id) {
            const index = day.exercises.indexOf(exercise);
            day.exercises.splice(index, 1);
            return false;
          }
        });
        return false;
      }
    });
  }

  onClickEditExercise(_day, _exercise) {
    const self = this;
    _.each(self.routine.days, day => {
      if (_day.id === day.id) {
        _.each(day.exercises, exercise => {
          if (_exercise.name === exercise.name) {
            const index = day.exercises.indexOf(exercise);
            day.exercises.splice(index, 1);
            return false;
          }
        });
        return false;
      }
    });
  }

  previewImage(input) {

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#cover-picture").css("background-image", "url(" + e.target.result + ")");
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onClickUploadFilebutton() {
    const event = new MouseEvent("click", { bubbles: true });
    this.renderer.invokeElementMethod(this.uploadFileButton.nativeElement, "dispatchEvent", [event]);
  }

}
