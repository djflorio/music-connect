# music-connect
A social network site for musicians based off of the [MERN Stack Front To Back](https://www.udemy.com/mern-stack-front-to-back/) Udemy course.

## Setup
1. Clone and `cd` into the repo.
2. Run `npm install`.
3. Make folder called /config, and add a file called keys.js.
4. In the keys.js file, export an object containing the key, **mongoURI**, which is a string that points to wherever your MongoDB database lives, along with the username and password of a user with read/write permissions on the db.
   * I.E, if you're using mLab, mongodb://[mongoUser]:[mongoPass]@[mongoUrl]
