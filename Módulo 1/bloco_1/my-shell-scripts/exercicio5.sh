#!/bin/bash

read -p "Digite um caminho de arquivo ou diretório: " CAMINHO

if [ -d "$CAMINHO" ]
 then
    echo "É UM DIRETÓRIO"
elif [ -f "$CAMINHO" ]
 then
    echo "É UM ARQUIVO COMUM"
else
    echo "É QUALQUER OUTRO TIPO DE ARQUIVO" 
fi

ls -l $CAMINHO
