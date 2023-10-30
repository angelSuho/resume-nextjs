import { faBook, faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이수호',
    small: '(호랑)',
  },
  contact: [
    {
      title: 'agsooho0303@gmail.com',
      icon: faEnvelope,
      badge: true,
    },
    {
      title: '010-7720-7850',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/angelSooho',
      link: 'https://github.com/angelSooho',
      icon: faGithub,
    },
    {
      title: 'https://suho0303.tistory.com/',
      link: 'https://suho0303.tistory.com/',
      icon: faRss,
    },
    {
      title: 'Portfolio',
      link: 'https://portfolio.sooho.info/',
      icon: faBook,
    },
  ],
  notice: {
    title: '반갑습니다. 신입 서버 개발자 이수호입니다.',
    icon: faBell,
  },
};

export default profile;
