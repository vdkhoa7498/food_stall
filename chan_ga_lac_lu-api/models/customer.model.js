const db = require('../utils/db')

module.exports = {
    all() {
        return db('customer');
      },
    
      async single(id) {
        const customers = await db('customer').where('customer_id', id);
        if (customers.length === 0) {
          return null;
        }
    
        return customers[0];
      },

      async singleByNamePhone(name,phone) {
        const customers = await db('customer').where({
          customer_name: 'Test',
          customer_phone:  'User'
        });
        if (customers.length === 0) {
          return null;
        }
    
        return customers[0];
      },
    
      add(customer) {
        return db('customer').insert(customer);
      },
    
      async update(id, customer, country_id){
        const customers = await db('customer')
        .where( 'customer_id', id)
        .update({
          'customer': customer,
          'country_id': country_id
        })
    
        if (customers.length === 0){
          return null
        }
        return customers[0]
      },
    
      delete(id){
        return db('customer')
        .where('customer_id', id)
        .del()
      }

}