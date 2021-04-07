const db = require('../utils/db')

module.exports = {
    all() {
        return db('district');
      },
    
      async single(id) {
        const districts = await db('district').where('district_id', id);
        if (districts.length === 0) {
          return null;
        }
    
        return districts[0];
      },
    
      add(district) {
        return db('district').insert(district);
      },
    
      async update(id, district, country_id){
        const districts = await db('district')
        .where( 'district_id', id)
        .update({
          'district': district,
          'country_id': country_id
        })
    
        if (districts.length === 0){
          return null
        }
        return districts[0]
      },
    
      delete(id){
        return db('district')
        .where('district_id', id)
        .del()
      }

}