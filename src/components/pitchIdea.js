// Renders the saved pitch page (public/pitch_idea.html) inside the app.
// The page is a fully self-contained snapshot, so we embed it via an iframe
// to keep its own styles/scripts isolated from the React app.

const PITCH_PATH = `${process.env.PUBLIC_URL || ''}/pitch_idea.html`;

function PitchIdea({ date }) {
  // Pass the URL date into the snapshot; an inline script there rewrites the
  // "Issued" / "Certificate date" fields so the demo is reloadable & URL-driven.
  const src = date ? `${PITCH_PATH}?date=${encodeURIComponent(date)}` : PITCH_PATH;

  return (
    <iframe
      title={date ? `Pitch idea (${date})` : 'Pitch idea'}
      src={src}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  );
}

export default PitchIdea;
