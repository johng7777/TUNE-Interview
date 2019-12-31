import * as data from './users.json';

export class Users extends React.Component {
    constructor() {
        this.users = {};
        this.userNames = [];
        this.dataProcessed = false;
    }

    processData = async () => {
        data.forEach(element => {
            if (this.users[element['id']] === undefined) {
                this.users[element['id']] = {}
            }
            
            // Build index of usernames for sorting
            this.userNames[element['name']] = element['id'];

            this.users[element['user_id']]['name'] = element['name']
            this.users[element['user_id']]['occupation'] = element['occupation']
            this.users[element['user_id']]['avatar'] = element['avatar']
        })
    }

    // This checks if data has processed and sets the flag to true
    startProcessing = async() => {
        this.userNames.sort();
        this.processData().then(() => this.dataProcessed = true)
    }

    getRecoard = (user_id) => {
       return this.users[user_id] !== undefined ? this.users[user_id] : null
    }
}