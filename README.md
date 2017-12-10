# Angular Band

## Overview

### What is this project for?

This is my Stream 1 project output. It implements a 20th century rock band website to show how well I know Stream 1 subjects

### What does it do?

Users of this website can experience The Monkees through audio, video abd photos. They can also review upcoming events, request new event bookings and follow The Monkees in available social media.

### How does it work

AngularJS is used to bind the view and control behaviour behind the DOM to data. Page styling uses Bootstrap and Flexbox.

## Features

### Existing Features
- None yet!

### Features Left to Implement
- View photos of band members
- Watch video clips
- Listen to audio clips
- View upcoming events
- Request event bookings for weddings, Christmas parties etc.
- Connect via Facebook, Twitter and Youtube
- Contact them directly via phone, email and Skype
- Experience responsive design with smartphone and tablet use in mind
 
## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
	- We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of our libraries and frameworks
 
## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
  	 `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install

  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
