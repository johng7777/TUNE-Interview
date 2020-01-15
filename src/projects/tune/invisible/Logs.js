import {Util} from '../../../general/components/invisible/Util'
var data = require('../data/logs.json');

export class Logs {
    constructor(userData) {
        this.dataProcessed = false;
    }

    processData = async (users) => {
        var history = {}

        data.forEach(element => {
            if (history[element['user_id']] === undefined) {
                history[element['user_id']] = {}
                history[element['user_id']]['totalImpressions'] = 0
                history[element['user_id']]['totalConversions'] = 0
                history[element['user_id']]['totalRevenue'] = 0
                history[element['user_id']]['conversions'] = [] 
            }
            
            var date = Util.dateToSortable(new Date(element['time']).toDateString())
            
            if (element['type'] === 'conversion') {
                history[element['user_id']]['totalRevenue'] += element['revenue']
                history[element['user_id']]['totalConversions']++

                if (history[element['user_id']]['conversions'][date] === undefined) {
                    var conversion = {
                        "date" : new Date(date).getTime() / 100000,
                        "conversions" : 0,
                        "revenue" : 0
                    }
                    history[element['user_id']]['conversions'][date] = conversion
                }

                history[element['user_id']]['conversions'][date]['revenue'] += element['revenue'] 
                history[element['user_id']]['conversions'][date]['conversions']++
 
            } else {
                history[element['user_id']]['totalImpressions']++
            }
        })

        Object.keys(history).forEach(user_id => {
            users[user_id]['history'] = history[user_id]
        })

        console.log('logs filling data', users)
    }

    cleanup = () => {
        data = null
    }

    // This checks if data has processed and sets the flag to true
    startProcessing = async(users) => {
        this.processData(users).then((users) => {
            this.dataProcessed = true
            this.cleanup()
        })
    }
}