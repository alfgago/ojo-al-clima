import { ReactSVG } from 'react-svg';
import { ShareStyle } from './ShareStyle';

export const Share = () => {

  return (
    <ShareStyle className='share'>
      <a target='_blank' href='https://www.facebook.com/ojoalclima'>
        <ReactSVG src='/icons/fb.svg' />
      </a>
      <a target='_blank' href='https://twitter.com/ojoalclima'>
        <ReactSVG src='/icons/x.svg' />
      </a>
      <a target='_blank' href='https://www.youtube.com/@ojoalclima3707'>
        <ReactSVG src='/icons/yt.svg' />
      </a>
    </ShareStyle >
  );
};
