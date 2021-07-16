import {
  START_UPLOADING,
  SET_UPLOAD_PROGRESS,
  SET_ERROR,
  FINISH_UPLOADING,
} from "../constants";
import { UploadState, Action } from "../types";

export const initialState: UploadState = {
  loading: false,
  progress: 0,
  error: null,
  done: false,
};

export function reducer(state: UploadState, action: Action): UploadState {
  switch (action.type) {
    case START_UPLOADING:
      return { ...initialState, loading: true };

    case SET_UPLOAD_PROGRESS:
      return { ...state, progress: action.payload };

    case SET_ERROR:
      return { ...state, loading: false, error: action.payload, done: true };

    case FINISH_UPLOADING:
      return {
        ...state,
        done: true,
        loading: false,
        error: action.payload.error ? action.payload.response : false,
      };

    default:
      return state;
  }
}
