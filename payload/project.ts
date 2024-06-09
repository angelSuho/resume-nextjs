import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Pregen',
      startedAt: '2023-12',
      where: '완벽하게 발표를 할 수 있도록 발표문 암기 및 연습을 보조해주는 서비스',
      descriptions: [
        {
          content: 'https://github.com/DDD-Community/pregen-server',
          href: 'https://github.com/DDD-Community/pregen-server',
        },
        {
          content: '모듈화된 서비스 배포',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '서비스를 독립적인 모듈로 분할, 각기 다른 기능을 수행하는 여러 컨테이너로 애플리케이션을 배포',
            },
            {
              content:
                '분리된 도메인 모듈로 리팩토링 과정에서 코드의 관리성과 유지보수성이 크게 향상',
            },
          ],
        },
        {
          content: '웹소켓 기반의 실시간 데이터 동기화 구현',
          descriptions: [
            {
              content:
                'PC와 모바일 간 데이터 동기화를 위해 웹소켓 기술을 활용하여 실시간 세션 관리 및 동기화 시스템을 구현',
            },
            {
              content: '클라이언트와 서버 간 시간 오차를 방지하기 위해 동기화된 시간 관리',
            },
            {
              content:
                'Redis를 사용하여 세션 데이터를 임시 저장하고 관리, PC와 모바일 사용자 간의 데이터 송수신을 최적화하여 사용자 경험 개선',
            },
          ],
        },
        {
          content:
            '개발직군 이외에 다직군 팀원들과의 협업을 통해 얻은 효율적인 프로젝트 관리 및 개발 프로세스 경험',
        },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Kotlin, SpringBoot 3.x, JPA, Querydsl, Redis, Mysql, WebSocket, Chat gpt API, JUnit5, Mockito, RabbitMQ, AWS-(EC2), Nginx, Docker-Compose',
            },
          ],
        },
      ],
    },
    {
      title: '대학교 축제 WithFestival',
      startedAt: '2023-04',
      endedAt: '2023-12',
      where: '대학교인 모두가 즐길 수 있도록 활동을 지원하는 축제 플랫폼',
      descriptions: [
        {
          content: 'https://github.com/miIlicon/wf-back',
          href: 'https://github.com/miIlicon/wf-back',
        },
        { content: '누적 방문자 5,000여명 관리 및 운영' },
        { content: '주간 스프린트 주제를 정하여 매주 진행한 사항에 대해 회의' },
        {
          content: '개발 중 체계적인 테스트 작성을 통해 프로젝트 안정성과 유지보수성을 강화',
          weight: 'MEDIUM',
          descriptions: [{ content: 'jacoco 테스트 커버리지 평균 82%' }],
        },
        {
          content: '부하테스트를 진행하여 트래픽 양에 따른 조회시간 확인',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '피크 시간동안 응답 시간 개선을 위해 정적 데이터 캐싱, 쿼리 최적화 등 비즈니스 로직 개선',
            },
            {
              content:
                '매 페이지 조회마다 쿼리가 발생하며 조회수를 업데이트하던 것을, 조회수 증가량을 Redis에 임시 저장한 후, 5분에 1회 일괄적으로 DB에 업데이트하는 방식으로 변경하여 DB 쿼리 부하 개선',
            },
            {
              content: '이슈정리',
              href:
                'https://drive.google.com/file/d/1u2ZfXN2Nw2-38jjTw6hyR3_8JfHI90mv/view?usp=sharing',
            },
          ],
        },
        { content: '매일 PR을 올리고 상호간 코드 리뷰를 통해 협업 능력 향상' },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SpringBoot 3.x, JPA, Querydsl, Redis, MariaDB, H2, JUnit5, Mockito, NCP-(Server, Object Storage), Nginx, Docker, Github Actions',
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
          content: 'https://github.com/angelSuho/TrendPick',
          href: 'https://github.com/angelSuho/TrendPick',
        },
        { content: 'NCP 서버로 k8s를 이용하여 배포, Github Actions으로 CI/CD를 구축' },
        {
          content:
            '분산 서버 환경에서의 주문 처리 중 재고 동기화 문제를 해결하여 서버 간 데이터 일관성 보장',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '분산 DB 확장성과 여러 인스턴스가 동일한 데이터에 접근할 수 있도록 하기 위해 분산된 서버 환경에서 Redis의 분산락을 사용. 각 어플리케이션 별로 일관된 락을 관리하고 재고 값을 동기화하는 방법을 도입함으로써, 주문 처리의 동시성 문제를 효과적으로 해결',
            },
            {
              content:
                '주문 메소드의 요청 순서에 따라 락 획득 순서를 설정하고 락 타임아웃을 설정하여 데드락을 방지하는 등의 방법을 도입',
            },
            {
              content: '이슈정리',
              href:
                'https://drive.google.com/file/d/1onCWjHKH1UYxfC43gzQQKoXdt2T_J8Pe/view?usp=sharing',
            },
          ],
        },
        {
          content: '상품, 주문 도메인의 핵심 비즈니스 로직 구현과 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '주문 실패 시 재고 값 rollback 및 결제 취소 로직을 트랜잭션 관리를 통해 안정적으로 구현함으로써, 데이터 무결성 보장 및 시스템의 신뢰도 향상에 기여',
            },
          ],
        },
        {
          content: '상품 데이터셋 검색 쿼리 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 LIKE 기반 검색 연산 로직에서 FULLTEXT 인덱싱을 이용한 검색 쿼리로 전환하여 데이터 검색 성능 향상',
            },
            {
              content:
                'LIKE 검색에서 FULLTEXT 검색으로의 전환 후, 검색 처리 시간이 평균 12초에서 평균 0.8 ~ 1.1초로 감소',
            },
            {
              content: '이슈정리',
              href:
                'https://drive.google.com/file/d/1Trkfi6J6QAwlKWuvFSgt85EYIQ0kLVGx/view?usp=sharing',
            },
          ],
        },
        {
          content:
            '정적 데이터 캐싱처리와 쿼리최적화를 통해 조회에 대한 평균 응답시간 20%, TPS 약 22% 향상',
        },
        { content: '페어프로그래밍 문화, Java 코드 스타일 최적화' },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SpringBoot 3.x, JPA, Querydsl, Mysql, H2, Redis, JUnit5, Mockito, k8s, Kafka, Nginx, Docker, PinPoint, NCP-(Server, Object Storage), Github Actions',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
