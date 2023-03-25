# Web Assignment

## Aim 
The aim of this project was to create a single page application that presents various photos in a gallery format.

## Technologies
* The project is bootstrapped with `vite`.
* The UI is built with `React` and implemented in `TypeScript`.

### Functionality
* Images are fetched from the `Pexels API`.
* The UI supports infinite scrolling.
* Users are presented with additional information about the photo on hovering over it.
* Users have the ability to add or remove specific photos from a `favourites` collection.

### Running the Application
* Ensure the the `Node Package Manager` (`npm`) is installed on your local machine.
* After downloading the contents, `cd` to the `root` directory of the project and run `npm install` to install all the required dependencies.
* From the `root` directory run `npm run dev` to start the local server. By default it will run on port `5713`.

## Limitations
Potential limitations of the app lie in the following:
* Data fetching may be unstable due to using a lower level JavaScript API `fetch()` as opposed to an external library such as `axios` which provides several additinal featurs.
* It is uncertain how the application architecture infulences aspects such as SEO or accesibility.
* As I am more used to libraries such as `Bootstrap CSS` or `Tailwind CSS`, styling is by far the weakest link of this project. 
