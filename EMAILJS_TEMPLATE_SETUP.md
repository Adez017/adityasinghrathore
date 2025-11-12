# EmailJS Template Setup Guide

## Overview
This guide explains how to configure the EmailJS template to display the sender's email address and message properly when receiving contact form submissions.

## Template Variables
The contact form sends the following variables to EmailJS:

- `{{from_name}}` - The name of the person sending the message
- `{{from_email}}` - **The sender's email address** (important for replying)
- `{{reply_to}}` - Email address to use for replies (same as from_email)
- `{{message}}` - The message content from the sender
- `{{to_name}}` - Your name (Aditya Singh Rathore)

## Recommended Email Template Format

To ensure you receive emails with the sender's email address and message clearly displayed, configure your EmailJS template (`template_4mekvvo`) with the following structure:

### Subject Line
```
New Contact Form Message from {{from_name}}
```

### Email Body
```
Hello {{to_name}},

You have received a new message from your portfolio website.

---
SENDER INFORMATION:
Name: {{from_name}}
Email: {{from_email}}
---

MESSAGE:
{{message}}

---

Reply to this message to respond directly to {{from_email}}.
```

## Configuration Steps

1. Log in to your EmailJS dashboard (https://dashboard.emailjs.com/)
2. Navigate to Email Templates
3. Find template ID: `template_4mekvvo`
4. Edit the template to include the variables mentioned above
5. Make sure to use `{{from_email}}` in the body to display the sender's email address
6. Set the Reply-To field to `{{reply_to}}` so you can easily reply to the sender
7. Save and test the template

## Testing

After configuring the template:
1. Submit a test message through your contact form
2. Verify that the received email contains:
   - The sender's email address clearly visible
   - The complete message content
   - Ability to reply directly to the sender

## Notes

- The `reply_to` parameter ensures that when you hit "Reply" in your email client, it will automatically address the response to the sender
- Always include `{{from_email}}` in the email body for reference, even if reply-to is configured
- The template configuration is done on EmailJS side, not in the code
