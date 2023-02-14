import type { FC, ReactNode } from 'react'
import { Header } from "@codegouvfr/react-dsfr/Header"
import { Footer } from "@codegouvfr/react-dsfr/Footer"

const brandTop = <>MINISTÈRE<br />DE LA TRANSFORMATION<br/>ET DE LA FONCTION<br />PUBLIQUES</>
const homeLinkProps = {
  href: '/',
  title: 'Accueil - SNAP'
}

export const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header
        brandTop={brandTop}
        homeLinkProps={homeLinkProps}
        quickAccessItems={[
          {
            iconId: 'fr-icon-arrow-right-line',
            linkProps: {
              href: '/share'
            },
            text: 'Partager'
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
        cookiesManagementLinkProps={{
          href: '#'
        }}
        personalDataLinkProps={{
          href: '#'
        }}
        termsLinkProps={{
          href: '/terms'
        }}
        websiteMapLinkProps={{
          href: '/sitemap.xml'
        }}
      />
    </>
  )
}