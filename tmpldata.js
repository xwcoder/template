    var html1 = '<ul class="cfix">'
            + '<%@ h:helper %>'
            + '<% var v, t; %>'
            + '<% for ( var i = 0, len = videos.length; i < len; i++ ) {'
                + 'v = videos[ i ];'
                + 'if ( !v.url || !v.title ) { continue; } '
                + 'if ( v.url.indexOf( "#" ) == "-1" && v.status != 2 ) {'
                    + 'v.url = v.url + "#" + v.t;'
                + '}'
            + '%>'
                + '<li vid="<%= v.vid %>" pid="<%= v.sid %>" class="his-item">'
                + '<%!-- 注释:不是正在播放--%>'
                + '<% if( !v.isPlaying ) { %>'
                    + '<a target="_blank" href="<%= v.url %>" title="<%= v.title %>"><%= helper.truncate( v.title, 8, true ) %></a>'
                    + '<p class="info"> <%= helper.timeFormat( v.t, "mm:ss" ) %></p>'
                    + '<p class="action">'
                        + '<span class="hd-icoDel r his-btn" action="del" title="删除"></span>'
                        + '<a class="c-red" target="_blank" href="<%=v.url%>"><%= v.status == 2 ? "重新播放": "继续播放" %></a>'
                        + '<% if ( v.nextUrl ) { %>'
                        + ' | <a class="c-red" target="_blank" href="<%= v.nextUrl %>">播放下集</a>'
                        + '<% } %>'
                    + '</p>'
                + '<% } else { %>'
                    + '<span title="<%= v.title %>"></span>'
                    + '<p class="info">正在播放</p>'
                    + '<p class="action">'
                        + '<span class="hd-icoDel r his-btn" action="del" title="删除"></span>'
                        + '<% if ( v.nextUrl ) { %>'
                        + ' | <a class="c-red" target="_blank" href="<%= v.nextUrl %>">播放下集</a>'
                        + '<% } %>'
                    + '</p>'
                + '<% } %>'
                + '</li>'
            + '<% } %>'
            + '</ul>';

    var html2 = '<ul class="cfix">'
            + '<%@ h:helper %>'
            + '<% var v, t; %>'
            + '<% for ( var i = 0, len = videos.length; i < len; i++ ) {'
                + 'v = videos[ i ];'
                + 'if ( !v.url || !v.title ) { continue; } '
                + 'if ( v.url.indexOf( "#" ) == "-1" && v.status != 2 ) {'
                    + 'v.url = v.url + "#" + v.t;'
                + '}'
            + '%>'
                + '<li vid="<%= v.vid %>" pid="<%= v.sid %>" class="his-item">'
                + '<%!-- 注释:不是正在播放--%>'
                + '<% if( !v.isPlaying ) { %>'
                    + '<a target="_blank" href="<%= v.url %>" title="<%= v.title %>"><%= helper.addAdmin( helper.truncate( v.title, 8, true ) ) %></a>'
                    + '<p class="info"> <%= helper.timeFormat( v.t, "mm:ss" ) %></p>'
                    + '<p class="action">'
                        + '<span class="hd-icoDel r his-btn" action="del" title="删除"></span>'
                        + '<a class="c-red" target="_blank" href="<%=v.url%>"><%= v.status == 2 ? "重新播放": "继续播放" %></a>'
                        + '<% if ( v.nextUrl ) { %>'
                        + ' | <a class="c-red" target="_blank" href="<%= v.nextUrl %>">播放下集</a>'
                        + '<% } %>'
                    + '</p>'
                + '<% } else { %>'
                    + '<span title="<%= v.title %>"></span>'
                    + '<p class="info">正在播放</p>'
                    + '<p class="action">'
                        + '<span class="hd-icoDel r his-btn" action="del" title="删除"></span>'
                        + '<% if ( v.nextUrl ) { %>'
                        + ' | <a class="c-red" target="_blank" href="<%= v.nextUrl %>">播放下集</a>'
                        + '<% } %>'
                    + '</p>'
                + '<% } %>'
                + '</li>'
            + '<% } %>'
            + '</ul>';
    var vData = {
    videos: [ {
        hid: 8387470545,
        title: "《非你莫属》20130430 外国留学生专场",
        sid: 1000650,
        url: "http://tv.sohu.com/20130430/n374483495.shtml",
        status: 1,
        vid: 1115298,
        t: 360,
        channel: "259",
        m3u8: "http://hot.vrs.sohu.com/ipad1115298.m3u8",
        nextUrl: "",
        nextVid: "",
        cid: 7,
        client: 1,
        tvLength: "4401",
        version: "",
        mobileUrl: "http://data.vod.itc.cn/tv/00000011/20130430/89eaa557-9452-4a2d-ba8f-278457edb88aV10.mp4?new=/220/26/34Ypifb9Lj3Uz13u8AWUP6.mp4",
        m3u8High: "",
        m3u8Super: "",
        albumTitle: "非你莫属",
        pic: "http://photocdn.sohu.com/20111031/vrsab_ver1000650.jpg",
        tvBigPic: "http://photocdn.sohu.com/20111114/vrsab_hor1000650.jpg",
        tvSmallPic: "http://photocdn.sohu.com/20111114/vrsas_hor1000650.jpg",
        tvHorBigPic: "http://photocdn.sohu.com/20111031/vrsab_ver1000650.jpg",
        tvHorSmallPic: "http://photocdn.sohu.com/20111114/vrsas_hor1000650.jpg",
        tvVerBigPic: "http://photocdn.sohu.com/20111031/vrsab_ver1000650.jpg",
        tvVerSmallPic: "http://photocdn.sohu.com/20111031/vrsas_ver1000650.jpg",
        tvIsFee: "",
        viewTime: "2013-05-02 23:13:26"
    }, {
        hid: 8387218871,
        title: "20130502 我的极品是前任 佟大为片花",
        sid: 5244019,
        url: "http://tv.sohu.com/20130501/n374523581.shtml",
        status: 1,
        vid: 1116083,
        t: 5,
        channel: "2",
        m3u8: "http://hot.vrs.sohu.com/ipad1116083.m3u8",
        nextUrl: "",
        nextVid: "",
        cid: 2,
        client: 1,
        tvLength: "61",
        version: "",
        mobileUrl: "http://data.vod.itc.cn/tv/00000011/20130501/b4ce8611-b870-4c8b-8c3a-a60b0b3ba618V10.mp4?new=/179/48/QAQ5TUsEL37H2hDf97M2E1.mp4",
        m3u8High: "http://hot.vrs.sohu.com/ipad1116084.m3u8",
        m3u8Super: "http://hot.vrs.sohu.com/ipad1116085.m3u8",
        albumTitle: "我的极品是前任片花",
        pic: "http://photocdn.sohu.com/20130409/vrsab_ver5244019.jpg",
        tvBigPic: "http://photocdn.sohu.com/20130409/vrsab_hor5244019.jpg",
        tvSmallPic: "http://photocdn.sohu.com/20130409/vrsas_hor5244019.jpg",
        tvHorBigPic: "http://photocdn.sohu.com/20130409/vrsab_ver5244019.jpg",
        tvHorSmallPic: "http://photocdn.sohu.com/20130409/vrsas_hor5244019.jpg",
        tvVerBigPic: "http://photocdn.sohu.com/20130409/vrsab_ver5244019.jpg",
        tvVerSmallPic: "http://photocdn.sohu.com/20130409/vrsas_ver5244019.jpg",
        tvIsFee: "",
        viewTime: "2013-05-02 23:05:42"
    }, {
        hid: 8381275572,
        title: "20130116 屌丝男士贺岁版",
        sid: 5081732,
        url: "http://tv.sohu.com/20130116/n363557487.shtml",
        status: 1,
        vid: 940087,
        t: 840,
        channel: "7",
        m3u8: "http://hot.vrs.sohu.com/ipad940087.m3u8",
        nextUrl: "",
        nextVid: "",
        cid: 2,
        client: 1,
        tvLength: "995",
        version: "",
        mobileUrl: "http://data.vod.itc.cn/tv/00000011/20130116/11f0c3f1-3241-41cf-b25d-c443ee9d77d2V10.mp4?new=/123/211/CH0GVwysNaHDGlvkLD77O3.mp4",
        m3u8High: "http://hot.vrs.sohu.com/ipad940088.m3u8",
        m3u8Super: "http://hot.vrs.sohu.com/ipad940089.m3u8",
        albumTitle: "屌丝男士",
        pic: "http://photocdn.sohu.com/20120926/vrsab_ver5081732.jpg",
        tvBigPic: "http://photocdn.sohu.com/20120926/vrsab_hor5081732.jpg",
        tvSmallPic: "http://photocdn.sohu.com/20120926/vrsas_hor5081732.jpg",
        tvHorBigPic: "http://photocdn.sohu.com/20120926/vrsab_ver5081732.jpg",
        tvHorSmallPic: "http://photocdn.sohu.com/20120926/vrsas_hor5081732.jpg",
        tvVerBigPic: "http://photocdn.sohu.com/20120926/vrsab_ver5081732.jpg",
        tvVerSmallPic: "http://photocdn.sohu.com/20120926/vrsas_ver5081732.jpg",
        tvIsFee: "",
        viewTime: "2013-05-02 20:37:20"
    }, {
        hid: 8380729046,
        title: "《中国好声音第二季独家策划》韩寒弃笔进歌坛",
        sid: 5206418,
        url: "http://tv.sohu.com/20130502/n374553586.shtml",
        status: 1,
        vid: 1116008,
        t: 120,
        channel: "23",
        m3u8: "http://hot.vrs.sohu.com/ipad1116008.m3u8",
        nextUrl: "",
        nextVid: "",
        cid: 7,
        client: 1,
        tvLength: "980",
        version: "",
        mobileUrl: "http://data.vod.itc.cn/tv/00000011/20130501/e0628421-33c9-48c9-a31a-40280161086fV10.mp4?new=/61/184/QHPprVSv6zq8sWxwgnvOS4.mp4",
        m3u8High: "",
        m3u8Super: "http://hot.vrs.sohu.com/ipad1116009.m3u8",
        albumTitle: "中国好声音第二季独家策划",
        pic: "http://photocdn.sohu.com/20130329/vrsab_ver5206418.jpg",
        tvBigPic: "http://photocdn.sohu.com/20130329/vrsab_hor5206418.jpg",
        tvSmallPic: "http://photocdn.sohu.com/20130329/vrsas_hor5206418.jpg",
        tvHorBigPic: "http://photocdn.sohu.com/20130329/vrsab_ver5206418.jpg",
        tvHorSmallPic: "http://photocdn.sohu.com/20130329/vrsas_hor5206418.jpg",
        tvVerBigPic: "http://photocdn.sohu.com/20130329/vrsab_ver5206418.jpg",
        tvVerSmallPic: "http://photocdn.sohu.com/20130329/vrsas_ver5206418.jpg",
        tvIsFee: "",
        viewTime: "2013-05-02 20:23:01"
    }, {
        hid: 8380644919,
        title: "《大鹏嘚吧嘚》476期：周秀娜深圳巧遇幼时神秘同窗",
        sid: 1411,
        url: "http://tv.sohu.com/20130502/n374554420.shtml",
        status: 1,
        vid: 1116328,
        t: 1440,
        channel: "476",
        m3u8: "http://hot.vrs.sohu.com/ipad1116328.m3u8",
        nextUrl: "",
        nextVid: "",
        cid: 7,
        client: 1,
        tvLength: "1500",
        version: "",
        mobileUrl: "http://data.vod.itc.cn/tv/00000011/20130502/5ef44d9a-c653-4052-9eae-51398ce2f1a4V10.mp4?new=/68/83/nyEQ3z1PqjVP4I73sbbfX5.mp4",
        m3u8High: "",
        m3u8Super: "http://hot.vrs.sohu.com/ipad1116329.m3u8",
        albumTitle: "大鹏嘚吧嘚",
        pic: "http://photocdn.sohu.com/20111130/vrsab_ver1411.jpg",
        tvBigPic: "http://photocdn.sohu.com/20120928/vrsab_hor1411.jpg",
        tvSmallPic: "http://photocdn.sohu.com/20120928/vrsas_hor1411.jpg",
        tvHorBigPic: "http://photocdn.sohu.com/20111130/vrsab_ver1411.jpg",
        tvHorSmallPic: "http://photocdn.sohu.com/20120928/vrsas_hor1411.jpg",
        tvVerBigPic: "http://photocdn.sohu.com/20111130/vrsab_ver1411.jpg",
        tvVerSmallPic: "http://photocdn.sohu.com/20111130/vrsas_ver1411.jpg",
        tvIsFee: "",
        viewTime: "2013-05-02 20:20:47"
    } ] };
