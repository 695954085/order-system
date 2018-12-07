import * as Joi from 'joi';

export const productSchema = Joi.object().keys({
  prod_id: Joi.string().max(10).required(),
  vend_id: Joi.number().max(11).required(),
  prod_name: Joi.string().max(255).required(),
  prod_price: Joi.number().precision(2).positive().less(100000000).required(),
  prod_desc: Joi.string(),
});