CREATE DATABASE zoo;
use zoo;

CREATE TABLE pets (
  name VARCHAR(20),
  pet VARCHAR(10)
);

INSERT INTO pets
  (name, pet)
VALUES
  ('Birillo', 'cane'),
  ('Graffio', 'gatto');