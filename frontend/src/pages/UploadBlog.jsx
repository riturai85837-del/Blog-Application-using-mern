import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { api_base_url } from "../helper";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const UploadBlog = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminSecret, setAdminSecret] = useState("");
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const editor = useRef(null);
  const navigate = useNavigate();

  // Jodit Editor Config
  const config = {
    readonly: false,
    placeholder: "Write your blog content here...",
    style: {
      color: "#000",
      background: "#fff",
    },
  };

  // Admin Login Check
  const checkAdmin = (e) => {
    e.preventDefault();

    if (!adminSecret) {
      setError("Please enter admin secret ❌");
      return;
    }

    if (adminSecret === "admin1234") {
      setIsAdmin(true);
      setError("");
    } else {
      setError("Wrong Secret ❌");
    }
  };

  // Blog Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !desc || !content || !image) {
      setError("All fields are required ❌");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("content", content);
    formData.append("author", "Admin");
    formData.append("image", image);

    fetch(api_base_url + "/uploadBlog", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Blog created successfully ✅");
          navigate("/");
        } else {
          setError(data.message || "Upload failed");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong ❌");
      });
  };

  return (
    <>
      {!isAdmin ? (
        <div className="con flex items-center justify-center flex-col h-screen">
          <form
            onSubmit={checkAdmin}
            className="w-[25vw] flex flex-col rounded-lg p-[20px] bg-[#0F0E0E]"
          >
            <h3 className="text-2xl mb-4 text-white">
              Login to upload blog
            </h3>

            <input
              type="password"
              placeholder="Enter admin secret"
              value={adminSecret}
              onChange={(e) => setAdminSecret(e.target.value)}
              className="w-full p-3 rounded bg-white text-black border border-gray-300 outline-none"
            />

            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>

            <button
              type="submit"
              className="btnNormal mt-3"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <>
          <Navbar />

          <div className="px-[100px] py-[30px] text-white">
            <h3 className="text-2xl mb-4">
              Upload Blog
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 bg-black text-white placeholder-gray-500"
              />

              <textarea
                placeholder="Enter description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 bg-black text-white placeholder-gray-500 min-h-[100px]"
              />

              <JoditEditor
                ref={editor}
                className='text-black mt-2'
                value={content}
                config={config}
                tabIndex={1}
                onChange={(newContent) => setContent(newContent)}
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="text-white"
              />

              <p className="text-red-500 text-sm">
                {error}
              </p>

              <button
                type="submit"
                className="btnNormal self-start"
              >
                Create Blog
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default UploadBlog;








          







