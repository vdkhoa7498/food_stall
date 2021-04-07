const db = require('../utils/db')

module.exports = {
    all() {
        return db('ordering');
      },
    
      async single(id) {
        const orderings = await db('ordering').where('ordering_id', id);
        if (orderings.length === 0) {
          return null;
        }
    
        return orderings[0];
      },
    
      add(ordering) {
        return db('ordering').insert(ordering);
      },
    
      async update(id, ordering, country_id){
        const orderings = await db('ordering')
        .where( 'ordering_id', id)
        .update({
          'ordering': ordering,
          'country_id': country_id
        })
    
        if (orderings.length === 0){
          return null
        }
        return orderings[0]
      },
    
      delete(id){
        return db('ordering')
        .where('ordering_id', id)
        .del()
      }

}