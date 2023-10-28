import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'CS, 알고리즘 스터디',
      subTitle:
        '각자 매주 알고리즘의 다양한 주제(ex: 탐욕 알고리즘, 그래프, 동적 계획법, 구현, 이분 탐색 등)를 학습하고, 각 주제에 대해 3~4개의 문제를 풀어보며 코드를 검토',
      startedAt: '2010-03',
      // endedAt: '2010-02',
    },
    {
      title: '멋쟁이사자처럼 백엔드 스쿨 3기',
      subTitle:
        'Java, Spring 심화 학습, 백엔드 개발 전반 부분 역량 향상, 스터디 학습, 팀프로젝트 활동으로 얻은 협업 경험',
      startedAt: '2023-02',
      endedAt: '2023-07',
    },
    {
      title: '강남대학교',
      subTitle: '소프트웨어 / 가상현실 복수 전공 학사 졸업',
      startedAt: '2017-03',
      endedAt: '2023-02',
    },
  ],
};

export default education;
