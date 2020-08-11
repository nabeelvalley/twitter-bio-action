require('dotenv').config()

const Twitter = require('twitter')
const core = require('@actions/core')

const bio = core.getInput('bio') || 'Hello, World!'

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})

const main = async () => {
  try {
    const response = await client.post('account/update_profile', {
      description: bio,
    })

    console.log(response)
  } catch (error) {
    console.error(error)
    core.setFailed(
      `The Twitter API Responded with an Error: ${error[0].code}, ${error[0].message}`
    )
  }
}

main()
