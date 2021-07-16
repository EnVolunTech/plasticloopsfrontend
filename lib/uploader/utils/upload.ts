import listeners from "./xhrListeners";
import fetchSignature from "./fetchSignature";
import { XHRResponse } from "../types";

interface UploadArgs {
  url: string; // cloudinary upload url
  file: File;
  onProgress: (progress: number) => void;
}

const upload = ({ url, file, onProgress }: UploadArgs): Promise<XHRResponse> =>
  new Promise((resolve, reject) => {
    // fetch signature
    fetchSignature(encodeURIComponent(file.name))
      .then(({ public_id, signature, timestamp }) => {
        const payload = new FormData();
        payload.append("file", file);
        payload.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
        payload.append("public_id", public_id);
        payload.append("timestamp", timestamp.toString());
        payload.append("signature", signature);

        try {
          // XHR - New XHR request
          const xhr = new XMLHttpRequest();
          xhr.responseType = "json";

          //add listeners
          listeners({ xhr, onProgress, resolve, reject });

          // XHR - Make request
          xhr.open("POST", url);
          xhr.send(payload);
        } catch (error) {
          reject({ error });
        }
      })
      .catch((error) => reject({ error }));
  });

export default upload;
