import React, { useState } from 'react';
import useDemoState from './useDemoState';

const starterTemplates = [
  { id: 'follow-up', title: 'Friendly follow-up', folder: 'Email', body: 'Hi {{name}},\n\nFollowing up on our conversation about {{topic}}. Let me know if you have any questions or if there is a good time to reconnect.\n\nThanks!', favorite: true },
  { id: 'support', title: 'Support acknowledgement', folder: 'Support', body: 'Hi {{name}},\n\nThanks for reaching out about {{topic}}. I have received your request and will follow up with the next steps shortly.', favorite: false },
  { id: 'meeting', title: 'Meeting invitation', folder: 'Email', body: 'Hi {{name}},\n\nWould you be available for a quick call about {{topic}}? Please share a time that works for you.', favorite: false },
  { id: 'resolved', title: 'Issue resolved', folder: 'Support', body: 'Hi {{name}},\n\nThe issue with {{topic}} is now resolved. Please try again and let me know if you need anything else.', favorite: false },
  { id: 'handoff', title: 'Project handoff', folder: 'Work', body: 'Hi {{name}},\n\nThe latest version of {{topic}} is ready for review. I have included the relevant notes and next steps. Looking forward to your feedback.', favorite: false },
  { id: 'thank-you', title: 'Thank-you note', folder: 'Work', body: 'Hi {{name}},\n\nThank you for your help with {{topic}}. I appreciate your time and thoughtful feedback.', favorite: true }
];
const initialLibrary = { version: 1, templates: starterTemplates, draft: '' };
const validLibrary = value => value?.version === 1 && typeof value.draft === 'string'
  && Array.isArray(value.templates) && value.templates.length === starterTemplates.length
  && value.templates.every(item => typeof item.id === 'string' && typeof item.title === 'string'
    && typeof item.body === 'string' && typeof item.folder === 'string' && typeof item.favorite === 'boolean')
  && new Set(value.templates.map(item => item.id)).size === starterTemplates.length;

export default function SeamlessDemo({ storeUrl }) {
  const [library, setLibrary, storageUnavailable] = useDemoState('portfolio-seamless-v1', initialLibrary, validLibrary);
  const [query, setQuery] = useState('');
  const [folder, setFolder] = useState('All');
  const [selectedId, setSelectedId] = useState('follow-up');
  const [name, setName] = useState('Jordan');
  const [topic, setTopic] = useState('the project');
  const [message, setMessage] = useState('');
  const selected = library.templates.find(item => item.id === selectedId) || library.templates[0];
  const filledTemplate = selected.body.replace(/\{\{name\}\}/g, () => name.trim() || '{{name}}').replace(/\{\{topic\}\}/g, () => topic.trim() || '{{topic}}');
  const visible = library.templates.filter(item => (folder === 'All' || (folder === 'Favorites' ? item.favorite : item.folder === folder))
    && `${item.title} ${item.body}`.toLowerCase().includes(query.toLowerCase().trim()));

  const toggleFavorite = id => {
    setLibrary(current => ({ ...current, templates: current.templates.map(item => item.id === id ? { ...item, favorite: !item.favorite } : item) }));
  };
  const insert = () => {
    setLibrary(current => ({ ...current, draft: current.draft ? `${current.draft}\n\n${filledTemplate}` : filledTemplate }));
    setMessage(`Inserted “${selected.title}” into your draft.`);
  };
  const reset = () => {
    setLibrary(initialLibrary); setQuery(''); setFolder('All'); setSelectedId('follow-up');
    setName('Jordan'); setTopic('the project'); setMessage('Demo reset. Starter templates restored.');
  };

  return (
    <div className="demo-app seamless-demo">
      <div className="demo-app-toolbar"><span className="demo-eyebrow">Template library · {library.templates.length} examples</span><div className="demo-action-row"><a className="demo-secondary" href={storeUrl} target="_blank" rel="noopener noreferrer">Get the Chrome extension ↗</a><button className="demo-secondary" onClick={reset}>Reset demo</button></div></div>
      {storageUnavailable && <p className="demo-storage-note">Browser storage is unavailable. You can still try templates; changes will last until you leave this page.</p>}
      <p className="demo-announcement" role="status">{message || 'Choose a template, personalize it, and insert it below.'}</p>
      <div className="demo-work-grid">
        <section className="demo-panel">
          <h2>Find the right words.</h2>
          <label className="demo-field">Search templates<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try support or meeting…" /></label>
          <div className="demo-folder-tabs" role="group" aria-label="Template folders">{['All', 'Favorites', 'Email', 'Support', 'Work'].map(item => <button key={item} aria-pressed={folder === item} onClick={() => setFolder(item)}>{item}</button>)}</div>
          <div className="demo-template-list">{visible.length ? visible.map(item => (
            <div className={selected.id === item.id ? 'demo-template selected' : 'demo-template'} key={item.id}>
              <button className="demo-template-select" onClick={() => setSelectedId(item.id)} aria-pressed={selected.id === item.id}><span>{item.folder}</span><strong>{item.title}</strong><p>{item.body.slice(0, 100)}…</p></button>
              <button className="demo-favorite" onClick={() => toggleFavorite(item.id)} aria-label={`${item.favorite ? 'Unfavorite' : 'Favorite'} ${item.title}`} aria-pressed={item.favorite}>{item.favorite ? '★' : '☆'}</button>
            </div>
          )) : <div className="demo-empty"><p>No templates match your search.</p><button className="demo-secondary" onClick={() => { setQuery(''); setFolder('All'); }}>Clear search and filters</button></div>}</div>
        </section>
        <section className="demo-panel">
          <span className="demo-eyebrow">Personalize & insert</span>
          <h2>{selected.title}</h2>
          <div className="demo-variable-fields"><label className="demo-field">Recipient name<input value={name} onChange={event => setName(event.target.value)} maxLength={100} /></label><label className="demo-field">Topic<input value={topic} onChange={event => setTopic(event.target.value)} maxLength={200} /></label></div>
          <pre className="demo-template-preview">{filledTemplate}</pre>
          <button className="demo-primary" onClick={insert}>Insert into draft ↓</button>
          <label className="demo-field demo-draft">Your draft<textarea value={library.draft} onChange={event => setLibrary(current => ({ ...current, draft: event.target.value }))} placeholder="Your personalized template will appear here. You can edit it, too." rows={7} maxLength={12000} /></label>
          <div className="demo-action-row"><span className="demo-character-count">{library.draft.length} characters · saved locally</span><button className="demo-secondary" disabled={!library.draft} onClick={() => { setLibrary(current => ({ ...current, draft: '' })); setMessage('Draft cleared.'); }}>Clear draft</button></div>
        </section>
      </div>
    </div>
  );
}
