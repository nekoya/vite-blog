test: eslint typecheck

eslint:
	yarn eslint --cache src

deps:
	yarn install

typecheck:
	yarn tsc -p .
