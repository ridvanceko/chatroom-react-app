### Dario ChatApp

Dario is real-time web chat application implemented using Node.js, MySQL, Socket.IO and React. It contains users and channels.

## Status
This application currently holds the following functionality:

Users:
Identified by username
Can assign an email address to itself


## Data Structures
The main data structures that were used in this project were JavaScript Array objects and JavaScript Object objects.

The JavaScript Array was mainly used to store things that required easy iterator behaviour. Some use cases:

List of users
List of channels

## Components
There were three components that were used in this application.

channel
dashboard
login

Channel
The Channel component contains all the user-interface features of a chat channel. It contains a list of users, the current channel name, the chat box and the textfield and button to send messages.

Dashboard
The Dashboard component contains all the available users, their username a log out button.

Login
The Login component allows a user to log in. Any user can type any username and log in. User data will persist after they log out. If a username does not exist in the system, the server will seamlessly create the user in the background.
