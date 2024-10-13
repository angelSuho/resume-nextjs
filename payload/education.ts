import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'KCC정보통신 채용연계형 교육 과정',
      subTitle:
        'SI 개발 분야에서 요구되는 전문 지식과 기술을 학습하고, 시스템 설계, 데이터 모델링과 같은 실무에서 요구되는 역량을 갖추기 위한 교육과정을 진행하고 있습니다.',
      startedAt: '2024-05',
      endedAt: '2024-11',
    },
    {
      title: '개발동아리 DDD 10th',
      subTitle:
        '백엔드 개발자로 활동중이며, 기획자, 디자이너, 및 다른 직군의 현직자들과 협력하여 실제 프로젝트를 개발 중입니다, 다양한 직군 간의 커뮤니케이션과 협업을 통한 실무 경험을 쌓고 있습니다.',
      startedAt: '2023-11',
      endedAt: '2024-03',
    },
    {
      title: 'CS, 알고리즘 스터디',
      subTitle:
        '각자 매주 알고리즘의 다양한 주제(ex: 탐욕 알고리즘, 그래프, 동적 계획법, 구현, 이분 탐색 등)를 학습하고, 각 주제에 대해 3~4개의 문제를 풀어보며 코드를 검토',
      startedAt: '2021-08',
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
