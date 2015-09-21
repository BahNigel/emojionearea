(function(document, window, $, emojione) {
    'use strict';

    var default_options = {
        template          : "<editor/><filters/><tabs/>",

        dir               : "ltr",
        spellcheck        : true,
        autocomplete      : "off",
        autocorrect       : "off",
        autocapitalize    : "off",

        placeholder       : null,
        container         : null,
        hideSource        : true,
        autoHideFilters   : false,

        filters: {
            people: {
                icon: "yum",
                emoji: "grinning,grin,joy,smiley,smile,sweat_smile,laughing,innocent,smiling_imp,imp,wink,blush," +
                "relaxed,yum,relieved,heart_eyes,sunglasses,smirk,neutral_face,expressionless,unamused,sweat," +
                "pensive,confused,confounded,kissing,kissing_heart,kissing_smiling_eyes,kissing_closed_eyes," +
                "stuck_out_tongue,stuck_out_tongue_winking_eye,stuck_out_tongue_closed_eyes,disappointed,worried," +
                "angry,rage,cry,persevere,triumph,disappointed_relieved,frowning,anguished,fearful,weary," +
                "sleepy,tired_face,grimacing,sob,open_mouth,hushed,cold_sweat,scream,astonished,flushed," +
                "sleeping,dizzy_face,no_mouth,mask,slight_frown,slight_smile,smile_cat,joy_cat,smiley_cat," +
                "heart_eyes_cat,smirk_cat,kissing_cat,pouting_cat,crying_cat_face,scream_cat,footprints," +
                "bust_in_silhouette,busts_in_silhouette,levitate,spy,baby,boy,girl,man,woman,family," +
                "family_mwg,family_mwgb,family_mwbb,family_mwgg,family_wwb,family_wwg,family_wwgb,family_wwbb," +
                "family_wwgg,family_mmb,family_mmg,family_mmgb,family_mmbb,family_mmgg,couple,two_men_holding_hands," +
                "two_women_holding_hands,dancers,bride_with_veil,person_with_blond_hair,man_with_gua_pi_mao," +
                "man_with_turban,older_man,older_woman,cop,construction_worker,princess,guardsman,angel," +
                "santa,ghost,japanese_ogre,japanese_goblin,poop,skull,alien,space_invader,bow," +
                "information_desk_person,no_good,ok_woman,raising_hand,person_with_pouting_face,person_frowning," +
                "massage,haircut,couple_with_heart,couple_ww,couple_mm,couplekiss,kiss_ww,kiss_mm,raised_hands," +
                "clap,ear,eye,eyes,nose,lips,kiss,tongue,nail_care,wave,thumbsup,thumbsdown," +
                "point_up,point_up_2,point_down,point_left,point_right,ok_hand,v,punch,fist,raised_hand," +
                "muscle,open_hands,writing_hand,hand_splayed,middle_finger,vulcan,pray"
            },

            nature: {
                icon: "whale",
                emoji: "seedling,evergreen_tree,deciduous_tree,palm_tree,cactus,tulip,cherry_blossom,rose,hibiscus," +
                "sunflower,blossom,bouquet,ear_of_rice,herb,four_leaf_clover,maple_leaf,fallen_leaf,leaves," +
                "mushroom,chestnut,rat,mouse2,mouse,hamster,ox,water_buffalo,cow2,cow,tiger2,leopard," +
                "tiger,chipmunk,rabbit2,rabbit,cat2,cat,racehorse,horse,ram,sheep,goat,rooster,chicken," +
                "baby_chick,hatching_chick,hatched_chick,bird,penguin,elephant,dromedary_camel,camel,boar,pig2," +
                "pig,pig_nose,dog2,poodle,dog,wolf,bear,koala,panda_face,monkey_face,see_no_evil,hear_no_evil," +
                "speak_no_evil,monkey,dragon,dragon_face,crocodile,snake,turtle,frog,whale2,whale,dolphin," +
                "octopus,fish,tropical_fish,blowfish,shell,snail,bug,ant,bee,beetle,spider,spider_web,feet," +
                "zap,fire,crescent_moon,sunny,partly_sunny,cloud,cloud_rain,cloud_snow,cloud_lightning,cloud_tornado," +
                "droplet,sweat_drops,umbrella,fog,dash,snowflake,star2,star,stars,sunrise_over_mountains,sunrise," +
                "rainbow,ocean,volcano,milky_way,mount_fuji,japan,globe_with_meridians,earth_africa,earth_americas," +
                "earth_asia,new_moon,waxing_crescent_moon,first_quarter_moon,waxing_gibbous_moon,full_moon," +
                "waning_gibbous_moon,last_quarter_moon,waning_crescent_moon,new_moon_with_face,full_moon_with_face," +
                "first_quarter_moon_with_face,last_quarter_moon_with_face,sun_with_face,wind_blowing_face"
            },

            food_drink: {
                icon: "cherries",
                emoji: "tomato,eggplant,corn,sweet_potato,hot_pepper,grapes,melon,watermelon,tangerine,lemon," +
                "banana,pineapple,apple,green_apple,pear,peach,cherries,strawberry,hamburger,pizza,meat_on_bone," +
                "poultry_leg,rice_cracker,rice_ball,rice,curry,ramen,spaghetti,bread,fries,dango,oden,sushi," +
                "fried_shrimp,fish_cake,icecream,shaved_ice,ice_cream,doughnut,cookie,chocolate_bar,candy," +
                "lollipop,custard,honey_pot,cake,bento,stew,egg,fork_and_knife,tea,coffee,sake,wine_glass," +
                "cocktail,tropical_drink,beer,beers,baby_bottle"
            },

            celebration: {
                icon: "tada",
                emoji: "ribbon,gift,birthday,jack_o_lantern,christmas_tree,tanabata_tree,bamboo,rice_scene," +
                "fireworks,sparkler,tada,confetti_ball,balloon,dizzy,sparkles,boom,mortar_board,crown," +
                "reminder_ribbon,military_medal,dolls,flags,wind_chime,crossed_flags,izakaya_lantern,ring," +
                "heart,broken_heart,love_letter,two_hearts,revolving_hearts,heartbeat,heartpulse,sparkling_heart," +
                "cupid,gift_heart,heart_decoration,purple_heart,yellow_heart,green_heart,blue_heart"
            },

            activity: {
                icon: "trophy",
                emoji: "runner,walking,dancer,lifter,golfer,rowboat,swimmer,surfer,bath,snowboarder,ski," +
                "snowman,bicyclist,mountain_bicyclist,motorcycle,race_car,horse_racing,tent,fishing_pole_and_fish," +
                "soccer,basketball,football,baseball,tennis,rugby_football,golf,trophy,medal,running_shirt_with_sash," +
                "checkered_flag,musical_keyboard,guitar,violin,saxophone,trumpet,musical_note,notes,musical_score," +
                "headphones,microphone,performing_arts,ticket,tophat,circus_tent,clapper,film_frames,tickets," +
                "art,dart,8ball,bowling,slot_machine,game_die,video_game,flower_playing_cards,black_joker," +
                "mahjong,carousel_horse,ferris_wheel,roller_coaster"
            },

            travel: {
                icon: "rocket",
                emoji: "railway_car,mountain_railway,steam_locomotive,train,monorail,bullettrain_side," +
                "bullettrain_front,train2,metro,light_rail,station,tram,railway_track,bus,oncoming_bus," +
                "trolleybus,minibus,ambulance,fire_engine,police_car,oncoming_police_car,rotating_light,taxi," +
                "oncoming_taxi,red_car,oncoming_automobile,blue_car,truck,articulated_lorry,tractor,bike," +
                "motorway,busstop,fuelpump,construction,vertical_traffic_light,traffic_light,rocket,helicopter," +
                "airplane,airplane_small,airplane_departure,airplane_arriving,seat,anchor,ship,cruise_ship," +
                "motorboat,speedboat,sailboat,aerial_tramway,mountain_cableway,suspension_railway," +
                "passport_control,customs,baggage_claim,left_luggage,yen,euro,pound,dollar,bellhop,bed," +
                "couch,fork_knife_plate,shopping_bags,statue_of_liberty,moyai,foggy,tokyo_tower,fountain," +
                "european_castle,japanese_castle,classical_building,stadium,mountain_snow,camping,beach," +
                "desert,island,park,cityscape,city_sunset,city_dusk,night_with_stars,bridge_at_night,house," +
                "homes,house_with_garden,house_abandoned,contruction_site,office,department_store,factory," +
                "post_office,european_post_office,hospital,bank,hotel,love_hotel,wedding,church," +
                "convenience_store,school,map"
            },

            objects_symbols: {
                icon: "paperclips",
                emoji: "watch,iphone,calling,computer,desktop,keyboard,trackball,printer,alarm_clock,clock," +
                "hourglass_flowing_sand,hourglass,camera,camera_with_flash,video_camera,movie_camera,projector," +
                "tv,microphone2,level_slider,control_knobs,radio,pager,joystick,telephone_receiver,telephone," +
                "fax,minidisc,floppy_disk,cd,dvd,vhs,battery,electric_plug,bulb,flashlight,candle,satellite," +
                "satellite_orbital,credit_card,money_with_wings,moneybag,gem,closed_umbrella,pouch,purse," +
                "handbag,briefcase,school_satchel,lipstick,eyeglasses,dark_sunglasses,womans_hat,sandal," +
                "high_heel,boot,mans_shoe,athletic_shoe,bikini,dress,kimono,womans_clothes,shirt,necktie," +
                "jeans,door,shower,bathtub,toilet,barber,syringe,pill,microscope,telescope,crystal_ball," +
                "wrench,knife,dagger,nut_and_bolt,hammer,tools,oil,bomb,smoking,gun,bookmark,newspaper," +
                "newspaper2,thermometer,label,key,key2,envelope,envelope_with_arrow,incoming_envelope,email," +
                "inbox_tray,outbox_tray,package,postal_horn,postbox,mailbox_closed,mailbox,mailbox_with_no_mail," +
                "mailbox_with_mail,page_facing_up,page_with_curl,bookmark_tabs,wastebasket,notepad_spiral," +
                "chart_with_upwards_trend,chart_with_downwards_trend,bar_chart,date,calendar,calendar_spiral," +
                "ballot_box,low_brightness,high_brightness,compression,frame_photo,scroll,clipboard,book," +
                "notebook,notebook_with_decorative_cover,ledger,closed_book,green_book,blue_book,orange_book," +
                "books,card_index,dividers,card_box,link,paperclip,paperclips,pushpin,scissors," +
                "triangular_ruler,round_pushpin,straight_ruler,triangular_flag_on_post,flag_white,flag_black," +
                "hole,file_folder,open_file_folder,file_cabinet,black_nib,pencil2,pen_ballpoint,pen_fountain," +
                "paintbrush,crayon,pencil,lock_with_ink_pen,closed_lock_with_key,lock,unlock,mega,loudspeaker," +
                "speaker,sound,loud_sound,mute,zzz,bell,no_bell,cross_heavy,om_symbol,dove,thought_balloon," +
                "speech_balloon,anger_right,children_crossing,shield,mag,mag_right,speaking_head," +
                "sleeping_accommodation,no_entry_sign,no_entry,name_badge,no_pedestrians,do_not_litter," +
                "no_bicycles,non_potable_water,no_mobile_phones,underage,sparkle,eight_spoked_asterisk," +
                "negative_squared_cross_mark,white_check_mark,eight_pointed_black_star,vibration_mode," +
                "mobile_phone_off,vs,a,b,ab,cl,o2,sos,id,parking,wc,cool,free,new,ng,ok,up,atm," +
                "aries,taurus,gemini,cancer,leo,virgo,libra,scorpius,sagittarius,capricorn,aquarius," +
                "pisces,restroom,mens,womens,baby_symbol,wheelchair,potable_water,no_smoking," +
                "put_litter_in_its_place,arrow_forward,arrow_backward,arrow_up_small,arrow_down_small," +
                "fast_forward,rewind,arrow_double_up,arrow_double_down,arrow_right,arrow_left,arrow_up," +
                "arrow_down,arrow_upper_right,arrow_lower_right,arrow_lower_left,arrow_upper_left,arrow_up_down," +
                "left_right_arrow,arrows_counterclockwise,arrow_right_hook,leftwards_arrow_with_hook," +
                "arrow_heading_up,arrow_heading_down,twisted_rightwards_arrows,repeat,repeat_one,hash," +
                "zero,one,two,three,four,five,six,seven,eight,nine,keycap_ten,1234,abc,abcd,capital_abcd," +
                "information_source,signal_strength,cinema,symbols,heavy_plus_sign,heavy_minus_sign,wavy_dash," +
                "heavy_division_sign,heavy_multiplication_x,heavy_check_mark,arrows_clockwise,tm,copyright," +
                "registered,currency_exchange,heavy_dollar_sign,curly_loop,loop,part_alternation_mark," +
                "exclamation,question,grey_exclamation,grey_question,bangbang,interrobang,x,o,100,end," +
                "back,on,top,soon,cyclone,m,ophiuchus,six_pointed_star,beginner,trident,warning," +
                "hotsprings,rosette,recycle,anger,diamond_shape_with_a_dot_inside,spades,clubs,hearts," +
                "diamonds,ballot_box_with_check,white_circle,black_circle,radio_button,red_circle," +
                "large_blue_circle,small_red_triangle,small_red_triangle_down,small_orange_diamond," +
                "small_blue_diamond,large_orange_diamond,large_blue_diamond,black_small_square," +
                "white_small_square,black_large_square,white_large_square,black_medium_square,white_medium_square," +
                "black_medium_small_square,white_medium_small_square,black_square_button,white_square_button," +
                "clock1,clock2,clock3,clock4,clock5,clock6,clock7,clock8,clock9,clock10,clock11," +
                "clock12,clock130,clock230,clock330,clock430,clock530,clock630,clock730,clock830,clock930," +
                "clock1030,clock1130,clock1230"
            },

            flags: {
                icon: "triangular_flag_on_post",
                emoji: "au,at,be,br,ca,flag_cl,cn,co,dk,fi,fr,de,hk,in,flag_id,ie,il,it,jp,kr,mo," +
                "my,mx,nl,nz,no,ph,pl,pt,pr,ru,flag_sa,sg,za,es,se,ch,tr,gb,us,ae,vn,af,al,dz," +
                "ad,ao,ai,ag,ar,am,aw,ac,az,bs,bh,bd,bb,by,bz,bj,bm,bt,bo,ba,bw,bn,bg,bf,bi," +
                "kh,cm,cv,ky,cf,km,flag_cd,cg,td,cr,ci,hr,cu,cy,cz,dj,dm,do,tl,ec,eg,sv,gq,er," +
                "ee,et,fk,fo,fj,pf,ga,gm,ge,gh,gi,gr,gl,gd,gu,gt,gn,gw,gy,ht,hn,hu,is,ir,iq,jm," +
                "je,jo,kz,ke,ki,xk,kw,kg,la,lv,lb,ls,lr,ly,li,lt,lu,mk,mg,mw,mv,ml,mt,mh,mr,mu," +
                "fm,md,mc,mn,me,ms,ma,mz,mm,na,nr,np,nc,ni,ne,flag_ng,nu,kp,om,pk,pw,ps,pa,pg," +
                "py,pe,qa,ro,rw,sh,kn,lc,vc,ws,sm,st,sn,rs,sc,sl,sk,si,sb,so,lk,sd,sr,sz,sy,tw,tj," +
                "tz,th,tg,to,tt,tn,flag_tm,flag_tv,vi,ug,ua,uy,uz,vu,va,ve,wf,eh,ye,zm,zw"
            }
        }
    };

    var slice = [].slice,
        saveSelection, restoreSelection,
        emojioneList = {},
        doc = $(document),
        eventStorage = {};

    $.each(emojione.emojioneList, function(shortname, keys) {
        // fix shortnames for emojione v1.5.0
        emojioneList[shortname.replace('-', '_')] = keys;
    });

    if (window.getSelection && document.createRange) {
        saveSelection = function(containerEl) {
            var range = window.getSelection().getRangeAt(0);
            var preSelectionRange = range.cloneRange();
            preSelectionRange.selectNodeContents(containerEl);
            preSelectionRange.setEnd(range.startContainer, range.startOffset);
            var start = preSelectionRange.toString().length;

            return {
                start: start,
                end: start + textFromHtml($("<div/>").append(range.extractContents()).html()).length
            };
        };

        restoreSelection = function(containerEl, savedSel) {
            var charIndex = 0, range = document.createRange();
            range.setStart(containerEl, 0);
            range.collapse(true);
            var nodeStack = [containerEl], node, foundStart = false, stop = false;

            while (!stop && (node = nodeStack.pop())) {
                if (node.nodeType == 3) {
                    var nextCharIndex = charIndex + node.length;
                    if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                        range.setStart(node, savedSel.start - charIndex);
                        foundStart = true;
                    }
                    if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                        range.setEnd(node, savedSel.end - charIndex);
                        stop = true;
                    }
                    charIndex = nextCharIndex;
                } else {
                    var i = node.childNodes.length;
                    while (i--) {
                        nodeStack.push(node.childNodes[i]);
                    }
                }
            }

            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    } else if (document.selection && document.body.createTextRange) {
        saveSelection = function(containerEl) {
            var selectedTextRange = document.selection.createRange();
            var preSelectionTextRange = document.body.createTextRange();
            preSelectionTextRange.moveToElementText(containerEl);
            preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);
            var start = preSelectionTextRange.text.length;

            return {
                start: start,
                end: start + selectedTextRange.text.length
            }
        };

        restoreSelection = function(containerEl, savedSel) {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(containerEl);
            textRange.collapse(true);
            textRange.moveEnd("character", savedSel.end);
            textRange.moveStart("character", savedSel.start);
            textRange.select();
        };
    }

    function pasteHtmlAtCaret(html) {
        var sel, range;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();

                // Range.createContextualFragment() would be useful here but is
                // only relatively recently standardized and is not supported in
                // some browsers (IE9, for one)
                var el = document.createElement("div");
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ( (node = el.firstChild) ) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else if (document.selection && document.selection.type != "Control") {
            // IE < 9
            document.selection.createRange().pasteHTML(html);
        }
    }

    function time() {
        return (new Date().getTime());
    }

    var EmojioneArea = function(element, options) {
        this.id = time();
        init.apply(this, [element, options]);
    };

    EmojioneArea.prototype.on = function(events, handler) {
        var self = this;
        if (!!events && $.isFunction(handler)) {
            $.each(events.toLowerCase().split(' '), function(i, event) {
                if (!eventStorage[self.id][event]) {
                    eventStorage[self.id][event] = [];
                }
                eventStorage[self.id][event].push(handler);
            });
        }
        return self;
    };

    EmojioneArea.prototype.off = function(events, handler) {
        var self = this,
            // disabling turn off the system events
            system = /^@/;
        if (!!events) {
            if ($.isFunction(handler)) {
                $.each(events.toLowerCase().split(' '), function(i, event) {
                    if (!!eventStorage[self.id][event] && !system.test(event)) {
                        $.each(eventStorage[self.id][event], function(j, fn) {
                            if (fn === handler) {
                                eventStorage[self.id][event] = eventStorage[self.id][event].splice(j, 1);
                            }
                        });
                    }
                });
            } else {
                $.each(events.split(' '), function(i, event) {
                    if (!system.test(event)) {
                        eventStorage[self.id][event] = [];
                    }
                });
            }
        }
        return self;
    };

    function trigger(events) {
        var self = this, result = true, args;
        if (!!events) {
            args = slice.call(arguments, 1);
            $.each(events.toLowerCase().split(' '), function(i, event) {
                for (var j=0; j<=1; j++) {
                    var _event = j==0 ? '@' + event : event;
                    if (!!eventStorage[self.id][_event] && !!eventStorage[self.id][_event].length) {
                        $.each(eventStorage[self.id][_event], function (i, fn) {
                            return result = fn.apply(self, args) !== false;
                        });
                    }
                    if (!result) {
                        break;
                    }
                }
                return result;
            });
        }
        return result;
    }

    function getTarget(event, callerEvent) {
        return $(callerEvent.currentTarget);
    };

    function attach(self, element, events, target) {
        target = target || getTarget;

        function attachEvents(element, event, handler) {
            element.on(event, function() {
                var _target = $.isFunction(target) ? target.apply(self, [event].concat(slice.call(arguments))) : target;
                if (!!_target) {
                    trigger.apply(self, [handler].concat([_target]).concat(slice.call(arguments)));
                }
            });
        }

        function attachElement(element) {
            if ((typeof events).toLowerCase() === "string") {
                attachEvents(element, events, events);
            } else {
                $.each(events, function(event, handler) {
                    attachEvents(element, $.isArray(events) ? handler : event, handler);
                });
            }
        }

        if ($.isArray(element)) {
            $.each(element, function(i, el) {
                attachElement($(el));
            });
        } else {
            attachElement(element);
        }
    }

    function htmlFromText(str) {
        return unicodeToImage(str
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/(?:\r\n|\r|\n)/g, '\n')
            .replace(/(\n+)/g, '<div>$1</div>')
            .replace(/\n/g, '<br/>')
            .replace(/<br\/><\/div>/g, '</div>'))
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
            .replace(/  /g, '&nbsp;&nbsp;');
    }

    function textFromHtml(str) {
        return str
            .replace(/<img[^>]*alt="([^"]+)"[^>]*>/ig, '$1')
            .replace(/\n|\r/g, '')
            .replace(/<br[^>]*>/ig, '\n')
            .replace(/(?:<(?:div|p|ol|ul|li|pre|code|object)[^>]*>)+/ig, '<div>')
            .replace(/(?:<\/(?:div|p|ol|ul|li|pre|code|object)>)+/ig, '</div>')
            .replace(/\n<div><\/div>/ig, '\n')
            .replace(/<div><\/div>\n/ig, '\n')
            .replace(/(?:<div>)+<\/div>/ig, '\n')
            .replace(/([^\n])<\/div><div>/ig, '$1\n')
            .replace(/(?:<\/div>)+/ig, '</div>')
            .replace(/([^\n])<\/div>([^\n])/ig, '$1\n$2')
            .replace(/<\/div>/ig, '')
            .replace(/([^\n])<div>/ig, '$1\n')
            .replace(/\n<div>/ig, '\n')
            .replace(/<div>\n/ig, '\n\n')
            .replace(/<(?:[^>]+)?>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/\x20\x20/g, '&nbsp; ')
            .replace(/\x20\x20/g, ' &nbsp;');
    }

    EmojioneArea.prototype.setText = function(str, noChangeEvent) {
        var self = this;
        self.editor.html('<div class="placeholder-fix">' + htmlFromText(str) + '</div>');
        if (!!self.placeholder) {
            self.editor.children(".placeholder-fix:first").attr("placeholder", self.placeholder);
        }
        self.content = self.editor.html();
        if (!!noChangeEvent) {
            trigger.apply(self, ['change', self.content]);
        }
    }

    EmojioneArea.prototype.getText = function() {
        return textFromHtml(this.editor.html());
    }

    function unicodeToImage(str) {
        return str.replace(new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+
            emojione.unicodeRegexp+")", "gi"),function(unicodeChar) {
            if((typeof unicodeChar === 'undefined') || (unicodeChar === '') || (!(unicodeChar in emojione.jsecapeMap))) {
                return unicodeChar;
            } else {
                var unicode = emojione.jsecapeMap[unicodeChar],
                    alt = emojione.convert(unicode);

                return '<img class="emojione" alt="'+alt+'" src="'+emojione.imagePathPNG+unicode+'.png'+emojione.cacheBustParam+'"/>';
            }
        });
    }

    function shortnameTo(str, template) {
        return str.replace(/:?[\w_]+:?,?/g, function(shortname) {
            shortname = ":" + shortname.replace(/,$/,'').replace(/:$/,'').replace(/^:/,'') + ":";
            if (!(shortname in emojioneList)) {
                return shortname;
            } else {
                var unicode = emojioneList[shortname][emojioneList[shortname].length-1].toUpperCase(),
                    alt = emojione.convert(unicode);
                return template
                    .replace('{shortname}', shortname)
                    .replace('{imagePng}', emojione.imagePathPNG+unicode+'.png'+emojione.cacheBustParam)
                    .replace('{unicode}', unicode)
                    .replace('{alt}', alt);
            }
        });
    };

    function init(source, options) {
        options = $.extend({}, default_options, options);

        var self = this, editor, filters, tabs, filtersArrowLeft, filtersArrowRight,
            filterMassive, filtersWidth, scrollLeft = 0, scrollAreaWidth = 0, overflow, filterWidth,
            sourceValFunc = source.is("TEXTAREA") || source.is("INPUT") ? "val" : "text",
            app = options.template,
            stayFocused = false,
            container = !!options.container ? $(options.container) : false,
            resizeHandler = function() {
                var width = filters.width();
                if (width !== filtersWidth) {
                    filtersWidth = width;
                    trigger.apply(self, ['@resize', width]);
                }
            }, resizeHandlerID;

        self.placeholder = options["placeholder"] || source.data("placeholder") || source.attr("placeholder") || "";

        eventStorage[self.id] = {};

        // parse template
        for (var el = ["editor", "filters", "tabs"], i=0; i<3; i++) {
            app = app.replace(new RegExp('<' + el[i] + '/?>' ,'i'), '<div class="emojionearea-' + el[i] + '"></div>');
        }

        // wrap application
        app = $('<div>' + app + '</div>')
            .addClass("emojionearea")
            .attr("role", "application");

        // set editor attributes
        this.editor = app.find(".emojionearea-editor")
            .attr("contenteditable", "true")
            .attr("placeholder", self.placeholder)
            .attr('tabindex', 0);

        editor = self.editor;

        for (var attr = ["dir", "spellcheck", "autocomplete", "autocorrect", "autocapitalize"], i=0; i<5; i++) {
            editor.attr(attr[i], options[attr[i]]);
        }

        // filters
        filters = app.find(".emojionearea-filters");
        if (options.autoHideFilters) {
            filters.hide();
        }

        // tabs
        tabs = app.find(".emojionearea-tabs");

        // parse icons
        $.each(options.filters, function(filter, params) {
            // filters
            $("<span/>")
                .wrapInner(shortnameTo(params.icon, '<span class="emojione-{unicode}">{alt}</span>'))
                .addClass('emojionearea-filter')
                .attr("data-filter", filter)
                .attr("role", "button")
                .appendTo(filters);

            // tabs
            $("<div/>")
                .wrapInner(shortnameTo(params.emoji,
                    '<span class="emojibtn"><span class="emojione-{unicode}" data-shortname="{shortname}">{alt}</span></span>'))
                .addClass('emojionearea-tab')
                .addClass('emojionearea-tab-' + filter)
                .hide()
                .appendTo(tabs);
        });

        filters.wrapInner('<div class="emojionearea-filters-overflow"/>');
        filtersArrowLeft = $('<i class="emojionearea-filter-arrow-left"/>').appendTo(filters);
        filtersArrowRight = $('<i class="emojionearea-filter-arrow-right"/>').appendTo(filters);

        filterMassive = filters.find(".emojionearea-filter");
        overflow = filters.children(".emojionearea-filters-overflow");

        // show application
        if (!!container) {
            container.replaceWith(app);
        } else {
            app.insertAfter(source);
        }

        if (options.hideSource) {
            source.hide();
        }

        self.setText(source[sourceValFunc]());

        // attach events
        attach(self, [filters, tabs], {mousedown: "area.mousedown"}, editor);
        attach(self, editor, "paste", editor);
        attach(self, editor, ["focus", "blur"], function() { return !!stayFocused ? false : editor; });
        attach(self, [editor, filters, tabs], ["mousedown", "mouseup", "click", "keyup", "keydown"], editor);
        attach(self, filters.find(".emojionearea-filter"), {click: "filter.click"});
        attach(self, tabs.find(".emojibtn"), {click: "emojibtn.click"});
        attach(self, filtersArrowLeft, {click: "arrowLeft.click"});
        attach(self, filtersArrowRight, {click: "arrowRight.click"});

        function scrollFilters() {
            if (!scrollAreaWidth) {
                $.each(filterMassive, function (i, e) {
                    scrollAreaWidth += $(e).outerWidth(true);
                });
                filterWidth = filterMassive.eq(0).outerWidth(true);
            }
            if (scrollAreaWidth > filtersWidth) {
                filtersArrowRight.addClass("active");
                filtersArrowLeft.addClass("active");

                if (scrollLeft + scrollAreaWidth <= filtersWidth) {
                    scrollLeft = filtersWidth - scrollAreaWidth;
                    filtersArrowRight.removeClass("active");
                } else if (scrollLeft >= 0) {
                    scrollLeft = 0;
                    filtersArrowLeft.removeClass("active");
                }
                overflow.css("left", scrollLeft);
            } else {
                if (scrollLeft !== 0) {
                    scrollLeft = 0;
                    overflow.css("left", scrollLeft);
                }
                filtersArrowRight.removeClass("active");
                filtersArrowLeft.removeClass("active");
            }
        }


        self.on("@filter.click", function(element) {
                if (element.is(".active")) {
                    element.removeClass("active");
                    tabs.children().hide();
                } else {
                    filterMassive.filter(".active").removeClass("active");
                    element.addClass("active");
                    tabs.children().hide()
                        .filter(".emojionearea-tab-" + element.data("filter")).show();
                }
            })

            .on("@resize", function() {
                scrollFilters();
            })

            .on("@arrowLeft.click", function() {
                scrollLeft += filterWidth;
                scrollFilters();
            })

            .on("@arrowRight.click", function() {
                scrollLeft -= filterWidth;
                scrollFilters();
            })

            .on("@paste", function(element) {
                stayFocused = true;
                pasteHtmlAtCaret('<span>&nbsp;</span>');

                var sel = saveSelection(element[0]),
                    docScrollTop = doc.scrollTop(),
                    editorScrollTop = element.scrollTop(),
                    clipboard = $("<div/>")
                        .appendTo($("BODY"))
                        .attr("contenteditable", "true")
                        .attr("tabindex", "0")
                        .css({position: "fixed", left: "-9999px", width: "1px", height: "1px", top: 10})
                        .focus();

                doc.scrollTop(docScrollTop);
                element.removeAttr("contenteditable");

                window.setTimeout(function() {
                    var UID = "caret-" + time();
                    element.attr("contenteditable", "true").focus();
                    restoreSelection(element[0], sel);
                    pasteHtmlAtCaret(htmlFromText(textFromHtml(clipboard.html().replace(/\r\n|\n|\r/g, '<br>'))));
                    clipboard.remove();
                    pasteHtmlAtCaret('<span id="' + UID +'"></span>');
                    doc.scrollTop(docScrollTop);
                    element.scrollTop(editorScrollTop);
                    var caret = $("#" + UID),
                        top = caret.offset().top - element.offset().top,
                        height = element.height();
                    if (editorScrollTop + top >= height || editorScrollTop > top) {
                        element.scrollTop(editorScrollTop + top - 2 * height/3);
                    }
                    caret.remove();
                    stayFocused = false;
                }, 200);
            })

            .on("@emojibtn.click", function(element) {
                saveSelection(editor[0]);
                pasteHtmlAtCaret(shortnameTo(element.children("span").data("shortname"),
                    '<img class="emojione" alt="{alt}" src="{imagePng}"/>'));
            })

            .on("@area.mousedown", function(element, event) {
                if (!options.autoHideFilters && !app.is(".focused")) {
                    element.focus();
                }
                event.preventDefault();
                return false;
            })

            .on("@change", function() {
                var html = editor.html(), self = this;
                // clear input, fix: chrome add <br> on contenteditable is empty
                if (/^<br[^>]*>$/.test(html.replace(/<\/?div[^>]*>/g, ''))) {
                    self.setText('', true);
                }
                source[sourceValFunc](self.getText());
            })

            .on("@focus", function() {
                resizeHandler();
                scrollFilters();
                resizeHandlerID = window.setInterval(resizeHandler, 500);
                app.addClass("focused");
                if (options.autoHideFilters) {
                    filters.slideDown(400);
                }
            })

            .on("@blur", function(element) {
                app.removeClass("focused");
                window.clearInterval(resizeHandlerID);
                if (options.autoHideFilters) {
                    filters.slideUp(400);
                }
                filterMassive.filter(".active").removeClass("active");
                tabs.children().hide();
                var content = element.html();
                if (self.content !== content) {
                    self.content = content;
                    trigger.apply(self, ['change', self.content]);
                }
            });
    };


    $.fn.emojioneArea = function(options) {
        return this.each(function() {
            if (!!this.emojioneArea) return this.emojioneArea;
            return this.emojioneArea = new EmojioneArea($(this), options);
        });
    };

}) (document, window, jQuery, emojione);