# el-switch
> el-switch

-----------

## 1. 基本用法

<el-switch></el-switch>

```html
<el-switch></el-switch>
```

## 2. 禁用状态

<el-switch disabled></el-switch>
<el-switch disabled :value="true"></el-switch>

```html
<el-switch disabled></el-switch>

<el-switch disabled :value="true"></el-switch>
```

## 3. 自定义文字

<el-switch>
  <span slot="true">开</span>
  <span slot="false">关</span>
</el-switch>

```html
<el-switch>
  <span slot="true">开</span>
  <span slot="false">关</span>
</el-switch>
```