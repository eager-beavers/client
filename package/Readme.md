### Local 환경 모든 image 삭제
    - docker rm -f $(docker ps -aq)

### Client build 및 image 생성 명령어
    - ./build.sh
    - (쉘 스크립트 권한 명령어 --> chmod 777 build.sh)

### Docker image pull 방법 (추가 예정)
    - Docker hub에서 image 자동 push, pull 관련 로직 구현하기