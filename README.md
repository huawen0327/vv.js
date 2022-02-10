# vv.js

-------------

一个前端响应式框架玩具，通过操作实际dom渲染页面

### 使用方式: 
#### if
```html
<div vv.if="this.person.age !== 18">vv.if</div>
```
#### click
```html
<h2 vv.click="this.clickFn()">click</h2>
```
#### text
```html
<h1>{{name}}</h1>
```
### 完整demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <link rel="icon" type="image/svg+xml" href="favicon.svg"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vite App</title>
</head>
<body>
<div vv>
  <div vv.if="this.person.age !== 18">vv.if</div>
  <h1>{{name}}</h1>
  <h2 vv.click="this.clickFn()">click</h2>
</div>
<script type="module">
  import app from './src/app'

  window.app = new app({
    name: 'hello vv.js',
    person: {
      age: 18,
      gender: 'man'
    },
    clickFn: function () {
      alert(this.name)
    },
    test: function (val) {
      console.log(`age: ${this.person.age}; val: ${val}`)
      this.person.age = val
      console.log('age: ' + this.person.age)
    }
  });
</script>
</body>
</html>
```
