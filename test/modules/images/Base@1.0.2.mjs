export default class Base {
    bash(cmd){
        console.log(`bash:${cmd}`)
    }
}

Base.prototype.name="root"
Base.prototype.versiion="1.0.1"