module.exports = {
  apps: [{
    name: 'keystrike',
    script: 'npm',
    args: 'run dev -- -p 3001',
    cwd: '/home/claw/.openclaw/workspace/keystrike2',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    log_file: '/tmp/keystrike-pm2.log',
    out_file: '/tmp/keystrike-pm2-out.log',
    error_file: '/tmp/keystrike-pm2-error.log',
    time: true
  }]
};