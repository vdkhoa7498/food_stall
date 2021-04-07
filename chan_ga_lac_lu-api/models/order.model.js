const db = require('../utils/db')

module.exports = {
    all() {
        return db('order');
      },
    
      async single(id) {
        const orders = await db('order').where('order_id', id);
        if (orders.length === 0) {
          return null;
        }
    
        return orders[0];
      },
    
      add(order) {
        return db('order').insert(order);
      },
    
      async update(id, order, country_id){
        const orders = await db('order')
        .where( 'order_id', id)
        .update({
          'order': order,
          'country_id': country_id
        })
    
        if (orders.length === 0){
          return null
        }
        return orders[0]
      },
    
      delete(id){
        return db('order')
        .where('order_id', id)
        .del()
      }

}