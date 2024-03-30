docker build -t inssocripta_challenge .

docker run -p 5173:5173 -v ${pwd}:/inssocripta_challenge inssocripta_challenge
