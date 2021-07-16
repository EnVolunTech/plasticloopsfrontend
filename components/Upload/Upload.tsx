import { useRef, useState } from "react";
import Preview from "@components/Preview";
import ProgressBar from "@components/ProgressBar";
import s from "./Upload.module.css";
import useUpload from "@lib/uploader/useUpload";

const Home = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(null);
  const [url, setUrl] = useState<string>("");
  const [{ progress, loading, done }, uploadImage] = useUpload({
    url: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
    onComplete: ({ response }) => setUrl(response.secure_url),
    onError: () => {
      setPreview(null);
      alert("There was an error.");
    },
  });

  const handleFileChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);

    reader.readAsDataURL(e.target.files[0]);

    uploadImage(e.target.files[0]);
  };

  return (
    <div className={s.root}>
      <input
        ref={imageInputRef}
        type="file"
        onChange={handleFileChange}
        hidden
      />

      <button
        className={s.button}
        onClick={() => imageInputRef.current.click()}
        disabled={loading}
      >
        Upload image
      </button>

      <div className={s.imageContainer}>
        <Preview image={preview} uploaded={done} />
        {loading && (
          <div className={s.progressBarContainer}>
            <ProgressBar progress={progress} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
