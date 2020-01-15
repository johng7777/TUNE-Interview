export class SimplePubSub {

    // Not implemented. I left this in for you to see my style of organization
    static get USERS_LOADED() { return '00001' }
    static get LOGS_LOADED() { return '00002' }

    static SubscribedEvents = {};
    static PublishedEvents = {};

    static Publish = (eventName, guid = null) => {
        if (SimplePubSub.SubscribedEvents[eventName] !== undefined) {
            if (guid !== null) {
                SimplePubSub.PublishedEvents[eventName][guid]()
            } else {
                for (let event in SimplePubSub.SubscribedEvents[eventName]) {
                   SimplePubSub.PublshedEvents[eventName][event]() 
                } 
            }
        }
    }

    static Subscribe = (guid, eventName, callback) => {
        if (SimplePubSub.SubscribedEvents[eventName] === undefined) {
            SimplePubSub.SubscribedEvents[eventName] = {}
        }

        SimplePubSub.SubscribedEvents[eventName][guid] = callback
    }
}
