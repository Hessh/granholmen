This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Git branching

## Use of the dev-branch

1. Run the command `git checkout master`- Switches to the _master_-branch, if you are not already in it.

2. Run the command `git pull`- Fetches the latest updates on the _master_-branch.

3. Run the command `git checkout -b dev`- Creates a new branch with the name “dev” and switches to this branch.

4. Run the command `git pull origin master`- This brings the latest version of the _master_-branch into your _dev_-branch. Although point 2 also does this, it is good practice to do this as well.

5. Develop in _feature_-branches, and merge all _feature_-branches into this branch

6. Run the command `git pull origin master` - This brings the latest version of the _master_-branch into your _dev_-branch. This is done because we want to deal with potential merge-conflicts locally. - This command MUST be run before you merge your _dev_-branch into the _master_-branch, but it can be run during the dev for a more incremental handling of various tasks.

7. Start a Pull-request on GitHub for your _dev_-branch into the _master_-branch.

## Use of the Feature-branches

1. Run the command `git checkout dev`- Switches to the _dev_-branch, if you are not already in it.

2. Run the command `git pull` - Fetches the latest updates on the _dev_-branch.

3. Run the command `git checkout -b feature/[FEATURE NAME]` - Creates a new branch with the name “feature/[FEATURE NAME]” and switches to this branch.

4. Run the command `git pull origin dev` - This brings the latest version of the _dev_-branch into your _feature_-branch. Although point 2 also does this, it is good practice to do this as well.

5. Perform the dev of the Feature you are working on. Commit often with good Commit Messages.

6. Run the command `git pull origin dev`- This brings the latest version of the _dev_-branch into your _feature_-branch. This is done because we want to deal with potential merge-conflicts locally. - This command MUST be run before you merge your _feature_-branch into the _dev_-branch, but it can be run during the dev for a more incremental handling of various tasks.

7. Start a Pull-request on GitHub for your _feature_-branch into the _dev_-branch.

8. When everything is complete run the command `git branch -d feature/[FEATURE NAME]` - Deletes the _feature_-branch you are done with
