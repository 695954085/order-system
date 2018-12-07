import * as Joi from 'joi';

export const schema = Joi.object().keys({
  vend_name: Joi.string().max(50).required(),
  vend_address: Joi.string().max(50),
  vend_city: Joi.string().max(50),
  vend_state: Joi.string().max(5),
  vend_zip: Joi.string().max(10),
  vend_country: Joi.string().max(50),
});
