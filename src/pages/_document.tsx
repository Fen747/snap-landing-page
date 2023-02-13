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
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://rizomo.numerique.gouv.fr/scripts/widget" defer></script>
    </Html>
  );
}

augmentDocumentForDsfr(Document);