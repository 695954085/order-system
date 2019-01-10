import * as Joi from 'joi';

export const orderSchema = Joi.object().keys({
  order: {
    order_num: Joi.number().min(1).max(11).positive().integer(),
    order_date: Joi.date(),
    cust_id: Joi.number().min(1).max(11).positive().integer(),
  },
  orderitems: [{
    order_item: Joi.number().min(1).max(11).positive().integer(),
    prod_id: Joi.string().max(10),
    quantity: Joi.number().positive().integer().min(1),
    item_price: Joi.number().precision(2).max(8),
  }],
});