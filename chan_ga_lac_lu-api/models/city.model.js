const db = require('../utils/db')

module.exports = {
    all() {
        return db('city');
    },
  
    async single(id) {
      const cities = await db('city').where('city_id', id);
      if (cities.length === 0) {
        return null;
      }
  
      return cities[0];
    },
  
    add(city) {
      return db('city').insert(city);
    },
  
    async update(id, city, country_id){
      const cities = await db('city')
      .where( 'city_id', id)
      .update({
        'city': city,
        'country_id': country_id
      })
  
      if (cities.length === 0){
        return null
      }
      return cities[0]
    },
  
    delete(id){
      return db('city')
      .where('city_id', id)
      .del()
    },

    searchByName(name){
      return db('city')
      .where('city_name','like',name)
    }

}