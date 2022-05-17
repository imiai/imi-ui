build-storybook:
	yarn build-storybook
	
sync:
	gsutil -m cp -r storybook-static/. gs://storybook.imi.ai

deploy: build-storybook sync