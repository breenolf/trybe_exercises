#!/bin/bash

PATH="/home/breno/Documentos/TRYBE/trybe-exercises/my-shell-scripts/README.md"

if [ -e $PATH ]
then
    echo "O caminho $PATH está habilitado!"
fi

if [ -w $PATH ]
then
    echo "Você tem permissão para editar $PATH"
else
    echo "Você NÃO foi autorizado a editar $PATH"
fi