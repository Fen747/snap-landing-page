import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import { dsfrDocumentApi } from "./_app";


const {
  getColorSchemeHtmlAttributes,
  augmentDocumentForDsfr
} = dsfrDocumentApi;

export default function Document(props: DocumentProps) {
  const htmlAttributes = getColorSchemeHtmlAttributes(props)

  console.log("htmlAttributes", htmlAttributes);


  return (
    <Html {...htmlAttributes}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

augmentDocumentForDsfr(Document);