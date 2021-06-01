create table tour_type (
	name varchar(50) unique not null,
	id smallserial primary key
)

create table tour (
	name varchar(255) unique not null,
	price integer not null,
	aviability boolean default true,
	tour_type_id integer references tour_type(id) not null,
	room_id integer references room(id) on delete cascade not null,
	date_to date not null check (date_to >= current_date) not null,
	date_back date not null check (date_back > date_to) not null,
	check_in time without time zone not null,
	check_out time without time zone not null,
	img text not null,
	days integer not null,
	id smallserial primary key
)

create table country (

	name varchar(50) unique not null,
	id smallserial primary key
)

create table city (
	name varchar(50)unique,
	country_id integer references country(id) on delete cascade,
	id smallserial primary key
)

create table hotel_type (
	name varchar(60) unique not null,
	id smallserial primary key
)


create table hotel (
	name varchar(255) not null,
	adress varchar(255) not null,
	city_id integer references city(id) on delete cascade,
	rang integer check(rang < 6),
	hotel_type_id integer references hotel_type(id) on delete cascade,
	id smallserial primary key,
	img text,
	unique(name,city_id)
)

create table room_type (
	name varchar(60) unique,
	id smallserial primary key
)

create table room (
	number integer unique,
	hotel_id integer references hotel(id) on delete cascade,
	id smallserial primary key
	unique(number,hotel_id)
)

create table position (
	name varchar(30) unique not null,
	salary integer,
	id smallserial primary key
)

create table workers (
	name varchar(40),
	surname varchar(40),
	phone integer check(phone<11) unique,
	email varchar(255) unique not null,
	password varchar(255) not null,
	position_id integer references position(id),
	id smallserial primary key
)

create table users (
	phone integer check(phone<11) unique,
	email varchar(255) unique not null,
	password varchar(255) not null
)

create table basket (
	user_id integer references users(id) on delete cascade,
	id smallserial primary key
)

create table raiting (
	rate integer check(rate < 6 ),
	user_id integer references users(id)
	tour_id integre references tour(id),
	id smallserial primary key
)

create table order (
	quantity integer,
	tour_id integer references tour(id) on delete cascade,
	basket_id integer references basket(id) on delete cascade,
	id smallserial primary key
)

create table oreder_status (
	order_id integer references orser(id) on delete cascade unique,
	worker_id integer references workers(id) on delete cascade,
	id smallserial primary key
)

insert into tour_type (name)
values ('curort'),
values ('vacation'),
values ('weeding'),
values ('shop')

insert into hotel_type (name)
values ('service appartments'),
values ('hotel'),
values ('motel'),
values ('hostel')
	  
insert into room_type (name)
values ('standart'),
values ('comfort'),
values ('lux'),
values ('family'),
values ('luxury')

insert into country (name)
values ('Italy'),
values ('Spain'),
values ('Germany')

insert into city (name, country_id)
values ('Rome', 1),
values ('Venezia', 1),
values ('Toskana', 1),
values ('Barcelona', 2),
values ('Mardid', 2),
values ('Valencia', 2),
values ('Berlin', 3),
values ('Kolne', 3)

insert into hotel (name, adress, rang, hotel_type_id,city_id)
values ('Victoria','st.Luidji 12', 4, 2,1),
values ('Penelopa','st.Maria 45/2', 5, 4,2),
values ('LaFamilia','st.Brogardi 4', 3, 4,3),
values ('Lancelot','st.Lui 12', 5, 2,4),
values ('Spanish','st.Liji 13', 4, 2,5),
values ('Chariot','st.Kuidji 14', 4, 2,6),
values ('Bremen','st.Strasse 15', 4, 2,7),
values ('Barmen','st.Stragfurt 15', 4, 2,8),
values ('Beerman','st.Strusse 15', 3, 4,9)

insert into room (number, hotel_id, room_type_id)
values (12,1,1)
values (13,1,1),
values (14,1,2),
values (15,1,2),
values (2,2,2),
values (15,2,2),
values (5,2,4),
values (5,3,1),
values (3,4,2),
values (4,4,3)

insert into tour (name,tour_type_id,room_id,date_to,date_back,check_in,check_out,price)
values ('Italian tour 1', 1, 1, '12-07-2021', '18-07-2021', '12:00', '14:00', 12000),
values ('Italian tour 2', 2, 2, '13-07-2021', '22-07-2021', '12:00', '14:00', 14000),
values ('Italian tour 3', 3, 6, '02-07-2021', '15-07-2021', '11:00', '13:00', 10000)


insert into user (email, password)
values ('user1@gmail.com', 'user1'),
values ('user2@gmail.com', 'user2'),
values ('user3@gmail.com', 'user3')

insert into position (name, salary)
values ('admin', 15000),
values ('manager', 12000)

insert into workers (email, password, position_id)
values ('manager1@gamil.com','manager1',2),
values ('manager2@gamil.com','manager2',2),
values ('manager3@gamil.com','manager3',2)

/*CREATE VIEW HOTELINFO*/
create or replace view hotelinfo as
select h.name as hotel,
	   h.adress as adress,
	   h.rang as rang,
	   ht.name as type,
	   h.img as img,
	   c.name as city,
	   ct.name as country
	   
	   from hotel h, country ct, city c, hotel_type ht
	   where h.hotel_type_id = ht.id and
	   h.city_id = c.id and c.country_id = ct.id