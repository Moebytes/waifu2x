import waifu2x from "./waifu2x"

const start = async () => {
    const progress = (current: number, total: number) => {
        console.log(`${current}/${total}`)
    }

    try {
        const result = await waifu2x.upscaleImage("./images/1.jpg", "./images/2.jpg", 
        {upscaler: "real-cugan", scale: 4})
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}
start()