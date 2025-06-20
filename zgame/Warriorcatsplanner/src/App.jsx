import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ClanList from "./components/ClanList.jsx";
import DeadClans from "./components/DeadClans.jsx";
import MoonControlBar from "./components/MoonControlBar.jsx";
import CopyTextButton from "./components/CopyTextButton.jsx";
import { savePlanner, loadPlanner, listPlanners } from "./utils/storage.js";
import { copyText } from "./utils/clipboard.js";
import "./styles.css";

// IndexedDB helpers
function openImageDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("WarriorCatsImages", 1);
    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images");
      }
    };
    request.onsuccess = function (event) {
      resolve(event.target.result);
    };
    request.onerror = function (event) {
      reject(event);
    };
  });
}
async function saveImageToDB(key, dataUrl) {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(["images"], "readwrite");
    const store = tx.objectStore("images");
    store.put(dataUrl, key);
    tx.oncomplete = resolve;
    tx.onerror = reject;
  });
}
async function getImageFromDB(key) {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(["images"], "readonly");
    const store = tx.objectStore("images");
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = reject;
  });
}
async function getAllImagesFromDB() {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(["images"], "readonly");
    const store = tx.objectStore("images");
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = reject;
  });
}
async function getAllImageEntriesFromDB() {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(["images"], "readonly");
    const store = tx.objectStore("images");
    const req = store.getAllKeys();
    const valuesReq = store.getAll();
    req.onsuccess = () => {
      valuesReq.onsuccess = () => {
        const keys = req.result;
        const values = valuesReq.result;
        resolve(keys.map((k, i) => [k, values[i]]));
      };
    };
    req.onerror = reject;
  });
}

