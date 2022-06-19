#!/bin/sh

rm -rf dist
cd ../ || exit
yarn install
yarn build
mv ./dist ./package/dist

cd ./package || exit
docker build -t drumbbang-client .
rm -rf dist

# Docker Image 띄우는 명령 추가하기