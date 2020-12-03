
# ramda.js api 速查
## 目录
* [一、比较运算](#8d99c8bbe78cd2bc60cd514ce39c19d6)
    * [gt：判断第一个参数是否大于第二个参数。](#8e3f376dfe1b7e6b65aa87da1c83e89b)
    * [gte：判断第一个参数是否大于等于第二个参数。](#b2eba5d2a4224c02a7531951a9ab0ca7)
    * [lt：判断第一个参数是否小于第二个参数。](#e77702ab36ab6ca64774baeae706853c)
    * [lte：判断第一个参数是否小于等于第二个参数。](#cdb4eb65e49c31c073184ad88f7c2a85)
    * [equals：比较两个值是否相等（支持对象的比较）。](#d2fbc35a21d63f6ab9968bef4779078e)
    * [eqBy：比较两个值传入指定函数的运算结果是否相等。](#b4435f5649406a3a1ed4f5832d708590)
* [二、数学运算](#f556a98e5e8a5a6adbec28394bc5c9a6)
    * [add：返回两个值的和。](#1a89c98b064a7a43c6e74a9921e304af)
    * [subtract：返回第一个参数减第二个参数的差。](#3e290d34929c6a8997b2add36499f236)
    * [multiply：返回两个值的积。](#067dc171a441d1c8c52a406e8f31c66a)
    * [divide：返回第一个参数除以第二个参数的商。](#22d89dd783b3c92adeba59d9184e0ab7)
* [三、逻辑运算](#003dc693365d4fc2061856235d7fb2c9)
    * [either：接受两个函数作为参数，只要有一个返回true，就返回true，否则返回false。相当于||运算。](#3b2ecbfc0e2af01b068ba517201ffb69)
    * [both：接受两个函数作为参数，只有它们都返回true，才返回true，否则返回false，相当于&&运算。](#1aa2f6d2c2b88630fae2b742cd972a1e)
    * [allPass：接受一个函数数组作为参数，只有它们都返回true，才返回true，否则返回false。](#b1904c6989c908b0b4ddd5c178317af2)
* [四、字符串](#19587f5cabfd0c5d9dddb64db4c4dba7)
    * [split：按照指定分隔符将字符串拆成一个数组。](#6b1de2e21004f64b1077892ca3379ef2)
    * [test：判断一个字符串是否匹配给定的正则表达式。](#c1e5f0656a3156fade0200048c33b116)
    * [match：返回一个字符串的匹配结果。](#2801d541359dc4bf688707d84ddc8892)
* [五、函数](#46a4436d08e3ef6d6097998a6aa5adf6)
    * [compose：将多个函数合并成一个函数，从右到左执行。](#1e1fffcdb7e95ddaeb20dae8015e5ebb)
    * [pipe：将多个函数合并成一个函数，从左到右执行。](#4629691cad4139bf13927c61deeaa2ca)
    * [converge：接受两个参数，第一个参数是函数，第二个参数是函数数组。传入的值先使用第二个参数包含的函数分别处理以后，再用第一个参数处理前一步生成的结果。](#5c4280374e8462e435ad57bdb1e6a4b8)
    * [curry：将多参数的函数，转换成单参数的形式。](#890e93f273ffd1cc93b0aadcf049c25d)
    * [partial：允许多参数的函数接受一个数组，指定最左边的部分参数。](#a6c41288c35ae6564cb32febbcd69bd6)
    * [partialRight：与partial类似，但数组指定的参数为最右边的参数。](#50e162e2e62d15448fccabd45fea57f2)
    * [useWith：接受一个函数fn和一个函数数组fnList作为参数，返回fn的柯里化版本。该新函数的参数，先分别经过对应的fnList成员处理，再传入fn执行。](#10e24593ac57d46cff8de22ee1583503)
    * [memoize：返回一个函数，会缓存每一次的运行结果。](#4c06c3af77cdfab60c1aa49524043a17)
    * [complement：返回一个新函数，如果原函数返回true，该函数返回false；如果原函数返回false，该函数返回true。](#7452f5ad442177fa71dcbf44b386dd74)
    * [binary：参数函数执行时，只传入最前面两个参数。](#edfae10b21b77271725cea9ed3e0eaa3)
    * [tap：将一个值传入指定函数，并返回该值。](#c6fdecb8e654ea45f32d707c82ae65cc)
    * [zipWith：将两个数组对应位置的值，一起作为参数传入某个函数。](#f6f5344e84591a9c7b3273224cd62e29)
    * [apply：将数组转成参数序列，传入指定函数。](#c1f47f2522457ae2378328df8ed920d9)
    * [applySpec：返回一个模板函数，该函数会将参数传入模板内的函数执行，然后将执行结果填充到模板。](#71c3e83fb9235695292d7b5b74f609f4)
    * [ascend：返回一个升序排列的比较函数，主要用于排序。](#13646c31af8c461987a09b575d215475)
    * [descend：返回一个降序排列的比较函数，主要用于排序。](#78aad819d7049da85d0032fb2ffdfb16)
* [六、数组](#a22a429c9ee3333647b882d9b8b5028d)
    * [contains：如果包含某个成员，返回true。](#96f22c8d3ba7b33e7432d5d0cf91ba1d)
    * [all：所有成员都满足指定函数时，返回true，否则返回false](#c7184d27651ca2386b6f467a9762c0e9)
    * [any：只要有一个成员满足条件，就返回true。](#4a1cfd140ba96395ecb578c5232c9054)
    * [none：没有成员满足条件时，返回true。](#7ce4ed584a6d9d8714f82306c7cade43)
    * [head：返回数组的第一个成员。](#47cd45f5ccdf91627f1524f2b27898ad)
    * [last：返回数组的最后一个成员。](#62db7a92f14ee8c9083b97dc4487e2bc)
    * [tail：返回第一个成员以外的所有成员组成的新数组。](#ccc1ebb1a5aaa9bd49216ed32fbf1a77)
    * [init：返回最后一个成员以外的所有成员组成的新数组。](#be39b0cf0857b12c0ebe334c5d0cf13d)
    * [nth：取出指定位置的成员。](#1f5cd3f4cfa0b04d83b9661b0b39f9ab)
    * [take：取出前 n 个成员。](#c40bd000dbb420775ddb847d5a3ca4cb)
    * [takeLast：取出后 n 个成员。](#6a8a1a6e23d5d85ddfde2457575a1296)
    * [slice：从起始位置（包括）开始，到结束位置（不包括）为止，从原数组截取出一个新数组。](#f23936c14df467373705a5ab8d43263c)
    * [remove：移除开始位置后的n个成员。](#1a9a9b3b7e760ecde910e8f66278ea42)
    * [insert：在指定位置插入给定值。](#092f4112267986425eb02f85e4d8a194)
    * [insertAll：在指定位置，插入另一个数组的所有成员。](#50cd97eda054b912f40c68c3c3e52701)
    * [prepend：在数组头部插入一个成员](#f7dde402c53cf8b5a6dbb7d5e1850719)
    * [append：在数组尾部追加新的成员。](#002a157783dbb1009da4c249a739c46f)
    * [intersperse：在数组成员之间插入表示分隔的成员。](#3421e9dd7789f932dff0e095e171adf7)
    * [join：将数组合并成一个字符串，并在成员之间插入分隔符。](#0235e6932efc89f97918a1abfc32a3a3)
    * [filter：过滤出符合条件的成员。](#4394308a229129c4937490df96cc8d91)
    * [reject：过滤出所有不满足条件的成员。](#d320e0a56b8d4fe1cc85bf03e740f13d)
    * [takeWhile： 一旦满足条件，后面的成员都会被过滤。](#df63111d59190c45a77cac3c067ddfb0)
    * [dropWhile：一旦不满足条件，取出剩余的所有成员。](#768fd4739b28bc3619e8cff2de895df8)
    * [without：返回指定值以外的成员。](#b9f0d13bae3a25673a1fdad9a4544e40)
    * [countBy：对每个成员执行指定函数以后，返回一个对象，表示各种执行结果分别包含多少成员。](#57c54731a405d2bd4c3df20d489c4f79)
    * [splitAt：在给定位置，将原数组分成两个部分。](#0946237bb1637e0c05d23d60a02cff14)
    * [splitEvery：按照指定的个数，将原数组分成多个部分。](#f6676a990be9d36a690754ab5b9eab7b)
    * [splitWhen：以第一个满足指定函数的成员为界，将数组分成两个部分。](#756a4c15c725f305545002be990cb467)
    * [aperture：每个成员与其后给定数量的成员分成一组，这些组构成一个新的数组。](#b0b017e12fd05a2f56e45623c8e0c486)
    * [partition：根据是否满足指定函数，将成员分区。](#b63f9cc3d7de50a1861fb9808d3f392f)
    * [indexOf：某个值在数组中第一次出现的位置。](#c4fb616fb682c19c5e49296208f4d041)
    * [lastIndexOf：某个值在数组中最后一次出现的位置。](#20263a68522c8441034e716a988bb1fe)
    * [map：数组的每个成员依次执行某个函数。](#cfc3d5f3cdc3a05fed5a39e0488de33a)
    * [mapIndexed：与map类似，区别是遍历函数可以额外获得两个参数：索引位置和原数组。](#baeb694dd40e7020373d996b17373d45)
    * [forEach：数组的每个成员依次执行某个函数，总是返回原数组。](#409d226ba0789aaf6dc3faa22541af48)
    * [reduce：数组成员依次执行指定函数，每一次的运算结果都会进入一个累积变量。](#c7449bcf95d25ba29005899eee55f9ab)
    * [reduceRight：与reduce类似，区别是数组成员从左到右执行。](#3af9a88f5265254ee9155f9353be5903)
    * [reduceWhile：与reduce类似，区别是有一个判断函数，一旦数组成员不符合条件，就停止累积。](#5333dc76852756f1bae2d478774207ac)
    * [sort：按照给定函数，对数组进行排序。](#87ca101665f4bc1698b82a6e9e9e7c85)
    * [sortWith：按照给定的一组函数，进行多重排序。](#4fb92c39fa2f1d5a65711b1132fb1547)
    * [adjust：对指定位置的成员执行给定的函数。](#d88b3d2adad4f30481e77a484d448fa3)
    * [ap：数组成员分别执行一组函数，将结果合成为一个新数组。](#08ae8bfbe5c9ed58c2b9b69809dd6096)
    * [flatten：将嵌套数组铺平。](#7ef807ca3f677d39c89adb64029ba4af)
    * [groupBy：将数组成员依次按照指定条件两两比较，并按照结果将所有成员放入子数组。](#e91dd5a2a73c8dc40ee6e6dce064d709)
    * [concat：将两个数组合并成一个数组。](#0673ab83ccd2c362256f4065a655e611)
    * [zip：将两个数组指定位置的成员放在一起，生成一个新数组。](#513ffa9f5fcb03848a196896d62f2260)
    * [zipObj：将两个数组指定位置的成员分别作为键名和键值，生成一个新对象。](#b28e89cd54a0e40a13dcff1b269ba6f7)
    * [xprod：将两个数组的成员两两混合，生成一个新数组。](#f5c6173bbc7d0515626bf841881a197d)
    * [intersection：返回两个数组相同的成员组成的新数组。](#3810b95f02ad5a5f7cde0f08f2ed89fa)
    * [intersectionWith：返回经过某种运算，有相同结果的两个成员。](#118927c3d40d552103f25b6c9e512b5d)
    * [difference：返回第一个数组不包含在第二个数组里面的成员。](#79087493b34fccee1f9dbc4f9dd9ca8f)
    * [differenceWith：返回执行指定函数后，第一个数组里面不符合条件的所有成员。](#e3bee1ba008b399c6868b3cb17fc88ca)
    * [symmetricDifference：返回两个数组的非共有成员所组成的一个新数组。](#40d63ace61f108c31caf1c709d94b156)
    * [symmetricDifferenceWith：根据指定条件，返回两个数组所有运算结果不相等的成员所组成的新数组。](#626f7311d0d4c1677481dde1d539922d)
    * [find：返回符合指定条件的成员。](#8012c93e3e877672f3efdc8c0faf20b2)
    * [findIndex：返回符合指定条件的成员的位置。](#4d044cf7ea420ec3cd3631528b5b0bc0)
    * [findLast：返回最后一个符合指定条件的成员。](#1851bbd48e159213882474a1a74a7715)
    * [findLastIndex：返回最后一个符合指定条件的成员的位置。](#675faca028d8223c3e25b39800506fe6)
    * [pluck：取出数组成员的某个属性，组成一个新数组。](#f964f9d11acb322d680641d46e2847a6)
    * [project：取出数组成员的多个属性，组成一个新数组。](#2e2e88ed4652a5c8d61791ecf1dfabdf)
    * [transpose：将每个成员相同位置的值，组成一个新数组。](#fc09baf2b1452d7d035492f34b129085)
    * [mergeAll：将数组的成员合并成一个对象。](#8823a29e1ad5788ad3eee418d6b4a6cc)
    * [fromPairs：将嵌套数组转为一个对象。](#da54a162da5ce572460e0d45da98299c)
    * [groupBy：将数组成员按照指定条件分组。](#3ed52d06bd1b164bb47887452ec7a00f)
    * [sortBy：根据成员的某个属性排序。](#bf81ca0d5b4f2ff60d1e27c9c33b6436)
* [七、对象](#d56ce891ef305c58a00a5d5884c1e200)
    * [has: 返回一个布尔值，表示对象自身是否具有该属性。](#05df45fa1de793ad1c0d48040ada9a64)
    * [hasIn：返回一个布尔值，表示对象自身或原型链上是否具有某个属性。](#6977cfe03f34840f7433b8c6692a70e0)
    * [propEq：如果属性等于给定值，返回true。](#68d8202f4eac82144eaf3342af43236b)
    * [whereEq：如果属性等于给定值，返回true。](#6a8a5c2621ac33e49b2d773addfbdf29)
    * [where：如果各个属性都符合指定条件，返回true。](#827a3f25dcaf867c9910373798e0125a)
    * [omit：过滤指定属性。](#438043307f20f7e18de9f7ebbc33707c)
    * [filter：返回所有满足条件的属性](#650e8741a33c251581fffc879b230a89)
    * [reject：返回所有不满足条件的属性](#cf4654bc63eb33c528d0e5e59884d85f)
    * [dissoc：过滤指定属性。](#50ea8192c112a4fa9f5d29b45afe007a)
    * [assoc：添加或改写某个属性。](#f9d8bdfc9658fd1a2c4fb0066dafb4b9)
    * [partition：根据属性值是否满足给定条件，将属性分区。](#252279fc2674337bb6ac559a364abed1)
    * [pick：返回指定属性组成的新对象](#62db53f818b50b9c4e627ccddcf57ca8)
    * [pickAll：与pick类似，但会包括不存在的属性。](#93a50dd983f99d27e9228b6c42342e09)
    * [pickBy：返回符合条件的属性](#8692b7c2b25258f8e37c2ed4894530e7)
    * [keys：返回对象自身属性的属性名组成的新数组。](#4da36d05a076c77ba916bd2ec6964fa8)
    * [keysIn：返回对象自身的和继承的属性的属性名组成的新数组。](#b80b5aeea55cec641e94b5a0730ef0b0)
    * [values：返回对象自身的属性的属性值组成的数组。](#18dba895123b5d5af2d73753ce3b9c0d)
    * [valuesIn：返回对象自身的和继承的属性的属性值组成的数组。](#426d42b409a561ebd0c50743604ac9d3)
    * [invertObj：将属性值和属性名互换。如果多个属性的属性值相同，只返回最后一个属性。](#6d23ee1df7467492b4e888aae3829999)
    * [invert：将属性值和属性名互换，每个属性值对应一个数组。](#e05b26f6d3bcb165186863ab344468f5)
    * [prop：返回对象的指定属性](#b3607e8bd1ad704a2f86222cc3bb8b84)
    * [map：对象的所有属性依次执行某个函数。](#c91aa4db3a80a0ce52415dcbce6eb072)
    * [mapObjIndexed：与map类似，但是会额外传入属性名和整个对象。](#22a6e879c7ce84949b3f38449701949f)
    * [forEachObjIndexed：每个属性依次执行给定函数，给定函数的参数分别是属性值和属性名，返回原对象。](#37a48235b2fe9ce592a058dde6133cab)
    * [merge：合并两个对象，如果有同名属性，后面的值会覆盖掉前面的值。](#ac1f0cf2aa080dfeb5da6ef5fe3ec97b)
    * [mergeWith：合并两个对象，如果有同名属性，会使用指定的函数处理。](#e71a5bd244dcee74089dadb0ed225303)
    * [eqProps：比较两个对象的指定属性是否相等。](#13002dc97fcd1a2abc925282f3fd336a)
    * [R.evolve：对象的属性分别经过一组函数的处理，返回一个新对象。](#d0cd71ae6aa05f14694fa7a5caeb0626)
    * [path：取出数组中指定路径的值。](#1260e9ca20b90d6c4a1b196479aade33)
    * [pathEq：返回指定路径的值符合条件的成员](#4a9d2dd59196ea38724dac8a22f92271)
    * [assocPath：添加或改写指定路径的属性的值。](#26fcb878700f287bfc46cf3abfdc4132)

### 一、比较运算
* <span id='8e3f376dfe1b7e6b65aa87da1c83e89b'>gt：判断第一个参数是否大于第二个参数。</span>

```javascript
R.gt(2)(1) // true
R.gt('a')('z') // false
```

* <span id='b2eba5d2a4224c02a7531951a9ab0ca7'>gte：判断第一个参数是否大于等于第二个参数。</span>

```javascript
R.gte(2)(2) // true
R.gte('a')('z') // false
```

* <span id='e77702ab36ab6ca64774baeae706853c'>lt：判断第一个参数是否小于第二个参数。</span>

```javascript
R.lt(2)(1) // false
R.lt('a')('z') // true
```

* <span id='cdb4eb65e49c31c073184ad88f7c2a85'>lte：判断第一个参数是否小于等于第二个参数。</span>

```javascript
R.lte(2)(2) // true
R.lte('a')('z') // true
```

* <span id='d2fbc35a21d63f6ab9968bef4779078e'>equals：比较两个值是否相等（支持对象的比较）。</span>

```javascript
R.equals(1)(1) // true
R.equals(1)('1') // false`在这里插入代码片`
R.equals([1, 2, 3])([1, 2, 3]) // true

var a = {};
a.v = a;
var b = {};
b.v = b;
R.equals(a)(b)
// true
```

* <span id='b4435f5649406a3a1ed4f5832d708590'>eqBy：比较两个值传入指定函数的运算结果是否相等。</span>

```javascript
R.eqBy(Math.abs, 5)(-5)
// true
```

### 二、数学运算
* <span id='1a89c98b064a7a43c6e74a9921e304af'>add：返回两个值的和。</span>

```javascript
R.add(7)(10) // 17
```

* <span id='3e290d34929c6a8997b2add36499f236'>subtract：返回第一个参数减第二个参数的差。</span>

```javascript
R.subtract(10)(8) // 2
```

* <span id='067dc171a441d1c8c52a406e8f31c66a'>multiply：返回两个值的积。</span>

```javascript
R.multiply(2)(5) // 10
```

* <span id='22d89dd783b3c92adeba59d9184e0ab7'>divide：返回第一个参数除以第二个参数的商。</span>

```javascript
R.divide(71)(100) // 0.71
```

### 三、逻辑运算
* <span id='3b2ecbfc0e2af01b068ba517201ffb69'>either：接受两个函数作为参数，只要有一个返回true，就返回true，否则返回false。相当于||运算。</span>

```javascript
var gt10 = x => x > 10;
var even = x => x % 2 === 0;

var f = R.either(gt10, even);
f(101) // true
f(8) // true
```

* <span id='1aa2f6d2c2b88630fae2b742cd972a1e'>both：接受两个函数作为参数，只有它们都返回true，才返回true，否则返回false，相当于&&运算。</span>

```javascript
var gt10 = x => x > 10;
var even = x => x % 2 === 0;

var f = R.both(gt10, even);
f(15) // false
f(30) // true
```

* <span id='b1904c6989c908b0b4ddd5c178317af2'>allPass：接受一个函数数组作为参数，只有它们都返回true，才返回true，否则返回false。</span>

```javascript
var gt10 = x => x > 10;
var even = x => x % 2 === 0;

var isEvenAndGt10 = R.allPass([gt10, even]);
isEvenAndGt10(15) // false
isEvenAndGt10(30) // true
```

### 四、字符串
* <span id='6b1de2e21004f64b1077892ca3379ef2'>split：按照指定分隔符将字符串拆成一个数组。</span>

```javascript
R.split('.')('a.b.c.xyz.d')
// ['a', 'b', 'c', 'xyz', 'd']
```

* <span id='c1e5f0656a3156fade0200048c33b116'>test：判断一个字符串是否匹配给定的正则表达式。</span>

```javascript
R.test(/^x/)('xyz')
// true

R.test(/^y/)('xyz')
// false
```

* <span id='2801d541359dc4bf688707d84ddc8892'>match：返回一个字符串的匹配结果。</span>

```javascript
R.match(/([a-z]a)/g)('bananas')
// ['ba', 'na', 'na']

R.match(/a/)('b')
// []

R.match(/a/)(null)
// TypeError: null does not have a method named "match"
```

### 五、函数

* <span id='1e1fffcdb7e95ddaeb20dae8015e5ebb'>compose：将多个函数合并成一个函数，从右到左执行。</span>

```javascript
R.compose(Math.abs, R.add(1), R.multiply(2))(-4) // 7
```

* <span id='4629691cad4139bf13927c61deeaa2ca'>pipe：将多个函数合并成一个函数，从左到右执行。</span>

```javascript
var negative = x => -1 * x;
var increaseOne = x => x + 1;

var f = R.pipe(Math.pow, negative, increaseOne);
f(3, 4) // -80 => -(3^4) + 1
```

* <span id='5c4280374e8462e435ad57bdb1e6a4b8'>converge：接受两个参数，第一个参数是函数，第二个参数是函数数组。传入的值先使用第二个参数包含的函数分别处理以后，再用第一个参数处理前一步生成的结果。</span>

```javascript
var sumOfArr = arr => {
var sum = 0;
arr.forEach(i => sum += i);
return sum;
};
var lengthOfArr = arr => arr.length;

var average = R.converge(R.divide, [sumOfArr, lengthOfArr])
average([1, 2, 3, 4, 5, 6, 7])
// 4
// 相当于 28 除以 7

var toUpperCase = s => s.toUpperCase();
var toLowerCase = s => s.toLowerCase();
var strangeConcat = R.converge(R.concat, [toUpperCase, toLowerCase])
strangeConcat("Yodel")
// "YODELyodel"
// 相当于 R.concat('YODEL', 'yodel')
```


* <span id='890e93f273ffd1cc93b0aadcf049c25d'>curry：将多参数的函数，转换成单参数的形式。</span>

```javascript
var addFourNumbers = (a, b, c, d) => a + b + c + d;

var curriedAddFourNumbers = R.curry(addFourNumbers);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
g(4) // 10
```

* <span id='a6c41288c35ae6564cb32febbcd69bd6'>partial：允许多参数的函数接受一个数组，指定最左边的部分参数。</span>

```javascript
var multiply2 = (a, b) => a * b;
var double = R.partial(multiply2, [2]);
double(2) // 4

var greet = (salutation, title, firstName, lastName) =>
salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

var sayHello = R.partial(greet, ['Hello']);
var sayHelloToMs = R.partial(sayHello, ['Ms.']);
sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
```

* <span id='50e162e2e62d15448fccabd45fea57f2'>partialRight：与partial类似，但数组指定的参数为最右边的参数。</span>

```javascript
var greet = (salutation, title, firstName, lastName) =>
salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
greetMsJaneJones('Hello') // 'Hello, Ms. Jane Jones!'
```

* <span id='10e24593ac57d46cff8de22ee1583503'>useWith：接受一个函数fn和一个函数数组fnList作为参数，返回fn的柯里化版本。该新函数的参数，先分别经过对应的fnList成员处理，再传入fn执行。</span>

```javascript
var decreaseOne = x => x - 1;
var increaseOne = x => x + 1;

R.useWith(Math.pow, [decreaseOne, increaseOne])(3, 4) // 32
R.useWith(Math.pow, [decreaseOne, increaseOne])(3)(4) // 32
```

* <span id='4c06c3af77cdfab60c1aa49524043a17'>memoize：返回一个函数，会缓存每一次的运行结果。</span>

```javascript
var productOfArr = arr => {
var product = 1;
arr.forEach(i => product *= i);
return product;
};
var count = 0;
var factorial = R.memoize(n => {
count += 1;
return productOfArr(R.range(1, n + 1));
});
factorial(5) // 120
factorial(5) // 120
factorial(5) // 120
count // 1
```

* <span id='7452f5ad442177fa71dcbf44b386dd74'>complement：返回一个新函数，如果原函数返回true，该函数返回false；如果原函数返回false，该函数返回true。</span>

```javascript
var gt10 = x => x > 10;
var lte10 = R.complement(gt10);
gt10(7) // false
lte10(7) // true
```


* <span id='edfae10b21b77271725cea9ed3e0eaa3'>binary：参数函数执行时，只传入最前面两个参数。</span>

```javascript
var takesThreeArgs = function(a, b, c) {
return [a, b, c];
};

var takesTwoArgs = R.binary(takesThreeArgs);
takesTwoArgs(1, 2, 3) // [1, 2, undefined]
```

* <span id='c6fdecb8e654ea45f32d707c82ae65cc'>tap：将一个值传入指定函数，并返回该值。</span>

```javascript
var sayX = x => console.log('x is ' + x);
R.tap(sayX)(100) // 100

R.pipe(
R.assoc('a', 2),
R.tap(console.log),
R.assoc('a', 3)
)({a: 1})
// {a: 3}
```

* <span id='f6f5344e84591a9c7b3273224cd62e29'>zipWith：将两个数组对应位置的值，一起作为参数传入某个函数。</span>

```javascript
var f = (x, y) => {
// ...
};
R.zipWith(f, [1, 2, 3])(['a', 'b', 'c'])
// [f(1, 'a'), f(2, 'b'), f(3, 'c')]
```

* <span id='c1f47f2522457ae2378328df8ed920d9'>apply：将数组转成参数序列，传入指定函数。</span>

```javascript
var nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max)(nums) // 42
```

* <span id='71c3e83fb9235695292d7b5b74f609f4'>applySpec：返回一个模板函数，该函数会将参数传入模板内的函数执行，然后将执行结果填充到模板。</span>

```javascript
var getMetrics = R.applySpec({
sum: R.add,
nested: { mul: R.multiply }
});

getMetrics(2, 4) // { sum: 6, nested: { mul: 8 } }
```

* <span id='13646c31af8c461987a09b575d215475'>ascend：返回一个升序排列的比较函数，主要用于排序。</span>

```javascript
var byAge = R.ascend(R.prop('age'));
var people = [
// ...
];
var peopleByYoungestFirst = R.sort(byAge)(people);
```

* <span id='78aad819d7049da85d0032fb2ffdfb16'>descend：返回一个降序排列的比较函数，主要用于排序。</span>

```javascript
var byAge = R.descend(R.prop('age'));
var people = [
// ...
];
var peopleByOldestFirst = R.sort(byAge)(people);
```

### 六、数组

* <span id='96f22c8d3ba7b33e7432d5d0cf91ba1d'>contains：如果包含某个成员，返回true。</span>

```javascript
R.contains(3)([1, 2, 3]) // true
R.contains(4)([1, 2, 3]) // false
R.contains({ name: 'Fred' })([{ name: 'Fred' }]) // true
R.contains([42])([[42]]) // true
```

* <span id='c7184d27651ca2386b6f467a9762c0e9'>all：所有成员都满足指定函数时，返回true，否则返回false</span>

```javascript
var equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]) // true
R.all(equals3)([3, 3, 1, 3]) // false
```

* <span id='4a1cfd140ba96395ecb578c5232c9054'>any：只要有一个成员满足条件，就返回true。</span>

```javascript
var lessThan0 = R.flip(R.lt)(0);
var lessThan2 = R.flip(R.lt)(2);
R.any(lessThan0)([1, 2]) // false
R.any(lessThan2)([1, 2]) // true
```

* <span id='7ce4ed584a6d9d8714f82306c7cade43'>none：没有成员满足条件时，返回true。</span>

```javascript
var isEven = n => n % 2 === 0;

R.none(isEven)([1, 3, 5, 7, 9, 11]) // true
R.none(isEven)([1, 3, 5, 7, 8, 11]) // false
```


* <span id='47cd45f5ccdf91627f1524f2b27898ad'>head：返回数组的第一个成员。</span>

```javascript
R.head(['fi', 'fo', 'fum']) // 'fi'
R.head([]) // undefined
R.head('abc') // 'a'
R.head('') // ''
```

* <span id='62db7a92f14ee8c9083b97dc4487e2bc'>last：返回数组的最后一个成员。</span>

```javascript
R.last(['fi', 'fo', 'fum']) // 'fum'
R.last([]) // undefined
R.last('abc') // 'c'
R.last('') // ''
```

* <span id='ccc1ebb1a5aaa9bd49216ed32fbf1a77'>tail：返回第一个成员以外的所有成员组成的新数组。</span>

```javascript
R.tail([1, 2, 3]) // [2, 3]
R.tail([1, 2]) // [2]
R.tail([1]) // []
R.tail([]) // []

R.tail('abc') // 'bc'
R.tail('ab') // 'b'
R.tail('a') // ''
R.tail('') // ''
```

* <span id='be39b0cf0857b12c0ebe334c5d0cf13d'>init：返回最后一个成员以外的所有成员组成的新数组。</span>

```javascript
R.init([1, 2, 3]) // [1, 2]
R.init([1, 2]) // [1]
R.init([1]) // []
R.init([]) // []

R.init('abc') // 'ab'
R.init('ab') // 'a'
R.init('a') // ''
R.init('') // ''
```

* <span id='1f5cd3f4cfa0b04d83b9661b0b39f9ab'>nth：取出指定位置的成员。</span>

```javascript
var list = ['foo', 'bar', 'baz', 'quux'];
R.nth(1)(list) // 'bar'
R.nth(-1)(list) // 'quux'
R.nth(-99)(list) // undefined

R.nth(2)('abc') // 'c'
R.nth(3)('abc') // ''
```

* <span id='c40bd000dbb420775ddb847d5a3ca4cb'>take：取出前 n 个成员。</span>

```javascript
R.take(1)(['foo', 'bar', 'baz']) // ['foo']
R.take(2)(['foo', 'bar', 'baz']) // ['foo', 'bar']
R.take(3)(['foo', 'bar', 'baz']) // ['foo', 'bar', 'baz']
R.take(4)(['foo', 'bar', 'baz']) // ['foo', 'bar', 'baz']
R.take(3)('ramda') // 'ram'
```

* <span id='6a8a1a6e23d5d85ddfde2457575a1296'>takeLast：取出后 n 个成员。</span>

```javascript
R.takeLast(1)(['foo', 'bar', 'baz']) // ['baz']
R.takeLast(2)(['foo', 'bar', 'baz']) // ['bar', 'baz']
R.takeLast(3)(['foo', 'bar', 'baz']) // ['foo', 'bar', 'baz']
R.takeLast(4)(['foo', 'bar', 'baz']) // ['foo', 'bar', 'baz']
R.takeLast(3)('ramda') // 'mda'
```

* <span id='f23936c14df467373705a5ab8d43263c'>slice：从起始位置（包括）开始，到结束位置（不包括）为止，从原数组截取出一个新数组。</span>

```javascript
R.slice(1, 3)(['a', 'b', 'c', 'd']) // ['b', 'c']
R.slice(1, Infinity)(['a', 'b', 'c', 'd']) // ['b', 'c', 'd']
R.slice(0, -1)(['a', 'b', 'c', 'd']) // ['a', 'b', 'c']
R.slice(-3, -1)(['a', 'b', 'c', 'd']) // ['b', 'c']
R.slice(0, 3)('ramda') // 'ram'
```

* <span id='1a9a9b3b7e760ecde910e8f66278ea42'>remove：移除开始位置后的n个成员。</span>

```javascript
R.remove(2, 3)([1,2,3,4,5,6,7,8]) // [1,2,6,7,8]
```

* <span id='092f4112267986425eb02f85e4d8a194'>insert：在指定位置插入给定值。</span>

```javascript
R.insert(2, 'x')([1,2,3,4]) // [1,2,'x',3,4]
```

* <span id='50cd97eda054b912f40c68c3c3e52701'>insertAll：在指定位置，插入另一个数组的所有成员。</span>

```javascript
R.insertAll(2，['x','y','z'])([1,2,3,4]) // [1,2,'x','y','z',3,4]
```

* <span id='f7dde402c53cf8b5a6dbb7d5e1850719'>prepend：在数组头部插入一个成员</span>

```javascript
R.prepend('fee')(['fi', 'fo', 'fum'])
// ['fee', 'fi', 'fo', 'fum']
```

* <span id='002a157783dbb1009da4c249a739c46f'>append：在数组尾部追加新的成员。</span>

```javascript
R.append('tests')(['write', 'more']) // ['write', 'more', 'tests']
R.append('tests')([]) // ['tests']
R.append(['tests'])(['write', 'more']) // ['write', 'more', ['tests']]
```

* <span id='3421e9dd7789f932dff0e095e171adf7'>intersperse：在数组成员之间插入表示分隔的成员。</span>

```javascript
R.intersperse('n')(['ba', 'a', 'a'])
// ['ba', 'n', 'a', 'n', 'a']
```

* <span id='0235e6932efc89f97918a1abfc32a3a3'>join：将数组合并成一个字符串，并在成员之间插入分隔符。</span>

```javascript
R.join('|')([1, 2, 3]) // '1|2|3'
```


* <span id='4394308a229129c4937490df96cc8d91'>filter：过滤出符合条件的成员。</span>

```javascript
var isEven = n => n % 2 === 0;
R.filter(isEven)([1, 2, 3, 4]) // [2, 4]
```

* <span id='d320e0a56b8d4fe1cc85bf03e740f13d'>reject：过滤出所有不满足条件的成员。</span>

```javascript
var isOdd = (n) => n % 2 === 1;
R.reject(isOdd)([1, 2, 3, 4]) // [2, 4]
```

* <span id='df63111d59190c45a77cac3c067ddfb0'>takeWhile： 一旦满足条件，后面的成员都会被过滤。</span>

```javascript
var isNotFour = x => x !== 4;
R.takeWhile(isNotFour)([1, 2, 3, 4, 3, 2, 1]) // [1, 2, 3]
```

* <span id='768fd4739b28bc3619e8cff2de895df8'>dropWhile：一旦不满足条件，取出剩余的所有成员。</span>

```javascript
var lteTwo = x => x <= 2;
R.dropWhile(lteTwo)([1, 2, 3, 4, 3, 2, 1])
// [3, 4, 3, 2, 1]
```

* <span id='b9f0d13bae3a25673a1fdad9a4544e40'>without：返回指定值以外的成员。</span>

```javascript
R.without([1, 2])([1, 2, 1, 3, 4])
// [3, 4]
```


* <span id='57c54731a405d2bd4c3df20d489c4f79'>countBy：对每个成员执行指定函数以后，返回一个对象，表示各种执行结果分别包含多少成员。</span>

```javascript
var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
R.countBy(Math.floor)(numbers) // {'1': 3, '2': 2, '3': 1}

var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
R.countBy(R.toLower)(letters) // {'a': 3, 'b': 2, 'c': 1}
```

* <span id='0946237bb1637e0c05d23d60a02cff14'>splitAt：在给定位置，将原数组分成两个部分。</span>

```javascript
R.splitAt(1)([1, 2, 3]) // [[1], [2, 3]]
R.splitAt(5)('hello world') // ['hello', ' world']
R.splitAt(-1)('foobar') // ['fooba', 'r']
```

* <span id='f6676a990be9d36a690754ab5b9eab7b'>splitEvery：按照指定的个数，将原数组分成多个部分。</span>

```javascript
R.splitEvery(3)([1, 2, 3, 4, 5, 6, 7])
// [[1, 2, 3], [4, 5, 6], [7]]

R.splitEvery(3)('foobarbaz')
// ['foo', 'bar', 'baz']
```

* <span id='756a4c15c725f305545002be990cb467'>splitWhen：以第一个满足指定函数的成员为界，将数组分成两个部分。</span>

```javascript
R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3])
// [[1], [2, 3, 1, 2, 3]]
```

* <span id='b0b017e12fd05a2f56e45623c8e0c486'>aperture：每个成员与其后给定数量的成员分成一组，这些组构成一个新的数组。</span>

```javascript
R.aperture(3)([1, 2, 3, 4, 5, 6, 7])
// [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]
```

* <span id='b63f9cc3d7de50a1861fb9808d3f392f'>partition：根据是否满足指定函数，将成员分区。</span>

```javascript
R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars'])
// => [ [ 'sss', 'bars' ], [ 'ttt', 'foo' ] ]
```

* <span id='c4fb616fb682c19c5e49296208f4d041'>indexOf：某个值在数组中第一次出现的位置。</span>

```javascript
R.indexOf(3)([1,2,3,4]) // 2
R.indexOf(10)([1,2,3,4]) // -1
```

* <span id='20263a68522c8441034e716a988bb1fe'>lastIndexOf：某个值在数组中最后一次出现的位置。</span>

```javascript
R.lastIndexOf(3)([-1,3,3,0,1,2,3,4]) // 6
R.lastIndexOf(10)([1,2,3,4]) // -1
```

* <span id='cfc3d5f3cdc3a05fed5a39e0488de33a'>map：数组的每个成员依次执行某个函数。</span>

```javascript
var double = x => x * 2;
R.map(double)([1, 2, 3]) // [2, 4, 6]
```

* <span id='baeb694dd40e7020373d996b17373d45'>mapIndexed：与map类似，区别是遍历函数可以额外获得两个参数：索引位置和原数组。</span>

```javascript
var mapIndexed = R.addIndex(R.map);
mapIndexed(
(val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']
)
// ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
```

* <span id='409d226ba0789aaf6dc3faa22541af48'>forEach：数组的每个成员依次执行某个函数，总是返回原数组。</span>

```javascript
var printXPlusFive = x => console.log(x + 5);
R.forEach(printXPlusFive, [1, 2, 3]) // [1, 2, 3]
// logs 6
// logs 7
// logs 8
```

* <span id='c7449bcf95d25ba29005899eee55f9ab'>reduce：数组成员依次执行指定函数，每一次的运算结果都会进入一个累积变量。</span>

```javascript
var mySubtract = function (a, b) {
return a - b;
};
R.reduce(mySubtract, 0)([1, 2, 3, 4]) // -10
```

* <span id='3af9a88f5265254ee9155f9353be5903'>reduceRight：与reduce类似，区别是数组成员从左到右执行。</span>

```javascript
R.reduceRight(R.subtract, 0)([1, 2, 3, 4]) // -2
```

* <span id='5333dc76852756f1bae2d478774207ac'>reduceWhile：与reduce类似，区别是有一个判断函数，一旦数组成员不符合条件，就停止累积。</span>

```javascript
var isOdd = (acc, x) => x % 2 === 1;
var xs = [1, 3, 5, 60, 777, 800];
R.reduceWhile(isOdd, R.add, 0)(xs) // 9

var ys = [2, 4, 6];
R.reduceWhile(isOdd, R.add, 111)(ys) // 111
```

* <span id='87ca101665f4bc1698b82a6e9e9e7c85'>sort：按照给定函数，对数组进行排序。</span>

```javascript
var diff = function(a, b) { return a - b; };
R.sort(diff)([4,2,7,5])
// [2, 4, 5, 7]
```

* <span id='4fb92c39fa2f1d5a65711b1132fb1547'>sortWith：按照给定的一组函数，进行多重排序。</span>

```javascript
var alice = {
name: 'alice',
age: 40
};
var bob = {
name: 'bob',
age: 30
};
var clara = {
name: 'clara',
age: 40
};
var people = [clara, bob, alice];
var ageNameSort = R.sortWith([
R.descend(R.prop('age')),
R.ascend(R.prop('name'))
]);
ageNameSort(people); //=> [alice, clara, bob]
```

* <span id='d88b3d2adad4f30481e77a484d448fa3'>adjust：对指定位置的成员执行给定的函数。</span>

```javascript
R.adjust(R.add(10), 1)([1, 2, 3]) // [1, 12, 3]
R.adjust(R.add(10)，1)([1, 2, 3]) // [1, 12, 3]
```

* <span id='08ae8bfbe5c9ed58c2b9b69809dd6096'>ap：数组成员分别执行一组函数，将结果合成为一个新数组。</span>

```javascript
R.ap([R.multiply(2), R.add(3)])([1,2,3])
// [2, 4, 6, 4, 5, 6]

R.ap([R.concat('tasty '), R.toUpper])(['pizza', 'salad'])
// ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
```

* <span id='7ef807ca3f677d39c89adb64029ba4af'>flatten：将嵌套数组铺平。</span>

```javascript
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

* <span id='e91dd5a2a73c8dc40ee6e6dce064d709'>groupBy：将数组成员依次按照指定条件两两比较，并按照结果将所有成员放入子数组。</span>

```javascript
R.groupWith(R.equals)([0, 1, 1, 2, 3, 5, 8, 13, 21])
// [[0], [1, 1], [2], [3], [5], [8], [13], [21]]

R.groupWith((a, b) => a % 2 === b % 2)([0, 1, 1, 2, 3, 5, 8, 13, 21])
// [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

R.groupWith(R.eqBy(isVowel), 'aestiou')
//=> ['ae', 'st', 'iou']
```


* <span id='0673ab83ccd2c362256f4065a655e611'>concat：将两个数组合并成一个数组。</span>

```javascript
R.concat('ABC')('DEF') // 'ABCDEF'
R.concat([4, 5, 6])([1, 2, 3]) // [4, 5, 6, 1, 2, 3]
R.concat([])([]) // []
```

* <span id='513ffa9f5fcb03848a196896d62f2260'>zip：将两个数组指定位置的成员放在一起，生成一个新数组。</span>

```javascript
R.zip([1, 2, 3])(['a', 'b', 'c'])
// [[1, 'a'], [2, 'b'], [3, 'c']]
```

* <span id='b28e89cd54a0e40a13dcff1b269ba6f7'>zipObj：将两个数组指定位置的成员分别作为键名和键值，生成一个新对象。</span>

```javascript
R.zipObj(['a', 'b', 'c'])([1, 2, 3])
// {a: 1, b: 2, c: 3}
```

* <span id='f5c6173bbc7d0515626bf841881a197d'>xprod：将两个数组的成员两两混合，生成一个新数组。</span>

```javascript
R.xprod([1, 2])(['a', 'b'])
// [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

* <span id='3810b95f02ad5a5f7cde0f08f2ed89fa'>intersection：返回两个数组相同的成员组成的新数组。</span>

```javascript
R.intersection([1,2,3,4], [7,6,5,4,3]) // [4, 3]
```

* <span id='118927c3d40d552103f25b6c9e512b5d'>intersectionWith：返回经过某种运算，有相同结果的两个成员。</span>

```javascript
var buffaloSpringfield = [
{id: 824, name: 'Richie Furay'},
{id: 956, name: 'Dewey Martin'},
{id: 313, name: 'Bruce Palmer'},
{id: 456, name: 'Stephen Stills'},
{id: 177, name: 'Neil Young'}
];
var csny = [
{id: 204, name: 'David Crosby'},
{id: 456, name: 'Stephen Stills'},
{id: 539, name: 'Graham Nash'},
{id: 177, name: 'Neil Young'}
];

R.intersectionWith(R.eqBy(R.prop('id'))，buffaloSpringfield)(csny)
// [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
```

* <span id='79087493b34fccee1f9dbc4f9dd9ca8f'>difference：返回第一个数组不包含在第二个数组里面的成员。</span>

```javascript
R.difference([1,2,3,4])([7,6,5,4,3]) // [1,2]
R.difference([7,6,5,4,3])([1,2,3,4]) // [7,6,5]
R.difference([{a: 1}, {b: 2}])([{a: 1}, {c: 3}]) // [{b: 2}]
```

* <span id='e3bee1ba008b399c6868b3cb17fc88ca'>differenceWith：返回执行指定函数后，第一个数组里面不符合条件的所有成员。</span>

```javascript
var cmp = (x, y) => x.a === y.a;
var l1 = [{a: 1}, {a: 2}, {a: 3}];
var l2 = [{a: 3}, {a: 4}];
R.differenceWith(cmp, l1)(l2) // [{a: 1}, {a: 2}]
```

* <span id='40d63ace61f108c31caf1c709d94b156'>symmetricDifference：返回两个数组的非共有成员所组成的一个新数组。</span>

```javascript
R.symmetricDifference([1,2,3,4])([7,6,5,4,3]) // [1,2,7,6,5]
R.symmetricDifference([7,6,5,4,3])([1,2,3,4]) // [7,6,5,1,2]
```

* <span id='626f7311d0d4c1677481dde1d539922d'>symmetricDifferenceWith：根据指定条件，返回两个数组所有运算结果不相等的成员所组成的新数组。</span>

```javascript
var eqA = R.eqBy(R.prop('a'));
var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
R.symmetricDifferenceWith(eqA, l1, l2) // [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
```


* <span id='8012c93e3e877672f3efdc8c0faf20b2'>find：返回符合指定条件的成员。</span>

```javascript
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(xs) // {a: 2}
R.find(R.propEq('a', 4))(xs) // undefined
```

* <span id='4d044cf7ea420ec3cd3631528b5b0bc0'>findIndex：返回符合指定条件的成员的位置。</span>

```javascript
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.findIndex(R.propEq('a', 2))(xs) // 1
R.findIndex(R.propEq('a', 4))(xs) // -1
```

* <span id='1851bbd48e159213882474a1a74a7715'>findLast：返回最后一个符合指定条件的成员。</span>

```javascript
var xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLast(R.propEq('a', 1))(xs) // {a: 1, b: 1}
R.findLast(R.propEq('a', 4))(xs) // undefined
```

* <span id='675faca028d8223c3e25b39800506fe6'>findLastIndex：返回最后一个符合指定条件的成员的位置。</span>

```javascript
var xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLastIndex(R.propEq('a', 1))(xs) // 1
R.findLastIndex(R.propEq('a', 4))(xs) // -1
```

* <span id='f964f9d11acb322d680641d46e2847a6'>pluck：取出数组成员的某个属性，组成一个新数组。</span>

```javascript
R.pluck('a')([{a: 1}, {a: 2}]) // [1, 2]
R.pluck(0)([[1, 2], [3, 4]]) // [1, 3]
```

* <span id='2e2e88ed4652a5c8d61791ecf1dfabdf'>project：取出数组成员的多个属性，组成一个新数组。</span>

```javascript
var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
var kids = [abby, fred];
R.project(['name', 'grade'])(kids)
// [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
```

* <span id='fc09baf2b1452d7d035492f34b129085'>transpose：将每个成员相同位置的值，组成一个新数组。</span>

```javascript
R.transpose([[1, 'a'], [2, 'b'], [3, 'c']])
// [[1, 2, 3], ['a', 'b', 'c']]

R.transpose([[1, 2, 3], ['a', 'b', 'c']])
// [[1, 'a'], [2, 'b'], [3, 'c']]

R.transpose([[10, 11], [20], [], [30, 31, 32]])
// [[10, 20, 30], [11, 31], [32]]
```

* <span id='8823a29e1ad5788ad3eee418d6b4a6cc'>mergeAll：将数组的成员合并成一个对象。</span>

```javascript
R.mergeAll([{foo:1},{bar:2},{baz:3}])
// {foo:1,bar:2,baz:3}

R.mergeAll([{foo:1},{foo:2},{bar:2}])
// {foo:2, bar:2}
```

* <span id='da54a162da5ce572460e0d45da98299c'>fromPairs：将嵌套数组转为一个对象。</span>

```javascript
R.fromPairs([['a', 1], ['b', 2], ['c', 3]])
// {a: 1, b: 2, c: 3}
```

* <span id='3ed52d06bd1b164bb47887452ec7a00f'>groupBy：将数组成员按照指定条件分组。</span>

```javascript
var byGrade = R.groupBy(function(student) {
var score = student.score;
return score < 65 ? 'F' :
score < 70 ? 'D' :
score < 80 ? 'C' :
score < 90 ? 'B' : 'A';
});
var students = [{name: 'Abby', score: 84},
{name: 'Eddy', score: 58},
// ...
{name: 'Jack', score: 69}];
byGrade(students);
// {
// 'A': [{name: 'Dianne', score: 99}],
// 'B': [{name: 'Abby', score: 84}]
// // ...,
// 'F': [{name: 'Eddy', score: 58}]
// }
```

* <span id='bf81ca0d5b4f2ff60d1e27c9c33b6436'>sortBy：根据成员的某个属性排序。</span>

```javascript
var sortByFirstItem = R.sortBy(R.prop(0));
sortByFirstItem([[-1, 1], [-2, 2], [-3, 3]])
// [[-3, 3], [-2, 2], [-1, 1]]

var sortByNameCaseInsensitive = R.sortBy(
R.compose(R.toLower, R.prop('name'))
);
var alice = {name: 'ALICE', age: 101};
var bob = {name: 'Bob', age: -10};
var clara = {name: 'clara', age: 314.159};
var people = [clara, bob, alice];
sortByNameCaseInsensitive(people)
// [alice, bob, clara]
```

### 七、对象

* <span id='05df45fa1de793ad1c0d48040ada9a64'>has: 返回一个布尔值，表示对象自身是否具有该属性。</span>

```javascript
var hasName = R.has('name')
hasName({name: 'alice'}) //=> true
hasName({name: 'bob'}) //=> true
hasName({}) //=> false

var point = {x: 0, y: 0};
var pointHas = R.has(R.__, point);
pointHas('x') // true
pointHas('y') // true
pointHas('z') // false
```

* <span id='6977cfe03f34840f7433b8c6692a70e0'>hasIn：返回一个布尔值，表示对象自身或原型链上是否具有某个属性。</span>

```javascript
function Rectangle(width, height) {
this.width = width;
this.height = height;
}
Rectangle.prototype.area = function() {
return this.width * this.height;
};

var square = new Rectangle(2, 2);
R.hasIn('width')(square) // true
R.hasIn('area')(square) // true
```

* <span id='68d8202f4eac82144eaf3342af43236b'>propEq：如果属性等于给定值，返回true。</span>

```javascript
var abby = {name: 'Abby', age: 7, hair: 'blond'};
var fred = {name: 'Fred', age: 12, hair: 'brown'};
var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
var alois = {name: 'Alois', age: 15, disposition: 'surly'};
var kids = [abby, fred, rusty, alois];
var hasBrownHair = R.propEq('hair', 'brown');
R.filter(hasBrownHair)(kids) // [fred, rusty]
```

* <span id='6a8a5c2621ac33e49b2d773addfbdf29'>whereEq：如果属性等于给定值，返回true。</span>

```javascript
var pred = R.whereEq({a: 1, b: 2});

pred({a: 1}) // false
pred({a: 1, b: 2}) // true
pred({a: 1, b: 2, c: 3}) // true
pred({a: 1, b: 1}) // false
```

* <span id='827a3f25dcaf867c9910373798e0125a'>where：如果各个属性都符合指定条件，返回true。</span>

```javascript
var pred = R.where({
a: R.equals('foo'),
b: R.complement(R.equals('bar')),
x: R.gt(__, 10),
y: R.lt(__, 20)
});

pred({a: 'foo', b: 'xxx', x: 11, y: 19}) // true
pred({a: 'xxx', b: 'xxx', x: 11, y: 19}) // false
pred({a: 'foo', b: 'bar', x: 11, y: 19}) // false
pred({a: 'foo', b: 'xxx', x: 10, y: 19}) // false
pred({a: 'foo', b: 'xxx', x: 11, y: 20}) // false
```


* <span id='438043307f20f7e18de9f7ebbc33707c'>omit：过滤指定属性。</span>

```javascript
R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4})
// {b: 2, c: 3}
```

* <span id='650e8741a33c251581fffc879b230a89'>filter：返回所有满足条件的属性</span>

```javascript
var isEven = n => n % 2 === 0;
R.filter(isEven)({a: 1, b: 2, c: 3, d: 4}) // {b: 2, d: 4}
```

* <span id='cf4654bc63eb33c528d0e5e59884d85f'>reject：返回所有不满足条件的属性</span>

```javascript
var isOdd = (n) => n % 2 === 1;
R.reject(isOdd)({a: 1, b: 2, c: 3, d: 4})
// {b: 2, d: 4}
```


* <span id='50ea8192c112a4fa9f5d29b45afe007a'>dissoc：过滤指定属性。</span>

```javascript
R.dissoc('b')({a: 1, b: 2, c: 3})
// {a: 1, c: 3}
```

* <span id='f9d8bdfc9658fd1a2c4fb0066dafb4b9'>assoc：添加或改写某个属性。</span>

```javascript
R.assoc('c', 3)({a: 1, b: 2})
// {a: 1, b: 2, c: 3}
```

* <span id='252279fc2674337bb6ac559a364abed1'>partition：根据属性值是否满足给定条件，将属性分区。</span>

```javascript
R.partition(R.contains('s'))({ a: 'sss', b: 'ttt', foo: 'bars' })
// [ { a: 'sss', foo: 'bars' }, { b: 'ttt' } ]
```

* <span id='62db53f818b50b9c4e627ccddcf57ca8'>pick：返回指定属性组成的新对象</span>

```javascript
R.pick(['a', 'd'])({a: 1, b: 2, c: 3, d: 4})
// {a: 1, d: 4}

R.pick(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4})
// {a: 1}
```

* <span id='93a50dd983f99d27e9228b6c42342e09'>pickAll：与pick类似，但会包括不存在的属性。</span>

```javascript
R.pickAll(['a', 'd'])({a: 1, b: 2, c: 3, d: 4})
// {a: 1, d: 4}

R.pickAll(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4})
// {a: 1, e: undefined, f: undefined}
```

* <span id='8692b7c2b25258f8e37c2ed4894530e7'>pickBy：返回符合条件的属性</span>

```javascript
var isUpperCase = (val, key) => key.toUpperCase() === key;
R.pickBy(isUpperCase)({a: 1, b: 2, A: 3, B: 4})
// {A: 3, B: 4}
```

* <span id='4da36d05a076c77ba916bd2ec6964fa8'>keys：返回对象自身属性的属性名组成的新数组。</span>

```javascript
R.keys({a: 1, b: 2, c: 3}) // ['a', 'b', 'c']
```

* <span id='b80b5aeea55cec641e94b5a0730ef0b0'>keysIn：返回对象自身的和继承的属性的属性名组成的新数组。</span>

```javascript
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
R.keysIn(f) // ['x', 'y']
```

* <span id='18dba895123b5d5af2d73753ce3b9c0d'>values：返回对象自身的属性的属性值组成的数组。</span>

```javascript
R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
```

* <span id='426d42b409a561ebd0c50743604ac9d3'>valuesIn：返回对象自身的和继承的属性的属性值组成的数组。</span>

```javascript
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
R.valuesIn(f) // ['X', 'Y']
```

* <span id='6d23ee1df7467492b4e888aae3829999'>invertObj：将属性值和属性名互换。如果多个属性的属性值相同，只返回最后一个属性。</span>

```javascript
var raceResultsByFirstName = {
first: 'alice',
second: 'jake',
third: 'alice',
};
R.invertObj(raceResultsByFirstName)
// {"alice": "third", "jake": "second"}
```

* <span id='e05b26f6d3bcb165186863ab344468f5'>invert：将属性值和属性名互换，每个属性值对应一个数组。</span>

```javascript
var raceResultsByFirstName = {
first: 'alice',
second: 'jake',
third: 'alice',
};
R.invert(raceResultsByFirstName)
// { 'alice': ['first', 'third'], 'jake':['second'] }
```


* <span id='b3607e8bd1ad704a2f86222cc3bb8b84'>prop：返回对象的指定属性</span>

```javascript
R.prop('x')({x: 100})
// 100

R.prop('x')({})
// undefined
```

* <span id='c91aa4db3a80a0ce52415dcbce6eb072'>map：对象的所有属性依次执行某个函数。</span>

```javascript
var double = x => x * 2;
R.map(double)({x: 1, y: 2, z: 3})
// {x: 2, y: 4, z: 6}
```

* <span id='22a6e879c7ce84949b3f38449701949f'>mapObjIndexed：与map类似，但是会额外传入属性名和整个对象。</span>

```javascript
var values = { x: 1, y: 2, z: 3 };
var prependKeyAndDouble = (num, key, obj) => key + (num * 2);

R.mapObjIndexed(prependKeyAndDouble)(values)
// { x: 'x2', y: 'y4', z: 'z6' }
```

* <span id='37a48235b2fe9ce592a058dde6133cab'>forEachObjIndexed：每个属性依次执行给定函数，给定函数的参数分别是属性值和属性名，返回原对象。</span>

```javascript
var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
R.forEachObjIndexed(printKeyConcatValue)({x: 1, y: 2}) // {x: 1, y: 2}
// logs x:1
// logs y:2
```

* <span id='ac1f0cf2aa080dfeb5da6ef5fe3ec97b'>merge：合并两个对象，如果有同名属性，后面的值会覆盖掉前面的值。</span>

```javascript
R.merge({ 'name': 'fred', 'age': 10 })({ 'age': 40 })
// { 'name': 'fred', 'age': 40 }

var resetToDefault = R.merge(R.__, {x: 0});
resetToDefault({x: 5, y: 2}) // {x: 0, y: 2}
```

* <span id='e71a5bd244dcee74089dadb0ed225303'>mergeWith：合并两个对象，如果有同名属性，会使用指定的函数处理。</span>

```javascript
R.mergeWith(
R.concat,
{ a: true, values: [10, 20] },
{ b: true, values: [15, 35] }
);
// { a: true, b: true, values: [10, 20, 15, 35] }
```

* <span id='13002dc97fcd1a2abc925282f3fd336a'>eqProps：比较两个对象的指定属性是否相等。</span>

```javascript
var o1 = { a: 1, b: 2, c: 3, d: 4 };
var o2 = { a: 10, b: 20, c: 3, d: 40 };
R.eqProps('a', o1)(o2) // false
R.eqProps('c', o1)(o2) // true
```

* <span id='d0cd71ae6aa05f14694fa7a5caeb0626'>R.evolve：对象的属性分别经过一组函数的处理，返回一个新对象。</span>

```javascript
var tomato = {
firstName: ' Tomato ',
data: {elapsed: 100, remaining: 1400},
id: 123
};
var transformations = {
firstName: R.trim,
lastName: R.trim, // 不会被调用
data: {elapsed: R.add(1), remaining: R.add(-1)}
};
R.evolve(transformations)(tomato)
// {
// firstName: 'Tomato',
// data: {elapsed: 101, remaining: 1399},
// id: 123
// }
```


* <span id='1260e9ca20b90d6c4a1b196479aade33'>path：取出数组中指定路径的值。</span>

```javascript
R.path(['a', 'b'], {a: {b: 2}}) // 2
R.path(['a', 'b'], {c: {b: 2}}) // undefined
```

* <span id='4a9d2dd59196ea38724dac8a22f92271'>pathEq：返回指定路径的值符合条件的成员</span>

```javascript
var user1 = { address: { zipCode: 90210 } };
var user2 = { address: { zipCode: 55555 } };
var user3 = { name: 'Bob' };
var users = [ user1, user2, user3 ];
var isFamous = R.pathEq(['address', 'zipCode'], 90210);
R.filter(isFamous)(users) // [ user1 ]
```

* <span id='26fcb878700f287bfc46cf3abfdc4132'>assocPath：添加或改写指定路径的属性的值。</span>

```javascript
R.assocPath(['a', 'b', 'c'], 42)({a: {b: {c: 0}}})
// {a: {b: {c: 42}}}

R.assocPath(['a', 'b', 'c'], 42)({a: 5})
// {a: {b: {c: 42}}}
```