// Simple Papa's Pizzeria clone
const allIngredients = ['cheese', 'pepperoni', 'mushroom', 'olives', 'chicken', 'pineapple', 'ham'];

const orders = [
    {
        id: 1,
        customer: 'Sophie',
        face: 'npc faces/Nerdy lady.jpeg',
        requests: [
            {ingredients: ['cheese', 'mushroom'], dialogue: "Hi! I'd love a pizza with mushrooms, please. I read mushrooms are healthy!"},
            {ingredients: ['cheese'], dialogue: "Could I get a plain cheese pizza? I have to watch my calories."},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Let's try something classic: cheese and pepperoni!"},
            {ingredients: allIngredients, dialogue: "Can I get all the toppings? I want to try everything!"},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, please! I love cheese."},
            {ingredients: ['cheese', 'olives'], dialogue: "Cheese and olives, please! I love Mediterranean flavors."},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple on pizza is the best! Can I have cheese and pineapple?"},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, please!"},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, please! Protein boost."},
            {ingredients: ['cheese', 'mushroom', 'olives'], dialogue: "Mushroom and olives with cheese, please!"},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, that's my favorite combo!"}
        ],
        annoyed: [
            "Oh, that's not what I ordered! Maybe double-check next time?",
            "Hmm, that's not right. Please try again!",
            "Nope, that's not what I wanted!",
            "That's not all the toppings!",
            "That's not cheesy enough!",
            "Where are my olives?",
            "Where's the pineapple?",
            "No chicken?",
            "Missing mushrooms or olives!",
            "Not enough pepperoni or olives!"
        ],
        minPay: 0.50,
        maxPay: 4.00
    },
    {
        id: 2,
        customer: 'Vinny',
        face: 'npc faces/Man who looks like he drinks alot.jpeg',
        requests: [
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Hey, gimme a pepperoni pizza, extra cheese!"},
            {ingredients: ['cheese', 'mushroom'], dialogue: "Surprise me with mushrooms and cheese."},
            {ingredients: ['cheese'], dialogue: "Just cheese, keep it simple."},
            {ingredients: allIngredients, dialogue: "Load it up with everything!"},
            {ingredients: ['cheese', 'pepperoni', 'pepperoni'], dialogue: "Double pepperoni, don't hold back!"},
            {ingredients: ['cheese', 'olives'], dialogue: "Olives and cheese, that's a good snack."},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, mate!"},
            {ingredients: ['cheese', 'chicken', 'pepperoni'], dialogue: "Chicken and pepperoni, that's a combo!"},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple on pizza? I'll try it!"},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, classic pub food."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, please!"}
        ],
        annoyed: [
            "Buddy, that's not what I asked for!",
            "C'mon, you can do better!",
            "No way, that's not it!",
            "Where's all the toppings?",
            "Not enough pepperoni!",
            "No olives?",
            "Missing chicken or pepperoni!",
            "No pineapple?",
            "Where's the ham?",
            "Not enough pepperoni or olives!"
        ],
        minPay: 0.50,
        maxPay: 2.0
    },
    {
        id: 3,
        customer: 'Lilith',
        face: 'npc faces/goth.jpeg',
        requests: [
            {ingredients: ['cheese'], dialogue: "Can I get a pizza with just cheese? Simplicity is beautiful."},
            {ingredients: ['cheese', 'mushroom'], dialogue: "Mushrooms and cheese, please. Dark and earthy."},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Pepperoni and cheese. Make it look dramatic."},
            {ingredients: allIngredients, dialogue: "All toppings, but make it look mysterious."},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, for a gloomy day."},
            {ingredients: ['cheese', 'olives'], dialogue: "Olives and cheese, for a midnight snack."},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple and cheese, for a forbidden treat."},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, but make it dark."},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, for a protein fix."},
            {ingredients: ['cheese', 'mushroom', 'olives'], dialogue: "Mushroom and olives, earthy and deep."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, a moody combo."}
        ],
        annoyed: [
            "Ugh, that's not what I wanted...",
            "No, that's not it.",
            "Try again, please.",
            "Not mysterious enough!",
            "Not enough cheese for my mood.",
            "No olives?",
            "No pineapple?",
            "No chicken?",
            "Missing mushrooms or olives!",
            "Not enough pepperoni or olives!"
        ],
        minPay: 1.0,
        maxPay: 3.0
    },
    {
        id: 4,
        customer: 'Mr. Sterling',
        face: 'npc faces/middle aged posh ish man.jpeg',
        requests: [
            {ingredients: ['cheese', 'mushroom'], dialogue: "Good day! I require a pizza with mushrooms and cheese, nothing more."},
            {ingredients: ['cheese'], dialogue: "A simple cheese pizza, if you please."},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Cheese and pepperoni, but make it refined."},
            {ingredients: allIngredients, dialogue: "A pizza with all the toppings, presented elegantly."},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, the finer things in life."},
            {ingredients: ['cheese', 'olives'], dialogue: "Olives and cheese, a sophisticated pairing."},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, but only the best ingredients."},
            {ingredients: ['cheese', 'chicken', 'mushroom'], dialogue: "Chicken, mushroom, and cheese, please."},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple and cheese, for a tropical touch."},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, a classic."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, but make it posh."}
        ],
        annoyed: [
            "This is unacceptable. Please try again.",
            "Not quite what I had in mind.",
            "Disappointing, do try again.",
            "Not elegant enough!",
            "Not enough cheese for my tastes.",
            "No olives?",
            "No pineapple?",
            "Missing chicken or mushroom!",
            "Where's the ham?",
            "Not enough pepperoni or olives!"
        ],
        minPay: 5.0,
        maxPay: 20.0
    },
    {
        id: 5,
        customer: 'Gramps',
        face: 'npc faces/old man.jpeg',
        requests: [
            {ingredients: ['cheese'], dialogue: "Back in my day, we only had cheese on pizza. I'll have that!"},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Let's try that newfangled pepperoni with cheese."},
            {ingredients: ['cheese', 'mushroom'], dialogue: "Cheese and mushrooms, please. Reminds me of the old country."},
            {ingredients: allIngredients, dialogue: "All the toppings? Why not!"},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, just like grandma used to make."},
            {ingredients: ['cheese', 'olives'], dialogue: "Olives and cheese, never had that before!"},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, that's a new one!"},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, hearty meal."},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple on pizza? I'll give it a go."},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, can't go wrong."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, let's try it!"}
        ],
        annoyed: [
            "No, no, no! That's not right!",
            "Not like we used to make it!",
            "Try again, youngster!",
            "That's too fancy!",
            "Needs more cheese!",
            "No olives?",
            "No pineapple?",
            "No chicken?",
            "Where's the ham?",
            "Not enough pepperoni or olives!"
        ],
        minPay: 1.0,
        maxPay: 3.0
    },
    {
        id: 6,
        customer: 'Maddie',
        face: 'npc faces/bratty child.jpeg',
        requests: [
            {ingredients: ['cheese', 'pepperoni'], dialogue: "I want a pizza with lots of pepperoni! And cheese!"},
            {ingredients: ['cheese'], dialogue: "Just cheese, but make it gooey!"},
            {ingredients: ['cheese', 'mushroom'], dialogue: "Mushrooms are yucky, but I'll try them with cheese."},
            {ingredients: allIngredients, dialogue: "All the toppings! I'm brave!"},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese! I want it super cheesy!"},
            {ingredients: ['cheese', 'olives'], dialogue: "Olives and cheese, I'll try it!"},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple for me!"},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, yum!"},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple and cheese, sweet!"},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, please!"},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, that's fun!"}
        ],
        annoyed: [
            "Ew! That's not what I wanted!",
            "Yuck! Its the wrong colour!!!",
            "Nope, do it again!",
            "That's not all the toppings!",
            "Not cheesy enough!",
            "No olives?",
            "That's not even Pizza!!",
            "No chicken?",
            "No pineapple?",
            "Where's the ham?",
            "Not enough pepperoni or olives!"
        ],
        minPay: 0.0,
        maxPay: 1.0
    },
    {
        id: 7,
        customer: 'Gemma',
        face: 'npc faces/a chav woman.jpeg',
        requests: [
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Oi, gimme a pepperoni pizza, extra cheese!"},
            {ingredients: ['cheese', 'olives'], dialogue: "Can I get cheese and olives?"},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, yeah?"},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple and cheese, why not!"},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, please."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, innit."},
            {ingredients: ['cheese', 'mushroom'], dialogue: "Mushroom and cheese, go on then."},
            {ingredients: allIngredients, dialogue: "Put everything on it, make it mad!"},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, I love cheese!"},
            {ingredients: ['cheese'], dialogue: "Just cheese, keep it simple."}
        ],
        annoyed: [
            "Nah, that's not what I wanted!",
            "Try again, mate!",
            "Oi, you got it wrong!",
            "Where's all the toppings?",
            "Not cheesy enough!",
            "No olives?",
            "No ham?",
            "No pineapple?",
            "No chicken?",
            "Not enough pepperoni or olives!"
        ],
        minPay: 0.50,
        maxPay: 2.50
    },
    {
        id: 8,
        customer: 'Tony',
        face: 'npc faces/A fat man who eats a lot of pizza.jpeg',
        requests: [
            {ingredients: allIngredients, dialogue: "Give me the works, everything you got!"},
            {ingredients: ['cheese', 'pepperoni', 'ham', 'chicken'], dialogue: "Meat feast! Cheese, pepperoni, ham, chicken."},
            {ingredients: ['cheese', 'cheese', 'pepperoni'], dialogue: "Double cheese and pepperoni, please."},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, that's a treat."},
            {ingredients: ['cheese', 'olives', 'mushroom'], dialogue: "Veggie pizza, cheese, olives, mushroom."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, lots of both!"},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, can't go wrong."},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Pepperoni and cheese, classic."},
            {ingredients: ['cheese', 'cheese'], dialogue: "Just double cheese, please!"},
            {ingredients: ['cheese'], dialogue: "Just cheese, if you must."}
        ],
        annoyed: [
            "That's not enough toppings!",
            "Not meaty enough!",
            "Needs more cheese and pepperoni!",
            "No ham or pineapple?",
            "Not enough veggies!",
            "Not enough pepperoni or olives!",
            "No chicken?",
            "Not enough pepperoni!",
            "Not cheesy enough!",
            "Just cheese? That's it?"
        ],
        minPay: 2.0,
        maxPay: 5.0
    },
    {
        id: 9,
        customer: 'Percy',
        face: 'npc faces/A posh fat man.jpeg',
        requests: [
            {ingredients: allIngredients, dialogue: "I require a pizza with every topping, my good person."},
            {ingredients: ['cheese', 'ham', 'pineapple'], dialogue: "Cheese, ham, and pineapple, if you please."},
            {ingredients: ['cheese', 'olives', 'mushroom'], dialogue: "Cheese, olives, and mushroom, a refined choice."},
            {ingredients: ['cheese', 'pepperoni', 'ham'], dialogue: "Cheese, pepperoni, and ham, splendid."},
            {ingredients: ['cheese', 'chicken', 'mushroom'], dialogue: "Chicken, mushroom, and cheese, delightful."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, a noble pairing."},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, the finest!"},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Pepperoni and cheese, a classic."},
            {ingredients: ['cheese'], dialogue: "Just cheese, for a simple pleasure."},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, a timeless combination."}
        ],
        annoyed: [
            "This is not what I requested!",
            "Not enough ham or pineapple!",
            "Missing olives or mushroom!",
            "Where's the ham?",
            "No chicken or mushroom?",
            "Not enough pepperoni or olives!",
            "Not enough cheese!",
            "Not enough pepperoni!",
            "Just cheese? How plain!",
            "Not enough ham!"
        ],
        minPay: 2.0,
        maxPay: 5.0
    },
    {
        id: 10,
        customer: 'Jayden',
        face: 'npc faces/a road man.jpeg',
        requests: [
            {ingredients: allIngredients, dialogue: "Bruv, put everything on it!"},
            {ingredients: ['cheese', 'pepperoni'], dialogue: "Pepperoni and cheese, safe."},
            {ingredients: ['cheese', 'ham'], dialogue: "Ham and cheese, that's calm."},
            {ingredients: ['cheese', 'chicken'], dialogue: "Chicken and cheese, that's peak."},
            {ingredients: ['cheese', 'olives'], dialogue: "Olives and cheese, that's different."},
            {ingredients: ['cheese', 'pineapple'], dialogue: "Pineapple and cheese, why not."},
            {ingredients: ['cheese', 'mushroom'], dialogue: "Mushroom and cheese, go on."},
            {ingredients: ['cheese', 'pepperoni', 'olives'], dialogue: "Pepperoni and olives, that's a vibe."},
            {ingredients: ['cheese', 'cheese'], dialogue: "Double cheese, bruv!"},
            {ingredients: ['cheese'], dialogue: "Just cheese, keep it simple."}
        ],
        annoyed: [
            "Nah, that's not it!",
            "Not enough pepperoni!",
            "Where's the ham?",
            "No chicken?",
            "No olives?",
            "No pineapple?",
            "No mushroom?",
            "Not enough pepperoni or olives!",
            "Not cheesy enough!",
            "Just cheese? That's boring!"
        ],
        minPay: 0.50,
        maxPay: 2.0
    }
];

