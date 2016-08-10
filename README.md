Sherpa Tutorial
---

Welcome. This is the client facing portion of Project Sherpa, which works
in tandem with the git repository to teach developers about scalability.

Rough Draft:
-Branch Code
-Improvement Code
-What it does (goal, how, why)
-The stats, benchmarks, improvements


Docker - First install docker then:
---

Build Docker image from directory wherere Dockerfile resides in:
docker build -t sherpa/node-web-app .

Then run with:
```
docker run -p 4000:4000 -d sherpa/node-web-app
```

You can check if its running by typing 
docker ps

Start
---

```
npm start
```

Setup
---

```
npm install
```

Compile
---

```
npm run compile
```
