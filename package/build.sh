#!/bin/sh
cd ../
rm -rf dist
yarn install
yarn build
rm -rf dist

# Docker Image 띄우는 명령 추가하기