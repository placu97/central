import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  POST_TXA_O_DG_2_HA_2_AB_XU_NFA_GV_P: `${COMMON_URL}buckt.a900f03f9fe320406a720dd0fefd21e2.r2.cloudflarestorage.com/a/TxaO-DG2hA2abXuNFAGvP`,
  POST: `${COMMON_URL}presigned.tresorh222.workers.dev/`,
};

export const postTxaODg2HA2AbXuNfaGvP = (payload) =>
  apis.post(API_URLS.POST_TXA_O_DG_2_HA_2_AB_XU_NFA_GV_P, {
    ...payload,
    params: {
      "X-Amz-Expires": "60",
      "X-Amz-Date": "20230216T095043Z",
      "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
      "X-Amz-Credential":
        "0bb5359d5ce202f5feedbb170cb30672%2F20230216%2Fauto%2Fs3%2Faws4_request",
      "X-Amz-SignedHeaders": "host",
      "X-Amz-Signature":
        "b7d8cb5333c09cd5be0865150bdc8fb6afb15f7706c51e0cfe2f984f95d157a7",
      ...payload?.params,
    },
  });

export const post = (payload) =>
  apis.post(API_URLS.POST, {
    ...payload,
    headers: { "Content-type": "application/json", ...payload?.headers },
  });

export const postAccountsSignInWithPassword = (payload) =>
  apis.post(
    `https://identitytoolkit.googleapis.com/v1/accounts${payload?.path?.signInWithPassword}`,
    {
      ...payload,
      params: {
        key: "AIzaSyAHqFEaxGMSxzMO9iDaI9F-vwUCKuG89oc",
        ...payload?.params,
      },
      headers: { "Content-type": "application/json", ...payload?.headers },
    }
  );

export const postAccountsSignUp = (payload) =>
  apis.post(
    `https://identitytoolkit.googleapis.com/v1/accounts${payload?.path?.signUp}`,
    {
      ...payload,
      params: {
        key: "AIzaSyAHqFEaxGMSxzMO9iDaI9F-vwUCKuG89oc",
        ...payload?.params,
      },
      headers: { "Content-type": "application/json", ...payload?.headers },
    }
  );
