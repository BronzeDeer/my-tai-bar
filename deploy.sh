 if [[ ! -f "src/data/tags.js" || ("src/data/recipe-book.js" -nt "src/data/tags.js") || ("process-tags.py" -nt "src/data/tags.js") ]]
 then
 ./process-tags.py
 fi

 rsync -avzP --delete src/* barmenu-deploy:/ 
