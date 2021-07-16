import { useReducer, useCallback } from "react";
import {
  FINISH_UPLOADING,
  SET_ERROR,
  SET_UPLOAD_PROGRESS,
  START_UPLOADING,
} from "../constants";
import { dispatchType, XHRResponse } from "../types";
import upload from "../utils/upload";
import { initialState, reducer } from "./reducer";

interface UseUploadProps {
  url: string;
  onComplete?: (args: XHRResponse) => void;
  onError?: (args: XHRResponse) => void;
}

interface upLoadClientArgs extends UseUploadProps {
  file: File | null;
  dispatch: dispatchType;
}

const uploadClient = ({
  url,
  dispatch,
  file,
  onComplete,
  onError,
}: upLoadClientArgs) => {
  dispatch({ type: START_UPLOADING });

  upload({
    url,
    file,
    onProgress: (progress: number) =>
      dispatch({ type: SET_UPLOAD_PROGRESS, payload: progress }),
  })
    .then((response) => {
      if (onComplete) {
        onComplete(response);
      }
      dispatch({ type: FINISH_UPLOADING, payload: response });
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
      dispatch({ type: SET_ERROR, payload: error });
    });
};

const useUpload = ({ url, onComplete, onError }: UseUploadProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const execute = useCallback((file: File) => {
    if (!file) return;

    uploadClient({ url, dispatch, file, onComplete, onError });
  }, []);

  return [{ ...state }, execute] as const;
};

export default useUpload;
