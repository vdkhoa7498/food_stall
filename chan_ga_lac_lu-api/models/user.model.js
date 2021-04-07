const db = require('../utils/db')

module.exports = {
    all() {
        return db('user');
      },

    findOneUsername(username){
        return db ('user').where('username', username)
    },

    async single(id) {
      const users = await db('user').where('user_id', id);
      if (users.length === 0) {
        return null;
      }

      return users[0];
    },

    add(user) {
      return db('user').insert(user);
    },

    async update(id, user, country_id){
      const users = await db('user')
      .where( 'user_id', id)
      .update({
        'user': user,
        'country_id': country_id
      })

      if (users.length === 0){
        return null
      }
      return users[0]
    },

    delete(id){
      return db('user')
      .where('user_id', id)
      .del()
    }

}