import { Injectable } from "@angular/core";
import { Exercise } from "../models/exercise.model";

@Injectable()
export class ExerciseService {
  exercises: Exercise[] = [
    {
      id: "e8",
      name: "Benchpress",
      sets: 3,
      repeat: 5
    },
    {
      id: "e9",
      name: "Overhead press",
      sets: 5,
      repeat: 10
    },
    {
      id: "e1",
      name: "Incline Dumbbell Press",
      sets: 5,
      repeat: 10
    },
    {
      id: "e2",
      name: "Lateral Raise",
      sets: 3,
      repeat: 10
    },
    {
      id: "e3",
      name: "Shrugs",
      sets: 3,
      repeat: 10
    },
    {
      id: "e4",
      name: "Lateral Raises",
      sets: 3,
      repeat: 10
    },
    {
      id: "e5",
      name: "Incline Dumbbell Press",
      sets: 3,
      repeat: 10
    },
    {
      id: "e6",
      name: "Dips",
      sets: 3,
      repeat: 10
    },
    {
      id: "e7",
      name: "Barbell Curl",
      sets: 3,
      repeat: 10
    },
    {
      id: "e10",
      name: "Deadlift",
      sets: 3,
      repeat: 10
    },
    {
      id: "e11",
      name: "Barbell row",
      sets: 3,
      repeat: 10
    },
    {
      id: "e12",
      name: "Chinup",
      sets: 3,
      repeat: 10
    },
    {
      id: "e13",
      name: "Hammer Curl",
      sets: 3,
      repeat: 10
    }
  ];

  constructor() { }

  getExercise(query): Promise<Exercise>  {
    const self = this;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        const exercise = Math.floor(Math.random() * self.exercises.length);
        resolve(exercise);
      }, 100);
    });
  }

  getExercises(query): Promise<Exercise[]> {
    const self = this;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(self.shuffleArray(self.exercises));
      }, 100);
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
