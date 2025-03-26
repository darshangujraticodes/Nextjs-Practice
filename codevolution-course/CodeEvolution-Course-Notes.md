# Code Evolution Next Js Course Note and Chapter

## Next JS File Types

1. page.tsx -> Main page where the code display logic content need to be written
2. layout.tsx -> it define the structure on how data will be displayed in website it persist the value in input tag if it is in root layout
3. loading.tsx -> it use to provide loading effect either spinner, skeleton or shimmer effect to before displaying fetch api details
4. template.tsx -> it work same as layout but it does not persist value for new component
5. not-found.tsx -> it help to display custom not found if page is not found in working directory
6. error.tsx ->

## Priority code sequence component Hierarchy

```
<Layout>
    <Template>
        <ErrorBoundary  fallback={ <Error /> } >
            <Suspense fallback={ <Loading /> }>
                <ErrorBoundary  fallback={  <NotFound /> } >
                    <Page />
                </ErrorBoundary  >
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```

## Code Evolution Next Js Video Timeline of Chapter

1. chapter 1 : App Routing (Folder Creation)
2. Chapter 2 : File Types (page.tsx, not-found.tsx, layout.tsx , templates.tsx)
3. Chapter 3 : video Timeline (21:50) Dynamic Routes folder (`[producyId]`)
4. Chapter 4 : video Timeline (27:50) Nested Dynamic Routes folder (`products/[productId]/review/[reviewId]`)
5. Chapter 5 : video Timeline (31:22) Catch All segments folder (`[[...slug]]`) to capture all nested dynamic elements
6. Chapter 6 : video Timeline (37:32) not-found Page
7. Chapter 7 : video Timeline (42:45) File Colocation | Private Folders
8. Chapter 8 : video Timeline (48:45) Route Groups -> folder `(auth)` this curly braces help to denote the nextjs folder is not for route <br>
   - It is used to logically organize our routes and project files without impacting the url structure.
   - It helps to improve the developer experience.
   - eg login and register page inside auth will not require auth in route url login Page : `localhost:3000/login`. It helps in folder organization, code clarity and increased developer clean coding structure.
9. Chapter 9 : Layout.jsx or layout.tsx :
   - Layout page can be define inside ()- circular bracket folder as per different layout structure requirement
   - eg header and footer is not reuired in auth page but required in other inner pages so two root layout page will be created inside `RouteGroups - ()` folder
10. Chapter 10 : MetaData
    - Metadata can be declare in both layout or page if it is declare in both then page metadata content will rule out layout content.
11. Chapter 11 : Links and Active Links of Route
    - video Timeline (1:14:52) | For Link Next has inbuild Tags `<Link href="/"> Home <Link>` | `<Link href="/products" replace > Products <Link>` -> replace attribute remove the back history directly it move backw to home page |
    - video Timeline (1:19:49) | To Highlight active links we have to use usePathname() hooks |
    - video Timeline (1:23:59) | params and searchParams is use to filter and sorting data, params and searchParams return value in promise so it is used in async await or it can be handle using use() usehook of react in client side handling "use client"
    - video Timeline (1:29:53) | Navigating Programatically useRouter() hook | useRouter() require client side rendeeing.
    - `router.push("/")` -> navigate user to given url on certain operation
    - `router.replace("/")` -> navigate user to given url on certain operation but click on back will directly navigate to home page clear back history.
    - `redirect("/")` -> it will redirect to specfic url
12. Chapter 12 : templates.tsx - when every time you want to mount and unmount new component to dom model we use this template in layout it does not unmount directly update data but in template first it unmount old component and add new small component to main dom.
    - Example when we create any form directly in layout.tsx page input tag value is persisted across different page which means it is not unmounting or resetting the old DOM. to solve this issue template.tsx was introduced it reset by unmounting and new mouting of component lead to reset data.
    - To test replace (auth) folder template.tsx page to layout.tsx and test input data and again test with template.tsx value will be removed.
    - Note in project we can have both template and layout file at time but note high priority will be given to layout
13. Chapter 13 : loading.tsx - loading file is used while fetching the data from api it shows loading screen or skeleton screen until it fetch the data from api instead of showing blank screen we display skeleton structure to increase user experience. `Displaying skeleton structure while fetching api data is call shimmer effect.`
14. Chapter 14 : error.tsx (1:49:58) - It is used to display custom error
15. Chapter 15 : Parallel routes - it is useful for building complex interfaces eg creating admin dashboard where we have to display user analytics, notification, and revenue metric all at one place for this it is useful.
16.
