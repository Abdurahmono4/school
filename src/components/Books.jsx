import React, { useState, useEffect } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const API_URL =
    "https://openlibrary.org/people/mekBot/books/already-read.json";

  // Kitoblar API'dan ma'lumot olish
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(data.books || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Qidiruv funksiyasi
  const filteredBooks = books.filter((book) => {
    const title = book.title || "";
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Tavsiyalarni olish
  const getRecommendations = (book) => {
    return books.filter(
      (b) =>
        b.title !== book.title && // O'zini tavsiya qilmaslik
        (b.subjects?.some((subject) => book.subjects?.includes(subject)) || // O'xshash janr
          b.authors?.some((author) =>
            book.authors?.some((a) => a.name === author.name)
          )) // O'xshash muallif
    );
  };

  return (
    <div className="py-16 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Online Library
        </h2>
        <p className="text-gray-600 mt-2">
          Browse through books you've already read.
        </p>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-6 lg:px-12 mb-8">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center">
          <p className="text-lg text-blue-600">Loading books...</p>
        </div>
      )}

      {/* Books Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-12">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedBook(book)} // Kitobni tanlash
            >
              {/* Book Cover */}
              <img
                src={book.cover?.medium || "https://via.placeholder.com/150"}
                alt={book.title || "No title"}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Book Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {book.title || "No title available"}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {book.authors?.map((author) => author.name).join(", ") ||
                    "Unknown Author"}
                </p>
                <p className="text-sm text-gray-700">
                  {book.description || "No description available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No books found matching your criteria.
          </p>
        )}
      </div>

      {/* Tavsiyalar bo'limi */}
      {selectedBook && (
        <div className="container mx-auto px-6 lg:px-12 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            You might also like:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getRecommendations(selectedBook).map((book, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Book Cover */}
                <img
                  src={book.cover?.medium || "https://via.placeholder.com/150"}
                  alt={book.title || "No title"}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Book Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {book.title || "No title available"}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {book.authors?.map((author) => author.name).join(", ") ||
                      "Unknown Author"}
                  </p>
                  <p className="text-sm text-gray-700">
                    {book.description || "No description available"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
