import GameSavingLoader from "../GameSavingLoader.js";
import GameSaving from "../GameSaving.js";

test('test function', (done) => {
    GameSavingLoader.returnSavingObject()
        .then((gotObject) => {
            expect(gotObject).toEqual(new GameSaving(9, 1546300800, {
                id: 1,
                name: "Hitman",
                level: 10,
                points: 2000,
            }));
            done();
        });
});

test('test async function', async () => {
    expect.assertions(1);
    expect(await GameSavingLoader.loadAsync()).toEqual(new GameSaving(9, 1546300800, {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
    }));
});
