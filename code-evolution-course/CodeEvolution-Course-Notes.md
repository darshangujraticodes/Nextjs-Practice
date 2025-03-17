# Code Evolution Next Js Course Note and Chapter

1. chapter 1 : App Routing (Folder Creation)
2. Chapter 2 : File Types (page.tsx, not-found.tsx, layout.tsx )
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
11. Links and Active Links of Route
    - video Timeline (1:14:52) | For Link Next has inbuild Tags `<Link href="/"> Home <Link>` | `<Link href="/products" replace > Products <Link>` -> replace attribute remove the back history directly it move backw to home page |
    - video Timeline (1:19:49) | To Highlight active links we have to use usePathname() hooks |
    - video Timeline (1:23:59) | params and searchParams is use to filter and sorting data, params and searchParams return value in promise so it is used in async await or it can be handle using use() usehook of react in client side handling "use client"
    - Video Timeline (1:29:53) | Navigating Programatically useRouter() hook | useRouter() require client side rendeeing.
    - `router.push("/")` -> navigate user to given url on certain operation
    - `router.replace("/")` -> navigate user to given url on certain operation but click on back will directly navigate to home page clear back history.
    - `redirect("/")` -> it will redirect to specfic url
