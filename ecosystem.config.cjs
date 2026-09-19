module.exports = {
  apps: [
    {
      name: 'site-courchevel-rachat-bijoux',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3810',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3810,
      },
      max_memory_restart: '600M',
      autorestart: true,
      watch: false,
    },
  ],
};
