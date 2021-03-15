
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
![banner](./assets/rm-banner.jpg)
# Tech Blog - a Model-View-Controller Application
## UA Web Coding Bootcamp - Week 14

## Description  
This project implements a Content Management System (CMS) - style blog where deveopers can publish blog posts and comment on posts made by other developers. The app follows a Model-View-Controller (MVC) paradigm using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.   

### Link to Application
This application is deployed on Heroku. LINK TBD

## Table of Contents  
* [Usage](#Usage) 
* [User_Story](#User_Story)  
* [User_Requirements](#User_Requirements)  
* [Questions](#Questions)    
* [License](#License)

## Usage  
* Run on Heroku

## User_Story 
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## User_Requirements
### GIVEN a CMS-style blog site  
WHEN I visit the site for the first time  
* THEN I am presented with the homepage, which includes  existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in  

WHEN I click on the homepage option   
* THEN I am taken to the homepage  

WHEN I click on any other links in the navigation  
* THEN I am prompted to either sign up or sign in  

WHEN I choose to sign up  
* THEN I am prompted to create a username and password 
 
WHEN I click on the sign-up button 
* THEN my user credentials are saved and I am logged into the site  

WHEN I revisit the site at a later time and choose to sign in  
* THEN I am prompted to enter my username and password 

WHEN I am signed in to the site  
 
* THEN I see navigation links for the homepage, the dashboard, and the option to log out    

WHEN I click on the homepage option in the navigation  
* THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created  

WHEN I click on an existing blog post  
 
* THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment  

WHEN I enter a comment and click on the submit button while signed in  
 
* THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created  

WHEN I click on the dashboard option in the navigation  
 
* THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post  

WHEN I click on the button to add a new blog post  
* THEN I am prompted to enter both a title and contents for my blog post    

WHEN I click on the button to create a new blog post  
* THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post  

WHEN I click on one of my existing posts in the dashboard  
* THEN I am able to delete or update my post and taken back to an updated dashboard  

WHEN I click on the logout option in the navigation  
* THEN I am signed out of the site  

WHEN I am idle on the page for more than a set time  
* THEN I am automatically signed out of the site   


## Questions
For more information, contact  
* [vloebel on GitHub](https://github.com/vloebel)  
* [VickyLoebel@gmail.com](mailto:VickyLoebel@gmail.com)

## License
This software is distrubted without warranty under the MIT license agreement. To view terms and conditions, visit the [MIT License website](https://opensource.org/licenses/MIT).
