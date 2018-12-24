import { Injectable, Inject, Optional } from '@nestjs/common';
import { Vendor } from '../vendor/interface/vendor.interface';
import { VendorService } from '../vendor/vendor.service';
import { Product } from '../product/interface/product.interface';
import { ProductService } from '../product/product.service';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/interface/customer.interface';
import { Order } from '../order/interface/order.interface';
import { OrderItem } from '../order/interface/orderitem.interface';
import { DATABASE_PROVIDER_TOKEN, ORDERINSERTSUCCESS, PRODUCTINSERTSUCCESS } from '../config/constants';
import { Sequelize } from 'sequelize-typescript';
import { OrderService } from '../order/order.service';
import { OrderItemService } from '../order/orderitem.service';
import { OrderInterface } from '../types/order';

@Injectable()
export class BusinessService {
  // constructor(private readonly vendorService: VendorService, private readonly productService: ProductService, private ) {}

  // @Optional()
  @Inject(DATABASE_PROVIDER_TOKEN)
  private readonly sequelize: Sequelize;

  @Inject(VendorService)
  private readonly vendorService: VendorService;

  @Inject(ProductService)
  private readonly productService: ProductService;

  @Inject(CustomerService)
  private readonly customerService: CustomerService;

  @Inject(OrderService)
  private readonly orderService: OrderService;

  @Inject(OrderItemService)
  private readonly orderitemService: OrderItemService;

  createVendor(vendor: Vendor) {
    return this.vendorService.insertOneVendor(vendor);
  }

  async createProduct(product: Product) {
    // 应该首先判断是够存在供应商
    // 然后再在创建产品
    // return this.productService.insertOneProduct(product);
    return this.sequelize.transaction(t => {
      return this.vendorService
        .findVendor(
          {
            vend_id: product.vend_id,
          },
          t,
        )
        .then(vendor => {
          if (!vendor) {
            // 供应商不存在
            throw new Error(`供应商不存在`);
          }
          // 创建产品
          return this.productService.insertOneProduct(product, t);
        })
        .then(values => {
          if (!values[1]) {
            // 创建失败
            throw new Error('产品创建失败');
          }
          return values[0];
        });
    }).then(value => {
      const { prod_id , prod_name } = value;
      return {
        type: PRODUCTINSERTSUCCESS,
        message: '产品添加成功',
        data: {
          prod_id,
          prod_name,
        },
      };
    }).catch(err => {
    });
  }

  createCustomer(customer: Customer) {
    return this.customerService.insertOneCustomer(customer);
  }

  async createOrder(parmas: OrderInterface) {
    const {order, orderItems } = parmas;
    let order_num: number;
    return this.sequelize
      .transaction(t => {
        // 查询是否存在此顾客
        return this.customerService
          .findCustomer(
            {
              cust_id: order.cust_id,
            },
            t,
          )
          .then(customer => {
            // 如果客户不存在，终止事务
            if (!customer) {
              throw new Error(`${order.cust_id} 该用户不存在`);
            }
            // 客户存在，其次判断是否存在订购的商品，以及数量(暂时不校验)
            // return this.productService.findProduct({
            //   prod_id: order
            // })
            const prodPromises = orderItems.map(orderItem => {
              return this.productService.findProduct(
                {
                  prod_id: orderItem.prod_id,
                },
                t,
              );
            });
            return Promise.all(prodPromises);
          })
          .then(products => {
            // 如果有某一种商品不存在，抛出异常
            const invalidProducts = products.reduce(
              (previous, currentValue, index) => {
                if (!currentValue) previous.push(index);
                return previous;
              },
              [],
            );
            if (invalidProducts.length > 0)
              throw new Error(JSON.stringify(invalidProducts));
            // 开始正式创建订单
            return this.orderService.insertOneOrder(
              {
                order_date: new Date(),
                cust_id: order.cust_id,
                order_num: null,
              },
              t,
            );
          })
          .then(orderValue => {
            if (!orderValue) {
              // order 创建失败
              return;
            }
            // 开始创建orderitem
            order_num = orderValue.order_num;
            const orderitems: OrderItem[] = orderItems.map(orderitem => {
              orderitem.order_num = order_num;
              return orderitem;
            });
            return this.orderitemService.bulkInsertOrderItem(orderitems, t);
          })
          .then(orderitemsValue => {
            // 判断orderitemsValue是否掺入成功
            const invalidOrderItems = orderitemsValue.reduce(
              (previousValue, currentValue, index) => {
                if (!currentValue) previousValue.push(index);
                return previousValue;
              },
              [],
            );
            if (invalidOrderItems.length > 0) return;
            // orderitems插入成功
            // 全部流程插入成功
            return 'success';
          });
      })
      .then(result => {
        return {
          type: ORDERINSERTSUCCESS,
          message: '订单创建成功',
          data: order_num,
        };
      })
      .catch(err => {
        console.log(err);
      });
  }
}
