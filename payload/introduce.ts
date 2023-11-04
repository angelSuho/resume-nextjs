import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '클린한 코드 작성을 중요시하며, 학습한 내용은 블로그와 GitHub에 꾸준히 기록하고 있습니다.',
    '개발에 대한 깊은 고민을 통해 더 효율적이고 간결한 로직을 찾아내는 데에 노력을 기울이며, 아키텍처의 효율성을 높이는 작업을 좋아합니다.',
    '모르는 것에 대해 두려워하지 않고 적극적으로 질문하며, 이를 통해 지식을 확장하고 팀원들과 원활하게 소통하려 노력합니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
