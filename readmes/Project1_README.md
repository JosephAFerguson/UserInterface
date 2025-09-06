# Introduction to Project 1
Project 1 is an individual project aimed at helping a user record their journey. 
Whether it be health, hobbies, sports, skills, financial, this project is meant to help them track their progress on this journey. 
Students are supposed to pick one of these themes and design an application around this. 
Students are expected to scetch potential interfaces, interview potential users, or just regular people to help with the design process. 
Once they are done with prototyping the interface, they will create a mock user for the application and then start developing it in steps.
Here is my documentation of my work on project 1.

# Design
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

  With these interviews and goals in mind, I started schetching prototypes of the design, here they are:
   
  *Prototyping & Feedback*

  *Implementation Start Version*



