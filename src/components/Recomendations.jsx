import React, {useEffect, useState} from 'react';
import api from "../music";
import Container from "./Container";
import './styles/Recomendation.css'

const Recomendations = ({artist}) => {
    console.log(artist);

    const [like, setLike] = useState([]);
    const [release, setRelease] = useState([]);
    const [feature, setFeature] = useState([]);


    useEffect(() => {
        api.get(`/artists/${artist}/related-artists`).then(res => {
            /*console.log(res.data);*/
            const cont = res?.data?.artists?.slice(0, 3);
            setLike(cont);
        }).catch((err) => console.error(err));

        api.get(`/browse/featured-playlists`).then(res => {
            /*console.log(res.data);    */
            const cont = res?.data?.playlists?.items?.slice(0, 3);
            setFeature(cont);
        }).catch((err) => console.error(err));

        api.get(`/browse/new-releases`).then(res => {
            /* console.log(res.data); */
            const cont = res?.data?.albums?.items?.slice(0, 3);
            setRelease(cont);
        }).catch((err) => console.error(err));
    }, [artist]);



    return (
        <div className="container-body flex">
            <Container like={like} name="You May Like"/>
            <Container featured={feature} name="For U"/>
            <Container release={release} name="New Songs"/>
        </div>
    );
};

export default Recomendations;