#!/usr/bin/env bash

if [[ $# -eq 0 ]] ; then
    echo 'create.sh [package]'
    exit 1
fi

cp -R _template $1
sed -i -e "s/{title}/$1/g" $1/index.html
sed -i -e "s/{title}/$1/g" $1/package.json