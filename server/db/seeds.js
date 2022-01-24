use countries;

db.dropDatabase();

db.funfacts.insertMany(
    [
        {
            country:"Hawaii",
            funfact:"The best place in the world to see rainbows"
        },
        {
            country:"China",
            funfact:"All of China is on Beijing time despite geographically spanning over 5 time zones. "

        },
        {
            country:"Hawaii",
            funfact:"The best place in the world to see rainbows"
        }

    ]
);

