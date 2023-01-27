import './style/style.css'
export default function CodeRefactor() {
  return (
    <div className='app-03'>
      <div className='body'>
        <header>
          <h1>
            Hori<span className='seo'>seo</span>n
          </h1>
          <nav>
            <ul>
              <li>
                <a href='#search-engine-optimization'>Search Engine Optimization</a>
              </li>
              <li>
                <a href='#online-reputation-management'>Online Reputation Management</a>
              </li>
              <li>
                <a href='#social-media-marketing'>Social Media Marketing</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section id='hero'></section>
          <section id='content'>
            <article id='search-engine-optimization'>
              <img
                src='./assets/images/search-engine-optimization.jpg'
                alt='a mind map of SEO applications'
              />
              <h2>Search Engine Optimization</h2>
              <p>The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.</p>
            </article>
            <article id='online-reputation-management'>
              <img
                src='./assets/images/online-reputation-management.jpg'
                alt="a graph of a company's reputation increasing over time"
              />
              <h2>Online Reputation Management</h2>
              <p>The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.</p>
            </article>
            <article id='social-media-marketing'>
              <img
                src='./assets/images/social-media-marketing.jpg'
                alt='a picture of SEO staff collaborating together in various ways'
              />
              <h2>Social Media Marketing</h2>
              <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.</p>
            </article>
          </section>
          <section id='benefits'>
            <article id='benefit-lead'>
              <h3>Lead Generation</h3>
              <img
                src='./assets/images/lead-generation.png'
                alt='a icon showing money coming from a good idea'
              />
              <p>Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.</p>
            </article>
            <article id='benefit-brand'>
              <h3>Brand Awareness</h3>
              <img
                src='./assets/images/brand-awareness.png'
                alt='a lightbulb icon showing people becoming aware of a good idea'
              />
              <p>Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.</p>
            </article>
            <article id='benefit-cost'>
              <h3>Cost Management</h3>
              <img
                src='./assets/images/cost-management.png'
                alt='a cog icon representing different costs being managed together'
              />
              <p>As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.</p>
            </article>
          </section>
        </main>
        <footer>
          <h2>Made with ❤️️ by Horiseon</h2>
          <p>&copy; 2019 Horiseon Social Solution Services, Inc.</p>
        </footer>
      </div>
    </div>
  )
}
