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
        },
        {
            country:"Portugal",
            funfact:"Portugal is the oldest country in Europe"
        },
        {
            country:"Germany",
            funfact:"Oktoberfest actually begins in September"
        },
        {
            country:"Sudan",
            funfact:"Sudan has the most pyramids in the world (not Egypt)"
        },
        {
            country:"Peru",
            funfact:"Macchu Pichu is an earthquake-proof city"
        }
    ]
);

