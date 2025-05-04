import React, { useState, useEffect } from 'react';

const callQuoterism = async () => {
    try {
        const response = await fetch('https://api.quotable.io/random', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return null;
    }
};

const CallFuck = async () => {
    const endPoint = "https://foaas.ericweissgerber.com/"
    const namelist = ["Asshole", "Airhead", "Bastard", "Bitch", "Blockhead", "Bootlicker", "Brainlet", "Brute", "Buffoon", "Chucklehead", "Chucklenuts", "Chump", "Clod", "Clown", "Dickhead", "Dick", "Dipshit", "Cocksucker", "Coward", "Creep", "Cretin", "Crook", "Crybaby", "Cunt", "Deadbeat", "Degenerate", "Dimwit", "Ding-Dong", "Dingus", "Dirtbag", "Discord Mod", "Dog", "Doofus", "Douche", "Dunce", "Dweeb", "Edgelord", "Egghead", "Fascist", "Fiend", "Flat-Earther", "Fool", "Fucker", "Fuckface", "Fuckass", "Fuckboy", "Fuckstain", "Fuckwit", "Freak", "Geek", "Goblin", "Goon", "Idiot", "Imbecile", "Incel", "Jackass", "Jerk", "Loser", "Low-life", "Lunkhead", "Maggot", "Motherfucker", "Moron", "Mongrel", "Monster", "Mouth Breather", "Nazi", "Neanderthal", "Neckbeard", "Nitwit", "Numbnuts", "Numbskull", "Old Sport", "Parasite", "Prick", "Pig", "Pinhead", "Pleb", "Poopface", "Punk", "Rascal", "Rat", "Reprobate", "Ruffian", "Runt", "Scaredy-Cat", "Schmuck", "Scoundrel", "Scumbag", "Scumlord", "Shill", "Shithead", "Shit Stain", "Simp", "Simpleton", "Snake", "Snob", "Square", "Stupid", "TERF", "Troglodyte", "Twerp", "Twit", "Vermin", "Weasel", "Weirdo", "Whiner", "Worm", "Yo-Yo"];
    const fromlist = ["Albert Einstein", "Queen Elizabeth II", "Abraham Lincoln", "Genghis Khan", "Julius Caesar", "Martin Luther King Jr.", "Nikola Tesla", "LeBron James", "Mahatma Gandhi", "Isaac Newton", "Socrates", "Benjamin Franklin", "George Washington", "Galileo Galilei", "Leonardo da Vinci", "Michelangelo", "Ludwig van Beethoven", "William Shakespeare", "Winston Churchill", "Nelson Mandela", "Neil deGrasse Tyson", "Thomas Jefferson", "Henry Ford", "Plato", "Johannes Gutenberg", "Alexander the Great", "Wolfgang Amadeus Mozart", "Alexander Graham Bell", "Archimedes", "Martin Luther", "Charles Darwin", "Thomas Edison", "Aristotle", "Marie Curie", "Stephen Hawking", "Bill Gates", "Steve Jobs", "Jeff Bezos", "Hippocrates", "Marco Polo", "Walt Disney", "Tim Misny", "Theodore Roosevelt", "Jesus Christ", "Alan Turing", "Franklin D. Roosevelt", "Mark Zuckerberg", "Joe Biden", "Barack Obama", "Confucius", "Homer", "Napoleon Bonaparte", "Karl Marx", "Vladimir Lenin", "Moses"];
    const name = namelist[Math.floor(Math.random() * namelist.length)];
    const from = fromlist[Math.floor(Math.random() * fromlist.length)];
    const fucklist = ["back/" + name + "/" + from, "bag/" + from, "because/" + from, "blackadder/" + name + "/" + from, "bucket/" + name + "/" + from, "chainsaw/" + name + "/" + from, "deraadt/" + name + "/" + from, "diabetes/" + from, "donut/" + name + "/" + from, "everyone/" + from, "everything/" + from, "family/" + from, "fascinating/" + from, "flying/" + from, "gfy/" + name + "/" + from, "give/" + from, "horse/" + from, "ing/" + name + "/" + from, "keep/" + name + "/" + from, "king/" + name + "/" + from, "life/" + from, "linus/" + name + "/" + from, "look/" + name + "/" + from, "looking/" + from, "madison/" + name + "/" + from, "maybe/" + from, "me/" + from, "mornin/" + from, "no/" + from, "nugget/" + name + "/" + from, "off/" + name + "/" + from, "outside/"+ name + "/" + from, "pink/" + from, "problem/" + name + "/" + from, "ridiculous/" + from, "rtfm/" + from, "shakespeare/" + name + "/" + from, "shutup/" + name + "/" + from, "single/" + from, "thanks/" + from, "thinking/" + name + "/" + from, "too/" + from, "tucker/" + from, "what/" + from, "yoda/" + name + "/" + from, "zayn/" + from, "zero/" +from];
    const url = endPoint + fucklist[Math.floor(Math.random() * fucklist.length)];
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching FOAAS:', error);
        return null;
    }
};

function CallChance() {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState('quote'); // 'quote' or 'foaas'

    useEffect(() => {
        const makeApiCalls = async () => {
            // 25% chance for FOAAS
            const shouldCallFoaas = Math.random() < 0.25;

            if (shouldCallFoaas) {
                const foaasData = await CallFuck();
                if (foaasData) {
                    setMessage(foaasData);
                    setMessageType('foaas');
                }
            } else {
                const quoteData = await callQuoterism();
                if (quoteData) {
                    setMessage(quoteData);
                    setMessageType('quote');
                }
            }
        };

        makeApiCalls();
    }, []);

    return (
        <div className="message-container">
            {message ? (
                <div>
                    {messageType === 'quote' ? (
                        <>
                            <p className="quote-text">"{message.content}"</p>
                            <p className="quote-author">- {message.author}</p>
                        </>
                    ) : (
                        <>
                            <p className="quote-text">{message.message}</p>
                            <p className="quote-author">{message.subtitle}</p>
                        </>
                    )}
                </div>
            ) : (
                <p>Loading message...</p>
            )}
        </div>
    );
}

export default CallChance;

