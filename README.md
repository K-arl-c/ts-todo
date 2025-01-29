# Tech Test/Take Home (4 hours timeboxed - e.g. 10-3 with 1 hour for lunch)
 
## A Todo list created using 
- [x] HTML
- [x] SCSS (BEM!)
- [ ] TS



## Functionality
- [ ] Add new todos 
- [ ] Delete (complete) todos
- [ ] Greeting on the page based on the time of the day (morning, afternoon, evening etc)
- [ ] Welcome message or random fact (or other) generated from an API call

 
 ### HTML
 - [x] header at top of page including welcome message and image (morning sun, afternoon sunset, evening stars)
 - [x] Div containing random fact and button to generate new fact using API call
 - [x] Div to create a new todo
 - [x] Div containing all created todo's
   - [x] include button for deletion / completion
   - [x] include task

### SCSS
- [x] Minimalistic style
- [x] Random fact to have seperate styling (larger?) from greeting
- [x] styling to differentiate created to do from current tasks
- [x] header styled with a block colour going across top of page

### typescript
- [ ] DOM interactivity and query selectors for:
  -  [x] new task button
  - [ ] task deletion
  - [x] new quote generation (with button)
  - [ ] new image gen based on time of day
- [ ] function that takes info input into task creation field and will create a new div containing that information
- [ ] function that will delete and or hide tasks once button has been pressed
- [x] function that checks time of day on page load
- [ ] function that calls api to generate new quote on page load / on button press
