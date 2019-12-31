import * as data from './logs.json';

export class Impressions extends React.Component {
    constructor() {
        this.impressions = {};
        this.dataProcessed = false;
    }

    processData = async () => {
        data.forEach(element => {
            if (this.impressions[element['user_id']] === undefined) {
                this.impressions[element['user_id']] = {}
                this.impressions[element['user_id']]['impressions'] = 0
                this.impressions[element['user_id']]['revenue'] = 0
            }
            
            this.impressions[element['user_id']]['impressions']++
            this.impressions[element['user_id']]['revenue'] += element['revenue']
        })
    }

    // This checks if data has processed and sets the flag to true
    startProcessing = async() => {
        this.processData().then(() => this.dataProcessed = true)
    }

    getImpressions = (user_id) => {
       return this.impressions[user_id] !== undefined ? this.impressions[user_id]['impressions'] ? this.impressions[user_id]['impressions'] : 0 : 0;
    }

    getRevenue = (user_id) => {
       return this.impressions[user_id] !== undefined ? this.impressions[user_id]['revenue'] ? this.impressions[user_id]['revenue'] : 0 : 0;
    }
}