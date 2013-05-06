template
========

一个简单的前端模板引擎

## 简介 ##
一个简单的前端模板引擎，基于John Resig的[Micro-Templating](http://ejohn.org/blog/javascript-micro-templating/)构建。

    <% logic %>
    <%= 输出 %>

区别如下：

1、去掉自动缓存，避免不必要的存储消耗。将自动缓存功能通过实例化的方式交给使用者:
    var render = new Template( tmpl );
同时也提供了快捷方式渲染方式:
    Template.render( tmpl, data );

2、支持模板注释和指令。都采用jsp的语法, 注释：&lt;%!-- 注释 --%&gt;, 指令:&lt;%@ h:helper %&gt;。   
目前只支持一条指令:
    h:{name} //辅助类

3、支持注册辅助函数。针对当前引擎实例：
    render.registHelper();
针对全局：
    Template.registHelper();

## API ##

### new Template() ###
    var render = new Template( tmpl );

构造函数。   
tmpl:{String} 模板字符串，可选。

### render.setContent() ###
    render.setContent( tmpl);

设置模板字符串。   
tmpl:{String} 模板字符串，可选。   

### render.compile() ###
    render.compile();

编译。

### render.render() ###
    render.render( data );

使用给定数据渲染。     
data: {Object} 用于渲染的数据。    

### render.registHelper() ###
    render.registHelper( name, func );

注册辅助功能。     
name:{String} 功能名称。   
func:{Object|Function} 功能。   

### render.registHelper() ###
    var funcs = { name : func }; 
    render.registHelper( funcs );

注册辅助功能。   
funcs: {Object。   

### Template.render( tmpl, data ) ###
    Template.render( tmpl, data );

快捷方式。
tmpl:{String} 模板字符串    
data:{Object} 渲染数据   

### Template.registHelper() ###
    Template.registHelper( name, func );

全局注册辅助功能。   
name:{String} 功能名称。   
func:{Object|Function} 功能。   

### Template.registHelper() ###
    var funcs = { name : func }; 
    Template.registHelper( funcs );

全局注册辅助功能。   
funcs: {Object}   

## 指令 ##
目前只支持一条指令，即辅助功能: &lt;%@ h:helper %&gt;

h: 辅助功能命名，默认是helper。模板中使用:
    <p class="info"> <%= helper.timeFormat( v.t, "mm:ss" ) %></p>

## 辅助功能 ##
封装了少量的常用功能。

### trim ###
    helper.trim( s );

删除字符串前后空格。

### dateFormat ###
    helper.dateFormat( date, f );

日期格式化。   
date:{Date|Number|String}   
f:{String} 格式样式，如'yy-MM-dd', 'yyyy年MM月dd日'   

### timeFormat ###
    helper.timeFormat( t, f );

时间格式化。(主要用于视频时间)   
t:{Number|String} 秒数。   
f:{String} 格式样式，如'mm:ss', 'mm分ss秒'

### truncate
    helper.truncate( s, limit,  isSuffix, suffix );

字符串截取。   
s:{String} 要截取的字符串   
limit:{Number} 截取的长度   
isSuffix:{Boolean} 可选，默认false。是否需要后缀   
suffix:{String} 可选，默认是'...'。后缀

#### numberGroup ####
    helper.numberGroup( s, n, splitChar );

分隔字符串/字符串。例如货币的表示方式 '1234567' -> '1,234,567'   
s:{String|Number} 原始数据   
n:{Number} 可选，默认是3。n个一组   
splitChar:{String} 可选，默认是','。用于分隔的字符

#### escapeXSS ####
    helper.escapeXSS( s );

防止XSS攻击，对'<' 和 '>' 进行html转义。
s:{String} 原始数据   

## License ##

All directories and files are MIT Licensed.
