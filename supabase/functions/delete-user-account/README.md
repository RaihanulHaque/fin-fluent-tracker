# Account Deletion Supabase Edge Function

This Edge Function handles account deletion requests by sending confirmation emails and processing actual account deletions with proper admin privileges.

## Function Overview

The `delete-user-account` function supports two main actions:

1. **Send Confirmation Email** - Sends a confirmation email to users requesting account deletion
2. **Delete Account** - Permanently deletes user accounts and associated data after token verification

## Prerequisites

Before deploying this function, ensure you have:

- [Supabase CLI](https://supabase.com/docs/guides/cli) installed
- Docker Desktop installed (for local development)
- A Supabase project with admin access
- Node.js and npm installed

## Installation Steps

### 1. Install Supabase CLI

```bash
# Install globally
npm install -g supabase

# Or use with npx
npx supabase --version
```

### 2. Login to Supabase

```bash
npx supabase login
```

This will open your browser for authentication. Complete the login process.

### 3. Link Your Project

```bash
# Navigate to your project directory
cd /f/Web_Codes/hishab/fin-fluent-tracker

# Link to your Supabase project
npx supabase link --project-ref YOUR_PROJECT_ID
```

Replace `YOUR_PROJECT_ID` with your actual Supabase project reference ID (found in your project URL).

### 4. Deploy the Function

```bash
# Deploy the delete-user-account function
npx supabase functions deploy delete-user-account
```

### 5. Set Environment Variables (Optional)

```bash
# Set your site URL for proper redirect links
npx supabase secrets set SITE_URL=https://your-domain.com

# Or for local development
npx supabase secrets set SITE_URL=http://localhost:5173
```

## Database Setup (Optional but Recommended)

Create a table to store deletion requests for better token management:

```sql
-- Run this in your Supabase SQL Editor
CREATE TABLE account_deletion_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE account_deletion_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for the function to access the table
CREATE POLICY "Functions can manage deletion requests" ON account_deletion_requests
FOR ALL USING (auth.role() = 'service_role');
```

## Function Usage

### Send Confirmation Email

```javascript
const { data, error } = await supabase.functions.invoke("delete-user-account", {
  body: {
    email: "user@example.com",
    action: "send_confirmation",
  },
});
```

### Delete Account

```javascript
const { data, error } = await supabase.functions.invoke("delete-user-account", {
  body: {
    email: "user@example.com",
    token: "deletion-token-here",
    action: "delete_account",
  },
});
```

## Testing

### Local Development

```bash
# Start Supabase locally (requires Docker)
npx supabase start

# Serve the function locally
npx supabase functions serve delete-user-account

# Test with curl
curl -X POST 'http://localhost:54321/functions/v1/delete-user-account' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","action":"send_confirmation"}'
```

### Production Testing

```bash
# Test on production
curl -X POST 'https://YOUR_PROJECT_ID.supabase.co/functions/v1/delete-user-account' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","action":"send_confirmation"}'
```

## Configuration

### Environment Variables

The function uses these environment variables:

- `SUPABASE_URL` - Your Supabase project URL (automatically set)
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key for admin operations (automatically set)
- `SITE_URL` - Your application's URL for redirect links (optional, defaults to localhost)

### Custom Data Deletion

To delete user-specific data from your custom tables, uncomment and modify the deletion logic in the function:

```typescript
// Example: Delete user data from custom tables
const { error: profileError } = await supabaseAdmin
  .from("user_profiles")
  .delete()
  .eq("user_id", userToDelete.id);

const { error: transactionsError } = await supabaseAdmin
  .from("transactions")
  .delete()
  .eq("user_id", userToDelete.id);
```

## Troubleshooting

### Common Issues

1. **Function not found**: Ensure the function is properly deployed

   ```bash
   npx supabase functions list
   ```

2. **Permission denied**: Check that your service role key has proper permissions

3. **Email not sending**: Verify your Supabase project has email configured

4. **CORS errors**: The function includes CORS headers, but ensure your frontend domain is allowed

### Logs and Debugging

```bash
# View function logs
npx supabase functions logs delete-user-account

# View logs with follow mode
npx supabase functions logs delete-user-account --follow
```

## Security Considerations

- ✅ Uses admin privileges only for user lookup and deletion
- ✅ Validates email ownership through confirmation emails
- ✅ Implements token-based verification with expiration
- ✅ Includes proper CORS headers
- ✅ Validates all input parameters

## Deployment Checklist

- [ ] Supabase CLI installed and authenticated
- [ ] Project linked to correct Supabase instance
- [ ] Function deployed successfully
- [ ] Environment variables set (if needed)
- [ ] Database table created (if using server-side tokens)
- [ ] Function tested with sample data
- [ ] Custom data deletion logic added (if applicable)
- [ ] CORS configuration verified
- [ ] Error handling tested

## Support

If you encounter issues:

1. Check the [Supabase documentation](https://supabase.com/docs/guides/functions)
2. Review function logs for error details
3. Verify your project permissions and configuration
4. Test with minimal payloads first

## File Structure

```
supabase/
├── functions/
│   └── delete-user-account/
│       ├── index.ts          # Main function code
│       └── README.md         # This documentation
└── config.toml              # Supabase configuration
```
