const db = require('../config/connection')
const collection = require('../config/collection')
const { response } = require('../app')
const objectId = require('mongodb').ObjectID

module.exports = {
    addTask:(task) =>{
        return new Promise((resolve,reject) =>{
            db.get().collection(collection.TASK_COLLECTION).insertOne(task).then((data) =>{
                resolve(data.ops[0]._id)
                console.log(data.ops[0]._id)
            })
        })
    },
    getAllTasks:() =>{
        return new Promise(async (resolve,reject) =>{
            let tasks = await db.get().collection(collection.TASK_COLLECTION).find().toArray()
            resolve(tasks)
        })
    },
    deleteTask:(taskId) =>{
        return new Promise((resolve,reject) =>{
            db.get().collection(collection.TASK_COLLECTION).removeOne({_id:objectId(taskId)}).then((response) =>{
                resolve(response)
            })
        })
    }
}