export default function (context) {
    if (process.server) {
        let userAgent = context.req.headers['user-agent']
        context.isMobile = /mobile/i.test(userAgent)
        console.log("SWITCH JS ( { isMobile } )", context.isMobile);
        // console.log(context, "switch store");
        // console.log(context.route.path, "context SERVER PATH");
        // getting current path to redirect from mobile to web or visa versa
        // let path = filterPath(context.route.path);
        if (context.isMobile) {
            context.redirect('/mHome');
        } else {
            context.redirect('/home');
        }
        // console.log(path, "filtered server path");
    } else {
        // console.log(context.route.path, "context CLIENT PATH");
        // console.log(context.$vuetify.breakpoint.width, "context WIDTH CLIENT PATH");
        // console.log(context.$vuetify.breakpoint.mobile, "context Mobile CLIENT PATH");
        console.log("SWITCH JS ( { Vuetify BreakPoint Width } )", context.$vuetify.breakpoint.width);
        console.log("SWITCH JS ( { Vuetify BreakPoint Mobile } )", context.$vuetify.breakpoint.mobile);

        // let path = filterPath(context.route.path);
        if (context.$vuetify.breakpoint.width < 769) {
            context.redirect('/mHome');
        } else {
            context.redirect('/home');
        }
        // console.log(path, "filtered client path");
        // console.log(context, "context CLIENT");
        // console.log(context.store.getters["getIsMobile"], "context getIsMobile CLIENT");
    }

    function filterPath(val) {
        console.log(val, "val passed");
        function getIndex(str, substr, ind) {
            var Len = str.length,
                i = -1;
            while (ind-- && i++ < Len) {
                i = str.indexOf(substr, i);
                if (i < 0) break;
            }
            return i;
        }
        //getIndex(string, searchString, occurrence);
        var ind = getIndex(val, "/", 2);
        if (ind < 0) return val;
        console.log(ind, "show");
        return val.substr(0, ind);
    }
}

