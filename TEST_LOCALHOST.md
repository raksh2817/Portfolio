# Testing Contact Form on Localhost

## Prerequisites

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Create `.env.local` file** in the root directory with your Supabase credentials:
   ```env
   SUPABASE_URL=https://wetzuykavkdbnzuglqxp.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

   To get your anon key:
   - Go to your Supabase project dashboard
   - Navigate to **Settings** → **API**
   - Copy the **anon/public** key

3. **Make sure the database table exists**:
   - Go to Supabase SQL Editor
   - Run the SQL from `supabase-setup.sql`
   - This creates the `contact_submissions` table

## Steps to Test

### 1. Start the Development Server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### 2. Navigate to Contact Form

- Open your browser
- Go to `http://localhost:3000`
- Scroll down to the **Contact** section (or click "Contact" in navigation)

### 3. Fill Out the Form

Fill in all fields:
- **Name**: Your name
- **Email**: Your email address
- **Subject**: Test message
- **Message**: This is a test submission

### 4. Submit the Form

- Click **"Send Message"** button
- You should see a success message: "Message Sent! ✓"
- The form fields should clear

### 5. Verify in Supabase

1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Select `contact_submissions` table
4. You should see your test submission with:
   - Your name, email, subject, message
   - A timestamp (`created_at`)
   - `read` and `replied` fields set to `false`

## Troubleshooting

### Error: "Server configuration error"
- **Cause**: Environment variables not set
- **Fix**: Make sure `.env.local` exists with `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### Error: "Failed to save message"
- **Cause**: Database table doesn't exist or RLS policy issue
- **Fix**: Run the SQL from `supabase-setup.sql` in Supabase SQL Editor

### Error: "relation 'contact_submissions' does not exist"
- **Cause**: Table not created
- **Fix**: Run the SQL from `supabase-setup.sql`

### Form submits but nothing appears in database
- Check Supabase logs in dashboard
- Verify RLS policies are set correctly
- Check browser console for errors
- Check terminal/console for server errors

## Testing Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` file created with Supabase credentials
- [ ] Database table created (`contact_submissions`)
- [ ] Dev server running (`npm run dev`)
- [ ] Form displays correctly
- [ ] Form validation works (try submitting empty form)
- [ ] Form submits successfully
- [ ] Success message appears
- [ ] Data appears in Supabase table

## Expected Behavior

✅ Form validates input (all fields required)  
✅ Email format validation works  
✅ Success message appears after submission  
✅ Form fields clear after successful submission  
✅ Data saved to Supabase `contact_submissions` table  
✅ Submission has unique ID, timestamp, and all fields  

## Next Steps After Testing

Once local testing is successful:
1. Commit your changes
2. Push to GitHub
3. Vercel will automatically deploy
4. Test on production URL
5. Verify submissions appear in Supabase







