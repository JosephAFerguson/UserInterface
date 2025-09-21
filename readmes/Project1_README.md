# Introduction to Project 1

Public Link to view: https://jf-userinterfaceproj1.netlify.app/#/

Project 1 is an individual project aimed at helping a user record their journey. 
Whether it be health, hobbies, sports, skills, financial, this project is meant to help them track their progress on this journey. 
Students are supposed to pick one of these themes and design an application around this. 
Students are expected to scetch potential interfaces, interview potential users, or just regular people to help with the design process. 
Once they are done with prototyping the interface, they will create a mock user for the application and then start developing it in steps.
Here is my documentation of my work on project 1.

# Design

<details>
 
  *Interviews*

  For this project, I interviewed 2 of my friends, Carson and Blake, who are active in bodybuilding and powerlifting. Going into the interviews I wanted to learn what metrics I should show, and which are the most important or should be the most prominent on the screen. I wanted to know what kinda of visuals/charts I want to show. My last thing I wanted to know was a broader scope of how I should design how users track their own progress.

  These are the questions I asked, and the answeres they gave.
  - Q1 : What metrics would you like to track for powerlifting?
    * Blake : I would like to see the trend in my sets and calculated 1RM (One Rep Max), change in my bodyweight, my calories and protein each day.
    * Carson : I would like to see my volume for the week in each lift, comparisons of my lifting sets this week vs previous weeks. I would also like to see the progress in my SBD (Squat, Bench, Deadlift) throughout the year.

  - Q2 : How would you like to track your progress for these lifts? Day by Day or per lift basis? Maybe using a schedule/program?
    * Blake : I would like to be able to track my progress using my workout splits (this refers to the type of program, Upper-Lower splits, Arnold split, a specific SBD program, etc.) per week. Maybe like logs on weekday lifts, posts/entries.
    * Carson : I would like to log whichever day I want to, and see my workouts on a calendar. Tracking my total by month or as a post would be nice.

  - Q3 : What visuals would be most important for you to track your progress?
    * Blake : I would like to see a table that shows me details for each of my lifts, and also for each muscle group. An overall trend chart for progress on SBD would be nice.
    * Carson : I would like to compare my lifts over time using a line chart. I would also like to take videos for some of my lifts and be able to compare them to previous videos as well.

   These interviews helped me solidify some of my initial thoughts for the design, as well as gave me more things to add for the application itself.
   I created a list of features I needed based on the interview, and highlighted other features I was still unsure of.

   I decided to cut some features requested in the interview out for the initial phase. Mainly, posting videos of lifts, and the tracking by workout split. I was unsure of how to implement comparing videos of lifts, I thought photos for each entry should be suficcient.
   For tracking by workout split, I realized this option would need another type of calendar, or a different view altogether. Some workout splits are asynchronous (they don't follow a weekly repitition), which adds further complexity. I though a monthly calendar would suffice.
   
   # Goals/Features Needed:
    * Dashboard View
      - Trending Total & Bodyweight Numbers
      - Overview chart for SBD numbers over time
    * Calendar View
      - Monthly view of lifts/logs and journal entries.
      - Users can select a day and see the users lift that day and/or journal entry.
      - Users can see bodyweight on that day and/or protein (green or red if it met the users goal), if it was logged.
    * Detail View
      - Table that can be changed by the user selecting a muscle group, by diagram, or a specific lift
      - Table should also be able to be changed by range of date.
      - Table will show and compare the lifts (color compare) according to the filters user configured.
    * Log / Create Entry / Lift
      - User can enter photo, protein, bodyweight, and a title and journal for the day/lift (not every day will include a workout/lift)
      - User can enter lifts they performed, sets, reps, and weight. For each set, they can add a short note to what it was. I.e, superset, dropset, pause, etc.
    * Settings
      - User can rearrange views on navbar, customize the colors of the UI, or select a different theme.
      - ?? additional features

  *Scetching*

  With these interviews and goals in mind, I started schetching prototypes of the design. I used the variation on the 10+10 method, the 10 minutes+10 minutes. I was having trouble formulating a way to include the views I wanted. I came up with 3 different methods for showing the different views.
   1. Navbar on Top.
     <img width="940" height="852" alt="image" src="https://github.com/user-attachments/assets/83fefbaa-0cea-41b5-af7e-5bb287c00746" />
 
   2. No Navbar. I didn't personally like this idea, but it was helpful to scetch out how the views would look.
    <img width="495" height="471" alt="image" src="https://github.com/user-attachments/assets/141faef4-e213-47eb-8afa-e652805a97af" />
 
   3. Navbad on the side. I merged the dashboard and details view, which I did not like when I finished. Besides that this was my favorite.
    <img width="656" height="536" alt="image" src="https://github.com/user-attachments/assets/d3d21e7e-d43c-4bd8-add5-e556f8e0387e" />

  Since, I was not going to actually implement the sketch with no navbar, I decided to sketch the views themselves. 
   * For the Dashboard view, I was liking the idea of singular card/boxes for the trending 3 lifts (these boxes are called something specific for business analytics but I forget). I also liked a time scroll for the main chart, instead of inputting a date range because I thought it was faster and cleaner to look at. From the start, I had three toggles on the main chart for each of the 3 lifts, I decided I could have all 3 be the default on the line chart, and the user can press the buttons to toggle an individual lift or whatnot. 
   
   * For the calendar view, I liked having a regular calendar view with a entry div/view next to it, with the entry details. 
   
   * For the detail view, to show by muscle group or by lift, I thought included a clickable diagram of the human body would be helpful. For a specific lift, just a text entry that autofills with the lift of choice is appropriate. The table will just have also have a time scroll like the dashboard, and it will include sets in the filters over the time selected.
   
   * For the log view, I thought simple would be best for a picture submit, entry, title, bodyweight, protein, and record lift scrollable div/box. For settings, I didn't sketch anything. This part will most likely be left open for future additions. I will probably include a button to change the theme: day, night, ocean (or something like that), etc.
   

  

  *Prototyping & Feedback*
  
  Done with sketching, ideating, I finalized the prototypes.
  
   - Dashboard View: 
   
   <img width="538" height="334" alt="image" src="https://github.com/user-attachments/assets/519f4dd6-7f43-468a-bc71-a50282bc38d9" />
   <img width="1721" height="830" alt="image" src="https://github.com/user-attachments/assets/625e82f2-e170-4d59-ae64-f03e5e3d3a43" />
   
   - Calendar View: 
   
   <img width="508" height="300" alt="image" src="https://github.com/user-attachments/assets/2869bd1e-9ec5-4538-9fbb-b2e6f0f17099" />
   <img width="1715" height="823" alt="image" src="https://github.com/user-attachments/assets/62f30872-6df7-4de2-a94f-ed9e4659ddcc" />

   - Detail View: 
   
   <img width="405" height="259" alt="image" src="https://github.com/user-attachments/assets/aba3e06a-6eb8-41c9-b2a4-1ee7313608c2" />
   <img width="1697" height="822" alt="image" src="https://github.com/user-attachments/assets/ddb4bb3f-ff5f-466e-9503-c8e0b6d893f3" />
   <img width="1714" height="813" alt="image" src="https://github.com/user-attachments/assets/44efc748-413d-4a13-b974-3b55d6e7d674" />
   
   - Log View: 
   
   <img width="414" height="261" alt="image" src="https://github.com/user-attachments/assets/a1f81b76-e20f-4f41-9bc3-a822911dbc16" />

  Here is the finalized navbar / outer layout: 
  <img width="896" height="732" alt="image" src="https://github.com/user-attachments/assets/12aab2a4-01ff-43d1-b2ad-5782f91f009c" />

  I got feedback from the same friends I interviewed. Here is a synthesis of what they said:

   - Carson: Likes the simpleness of the dashboard view, thinks the calendar view could be impproved by changing the layout of the entry view and having the actual calendar smaller. Didn't say anything about the detail view. He saw that I missed a button for adding a lift to the log view and pointed that out (I will be fixing that in implementation). He thought it looked good overall.

   - Blake: Liked the layout of the application itself. Didn't say anything about the dashboard view, pointed out the same problem with the calendar view Carson had. He liked the details view with the diagram of the muscle groups on the body. He liked the log view in particular.

 Based on the feedback, I will need to improve the calendar view in the implementation.
 
 *Mock User*

 My user will be a copy of me. I already journal my workouts, so an application like this would benefit me a lot. For physical characteristics, my bodyweight is 170, and my total is hovering around 950 right now. I get at least 100 grams of protein per day. I tend to stick to SBD lifts and accessories in the 3-5 sets range and 5-9 rep range. The copy of me that uses the application will check the SBD progress each time I test my max in those lifts. I would also check the details view for a comparison on a previous set I did with the one I just performed. Every now and then I would check the calendar view to see where I was a month or year ago. I would of course use the log view to log a day and the workout. This application would help me track my progress and keep me discplined.
</details>

# About the Interface
<details>
Notes: to run the code locally using node.js, vite, svelte, and whatnot, you need to install these libraries:

 - npm install svelte-spa-router
 - npm install chart.js

Interface Overview: 

  My app is a tracking application for people who are dedicated to lifting weights, particularly powerlifting. It's layout consists of a header, that shows the user welcome information such as their name, date, week streak for logging, their current total and bodyweight in lbs. It has a navigation bar for the user to navigate between the views they will use to track and log their progress.

   - Dashboard View:
     
   <img width="1914" height="921" alt="image" src="https://github.com/user-attachments/assets/b6d00adb-2848-4396-af8e-3740e09c4655" />
   
   - Here the user can see their progress over the week for their big 3 lifts: squat, bench, and deadlift all in a line chart. They can select the metric cards to filter the line chart so that they are only seeing the metric they selected. If they unselect the same metric all three lifts will show again on the chart.
   - I had a vertical scrollbar feature the user could use to filter the date range the chart pulls from, however, with the little time, I decided to comment it out and leave it out for now. It is something that can be added in the future.

   - Calendar View:

   <img width="1914" height="921" alt="image" src="https://github.com/user-attachments/assets/7f82cd6b-8fb8-4da1-9704-47af6de1e092" />

   - Here the user can select a date on the calendar in the top left to view what they logged for that day. A dot appears on the days where they logged something. They can also change the month and year to filter the calendar.
   - After selecting a day they logged an entry, that entry will appear. They will be able to see and edit their picture, bodyweight, and protein in the right side. They can also see and edit their workout for that day in the bottom. They can change the weight, reps for a set. They can add or remove a set, or change the specific exercise they performed. However, they can not add or remove an exercise. At the time, I thought users might misuse this power and log stuff they did not do. However, since they can technically log whatever they want, I could add the feature to add and remove the lifts in the future.
   - When the user clicks the save button it will save the updates, and show the user confirmation with a popup.

   - Detail View:

   <img width="1911" height="926" alt="image" src="https://github.com/user-attachments/assets/9045fff9-87d1-4f56-9ed9-6d0bac87afa1" />

   - Here the user can see the sets they performed for a specific exercise, for a specific muscle group, or for all exercises in general.
   - They can filter via muscle group by selecting one on the diagram. If they want to remove this filter they can press escape, or click the same muscle group again. This will filter down the exercises list and the table of sets.
   - They can filter a specific exercise by selecting from the exercise list on the right. This will undo a muscle group filter, and will filter the table as a result.
   - They can view the details of the set, the weight and reps, and if there are no filters for a specific exercise selected, the table will also list the exercise

   - Log View:

   <img width="1914" height="923" alt="image" src="https://github.com/user-attachments/assets/95ae0fe1-c733-48f5-b5d1-fee7184f43d9" />
   <img width="1719" height="820" alt="image" src="https://github.com/user-attachments/assets/dce311f1-f93d-45ed-8a14-9936f107dd0e" />


   - Here the user can log an entry for a specific day. They can add a picture, add journal notes, the title of the workout, the bodyweight and protein intake for the day, and their workout.
   - For the workout, they can add and remove lifts, select weight and reps, and add and remove sets.
   - Once the user clicks the submit button, it will save the entry, and show the user via a popup.

   - Settings View:

   <img width="1910" height="926" alt="image" src="https://github.com/user-attachments/assets/63787b2a-9f0d-45e8-9892-42603bdf2a0d" />
   <img width="1879" height="918" alt="image" src="https://github.com/user-attachments/assets/833dfc5b-c72d-4c8b-b899-b5b8b0e2634b" />
   <img width="1007" height="169" alt="image" src="https://github.com/user-attachments/assets/6a68e372-44f0-49e3-9ba4-9983cda21c5d" />
   <img width="1086" height="621" alt="image" src="https://github.com/user-attachments/assets/6ec9202c-5bf1-43e2-873a-57b4026c00ef" />


   - Here the user can change the theme between dark and light mode.
   - The user can also disable protein tracking, and set a bodyweight goal.
   - If the user is at or below this goal, the header card will reflect this by turning the text green. For example, if their goal bodyweight is 170 and they are 165, they have met the goal.



</details>
