## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#Technology">Technology</a>
- <a href="#contributors">Contributors</a>
- <a href="#license">License</a>
- <a href="#questions">Questions</a>


## Description
 This is a social media application called CloseFriends where you can stay in the loop with a small group of close friends instead of being bombarded with updates from people you don’t keep in contact with anymore. Similar to Snapchat private stories or your close friends list on Instagram. 


![Screenshot 2023-04-29 at 8 52 33 PM](https://user-images.githubusercontent.com/106634926/235334860-19c3a4a0-1502-49b2-a5cd-08cbbc55f4de.png)

![Screenshot 2023-04-29 at 8 22 37 PM](https://user-images.githubusercontent.com/106634926/235334625-04d51593-a391-4d79-8da2-bd30ea702d34.png)

## Installation
To create an app similar to this, you will need the MERN stack (MongoDB/Mongoose, Express, React, Node), Apollo Client, and GraphQL (see /client/package.json). Create the React client-side with npx generate-react-app client and using node, install packages with npm i. You will see these packages also include jwt-token for authorization and bootstrap/react-bootstrap/react-icons for styling.

Then, you can set up your Apollo Server in /server/server.js. Connect your MongoDB Compass in the connection.js, which will require you to login to MongoAtlas, create a Cluster, set up a User, set up local browser connection, and using copy&pasting the appropriate links. To deploy to Heroku later, you will need Mongo Atlas connected and your environmental variables setup. 

With that all good to go, configure your models, schemas, seeds on the server-side and the mutations and queries on the client-side. After this, use React to create your front-end/import back-end data. Once finished with your site, deploy it to Heroku and make sure to setup the MONGODB_URI environmental variable.

## Usage
If the Heroku deployment is no longer working...must clone application and run locally. To use, fork the github repo, follow the next section's instructions.

## Technology
VScode
MongoDB
MongodbCompass
ApolloGraphql
React
MongodbAtlas
Heroku

## Contributors
Joshua Muniz
Hans Barraza
Mark Salazar
Izaak Villa
Brandy Posthuma

## License
This project is under MIT license
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Questions
GITHUB: Joshuamun97
GITHUB: hansbarraza
GITHUB: marksalazr
GITHUB: Izaakv
GITHUB: Brandy-Posthuma

Contact Joshua: joshua.mun97@gmail.com
Contact Hans: barraza24@gmail.com
Contact Mark: marksalazar73@gmail.com
Contact Izaak: izaakv42@gmail.com 
Contact Brandy: blposthuma@yahoo.com


