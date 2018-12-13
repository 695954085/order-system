import * as Joi from 'joi';

export const customerSchema = Joi.object().keys({
  cust_id: Joi.number().min(11).max(11).positive().integer(),
  cust_name: Joi.string().max(50).required(),
  cust_address: Joi.string().max(50),
  cust_city: Joi.string().max(50),
  cust_state: Joi.string().max(5),
  cust_zip: Joi.string().max(10),
  cust_country: Joi.string().max(50),
  cust_contact: Joi.string().max(50),
  cust_email: Joi.string().max(255),
});