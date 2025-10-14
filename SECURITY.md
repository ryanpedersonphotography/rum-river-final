# Security Configuration

## Environment Variables Setup

### Required Environment Variables

Copy `.env.example` to `.env` and fill in your actual values:

```bash
cp .env.example .env
```

Edit `.env` with your Contentful credentials:
```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here
VITE_CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here
```

### Contentful Configuration

Copy `.contentfulrc.json.example` to `.contentfulrc.json` and fill in your values:

```bash
cp .contentfulrc.json.example .contentfulrc.json
```

Edit `.contentfulrc.json`:
```json
{
  "managementToken": "your_management_token_here",
  "activeSpaceId": "your_space_id_here",
  "activeEnvironmentId": "master"
}
```

## Security Notes

### ⚠️ Important Security Considerations

1. **Never commit tokens to Git**:
   - `.env` and `.contentfulrc.json` are already in `.gitignore`
   - Use environment variables for production deployments

2. **Management Token Exposure**:
   - Currently some admin features use management token in browser
   - For production, consider implementing a backend API proxy
   - Limit management token permissions in Contentful

3. **Admin Authentication**:
   - Current admin uses simple password (`1234`)
   - For production, implement proper authentication (OAuth, JWT, etc.)

### Production Deployment Security

For production deployments:

1. **Netlify Environment Variables**:
   ```bash
   # In Netlify dashboard or CLI
   netlify env:set VITE_CONTENTFUL_SPACE_ID your_space_id
   netlify env:set VITE_CONTENTFUL_ACCESS_TOKEN your_token
   netlify env:set VITE_CONTENTFUL_MANAGEMENT_TOKEN your_mgmt_token
   ```

2. **Remove hardcoded fallbacks**:
   - Update scripts to require environment variables
   - Remove `|| 'fallback_value'` patterns

3. **Consider API proxy**:
   - Move management operations to serverless functions
   - Keep sensitive tokens on server-side only

## Token Permissions

### Delivery API Token (Read-only)
- Used for: Content fetching, public website data
- Permissions: Read access to published content
- Exposure: Safe to expose in client-side code

### Management API Token (Full access)
- Used for: Admin panels, content creation/editing
- Permissions: Full space management
- Exposure: ⚠️ Should not be exposed in client-side code

## Getting Contentful Tokens

1. **Space ID**: Found in Settings > General settings
2. **Delivery API Token**: Settings > API keys > Content delivery API
3. **Management Token**: Settings > API keys > Content management tokens

## Rotating Tokens

If tokens are compromised:

1. Generate new tokens in Contentful dashboard
2. Update environment variables
3. Redeploy application
4. Revoke old tokens