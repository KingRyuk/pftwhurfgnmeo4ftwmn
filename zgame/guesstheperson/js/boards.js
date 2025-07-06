// Game Boards Configuration
// This file contains all the boards and their characters
// Easy to modify and add new boards

const gameBoards = {
    bungouStrayDogs: {
        name: "Bungou Stray Dogs",
        thumbnail: "assets/bsd.jpg",
        description: "Bungou Stray Dogs",
        characters: [
            { name: "Mori", image: "assets/Mori.jpg", description: "Mafia leader" },
            { name: "Chuuya", image: "assets/Chuuya.jpg", description: "A short person" },
            { name: "Akutagawa", image: "assets/Akutagawa.jpg", description: "a goth with asthma" },
            { name: "Gin", image: "assets/Gin.jpg", description: "A goth without asthma" },
            { name: "Koyo", image: "assets/koyo.jpg", description: "Relative of the more important kyoka" },
            { name: "Higuchi", image: "assets/Higuchi.jpg", description: "She loves akutagawa" },
            { name: "Fukuzawa", image: "assets/fukuzawa.jpg", description: "A old man with grey hair" },
            { name: "Hirotsu", image: "assets/Hirotsu.jpg", description: "a old man who smokes a lot" },
            { name: "Oda", image: "assets/Oda.jpg", description: "an old man who isnt very old" },
            { name: "Q", image: "assets/q.jpg", description: "A child" },
            { name: "Old boss", image: "assets/OldBoss.png", description: "a very old man" },
            { name: "Ango", image: "assets/Ango.jpg", description: "he has glasses" },
            { name: "Sensei", image: "assets/Sensei.png", description: "maybe a cat, maybe not" },
            { name: "Dazai", image: "assets/Dazai.jpg", description: "hates chuuya" },
            { name: "Kyoka", image: "assets/Kyoka.jpg", description: "a vilolent assasin" },
            { name: "Atsushi", image: "assets/atsushi.jpg", description: "He has wonkey hair" },
            { name: "Kunikida", image: "assets/Kunikida.jpg", description: "Hes the ideal person" },
            { name: "Kenji", image: "assets/Kenji.jpg", description: "a happy friendly cow killer" },
            { name: "Rampo", image: "assets/Rampo.jpg", description: "He has cool glasses" },
            { name: "Yosano", image: "assets/Yosano.jpg", description: "A violent doctor" },
            { name: "Fyodor", image: "assets/fyodor.jpg", description: "a Russian" },
            { name: "Nikolai", image: "assets/Nikolai.jpg", description: "a mental clown" },
            { name: "Sigma", image: "assets/Sigma.jpg", description: "His hair looks like icecream" },
            { name: "Francis", image: "assets/Francis.jpg", description: "Hes rich, and selfish" },
            { name: "Lucy", image: "assets/lucy.jpg", description: "She has one of the coolest abilitys in bsd" },
            { name: "Louisa", image: "assets/Louisa.jpg", description: "the guilds stratergist" },
            { name: "Margret", image: "assets/Margret.jpg", description: "she sounds like a british person doing an american accent" },
            { name: "John", image: "assets/John.jpg", description: "he has plant powers." },
            { name: "Howard", image: "assets/Howard.jpg", description: "Weaker than our great god Chuuya. Bow down to the all powerful god of gravity" },
            { name: "Nathanial", image: "assets/Nathaniel.jpg", description: "A priest" },
            { name: "Herman", image: "assets/Herman.jpg", description: "an old man with facial hair" },
            { name: "Poe", image: "assets/Poe.jpg", description: "His hair covers his eyes" },
            { name: "Karl", image: "assets/Karl.jpg", description: "hes a racoon" },
            { name: "Fuguchi", image: "assets/Fuguchi.jpg", description: "an old man with a cool sword" },
            { name: "Tetcho", image: "assets/tetcho.jpg", description: "Hes the best hunting dogs member" },
            { name: "Jono", image: "assets/jono.jpg", description: "He has red bits in his hair" },
            { name: "Tachihara", image: "assets/Tachihara.jpg", description: "a poser who might be a little bit disloyal" },
            { name: "Okura", image: "assets/Okura.jpg", description: "shes annoying" },
            { name: "Kunikidas idea wife", image: "assets/KunikidasIdeaWife.png", description: "Shes ideal" },
            { name: "Bram", image: "assets/bram.jpg", description: "A vampire" }
        ]
    },
    DeaAndParker: {
        name: "Dean and Parker",
        thumbnail: "assets/DeanParkerthumbnail.jpg",
        description: "Parker and Dean debate about Politics on TikTok and Youtube",
        characters: [
            { name: "Parker get a job", image: "assets/parkergetajob.jpg", description: "A heroic anti Trump debater" },
            { name: "Dean Withers", image: "assets/DeanWithers.jpg", description: "A epic anti Trump debater" },
            { name: "Charlie Kirk", image: "assets/CharlieKirk.jpg", description: "He has a creepy smile" },
            { name: "Jordan Peterson", image: "assets/JordanPeterson.jpg", description: "He is annoying" },
            { name: "Donald Trump", image: "assets/DonaldTrump.jpg", description: "hes orange, and stupid" },
            { name: "Joe biden", image: "assets/JoeBiden.jpg", description: "Better than Trump, but not good." },
            { name: "Kamala Harris", image: "assets/KamalaHarris.jpg", description: "Better than Joe biden and Trump" },
            { name: "A random british person who joined the live", image: "assets/Idiot.jpg", description: "he wants to debate Dean" },
            { name: "The person who pretends to have joined the queue by mistake", image: "assets/pfp.jpg", description: "They want to tell Parker they love him" },
            { name: "JD Vance", image: "assets/JDVance.jpeg", description: "I think he is worse than Trump" },
            { name: "Elon Musk", image: "assets/ElonMusk.jpg", description: "Stupid man who pretends hes the next Einstein" },
            { name: "Bernie Sanders", image: "assets/BernieSanders.jpeg", description: "Theres a flag of him on Parkers wall" },
            { name: "Zelenski", image: "assets/Zelenski.jpg", description: "President of Ukraine" },
            { name: "Netanyahu", image: "assets/Netanyahu.jpg", description: "A war criminal (Oh wait its illegal to say that in the uk)" },
            { name: "Putin", image: "assets/Putin.jpeg", description: "A war criminal" },
            { name: "That old lady who sometimes joins and sings", image: "assets/pfp.jpg", description: "Old lady" },
            { name: "Kim Jong un", image: "assets/pfp.jpg", description: "Donald Trumps boy friend" },
            { name: "Rfk", image: "assets/RFK.jpg", description: "I would hate him, but idk what hes saying. he smoked too much." },
            { name: "Vegan Teacher", image: "assets/VeganTeacher.jpg", description: "She is racist, and loves drama" },
            { name: "Troll whoes pretending to support Trump", image: "assets/pfp.jpg", description: "I feel like all trump supporters are trolls, how could anyone support him?" }
        ]
    },
    Class1A: {
        name: "Mha Class 1a",
        thumbnail: "assets/Deku.jpg",
        description: "All of class 1a from My Hero Academia",
        characters: [
            { name: "Deku", image: "assets/Deku.jpg", description: "Brocoli" },
            { name: "Uraraka", image: "assets/Uraraka.jpg", description: "She floats stuff" },
            { name: "Iida", image: "assets/Iida.jpg", description: "He is very fast" },
            { name: "Tsuyu", image: "assets/Tsu.png", description: "She is a frog" },
            { name: "Bakugo", image: "assets/Bakugo.jpg", description: "Angry pomarainian" },
            { name: "Kirishima", image: "assets/Kirishima.jpg", description: "A man among men" },
            { name: "Denki", image: "assets/Denki.jpg", description: "A human form of pikachu" },
            { name: "Mina", image: "assets/Mina.jpg", description: "She creates acid" },
            { name: "Jiro", image: "assets/Jiro.jpg", description: "She never needs headphones to listen to stuff" },
            { name: "Shoto", image: "assets/Shoto.jpg", description: "The best character in class a. he has Ice, and Fire. S tier." },
            { name: "Sero", image: "assets/Sero.jpg", description: "Tape guy" },
            { name: "Tokoyami", image: "assets/Tokoyami.jpg", description: "Revalry in the dark" },
            { name: "Aoyama", image: "assets/Aoyama.png", description: "He is very shiny" },
            { name: "Momo", image: "assets/Momo.jpg", description: "She is rich, and she drinks posh tea" },
            { name: "Sato", image: "assets/Sato.jpg", description: "He eats sugar" },
            { name: "Koda", image: "assets/Koda.jpg", description: "He inslaves animals and forces them to fight" },
            { name: "Shoji", image: "assets/Shoji.jpg", description: "Hes the coolest extra in mha" },
            { name: "Mineta", image: "assets/Mineta.jpg", description: "He is a disgusting little ideot" },
            { name: "Hagakure", image: "assets/pfp.jpg", description: "She is invisible" },
            { name: "Ojiro", image: "assets/Ojiro.png", description: "He was a tail" }
        ]
    }
};

// Function to get all boards for display
function getAllBoards() {
    return Object.keys(gameBoards).map(key => ({
        id: key,
        ...gameBoards[key]
    }));
}

// Function to get a specific board
function getBoard(boardId) {
    return gameBoards[boardId];
}

// Function to get board character count
function getBoardCharacterCount(boardId) {
    return gameBoards[boardId] ? gameBoards[boardId].characters.length : 0;
}
