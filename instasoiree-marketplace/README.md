# Instasoirée marketplace 🖼️

The go-to place for beautiful photographs. Hosted on the [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System).

## Folder structure

The main contents of the application is within the `src` directory. Each of it's subsequent folders represent different layers of abstraction.

#### `modules`

The `modules` directory groups all files related to the same feature. E.g. the `account` directory within `modules` has functions (mainly components and hooks) related to updating the users' account.

#### `common`

The `common` directory houses everything that cannot be considered an feature. Generic components (or elements) like `Button` and `Input` are examples of components stored in this, as well as types, GraphQL queries and various hooks, utility functions and high order components.

#### `pages`

The `pages` directory is the directory Next.js uses to compile static pages during the build.

This folder structure was heavily inspired by [a blog post by Vadorequest on dev.to](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472).

## Testing

No tests have currently been written for the project. However, tests will need to be written.