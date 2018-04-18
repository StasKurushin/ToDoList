export interface List {
    name: string;
    id: number;
    tasks?: Task[];
    ex: string[];
}

export interface Task {
    item: string;
    id: number;
}

/*
export class List {
    name: string;
    id: number;
    tasks?: Task[];
}

export class Task {
    task: string;
}*/