const ingredientList = [
    { name: 'cheese', label: 'Cheese' },
    { name: 'pepperoni', label: 'Pepperoni' },
    { name: 'mushroom', label: 'Mushroom' },
    { name: 'olives', label: 'Olives' },
    { name: 'chicken', label: 'Chicken' },
    { name: 'pineapple', label: 'Pineapple' },
    { name: 'ham', label: 'Ham' },
    // Add more ingredients here if you want
];

let currentOrderIndex = 0;
let currentPizza = [];
let isBaked = false;
let money = 0;
let completedOrders = 0;
let failedOrders = 0;
let day = 1;
let clockHour = 5;
let clockMinute = 0;
let clockInterval = null;
let clockRunning = false;

// Instead of a fixed order list, create an infinite random queue
function getRandomOrder() {
    // Pick a random character
    const base = orders[Math.floor(Math.random() * orders.length)];
    // Pick a random request for that character
    const idx = Math.floor(Math.random() * base.requests.length);
    return { ...base, requestIdx: idx };
}
let currentOrder = getRandomOrder();

function renderOrders() {
    renderNPC();
}

function renderNPC() {
    const npcArea = document.getElementById('npc-area');
    npcArea.innerHTML = '';
    if (currentOrder) {
        const npc = currentOrder;
        const img = document.createElement('img');
        img.src = npc.face;
        img.alt = npc.customer;
        img.style.width = '80px';
        img.style.height = '80px';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        npcArea.appendChild(img);
        const name = document.createElement('div');
        name.textContent = npc.customer;
        name.style.fontWeight = 'bold';
        npcArea.appendChild(name);
        const dialogue = document.createElement('div');
        dialogue.textContent = npc.requests[npc.requestIdx].dialogue;
        dialogue.id = 'npc-dialogue';
        npcArea.appendChild(dialogue);
    }
}

