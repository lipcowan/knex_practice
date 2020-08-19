BEGIN;

INSERT INTO blogful_articles
    (title, date_published, content)
VALUES
    ('Fish tricks',  now() - '21 days'::INTERVAL, 'Some arbitrary content'),
    ('Not Dogs', now() - '21 days'::INTERVAL, 'Some arbitrary content'),
    ('Bluffalo Wings',  now() - '21 days'::INTERVAL, 'Some arbitrary content'),
    ('SubstiTuna Salad',  now() - '21 days'::INTERVAL, 'Some arbitrary content'),
    ('Tofurkey',  now() - '21 days'::INTERVAL, 'Some arbitrary content'),
    ('Pretenderloins',  now() - '9 days'::INTERVAL, 'Some arbitrary content'),
    ('Steak-believe', now() - '9 days'::INTERVAL, 'Some arbitrary content'),
    ('Kale Seitan',  now() - '9 days'::INTERVAL, 'Some arbitrary content'),
    ('NoBull Burger', now() - '9 days'::INTERVAL, 'Some arbitrary content'),
    ('Turnip the Beet',   now() - '9 days'::INTERVAL, 'Some arbitrary content'),
    ('Mascarphony',  now() - '7 days'::INTERVAL, 'Some arbitrary content'),
    ('Burgatory', now() - '7 days'::INTERVAL, 'Some arbitrary content'),
    ('Sleight of Ham', now() - '5 days'::INTERVAL, 'Some arbitrary content'),
    ('Antichovies', now() - '5 days'::INTERVAL, 'Some arbitrary content'),
    ('Lettuce B. Frank', now() - '5 days'::INTERVAL, 'Some arbitrary content'),
    ('Pepperphony', now() - '5 days'::INTERVAL, 'Some arbitrary content'),
    ('Shamburger', now() - '4 days'::INTERVAL, 'Some arbitrary content'),
    ('Facon', now() - '4 days'::INTERVAL, 'Some arbitrary content'),
    ('Salami-get-this-straight', now() - '4 days'::INTERVAL, 'Some arbitrary content'),
    ('Mi-steak', now() - '3 days'::INTERVAL, 'Some arbitrary content'),
    ('Ghost Beef', now() - '3 days'::INTERVAL, 'Some arbitrary content');
COMMIT;