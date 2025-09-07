# Introduction to Project 1

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
   
   - Calendar View: 
   
   <img width="508" height="300" alt="image" src="https://github.com/user-attachments/assets/2869bd1e-9ec5-4538-9fbb-b2e6f0f17099" />
   
   - Detail View: 
   
   <img width="405" height="259" alt="image" src="https://github.com/user-attachments/assets/aba3e06a-6eb8-41c9-b2a4-1ee7313608c2" />
   
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

<details></details>
