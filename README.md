## Reproduction Steps

1. Install packages

```sh
npm install
```

2. Run the `start` command

```sh
npm start --verbose
```

3. Input your MotherDuck token when prompted

```sh
❯ node .\index.js
┌  Motherduck Windows Reproduction
│
◇  Input your motherduck token
│  eyJhbGciOiJIUzI1NiIsInR5cC...
```

4. Observe the process exits with code `3221225477` instead of running successfully

Expected outcome

```sh
Expected outcome (Run on MacOS 14.6.1, Node v20.9.0, NPM 10.1.0)
┌  Motherduck Windows Reproduction
│
◇  Input your motherduck token
│  [token redacted]
│
◇  Query Ran Successfully
│
└  Done
```

Actual outcome

```sh
npm verbose cwd C:\Users\zachs\code\evidence\repros\windows-motherduck-sources-failure
npm verbose os Windows_NT 10.0.19045
npm verbose node v20.18.0
npm verbose npm  v10.8.2
npm verbose exit 3221225477
npm verbose code 3221225477
```

## Environment Info
```
  System:
    OS: Windows 10 10.0.19045
    CPU: (12) x64 AMD Ryzen 5 5600X 6-Core Processor
    Memory: 35.01 GB / 63.93 GB
  Binaries:
    Node: 20.18.0 - C:\Program Files\nodejs\node.EXE
    npm: 10.8.2 - C:\Program Files\nodejs\npm.CMD
  Managers:
    pip3: 22.3.1 - ~\AppData\Local\Programs\Python\Python39\Scripts\pip3.EXE
  Languages:
    Bash: 5.1.16 - C:\Windows\system32\bash.EXE
    Go: 1.19 - C:\Program Files\Go\bin\go.EXE
    Python: 3.9.13
```