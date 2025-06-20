import React, { useState } from "react";

export default function DeadClans({ deadClans, getImageUrl }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <section className="dead-clan-list">
      <button className="collapse-toggle" onClick={() => setCollapsed(c => !c)}>
        {collapsed ? "▶" : "▼"} Dead Cats
      </button>
      {!collapsed && (
        <div>
          {deadClans.length === 0 && <div style={{color:'#888',marginLeft:8}}>No dead cats yet.</div>}
          {deadClans.map((clan, idx) => (
            <div key={clan.name + idx} style={{marginBottom:16,background:'#f8f0f0',borderRadius:8,padding:12}}>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                {clan.logo && <img src={getImageUrl(clan.logo)} alt="logo" style={{width:40,height:40,objectFit:'cover',borderRadius:8,border:'1px solid #ccc'}} />}
                <div style={{fontWeight:'bold',fontSize:'1.1rem'}}>{clan.name}</div>
              </div>
              <div style={{margin:'4px 0 8px 0',color:'#555'}}>{clan.desc}</div>
              <div className="cat-list">
                {(clan.cats && clan.cats.length > 0) ? (
                  clan.cats.map((cat, cidx) => (
                    <div className="cat-card" key={cat.name + cidx}>
                      {cat.image && <img src={getImageUrl(cat.image)} alt="cat" />}
                      <div className="cat-info">
                        <div style={{fontWeight:'bold'}}>{cat.name}</div>
                        <div style={{fontSize:'0.95em',color:'#555'}}>{cat.desc}</div>
                        <div style={{fontSize:'0.9em',color:'#888'}}>Age: {cat.age} moons | Death Age: {cat.deathAge} | Rank: {cat.rank}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{color:'#aaa',fontSize:'0.95em'}}>No dead cats in this clan.</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
