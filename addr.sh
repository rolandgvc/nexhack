#!/bin/bash

for json_file in ./dev/assets/*.json;
do
  address=617ppd9GrB892nmRLZx83Ska1JbQ9jFWzTpbSXS13hmf
  sed -i '' "s/6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ/$address/g" $json_file 
done

