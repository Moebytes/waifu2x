import waifu2x from "./waifu2x"

const start = async () => {
    const progress = (current: number, total: number) => {
        console.log(`${current}/${total}`)
    }
    //const result = await waifu2x.upscaleGIF("./images/gifs/chibi.gif", "./images/gifs/chibi2x.gif", {upscaler: "real-cugan", scale: 1})
    const result = await waifu2x.upscaleAPNG("./images/77961192.png", "./images/77961192_2x.png", {upscaler: "real-cugan", scale: 4})
    console.log(result)
}
start()