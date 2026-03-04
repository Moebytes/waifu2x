import waifu2x from "./waifu2x"

const start = async () => {
    const progress = (current: number, total: number) => {
        console.log(`${current}/${total}`)
    }

    try {
        const result = await waifu2x.upscaleVideo("./images/141511359.webm", "./images/141511359_2x.webm", 
        {upscaler: "real-cugan", scale: 4}, progress)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}
start()