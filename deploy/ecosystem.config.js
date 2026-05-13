module.exports = {
  apps: [
    {
      name: 'thekllink-homepage',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      cwd: '/home/ec2-user/deploy/standalone',
      env: {
        NODE_ENV: 'production',
        PORT: 80,
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
        SLACK_CHANNEL_ID: process.env.SLACK_CHANNEL_ID,
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '1G',
      watch: false,
    },
  ],
};
