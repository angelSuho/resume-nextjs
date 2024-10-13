import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Kotlin',
    },
    {
      title: 'Junit5',
    },
    {
      title: 'Spring framework',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Mockito',
    },
    {
      title: 'MYBatis',
    },
    {
      title: 'Querydsl',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Oracle',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'H2',
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'NCP',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Github Actions',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Jenkins',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'HTML/CSS',
    },
    {
      title: 'javascript',
    },
    {
      title: 'JSP',
    },
    {
      title: 'React.js',
    },
    {
      title: 'JQuery',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & Etcs',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
    {
      title: 'Swagger',
    },
    {
      title: 'JMeter',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Ubuntu',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, database, frontend, tools],
  tooltip: '1: 기초 수준\n2: 중급 수준\n3: Production 개발 가능 수준',
};

export default skill;