function addIngredient(ingredient) {
    if (isBaked) {
        showResult('Pizza is already baked! Serve or start a new order.');
        return;
    }
    currentPizza.push(ingredient);
    updatePizzaCanvas();
}

function bakePizza() {
    if (!currentPizza.includes('cheese')) {
        showResult('You must add cheese before baking!');
        return;
    }
    isBaked = true;
    updatePizzaCanvas();
    showResult('Pizza baked! Now serve it.');
}

function updatePizzaCanvas() {
    const canvas = document.getElementById('pizza-canvas');
    canvas.innerHTML = '';
    // Draw cheese as yellow
    const count = {};
    currentPizza.forEach(ing => { count[ing] = (count[ing] || 0) + 1; });
    if (count['cheese']) {
        for (let i = 0; i < count['cheese']; i++) {
            const cheese = document.createElement('div');
            cheese.style.position = 'absolute';
            cheese.style.left = (20 + i*3) + 'px';
            cheese.style.top = (20 + i*3) + 'px';
            cheese.style.width = '160px';
            cheese.style.height = '160px';
            cheese.style.background = 'rgba(255, 230, 80, 0.5)';
            cheese.style.borderRadius = '50%';
            canvas.appendChild(cheese);
        }
    }
    if (count['pepperoni']) {
        for (let i = 0; i < count['pepperoni'] * 7; i++) {
            const pep = document.createElement('div');
            pep.style.position = 'absolute';
            pep.style.left = (40 + Math.random() * 120) + 'px';
            pep.style.top = (40 + Math.random() * 120) + 'px';
            pep.style.width = '22px';
            pep.style.height = '22px';
            pep.style.background = '#b22222';
            pep.style.borderRadius = '50%';
            pep.style.border = '2px solid #a52a2a';
            canvas.appendChild(pep);
        }
    }
    if (count['mushroom']) {
        for (let i = 0; i < count['mushroom'] * 5; i++) {
            const mush = document.createElement('div');
            mush.style.position = 'absolute';
            mush.style.left = (50 + Math.random() * 100) + 'px';
            mush.style.top = (50 + Math.random() * 100) + 'px';
            mush.style.width = '18px';
            mush.style.height = '12px';
            mush.style.background = '#e0c090';
            mush.style.borderRadius = '10px 10px 10px 10px/12px 12px 8px 8px';
            mush.style.border = '1px solid #bfa76f';
            canvas.appendChild(mush);
        }
    }
    if (count['olives']) {
        for (let i = 0; i < count['olives'] * 8; i++) {
            const olive = document.createElement('div');
            olive.style.position = 'absolute';
            olive.style.left = (45 + Math.random() * 110) + 'px';
            olive.style.top = (45 + Math.random() * 110) + 'px';
            olive.style.width = '10px';
            olive.style.height = '10px';
            olive.style.background = '#222';
            olive.style.borderRadius = '50%';
            olive.style.border = '2px solid #444';
            canvas.appendChild(olive);
        }
    }
    if (count['chicken']) {
        for (let i = 0; i < count['chicken'] * 6; i++) {
            const chick = document.createElement('div');
            chick.style.position = 'absolute';
            chick.style.left = (55 + Math.random() * 90) + 'px';
            chick.style.top = (55 + Math.random() * 90) + 'px';
            chick.style.width = '16px';
            chick.style.height = '10px';
            chick.style.background = '#ffe4b2';
            chick.style.borderRadius = '6px';
            chick.style.border = '1px solid #c2a178';
            canvas.appendChild(chick);
        }
    }
    if (count['pineapple']) {
        for (let i = 0; i < count['pineapple'] * 6; i++) {
            const pine = document.createElement('div');
            pine.style.position = 'absolute';
            pine.style.left = (60 + Math.random() * 80) + 'px';
            pine.style.top = (60 + Math.random() * 80) + 'px';
            pine.style.width = '14px';
            pine.style.height = '10px';
            pine.style.background = '#ffe96a';
            pine.style.borderRadius = '4px';
            pine.style.border = '1px solid #e2c84a';
            canvas.appendChild(pine);
        }
    }
    if (count['ham']) {
        for (let i = 0; i < count['ham'] * 6; i++) {
            const ham = document.createElement('div');
            ham.style.position = 'absolute';
            ham.style.left = (65 + Math.random() * 70) + 'px';
            ham.style.top = (65 + Math.random() * 70) + 'px';
            ham.style.width = '14px';
            ham.style.height = '10px';
            ham.style.background = '#ffb6b6';
            ham.style.borderRadius = '6px';
            ham.style.border = '1px solid #e28c8c';
            canvas.appendChild(ham);
        }
    }
    // Overlay for baked
    if (isBaked) {
        const baked = document.createElement('div');
        baked.style.position = 'absolute';
        baked.style.left = '0';
        baked.style.top = '0';
        baked.style.width = '200px';
        baked.style.height = '200px';
        baked.style.background = 'rgba(210, 140, 60, 0.15)';
        baked.style.borderRadius = '50%';
        canvas.appendChild(baked);
    }
}