export default function App() {
  // App-level state
  const [clans, setClans] = useState([]); // [{name, logo, desc, cats: []}]
  const [deadClans, setDeadClans] = useState([]); // same structure
  const [moon, setMoon] = useState(1);
  const [showLoad, setShowLoad] = useState(false);
  const [savedNames, setSavedNames] = useState([]);
  const [showCreateClan, setShowCreateClan] = useState(false);
  const [newClan, setNewClan] = useState({ name: "", desc: "", logo: "" });
  const [showAddCat, setShowAddCat] = useState(false);
  const [addCatClanIdx, setAddCatClanIdx] = useState(null);
  const [newCat, setNewCat] = useState({ name: "", desc: "", age: 6, rank: "Warrior", deathAge: "", image: "" });
  const [editClanIdx, setEditClanIdx] = useState(null);
  const [editCat, setEditCat] = useState({ clanIdx: null, catIdx: null });

  // Add these lists for logo and cat image options
  const [customClanLogos, setCustomClanLogos] = useState([]); // [{key, url}]
  const [customCatImages, setCustomCatImages] = useState([]); // [{key, url}]

  React.useEffect(() => {
    // Load custom images from IndexedDB on mount
    (async () => {
      const entries = await getAllImageEntriesFromDB();
      setCustomClanLogos(entries.filter(([k]) => k.startsWith("clanlogo_")).map(([k, url]) => ({ key: k, url })));
      setCustomCatImages(entries.filter(([k]) => k.startsWith("catimg_")).map(([k, url]) => ({ key: k, url })));
    })();
  }, []);

  const clanLogoOptions = [
    ...customClanLogos.map(img => img.key),
    "https://i.postimg.cc/nz40rfZh/blank.png",
    "https://i.postimg.cc/nV13tx0d/thunderclan.png",
    "https://i.postimg.cc/90c1qgFt/shadowclan.png",
    "https://i.postimg.cc/HssBYNNT/Windclan.png",
    "https://i.postimg.cc/GtMPTcfd/Riverclan.png",
    "https://i.postimg.cc/5ytLVh2G/skyclan.png",
    "https://i.postimg.cc/GtzKPP40/starclan.png"
  ];
  const catImageOptions = [
    ...customCatImages.map(img => img.key),
    "https://i.postimg.cc/hJXDC1KC/fluffygingercat2.jpg",
    "https://i.postimg.cc/k68nCM6K/fluffygreycat1.jpg",
    "https://i.postimg.cc/9whcQ3ZS/gingercat1.jpg",
    "https://i.postimg.cc/JH5MyTQh/gingercat2.jpg",
    "https://i.postimg.cc/pyf21Ttt/gingerfluffy1.jpg",
    "https://i.postimg.cc/kB7nrmnR/gingerkittenfluffy.jpg",
    "https://i.postimg.cc/mPDBDy1b/grey1.jpg",
    "https://i.postimg.cc/VJV1b0XX/tortoiseshell1.jpg",
    "https://i.postimg.cc/jWnT6qhm/tortoiseshellkitten1.jpg",
    "https://i.postimg.cc/TL86t87w/white1.jpg",
    "https://i.postimg.cc/hz9qwC60/whitefluffy.jpg"
  ];

  function getImageUrl(key) {
    // If key is a custom key, get its data URL, else return as is
    const custom = [...customClanLogos, ...customCatImages].find(img => img.key === key);
    return custom ? custom.url : key;
  }

  // Save planner
  function handleSave() {
    const name = prompt("Name this save:");
    if (!name) return;
    // Save custom images used in this save
    const usedClanLogos = clans.map(c => c.logo).filter(l => l && l.startsWith('clanlogo_'));
    const usedCatImages = clans.flatMap(c => (c.cats||[]).map(cat => cat.image)).filter(i => i && i.startsWith('catimg_'));
    // Save only the keys, images are already in IndexedDB
    savePlanner(name, { clans, deadClans, moon, usedClanLogos, usedCatImages });
    alert("Saved as '" + name + "'.");
  }

  // Load planner
  function handleLoad() {
    setSavedNames(listPlanners());
    setShowLoad(true);
  }
  function doLoad(name) {
    const data = loadPlanner(name);
    if (data) {
      setClans(data.clans || []);
      setDeadClans(data.deadClans || []);
      setMoon(data.moon || 1);
      setShowLoad(false);
      // Load custom images for this save
      if (data.usedClanLogos || data.usedCatImages) {
        (async () => {
          if (data.usedClanLogos) {
            const logoEntries = await Promise.all(data.usedClanLogos.map(async key => [key, await getImageFromDB(key)]));
            setCustomClanLogos(logos => {
              const newOnes = logoEntries.filter(([k, url]) => url && !logos.some(l => l.key === k)).map(([k, url]) => ({ key: k, url }));
              return [...logos, ...newOnes];
            });
          }
          if (data.usedCatImages) {
            const imgEntries = await Promise.all(data.usedCatImages.map(async key => [key, await getImageFromDB(key)]));
            setCustomCatImages(imgs => {
              const newOnes = imgEntries.filter(([k, url]) => url && !imgs.some(i => i.key === k)).map(([k, url]) => ({ key: k, url }));
              return [...imgs, ...newOnes];
            });
          }
        })();
      }
    }
  }

  function handleCreateClan() {
    setShowCreateClan(true);
    setNewClan({ name: "", desc: "", logo: "" });
  }
  function handleEditClan(idx) {
    setEditClanIdx(idx);
    setNewClan({ ...clans[idx] });
    setShowCreateClan(true);
  }
  function handleCreateClanSubmit(e) {
    e.preventDefault();
    if (!newClan.name) return;
    if (editClanIdx !== null) {
      // Edit mode
      const updatedClans = clans.map((clan, idx) =>
        idx === editClanIdx ? { ...clan, ...newClan } : clan
      );
      setClans(updatedClans);
      setEditClanIdx(null);
    } else {
      // Create mode
      setClans([...clans, { ...newClan, cats: [] }]);
    }
    setShowCreateClan(false);
  }

  function handleAddCat(clanIdx) {
    setAddCatClanIdx(clanIdx);
    setShowAddCat(true);
    setNewCat({ name: "", desc: "", age: 6, rank: "Warrior", deathAge: "", image: "" });
  }
  function handleEditCat(clanIdx, catIdx) {
    setEditCat({ clanIdx, catIdx });
    setNewCat({ ...clans[clanIdx].cats[catIdx] });
    setShowAddCat(true);
  }
  function handleAddCatSubmit(e) {
    e.preventDefault();
    if (!newCat.name) return;
    let updatedClans;
    if (editCat.clanIdx !== null && editCat.catIdx !== null) {
      // Edit mode
      updatedClans = clans.map((clan, idx) =>
        idx === editCat.clanIdx
          ? { ...clan, cats: clan.cats.map((cat, cidx) => cidx === editCat.catIdx ? { ...newCat } : cat) }
          : clan
      );
      setEditCat({ clanIdx: null, catIdx: null });
    } else {
      // Add mode
      updatedClans = clans.map((clan, idx) =>
        idx === addCatClanIdx ? { ...clan, cats: [...(clan.cats || []), { ...newCat }] } : clan
      );
    }
    setClans(updatedClans);
    setShowAddCat(false);
  }

  function handleSkipMoon() {
    // Age up all living cats
    let newClans = clans.map(clan => ({
      ...clan,
      cats: (clan.cats || []).map(cat => ({
        ...cat,
        age: Number(cat.age) + 1
      }))
    }));
    let newDeadClans = [...deadClans];
    // Move cats to dead if they reach deathAge
    newClans = newClans.map(clan => {
      const living = [];
      const dead = [];
      (clan.cats || []).forEach(cat => {
        if (cat.deathAge && Number(cat.age) >= Number(cat.deathAge)) {
          dead.push({ ...cat });
        } else {
          living.push(cat);
        }
      });
      // Add dead cats to deadClans
      if (dead.length > 0) {
        let dIdx = newDeadClans.findIndex(dc => dc.name === clan.name);
        if (dIdx === -1) {
          newDeadClans.push({ ...clan, cats: dead });
        } else {
          newDeadClans[dIdx].cats = [...(newDeadClans[dIdx].cats || []), ...dead];
        }
      }
      return { ...clan, cats: living };
    });
    setClans(newClans);
    setDeadClans(newDeadClans);
    setMoon(moon + 1);
  }

  function handleBackMoon() {
    // Age down all living and dead cats
    let newClans = clans.map(clan => ({
      ...clan,
      cats: (clan.cats || []).map(cat => ({
        ...cat,
        age: Math.max(0, Number(cat.age) - 1)
      }))
    }));
    let newDeadClans = deadClans.map(clan => ({
      ...clan,
      cats: (clan.cats || []).map(cat => ({
        ...cat,
        age: Math.max(0, Number(cat.age) - 1)
      }))
    }));
    // Move cats back to living if age < deathAge
    newDeadClans = newDeadClans.map(deadClan => {
      const stillDead = [];
      const revived = [];
      (deadClan.cats || []).forEach(cat => {
        if (cat.deathAge && Number(cat.age) < Number(cat.deathAge)) {
          revived.push({ ...cat });
        } else {
          stillDead.push(cat);
        }
      });
      // Move revived cats to living clans
      if (revived.length > 0) {
        let cIdx = newClans.findIndex(c => c.name === deadClan.name);
        if (cIdx === -1) {
          newClans.push({ ...deadClan, cats: revived });
        } else {
          newClans[cIdx].cats = [...(newClans[cIdx].cats || []), ...revived];
        }
      }
      return { ...deadClan, cats: stillDead };
    });
    // Remove empty dead clans
    newDeadClans = newDeadClans.filter(dc => (dc.cats || []).length > 0);
    setClans(newClans);
    setDeadClans(newDeadClans);
    setMoon(moon - 1);
  }

  // Add this function to reset state
  function handleReset() {
    setClans([]);
    setDeadClans([]);
    setMoon(1);
    setShowLoad(false);
  }

  function handleCopyLiving() {
    let text = clans.map(clan => {
      let clanText = `${clan.name}`;
      if (clan.desc) clanText += `\n${clan.desc}`;
      if (clan.cats && clan.cats.length > 0) {
        clanText += "\n";
        clanText += clan.cats.map(cat =>
          [cat.name, cat.desc, `${cat.age} moons`, cat.rank, cat.deathAge ? `Death Age ${cat.deathAge}` : null]
            .filter(Boolean).join(" | ")
        ).join("\n");
      }
      return clanText;
    }).join("\n\n");
    copyText(text);
  }
  function handleCopyDead() {
    let text = deadClans.map(clan => {
      let clanText = `${clan.name}`;
      if (clan.desc) clanText += `\n${clan.desc}`;
      if (clan.cats && clan.cats.length > 0) {
        clanText += "\n";
        clanText += clan.cats.map(cat =>
          [cat.name, cat.desc, `${cat.age} moons`, cat.rank, cat.deathAge ? `Death Age ${cat.deathAge}` : null]
            .filter(Boolean).join(" | ")
        ).join("\n");
      }
      return clanText;
    }).join("\n\n");
    copyText(text);
  }

  const defaultRanks = [
    "Leader",
    "Medicine Cat",
    "Deputy",
    // custom rank will be inserted here
    "Warrior",
    "Apprentice",
    "Queen",
    "Kit",
    "Elder"
  ];
  const [customRank, setCustomRank] = useState("");
  const ranks = customRank
    ? [
        ...defaultRanks.slice(0, 3),
        customRank,
        ...defaultRanks.slice(3)
      ]
    : [...defaultRanks];

  return (
    <div className="app-container">
      <Header onLoad={handleLoad} />
      <div className="main-layout">
        <Sidebar onSave={handleSave} onCreateClan={handleCreateClan} />
        <main>
          <ClanList
            clans={clans}
            onAddCat={handleAddCat}
            onEditClan={handleEditClan}
            onEditCat={handleEditCat}
            getImageUrl={getImageUrl}
          />
          <CopyTextButton label="📋 Copy Living Cats" onCopy={handleCopyLiving} />
          <CopyTextButton label="📋 Copy Dead Cats" onCopy={handleCopyDead} />
          <DeadClans deadClans={deadClans} getImageUrl={getImageUrl} />
          <MoonControlBar moon={moon} onSkipMoon={handleSkipMoon} onBackMoon={handleBackMoon} />
        </main>
      </div>
      {/* Load dialog */}
      {showLoad && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#0008',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'#fff',padding:24,borderRadius:8,minWidth:300}}>
            <h3>Load Save</h3>
            {savedNames.length === 0 ? <div>No saves found.</div> : (
              <ul style={{listStyle:'none',padding:0}}>
                {savedNames.map(name => (
                  <li key={name}>
                    <button className="button" style={{margin:'4px 0',width:'100%'}} onClick={() => doLoad(name)}>{name}</button>
                  </li>
                ))}
              </ul>
            )}
            <button className="button" style={{marginTop:8,marginRight:8}} onClick={handleReset}>Reset (Blank)</button>
            <button className="button" style={{marginTop:8}} onClick={()=>setShowLoad(false)}>Cancel</button>
          </div>
        </div>
      )}
      {/* Create/Edit Clan dialog */}
      {showCreateClan && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#0008',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <form style={{background:'#fff',padding:24,borderRadius:8,minWidth:320}} onSubmit={handleCreateClanSubmit}>
            <h3>{editClanIdx !== null ? 'Edit Clan' : 'Create Clan'}</h3>
            <label>Clan Name
              <input value={newClan.name} onChange={e=>setNewClan({...newClan,name:e.target.value})} required />
            </label>
            <label>Description
              <textarea value={newClan.desc} onChange={e=>setNewClan({...newClan,desc:e.target.value})} />
            </label>
            <label>Logo
              <select value={newClan.logo} onChange={e => setNewClan({ ...newClan, logo: e.target.value })}>
                <option value="">(None)</option>
                {clanLogoOptions.map(opt => (
                  <option key={opt} value={opt}>{opt.startsWith('clanlogo_') ? 'Custom Logo' : opt.replace('clan logos/','').replace('.png','')}</option>
                ))}
              </select>
              <div style={{marginTop:8}}>
                <button type="button" className="button" style={{width:'100%'}} onClick={() => document.getElementById('clan-logo-upload').click()}>Upload Image</button>
                <input id="clan-logo-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={async e => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = async ev => {
                      const dataUrl = ev.target.result;
                      const key = `clanlogo_${Date.now()}_${Math.random().toString(36).slice(2)}`;
                      await saveImageToDB(key, dataUrl);
                      setCustomClanLogos(logos => [...logos, { key, url: dataUrl }]);
                      setNewClan(clan => ({ ...clan, logo: key }));
                    };
                    reader.readAsDataURL(file);
                  }
                  e.target.value = '';
                }} />
              </div>
            </label>
            <div className="form-actions">
              <button className="button" type="submit">{editClanIdx !== null ? 'Save' : 'Create'}</button>
              <button className="button" type="button" onClick={()=>{setShowCreateClan(false);setEditClanIdx(null);}}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      {/* Add/Edit Cat dialog */}
      {showAddCat && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#0008',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <form style={{background:'#fff',padding:24,borderRadius:8,minWidth:320}} onSubmit={handleAddCatSubmit}>
            <h3>{editCat.clanIdx !== null ? 'Edit Cat' : 'Add Cat'}</h3>
            <label>Name
              <input value={newCat.name} onChange={e=>setNewCat({...newCat,name:e.target.value})} required />
            </label>
            <label>Description
              <textarea value={newCat.desc} onChange={e=>setNewCat({...newCat,desc:e.target.value})} />
            </label>
            <label>Age (moons)
              <input type="number" min="0" value={newCat.age} onChange={e=>setNewCat({...newCat,age:Number(e.target.value)})} required />
            </label>
            <label>Rank
              <select value={newCat.rank === "Custom..." ? "Custom..." : newCat.rank} onChange={e=>{
                if (e.target.value === "Custom...") {
                  setCustomRank("");
                  setNewCat({...newCat, rank: ""});
                } else {
                  setCustomRank("");
                  setNewCat({...newCat, rank: e.target.value});
                }
              }}>
                {ranks.map(rank => (
                  <option key={rank} value={rank}>{rank}</option>
                ))}
                <option value="Custom...">Custom...</option>
              </select>
              {newCat.rank === "" && (
                <input
                  type="text"
                  placeholder="Enter custom rank"
                  value={customRank}
                  onChange={e => {
                    setCustomRank(e.target.value);
                    setNewCat({...newCat, rank: e.target.value});
                  }}
                  style={{marginTop:4, width:'100%'}}
                />
              )}
            </label>
            <label>Death Age (optional)
              <input type="number" min="0" value={newCat.deathAge} onChange={e=>setNewCat({...newCat,deathAge:e.target.value})} />
            </label>
            <label>Image
              <select value={newCat.image} onChange={e => setNewCat({ ...newCat, image: e.target.value })}>
                <option value="">(None)</option>
                {catImageOptions.map(opt => (
                  <option key={opt} value={opt}>{opt.startsWith('catimg_') ? 'Custom Image' : opt.replace('Cat pictures/','')}</option>
                ))}
              </select>
              <div style={{marginTop:8}}>
                <button type="button" className="button" style={{width:'100%'}} onClick={() => document.getElementById('cat-image-upload').click()}>Upload Image</button>
                <input id="cat-image-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={async e => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = async ev => {
                      const dataUrl = ev.target.result;
                      const key = `catimg_${Date.now()}_${Math.random().toString(36).slice(2)}`;
                      await saveImageToDB(key, dataUrl);
                      setCustomCatImages(imgs => [...imgs, { key, url: dataUrl }]);
                      setNewCat(cat => ({ ...cat, image: key }));
                    };
                    reader.readAsDataURL(file);
                  }
                  e.target.value = '';
                }} />
              </div>
            </label>
            <div className="form-actions">
              <button className="button" type="submit">{editCat.clanIdx !== null ? 'Save' : 'Add'}</button>
              <button className="button" type="button" onClick={()=>{setShowAddCat(false);setEditCat({clanIdx:null,catIdx:null});}}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
