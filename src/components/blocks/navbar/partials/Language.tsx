import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

// language list
const supportLanguage = ['ar', 'en', 'fr'];

const Language: FC = () => {
  const [language, setLanguage] = useState(supportLanguage[0]);

  return (
    <li className="nav-item dropdown language-select text-uppercase">
      <a
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className="nav-link dropdown-item dropdown-toggle"
      >
        {language}
      </a>

      <ul className="dropdown-menu">
        {supportLanguage.map((lang) => (
          <li className="nav-item" key={lang}>
            <Link className="dropdown-item" href='' locale={lang} onClick={() => setLanguage(lang)}>
              {lang}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Language;
