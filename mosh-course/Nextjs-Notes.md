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

5. Fetching API data :

- AS good practice it need to be done in SSR it prevent security breach,
- Best Internal Optimization to reduce api data fetching latency.

4. Caching

- It is to store data at any place where it is easy and faster to access. File is stored at 3 places (local memory, file system, network server)
- Caching option is built in next js fetch operation it consist of 2 types
  - `{ cache : {"no-store"}  } ` -> it does not store api data, If you don't want any caching (always fetch fresh data) use this, it is used in real time update web app eg stock price web app or sports live score display web app
  - `{ next : { revalidate:10 } } ` -> it cache the data for 10 sec. | If a user requests this page within 10 seconds, the cached data is used.
-

6. Next Js Another Performance optimization technique called static rendering methods

   - Static Rendering : In this if we have pages or component who has static data will compile only during build time
   - Types of Rendering in NextJS

     - Client Side Rendering (CSR)
     - Server Side Rendering (SSR)
       - Static ( O ) -> { cache: { revalidated : 10 } } -> (Rendered only during build time) it define the static page component content will be static and will not change over time so it will rendered on during build time
       - Dynamic ( λ ) -> { cache: {"no-store"} } -> (Rendered as per request time) It define component has dynamic data
