const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },
  
  async create(request, response) {
    const {name, whatsapp, email, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id, 
      name,
      whatsapp,
      email,
      city,
      uf
    });
  
    return response.json({ id });    
  }
}