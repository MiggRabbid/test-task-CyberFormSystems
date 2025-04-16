i:
	npm install

d:
	npm run dev

dp:
	rm -rf dist
	npm run build
	npm run deploy

b:
	rm -rf dist
	npm run build

p:
	npm run preview

bo:
	rm -rf dist
	npm run build-only

l:
	npm run lint

f:
	npm run format

	
tr:
	tree -I 'node_modules|.vscode|dist'