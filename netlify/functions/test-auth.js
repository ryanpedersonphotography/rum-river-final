// Simple test function to verify Netlify Identity authentication
export async function handler(event, context) {
  // Check if user is authenticated via Netlify Identity
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ 
        error: 'Unauthorized',
        message: 'You must be logged in to access this function'
      })
    };
  }

  // Return success with user information
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Authentication successful!',
      user: {
        email: context.clientContext.user.email,
        id: context.clientContext.user.sub,
        roles: context.clientContext.user.app_metadata?.roles || []
      },
      timestamp: new Date().toISOString()
    })
  };
}