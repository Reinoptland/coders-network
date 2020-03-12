# The plan

## Make a react app

- With Redux

  - Seperate reducers
  - Seperate selectors
  - Seperate actions (action creators) & async actions (thunks)

- With Routing

  - Static routes
  - Dynamic routes /posts/:postId

- Signup / Login

  - Create an account with email and password
  - Login
    - We have to ask for a token from then api
    - When we have a token we can send (POST) information to the api

- Posting information (while being logged)

  - Creating a new post / comment etc

## Features

- We can view a list of posts
- We can load more posts from the api (pagination)
- We can view the details of one post ( dynamic routing )
- We can sign up
- We can log in
- When we refresh our page we are not always logged out
- We can create a new post
- We can create a new comment
- Decide on next feature, liking a post etc.

# Plan

- X Setup
- Get posts (with a thunk)
- Get developers (with a thunk DIY)

# Post list page

- X Create a component
- Route to the component
  - X Switch
  - X Route -> PostsList
  - X Navbar
  - X Navlink
- X Navigate to the posts page
- X Gather data (from where?)
  - X Make a request to the api for data
    - X useEffect
  - X Action creator (async, a.k.a. a thunk)
  - X Dispatch action
- X Handle action in the reducer
- X Selector
- X Use Selector
- X Render the data

# Developer list page

- X Create a component
- X Route to the component
  - X Route -> Developer List
  - X Navbar
  - X Navlink
- X Navigate to the developer page
- X Gather data (from where?)
- X Make a request to the api for data
  - X useEffect
- X Action creator (async, a.k.a. a thunk)
- X Dispatch action
- X Handle action in the reducer
- X Selector
- X Use Selector
- X Render the data

# Plan

- Fix a bug where fetch posts everytime we go to that page
- Should only fetch them if we don't have them yet

# Pagination

- UI (button to get more)
- We listen to what the user is doing
- When we click the button we want to fetch again, but with different offset & limit
- offset (where do we start)
- limit (how many do we want)

# Feature: Detail page for posts (so we can read it)

- We need some navigation to get to this detail page
- Fetch a single posts with all of its info (who write it etc)
- Fetch the comments for that post
- Display all of that

# Plan

- X Set up a route
- X new component
- X We need a link
- X we need id of the post the user wants to read (but how? -> store it in the url, useParams)
- X We need the data from that post (fetch the post & its comments)
- X Store data in redux -> dispatch action, handle in reducer, use selector
- X Render

# Feature: Developer details Page

- X Set up Route
- X Make a component
- We need Link(s) to these pages
- We need to know the id of the developer we want to display
- We need to fetch the data for a developer from the api
- Store the dat in redux
  - dispatch
  - handle in reducer
  - use a selector
- Render the data
