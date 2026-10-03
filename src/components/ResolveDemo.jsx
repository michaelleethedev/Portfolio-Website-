import React, { useState } from 'react';
import useDemoState from './useDemoState';

const initialTicket = {
  version: 1, status: 'Open', diagnosed: false, adapterReset: false, dnsCleared: false,
  verified: false, notes: [], updates: ['Your VPN support request has been received.']
};
const validTicket = value => value?.version === 1
  && ['Open', 'In progress', 'Resolved'].includes(value.status)
  && ['diagnosed', 'adapterReset', 'dnsCleared', 'verified'].every(key => typeof value[key] === 'boolean')
  && Array.isArray(value.notes) && value.notes.every(note => typeof note === 'string')
  && Array.isArray(value.updates) && value.updates.every(update => typeof update === 'string');

export default function ResolveDemo() {
  const [ticket, setTicket, storageUnavailable] = useDemoState('portfolio-resolveit-v1', initialTicket, validTicket);
  const [view, setView] = useState('technician');
  const [note, setNote] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const readyToResolve = ticket.adapterReset && ticket.dnsCleared && ticket.verified;
  const completed = [ticket.diagnosed, ticket.adapterReset, ticket.dnsCleared, ticket.verified].filter(Boolean).length;

  const update = (changes, message) => {
    setTicket(current => ({ ...current, ...changes, updates: [...current.updates, message] }));
    setAnnouncement(message);
  };
  const addNote = event => {
    event.preventDefault();
    if (!note.trim()) return;
    setTicket(current => ({ ...current, notes: [...current.notes, note.trim()] }));
    setNote('');
    setAnnouncement('Internal note saved. It is visible only in the technician view.');
  };
  const reset = () => {
    setTicket(initialTicket);
    setNote('');
    setAnnouncement('Demo reset. The VPN incident is open again.');
  };

  return (
    <div className="demo-app">
      <div className="demo-app-toolbar">
        <div className="demo-view-switch" role="group" aria-label="Support role">
          <button aria-pressed={view === 'technician'} onClick={() => setView('technician')}>Technician workspace</button>
          <button aria-pressed={view === 'employee'} onClick={() => setView('employee')}>Employee portal</button>
        </div>
        <button className="demo-secondary" onClick={reset}>Reset demo</button>
      </div>
      {storageUnavailable && <p className="demo-storage-note">Browser storage is unavailable. You can still try the workflow; changes will last until you leave this page.</p>}
      <p className="demo-announcement" role="status">{announcement || (ticket.status === 'Resolved' ? 'Saved incident restored. Check the employee portal or reset to try again.' : ticket.diagnosed ? 'Your saved progress is ready. Continue the remaining checks.' : 'Start by running diagnostics in the technician workspace.')}</p>
      <div className="demo-metrics">
        <div><span>Incident</span><strong>INC-4821</strong></div>
        <div><span>Status</span><strong className={ticket.status === 'Resolved' ? 'demo-success' : ''}>{ticket.status}</strong></div>
        <div><span>Diagnostics</span><strong>{completed} / 4</strong></div>
        <div><span>VPN connection</span><strong>{ticket.verified ? 'Connected' : 'Disconnected'}</strong></div>
      </div>

      {view === 'technician' ? (
        <div className="demo-work-grid">
          <section className="demo-panel">
            <div className="demo-panel-heading"><span className="demo-priority">P1 · Critical</span><span>Remote access</span></div>
            <h2>VPN will not connect</h2>
            <p>Sarah Johnson · Finance · Dell Latitude 7440</p>
            <p className="demo-context">Sarah can reach the internet but cannot access internal tools. Inspect the VPN adapter and DNS configuration, apply the fixes, then verify connectivity.</p>
            <ol className="demo-checklist">
              <li><span className={ticket.diagnosed ? 'demo-step done' : 'demo-step'}>{ticket.diagnosed ? '✓' : '1'}</span><div><strong>Inspect the device</strong><p>{ticket.diagnosed ? 'Internet reachable. VPN adapter stale; DNS cache needs clearing.' : 'Run a simulated health check to identify the cause.'}</p></div></li>
              <li><span className={ticket.adapterReset ? 'demo-step done' : 'demo-step'}>{ticket.adapterReset ? '✓' : '2'}</span><div><strong>Reset VPN adapter</strong><p>{ticket.adapterReset ? 'Adapter restarted successfully.' : 'Available after diagnostics.'}</p></div></li>
              <li><span className={ticket.dnsCleared ? 'demo-step done' : 'demo-step'}>{ticket.dnsCleared ? '✓' : '3'}</span><div><strong>Clear DNS cache</strong><p>{ticket.dnsCleared ? 'Internal hostnames resolve correctly.' : 'Remove stale records after the adapter reset.'}</p></div></li>
              <li><span className={ticket.verified ? 'demo-step done' : 'demo-step'}>{ticket.verified ? '✓' : '4'}</span><div><strong>Verify employee access</strong><p>{ticket.verified ? 'VPN connected. Internal tools are reachable.' : 'Confirm the fix before resolving the ticket.'}</p></div></li>
            </ol>
            <div className="demo-action-row">
              <button className="demo-primary" disabled={ticket.diagnosed} onClick={() => update({ diagnosed: true, status: 'In progress' }, 'Diagnostics found a stale VPN adapter and DNS cache. A technician is working on a fix.')}>Run diagnostics</button>
              <button className="demo-secondary" disabled={!ticket.diagnosed || ticket.adapterReset} onClick={() => update({ adapterReset: true }, 'The VPN adapter has been reset.')}>Reset VPN adapter</button>
              <button className="demo-secondary" disabled={!ticket.adapterReset || ticket.dnsCleared} onClick={() => update({ dnsCleared: true }, 'The DNS cache has been cleared.')}>Clear DNS cache</button>
              <button className="demo-secondary" disabled={!ticket.dnsCleared || ticket.verified} onClick={() => update({ verified: true }, 'VPN connectivity verified. Internal tools are reachable again.')}>Verify connection</button>
            </div>
            <div className="demo-resolution">
              <p>{ticket.status === 'Resolved' ? 'Incident resolved. Open the employee portal to see the public update.' : 'Complete all four checks to unlock resolution.'}</p>
              <button className="demo-primary" disabled={!readyToResolve || ticket.status === 'Resolved'} onClick={() => update({ status: 'Resolved' }, 'Your incident has been resolved. VPN access is restored after an adapter reset and DNS refresh.')}>Resolve incident</button>
            </div>
          </section>
          <aside className="demo-panel">
            <h2>Internal notes</h2>
            <p>Technician notes stay out of the employee portal.</p>
            <form onSubmit={addNote} className="demo-note-form">
              <label htmlFor="technician-note">Add a note</label>
              <textarea id="technician-note" value={note} onChange={event => setNote(event.target.value)} placeholder="Record your troubleshooting findings…" maxLength={1200} rows={4} />
              <button className="demo-secondary" disabled={!note.trim()}>Save internal note</button>
            </form>
            <ul className="demo-timeline">{ticket.notes.length ? ticket.notes.map((item, index) => <li key={index}>{item}</li>) : <li>No notes yet.</li>}</ul>
          </aside>
        </div>
      ) : (
        <section className="demo-panel demo-employee">
          <span className="demo-eyebrow">Sarah’s support request</span>
          <h2>{ticket.status === 'Resolved' ? 'You’re connected again.' : 'We’re working on your VPN.'}</h2>
          <p>INC-4821 · VPN will not connect · {ticket.status}</p>
          <h3>Public updates</h3>
          <ol className="demo-timeline">{ticket.updates.map((item, index) => <li key={index}>{item}</li>)}</ol>
          <button className="demo-secondary" onClick={() => setView('technician')}>Return to technician workspace</button>
        </section>
      )}
    </div>
  );
}
