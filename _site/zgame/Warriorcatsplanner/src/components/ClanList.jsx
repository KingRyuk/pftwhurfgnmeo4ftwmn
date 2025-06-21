import React from "react";

const rankOrder = [
  "Leader",
  "Deputy",
  "Medicine Cat",
  "Warrior",
  "Queen",
  "Apprentice",
  "Kit",
  "Elder"
];

function sortCatsByRank(cats) {
  return [...(cats || [])].sort((a, b) => {
    const aIdx = rankOrder.indexOf(a.rank);
    const bIdx = rankOrder.indexOf(b.rank);
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });
}

export default function ClanList({ clans, onAddCat, onEditClan, onEditCat, getImageUrl }) {
  function isValidImgUrl(url) {
    return typeof url === 'string' && (url.startsWith('data:image') || url.startsWith('http'));
  }
  return (
    <section className="clan-list">
      <div className="section-title">Living Clans</div>
      {clans.length === 0 && <div style={{color:'#888'}}>No clans yet.</div>}
      {clans.map((clan, idx) => (
        <div key={clan.name + idx} style={{marginBottom:16,background:'#f8fafc',borderRadius:8,padding:12}}>
          <div style={{display:'flex',alignItems:'center',gap:12,justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              {clan.logo && isValidImgUrl(getImageUrl(clan.logo)) && (
                <img src={getImageUrl(clan.logo)} alt="logo" style={{width:40,height:40,objectFit:'cover',borderRadius:8,border:'1px solid #ccc'}} />
              )}
              <div style={{fontWeight:'bold',fontSize:'1.1rem'}}>{clan.name}</div>
            </div>
            <button className="button" style={{fontSize:'0.95em',padding:'0.3em 0.7em'}} onClick={()=>onEditClan(idx)}>✏️ Edit Clan</button>
          </div>
          <div style={{margin:'4px 0 8px 0',color:'#555'}}>{clan.desc}</div>
          <button className="button" onClick={()=>onAddCat(idx)}>➕ Add Cat</button>
          <div className="cat-list">
            {(clan.cats && clan.cats.length > 0) ? (
              sortCatsByRank(clan.cats).map((cat, cidx) => (
                <div className="cat-card" key={cat.name + cidx}>
                  {cat.image && isValidImgUrl(getImageUrl(cat.image)) && (
                    <img src={getImageUrl(cat.image)} alt="cat" />
                  )}
                  <div className="cat-info">
                    <div style={{fontWeight:'bold'}}>{cat.name}</div>
                    <div style={{fontSize:'0.95em',color:'#555'}}>{cat.desc}</div>
                    <div style={{fontSize:'0.9em',color:'#888'}}>Age: {cat.age} moons | Rank: {cat.rank}{cat.deathAge ? ` | Death Age: ${cat.deathAge}` : ''}</div>
                  </div>
                  <div className="cat-actions">
                    <button className="button" style={{fontSize:'0.95em',padding:'0.3em 0.7em'}} onClick={()=>onEditCat(idx, cidx)}>✏️ Edit Cat</button>
                  </div>
                </div>
              ))
            ) : (
              <div style={{color:'#aaa',fontSize:'0.95em'}}>No cats yet.</div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
