# EmailJS Template Setup Guide

## Overview
This guide explains how to configure the EmailJS template to display the sender's email address and message properly when receiving contact form submissions.

## Important: Sender Email in Message Body
**The contact form automatically includes the sender's email address at the beginning of every message.** This ensures you always receive the sender's email, even with minimal template configuration.

When someone submits the contact form, the message will be formatted as:
```
From: sender@example.com

Message:
[their actual message content]
```

## Template Variables
The contact form sends the following variables to EmailJS:

- `{{from_name}}` - The name of the person sending the message
- `{{from_email}}` - **The sender's email address** (available as a separate variable)
- `{{reply_to}}` - Email address to use for replies (same as from_email)
- `{{message}}` - **The message content WITH sender email prepended** (see above)
- `{{to_name}}` - Your name (Aditya Singh Rathore)

## Minimal Template Configuration

Since the sender's email is already included in the message content, you can use a simple template:

### Subject Line
```
New Contact Form Message from {{from_name}}
```

### Email Body (Minimal)
```
Hello {{to_name}},

{{message}}
```

That's it! The `{{message}}` variable already contains the sender's email and the message content formatted properly.

## Advanced Template Format (Optional)

If you want more structure, you can use this format:

### Email Body (Advanced)
```
Hello {{to_name}},

You have received a new message from your portfolio website.

---
SENDER: {{from_name}}
---

{{message}}

---

Reply to this message to respond directly to the sender.
```

## Configuration Steps

1. Log in to your EmailJS dashboard (https://dashboard.emailjs.com/)
2. Navigate to Email Templates
3. Find template ID: `template_4mekvvo`
4. Edit the template - use the minimal configuration shown above
5. Set the Reply-To field to `{{reply_to}}` so you can easily reply to the sender
6. Save and test the template

## Testing

After configuring the template:
1. Submit a test message through your contact form
2. Verify that the received email contains:
   - The sender's email address at the top of the message (e.g., "From: sender@example.com")
   - The complete message content below that
   - Ability to reply directly to the sender

## Notes

- **The sender's email is automatically embedded in the message body** - no additional template configuration needed for this
- The `reply_to` parameter ensures that when you hit "Reply" in your email client, it will automatically address the response to the sender
- The `{{from_email}}` variable is still available separately if you want to use it elsewhere in the template
- The simplest working template only needs `{{message}}` in the body since it contains everything
