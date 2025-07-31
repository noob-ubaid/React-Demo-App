import React, { useState } from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import { useNavigate } from "react-router";

const MainPage = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Posts</h1>
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-lg mx-auto block px-4 py-2 border border-gray-300 rounded-md mb-6"
      />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-gray-200 rounded-xl flex duration-300 justify-between flex-col shadow-md hover:bg-blue-50 cursor-pointer"
          >
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <button
              onClick={() => handleNavigate(post.id)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 cursor-pointer duration-300 text-white font-semibold py-2 px-4 rounded-md"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
