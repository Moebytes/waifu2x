import waifu2x from "./waifu2x"

let options = {
  noise: 2,
  scale: 2,
  mode: 'noise-scale',
  fpsMultiplier: 1,
  quality: 16,
  speed: 1,
  reverse: false,
  framerate: null,
  jpgWebpQuality: 95,
  pngCompression: 3,
  threads: 4,
  rename: '2x',
  parallelFrames: 2,
  transparentColor: undefined,
  pitch: false,
  sdColorSpace: false,
  upscaler: 'waifu2x',
  pngFrames: false,
  downscaleHeight: 0,
  pythonDownscale: 0,
  ffmpegPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/ffmpeg/ffmpeg.app',
  waifu2xPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/waifu2x/waifu2x',
  esrganPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/waifu2x/real-esrgan',
  cuganPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/waifu2x/real-cugan',
  anime4kPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/waifu2x/anime4k',
  scriptsPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/waifu2x/scripts',
  rifePath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/rife-fps/rife',
  webpPath: '/Users/chris/Documents/Moebytes/Programming/Applications/waifu2x-upscaler/node_modules/waifu2x/webp'
}

const start = async () => {
    const progress = (current: number, total: number) => {
        console.log(`${current}/${total}`)
    }

    try {
        const result = await waifu2x.upscaleImage("./images/1.jpg", "./images/2.jpg", options as any)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}
start()