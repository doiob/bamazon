create schema Bamazon;
use Bamazon;
create table Products ( ItemId int NOT NULL UNIQUE, Product varchar(30), Department varchar(30), Price decimal(8,2), Quantity decimal(8,2));
insert into Products values(80,"TV","Electronic",1499.99,20);
insert into Products values(81,"Computer","Electronic",999,10);
insert into Products values(82,"Microwave","Electronic",149.98,50);
insert into Products values(83,"Ipad","Electronic",599,100);
insert into Products values(84,"XBOX","Electronic",499,50);
insert into Products values(85,"Jacket","Cloth",29,10);
insert into Products values(86,"T Shirt","Cloth",10,30);
insert into Products values(87,"Skirts","Cloth",15,300);
insert into Products values(88,"Switch","Hardware",2.99,280);
insert into Products values(89,"Door Handle","Hardware",14.99,300);
insert into Products values(90,"Hooks","Hardware",4.99,300);