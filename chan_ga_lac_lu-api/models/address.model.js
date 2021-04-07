const db = require('../utils/db')

module.exports = {
    all() {
        return db('address');
      },
    
      async single(id) {
        const addresses = await db('address').where('address_id', id);
        if (addresses.length === 0) {
          return null;
        }
    
        return addresses[0];
      },
    
      add(address) {
        return db('address').insert(address);
      },
    
      async update(id, address, country_id){
        const addresses = await db('address')
        .where( 'address_id', id)
        .update({
          'address': address,
          'country_id': country_id
        })
    
        if (addresses.length === 0){
          return null
        }
        return addresses[0]
      },
    
      delete(id){
        return db('address')
        .where('address_id', id)
        .del()
      }

}