#!/bin/bash

if [ -d "$1" ]
 then
    echo "É UM DIRETÓRIO"
elif [ -f "$1" ]
 then
    echo "É UM ARQUIVO COMUM"
else
    echo "É QUALQUER OUTRO TIPO DE ARQUIVO" 
fi

ls -l $1