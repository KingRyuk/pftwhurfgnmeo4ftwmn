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
  const clanLogoOptions = [
    "clan logos/blank.png",
    "clan logos/Riverclan.png",
    "clan logos/shadowclan.png",
    "clan logos/skyclan.png",
    "clan logos/starclan.png",
    "clan logos/thunderclan.png",
    "clan logos/Windclan.png"
  ];
  const catImageOptions = [
    "Cat pictures/blackcat1.jpg",
    "Cat pictures/blackcat2.jpg",
    "Cat pictures/blackFluffy1.jpg",
    "Cat pictures/blackkitten1.jpg",
    "Cat pictures/browncat1.jpg",
    "Cat pictures/calico1.jpg",
    "Cat pictures/calicofluffy1.jpg",
    "Cat pictures/calicokittenfluffy1.jpg",
    "Cat pictures/fluffy tortiseshell1.jpg",
    "Cat pictures/fluffygingercat2.jpg",
    "Cat pictures/fluffygreycat1.jpg",
    "Cat pictures/gingercat1.jpg",
    "Cat pictures/gingercat2.jpg",
    "Cat pictures/gingerfluffy1.jpg",
    "Cat pictures/gingerkittenfluffy.jpg",
    "Cat pictures/grey1.jpg",
    "Cat pictures/tortoiseshell1.jpg",
    "Cat pictures/tortoiseshellkitten1.jpg",
    "Cat pictures/white1.jpg",
    "Cat pictures/whitefluffy.jpg"
  ];

  // Save planner
  function handleSave() {
    const name = prompt("Name this save:");
    if (!name) return;
    savePlanner(name, { clans, deadClans, moon });
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
          />
          <CopyTextButton label="📋 Copy Living Cats" onCopy={handleCopyLiving} />
          <CopyTextButton label="📋 Copy Dead Cats" onCopy={handleCopyDead} />
          <DeadClans deadClans={deadClans} />
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
              <select value={newClan.logo} onChange={e=>setNewClan({...newClan,logo:e.target.value})}>
                <option value="">(None)</option>
                {clanLogoOptions.map(opt => (
                  <option key={opt} value={opt}>{opt.replace('clan logos/','').replace('.png','')}</option>
                ))}
              </select>
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
              <select value={newCat.rank} onChange={e=>setNewCat({...newCat,rank:e.target.value})}>
                <option>Leader</option>
                <option>Medicine Cat</option>
                <option>Deputy</option>
                <option>Warrior</option>
                <option>Apprentice</option>
                <option>Queen</option>
                <option>Kit</option>
                <option>Elder</option>
                <option>Custom</option>
              </select>
            </label>
            <label>Death Age (optional)
              <input type="number" min="0" value={newCat.deathAge} onChange={e=>setNewCat({...newCat,deathAge:e.target.value})} />
            </label>
            <label>Image
              <select value={newCat.image} onChange={e=>setNewCat({...newCat,image:e.target.value})}>
                <option value="">(None)</option>
                {catImageOptions.map(opt => (
                  <option key={opt} value={opt}>{opt.replace('Cat pictures/','')}</option>
                ))}
              </select>
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
