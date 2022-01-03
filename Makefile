test: deps eslint

eslint:
	yarn eslint --cache src

deps:
	yarn install
