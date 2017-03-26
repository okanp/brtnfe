import { Exercise } from "./exercise.model";

interface IDay {
  id?: string;
  name?: string;
  exercises?: Exercise[];
}

export class Routine {
  id: string;
  name: string;
  desc?: string;
  tags?: string[];
  starred: number;
  commented: number;
  upvoted: number;
  public?: boolean;
  days: IDay[];
  playlist?: string;
  length?: number;
  nutrition: string;
  purpose: string;
  type: string;
  level: string;
  workoutsweekly: number;
  constructor() {
    this.id = "";
    this.name = "";
    this.desc = "";
    this.tags = [];
    this.starred = 0;
    this.commented = 0;
    this.upvoted = 0;
    this.days = [];
    this.public = true;
  }
}