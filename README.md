Alert Button Toolbar


Overview:

This project is a simple React application built using Vite. It displays a toolbar with multiple buttons, where each button shows a different alert message when clicked.
The goal of this project is to practice using props, the children prop, and event handlers in React.

Features
Reusable AlertButton component
Uses props to pass dynamic data
Uses the children prop for button text
Click events trigger browser alerts
Includes normal and edge case testing

How It Works
The AlertButton component takes in:
message → displayed in an alert when clicked
children → shown as the button text
The Toolbar component renders multiple buttons with different messages.

Test Cases

Normal Cases

Play button → shows "Playing music"
Upload button → shows "Uploading file"
Delete button → shows "Item deleted"

Edge Cases

Empty message → alert appears but is blank
No button text → button still works without label
Long message → alert displays full message

Conclusion

This project demonstrates how to build reusable components in React and how to handle user interactions using event handlers. It also shows how the app behaves under both normal and edge cases.
