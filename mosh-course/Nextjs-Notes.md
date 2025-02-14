# Next Js Notes

### Fundamental

Next Js is framework built on top of React JS,
React Js is library for building interactice UI's

Framework = libs + tools + strict convention

eg Angular is framework which follows certain strict convention for building web app
but React Js is Library which is loosely bound.

It comes with followin features

1. It has own set of library like nextjs router for page navigation
2. Compiler to minify js code
3. CLI to build and start apps
4. Nodejs Runtime env.. on the server
5. It has server side rendering feature to make app fast.
6. It also provides features of SEO Friendly web app

Due to Which it provide feature of Full stack Development

Backend code executed in internal Nodejs run time env.

Frontent code get normally executed in browser

### Command to create next js app

1. `npx creat-next-app@13.4` (u can install specific version which u required ) or `npx create-next-app@latest`
2. type y to install
3. enter your project Name and follow default setting on Your Preference eg typescript and tailwinds css are optional
4. then type `cd project_name` to changes working directory terminal path to project folder
5. type `npm run dev` to run install project folder, u will localhost : id mostly `http://localhost:3000/` on which next app is deployed in local server

### Next Js Project Folder Structure

Key Files

1. app / src -> folder :
   a. components
   b. pages
   c. styles
   d. lib
   e. hooks
   f. context
   g. utils

2. public folder contains all the assets and images using in buildin web app

### nextjs app routing
