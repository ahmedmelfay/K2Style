import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/profile.php?id=100023570276369' },
  { id: 2, icon: 'uil uil-youtube', url: 'https://www.youtube.com/@ktschannel5665' },
  { id: 3, icon: 'uil uil-envelope', url: 'mailto:keytosteelco@gmail.com' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target={icon.includes('uil-envelope') ? '_self' : '_blank'} rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
