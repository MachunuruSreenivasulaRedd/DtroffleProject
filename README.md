In this project, let's build an **Dtroffle App** by applying the concepts we have learned till now.

### Refer to the image below:




The app must have the following functionalities

- When the app is opened, Login Route should be displayed if not already logged in
- When the Home Route is opened,
  - Make HTTP GET request to the **ApiUrl**
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the list of items should be displayed
- When a item card in Home Route is clicked,
  - Page should be navigated to the Team Matches Route with the URL `/products/:id
- When the Team Matches Route is opened,
  - Make HTTP GET request to the **ApiUrl** with the team id to get the recent matches data of the team
   