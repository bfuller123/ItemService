const item = require("../database/models/item");

function addDaysOnList(listOfItems) {
    const presentDay = new Date();
    for (let item of listOfItems) {
        const converted = new Date(item.dataValues.createdAt);
        item.dataValues.daysOnList = Math.floor(Math.round(presentDay - converted)/(1000*60*60*24)); 
    }
    return listOfItems;
}

module.exports = {
    addDaysOnList
};