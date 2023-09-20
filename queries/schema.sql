CREATE TABLE users (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    age integer NOT NULL,
    name character varying(20) NOT NULL,
    company character varying(20) NOT NULL,
    country text NOT NULL,
    photo text NOT NULL,
    about text NOT NULL,
    latitude double precision NOT NULL DEFAULT '0'::double precision,
    longitude double precision NOT NULL DEFAULT '0'::double precision
);