function servePizza() {
    const npc = currentOrder;
    let correct = arraysEqual(npc.requests[npc.requestIdx].ingredients, currentPizza);
    let raw = !isBaked;
    if (correct && !raw) {
        const pay = (Math.random() * (npc.maxPay - npc.minPay) + npc.minPay).toFixed(2);
        showResult(`Order complete! Great job! £${pay} earned.`);
        money += parseFloat(pay);
        completedOrders++;
        updateMoney();
        updateOrderStats();
        stopClock();
        setTimeout(() => {
            nextOrder();
            startClock();
        }, 1200);
    } else if (raw) {
        showResult('This pizza is raw! Please bake it next time!');
        setNPCAnnoyed('raw');
        failedOrders++;
        money = Math.max(0, money - 5);
        updateMoney();
        updateOrderStats();
        stopClock();
        // 10% chance to lose the game
        if (Math.random() < 0.1) {
            showLoseScreen();
            return;
        }
        setTimeout(() => {
            nextOrder();
            startClock();
        }, 1800);
    } else {
        showResult('That’s not what they asked for! Check the order and try again.');
        setNPCAnnoyed();
        failedOrders++;
        money = Math.max(0, money - 5);
        updateMoney();
        updateOrderStats();
        stopClock();
        // 10% chance to lose the game
        if (Math.random() < 0.1) {
            showLoseScreen();
            return;
        }
        setTimeout(() => {
            nextOrder();
            startClock();
        }, 1800);
    }
}

