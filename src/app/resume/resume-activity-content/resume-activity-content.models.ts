export interface Role {
  place: string;
  date: string;
  description: string;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  tasks: string[];
}
