### Local 환경 모든 image 삭제

    - docker rm -f $(docker ps -aq)

### Client build 및 image 생성 명령어

    - ./build.sh
    - (쉘 스크립트 권한 명령어 --> chmod 777 build.sh)

### Client image 실행 명령어

    - docker run -p 80:80 drumbbang-client
    - (Background 동작 원하면 옵션 추가해야함 --> 옵션 추가적으로 명세하기)

### Docker image pull 방법 (추가 예정)

    - Docker hub에서 image 자동 push, pull 관련 로직 구현하기