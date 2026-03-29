export default function Cards() {
  const animals = [
    { icon: '🦘', name:'Kangaroo', rank:'The Watchful One', fact:'Master of attention and vigilant wisdom' },
    { icon: '🐨', name:'Koala', rank:'The Eucalyptus King', fact:'Observant in peaceful contemplation' },
    { icon: '🦆', name:'Platypus', rank:'The Mysterious Queen', fact:'Enigmatic and carefully observant' },
    { icon: '🦅', name:'Kookaburra', rank:'The Laughing Messenger', fact:'Sharp eyes, keen observations' },
    { icon: '🦡', name:'Wombat', rank:'The Sturdy Observer', fact:'Grounded wisdom and careful watching' },
    { icon: '🦅', name:'Emu', rank:'The Swift Watcher', fact:'Fast and observant across the plains' },
    { icon: '😈', name:'Tasmanian Devil', rank:'The Sharp Scout', fact:'Hyperaware of danger and opportunity' },
    { icon: '🐊', name:'Crocodile', rank:'The Ancient Sentinel', fact:'Perfectly observant predator of the billabong' },
  ]

  return (
    <>
      <h2>Bushland Trading Cards</h2>
      <div className="card-grid">
        {animals.map((a) => (
          <section key={a.name} className="card">
            <p className="animal-icon">{a.icon}</p>
            <h3>{a.name}</h3>
            <p className="rank">{a.rank}</p>
            <p className="fact">{a.fact}</p>
          </section>
        ))}
      </div>
    </>
  )
}
