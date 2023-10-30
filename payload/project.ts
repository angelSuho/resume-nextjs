import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '강남대학교 축제 WithFestival',
      startedAt: '2023-04',
      where: '강남대학교 2023년 10월 백양체전 축제 플랫폼',
      descriptions: [
        {
          content: 'https://github.com/miIlicon/wf-back',
          href: 'https://github.com/miIlicon/wf-back',
        },
        { content: '누적 방문자 3400여명 관리 및 운영' },
        { content: '주간 스프린트 주제를 정하여 매주 진행한 사항에 대해 회의' },
        { content: 'jacoco 테스트 커버리지 전체 80%', weight: 'MEDIUM' },
        { content: '부하테스트를 진행하여 트래픽 양에 따른 조회시간 확인' },
        {
          content:
            '피크 시간동안 응답 시간 개선을 위해 정적 데이터 캐싱, 쿼리 최적화 등 비즈니스 로직 개선',
        },
        { content: 'FrontEnd 2명, BackEnd 3명' },
        { content: '매일 PR을 올리고 상호간 코드 리뷰를 통해 협업 능력 향상' },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SpringBoot 3.x, JPA, Querydsl, Redis, MariaDB, H2, JUnit5, Mockito, Github Actions, NCP-(Server, Object Storage)',
            },
          ],
        },
      ],
    },
    {
      title: 'TrendPick',
      startedAt: '2023-05',
      endedAt: '2023-08',
      where: '자신만의 스타일, 선호하는 스타일로 태그 기반 상품을 추천하는 패션 이커머스 플랫폼',
      descriptions: [
        {
          content: 'https://github.com/angelSooho/TrendPick',
          href: 'https://github.com/angelSooho/TrendPick',
        },
        { content: 'NCP 서버로 k8s를 이용하여 배포, Github Actions으로 CI/CD를 구축' },
        {
          content:
            '분할 서버로 인한 서버 별 재고에 대한 동시성 문제를 Redis의 분산락(Redisson)을 활용해 해결',
          weight: 'MEDIUM',
        },
        {
          content: '주문 도메인 비즈니스 로직 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '주문 실패 시 재고 값 rollback, 결제 취소 로직 안정적으로 구현' },
          ],
        },
        {
          content:
            '정적 데이터 캐싱처리와 쿼리최적화를 통해 조회에 대한 평균 응답시간 20%, TPS 약 22% 향상',
        },
        { content: 'BackEnd 4명' },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SpringBoot 3.x, JPA, Querydsl, Mysql, H2, Redis, JUnit5, Mockito, k8s, Kafka, Nginx, PinPoint, NCP-(Server, Object Storage), Github Actions',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
