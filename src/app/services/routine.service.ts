import { Injectable } from "@angular/core";
import { Routine } from "../models/routine.model";

@Injectable()
export class RoutineService {

  routines: any[] = [
    {
      id: "123",
      name: "Jim Stoppani's Shortcut to Size Stoppani's Shortcut Stoppani's Shortcut Stoppani's Shortcut ani's Shortcut Stoppani's Shortcut ani's Shortcut Stoppani's Shortcut",
      desc: `This program is based on the training concept called
            periodization. Periodization is the method of changing
            up your training at specified time points. The very
            first periodized scheme to be used with weights is
            called Linear Periodization (also known as Classc
            Periodization). T`,
      tags: ["full-body", "build-muscle", "strength"],
      starred: "10",
      commented: "23",
      upvoted: "122",
      length: 12,
      level: "beginner",
      nutrition: "eat clean",
      workoutsweekly: 5,
      purpose: "build muscle",
      type: "bro-split",
      fork: null,
      days: [
        {
          id: "d7",
          name: "day a",
          exercises: [
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
              id: "e4",
              name: "Lateral Raise",
              sets: 3,
              repeat: 10
            },
            {
              id: "e3",
              name: "Shrugs",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d8",
          name: "day b",
          exercises: [
            {
              id: "e10",
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              id: "e11",
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              id: "e12",
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              id: "e7",
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              id: "e13",
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        }
      ]
    },
    {
      id: "124",
      name: "Coolcicada",
      desc: `The 12-week program I am about to take you through
            is based on one of the oldest, tried and true methods
            for gaining strength and muscle. This type of training
            has successfully prepared almost every type of
            athlete imaginable, from Olympic weightlifters to
            soccer players. It works s` ,
      tags: ["fat-burn", "build-muscle", "3-day-split"],
      starred: "3",
      commented: "21",
      upvoted: "66",
      length: 8,
      purpose: "build muscle",
      level: "beginner",
      workoutsweekly: 5,
      type: "full-body",
      fork: "Jim Stoppani",
      days: [
        {
          id: "d9",
          name: "day a",
          exercises: [
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
              id: "e4",
              name: "Lateral Raise",
              sets: 3,
              repeat: 10
            },
            {
              id: "e3",
              name: "Shrugs",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d10",
          name: "day b",
          exercises: [
            {
              id: "e10",
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              id: "e11",
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              id: "e11",
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              id: "e7",
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              id: "e13",
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        }
      ]
    },
    {
      id: "125",
      name: "Okan's Animal Workout Routine",
      desc: `The constant increase in weight each week and the
            recycling of these four phases leads to impressive
            strength gains. The microcyles also lead to muscle
            hypertrophy due to the constant changing up of the
            rep ranges each and every week. Another reason for
            the strength and mass gains has to do with the fact
            that you keep the weight steady on each exercise for
            all sets and you are forced to complete the minimum
            number of reps in that rep range. `,
      tags: ["fat-burn", "2-day-split"],
      starred: "41",
      commented: "219",
      upvoted: "356",
      length: 6,
      purpose: "build muscle",
      level: "beginner",
      workoutsweekly: 5,
      type: "bro-split",
      fork: "Stronglift 5x5",
      days: [
        {
          id: "d1",
          name: "day a",
          exercises: [
            {
              name: "Benchpress",
              sets: 3,
              repeat: 5
            },
            {
              name: "Overhead press",
              sets: 5,
              repeat: 10
            },
            {
              name: "Incline Dumbbell Press",
              sets: 5,
              repeat: 10
            },
            {
              name: "Lateral Raise",
              sets: 3,
              repeat: 10
            },
            {
              name: "Shrugs",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d2",
          name: "day b",
          exercises: [
            {
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d3",
          name: "day c",
          exercises: [
            {
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d4",
          name: "day d",
          exercises: [
            {
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d5",
          name: "day e",
          exercises: [
            {
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        },
        {
          id: "d6",
          name: "day f",
          exercises: [
            {
              name: "Deadlift",
              sets: 3,
              repeat: 5
            },
            {
              name: "Barbell Row",
              sets: 5,
              repeat: 10
            },
            {
              name: "Chin up",
              sets: 5,
              repeat: 10
            },
            {
              name: "Barbell Curl",
              sets: 3,
              repeat: 10
            },
            {
              name: "Hammer Curl",
              sets: 3,
              repeat: 10
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getRoutine(query): Promise<Routine> {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        let rand = Math.floor(Math.random() * 2);
        resolve(self.routines[rand]);
      }, 100);
    });
  }

  getRoutines(query): Promise<Routine[]> {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(self.shuffleArray(self.routines));
      }, 100);
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
