# React + Vite

This is a self made OTP component with the following functionalities -

- One digit per input box ----- value.slice(-1)
- Focus goes to next input box if a digit is entered ----- Ref array
- Backspace erases current digit if it exists otherwise focuses on prev input box ----- Ref array
- On page load the 1st input box is automatically focussed on ----- useEffect
- Scalablity has been taken care of . You can increase the count of NUmber you want in your otp and it works smoothly ----- Just change the OTP_DIGITS
- Looks like ShadCN otp box (kind of).

![image](https://github.com/user-attachments/assets/066b5a2c-831f-4be1-8a37-1e3ff7af5c02)
