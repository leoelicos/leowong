export default function CSSSnippetCheatsheet() {
  return (
    <div className='app-04'>
      <div className='body'>
        <header>
          <h1>CSS Snippet Cheatsheet</h1>
          <p>Ever have trouble recalling the exact syntax for your favourite CSS code? Give it a permanent home and add it to this page! Select any snippet below and it'll automatically select all of the code for you to copy.</p>
        </header>
        <main>
          <article className='code-card'>
            <h3 className='card-header'>Flexbox Row</h3>
            <p className='card-text'>Use these properties to create a Flexbox row layout.</p>
            <pre className='card-code linear-gradient-background'>
              {`.row {
								display: flex;
								flex-direction: row;
								flex-wrap: wrap;
								}`}
            </pre>
          </article>

          <article className='code-card'>
            <h3 className='card-header'>Flexbox Column</h3>
            <p className='card-text'>Use this to create a flexbox column layout.</p>
            <pre className='card-code linear-gradient-background'>
              {`.column {
								display: flex;
								flex-direction: column;
								}`}
            </pre>
          </article>

          <article className='code-card'>
            <h3 className='card-header'>CSS Grid Layout</h3>
            <p className='card-text'>Build a 12-column layout using CSS Grid</p>
            <pre className='card-code linear-gradient-background'>
              {`.grid {
								display: grid;
								width: 100%;
								grid-template-columns: repeat(12, 1fr);
								}`}
            </pre>
          </article>

          <article className='code-card'>
            <h3 className='card-header'>Linear Gradients</h3>
            <p className='card-text'>This will create a background linear gradient from top to bottom.</p>
            <pre className='card-code linear-gradient-background'>
              {`.linear-gradient-background {
								background-image: linear-gradient (
								rgba(232, 102, 236, 0.3) 0%,
								rgba(232, 102, 236, 0.6) 100%
								);
								}`}
            </pre>
          </article>

          <article className='code-card'>
            <h3 className='card-header'>Box Transition Glow</h3>
            <p className='card-text'>Use transition and box shadows to glow on hover.</p>
            <pre className='card-code linear-gradient-background'>
              {`.code-card .card-header {
								border-radius: 8px;
								transition: all 0.5s ease-in-out;
								}
								
								.code-card:hover, 
								.code-card:hover .card-header {
								box-shadow: inset 0px 0px 8px rgba(232, 102, 236, 1), 0 0 15px rgba(232, 102, 236, 1);
								}`}
            </pre>
          </article>

          <article className='code-card'>
            <h3 className='card-header'>Overlay Card with Title</h3>
            <p className='card-text'>Use position properties and negative margins to raise elements higher than their natural starting point.</p>
            <pre className='card-code linear-gradient-background'>
              {`.card-header {
								position: relative;
								margin-top: -20px;
								}`}
            </pre>
          </article>
        </main>
        <footer>
          <h3>Made with ❤️ and CSS</h3>
        </footer>
      </div>
    </div>
  )
}
