### 选择数据库

USE crashcourse; // Database changed

### 了解数据库和表

SHOW DATABASES;

SHOW TABLES;

SHOW COLUMNS FROM customers;

## SELECT 语句

### 检索单个列

select prod_name from products;

如果没有明确的排序查询结果，则返回的数据的顺序没有特殊意义。

结束语句 多条SQL语句必须以分号分隔。 

### 检索多个列

select prod_id, prod_name, prod_price from products;

指定3个列名，列名之间用逗号分隔。

### 检索不同的行

你想得到出products表中产品的所有供应商ID

> select distinct vend_id from products;

distinct告诉Mysql只返回不同的vend_id行。distinct关键字应用于所有列而不仅仅是前置它的列。

select distinct vend_id, prod_price from products;

### 限制结果

select prod_name from products limit 5; 

limit 5 指示mysql返回不多于5行。

select prod_name from products limit 5, 5;

limit 5, 5指示mysql返回从行5开始的5行，第一个数为开始位置，第二个数为要检索的行数。

mysql5 支持limit的另一种替代语法 limit 4 offset 3 

## 排序检索数据

### 排序数据

select prod_name from products;

数据如果不明确控制的话，不能依赖该排序顺序。关系型数据库设计理论认为，如果不明确规定排序顺序
则不应该嘉定检索出的数据的顺序有意义。

select prod_name from products order by prod_name;

mysql对prod_name列以字母顺序排序  

### 按多个列排序

select prod_id, prod_price, prod_name from products order by prod_price, prod_name;

排序完全按所规定的顺序进行。仅在多个行具有相同的prod_price值时才对产品按prod_name进行排序。
如果prod_price中多有的值都是唯一，则不会按prod_name排序。

### 排序方向

按价格以降序排序产品(最贵的排在最前面)

> select prod_id, prod_price, prod_name from products order by prod_price desc;

以讲个排序产品(最贵的在最前面)

> select prod_id, prod_price, prod_name from products order by prod_price desc, prod_name asc;

找出最昂贵的物品的值

select prod_price from products order by prod_price desc limit 1;

## 过滤数据

### 使用where子句

select prod_name, prod_price from products where prod_price = 2.50;

### 检查单个值

select prod_name, prod_price from products where prod_name = 'fuses';

列出价格小于10美元的所有产品

> select prod_name, prod_price from products where prod_price < 10;

列出价格小于等于10美元的所有产品

> select prod_name, prod_price from products where prod_price <= 10;

列出由供应商1003制造的所有产品

> select vend_id, prod_name from products where vend_id <> 1003;

单引号用来限定字符串，如果将值与串类型的列进行比较，则需要限定引号。

## 范围值检查

检索价格在5美元和10美元之间的所有产品

> select prod_name, prod_price from products where prod_price between 5 and 10;

### 空值检查

返回没有价格的所有产品

> select prod_name from products where prod_price is null;

返回没有地址的顾客id

> select cust_id from customers where cust_email is null;

### and操作符

检索由供应商1003制造且价格小于等于10美元的所有产品的名称和价格。

> select prod_id, prod_price, prod_name from products where vend_id = 1003 and prod_price <= 10;

### or操作符

检索一个指定供应商的所有产品的产品名和价格

> select prod_name, prod_price from products where vend_id = 1002 or vend_id = 1003;

### in操作符

检索供应商1002和1003制造的所有产品

> select prod_name, prod_price from products where vend_id in (1002, 1003) order by prod_name;

列出除1002和1003之外的所有供应商制造的产品

> select prod_name, prod_price from products where vend_id not in (1002, 1003) order by prod_name;

## 用通配符进行过滤

### 百分号通配符

找出所有以词jet开头的产品

> select prod_id, prod_name from products where prod_name like 'jet%';

找出以s起头以e结尾的所有产品

> select prod_name from products where prod_name 's%e';

### 下划线通配符 下划线只匹配单个字符而不是多个字符


> select prod_id, prod_name from products where prod_name like '_ ton anvil'

## 使用正则表达式进行匹配

检索列prod_name包含文本1000的所有行

> select prod_name from products where prod_name regexp '1000' order by prod_name;

### 进行or匹配

select prod_name from products where prod_name regexp '1000|2000' order by prod_name;

select prod_name from products where prod_name regexp '[1-5] Ton' order by prod_name;

select vend_name from vendors where vend_name regexp '\\.' order by vend_name;

\或\\? 多数正则表达式实现使用单个反斜杠转义特殊字符，以便能使用这些字符本身。但mysql要求两个反斜杠。

## 计算字段

存储在表中的数据都不是应用程序所需要的。我们需要直接从数据库中检索出转换，计算或格式化的数据；而不是检索出数据，然后再在客户机应用程序或报告程序中重新格式化

### 拼接字段

vendors表包含供应商和位置信息。加入要生成一个供应商报表，需要在供应商的名字中按照name(location)这样的格式列出供应商的位置。

> select concat(vend_name, ' (', vend_country, ')') from vendors order by vend_name;

> select concat(rtrim(vend_name), ' (', rtrim(vend_country), ')') from vendors order by vend_name;

rtrim()函数去掉值右边的所有空格。

### 执行算术计算

汇总物品的价格

> select prod_id, quantity, item_price, quantity*item_price as expanded_price from orderitems where order_num = 20005;

## 使用数据处理函数

### 日期函数

检索出一个订单记录，该订单记录的order_date为2005-09-01

> select cust_id, order_num from orders where order_date = '2005-09-01';

> select cust_id, order_num from orders where Date(order_date) = '2019-01-03';

检索出2005年9月下的所有订单

> select cust_id, order_num from orders where date(order_date) between '2005-09-01' and '2005-09-30';
> select cust_id, order_num from orders wher year(order_date) = 2005 and month(order_date) = 9;

## 汇总数据

### 聚集函数

返回products表中所有产品的平均价格

> select avg(prod_price) as avg_price from products;

返回特定供应商所提供的产品的平均价格

> select avg(prod_price) as avg_price from products where vend_id = 1003;

返回customers表中客户的总数

> select count(*) as num_cust from customers;

返回具有电子邮件地址的客户计数

> select count(cust_email) as num_cust from customers;


返回products表中最贵的物品的价格

> select max(prod_price) as max_price from products;

返回products表中最便宜的物品的价格

> select min(prod_price) as min_price from products;

