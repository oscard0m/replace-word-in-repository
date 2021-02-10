import { Octokit } from "@octokit/core";
import { searchAndReplacePullRequest } from "octokit-plugin-search-and-replace-pull-request";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { createPullRequest } from "octokit-plugin-create-pull-request";

const CustomOctokit = Octokit.plugin(
  createPullRequest,
  searchAndReplacePullRequest,
  paginateRest
);

const octokit = new CustomOctokit({ auth: "" });

const owner = "Marfeel";
const repo = "poll-daddy";
const title = "fix(package.json): Rename package name";
const replace = "widget-providers-poll-daddy";

octokit.createSearchAndReplacePullRequest({
  owner,
  repo,
  title,
  body: "pull request description",
  base: "master" /* optional: defaults to default branch */,
  head: `rename-package-name-to-${replace}`,
  terms: [
    {
      search: "poll-daddy",
      replace
    }
  ]
});
