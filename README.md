# Jorrit Overboom Portfolio Website

This project is a display of what I have learned from "Codecademy 'Full-stack Engineer' career path", with the aim to land a junior position in either a front-end, back-end or full-stack developer position.

## Table of content

- [Pages](#pages)
- [Development Process](#development-process)
- [Node Packages](#node-packages)
- [Security](#security)
- [Tools](#tools)
- [Technical Difficulties](#technical-difficulties)
- [Ideas to Add](#ideas-to-add)
- [Contributors](#contributors)

## Pages
These are all the pages/routes I have on my website:

- **Root**
At the root of the website is a navigation bar, which always covers the top of the screen on every page, allowing you to navigate to other pages.

- **Menu**
When accessing this website on a mobile phone, the navigation bar is transformed to a 'hamburger' icon. Clicking on this icon will navigate to menu page, which functions the same as the navigation bar.

- **Home**
The landing page of my website. Here you are welcomed to my website. It has a photo of myself when I was walking the 2-day Tiger Leaping Gorge hike in China in 2019. From here you can visit other pages.

- **My Skills**
A description page of the full-stack engineer career path I finished on Codecademy with the certificate as proof. The link to this GitHub page is included as well.

- **Demo: To Do List**
In order to have something to work on to display what I have learned, I made use of the idea to develop a to do list. On this page you can create tasks, move them from one list to another (the lists being: to do, in progress and finished) or delete them. These tasks are saved on a database, with each user having their own unique list.
This page is the main component of my project, due to the fact that I had to include a front-end, a state management, API calls, a server, a database, controllers for the database and connecting them all with each other to make it work.

- **Login**
In order to access the To Do List page, a user has to login, so each user has their own unique to do list.

- **Sign up**
If a person does not have a user yet, they can create one on this page. I have included rules for creating a user, such as that every user needs to have a unique username, and passwords need to abide by rules such as having at least one symbol and one number, etc.

- **My Travels**
As traveling has been a major part of my life, I have chosen to include a page about it. In chronological ordered years, since I have started traveling, you can see which countries I have visited each year, how long I have been in each country, what my route was, what means of transport were used, what variety of jobs I worked to finance the journey and a display of some photos of the destinations I have visited.
To make the page more compact and quicker to navigate, I build expandable boxes which can be expanded by clicking on the 'Read More' buttons. 

- **About Me**
A descriptive page about who I am. Using the resume of a friend of mine as a template, I built a similar resume for myself using CSS layouts such as Grid and Flexbox, 

- **Mobile Version**
The entire website has also been build to suit mobile phones. The HTML element and CSS layouts will change positions and sizes when viewing the site on a mobile phone screen.

## Development Process
A description of in what order I built my website:

***The start***\
&nbsp;After initiating the directory in a Model-View-Controller layout, I started out with React-router-dom to build the pathing for all my pages. Upon having this set up I continued with React to build the frontend basics for each page, applying CSS properties simultaneously for the layout, including a mobile-friendly layout. After this setup was completed, I implemented a Redux store and created the slices for the necessary pages using the Redux state.

***Connecting front- and backend***\
&nbsp;I moved on to create the back-end from here. I setup the server and the database. For each functionality which the frontend needs to display something, such as creating a user, logging in a user, creating a task, moving a task, etc. I would create a function on the frontend, make an API request function, implement the routing towards the controller and create a database controlling function for it. Basically following the flow of data from the front-end to the database.

***Getting help***\
&nbsp;With all the basic functionalities built in place I had my website up and running locally. I visited my cousin, who is an experienced back-end developer, to review my code. He only commented on one piece of code on the front-end, suggesting that it should be moved to the back-end.
&nbsp;This code would initially create a new user on the front-end with the input of the website user, before sending it to the back-end. A function would first check whether a user already existed. The password would also get hashed on the front-end.
&nbsp;After his explanation I moved this code to the backend, so it would be safer from having the inputs intercepted/mutated by potential cyber attacks. An additional benefit was that it would need fewer functions, resulting in shorter and cleaner code on both the front-end and back-end.

&nbsp;The next person I approached was my brother, who has many years of experience building websites in a variety of roles. He helped me mostly with the UX design of my website. After some video calls regarding my website and my goals for it, I added the Travel page aswell as making many changes to CSS properties.

***Finishing touches***\
&nbsp;To finish up, I continued to improve the website by applying security measures to the code.
&nbsp;Having achieved the desired results, I shared my GitHub page with two friends, one who is a full-stack engineer with over 20 years of experience and the other being an experienced front-end developer, for them to review my code. The first friend made no remarks regarding the code except for some slight adjustments to CSS properties that I had forgotten to add, such as changing the cursor to a pointer when hovering over certain buttons. As for the other friend, he went thoroughly through my code, placing multiple comments on it. Mostly as suggestions for future projects. I adjusted some pieces of my code based on his comments/suggestions, such as adding a 'page not found' path when entering an URL that does not exist. I also reorganized some code to improve readability.

***Wrapping up***\
&nbsp;With the code for the website finished, I started writing this README to serve as technical documentation for my website.
&nbsp;The last step was deploying the website online using Render.

## Node Packages
While building my website I made use of several node packages:

**Frontend**
- **React:** The frontend framework I used, which I learned from Codecademy. This framework creates a fast responsive website after the initial load.
- **React-router-dom:** To create routing for each page.
- **React-redux:** To hold a state over the entire website, and not just per page; I included Redux. With this node package when changing pages, the states for the To Do List page and the Log In page, will not be lost.
- **@reduxjs/toolkit:** Seeming as Redux can quickly get a bit tricky, requiring the use of many functions from the Redux node package to get the results I am aiming for, this node package provides functions that will make the whole process easier.
- **React-toastify:** In order to give feedback when, for example, failing to log in, getting a message such as that a username already exists when trying to create a username, being successfully logged in or out, etc., this node package provides a more ideal approach for notifications than using alerts and a nicer appeal.
- **Country-flag-icons:** For the Travel page I wanted to include flags for each country I visited, adding a bit more flair. This package has a whole collection of them.
- **Dompurify:** To prevent DOM-based XSS attacks, this package provides functions to sanitize the html values that are being displayed.

**Backend**
- **Express:** The backend framework I used, which I learnt from Codecademy.
- **Express-session:** In order to create a session when a user logs in, this node package provides functions for creating a session by creating a cookie.
- **Passport:** When creating sessions with Express-session, every time I logged in, 7 different sessions were created, leading to the failure to create one constant session. To counter this problem I included the Passport node package, which manages to create one constant session by implementing Express-session.
- **Express-validator:** with the help of Express-validator, I created middleware in the routing to validate the input of tasks, such as the id, name and description, and the username input of the users.
- **Xss:** The Xss node package sanitizes the name and description of a task before they are used as input in the database query. The same applies for the username when creating a user.
- **Cors:** By applying Cors as middleware Cross-Origin Resource Sharing is enabled in the Express framework.
- **Helmet:** To secure HTTP headers in the Express Framework, Helmet is used as middleware. This node package includes a variety of securities to the HTTP headers when applied.
- **Bcrypt:** With the help of Bcrypt the passwords are hashed before they are saved in the database.
- **Uuid:** This node package generates strong and unique id's.
- **Pg:** Because this website makes use of a PostgreSQL database, this node package facilitates communication between the server and the database.

## Security
In the above section I already mentioned node packages which help secure the safety of the website. Additional security measures I have taken are:

- **SQL injection attacks**
By using parameter '$<number>' placeholders in my query, the input does not directly become part of the query itself, protecting it from SQL injection attacks into the database.

- **Hashed password**
Even though I already mentioned the use of Bcrypt in the Node Packages section, a bonus to hashing the passwords is that any malicious code in the password input is undone due to the hashing process.

- **PORT number**
To avoid conflicts with well-known ports and other commonly used ports, I have included a port number between the ranges of 49152 and 65535, as these are unreserved PORT numbers in general.

- **Double checking the username and password input**
When signing up in the front-end and querying the input in the back-end, at both ends the input is being checked whether it abides to rules such as having certain amount of symbols, numbers or only alphabetic letters. The same goes for when logging in. This is to not make unnecessary calls to the server, but also to secure the input is the same on both ends, in case an invader modifies it.

- **.env file**
With this file there is one safe place for the database connection inputs.
During local production I made use of a .env file. Initially I accidentally commited this file to my GitHub, but the values have changed since. I have also included this file in the .gitignore file, so future commits will not include this file anymore. Though when deploying an app on Render, the platform provides its own environmental file, so the .env file became redundant, but the effect is the same.

- **Cookies**
When creating a cookie in a session, the httpOnly and secure properties are set to true, ensuring safe data transfer over HTTPS.

## Tools
To build this website I have made use of several programs and websites:

- **ChatGPT**
Perhaps the biggest help of everything I have achieved with this website is ChatGPT, from helping me to understand errors, giving me a setup for a code when I do not know how to approach it, spotting little syntaxErrors, to polishing the texts I have written. This is an incredible tool.
-Note- This README is not written in chatGPT, I only used it for my website to make my texts on my About Me and Travel pages more appealing, 

- **Render**
Following the tutorials provided by Codecademy, I deployed my website on Render.

- **Git & GitHub**
With Git I could save versions of my code and by pushing it onto GitHub, I could have an online repository for me to show others and for Render to automatically deploy my website.

- **Visual Code Studio**
The entire project has been built in Visual Code Studio.

- **GitHub Co-pilot**
As an extension to Visual Code Studio, this amazing tool helped me work faster by auto completing code.

- **Stack Overflow**
Whenever I could not solve a more complex problem with chatGPT, I would search on Stack Overflow for a solution.

- **Postbird**
When developing my website locally, I made use of Postbird to create and make changes to my databse.


## Technical Difficulties
Some of the issues I encountered during the development of my website, with a description of what the problem was and how I approached it to fix it.

**'/api' paths**\
&nbsp;When creating the server, I wanted to create routes which only start with a '/' path. However once I removed the '/api' part of the path, the api calls did not work anymore. I chose to uphold the '/api' part of the path and just append the other paths to it. View the server.js file to see an example of what I mean.

**Creating sessions**\
&nbsp;Even though already mentioned in the Node Packages section, this was one of the most difficult problems I encountered.
&nbsp;Initially when I tried creating a session with Express-session, not a single session would work. After thorough researching I found out that there were 7 session ID's made everytime I logged in. I assume this is the result of using React. I managed to create a session with Passport though.
&nbsp;With Passport in place I thought the problem was solved, but when I tried to apply the Csurf node package as middleware to provide a CSRF token in every individual server call, it again was making 7 CSRF tokens. Thus I could not match the CSRF tokens between calls, as they would always be different. I gave up on trying to apply this node package.

**Screen jumping**\
&nbsp;On the Travel page there are eleven individual years displayed. Each year has its own box. When clicking on the Read More button, the box expands and displays the story of that year together with my travel photos of that year. When either clicking on the Read More buttons or clicking on the previous or next photo buttons of the first two years, there are no problems: the changes are displayed correctly. However in the years after, whenever clicking on these buttons, the screen jumps half a page upwards. The reason for this problem I am unaware of, I think it is due to CSS properties changing. I fixed this issue by making the screen scroll instantly specifically to the year of the button that is being clicked.

&nbsp;Initially with this I thought the problem was solved, however, even with these new scrolling anchors in place, whenever changing the photos of a year, if the format of the photo that is being rendered is different than the previous one that was displayed, the screen would again scroll halfway upwards the screen. I fixed this by removing all the photos that have different formats. As long as the photos in each individual year array are the same format, the issue will not occur.

&nbsp;This problem also persisted when the description below each photo was displaying odd letters, such was the case with the description 'Hội An'. Whenever the photo came up with that description, the screen would scroll half a page upwards. After changing it to 'Hoi An', the problem was 'fixed'.

&nbsp;Similar to the screen jumping, whenever I would land on the Travel page and the About Me page, the screen would be all the way down below the page. I fixed this by making it instantly scroll in to view to the top of the page upon the first render. Strangely enough when applying this scroll to top function on the Travel page, it also had the same effect on the About Me page, even though I did not include this piece of code in the About Me page. After some testing I still sometimes experienced on the About Me page the screen being all the way down below or in the middle of the page again. This would only happen when the Read More boxes on the Travel page were expanded, and strangely enough only the Read More buttons from the latter years, not the first two. I solved this issue by also including a function forcing the scroll in to view to the top of the page upon first landing on the page.

&nbsp;Even though not ideal, the pages now work as I want the result to be, but I do not understand what is creating this behavior.

## Ideas to Add
Even though I have deployed this website, so I can start applying for a junior position with it, there are still some ideas I have for this website to include, which I think would be great improvements:

- **Tests**
This project does not include any tests. Adding tests would be a valuable addition to monitor the code and check for any issues that may arise from changes or unexpected errors. While the Codecademy course provided some basic knowledge on the importance and setup of tests, I still need to fully understand how to create and implement them. I hope to learn this skill from senior colleagues as I progress in my career.

- **Adding an order to the tasks**
In its current form the tasks that are created in the To Do List are always pushed to the end of the list. Sometimes though the tasks end up at the beginning of the list. The reason for this is unclear. Not only because of this issue, but also because it would be a nice feature, it would be nice to include an option for the tasks to change the position of the tasks in the list.

- **Dragging the tasks**
To build further upon the previous feature, and it being a big learning challenge to me, it would be nice feature of these tasks can be dragged and dropped into any list and at any position within that list, making the whole page more dynamic.

- **Adding an admin page**
In its current form the website does not have an admin page. This would be a great feature to be able to monitor and make changes to the database via the frontend portal.

## Contributors
Towards the end of building this website, I contacted several people in my network to ask for their help. A major thanks to all of the contributors of my portfolio, I am very grateful for their time and suggestions:

- **Richard**
My brother has many years of experience developing websites from a diversity of roles. He put a significant amount of time in helping me with the UX design. We had several video calls to discuss what I should display on my website and how I should position elements. Outside of these calls he would design some layouts for me so I could build them.

- **Matthijs**
My Cousin who is a senior backend developer. He has always supported me on my programming learning journey and was always willing to listen and answer the many questions I had. When I first got my website fully functional, I shared my code for him to review. He only suggested to move one piece of code from the front-end to the back-end.

- **Nassim**
The friend who persuaded me to make use of Codecademy and always cheered me on to keep on going. At the end of my project, he thoroughly went through my code, making comments and suggestions on what to improve for future projects. Some of the suggestions he made were applied in my code.

- **Guus**
With over 20+ years of full-stack development experience, he reviewed my code as well. Only minor CSS changes he suggested.