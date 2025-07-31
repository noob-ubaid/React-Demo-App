import React from "react";
import { useParams, useNavigate } from "react-router";
import useFetchPost from "../hooks/useFetchPost";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = useFetchPost(id);

  return (
    <div className="flex items-center flex-col justify-center w-full min-h-screen">
      <div className="p-6 max-w-3xl mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {post && (
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        )}
      </div>
       <button
        onClick={() => navigate('/main')}
        className="mb-4 px-4 cursor-pointer duration-300 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        ← Back to Main Page 
      </button>
    </div>
  );
};

export default Details;
