import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '클린한 코드 작성을 중요시하며, 학습한 내용을 블로그와 GitHub에 기록하고 있습니다.',
    '개발에 대한 깊은 고민을 통해 더 나은 로직을 찾으려 꾸준히 노력하며, 개발 컨퍼런스를 활용합니다.',
    '모르는 것에 대해 두려워하지 않고 질문하며, 이를 통해 지식을 확장하면서 팀원들과 원활한 소통을 추구합니다.',
    ],
  sign: 'sooho',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
