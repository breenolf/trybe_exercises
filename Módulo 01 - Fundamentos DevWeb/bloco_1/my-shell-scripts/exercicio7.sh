#!/bin/bash

if [ -d $1 ]
then
    QUANTIDADE=`ls -l $1 | wc -l`
    echo "O $1 tem $QUANTIDADE arquivos"
else
    echo "O argumento $1 não é um diretório!"
fi    