create table tour (
	name varchar(255) unique not null,
	price integer,
	tour_type_id integer references tour_type(id),
	room_id integer references room(id) on delete cascade,
	date_to date not null,
	date_back date not null,
	check_in time without time zone not null,
	check_out time without time zone not null,
	img bytea,
	days integer,
	aviability boolean default true,
	id smallserial primary key
	
)

