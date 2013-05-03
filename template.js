/**
 * 1、预编译
 * 2、不自动缓存
 * 3、实例化
 * 4、辅助函数
 */
( function ( global ) {
    global = global || this;

    var apply = function ( t, s, defaults ) {
        if ( defaults ) {
            extend( t, defaults );
        }
        if ( s && typeof s == 'object' ) {
            for ( var p in s ) {
                t[ p ] = s[ p ];
            }
        }
        return t;
    };

    /**
     * @notice 内建指令，提醒自己千万不要过度设计。用不到include等等。
     */
    var globalDirs = {
        h : { name : 'helper', dir : 'helper' }
    };

    var trimReg = /(^\s*)|(\s*$)/g;
    var trim = ''.trim ? function ( s ) {
            return s.trim(); 
        } : function ( s ) {
        return ( s || '' ).replace( trimReg, '' ); 
    };

    function Helper () {}

    apply( Helper.prototype, {
        trim : trim,
        /**
         *  @param date Date类型或毫秒数时间戳
         *  @param f 格式化字符串 如'yyyy-MM-dd', 'yyyy年MM月dd日'
         *  @return s 格式化后的字符串
         */
        dateFormat : function ( date, f ) {
            if ( {}.toString.call( date ) != '[object Date]' ) {
                date = new Date( parseInt( date ) );
            }
            var map = {
                'y+' : date.getFullYear(),
                'M+' : date.getMonth() + 1,
                'd+' : date.getDate(),
                'h+' : date.getHours(),
                'm+' : date.getMinutes(),
                's+' : date.getSeconds()
            };
            for ( var p in map ) {
                if ( new RegExp ( '(' + p + ')' ).test( f ) ) {
                    f = f.replace( RegExp.$1, ( '00' + map[ p ] ).substr( ~RegExp.$1.length + 1 ) );
                }
            }
            return f;
        },
        /**
         * @description 将秒数格式化为指定格式，如'40:23'
         * @param t 秒数
         * @param f 格式化字符串 如'mm:ss', 'mm分ss秒'
         * @return s 格式化后的字符串
         */
        timeFormat : function ( t, f ) {
            t = t / 1;
            var map = {
                'm+' : Math.floor(t / 60),
                's+' : t % 60
            };
            
            f = f.replace( /(m+)/, function ( item, $1 ) {
                var r = $1;
                var l = ( '' + map[ 'm+' ] ).length;
                if ( $1 ) {
                    if ( l > $1.length ) {
                        r = new Array( l + 1 ).join( 'm' );
                    }
                }
                return r;
            } );

            for ( var p in map ) {
                if ( new RegExp ( '(' + p + ')' ).test( f ) ) {
                    f = f.replace( RegExp.$1, ( '00' + map[ p ] ).substr( ~RegExp.$1.length + 1 ) );
                }
            }
            return f;
        },
        
        /**
         * @description 字符串截取
         * @param s {String} 要截取的字符串
         * @param limit {Number} 截取长度
         * @param isSuffix {boolean} 是否添加后缀，默认false
         * @param suffix {String} 后缀，默认'...'
         */
        truncate : function ( s, limit, isSuffix, suffix ) {
            s = s || '';
            if ( s.length <= limit ) {
                return s;
            } 

            s = s.substr( limit );
            if ( isSuffix ) {
                s = s + ( suffix || '...' );
            }
            return s;
        },
        
        /**
         * @description 将数字分组表示 如 '1234567.00' -> '1,234,567.00'
         * @param s 将分组的字符串
         * @param n n个字符分为一组, 默认是3个
         * @param splitChar 分隔字符，默认是','
         */
        numberGroup : function ( s, n, splitChar ) {
            s = s || '1234567345345.000';
            n = n || 3;
            splitChar = splitChar || ',';

            s = '' + s;

            if ( !/^(\+|-)?(\d+)(\.\d+)?$/.test( s ) ) {
                return s;
            }
            var a = RegExp.$1;
            var b = RegExp.$2;
            var c = RegExp.$3;
            var reg = new RegExp().compile( '(\\d+)(\\d{' + n + '})(' + splitChar + '|$)' );

            while ( reg.test(b) ) {
                b = b.replace(reg, '$1' + splitChar + '$2$3');
            }
            return a + b + c;
        }
    } );

    function Template ( content ) {
        this.content = content || ''; 
        this.helper = new Helper();
    }

    apply( Template, {
        render : function ( tmpl, data ) {
            return ( new Template( tmpl ) ).render( data );
        },
        registHelper : function () {
            var helper = {};
            var args = [].slice.call( arguments );
            if ( args.length == 2 && typeof args[ 0 ] == 'string' ) {
                helper[ args[ 0 ] ] = args[ 1 ];
            } else if ( args.length == '1' && typeof args[ 0 ] == 'object' ) {
                helper = args[ 0 ];
            }
            helper && apply( Helper.prototype, helper );
        }
    } );

    apply( Template.prototype, {

        version : '1.0',

        setContent : function ( content ) {
            this.fn = null;
            this.directive = null;
            this.content = content;
        },

        render : function ( data ) {
            this.compile();

            var dirs = this.directive || {}; 
            var name, dirObj;
            for ( var p in globalDirs ) {
                dirObj = globalDirs[ p ];
                name = typeof dirs[ p ] == 'undefined' ? dirObj.name
                                                : dirs[ p ];
                if ( data[ name ] ) {
                    throw new Error( '指令{ ' + name + ' }冲突...' );
                }
                data[ name ] = this[ dirObj.dir ];
            }

            var str = this.fn( data );

            for ( var p in globalDirs ) {
                dirObj = globalDirs[ p ];
                name = typeof dirs[ p ] == 'undefined' ? dirObj.name
                                                : dirs[ p ];
                delete data[ name ];
            }

            return str;
        },

        compile : function () {
            if ( !this.fn ) {
                this.directive = {};
                var tp = this;
                var content = this.content.replace(/[\r\t\n]/g, " ")
                    .replace( /<%@(.*?)%>/g, function ( match, $1 ) {
                        if ( $1 ) {
                            var match = $1.split( ':' );
                            if ( match && match.length ) {
                                tp.directive[ trim( match[ 0 ] ) ] = trim( match[ 1 ] );
                            }
                        }
                        return '';
                    }).replace(/<%!--(.*?)--%>/g, '' ).split("<%").join("\t")
                   .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                   .replace(/\t=(.*?)%>/g, "',$1,'")
                   .split("\t").join("');")
                   .split("%>").join("p.push('")
                   .split("\r").join("\\'");
                   var body = "var p = [];with(obj){p.push('" + content + "');}"
                    + "return p.join('');";
                this.fn = new Function ( 'obj', body );
            }
        },
        registHelper : function () {
            var helper = this[ globalDirs.h.dir ];
            var args = [].slice.call( arguments );
            if ( args.length == 2 && typeof args[ 0 ] == 'string' ) {
                helper[ args[ 0 ] ] = args[ 1 ];
            } else if ( args.length == '1' && typeof args[ 0 ] == 'object' ) {
                apply( helper, args[ 0 ] );
            }
        }
    } );
    
    global.Template = Template;
} )();
