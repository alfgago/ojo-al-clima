import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  WhatsappShareButton,
} from 'react-share';
import { ReactSVG } from 'react-svg';
import { ShareStyle } from './ShareStyle';

export const Share = () => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('Ojo al clima');

  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL || 'https://ojo-al-clima.vercel.app/'}${router.asPath}`;

  useEffect(() => {
    setPageTitle(document.title);
  }, [router.asPath]);

  return (
    <ShareStyle className='share'>
      <FacebookShareButton url={shareUrl} quote={pageTitle}>
        <ReactSVG src='/icons/fb.svg' />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={pageTitle}>
        <ReactSVG src='/icons/x.svg' />
      </TwitterShareButton>

      <RedditShareButton url={shareUrl} title={pageTitle}>
        <ReactSVG src='/icons/reddit.svg' />
      </RedditShareButton>

      <WhatsappShareButton url={shareUrl} title={pageTitle}>
        <ReactSVG src='/icons/whats.svg' />
      </WhatsappShareButton>
    </ShareStyle>
  );
};
