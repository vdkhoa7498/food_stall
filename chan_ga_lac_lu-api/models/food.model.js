const db = require('../utils/db')

module.exports = {
  all() {
      return db('food');
    },
  byType(type) {
    return db('food').where('type',type)
  },
    
  async single(id) {
    const foods = await db('food').where('food_id', id);
    if (foods.length === 0) {
      return null;
    }

    return foods[0];
  },

  add(food) {
    return db('food').insert(food);
  },

  async update(id, food, country_id){
    const foods = await db('food')
    .where( 'food_id', id)
    .update({
      'food': food,
      'country_id': country_id
    })

    if (foods.length === 0){
      return null
    }
    return foods[0]
  },

  delete(id){
    return db('food')
    .where('food_id', id)
    .del()
  }

}