import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import twitterImage from '@images/twitter.png'
import linkedinImage from '@images/linkedin.png'
import emailImage from '@images/email.png'
import { useEffect, useState } from 'react'

const Share = () => {
  const rootUrl = (typeof window === "undefined") ? "" : window.location.toString().split(window.location.pathname)[0];
  const linkedInLink = `https://www.linkedin.com/sharing/share-offsite/?url=${rootUrl}`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${rootUrl}&text=La Pastille SNAP`;
  const mailLink = `mailto:?subject=La Pastille Snap&body=${rootUrl}`;

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return  (
    <section className="fr-container">
      <h1 className='mb-3'>
        Partager la Pastille SNAP
      </h1>
      {show && (
        <div className="row space-around full-width">
          <Link href={linkedInLink} style={{ background: 'none' }} target="_blank">
            <Image
              alt="Partager sur LinkedIn"
              src={linkedinImage}
              width={128}
              height={128}
            />
          </Link>
          <Link href={twitterLink} style={{ background: 'none' }} target="_blank">
            <Image
              alt="Partager sur Twitter"
              src={twitterImage}
              width={128}
              height={128}
            />
          </Link>
          <Link href={mailLink} style={{ background: 'none' }} target="_blank">
            <Image
              alt="Partager par email"
              src={emailImage}
              width={128}
              height={128}
            />
          </Link>
        </div>
      )}
    </section>
  )
};

export default Share;