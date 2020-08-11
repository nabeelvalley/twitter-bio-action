# `twitter-bio-update`

A GitHub action that updates your Twitter Profile Bio/Description

> Learn more [on my website about this action](https://github.com/nabeelvalley/twitter-bio-update)

# Usage

> The action requires Node.js to run and has only been tested on Node.js v12

The value to set as a twitter `bio` is input from the workflow using the action. You can however set this to anything or even use data from a previous step to set this value

The action makes use of an input of `bio` which is what text you would like to set your Bio as. In order to do this you will also need to set up an App in the [Twitter Developer Portal](https://developer.twitter.com/) as those credentials are needed to connect to the Twitter API and requires the following environment variables to be set (you should use secrets for this):

- `TWITTER_CONSUMER_KEY: ${{ secrets.TWITTER_CONSUMER_KEY }}`
- `TWITTER_CONSUMER_SECRET: ${{ secrets.TWITTER_CONSUMER_SECRET }}`
- `TWITTER_ACCESS_KEY: ${{ secrets.TWITTER_ACCESS_KEY }}`
- `TWITTER_ACCESS_SECRET: ${{ secrets.TWITTER_ACCESS_SECRET }}`

An example of the action's usage can be seen below:

```yml
name: Run Twitter Bio Action
on:
  workflow_dispatch:
    inputs:
      bio:
        description: 'Twitter Bio'
        required: true

jobs:
  update-bio:
    runs-on: ubuntu-latest
    name: Update Twitter Bio
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: Install Dependencies
        run: npm install
      - name: Run Action
        uses: ./
        env:
          TWITTER_CONSUMER_KEY: ${{ secrets.TWITTER_CONSUMER_KEY }}
          TWITTER_CONSUMER_SECRET: ${{ secrets.TWITTER_CONSUMER_SECRET }}
          TWITTER_ACCESS_KEY: ${{ secrets.TWITTER_ACCESS_KEY }}
          TWITTER_ACCESS_SECRET: ${{ secrets.TWITTER_ACCESS_SECRET }}
        with:
          bio: ${{ github.event.inputs.bio }}
```
