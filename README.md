# Hacktoberfest-2023

# Contribution Rules📚:

- You are allowed to make pull requests that break the rules. We just merge it ;)
- Do NOT remove other content.
- Add your file to the Projects_By_Contributors file
- Styling/code can be pretty, ugly or stupid, big or small as long as it works.
- Try to keep pull requests small to minimize merge conflicts


## Getting Started 🤩🤗:

- Raise an Issue under hacktoberfest , hacktoberfest-accepted label
- Fork this repo (button on top)
- Clone on your local machine

```terminal
git clone https://github.com/theravi04/HacktoberFest-23.git
```
- Navigate to project directory.
```terminal
cd HacktoberFest-23
```

- Create a new Branch

```markdown
git checkout -b my-new-branch
```

```markdown
git add .
```
- Commit your changes.

```markdown
git commit -m "Relevant message"
```
- Then push 
```markdown
git push origin my-new-branch
```


- Create a new pull request from your forked repository

<br>

## Avoid Conflicts {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.   

```terminal
git remote add upstream https://github.com/theravi04/HacktoberFest-23.git
```

You can verify that the new remote has been added by typing
```terminal
git remote -v
```

To pull any new changes from your parent repo simply run
```terminal
git merge upstream/master
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

For more information on syncing forks [read this article from Github](https://help.github.com/articles/syncing-a-fork/).

# FAQs (Frequently Asked Questions)

- Who all can contribute?
  - Anyone with a github account and who is signed up for
[hacktoberfest](https://hacktoberfest.com/) :)
- Are you getting paid for this?
  - Sadly no. But I think we should. This is 100% unofficial and I do it for fun, fame and glory.
- Who are you and why are you doing this?
  - I am Ravi & I am doing this because I love Open Source and Hacktoberfest. I want to make it easier for people to get started with Hacktoberfest and Open Source.
- How many pull request (PR) must be made?
  - 4
- What is the event for?
  - For the open source community engagement and learn how to contribute to open source.