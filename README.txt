# Login and Calculator Web Applications

## Login Application (login.html)

### Overview

The Login Application allows users to input their login credentials, including a username, email, and password. It features real-time form validation with visual feedback to guide the user in entering the correct information.

### Elements and Functionality

- **Username Input**: Users enter their username.
- **Email Input**: Users enter their email, which should be a Northeastern University email address.
- **Password Input**: Users enter their password, which is subject to specific requirements (minimum length and character types).
- **Confirm Password Input**: Users confirm their password.
- **Login Button**: Users submit their information. It is enabled only when all fields meet validation criteria.

### CSS Styling

- The application is styled with basic CSS to provide a clean and user-friendly interface.
- Input fields are highlighted with error messages.
- The Login button changes its style when hovered or disabled.

### JavaScript

- The JavaScript code (in `loginpage.js`) handles real-time form validation for username, email, password, and confirm password.
- The form submission is enabled only when all fields are valid.
- User information can be saved in `localStorage`.
- The application transitions to the Calculator page (`calculator.html`) upon successful login.

## Calculator Application (calculator.html)

### Overview

The Calculator Application is a simple web-based calculator that performs basic arithmetic operations (addition, subtraction, multiplication, and division).

### Elements and Functionality

- **Number Input 1**: Users enter the first number to perform arithmetic operations.
- **Number Input 2**: Users enter the second number.
- **Operation Buttons**: Four buttons allow users to perform addition, subtraction, multiplication, and division.
- **Result Display**: The result of the arithmetic operation is displayed here.

### CSS Styling

- Basic CSS is used for styling, providing a clean and user-friendly interface.
- Buttons change color on hover for a more interactive feel.
- The result text size is increased by 150%.

### JavaScript

- The JavaScript code (in `calc.js`) manages the calculator functionality.
- It validates user inputs and calculates the result based on the selected operation.
- The result is displayed in real-time.

## How to Use

### Login Application

1. Open `login.html` in your web browser.
2. Enter a valid username, a Northeastern University email address, a password, and confirm the password.
3. The Login button will be enabled when any field is filled with a value.
4. After a successful login, you'll be redirected to the Calculator Application.

### Calculator Application

1. Open `calculator.html` after a successful login.
2. Enter valid numbers in Number Input 1 and Number Input 2.
3. Select an operation (Add, Subtract, Multiply, or Divide).
4. The result of the operation will be displayed in real-time.

Enjoy using both the Login and Calculator Applications!

Feel free to customize and expand upon these applications as needed.
