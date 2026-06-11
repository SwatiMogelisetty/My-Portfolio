# Contact Form Setup Guide

The contact form uses **Formspree** to send emails directly to your inbox - no backend server needed, no complex setup!

## Setup in 2 Minutes

### Step 1: Create Formspree Account

1. Go to [formspree.io](https://formspree.io/)
2. Click **Sign Up**
3. Create account with email/password
4. Verify your email

### Step 2: Create a New Form

1. After login, click **New Form** (or **Create**)
2. Name it something like `Portfolio Contact`
3. Set recipient email to: `swatimogelisetty@gmail.com`
4. Click **Create Form**

### Step 3: Get Your Form ID

1. Formspree shows you your form endpoint like: `https://formspree.io/f/xyzabc123`
2. Copy the part after `/f/` - that's your **Form ID** (e.g., `xyzabc123`)

### Step 4: Update Environment Variables

Edit `.env.local` in the portfolio folder:

```env
NEXT_PUBLIC_FORMSPREE_ID=xyzabc123
```

Replace `xyzabc123` with your actual Form ID.

### Step 5: Restart Dev Server

```bash
# Stop the server (Ctrl+C)
# Start it again
npm run dev
```

That's it! ✅

## Testing

1. Open http://localhost:3000
2. Scroll to **Contact** section
3. Fill out the form:
   - Name: Your name
   - Email: Your email
   - Message: Test message
4. Click **Send Message**
5. You should see "Message Sent! 🎉"
6. Check your email inbox (may take 1-2 seconds)

## Troubleshooting

### "Failed to send message"

**Solution 1:** Check `.env.local` file
- Make sure `NEXT_PUBLIC_FORMSPREE_ID` exists
- No extra spaces or quotes
- Correct Form ID from Formspree

**Solution 2:** Verify Form ID
- Go to [formspree.io](https://formspree.io/)
- Open your form
- Check the endpoint URL ends with correct ID
- Update `.env.local` if needed

**Solution 3:** Restart dev server
```bash
# Press Ctrl+C in terminal
npm run dev
```

**Solution 4:** Clear browser cache
- Press Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- Clear cache
- Refresh page

### Email not arriving

- Check spam/junk folder
- Check form email address is correct in Formspree
- Go to Formspree dashboard → View submissions
- If submission shows there, email is on the way

### "you_form_id_here" in console errors

Your `.env.local` wasn't updated with actual Form ID. Follow **Step 3** again.

## Features

✅ **Free tier includes:**
- 50 form submissions/month
- SPAM protection
- Email notifications
- Submission history

✅ **What happens:**
1. User fills form and clicks send
2. Data sent to Formspree
3. Email delivered to your inbox
4. User sees success message

## Production Deployment

When deploying to Vercel/Netlify/etc:

1. Go to project settings
2. Add environment variable:
   - `NEXT_PUBLIC_FORMSPREE_ID=your_form_id`
3. Deploy - it will work immediately!

## Upgrade Options

Free tier is perfect for a portfolio! If you need more:

- **Pro Plan:** 1,000 submissions/month
- **Business:** 5,000+ submissions/month

See [formspree.io/pricing](https://formspree.io/pricing)

## Support

- [Formspree Docs](https://formspree.io/help/)
- [Formspree FAQ](https://formspree.io/faq/)

---

**That's it! Your contact form is now fully functional.** 🚀