function showLoseScreen(reason) {
    document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#fff8e1;">
            <h1 style="color:#b22222;">You've Been Fired!</h1>
            <p style="font-size:1.3em;">${reason || 'You made too many mistakes and lost your job at the pizzeria.'}</p>
            <p style="font-size:1.1em;">Final Money: £${money.toFixed(2)}<br>Completed Orders: ${completedOrders}<br>Failed Orders: ${failedOrders}</p>
            <button onclick="window.location.reload()" style="padding:12px 32px;font-size:1.1em;background:#b22222;color:white;border:none;border-radius:8px;cursor:pointer;margin-top:20px;">Restart</button>
        </div>
    `;
}

function setNPCAnnoyed(type) {
    const npc = currentOrder;
    const dialogue = document.getElementById('npc-dialogue');
    if (dialogue) {
        if (type === 'raw') {
            dialogue.textContent = 'This pizza is raw!';
        } else if (npc.annoyed) {
            dialogue.textContent = npc.annoyed[npc.requestIdx] || npc.annoyed[0];
        }
        dialogue.style.color = 'red';
    }
}

function nextOrder() {
    currentPizza = [];
    isBaked = false;
    currentOrder = getRandomOrder();
    renderNPC();
    updatePizzaCanvas();
    document.getElementById('result-area').textContent = '';
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    // Compare arrays as multisets (order doesn't matter, but count does)
    const countA = {};
    const countB = {};
    for (const item of a) countA[item] = (countA[item] || 0) + 1;
    for (const item of b) countB[item] = (countB[item] || 0) + 1;
    for (const key in countA) {
        if (countA[key] !== countB[key]) return false;
    }
    for (const key in countB) {
        if (countA[key] !== countB[key]) return false;
    }
    return true;
}

function showResult(msg) {
    document.getElementById('result-area').textContent = msg;
}

function updateMoney() {
    document.getElementById('money-counter').textContent = `Money: £${money.toFixed(2)}`;
}

function updateOrderStats() {
    let stats = document.getElementById('order-stats');
    if (!stats) {
        stats = document.createElement('div');
        stats.id = 'order-stats';
        stats.style.textAlign = 'center';
        stats.style.fontWeight = 'bold';
        stats.style.marginBottom = '10px';
        document.body.insertBefore(stats, document.getElementById('npc-area'));
    }
    stats.textContent = `Completed Orders: ${completedOrders} | Failed Orders: ${failedOrders}`;
}

function renderIngredients() {
    const ingDiv = document.getElementById('ingredients');
    ingDiv.innerHTML = '';
    ingredientList.forEach(ing => {
        const btn = document.createElement('button');
        btn.textContent = ing.label;
        btn.onclick = () => addIngredient(ing.name);
        ingDiv.appendChild(btn);
    });
}

function renderClock() {
    let clock = document.getElementById('game-clock');
    if (!clock) {
        clock = document.createElement('div');
        clock.id = 'game-clock';
        clock.style.position = 'fixed';
        clock.style.top = '16px';
        clock.style.right = '24px';
        clock.style.background = '#fff8e1';
        clock.style.border = '2px solid #b22222';
        clock.style.borderRadius = '8px';
        clock.style.padding = '8px 18px';
        clock.style.fontWeight = 'bold';
        clock.style.fontSize = '1.2em';
        clock.style.zIndex = '1000';
        document.body.appendChild(clock);
    }
    clock.textContent = `Day ${day} | ${clockHour.toString().padStart(2, '0')}:${clockMinute.toString().padStart(2, '0')}`;
}

function startClock() {
    if (clockRunning) return;
    clockRunning = true;
    clockInterval = setInterval(() => {
        clockMinute += 5;
        if (clockMinute >= 60) {
            clockMinute = 0;
            clockHour++;
        }
        renderClock();
        if (clockHour >= 12) {
            endDay();
        }
    }, 1200); // 1.2 seconds per 5 minutes
}

function stopClock() {
    clockRunning = false;
    if (clockInterval) clearInterval(clockInterval);
}

function endDay() {
    stopClock();
    setTimeout(() => {
        showDaySummary();
    }, 100);
}

function showDaySummary() {
    document.body.innerHTML += `
        <div id="day-summary-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(255,248,225,0.98);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <h1 style="color:#b22222;">Day ${day} Complete!</h1>
            <p style="font-size:1.3em;">Money: £${money.toFixed(2)}</p>
            <p style="font-size:1.1em;">Completed Orders: ${completedOrders}<br>Failed Orders: ${failedOrders}</p>
        </div>
    `;
    // Track orders completed this day
    let dayCompleted = completedOrders - (window.lastDayCompletedOrders || 0);
    window.lastDayCompletedOrders = completedOrders;
    setTimeout(() => {
        const overlay = document.getElementById('day-summary-overlay');
        if (dayCompleted < 4 && Math.random() < 0.5) {
            showLoseScreen('You were too slow and got fired for not making enough pizzas!');
            return;
        }
        if (overlay) overlay.remove();
        day++;
        clockHour = 5;
        clockMinute = 0;
        renderClock();
        document.getElementById('result-area').textContent = '';
        startClock();
    }, 8000);
}

window.onload = function() {
    renderNPC();
    updatePizzaCanvas();
    updateMoney();
    updateOrderStats();
    renderIngredients();
    renderClock();
    startClock();
    // Move bake button below ingredients
    const pizzaArea = document.getElementById('pizza-area');
    let bakeBtn = document.getElementById('bake-btn');
    if (!bakeBtn) {
        bakeBtn = document.createElement('button');
        bakeBtn.id = 'bake-btn';
        bakeBtn.textContent = 'Bake Pizza';
        bakeBtn.onclick = bakePizza;
        bakeBtn.style.display = 'block';
        bakeBtn.style.margin = '16px auto 0 auto';
        pizzaArea.insertBefore(bakeBtn, pizzaArea.querySelector('#result-area'));
    }
}
