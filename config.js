require("dotenv/config");

module.exports = {
  token: "NzE5OTY4Mjc1OTI0MTIzNjg5.Xt_ItQ.Mkti6vkBGPr4jhE_PwkgkFIji2I",
  api_key: "AIzaSyDQGuX9dXBM9uKKeL0wzxeDGpwLFUrTNng",
  embedColor: "#8900FF",
  prefix: "!",
};

module.exports.streamConfig = {
  ytdlOptions: {
    filter: "audio",
    highWaterMark: 1 << 15,
    volume: 100,
    requestOptions: {
      maxRedirects: 4
    }
  },
  options: {
    seek: null,
    bitrate: 1024,
    volume: 1,
    type: "converted",
  },
}

module.exports.emojis = {
  garbage: "🗑️ ",
  green_check_mark: ":white_check_mark: ",
  loading: ":arrows_counterclockwise: ",
  loudSound: ":loud_sound: ",
  megaPhone: "📣 ",
  notes: ":notes: ",
  pause: ":pause_button: ",
  previous: ":previous_track: ",
  redx: ":x: ",
  repeat: ":repeat: ",
  repeatSong: ":repeat_one: ",
  resume: ":arrow_forward: ",
  shuffle: ":twisted_rigthwards_arrows: ",
  signal: ":signal_strength: ",
  skip: ":next_track: ",
  speaker: ":speaker: ",
  stop: ":stop_button: ",
  stopWatch: ":stopwatch: ",
  volumeHigh: ":loud_sound: ",
}
