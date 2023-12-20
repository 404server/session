import './styles/Player.css';
import ProgressBar from "./ProgressBar";
import Animation from "./Animation";
import ControlPanel from "./ControlPanel";
import { useEffect, useRef, useState } from "react";

const Player = ({ playing, index, setIndex, total }) => {
    /*console.log(total);*/
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    let src = total[index]?.track.preview_url;

    const audio = useRef(new Audio(total[0]?.track.preview_url));
    const ref = useRef();
    const { duration } = audio.current;
    const percentage = duration ? (progress / duration) * 100 : 0;

    const startTimer = () => {
        clearInterval(ref.current);
        ref.current = setInterval(() => {
            if (audio.current.ended) {
                next();
            } else {
                setProgress(audio.current.currentTime);
            }
        }, 1000);
    };

    useEffect(() => {
        audio.current.pause();
        audio.current = new Audio(src);
        setProgress(audio.current.currentTime);
        if (isPlaying) {
            audio.current.play()
                .then(() => {
                    setIsPlaying(true);
                    startTimer();
                })
                .catch(error => console.error("Error playing audio:", error));
        }
    }, [src, isPlaying]);

    useEffect(() => {
        return () => {
            audio.current.pause();
            clearInterval(ref.current);
        };
    }, []);

    const playAudio = () => {
        if (isPlaying) {
            audio.current.pause();
            setIsPlaying(false);
            clearInterval(ref.current);
        } else {
            audio.current.play()
                .then(() => {
                    setIsPlaying(true);
                    startTimer();
                })
                .catch(error => console.error("Error playing audio:", error));
        }
    };

    const next = () => {
        const nextIndex = index >= total.length - 1 ? 0 : index + 1;
        setIndex(nextIndex);
        setIsPlaying(true);
    };

    const prev = () => {
        const prevIndex = index === 0 ? total.length - 1 : index - 1;
        setIndex(prevIndex);
        setIsPlaying(true);
    };

    const zero = (n) => {
        return n > 9 ? "" + n : "0" + n;
    };

    const artists = [];
    playing?.album?.artists?.forEach((artist) => {
        artists.push(artist.name);
    });

    return (
        <div className="player-container flex">
            <div className="player-left flex">
                <p className="track-title">{playing?.name}</p>
                <p className="artists">{artists.join(", ")}</p>
                <div className="bottom-left flex">
                    <div className="total-duration flex">
                        <p className="duration">0:{zero(Math.round(progress))}</p>
                        <Animation isActive={isPlaying} />
                        <p className="duration">0:30</p>
                    </div>
                    <ControlPanel next={next} prev={prev} play={playAudio} isPlaying={isPlaying} />
                </div>
            </div>
            <div className="player-right">
                <ProgressBar percentage={percentage} isActive={isPlaying} size={300} color="rgba(106, 14, 148, 0.45)"
                             img={playing?.album?.images[0].url} />
            </div>
        </div>
    );
};

export default Player;
