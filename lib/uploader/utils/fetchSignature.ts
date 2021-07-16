const fetchSignature = (
  filename: string
): Promise<{
  timestamp?: number;
  signature?: string;
  public_id?: string;
  error?: any;
}> =>
  new Promise((resolve, reject) => {
    fetch(`/api/sign-image?file=${filename}`)
      .then((res) => res.json())
      .then((res) =>
        resolve({
          timestamp: res.timestamp,
          signature: res.signature,
          public_id: res.public_id,
        })
      )
      .catch((error) => {
        reject({ error });
      });
  });

export default fetchSignature;
