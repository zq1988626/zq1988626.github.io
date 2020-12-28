import Base from "Bash@1.0.2.mjs"

export default class Nano extends Base {
    constructor(){
        super();
    }
    NanoFn(){
        console.log("我是Nano特有的方法");
    }
}
Base.prototype.name="nano"
Base.prototype.versiion="2.0.1"