import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

const user = {
  login: "HarshitSharma",
  id: 16318804,
  node_id: "MDQ6VXNlcjE2MzE4ODA0",
  avatar_url: "https://avatars.githubusercontent.com/u/16318804?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/HarshitSharma",
  html_url: "https://github.com/HarshitSharma",
  followers_url: "https://api.github.com/users/HarshitSharma/followers",
  following_url:
    "https://api.github.com/users/HarshitSharma/following{/other_user}",
  gists_url: "https://api.github.com/users/HarshitSharma/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/HarshitSharma/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/HarshitSharma/subscriptions",
  organizations_url: "https://api.github.com/users/HarshitSharma/orgs",
  repos_url: "https://api.github.com/users/HarshitSharma/repos",
  events_url: "https://api.github.com/users/HarshitSharma/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/HarshitSharma/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2015-12-16T09:18:09Z",
  updated_at: "2016-02-28T15:24:15Z",
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is my first request<h1>");
});

app.get("/api/data", (req, res) => {
  res.json(user);
});

app.listen(port, () => {
  console.log(`Port is listen at ${port}`);
});
