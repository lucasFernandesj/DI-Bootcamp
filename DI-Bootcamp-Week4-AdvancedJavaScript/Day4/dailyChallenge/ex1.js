class Video{
    constructor(title, uploader,time){
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }
    watch(){
       console.log( `${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }

}

let video1 = new Video('Javascript' , 'Lucas' ,200)
let video2 = new Video('C++', 'Lucas', 300)
video1.watch()
video2.watch()