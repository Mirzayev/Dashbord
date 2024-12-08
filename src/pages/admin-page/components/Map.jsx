import React, { useEffect, useRef } from "react";

const FullScreenYandexMap = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        // Yandex Maps API yuklanganda ishlaydi
        window.ymaps.ready(() => {
            const map = new window.ymaps.Map(mapContainerRef.current, {
                center: [41.2995, 69.2401], // Toshkent markazi
                zoom: 13,
                controls: ["zoomControl", "fullscreenControl"], // Qo'shimcha boshqaruvlar
            });

            const placemark = new window.ymaps.Placemark(
                [41.2995, 69.2401],
                { balloonContent: "Toshkent markazi!" },
                { preset: "islands#icon", iconColor: "#0095b6" }
            );

            map.geoObjects.add(placemark);
        });

        return () => {
            if (mapContainerRef.current) {
                mapContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            style={{
                position: "fixed", // Ekranda butun joyni egallashi uchun
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh", // Ekraning to'liq balandligini egallash
            }}
        ></div>
    );
};

export default FullScreenYandexMap;
