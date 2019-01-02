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
