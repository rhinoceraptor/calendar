# Calendar

This is a simple calendar app, implemented in React. The UI is laid out using Flexbox, and is responsive.
The normal desktop view is the calendar side by side with a list of the current selected days' events, and when
the page is narrowed to a phone width, the events details sections wraps under the calendar.
The days with events are denoted using the `::before` CSS psuedo-element, as a small dot under the days' number.

Clicking on a day number will select that as the current day, and the events view will update to show that day's events.
Additionally, clicking a day outside of the current month will change the month view to that month.
There is also a `Today` button to navigate back to the current day, as well as arrow buttons to switch between months.

There currently aren't any meaningful React component tests, but I have some unit tests for the date utility functions since those are the most tricky parts of the app.

The state management is done with the `useState()` React hook.

The events are randomly generated using [Faker](https://fakerjs.dev/) when the page is loaded. It currently generates events two months in the past, and two months into the future.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
