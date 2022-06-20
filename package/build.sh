#!/bin/sh

# 기존 파일 삭제
rm -rf dist
docker rmi -f drumbbang-client

cd ../ || exit
yarn install
yarn build
mv ./dist ./package/dist

cd ./package || exit
docker build -t drumbbang-client .
rm -rf dist

# Docker Image 띄우는 명령 추가하기