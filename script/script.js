const PRIMITIVE_ARRAY = [1, 2, 'a', 'b', 2, 'a', 3, 4];
const NON_PRIMITIVE_ARRAY = [[1, 2], {'a': 'b'}, {'a': 2}, {'a': 'b'}, [3, 4], [1, 2]];
const BOOKS = [
    {
      id: 1,
      name: "In Search of Lost Time ",
      author: { name: "Marcel Proust", id: 1 }
    },
    { id: 2, name: "Ulysses", author: { name: "James Joyce", id: 2 } },
    {
      id: 3,
      name: "Don Quixote",
      author: { name: "Miguel de Cervantes", id: 3 }
    },
    { id: 4, name: "Hamlet", author: { name: "William Shakespeare", id: 4 } },
    {
      id: 5,
      name: "Romeo and Juliet",
      author: { name: "William Shakespeare", id: 4 }
    },
    { id: 6, name: "Dubliners", author: { name: "James Joyce", id: 2 } }
];

function removeWithSet() {
    const uniqueArr = [...new Set(PRIMITIVE_ARRAY)];
    printResult(uniqueArr);
}

function removeWithFilter() {
    const authorOptions = BOOKS
        .filter((book, index, array) => {
            const bookIndex = array.findIndex((b) => book.author.id === b.author.id);
            return index === bookIndex;
        })
        .map(book => ({ id: book.author.id, author: book.author.name }));
    printResult(authorOptions);
}

function removeWithMap() {
    const otherOptions = new Map([...BOOKS.map(book => [book.author.id, book.author.name])]);
    printResult([...otherOptions]);
}

function printResult(arg) {
    console.log(arg);
}