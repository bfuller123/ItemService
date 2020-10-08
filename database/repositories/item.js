// const { models } = require('../database');
// const item = models.item;

// // find all items for user
// async function findAll(id) {
//     const result = await item.findAll({
//         where: {
//             userId: id
//         }
//     });
//     return result;
// }

// // create item
// async function createItem(itemObj) {
//     const result = await item.create(itemObj);
//     return result;
// }

// // update item
// async function updateItem(userId, itemId, itemObj) {
//     let itemResp = await item.findOne({
//         where: {
//             id: itemId
//         }
//     });

//     if (parseInt(userId) === itemResp.userId) {
//         for (key of Object.keys(itemObj)) {
//             if (key !== 'id' && key !== 'userId') {
//                 console.log(`changing ${itemResp[key]} to ${itemObj[key]}`);
//                 itemResp[key] = itemObj[key]
//             }
//         };
    
//         await itemResp.save();
//         return 'success';
//     }

//     return 'error: userId did not match';
// }

// // delete item
// async function deleteItem(userId, itemId) {
//     const itemResp = await item.findOne({
//         where: {
//             id: itemId
//         }
//     });

//     if (parseInt(userId) === itemResp.userId) {
//         itemResp.isactive = false;
//         await itemResp.save();
//         return 'success';
//     } 

//     return 'error: userIds did not match';
// }

// async function deleteAllItemsForUser(userId) {
//     const items = await item.update({isactive: false}, {
//         where: {
//             userId: userId
//         }
//     });

//     return 'success';
// }


// module.exports = {
//     findAll,
//     createItem,
//     updateItem,
//     deleteItem,
//     deleteAllItemsForUser
// }