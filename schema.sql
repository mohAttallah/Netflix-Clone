create table if not exists movie (
    id serial primary key,
    title varchar(255),
    poster_path varchar(10000),
    image varchar(255),
    comments varchar(10000)
);