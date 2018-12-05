import * as Joi from 'joi';

export const schema = Joi.object().keys({
  userName: Joi.string().alphanum().min(5).max(10).required(),
  password: Joi.string().regex(/^[0-9a-zA-Z]{8,16}$/).required(),
  role: Joi.string().equal('admin', 'general'),
});
