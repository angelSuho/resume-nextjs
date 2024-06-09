import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안정적인 서비스를 위해 항상 고민합니다. 테스트를 통한 안정성 향상과 변화에 용이한 코드를 작성하는 것에 관심이 많습니다.',
    '개발에 대한 깊은 고민을 통해 더 효율적이고 간결한 로직을 찾아내는 데에 노력을 기울이며, 시스템 구조를 개선하는 것을 좋아합니다.',
    '모르는 것에 대해 두려워하지 않고 적극적으로 질문하며, 이를 통해 지식을 확장하고 팀원들과 원활하게 소통하려 노력하고 있습니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
