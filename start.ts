import waifu2x from "./waifu2x"

const start = async () => {
    const progress = (current: number, total: number) => {
        console.log(`${current}/${total}`)
    }
    const result = await waifu2x.pdfDimensions("./images/120941863.pdf")
    console.log(result)
}
start()