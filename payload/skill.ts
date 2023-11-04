import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring framework',
      level: 3,
    },
    {
      title: 'JPA',
      level: 3,
    },
    {
      title: 'Querydsl',
      level: 3,
    },
    {
      title: 'Junit5',
      level: 3,
    },
    {
      title: 'Mockito',
      level: 2,
    },
    {
      title: 'Gradle',
      level: 3,
    },
    {
      title: 'EHCache',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'H2',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'NCP',
      level: 3,
    },
    {
      title: 'Github Actions',
      level: 3,
    },
    {
      title: 'Nginx',
      level: 2,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'Pinpoint',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'Git',
    },
    {
      title: 'Swagger',
    },
    {
      title: 'JMeter',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 중급 수준\n3: Production 개발 가능 수준',
};

export default skill;
