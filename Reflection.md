# Reflections

Development Process:

For this project, connecting to an API or returning descriptive error messages based on user interactions affected how this project was approached. This became more of the focus when testing the code based on Bitly API. After working out the code to compare and determine if the max number of link shortenings had been reach, the next focus was on styling to make the app responsive.

Challenges Faced:

Encounter an issue with the error message being displayed on the page. Likely over coded the CSS styling causing conflicts. To work around, had to set the error message styling to !Important
Encountered issues with the menu button and converting the menu to a dropdown. I think this is because of how the HTML is nestled early on. Will have to return to this and restructure and restyle

Improvements:

Personal improvements to understanding how to use pseudo class and styling elements like “:not(...)” to target certain elements and ajdust their styling and positioning
With the bitly.com’s current limit on link shortening set at 5 per month, added a text display to track the limit
Tasked the function to check the API fetch limit, as well as check what/if any URLs have been saved to local storage
After the project is assessed, will try to go back and connect to a different API (e.g.: tinylink, rebrandly, or urlbae)
