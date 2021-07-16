import { XHRResponse } from "../types";

interface ListenerArgs {
  xhr: XMLHttpRequest;
  onProgress: (progress: number) => void;
  resolve: (args: XHRResponse) => void;
  reject: (args: XHRResponse) => void;
}

export const listeners = ({
  xhr,
  onProgress,
  resolve,
  reject,
}: ListenerArgs) => {
  if (onProgress) {
    xhr.upload.addEventListener("progress", (e) => {
      if (!onProgress) return false;
      onProgress(Math.round((e.loaded / e.total) * 100));
    });
  }

  xhr.addEventListener("load", () => {
    if (xhr.status != 200) {
      reject({
        error: true,
        statusCode: xhr.status,
        response: xhr.response,
      });
    } else {
      resolve({
        response: xhr.response,
        statusCode: xhr.status,
        error: false,
        done: true,
      });
    }
  });

  xhr.addEventListener("error", (error) => {
    reject({
      error,
      statusCode: xhr.status,
      response: null,
    });
  });
};

export default listeners;
