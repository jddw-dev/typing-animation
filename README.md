# jddw/typing-animation

A simple React component that display texts using a typing animation
Basically, it starts from blank then display letter by letter ; once the word is displayed, it pauses for some seconds, then goes the way back.
You can have multiple words to display, in this case they will be displayed one by one (and looping again at the end).

## How to use

- `npm install @jddw/typing-animation`

Then import in your source files :

```
import TypingAnimation from 'jddw/typing-animation'
```

## Usage

You just have to pass an array of words to the component :

```
const words = ['word1', 'word2', 'word3']
<TypingAnimation words={words} />
```

If you want to display a single word, you still have to use an array :

```
const word = 'test'
<TypingAnimation words={ [word] } />
```
