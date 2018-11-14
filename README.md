This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React-Admin Tutorial
(react-admin)[https://marmelab.com/react-admin/Tutorial.html]
(material-UI)[https://material-ui.com/]

- **SETUP**: 
    - npm i -g create-react-app
    - create-react-app react-admin
    - cd react-admin
    - npm i react-admin ra-data-json-server prop-types
    - npm i styled-components
    - npm i @material-ui/core @material-ui/icons 

> I didnt import `{ withStyle }` from `@material-ui/core` because I preferred using **styled-components**. I thik the CSS sintax is way better to work with. The only problem I encountered is that come styles(like the icon `width` property) can't be overrode on the *material-ui* ones unless you force it with **!important**. That shouldn't create too many problem since you're only forcing it inside a single reusable and editable(through props) component.
** found another way ** other than !important:(bump up specificity with &&{})[https://material-ui.com/guides/interoperability/#styled-components]
```javascript
export const MyLaunchIcon = styled(LaunchIcon)`
&& {

  width: .5em;
  padding-left: 2px;
  color: red;
}
`;
```

- **installed Roboto** in *index.html*
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

 > take a look also at (react-emotion)[https://emotion.sh/docs/install].

- Inside **react-admin folder**: 
  - > `git init`
  - > `git remote -v` // tells you if your git local repository is linked to any remote one. In this case not yet.
  - > `git status` // all files red unstaged for the commit
  - > `git add -A` // stage files before commit
  - > `git commit -m "first commit"` // commit in local git
On **GitHub**: 
  - create a new Repository;
  - > `git remote add origin https://github.com/francescaSchiro/react-admin-tutorial.git` // link my local repo to remote repo;
  - > `git push -u origin master` // push all my locally committed files to the remote repository on GitHub in the master branch.
  - > `git checkout -b develop` // creates branch develop LOCALLY
  - > `git branch -a` // shows the local and remote branches.( see that develop is just in local and not remote) 
  - > `git push -u origin develop` // pushes this branch also on remote. with all the present files in master at this stage.
{ Situazione stabile:

- Push su develop.
-Spostata su master(git checkout master)
merge di develop su master (git merge devlop)
Push su master di develop (git push)
torno su develop(git checkout develop).

}

  


