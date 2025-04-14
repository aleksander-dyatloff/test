// prismicio.ts
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./slicemachine.config.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const createClient = () => {
  const client = prismic.createClient(sm.apiEndpoint, {
    fetchOptions: {
      cache: "no-store",
    },
    accessToken:
      "MC5aX0VyT0JFQUFDSUE3NG56.77-977-9QO-_vT3vv73vv73vv70i77-977-977-9Ug7vv71_77-9DxJY77-977-977-977-9MQHvv71mSFcJ77-9",
  });

  enableAutoPreviews({ client });

  return client;
};
