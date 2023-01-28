const snippets = [
  {
    title: 'Flexbox Row',
    description: 'Use these properties to create a Flexbox row layout.',
    code: `.row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      }`
  },
  {
    title: 'Flexbox Column',
    description: 'se this to create a flexbox column layout.',
    code: `.column {
      display: flex;
      flex-direction: column;
      }`
  },
  {
    title: 'CSS Grid Layout',
    description: 'Build a 12-column layout using CSS Grid',
    code: `.grid {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(12, 1fr);
      }`
  },
  {
    title: 'Linear Gradients',
    description: 'This will create a background linear gradient from top to bottom.',
    code: `.linear-gradient-background {
      background-image: linear-gradient (
      rgba(232, 102, 236, 0.3) 0%,
      rgba(232, 102, 236, 0.6) 100%
      );
      }`
  },
  {
    title: 'Box Transition Glow',
    description: 'Use transition and box shadows to glow on hover.',
    code: `.code-card .card-header {
      border-radius: 8px;
      transition: all 0.5s ease-in-out;
      }
      
      .code-card:hover, 
      .code-card:hover .card-header {
      box-shadow: inset 0px 0px 8px rgba(232, 102, 236, 1), 0 0 15px rgba(232, 102, 236, 1);
      }`
  },
  {
    title: 'Overlay Card with Title',
    description: 'Use position properties and negative margins to raise elements higher than their natural starting point.',
    code: `.card-header {
      position: relative;
      margin-top: -20px;
      }`
  }
]
export default snippets
