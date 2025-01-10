<div align="center">
  <h1>📧 AnnounceItLify</h1>
  <p>A powerful email automation tool for sending exam results using SendGrid</p>
</div>

<h2>🌟 Features</h2>
<ul>
  <li>Bulk email sending capability</li>
  <li>CSV data processing</li>
  <li>Rate limiting for API protection</li>
  <li>Beautiful HTML email templates</li>
  <li>Error handling and logging</li>
</ul>

<h2>🛠️ Installation</h2>

<pre><code>git clone https://github.com/Sayuj63/Announceitlify.git
npm install</code></pre>

<h2>⚙️ Configuration</h2>

<p>Create a <code>.env</code> file in the root directory with the following variables:</p>

<pre><code>SENDGRID_API_KEY=your_sendgrid_api_key
SENDER_EMAIL=your_verified_sender_email</code></pre>

<h2>📊 CSV Format</h2>

<p>Create a <code>students_results.csv</code> file with the following columns:</p>
<ul>
  <li>name</li>
  <li>email</li>
  <li>subject1</li>
  <li>subject2</li>
  <li>subject3</li>
</ul>

<h2>🚀 Usage</h2>

<h3>Simple Mailer</h3>
<pre><code>npm run start</code></pre>
<p>or</p>
<pre><code>npm run test-email</code></pre>

<h2>🏗️ Project Structure</h2>

<ul>
  <li><code>simpleMailer.js</code> - Main script for processing CSV and sending emails</li>
  <li><code>resultMailer.js</code> - Rate limiter implementation for API protection</li>
</ul>

<h2>⚡ Rate Limiting</h2>

<p>The application includes a rate limiter class that can be configured with:</p>
<ul>
  <li>Maximum requests per time window</li>
  <li>Time window duration</li>
</ul>

<h2>📧 Email Template</h2>

<p>The email template includes:</p>
<ul>
  <li>Personalized greeting</li>
  <li>Subject-wise result listing</li>
  <li>Professional formatting</li>
</ul>

<h2>🔍 Dependencies</h2>

<ul>
  <li>@sendgrid/mail - For email sending functionality</li>
  <li>csv-parser - For processing CSV files</li>
  <li>dotenv - For environment variable management</li>
  <li>twilio - For potential SMS functionality</li>
</ul>

<h2>⚠️ Error Handling</h2>

<p>The application includes comprehensive error handling with console logging for:</p>
<ul>
  <li>Email sending failures</li>
  <li>CSV processing errors</li>
  <li>API rate limit violations</li>
</ul>

<h2>📝 License</h2>

<p>MIT</p>

<h2>🤝 Contributing</h2>

<p>Feel free to submit issues and enhancement requests!</p>

<div align="center">
  <p>Made with ❤️ by Sayuj Pillai</p>
</div>
</div>