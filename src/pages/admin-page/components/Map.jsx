import React, { useEffect } from "react";

const FullScreenYandexMap = () => {
    useEffect(() => {
        window.ymaps.ready(() => {
            const map = new window.ymaps.Map("yandex-map", {
                center: [41.2995, 69.2401], // Toshkent markazi
                zoom: 13,
            });

            const placemark = new window.ymaps.Placemark(
                [41.2995, 69.2401],
                { balloonContent: "Toshkent markazi!" },
                { preset: "islands#icon", iconColor: "#0095b6" }
            );
            map.geoObjects.add(placemark);
        });
    }, []);

    return (
        <div
            id="yandex-map"
            style={{
                width: "100%",
                height: "100%",
            }}
        ></div>
    );
};

export default FullScreenYandexMap;
