# Contact Form Setup Guide

## Where You'll Receive Inquiries

**All contact form inquiries are automatically sent directly to your email**: `rakshithsrinath17@gmail.com`

## Setup Status: ✅ COMPLETE!

The contact form is using **FormSubmit** - a free, no-setup-required service. **No API keys or configuration needed!**

## How It Works

1. **User fills out contact form** on your portfolio
2. **Form submits** to FormSubmit service
3. **Email is automatically sent** to `rakshithsrinath17@gmail.com` with:
   - Sender's name and email
   - Subject line
   - Message content
   - Reply-to set to sender's email (so you can reply directly)

## Features

- ✅ **No setup required** - Works immediately
- ✅ **Free** - 50 submissions per month (free tier)
- ✅ **Spam protection** - Built-in spam filtering
- ✅ **Email notifications** - Instant delivery
- ✅ **Reply-to functionality** - Reply directly from your email

## Testing

1. Fill out the contact form on your website
2. Check your email inbox (`rakshithsrinath17@gmail.com`)
3. You should receive an email with the inquiry within seconds

## FormSubmit Details

- **Service**: [FormSubmit.co](https://formsubmit.co)
- **Free Tier**: 50 submissions/month
- **Paid Tier**: Available if you need more submissions
- **No registration required** for basic use

## Troubleshooting

**Not receiving emails?**
- Check your spam/junk folder
- Verify the email address is correct: `rakshithsrinath17@gmail.com`
- Check FormSubmit status at [formsubmit.co](https://formsubmit.co)
- Free tier has a limit of 50 submissions/month

**Want to change the recipient email?**
- Update the email in `components/Contact.tsx`:
  ```typescript
  const formSubmitUrl = 'https://formsubmit.co/ajax/rakshithsrinath17@gmail.com'
  ```

## Current Status

✅ Contact form is functional  
✅ Validation is working  
✅ Email sending: **ACTIVE** - No setup needed!

**Inquiries are automatically sent to: rakshithsrinath17@gmail.com**

