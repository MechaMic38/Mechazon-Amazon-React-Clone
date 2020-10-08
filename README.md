## Mechazon, the Amazon Reactjs Clone

<p>
  This is <strong>Mechazon</strong>, a clone inspired to Amazon.com, built with Reactjs and React Context API.
  <br/>
  To see the live website, click here: [Mechazon](https://challenge-f0ac9.web.app)
</p>

<p>
  The website includes <strong>User Authentication</strong>, side <strong>Mega Menu</strong>, <strong>Image Carousels</strong> (both for the home page, and the sigle product pages), and <strong>Stripe Payment</strong> system (not working online, couldn't upgrade to Firebase Blaze plan, where the app is hosted)
</p>

## How It Works

<p>
  When the <strong>Home</strong> pages loads, all products displayed are retrieved from a local JSON file, containing all information and images related to the items.
</p>

<p>
  Same story for the <strong>Side Menu</strong>, since writing <strong>2700</strong> lines of code in HTML wouldn't have been a good idea <em>(no, I am not kidding)</em>, when the page loads, its dedicated React component fetches all data from another local JSON file containing all text and settings related to every voice of the mega menu.
</p>

<p>
  When the user heads over one of the <strong>Product Pages</strong>, the dedicated component takes the ID of the product from the URL and fetches the item information from the JSON file, then displays them on the page, while also passing all its images to the Product Image Carousel.
</p>

<p>
  All data shared by the different pages (React Components) is shared by the React Context API, a better solution to prop drilling.
</p>

<h2>Hope you like it!</h2>
