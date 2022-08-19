import { Link } from 'react-daisyui';

import {
  AiOutlineMail as MailIcon,
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
} from 'react-icons/ai';

import MyInfo from '../../contents/myinfo.json';

export default function HeadSection() {
  return (
    <header className="flex flex-col space-y-2">
      <section className="prose prose-h3:mb-0">
        <h3>{MyInfo.name}</h3>
        <p>{MyInfo.job}</p>
      </section>
      <section>
        <Link
          href={MyInfo.links.email.url}
          className="flex flex-row mb-1 hover:underline"
          rel="noreferrer">
          <MailIcon fontSize={20} className="mr-2" />
          {MyInfo.links.email.display}
        </Link>
        <div className="flex col-auto space-x-2">
          <Link
            href={MyInfo.links.github.url}
            className="flex flex-row hover:underline"
            rel="noreferrer">
            <GithubIcon fontSize={20} className="mr-2" />
            {MyInfo.links.github.display}
          </Link>
          <Link
            href={MyInfo.links.linkedin.url}
            className="flex flex-row hover:underline"
            rel="noreferrer">
            <LinkedinIcon fontSize={20} className="mr-2" />
            {MyInfo.links.linkedin.display}
          </Link>
        </div>
      </section>
    </header>
  );
}
