BEGIN;



INSERT INTO users(session_id, name, email, profile_img) VALUES
('56789ghjk', 'Jimmy', 'jimmy@jimmy.com', 'www.somepic.png' );

INSERT INTO beers(name, description, abv, style, organic, pic, web_id, users_id) VALUES
('Fat Tire', 'Named in honor of our co-founders bike trip
  through Europe, Fat Tire Amber Ale marks a turning point
  in the young electrical engineers home brewing.
  Belgian beers use a far broader palette of ingredients
  (fruits, spices, esoteric yeast strains) than German or English
  styles. Together with co-founder Kim Jordan, they traveled
  around sampling their homebrews to the public. Fat Tire won fans
  with its sense of balance: toasty, biscuit-like malt flavors coasting
  in equilibrium with hoppy freshness. Fat Tire: Pairs well with people.',
  5.2, 32, 'N', 'https://s3.amazonaws.com/brewerydbapi/beer/tuqTtX/upload_L6CVSL-medium.png',
  'tuqTtX', 1);

  COMMIT;
