# [Netbrary](https://demo-netbrary.herokuapp.com/)
TV show Library on the Net

## description
TV show discovery web app using the [open-source Movie Database] API(https://www.themoviedb.org/documentation/api). built using Express, React, and Node. 

### Practical take home assignment 
* A Potential employer has given me a assignment to create an application using their movies/Tv shows API to create a browsable tv show database, similar to a Netflix or Hulu minus the streaming. The api doesn't provide actual videos. I just needed a popular show page, and the ability to navigate through the selections, search, or select a show to see more information. 

* I must include reasoning behind my technical choices. This may include trade-offs I might have made, anything I left out, and what I might do differently if I had more time to spend on the project.


### Explanation 
* the dependencies I chose speak for themselves. 
* I chose to use the MERN stack (minus the mongo) because it is my favorite combination of framework and libraries to make an application.
* I had Axios installed, but in the server file I used vanilla https requests because I wanted to learn how it worked didn't see a need to replace it. (In a professional setting I would stick to one style) 
* I didn't include a database, because the way I saw it, the API was my database. If this was a real application I probably would Move the data to my own database to have more returns verses the api's limit of 20 per request. 
* Also this app has no authentication, no users. I didn't add it because it wasn't asked for. If provided more time I would have added features like skipping pages, or search as you type. There are a few display issues with the text wrapping when resizing windows. maybe add movies, I really enjoyed this assignment and will continue to add to it.

