import {
  START_UPLOADING,
  SET_UPLOAD_PROGRESS,
  SET_ERROR,
  FINISH_UPLOADING,
} from "./constants";

export interface UploadState {
  loading: boolean;
  progress: number;
  error: string | null;
  done: boolean;
}

export type Action =
  | { type: typeof START_UPLOADING }
  | { type: typeof SET_UPLOAD_PROGRESS; payload: number }
  | { type: typeof SET_ERROR; payload: string }
  | { type: typeof FINISH_UPLOADING; payload: any };

export type dispatchType = (action: Action) => void;

export interface CloudinaryUploadResponse {
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: false;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: Array<string>;
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}

export interface XHRResponse {
  response?: CloudinaryUploadResponse | null;
  error?: string | boolean | ProgressEvent;
  statusCode: number;
  done?: boolean;
}
