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
- X We need Link(s) to these pages
- X We need to know the id of the developer we want to display
- X We need to fetch the data for a developer from the api
- X Store the dat in redux
  - X dispatch
  - X handle in reducer
  - X use a selector
- X Render the data

# Feature: Pagination for developers

- X Only fetch 1 developer (limit 1)
- X When a user clicks "load more", fetch 1 more developer (change the offset when fetching)

# Learning goals

- Understand Authentication & Authorization
- Know what a "token" is
- How to get a "token" from the api
- Learn how to make a POST request
- Know how to use a "token" as means of authorization

# Authentication & Authorization

## Authentication

- Letting the app (backend) know who you are
- Typically you sign up with email & password
- Now that you have an account you can **login** with email & password
- Once you are authenticated by email & password you get a **token**\
- A **jwt**/**token** -> JSON Web Token

## Authorization

- For some actions (like posting / deleting / editing) you have to be **Authorized**
- The backend can identify you by your **token**
- You can now send the **token** with each request (so you don't have to give your password again and again and again)
- That way the backend can figure out wether you are Authorized to do something
- You send the token in an **Authorization header**
- If you don't send the token when posting / editing / deleting, the api will block your request
- The token is only valid for a couple of hours (then you need to log in again)

Q: What is the difference between authenticating and authorizing

Authentication: who am I -> signup & login
Authorization: am I allowed to do this? -> send your token

# Feature: Sign Up

WHAT DO WE NEED?

- Get email, password & name from user
  - X Form
  - X Route & Link to see the form
  - X Event handlers / Listeners
- Send info api
  - X async action
  - X Make a post request to the api
  - X dispatch action
  - X handle action in reducer -> token -> store in the reducer

BONUS:

- X Remove signup from navigation when signed in

  - X In the navigation component, check if we have a token
  - X If we have a token, don't show signup link

- redirect user from signup to posts list if successfull

# Feature: Login

- X Login Page
- X We need Route & Navigation
- X Form
- X Get the userinput, event listeners & handlers
- X Action creator ( a thunk )
- X Post email & password to /login
- X Reponse
- X Dispatch action
- X Handle in reducer

# Feature, get our own profile

- X Getting our own profile means we have to be authorized
- X We have to send out token to get our profile
- X After we signup or login, get our own profile from `/me` endpoint
- X Sent the token in a header to be authorized
- X Display some info to the user that we are logged in (email in Navbar)

# Feature: Staying logged in (save token in localStorage)

- Save token in local storage
- Get token as an initia;
- When the app is loading for first time, use the token from the localstorage
- If we can make a request with the token -> keep it
- If can't make a request with the token -> log our user out (token no longer valid)

# We want to be able to comment on a Post

- X we need to be logged in (have a token)
- X Form to comment in
- Store the comment (where?)
- Send a POST request to the api -> with our comment & token
  - Async action (a thunk)
- We also need to store our comment in Redux (otherwise we will not see it ourselves)
  - Once we get a response dispatch an action, handle in reducer
