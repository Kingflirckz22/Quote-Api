const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTANT: Render sets the PORT environment variable.


// A simple in-memory list of quotes
const quotes = [
"The cloud is just someone else's computer",
"Code is like humor. When you have to explain it, its bad",
"Scalability is not just about handling more users, but about handling them cost-effectively",
"First, solve the problem. Then, write the code",
"Infrastructure as Code is not optional in the cloud; it's fundamental",
"Experience is the name everyone gives to their mistakes",
"Treat your servers like cattle, not pets",
"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code",
"In the cloud, you pay for what you use; understanding usage is key to managing cost",
"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away",
"Automate everything that can be automated",
"Simplicity is the soul of efficiency",
"Observability is crucial; if you can't see it, you can't fix it",
"Before software can be reusable it first has to be usable",
"Serverless doesn't mean no servers, it means less server management",
"Make it work, make it right, make it fast",
"Cloud-native is a mindset about speed and agility",
"Programs must be written for people to read, and only incidentally for machines to execute",
"Containers encapsulate dependencies, making deployments predictable",
"Truth can only be found in one place: the code",
"Microservices allow teams to deploy independently and scale granularly",
"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime",
"Fail fast, learn faster, recover quickest",
"The function of good software is to make the complex appear to be simple",
"Security in the cloud is a shared responsibility",
"Testing leads to failure, and failure leads to understanding",
"The goal is not just CI/CD, but continuous improvement",
"Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
"Monitor for business value, not just system metrics",
"There are two ways to write error-free programs; only the third one works",
"Resilience engineering: expect failures and design for them",
"One of my most productive days was throwing away 1000 lines of code",
"Immutable infrastructure leads to more stable systems",
"Its not a bug, its an undocumented feature",
"Embrace chaos engineering to build confidence in your system's resilience",
"The only way to learn a new programming language is by writing programs in it",
"Data gravity is real; compute often moves to the data",
"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it",
"Vendor lock-in is a trade-off; understand the costs and benefits",
"Programming isn't about what you know; it's about what you can figure out",
"APIs are the building blocks of modern cloud applications",
"The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do",
"Configuration management prevents configuration drift",
"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
"Distributed systems are complex; simplify where you can",
"Talk is cheap. Show me the code",
"Latency is the silent killer of performance",
"In order to understand recursion, one must first understand recursion",
"Design for failure, not just success",
"Measuring programming progress by lines of code is like measuring aircraft building progress by weight",
"Everything fails all the time",
"If debugging is the process of removing software bugs, then programming must be the process of putting them in",
"Measure twice, cut once applies to cloud resource provisioning",
"The best error message is the one that never shows up",
"The twelve-factor app methodology provides a solid baseline for cloud-native apps",
"Don't comment bad code, rewrite it",
"Understand your blast radius when designing systems",
"A language that doesn't affect the way you think about programming is not worth knowing",
"Event-driven architectures enable loosely coupled systems",
"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late",


];


// Get the allowed URL from an environment variable
// We will set this variable in Dokploy
const FRONTEND_URL = process.env.FRONTEND_URL; 

app.use(cors({
  origin: FRONTEND_URL
}));
// Be specific about who can use your API
// const VERCEL_FRONTEND_URL = 'https://quote-frontend-three.vercel.app'; 

// app.use(cors({
//   origin: VERCEL_FRONTEND_URL
// }));
// app.use(cors());
//Render sets the PORT environment variable.
const PORT = process.env.PORT || 3000;

// Endpoint for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Quote API! Visit /quote for a random quote.');
});

// Endpoint for a random quote
app.get('/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});