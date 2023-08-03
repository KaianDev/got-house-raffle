"use client";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RestartButton } from "@/components/RestartButton";
import { SortingLoading } from "@/components/SortingLoading";
import { houses } from "@/data/houses";
import { House } from "@/types/House";
import { useState } from "react";
import { setTimeout } from "timers";

const Page = () => {
    const [change, setChange] = useState(false);
    const [show, setShow] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [inputField, setInputField] = useState("");
    const [playingHouse, setPlayingHouse] = useState<House[]>([]);
    const [playingHouseNum, setPlayingHouseNum] = useState<string[]>([]);

    const handleStartButton = () => {
        const inputValue = Number(inputField);
        if (inputField != "" && inputValue >= 3 && inputValue <= 8) {
            const slicerHouses = [...houses].splice(0, inputValue);
            const numberHouse = Array.from(
                { length: inputValue },
                (_, k) => "Casa " + (k + 1)
            );
            setPlayingHouseNum(numberHouse);
            setPlayingHouse(slicerHouses);
            setChange(true);
        } else {
            if (inputField === "") {
                alert("Informe a quantidade de jogadores para iniciar");
            } else {
                if (inputValue < 3) alert("O valor mínimo é 3!");
            }
            if (inputValue > 8) alert("O valor máximo é 8!");

            setInputField("");
        }
    };

    const handleRestartButton = () => {
        setChange(false);
        setInputField("");
        setShow(false);
    };

    const handleClickRandom = () => {
        if (show) {
            alert("Esconda as casas para sortear");
            return;
        }

        function randOrd() {
            return Math.round(Math.random()) - 0.5;
        }
        const sortedList = [...playingHouse].sort(randOrd);

        setPlayingHouse(sortedList);
        setSorting(true);

        setTimeout(() => {
            setSorting(false);
            setShow(true);
        }, 3000);
    };

    return (
        <div className="bg-zinc-800">
            <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
                {/* Initial Window  */}
                {!change && (
                    <div className="p-3 w-full max-w-2xl">
                        <Header title="Quantos Jogadores?" />
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="number"
                                className="outline-none rounded-md px-4 py-3 bg-zinc-500 text-lg text-white flex-1"
                                placeholder="Min 3 | Máx 8"
                                value={inputField}
                                onChange={(e) => setInputField(e.target.value)}
                            />
                            <Button
                                label="Começar"
                                onClick={handleStartButton}
                            />
                        </div>
                    </div>
                )}

                {/* Cards */}
                {change && (
                    <div className="w-full max-w-5xl">
                        <Header title="Escolha sua Casa" />
                        <div className="flex justify-between items-center md:my-10 gap-2 px-4">
                            <Button
                                label={show ? "Ocultar" : "Exibir"}
                                onClick={() => setShow(!show)}
                            />
                            <Button
                                label="Sortear"
                                onClick={handleClickRandom}
                            />
                        </div>

                        <div
                            className={`grid grid-cols-2 p-4 gap-4 text-gray-200 relative 
                            ${playingHouse.length === 3 && "grid-cols-1"}
                            ${
                                playingHouse.length % 3 === 0 ||
                                playingHouse.length === 5
                                    ? "sm:grid-cols-3"
                                    : "sm:grid-cols-4"
                            }
                            `}
                        >
                            {/* Card House */}
                            {show && (
                                <>
                                    {playingHouse.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-zinc-600 flex justify-center items-center h-14 sm:h-36 rounded-md"
                                        >
                                            <img
                                                src={item.url}
                                                alt=""
                                                className="h-full sm:h-auto"
                                            />
                                        </div>
                                    ))}
                                </>
                            )}

                            {/* Card Number */}
                            {!show && (
                                <>
                                    {playingHouseNum.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-zinc-600 flex justify-center items-center h-14 sm:h-36 rounded-md "
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Sorting Loading */}
                        {sorting && <SortingLoading />}

                        {/* Restart Button */}
                        <RestartButton onClick={handleRestartButton} />
                    </div>
                )}

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default Page;
