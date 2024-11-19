import React, { useState, useEffect } from "react";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Alchemist",
      author: "Paulo Coelho",
      category: "World Literature",
      description: "A novel about following your dreams.",
      cover: "https://covers.openlibrary.org/b/id/8231856-M.jpg",
      downloadLink: "#",
    },
    {
      id: 2,
      title: "O'tgan Kunlar",
      author: "Abdulla Qodiriy",
      category: "Uzbek Literature",
      description: "A classic novel of Uzbek literature.",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/O%27tgan_Kunlar.jpg",
      downloadLink: "#",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "World Literature",
      description: "A romantic novel that critiques societal norms.",
      cover: "https://covers.openlibrary.org/b/id/8225320-M.jpg",
      downloadLink: "#",
    },
    {
      id: 4,
      title: "Mehrobdan Chayon",
      author: "Abdulla Qodiriy",
      category: "Uzbek Literature",
      description: "A tale of love, betrayal, and societal challenges.",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Mehrobdan_Chayon_cover.jpg",
      downloadLink: "#",
    },
    {
      id: 5,
      title: "War and Peace",
      author: "Leo Tolstoy",
      category: "World Literature",
      description: "A sweeping narrative of Russian society.",
      cover: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
      downloadLink: "#",
    },
    {
      id: 6,
      title: "Qiyomat",
      author: "Abdulla Qahhor",
      category: "Uzbek Literature",
      description: "A classic of Uzbek literature exploring human morality.",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Qiyomat_cover.jpg",
      downloadLink: "#",
    },
    {
      id: 7,
      title: "1984",
      author: "George Orwell",
      category: "World Literature",
      description: "A dystopian novel about surveillance and totalitarianism.",
      cover: "https://covers.openlibrary.org/b/id/8221251-M.jpg",
      downloadLink: "#",
    },
    {
      id: 8,
      title: "Chol va Dengiz",
      author: "Ernest Hemingway",
      category: "World Literature",
      description: "A story of perseverance and man's battle with nature.",
      cover: "https://covers.openlibrary.org/b/id/8155431-M.jpg",
      downloadLink: "#",
    },
    {
      id: 9,
      title: "Hamsa",
      author: "Alisher Navoi",
      category: "Uzbek Literature",
      description: "A celebrated collection of five epic poems.",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Hamsa_cover.jpg",
      downloadLink: "#",
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      category: "World Literature",
      description: "A deep exploration of morality, guilt, and redemption.",
      cover: "https://covers.openlibrary.org/b/id/8225269-M.jpg",
      downloadLink: "#",
    },
  ]);

  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [sortBy, setSortBy] = useState("A-Z");

  const toggleFavorite = (book) => {
    if (favorites.some((fav) => fav.id === book.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  // Modalni ESC bilan yopish uchun listener qo'shish
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedBook) {
        setSelectedBook(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBook]);

  const filteredBooks = books
    .filter((book) => {
      const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "A-Z") return a.title.localeCompare(b.title);
      if (sortBy === "Newest") return b.id - a.id; // Assume "id" reflects entry order
      return 0;
    });

  return (
    <div className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Online Library</h1>
        <p className="text-gray-600 mt-2">Explore your favorite books.</p>
      </div>

      {/* Search, Categories, and Sort */}
      <div className="container mx-auto px-6 lg:px-12 mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4 overflow-auto">
          {["All", "Uzbek Literature", "World Literature", "Favorites"].map(
            (category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="A-Z">A-Z</option>
          <option value="Newest">Newest</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-12">
        {(selectedCategory === "Favorites" ? favorites : filteredBooks).map(
          (book) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedBook(book)}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{book.author}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(book);
                }}
                className={`absolute top-4 right-4 text-xl ${
                  favorites.some((fav) => fav.id === book.id)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                ♥
              </button>
            </div>
          )
        )}
      </div>

      {/* Modal for Book Details */}
      {selectedBook && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:shadow-lg transition duration-200"
              title="Close"
            >
              ✕
            </button>
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedBook.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{selectedBook.author}</p>
            <p className="text-gray-700 mb-4">{selectedBook.description}</p>
            <a
              href={selectedBook.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
