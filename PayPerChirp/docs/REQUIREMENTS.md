# Software Requirements Specification for the Pay Per Cherp System

## Overview

The system, named Pay Per Cherp, is intended to track comments for a client's social media posts comments and interactions. Each approved comment will be paid 0.25 cents. Businesses will register on the system and invite commenters to leave comments on their social media posts. Commenters are paid upon approval of their comments by the business.

## Company Requirements

- Business creates account with role as business.
- Business loads their account with credit (Stripe).
- Business can create posts.
- Business can edit posts (cannot change URL if comments exist).
- Business can delete posts (if no comments exist).
- Business can deactivate posts.
- Business can activate posts.
- Business can see total comments per post.
- Each comment is automatically approved.
- A comment can be disapproved with a reason.
- Business can see list of disapproved comments.
- Disapproved comment will free up credit for that business.
- If credit reaches a threshold, business is notified by email.
- Total posts in dashboard.
- Total comments per post in dashboard.
- Total credits in dashboard.
- Word count per comment per post in dashboard.
- Total shares / total likes per post in dashboard.

## Commenter Requirements

- Commenter creates account with role as commenter.
- Commenter registers a PayPal link for payouts.
- Commenter will have a minimum of 15 words, for example, for each comment.
- Commenter cannot leave comment twice on the same post.
- Commenter cannot copy and paste existing comment.
- Commenter can filter to see only posts they have not commented on.
- Commenter can filter to see only posts they have commented on.
- Commenter can filter to see all posts.
- Commenter only sees posts where business has credit.
- Commenter cannot write comment for posts with no credit.
- Commenter cannot write comment for posts with status inactive.
- Commenter cannot include link in comments.
- Commenter's comment uses up business credit.
- Commenter has checkbox to indicate (shared, liked).
- Commenter to be notified if comment not approved (notification system / email).
- Commenter's profile specifies total followers across socials.
- Commenter receives payment due at the end of each month.
- Total posts in dashboard.
- Total comments per post in dashboard.
- Total credits in dashboard.
- Word count per comment per post in dashboard.
- Total shares / total likes per post in dashboard.

## Admin Requirements

- Ability to create super admin login role.
- Ability to login as super admin role.
- Ability to list all businesses.
- Ability to list all commenters.
- Ability to list all posts for any business.
- Ability to list all comments for any post.
- Ability to list all disapproved comments for business.
- Ability to list all disapproved comments for commenter.
- Ability to list total remaining credits for business.
- Ability to list total spent credits for business.
- Ability to deactivate business.
- Ability to activate business.
- Total businesses registered dashboard.
- Total expenditures dashboard.
- Total posts dashboard.
- Total comments dashboard.
- Total unspent credits dashboard.
- Total disapproved comments dashboard.
