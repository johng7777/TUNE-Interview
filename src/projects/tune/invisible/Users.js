import {Logs} from '../invisible/Logs.js'
var data = require('../data/users.json');

export class Users {
    constructor() {
        this.users = [];
        this.userNames = [];
        this.dataProcessed = false;
        this.logs = new Logs()
    }

    processData = async () => {
        data.forEach(element => {
            if (this.users[element['id']] === undefined) {
                this.users[element['id']] = {}
            }
            this.users[element['id']]['history'] = {}
            // Build index of usernames for sorting
            this.userNames[element['name']] = element['id'];

            this.users[element['id']]['name'] = element['name']
            this.users[element['id']]['occupation'] = element['occupation']

            // Also test if this image url works here... CORS prevents the test from localhost
            if (element['avatar'] !== "") {
                this.users[element['id']]['avatar'] = element['avatar']
            } else {
                this.users[element['id']]['avatar'] = 'https://ui-avatars.com/api/?background=d8abc0&color=fff&length=1&rounded=true&name=' + element['name']
            }

        })
        console.info('user process', this.users)
    }

    // This checks if data has processed and sets the flag to true
    startProcessing = async() => {
        // For sorting - not implemented
        this.userNames.sort()
        this.processData().then(() => {
            this.cleanup()
            this.logs.startProcessing(this.users).then(() => {
                this.dataProcessed = true
            })
        })
    }

    cleanup = () => {
        // Log file no longer needed
        data = null
    }

    getRecord = (user_id) => {
       if (!this.user[user_id]) {
           return null
       }

       return this.users[user_id]
    }

    getHistory = (user_id) => {
        return this.users[user_id]['history']
    }

    getRecords = () => {
        return this.users;
    }

    getSortedRecords = () => {
        return this.userNames;
    }

    getRecordByName = (name) => {
        return this.users[this.userNames[name]] !== undefined ? this.users[this.userNames[name]] : null
    }
}