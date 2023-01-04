module.exports = {
    apps: [
        {
            name: "ServidorFeliz1",
            script: "src/app.js",
            env:{
                PORT:8081
            },
            args:"-a 2 b c 1",
            node_args: "--expose-gc"
        },
        {
            name: "ServidorFeliz2",
            script: "src/app.js",
            env:{
                PORT:8082
            },
            args:"-a 2 b c 1"
        },
        {
            name: "ServidorFeliz3",
            script:"src/app.js",
            env:{
                PORT:8083
            },
            exec_mode:"cluster",
            instances:8,
            args:"-a 2 b c 1",
            node_args: "--harmony --expose-gc"
        }
    ]
}