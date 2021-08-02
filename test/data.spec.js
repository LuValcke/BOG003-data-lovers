import {
  moviesList,
  dataSortedOld,
  dataSortedNew,
  dataSortedAZ,
  dataSortedZA,
  genderPer,
} from "../src/data.js";
const entry = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
  },
  {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    title: "Grave of the Fireflies",
    director: "Isao Takahata",
    producer: "Toru Hara",
    release_date: "1988",
  },
  {
    id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    title: "Whisper of the Heart",
    director: "Yoshifumi Kondō",
    producer: "Toshio Suzuki",
    release_date: "1995",
  },
  {
    id: "90b72513-afd4-4570-84de-a56c312fdf81",
    title: "The Cat Returns",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    release_date: "2002",
  },
];

const entry2 = [
  { title: "Spirited Away", release_date: "2001" },
  { title: "Princess Mononoke", release_date: "1997" },
  { title: "Whisper of the Heart", release_date: "1995" },
  { title: "My Neighbors the Yamadas", release_date: "1999" },
  { title: "Howl's Moving Castle", release_date: "2004" },
];

describe("moviesList", () => {
  it("is a function", () => {
    expect(typeof moviesList).toBe("function");
  });
  const output = ["Castle in the Sky", "My Neighbor Totoro"];
  it("returns output", () => {
    expect(moviesList(entry, "Hayao Miyazaki")).toStrictEqual(output);
  });
  const output1 = ["Grave of the Fireflies"];
  it("returns output1", () => {
    expect(moviesList(entry, "Isao Takahata")).toStrictEqual(output1);
  });
  const output2 = ["The Cat Returns"];
  it("returns output2", () => {
    expect(moviesList(entry, "Hiroyuki Morita")).toStrictEqual(output2);
  });
});

describe("dataSortedOld", () => {
  it("is a function", () => {
    expect(typeof dataSortedOld).toBe("function");
  });
  const output1 = [
    { title: "Whisper of the Heart", release_date: "1995" },
    { title: "Princess Mononoke", release_date: "1997" },
    { title: "My Neighbors the Yamadas", release_date: "1999" },
    { title: "Spirited Away", release_date: "2001" },
    { title: "Howl's Moving Castle", release_date: "2004" },
  ];
  it("returns output1", () => {
    expect(dataSortedOld(entry2, entry2.release_date)).toStrictEqual(output1);
  });
});

describe("dataSortedOld", () => {
  it("is a function", () => {
    expect(typeof dataSortedNew).toBe("function");
  });
  const output2 = [
    { title: "Howl's Moving Castle", release_date: "2004" },
    { title: "Spirited Away", release_date: "2001" },
    { title: "My Neighbors the Yamadas", release_date: "1999" },
    { title: "Princess Mononoke", release_date: "1997" },
    { title: "Whisper of the Heart", release_date: "1995" },
  ];
  it("returns output2", () => {
    expect(dataSortedNew(entry2, entry2.release_date)).toStrictEqual(output2);
  });
});

describe("dataSortedAZ", () => {
  it("is a function", () => {
    expect(typeof dataSortedAZ).toBe("function");
  });
  const output1 = [
    { title: "Howl's Moving Castle", release_date: "2004" },
    { title: "My Neighbors the Yamadas", release_date: "1999" },
    { title: "Princess Mononoke", release_date: "1997" },
    { title: "Spirited Away", release_date: "2001" },
    { title: "Whisper of the Heart", release_date: "1995" },
  ];
  it("returns output1", () => {
    expect(dataSortedAZ(entry2, entry2.title)).toStrictEqual(output1);
  });
});

describe("dataSortedZA", () => {
  it("is a function", () => {
    expect(typeof dataSortedZA).toBe("function");
  });
  const output2 = [
    { title: "Whisper of the Heart", release_date: "1995" },
    { title: "Spirited Away", release_date: "2001" },
    { title: "Princess Mononoke", release_date: "1997" },
    { title: "My Neighbors the Yamadas", release_date: "1999" },
    { title: "Howl's Moving Castle", release_date: "2004" },
  ];
  it("returns output2", () => {
    expect(dataSortedZA(entry2, entry2.title)).toStrictEqual(output2);
  });
});

describe("genderPer", () => {
  it("is a function", () => {
    expect(typeof genderPer).toBe("function");
  });
  const output2 = {total: 173, fem: 47.39884393063584, male: 50.86705202312139, other: 1.7341040462427746};
  it("returns output2", () => {
    expect(genderPer(82, 88, 3)).toStrictEqual(output2);
  });
});
