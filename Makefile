install: 
				npm ci

run:
				node bin/brain-games.js

even-odd:
				node bin/brain-even.js

prime:
				node bin/brain-prime.js

calculate:
				node bin/brain-calc.js

gcd:
				node bin/brain-gcd.js

progression:
				node bin/brain-progression.js

publish:
				npm publish --dry-run

lint:
				npx eslint .

lintf:
				npx eslint --fix .