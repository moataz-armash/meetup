import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    // fetch() is a built-in browser API that allows us to send http requests
    // .json() is a method that converts the response data into a JavaScript object
    fetch(
      "https://react-nextjs-course-a9c2d-default-rtdb.firebaseio.com/meetups.json",
      {
        //body: JSON.stringify() converts a JavaScript object into a JSON string
        method: "POST",
        body: JSON.stringify(meetupData),
        //headers: {} is an object that contains the metadata about the request
        headers: {
          // "Content-Type": "application/json" tells the server that the request contains JSON data
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // history.replace() replaces the current page in the browser history stack with the given page
      // and then redirects the user to the given page and then we can't go back to the previous page
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
