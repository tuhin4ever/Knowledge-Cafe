import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FaqQuestion.css";
const FaqQuestion = () => {
  return (
    <div>
      <section id="topics">
        <div className="container-md">
          <div className="text-center">
            <h2>FAQ Question</h2>
            <p className="lead text-muted">Let's Code Your Career</p>
          </div>
          <div className=" row my-5 g-5 justify-content-around align-items-center ">
            <div className="col-lg-6 accordion">
              {/* accordion */}
              <Accordion  flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is difference between props and state in react ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Props are passed from component to parent component and
                        can be read into our component. We include read props
                        because they are set once and we cannot change them
                        later.
                      </li>
                      <li>
                        State is data stored in a component. It is set using the
                        state function and the set position can be changed. By
                        using state we can change the dynamic of the component
                        and change the behavior of the component in it's
                        different states.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How does work useState in react ?
                  </Accordion.Header>
                  <Accordion.Body>
                    useState is a built-in hook in React that is used to add
                    state to functional components. It returns two variables
                    which are the current state value and a function to be used
                    to update that state.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What is the use of useEffect other than loading data ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <h6>
                      useEffect has many side hooks that can be used for a wide
                      range of purposes beyond just loading data.
                    </h6>
                    <p>
                      When we use useEffect we can use it for many other
                      purposes beyond loading data.
                    </p>
                    Some examples are:
                    <ul>
                      <li>Updating document titles based on state changes.</li>
                      <li>
                        Adding event listeners to Window or Document objects.
                      </li>
                      <li>Setting timers or intervals.</li>
                      <li>
                        Freeing resources when the component is unmounted.
                      </li>
                      <li>Adding animate elements based on state changes.</li>
                    </ul>
                    <h6>
                      useEffect is a React hook used to create side effects
                      within a functional component. Side effects are actions
                      that change something outside the component's scope, such
                      as modifying the DOM, setting a timer, or sending a
                      network request.
                    </h6>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What Is React and How Does It Actually Work?
                  </Accordion.Header>
                  <Accordion.Body>
                    <h6>We will discuss how React works.</h6>
                    <h6>
                    React is a JavaScript library used to create user
                    interfaces. It is specifically developed based on
                    declarative steps. This means you describe what you want to
                    see on the screen and React takes over the rest.
                    </h6>
                    <h6 className="mt-3">
                      It works by creating a virtual representation of the
                      actual DOM, updating it efficiently, and re-rendering
                      elements as data flows unidirectionally from parent to
                      child. React elements are used to represent the DOM
                      element or elements and JSX is used to create them.
                    </h6>
                    <p>
                      Overall, React provides a simple, efficient and flexible
                      way to create user interfaces with JavaScript.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-6 col-lg-4">
              <img
                src="https://i.ibb.co/y6q7Dkn/Daco-5903330.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqQuestion;
