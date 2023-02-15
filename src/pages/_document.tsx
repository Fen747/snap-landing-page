import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import { dsfrDocumentApi } from "./_app";

const {
  getColorSchemeHtmlAttributes,
  augmentDocumentForDsfr
} = dsfrDocumentApi;

export default function Document(props: DocumentProps) {
  const htmlAttributes = getColorSchemeHtmlAttributes(props)

  return (
    <Html {...htmlAttributes}>
      <Head>
        <meta property="og:title" content="Pastille SNAP" />
        {/* <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
        <meta property="og:description" content="Mes applications à portée de main" />
        <meta property="og:locale" content="fr_FR" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://rizomo.numerique.gouv.fr/scripts/widget" defer></script>
    </Html>
  );
}

augmentDocumentForDsfr(Document);