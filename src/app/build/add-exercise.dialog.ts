import { Component, OnInit } from "@angular/core";
import { ExerciseService } from "../services/exercise.service";
import { Exercise } from "../models/exercise.model";
import { FormControl } from "@angular/forms";
import { MdDialog, MdDialogRef, MdDialogConfig } from "@angular/material";
import * as _ from "lodash";

@Component({
  moduleId: module.id,
  selector: "app-add-exercise-dialog",
  templateUrl: "add-exercise.dialog.html",
  styleUrls: ["add-exercise.dialog.scss"]
})
export class AddExerciseComponent implements OnInit {
  exercises: Exercise[] = [];
  exercise: Exercise = new Exercise();

  constructor(public dialogRef: MdDialogRef<AddExerciseComponent>, private serv: ExerciseService) { }

  ngOnInit() {
    const self = this;
    self.serv.getExercises(undefined).then(exercises => {
      self.exercises = exercises;
    });
  }

}
