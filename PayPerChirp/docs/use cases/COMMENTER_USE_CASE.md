# Use Case: Commenter Registers and Comments on a Post

## Actor

Commenter User

## Preconditions

- The commenter user has access to a stable internet connection.
- The commenter user has a valid PayPal link for payouts.

## Main Flow

1. The commenter user navigates to the Pay Per Cherp website.
2. The commenter user clicks on "Sign Up" to register for a new account.
3. In the registration form, the commenter is created with default role as "Commenter" and enters the necessary details including their name, email address, password, and PayPal link for payouts, then submits the form.
4. The commenter user is redirected to a verification page and receives an email with a verification link.
5. The commenter user clicks on the verification link in the email.
6. The commenter user is verified and redirected to the login page where they enter their credentials and log in to their new account.
7. After logging in, the commenter user is directed to their dashboard.
8. The commenter user clicks on "View Posts".
9. The system shows the commenter user a list of posts from businesses with available credit.
10. The commenter user selects a post, clicks on it to view it on the social media platform, and leaves a comment on the post.
11. The commenter user then copies their comment, returns to Pay Per Cherp, and pastes the comment in the comment box for the selected post, then clicks "Submit".
12. The commenter user now waits for the comment to be approved by the business.

## Postconditions

- The commenter user has successfully commented on a post.
- The business user can now approve or disapprove the comment.

## Exceptions

- If the commenter user enters incorrect or incomplete information during registration, they are asked to provide the correct details.
- If the commenter user tries to comment on the same post twice, they receive an error message.
