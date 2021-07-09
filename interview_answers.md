# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A functional component usually doesn't manage state but receives data through props and renders the data to the UI, a stateful component or class component implement logic and manage state. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

A componentWillMount method is called after the component gets mounted on the DOM, a componentWillUpdate method is called once the component has received new 
props and is about to update.

3. Define stateful logic.

Stateful logic is the application logic that is directly related to the manipulation of data

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, Act, and Assert. Arrange and render the component to be tested, Act buy creating userEvents to mimic actions on the webpage, arrange the expectations of those actions to check the functionality of them. 
