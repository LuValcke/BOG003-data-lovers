import { moviesList } from '../src/data.js';
const entry = [{"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky", "director": "Hayao Miyazaki",
    "producer": "Isao Takahata"},
    {"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro","director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki"},
    {"id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies","director": "Isao Takahata",
    "producer": "Toru Hara"},
    {"id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    "title": "Whisper of the Heart","director": "Yoshifumi Kondō",
    "producer": "Toshio Suzuki"},
    {"id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns","director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki"}];


describe('moviesList', () => {
  it('is a function', () => {
    expect(typeof moviesList).toBe('function');
  });
  const output = ["Castle in the Sky", "My Neighbor Totoro"]
  it('returns output', () => {
    expect(moviesList(entry, "Hayao Miyazaki")).toStrictEqual(output);
  });
  const output1 = ["Grave of the Fireflies"]
  it('returns output1', () => {
    expect(moviesList(entry, "Isao Takahata")).toStrictEqual(output1);
  });
  const output2 = ["The Cat Returns"]
  it('returns output2', () => {
    expect(moviesList(entry, "Hiroyuki Morita")).toStrictEqual(output2);
  });
});


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
 