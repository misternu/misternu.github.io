source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'kramdown'
gem 'github-pages', versions['github-pages']
gem 'jekyll'
gem 'jekyll-compose', group: [:jekyll_plugins]
