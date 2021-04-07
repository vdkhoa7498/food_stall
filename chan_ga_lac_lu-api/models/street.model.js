const db = require('../utils/db')

module.exports = {
    all() {
        return db('street');
      },
    
      async single(id) {
        const streets = await db('street').where('street_id', id);
        if (streets.length === 0) {
          return null;
        }
    
        return streets[0];
      },
    
      add(street) {
        return db('street').insert(street);
      },
    
      async update(id, street, country_id){
        const streets = await db('street')
        .where( 'street_id', id)
        .update({
          'street': street,
          'country_id': country_id
        })
    
        if (streets.length === 0){
          return null
        }
        return streets[0]
      },
    
      delete(id){
        return db('street')
        .where('street_id', id)
        .del()
      }

}