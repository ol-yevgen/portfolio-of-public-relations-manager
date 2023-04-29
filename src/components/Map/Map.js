import { useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import {mapTheme} from './Theme';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultOptions = {
    disableDefaultUI: true,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleConrtrol: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwhell: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: mapTheme
}

export const Map = () => {

    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = useCallback(function callback() {
        mapRef.current = undefined
    }, [])

    return <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: 50.450366, lng: 30.523671 }}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
        >
            <MarkerF position={{ lat: 50.454297, lng: 30.518596 }} />
        </GoogleMap>
    </>
}

Map.propTypes = {
    center: PropTypes.object,
    position: PropTypes.object,
}

