interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Yellow",
  details: {
    author: "Coldplay",
    year: 2000,
  },
};
const song = "New Song";
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

const dbz: string[] = ["Goku", "Vegeta", "Gohan", "Trunks"];
// const trunks = dbz[4] || "No existe";

// console.error('Personaje 4:', dbz[4] || 'No existe');

const[, , , trunks = 'No existe'] = dbz;

console.log('Personaje 3:', trunks);


