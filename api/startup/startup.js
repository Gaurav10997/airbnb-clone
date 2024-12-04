const Configurations = require('../models/Configuration');

const store = {}


const loadConfig = async () => {
    console.log('asdksakl')
    const configs = await Configurations.find({})
    console.log(configs)
    configs.forEach(element => {
        store[element.type] = element
    })
}



const get = (key) => {
    return store[key]
}

const set = (key, value) => {
    store[key] = value
}





module.exports = {
    loadConfig,
    set,
    get
}