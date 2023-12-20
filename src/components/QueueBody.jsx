import React from 'react';
import './styles/Queue.css';

const QueueBody = ({tracks, setIndex}) => {
    return (
        <div className="queue-body flex">
            <div className="queue flex">
                <p className="next-song">Next...</p>
                <div className="list">
                    {
                        tracks?.map((track,index) => (
                            <div className="list-item flex" onClick={() => setIndex(index)} key={index}>
                                <p className="track-name">{track?.track?.name}</p>
                                <p>0:30</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default QueueBody;