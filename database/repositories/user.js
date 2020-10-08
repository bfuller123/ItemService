// const { models } = require('../database');
// const itemRepo = require('./item');
// const user = models.user;
// const item = models.item;

// // find all users
// async function findAll() {
//     const result = await user.findAll();
//     return result;
// }

// // find by user by id
// async function findUser(userId) {
//     const result = await user.findOne({
//         where: {
//             id: parseInt(userId)
//         },
//         include: [{
//             model: item
//         }]
//     });

//     if (result === null) {
//         return 'User not found';
//     }
//     return result;
// }

// // create user
// async function createUser(userObj) {
//     const result = await user.create(userObj);

//     return result;
// }

// // update user
// async function updateUser(userId, userObj) {
//     const id = parseInt(userId);
//     const userResult = await user.findByPk(id);

//     if (userResult === null) {
//         return 'User not found';
//     }

//     for (key of Object.keys(userObj)) {
//         if (key !== 'id') {
//             userResult[key] = userObj[key];
//         }
//     }

//     await userResult.save();
//     return 'success';
// }

// // delete user
// async function deleteUser(userId) {
//     const userResult = await user.findOne({
//         where: {
//             id: parseInt(userId)
//         }
//     });

//     if (userResult === null) {
//         return 'user not found';
//     }

//     await itemRepo.deleteAllItemsForUser(userId);
//     userResult.isactive = false;
//     await userResult.save();
//     return 'success';
// }

// module.exports = {
//     findAll,
//     findUser,
//     createUser,
//     updateUser,
//     deleteUser
// }