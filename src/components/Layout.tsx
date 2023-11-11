import type { FC, ReactNode } from 'react'
import { Header } from "@codegouvfr/react-dsfr/Header"
import { Footer } from "@codegouvfr/react-dsfr/Footer"
import pastilleCouleurImage from '@images/pastille_couleur.png'
import Head from "next/head";
import { useRouter } from 'next/router';


const brandTop = <>MINISTÈRE<br />DE LA TRANSFORMATION<br/>ET DE LA FONCTION<br />PUBLIQUES</>
const homeLinkProps = {
  href: '/',
  title: 'Accueil - La Suite Numérique'
}

export const Layout: FC<{ children: ReactNode }> = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property="og:image" content={pastilleCouleurImage.src} />
      </Head>
      <Header
        brandTop={brandTop}
        homeLinkProps={homeLinkProps}
        quickAccessItems={[
          {
            iconId: 'fr-icon-arrow-right-line',
            linkProps: {
              href: router.pathname === '/share' ? '/' : '/share',
            },
            text: router.pathname === '/share' ? 'Accueil' : 'Partager',
          },
        ]}
      />
      <main>
        {props.children}
      </main>
      <Footer
        accessibility="fully compliant"
        brandTop={brandTop}
        homeLinkProps={homeLinkProps}
        // cookiesManagementLinkProps={{
        //   href: '#'
        // }}
        // personalDataLinkProps={{
        //   href: '#'
        // }}
        termsLinkProps={{
          href: 'https://rizomo.numerique.gouv.fr/legal/legalnotice',
          target: '_blank'
        }}
        websiteMapLinkProps={{
          href: '/sitemap.xml'
        }}
      />
    </>
  )
}