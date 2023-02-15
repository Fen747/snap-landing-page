import type { AppProps } from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next-pagesdir";
import { Layout } from '@/components/Layout';
import Link from "next/link";
import '@/styles/commons.css';

// Only in TypeScript projects
declare module "@codegouvfr/react-dsfr/next-pagesdir" {
    interface RegisterLink {
        Link: typeof Link;
    }
}

const {
    withDsfr,
    dsfrDocumentApi
} = createNextDsfrIntegrationApi({
    defaultColorScheme: "light",
    Link
});

export { dsfrDocumentApi };

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withDsfr(App);