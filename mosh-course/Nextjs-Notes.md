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

### Command to Create next js app

1. `npx creat-next-app@13.4` (u can install specific version which u required ) or `npx create-next-app@latest`
2. type y to install
3. enter your project Name and follow default setting on Your Preference eg typescript and tailwinds css are optional
4. then type `cd project_name` to changes working directory terminal path to project folder
5. type `npm run dev` to run install project folder, u will localhost : id mostly `http://localhost:3000/` on which next app is deployed in local server

### NextJS Fundamentals

1. Next Js Project File Structure:

   1. components
   2. pages
   3. styles
   4. lib
   5. hooks
   6. context
   7. utils

2. public folder contains all the assets and images using in buildin web app

3. Next Js app routing

- In new file based routing inside folder it should only have name : page it will help next js render to identify as inner page and will align it with inner a page. Naming other than page will not identify as inner page.
- Link tag is used for page traversing instead of anchor tag becos just like it re render complete which we want to not apply in next js

4. NextJs Rendering Environment (it has 2 rendering platfomr)

   - Client Side (CSR)
     - Large Bundles increase memory size
     - Resource Intensive required large memory storage to store large complex projects
     - NO SEO
     - Less Secure
   - Server Side (SSR)

     - small bundles
     - Resource Efficient
     - SEO
     - More Secure

     Drawback of using (SSR) we loose user interactivity eg click, change, submit , hover is not avilable in server side

   - Cannot listen browser events
   - Cannit access browser api eg local storage, cookie
   - stata management
   - user Effects

   by default we create in (ssr)

   - in Nextjs all components inside app js are server side rendered component by default. To define component as react in which we want user interactive feature we have to convert it into (CSR) and it is done by marking "use client" at top of the to aware next js compiler and add them in dom as client components.

   - Remember as good practice never apply use client on random direct conversion from ssr to csr always create separate component of CSR mark it as use client on top and embed in ssr pages

### NextJS API Data Fetching

Note : For Security and for easy fetch alway fetch api data in SSR it is more reliable
