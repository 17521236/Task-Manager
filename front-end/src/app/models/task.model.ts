export class Task {
    _id: string;
    title: string;
    _listId: string;
    completed: boolean;

    constructor(title: string, _listId: string) {
        this.title = title;
        this._listId = _listId;
    }
}