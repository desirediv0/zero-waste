module.exports = {
    apps: [
        {
            name: "zero-waste",
            cwd: "/root/zero-waste",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 7010
            },
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "800M",
            error_file: "/root/.pm2/logs/zero-waste-error.log",
            out_file: "/root/.pm2/logs/zero-waste-out.log",
            log_date_format: "DD/MM/YYYY HH:mm:ss"
        }
    ]
};
