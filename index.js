const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

const gitHubData = {
    "login": "ayush931",
    "id": 159576275,
    "node_id": "U_kgDOCYLw0w",
    "avatar_url": "https://avatars.githubusercontent.com/u/159576275?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ayush931",
    "html_url": "https://github.com/ayush931",
    "followers_url": "https://api.github.com/users/ayush931/followers",
    "following_url": "https://api.github.com/users/ayush931/following{/other_user}",
    "gists_url": "https://api.github.com/users/ayush931/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ayush931/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ayush931/subscriptions",
    "organizations_url": "https://api.github.com/users/ayush931/orgs",
    "repos_url": "https://api.github.com/users/ayush931/repos",
    "events_url": "https://api.github.com/users/ayush931/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ayush931/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 2,
    "following": 4,
    "created_at": "2024-02-09T18:56:09Z",
    "updated_at": "2024-08-24T11:10:34Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Ayush__931")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})